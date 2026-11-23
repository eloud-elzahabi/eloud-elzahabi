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
        backToProductsBtn: "← العودة إلى المنتجات",
        addToCartBtn: "أضف إلى السلة",
        addToCartFullBtn: "إضافة إلى سلة المشتريات",
        addedToCartBtn: "تمت الإضافة للسلة",
        viewProductBtn: "مشاهدة المنتج",
        currencySuffix: "EGY",
        cartDrawerHeading: "سلة المشتريات",
        cartEmptyText: "السلة فارغة حالياً",
        removeItemText: "حذف",
        cartSubtotalLabel: "الإجمالي",
        checkoutBtnText: "إتمام الطلب",
        continueShoppingText: "تكملة التسوق",
        policyHeading: "سياسة الاسترجاع",
        policyRule1Title: "1 - يمنع استرجاع المنتجات :",
        policyRule1Text: "لايتم استرجاع المنتجات الا في حالات حفاظاً علي جودتها وحالتها لتقديم افضل جودة للعميل",
        policyRule2Title: "2 - الحالات المسموح بها الاسترجاع :",
        policyRule2Intro: "اذا وصل المنتج مكسور او تالف او به عيب او مختلف عن طلبك , مسموح الاسترجاع ونبدله لك بمنتج سليم بشرط :",
        policyCond1: "1 - الابلاغ فورا عند استلامه",
        policyCond2: "2 - الحفاظ علي المنتج حتا يتم مراجعة طلبك",
        policyCond3: "3 - ارسال صورة واضحة للمنتج وسبب تلفه",
        categoriesTitle: "انواع العطور",
        homeMenShowcaseTitle: "العطور الرجالية",
        homeWomenShowcaseTitle: "العطور النسائية",
        homeOrientalShowcaseTitle: "العطور الشرقية",
        homeSplashShowcaseTitle: "بادي اسبلاش و مخمريات",
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
        authErrorMsg: "تعذر إتمام تسجيل Google، تأكد من تفعيل Google في Authentication وإضافة الدومين في Authorized domains"
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
        backToProductsBtn: "← Back to Products",
        addToCartBtn: "Add to Cart",
        addToCartFullBtn: "Add to Shopping Cart",
        addedToCartBtn: "Added to Cart",
        viewProductBtn: "View Product",
        currencySuffix: "EGY",
        cartDrawerHeading: "Shopping Cart",
        cartEmptyText: "Your cart is currently empty",
        removeItemText: "Remove",
        cartSubtotalLabel: "Total",
        checkoutBtnText: "Checkout",
        continueShoppingText: "Continue Shopping",
        policyHeading: "Return Policy",
        policyRule1Title: "1 - Product Returns Are Prohibited :",
        policyRule1Text: "Products are not eligible for return except in specific cases to preserve their quality and condition and deliver the best quality to the customer.",
        policyRule2Title: "2 - Cases Eligible for Return :",
        policyRule2Intro: "If the product arrives broken, damaged, defective, or different from your order, return is allowed and we will replace it with a sound product provided that :",
        policyCond1: "1 - Report immediately upon receiving it",
        policyCond2: "2 - Keep the product intact until your request is reviewed",
        policyCond3: "3 - Send a clear photo of the product and the reason for damage",
        categoriesTitle: "Perfume Types",
        homeMenShowcaseTitle: "Men's Perfumes",
        homeWomenShowcaseTitle: "Women's Perfumes",
        homeOrientalShowcaseTitle: "Oriental Perfumes",
        homeSplashShowcaseTitle: "Body Splash & Body Musk",
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
        authErrorMsg: "Google sign-in could not complete; ensure Google is enabled in Authentication and your domain is in Authorized domains"
    }
};

const productsData = Array.isArray(window.GOLDEN_OUD_PRODUCTS) ? window.GOLDEN_OUD_PRODUCTS : [];

const categoryMetaKeys = {
    offers: { titleKey: "prodOffers", descKey: "offersSubDesc" },
    men: { titleKey: "prodMen", descKey: "menSubDesc" },
    women: { titleKey: "prodWomen", descKey: "womenSubDesc" },
    oriental: { titleKey: "prodOriental", descKey: "orientalSubDesc" },
    splash: { titleKey: "prodSplash", descKey: "splashSubDesc" }
};

