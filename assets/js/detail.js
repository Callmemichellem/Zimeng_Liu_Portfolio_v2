function getQueryParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}


function getDetailInitials(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}


function renderExperienceDetail(language = getPortfolioLanguage()) {
    const root = document.getElementById("experienceDetail");

    if (!root) {
        return;
    }

    const experienceId = getQueryParameter("id");

    const experience = PORTFOLIO_DATA.experiences.find(
        item => item.id === experienceId
    );

    if (!experience) {
        renderExperienceNotFound(root, language);
        return;
    }

    document.title =
        `${experience.company[language]} | Experience | Michelle Liu`;

    const logoMarkup = experience.logo
        ? `
            <img
                class="detail-company-logo"
                src="${experience.logo}"
                alt="${experience.company[language]} logo"
            >
        `
        : `
            <div class="detail-company-logo-placeholder">
                ${getDetailInitials(experience.company.en)}
            </div>
        `;

    const overviewBullets = experience.overviewBullets[language]
        .map(item => `<li>${item}</li>`)
        .join("");

    const tagsMarkup = experience.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");

    const detailSections = experience.details[language]
        .map(section => {
            const bullets = section.bullets
                .map(item => `<li>${item}</li>`)
                .join("");

            return `
                <section class="detail-section">
                    <h2>${section.title}</h2>

                    <ul class="detail-section-list">
                        ${bullets}
                    </ul>
                </section>
            `;
        })
        .join("");

    const backText =
        language === "zh"
            ? "← 返回实习经历"
            : "← Back to Experience";

    const overviewTitle =
        language === "zh"
            ? "核心工作概览"
            : "Key Highlights";

    const detailTitle =
        language === "zh"
            ? "详细经历"
            : "Experience Details";

    root.innerHTML = `
        <section class="detail-hero">

            <div class="container">

                <a
                    class="detail-back"
                    href="experience.html"
                >
                    ${backText}
                </a>

                <div class="detail-company-header">

                    ${logoMarkup}

                    <div class="detail-company-info">

                        <span class="eyebrow">
                            ${experience.dates[language]}
                        </span>

                        <h1>
                            ${experience.company[language]}
                        </h1>

                        <p class="detail-role">
                            ${experience.role[language]}
                        </p>

                        <p class="detail-location">
                            ${experience.location[language]}
                        </p>

                    </div>

                </div>

                <div class="tags detail-tags">
                    ${tagsMarkup}
                </div>

            </div>

        </section>


        <section class="section section-tight">

            <div class="container detail-layout">

                <aside class="detail-sidebar">

                    <div class="detail-sidebar-card">

                        <span class="eyebrow">
                            ${language === "zh"
                                ? "Experience"
                                : "Experience"}
                        </span>

                        <h3>
                            ${experience.company[language]}
                        </h3>

                        <div class="detail-sidebar-item">

                            <span>
                                ${language === "zh"
                                    ? "职位"
                                    : "Role"}
                            </span>

                            <strong>
                                ${experience.role[language]}
                            </strong>

                        </div>

                        <div class="detail-sidebar-item">

                            <span>
                                ${language === "zh"
                                    ? "地点"
                                    : "Location"}
                            </span>

                            <strong>
                                ${experience.location[language]}
                            </strong>

                        </div>

                        <div class="detail-sidebar-item">

                            <span>
                                ${language === "zh"
                                    ? "时间"
                                    : "Period"}
                            </span>

                            <strong>
                                ${experience.dates[language]}
                            </strong>

                        </div>

                    </div>

                </aside>


                <div class="detail-content">

                    <section class="detail-summary">

                        <span class="eyebrow">
                            Overview
                        </span>

                        <h2>
                            ${overviewTitle}
                        </h2>

                        <ul class="detail-highlight-list">
                            ${overviewBullets}
                        </ul>

                    </section>


                    <div class="detail-section-heading">

                        <span class="eyebrow">
                            Deep Dive
                        </span>

                        <h2>
                            ${detailTitle}
                        </h2>

                    </div>


                    ${detailSections}


                    ${renderMetrics(experience, language)}

                    ${renderVisuals(experience, language)}

                </div>

            </div>

        </section>
    `;
}


