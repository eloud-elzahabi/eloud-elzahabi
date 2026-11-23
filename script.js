const firebaseConfig = {
    apiKey: "AIzaSyCcRkgz8m7QZ7ep1hXCffsVxi9ifq3p_yM",
    authDomain: "eloud-elzahabi.firebaseapp.com",
    projectId: "eloud-elzahabi",
    storageBucket: "eloud-elzahabi.firebasestorage.app",
    messagingSenderId: "672824829935",
    appId: "1:672824829935:web:da6809ddb65cf93aac781a",
    measurementId: "G-NZ2H2R00S1"
};

let firebaseAuth = null;
let firebaseDb = null;

if (window.firebase && firebaseConfig.apiKey) {
    try {
        const appInstance = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
        firebaseAuth = firebase.auth(appInstance);
        firebaseDb = firebase.firestore(appInstance);
        firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
    } catch (e) {
        firebaseAuth = null;
        firebaseDb = null;
    }
}

const translations = {
    ar: {
        pageTitle: "العود الذهبي | للعطور الفاخرة",
        navHome: "الصفحة الرئيسية",
        navReturn: "سياسة الاسترجاع",
        navContact: "اتصل بنا",
        navBranches: "فروعنا",
        navProducts: "المنتجات",
        prodOffers: "الخصومات والعروض",
        prodMen: "عطور رجالية",
        prodWomen: "عطور نسائية",
        prodOriental: "عطور شرقية",
        prodSplash: "بادي سبلاش / مخمرية",
        productsKicker: "العود الذهبي",
        offersSubDesc: "المنتجات التي تشمل خصومات وعروض خاصة حالياً فقط",
        menSubDesc: "تشكيلة مختارة من العطور الرجالية الفاخرة",
        womenSubDesc: "تشكيلة مختارة من العطور النسائية الراقية",
        orientalSubDesc: "عطور شرقية أصيلة بلمسات العود والعنبر",
        splashSubDesc: "بادي سبلاش ومخمريات بتركيبات ثابتة ومنعشة",
        emptyHeading: "لم يتم إضافة منتجات في هذا القسم بعد",
        emptyDesc: "التصميم جاهز ومرتبط بالقسم المحدد، وبمجرد تحديد المنتجات ستظهر هنا مباشرة.",
        backHomeBtn: "العودة إلى الصفحة الرئيسية",
        policyHeading: "سياسة الاسترجاع",
        policyRule1Title: "1 - يمنع استرجاع المنتجات :",
        policyRule1Text: "لايتم استرجاع المنتجات الا في حالات حفاظاً علي جودتها وحالتها لتقديم افضل جودة للعميل",
        policyRule2Title: "2 - الحالات المسموح بها الاسترجاع :",
        policyRule2Intro: "اذا وصل المنتج مكسور او تالف او به عيب او مختلف عن طلبك , مسموح الاسترجاع ونبدله لك بمنتج سليم بشرط :",
        policyCond1: "1 - الابلاغ فورا عند استلامه",
        policyCond2: "2 - الحفاظ علي المنتج حتا يتم مراجعة طلبك",
        policyCond3: "3 - ارسال صورة واضحة للمنتج وسبب تلفه",
        categoriesTitle: "انواع العطور",
        catMen: "عطور رجالية",
        catWomen: "عطور نسائية",
        catOriental: "عطور شرقية",
        catSplash: "بادي اسبلاش و مخمريات",
        importantInfo: "معلومات مهمة",
        phoneLabel: "للتواصل عبر الهاتف :",
        whatsappLabel: "للتواصل عبر الواتساب :",
        branchesHeading: "فروعنا",
        branchBahary: "فرع بحري : 22 شارع الحجاري , بجوار مشويات ابو راوية , أمام سوبر ماركت شرابية",
        branchHadra: "فرع الحضرة الجديدة : امام مستشفي الروماني , بجوار عصير ابن الحته",
        copyrightText: "© جميع الحقوق محفوظة - العود الذهبي 2026",
        currentLangLabel: "العربية",
        authNavText: "SIGN UP / LOGIN",
        googleOnlyDesc: "سجل دخولك أو أنشئ حسابك عبر حساب Google فقط، وسيظل محفوظاً على جهازك تلقائياً",
        continueWithGoogle: "تسجيل بواسطة حساب Google",
        chooseNameLabel: "اكتب الاسم الذي تريده",
        completeSignupBtn: "حفظ الاسم وتثبيت الحساب",
        logoutBtnText: "تسجيل الخروج",
        enterNameError: "من فضلك اكتب الاسم الذي تريده أولاً",
        authSuccessMsg: "تم تسجيل الدخول وحفظ الحساب على هذا الجهاز",
        signupSuccessMsg: "تم حفظ الاسم وتثبيت الحساب بنجاح",
        authErrorMsg: "تعذر فتح نافذة Google، تأكد من فتح الموقع على سيرفر أو استضافة وتفعيل Google في Firebase"
    },
    en: {
        pageTitle: "The Golden Oud | Luxury Perfumes",
        navHome: "Home",
        navReturn: "Return Policy",
        navContact: "Contact Us",
        navBranches: "Branches",
        navProducts: "Products",
        prodOffers: "Discounts & Offers",
        prodMen: "Men's Perfumes",
        prodWomen: "Women's Perfumes",
        prodOriental: "Oriental Perfumes",
        prodSplash: "Body Splash / Body Musk",
        productsKicker: "The Golden Oud",
        offersSubDesc: "Showing discounted products and special offers only",
        menSubDesc: "Curated selection of luxury men's fragrances",
        womenSubDesc: "Curated selection of refined women's fragrances",
        orientalSubDesc: "Authentic oriental scents with oud and amber notes",
        splashSubDesc: "Refreshing body splashes and body musks",
        emptyHeading: "No products added in this section yet",
        emptyDesc: "The layout is ready and connected to this section; once you specify products, they will appear here.",
        backHomeBtn: "Back to Home",
        policyHeading: "Return Policy",
        policyRule1Title: "1 - Product Returns Are Prohibited :",
        policyRule1Text: "Products are not eligible for return except in specific cases to preserve their quality and condition and deliver the best quality to the customer.",
        policyRule2Title: "2 - Cases Eligible for Return :",
        policyRule2Intro: "If the product arrives broken, damaged, defective, or different from your order, return is allowed and we will replace it with a sound product provided that :",
        policyCond1: "1 - Report immediately upon receiving it",
        policyCond2: "2 - Keep the product intact until your request is reviewed",
        policyCond3: "3 - Send a clear photo of the product and the reason for damage",
        categoriesTitle: "Perfume Types",
        catMen: "Men's Perfumes",
        catWomen: "Women's Perfumes",
        catOriental: "Oriental Perfumes",
        catSplash: "Body Splash & Body Musk",
        importantInfo: "Important Info",
        phoneLabel: "Contact via Phone :",
        whatsappLabel: "Contact via WhatsApp :",
        branchesHeading: "Our Branches",
        branchBahary: "Bahary Branch : 22 El-Hegary St, next to Abu Rawya Grills, opposite Sharabia Supermarket",
        branchHadra: "El-Hadra El-Gedida Branch : opposite El-Romany Hospital, next to Ibn El-Hetta Juice",
        copyrightText: "© All Rights Reserved - The Golden Oud 2026",
        currentLangLabel: "English",
        authNavText: "SIGN UP / LOGIN",
        googleOnlyDesc: "Sign in or create your account using Google only; it stays saved automatically on this device",
        continueWithGoogle: "Continue with Google",
        chooseNameLabel: "Enter the name you want",
        completeSignupBtn: "Save Name & Keep Signed In",
        logoutBtnText: "Logout",
        enterNameError: "Please enter the name you want first",
        authSuccessMsg: "Signed in and saved on this device",
        signupSuccessMsg: "Name saved and account kept signed in",
        authErrorMsg: "Could not open Google sign-in; run on a server/hosting and enable Google in Firebase"
    }
};

