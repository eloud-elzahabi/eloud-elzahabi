(function () {
    const WA_TEXT = {
        ar: { label: "تواصل معنا على واتساب", aria: "تواصل معنا عبر واتساب" },
        en: { label: "Chat with us on WhatsApp", aria: "Contact us on WhatsApp" }
    };

    function init() {
        const btn = document.getElementById("waFloatBtn");
        const home = document.getElementById("homeView");
        if (!btn) return;

        // يظهر فقط والصفحة الرئيسية ظاهرة
        function syncVisibility() {
            const homeShown = !!home && !home.classList.contains("hidden");
            btn.classList.toggle("is-visible", homeShown);
            btn.tabIndex = homeShown ? 0 : -1;
            btn.setAttribute("aria-hidden", homeShown ? "false" : "true");
        }

        function syncLang() {
            const lang = document.documentElement.lang === "en" ? "en" : "ar";
            const label = btn.querySelector(".wa-float-label");
            if (label) label.textContent = WA_TEXT[lang].label;
            btn.setAttribute("aria-label", WA_TEXT[lang].aria);
        }

        if (home) {
            new MutationObserver(syncVisibility).observe(home, {
                attributes: true,
                attributeFilter: ["class"]
            });
        }
        new MutationObserver(syncLang).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"]
        });

        syncVisibility();
        syncLang();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();