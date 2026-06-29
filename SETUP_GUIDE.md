# ACB Chatbot & Voice Assistant Setup Guide

## What's Already Implemented
- ✅ Cloned ACB Telangana website
- ✅ Floating chatbot UI
- ✅ Floating voice assistant button ("Mithra")
- ✅ Python FastAPI backend with SQLite database
- ✅ Endpoints for complaint registration and status checking
- ✅ Placeholder endpoints for LLM (Qwen), STT (WhisperX), and TTS (IndicF5)

## Servers Currently Running
- Backend: http://localhost:8000
- Frontend (cloned site): http://localhost:3000

## To Integrate Your Local Tools

### 1. Integrate WhisperX (STT)
1. Find where WhisperX is installed on your C: or D: drive
2. Add WhisperX to your Python path in `backend/main.py`
3. Update the `/api/stt` endpoint to use WhisperX for transcribing audio files

### 2. Integrate Qwen (LLM)
1. Find where Qwen is installed
2. Use Qwen's API or model directly in the `/api/chat` endpoint
3. Replace the current simple rule-based responses with Qwen's output

### 3. Integrate IndicF5 (TTS)
1. We've already cloned IndicF5 in `IndicF5/` directory
2. Check `IndicF5/f5_tts/api.py` for how to use it
3. Update the `/api/tts` endpoint in `backend/main.py` to use IndicF5
4. Use one of the sample audio files in `IndicF5/prompts/` as reference

## Project Structure
```
acb-chatbot/
├── backend/
│   ├── main.py       # FastAPI backend
│   ├── db.py         # Database setup
│   └── requirements.txt
├── cloned-site/
│   └── index.html    # Cloned ACB website with chatbot/VA
├── IndicF5/          # Cloned IndicF5 TTS repo
├── frontend/         # Simple test frontend
├── plan.md           # Original plan
└── SETUP_GUIDE.md    # This file
```
