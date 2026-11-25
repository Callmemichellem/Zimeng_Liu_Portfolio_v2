/* Site extras: keyword search + background music.
 *
 * Background music
 * ----------------
 * To change the music, replace the file at MUSIC_SRC with any .mp3 of your own
 * (keep the same file name), or point MUSIC_SRC at a different file.
 * Music is off until a visitor presses the ♪ button; their choice is remembered.
 */
const MUSIC_SRC = "assets/audio/bgm.mp3";
const MUSIC_VOLUME = 0.35;

/* Visit statistics (only the site owner can see them)
 * ----------------------------------------------------
 * 1. Sign up for a free Umami Cloud account at https://cloud.umami.is
 *    and add the website zimengliu.com.
 * 2. Copy its Website ID (looks like 1a2b3c4d-....) and paste it between the quotes below.
 * 3. Commit and push. Countries, regions and cities appear in your Umami dashboard.
 * To stop counting your own visits, open https://zimengliu.com/?me=1 once in each
 * browser you use (https://zimengliu.com/?me=0 turns counting back on).
 */
const UMAMI_WEBSITE_ID = "";

/* 小米 · Q版小人：右下角悬浮。改成 false 即全站关闭；台词在 assets/js/chibi.js 里改。 */
const SHOW_CHIBI = true;

