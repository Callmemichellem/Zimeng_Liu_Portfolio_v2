function getPortfolioLanguage() {
    return localStorage.getItem("portfolio-language") || "en";
}

function updateLanguageButtons(language) {
    document.querySelectorAll("[data-lang-choice]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.langChoice === language
        );
    });
}

function applyStaticTranslations(language) {
    document.querySelectorAll("[data-zh]").forEach(element => {
        if (element.dataset.en === undefined) {
            element.dataset.en = element.textContent.trim();
        }

        element.textContent =
            language === "zh"
                ? element.dataset.zh
                : element.dataset.en;
    });
}

function setPortfolioLanguage(language) {
    localStorage.setItem("portfolio-language", language);

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";

    updateLanguageButtons(language);
    applyStaticTranslations(language);

    window.dispatchEvent(
        new CustomEvent("portfolioLanguageChanged", {
            detail: { language }
        })
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const language = getPortfolioLanguage();

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";

    updateLanguageButtons(language);
    applyStaticTranslations(language);

    document.querySelectorAll("[data-lang-choice]").forEach(button => {
        button.addEventListener("click", () => {
            setPortfolioLanguage(button.dataset.langChoice);
        });
    });
});