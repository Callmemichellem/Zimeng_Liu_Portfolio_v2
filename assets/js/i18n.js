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

function setPortfolioLanguage(language) {
    localStorage.setItem("portfolio-language", language);

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";

    updateLanguageButtons(language);

    window.dispatchEvent(
        new CustomEvent("portfolioLanguageChanged", {
            detail: { language }
        })
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const language = getPortfolioLanguage();

    updateLanguageButtons(language);

    document.querySelectorAll("[data-lang-choice]").forEach(button => {
        button.addEventListener("click", () => {
            setPortfolioLanguage(button.dataset.langChoice);
        });
    });
});