function renderMetrics(experience, language) {
    if (!experience.metrics || experience.metrics.length === 0) {
        return "";
    }

    const title =
        language === "zh"
            ? "关键数据"
            : "Selected Evidence";

    const cards = experience.metrics
        .map(metric => `
            <div class="detail-metric">
                <strong>
                    ${metric.value}
                </strong>

                <span>
                    ${
                        typeof metric.label === "string"
                            ? metric.label
                            : metric.label[language]
                    }
                </span>
            </div>
        `)
        .join("");

    return `
        <section class="detail-section">

            <h2>
                ${title}
            </h2>

            <div class="detail-metric-grid">
                ${cards}
            </div>

        </section>
    `;
}

function renderVisuals(experience, language) {

    if (!experience.visuals || experience.visuals.length === 0) {
        return "";
    }

    const visuals = experience.visuals
        .map(visual => {

            if (visual.type === "bars") {

                const maxValue = Math.max(
                    ...visual.items.map(item => item.value)
                );

                const bars = visual.items
                    .map(item => {

                        const width =
                            (item.value / maxValue) * 100;

                        return `
                            <div class="portfolio-bar-row">

                                <div class="portfolio-bar-label">

                                    <span>
                                        ${item.label[language]}
                                    </span>

                                    <strong>
                                        ${item.value}${item.suffix || ""}
                                    </strong>

                                </div>

                                <div class="portfolio-bar-track">

                                    <div
                                        class="portfolio-bar-fill"
                                        style="width: ${width}%"
                                    ></div>

                                </div>

                            </div>
                        `;
                    })
                    .join("");

                return `
                    <section class="detail-visual">

                        <h2>
                            ${visual.title[language]}
                        </h2>

                        <div class="portfolio-bar-chart">
                            ${bars}
                        </div>

                        <p class="detail-visual-caption">
                            ${visual.caption[language]}
                        </p>

                    </section>
                `;
            }


            if (visual.type === "process") {

                const steps = visual.steps[language]
                    .map((step, index) => `
                        <div class="process-step">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <strong>
                                ${step}
                            </strong>

                        </div>
                    `)
                    .join("");

                return `
                    <section class="detail-visual">

                        <h2>
                            ${visual.title[language]}
                        </h2>

                        <div class="process-flow">
                            ${steps}
                        </div>

                        <p class="detail-visual-caption">
                            ${visual.caption[language]}
                        </p>

                    </section>
                `;
            }

            return "";
        })
        .join("");

    return `
        <section class="detail-visuals-section">

            <div class="detail-section-heading">

                <span class="eyebrow">
                    Visual Evidence
                </span>

                <h2>
                    ${
                        language === "zh"
                            ? "分析与可视化"
                            : "Analysis & Visualisations"
                    }
                </h2>

            </div>

            ${visuals}

        </section>
    `;
}
function renderVisuals(experience, language) {

    if (!experience.visuals || experience.visuals.length === 0) {
        return "";
    }

    const visuals = experience.visuals
        .map(visual => {

            if (visual.type === "bars") {

                const maxValue = Math.max(
                    ...visual.items.map(item => item.value)
                );

                const bars = visual.items
                    .map(item => {

                        const width =
                            (item.value / maxValue) * 100;

                        return `
                            <div class="portfolio-bar-row">

                                <div class="portfolio-bar-label">

                                    <span>
                                        ${item.label[language]}
                                    </span>

                                    <strong>
                                        ${item.value}${item.suffix || ""}
                                    </strong>

                                </div>

                                <div class="portfolio-bar-track">

                                    <div
                                        class="portfolio-bar-fill"
                                        style="width: ${width}%"
                                    >
                                    </div>

                                </div>

                            </div>
                        `;
                    })
                    .join("");

                return `
                    <section class="detail-visual">

                        <h2>
                            ${visual.title[language]}
                        </h2>

                        <div class="portfolio-bar-chart">
                            ${bars}
                        </div>

                        <p class="detail-visual-caption">
                            ${visual.caption[language]}
                        </p>

                    </section>
                `;
            }


            if (visual.type === "process") {

                const steps = visual.steps[language]
                    .map((step, index) => `
                        <div class="process-step">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <strong>
                                ${step}
                            </strong>

                        </div>
                    `)
                    .join("");

                return `
                    <section class="detail-visual">

                        <h2>
                            ${visual.title[language]}
                        </h2>

                        <div class="process-flow">
                            ${steps}
                        </div>

                        <p class="detail-visual-caption">
                            ${visual.caption[language]}
                        </p>

                    </section>
                `;
            }

            return "";
        })
        .join("");

    return `
        <section class="detail-visuals-section">

            <div class="detail-section-heading">

                <span class="eyebrow">
                    Visual Evidence
                </span>

                <h2>
                    ${
                        language === "zh"
                            ? "分析与可视化"
                            : "Analysis & Visualisations"
                    }
                </h2>

            </div>

            ${visuals}

        </section>
    `;
}
function renderExperienceNotFound(root, language) {
    const title =
        language === "zh"
            ? "未找到该实习经历"
            : "Experience not found";

    const message =
        language === "zh"
            ? "该链接可能无效，或对应经历尚未加入网站。"
            : "The requested experience could not be found.";

    const back =
        language === "zh"
            ? "返回实习经历"
            : "Back to Experience";

    root.innerHTML = `
        <section class="detail-hero">

            <div class="container">

                <h1>
                    ${title}
                </h1>

                <p class="lead">
                    ${message}
                </p>

                <a
                    class="button button-primary"
                    href="experience.html"
                >
                    ${back}
                </a>

            </div>

        </section>
    `;
}


