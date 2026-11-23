const translations = {
    ar: {
        pageTitle: "العود الذهبي | للعطور الفاخرة",
        navHome: "الصفحة الرئيسية",
        navContact: "اتصل بنا",
        navBranches: "فروعنا",
        navProducts: "المنتجات",
        categoriesTitle: "انواع العطور",
        catMen: "عطور رجالية",
        catWomen: "عطور نسائية",
        catOudMusk: "مسك والعود",
        catSplash: "اسبلاش",
        importantInfo: "معلومات مهمة",
        phoneLabel: "للتواصل عبر الهاتف :",
        whatsappLabel: "للتواصل عبر الواتساب :",
        branchesHeading: "فروعنا",
        branchBahary: "فرع بحري : 22 شارع الحجاري , بجوار مشويات ابو راوية , أمام سوبر ماركت شرابية",
        branchMoharam: "فرع محرم بك : شارع منشا, امام مقهى السلطان, بعد بنزينة موبيل",
        branchHadra: "فرع الحضرة الجديدة : امام مستشفي الروماني , بجوار عصير ابن الحته",
        currentLangLabel: "العربية"
    },
    en: {
        pageTitle: "The Golden Oud | Luxury Perfumes",
        navHome: "Home",
        navContact: "Contact Us",
        navBranches: "Branches",
        navProducts: "Products",
        categoriesTitle: "Perfume Types",
        catMen: "Men's Perfumes",
        catWomen: "Women's Perfumes",
        catOudMusk: "Musk & Oud",
        catSplash: "Splash",
        importantInfo: "Important Info",
        phoneLabel: "Contact via Phone :",
        whatsappLabel: "Contact via WhatsApp :",
        branchesHeading: "Our Branches",
        branchBahary: "Bahary Branch : 22 El-Hegary St, next to Abu Rawya Grills, opposite Sharabia Supermarket",
        branchMoharam: "Moharam Bek Branch : Mansha St, opposite El-Sultan Cafe, after Mobil Gas Station",
        branchHadra: "El-Hadra El-Gedida Branch : opposite El-Romany Hospital, next to Ibn El-Hetta Juice",
        currentLangLabel: "English"
    }
};

const langSwitcher = document.getElementById("langSwitcher");
const langTrigger = document.getElementById("langTrigger");
const langDropdown = document.getElementById("langDropdown");
const langCurrent = document.getElementById("langCurrent");
const langOptions = document.querySelectorAll(".lang-option");

function applyLanguage(lang) {
    const dict = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    if (langCurrent) {
        langCurrent.textContent = dict.currentLangLabel;
    }

    langOptions.forEach((opt) => {
        opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
    });
}

if (langTrigger && langSwitcher) {
    langTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langSwitcher.classList.toggle("open");
        langTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    langOptions.forEach((opt) => {
        opt.addEventListener("click", () => {
            const selectedLang = opt.getAttribute("data-lang");
            applyLanguage(selectedLang);
            langSwitcher.classList.remove("open");
            langTrigger.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove("open");
            langTrigger.setAttribute("aria-expanded", "false");
        }
    });
}