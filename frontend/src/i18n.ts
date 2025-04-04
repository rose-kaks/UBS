import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        findSchools: "Find Schools",
        volunteers: "Volunteers",
        events: "Events",
        resources: "Resources",
        about: "About Us",
        contact: "Contact",
        login: "Log in",
        signup: "Sign up",
        dashboard: "Dashboard",
        profile: "Profile",
        logout: "Log out"
      },
      hero: {
        title: "Connect, Volunteer,",
        makeImpact: "Make an Impact",
        subtitle: "EdConnect brings together schools and volunteers to create enriching educational experiences for students across the country.",
        getStarted: "Get Started",
        findSchools: "Find Schools",
        stats: {
          schools: "Schools",
          volunteers: "Volunteers",
          students: "Students Helped"
        }
      },
      howItWorks: {
        title: "How EdConnect Works",
        description: "Our platform makes it easy to connect schools with qualified volunteers to enhance the educational experience.",
        forSchools: "For Schools",
        schoolsDescription: "Register your school, submit your curriculum needs, and connect with qualified volunteers.",
        registerSchool: "Register as a School",
        forVolunteers: "For Volunteers",
        volunteersDescription: "Create your profile, browse opportunities, and share your expertise with students who need it.",
        becomeVolunteer: "Become a Volunteer",
        forStudents: "For Students",
        studentsDescription: "Access quality educational content, attend live sessions, and learn from experienced professionals.",
        joinStudent: "Join as a Student"
      },
      features: {
        title: "Platform Features",
        description: "EdConnect offers a comprehensive set of tools to make educational volunteering seamless and effective.",
        classScheduling: "Class Scheduling",
        classSchedulingDesc: "Intuitive calendar system for scheduling and managing live classes and sessions.",
        videoContent: "Video Content",
        videoContentDesc: "Upload and access recorded video lessons to supplement live teaching.",
        volunteerTracking: "Volunteer Tracking",
        volunteerTrackingDesc: "Track volunteer hours, contributions, and impact with detailed analytics.",
        certificates: "Certificates",
        certificatesDesc: "Generate certificates for volunteers to recognize their contributions."
      },
      testimonials: {
        title: "What People Are Saying",
        description: "Read about the experiences of schools, volunteers, and students using EdConnect.",
        quote1: "As a school principal, EdConnect has revolutionized how we bring expert knowledge into our classrooms. Our students love learning from professionals in various fields.",
        name1: "Dr. Jane Davis",
        role1: "Principal, Lincoln High School",
        quote2: "Volunteering through EdConnect has been incredibly rewarding. The platform makes it easy to schedule sessions, and I love seeing the impact I'm making on students' education.",
        name2: "Mark Smith",
        role2: "Software Engineer & Volunteer",
        quote3: "Learning from real professionals has helped me understand what I want to do after graduation. The volunteer sessions are engaging and have made difficult subjects much easier to grasp.",
        name3: "Aisha Thompson",
        role3: "Student, Grade 11"
      },
      cta: {
        title: "Ready to Make a Difference?",
        description: "Join our community of schools, volunteers, and students to create better educational experiences today.",
        signUp: "Sign Up Now",
        learnMore: "Learn More"
      }
    }
  },
  hi: {
    translation: {
      header: {
        home: "होम",
        findSchools: "स्कूल खोजें",
        volunteers: "स्वयंसेवक",
        events: "कार्यक्रम",
        resources: "संसाधन",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        login: "लॉग इन",
        signup: "साइन अप",
        dashboard: "डैशबोर्ड",
        profile: "प्रोफ़ाइल",
        logout: "लॉग आउट"
      },
      hero: {
        title: "जुड़ें, स्वयंसेवा करें,",
        makeImpact: "प्रभाव डालें",
        subtitle: "EdConnect देश भर के छात्रों के लिए समृद्ध शैक्षिक अनुभव बनाने के लिए स्कूलों और स्वयंसेवकों को एक साथ लाता है।",
        getStarted: "शुरू करें",
        findSchools: "स्कूल खोजें",
        stats: {
          schools: "स्कूल",
          volunteers: "स्वयंसेवक",
          students: "छात्रों की मदद की"
        }
      },
      howItWorks: {
        title: "EdConnect कैसे काम करता है",
        description: "हमारा प्लेटफॉर्म स्कूलों को योग्य स्वयंसेवकों से जोड़ना आसान बनाता है ताकि शैक्षिक अनुभव को बेहतर बनाया जा सके।",
        forSchools: "स्कूलों के लिए",
        schoolsDescription: "अपने स्कूल को पंजीकृत करें, अपनी पाठ्यचर्या की आवश्यकताओं को जमा करें, और योग्य स्वयंसेवकों से जुड़ें।",
        registerSchool: "स्कूल के रूप में पंजीकृत करें",
        forVolunteers: "स्वयंसेवकों के लिए",
        volunteersDescription: "अपना प्रोफ़ाइल बनाएं, अवसरों को ब्राउज़ करें, और जरूरतमंद छात्रों के साथ अपनी विशेषज्ञता साझा करें।",
        becomeVolunteer: "स्वयंसेवक बनें",
        forStudents: "छात्रों के लिए",
        studentsDescription: "गुणवत्तापूर्ण शैक्षिक सामग्री तक पहुंचें, लाइव सत्रों में भाग लें, और अनुभवी पेशेवरों से सीखें।",
        joinStudent: "छात्र के रूप में जुड़ें"
      },
      features: {
        title: "प्लेटफ़ॉर्म सुविधाएँ",
        description: "EdConnect शैक्षिक स्वयंसेवा को सहज और प्रभावी बनाने के लिए उपकरणों का एक व्यापक सेट प्रदान करता है।",
        classScheduling: "कक्षा शेड्यूलिंग",
        classSchedulingDesc: "लाइव कक्षाओं और सत्रों को शेड्यूल और प्रबंधित करने के लिए सहज कैलेंडर प्रणाली।",
        videoContent: "वीडियो सामग्री",
        videoContentDesc: "लाइव शिक्षण को पूरक करने के लिए रिकॉर्ड किए गए वीडियो पाठ अपलोड करें और उन्हें एक्सेस करें।",
        volunteerTracking: "स्वयंसेवक ट्रैकिंग",
        volunteerTrackingDesc: "विस्तृत विश्लेषण के साथ स्वयंसेवक घंटे, योगदान और प्रभाव को ट्रैक करें।",
        certificates: "प्रमाणपत्र",
        certificatesDesc: "स्वयंसेवकों के योगदान को मान्यता देने के लिए प्रमाणपत्र जनरेट करें।"
      },
      testimonials: {
        title: "लोग क्या कह रहे हैं",
        description: "EdConnect का उपयोग करने वाले स्कूलों, स्वयंसेवकों और छात्रों के अनुभवों के बारे में पढ़ें।",
        quote1: "एक स्कूल प्रिंसिपल के रूप में, EdConnect ने क्रांति ला दी है कि हम कैसे विशेषज्ञ ज्ञान को अपनी कक्षाओं में लाते हैं। हमारे छात्र विभिन्न क्षेत्रों के पेशेवरों से सीखना पसंद करते हैं।",
        name1: "डॉ. जेन डेविस",
        role1: "प्रिंसिपल, लिंकन हाई स्कूल",
        quote2: "EdConnect के माध्यम से स्वयंसेवा करना अविश्वसनीय रूप से फायदेमंद रहा है। प्लेटफॉर्म सत्रों को शेड्यूल करना आसान बनाता है, और मुझे छात्रों की शिक्षा पर अपने प्रभाव को देखना अच्छा लगता है।",
        name2: "मार्क स्मिथ",
        role2: "सॉफ्टवेयर इंजीनियर और स्वयंसेवक",
        quote3: "वास्तविक पेशेवरों से सीखने ने मुझे समझने में मदद की है कि मैं स्नातक होने के बाद क्या करना चाहता हूं। स्वयंसेवा सत्र आकर्षक हैं और मुश्किल विषयों को समझना बहुत आसान बना दिया है।",
        name3: "आयशा थॉम्पसन",
        role3: "छात्रा, ग्रेड 11"
      },
      cta: {
        title: "अंतर लाने के लिए तैयार हैं?",
        description: "बेहतर शैक्षिक अनुभव बनाने के लिए आज ही हमारे स्कूलों, स्वयंसेवकों और छात्रों के समुदाय में शामिल हों।",
        signUp: "अभी साइन अप करें",
        learnMore: "और जानें"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie']
    }
  });

export default i18n;