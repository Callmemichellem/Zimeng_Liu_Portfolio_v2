/* Copy protection for zimengliu.com.
 * Blocks text selection, copy / cut, the right-click menu, image dragging and the
 * select-all / save / view-source shortcuts. Search boxes, email and phone links stay usable.
 * Note: this stops casual copying; it cannot stop screenshots or someone reading the page source.
 */
(function () {
    if (window.__protectLoaded) return;
    window.__protectLoaded = true;

    const ALLOW = 'input, textarea, select, [contenteditable="true"], .allow-copy, a[href^="mailto:"], a[href^="tel:"]';

    const style = document.createElement("style");
    style.textContent =
        "html, body { -webkit-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; }" +
        ALLOW.split(", ").map(s => s + ", " + s + " *").join(", ") + " { -webkit-user-select: text; -ms-user-select: text; user-select: text; }" +
        "img { -webkit-user-drag: none; user-drag: none; }";
    (document.head || document.documentElement).appendChild(style);

    const allowed = node => {
        const el = node && (node.nodeType === 1 ? node : node.parentElement);
        return !!(el && el.closest && el.closest(ALLOW));
    };

    let lastToast = 0;
    function toast() {
        const now = Date.now();
        if (now - lastToast < 2500 || !document.body) return;
        lastToast = now;
        let zh = false;
        try { zh = localStorage.getItem("portfolio-language") === "zh"; } catch (e) { /* ignore */ }
        const el = document.createElement("div");
        el.setAttribute("role", "status");
        el.textContent = zh ? "本站内容受保护，如需引用请联系我。" : "Content on this site is protected. Please get in touch if you would like to use it.";
        el.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:10000;max-width:90vw;" +
            "background:#111;color:#fff;padding:10px 16px;border-radius:8px;font:500 14px/1.4 system-ui,-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;" +
            "box-shadow:0 6px 20px rgba(0,0,0,.2)";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2600);
    }

    function blockCopy(e) {
        const sel = window.getSelection ? window.getSelection() : null;
        if (allowed(document.activeElement) || (sel && allowed(sel.anchorNode))) return;
        e.preventDefault();
        toast();
    }

    document.addEventListener("copy", blockCopy, true);
    document.addEventListener("cut", blockCopy, true);
    document.addEventListener("selectstart", e => { if (!allowed(e.target)) e.preventDefault(); }, true);
    document.addEventListener("dragstart", e => { if (e.target && e.target.tagName === "IMG") e.preventDefault(); }, true);
    document.addEventListener("contextmenu", e => {
        if (allowed(e.target)) return;
        e.preventDefault();
        toast();
    }, true);
    document.addEventListener("keydown", e => {
        if (!(e.ctrlKey || e.metaKey) || allowed(e.target)) return;
        const k = (e.key || "").toLowerCase();
        if (k === "c" || k === "x" || k === "a" || k === "s" || k === "u") {
            e.preventDefault();
            toast();
        }
    }, true);
})();
