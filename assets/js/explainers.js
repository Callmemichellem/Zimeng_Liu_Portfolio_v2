/* Concept explainers on the Research page (step-by-step animations).
 *
 * <div class="explainer" data-explainer="graphrag"></div>  GraphRAG vs standard retrieval on an ESG report
 * <div class="explainer" data-explainer="audit"></div>     "Same resume, different name" audit design
 *
 * Illustrations of the ideas only: all numbers, names and pages below are made up for the example.
 * No experimental results, prompts or model versions are shown.
 */
(function () {
    "use strict";

    const lang = () => {
        try {
            if (typeof getPortfolioLanguage === "function") return getPortfolioLanguage() === "zh" ? "zh" : "en";
            return localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en";
        } catch (e) {
            return "en";
        }
    };
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const UI = {
        en: { prev: "Previous", next: "Next", play: "▶ Play", pause: "❚❚ Pause", replay: "↺ Replay", step: (i, n) => `Step ${i} of ${n}` },
        zh: { prev: "上一步", next: "下一步", play: "▶ 播放", pause: "❚❚ 暂停", replay: "↺ 重播", step: (i, n) => `第 ${i} / ${n} 步` }
    };

    /* ---------------- GraphRAG vs standard retrieval ---------------- */

    function graphNode(x, y, label, cls, at, extra) {
        const w = Math.max(64, label.length * (/[一-鿿]/.test(label) ? 12.5 : 6.6) + 22);
        return `<g class="ex-node ${cls}" data-at="${at}" ${extra || ""} transform="translate(${x},${y})">` +
            `<rect x="${-w / 2}" y="-14" width="${w}" height="28" rx="14"/>` +
            `<text text-anchor="middle" y="4.5">${esc(label)}</text></g>`;
    }

    function graphValue(x, y, year, value, cls, at, extra) {
        const w = Math.max(year.length, value.length) * 6.3 + 18;
        return `<g class="ex-node ex-node-2 ${cls}" data-at="${at}" ${extra || ""} transform="translate(${x},${y})">` +
            `<rect x="${-w / 2}" y="-21" width="${w}" height="42" rx="12"/>` +
            `<text text-anchor="middle" y="-4">${esc(year)}</text>` +
            `<text class="ex-sub" text-anchor="middle" y="12">${esc(value)}</text></g>`;
    }

    function graphEdge(x1, y1, x2, y2, at, extra) {
        return `<line class="ex-edge" data-at="${at}" ${extra || ""} x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    }

    const GRAPHRAG = {
        title: { en: "How GraphRAG looks for evidence differently", zh: "动画：GraphRAG 和普通检索，找证据有什么不同" },
        sub: {
            en: "An illustration of the idea behind the experiment I assist. Company, numbers and pages are made up; no experimental results are shown.",
            zh: "用示意例子讲清我协助的实验在比较什么。公司、数字和页码都是虚构的，不含任何实验结果。"
        },
        steps: [
            { en: "A typical ESG question: the answer has to match one company, one indicator and two years.", zh: "一个典型的 ESG 问题：答案要对上同一家公司、同一个指标、两个年份。" },
            { en: "Standard retrieval returns the passages whose wording is most similar. Similar wording is not the same indicator: the scope or the year basis can be wrong.", zh: "普通检索取回措辞最相似的几段。措辞像，不代表是同一个指标：范围、年份口径都可能对不上。" },
            { en: "GraphRAG first extracts company, indicator, year, value and page from the report, and links them into a graph.", zh: "GraphRAG 先把报告里的“公司—指标—年份—数值—页码”抽取出来，连成一张图。" },
            { en: "At question time it follows the graph: the same indicator, both years, the same basis, with page numbers that can be checked.", zh: "提问时沿着图找：同一个指标、两个年份、同一口径，答案自带页码，可以核对。" },
            { en: "The trade-off: the graph costs extra compute and storage, and not every question needs it. That is what the experiment measures on real reports.", zh: "取舍：建图有额外成本，也不是所有问题都需要图。实验就是在真实报告上衡量这件事。" }
        ],
        stage(L, narrow) {
            const t = (en, zh) => (L === "zh" ? zh : en);
            const chunk = (page, text, sim, tag, tagCls) =>
                `<li class="ex-chunk" data-at="2" data-focus="2"><span class="ex-page">${esc(page)}</span>` +
                `<p>${esc(text)}</p><span class="ex-sim"><i style="width:${sim}%"></i></span>` +
                `<em class="ex-tag ${tagCls}">${esc(tag)}</em></li>`;
            const narrowSvg =
                `<svg class="ex-graph ex-graph-narrow" viewBox="0 0 350 222" role="img" aria-label="${esc(t("Knowledge graph built from the report", "由报告构建的知识图"))}">` +
                graphEdge(175, 26, 90, 96, 3, 'data-focus="4"') +
                graphEdge(175, 26, 262, 96, 3, 'data-dim="4"') +
                graphEdge(90, 96, 58, 178, 3, 'data-focus="4"') +
                graphEdge(90, 96, 174, 178, 3, 'data-focus="4"') +
                graphEdge(262, 96, 292, 178, 3, 'data-dim="4"') +
                graphNode(175, 26, t("Example Co.", "示例公司"), "ex-n-company", 3, 'data-focus="4"') +
                graphNode(90, 96, t("Scope 2 emissions", "范围二排放"), "ex-n-ind", 3, 'data-focus="4"') +
                graphNode(262, 96, t("Scope 1 emissions", "范围一排放"), "ex-n-other", 3, 'data-dim="4"') +
                graphValue(58, 178, "2023", "12,700 t · p.86", "ex-n-val", 3, 'data-focus="4"') +
                graphValue(174, 178, "2024", "11,900 t · p.87", "ex-n-val", 3, 'data-focus="4"') +
                graphValue(292, 178, "2024", "8,200 t · p.48", "ex-n-other", 3, 'data-dim="4"') +
                `</svg>`;
            const wideSvg =
                `<svg class="ex-graph" viewBox="0 0 360 220" role="img" aria-label="${esc(t("Knowledge graph built from the report", "由报告构建的知识图"))}">` +
                graphEdge(58, 110, 160, 62, 3, 'data-focus="4"') +
                graphEdge(58, 110, 160, 168, 3, 'data-dim="4"') +
                graphEdge(160, 62, 272, 30, 3, 'data-focus="4"') +
                graphEdge(160, 62, 272, 94, 3, 'data-focus="4"') +
                graphEdge(160, 168, 272, 190, 3, 'data-dim="4"') +
                graphNode(58, 110, t("Example Co.", "示例公司"), "ex-n-company", 3, 'data-focus="4"') +
                graphNode(160, 62, t("Scope 2 emissions", "范围二排放"), "ex-n-ind", 3, 'data-focus="4"') +
                graphNode(160, 168, t("Scope 1 emissions", "范围一排放"), "ex-n-other", 3, 'data-dim="4"') +
                graphNode(272, 30, "2023 · 12,700 t · p.86", "ex-n-val", 3, 'data-focus="4"') +
                graphNode(272, 94, "2024 · 11,900 t · p.87", "ex-n-val", 3, 'data-focus="4"') +
                graphNode(272, 190, "2024 · 8,200 t · p.48", "ex-n-other", 3, 'data-dim="4"') +
                `</svg>`;
            return `<div class="ex-question" data-at="1" data-focus="1"><b>${esc(t("Question", "问题"))}</b>` +
                `${esc(t("How did Example Co.'s Scope 2 emissions change from 2023 to 2024?", "示例公司 2024 年的范围二排放，比 2023 年变化了多少？"))}</div>` +
                `<div class="ex-lanes">` +
                `<section class="ex-lane"><h4>${esc(t("Standard retrieval", "普通检索"))}<small>${esc(t("rank passages by text similarity", "按文字相似度找段落"))}</small></h4>` +
                `<ol class="ex-chunks">` +
                chunk("p.48", t("“2024 Scope 1 emissions were 8,200 tCO₂e …”", "“2024 年范围一排放为 8,200 tCO₂e……”"), 92, t("Wrong scope", "范围不对"), "bad") +
                chunk("p.12", t("“Scope 2 emissions fell 6% (against the 2022 baseline) …”", "“范围二排放较基准年下降 6%（2022 年口径）……”"), 86, t("Wrong year basis", "年份口径不对"), "bad") +
                chunk("p.87", t("“2024 Scope 2 emissions: 11,900 tCO₂e …”", "“2024 年范围二排放 11,900 tCO₂e……”"), 81, t("Only one year", "只有一年"), "warn") +
                `</ol>` +
                `<div class="ex-answer bad" data-at="2" data-focus="2">⚠ ${esc(t("The answer may stitch together numbers from different scopes or years.", "答案可能把不同范围、不同年份的数字拼在一起。"))}</div>` +
                `</section>` +
                `<section class="ex-lane"><h4>GraphRAG<small>${esc(t("link the report into a graph, then follow it", "先连成图，再沿着图找"))}</small></h4>` +
                `<div class="ex-build" data-at="3" data-focus="3">${esc(t("Extract: company · indicator · year · value · page", "抽取：公司 · 指标 · 年份 · 数值 · 页码"))}</div>` +
                (narrow ? narrowSvg : wideSvg) +
                `<div class="ex-answer good" data-at="4" data-focus="4">✓ ${esc(t("Down about 6.3% (12,700 → 11,900 tCO₂e, pages 86–87). Same indicator, same basis.", "下降约 6.3%（12,700 → 11,900 tCO₂e，第 86–87 页），同一指标、同一口径。"))}</div>` +
                `</section></div>` +
                `<div class="ex-note" data-at="5" data-focus="5"><b>${esc(t("Trade-off", "取舍"))}</b>` +
                `${esc(t("Building the graph costs extra compute and storage. It helps most when an answer must match the same indicator (code, year, unit, scope); for broad summaries it may not be worth it.", "建图要多花计算和存储。答案必须对上同一个指标（编号、年份、单位、范围）时，图最有帮助；概括类问题未必值得。"))}</div>`;
        }
    };

    /* ---------------- "Same resume, different name" audit ---------------- */

    const AUDIT = {
        title: { en: "How the “same resume, different name” audit is designed", zh: "动画：“同一份简历、只换名字”的实验怎么设计" },
        sub: {
            en: "My own study, at the design stage. The names and roles below are examples; there are no results yet.",
            zh: "我自己的研究课题，目前在实验设计阶段。下面的名字和岗位都是示例，还没有任何结果。"
        },
        steps: [
            { en: "Start from one base resume for an Australian role.", zh: "从一份针对澳洲岗位的基础简历开始。" },
            { en: "Change exactly one thing at a time and keep every other word identical, so any score gap can only come from that change.", zh: "每次只改一个变量，其余内容一字不差，这样分数差异只能来自这个变量。" },
            { en: "Every version is scored by models from 8 developers in China and the US, many times over, across several roles, so random noise averages out.", zh: "每个版本都交给国内外 8 家开发商的模型打分，在多个岗位上重复多次，抵消随机波动。" },
            { en: "A built-in check: a resume that really is stronger should score higher. If a model cannot see a real difference, its scores cannot be trusted.", zh: "内置检验题：真的更强的简历应该得分更高。如果模型连真实差异都看不出来，它的分数就不可信。" },
            { en: "Before running, an equivalence band of ±2 points is fixed. A gap inside the band means no meaningful difference, which is also a valid finding.", zh: "实验前先定好 ±2 分的等价区间：差异落在区间内，说明没有实质差异，这也是有效结论；超出区间才算偏差。" }
        ],
        stage(L) {
            const t = (en, zh) => (L === "zh" ? zh : en);
            const variant = (label, from, to) =>
                `<div class="ex-variant" data-at="2" data-focus="2"><span>${esc(label)}</span>` +
                `<b>${esc(from)}<i>→</i>${esc(to)}</b><small>${esc(t("everything else identical", "其余完全相同"))}</small></div>`;
            const models = "ABCDEFGH".split("").map(c => `<span class="ex-model">${esc(t("Developer", "开发商"))} ${c}</span>`).join("");
            const band =
                `<svg class="ex-scale" viewBox="-14 0 548 106" role="img" aria-label="${esc(t("Equivalence band of plus or minus 2 points", "±2 分等价区间"))}">` +
                `<rect class="ex-band" x="180" y="26" width="160" height="34" rx="6"/>` +
                `<line class="ex-axis" x1="20" y1="43" x2="500" y2="43"/>` +
                [-6, -4, -2, 0, 2, 4, 6].map(v => {
                    const x = 260 + v * 40;
                    return `<line class="ex-tick" x1="${x}" y1="38" x2="${x}" y2="48"/><text class="ex-tick-label" x="${x}" y="78" text-anchor="middle">${v > 0 ? "+" + v : v}</text>`;
                }).join("") +
                `<text class="ex-band-label" x="260" y="18" text-anchor="middle">${esc(t("equivalence band ±2 points", "等价区间 ±2 分"))}</text>` +
                `<circle class="ex-dot in" cx="${260 + 0.8 * 40}" cy="43" r="7"/>` +
                `<circle class="ex-dot out" cx="${260 + 3.6 * 40}" cy="43" r="7"/>` +
                `<text class="ex-axis-label" x="520" y="102" text-anchor="end">${esc(t("score gap (illustrative)", "分数差（示意）"))}</text>` +
                `</svg>`;
            return `<div class="ex-resume" data-at="1" data-focus="1">` +
                `<b>${esc(t("Base resume · Data Analyst, Sydney (example)", "基础简历 · 悉尼数据分析岗（示例）"))}</b>` +
                `<ul><li><span>${esc(t("Name", "姓名"))}</span><em>▢</em></li>` +
                `<li><span>${esc(t("Education", "学历"))}</span>${esc(t("Master's degree, Australian university", "澳洲大学硕士"))}</li>` +
                `<li><span>${esc(t("Experience", "经验"))}</span>${esc(t("2 years in analytics", "2 年数据分析"))}</li>` +
                `<li><span>${esc(t("Work rights", "工作权利"))}</span><em>▢</em></li>` +
                `<li><span>${esc(t("Last employer", "上一家雇主"))}</span><em>▢</em></li></ul></div>` +
                `<div class="ex-variants">` +
                variant(t("Name origin", "名字来源"), "Wei Zhang", "James Smith") +
                variant(t("Spelling of the same surname", "同一个姓的拼写"), "Lin", "Lynn") +
                variant(t("Work rights", "工作权利"), t("Student visa", "学生签证"), t("Permanent resident", "永久居民")) +
                variant(t("Employer type", "雇主类型"), t("Chinese firm", "中国企业"), t("Australian firm", "澳洲企业")) +
                `</div>` +
                `<div class="ex-models" data-at="3" data-focus="3"><span class="ex-models-label">${esc(t("Each version is scored by", "每个版本交给"))}</span>${models}<span class="ex-repeat">× ${esc(t("repeated runs", "重复多次"))}</span></div>` +
                `<div class="ex-control" data-at="4" data-focus="4"><b>${esc(t("Check question", "检验题"))}</b>` +
                `${esc(t("Same resume + 1 more year of relevant experience", "同一份简历 + 多 1 年相关经验"))}<span>${esc(t("→ should score higher ↑", "→ 分数应该更高 ↑"))}</span></div>` +
                `<div class="ex-equiv" data-at="5" data-focus="5">${band}` +
                `<p><span class="ex-key in"></span>${esc(t("Inside the band: no meaningful difference", "落在区间内：没有实质差异"))}` +
                `<span class="ex-key out"></span>${esc(t("Outside the band: evidence of bias", "超出区间：存在偏差"))}</p></div>`;
        }
    };

    const EXPLAINERS = { graphrag: GRAPHRAG, audit: AUDIT };

    /* ---------------- player ---------------- */

    function apply(el) {
        const st = el._ex, def = EXPLAINERS[el.dataset.explainer], L = lang(), U = UI[L];
        const n = def.steps.length;
        el.querySelectorAll("[data-at]").forEach(node => node.classList.toggle("is-on", +node.dataset.at <= st.step));
        el.querySelectorAll("[data-focus]").forEach(node => node.classList.toggle("is-focus", node.dataset.focus.split(" ").includes(String(st.step))));
        el.querySelectorAll("[data-dim]").forEach(node => node.classList.toggle("is-dim", st.step >= +node.dataset.dim));
        el.querySelector(".ex-caption").textContent = def.steps[st.step - 1][L];
        el.querySelector(".ex-count").textContent = U.step(st.step, n);
        el.querySelectorAll(".ex-dots button").forEach((b, i) => b.classList.toggle("active", i + 1 === st.step));
        el.querySelector(".ex-prev").disabled = st.step === 1;
        el.querySelector(".ex-next").disabled = st.step === n;
        el.querySelector(".ex-play").textContent = st.timer ? U.pause : st.step === n ? U.replay : U.play;
    }

    function stop(el) {
        clearInterval(el._ex.timer);
        el._ex.timer = null;
    }

    function play(el) {
        const n = EXPLAINERS[el.dataset.explainer].steps.length;
        stop(el);
        if (el._ex.step === n) el._ex.step = 1;
        el._ex.timer = setInterval(() => {
            if (el._ex.step < n) el._ex.step++;
            if (el._ex.step >= n) stop(el);
            apply(el);
        }, 4200);
        apply(el);
    }

    function go(el, step) {
        stop(el);
        el._ex.step = step;
        apply(el);
    }

    function build(el) {
        const def = EXPLAINERS[el.dataset.explainer], L = lang(), U = UI[L];
        const n = def.steps.length;
        el.innerHTML =
            `<div class="ex-head"><h3>${esc(def.title[L])}</h3><p>${esc(def.sub[L])}</p></div>` +
            `<div class="ex-stage">${def.stage(L, el._ex.narrow)}</div>` +
            `<div class="ex-bar"><div class="ex-controls">` +
            `<button type="button" class="ex-prev">‹ ${esc(U.prev)}</button>` +
            `<button type="button" class="ex-play"></button>` +
            `<button type="button" class="ex-next">${esc(U.next)} ›</button></div>` +
            `<div class="ex-dots">${def.steps.map((s, i) => `<button type="button" aria-label="${esc(U.step(i + 1, n))}"></button>`).join("")}</div>` +
            `<span class="ex-count"></span></div>` +
            `<p class="ex-caption" aria-live="polite"></p>`;
        el.querySelector(".ex-prev").addEventListener("click", () => go(el, Math.max(1, el._ex.step - 1)));
        el.querySelector(".ex-next").addEventListener("click", () => go(el, Math.min(n, el._ex.step + 1)));
        el.querySelector(".ex-play").addEventListener("click", () => (el._ex.timer ? (stop(el), apply(el)) : play(el)));
        el.querySelectorAll(".ex-dots button").forEach((b, i) => b.addEventListener("click", () => go(el, i + 1)));
        apply(el);
    }

    function mount(el) {
        if (!EXPLAINERS[el.dataset.explainer]) return;
        el._ex = { step: 1, timer: null, started: false, narrow: el.clientWidth < 560 };
        el.classList.add("ex");
        build(el);
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const narrow = el.clientWidth < 560;
                if (narrow === el._ex.narrow) return;
                el._ex.narrow = narrow;
                const wasPlaying = !!el._ex.timer;
                stop(el);
                build(el);
                if (wasPlaying) play(el);
            }, 200);
        });
        if (reduceMotion() || !("IntersectionObserver" in window)) return;
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting && !el._ex.started) {
                    el._ex.started = true;
                    play(el);
                    io.disconnect();
                }
            });
        }, { threshold: 0.45 });
        io.observe(el);
    }

    function init() {
        document.querySelectorAll("[data-explainer]").forEach(mount);
    }

    window.addEventListener("portfolioLanguageChanged", () => {
        document.querySelectorAll(".ex[data-explainer]").forEach(el => {
            const wasPlaying = !!el._ex.timer;
            stop(el);
            build(el);
            if (wasPlaying) play(el);
        });
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
