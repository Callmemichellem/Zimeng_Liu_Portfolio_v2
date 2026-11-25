/* Investment-return calculator (method from my strategy-consulting internship).
 *
 * Realisable profit = addressable cost base × industry improvement × historical realisation rate,
 * minus running cost; then NPV, IRR and payback decide whether a use case makes the first wave.
 * All numbers are illustrative defaults: nothing here comes from any client.
 * Mounted wherever <div data-roi-model></div> appears.
 */
(function () {
    "use strict";

    const state = { I: 60, B: 800, g: 5, r: 65, O: 5, d: 8, N: 5 };
    const DEFAULTS = Object.assign({}, state);

    const T = {
        en: {
            title: "Interactive model: should this automation project make the first wave?",
            sub: "The method I used in strategy consulting, with made-up numbers. Realisable profit = addressable cost base × industry improvement × realisation rate − running cost.",
            I: "Up-front investment", B: "Addressable cost base (per year)", g: "Industry improvement", r: "Realisation rate", O: "Running cost (per year)", d: "Discount rate", N: "Years counted",
            unit: "RMB m", yr: "yrs",
            annual: "Realisable profit per year", npv: "NPV", irr: "IRR", payback: "Payback", cap: "Investment cap at a 2-year payback",
            go: "First wave: NPV is positive and payback is within 3 years.",
            watch: "Watch list: NPV is positive but payback is longer than 3 years.",
            stop: "Hold: NPV is not positive at this discount rate.",
            none: "Running cost eats the whole benefit: no return.",
            sens: "What moves NPV most", rLow: "Realisation −10 pts", rHigh: "Realisation +10 pts", gLow: "Improvement −1 pt", gHigh: "Improvement +1 pt", dLow: "Discount rate −2 pts", dHigh: "Discount rate +2 pts",
            reset: "Reset",
            note: "Illustrative numbers only; not taken from any client. Thresholds (positive NPV, payback ≤ 3 years, a cap at 2 years' realisable profit) mirror how use cases were screened."
        },
        zh: {
            title: "互动模型：这个自动化项目能进入首批投资吗？",
            sub: "我在战略咨询实习中用过的方法，数字均为示意。可兑现利润 = 可改善成本基数 × 行业改善幅度 × 兑现率 − 年运营成本。",
            I: "一次性投资", B: "可改善成本基数（每年）", g: "行业改善幅度", r: "兑现率", O: "年运营成本", d: "折现率", N: "计算年限",
            unit: "百万元", yr: "年",
            annual: "年可兑现利润", npv: "NPV", irr: "IRR", payback: "回收期", cap: "按 2 年回收期的投资上限",
            go: "进入首批：NPV 为正，且 3 年内回收。",
            watch: "列入观察：NPV 为正，但回收期超过 3 年。",
            stop: "暂缓：在这个折现率下 NPV 不为正。",
            none: "运营成本吃掉了全部收益，没有回报。",
            sens: "哪个假设对 NPV 影响最大", rLow: "兑现率 −10 个百分点", rHigh: "兑现率 +10 个百分点", gLow: "改善幅度 −1 个百分点", gHigh: "改善幅度 +1 个百分点", dLow: "折现率 −2 个百分点", dHigh: "折现率 +2 个百分点",
            reset: "重置",
            note: "数字均为示意，与任何客户无关。判断标准（NPV 为正、3 年内回收、投资不超过 2 年可兑现利润）与当时筛选用例的思路一致。"
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

    const annual = s => s.B * s.g / 100 * s.r / 100 - s.O;
    const npv = (s, rate) => {
        const a = annual(s), d = (rate === undefined ? s.d : rate) / 100;
        let v = -s.I;
        for (let t = 1; t <= s.N; t++) v += a / Math.pow(1 + d, t);
        return v;
    };
    function irr(s) {
        if (annual(s) <= 0) return null;
        let lo = -0.99, hi = 3;
        if (npv(s, hi * 100) > 0) return null;
        for (let i = 0; i < 80; i++) {
            const mid = (lo + hi) / 2;
            if (npv(s, mid * 100) > 0) lo = mid; else hi = mid;
        }
        return (lo + hi) / 2 * 100;
    }

    const num = (v, digits = 1) => (Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits)).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
    const money = (L, v) => (v < 0 ? "−" : "") + num(Math.abs(v)) + " " + T[L].unit;

    function template(L) {
        const t = T[L];
        const slider = (key, min, max, step, suffix) =>
            `<label class="cm-slider"><span class="cm-slider-head"><b>${t[key]}</b><output data-out="${key}" data-suffix="${suffix}"></output></span>` +
            `<input type="range" min="${min}" max="${max}" step="${step}" value="${state[key]}" data-key="${key}" aria-label="${t[key]}"></label>`;
        return `<div class="cm-head"><h3>${t.title}</h3><p>${t.sub}</p></div>` +
            `<div class="cm-grid"><div class="cm-controls">` +
            slider("I", 10, 300, 5, "unit") + slider("B", 100, 2000, 50, "unit") + slider("g", 1, 15, 0.5, "%") +
            slider("r", 30, 100, 1, "%") + slider("O", 0, 40, 1, "unit") + slider("d", 6, 12, 0.5, "%") + slider("N", 3, 10, 1, "yr") +
            `<div class="cm-buttons"><button type="button" data-preset="reset">${t.reset}</button></div>` +
            `</div><div class="cm-result">` +
            `<div class="cm-big"><span>${t.annual}</span><strong data-out="annual"></strong></div>` +
            `<div class="cm-kpis"><div><span>${t.npv}</span><b data-out="npv"></b></div><div><span>${t.irr}</span><b data-out="irr"></b></div>` +
            `<div><span>${t.payback}</span><b data-out="payback"></b></div><div><span>${t.cap}</span><b data-out="cap"></b></div></div>` +
            `<p class="cm-verdict" data-out="verdict"></p>` +
            `<div class="cm-sens"><b>${t.sens}</b><div data-out="sens"></div></div>` +
            `</div></div><p class="cm-note">${t.note}</p>`;
    }

    function update(root) {
        const L = lang(), t = T[L];
        root.querySelectorAll("input[data-key]").forEach(i => { i.value = state[i.dataset.key]; });
        root.querySelectorAll("output[data-out]").forEach(o => {
            const v = state[o.dataset.out], suf = o.dataset.suffix;
            o.textContent = suf === "unit" ? `${num(v, 0)} ${t.unit}` : suf === "yr" ? `${v} ${t.yr}` : `${v}%`;
        });
        const a = annual(state), n = npv(state), i = irr(state);
        root.querySelector('[data-out="annual"]').textContent = money(L, a);
        const nEl = root.querySelector('[data-out="npv"]');
        nEl.textContent = money(L, n);
        nEl.className = n >= 0 ? "pos" : "neg";
        root.querySelector('[data-out="irr"]').textContent = i === null ? "–" : `${num(i)}%`;
        root.querySelector('[data-out="payback"]').textContent = a > 0 ? `${num(state.I / a)} ${t.yr}` : "–";
        root.querySelector('[data-out="cap"]').textContent = a > 0 ? money(L, 2 * a) : "–";
        const verdict = root.querySelector('[data-out="verdict"]');
        let key = "stop";
        if (a <= 0) key = "none";
        else if (n > 0 && state.I / a <= 3) key = "go";
        else if (n > 0) key = "watch";
        verdict.textContent = t[key];
        verdict.className = "cm-verdict " + (key === "go" ? "pos" : key === "watch" ? "warn" : "neg");

        const rows = [
            ["rLow", { r: Math.max(0, state.r - 10) }], ["rHigh", { r: Math.min(100, state.r + 10) }],
            ["gLow", { g: Math.max(0, state.g - 1) }], ["gHigh", { g: state.g + 1 }],
            ["dHigh", { d: state.d + 2 }], ["dLow", { d: Math.max(0, state.d - 2) }]
        ].map(([k, change]) => [k, npv(Object.assign({}, state, change)) - n]);
        const max = Math.max(1, ...rows.map(r => Math.abs(r[1])));
        root.querySelector('[data-out="sens"]').innerHTML = rows.map(([k, dv]) =>
            `<div class="cm-sens-row"><span>${t[k]}</span><i class="${dv >= 0 ? "pos" : "neg"}" style="width:${Math.abs(dv) / max * 100}%"></i><em>${dv >= 0 ? "+" : "−"}${num(Math.abs(dv))}</em></div>`
        ).join("");
    }

    function mount(root) {
        root.dataset.mounted = "1";
        root.classList.add("cm");
        root.innerHTML = template(lang());
        root.querySelectorAll("input[data-key]").forEach(input => input.addEventListener("input", () => {
            state[input.dataset.key] = +input.value;
            update(root);
        }));
        root.querySelector('[data-preset="reset"]').addEventListener("click", () => { Object.assign(state, DEFAULTS); update(root); });
        update(root);
    }

    const scan = () => document.querySelectorAll("[data-roi-model]:not([data-mounted])").forEach(mount);
    window.addEventListener("portfolioLanguageChanged", () => document.querySelectorAll("[data-roi-model][data-mounted]").forEach(mount));
    const start = () => { scan(); new MutationObserver(scan).observe(document.body, { childList: true, subtree: true }); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
