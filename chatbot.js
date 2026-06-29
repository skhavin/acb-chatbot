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
            name: "Please speak your full name",
            email: "Please speak your email address",
            AADHAR: "Please speak your 12-digit aadhar number",
            phone: "Please speak your 10-digit phone number",
            address: "Please speak your address",
            officerName: "Please speak the name of the officer",
            officerRank: "Please speak the rank of the officer",
            incidentDate: "Please speak the incident date in year, month, day format",
            caseDetail: "Please speak the case details",
            issueDetail: "Please describe the issue in detail"
        },
        ui: {
            startVoice: "Click mic to start voice assistance",
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
            officerRank: "अधिकारी का पद",
            incidentDate: "घटना की तारीख",
            caseDetail: "मामला विवरण",
            issueDetail: "शिकायत विवरण"
        },
        voicePrompts: {
            name: "कृपया अपना पूरा नाम बोलें",
            email: "कृपया अपना ईमेल पता बोलें",
            AADHAR: "कृपया अपना 12 अंकों का आधार नंबर बोलें",
            phone: "कृपया अपना 10 अंकों का फोन नंबर बोलें",
            address: "कृपया अपना पता बोलें",
            officerName: "कृपया अधिकारी का नाम बोलें",
            officerRank: "कृपया अधिकारी का पद बोलें",
            incidentDate: "कृपया घटना की तारीख वर्ष, महीने, दिन के प्रारूप में बोलें",
            caseDetail: "कृपया मामले का विवरण बोलें",
            issueDetail: "कृपया समस्या का विस्तार से वर्णन करें"
        },
        ui: {
            startVoice: "माइक पर क्लिक करें वॉइस सहायता शुरू करने के लिए",
            stepText: "चरण {current} में से {total}: {label}",
            allFieldsDone: "सभी फील्ड भरे गए! कृपया अपनी शिकायत सबमिट करें।",
            noSpeech: "कोई बोली नहीं मिली। मुझे फिर से पूछने दीजिए।",
            gotIt: "समझ गया।",
            didntCatch: "मुझे समझ नहीं आया। मुझे फिर से पूछने दीजिए।",
            sttError: "ट्रांसक्राइब नहीं कर सका। कृपया पुनः प्रयास करें।",
            complaintSubmitted: "शिकायत सफलतापूर्वक सबमिट कर दी गई। आपकी शिकायत आईडी है ",
            complaintId: "शिकायत आईडी: "
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
            name: "దయచేసి మీ పూర్తి పేరు మాట్లాడండి",
            email: "దయచేసి మీ ఇమెయిల్ వివరాలు మాట్లాడండి",
            AADHAR: "దయచేసి మీ 12 అంకెల ఆధార్ సంఖ్య మాట్లాడండి",
            phone: "దయచేసి మీ 10 అంకెల ఫోన్ నెంబర్ మాట్లాడండి",
            address: "దయచేసి మీ చిరునామా మాట్లాడండి",
            officerName: "దయచేసి ఉద్యోగి పేరు మాట్లాడండి",
            officerRank: "దయచేసి ఉద్యోగి ర్యాంక్ మాట్లాడండి",
            incidentDate: "దయచేసి సంభవ తేదీని సంవత్సరం, నెల, రోజు రూపంలో మాట్లాడండి",
            caseDetail: "దయచేసి కేస్ వివరాలు మాట్లాడండి",
            issueDetail: "దయచేసి సమస్యను వివరంగా వివరించండి"
        },
        ui: {
            startVoice: "వాయిస్ సహాయం ప్రారంభించడానికి మైక్‌ను నొక్కండి",
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
            name: "தயவுசெய்து உங்கள் முழு பெயரைப் பேசுங்கள்",
            email: "தயவுசெய்து உங்கள் மின்னஞ்சல் முகவரியைப் பேசுங்கள்",
            AADHAR: "தயவுசெய்து உங்கள் 12 இலக்க ஆதார் எண்ணைப் பேசுங்கள்",
            phone: "தயவுசெய்து உங்கள் 10 இலக்க தொலைபேசி எண்ணைப் பேசுங்கள்",
            address: "தயவுசெய்து உங்கள் முகவரியைப் பேசுங்கள்",
            officerName: "தயவுசெய்து அலுவலரின் பெயரைப் பேசுங்கள்",
            officerRank: "தயவுசெய்து அலுவலரின் பதவியைப் பேசுங்கள்",
            incidentDate: "தயவுசெய்து சம்பவ தேதியை ஆண்டு, மாதம், நாள் வடிவத்தில் பேசுங்கள்",
            caseDetail: "தயவுசெய்து வழக்கு விவரங்களைப் பேசுங்கள்",
            issueDetail: "தயவுசெய்து சிக்கலை விரிவாக விவரிக்கவும்"
        },
        ui: {
            startVoice: "குரல் உதவியைத் தொடங்க மைக்கைக் கிளிக் செய்க",
            stepText: "படி {current} / {total}: {label}",
            allFieldsDone: "அனைத்து புலங்களும் நிரப்பப்பட்டன! தயவுசெய்து உங்கள் புகாரைச் சமர்ப்பிக்கவும்.",
            noSpeech: "பேச்சு எதுவும் கண்டறியப்படவில்லை. மீண்டும் கேட்டுக்கொள்ளலாம்.",
            gotIt: "புரிந்தது.",
            didntCatch: "எனக்கு புரியவில்லை. மீண்டும் கேட்டுக்கொள்ளலாம்.",
            sttError: "டிரான்ஸ்கிரைப் செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
            complaintSubmitted: "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது. உங்கள் புகார் ஐடி ",
            complaintId: "புகார் ஐடி: "
        }
    },
    kn: {
        fieldLabels: {
            name: "ಪೂರ್ಣ ಹೆಸರು",
            email: "ಇಮೇಲ್ ವಿವರಗಳು",
            AADHAR: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
            phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
            address: "ವಿಳಾಸ",
            officerName: "ಅಧಿಕಾರಿಯ ಹೆಸರು",
            officerRank: "ಅಧಿಕಾರಿಯ ರ್ಯಾಂಕ್",
            incidentDate: "ಸಂಭವದ ದಿನಾಂಕ",
            caseDetail: "ಕೇಸ್ ವಿವರಗಳು",
            issueDetail: "ದೂರವಾಣಿ ವಿವರಗಳು"
        },
        voicePrompts: {
            name: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ಮಾತನಾಡಿ",
            email: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ವಿವರಗಳನ್ನು ಮಾತನಾಡಿ",
            AADHAR: "ದಯವಿಟ್ಟು ನಿಮ್ಮ 12 ಅಂಕಿಗಳ ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಮಾತನಾಡಿ",
            phone: "ದಯವಿಟ್ಟು ನಿಮ್ಮ 10 ಅಂಕಿಗಳ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಮಾತನಾಡಿ",
            address: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿಳಾಸವನ್ನು ಮಾತನಾಡಿ",
            officerName: "ದಯವಿಟ್ಟು ಅಧಿಕಾರಿಯ ಹೆಸರನ್ನು ಮಾತನಾಡಿ",
            officerRank: "ದಯವಿಟ್ಟು ಅಧಿಕಾರಿಯ ರ್ಯಾಂಕ್ ಅನ್ನು ಮಾತನಾಡಿ",
            incidentDate: "ದಯವಿಟ್ಟು ಸಂಭವದ ದಿನಾಂಕವನ್ನು ವರ್ಷ, ತಿಂಗಳು, ದಿನದ ಸ್ವರೂಪದಲ್ಲಿ ಮಾತನಾಡಿ",
            caseDetail: "ದಯವಿಟ್ಟು ಕೇಸ್ ವಿವರಗಳನ್ನು ಮಾತನಾಡಿ",
            issueDetail: "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯನ್ನು ವಿಸ್ತಾರವಾಗಿ ವಿವರಿಸಿ"
        },
        ui: {
            startVoice: "ವಾಯಿಸ್ ಸಹಾಯವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮೈಕ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
            stepText: "ಹಂತ {current} / {total}: {label}",
            allFieldsDone: "ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು ಭರ್ತಿಯಾಗಿವೆ! ದಯವಿಟ್ಟು ನಿಮ್ಮ ದೂರವಾಣಿಯನ್ನು ಸಲ್ಲಿಸಿ.",
            noSpeech: "ಮಾತು ಕಂಡುಬಂದಿಲ್ಲ. ಮತ್ತೆ ಕೇಳೋಣ.",
            gotIt: "ಗೊಟ್ ಇಟ್.",
            didntCatch: "ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಕೇಳೋಣ.",
            sttError: "ಟ್ರಾನ್ಸ್ಕ್ರೈಬ್ ಮಾಡಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            complaintSubmitted: "ದೂರವಾಣಿ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲ್ಪಡುತ್ತದೆ. ನಿಮ್ಮ ದೂರವಾಣಿ ಐಡಿ ",
            complaintId: "ದೂರವಾಣಿ ಐಡಿ: "
        }
    },
    ml: {
        fieldLabels: {
            name: "പൂർണ്ണ നാമം",
            email: "ഇമെയിൽ വിവരങ്ങൾ",
            AADHAR: "ആധാർ നമ്പർ",
            phone: "ഫോൺ നമ്പർ",
            address: "വിലാസം",
            officerName: "ഓഫീസറുടെ പേര്",
            officerRank: "ഓഫീസറുടെ റാങ്ക്",
            incidentDate: "സംഭവത്തിന്റെ തീയതി",
            caseDetail: "കേസ് വിവരങ്ങൾ",
            issueDetail: "പരാതി വിവരങ്ങൾ"
        },
        voicePrompts: {
            name: "ദയവായി നിങ്ങളുടെ പൂർണ്ണ നാമം സംസാരിക്കുക",
            email: "ദയവായി നിങ്ങളുടെ ഇമെയിൽ വിവരങ്ങൾ സംസാരിക്കുക",
            AADHAR: "ദയവായി നിങ്ങളുടെ 12 അക്കങ്ങളുള്ള ആധാർ നമ്പർ സംസാരിക്കുക",
            phone: "ദയവായി നിങ്ങളുടെ 10 അക്കങ്ങളുള്ള ഫോൺ നമ്പർ സംസാരിക്കുക",
            address: "ദയവായി നിങ്ങളുടെ വിലാസം സംസാരിക്കുക",
            officerName: "ദയവായി ഓഫീസറുടെ പേര് സംസാരിക്കുക",
            officerRank: "ദയവായി ഓഫീസറുടെ റാങ്ക് സംസാരിക്കുക",
            incidentDate: "ദയവായി സംഭവത്തിന്റെ തീയതി വർഷം, മാസം, ദിവസം രൂപത്തിൽ സംസാരിക്കുക",
            caseDetail: "ദയവായി കേസ് വിവരങ്ങൾ സംസാരിക്കുക",
            issueDetail: "ദയവായി പ്രശ്നം വിശദമായി വിവരിക്കുക"
        },
        ui: {
            startVoice: "വോയിസ് സഹായം ആരംഭിക്കാൻ മൈക്ക് ക്ലിക്ക് ചെയ്യുക",
            stepText: "പടി {current} / {total}: {label}",
            allFieldsDone: "എല്ലാ ഫീൽഡുകളും നിറച്ചു! ദയവായി നിങ്ങളുടെ പരാതി സമർപ്പിക്കുക.",
            noSpeech: "സംഭാഷണം കണ്ടെത്തിയില്ല. വീണ്ടും ചോദിക്കാം.",
            gotIt: "ഗോട്ട് ഇറ്റ്.",
            didntCatch: "എനിക്ക് മനസ്സിലായില്ല. വീണ്ടും ചോദിക്കാം.",
            sttError: "ട്രാൻസ്ക്രൈബ് ചെയ്യാനായില്ല. ദയവായി വീണ്ടും ശ്രമിക്കുക.",
            complaintSubmitted: "പരാതി വിജയകരമായി സമർപ്പിച്ചു. നിങ്ങളുടെ പരാതി ഐഡി ",
            complaintId: "പരാതി ഐഡി: "
        }
    },
    bn: {
        fieldLabels: {
            name: "পুরো নাম",
            email: "ইমেইল বিবরণ",
            AADHAR: "আধার নম্বর",
            phone: "ফোন নম্বর",
            address: "ঠিকানা",
            officerName: "কর্মকর্তার নাম",
            officerRank: "কর্মকর্তার পদ",
            incidentDate: "ঘটনার তারিখ",
            caseDetail: "কেস বিবরণ",
            issueDetail: "অভিযোগ বিবরণ"
        },
        voicePrompts: {
            name: "অনুগ্রহ করে আপনার পুরো নাম বলুন",
            email: "অনুগ্রহ করে আপনার ইমেইল বিবরণ বলুন",
            AADHAR: "অনুগ্রহ করে আপনার 12 সংখ্যার আধার নম্বর বলুন",
            phone: "অনুগ্রহ করে আপনার 10 সংখ্যার ফোন নম্বর বলুন",
            address: "অনুগ্রহ করে আপনার ঠিকানা বলুন",
            officerName: "অনুগ্রহ করে কর্মকর্তার নাম বলুন",
            officerRank: "অনুগ্রহ করে কর্মকর্তার পদ বলুন",
            incidentDate: "অনুগ্রহ করে ঘটনার তারিখ বছর, মাস, দিনের আকারে বলুন",
            caseDetail: "অনুগ্রহ করে কেস বিবরণ বলুন",
            issueDetail: "অনুগ্রহ করে সমস্যাটি বিস্তারিত বর্ণনা করুন"
        },
        ui: {
            startVoice: "ভয়েস সহায়তা শুরু করতে মাইকে ক্লিক করুন",
            stepText: "ধাপ {current} / {total}: {label}",
            allFieldsDone: "সব ক্ষেত্র পূর্ণ করা হয়েছে! অনুগ্রহ করে আপনার অভিযোগ জমা দিন.",
            noSpeech: "কোনো বক্তৃতা সনাক্ত করা যায়নি। আবার জিজ্ঞাসা করা যাক।",
            gotIt: "বুঝেছি।",
            didntCatch: "আমি বুঝতে পারিনি। আবার জিজ্ঞাসা করা যাক।",
            sttError: "ট্রান্সক্রাইব করতে পারিনি। অনুগ্রহ করে আবার চেষ্টা করুন।",
            complaintSubmitted: "অভিযোগ সফলভাবে জমা দেওয়া হয়েছে। আপনার অভিযোগ আইডি ",
            complaintId: "অভিযোগ আইডি: "
        }
    },
    gu: {
        fieldLabels: {
            name: "સંપૂર્ણ નામ",
            email: "ઇમેઇલ વિગતો",
            AADHAR: "આધાર નંબર",
            phone: "ફોન નંબર",
            address: "સરનામું",
            officerName: "અધિકારીનું નામ",
            officerRank: "અધિકારીનું રેન્ક",
            incidentDate: "ઘટનાની તારીખ",
            caseDetail: "કેસ વિગતો",
            issueDetail: "ફરિયાદ વિગતો"
        },
        voicePrompts: {
            name: "કૃપા કરીને તમારું સંપૂર્ણ નામ બોલો",
            email: "કૃપા કરીને તમારું ઇમેઇલ વિગતો બોલો",
            AADHAR: "કૃપા કરીને તમારું 12 અંકનું આધાર નંબર બોલો",
            phone: "કૃપા કરીને તમારું 10 અંકનું ફોન નંબર બોલો",
            address: "કૃપા કરીને તમારું સરનામું બોલો",
            officerName: "કૃપા કરીને અધિકારીનું નામ બોલો",
            officerRank: "કૃપા કરીને અધિકારીનું રેન્ક બોલો",
            incidentDate: "કૃપા કરીને ઘટનાની તારીખ વર્ષ, મહિનો, દિવસ સ્વરૂપે બોલો",
            caseDetail: "કૃપા કરીને કેસ વિગતો બોલો",
            issueDetail: "કૃપા કરીને સમસ્યાને વિગતવાર વર્ણન કરો"
        },
        ui: {
            startVoice: "વૉઇસ સહાય શરૂ કરવા માટે માઇક પર ક્લિક કરો",
            stepText: "પગલું {current} / {total}: {label}",
            allFieldsDone: "બધા ક્ષેત્રો ભરાયા છે! કૃપા કરીને તમારી ફરિયાદ સબમિટ કરો.",
            noSpeech: "કોઈ વાણી મળી નથી. ફરીથી પૂછું.",
            gotIt: "મળ્યું.",
            didntCatch: "મને સમજાયું નથી. ફરીથી પૂછું.",
            sttError: "ટ્રાન્સક્રાઇબ કરી શકાયું નથી. કૃપા કરીને ફરીથી પ્રયાસ કરો.",
            complaintSubmitted: "ફરિયાદ સફળતાપૂર્વક સબમિટ કરવામાં આવી છે. તમારી ફરિયાદ આઈડી ",
            complaintId: "ફરિયાદ આઈડી: "
        }
    },
    mr: {
        fieldLabels: {
            name: "पूर्ण नाव",
            email: "ईमेल तपशील",
            AADHAR: "आधार क्रमांक",
            phone: "फोन नंबर",
            address: "पत्ता",
            officerName: "अधिकार्याचे नाव",
            officerRank: "अधिकार्याचा रँक",
            incidentDate: "घटनेची तारीख",
            caseDetail: "केस तपशील",
            issueDetail: "तक्रार तपशील"
        },
        voicePrompts: {
            name: "कृपया तुमचे पूर्ण नाव सांगा",
            email: "कृपया तुमचा ईमेल तपशील सांगा",
            AADHAR: "कृपया तुमचा 12 अंकी आधार क्रमांक सांगा",
            phone: "कृपया तुमचा 10 अंकी फोन नंबर सांगा",
            address: "कृपया तुमचा पत्ता सांगा",
            officerName: "कृपया अधिकार्याचे नाव सांगा",
            officerRank: "कृपया अधिकार्याचा रँक सांगा",
            incidentDate: "कृपया घटनेची तारीख वर्ष, महिना, दिवस स्वरूपात सांगा",
            caseDetail: "कृपया केस तपशील सांगा",
            issueDetail: "कृपया समस्येचे तपशील सांगा"
        },
        ui: {
            startVoice: "व्हॉईस मदत सुरू करण्यासाठी माईकवर क्लिक करा",
            stepText: "पायरी {current} / {total}: {label}",
            allFieldsDone: "सर्व फील्ड भरले आहेत! कृपया तुमची तक्रार सबमिट करा.",
            noSpeech: "कोणतेही बोलणी आढळली नाही. पुन्हा विचारू.",
            gotIt: "मिळाले.",
            didntCatch: "मला समजले नाही. पुन्हा विचारू.",
            sttError: "ट्रान्सक्राइब करू शकलो नाही. कृपया पुन्हा प्रयत्न करा.",
            complaintSubmitted: "तक्रार यशस्वीरित्या सबमिट केली गेली आहे. तुमची तक्रार आयडी ",
            complaintId: "तक्रार आयडी: "
        }
    },
    pa: {
        fieldLabels: {
            name: "ਪੂਰਾ ਨਾਮ",
            email: "ਈਮੇਲ ਵੇਰਵੇ",
            AADHAR: "ਆਧਾਰ ਨੰਬਰ",
            phone: "ਫ਼ੋਨ ਨੰਬਰ",
            address: "ਪਤਾ",
            officerName: "ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ",
            officerRank: "ਅਧਿਕਾਰੀ ਦਾ ਰੈਂਕ",
            incidentDate: "ਘਟਨਾ ਦੀ ਮਿਤੀ",
            caseDetail: "ਕੇਸ ਦੇ ਵੇਰਵੇ",
            issueDetail: "ਸ਼ਿਕਾਇਤ ਦੇ ਵੇਰਵੇ"
        },
        voicePrompts: {
            name: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਬੋਲੋ",
            email: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਈਮੇਲ ਵੇਰਵੇ ਬੋਲੋ",
            AADHAR: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ 12 ਅੰਕਾਂ ਦਾ ਆਧਾਰ ਨੰਬਰ ਬੋਲੋ",
            phone: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ 10 ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ ਬੋਲੋ",
            address: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਤਾ ਬੋਲੋ",
            officerName: "ਕਿਰਪਾ ਕਰਕੇ ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ ਬੋਲੋ",
            officerRank: "ਕਿਰਪਾ ਕਰਕੇ ਅਧਿਕਾਰੀ ਦਾ ਰੈਂਕ ਬੋਲੋ",
            incidentDate: "ਕਿਰਪਾ ਕਰਕੇ ਘਟਨਾ ਦੀ ਮਿਤੀ ਸਾਲ, ਮਹੀਨਾ, ਦਿਨ ਦੇ ਰੂਪ ਵਿੱਚ ਬੋਲੋ",
            caseDetail: "ਕਿਰਪਾ ਕਰਕੇ ਕੇਸ ਦੇ ਵੇਰਵੇ ਬੋਲੋ",
            issueDetail: "ਕਿਰਪਾ ਕਰਕੇ ਸਮੱਸਿਆ ਦੇ ਵੇਰਵੇ ਦੱਸੋ"
        },
        ui: {
            startVoice: "ਵੌਇਸ ਸਹਾਇਤਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਮਾਈਕ 'ਤੇ ਕਲਿੱਕ ਕਰੋ",
            stepText: "ਪੜਾਅ {current} / {total}: {label}",
            allFieldsDone: "ਸਾਰੇ ਫੀਲਡ ਭਰੇ ਗਏ ਹਨ! ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਸਬਮਿਟ ਕਰੋ।",
            noSpeech: "ਕੋਈ ਬੋਲੀ ਨਹੀਂ ਮਿਲੀ। ਦੁਬਾਰਾ ਪੁੱਛਾਂਗੇ।",
            gotIt: "ਮਿਲ ਗਿਆ।",
            didntCatch: "ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਇਆ। ਦੁਬਾਰਾ ਪੁੱਛਾਂਗੇ।",
            sttError: "ਟ੍ਰਾਂਸਕ੍ਰਾਈਬ ਨਹੀਂ ਕਰ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
            complaintSubmitted: "ਸ਼ਿਕਾਇਤ ਸਫਲਤਾਪੂਰਵਕ ਸਬਮਿਟ ਕੀਤੀ ਗਈ ਹੈ। ਤੁਹਾਡੀ ਸ਼ਿਕਾਇਤ ਆਈਡੀ ",
            complaintId: "ਸ਼ਿਕਾਇਤ ਆਈਡੀ: "
        }
    },
    ur: {
        fieldLabels: {
            name: "پورا نام",
            email: "ای میل تفصیلات",
            AADHAR: "آدھار نمبر",
            phone: "فون نمبر",
            address: "پتہ",
            officerName: "افسر کا نام",
            officerRank: "افسر کا رینک",
            incidentDate: "واقعہ کی تاریخ",
            caseDetail: "کیس کی تفصیلات",
            issueDetail: "شکایت کی تفصیلات"
        },
        voicePrompts: {
            name: "براہ کرم اپنا پورا نام بولیں",
            email: "براہ کرم اپنی ای میل تفصیلات بولیں",
            AADHAR: "براہ کرم اپنا 12 ہندسوں کا آدھار نمبر بولیں",
            phone: "براہ کرم اپنا 10 ہندسوں کا فون نمبر بولیں",
            address: "براہ کرم اپنا پتہ بولیں",
            officerName: "براہ کرم افسر کا نام بولیں",
            officerRank: "براہ کرم افسر کا رینک بولیں",
            incidentDate: "براہ کرم واقعہ کی تاریخ سال، مہینہ، دن کے انداز میں بولیں",
            caseDetail: "براہ کرم کیس کی تفصیلات بولیں",
            issueDetail: "براہ کرم مسئلے کی تفصیل بتائیں"
        },
        ui: {
            startVoice: "وائس مدد شروع کرنے کے لیے مائک پر کلک کریں",
            stepText: "مرحلہ {current} / {total}: {label}",
            allFieldsDone: "تمام فیلڈز بھر گئے ہیں! براہ کرم اپنی شکایت جمع کروائیں۔",
            noSpeech: "کوئی تقریر نہیں ملی۔ دوبارہ پوچھیں۔",
            gotIt: "مل گیا۔",
            didntCatch: "مجھے سمجھ نہیں آیا۔ دوبارہ پوچھیں۔",
            sttError: "ٹرانسکرائب نہیں کر سکا۔ براہ کرم دوبارہ کوشش کریں۔",
            complaintSubmitted: "شکایت کامیابی سے جمع کرا دی گئی ہے۔ آپ کی شکایت آئی ڈی ",
            complaintId: "شکایت آئی ڈی: "
        }
    }
};

