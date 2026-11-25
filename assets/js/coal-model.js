/* Interactive coal-price sensitivity model (Shanxi Securities · Indonesian coal report).
 *
 * Same structure as the report: cash contribution = volume × (price − unit cash cost),
 * with unit cost not moving with price. The base (contribution US$1,176m) and the
 * "10% lower price" case (US$826m) come from the report; base revenue (~US$3,500m) and
 * cash cost (~US$2,324m) are back-solved from those two cases.
 * Mounted wherever <div data-coal-model></div> appears (the Shanxi detail page).
 */
(function () {
    "use strict";

    const BASE_REVENUE = 3500;   // US$m, back-solved
    const BASE_COST = 2324;      // US$m, back-solved
    const BASE = BASE_REVENUE - BASE_COST; // 1,176

    const state = { p: 0, v: 0, c: 0 };

    const T = {
        en: {
            title: "Interactive model: how exposed is cash contribution to the coal price?",
            sub: "Drag the sliders. Same structure as the report: cash contribution = volume × (price − unit cash cost).",
            price: "Coal price", volume: "Sales volume", cost: "Unit cash cost",
            contribution: "Cash contribution", vsBase: "vs base", base: "Base",
            scenario: "Your scenario", margin: "Cash margin",
            amplifier: m => `At this margin, a 1% move in price moves cash contribution by about ${m}%.`,
            needVol: v => `To get back to the base contribution, volume would need to change by ${v} versus base volume.`,
            negative: "Unit cash contribution is negative: selling more only loses more.",
            enough: "At this price and cost, base volume already reaches the base contribution.",
            preset: "Report case: price −10%", reset: "Reset",
            matrix: "Price × cost matrix (change in cash contribution vs base, at base volume)",
            matrixHint: "Click a cell to load it into the sliders.",
            costRow: c => `Cost ${c}`, priceCol: p => `Price ${p}`,
            note: "Base revenue (~US$3.5bn) and cash cost (~US$2.32bn) are back-solved from the report's two cases (US$1,176m at base, US$826m at a 10% lower price). Illustrates price exposure only; not a profit, EBITDA or free-cash-flow forecast."
        },
        zh: {
            title: "互动模型：煤价变动对现金贡献有多大影响？",
            sub: "拖动滑块试试。模型结构与报告一致：现金贡献 = 销量 ×（售价 − 单位现金成本）。",
            price: "煤价", volume: "销量", cost: "单位现金成本",
            contribution: "现金贡献", vsBase: "较基准", base: "基准",
            scenario: "你的情景", margin: "现金利润率",
            amplifier: m => `在这个利润率下，售价每变动 1%，现金贡献约变动 ${m}%。`,
            needVol: v => `要回到基准现金贡献，销量需要比基准变动 ${v}。`,
            negative: "单位现金贡献为负：卖得越多，亏得越多。",
            enough: "在当前售价和成本下，基准销量已经能达到基准现金贡献。",
            preset: "报告情景：煤价 −10%", reset: "重置",
            matrix: "价格 × 成本矩阵（基准销量下，现金贡献较基准的变化）",
            matrixHint: "点击任一格，把它载入滑块。",
            costRow: c => `成本 ${c}`, priceCol: p => `煤价 ${p}`,
            note: "基准收入（约 35 亿美元）和现金成本（约 23.24 亿美元）由报告的两个情景反推：基准现金贡献 11.76 亿美元，煤价下跌 10% 时为 8.26 亿美元。仅用于说明价格敞口，不是利润、EBITDA 或自由现金流预测。"
        }
    };

    const lang = () => {
        try {
            if (typeof getPortfolioLanguage === "function") return getPortfolioLanguage() === "zh" ? "zh" : "en";
            return localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en";
        } catch (e) {
            return "en";
        }
    };
    const pct = (x, digits = 1) => (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x).toFixed(digits) + "%";
    const signed = n => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n) + "%";
    const money = (L, v) => L === "zh"
        ? `${(v / 100).toFixed(2)} 亿美元`
        : `US$${Math.round(v).toLocaleString("en-US")}m`;

    const contribution = (p, v, c) => (1 + v / 100) * (BASE_REVENUE * (1 + p / 100) - BASE_COST * (1 + c / 100));

    function template(L) {
        const t = T[L];
        const slider = (key, label, min, max) =>
            `<label class="cm-slider"><span class="cm-slider-head"><b>${label}</b><output data-out="${key}"></output></span>` +
            `<input type="range" min="${min}" max="${max}" step="1" value="${state[key]}" data-key="${key}" aria-label="${label}"></label>`;
        const prices = [-20, -10, 0, 10, 20], costs = [-5, 0, 5];
        const matrix = `<table class="cm-matrix"><thead><tr><th></th>${prices.map(p => `<th>${t.priceCol(signed(p))}</th>`).join("")}</tr></thead><tbody>` +
            costs.map(c => `<tr><th>${t.costRow(signed(c))}</th>` + prices.map(p => {
                const d = contribution(p, 0, c) / BASE * 100 - 100;
                const a = Math.min(1, Math.abs(d) / 80);
                const bg = d < 0 ? `rgba(192, 57, 43, ${0.08 + a * 0.55})` : d > 0 ? `rgba(31, 122, 77, ${0.08 + a * 0.55})` : "#f2f5f8";
                const dark = a > 0.55 ? " cm-dark" : "";
                return `<td><button type="button" class="cm-cell${dark}" data-p="${p}" data-c="${c}" style="background:${bg}">${pct(d)}</button></td>`;
            }).join("") + `</tr>`).join("") + `</tbody></table>`;
        return `<div class="cm-head"><h3>${t.title}</h3><p>${t.sub}</p></div>` +
            `<div class="cm-grid">` +
            `<div class="cm-controls">` +
            slider("p", t.price, -30, 30) + slider("v", t.volume, -20, 50) + slider("c", t.cost, -15, 15) +
            `<div class="cm-buttons"><button type="button" data-preset="report">${t.preset}</button><button type="button" data-preset="reset">${t.reset}</button></div>` +
            `</div>` +
            `<div class="cm-result">` +
            `<div class="cm-big"><span>${t.contribution}</span><strong data-out="total"></strong><em data-out="delta"></em></div>` +
            `<div class="cm-bars"><div class="cm-bar"><span>${t.base}</span><i class="cm-fill cm-base"></i><b data-out="baseVal"></b></div>` +
            `<div class="cm-bar"><span>${t.scenario}</span><i class="cm-fill cm-scn"></i><b data-out="scnVal"></b></div></div>` +
            `<p class="cm-line" data-out="margin"></p><p class="cm-line" data-out="need"></p>` +
            `</div></div>` +
            `<div class="cm-matrix-wrap"><div class="cm-matrix-head"><b>${t.matrix}</b><span>${t.matrixHint}</span></div>${matrix}</div>` +
            `<p class="cm-note">${t.note}</p>`;
    }

    function update(root) {
        const L = lang(), t = T[L];
        const { p, v, c } = state;
        const total = contribution(p, v, c);
        const delta = total / BASE * 100 - 100;
        root.querySelector('[data-out="p"]').textContent = signed(p);
        root.querySelector('[data-out="v"]').textContent = signed(v);
        root.querySelector('[data-out="c"]').textContent = signed(c);
        root.querySelectorAll("input[data-key]").forEach(i => { i.value = state[i.dataset.key]; });
        root.querySelector('[data-out="total"]').textContent = money(L, total);
        const d = root.querySelector('[data-out="delta"]');
        d.textContent = `${t.vsBase} ${pct(delta)}`;
        d.className = delta < -0.05 ? "neg" : delta > 0.05 ? "pos" : "";

        const max = Math.max(BASE, Math.abs(total)) * 1.08;
        root.querySelector(".cm-base").style.width = (BASE / max * 100) + "%";
        const scn = root.querySelector(".cm-scn");
        scn.style.width = (Math.max(0, total) / max * 100) + "%";
        scn.classList.toggle("neg", total < BASE - 0.5);
        scn.classList.toggle("pos", total > BASE + 0.5);
        root.querySelector('[data-out="baseVal"]').textContent = money(L, BASE);
        root.querySelector('[data-out="scnVal"]').textContent = money(L, total);

        const revenue = BASE_REVENUE * (1 + p / 100), cost = BASE_COST * (1 + c / 100);
        const unit = revenue - cost;
        const margin = unit / revenue * 100;
        root.querySelector('[data-out="margin"]').innerHTML = unit > 0
            ? `<b>${t.margin} ${margin.toFixed(1)}%</b> · ${t.amplifier((100 / margin).toFixed(1))}`
            : `<b>${t.margin} ${margin.toFixed(1)}%</b>`;
        let need;
        if (unit <= 0) need = t.negative;
        else {
            const vStar = (BASE / unit - 1) * 100;
            need = vStar <= 0 ? t.enough : t.needVol(pct(vStar));
        }
        root.querySelector('[data-out="need"]').textContent = need;

        root.querySelectorAll(".cm-cell").forEach(b => b.classList.toggle("is-current", +b.dataset.p === p && +b.dataset.c === c && v === 0));
    }

    function mount(root) {
        root.dataset.mounted = "1";
        root.classList.add("cm");
        root.innerHTML = template(lang());
        root.querySelectorAll("input[data-key]").forEach(input => input.addEventListener("input", () => {
            state[input.dataset.key] = +input.value;
            update(root);
        }));
        root.querySelector('[data-preset="report"]').addEventListener("click", () => { Object.assign(state, { p: -10, v: 0, c: 0 }); update(root); });
        root.querySelector('[data-preset="reset"]').addEventListener("click", () => { Object.assign(state, { p: 0, v: 0, c: 0 }); update(root); });
        root.querySelectorAll(".cm-cell").forEach(b => b.addEventListener("click", () => {
            Object.assign(state, { p: +b.dataset.p, v: 0, c: +b.dataset.c });
            update(root);
        }));
        update(root);
    }

    function scan() {
        document.querySelectorAll("[data-coal-model]:not([data-mounted])").forEach(mount);
    }

    window.addEventListener("portfolioLanguageChanged", () => {
        document.querySelectorAll("[data-coal-model][data-mounted]").forEach(mount);
    });

    function start() {
        scan();
        new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
