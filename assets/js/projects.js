function renderProjectsPage(language = getPortfolioLanguage()) {
    const treeContainer = document.getElementById("projectTree");
    const timelineContainer = document.getElementById("projectTimeline");

    if (!treeContainer || !timelineContainer) {
        return;
    }

    renderProjectTree(treeContainer, language);
    renderProjectTimeline(timelineContainer, language);
}


function renderProjectTree(container, language) {
    container.innerHTML = "";

    PORTFOLIO_DATA.projectCategories.forEach(category => {

        const projects = PORTFOLIO_DATA.projects.filter(
            project => project.category === category.id
        );

        const categoryElement = document.createElement("div");

        categoryElement.className = "career-tree-category";


        const categoryTitle = document.createElement("div");

        categoryTitle.className = "career-tree-category-title";

        categoryTitle.textContent =
            category.name[language];


        const branches = document.createElement("div");

        branches.className = "career-tree-branches";


        projects.forEach(project => {

            const button = document.createElement("button");

            button.className = "career-tree-company";

            button.type = "button";

            button.textContent =
                project.title[language];


            button.addEventListener("click", () => {

                const target =
                    document.getElementById(
                        `project-${project.id}`
                    );

                if (!target) return;


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                target.classList.add(
                    "is-highlighted"
                );


                window.setTimeout(() => {

                    target.classList.remove(
                        "is-highlighted"
                    );

                }, 1800);

            });


            branches.appendChild(button);

        });


        categoryElement.appendChild(
            categoryTitle
        );

        categoryElement.appendChild(
            branches
        );


        container.appendChild(
            categoryElement
        );

    });
}


function renderProjectTimeline(container, language) {

    container.innerHTML = "";


    const projects =
        [...PORTFOLIO_DATA.projects]
            .sort((a, b) =>
                b.sortDate.localeCompare(
                    a.sortDate
                )
            );


    projects.forEach(project => {

        const item =
            document.createElement("article");


        item.className =
            "experience-overview-card";

        item.id =
            `project-${project.id}`;


        const logoMarkup =
            project.logo
                ? `
                    <img
                        class="experience-logo"
                        src="${project.logo}"
                        alt="${project.organisation[language]} logo"
                    >
                `
                : `
                    <div class="experience-logo-placeholder">
                        ${getProjectInitials(project.title.en)}
                    </div>
                `;


        const bullets =
            project.overviewBullets[language]
                .map(
                    bullet =>
                        `<li>${bullet}</li>`
                )
                .join("");


        const tags =
            project.tags
                .map(
                    tag =>
                        `<span class="tag">${tag}</span>`
                )
                .join("");


        const detailText =
            language === "zh"
                ? "查看项目详情 →"
                : "View project →";


        item.innerHTML = `
            <div class="experience-date">
                ${project.dates[language]}
            </div>


            <div class="experience-card-main">

                <div class="experience-company-row">

                    ${logoMarkup}

                    <div>

                        <h2>
                            ${project.title[language]}
                        </h2>

                        <p class="experience-role">
                            ${project.organisation[language]}
                        </p>

                        <p class="experience-location">
                            ${project.location[language]}
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
                    href="project-detail.html?id=${project.id}"
                >
                    ${detailText}
                </a>

            </div>
        `;


        container.appendChild(item);

    });

}


function getProjectInitials(name) {

    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();

}


document.addEventListener(
    "DOMContentLoaded",
    () => {
        renderProjectsPage();
    }
);


window.addEventListener(
    "portfolioLanguageChanged",
    event => {
        renderProjectsPage(
            event.detail.language
        );
    }
);