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
        `${experience.company[language]} | Experience | Zimeng Liu`;

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

    const detailSections = (experience.details?.[language] || [])
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
                            ${experience.dates[language]}${experience.status ? ` · ${experience.status[language]}` : ""}
                        </span>

                        <h1>
                            ${experience.company[language]}
                        </h1>

                        ${experience.headline ? `<p class="detail-tagline">“${experience.headline[language]}”</p>` : ""}

                        <p class="detail-role">
                            ${experience.role[language]}
                        </p>

                        ${experience.focus ? `<p class="detail-subtitle">${experience.focus[language]}</p>` : ""}

                        ${experience.location ? `<p class="detail-location">
                            ${experience.location[language]}
                        </p>` : ""}

                    </div>

                </div>

                <div class="tags detail-tags">
                    ${tagsMarkup}
                </div>

            </div>

        </section>


        ${renderLiveEmbed(experience, language)}


        <section class="section section-tight">

            <div class="container detail-layout">

                <aside class="detail-sidebar">

                    <div class="detail-sidebar-card">

                        <span class="eyebrow">
                            ${language === "zh"
                                ? "实习经历"
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

                        ${experience.location ? `<div class="detail-sidebar-item">

                            <span>
                                ${language === "zh"
                                    ? "地点"
                                    : "Location"}
                            </span>

                            <strong>
                                ${experience.location[language]}
                            </strong>

                        </div>` : ""}

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

                    ${renderDetailToc(experience, language)}

                </aside>


                <div class="detail-content">

                    <div id="context" class="detail-anchor">
                        ${renderBackground(experience, language)}
                    </div>

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

                    ${renderMetrics(experience, language, {
                        id: "results",
                        eyebrow: language === "zh" ? "成果" : "Results",
                        title: language === "zh" ? "成果一览" : "Results at a glance"
                    })}

                    ${renderApproach(experience, language)}

                    ${renderTools(experience, language)}


                    <div id="details" class="detail-section-heading detail-anchor">

                        <span class="eyebrow">
                            Deep Dive
                        </span>

                        <h2>
                            ${detailTitle}
                        </h2>

                    </div>


                    ${detailSections}

                    <div id="visuals" class="detail-anchor">
                        ${renderVisuals(experience, language)}
                    </div>

                    ${renderCodeSamples(experience, language)}

                </div>

            </div>

        </section>
    `;
}


function renderMetrics(experience, language, options = {}) {
    if (!experience.metrics || experience.metrics.length === 0) {
        return "";
    }

    const title = options.title || (
        language === "zh"
            ? "关键数据"
            : "Selected Evidence"
    );

    const idAttr = options.id
        ? ` id="${options.id}"`
        : "";

    const eyebrow = options.eyebrow
        ? `<span class="eyebrow">${options.eyebrow}</span>`
        : "";

    const cards = experience.metrics
        .map(metric => `
            <div class="detail-metric">
                <strong>
                    ${
                        typeof metric.value === "object"
                            ? metric.value[language]
                            : metric.value
                    }
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
        <section class="detail-section detail-anchor${options.id ? " detail-results" : ""}"${idAttr}>

            ${eyebrow}

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

                const isPercentage = visual.items.every(
                    item => (item.suffix || "").trim() === "%"
                );

                const largestValue = Math.max(
                    ...visual.items.map(item => item.value)
                );

                // Percentages are drawn on a 0–100 scale unless every
                // value is small (e.g. 6.0% vs 6.4% returns).
                const maxValue = isPercentage && largestValue >= 50
                    ? 100
                    : largestValue;

                const decimals = Math.max(
                    ...visual.items.map(item =>
                        (String(item.value).split(".")[1] || "").length
                    )
                );

                const hasHighlight = visual.items.some(item => item.highlight);

                const bars = visual.items
                    .map(item => {

                        const width =
                            (item.value / maxValue) * 100;

                        const fillClass = hasHighlight && !item.highlight
                            ? "portfolio-bar-fill is-muted"
                            : "portfolio-bar-fill";

                        const formatted = item.value.toLocaleString("en-US", {
                            minimumFractionDigits: decimals,
                            maximumFractionDigits: decimals
                        });

                        return `
                            <div class="portfolio-bar-row">

                                <div class="portfolio-bar-label">

                                    <span>
                                        ${item.label[language]}
                                    </span>

                                    <strong>
                                        ${formatted}${item.suffix || ""}
                                    </strong>

                                </div>

                                <div class="portfolio-bar-track">

                                    <div
                                        class="${fillClass}"
                                        style="width: ${width}%"
                                    ></div>

                                </div>

                            </div>
                        `;
                    })
                    .join("");

                return `
                    <section class="detail-visual">

                        <div class="detail-visual-head">
                            <h2>
                                ${visual.title[language]}
                            </h2>
                            ${visual.source ? `<span class="detail-visual-source">${visual.source[language]}</span>` : ""}
                        </div>

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

                        <div class="detail-visual-head">
                            <h2>
                                ${visual.title[language]}
                            </h2>
                            ${visual.source ? `<span class="detail-visual-source">${visual.source[language]}</span>` : ""}
                        </div>

                        <div
                            class="process-flow"
                            style="--cols: ${getProcessColumns(visual.steps[language].length)}"
                        >
                            ${steps}
                        </div>

                        <p class="detail-visual-caption">
                            ${visual.caption[language]}
                        </p>

                    </section>
                `;
            }


            if (visual.type === "table") {
                return renderTableVisual(visual, language);
            }


            if (visual.type === "gallery") {
                return renderGalleryVisual(visual, language);
            }


            // Interactive widgets, e.g. { type: "widget", widget: "coal-sensitivity" } (assets/js/coal-model.js)
            if (visual.type === "widget") {
                const attr = { "coal-sensitivity": "data-coal-model", "roi-calculator": "data-roi-model", "nextgen-retention": "data-nextgen-model" }[visual.widget];
                return attr ? `<section class="detail-visual detail-visual-widget"><div ${attr}></div></section>` : "";
            }


            if (visual.type === "image") {

                const sourceLabel = visual.source
                    ? `<span class="detail-visual-source">${visual.source[language]}</span>`
                    : "";

                return `
                    <section class="detail-visual detail-visual-image">

                        <div class="detail-visual-head">
                            <h2>
                                ${visual.title[language]}
                            </h2>
                            ${sourceLabel}
                        </div>

                        <a
                            class="detail-figure-link"
                            href="${visual.src}"
                            target="_blank"
                            rel="noopener"
                            title="${language === "zh" ? "点击查看原图" : "Open full-size image"}"
                        >
                            <img
                                class="detail-figure"
                                src="${visual.src}"
                                alt="${visual.alt ? visual.alt[language] : visual.title[language]}"
                                loading="lazy"
                            >
                        </a>

                        ${
                            visual.caption
                                ? `<p class="detail-visual-caption">${visual.caption[language]}</p>`
                                : ""
                        }

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
/* =========================================================
   CASE BACKGROUND, CODE SAMPLES & SYNTAX HIGHLIGHTING
   Optional fields, usable by any experience or project:
     background: { title?, paragraphs: {en, zh}, pointsTitle?, points?: {en, zh} }
     code: [{ title, language, source?, caption?, code }]
   ========================================================= */

function renderBackground(item, language) {
    const background = item.background;

    if (!background) {
        return "";
    }

    const title = background.title
        ? background.title[language]
        : (language === "zh" ? "案例背景" : "Case Background");

    const paragraphs = (background.paragraphs?.[language] || [])
        .map(text => `<p>${text}</p>`)
        .join("");

    const points = background.points?.[language] || [];

    const pointsTitle = background.pointsTitle
        ? background.pointsTitle[language]
        : (language === "zh" ? "任务要求" : "The brief");

    const pointsMarkup = points.length
        ? `
            <h3>${pointsTitle}</h3>
            <ol class="detail-background-points">
                ${points.map(point => `<li>${point}</li>`).join("")}
            </ol>
        `
        : "";

    return `
        <section class="detail-background">

            <span class="eyebrow">
                ${language === "zh" ? "背景" : "Context"}
            </span>

            <h2>${title}</h2>

            ${paragraphs}

            ${pointsMarkup}

        </section>
    `;
}


/* =========================================================
   THINKING PROCESS, TOOLS & IN-PAGE NAVIGATION
   approach: { en: [{ title, question, action, result? }], zh: [...] }
   tools: [{ name, kind?: {en, zh}, use: {en, zh} }]
   ========================================================= */

function renderApproach(item, language) {
    const steps = item.approach?.[language] || [];

    if (!steps.length) {
        return "";
    }

    const labels = language === "zh"
        ? { question: "要回答的问题", action: "我的做法", result: "得出的结论" }
        : { question: "The question", action: "What I did", result: "What it showed" };

    const row = (key, text, extraClass = "") => text
        ? `
            <div class="approach-row ${extraClass}">
                <dt>${labels[key]}</dt>
                <dd>${text}</dd>
            </div>
        `
        : "";

    const stepsMarkup = steps
        .map((step, index) => `
            <li class="approach-step">
                <span class="approach-num">${String(index + 1).padStart(2, "0")}</span>
                <div class="approach-body">
                    <h3>${step.title}</h3>
                    <dl>
                        ${row("question", step.question)}
                        ${row("action", step.action)}
                        ${row("result", step.result, "is-result")}
                    </dl>
                </div>
            </li>
        `)
        .join("");

    return `
        <section id="approach" class="detail-block detail-anchor">

            <span class="eyebrow">
                ${language === "zh" ? "思考过程" : "Thinking process"}
            </span>

            <h2>
                ${language === "zh" ? "我是怎么思考和推进的" : "How I approached it"}
            </h2>

            <ol class="approach-list">
                ${stepsMarkup}
            </ol>

        </section>
    `;
}


function renderTools(item, language) {
    const tools = item.tools || [];

    if (!tools.length) {
        return "";
    }

    const cards = tools
        .map(tool => `
            <div class="tool-card">
                <div class="tool-card-head">
                    <strong>${typeof tool.name === "string" ? tool.name : tool.name[language]}</strong>
                    ${tool.kind ? `<span class="tool-kind">${tool.kind[language]}</span>` : ""}
                </div>
                <p>${tool.use[language]}</p>
            </div>
        `)
        .join("");

    return `
        <section id="tools" class="detail-block detail-anchor">

            <span class="eyebrow">
                ${language === "zh" ? "工具" : "Toolkit"}
            </span>

            <h2>
                ${language === "zh" ? "用到的工具与方法" : "Tools & methods, and how I used them"}
            </h2>

            <div class="tools-grid">
                ${cards}
            </div>

        </section>
    `;
}


function renderDetailToc(item, language) {
    const zh = language === "zh";

    const links = [
        item.background && ["context", zh ? "背景与分工" : "Context & my role"],
        item.metrics?.length && ["results", zh ? "成果一览" : "Results"],
        item.approach?.[language]?.length && ["approach", zh ? "思考过程" : "How I approached it"],
        item.tools?.length && ["tools", zh ? "工具与方法" : "Tools & methods"],
        item.details?.[language]?.length && ["details", zh ? "详细经历" : "Details"],
        item.visuals?.length && ["visuals", zh ? "图表" : "Visuals"]
    ].filter(Boolean);

    if (links.length < 3) {
        return "";
    }

    return `
        <nav class="detail-toc" aria-label="${zh ? "本页内容" : "On this page"}">
            <span class="eyebrow">${zh ? "本页内容" : "On this page"}</span>
            ${links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
        </nav>
    `;
}


function escapeCode(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


// Lightweight Python highlighter: comments, strings, keywords,
// numbers and function calls. Other languages are shown as plain text.
const PYTHON_TOKENS = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|[rfb]?"(?:\\.|[^"\\\n])*"|[rfb]?'(?:\\.|[^'\\\n])*')|\b(def|return|import|from|as|for|in|if|elif|else|while|with|lambda|class|try|except|raise|and|or|not|is|None|True|False|yield|pass|break|continue)\b|\b(\d+(?:\.\d+)?(?:e-?\d+)?)\b|\b([A-Za-z_]\w*)(?=\()/g;


function highlightCode(code, language) {
    const escaped = escapeCode(code);

    if (!/python/i.test(language || "")) {
        return escaped;
    }

    return escaped.replace(
        PYTHON_TOKENS,
        (match, comment, string, keyword, number, call) => {
            if (comment) return `<span class="tok-comment">${comment}</span>`;
            if (string) return `<span class="tok-string">${string}</span>`;
            if (keyword) return `<span class="tok-keyword">${keyword}</span>`;
            if (number) return `<span class="tok-number">${number}</span>`;
            if (call) return `<span class="tok-call">${call}</span>`;
            return match;
        }
    );
}


function renderCodeSamples(item, language) {
    const samples = item.code || [];

    if (!samples.length) {
        return "";
    }

    const blocks = samples
        .map((sample, index) => `
            <details class="code-sample"${index === 0 ? " open" : ""}>

                <summary>
                    <span class="code-sample-title">${sample.title[language]}</span>
                    <span class="code-sample-meta">
                        ${sample.source ? `<span class="code-sample-source">${sample.source[language]}</span>` : ""}
                        <span class="code-sample-language">${sample.language || ""}</span>
                    </span>
                </summary>

                ${
                    sample.caption
                        ? `<p class="code-sample-caption">${sample.caption[language]}</p>`
                        : ""
                }

                <pre class="code-sample-body"><code>${highlightCode(sample.code, sample.language)}</code></pre>

            </details>
        `)
        .join("");

    return `
        <section class="detail-code-section">

            <div class="detail-section-heading">

                <span class="eyebrow">
                    ${language === "zh" ? "代码" : "Code"}
                </span>

                <h2>
                    ${language === "zh" ? "代码示例" : "Code Samples"}
                </h2>

                <p class="detail-code-note">
                    ${
                        language === "zh"
                            ? "节选自课程代码，为便于阅读做了压缩排版；点击标题可展开或收起。"
                            : "Excerpts from the coursework code, condensed for readability. Click a title to expand or collapse it."
                    }
                </p>

            </div>

            ${blocks}

        </section>
    `;
}


/* =========================================================
   TABLES & LIVE EMBEDS
     visuals: { type: "table", title, columns: {en, zh}, rows: [[...]],
                highlightRow?, source?, caption? }
     liveEmbed: { provider: "tableau", url, title, caption?, height? }
       (rendered full width above the detail layout; hidden until url is set)
   ========================================================= */

/* =========================================================
   GALLERY
     visuals: { type: "gallery", title, source?, caption?,
                images: [{ src, title, caption?, alt? }] }
     A compact two-column grid for supporting figures; each
     thumbnail opens the full-size image in a new tab.
   ========================================================= */

function renderGalleryVisual(visual, language) {
    const openText = language === "zh" ? "点击查看原图" : "Open full-size image";

    const items = visual.images
        .map(image => `
            <figure class="detail-gallery-item">
                <a
                    class="detail-gallery-link"
                    href="${image.src}"
                    target="_blank"
                    rel="noopener"
                    title="${openText}"
                >
                    <img
                        src="${image.src}"
                        alt="${image.alt ? image.alt[language] : image.title[language]}"
                        loading="lazy"
                    >
                </a>
                <figcaption>
                    <strong>${image.title[language]}</strong>
                    ${image.caption ? `<span>${image.caption[language]}</span>` : ""}
                </figcaption>
            </figure>
        `)
        .join("");

    const sourceLabel = visual.source
        ? `<span class="detail-visual-source">${visual.source[language]}</span>`
        : "";

    return `
        <section class="detail-visual detail-visual-gallery">

            <div class="detail-visual-head">
                <h2>${visual.title[language]}</h2>
                ${sourceLabel}
            </div>

            ${
                visual.caption
                    ? `<p class="detail-visual-caption detail-gallery-intro">${visual.caption[language]}</p>`
                    : ""
            }

            <div class="detail-gallery">
                ${items}
            </div>

        </section>
    `;
}


function renderTableVisual(visual, language) {
    const columns = visual.columns[language] || visual.columns.en;

    const cellText = cell =>
        typeof cell === "object" && cell !== null
            ? (cell[language] || cell.en)
            : (typeof cell === "number" ? cell.toLocaleString("en-US") : String(cell));

    const isNumeric = value =>
        /^[−\-+]?[\d,.]+\s?(%|days|天)?$/.test(String(value).trim());

    const isBlank = value => ["", "–", "-"].includes(String(value).trim());

    // A column is right-aligned only when every non-blank cell in it is numeric.
    const numericColumns = columns.map((_, index) =>
        index > 0 &&
        visual.rows.every(row => {
            const value = cellText(row[index] ?? "");
            return isBlank(value) || isNumeric(value);
        })
    );

    const head = columns
        .map((column, index) => `<th${numericColumns[index] ? ' class="is-numeric"' : ""}>${column}</th>`)
        .join("");

    const body = visual.rows
        .map((row, rowIndex) => {
            const cells = row
                .map((cell, index) =>
                    `<td${numericColumns[index] ? ' class="is-numeric"' : ""}>${cellText(cell)}</td>`
                )
                .join("");

            const highlighted = visual.highlightRow === rowIndex;
            return `<tr${highlighted ? ' class="is-highlight"' : ""}>${cells}</tr>`;
        })
        .join("");

    const sourceLabel = visual.source
        ? `<span class="detail-visual-source">${visual.source[language]}</span>`
        : "";

    return `
        <section class="detail-visual detail-visual-table">

            <div class="detail-visual-head">
                <h2>${visual.title[language]}</h2>
                ${sourceLabel}
            </div>

            <div class="detail-table-wrap">
                <table class="detail-table">
                    <thead><tr>${head}</tr></thead>
                    <tbody>${body}</tbody>
                </table>
            </div>

            ${
                visual.caption
                    ? `<p class="detail-visual-caption">${visual.caption[language]}</p>`
                    : ""
            }

        </section>
    `;
}


function getEmbedSource(embed, language) {
    const separator = embed.url.includes("?") ? "&" : "?";

    if (embed.provider === "tableau") {
        return `${embed.url}${separator}:showVizHome=no&:embed=y&:toolbar=yes&:tabs=yes`;
    }

    // Self-hosted dashboards read ?lang= so they follow the site language.
    return language ? `${embed.url}${separator}lang=${language}` : embed.url;
}


function renderLiveEmbed(item, language) {
    const embed = item.liveEmbed;

    if (!embed || !embed.url) {
        return "";
    }

    const openText = language === "zh"
        ? "在新窗口打开交互看板 ↗"
        : "Open the interactive dashboard in a new tab ↗";

    const hint = language === "zh"
        ? "可以直接在下方看板中点击、筛选和切换参数。"
        : "You can click, filter and change the controls directly in the dashboard below.";

    return `
        <section class="live-embed-section">

            <div class="container">

                <div class="live-embed-head">
                    <div>
                        <span class="eyebrow">
                            ${language === "zh" ? "交互看板" : "Live Dashboard"}
                        </span>
                        <h2>${embed.title[language]}</h2>
                        <p>${embed.caption ? embed.caption[language] : hint}</p>
                    </div>
                    <a
                        class="live-embed-open"
                        href="${getEmbedSource(embed, language)}"
                        target="_blank"
                        rel="noopener"
                    >
                        ${openText}
                    </a>
                </div>

                <div class="live-embed-frame${embed.provider === "html" ? " is-responsive" : ""}">
                    <iframe
                        src="${getEmbedSource(embed, language)}"
                        title="${embed.title[language]}"
                        loading="lazy"
                        style="height: ${embed.height || 840}px"
                        ${embed.provider === "html" ? "data-autoheight" : ""}
                        allowfullscreen
                    ></iframe>
                </div>

            </div>

        </section>
    `;
}


/* Self-hosted dashboards post their content height so the frame fits without inner scrolling. */
window.addEventListener("message", event => {
    const data = event.data;

    if (!data || data.type !== "embed-height" || typeof data.height !== "number") {
        return;
    }

    document.querySelectorAll("iframe[data-autoheight]").forEach(frame => {
        if (frame.contentWindow === event.source) {
            frame.style.height = `${Math.min(Math.ceil(data.height), 6000)}px`;
        }
    });
});


function getProcessColumns(stepCount) {
    return stepCount <= 6
        ? stepCount
        : Math.ceil(stepCount / 2);
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
        // items that moved from Projects to Experience keep their old links working
        if (PORTFOLIO_DATA.experiences.some(item => item.id === projectId)) {
            window.location.replace(`experience-detail.html?id=${encodeURIComponent(projectId)}`);
            return;
        }
        renderProjectNotFound(root, language);
        return;
    }

    document.title =
        `${(project.name || project.headline || project.title)[language]} | Project | Zimeng Liu`;


    const logoMarkup = project.logo
        ? `
            <img
                class="detail-company-logo${project.logoFill ? " is-fill" : ""}"
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
                            ${(project.name || project.headline || project.title)[language]}
                        </h1>

                        ${project.name && project.headline ? `<p class="detail-tagline">“${project.headline[language]}”</p>` : ""}

                        ${project.name || project.headline ? `<p class="detail-subtitle">
                            ${project.title[language]}
                        </p>` : ""}

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
                        ${
                            project.recognition
                                ? `
                                    <div class="recognition-badge">
                                        <span class="recognition-icon" aria-hidden="true">★</span>
                                        ${project.recognition[language]}
                                    </div>
                                `
                                : ""
                        }
                        ${project.location ? `<p class="detail-location">
                            ${project.location[language]}
                        </p>` : ""}

                    </div>

                </div>


                <div class="tags detail-tags">
                    ${tagsMarkup}
                </div>

            </div>

        </section>


        ${renderLiveEmbed(project, language)}


        <section class="section section-tight">

            <div class="container detail-layout">


                <aside class="detail-sidebar">

                    <div class="detail-sidebar-card">

                        <span class="eyebrow">
                            Project
                        </span>

                        <h3>
                            ${(project.name || project.headline || project.title)[language]}
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


                        ${
                            project.role
                                ? `
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
                                `
                                : ""
                        }


                        ${project.location ? `<div class="detail-sidebar-item">

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

                        </div>` : ""}


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


                    ${renderBackground(project, language)}


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


                    ${project.visualsFirst ? renderVisuals(project, language) : ""}


                    <div class="detail-section-heading">

                        <span class="eyebrow">
                            Deep Dive
                        </span>

                        <h2>
                            ${detailTitle}
                        </h2>

                    </div>


                    ${detailSections}


                    ${project.visualsFirst ? "" : renderVisuals(project, language)}


                    ${renderCodeSamples(project, language)}

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