document.addEventListener("DOMContentLoaded", () => {
    renderExperienceDetail();
});


window.addEventListener(
    "portfolioLanguageChanged",
    event => {
        renderExperienceDetail(
            event.detail.language
        );
    }
);
/* =========================================================
   PROJECT DETAIL
   ========================================================= */

function renderProjectDetail(language = getPortfolioLanguage()) {

    const root = document.getElementById("projectDetail");

    // 如果当前不是 project-detail.html，什么也不做
    if (!root) {
        return;
    }

    const projectId = getQueryParameter("id");

    const project = PORTFOLIO_DATA.projects.find(
        item => item.id === projectId
    );

    if (!project) {
        renderProjectNotFound(root, language);
        return;
    }

    document.title =
        `${project.title[language]} | Project | Michelle Liu`;


    const logoMarkup = project.logo
        ? `
            <img
                class="detail-company-logo"
                src="${project.logo}"
                alt="${project.organisation[language]} logo"
            >
        `
        : `
            <div class="detail-company-logo-placeholder">
                ${getDetailInitials(project.organisation.en)}
            </div>
        `;


    const overviewBullets =
    (project.overviewBullets?.[language] || [])
        .map(item => `<li>${item}</li>`)
        .join("");


    const tagsMarkup =
    (project.tags || [])
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");
    const organisationMarkup = project.organisationUrl
    ? `
        <a
            href="${project.organisationUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="organisation-link"
        >
            ${project.organisation[language]} ↗
        </a>
    `
    : project.organisation[language];

    const projectDetails =
        project.details?.[language] || [];

    const detailSections = projectDetails
        .map(section => {

            const bullets = section.bullets
                .map(item => `<li>${item}</li>`)
                .join("");

            return `
                <section class="detail-section">

                    <h2>
                        ${section.title}
                    </h2>

                    <ul class="detail-section-list">
                        ${bullets}
                    </ul>

                </section>
            `;
        })
        .join("");


    const backText =
        language === "zh"
            ? "← 返回项目经历"
            : "← Back to Projects";


    const highlightsTitle =
        language === "zh"
            ? "项目核心成果"
            : "Project Highlights";


    const detailTitle =
        language === "zh"
            ? "项目详细内容"
            : "Project Details";


    root.innerHTML = `

        <section class="detail-hero">

            <div class="container">

                <a
                    class="detail-back"
                    href="projects.html"
                >
                    ${backText}
                </a>


                <div class="detail-company-header">

                    ${logoMarkup}


                    <div class="detail-company-info">

                        <span class="eyebrow">
                            ${project.dates[language]}
                        </span>

                        <h1>
                            ${project.title[language]}
                        </h1>

                        <p class="detail-role">
                            ${organisationMarkup}
                        </p>
                        <p class="detail-project-role">
                            ${project.role?.[language] || ""}
                        </p>

                        ${
                            project.status
                                ? `
                                    <div class="project-status-badge">
                                        <span class="status-dot"></span>
                                        ${project.status[language]}
                                    </div>
                                `
                                : ""
                        }
                        <p class="detail-location">
                            ${project.location[language]}
                        </p>

                    </div>

                </div>


                <div class="tags detail-tags">
                    ${tagsMarkup}
                </div>

            </div>

        </section>


        <section class="section section-tight">

            <div class="container detail-layout">


                <aside class="detail-sidebar">

                    <div class="detail-sidebar-card">

                        <span class="eyebrow">
                            Project
                        </span>

                        <h3>
                            ${project.title[language]}
                        </h3>


                        <div class="detail-sidebar-item">

                            <span>
                                ${
                                    language === "zh"
                                        ? "机构"
                                        : "Organisation"
                                }
                            </span>

                            <strong>
                                ${project.organisation[language]}
                            </strong>

                        </div>


                        <div class="detail-sidebar-item">

                            <span>
                                ${
                                    language === "zh"
                                        ? "项目类型"
                                        : "Project Type"
                                }
                            </span>

                            <strong>
                                ${project.role[language]}
                            </strong>

                        </div>


                        <div class="detail-sidebar-item">

                            <span>
                                ${
                                    language === "zh"
                                        ? "地点"
                                        : "Location"
                                }
                            </span>

                            <strong>
                                ${project.location[language]}
                            </strong>

                        </div>


                        <div class="detail-sidebar-item">

                            <span>
                                ${
                                    language === "zh"
                                        ? "时间"
                                        : "Period"
                                }
                            </span>

                            <strong>
                                ${project.dates[language]}
                            </strong>

                        </div>

                    </div>

                </aside>


                <div class="detail-content">


                    <section class="detail-summary">

                        <span class="eyebrow">
                            Overview
                        </span>

                        <h2>
                            ${highlightsTitle}
                        </h2>

                        <ul class="detail-highlight-list">
    ${overviewBullets}
</ul>

${
    project.statusNote
        ? `
            <div class="ongoing-research-note">
                <strong>
                    ${
                        language === "zh"
                            ? "研究状态："
                            : "Research status:"
                    }
                </strong>

                ${project.statusNote[language]}
            </div>
        `
        : ""
}

</section>

${renderMetrics(project, language)}



}
                    </section>


                    ${renderMetrics(project, language)}


                    <div class="detail-section-heading">

                        <span class="eyebrow">
                            Deep Dive
                        </span>

                        <h2>
                            ${detailTitle}
                        </h2>

                    </div>


                    ${detailSections}


                    ${renderVisuals(project, language)}

                </div>

            </div>

        </section>
    `;
}


function renderProjectNotFound(root, language) {

    const title =
        language === "zh"
            ? "未找到该项目"
            : "Project not found";

    const message =
        language === "zh"
            ? "该项目链接可能无效，或项目尚未加入网站。"
            : "The requested project could not be found.";

    const back =
        language === "zh"
            ? "返回项目经历"
            : "Back to Projects";


    root.innerHTML = `

        <section class="detail-hero">

            <div class="container">

                <h1>
                    ${title}
                </h1>

                <p class="lead">
                    ${message}
                </p>

                <a
                    class="button button-primary"
                    href="projects.html"
                >
                    ${back}
                </a>

            </div>

        </section>
    `;
}


/* Project page initial render */

document.addEventListener("DOMContentLoaded", () => {
    renderProjectDetail();
});


/* Re-render project when language changes */

window.addEventListener(
    "portfolioLanguageChanged",
    event => {
        renderProjectDetail(
            event.detail.language
        );
    }
);