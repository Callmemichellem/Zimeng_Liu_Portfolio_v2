/* Retention-list calculator for the member churn project (coursework, so kept in /assets/private/,
 * which robots.txt blocks from search engines).
 *
 * List sizes and leavers come from the final model's out-of-fold predictions on 12,272 members
 * (the "What each contact budget delivers" table). Save rate, contact cost and member value are the
 * project's stated assumptions. Simplified to member level, contacting the whole list, no control group.
 * Mounted wherever <div data-nextgen-model></div> appears.
 */
(function () {
    "use strict";

    const MEMBERS = 12272, LEAVERS = 879, FIXED = 5000;
    const LIST = [
        { share: 5, members: 615, leavers: 207 },
        { share: 10, members: 1227, leavers: 312 },
        { share: 15, members: 1840, leavers: 408 },
        { share: 20, members: 2455, leavers: 486 },
        { share: 30, members: 3680, leavers: 592 }
    ];
    const state = { k: 1, cost: 33, save: 10, value: 2450 };
    const DEFAULTS = Object.assign({}, state);

    const T = {
        en: {
            title: "Interactive model: contact the riskiest 10% or 20% of members?",
            sub: "Pick how far down the risk list to go, then set the assumptions. List sizes and leavers come from the model's out-of-fold predictions.",
            k: "Members contacted (riskiest first)", cost: "Cost per contact", save: "Save rate among leavers contacted", value: "Value of one saved member (a year)",
            call: "≈ A$33 personal call", app: "≈ A$1 app message",
            covered: "Leavers on the list", vsRandom: "vs a random list of the same size",
            perHundred: (m, r) => `${m} leavers per 100 contacted, against about ${r} for a random list.`,
            saved: "Members saved", revenue: "Revenue retained", costTotal: "Cost (incl. A$5,000 set-up)", net: "Net benefit", ratio: "Cost : revenue",
            breakeven: v => `Break-even save rate at this list size and cost: ${v}.`,
            model: "Model list", random: "Random list",
            call1: "Personal call", app1: "App message", reset: "Reset",
            note: "From the project: 12,272 labelled members, about 879 leavers. Save rate, contact cost and member value (A$2,400 fee plus about A$50 extra spend) are scenario assumptions, not measured effects. Simplified to member level with the whole list contacted and no control group, so it differs from the tiered household pilot on the project page."
        },
        zh: {
            title: "互动模型：联系风险最高的 10% 还是 20% 会员？",
            sub: "先选名单往下联系多少人，再调整假设。名单规模与名单上的退会者来自模型的折外预测。",
            k: "联系的会员（按风险从高到低）", cost: "每次联系成本", save: "被联系退会者的挽回率", value: "挽回一名会员的价值（一年）",
            call: "≈ 33 澳元电话联系", app: "≈ 1 澳元 App 消息",
            covered: "名单上的退会者", vsRandom: "对比同样人数的随机名单",
            perHundred: (m, r) => `每联系 100 人覆盖 ${m} 个退会者，随机名单约 ${r} 个。`,
            saved: "挽回会员", revenue: "保住的收入", costTotal: "成本（含 5,000 澳元搭建费）", net: "净收益", ratio: "成本 : 收入",
            breakeven: v => `在这个名单规模和成本下，保本挽回率为 ${v}。`,
            model: "模型名单", random: "随机名单",
            call1: "电话联系", app1: "App 消息", reset: "重置",
            note: "来自项目：12,272 名有标签会员，约 879 名退会者。挽回率、联系成本、会员价值（年费 2,400 澳元 + 约 50 澳元附加消费）都是情景假设，不是实测效果。这里简化为会员级、整份名单都联系、不留对照组，所以与项目页的分层家庭试点测算不完全相同。"
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
    const aud = v => (v < 0 ? "−" : "") + "A$" + Math.round(Math.abs(v)).toLocaleString("en-US");

    function template(L) {
        const t = T[L];
        return `<div class="cm-head"><h3>${t.title}</h3><p>${t.sub}</p></div>` +
            `<div class="cm-grid"><div class="cm-controls">` +
            `<label class="cm-slider"><span class="cm-slider-head"><b>${t.k}</b><output data-out="k"></output></span>` +
            `<input type="range" min="0" max="${LIST.length - 1}" step="1" value="${state.k}" data-key="k" aria-label="${t.k}">` +
            `<span class="cm-ticks">${LIST.map(x => `<i>${x.share}%</i>`).join("")}</span></label>` +
            `<label class="cm-slider"><span class="cm-slider-head"><b>${t.cost}</b><output data-out="cost"></output></span>` +
            `<input type="range" min="1" max="40" step="1" value="${state.cost}" data-key="cost" aria-label="${t.cost}"></label>` +
            `<div class="cm-buttons"><button type="button" data-cost="33">${t.call1} · A$33</button><button type="button" data-cost="1">${t.app1} · A$1</button></div>` +
            `<label class="cm-slider"><span class="cm-slider-head"><b>${t.save}</b><output data-out="save"></output></span>` +
            `<input type="range" min="1" max="25" step="1" value="${state.save}" data-key="save" aria-label="${t.save}"></label>` +
            `<label class="cm-slider"><span class="cm-slider-head"><b>${t.value}</b><output data-out="value"></output></span>` +
            `<input type="range" min="1200" max="2450" step="50" value="${state.value}" data-key="value" aria-label="${t.value}"></label>` +
            `<div class="cm-buttons"><button type="button" data-preset="reset">${t.reset}</button></div>` +
            `</div><div class="cm-result">` +
            `<div class="cm-big"><span>${t.covered}</span><strong data-out="leavers"></strong><em data-out="share"></em></div>` +
            `<div class="cm-bars"><div class="cm-bar"><span>${t.model}</span><i class="cm-fill cm-scn pos" data-bar="model"></i><b data-out="modelVal"></b></div>` +
            `<div class="cm-bar"><span>${t.random}</span><i class="cm-fill cm-base" data-bar="random"></i><b data-out="randomVal"></b></div></div>` +
            `<p class="cm-line" data-out="per100"></p>` +
            `<div class="cm-kpis"><div><span>${t.saved}</span><b data-out="saved"></b></div><div><span>${t.revenue}</span><b data-out="revenue"></b></div>` +
            `<div><span>${t.costTotal}</span><b data-out="costTotal"></b></div><div><span>${t.net}</span><b data-out="net"></b></div></div>` +
            `<p class="cm-line" data-out="ratio"></p><p class="cm-line" data-out="breakeven"></p>` +
            `</div></div><p class="cm-note">${t.note}</p>`;
    }

    function update(root) {
        const L = lang(), t = T[L];
        const row = LIST[state.k];
        root.querySelectorAll("input[data-key]").forEach(i => { i.value = state[i.dataset.key]; });
        root.querySelector('[data-out="k"]').textContent = `${row.share}% · ${row.members.toLocaleString("en-US")}`;
        root.querySelector('[data-out="cost"]').textContent = "A$" + state.cost;
        root.querySelector('[data-out="save"]').textContent = state.save + "%";
        root.querySelector('[data-out="value"]').textContent = aud(state.value);

        const randomLeavers = row.members * LEAVERS / MEMBERS;
        root.querySelector('[data-out="leavers"]').textContent = row.leavers.toLocaleString("en-US");
        root.querySelector('[data-out="share"]').textContent = (L === "zh" ? `占全部退会者 ${Math.round(row.leavers / LEAVERS * 100)}%` : `${Math.round(row.leavers / LEAVERS * 100)}% of all leavers`) +
            ` · ×${(row.leavers / randomLeavers).toFixed(1)} ${t.vsRandom}`;
        const max = Math.max(row.leavers, randomLeavers) * 1.08;
        root.querySelector('[data-bar="model"]').style.width = (row.leavers / max * 100) + "%";
        root.querySelector('[data-bar="random"]').style.width = (randomLeavers / max * 100) + "%";
        root.querySelector('[data-out="modelVal"]').textContent = row.leavers.toLocaleString("en-US");
        root.querySelector('[data-out="randomVal"]').textContent = Math.round(randomLeavers).toLocaleString("en-US");
        root.querySelector('[data-out="per100"]').textContent = t.perHundred(Math.round(row.leavers / row.members * 100), Math.round(LEAVERS / MEMBERS * 100));

        const saved = row.leavers * state.save / 100;
        const revenue = saved * state.value;
        const cost = row.members * state.cost + FIXED;
        const net = revenue - cost;
        root.querySelector('[data-out="saved"]').textContent = saved.toFixed(1);
        root.querySelector('[data-out="revenue"]').textContent = aud(revenue);
        root.querySelector('[data-out="costTotal"]').textContent = aud(cost);
        const n = root.querySelector('[data-out="net"]');
        n.textContent = (net >= 0 ? "+" : "") + aud(net);
        n.className = net >= 0 ? "pos" : "neg";
        root.querySelector('[data-out="ratio"]').innerHTML = `<b>${t.ratio}</b> 1 : ${(revenue / cost).toFixed(1)}`;
        const be = cost / (row.leavers * state.value) * 100;
        root.querySelector('[data-out="breakeven"]').textContent = t.breakeven(be > 100 ? ">100%" : be.toFixed(1) + "%");
    }

    function mount(root) {
        root.dataset.mounted = "1";
        root.classList.add("cm");
        root.innerHTML = template(lang());
        root.querySelectorAll("input[data-key]").forEach(input => input.addEventListener("input", () => {
            state[input.dataset.key] = +input.value;
            update(root);
        }));
        root.querySelectorAll("[data-cost]").forEach(b => b.addEventListener("click", () => { state.cost = +b.dataset.cost; update(root); }));
        root.querySelector('[data-preset="reset"]').addEventListener("click", () => { Object.assign(state, DEFAULTS); update(root); });
        update(root);
    }

    const scan = () => document.querySelectorAll("[data-nextgen-model]:not([data-mounted])").forEach(mount);
    window.addEventListener("portfolioLanguageChanged", () => document.querySelectorAll("[data-nextgen-model][data-mounted]").forEach(mount));
    const start = () => { scan(); new MutationObserver(scan).observe(document.body, { childList: true, subtree: true }); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
