function renderExperiencePage(language = getPortfolioLanguage()) {
    const treeContainer = document.getElementById("experienceTree");
    const timelineContainer = document.getElementById("experienceTimeline");

    if (!treeContainer || !timelineContainer) {
        return;
    }

    renderExperienceTree(treeContainer, language);
    renderExperienceTimeline(timelineContainer, language);
}

function renderExperienceTree(container, language) {
    container.innerHTML = "";

    PORTFOLIO_DATA.experienceCategories.forEach(category => {
        const experiences = PORTFOLIO_DATA.experiences.filter(
            experience => experience.category === category.id
        );

        const categoryElement = document.createElement("div");
        categoryElement.className = "career-tree-category";

        const categoryTitle = document.createElement("div");
        categoryTitle.className = "career-tree-category-title";
        categoryTitle.textContent = category.name[language];

        const branches = document.createElement("div");
        branches.className = "career-tree-branches";

        experiences.forEach(experience => {
            const button = document.createElement("button");

            button.className = "career-tree-company";
            button.type = "button";
            button.textContent = experience.company[language];

            button.addEventListener("click", () => {
                const target = document.getElementById(
                    `experience-${experience.id}`
                );

                if (!target) return;

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                target.classList.add("is-highlighted");

                window.setTimeout(() => {
                    target.classList.remove("is-highlighted");
                }, 1800);
            });

            branches.appendChild(button);
        });

        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(branches);

        container.appendChild(categoryElement);
    });
}

function renderExperienceTimeline(container, language) {
    container.innerHTML = "";

    const experiences = [...PORTFOLIO_DATA.experiences].sort((a, b) =>
        b.sortDate.localeCompare(a.sortDate)
    );

    experiences.forEach(experience => {
        const item = document.createElement("article");

        item.className = "experience-overview-card";
        item.id = `experience-${experience.id}`;

        const logoMarkup = experience.logo
            ? `
                <img
                    class="experience-logo"
                    src="${experience.logo}"
                    alt="${experience.company[language]} logo"
                >
            `
            : `
                <div class="experience-logo-placeholder">
                    ${getInitials(experience.company.en)}
                </div>
            `;

        const bullets = experience.overviewBullets[language]
            .map(bullet => `<li>${bullet}</li>`)
            .join("");

        const tags = experience.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("");

        const detailText =
            language === "zh"
                ? "查看实习详情 →"
                : "View experience →";

        item.innerHTML = `
            <div class="experience-date">
                ${experience.dates[language]}
            </div>

            <div class="experience-card-main">

                <div class="experience-company-row">

                    ${logoMarkup}

                    <div>
                        <h2>${experience.company[language]}</h2>

                        <p class="experience-role">
                            ${experience.role[language]}
                        </p>

                        <p class="experience-location">
                            ${experience.location[language]}
                        </p>
                    </div>

                </div>

                <ul class="experience-bullets">
                    ${bullets}
                </ul>

                <div class="tags">
                    ${tags}
                </div>

                <a
                    class="experience-detail-link"
                    href="experience-detail.html?id=${experience.id}"
                >
                    ${detailText}
                </a>

            </div>
        `;

        container.appendChild(item);
    });
}

function getInitials(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
    renderExperiencePage();
});

window.addEventListener("portfolioLanguageChanged", event => {
    renderExperiencePage(event.detail.language);
});