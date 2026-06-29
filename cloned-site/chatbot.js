const fields = [
    { id: "name", label: "Full Name", voicePrompt: "Please speak your full name" },
    { id: "email", label: "Email Address", voicePrompt: "Please speak your email address" },
    { id: "AADHAR", label: "Aadhar Number", voicePrompt: "Please speak your 12-digit aadhar number" },
    { id: "phone", label: "Phone Number", voicePrompt: "Please speak your 10-digit phone number" },
    { id: "address", label: "Address", voicePrompt: "Please speak your address" },
    { id: "officerName", label: "Officer Name", voicePrompt: "Please speak the name of the officer" },
    { id: "officerRank", label: "Officer Rank", voicePrompt: "Please speak the rank of the officer" },
    { id: "incidentDate", label: "Incident Date", voicePrompt: "Please speak the incident date in year, month, day format" },
    { id: "caseDetail", label: "Case Detail", voicePrompt: "Please speak the case details" },
    { id: "issueDetail", label: "Complaint Details", voicePrompt: "Please describe the issue in detail" }
];
let currentFieldIndex = -1;
let isVoiceActive = false;
let isVoiceFlowRunning = false;
let fieldRecorder = null;
let fieldStream = null;
let fieldChunks = [];
let mediaRecorder;
let audioChunks = [];
let audioBlob = null;
const BACKEND_URL = "http://localhost:8000";

function hideSections() {
    document.getElementById("grievanceForm").style.display = "none";
    document.getElementById("districtSection").style.display = "none";
    document.getElementById("aiFeatures").style.display = "none";
    document.getElementById("faqChat").style.display = "none";
}

function showGrievanceForm() {
    hideSections();
    document.getElementById("responseArea").innerHTML = "";
    document.getElementById("grievanceForm").style.display = "block";
    resetVoiceProgress();
}

function showComplaintOptions() {
    hideSections();
    document.getElementById("responseArea").innerHTML = "";
    document.getElementById("districtSection").style.display = "block";
}

function showCustomerCare() {
    hideSections();
    document.getElementById("responseArea").innerHTML = `
        <div class="response" style="text-align:center; font-size:22px;">
            <b>DIAL <a href="tel:1064">1064</a></b>
        </div>
    `;
}

function showFAQChat() {
    hideSections();
    document.getElementById("faqChat").style.display = "block";
}

function clearAllHighlights() {
    document.querySelectorAll(".form-field").forEach(field => field.classList.remove("active"));
}

function updateProgressText() {
    const progressDiv = document.getElementById("voiceProgress");
    if (currentFieldIndex === -1) {
        progressDiv.textContent = "Click mic to start voice assistance";
    } else if (currentFieldIndex < fields.length) {
        progressDiv.textContent = `Step ${currentFieldIndex + 1} of ${fields.length}: ${fields[currentFieldIndex].label}`;
    } else {
        progressDiv.textContent = "All fields filled! Please submit your complaint.";
    }
}

function resetVoiceProgress() {
    stopFieldStream();
    if (fieldRecorder && fieldRecorder.state === "recording") {
        fieldRecorder.stop();
    }
    isVoiceActive = false;
    isVoiceFlowRunning = false;
    currentFieldIndex = -1;
    clearAllHighlights();
    updateProgressText();
    document.getElementById("iterativeMicBtn").classList.remove("listening");
}

function stopFieldStream() {
    if (fieldStream) {
        fieldStream.getTracks().forEach(track => track.stop());
        fieldStream = null;
    }
}

async function toggleIterativeVoice() {
    if (isVoiceFlowRunning) {
        stopCurrentFieldRecording();
        return;
    }
    if (!isVoiceActive) {
        await startNextField();
    }
}

async function startNextField() {
    if (isVoiceFlowRunning) return;

    if (currentFieldIndex >= fields.length - 1) {
        if (currentFieldIndex === fields.length - 1) {
            isVoiceActive = false;
            clearAllHighlights();
            updateProgressText();
            document.getElementById("iterativeMicBtn").classList.remove("listening");
            await speak("All fields completed. Please submit your complaint.");
        }
        return;
    }

    isVoiceFlowRunning = true;
    currentFieldIndex++;
    const field = fields[currentFieldIndex];

    clearAllHighlights();
    const fieldElement = document.querySelector(`.form-field[data-field="${field.id}"]`);
    if (fieldElement) fieldElement.classList.add("active");

    updateProgressText();
    document.getElementById("iterativeMicBtn").classList.add("listening");
    isVoiceActive = true;

    await speak(field.voicePrompt);
    await startIterativeFieldRecording(field.id);
}