(function () {
    const DATA_SRC = "assets/data/portfolio-data.js";

    const TEXT = {
        en: {
            search: "Search",
            placeholder: "Search internships and projects, e.g. Python, ESG, Roland Berger",
            hint: "Try",
            empty: "No internships or projects match",
            internship: "Internship",
            project: "Project",
            close: "Close",
            results: n => `${n} result${n === 1 ? "" : "s"}`,
            musicOn: "Pause background music",
            musicOff: "Play background music"
        },
        zh: {
            search: "搜索",
            placeholder: "搜索实习和项目，例如 Python、ESG、罗兰贝格",
            hint: "试试",
            empty: "没有找到匹配的实习或项目：",
            internship: "实习",
            project: "项目",
            close: "关闭",
            results: n => `共 ${n} 条结果`,
            musicOn: "暂停背景音乐",
            musicOff: "播放背景音乐"
        }
    };

    const SUGGESTIONS = {
        en: ["Python", "SQL", "Tableau", "Excel", "GraphRAG", "ESG", "valuation", "audit", "machine learning"],
        zh: ["Python", "SQL", "Tableau", "Excel", "GraphRAG", "ESG", "估值", "审计", "机器学习"]
    };

    function lang() {
        try {
            if (typeof getPortfolioLanguage === "function") return getPortfolioLanguage();
            return localStorage.getItem("portfolio-language") || "en";
        } catch (e) {
            return "en";
        }
    }

    function t(key, ...args) {
        const v = TEXT[lang()] ? TEXT[lang()][key] : TEXT.en[key];
        return typeof v === "function" ? v(...args) : v;
    }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    function escapeRegExp(s) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    /* ---------- toolbar ---------- */

    function getToolbar() {
        let tools = document.querySelector(".nav .nav-tools");
        if (!tools) {
            const inner = document.querySelector(".nav .nav-inner");
            if (!inner) return null;
            tools = document.createElement("div");
            tools.className = "nav-tools";
            inner.appendChild(tools);
            const menuBtn = inner.querySelector(".menu-btn");
            if (menuBtn) tools.appendChild(menuBtn);
        }
        return tools;
    }

    const ICON_SEARCH = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    const ICON_NOTE = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="6.5" cy="18" r="2.5" fill="currentColor"/><circle cx="16.5" cy="16" r="2.5" fill="currentColor"/></svg>';
    const ICON_NOTE_OFF = ICON_NOTE.replace("</svg>", '<path d="M4 4l16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>');

    /* ---------- search ---------- */

    let index = null;
    let overlay, input, list, status;

    function loadData() {
        if (typeof PORTFOLIO_DATA !== "undefined") return Promise.resolve(PORTFOLIO_DATA);
        // Shared with journey-map.js so the data file is only ever injected once.
        if (!window.__portfolioDataPromise) {
            window.__portfolioDataPromise = new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = DATA_SRC;
                s.onload = () => (typeof PORTFOLIO_DATA !== "undefined" ? resolve(PORTFOLIO_DATA) : reject(new Error("no data")));
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }
        return window.__portfolioDataPromise;
    }

    function collect(value, out) {
        if (value == null) return;
        if (typeof value === "string" || typeof value === "number") {
            out.push(String(value));
        } else if (Array.isArray(value)) {
            value.forEach(v => collect(v, out));
        } else if (typeof value === "object") {
            Object.keys(value).forEach(k => {
                if (k === "src" || k === "logo" || k === "url" || k === "href" || k === "type") return;
                collect(value[k], out);
            });
        }
    }

    function pick(value, language) {
        if (value == null) return "";
        if (typeof value === "string") return value;
        return value[language] || value.en || "";
    }

    function buildIndex(data) {
        const items = [];
        const add = (kind, item) => {
            const isExp = kind === "internship";
            const fields = [];
            const push = (weight, value) => {
                const out = [];
                collect(value, out);
                if (out.length) fields.push({ weight, text: out.join(" • ").toLowerCase() });
            };
            if (isExp) {
                push(10, item.company);
                push(6, item.role);
            } else {
                push(10, item.title);
                push(7, item.organisation);
                push(10, item.name);
                push(6, item.headline);
                push(5, item.role);
            }
            push(6, item.tags);
            push(3, item.overviewBullets);
            push(2, item.tools);
            push(2, item.metrics);
            push(1, item.background);
            push(1, item.approach);
            push(1, item.details);
            push(1, item.visuals);
            push(1, [item.dates, item.location]);
            items.push({ kind, item, fields });
        };
        (data.experiences || []).forEach(e => add("internship", e));
        (data.projects || []).forEach(p => add("project", p));
        return items;
    }

    function search(query) {
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        if (!terms.length) return [];
        const results = [];
        index.forEach(entry => {
            let score = 0;
            for (const term of terms) {
                let best = 0;
                let total = 0;
                for (const f of entry.fields) {
                    if (f.text.includes(term)) {
                        total += f.weight;
                        if (f.weight > best) best = f.weight;
                    }
                }
                if (!best) return;
                score += best + 0.25 * (total - best);
            }
            results.push({ entry, score });
        });
        results.sort((a, b) => b.score - a.score || String(b.entry.item.sortDate || "").localeCompare(String(a.entry.item.sortDate || "")));
        return results;
    }

    function snippet(entry, terms, language) {
        const it = entry.item;
        const pools = [];
        const gather = v => { const out = []; collect(v, out); return out; };
        const localised = v => {
            if (v && typeof v === "object" && !Array.isArray(v) && (v.en || v.zh)) return gather(v[language] || v.en);
            return gather(v);
        };
        [it.overviewBullets, it.details, it.background, it.approach, it.tools, it.metrics, it.visuals, it.tags].forEach(v => {
            pools.push(...localised(v));
        });
        const lower = terms.map(x => x.toLowerCase());
        let text = pools.find(p => lower.some(term => p.toLowerCase().includes(term)));
        if (!text) {
            const ob = it.overviewBullets ? pick(it.overviewBullets, language) : "";
            text = Array.isArray(ob) ? ob[0] : ob;
        }
        if (!text) return "";
        const pos = Math.max(0, Math.min(...lower.map(term => {
            const i = text.toLowerCase().indexOf(term);
            return i < 0 ? Infinity : i;
        }).concat([Infinity])) );
        let start = pos === Infinity ? 0 : Math.max(0, pos - 50);
        if (start > 0) {
            const sp = text.lastIndexOf(" ", pos - 25);
            if (sp >= 0 && sp > pos - 90) start = sp + 1;
        }
        let end = Math.min(text.length, start + 170);
        if (end < text.length) {
            const sp = text.lastIndexOf(" ", end);
            if (sp > start + 120) end = sp;
        }
        let cut = text.slice(start, end);
        if (start > 0) cut = "… " + cut;
        if (end < text.length) cut += " …";
        let html = escapeHtml(cut);
        lower.forEach(term => {
            if (!term) return;
            html = html.replace(new RegExp("(" + escapeRegExp(escapeHtml(term)) + ")", "gi"), "<mark>$1</mark>");
        });
        return html;
    }

    function render() {
        const language = lang();
        const q = input.value.trim();
        input.placeholder = t("placeholder");
        if (!q) {
            status.textContent = "";
            list.innerHTML = `<div class="site-search-hint">${escapeHtml(t("hint"))}: ${SUGGESTIONS[language].map(s => `<button type="button" class="site-search-chip">${escapeHtml(s)}</button>`).join("")}</div>`;
            list.querySelectorAll(".site-search-chip").forEach(btn => btn.addEventListener("click", () => {
                input.value = btn.textContent;
                render();
                input.focus();
            }));
            return;
        }
        if (!index) {
            status.textContent = "…";
            return;
        }
        const terms = q.split(/\s+/).filter(Boolean);
        const results = search(q).slice(0, 30);
        status.textContent = t("results", results.length);
        if (!results.length) {
            list.innerHTML = `<p class="site-search-empty">${escapeHtml(t("empty"))} “${escapeHtml(q)}”</p>`;
            return;
        }
        list.innerHTML = results.map(({ entry }) => {
            const it = entry.item;
            const isExp = entry.kind === "internship";
            const title = isExp ? pick(it.company, language) : pick(it.name || it.title, language);
            const sub = isExp
                ? [pick(it.role, language), pick(it.dates, language)].filter(Boolean).join(" · ")
                : [pick(it.organisation, language), pick(it.dates, language)].filter(Boolean).join(" · ");
            const url = (isExp ? "experience-detail.html?id=" : "project-detail.html?id=") + encodeURIComponent(it.id);
            return `<a class="site-search-result" href="${url}">
                <span class="site-search-kind ${isExp ? "is-exp" : "is-proj"}">${escapeHtml(t(isExp ? "internship" : "project"))}</span>
                <span class="site-search-title">${escapeHtml(title)}</span>
                <span class="site-search-sub">${escapeHtml(sub)}</span>
                <span class="site-search-snippet">${snippet(entry, terms, language)}</span>
            </a>`;
        }).join("");
    }

    function buildOverlay() {
        overlay = document.createElement("div");
        overlay.className = "site-search-overlay";
        overlay.hidden = true;
        overlay.innerHTML = `
            <div class="site-search-panel" role="dialog" aria-modal="true" aria-label="Search">
                <div class="site-search-bar">
                    ${ICON_SEARCH}
                    <input type="search" class="site-search-input" autocomplete="off" spellcheck="false">
                    <button type="button" class="site-search-close" aria-label="Close">Esc</button>
                </div>
                <div class="site-search-status" aria-live="polite"></div>
                <div class="site-search-list"></div>
            </div>`;
        document.body.appendChild(overlay);
        input = overlay.querySelector(".site-search-input");
        list = overlay.querySelector(".site-search-list");
        status = overlay.querySelector(".site-search-status");
        input.addEventListener("input", render);
        overlay.addEventListener("click", e => { if (e.target === overlay) closeSearch(); });
        overlay.querySelector(".site-search-close").addEventListener("click", closeSearch);
        overlay.addEventListener("keydown", e => {
            if (e.key === "Escape") closeSearch();
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                const links = [...list.querySelectorAll(".site-search-result")];
                if (!links.length) return;
                e.preventDefault();
                const i = links.indexOf(document.activeElement);
                const next = e.key === "ArrowDown" ? (i + 1) % links.length : (i <= 0 ? links.length - 1 : i - 1);
                links[next].focus();
            }
        });
    }

    function openSearch() {
        if (!overlay) buildOverlay();
        overlay.hidden = false;
        document.documentElement.classList.add("site-search-open");
        render();
        setTimeout(() => input.focus(), 0);
        if (!index) {
            loadData().then(data => { index = buildIndex(data); render(); }).catch(() => {
                status.textContent = "Search is unavailable right now.";
            });
        }
    }

    function closeSearch() {
        if (!overlay) return;
        overlay.hidden = true;
        document.documentElement.classList.remove("site-search-open");
    }

    /* ---------- music ---------- */

    let audio = null;
    let musicBtn = null;

    function storage(kind) {
        try { return kind === "session" ? window.sessionStorage : window.localStorage; } catch (e) { return null; }
    }

    function musicWanted() {
        const s = storage("local");
        try { return s ? s.getItem("bgm-on") === "1" : false; } catch (e) { return false; }
    }

    function setMusicWanted(on) {
        const s = storage("local");
        try { if (s) s.setItem("bgm-on", on ? "1" : "0"); } catch (e) { /* ignore */ }
    }

    function ensureAudio() {
        if (audio) return audio;
        audio = new Audio(MUSIC_SRC);
        audio.loop = true;
        audio.preload = "none";
        audio.volume = MUSIC_VOLUME;
        const ss = storage("session");
        try {
            const saved = ss && parseFloat(ss.getItem("bgm-time"));
            if (saved && isFinite(saved)) {
                audio.addEventListener("loadedmetadata", () => {
                    if (saved < audio.duration) audio.currentTime = saved;
                }, { once: true });
            }
        } catch (e) { /* ignore */ }
        audio.addEventListener("play", updateMusicButton);
        audio.addEventListener("pause", updateMusicButton);
        return audio;
    }

    function updateMusicButton() {
        if (!musicBtn) return;
        const playing = audio && !audio.paused;
        musicBtn.innerHTML = playing ? ICON_NOTE : ICON_NOTE_OFF;
        musicBtn.classList.toggle("is-playing", !!playing);
        const label = playing ? t("musicOn") : t("musicOff");
        musicBtn.setAttribute("aria-label", label);
        musicBtn.title = label;
        musicBtn.setAttribute("aria-pressed", playing ? "true" : "false");
    }

    function playMusic() {
        const a = ensureAudio();
        return a.play().then(updateMusicButton);
    }

    function toggleMusic() {
        const a = ensureAudio();
        if (a.paused) {
            setMusicWanted(true);
            playMusic().catch(() => updateMusicButton());
        } else {
            setMusicWanted(false);
            a.pause();
        }
    }

    function resumeIfWanted() {
        if (!musicWanted()) return;
        playMusic().catch(() => {
            const resume = () => {
                playMusic().catch(() => {});
                window.removeEventListener("pointerdown", resume, true);
                window.removeEventListener("keydown", resume, true);
            };
            window.addEventListener("pointerdown", resume, true);
            window.addEventListener("keydown", resume, true);
        });
    }

    window.addEventListener("pagehide", () => {
        if (!audio) return;
        const ss = storage("session");
        try { if (ss) ss.setItem("bgm-time", String(audio.currentTime || 0)); } catch (e) { /* ignore */ }
    });

    /* ---------- visit statistics ---------- */

    const STATS_TEXT = {
        en: { note: "Visit statistics are anonymous and cookie-free.", off: "Visits from this browser will no longer be counted.", on: "Visits from this browser are counted again." },
        zh: { note: "本站使用匿名、不含 Cookie 的访问统计。", off: "此浏览器的访问将不再计入统计。", on: "此浏览器的访问已恢复计入统计。" }
    };

    function statsText(key) {
        return (STATS_TEXT[lang()] || STATS_TEXT.en)[key];
    }

    function toast(message) {
        const el = document.createElement("div");
        el.textContent = message;
        el.setAttribute("role", "status");
        el.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;" +
            "background:#111;color:#fff;padding:10px 16px;border-radius:8px;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,.2)";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3500);
    }

    function setupAnalytics() {
        const ls = storage("local");
        try {
            const me = new URLSearchParams(window.location.search).get("me");
            if (ls && me === "1") { ls.setItem("umami.disabled", "1"); toast(statsText("off")); }
            if (ls && me === "0") { ls.removeItem("umami.disabled"); toast(statsText("on")); }
        } catch (e) { /* ignore */ }

        const id = (typeof UMAMI_WEBSITE_ID === "string" ? UMAMI_WEBSITE_ID : "").trim();
        if (!id || !/^https?:$/.test(window.location.protocol)) return;

        const s = document.createElement("script");
        s.defer = true;
        s.src = "https://cloud.umami.is/script.js";
        s.setAttribute("data-website-id", id);
        s.setAttribute("data-domains", "zimengliu.com,www.zimengliu.com");
        document.head.appendChild(s);

        const footerNote = document.querySelector(".privacy-note");
        if (footerNote) {
            const note = document.createElement("div");
            note.className = "container privacy-note stats-note";
            note.textContent = statsText("note");
            footerNote.insertAdjacentElement("afterend", note);
            window.addEventListener("portfolioLanguageChanged", () => { note.textContent = statsText("note"); });
        }
    }

    /* ---------- search-engine metadata for detail pages ---------- */

    function setupDetailSeo() {
        const m = window.location.pathname.match(/(experience|project)-detail(\.html)?$/);
        if (!m) return;
        const id = new URLSearchParams(window.location.search).get("id");
        if (!id) return;

        const list = typeof PORTFOLIO_DATA === "undefined" ? null
            : (m[1] === "project" ? PORTFOLIO_DATA.projects : PORTFOLIO_DATA.experiences);
        const item = list ? list.find(x => x.id === id) : null;

        // Coursework pages (and unknown ids) stay out of search engines.
        if (!item || item.course) {
            const robots = document.createElement("meta");
            robots.name = "robots";
            robots.content = "noindex";
            document.head.appendChild(robots);
            return;
        }

        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = "https://zimengliu.com/" + m[1] + "-detail?id=" + encodeURIComponent(id);
        document.head.appendChild(canonical);
        const en = v => (v && typeof v === "object" && !Array.isArray(v) ? v.en : v) || "";
        const name = en(item.name) || en(item.title) || en(item.company) || "";
        const bullets = item.overviewBullets && item.overviewBullets.en;
        let text = (Array.isArray(bullets) && bullets[0]) || en(item.headline) || "";
        text = (name ? name + " — " : "") + text + " | Zimeng (Michelle) Liu 刘子萌";
        if (text.length > 220) text = text.slice(0, 217).replace(/\s+\S*$/, "") + "…";
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }
        meta.content = text;
    }

    /* ---------- init ---------- */

    function loadProtect() {
        if (window.__protectLoaded || document.querySelector('script[src*="protect.js"]')) return;
        const s = document.createElement("script");
        s.src = "/assets/js/protect.js";
        document.head.appendChild(s);
    }

    function addRightsNote() {
        const footer = document.querySelector(".footer");
        if (!footer || footer.querySelector(".rights-note")) return;
        const TEXT = {
            en: "© Zimeng Liu. All rights reserved. Please do not copy or republish any content from this site without permission.",
            zh: "© 刘子萌 版权所有。未经许可，请勿复制或转载本站任何内容。"
        };
        const note = document.createElement("div");
        note.className = "container privacy-note rights-note";
        const set = () => { note.textContent = TEXT[lang() === "zh" ? "zh" : "en"]; };
        set();
        footer.appendChild(note);
        window.addEventListener("portfolioLanguageChanged", set);
    }

    function loadChibi() {
        if (typeof SHOW_CHIBI !== "undefined" && !SHOW_CHIBI) return;
        if (document.body.hasAttribute("data-no-chibi")) return;
        const s = document.createElement("script");
        s.src = "/assets/js/chibi.js";
        s.defer = true;
        document.body.appendChild(s);
    }

    function init() {
        loadProtect();
        setupAnalytics();
        setupDetailSeo();
        addRightsNote();
        loadChibi();
        const tools = getToolbar();
        if (tools) {
            const searchBtn = document.createElement("button");
            searchBtn.type = "button";
            searchBtn.className = "site-tool-btn site-search-btn";
            searchBtn.innerHTML = ICON_SEARCH;
            const setSearchLabel = () => {
                searchBtn.setAttribute("aria-label", t("search"));
                searchBtn.title = t("search") + " ( / )";
            };
            setSearchLabel();
            searchBtn.addEventListener("click", openSearch);

            musicBtn = document.createElement("button");
            musicBtn.type = "button";
            musicBtn.className = "site-tool-btn site-music-btn";
            musicBtn.addEventListener("click", toggleMusic);

            tools.insertBefore(musicBtn, tools.firstChild);
            tools.insertBefore(searchBtn, tools.firstChild);
            updateMusicButton();

            window.addEventListener("portfolioLanguageChanged", () => {
                setSearchLabel();
                updateMusicButton();
                if (overlay && !overlay.hidden) render();
            });
        }

        document.addEventListener("keydown", e => {
            const tag = (e.target && e.target.tagName) || "";
            const typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (e.target && e.target.isContentEditable);
            if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
                e.preventDefault();
                openSearch();
            }
        });

        resumeIfWanted();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
