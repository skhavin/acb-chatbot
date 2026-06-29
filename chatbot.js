// Multi-language translations
const translations = {
    en: {
        fieldLabels: {
            name: "Full Name",
            email: "Email Address",
            AADHAR: "Aadhar Number",
            phone: "Phone Number",
            address: "Address",
            officerName: "Officer Name",
            officerRank: "Officer Rank",
            incidentDate: "Incident Date",
            caseDetail: "Case Detail",
            issueDetail: "Complaint Details"
        },
        voicePrompts: {
            name: "Please enter your full name",
            email: "Please enter your email address",
            AADHAR: "Please enter your 12-digit aadhar number",
            phone: "Please enter your 10-digit phone number",
            address: "Please enter your address",
            officerName: "Please enter the name of the officer",
            officerRank: "Please enter the rank of the officer",
            incidentDate: "Please select the incident date",
            caseDetail: "Please enter the case details",
            issueDetail: "Please describe the issue in detail"
        },
        ui: {
            startVoice: "Focus on a field to start",
            stepText: "Step {current} of {total}: {label}",
            allFieldsDone: "All fields filled! Please submit your complaint.",
            noSpeech: "No speech detected. Let me ask again.",
            gotIt: "Got it.",
            didntCatch: "I didn't catch that. Let me ask again.",
            sttError: "Could not transcribe. Please try again.",
            complaintSubmitted: "Complaint submitted successfully. Your complaint ID is ",
            complaintId: "Complaint ID: "
        }
    },
    hi: {
        fieldLabels: {
            name: "पूरा नाम",
            email: "ईमेल पता",
            AADHAR: "आधार नंबर",
            phone: "फ़ोन नंबर",
            address: "पता",
            officerName: "अधिकारी का नाम",
            officerRank: "अధికారీ పద",
            incidentDate: "घटना తేదీ",
            caseDetail: "మామల వివరాలు",
            issueDetail: "శికాయ వివరాలు"
        },
        voicePrompts: {
            name: "कृपया अपना पूरा नाम दर्ज करें",
            email: "कृपया अपना ईमेल पता दर्ज करें",
            AADHAR: "कृपया अपना 12 अंकों का आधार नंबर दर्ज करें",
            phone: "कृపయा अपनా 10 అంకెల ఫోన్ నెంబర్ ప్రవేశించండి",
            address: "కృపయా మీరు చిరునామాను ప్రవేశించండి",
            officerName: "కృపయా అధికారి పేరును ప్రవేశించండి",
            officerRank: "కృపయా అధికారి ర్యాంకును ప్రవేశించండి",
            incidentDate: "కృపయా సంభవ తేదీని ఎంచుకోండి",
            caseDetail: "కృపయా కేస్ వివరాలను ప్రవేశించండి",
            issueDetail: "కృపయా సమస్యను వివరంగా వివరించండి"
        },
        ui: {
            startVoice: "ఒక ఫీల్డ్‌ను ఫోకస్ చేయండి",
            stepText: "దశ {current} / {total}: {label}",
            allFieldsDone: "అన్ని ఫీల్డ్‌లు పూర్తయ్యాయి! దయచేసి మీ ఫిర్యాదును సమర్పించండి.",
            noSpeech: "మాట ఎదురు లేదు. మళ్ళీ అడగనివ్వండి.",
            gotIt: "అర్థం అయ్యింది.",
            didntCatch: "నాకు అర్థం కాలేదు. మళ్ళీ అడగనివ్వండి.",
            sttError: "ట్రాన్‌స్క్రైబ్ చేయలేకపోయాము. దయచేసి మళ్ళీ ప్రయత్నించండి.",
            complaintSubmitted: "ఫిర్యాదు విజయవంతంగా సమర్పించబడింది. మీ ఫిర్యాదు ఐడీ ",
            complaintId: "ఫిర్యాదు ఐడీ: "
        }
    },
    te: {
        fieldLabels: {
            name: "పూర్తి పేరు",
            email: "ఇమెయిల్ వివరాలు",
            AADHAR: "ఆధార్ సంఖ్య",
            phone: "ఫోన్ నెంబర్",
            address: "చిరునామా",
            officerName: "ఉద్యోగి పేరు",
            officerRank: "ఉద్యోగి ర్యాంక్",
            incidentDate: "సంభవ తేదీ",
            caseDetail: "కేస్ వివరాలు",
            issueDetail: "ఫిర్యాదు వివరాలు"
        },
        voicePrompts: {
            name: "దయచేసి మీ పూర్తి పేరు ప్రవేశించండి",
            email: "దయచేసి మీ ఇమెయిల్ వివరాలు ప్రవేశించండి",
            AADHAR: "దయచేసి మీ 12 అంకెల ఆధార్ సంఖ్య ప్రవేశించండి",
            phone: "దయచేసి మీ 10 అంకెల ఫోన్ నెంబర్ ప్రవేశించండి",
            address: "దయచేసి మీ చిరునామాను ప్రవేశించండి",
            officerName: "దయచేసి ఉద్యోగి పేరును ప్రవేశించండి",
            officerRank: "దయచేసి ఉద్యోగి ర్యాంకును ప్రవేశించండి",
            incidentDate: "దయచేసి సంభవ తేదీని ఎంచుకోండి",
            caseDetail: "దయచేసి కేస్ వివరాలను ప్రవేశించండి",
            issueDetail: "దయచేసి సమస్యను వివరంగా వివరించండి"
        },
        ui: {
            startVoice: "ఒక ఫీల్డ్‌ను ఫోకస్ చేయండి",
            stepText: "దశ {current} / {total}: {label}",
            allFieldsDone: "అన్ని ఫీల్డ్‌లు పూర్తయ్యాయి! దయచేసి మీ ఫిర్యాదును సమర్పించండి.",
            noSpeech: "మాట ఎదురు లేదు. మళ్ళీ అడగనివ్వండి.",
            gotIt: "అర్థం అయ్యింది.",
            didntCatch: "నాకు అర్థం కాలేదు. మళ్ళీ అడగనివ్వండి.",
            sttError: "ట్రాన్‌స్క్రైబ్ చేయలేకపోయాము. దయచేసి మళ్ళీ ప్రయత్నించండి.",
            complaintSubmitted: "ఫిర్యాదు విజయవంతంగా సమర్పించబడింది. మీ ఫిర్యాదు ఐడీ ",
            complaintId: "ఫిర్యాదు ఐడీ: "
        }
    },
    ta: {
        fieldLabels: {
            name: "முழு பெயர்",
            email: "மின்னஞ்சல் முகவரி",
            AADHAR: "ஆதார் எண்",
            phone: "தொலைபேசி எண்",
            address: "முகவரி",
            officerName: "அலுவலர் பெயர்",
            officerRank: "அலுவலர் பதவி",
            incidentDate: "சம்பவ தேதி",
            caseDetail: "வழக்கு விவரங்கள்",
            issueDetail: "புகார் விவரங்கள்"
        },
        voicePrompts: {
            name: "தயவுசெய்து உங்கள் முழு பெயரை உள்ளிடவும்",
            email: "தயவுசெய்து உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்",
            AADHAR: "தயவுசெய்து உங்கள் 12 இலக்க ஆதார் எண்ணை உள்ளிடவும்",
            phone: "தயவுசெய்து உங்கள் 10 இலக்க தொலைபேசி எண்ணை உள்ளிடவும்",
            address: "தயவுசெய்து உங்கள் முகவரியை உள்ளிடவும்",
            officerName: "தயவுசெய்து அலுவலரின் பெயரை உள்ளிடவும்",
            officerRank: "தயவுசெய்து அலுவலரின் பதவியை உள்ளிடவும்",
            incidentDate: "தயவுசெய்து சம்பவ தேதியை தேர்வு செய்யவும்",
            caseDetail: "தயவுசெய்து வழக்கு விவரங்களை உள்ளிடவும்",
            issueDetail: "தயவுசெய்து சிக்கலை விரிவாக விவரிக்கவும்"
        },
        ui: {
            startVoice: "ஒரு புலத்தை கவனம் செலுத்தவும்",
            stepText: "படி {current} / {total}: {label}",
            allFieldsDone: "அனைத்து புலங்களும் நிரப்பப்பட்டன! தயவுசெய்து உங்கள் புகாரைச் சமர்ப்பிக்கவும்.",
            noSpeech: "பேச்சு எதுவும் கண்டறியப்படவில்லை. மீண்டும் கேட்டுக்கொள்ளலாம்.",
            gotIt: "புரிந்தது.",
            didntCatch: "எனக்கு புரியவில்லை. மீண்டும் கேட்டுக்கொள்ளலாம்.",
            sttError: "டிரான்ஸ்கிரைப் செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
            complaintSubmitted: "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது. உங்கள் புகார் ஐடி ",
            complaintId: "புகார் ஐடி: "
        }
    }
};

