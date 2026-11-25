/* =========================================================
   JOURNEY MAP
   Real-border world / China map built with d3-geo (vendored).
   Geodata: assets/data/geo-world.js and assets/data/geo-china.js.
   Edit JOURNEY below to add places, cities, notes or visit years.
   ========================================================= */

const JOURNEY = {
    // World view. "home" is shaded differently from places visited.
    homeCountries: ["156", "158"],   // China (Taiwan shown as part of China)

    // ISO 3166 numeric codes as used by Natural Earth / world-atlas.
    // dot: [lon, lat] for places too small to see at world scale.
    countries: [
        { id: "840", en: "United States", zh: "美国", continent: "na" },
        { id: "380", en: "Italy", zh: "意大利", continent: "eu" },
        { id: "462", en: "Maldives", zh: "马尔代夫", continent: "as", dot: [73.51, 4.18] },
        { id: "702", en: "Singapore", zh: "新加坡", continent: "as", dot: [103.82, 1.35] },
        { id: "458", en: "Malaysia", zh: "马来西亚", continent: "as" },
        { id: "704", en: "Vietnam", zh: "越南", continent: "as" },
        { id: "HK", en: "Hong Kong", zh: "中国香港", continent: "as", dot: [114.17, 22.32] },
        { id: "MO", en: "Macau", zh: "中国澳门", continent: "as", dot: [113.54, 22.19] },
        { id: "TW", en: "Taiwan", zh: "中国台湾", continent: "as", dot: [121.0, 23.7] },
        { id: "410", en: "South Korea", zh: "韩国", continent: "as" },
        { id: "392", en: "Japan", zh: "日本", continent: "as" },
        { id: "036", en: "Australia", zh: "澳大利亚", continent: "oc" },
        { id: "554", en: "New Zealand", zh: "新西兰", continent: "oc" },
        { id: "242", en: "Fiji", zh: "斐济", continent: "oc", dot: [178.0, -17.8] }
    ],

    // Cities where I have lived, studied or worked.
    // stops: what happened in each city. type "exp" / "project" pull names, roles, dates and links
    // from assets/data/portfolio-data.js by id; type "study" / "more" use the text written here.
    cities: [
        {
            key: "beijing", en: "Beijing", zh: "北京", ll: [116.40, 39.90], kind: "home",
            note: {
                en: "Home city, and where four of my internships took place.",
                zh: "家乡，也是我 4 段实习所在的城市。"
            },
            stops: [
                { type: "exp", id: "ngtec" },
                { type: "exp", id: "daxin" },
                { type: "exp", id: "shanxi" },
                { type: "exp", id: "edf" }
            ]
        },
        {
            key: "shanghai", en: "Shanghai", zh: "上海", ll: [121.47, 31.23], kind: "study",
            note: {
                en: "Winter exchange at Shanghai Jiao Tong University.",
                zh: "上海交通大学寒假交换。"
            },
            stops: [
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/sjtu-crest.png",
                    title: { en: "Shanghai Jiao Tong University · Winter exchange", zh: "上海交通大学 · 寒假交换" },
                    meta: { en: "Winter exchange courses · average 90+/100", zh: "寒假交换课程 · 均分 90+" },
                    dates: { en: "Dec 2023 – Jan 2024", zh: "2023年12月 – 2024年1月" }
                }
            ]
        },
        {
            key: "sydney", en: "Sydney", zh: "悉尼", ll: [151.21, -33.87], kind: "study",
            note: {
                en: "Study base since 2022: both degrees, two internships and my research.",
                zh: "2022 年起的求学城市：两个学位、2 段实习和我的研究。"
            },
            stops: [
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/usyd-crest.svg",
                    title: { en: "The University of Sydney · Master of Data Analytics", zh: "悉尼大学 · 数据分析硕士" },
                    dates: { en: "Jul 2025 – Mar 2027 (expected)", zh: "2025年7月 – 2027年3月（预计）" }
                },
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/usyd-crest.svg",
                    title: { en: "The University of Sydney · Bachelor of Commerce", zh: "悉尼大学 · 商学学士" },
                    meta: { en: "Finance + Business Analytics", zh: "金融 + 商业分析" },
                    dates: { en: "Jul 2022 – Jun 2025", zh: "2022年7月 – 2025年6月" }
                },
                { type: "project", id: "ai-hiring-ethnicity", title: { en: "Ethnic Cues in AI Hiring (own research)", zh: "族裔线索与 AI 招聘（个人研究）" } },
                { type: "project", id: "graphrag-esg", title: { en: "GraphRAG × ESG experiment (assisting)", zh: "GraphRAG × ESG 实验（协助）" } },
                { type: "exp", id: "forcity" },
                { type: "exp", id: "ais" },
                {
                    type: "more", link: "projects.html",
                    title: { en: "Course and personal projects", zh: "课程与个人项目" },
                    meta: { en: "Machine learning, dashboards, finance and policy case studies", zh: "机器学习、看板、金融与政策案例" }
                }
            ]
        }
    ],

    // Experiences whose city is not listed on this site (not pinned on the map).
    elsewhere: {
        key: "elsewhere", en: "China · city not listed", zh: "中国 · 城市未标注",
        note: { en: "Recent internships in China.", zh: "近期在国内的实习。" },
        stops: [
            { type: "exp", id: "ant-group" },
            { type: "exp", id: "roland-berger" }
        ]
    },

    // "Play my route": places joined in the order the experiences happened (illustrative, not travel records).
    route: [
        { city: "beijing", when: { en: "Start", zh: "起点" }, text: { en: "Beijing, my home city.", zh: "北京，我的家乡。" } },
        { city: "sydney", when: { en: "Jul 2022", zh: "2022.07" }, text: { en: "Started a Bachelor of Commerce at the University of Sydney.", zh: "开始悉尼大学商学本科（金融 + 商业分析）。" } },
        { city: "beijing", when: { en: "Jul 2023", zh: "2023.07" }, text: { en: "Data analysis internship at Environmental Defense Fund.", zh: "美国环保协会数据分析实习。" } },
        { city: "beijing", when: { en: "Nov 2023", zh: "2023.11" }, text: { en: "Industry research internship at Shanxi Securities (coal and power).", zh: "山西证券研究所行业研究实习（煤炭与电力）。" } },
        { city: "shanghai", when: { en: "Dec 2023", zh: "2023.12" }, text: { en: "Winter exchange at Shanghai Jiao Tong University.", zh: "上海交通大学寒假交换。" } },
        { city: "beijing", when: { en: "Jun 2024", zh: "2024.06" }, text: { en: "Audit internship at Da Xin CPA.", zh: "大信会计师事务所审计实习。" } },
        { city: "sydney", when: { en: "Feb 2025", zh: "2025.02" }, text: { en: "Accounting internship at Australasia International School.", zh: "Australasia International School 会计实习。" } },
        { city: "sydney", when: { en: "Jul 2025", zh: "2025.07" }, text: { en: "Started the Master of Data Analytics.", zh: "开始数据分析硕士。" } },
        { city: "beijing", when: { en: "Nov 2025", zh: "2025.11" }, text: { en: "Research internship at the National Green Technology Exchange Center.", zh: "国家绿色技术交易中心研究分析实习。" } },
        { city: "sydney", when: { en: "May 2026", zh: "2026.05" }, text: { en: "Assisting a GraphRAG × ESG experiment at RAIDS Lab.", zh: "在 RAIDS Lab 协助 GraphRAG × ESG 实验。" } },
        { city: "sydney", when: { en: "Sep 2026", zh: "2026.09" }, text: { en: "Started my own study on ethnic cues in AI hiring.", zh: "开始个人研究课题：族裔线索与 AI 招聘。" } }
    ],

    // China view: provincial-level regions visited (ECharts adcodes).
    chinaRegions: {
        "110000": { en: "Beijing", zh: "北京", kind: "home" },
        "310000": { en: "Shanghai", zh: "上海" },
        "810000": { en: "Hong Kong", zh: "香港" },
        "820000": { en: "Macau", zh: "澳门" },
        "710000": { en: "Taiwan", zh: "台湾" }
    },

    continents: {
        as: { en: "Asia", zh: "亚洲" },
        eu: { en: "Europe", zh: "欧洲" },
        na: { en: "North America", zh: "北美洲" },
        oc: { en: "Oceania", zh: "大洋洲" }
    }
};