let currentLanguage = 'en';
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

function updateLanguage() {
    currentLanguage = document.getElementById('languageSelector').value;
    resetVoiceProgress();
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
    const t = getCurrentTranslations();
    const fields = getFields();
    if (currentFieldIndex === -1) {
        progressDiv.textContent = t.ui.startVoice;
    } else if (currentFieldIndex < fields.length) {
        progressDiv.textContent = t.ui.stepText.replace('{current}', currentFieldIndex + 1).replace('{total}', fields.length).replace('{label}', fields[currentFieldIndex].label);
    } else {
        progressDiv.textContent = t.ui.allFieldsDone;
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

    const fields = getFields();
    const t = getCurrentTranslations();

    if (currentFieldIndex >= fields.length - 1) {
        if (currentFieldIndex === fields.length - 1) {
            isVoiceActive = false;
            clearAllHighlights();
            updateProgressText();
            document.getElementById("iterativeMicBtn").classList.remove("listening");
            await speak(t.ui.allFieldsDone);
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
        }, 10000);

        fieldRecorder.onstop = async () => {
            clearTimeout(autoStopTimer);
            stopFieldStream();
            const blob = new Blob(fieldChunks, { type: "audio/webm" });

            document.getElementById("iterativeMicBtn").classList.remove("listening");
            isVoiceActive = false;
            isVoiceFlowRunning = false;

            const t = getCurrentTranslations();

            if (blob.size < 1000) {
                await speak(t.ui.noSpeech);
                currentFieldIndex--;
                setTimeout(() => startNextField(), 600);
                return;
            }

            const formData = new FormData();
            formData.append("file", blob, "field.webm");
            formData.append("language", currentLanguage);

            try {
                const response = await fetch(BACKEND_URL + "/api/stt", {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();
                const text = (result.text || "").trim();

                if (isValidTranscription(text)) {
                    setFieldValue(fieldId, text);
                    await speak(t.ui.gotIt);
                    setTimeout(() => startNextField(), 600);
                } else {
                    await speak(t.ui.didntCatch);
                    currentFieldIndex--;
                    setTimeout(() => startNextField(), 600);
                }
            } catch (error) {
                console.error("STT error:", error);
                await speak(t.ui.sttError);
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
        const t = getCurrentTranslations();
        document.getElementById("responseArea").innerHTML = `
            <div class="response">
                Thank you. ACB takes care of the issue and you will receive a call shortly from our end.<br>
                <b>${t.ui.complaintId}${submitResult.complaint_id}</b>
            </div>
        `;
        
        await speak(t.ui.complaintSubmitted + submitResult.complaint_id);
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
        // Try to find a female Indian English voice first
        preferredVoice = voices.find(v => 
            v.lang.startsWith("en-IN") && 
            v.name.toLowerCase().includes("female")
        ) || voices.find(v => 
            v.lang.startsWith("en-IN") && 
            v.name.toLowerCase().includes("google")
        ) || voices.find(v => 
            v.lang.startsWith("en-IN")
        ) || voices.find(v => 
            v.lang.startsWith("en-GB") && v.name.toLowerCase().includes("female")
        ) || voices.find(v => 
            v.lang.startsWith("en-GB")
        ) || voices.find(v => 
            v.lang.startsWith("en")
        );
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
        utterance.lang = currentLanguage === 'en' ? 'en-IN' : currentLanguage;
        utterance.rate = 0.85; // Normal, slightly slower speed
        utterance.pitch = 1.1; // Slightly higher for female tone
        utterance.volume = 1.0;
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onend = done;
        utterance.onerror = done;

        speechSynthesis.resume();
        speechSynthesis.speak(utterance);

        const wordCount = text.split(/\s+/).length;
        setTimeout(done, Math.max(3000, wordCount * 550));
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
            body: JSON.stringify({ message: text, language: currentLanguage })
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