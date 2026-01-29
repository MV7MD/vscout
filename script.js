const toggleBtn = document.getElementById('theme-toggle');
const langBtn = document.getElementById('lang-toggle');
const themeIcon = toggleBtn.querySelector('i');
const nav = document.getElementById('main-nav');

// قاموس الترجمة
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_join: "سجل كلاعب", // معدل
        nav_about: "من نحن",
        nav_goals: "أهدافنا",
        nav_contact: "تواصل معنا",
        hero_title_1: "أظهر مهاراتك للعالم مع",
        hero_desc: "المنصة الأولى لدعم المواهب الكروية الصاعدة. نحن الجسر بين مهارتك والأندية المحترفة.",
        hero_cta: "سجل الآن",
        
        // Join Section Translation
        join_title: "انضم إلينا",
        role_player: "لاعب موهوب",
        role_player_desc: "هل تبحث عن فرصة؟ املأ الاستمارة الآن وارفع فيديوهاتك ليشاهدك الكشافة.",
        role_btn_text: "سجل بياناتك الآن",

        goals_title: "أهدافنا",
        goal_1_title: "عرض المهارات",
        goal_1_desc: "نصمم لك ملف احترافي يعرض أفضل لقطاتك ومهاراتك بشكل يجذب المدربين.",
        goal_2_title: "جلب العروض",
        goal_2_desc: "نتواصل مع الأندية والكشافة لتوفير فرص اختبار حقيقية وعقود احتراف.",
        goal_3_title: "التطوير والتحليل",
        goal_3_desc: "نقدم نصائح وتحليلات لأدائك لتطوير مستواك والوصول للجاهزية التامة.",
        about_title: "من نحن",
        about_head: "نحن نؤمن بكل موهبة",
        about_p1: "في VSCOUT، إحنا مؤمنين إن فيه آلاف المواهب المدفونة في كل مكان، ومحتاجين بس فرصة حقيقية. هدفنا مش بس إننا نعملك فيديو، هدفنا إننا نكون صوتك وصورتك قدام الأندية الكبيرة.",
        about_p2: "إحنا فريق من المحللين والرياضيين قررنا نلغي فكرة (الواسطة) ونخلي (الموهبة) هي الحكم. بنوفرلك منصة احترافية تعرض فيها مهاراتك، وإحنا علينا نوصلها للكشافين والمدربين الصح.",
        about_cta: "انضم لعائلتنا",
        contact_title: "تواصل معنا",
        form_name: "اسم اللاعب",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_msg: "تفاصيل عن مركزك وخبراتك...",
        form_btn: "راسلنا عبر الإيميل"
    },
    en: {
        nav_home: "Home",
        nav_join: "Join as Player", // Modified
        nav_about: "About Us",
        nav_goals: "Goals",
        nav_contact: "Contact",
        hero_title_1: "Show Your Skills With",
        hero_desc: "The #1 platform for rising football talents. We are the bridge between your skills and professional clubs.",
        hero_cta: "Join Now",
        
        // Join Section Translation
        join_title: "Join Us",
        role_player: "Talented Player",
        role_player_desc: "Looking for a chance? Fill out the form and upload your videos for scouts to see.",
        role_btn_text: "Register Now",

        goals_title: "Our Goals",
        goal_1_title: "Showcase Skills",
        goal_1_desc: "We create a professional profile highlighting your best clips to attract coaches.",
        goal_2_title: "Scouting Opportunities",
        goal_2_desc: "We connect with clubs and scouts to provide real trials and professional contracts.",
        goal_3_title: "Development & Analysis",
        goal_3_desc: "We offer performance analysis and tips to improve your level and readiness.",
        about_title: "About Us",
        about_head: "We Believe in Every Talent",
        about_p1: "At VSCOUT, we believe that thousands of talents are hidden everywhere, just waiting for a real chance. Our goal is not just to make a video for you, but to be your voice and image in front of big clubs.",
        about_p2: "We are a team of analysts and athletes who decided to eliminate 'connections' and let 'talent' be the judge. We provide a professional platform to showcase your skills, and we take care of delivering them to the right scouts and coaches.",
        about_cta: "Join Our Family",
        contact_title: "Contact Us",
        form_name: "Player Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_msg: "Details about your position & experience...",
        form_btn: "Email Us"
    }
};

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
if (savedTheme === 'dark') themeIcon.classList.replace('fa-moon', 'fa-sun');

let currentLang = localStorage.getItem('lang') || 'ar';
updateLanguage(currentLang);

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const animateElements = document.querySelectorAll('.animate-hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.15 });

animateElements.forEach(el => observer.observe(el));