const JOURNEY_TEXT = {
    en: {
        world: "World", china: "China",
        countries: "countries & regions visited", continents: "continents", bases: "home & study cities",
        provinces: "of 34 provincial-level regions", chinaCities: "cities marked",
        home: "Home", visited: "Visited", city: "Lived / studied", notYet: "Not yet",
        pick: "Hover or tap a place", pickText: "Highlighted areas are places I have been; dots mark the cities where I have lived and studied.",
        visitedNote: "Visited.", homeNote: "Home country.",
        inset: "South China Sea Islands",
        byCity: "Experience by city", play: "▶ Play my route", stop: "■ Stop", replay: "↺ Replay route",
        routeNote: "Places joined in the order my experiences happened (illustrative, not a travel log).",
        study: "Study", internship: "Internship", research: "Research", more: "More",
        open: "Open", loading: "Loading details…", step: "Step"
    },
    zh: {
        world: "世界", china: "中国",
        countries: "个国家和地区", continents: "个大洲", bases: "座生活与求学城市",
        provinces: "个省级行政区（共 34 个）", chinaCities: "座城市",
        home: "家乡", visited: "去过", city: "生活 / 求学", notYet: "尚未去过",
        pick: "将鼠标移到或点击地图上的地点", pickText: "高亮区域是我去过的地方，圆点标出我生活和求学过的城市。",
        visitedNote: "去过。", homeNote: "家乡所在国家。",
        inset: "南海诸岛",
        byCity: "按城市看经历", play: "▶ 播放我的路线", stop: "■ 停止", replay: "↺ 重新播放",
        routeNote: "按经历发生的先后把城市连起来（示意，不代表实际行程）。",
        study: "学业", internship: "实习", research: "研究", more: "更多",
        open: "查看", loading: "正在加载详情…", step: "第"
    }
};

