from fastapi import FastAPI, HTTPException, Depends, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from datetime import datetime
import sqlite3
import os
import sys
import numpy as np
import soundfile as sf
import torch
from db import init_db, get_db

# Add IndicF5 to path
indic_f5_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "IndicF5"))
sys.path.insert(0, indic_f5_path)

app = FastAPI(title="ACB Chatbot Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create directories for audio files
os.makedirs("uploads", exist_ok=True)
os.makedirs("outputs", exist_ok=True)

# Load models on startup
whisperx_model = None
qwen_pipeline = None
tts_model = None
tts_vocoder = None

# Conversation state management (per user session)
conversation_states: Dict[str, Dict] = {}

ACB_SYSTEM_PROMPT = (
    "You are Mithra, the AI assistant for the Anti-Corruption Bureau (ACB). "
    "Help citizens register corruption complaints, check complaint status, and explain ACB procedures. "
    "Be concise, professional, and empathetic. Reply in the same language the user uses."
)

def generate_qwen_response(user_message: str, system_prompt: str = ACB_SYSTEM_PROMPT) -> Optional[str]:
    if not qwen_pipeline:
        return None
    try:
        tokenizer = qwen_pipeline.tokenizer
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ]
        prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        outputs = qwen_pipeline(
            prompt,
            max_new_tokens=180,
            do_sample=True,
            temperature=0.7,
            return_full_text=False,
        )
        return outputs[0]["generated_text"].strip()
    except Exception as e:
        print(f"Qwen generation error: {e}")
        return None

class ComplaintCreate(BaseModel):
    complainant_name: str = Field(..., min_length=2)
    complainant_email: Optional[str] = None
    complainant_phone: Optional[str] = None
    complainant_aadhar: Optional[str] = None
    complaint_details: str = Field(..., min_length=10)
    additional_details: Optional[str] = None

class ComplaintResponse(BaseModel):
    id: int
    complainant_name: str
    complainant_email: Optional[str] = None
    complainant_phone: Optional[str] = None
    complainant_aadhar: Optional[str] = None
    complaint_details: str
    additional_details: Optional[str] = None
    complaint_date: str
    status: str

class ChatRequest(BaseModel):
    message: str

class AnalyzeRequest(BaseModel):
    complainant_name: Optional[str] = None
    complainant_email: Optional[str] = None
    complainant_phone: Optional[str] = None
    complainant_aadhar: Optional[str] = None
    address: Optional[str] = None
    officer_name: Optional[str] = None
    officer_rank: Optional[str] = None
    incident_date: Optional[str] = None
    case_detail: Optional[str] = None
    complaint_details: Optional[str] = None
    additional_details: Optional[str] = None

@app.on_event("startup")
def startup_event():
    init_db()
    load_models()

def load_models():
    global whisperx_model, qwen_pipeline, tts_model, tts_vocoder
    import torch
    os.environ["HF_HOME"] = "D:\\huggingface_cache"
    os.environ["HF_HUB_CACHE"] = "D:\\huggingface_cache"
    
    # Load WhisperX with your local faster-whisper model
    try:
        import whisperx
        print("Loading WhisperX model (faster-whisper)...")
        device = "cuda" if torch.cuda.is_available() else "cpu"
        whisperx_model = whisperx.load_model("base", device, compute_type="float16" if device == "cuda" else "int8")
        print("WhisperX loaded!")
    except Exception as e:
        print(f"Error loading WhisperX: {e}")
        import traceback
        traceback.print_exc()
    
    # Load your local Qwen model from D drive cache!
    try:
        from transformers import AutoModelForCausalLM, AutoTokenizer
        print("Loading local Qwen tokenizer from D drive cache...")
        hf_cache_dir = "D:\\huggingface_cache"
        qwen_repo = "Qwen/Qwen2.5-1.5B-Instruct"
        
        tokenizer = AutoTokenizer.from_pretrained(
            qwen_repo,
            cache_dir=hf_cache_dir,
            local_files_only=True,
            trust_remote_code=True
        )
        print("Loading local Qwen model from D drive cache...")
        model = AutoModelForCausalLM.from_pretrained(
            qwen_repo,
            cache_dir=hf_cache_dir,
            local_files_only=True,
            torch_dtype=torch.float16,
            device_map="auto",
            trust_remote_code=True
        )
        
        from transformers import pipeline
        qwen_pipeline = pipeline(
            "text-generation",
            model=model,
            tokenizer=tokenizer,
            max_new_tokens=200,
            temperature=0.7
        )
        print("Local Qwen from D drive loaded!")
    except Exception as e:
        print(f"Error loading local Qwen from D drive: {e}")
        import traceback
        traceback.print_exc()