let currentLanguage = 'en';
let currentFieldIndex = -1;
let isVoiceActive = false;
let isRecordingIssue = false;
let issueRecorder = null;
let issueStream = null;
let issueChunks = [];
const BACKEND_URL = "http://localhost:8000";

function updateLanguage() {
    currentLanguage = document.getElementById('languageSelector').value;
}

function getCurrentTranslations() {
    return translations[currentLanguage] || translations.en;
}

function getFields() {
    const t = getCurrentTranslations();
    return [
        { id: "name", label: t.fieldLabels.name, voicePrompt: t.voicePrompts.name },
        { id: "email", label: t.fieldLabels.email, voicePrompt: t.voicePrompts.email },
        { id: "AADHAR", label: t.fieldLabels.AADHAR, voicePrompt: t.voicePrompts.AADHAR },
        { id: "phone", label: t.fieldLabels.phone, voicePrompt: t.voicePrompts.phone },
        { id: "address", label: t.fieldLabels.address, voicePrompt: t.voicePrompts.address },
        { id: "officerName", label: t.fieldLabels.officerName, voicePrompt: t.voicePrompts.officerName },
        { id: "officerRank", label: t.fieldLabels.officerRank, voicePrompt: t.voicePrompts.officerRank },
        { id: "incidentDate", label: t.fieldLabels.incidentDate, voicePrompt: t.voicePrompts.incidentDate },
        { id: "caseDetail", label: t.fieldLabels.caseDetail, voicePrompt: t.voicePrompts.caseDetail },
        { id: "issueDetail", label: t.fieldLabels.issueDetail, voicePrompt: t.voicePrompts.issueDetail }
    ];
}

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
    initializeFieldListeners();
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