function parseSpokenDate(text) {
    const isoMatch = text.match(/(\d{4})[-\s/](\d{1,2})[-\s/](\d{1,2})/);
    if (isoMatch) {
        const [, y, m, d] = isoMatch;
        return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
    }
    const parsed = new Date(text);
    if (!isNaN(parsed.getTime())) {
        return parsed.toISOString().split("T")[0];
    }
    return text;
}

function setFieldValue(fieldId, text) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    if (fieldId === "incidentDate") {
        el.value = parseSpokenDate(text);
    } else {
        el.value = text;
        el.dispatchEvent(new Event("input", { bubbles: true }));
    }
}

function isValidTranscription(text) {
    if (!text) return false;
    const lower = text.toLowerCase();
    return !lower.includes("could not transcribe") && !lower.includes("not available");
}

async function startIterativeFieldRecording(fieldId) {
    try {
        fieldStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        fieldRecorder = new MediaRecorder(fieldStream);
        fieldChunks = [];

        fieldRecorder.ondataavailable = event => fieldChunks.push(event.data);

        const autoStopTimer = setTimeout(() => {
            if (fieldRecorder && fieldRecorder.state === "recording") {
                stopCurrentFieldRecording();
            }
        }, 8000);

        fieldRecorder.onstop = async () => {
            clearTimeout(autoStopTimer);
            stopFieldStream();
            const blob = new Blob(fieldChunks, { type: "audio/webm" });

            document.getElementById("iterativeMicBtn").classList.remove("listening");
            isVoiceActive = false;
            isVoiceFlowRunning = false;

            if (blob.size < 1000) {
                await speak("No speech detected. Let me ask again.");
                currentFieldIndex--;
                setTimeout(() => startNextField(), 600);
                return;
            }

            const formData = new FormData();
            formData.append("file", blob, "field.webm");

            try {
                const response = await fetch(BACKEND_URL + "/api/stt", {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                const text = (result.text || "").trim();

                if (isValidTranscription(text)) {
                    setFieldValue(fieldId, text);
                    await speak("Got it.");
                    setTimeout(() => startNextField(), 600);
                } else {
                    await speak("I didn't catch that. Let me ask again.");
                    currentFieldIndex--;
                    setTimeout(() => startNextField(), 600);
                }
            } catch (error) {
                console.error("STT error:", error);
                await speak("Could not transcribe. Please try again.");
                currentFieldIndex--;
            }
        };

        fieldRecorder.start();
    } catch (error) {
        isVoiceFlowRunning = false;
        isVoiceActive = false;
        alert("Microphone access denied or unavailable.");
        console.error(error);
        document.getElementById("iterativeMicBtn").classList.remove("listening");
    }
}

function stopCurrentFieldRecording() {
    if (fieldRecorder && fieldRecorder.state === "recording") {
        fieldRecorder.stop();
    }
}

function showDistrictResponse(district) {
    const responses = {
        Srikakulam: `https://www.google.com/maps/dir//Anti+Corruption+Bureau+ACB+office,+8V9W%2B543,+Bondilipuram,+Balaga,+Srikakulam,+Andhra+Pradesh+532001/@16.498688,80.6223872,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a3c15cf9816bd77:0xd47a28da4818499c!2m2!1d83.8952914!2d18.3178986?entry=ttu`,
        Vizianagaram: `https://google.com/maps/dir//Acb+Office,vizianagaram,+499V%2B35G,+Cloth+Market+Area,+Vizianagaram+Cantonment,+Vizianagaram,+Andhra+Pradesh+535003/@16.498688,80.6223872,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a3be56807e7d707:0x9670d14d674092c!2m2!1d83.3929652!2d18.1176892?entry=ttu`,
        Visakhapatnam: `https://www.google.com/maps/dir/16.5081388,80.6145273/ACB+office,+Q86P%2BXHQ,+Vishalakshi+Nagar,+Visakhapatnam,+Andhra+Pradesh+530040/@16.5081388,80.6145273,14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a395b58a9303709:0xb7dc4c70b8f23b42!2m2!1d83.3364873!2d17.7624545?entry=ttu`,
        "East Godavari": `https://www.google.com/maps/dir/16.5081388,80.6145273/Anti+Corruption+Bureau+Office,+XQXX%2BHRH,+VL+Puram,+Venkateswara+Nagar,+Rajamahendravaram,+Andhra+Pradesh+533103/@16.5081388,80.6145273,14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a37a371fd986d3b:0x62a8a9d04bb4012!2m2!1d81.7995347!2d16.9989708?entry=ttu`,
        "West Godavari": `https://www.google.com/maps/dir/16.5081388,80.6145273/Anti+Corruption+Bureau+Office,+27-21-44B,+Aphb+Colony,+Santhi+Nagar,+Eluru,+Andhra+Pradesh+534007/@16.5081388,80.6145273,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a3615dc8c83e223:0xba332988abdbbf6!2m2!1d81.0854254!2d16.7100499?entry=ttu`,
        Krishna: `https://www.google.com/maps/dir/16.5081388,80.6145273/ACB+VIJAYAWADA+RANGE+OFFICE,+Gayatri+Nagar+Road,+Polyclinic+Rd,+Acharya+Ranga+Nagar,+Vijayawada,+Andhra+Pradesh+520010/@16.5081388,80.6145273,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a35fab73bce3041:0x958a7f8516a8c492!2m2!1d80.6502397!2d16.5037095?entry=ttu`,
        Guntur: `https://www.google.com/maps/dir/16.5081388,80.6145273/ACB+OFFICE+GUNTUR,+GMCANA+Rd,+behind+Medical+College,+Kanna+Vari+Thota,+Guntur,+Andhra+Pradesh+522004/@16.5081388,80.6145273,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a4a75630d7e8601:0xf53ee64a7411597b!2m2!1d80.4391409!2d16.2971543?entry=ttu`,
        Ongole: `https://www.google.com/maps/dir//Anti-Corruption+Bureau,+D.+No.21-43-271,+Bhagyanagar+4th+Lane,+11+th+Cross+Road,+RIMS+back+side,+Ongole,+Prakasam+District,+Andhra+Pradesh,+PIN+523001,+Andhr,+Andhra+Pradesh+523001/@16.4803596,79.2668123,8.53z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a4b011a6a7d0255:0x99d8d5d72cbc8f6f!2m2!1d80.043075!2d15.4903084?entry=ttu`,
        Nellore: `https://www.google.com/maps/dir//ACB+Office,+CXR9%2BVXX,+Batwadipalem,+Nellore,+Andhra+Pradesh+524003/@16.4803596,79.2668123,8.53z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a4cf32c9b49c753:0xa9f7b0447278fb1!2m2!1d79.9699705!2d14.4422148?entry=ttu`,
        Kurnool: `https://www.google.com/maps/dir//ACB+OFFICE+KURNOOL,+R28V%2BCJR,+A+Camp+Rd,+A+Camp,+Kurnool,+Andhra+Pradesh+518002/@16.4803596,79.2668123,8.53z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bb5dd003f6f3a6d:0x55f77eaae181a9d8!2m2!1d78.0439994!2d15.8160674?entry=ttu`,
        Kadapa: `https://www.google.com/maps/dir//ACB+Office,+Kadapa,+Oyo+Pizza,+corner+Cooperative+government,+opposite+Street,+Ganagapeta,+Kadapa,+Andhra+Pradesh+516001/@16.4803596,79.2668123,8.53z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bb37100391488c9:0xddbfd0198d11d592!2m2!1d78.8298138!2d14.485453?entry=ttu`,
        Tirupati: `https://www.google.com/maps/dir//ACB+Office,+Tirupathi,+JC98%2BXCF,+Air+Bypass+Rd,+beside+Tehsildar+MRO+Office,+New+Balaji+Colony,+Tirupati,+Andhra+Pradesh+517502/@16.4803596,79.2668123,9z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a4d4b9faaaaaaab:0xb148b6913ef8b43d!2m2!1d79.4160521!2d13.6199683?entry=ttu`,
        Ananthapuram: `https://www.google.com/maps/dir//ACB+Office,+Anantapuramu,+MJ39%2BQM3,+ACB+OFFICE,+Lenin+Nagar,+Upparapalli,+Andhra+Pradesh+515002/@16.4803596,79.2668123,9z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bb14b07d7a68adf:0x32d0895745f15194!2m2!1d77.6190698!2d14.654346?entry=ttu`
    };
    
    document.getElementById("responseArea").innerHTML = `
        <div class="response">
            <h3>${district} ACB Office</h3>
            <p>Please visit the ACB Office location using Google Maps.</p>
            <a href="${responses[district]}" target="_blank" style="display:inline-block;background:#004080;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;font-weight:bold;">Open Google Maps</a>
        </div>
    `;
}

document.getElementById("complaintForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = {
        complainant_name: document.getElementById("name").value,
        complainant_email: document.getElementById("email").value,
        complainant_phone: document.getElementById("phone").value,
        complainant_aadhar: document.getElementById("AADHAR").value,
        address: document.getElementById("address").value,
        officer_name: document.getElementById("officerName").value,
        officer_rank: document.getElementById("officerRank").value,
        incident_date: document.getElementById("incidentDate").value,
        case_detail: document.getElementById("caseDetail").value,
        complaint_details: document.getElementById("issueDetail").value
    };
    
    try {
        document.getElementById("responseArea").innerHTML = `
            <div class="response" style="background:#e8f0fe;">
                Analyzing your complaint with AI...
            </div>
        `;
        const analyzeResponse = await fetch(BACKEND_URL + "/api/analyze", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });
        const analysis = await analyzeResponse.json();
        
        document.getElementById("aiFeatures").style.display = "block";
        document.getElementById("aiSummary").textContent = analysis.summary;
        document.getElementById("aiSentiment").textContent = `Sentiment: ${analysis.sentiment} (Confidence: ${analysis.confidence}%)`;
        document.getElementById("aiPriority").textContent = `Priority: ${analysis.priority}`;
        
        const submitResponse = await fetch(BACKEND_URL + "/api/complaints/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });
        const submitResult = await submitResponse.json();
        
        document.getElementById("grievanceForm").style.display = "none";
        document.getElementById("responseArea").innerHTML = `
            <div class="response">
                Thank you. ACB takes care of the issue and you will receive a call shortly from our end.<br>
                <b>Complaint ID: ${submitResult.complaint_id}</b>
            </div>
        `;
        
        await speak("Complaint submitted successfully. Your complaint ID is " + submitResult.complaint_id);
        this.reset();
        resetVoiceProgress();
    } catch (error) {
        console.error(error);
        document.getElementById("responseArea").innerHTML = `
            <div class="response" style="background:#f8d7da; color:#721c24;">
                Error submitting complaint. Please try again.
            </div>
        `;
    }
});

