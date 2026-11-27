(function () {
    const VODAFONE_TRANSFER_NUMBER = "01080949600";

    // مناطق الإسكندرية بالترتيب الجغرافي: [عربي, English] — القيمة المخزنة هي الاسم العربي
    const ALEXANDRIA_AREAS = [
        ["أبو قير", "Abu Qir"],
        ["طوسون", "Tosson"],
        ["المعمورة", "Maamoura"],
        ["المندرة", "Mandara"],
        ["العصافرة", "Asafra"],
        ["ميامي", "Miami"],
        ["سيدي بشر", "Sidi Bishr"],
        ["فيكتوريا", "Victoria"],
        ["الساعة", "El Saa'a"],
        ["السيوف", "Seyouf"],
        ["لوران", "Laurent"],
        ["ثروت", "Tharwat"],
        ["زيزينيا", "Zezenia"],
        ["جناكليس", "Gianaclis"],
        ["سان ستيفانو", "San Stefano"],
        ["جليم", "Glim"],
        ["سبا باشا", "Spa Pasha"],
        ["رشدي", "Roushdy"],
        ["كفر عبدة", "Kafr Abdo"],
        ["بولكلي", "Bolkly"],
        ["سيدي جابر", "Sidi Gaber"],
        ["مصطفى كامل", "Mostafa Kamel"],
        ["سموحة", "Smouha"],
        ["باكوس", "Bacos"],
        ["فلمنج", "Fleming"],
        ["الظاهرية", "Zahria"],
        ["الإبراهيمية", "Ibrahimia"],
        ["سبورتنج", "Sporting"],
        ["كليوباترا", "Cleopatra"],
        ["كامب شيزار", "Camp Caesar"],
        ["الشاطبي", "Shatby"],
        ["الأزاريطة", "Azarita"],
        ["محطة الرمل", "Mahattet El Raml"],
        ["العطارين", "Attarin"],
        ["محرم بك", "Moharram Bek"],
        ["الحضرة", "Hadra"],
        ["المنشية", "Mansheya"],
        ["بحري", "Bahary"],
        ["الأنفوشي", "Anfoushi"],
        ["رأس التين", "Ras El Tin"],
        ["اللبان", "Labban"],
        ["كرموز", "Karmouz"],
        ["كوم الدكة", "Kom El Dekka"],
        ["راغب", "Ragheb"],
        ["مينا البصل", "Mina El Basal"],
        ["القباري", "Qabbari"],
        ["الورديان", "Wardian"],
        ["المكس", "Max"],
        ["الدخيلة", "Dekheila"],
        ["العجمي", "Agami"],
        ["العامرية", "Amreya"],
        ["عبد القادر", "Abdel Qader"],
        ["برج العرب", "Borg El Arab"],
        ["كينج مريوط", "King Mariout"]
    ];

    // نصوص صفحة إتمام الطلب بالعربي والإنجليزي
    const CO_TEXT = {
        ar: {
            title: "إتمام الطلب", back: "← العودة", deliveryHeading: "بيانات التوصيل",
            lblName: "الاسم :", lblPhone: "رقم الهاتف / واتساب :", lblAlt: "رقم اخر : اختياري",
            lblGov: "المحافظة :", lblArea: "المنطقة :", lblAddress: "العنوان بالتفصيل :",
            lblNotes: "ملاحظات الطلب ( اختياري ) :", notesHint: "ملاحظات حول الطلب , ملحوظة خاصة قبل التسليم",
            summaryHeading: "ملخص الطلب", subtotal: "المجموع", total: "الإجمالي", paymentHeading: "اختيار الدفع",
            payCash: "1 - الدفع كاش عند الاستلام", payVodafone: "2 - الدفع بواسطة فودافون كاش", payInstapay: "3 - انستا باي",
            transferNumber: "رقم التحويل : ", copy: "نسخ الرقم",
            vodafoneNote: "ملحوظة : يجب ضروري عند تحويل المبلغ للرقم اخذ سكرين شوت وارسالة الي واتس 01080949600 لتاكيد عميلة الدفع",
            payNow: "ادفع الان", shippingNote: "ملحوظة : سعر الاجمالي لايشمل مصاريف الشحن, وتضاف قيمة التوصيل حسب منطقتك وبعدها عن الفروع", phName: "اسمك ثنائي", phAddress: "عنوانك بتفصيل وعلامة مميزة له",
            governorate: "الإسكندرية", chooseArea: "اختر المنطقة"
        },
        en: {
            title: "Checkout", back: "← Back", deliveryHeading: "Delivery Details",
            lblName: "Name :", lblPhone: "Phone / WhatsApp :", lblAlt: "Another number : optional",
            lblGov: "Governorate :", lblArea: "Area :", lblAddress: "Detailed Address :",
            lblNotes: "Order Notes ( optional ) :", notesHint: "Notes about the order, or a special note before delivery",
            summaryHeading: "Order Summary", subtotal: "Subtotal", total: "Total", paymentHeading: "Payment Method",
            payCash: "1 - Cash on Delivery", payVodafone: "2 - Pay with Vodafone Cash", payInstapay: "3 - InstaPay",
            transferNumber: "Transfer number : ", copy: "Copy",
            vodafoneNote: "Note : after transferring the amount to this number, you must take a screenshot and send it to WhatsApp 01080949600 to confirm the payment.",
            payNow: "Pay Now", shippingNote: "Note : the total price does not include shipping fees. The delivery fee is added according to your area and its distance from our branches.", phName: "Your first and last name", phAddress: "Your detailed address with a distinctive landmark",
            governorate: "Alexandria", chooseArea: "Choose your area"
        }
    };

    // رقم مصري كامل: 11 رقم يبدأ بـ 010 / 011 / 012 / 015
    function toEnglishDigits(str) {
        return String(str || "")
            .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632))
            .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 1776));
    }

    function cleanPhoneValue(raw) {
        return toEnglishDigits(raw).replace(/\D/g, "").slice(0, 11);
    }

    // يرجع نص الخطأ أو "" لو الرقم سليم
    function getPhoneError(value, lang) {
        const digits = cleanPhoneValue(value);
        if (digits.length < 11) {
            return lang === "en"
                ? `Incomplete number: it must be 11 digits (you entered ${digits.length}).`
                : `الرقم ناقص، لازم تكتب الرقم كامل 11 رقم (انت كتبت ${digits.length} أرقام فقط).`;
        }
        if (!/^01[0125]\d{8}$/.test(digits)) {
            return lang === "en"
                ? "Invalid Egyptian number. It must start with 010, 011, 012 or 015."
                : "رقم غير صحيح، لازم يبدأ بـ 010 أو 011 أو 012 أو 015.";
        }
        return "";
    }

    function setFieldError(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const err = document.getElementById(errorId);
        if (input) input.classList.toggle("invalid", !!message);
        if (err) {
            err.textContent = message || "";
            err.classList.toggle("show", !!message);
        }
    }

    function getCurrentLang() {
        return document.documentElement.lang === "en" ? "en" : "ar";
    }

    function getCartItems() {
        return Array.isArray(window.cartItemsList) ? window.cartItemsList : [];
    }

    function computeTotals() {
        const items = getCartItems();
        let count = 0;
        let subtotal = 0;

        items.forEach((item, idx) => {
            const qty = Number(item.qty) || 0;
            count += qty;
            if (typeof window.computeLineItemSubtotal === "function") {
                subtotal += window.computeLineItemSubtotal(item, idx);
            } else {
                const unitPrice = Number(item.unitPrice) || 0;
                subtotal += qty * unitPrice;
            }
        });

        return { count, subtotal, total: subtotal };
    }

    function populateAreas() {
        const select = document.getElementById("checkoutAreaSelect");
        if (!select) return;
        const lang = getCurrentLang();
        const previous = select.value;

        select.innerHTML = "";
        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = CO_TEXT[lang].chooseArea;
        select.appendChild(placeholder);

        const idx = lang === "en" ? 1 : 0;
        ALEXANDRIA_AREAS.forEach((pair) => {
                const opt = document.createElement("option");
                opt.value = pair[0];
                opt.textContent = pair[idx];
                select.appendChild(opt);
            });
        select.value = previous;
    }

    function applyCheckoutLanguage() {
        const lang = getCurrentLang();
        const dict = CO_TEXT[lang];

        document.querySelectorAll("[data-co]").forEach((el) => {
            const key = el.getAttribute("data-co");
            if (dict[key] !== undefined) el.textContent = dict[key];
        });
        document.querySelectorAll("[data-co-ph]").forEach((el) => {
            const key = el.getAttribute("data-co-ph");
            if (dict[key] !== undefined) el.placeholder = dict[key];
        });

        const gov = document.querySelector("#checkoutGovernorateSelect option");
        if (gov) gov.textContent = dict.governorate;
        populateAreas();

        // مسح رسائل الأخطاء القديمة (كانت بلغة تانية)
        setFieldError("checkoutPhoneInput", "checkoutPhoneError", "");
        setFieldError("checkoutAltPhoneInput", "checkoutAltPhoneError", "");
        setFieldError("checkoutAreaSelect", "checkoutAreaError", "");
        const feedbackEl = document.getElementById("checkoutFeedbackMsg");
        if (feedbackEl) feedbackEl.textContent = "";

        renderCheckoutOrderSummary();
    }

    function renderCheckoutOrderSummary() {
        const itemsContainer = document.getElementById("checkoutItemsList");
        const subtotalEl = document.getElementById("checkoutSubtotal");
        const totalEl = document.getElementById("checkoutTotal");
        const lang = getCurrentLang();
        const items = getCartItems();
        const { subtotal, total } = computeTotals();

        if (subtotalEl) subtotalEl.textContent = `${subtotal} EGY`;
        if (totalEl) totalEl.textContent = `${total} EGY`;

        if (!itemsContainer) return;
        itemsContainer.innerHTML = "";

        if (!items.length) {
            const emptyBox = document.createElement("div");
            emptyBox.className = "checkout-empty-cart";
            emptyBox.textContent =
                lang === "en"
                    ? "No products selected in the cart yet."
                    : "لا توجد منتجات مختارة في السلة حالياً.";
            itemsContainer.appendChild(emptyBox);
            return;
        }

        const allocations =
            typeof window.buildCartOfferAllocations === "function"
                ? window.buildCartOfferAllocations(items)
                : [];

        const freeText = lang === "en" ? "Free ( Offer )" : "مجاناً ( عرض )";

        function addRow(item, units, kind, pct) {
            const baseUnitPrice = Number(item.baseUnitPrice ?? item.unitPrice) || 0;
            const discountedUnitPrice = Math.round(baseUnitPrice * (1 - pct / 100));

            const row = document.createElement("div");
            row.className = "checkout-order-item" + (kind !== "normal" ? " is-offer-row" : "");

            const left = document.createElement("div");
            left.className = "checkout-order-item-left";

            const thumb = document.createElement("img");
            thumb.className = "checkout-order-thumb";
            thumb.src = item.image || "images/p1.jpg";
            thumb.alt = lang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;

            const meta = document.createElement("div");
            meta.className = "checkout-order-meta";

            const name = document.createElement("span");
            name.className = "checkout-order-name";
            name.textContent = lang === "en" ? (item.nameEn || item.nameAr) : item.nameAr;

            const sub = document.createElement("span");
            sub.className = "checkout-order-sub";
            sub.textContent = `${item.size || ""}  |  ${units}x  |  ${baseUnitPrice} EGY`;

            meta.appendChild(name);
            meta.appendChild(sub);
            left.appendChild(thumb);
            left.appendChild(meta);

            const lineTotal = document.createElement("span");
            lineTotal.className = "checkout-order-line-total";

            if (kind === "free") {
                const free = document.createElement("span");
                free.className = "offer-free-price-text";
                free.textContent = freeText;
                lineTotal.appendChild(free);
            } else if (kind === "discount") {
                const tag = document.createElement("span");
                tag.className = "checkout-offer-tag";
                tag.textContent = lang === "en" ? `${pct}% Off ( Offer )` : `خصم ${pct}% ( عرض )`;

                const prices = document.createElement("span");
                prices.className = "checkout-price-line";
                const oldP = document.createElement("span");
                oldP.className = "offer-old-price-strike";
                oldP.textContent = `${units * baseUnitPrice} EGY`;
                const newP = document.createElement("span");
                newP.className = "offer-new-price-text";
                newP.textContent = `${units * discountedUnitPrice} EGY`;
                prices.appendChild(oldP);
                prices.appendChild(newP);

                lineTotal.appendChild(prices);
                lineTotal.appendChild(tag);
            } else {
                lineTotal.textContent = `${units * baseUnitPrice} EGY`;
            }

            row.appendChild(left);
            row.appendChild(lineTotal);
            itemsContainer.appendChild(row);
        }

        items.forEach((item, idx) => {
            const qty = Math.max(1, Number(item.qty) || 1);
            const alloc = allocations[idx] || {};
            const freeUnits = Math.min(qty, Number(alloc.freeUnits) || 0);
            const discUnits = Math.min(qty - freeUnits, Number(alloc.discountedUnits) || 0);
            const normalUnits = Math.max(0, qty - freeUnits - discUnits);
            const pct = Number(alloc.discountedPercent) || Number(alloc.discountPercent) || 50;

            if (normalUnits > 0) addRow(item, normalUnits, "normal", 0);
            if (discUnits > 0) addRow(item, discUnits, "discount", pct);
            if (freeUnits > 0) addRow(item, freeUnits, "free", 100);
        });
    }

    function syncPaymentMethodUI() {
        const selectedRadio = document.querySelector('input[name="checkoutPaymentMethod"]:checked');
        const method = selectedRadio ? selectedRadio.value : "cash";
        const vodafoneBox = document.getElementById("vodafoneCashDetailsBox");
        const cards = document.querySelectorAll(".payment-option-card[data-payment]");

        cards.forEach((card) => {
            card.classList.toggle("active", card.getAttribute("data-payment") === method);
        });

        if (vodafoneBox) {
            vodafoneBox.classList.toggle("hidden", method !== "vodafone");
        }
    }

    function copyTransferNumber() {
        const feedbackEl = document.getElementById("checkoutFeedbackMsg");
        const copyTextEl = document.getElementById("copyNumberBtnText");
        const lang = getCurrentLang();

        const onCopied = () => {
            if (copyTextEl) {
                copyTextEl.textContent = lang === "en" ? "Copied" : "تم النسخ";
            }
            if (feedbackEl) {
                feedbackEl.textContent =
                    lang === "en"
                        ? `Number ${VODAFONE_TRANSFER_NUMBER} copied.`
                        : `تم نسخ رقم التحويل ${VODAFONE_TRANSFER_NUMBER}`;
            }
            setTimeout(() => {
                if (copyTextEl) {
                    copyTextEl.textContent = CO_TEXT[lang].copy;
                }
            }, 1600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(VODAFONE_TRANSFER_NUMBER).then(onCopied).catch(() => {
                fallbackCopy(VODAFONE_TRANSFER_NUMBER, onCopied);
            });
        } else {
            fallbackCopy(VODAFONE_TRANSFER_NUMBER, onCopied);
        }
    }

    function fallbackCopy(text, callback) {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            document.execCommand("copy");
        } catch (e) {}
        document.body.removeChild(tempInput);
        if (typeof callback === "function") callback();
    }

    function openCheckoutPage() {
        const checkoutPage = document.getElementById("checkoutPage");
        const homeView = document.getElementById("homeView");
        const productsPage = document.getElementById("products");
        const productDetailPage = document.getElementById("productDetailPage");
        const cartDrawerBackdrop = document.getElementById("cartDrawerBackdrop");
        const feedbackEl = document.getElementById("checkoutFeedbackMsg");

        if (cartDrawerBackdrop) {
            cartDrawerBackdrop.classList.remove("open");
            cartDrawerBackdrop.setAttribute("aria-hidden", "true");
        }
        if (homeView) homeView.classList.add("hidden");
        if (productsPage) productsPage.classList.add("hidden");
        if (productDetailPage) productDetailPage.classList.add("hidden");
        if (checkoutPage) checkoutPage.classList.remove("hidden");

        if (feedbackEl) feedbackEl.textContent = "";
        renderCheckoutOrderSummary();
        syncPaymentMethodUI();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function closeCheckoutPage() {
        const checkoutPage = document.getElementById("checkoutPage");
        const homeView = document.getElementById("homeView");
        if (checkoutPage) checkoutPage.classList.add("hidden");
        if (homeView) homeView.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handlePayNowSubmit(e) {
        e.preventDefault();
        const lang = getCurrentLang();
        const feedbackEl = document.getElementById("checkoutFeedbackMsg");
        const nameInput = document.getElementById("checkoutNameInput");
        const phoneInput = document.getElementById("checkoutPhoneInput");
        const addressInput = document.getElementById("checkoutAddressInput");
        const selectedRadio = document.querySelector('input[name="checkoutPaymentMethod"]:checked');

        const customerName = nameInput ? nameInput.value.trim() : "";
        const customerPhone = phoneInput ? cleanPhoneValue(phoneInput.value) : "";
        const customerAddress = addressInput ? addressInput.value.trim() : "";
        const paymentMethod = selectedRadio ? selectedRadio.value : "cash";

        if (!getCartItems().length) {
            if (feedbackEl) {
                feedbackEl.textContent =
                    lang === "en"
                        ? "Please add products to the cart first."
                        : "من فضلك أضف منتجات إلى السلة أولاً.";
            }
            return;
        }

        const altPhoneInput = document.getElementById("checkoutAltPhoneInput");
        const areaSelect = document.getElementById("checkoutAreaSelect");
        const governorateSelect = document.getElementById("checkoutGovernorateSelect");
        const altPhone = altPhoneInput ? cleanPhoneValue(altPhoneInput.value) : "";
        const area = areaSelect ? areaSelect.value : "";
        const governorate = governorateSelect ? governorateSelect.value : "alexandria";

        const phoneErr = customerPhone ? getPhoneError(customerPhone, lang) : "";
        const altErr = altPhone ? getPhoneError(altPhone, lang) : "";
        const areaErr = area ? "" : (lang === "en" ? "Please choose your area." : "من فضلك اختر المنطقة.");
        setFieldError("checkoutPhoneInput", "checkoutPhoneError", phoneErr);
        setFieldError("checkoutAltPhoneInput", "checkoutAltPhoneError", altErr);
        setFieldError("checkoutAreaSelect", "checkoutAreaError", areaErr);

        if (!customerName || !customerPhone || !customerAddress) {
            if (feedbackEl) {
                feedbackEl.textContent =
                    lang === "en"
                        ? "Please fill in Name, Phone/WhatsApp, and Detailed Address."
                        : "من فضلك اكتب الاسم ورقم الهاتف / واتساب والعنوان بالتفصيل.";
            }
            return;
        }

        if (phoneErr || altErr || areaErr) {
            if (feedbackEl) feedbackEl.textContent = phoneErr || altErr || areaErr;
            const firstBad = phoneErr ? phoneInput : (altErr ? altPhoneInput : areaSelect);
            if (firstBad) firstBad.focus();
            return;
        }

        if (feedbackEl) {
            if (paymentMethod === "vodafone") {
                feedbackEl.textContent =
                    lang === "en"
                        ? `Order details ready. Please transfer to ${VODAFONE_TRANSFER_NUMBER} and send a screenshot on WhatsApp 01080949600.`
                        : `تم تسجيل بيانات طلبك؛ برجاء تحويل المبلغ على ${VODAFONE_TRANSFER_NUMBER} وإرسال سكرين شوت على واتس 01080949600 لتأكيد عملية الدفع.`;
            } else {
                feedbackEl.textContent =
                    lang === "en"
                        ? "Order confirmed with Cash on Delivery."
                        : "تم تسجيل طلبك بنجاح وسيتم التواصل معك للتسليم (الدفع كاش عند الاستلام).";
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const backBtn = document.getElementById("checkoutBackBtn");
        const copyBtn = document.getElementById("copyVodafoneNumberBtn");
        const payForm = document.getElementById("checkoutForm");
        const radios = document.querySelectorAll('input[name="checkoutPaymentMethod"]');

        if (backBtn) backBtn.addEventListener("click", closeCheckoutPage);
        if (copyBtn) copyBtn.addEventListener("click", copyTransferNumber);
        if (payForm) payForm.addEventListener("submit", handlePayNowSubmit);

        radios.forEach((radio) => {
            radio.addEventListener("change", syncPaymentMethodUI);
        });

        applyCheckoutLanguage();
        new MutationObserver(applyCheckoutLanguage).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"]
        });

        const areaSelectEl = document.getElementById("checkoutAreaSelect");
        if (areaSelectEl) {
            areaSelectEl.addEventListener("change", () => {
                setFieldError("checkoutAreaSelect", "checkoutAreaError", "");
            });
        }

        [["checkoutPhoneInput", "checkoutPhoneError"], ["checkoutAltPhoneInput", "checkoutAltPhoneError"]].forEach(([inputId, errId]) => {
            const el = document.getElementById(inputId);
            if (!el) return;
            el.addEventListener("input", () => {
                el.value = cleanPhoneValue(el.value);
                setFieldError(inputId, errId, "");
            });
            el.addEventListener("blur", () => {
                if (el.value) setFieldError(inputId, errId, getPhoneError(el.value, getCurrentLang()));
            });
        });

        renderCheckoutOrderSummary();
        syncPaymentMethodUI();
    });

    window.CheckoutModule = {
        open: openCheckoutPage,
        close: closeCheckoutPage,
        refreshSummary: renderCheckoutOrderSummary
    };
})();