let cartItemsList = [];
window.cartItemsList = cartItemsList;

function getCartTotals() {
    let totalCount = 0;
    let totalAmount = 0;
    cartItemsList.forEach((entry) => {
        totalCount += entry.qty;
        totalAmount += entry.qty * entry.unitPrice;
    });
    return { totalCount, totalAmount };
}

function updateCartDisplay(count, total) {
    const countEl = document.getElementById("cartCount");
    const totalEl = document.getElementById("cartTotal");
    const drawerTotalEl = document.getElementById("drawerCartTotal");
    if (countEl) countEl.textContent = String(Number(count) || 0);
    if (totalEl) totalEl.textContent = String(Number(total) || 0);
    if (drawerTotalEl) drawerTotalEl.textContent = String(Number(total) || 0);
}

document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.getElementById("langSwitcher");
    const langTrigger = document.getElementById("langTrigger");
    const langCurrent = document.getElementById("langCurrent");
    const langOptions = document.querySelectorAll(".lang-option");

    const productsDropdownWrapper = document.getElementById("productsDropdownWrapper");
    const productsMenuBtn = document.getElementById("productsMenuBtn");

    const homeView = document.getElementById("homeView");
    const productsPage = document.getElementById("products");
    const productDetailPage = document.getElementById("productDetailPage");
    const checkoutPage = document.getElementById("checkoutPage");

    const homeShowcases = [
        { category: "men", container: document.getElementById("homeMenGrid") },
        { category: "women", container: document.getElementById("homeWomenGrid") },
        { category: "oriental", container: document.getElementById("homeOrientalGrid") },
        { category: "splash", container: document.getElementById("homeSplashGrid") }
    ];

    const detailBackToProductsBtn = document.getElementById("detailBackToProductsBtn");
    const detailProductImg = document.getElementById("detailProductImg");
    const detailProductType = document.getElementById("detailProductType");
    const detailProductName = document.getElementById("detailProductName");
    const detailProductPrice = document.getElementById("detailProductPrice");
    const detailSizesRow = document.getElementById("detailSizesRow");
    const detailProductNote = document.getElementById("detailProductNote");
    const detailQtyMinusBtn = document.getElementById("detailQtyMinusBtn");
    const detailQtyValue = document.getElementById("detailQtyValue");
    const detailQtyPlusBtn = document.getElementById("detailQtyPlusBtn");
    const detailAddToCartBtn = document.getElementById("detailAddToCartBtn");
    const detailContinueBtn = document.getElementById("detailContinueBtn");

    const openCartBtn = document.getElementById("openCartBtn");
    const cartDrawerBackdrop = document.getElementById("cartDrawerBackdrop");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartDrawerItems = document.getElementById("cartDrawerItems");
    const continueShoppingBtn = document.getElementById("continueShoppingBtn");
    const checkoutOrderBtn = document.getElementById("checkoutOrderBtn");

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
    let activeDetailProduct = null;
    let detailSelectedQty = 1;
    let pendingGoogleUser = null;
    let activeProfile = null;
    const selectedSizesByProduct = {};

    function getDict() {
        return translations[currentLang] || translations.ar;
    }

    function getCategoryLabel(catKey) {
        const dict = getDict();
        const meta = categoryMetaKeys[catKey];
        return meta ? dict[meta.titleKey] : dict.prodMen;
    }

    function syncCheckoutSummaryIfOpen() {
        if (window.CheckoutModule && typeof window.CheckoutModule.refreshSummary === "function") {
            window.CheckoutModule.refreshSummary();
        }
    }

    function renderHomeCategoryRow(categoryKey, targetGrid) {
        if (!targetGrid) return;
        const dict = getDict();
        targetGrid.innerHTML = "";

        const matchingProducts = productsData.filter((item) => item.category === categoryKey);
        matchingProducts.forEach((item) => {
            const availableSizes = Object.keys(item.prices || {});
            const activeSize = selectedSizesByProduct[item.id] || item.defaultSize || availableSizes[0] || "50g";
            const priceVal = item.prices ? (item.prices[activeSize] ?? Object.values(item.prices)[0] ?? 0) : 0;

            const card = document.createElement("article");
            card.className = "home-men-card";

            const imgWrap = document.createElement("div");
            imgWrap.className = "home-men-img-wrap";
            imgWrap.addEventListener("click", () => openProductDetailPage(item));

            const img = document.createElement("img");
            img.className = "home-men-img";
            img.src = item.image;
            img.alt = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;
            imgWrap.appendChild(img);

            const typeEl = document.createElement("span");
            typeEl.className = "home-men-type";
            typeEl.textContent = getCategoryLabel(categoryKey);

            const priceEl = document.createElement("p");
            priceEl.className = "home-men-price";
            priceEl.textContent = `${priceVal} ${dict.currencySuffix}`;

            const viewBtn = document.createElement("button");
            viewBtn.type = "button";
            viewBtn.className = "home-men-view-btn";
            viewBtn.textContent = dict.viewProductBtn;
            viewBtn.addEventListener("click", () => openProductDetailPage(item));

            card.appendChild(imgWrap);
            card.appendChild(typeEl);
            card.appendChild(priceEl);
            card.appendChild(viewBtn);

            targetGrid.appendChild(card);
        });
    }

    function renderAllHomeShowcases() {
        homeShowcases.forEach(({ category, container }) => {
            renderHomeCategoryRow(category, container);
        });
    }

    function syncDetailQtyDisplay() {
        if (detailQtyValue) {
            detailQtyValue.textContent = String(detailSelectedQty);
        }
    }

    if (detailQtyMinusBtn) {
        detailQtyMinusBtn.addEventListener("click", () => {
            if (detailSelectedQty > 1) {
                detailSelectedQty -= 1;
                syncDetailQtyDisplay();
            }
        });
    }

    if (detailQtyPlusBtn) {
        detailQtyPlusBtn.addEventListener("click", () => {
            detailSelectedQty += 1;
            syncDetailQtyDisplay();
        });
    }

    function renderProductDetailPage() {
        if (!productDetailPage || !activeDetailProduct) return;
        const dict = getDict();
        const item = activeDetailProduct;
        const availableSizes = Object.keys(item.prices || {});
        const currentSize = selectedSizesByProduct[item.id] || item.defaultSize || availableSizes[0] || "50g";
        selectedSizesByProduct[item.id] = currentSize;

        if (detailBackToProductsBtn) {
            detailBackToProductsBtn.textContent = dict.backToProductsBtn;
        }
        if (detailProductImg) {
            detailProductImg.src = item.image;
            detailProductImg.alt = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;
        }
        if (detailProductType) {
            detailProductType.textContent = getCategoryLabel(item.category);
        }
        if (detailProductName) {
            detailProductName.textContent = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;
        }
        if (detailProductPrice) {
            const activePrice = item.prices[currentSize] ?? 0;
            detailProductPrice.textContent = `${activePrice} ${dict.currencySuffix}`;
        }
        if (detailProductNote) {
            detailProductNote.textContent = currentLang === "en" ? (item.noteEn || item.noteAr || "") : (item.noteAr || "");
        }

        syncDetailQtyDisplay();

        if (detailSizesRow) {
            detailSizesRow.innerHTML = "";
            const btns = [];
            availableSizes.forEach((sizeKey) => {
                const circleBtn = document.createElement("button");
                circleBtn.type = "button";
                circleBtn.className = "size-circle-btn" + (sizeKey === selectedSizesByProduct[item.id] ? " active" : "");
                circleBtn.textContent = sizeKey;
                circleBtn.addEventListener("click", () => {
                    selectedSizesByProduct[item.id] = sizeKey;
                    btns.forEach((b) => b.classList.toggle("active", b === circleBtn));
                    if (detailProductPrice) {
                        detailProductPrice.textContent = `${item.prices[sizeKey] ?? 0} ${getDict().currencySuffix}`;
                    }
                    renderProductsForCategory(currentCategory);
                    renderAllHomeShowcases();
                });
                btns.push(circleBtn);
                detailSizesRow.appendChild(circleBtn);
            });
        }

        if (detailAddToCartBtn) {
            detailAddToCartBtn.textContent = dict.addToCartFullBtn;
        }
        if (detailContinueBtn) {
            detailContinueBtn.textContent = dict.continueShoppingText;
        }
    }

    function openProductDetailPage(product) {
        if (!productDetailPage || !product) return;
        closeProductsMenu();
        closePolicyModal();
        closeAuthModal();
        closeCartDrawer();

        activeDetailProduct = product;
        detailSelectedQty = 1;

        if (homeView) homeView.classList.add("hidden");
        if (productsPage) productsPage.classList.add("hidden");
        if (checkoutPage) checkoutPage.classList.add("hidden");
        productDetailPage.classList.remove("hidden");
        if (homeNavLink) homeNavLink.classList.remove("active");
        if (productsMenuBtn) productsMenuBtn.classList.add("active");

        renderProductDetailPage();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (detailBackToProductsBtn) {
        detailBackToProductsBtn.addEventListener("click", () => {
            showProductsPage(currentCategory);
        });
    }

    if (detailContinueBtn) {
        detailContinueBtn.addEventListener("click", () => {
            showProductsPage(currentCategory);
        });
    }

    if (detailAddToCartBtn) {
        detailAddToCartBtn.addEventListener("click", () => {
            if (!activeDetailProduct) return;
            const sizeKey = selectedSizesByProduct[activeDetailProduct.id] || activeDetailProduct.defaultSize || "50g";
            addItemToCartDrawer(activeDetailProduct, sizeKey, detailSelectedQty);
        });
    }

    function removeCartItemAt(index) {
        if (index < 0 || index >= cartItemsList.length) return;
        cartItemsList.splice(index, 1);
        renderCartDrawer();
        syncCheckoutSummaryIfOpen();
    }

    function renderCartDrawer() {
        const dict = getDict();
        const { totalCount, totalAmount } = getCartTotals();
        updateCartDisplay(totalCount, totalAmount);

        if (!cartDrawerItems) return;
        cartDrawerItems.innerHTML = "";

        if (!cartItemsList.length) {
            const emptyMsg = document.createElement("p");
            emptyMsg.className = "cart-empty-msg";
            emptyMsg.textContent = dict.cartEmptyText;
            cartDrawerItems.appendChild(emptyMsg);
            return;
        }

        cartItemsList.forEach((item, idx) => {
            const row = document.createElement("div");
            row.className = "cart-item-card";

            const leftGroup = document.createElement("div");
            leftGroup.className = "cart-item-left";

            const thumb = document.createElement("img");
            thumb.className = "cart-item-thumb";
            thumb.src = item.image || "images/p1.jpg";
            thumb.alt = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;

            const info = document.createElement("div");
            info.className = "cart-item-info";

            const topLine = document.createElement("div");
            topLine.className = "cart-item-top-line";

            const nameSpan = document.createElement("span");
            nameSpan.className = "cart-item-name";
            nameSpan.textContent = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;

            const qtySpan = document.createElement("span");
            qtySpan.className = "cart-item-qty";
            qtySpan.textContent = `${item.qty}x`;

            topLine.appendChild(nameSpan);
            topLine.appendChild(qtySpan);

            const variantSpan = document.createElement("span");
            variantSpan.className = "cart-item-variant";
            variantSpan.textContent = item.size;

            info.appendChild(topLine);
            info.appendChild(variantSpan);

            leftGroup.appendChild(thumb);
            leftGroup.appendChild(info);

            const rightGroup = document.createElement("div");
            rightGroup.className = "cart-item-right";

            const priceSpan = document.createElement("span");
            priceSpan.className = "cart-item-price";
            priceSpan.textContent = `${item.qty * item.unitPrice} ${dict.currencySuffix}`;

            const removeBtn = document.createElement("button");
            removeBtn.type = "button";
            removeBtn.className = "cart-item-remove-btn";
            removeBtn.textContent = dict.removeItemText;
            removeBtn.addEventListener("click", () => removeCartItemAt(idx));

            rightGroup.appendChild(priceSpan);
            rightGroup.appendChild(removeBtn);

            row.appendChild(leftGroup);
            row.appendChild(rightGroup);
            cartDrawerItems.appendChild(row);
        });
    }

    function openCartDrawer() {
        if (!cartDrawerBackdrop) return;
        closeProductsMenu();
        closePolicyModal();
        closeAuthModal();
        renderCartDrawer();
        cartDrawerBackdrop.classList.add("open");
        cartDrawerBackdrop.setAttribute("aria-hidden", "false");
    }

    function closeCartDrawer() {
        if (!cartDrawerBackdrop) return;
        cartDrawerBackdrop.classList.remove("open");
        cartDrawerBackdrop.setAttribute("aria-hidden", "true");
    }

    function addItemToCartDrawer(product, sizeKey, qtyToAdd = 1) {
        const cleanQty = Math.max(1, Number(qtyToAdd) || 1);
        const unitPrice = Number(product.prices[sizeKey] ?? 0);
        const existing = cartItemsList.find(
            (entry) => entry.productId === product.id && entry.size === sizeKey
        );

        if (existing) {
            existing.qty += cleanQty;
            existing.unitPrice = unitPrice;
            if (product.image) existing.image = product.image;
        } else {
            cartItemsList.push({
                productId: product.id,
                nameAr: product.nameAr,
                nameEn: product.nameEn,
                image: product.image,
                size: sizeKey,
                qty: cleanQty,
                unitPrice
            });
        }

        renderCartDrawer();
        syncCheckoutSummaryIfOpen();
        openCartDrawer();
    }

    if (openCartBtn) {
        openCartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", closeCartDrawer);
    }

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener("click", closeCartDrawer);
    }

    if (cartDrawerBackdrop) {
        cartDrawerBackdrop.addEventListener("click", (e) => {
            if (e.target === cartDrawerBackdrop) {
                closeCartDrawer();
            }
        });
    }

    if (checkoutOrderBtn) {
        checkoutOrderBtn.addEventListener("click", () => {
            if (window.CheckoutModule && typeof window.CheckoutModule.open === "function") {
                window.CheckoutModule.open();
            }
        });
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

    function openNameStepForUser(user) {
        pendingGoogleUser = user;
        if (googleOnlyView) googleOnlyView.classList.remove("hidden");
        if (loggedInView) loggedInView.classList.add("hidden");
        if (pickedGoogleEmail) pickedGoogleEmail.textContent = user.email || "";
        if (googleStepInitial) googleStepInitial.classList.add("hidden");
        if (googleStepName) googleStepName.classList.remove("hidden");
        if (customUserNameInput) {
            customUserNameInput.value = user.displayName || "";
            customUserNameInput.focus();
        }
    }

    async function handleSignedInGoogleUser(user) {
        if (!user) return;
        if (firebaseDb) {
            try {
                const snap = await firebaseDb.collection("users").doc(user.uid).get();
                if (snap.exists && snap.data().customName) {
                    activeProfile = snap.data();
                    saveLocalSession(activeProfile);
                    updateNavAuthState();
                    renderAuthPanel();
                    setAuthStatus(getDict().authSuccessMsg);
                    return;
                }
            } catch (e) {}
        }
        openNameStepForUser(user);
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
        closeCartDrawer();
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
            const provider = new firebase.auth.GoogleAuthProvider();
            try {
                const result = await firebaseAuth.signInWithPopup(provider);
                await handleSignedInGoogleUser(result.user);
            } catch (err) {
                const code = err && err.code ? err.code : "";
                if (
                    code === "auth/popup-blocked" ||
                    code === "auth/cancelled-popup-request" ||
                    code === "auth/operation-not-supported-in-this-environment"
                ) {
                    try {
                        await firebaseAuth.signInWithRedirect(provider);
                        return;
                    } catch (redirectErr) {
                        setAuthStatus(getDict().authErrorMsg);
                        return;
                    }
                }
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
        firebaseAuth.getRedirectResult().then(async (res) => {
            if (res && res.user) {
                if (authModal) authModal.classList.add("open");
                await handleSignedInGoogleUser(res.user);
            }
        }).catch(() => {});

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

    function buildProductCard(item) {
        const dict = getDict();
        const availableSizes = Object.keys(item.prices || {});
        const initialSize = selectedSizesByProduct[item.id] || item.defaultSize || availableSizes[0] || "50g";
        selectedSizesByProduct[item.id] = initialSize;

        const card = document.createElement("article");
        card.className = "product-card";

        const imgWrap = document.createElement("div");
        imgWrap.className = "product-card-img-wrap";

        const img = document.createElement("img");
        img.className = "product-card-img";
        img.src = item.image;
        img.alt = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;
        imgWrap.appendChild(img);
        imgWrap.addEventListener("click", () => openProductDetailPage(item));

        const nameEl = document.createElement("h3");
        nameEl.className = "product-card-name";
        nameEl.textContent = currentLang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;
        nameEl.addEventListener("click", () => openProductDetailPage(item));

        const priceEl = document.createElement("p");
        priceEl.className = "product-card-price";

        function refreshPriceText() {
            const activeSize = selectedSizesByProduct[item.id];
            const activePrice = item.prices[activeSize] ?? 0;
            priceEl.textContent = `${activePrice} ${dict.currencySuffix}`;
        }

        refreshPriceText();

        const sizesRow = document.createElement("div");
        sizesRow.className = "product-sizes-row";

        const sizeButtons = [];
        availableSizes.forEach((sizeKey) => {
            const circleBtn = document.createElement("button");
            circleBtn.type = "button";
            circleBtn.className = "size-circle-btn" + (sizeKey === selectedSizesByProduct[item.id] ? " active" : "");
            circleBtn.textContent = sizeKey;
            circleBtn.addEventListener("click", () => {
                selectedSizesByProduct[item.id] = sizeKey;
                sizeButtons.forEach((b) => b.classList.toggle("active", b === circleBtn));
                refreshPriceText();
                renderAllHomeShowcases();
            });
            sizeButtons.push(circleBtn);
            sizesRow.appendChild(circleBtn);
        });

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "add-to-cart-rect-btn";
        addBtn.textContent = dict.addToCartBtn;
        addBtn.addEventListener("click", () => {
            const activeSize = selectedSizesByProduct[item.id];
            addItemToCartDrawer(item, activeSize, 1);

            addBtn.textContent = dict.addedToCartBtn;
            clearTimeout(addBtn._resetTimer);
            addBtn._resetTimer = setTimeout(() => {
                addBtn.textContent = getDict().addToCartBtn;
            }, 900);
        });

        card.appendChild(imgWrap);
        card.appendChild(nameEl);
        card.appendChild(priceEl);
        card.appendChild(sizesRow);
        card.appendChild(addBtn);

        return card;
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
            filtered.forEach((item) => {
                productsGrid.appendChild(buildProductCard(item));
            });
        }
    }

    function showProductsPage(category = "offers") {
        if (homeView) homeView.classList.add("hidden");
        if (productDetailPage) productDetailPage.classList.add("hidden");
        if (checkoutPage) checkoutPage.classList.add("hidden");
        if (productsPage) productsPage.classList.remove("hidden");
        if (homeNavLink) homeNavLink.classList.remove("active");
        if (productsMenuBtn) productsMenuBtn.classList.add("active");
        renderProductsForCategory(category);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showHomePage() {
        if (productsPage) productsPage.classList.add("hidden");
        if (productDetailPage) productDetailPage.classList.add("hidden");
        if (checkoutPage) checkoutPage.classList.add("hidden");
        if (homeView) homeView.classList.remove("hidden");
        if (productsMenuBtn) productsMenuBtn.classList.remove("active");
        if (homeNavLink) homeNavLink.classList.add("active");
        renderAllHomeShowcases();
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
        renderProductsForCategory(currentCategory);
        renderAllHomeShowcases();
        renderCartDrawer();
        syncCheckoutSummaryIfOpen();
        if (activeDetailProduct && productDetailPage && !productDetailPage.classList.contains("hidden")) {
            renderProductDetailPage();
        }

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
        closeCartDrawer();
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
            closeCartDrawer();
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

    renderAllHomeShowcases();
    renderCartDrawer();
});