const productsData = [];

const categoryMetaKeys = {
    offers: { titleKey: "prodOffers", descKey: "offersSubDesc" },
    men: { titleKey: "prodMen", descKey: "menSubDesc" },
    women: { titleKey: "prodWomen", descKey: "womenSubDesc" },
    oriental: { titleKey: "prodOriental", descKey: "orientalSubDesc" },
    splash: { titleKey: "prodSplash", descKey: "splashSubDesc" }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.getElementById("langSwitcher");
    const langTrigger = document.getElementById("langTrigger");
    const langCurrent = document.getElementById("langCurrent");
    const langOptions = document.querySelectorAll(".lang-option");

    const productsDropdownWrapper = document.getElementById("productsDropdownWrapper");
    const productsMenuBtn = document.getElementById("productsMenuBtn");

    const returnPolicyModal = document.getElementById("returnPolicyModal");
    const closePolicyBtn = document.getElementById("closePolicyBtn");

    const openAuthBtn = document.getElementById("openAuthBtn");
    const authNavLabel = document.getElementById("authNavLabel");
    const authModal = document.getElementById("authModal");
    const closeAuthBtn = document.getElementById("closeAuthBtn");
    const googleOnlyView = document.getElementById("googleOnlyView");
    const loggedInView = document.getElementById("loggedInView");
    const googleStepInitial = document.getElementById("googleStepInitial");
    const googleStepName = document.getElementById("googleStepName");
    const pickedGoogleEmail = document.getElementById("pickedGoogleEmail");
    const customUserNameInput = document.getElementById("customUserNameInput");
    const saveCustomNameBtn = document.getElementById("saveCustomNameBtn");
    const googleAuthBtn = document.getElementById("googleAuthBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const authStatusMsg = document.getElementById("authStatusMsg");
    const loggedUserName = document.getElementById("loggedUserName");
    const loggedUserEmail = document.getElementById("loggedUserEmail");
    const loggedUserRank = document.getElementById("loggedUserRank");

    const homeView = document.getElementById("homeView");
    const productsPage = document.getElementById("products");
    const homeNavLink = document.getElementById("homeNavLink");
    const logoHomeLink = document.getElementById("logoHomeLink");
    const backToHomeBtn = document.getElementById("backToHomeBtn");

    const productsSectionTitle = document.getElementById("productsSectionTitle");
    const productsSectionDesc = document.getElementById("productsSectionDesc");
    const productsEmptyBox = document.getElementById("productsEmptyBox");
    const productsGrid = document.getElementById("productsGrid");
    const tabButtons = document.querySelectorAll(".product-tab-btn");
    const dropdownCategoryLinks = document.querySelectorAll(".products-dropdown-menu a[data-category]");
    const categoryBoxes = document.querySelectorAll(".category-box[data-category]");

    let currentLang = "ar";
    let currentCategory = "offers";
    let pendingGoogleUser = null;
    let activeProfile = null;

    function getDict() {
        return translations[currentLang] || translations.ar;
    }

    function setAuthStatus(msg) {
        if (authStatusMsg) authStatusMsg.textContent = msg || "";
    }

    function saveLocalSession(profile) {
        try {
            if (profile) {
                localStorage.setItem("goldenOudSession", JSON.stringify(profile));
            } else {
                localStorage.removeItem("goldenOudSession");
            }
        } catch (e) {}
    }

    function readLocalSession() {
        try {
            const raw = localStorage.getItem("goldenOudSession");
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function updateNavAuthState() {
        if (!authNavLabel) return;
        if (activeProfile && activeProfile.customName) {
            authNavLabel.textContent = activeProfile.customName;
        } else {
            authNavLabel.textContent = getDict().authNavText;
        }
    }

    function renderAuthPanel() {
        setAuthStatus("");
        if (activeProfile && activeProfile.customName) {
            if (googleOnlyView) googleOnlyView.classList.add("hidden");
            if (loggedInView) loggedInView.classList.remove("hidden");
            if (loggedUserName) loggedUserName.textContent = activeProfile.customName;
            if (loggedUserEmail) loggedUserEmail.textContent = activeProfile.email || "";
            if (loggedUserRank) loggedUserRank.textContent = activeProfile.rank || "member";
        } else {
            if (loggedInView) loggedInView.classList.add("hidden");
            if (googleOnlyView) googleOnlyView.classList.remove("hidden");
            if (googleStepInitial) googleStepInitial.classList.remove("hidden");
            if (googleStepName) googleStepName.classList.add("hidden");
            if (customUserNameInput) customUserNameInput.value = "";
        }
    }

    function openAuthModal() {
        if (!authModal) return;
        closeProductsMenu();
        closePolicyModal();
        renderAuthPanel();
        authModal.classList.add("open");
        authModal.setAttribute("aria-hidden", "false");
    }

    function closeAuthModal() {
        if (!authModal) return;
        authModal.classList.remove("open");
        authModal.setAttribute("aria-hidden", "true");
        setAuthStatus("");
    }

    if (openAuthBtn) {
        openAuthBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openAuthModal();
        });
    }

    if (closeAuthBtn) {
        closeAuthBtn.addEventListener("click", closeAuthModal);
    }

    if (authModal) {
        authModal.addEventListener("click", (e) => {
            if (e.target === authModal) closeAuthModal();
        });
    }

    if (googleAuthBtn) {
        googleAuthBtn.addEventListener("click", async () => {
            setAuthStatus("");
            if (!firebaseAuth) {
                setAuthStatus(getDict().authErrorMsg);
                return;
            }
            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                provider.setCustomParameters({ prompt: "select_account" });
                const result = await firebaseAuth.signInWithPopup(provider);
                const user = result.user;

                if (firebaseDb) {
                    const snap = await firebaseDb.collection("users").doc(user.uid).get();
                    if (snap.exists && snap.data().customName) {
                        activeProfile = snap.data();
                        saveLocalSession(activeProfile);
                        updateNavAuthState();
                        renderAuthPanel();
                        setAuthStatus(getDict().authSuccessMsg);
                        return;
                    }
                }

                pendingGoogleUser = user;
                if (pickedGoogleEmail) pickedGoogleEmail.textContent = user.email || "";
                if (googleStepInitial) googleStepInitial.classList.add("hidden");
                if (googleStepName) googleStepName.classList.remove("hidden");
                if (customUserNameInput) {
                    customUserNameInput.value = user.displayName || "";
                    customUserNameInput.focus();
                }
            } catch (err) {
                setAuthStatus(getDict().authErrorMsg);
            }
        });
    }

    if (saveCustomNameBtn) {
        saveCustomNameBtn.addEventListener("click", async () => {
            const desiredName = customUserNameInput ? customUserNameInput.value.trim() : "";
            if (!desiredName) {
                setAuthStatus(getDict().enterNameError);
                return;
            }
            const user = pendingGoogleUser || (firebaseAuth ? firebaseAuth.currentUser : null);
            if (!user) {
                setAuthStatus(getDict().authErrorMsg);
                return;
            }

            const profileData = {
                uid: user.uid,
                email: (user.email || "").toLowerCase(),
                customName: desiredName,
                rank: "member",
                updatedAt: Date.now()
            };

            try {
                if (firebaseDb) {
                    await firebaseDb.collection("users").doc(user.uid).set(profileData, { merge: true });
                }
                activeProfile = profileData;
                pendingGoogleUser = null;
                saveLocalSession(activeProfile);
                updateNavAuthState();
                renderAuthPanel();
                setAuthStatus(getDict().signupSuccessMsg);
            } catch (err) {
                setAuthStatus(getDict().authErrorMsg);
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                if (firebaseAuth) {
                    await firebaseAuth.signOut();
                }
            } catch (e) {}
            activeProfile = null;
            pendingGoogleUser = null;
            saveLocalSession(null);
            updateNavAuthState();
            renderAuthPanel();
        });
    }

    const cachedSession = readLocalSession();
    if (cachedSession && cachedSession.customName) {
        activeProfile = cachedSession;
        updateNavAuthState();
    }

    if (firebaseAuth) {
        firebaseAuth.onAuthStateChanged(async (user) => {
            if (!user) return;
            try {
                if (firebaseDb) {
                    const snap = await firebaseDb.collection("users").doc(user.uid).get();
                    if (snap.exists && snap.data().customName) {
                        activeProfile = snap.data();
                        saveLocalSession(activeProfile);
                        updateNavAuthState();
                        return;
                    }
                }
                if (activeProfile && activeProfile.uid === user.uid && activeProfile.customName) {
                    updateNavAuthState();
                }
            } catch (e) {}
        });
    }

    function renderCategoryHeader(category, lang) {
        const dict = translations[lang] || translations.ar;
        const meta = categoryMetaKeys[category] || categoryMetaKeys.offers;
        if (productsSectionTitle) {
            productsSectionTitle.textContent = dict[meta.titleKey];
        }
        if (productsSectionDesc) {
            productsSectionDesc.textContent = dict[meta.descKey];
        }
    }

    function renderProductsForCategory(category) {
        currentCategory = category;
        renderCategoryHeader(category, currentLang);

        tabButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-category") === category);
        });

        dropdownCategoryLinks.forEach((link) => {
            link.classList.toggle("active-filter", link.getAttribute("data-category") === category);
        });

        const filtered = productsData.filter((item) => {
            if (category === "offers") {
                return Boolean(item.hasDiscount);
            }
            return item.category === category;
        });

        if (!filtered.length) {
            if (productsEmptyBox) productsEmptyBox.classList.remove("hidden");
            if (productsGrid) {
                productsGrid.classList.add("hidden");
                productsGrid.innerHTML = "";
            }
            return;
        }

        if (productsEmptyBox) productsEmptyBox.classList.add("hidden");
        if (productsGrid) {
            productsGrid.classList.remove("hidden");
            productsGrid.innerHTML = "";
        }
    }

    function showProductsPage(category = "offers") {
        if (homeView) homeView.classList.add("hidden");
        if (productsPage) productsPage.classList.remove("hidden");
        if (homeNavLink) homeNavLink.classList.remove("active");
        if (productsMenuBtn) productsMenuBtn.classList.add("active");
        renderProductsForCategory(category);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showHomePage() {
        if (productsPage) productsPage.classList.add("hidden");
        if (homeView) homeView.classList.remove("hidden");
        if (productsMenuBtn) productsMenuBtn.classList.remove("active");
        if (homeNavLink) homeNavLink.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function applyLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang] || translations.ar;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "en" ? "ltr" : "rtl";

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        updateNavAuthState();
        renderCategoryHeader(currentCategory, currentLang);

        if (langCurrent) {
            langCurrent.textContent = dict.currentLangLabel;
        }

        langOptions.forEach((opt) => {
            opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
        });
    }

    function openProductsMenu() {
        if (!productsDropdownWrapper || !productsMenuBtn) return;
        productsDropdownWrapper.classList.add("open");
        productsMenuBtn.setAttribute("aria-expanded", "true");
    }

    function closeProductsMenu() {
        if (!productsDropdownWrapper || !productsMenuBtn) return;
        productsDropdownWrapper.classList.remove("open");
        productsMenuBtn.setAttribute("aria-expanded", "false");
    }

    if (productsMenuBtn && productsDropdownWrapper) {
        productsMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (productsDropdownWrapper.classList.contains("open")) {
                closeProductsMenu();
            } else {
                openProductsMenu();
            }
        });
    }

    dropdownCategoryLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = link.getAttribute("data-category") || "offers";
            closeProductsMenu();
            showProductsPage(cat);
        });
    });

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category") || "offers";
            renderProductsForCategory(cat);
        });
    });

    categoryBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const cat = box.getAttribute("data-category") || "offers";
            showProductsPage(cat);
        });
    });

    if (homeNavLink) {
        homeNavLink.addEventListener("click", (e) => {
            e.preventDefault();
            showHomePage();
        });
    }

    if (logoHomeLink) {
        logoHomeLink.addEventListener("click", (e) => {
            e.preventDefault();
            showHomePage();
        });
    }

    if (backToHomeBtn) {
        backToHomeBtn.addEventListener("click", showHomePage);
    }

    function openPolicyModal() {
        if (!returnPolicyModal) return;
        closeProductsMenu();
        closeAuthModal();
        returnPolicyModal.classList.add("open");
        returnPolicyModal.setAttribute("aria-hidden", "false");
    }

    function closePolicyModal() {
        if (!returnPolicyModal) return;
        returnPolicyModal.classList.remove("open");
        returnPolicyModal.setAttribute("aria-hidden", "true");
    }

    document.addEventListener("click", (e) => {
        const policyTrigger = e.target.closest("#returnPolicyBtn, a[href='#return-policy'], a[href='#return']");
        if (policyTrigger) {
            e.preventDefault();
            openPolicyModal();
            return;
        }

        if (productsDropdownWrapper && !productsDropdownWrapper.contains(e.target)) {
            closeProductsMenu();
        }
    });

    if (closePolicyBtn) {
        closePolicyBtn.addEventListener("click", closePolicyModal);
    }

    if (returnPolicyModal) {
        returnPolicyModal.addEventListener("click", (e) => {
            if (e.target === returnPolicyModal) closePolicyModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closePolicyModal();
            closeAuthModal();
            closeProductsMenu();
        }
    });

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
});

function updateCartDisplay(count, total) {
    const countEl = document.getElementById("cartCount");
    const totalEl = document.getElementById("cartTotal");
    if (countEl) countEl.textContent = count;
    if (totalEl) totalEl.textContent = total;
}