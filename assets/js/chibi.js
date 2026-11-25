/* 小米 · Q版小人（右下角悬浮）
 *
 * - 想换台词：改下面 LINES 里的中文（zh）和英文（en），两边条数保持一致。
 * - 想整个关掉：把 assets/js/site-extras.js 顶部的 SHOW_CHIBI 改成 false。
 * - 某个页面不想显示：在该页 <body> 上加 data-no-chibi 属性（404 页已经这样做了）。
 * - 访客点 × 隐藏后会被记住；右下角圆形头像可以再叫出来。
 * - 手机上默认只显示小头像，避免挡住内容。
 */
(function () {
    if (document.getElementById("chibiPet") || document.body.hasAttribute("data-no-chibi")) return;

    const BASE = "/assets/img/chibi/";

    const LINES = {
        zh: [
            "嗨～我是小米！欢迎来到我的小站",
            "按 / 键，可以搜索全站的实习和项目",
            "导航栏里的 ♪ 可以打开背景音乐",
            "时间不多？先看看 Projects 里的案例",
            "想聊聊？首页有我的联系方式",
            "谢谢你来看我！"
        ],
        en: [
            "Hi, I'm 小米 (Xiao Mi)! Welcome to my site.",
            "Press / to search all internships and projects.",
            "Tap ♪ in the menu bar for background music.",
            "Short on time? Start with the case studies in Projects.",
            "Want to chat? My contact details are on the home page.",
            "Thanks for stopping by!"
        ]
    };

    const TEXT = {
        zh: { hello: "和小米打招呼", hide: "隐藏小米", summon: "叫出小米", back: "小米回来啦～", alt: "小米 · Q版形象" },
        en: { hello: "Say hi to Xiao Mi", hide: "Hide Xiao Mi", summon: "Bring Xiao Mi back", back: "I'm back!", alt: "Xiao Mi, a chibi character" }
    };

    const HIDDEN_KEY = "chibiPetHidden";   // "1" hidden, "0" shown on purpose
    const GREETED_KEY = "chibiGreeted";    // greet once per browser session

    function lang() {
        try {
            if (typeof getPortfolioLanguage === "function") return getPortfolioLanguage() === "zh" ? "zh" : "en";
            return localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en";
        } catch (e) {
            return "en";
        }
    }
    function t(key) { return TEXT[lang()][key]; }
    function lines() { return LINES[lang()]; }

    function store(kind) {
        try { return kind === "session" ? window.sessionStorage : window.localStorage; } catch (e) { return null; }
    }
    function get(kind, key) { const s = store(kind); try { return s ? s.getItem(key) : null; } catch (e) { return null; } }
    function set(kind, key, value) { const s = store(kind); try { if (s) s.setItem(key, value); } catch (e) { /* ignore */ } }

    const pet = document.createElement("div");
    pet.className = "chibi-pet";
    pet.id = "chibiPet";
    pet.innerHTML =
        '<div class="chibi-pet__bubble" aria-live="polite"></div>' +
        '<button class="chibi-pet__close" type="button">×</button>' +
        '<button class="chibi-pet__body" type="button"><img src="' + BASE + 'chibi.svg" width="400" height="516"></button>';

    const summon = document.createElement("button");
    summon.className = "chibi-pet__summon";
    summon.type = "button";
    summon.innerHTML = '<img src="' + BASE + 'chibi-avatar.svg" alt="">';

    document.body.appendChild(pet);
    document.body.appendChild(summon);

    const bubble = pet.querySelector(".chibi-pet__bubble");
    const closeBtn = pet.querySelector(".chibi-pet__close");
    const body = pet.querySelector(".chibi-pet__body");
    const img = body.querySelector("img");
    let index = 0;
    let talkTimer;

    function applyLabels() {
        closeBtn.setAttribute("aria-label", t("hide"));
        closeBtn.title = t("hide");
        body.setAttribute("aria-label", t("hello"));
        img.alt = t("alt");
        summon.setAttribute("aria-label", t("summon"));
        summon.title = t("summon");
        bubble.textContent = lines()[index];
    }

    function setVisible(on) {
        pet.hidden = !on;
        summon.hidden = on;
    }

    function talk(text, ms) {
        bubble.textContent = text;
        pet.classList.add("is-talking");
        pet.classList.remove("is-hop");
        void pet.offsetWidth;
        pet.classList.add("is-hop");
        clearTimeout(talkTimer);
        talkTimer = setTimeout(() => pet.classList.remove("is-talking", "is-hop"), ms || 3200);
    }

    const pref = get("local", HIDDEN_KEY);
    const narrow = window.matchMedia && window.matchMedia("(max-width: 600px)").matches;
    const startVisible = pref === "0" || (pref === null && !narrow);
    applyLabels();
    setVisible(startVisible);

    if (startVisible && get("session", GREETED_KEY) !== "1") {
        set("session", GREETED_KEY, "1");
        setTimeout(() => talk(lines()[0], 3800), 1400);
    }

    body.addEventListener("click", () => {
        index = (index + 1) % lines().length;
        talk(lines()[index]);
    });
    closeBtn.addEventListener("click", () => {
        setVisible(false);
        set("local", HIDDEN_KEY, "1");
    });
    summon.addEventListener("click", () => {
        setVisible(true);
        set("local", HIDDEN_KEY, "0");
        talk(t("back"));
    });

    window.addEventListener("portfolioLanguageChanged", applyLabels);
})();