function speak(text) {
    return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = currentLanguage === 'en' ? 'en-IN' : currentLanguage;
        utterance.rate = 0.85;
        utterance.pitch = 1.1;
        const voices = speechSynthesis.getVoices();
        const indianVoices = voices.filter(v => v.lang.includes('IN'));
        if (indianVoices.length > 0) {
            utterance.voice = indianVoices[0];
        }
        utterance.onend = resolve;
        speechSynthesis.speak(utterance);
    });
}

function initializeFieldListeners() {
    const fields = getFields();
    fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el) {
            el.addEventListener('focus', async () => {
                clearAllHighlights();
                const fieldElement = document.querySelector(`.form-field[data-field="${field.id}"]`);
                if (fieldElement) fieldElement.classList.add("active");
                await speak(field.voicePrompt);
            });
            el.addEventListener('keypress', async (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const fieldsList = getFields();
                    const currentIndex = fieldsList.findIndex(f => f.id === field.id);
                    if (currentIndex < fieldsList.length - 1) {
                        const nextField = document.getElementById(fieldsList[currentIndex + 1].id);
                        if (nextField) nextField.focus();
                    }
                }
            });
        }
    });

    const issueMicBtn = document.getElementById('issueMicBtn');
    if (issueMicBtn) {
        issueMicBtn.addEventListener('click', toggleIssueRecording);
    }
}

function stopIssueStream() {
    if (issueStream) {
        issueStream.getTracks().forEach(track => track.stop());
        issueStream = null;
    }
}

async function toggleIssueRecording() {
    const btn = document.getElementById('issueMicBtn');
    if (isRecordingIssue) {
        if (issueRecorder && issueRecorder.state === "recording") {
            issueRecorder.stop();
        }
    } else {
        try {
            issueStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            issueRecorder = new MediaRecorder(issueStream);
            issueChunks = [];

            issueRecorder.ondataavailable = event => issueChunks.push(event.data);

            issueRecorder.onstop = async () => {
                stopIssueStream();
                isRecordingIssue = false;
                btn.classList.remove("listening");
                btn.textContent = "🎤";

                const blob = new Blob(issueChunks, { type: "audio/webm" });
                const t = getCurrentTranslations();

                if (blob.size < 1000) {
                    await speak(t.ui.noSpeech);
                    return;
                }

                const formData = new FormData();
                formData.append("file", blob, "issue.webm");
                formData.append("language", currentLanguage);

                try {
                    const response = await fetch(BACKEND_URL + "/api/stt", {
                        method: "POST",
                        body: formData
                    });
                    const result = await response.json();
                    const text = (result.text || "").trim();

                    if (text && !text.includes("could not transcribe") && !text.includes("not available")) {
                        document.getElementById('issueDetail').value = text;
                        await speak(t.ui.gotIt);
                    } else {
                        await speak(t.ui.didntCatch);
                    }
                } catch (error) {
                    console.error("STT error:", error);
                    await speak(t.ui.sttError);
                }
            };

            issueRecorder.start();
            isRecordingIssue = true;
            btn.classList.add("listening");
            btn.textContent = "⏹️";
        } catch (error) {
            alert("Microphone access denied or unavailable.");
            console.error(error);
        }
    }
}

function showDistrictResponse(district) {
    const responses = {
        Srikakulam: `https://www.google.com/maps/dir//Anti+Corruption+Bureau+ACB+office,+8V9W%2B543,+Bondilipuram,+Balaga,+Srikakulam,+Andhra+Pradesh+532001/@16.498688,80.6223872,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a3c15cf9816bd77:0xd47a28da4818499c!2m2!1d83.8952914!2d18.3178986?entry=ttu`
    };
    window.open(responses[district], '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.getVoices();
        };
    }
});
