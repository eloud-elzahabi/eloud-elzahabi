(function () {
    const VODAFONE_TRANSFER_NUMBER = "01080949600";

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
        items.forEach((item) => {
            const qty = Number(item.qty) || 0;
            const unitPrice = Number(item.unitPrice) || 0;
            count += qty;
            subtotal += qty * unitPrice;
        });
        return { count, subtotal, total: subtotal };
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

        items.forEach((item) => {
            const row = document.createElement("div");
            row.className = "checkout-order-item";

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
            sub.textContent = `${item.size || ""}  |  ${item.qty}x  |  ${item.unitPrice} EGY`;

            meta.appendChild(name);
            meta.appendChild(sub);

            left.appendChild(thumb);
            left.appendChild(meta);

            const lineTotal = document.createElement("span");
            lineTotal.className = "checkout-order-line-total";
            lineTotal.textContent = `${(Number(item.qty) || 0) * (Number(item.unitPrice) || 0)} EGY`;

            row.appendChild(left);
            row.appendChild(lineTotal);
            itemsContainer.appendChild(row);
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
                    copyTextEl.textContent = lang === "en" ? "Copy" : "نسخ الرقم";
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
        const customerPhone = phoneInput ? phoneInput.value.trim() : "";
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

        if (!customerName || !customerPhone || !customerAddress) {
            if (feedbackEl) {
                feedbackEl.textContent =
                    lang === "en"
                        ? "Please fill in Name, Phone/WhatsApp, and Detailed Address."
                        : "من فضلك اكتب الاسم ورقم الهاتف / واتساب والعنوان بالتفصيل.";
            }
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

        renderCheckoutOrderSummary();
        syncPaymentMethodUI();
    });

    window.CheckoutModule = {
        open: openCheckoutPage,
        close: closeCheckoutPage,
        refreshSummary: renderCheckoutOrderSummary
    };
})();