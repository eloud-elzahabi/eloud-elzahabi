(function () {
    function isArabicText(text) {
        if (!text) return true;
        return /[\u0600-\u06FF]/.test(String(text));
    }

    function cleanText(text) {
        return String(text || "").replace(/[\u200E\u200F\u202A-\u202E]/g, "").trim();
    }

    function getInitialLetter(name) {
        const cleaned = cleanText(name);
        return cleaned ? cleaned.charAt(0).toUpperCase() : "★";
    }

    function renderStars(rating) {
        const count = Math.max(1, Math.min(5, Number(rating) || 5));
        return "★".repeat(count) + "☆".repeat(5 - count);
    }

    function renderCustomerReviews() {
        const grid = document.getElementById("homeReviewsGrid");
        if (!grid || typeof CUSTOMER_REVIEWS_DATA === "undefined" || !Array.isArray(CUSTOMER_REVIEWS_DATA)) {
            return;
        }

        grid.innerHTML = "";

        CUSTOMER_REVIEWS_DATA.forEach(function (review) {
            const cleanName = cleanText(review.name);
            const cleanComment = cleanText(review.comment);

            const nameIsArabic = isArabicText(cleanName);
            const commentIsArabic = isArabicText(cleanComment);

            const nameFontClass = nameIsArabic ? "font-name-ar" : "font-name-en";
            const descFontClass = commentIsArabic ? "font-desc-ar" : "font-desc-en";

            const card = document.createElement("article");
            card.className = "customer-review-card";

            const quoteMark = document.createElement("span");
            quoteMark.className = "customer-review-quote-mark";
            quoteMark.setAttribute("aria-hidden", "true");
            quoteMark.textContent = "“";

            const textEl = document.createElement("p");
            textEl.className = "customer-review-text " + descFontClass;
            textEl.setAttribute("dir", commentIsArabic ? "rtl" : "ltr");
            textEl.textContent = cleanComment;

            const footer = document.createElement("div");
            footer.className = "customer-review-footer";

            const meta = document.createElement("div");
            meta.className = "customer-review-meta";

            const authorEl = document.createElement("span");
            authorEl.className = "customer-review-author " + nameFontClass;
            authorEl.setAttribute("dir", nameIsArabic ? "rtl" : "ltr");
            authorEl.textContent = cleanName;

            const starsEl = document.createElement("span");
            starsEl.className = "customer-review-stars";
            starsEl.setAttribute("aria-label", (review.rating || 5) + " نجوم");
            starsEl.textContent = renderStars(review.rating);

            meta.appendChild(authorEl);
            meta.appendChild(starsEl);

            const avatar = document.createElement("span");
            avatar.className = "customer-review-avatar " + nameFontClass;
            avatar.setAttribute("aria-hidden", "true");
            avatar.textContent = getInitialLetter(cleanName);

            footer.appendChild(meta);
            footer.appendChild(avatar);

            card.appendChild(quoteMark);
            card.appendChild(textEl);
            card.appendChild(footer);

            grid.appendChild(card);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderCustomerReviews);
    } else {
        renderCustomerReviews();
    }
})();