@app.post("/api/complaints/", response_model=dict)
def create_complaint(complaint: ComplaintCreate, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute('''
        INSERT INTO complaints (complainant_name, complainant_email, complainant_phone, complainant_aadhar, complaint_details, additional_details)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        complaint.complainant_name,
        complaint.complainant_email,
        complaint.complainant_phone,
        complaint.complainant_aadhar,
        complaint.complaint_details,
        complaint.additional_details
    ))
    db.commit()
    complaint_id = cursor.lastrowid
    return {"message": "Complaint registered successfully!", "complaint_id": complaint_id}

@app.get("/api/complaints/{complaint_id}", response_model=ComplaintResponse)
def get_complaint(complaint_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM complaints WHERE id = ?", (complaint_id,))
    row = cursor.fetchone()
    if row is None:
        raise HTTPException(status_code=404, detail="Complaint not found")
    return ComplaintResponse(
        id=row["id"],
        complainant_name=row["complainant_name"],
        complainant_email=row["complainant_email"],
        complainant_phone=row["complainant_phone"],
        complainant_aadhar=row["complainant_aadhar"],
        complaint_details=row["complaint_details"],
        additional_details=row["additional_details"],
        complaint_date=row["complaint_date"],
        status=row["status"]
    )

@app.get("/api/complaints/", response_model=List[ComplaintResponse])
def list_complaints(db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM complaints")
    rows = cursor.fetchall()
    return [
        ComplaintResponse(
            id=row["id"],
            complainant_name=row["complainant_name"],
            complainant_email=row["complainant_email"],
            complainant_phone=row["complainant_phone"],
            complainant_aadhar=row["complainant_aadhar"],
            complaint_details=row["complaint_details"],
            additional_details=row["additional_details"],
            complaint_date=row["complaint_date"],
            status=row["status"]
        ) for row in rows
    ]

@app.post("/api/chat")
def chat(request: ChatRequest, db: sqlite3.Connection = Depends(get_db)):
    user_id = "default_user"  # In real app, use proper user ID
    user_message = request.message
    lower_msg = user_message.lower()
    
    # Initialize conversation state if not exists
    if user_id not in conversation_states:
        conversation_states[user_id] = {
            "step": 0,
            "form_data": {}
        }
    
    state = conversation_states[user_id]
    
    # Form fields to fill in order (with multi-language questions)
    form_fields = [
        ("complainant_name", "What is your full name? / உங்கள் முழு பெயர் என்ன?"),
        ("complainant_email", "What is your email address? / உங்கள் மின்னஞ்சல் முகவரி என்ன?"),
        ("complainant_phone", "What is your phone number? / உங்கள் தொலைபேசி எண் என்ன?"),
        ("complainant_aadhar", "What is your 12-digit Aadhaar number? / உங்கள் 12 இலக்க ஆதார் எண் என்ன?"),
        ("complaint_details", "Please describe your complaint in detail. / உங்கள் புகாரை விரிவாக விவரிக்கவும்.")
    ]
    
    # Check if user is asking about complaint status
    if any(keyword in lower_msg for keyword in ["status", "check", "நிலை"]):
        import re
        match = re.search(r'\d+', user_message)
        if match:
            complaint_id = int(match.group())
            cursor = db.cursor()
            cursor.execute("SELECT * FROM complaints WHERE id = ?", (complaint_id,))
            row = cursor.fetchone()
            if row:
                response = f"Complaint #{row['id']}: Status - {row['status']}, Registered on {row['complaint_date']}\nபுகார் #{row['id']}: நிலை - {row['status']}, பதிவு செய்யப்பட்ட தேதி {row['complaint_date']}"
            else:
                response = "Complaint not found. Please check the ID.\nபுகார் கிடைக்கவில்லை. தயவு செய்து ஐடியைச் சரிபார்க்கவும்."
        else:
            response = "Please provide your complaint ID to check status.\nநிலையைச் சரிபார்க்க உங்கள் புகார் ஐடியை வழங்கவும்."
        return {"response": response}
    
    # Check if user wants to register a complaint (explicit intent only, not FAQ questions)
    import re
    is_question = bool(re.match(r"^(what|how|where|when|why|who|can|is|are|do|does|tell)\b", lower_msg.strip()))
    register_intent = (
        not is_question
        and (
            re.search(r"\b(register|file)\b.*\bcomplaint\b", lower_msg)
            or re.search(r"\b(want to register|start registration)\b", lower_msg)
            or lower_msg.strip() in {"register", "register complaint", "file complaint"}
        )
    )
    if state["step"] == 0 and register_intent:
        state["step"] = 1
        response = form_fields[0][1]
        return {"response": response}
    
    # Handle form filling steps
    if state["step"] > 0:
        field_name, _ = form_fields[state["step"] - 1]
        state["form_data"][field_name] = user_message.strip()
        
        # Move to next step or submit
        if state["step"] < len(form_fields):
            next_question = form_fields[state["step"]][1]
            state["step"] += 1
            response = next_question
        else:
            # Submit complaint
            try:
                cursor = db.cursor()
                cursor.execute('''
                    INSERT INTO complaints (complainant_name, complainant_email, complainant_phone, complainant_aadhar, complaint_details)
                    VALUES (?, ?, ?, ?, ?)
                ''', (
                    state["form_data"].get("complainant_name", ""),
                    state["form_data"].get("complainant_email", ""),
                    state["form_data"].get("complainant_phone", ""),
                    state["form_data"].get("complainant_aadhar", ""),
                    state["form_data"].get("complaint_details", ""),
                ))
                db.commit()
                complaint_id = cursor.lastrowid
                
                # Reset state
                conversation_states[user_id] = {
                    "step": 0,
                    "form_data": {}
                }
                
                response = f"Thank you! Your complaint has been registered successfully. Your complaint ID is {complaint_id}.\nநன்றி! உங்கள் புகார் வெற்றிகரமாக பதிவு செய்யப்பட்டுள்ளது. உங்கள் புகார் ஐடி {complaint_id} ஆகும்."
            except Exception as e:
                print(f"Error registering complaint: {e}")
                response = "There was an error registering your complaint. Please try again.\nஉங்கள் புகாரைப் பதிவு செய்வதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்."
        
        return {"response": response}
    
    # Default chat — use Qwen when available
    qwen_response = generate_qwen_response(user_message)
    if qwen_response:
        return {"response": qwen_response}

    response = "Hello! I'm Mithra, your ACB assistant. Would you like to register a complaint or check the status of an existing complaint?"
    return {"response": response}

@app.post("/api/analyze")
async def analyze_complaint(request: AnalyzeRequest):
    details = request.complaint_details or ""

    import json
    add_details = []
    if request.additional_details:
        try:
            add_details = json.loads(request.additional_details)
        except Exception:
            pass

    add_dict = {item["key"]: item["value"] for item in add_details} if add_details else {}

    officer_name = request.officer_name or add_dict.get("officer_name")
    officer_rank = request.officer_rank or add_dict.get("officer_rank")
    incident_date = request.incident_date or add_dict.get("incident_date")
    amount = add_dict.get("amount")
    witnesses = add_dict.get("witnesses")

    analysis_prompt = f"""Analyze this corruption complaint for the Anti-Corruption Bureau.
Return ONLY valid JSON with these keys:
- summary: 2-3 sentence summary
- sentiment: one of Negative, Neutral, Positive
- confidence: integer 0-100
- priority: one of "Critical - Immediate Action Required", "High - Priority Review", "Normal - Standard Review"

Complaint details: {details}
Complainant: {request.complainant_name}
Officer: {officer_name} ({officer_rank})
Incident date: {incident_date}
Amount: {amount}
Witnesses: {witnesses}
Address: {request.address}
Case detail: {request.case_detail}
"""

    qwen_result = generate_qwen_response(
        analysis_prompt,
        system_prompt="You are an AI analyst for corruption complaints. Respond with JSON only, no markdown.",
    )

    if qwen_result:
        try:
            import re
            json_match = re.search(r"\{[\s\S]*\}", qwen_result)
            if json_match:
                parsed = json.loads(json_match.group())
                return {
                    "summary": parsed.get("summary", details[:200]),
                    "sentiment": parsed.get("sentiment", "Negative"),
                    "confidence": int(parsed.get("confidence", 75)),
                    "priority": parsed.get("priority", "Normal - Standard Review"),
                }
        except Exception as e:
            print(f"Failed to parse Qwen analysis: {e}")

    keywords_urgent = ["bribe", "corruption", "money", "demand", "threat", "fraud", "embezzlement"]
    keywords_serious = ["high official", "minister", "police", "government", "contract", "tender"]

    urgency = any(kw in details.lower() for kw in keywords_urgent)
    seriousness = any(kw in details.lower() for kw in keywords_serious)

    if urgency and seriousness:
        priority = "Critical - Immediate Action Required"
    elif urgency or seriousness:
        priority = "High - Priority Review"
    else:
        priority = "Normal - Standard Review"

    sentiment = "Negative"
    confidence = 75 if len(details) > 20 else 60

    summary = "Complaint details analyzed. "
    if officer_name:
        summary += f"Complaint against {officer_name}"
        if officer_rank:
            summary += f" ({officer_rank})"
        summary += ". "
    if incident_date:
        summary += f"Incident date: {incident_date}. "
    if amount:
        summary += f"Amount involved: {amount}. "
    if witnesses:
        summary += f"Witnesses: {witnesses}. "
    if len(details) > 50:
        summary += f"Complaint details: {details[:100]}..."
    else:
        summary += f"Complaint details: {details}"

    return {
        "summary": summary,
        "sentiment": sentiment,
        "confidence": confidence,
        "priority": priority,
    }

@app.post("/api/stt")
async def speech_to_text(file: UploadFile = File(...), language: str = "en"):
    file_location = f"uploads/{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())
    
    if whisperx_model:
        try:
            import whisperx
            device = "cuda" if torch.cuda.is_available() else "cpu"
            
            # Transcribe with specified language
            audio = whisperx.load_audio(file_location)
            result = whisperx_model.transcribe(audio, batch_size=16, language=language)
            
            # Combine all segments
            full_text = " ".join([segment["text"].strip() for segment in result["segments"]])
            
            return {"text": full_text}
        except Exception as e:
            print(f"WhisperX STT error: {e}")
            import traceback
            traceback.print_exc()
            return {"text": "Could not transcribe audio."}
    else:
        return {"text": "Speech-to-text model not available."}

@app.get("/api/tts")
@app.post("/api/tts")
async def text_to_speech(text: str, language: str = "en"):
    if tts_model and tts_vocoder:
        try:
            from f5_tts.infer.utils_infer import infer_process, preprocess_ref_audio_text
            
            # Use a sample reference audio from IndicF5 prompts
            ref_audio = os.path.join(indic_f5_path, "prompts", "MAR_F_WIKI_00001.wav")
            ref_text = "The quick brown fox jumps over the lazy dog"
            
            ref_audio, ref_text = preprocess_ref_audio_text(ref_audio, ref_text)
            
            audio, final_sample_rate, _ = infer_process(
                ref_audio, ref_text, text, tts_model, tts_vocoder, mel_spec_type="vocos"
            )
            
            output_path = os.path.join("outputs", "tts_output.wav")
            sf.write(output_path, audio, final_sample_rate)
            
            return FileResponse(output_path, media_type="audio/wav")
        except Exception as e:
            print(f"TTS error: {e}")
            return {"message": "TTS failed", "text": text}
    else:
        return {"message": "TTS model not available", "text": text}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