(function () {
    "use strict";

    if (!window.d3 || !window.GEO_WORLD) {
        return;
    }

    const d3 = window.d3;
    const lang = () => (typeof getPortfolioLanguage === "function" ? getPortfolioLanguage() : "en");
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

    /* ---------------- decoders ---------------- */

    function decodeWorld(g) {
        let px = 0, py = 0;
        const [sx, sy] = g.scale, [tx, ty] = g.translate;
        const arcs = g.arcs.split("|").map(s => {
            const n = s.trim().split(" ").map(Number);
            let x = n[0] + px, y = n[1] + py;
            px = x; py = y;
            const pts = [[x * sx + tx, y * sy + ty]];
            for (let i = 2; i < n.length; i += 2) {
                x += n[i]; y += n[i + 1];
                pts.push([x * sx + tx, y * sy + ty]);
            }
            return pts;
        });
        const ring = ids => {
            const out = [];
            ids.forEach((id, k) => {
                const a = id < 0 ? arcs[~id].slice().reverse() : arcs[id];
                a.forEach((p, i) => { if (!(k && !i)) out.push(p); });
            });
            return out;
        };
        return g.geoms.split("|").map(s => {
            const [id, body] = s.split(":");
            const coords = body.split(";").map(poly =>
                poly.split(",").map(r => ring(r.trim().split(" ").map(Number)))
            );
            return { type: "Feature", id, geometry: { type: "MultiPolygon", coordinates: coords } };
        });
    }

    function decodeChina(g) {
        const [x0, y0, x1, y1] = g.bbox;
        const kx = (x1 - x0) / (g.q - 1), ky = (y1 - y0) / (g.q - 1);
        let px = 0, py = 0;
        return g.rings.split("|").map(s => {
            const [id, body] = s.split(":");
            const polys = [];
            body.split(";").forEach(poly => {
                const rings = [];
                poly.split(",").forEach(r => {
                    const n = r.trim().split(" ").map(Number);
                    let X = n[0] + px, Y = n[1] + py;
                    px = X; py = Y;
                    const pts = [[x0 + X * kx, y0 + Y * ky]];
                    for (let i = 2; i < n.length; i += 2) {
                        X += n[i]; Y += n[i + 1];
                        pts.push([x0 + X * kx, y0 + Y * ky]);
                    }
                    if (pts.length < 4) return;
                    // d3 expects clockwise exterior rings; fix any ring that became inverted
                    const ringPoly = { type: "Polygon", coordinates: [pts] };
                    rings.push(d3.geoArea(ringPoly) > 2 * Math.PI ? pts.reverse() : pts);
                });
                if (rings.length) polys.push(rings);
            });
            return { type: "Feature", id, geometry: { type: "MultiPolygon", coordinates: polys } };
        }).filter(f => f.geometry.coordinates.length);
    }

    const WORLD = decodeWorld(window.GEO_WORLD);
    const CHINA = window.GEO_CHINA ? decodeChina(window.GEO_CHINA) : [];
    const WORLD_NO_ANT = { type: "FeatureCollection", features: WORLD.filter(f => f.id !== "010") };

    const visitedIds = new Set(JOURNEY.countries.map(c => c.id));
    const countryById = Object.fromEntries(JOURNEY.countries.map(c => [c.id, c]));

    /* ---------------- rendering ---------------- */

    function render(root) {
        const L = lang(), T = JOURNEY_TEXT[L];
        const view = root.dataset.view || "world";
        const svgHost = root.querySelector(".jm-svg");
        const width = 1000;
        const height = view === "world" ? 520 : 720;

        let projection;
        if (view === "world") {
            projection = d3.geoNaturalEarth1().rotate([-10, 0]).fitExtent([[8, 8], [width - 8, height - 8]], WORLD_NO_ANT);
        } else {
            const fc = { type: "FeatureCollection", features: CHINA };
            projection = d3.geoConicEqualArea().parallels([25, 47]).rotate([-105, 0])
                .fitExtent([[24, 20], [width - 150, height - 20]], fc);
        }
        const path = d3.geoPath(projection);
        const graticule = d3.geoGraticule().step(view === "world" ? [30, 30] : [10, 10])();

        let s = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(view === "world" ? T.world : T.china)}">`;
        s += `<defs><radialGradient id="jmGlow" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="#14304c"/><stop offset="1" stop-color="#0b1a2b"/></radialGradient>
              <filter id="jmShadow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
        s += `<rect width="${width}" height="${height}" fill="url(#jmGlow)"/>`;
        if (view === "world") s += `<path d="${path({ type: "Sphere" })}" fill="#0f2338" stroke="#1d3a57" stroke-width="1"/>`;
        s += `<path d="${path(graticule)}" fill="none" stroke="rgba(160,200,240,.07)" stroke-width="0.6"/>`;

        if (view === "world") {
            WORLD.forEach(f => {
                const home = JOURNEY.homeCountries.includes(f.id);
                const visited = visitedIds.has(f.id);
                const c = countryById[f.id];
                const cls = home ? "jm-home" : visited ? "jm-visited" : "jm-land";
                const tip = home ? `${L === "zh" ? "中国" : "China"}|${T.homeNote}` : c ? `${c[L]}|${T.visitedNote}` : "";
                s += `<path class="${cls}" d="${path(f)}"${tip ? ` data-tip="${esc(tip)}"` : ""}/>`;
            });
        } else {
            // neighbours for context
            WORLD.filter(f => !JOURNEY.homeCountries.includes(f.id)).forEach(f => {
                const d = path(f);
                if (d) s += `<path class="jm-land jm-context" d="${d}"/>`;
            });
            CHINA.forEach(f => {
                const r = JOURNEY.chinaRegions[f.id];
                const cls = r ? (r.kind === "home" ? "jm-home" : "jm-visited") : "jm-province";
                s += `<path class="${cls}" d="${path(f)}"${r ? ` data-tip="${esc(`${r[L]}|${r.kind === "home" ? T.homeNote : T.visitedNote}`)}"` : ""}/>`;
            });
            s += renderNanhai(width, height, T);
        }

        // dots for small places (world view) and cities
        const dots = [];
        if (view === "world") {
            JOURNEY.countries.filter(c => c.dot).forEach(c => dots.push({ ll: c.dot, name: c[L], note: T.visitedNote, kind: "small" }));
        } else {
            [["Hong Kong", "香港", [114.17, 22.32]], ["Macau", "澳门", [113.54, 22.19]]].forEach(([en, zh, ll]) =>
                dots.push({ ll, name: L === "zh" ? zh : en, note: T.visitedNote, kind: "small" }));
        }
        JOURNEY.cities.forEach(c => dots.push({ ll: c.ll, name: c[L], note: c.note[L], kind: c.kind, label: true, key: c.key }));
        root._pts = {};

        dots.forEach(d => {
            const p = projection(d.ll);
            if (!p || p[0] < 0 || p[0] > width || p[1] < 0 || p[1] > height) return;
            const tip = esc(`${d.name}|${d.note}`);
            if (d.kind === "small") {
                s += `<circle class="jm-dot-small" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4" data-tip="${tip}"/>`;
            } else {
                if (d.key) root._pts[d.key] = p;
                s += `<g class="jm-city jm-${d.kind}${d.key && root.dataset.place === d.key ? " jm-current" : ""}" transform="translate(${p[0].toFixed(1)},${p[1].toFixed(1)})" data-tip="${tip}"${d.key ? ` data-city="${d.key}"` : ""}>
                        <circle class="jm-pulse" r="6"/><circle class="jm-core" r="4.6"/>
                        <text x="9" y="4">${esc(d.name)}</text></g>`;
            }
        });

        svgHost.innerHTML = s + "</svg>";
        bindTips(root);
        renderStats(root, view, L, T);
    }

    // South China Sea islands drawn as a fixed inset box in the lower-right corner
    function renderNanhai(width, height, T) {
        const n = window.GEO_CHINA && window.GEO_CHINA.nanhai;
        if (!n) return "";
        const k = 1.55, w = 64 * k, h = 93.1 * k;
        const x0 = width - 34 - w, y0 = height - 40 - h;
        let out = `<g class="jm-nanhai" aria-label="${esc(T.inset)}">`;
        n.rings.forEach((ring, i) => {
            const d = "M" + ring.map(([x, y]) => (x0 + x * k).toFixed(1) + "," + (y0 + y * k).toFixed(1)).join("L") + "Z";
            out += `<path d="${d}" class="${i === n.rings.length - 1 ? "jm-nanhai-frame" : "jm-nanhai-line"}"/>`;
        });
        out += `<text class="jm-nanhai-label" x="${(x0 + w / 2).toFixed(1)}" y="${(y0 + h + 18).toFixed(1)}" text-anchor="middle">${esc(T.inset)}</text>`;
        return out + "</g>";
    }

    function renderStats(root, view, L, T) {
        const stats = root.querySelector(".jm-stats");
        if (!stats) return;
        let items;
        if (view === "world") {
            const conts = new Set(JOURNEY.countries.map(c => c.continent));
            items = [
                [JOURNEY.countries.length, T.countries],
                [conts.size, T.continents],
                [JOURNEY.cities.length, T.bases]
            ];
        } else {
            items = [
                [Object.keys(JOURNEY.chinaRegions).length, T.provinces],
                [JOURNEY.cities.filter(c => c.ll[0] > 73 && c.ll[0] < 135 && c.ll[1] > 18 && c.ll[1] < 54).length + 2, T.chinaCities]
            ];
        }
        stats.innerHTML = items.map(([v, k]) => `<div><strong>${v}</strong><span>${k}</span></div>`).join("");
        const legend = root.querySelector(".jm-legend");
        if (legend) {
            legend.innerHTML = `<span><i class="lg-home"></i>${T.home}</span><span><i class="lg-visited"></i>${T.visited}</span><span><i class="lg-city"></i>${T.city}</span><span><i class="lg-land"></i>${T.notYet}</span>`;
        }
        root.querySelectorAll("[data-jm-view]").forEach(b => {
            b.textContent = T[b.dataset.jmView];
            b.classList.toggle("active", b.dataset.jmView === view);
        });
        const info = root.querySelector(".jm-info");
        if (info && !info.dataset.locked) {
            info.innerHTML = `<strong>${T.pick}</strong><span>${T.pickText}</span>`;
        }
        const chips = root.querySelector(".jm-chips");
        if (chips) {
            chips.innerHTML = JOURNEY.countries.map(c => `<span>${esc(c[L])}</span>`).join("");
        }
        renderPlaceChips(root, L, T);
        updateRouteButton(root);
        if (root.dataset.place && !root.dataset.playing) showPlace(root, root.dataset.place);
    }

    function bindTips(root) {
        const tip = root.querySelector(".jm-tip");
        const info = root.querySelector(".jm-info");
        const host = root.querySelector(".jm-map");
        root.querySelectorAll("[data-tip]").forEach(el => {
            const [name, note] = el.getAttribute("data-tip").split("|");
            el.addEventListener("mousemove", e => {
                const r = host.getBoundingClientRect();
                tip.innerHTML = `<b>${esc(name)}</b><br>${esc(note)}`;
                tip.style.display = "block";
                let x = e.clientX - r.left + 14, y = e.clientY - r.top + 14;
                if (x + tip.offsetWidth > r.width - 6) x = e.clientX - r.left - tip.offsetWidth - 14;
                tip.style.left = x + "px"; tip.style.top = y + "px";
            });
            el.addEventListener("mouseleave", () => { tip.style.display = "none"; });
            el.addEventListener("click", () => {
                if (!info) return;
                const key = el.getAttribute("data-city");
                if (key) { stopRoute(root); showPlace(root, key); return; }
                info.dataset.locked = "1";
                info.innerHTML = `<strong>${esc(name)}</strong><span>${esc(note)}</span>`;
            });
        });
    }

    /* ---------------- experiences by city ---------------- */

    const pick = (v, L) => (v && typeof v === "object" && !Array.isArray(v) ? (v[L] || v.en || "") : (v || ""));

    function ensureData() {
        if (typeof PORTFOLIO_DATA !== "undefined") return Promise.resolve(PORTFOLIO_DATA);
        if (!window.__portfolioDataPromise) {
            window.__portfolioDataPromise = new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = "assets/data/portfolio-data.js";
                s.onload = () => (typeof PORTFOLIO_DATA !== "undefined" ? resolve(PORTFOLIO_DATA) : reject(new Error("no data")));
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }
        return window.__portfolioDataPromise;
    }

    function placeByKey(key) {
        return key === JOURNEY.elsewhere.key ? JOURNEY.elsewhere : JOURNEY.cities.find(c => c.key === key);
    }

    function resolveStop(stop, L, T, data) {
        if (stop.type === "exp" || stop.type === "project") {
            const list = data ? (stop.type === "exp" ? data.experiences : data.projects) : null;
            const item = list ? list.find(x => x.id === stop.id) : null;
            if (!item) return null;
            const isExp = stop.type === "exp";
            return {
                tag: isExp ? T.internship : T.research,
                title: stop.title ? pick(stop.title, L) : pick(isExp ? item.company : item.title, L),
                meta: pick(isExp ? item.role : item.organisation, L),
                dates: pick(item.dates, L),
                logo: item.logo || "",
                link: (isExp ? "experience-detail.html?id=" : "project-detail.html?id=") + encodeURIComponent(stop.id)
            };
        }
        return {
            tag: stop.type === "study" ? T.study : T.more,
            title: pick(stop.title, L),
            meta: pick(stop.meta, L),
            dates: pick(stop.dates, L),
            logo: stop.logo || "",
            link: stop.link || ""
        };
    }

    function showPlace(root, key) {
        const info = root.querySelector(".jm-info");
        const place = placeByKey(key);
        if (!info || !place) return;
        const L = lang(), T = JOURNEY_TEXT[L];
        root.dataset.place = key;
        info.dataset.locked = "1";
        info.classList.add("jm-info-place");
        root.querySelectorAll(".jm-city").forEach(g => g.classList.toggle("jm-current", g.getAttribute("data-city") === key));
        root.querySelectorAll("[data-jm-place]").forEach(b => b.classList.toggle("active", b.dataset.jmPlace === key));

        const kind = place.kind === "home" ? T.home : place.kind === "study" ? T.city : "";
        const head = `<div class="jm-place-head"><strong>${esc(place[L])}</strong>${kind ? `<em>${esc(kind)}</em>` : ""}</div>` +
            `<span>${esc(place.note[L])}</span>`;
        const data = typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : null;
        const needsData = place.stops.some(st => st.type === "exp" || st.type === "project");
        if (needsData && !data) {
            info.innerHTML = head + `<p class="jm-loading">${esc(T.loading)}</p>`;
            ensureData().then(() => { if (root.dataset.place === key) showPlace(root, key); }).catch(() => {});
            return;
        }
        const items = place.stops.map(st => resolveStop(st, L, T, data)).filter(Boolean);
        info.innerHTML = head + `<ul class="jm-stops">` + items.map(it => {
            const logo = it.logo ? `<img src="${esc(it.logo)}" alt="" loading="lazy">` : `<span class="jm-stop-dot"></span>`;
            const body = `${logo}<div><b>${esc(it.title)}</b><small>${esc([it.meta, it.dates].filter(Boolean).join(" · "))}</small></div><i>${esc(it.tag)}</i>`;
            return `<li>${it.link ? `<a href="${esc(it.link)}">${body}</a>` : `<div class="jm-stop">${body}</div>`}</li>`;
        }).join("") + `</ul>`;
    }

    function renderPlaceChips(root, L, T) {
        let box = root.querySelector(".jm-places");
        if (!box) {
            box = document.createElement("div");
            box.className = "jm-places";
            const info = root.querySelector(".jm-info");
            info.parentNode.insertBefore(box, info);
        }
        const places = JOURNEY.cities.concat([JOURNEY.elsewhere]);
        box.innerHTML = `<span class="jm-places-label">${esc(T.byCity)}</span>` + places.map(p => {
            const n = p.stops.filter(st => st.type !== "more").length;
            return `<button type="button" data-jm-place="${p.key}" class="${root.dataset.place === p.key ? "active" : ""}">${esc(p[L])}<span>${n}</span></button>`;
        }).join("");
        box.querySelectorAll("[data-jm-place]").forEach(b => b.addEventListener("click", () => {
            stopRoute(root);
            showPlace(root, b.dataset.jmPlace);
        }));
    }

    /* ---------------- play my route ---------------- */

    const SVG_NS = "http://www.w3.org/2000/svg";
    const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function updateRouteButton(root) {
        const btn = root.querySelector(".jm-route-btn");
        if (!btn) return;
        const T = JOURNEY_TEXT[lang()];
        btn.hidden = root.dataset.view !== "world";
        btn.textContent = root.dataset.playing ? T.stop : root.dataset.routeDone ? T.replay : T.play;
    }

    function stopRoute(root) {
        clearTimeout(root._routeTimer);
        if (root.dataset.playing) {
            delete root.dataset.playing;
            updateRouteButton(root);
        }
    }

    function drawArc(g, a, b, instant) {
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const dist = Math.hypot(dx, dy) || 1;
        const bend = Math.min(140, dist * 0.35);
        // bow the arc towards the top of the map
        const nx = -dy / dist, ny = dx / dist;
        const sign = ny > 0 ? -1 : 1;
        const cx = (a[0] + b[0]) / 2 + sign * nx * bend, cy = (a[1] + b[1]) / 2 + sign * ny * bend;
        g.querySelectorAll(".jm-arc").forEach(p => p.classList.add("jm-arc-old"));
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("class", "jm-arc");
        path.setAttribute("d", `M${a[0].toFixed(1)},${a[1].toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${b[0].toFixed(1)},${b[1].toFixed(1)}`);
        g.appendChild(path);
        if (instant) return;
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
        path.getBoundingClientRect();
        path.style.transition = "stroke-dashoffset 1.1s ease-in-out";
        path.style.strokeDashoffset = "0";
    }

    function playRoute(root) {
        stopRoute(root);
        if (root.dataset.view !== "world") {
            root.dataset.view = "world";
            render(root);
        }
        const svg = root.querySelector(".jm-svg svg");
        const info = root.querySelector(".jm-info");
        if (!svg || !info) return;
        let g = svg.querySelector(".jm-route");
        if (g) g.remove();
        g = document.createElementNS(SVG_NS, "g");
        g.setAttribute("class", "jm-route");
        const firstCity = svg.querySelector(".jm-city");
        svg.insertBefore(g, firstCity || null);

        const steps = JOURNEY.route;
        const instant = reduceMotion();
        let i = 0;
        delete root.dataset.place;
        delete root.dataset.routeDone;
        root.dataset.playing = "1";
        updateRouteButton(root);
        root.querySelectorAll("[data-jm-place]").forEach(b => b.classList.remove("active"));

        const next = () => {
            if (!root.dataset.playing) return;
            const L = lang(), T = JOURNEY_TEXT[L];
            const st = steps[i], prev = steps[i - 1];
            const pts = root._pts || {};
            if (prev && prev.city !== st.city && pts[prev.city] && pts[st.city]) drawArc(g, pts[prev.city], pts[st.city], instant);
            root.querySelectorAll(".jm-city").forEach(c => c.classList.toggle("jm-current", c.getAttribute("data-city") === st.city));
            const city = placeByKey(st.city);
            info.dataset.locked = "1";
            info.classList.remove("jm-info-place");
            info.innerHTML = `<strong>${esc(pick(st.when, L))} · ${esc(city ? city[L] : "")}</strong><span>${esc(pick(st.text, L))}</span>` +
                `<span class="jm-route-note">${i + 1} / ${steps.length} · ${esc(T.routeNote)}</span>`;
            i++;
            if (i < steps.length) {
                root._routeTimer = setTimeout(next, instant ? 1200 : 2000);
            } else {
                delete root.dataset.playing;
                root.dataset.routeDone = "1";
                updateRouteButton(root);
            }
        };
        next();
    }

    function addRouteButton(root) {
        if (root.querySelector(".jm-route-btn")) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "jm-route-btn";
        btn.addEventListener("click", () => (root.dataset.playing ? stopRoute(root) : playRoute(root)));
        const toggle = root.querySelector(".jm-toggle");
        if (toggle) toggle.parentNode.insertBefore(btn, toggle);
    }

    function init() {
        document.querySelectorAll("[data-journey-map]").forEach(root => {
            root.dataset.view = root.dataset.view || "world";
            addRouteButton(root);
            root.querySelectorAll("[data-jm-view]").forEach(b => b.addEventListener("click", () => {
                stopRoute(root);
                delete root.dataset.routeDone;
                root.dataset.view = b.dataset.jmView;
                const info = root.querySelector(".jm-info");
                if (info) delete info.dataset.locked;
                render(root);
            }));
            render(root);
        });
    }

    window.addEventListener("portfolioLanguageChanged", () => {
        document.querySelectorAll("[data-journey-map]").forEach(root => {
            stopRoute(root);
            delete root.dataset.routeDone;
            const info = root.querySelector(".jm-info");
            if (info) delete info.dataset.locked;
            render(root);
        });
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