let preferredVoice = null;

if ("speechSynthesis" in window) {
    const loadVoices = () => {
        const voices = speechSynthesis.getVoices();
        preferredVoice = voices.find(v => v.lang.startsWith("en-IN") && v.name.toLowerCase().includes("google"))
            || voices.find(v => v.lang.startsWith("en-IN"))
            || voices.find(v => v.lang.startsWith("en-GB"))
            || voices.find(v => v.lang.startsWith("en"));
    };
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
    if (!text || !("speechSynthesis" in window)) {
        return Promise.resolve();
    }

    speechSynthesis.cancel();

    return new Promise(resolve => {
        let finished = false;
        const done = () => {
            if (finished) return;
            finished = true;
            resolve();
        };

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-IN";
        utterance.rate = 0.82;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onend = done;
        utterance.onerror = done;

        speechSynthesis.resume();
        speechSynthesis.speak(utterance);

        const wordCount = text.split(/\s+/).length;
        setTimeout(done, Math.max(2500, wordCount * 450));
    });
}

// Allow only letters and spaces in Name
document.getElementById("name").addEventListener("input", function() {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

document.getElementById("AADHAR").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "").slice(0, 12);
});

document.getElementById("phone").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "").slice(0, 10);
});

// =======================
// Voice Recording Section
// =======================
const startBtn = document.getElementById("startRecord");
const stopBtn = document.getElementById("stopRecord");
const statusText = document.getElementById("recordingStatus");
const audioPlayback = document.getElementById("audioPlayback");

startBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            const audioURL = URL.createObjectURL(audioBlob);
            audioPlayback.src = audioURL;
            audioPlayback.style.display = "block";
            statusText.innerHTML = "✅ Voice complaint recorded successfully";
            
            const reader = new FileReader();
            reader.onloadend = function() {
                document.getElementById("voiceData").value = reader.result;
            };
            reader.readAsDataURL(audioBlob);
        };
        
        mediaRecorder.start();
        statusText.innerHTML = "🔴 Recording in progress...";
        statusText.classList.add("recording");
        startBtn.disabled = true;
        stopBtn.disabled = false;
    } catch (error) {
        alert("Microphone access denied or unavailable.");
        console.error(error);
    }
});

stopBtn.addEventListener("click", () => {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    statusText.classList.remove("recording");
});

// =======================
// FAQ Chat
// =======================
document.getElementById("faqInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendFAQMessage();
    }
});

async function sendFAQMessage() {
    const input = document.getElementById("faqInput");
    const text = input.value.trim();
    if (!text) return;
    
    const messagesDiv = document.getElementById("faqMessages");
    messagesDiv.innerHTML += `<div class="faq-msg user">${text}</div>`;
    input.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    try {
        const response = await fetch(BACKEND_URL + "/api/chat", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message: text })
        });
        const data = await response.json();
        messagesDiv.innerHTML += `<div class="faq-msg bot">${data.response}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        await speak(data.response);
    } catch (error) {
        messagesDiv.innerHTML += `<div class="faq-msg bot">Sorry, I couldn't answer that. Please try again.</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}