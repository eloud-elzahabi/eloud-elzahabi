(function () {
    function init() {
        const container = document.querySelector(".nav-container");
        const btn = document.getElementById("navHamburgerBtn");
        const links = document.querySelector(".nav-links");
        if (!container || !btn || !links) return;

        function setOpen(open) {
            container.classList.toggle("menu-open", open);
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        }

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            setOpen(!container.classList.contains("menu-open"));
        });

        // قفل القائمة بعد اختيار أي رابط (غير زر "المنتجات" نفسه لأنه بيفتح القائمة الفرعية)
        links.addEventListener("click", (e) => {
            if (e.target.closest("a")) setOpen(false);
        });

        document.addEventListener("click", (e) => {
            if (!container.contains(e.target)) setOpen(false);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") setOpen(false);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 820) setOpen(false);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();