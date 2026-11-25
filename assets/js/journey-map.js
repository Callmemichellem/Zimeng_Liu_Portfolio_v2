/* =========================================================
   JOURNEY MAP
   Real-border world / 3D globe / China map built with d3-geo (vendored).
   Geodata: assets/data/geo-world.js and assets/data/geo-china.js.
   Interactions: World / 3D globe / China views, drag and pinch zoom, a draggable globe
   with auto-rotate, a year ruler, city cards, and "Play my route".
   Edit JOURNEY below to add places, cities, notes or visit years.
   ========================================================= */

const JOURNEY = {
    // World view. "home" is shaded differently from places visited.
    homeCountries: ["156", "158"],   // China (Taiwan shown as part of China)
    homeCity: "beijing",

    // Years on stops mirror the dates in assets/data/portfolio-data.js ("now" = ongoing).
    // Travel years are not recorded yet: add years: [2019, 2024] to a country below and the
    // year ruler will light it up for those years.

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
            key: "beijing", en: "Beijing", zh: "北京", ll: [116.40, 39.90], kind: "home", country: "156",
            tag: { en: "Home", zh: "家乡" },
            note: {
                en: "Home city, and where four of my internships took place.",
                zh: "家乡，也是我 4 段实习所在的城市。"
            },
            stops: [
                { type: "exp", id: "ngtec", years: [2025, 2026] },
                { type: "exp", id: "daxin", years: [2024, 2024] },
                { type: "exp", id: "shanxi", years: [2023, 2024] },
                { type: "exp", id: "edf", years: [2023, 2023] }
            ]
        },
        {
            key: "shanghai", en: "Shanghai", zh: "上海", ll: [121.47, 31.23], kind: "study", country: "156",
            tag: { en: "Exchange", zh: "交换" },
            note: {
                en: "Winter exchange at Shanghai Jiao Tong University.",
                zh: "上海交通大学寒假交换。"
            },
            stops: [
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/sjtu-crest.png",
                    title: { en: "Shanghai Jiao Tong University · Winter exchange", zh: "上海交通大学 · 寒假交换" },
                    meta: { en: "Winter exchange courses · average 90+/100", zh: "寒假交换课程 · 均分 90+" },
                    dates: { en: "Dec 2023 – Jan 2024", zh: "2023年12月 – 2024年1月" }, years: [2023, 2024]
                }
            ]
        },
        {
            key: "sydney", en: "Sydney", zh: "悉尼", ll: [151.21, -33.87], kind: "study", country: "036",
            tag: { en: "Study base", zh: "求学" },
            note: {
                en: "Study base since 2022: both degrees, two internships and my research.",
                zh: "2022 年起的求学城市：两个学位、2 段实习和我的研究。"
            },
            stops: [
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/usyd-crest.svg",
                    title: { en: "The University of Sydney · Master of Data Analytics", zh: "悉尼大学 · 数据分析硕士" },
                    dates: { en: "Jul 2025 – Mar 2027 (expected)", zh: "2025年7月 – 2027年3月（预计）" }, years: [2025, 2027]
                },
                {
                    type: "study", link: "index.html#coursework", logo: "assets/logos/usyd-crest.svg",
                    title: { en: "The University of Sydney · Bachelor of Commerce", zh: "悉尼大学 · 商学学士" },
                    meta: { en: "Finance + Business Analytics", zh: "金融 + 商业分析" },
                    dates: { en: "Jul 2022 – Jun 2025", zh: "2022年7月 – 2025年6月" }, years: [2022, 2025]
                },
                { type: "project", id: "ai-hiring-ethnicity", years: [2026, "now"], title: { en: "Ethnic Cues in AI Hiring (own research)", zh: "族裔线索与 AI 招聘（个人研究）" } },
                { type: "project", id: "graphrag-esg", years: [2026, "now"], title: { en: "GraphRAG × ESG experiment (assisting)", zh: "GraphRAG × ESG 实验（协助）" } },
                { type: "exp", id: "forcity", years: [2025, 2025] },
                { type: "exp", id: "ais", years: [2025, 2025] },
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
            { type: "exp", id: "ant-group", years: [2026, "now"] },
            { type: "exp", id: "roland-berger", years: [2026, "now"] }
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
        world: "World", globe: "3D Globe", china: "China",
        countries: "countries & regions visited", continents: "continents", bases: "home & study cities",
        provinces: "of 34 provincial-level regions", chinaCities: "cities marked",
        land: "of the world's land area (excl. Antarctica)", farthest: "farthest study city from home", km: "km",
        home: "Home", visited: "Visited", city: "Lived / studied", notYet: "Not yet", faded: "Year not recorded",
        pick: "Hover or tap a place", pickText: "Highlighted areas are places I have been; dots mark the cities where I have lived and studied.",
        visitedNote: "Visited.", homeNote: "Home country.",
        inset: "South China Sea Islands",
        byCity: "My cities", play: "▶ Play my route", stop: "■ Stop", replay: "↺ Replay route",
        routeNote: "Places joined in the order my experiences happened (illustrative, not a travel log).",
        study: "Study", internship: "Internship", research: "Research", more: "More",
        open: "Open", loading: "Loading details…", step: "Step",
        all: "All", years: "By year", yearNote: "Years follow my study, internships and research. Travel years are not recorded yet, so other visited countries fade when one year is picked.",
        yearHead: (c, n) => `${c} ${c === 1 ? "city" : "cities"} · ${n} ${n === 1 ? "experience" : "experiences"}`,
        yearSub: "What I was studying, interning on and researching that year.",
        present: "Present",
        nStudy: n => `${n} study ${n === 1 ? "programme" : "programmes"}`, nIntern: n => `${n} ${n === 1 ? "internship" : "internships"}`, nResearch: n => `${n} research ${n === 1 ? "project" : "projects"}`,
        zoomIn: "Zoom in", zoomOut: "Zoom out", reset: "Reset view", spin: "Auto-rotate",
        hintFlat: "Drag to move · pinch or +/− to zoom", hintGlobe: "Drag to spin · pinch or +/− to zoom"
    },
    zh: {
        world: "世界", globe: "3D 地球", china: "中国",
        countries: "个国家和地区", continents: "个大洲", bases: "座生活与求学城市",
        provinces: "个省级行政区（共 34 个）", chinaCities: "座城市",
        land: "全球陆地面积（不含南极洲）", farthest: "离家最远的求学城市", km: "公里",
        home: "家乡", visited: "去过", city: "生活 / 求学", notYet: "尚未去过", faded: "未记录年份",
        pick: "将鼠标移到或点击地图上的地点", pickText: "高亮区域是我去过的地方，圆点标出我生活和求学过的城市。",
        visitedNote: "去过。", homeNote: "家乡所在国家。",
        inset: "南海诸岛",
        byCity: "我的城市", play: "▶ 播放我的路线", stop: "■ 停止", replay: "↺ 重新播放",
        routeNote: "按经历发生的先后把城市连起来（示意，不代表实际行程）。",
        study: "学业", internship: "实习", research: "研究", more: "更多",
        open: "查看", loading: "正在加载详情…", step: "第",
        all: "全部", years: "按年份看", yearNote: "年份按学业、实习和研究经历筛选；旅行去过的国家还没有记录年份，选择单个年份时显示为淡色。",
        yearHead: (c, n) => `${c} 座城市 · ${n} 段经历`,
        yearSub: "这一年我在哪里学习、实习和做研究。",
        present: "至今",
        nStudy: n => `${n} 段学业`, nIntern: n => `${n} 段实习`, nResearch: n => `${n} 项研究`,
        zoomIn: "放大", zoomOut: "缩小", reset: "复位", spin: "自动旋转",
        hintFlat: "拖动平移 · 双指或 +/− 缩放", hintGlobe: "拖动旋转地球 · 双指或 +/− 缩放"
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
    const SVG_NS = "http://www.w3.org/2000/svg";
    const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const NOW = new Date().getFullYear();

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
    const PLACES = JOURNEY.cities.concat([JOURNEY.elsewhere]);
    const placeByKey = key => PLACES.find(p => p.key === key);
    const cityByKey = key => JOURNEY.cities.find(c => c.key === key);
    const inChina = ll => ll[0] > 73 && ll[0] < 135 && ll[1] > 18 && ll[1] < 54;

    /* ---------------- derived numbers ---------------- */

    const areaOf = f => { const a = d3.geoArea(f); return a > 2 * Math.PI ? 4 * Math.PI - a : a; };
    const LAND_SHARE = (() => {
        const total = WORLD_NO_ANT.features.reduce((s, f) => s + areaOf(f), 0);
        const mine = WORLD.filter(f => visitedIds.has(f.id) || JOURNEY.homeCountries.includes(f.id)).reduce((s, f) => s + areaOf(f), 0);
        return total ? mine / total * 100 : 0;
    })();
    const FARTHEST = (() => {
        const home = cityByKey(JOURNEY.homeCity);
        let best = null;
        JOURNEY.cities.forEach(c => {
            if (c.key === JOURNEY.homeCity) return;
            const km = d3.geoDistance(home.ll, c.ll) * 6371;
            if (!best || km > best.km) best = { city: c, km };
        });
        return best;
    })();

    /* ---------------- years ---------------- */

    const endYear = y => (y === "now" ? NOW : y);
    const stopActive = (st, y) => y === "all" || (st.years && st.years[0] <= y && y <= endYear(st.years[1]));
    const YEARS = (() => {
        let lo = Infinity;
        PLACES.forEach(p => p.stops.forEach(st => { if (st.years) lo = Math.min(lo, st.years[0]); }));
        const out = [];
        for (let y = lo; y <= NOW; y++) out.push(y);
        return out;
    })();
    const routeYear = st => { const m = String(st.when.en).match(/\d{4}/); return m ? +m[0] : null; };
    function placeSpan(p, L, T) {
        const ys = p.stops.filter(st => st.years);
        if (!ys.length) return "";
        const a = Math.min(...ys.map(st => st.years[0]));
        const ongoing = ys.some(st => st.years[1] === "now");
        const b = Math.max(...ys.map(st => endYear(st.years[1])));
        if (ongoing) return `${a}–${T.present}`;
        return a === b ? String(a) : `${a}–${b}`;
    }
    function placeCounts(p, T, y) {
        const st = p.stops.filter(s => s.type !== "more" && stopActive(s, y));
        const n = t => st.filter(s => s.type === t).length;
        return [[n("study"), T.nStudy], [n("exp"), T.nIntern], [n("project"), T.nResearch]]
            .filter(([k]) => k).map(([k, f]) => f(k)).join(" · ");
    }

    /* ---------------- state ---------------- */

    function state(root) {
        if (!root._s) {
            root._s = {
                view: "world", year: "all", place: null,
                zoom: { k: 1, x: 0, y: 0 },
                rot: [-125, -12], gk: 1, spin: !reduceMotion(),
                arcs: [], playing: false, routeDone: false
            };
        }
        return root._s;
    }

    /* ---------------- SVG helpers ---------------- */

    const DEFS = `<defs>
        <radialGradient id="jmGlow" cx="50%" cy="40%" r="70%"><stop offset="0" stop-color="#14304c"/><stop offset="1" stop-color="#0b1a2b"/></radialGradient>
        <radialGradient id="jmOcean" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#1c4670"/><stop offset=".65" stop-color="#10294a"/><stop offset="1" stop-color="#0a1a30"/></radialGradient>
        <radialGradient id="jmAtmo" cx="50%" cy="50%" r="50%"><stop offset=".86" stop-color="rgba(90,180,255,0)"/><stop offset=".93" stop-color="rgba(90,180,255,.28)"/><stop offset="1" stop-color="rgba(90,180,255,0)"/></radialGradient>
        <radialGradient id="jmShade" cx="35%" cy="30%" r="70%"><stop offset=".55" stop-color="rgba(0,0,0,0)"/><stop offset="1" stop-color="rgba(0,8,20,.45)"/></radialGradient>
    </defs>`;

    function cityMarkup(c, L, p, current) {
        return `<g class="jm-city jm-${c.kind}${current ? " jm-current" : ""}" transform="translate(${p[0].toFixed(1)},${p[1].toFixed(1)})" data-tip="${esc(`${c[L]}|${c.note[L]}`)}" data-city="${c.key}">` +
            `<g class="jm-s"><circle class="jm-halo" r="11"/><circle class="jm-pulse" r="6"/><circle class="jm-core" r="4.6"/><text x="9" y="4">${esc(c[L])}</text></g></g>`;
    }
    function dotMarkup(name, note, p) {
        return `<g class="jm-dotg" transform="translate(${p[0].toFixed(1)},${p[1].toFixed(1)})" data-tip="${esc(`${name}|${note}`)}"><g class="jm-s"><circle class="jm-dot-small" r="3.4"/></g></g>`;
    }

    /* ---------------- flat views (world / China) ---------------- */

    function renderFlat(root, L, T) {
        const S = state(root);
        const view = S.view;
        const width = 1000, height = view === "world" ? 520 : 720;
        let projection;
        if (view === "world") {
            projection = d3.geoNaturalEarth1().rotate([-10, 0]).fitExtent([[8, 8], [width - 8, height - 8]], WORLD_NO_ANT);
        } else {
            const fc = { type: "FeatureCollection", features: CHINA };
            projection = d3.geoConicEqualArea().parallels([25, 47]).rotate([-105, 0])
                .fitExtent([[24, 20], [width - 150, height - 20]], fc);
        }
        root._proj = projection;
        root._dim = [width, height];
        const path = d3.geoPath(projection);
        const graticule = d3.geoGraticule().step(view === "world" ? [30, 30] : [10, 10])();

        let s = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(view === "world" ? T.world : T.china)}">${DEFS}`;
        s += `<rect width="${width}" height="${height}" fill="url(#jmGlow)"/><g class="jm-zoom">`;
        if (view === "world") s += `<path class="jm-sphere-flat" d="${path({ type: "Sphere" })}"/>`;
        s += `<path class="jm-grat" d="${path(graticule)}"/>`;

        if (view === "world") {
            WORLD.forEach(f => {
                const home = JOURNEY.homeCountries.includes(f.id);
                const c = countryById[f.id];
                const cls = home ? "jm-home" : c ? "jm-visited" : "jm-land";
                const tip = home ? `${L === "zh" ? "中国" : "China"}|${T.homeNote}` : c ? `${c[L]}|${T.visitedNote}` : "";
                s += `<path class="${cls}" data-id="${f.id}" d="${path(f)}"${tip ? ` data-tip="${esc(tip)}"` : ""}/>`;
            });
        } else {
            WORLD.filter(f => !JOURNEY.homeCountries.includes(f.id)).forEach(f => {
                const d = path(f);
                if (d) s += `<path class="jm-land jm-context" d="${d}"/>`;
            });
            CHINA.forEach(f => {
                const r = JOURNEY.chinaRegions[f.id];
                const cls = r ? (r.kind === "home" ? "jm-home" : "jm-visited") : "jm-province";
                s += `<path class="${cls}" data-region="${f.id}" d="${path(f)}"${r ? ` data-tip="${esc(`${r[L]}|${r.kind === "home" ? T.homeNote : T.visitedNote}`)}"` : ""}/>`;
            });
        }
        s += `<g class="jm-route"></g>`;

        const pts = {};
        const inView = p => p && p[0] >= 0 && p[0] <= width && p[1] >= 0 && p[1] <= height;
        if (view === "world") {
            JOURNEY.countries.filter(c => c.dot).forEach(c => { const p = projection(c.dot); if (inView(p)) s += dotMarkup(c[L], T.visitedNote, p); });
        } else {
            [["Hong Kong", "香港", [114.17, 22.32]], ["Macau", "澳门", [113.54, 22.19]]].forEach(([en, zh, ll]) => {
                const p = projection(ll); if (inView(p)) s += dotMarkup(L === "zh" ? zh : en, T.visitedNote, p);
            });
        }
        JOURNEY.cities.forEach(c => {
            const p = projection(c.ll);
            if (!inView(p)) return;
            pts[c.key] = p;
            s += cityMarkup(c, L, p, S.place === c.key);
        });
        root._pts = pts;
        s += `</g>`;
        if (view === "china") s += renderNanhai(width, height, T);
        root.querySelector(".jm-svg").innerHTML = s + "</svg>";
        applyZoom(root);
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

    function clampZoom(root) {
        const z = state(root).zoom, [w, h] = root._dim;
        z.k = Math.max(1, Math.min(8, z.k));
        z.x = Math.min(0, Math.max(w - w * z.k, z.x));
        z.y = Math.min(0, Math.max(h - h * z.k, z.y));
    }
    function applyZoom(root) {
        const S = state(root), z = S.zoom;
        const g = root.querySelector(".jm-zoom");
        if (!g) return;
        clampZoom(root);
        g.setAttribute("transform", `translate(${z.x.toFixed(2)},${z.y.toFixed(2)}) scale(${z.k.toFixed(4)})`);
        const inv = `scale(${(1 / z.k).toFixed(4)})`;
        g.querySelectorAll(".jm-s").forEach(e => e.setAttribute("transform", inv));
        g.style.setProperty("--jm-k", z.k);
        root.querySelector(".jm-map").classList.toggle("jm-zoomed", z.k > 1.01);
    }
    function zoomAt(root, factor, px, py) {
        const z = state(root).zoom;
        const k = Math.max(1, Math.min(8, z.k * factor));
        const f = k / z.k;
        z.x = px - (px - z.x) * f;
        z.y = py - (py - z.y) * f;
        z.k = k;
        applyZoom(root);
    }
    function animate(ms, step, done) {
        if (reduceMotion() || ms <= 0) { step(1); if (done) done(); return; }
        const t0 = performance.now();
        const ease = t => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const tick = now => {
            const t = Math.min(1, (now - t0) / ms);
            step(ease(t));
            if (t < 1) requestAnimationFrame(tick); else if (done) done();
        };
        requestAnimationFrame(tick);
    }
    function zoomTo(root, k, cx, cy, ms) {
        const S = state(root), z = S.zoom, [w, h] = root._dim;
        const from = { ...z };
        const to = { k, x: w / 2 - cx * k, y: h / 2 - cy * k };
        const token = (root._zoomToken = (root._zoomToken || 0) + 1);
        animate(ms, t => {
            if (root._zoomToken !== token) return;
            z.k = from.k + (to.k - from.k) * t;
            z.x = from.x + (to.x - from.x) * t;
            z.y = from.y + (to.y - from.y) * t;
            applyZoom(root);
        });
    }

    /* ---------------- 3D globe ---------------- */

    function renderGlobe(root, L, T) {
        const S = state(root);
        const narrow = root.querySelector(".jm-map").clientWidth < 600;
        const width = 1000, height = narrow ? 1000 : 560;
        root._dim = [width, height];
        root._narrow = narrow;
        const R = narrow ? 430 : 250;
        const projection = d3.geoOrthographic().translate([width / 2, height / 2]).clipAngle(90).precision(0.6);
        root._proj = projection;
        root._R = R;

        let s = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(T.globe)}">${DEFS}`;
        s += `<rect width="${width}" height="${height}" fill="url(#jmGlow)"/>`;
        s += `<circle class="jm-atmo" cx="${width / 2}" cy="${height / 2}"/><path class="jm-ocean"/><path class="jm-grat"/><g class="jm-countries">`;
        WORLD.forEach(f => {
            const home = JOURNEY.homeCountries.includes(f.id);
            const c = countryById[f.id];
            const cls = home ? "jm-home" : c ? "jm-visited" : "jm-land";
            const tip = home ? `${L === "zh" ? "中国" : "China"}|${T.homeNote}` : c ? `${c[L]}|${T.visitedNote}` : "";
            s += `<path class="${cls}" data-id="${f.id}"${tip ? ` data-tip="${esc(tip)}"` : ""}/>`;
        });
        s += `</g><path class="jm-shade"/><g class="jm-route"></g><g class="jm-dots">`;
        JOURNEY.countries.filter(c => c.dot).forEach(c => { s += dotMarkup(c[L], T.visitedNote, [0, 0]).replace('class="jm-dotg"', `class="jm-dotg" data-ll="${c.dot.join(",")}"`); });
        JOURNEY.cities.forEach(c => { s += cityMarkup(c, L, [0, 0], S.place === c.key).replace('class="jm-city', `data-ll="${c.ll.join(",")}" class="jm-city`); });
        s += `</g></svg>`;
        root.querySelector(".jm-svg").innerHTML = s;
        const svg = root.querySelector(".jm-svg svg");
        root._g = {
            atmo: svg.querySelector(".jm-atmo"), ocean: svg.querySelector(".jm-ocean"), grat: svg.querySelector(".jm-grat"),
            shade: svg.querySelector(".jm-shade"), route: svg.querySelector(".jm-route"),
            countries: Array.from(svg.querySelectorAll(".jm-countries path")).map((el, i) => ({ el, f: WORLD[i] })),
            marks: Array.from(svg.querySelectorAll("[data-ll]")).map(el => ({ el, ll: el.getAttribute("data-ll").split(",").map(Number), city: el.getAttribute("data-city") }))
        };
        root.querySelector(".jm-map").classList.remove("jm-zoomed");
        drawGlobe(root);
    }

    const GRATICULE = d3.geoGraticule().step([20, 20])();

    function drawGlobe(root) {
        const S = state(root), G = root._g;
        if (!G || S.view !== "globe") return;
        const R = root._R * S.gk;
        const projection = root._proj.scale(R).rotate([S.rot[0], S.rot[1], 0]);
        const path = d3.geoPath(projection);
        G.atmo.setAttribute("r", (R * 1.1).toFixed(1));
        G.ocean.setAttribute("d", path({ type: "Sphere" }));
        G.shade.setAttribute("d", path({ type: "Sphere" }));
        G.grat.setAttribute("d", path(GRATICULE) || "");
        G.countries.forEach(c => c.el.setAttribute("d", path(c.f) || ""));
        const center = [-S.rot[0], -S.rot[1]];
        const pts = {};
        G.marks.forEach(m => {
            const front = d3.geoDistance(m.ll, center) < Math.PI / 2 - 0.04;
            const p = projection(m.ll);
            m.el.style.display = front && p ? "" : "none";
            if (front && p) {
                m.el.setAttribute("transform", `translate(${p[0].toFixed(1)},${p[1].toFixed(1)})`);
                if (m.city) pts[m.city] = p;
            }
        });
        root._pts = pts;
        G.route.innerHTML = S.arcs.map(a => {
            const ip = d3.geoInterpolate(a.a, a.b), n = 40, coords = [];
            for (let i = 0; i <= n * a.t; i++) coords.push(ip(i / n));
            if (a.t < 1) coords.push(ip(a.t));
            const d = coords.length > 1 ? path({ type: "LineString", coordinates: coords }) : "";
            return d ? `<path class="jm-arc${a.old ? " jm-arc-old" : ""}" d="${d}"/>` : "";
        }).join("");
    }

    function rotateTo(root, ll, ms, done) {
        const S = state(root);
        const from = S.rot.slice();
        const target = [-ll[0], Math.max(-65, Math.min(65, -ll[1]))];
        const dl = ((target[0] - from[0] + 540) % 360) - 180;
        const token = (root._rotToken = (root._rotToken || 0) + 1);
        animate(ms, t => {
            if (root._rotToken !== token) return;
            S.rot = [from[0] + dl * t, from[1] + (target[1] - from[1]) * t];
            drawGlobe(root);
        }, done);
    }

    function spinLoop(root) {
        const S = state(root);
        let last = 0;
        const frame = now => {
            requestAnimationFrame(frame);
            if (S.view !== "globe" || !S.spin || root._dragging || !root._visible || document.hidden) { last = now; return; }
            const dt = last ? Math.min(64, now - last) : 16;
            last = now;
            S.rot[0] += dt * 0.006;
            drawGlobe(root);
        };
        requestAnimationFrame(frame);
    }

    /* ---------------- pointer interaction ---------------- */

    function bindPointer(root) {
        const host = root.querySelector(".jm-svg");
        const ptrs = new Map();
        let start = null;
        const toVB = (x, y) => {
            const svg = host.querySelector("svg"), r = svg.getBoundingClientRect(), [w, h] = root._dim;
            return [(x - r.left) * w / r.width, (y - r.top) * h / r.height];
        };
        const pair = () => { const [a, b] = Array.from(ptrs.values()); return { d: Math.hypot(a.x - b.x, a.y - b.y), m: [(a.x + b.x) / 2, (a.y + b.y) / 2] }; };

        host.addEventListener("pointerdown", e => {
            const S = state(root);
            if (e.button && e.button !== 0) return;
            ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
            root._moved = false;
            if (S.view === "globe") S.spin = false, updateSpinButton(root);
            start = { x: e.clientX, y: e.clientY, rot: S.rot.slice(), zoom: { ...S.zoom }, gk: S.gk, pinch: ptrs.size === 2 ? pair() : null };
            root._dragging = true;
        });
        host.addEventListener("pointermove", e => {
            if (!ptrs.has(e.pointerId) || !start) return;
            const S = state(root);
            ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
            if (ptrs.size === 2) {
                const now = pair();
                if (!start.pinch) { start.pinch = now; start.zoom = { ...S.zoom }; start.gk = S.gk; return; }
                const f = now.d / (start.pinch.d || 1);
                root._moved = true;
                if (S.view === "globe") { S.gk = Math.max(0.8, Math.min(3, start.gk * f)); drawGlobe(root); }
                else {
                    S.zoom = { ...start.zoom };
                    const [px, py] = toVB(start.pinch.m[0], start.pinch.m[1]);
                    zoomAt(root, f, px, py);
                }
                return;
            }
            const dx = e.clientX - start.x, dy = e.clientY - start.y;
            if (Math.abs(dx) + Math.abs(dy) > 4) root._moved = true;
            if (!root._moved) return;
            if (S.view === "globe") {
                const svg = host.querySelector("svg"), scale = root._dim[0] / svg.getBoundingClientRect().width;
                const k = 57.3 * scale / (root._R * S.gk);   // follow the finger: ~1 radian per globe radius
                S.rot = [start.rot[0] + dx * k, Math.max(-75, Math.min(75, start.rot[1] - dy * k))];
                drawGlobe(root);
            } else if (S.zoom.k > 1.01) {
                const svg = host.querySelector("svg"), scale = root._dim[0] / svg.getBoundingClientRect().width;
                S.zoom.x = start.zoom.x + dx * scale;
                S.zoom.y = start.zoom.y + dy * scale;
                applyZoom(root);
            }
        });
        const end = e => {
            ptrs.delete(e.pointerId);
            if (ptrs.size === 0) { root._dragging = false; start = null; }
            else if (start) start.pinch = null;
        };
        host.addEventListener("pointerup", end);
        host.addEventListener("pointercancel", end);
        host.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") end(e); });

        // trackpad pinch arrives as ctrl+wheel; a plain wheel keeps scrolling the page
        host.addEventListener("wheel", e => {
            if (!e.ctrlKey) return;
            e.preventDefault();
            const S = state(root), f = Math.exp(-e.deltaY * 0.01);
            if (S.view === "globe") { S.gk = Math.max(0.8, Math.min(3, S.gk * f)); S.spin = false; updateSpinButton(root); drawGlobe(root); }
            else { const [px, py] = toVB(e.clientX, e.clientY); zoomAt(root, f, px, py); }
        }, { passive: false });
        host.addEventListener("dblclick", e => {
            const S = state(root);
            if (S.view === "globe") { S.gk = Math.min(3, S.gk * 1.5); drawGlobe(root); }
            else { const [px, py] = toVB(e.clientX, e.clientY); zoomAt(root, 2, px, py); }
        });
    }

    function zoomButton(root, kind) {
        const S = state(root);
        if (S.view === "globe") {
            if (kind === "reset") { S.gk = 1; rotateTo(root, [125, 12], 700); }
            else {
                const from = S.gk, to = Math.max(0.8, Math.min(3, S.gk * (kind === "in" ? 1.4 : 1 / 1.4)));
                animate(250, t => { S.gk = from + (to - from) * t; drawGlobe(root); });
            }
            return;
        }
        const [w, h] = root._dim;
        if (kind === "reset") { zoomTo(root, 1, w / 2, h / 2, 400); return; }
        const z = S.zoom, cx = (w / 2 - z.x) / z.k, cy = (h / 2 - z.y) / z.k;
        zoomTo(root, Math.max(1, Math.min(8, z.k * (kind === "in" ? 1.8 : 1 / 1.8))), cx, cy, 300);
    }

    function updateSpinButton(root) {
        const b = root.querySelector("[data-jm-spin]");
        if (!b) return;
        const S = state(root);
        b.hidden = S.view !== "globe";
        b.classList.toggle("active", !!S.spin);
        b.setAttribute("aria-pressed", S.spin ? "true" : "false");
    }

    /* ---------------- tooltips and clicks ---------------- */

    function bindTips(root) {
        const tip = root.querySelector(".jm-tip");
        const info = root.querySelector(".jm-info");
        const host = root.querySelector(".jm-map");
        root.querySelectorAll(".jm-svg [data-tip]").forEach(el => {
            const [name, note] = el.getAttribute("data-tip").split("|");
            el.addEventListener("mousemove", e => {
                if (root._dragging && root._moved) { tip.style.display = "none"; return; }
                const r = host.getBoundingClientRect();
                tip.innerHTML = `<b>${esc(name)}</b><br>${esc(note)}`;
                tip.style.display = "block";
                let x = e.clientX - r.left + 14, y = e.clientY - r.top + 14;
                if (x + tip.offsetWidth > r.width - 6) x = e.clientX - r.left - tip.offsetWidth - 14;
                tip.style.left = x + "px"; tip.style.top = y + "px";
            });
            el.addEventListener("mouseleave", () => { tip.style.display = "none"; });
            el.addEventListener("click", () => {
                if (root._moved) return;
                if (!info) return;
                const key = el.getAttribute("data-city");
                if (key) { stopRoute(root); selectPlace(root, key, true); return; }
                info.dataset.locked = "1";
                info.classList.remove("jm-info-place");
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
    const getData = () => (typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : null);

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
    function stopList(items) {
        return `<ul class="jm-stops">` + items.map(it => {
            const logo = it.logo ? `<img src="${esc(it.logo)}" alt="" loading="lazy">` : `<span class="jm-stop-dot"></span>`;
            const body = `${logo}<div><b>${esc(it.title)}</b><small>${esc([it.meta, it.dates].filter(Boolean).join(" · "))}</small></div><i>${esc(it.tag)}</i>`;
            return `<li>${it.link ? `<a href="${esc(it.link)}">${body}</a>` : `<div class="jm-stop">${body}</div>`}</li>`;
        }).join("") + `</ul>`;
    }
    const needsData = stops => stops.some(st => st.type === "exp" || st.type === "project");

    function showPlace(root, key) {
        const S = state(root);
        const info = root.querySelector(".jm-info");
        const place = placeByKey(key);
        if (!info || !place) return;
        const L = lang(), T = JOURNEY_TEXT[L];
        S.place = key;
        info.dataset.locked = "1";
        info.classList.add("jm-info-place");
        markPlace(root);
        const active = place.stops.filter(st => st.years && stopActive(st, S.year));
        const shown = S.year === "all" || !active.length ? place.stops : active;
        const head = `<div class="jm-place-head"><strong>${esc(place[L])}</strong>${place.tag ? `<em>${esc(place.tag[L])}</em>` : ""}${S.year !== "all" ? `<em>${S.year}</em>` : ""}</div>` +
            `<span>${esc(place.note[L])}</span>`;
        const data = getData();
        if (needsData(shown) && !data) {
            info.innerHTML = head + `<p class="jm-loading">${esc(T.loading)}</p>`;
            ensureData().then(() => { if (state(root).place === key) showPlace(root, key); }).catch(() => {});
            return;
        }
        info.innerHTML = head + stopList(shown.map(st => resolveStop(st, L, T, data)).filter(Boolean));
    }

    function showYear(root) {
        const S = state(root), y = S.year;
        const info = root.querySelector(".jm-info");
        if (!info || y === "all") return;
        const L = lang(), T = JOURNEY_TEXT[L];
        const rows = [];
        PLACES.forEach(p => p.stops.forEach(st => { if (st.years && stopActive(st, y)) rows.push({ p, st }); }));
        rows.sort((a, b) => a.st.years[0] - b.st.years[0]);
        const cities = new Set(rows.map(r => r.p.key));
        info.dataset.locked = "1";
        info.classList.add("jm-info-place");
        const head = `<div class="jm-place-head"><strong>${y}</strong><em>${esc(T.yearHead(cities.size, rows.length))}</em></div><span>${esc(T.yearSub)}</span>`;
        const data = getData();
        if (needsData(rows.map(r => r.st)) && !data) {
            info.innerHTML = head + `<p class="jm-loading">${esc(T.loading)}</p>`;
            ensureData().then(() => { if (state(root).year === y && !state(root).place) showYear(root); }).catch(() => {});
            return;
        }
        info.innerHTML = head + stopList(rows.map(r => {
            const it = resolveStop(r.st, L, T, data);
            if (it) it.tag = `${r.p[L].split(" · ")[0]} · ${it.tag}`;
            return it;
        }).filter(Boolean));
    }

    function resetInfo(root) {
        const info = root.querySelector(".jm-info");
        if (!info) return;
        const T = JOURNEY_TEXT[lang()];
        delete info.dataset.locked;
        info.classList.remove("jm-info-place");
        info.innerHTML = `<strong>${T.pick}</strong><span>${T.pickText}</span>`;
    }

    function markPlace(root) {
        const S = state(root);
        root.querySelectorAll(".jm-city").forEach(g => g.classList.toggle("jm-current", g.getAttribute("data-city") === S.place));
        root.querySelectorAll("[data-jm-place]").forEach(b => b.classList.toggle("active", b.dataset.jmPlace === S.place));
    }

    // select a city: open its panel and bring it into view
    function selectPlace(root, key, fly) {
        const S = state(root);
        showPlace(root, key);
        const c = cityByKey(key);
        if (!fly || !c) return;
        if (S.view === "globe") { S.spin = false; updateSpinButton(root); rotateTo(root, c.ll, 900); }
        else if (S.view === "china" && !inChina(c.ll)) { /* not on this map */ }
        else {
            const p = root._proj && root._proj(c.ll);
            if (p) zoomTo(root, S.view === "world" ? 2.6 : 2, p[0], p[1], 650);
        }
    }

    /* ---------------- year filter ---------------- */

    function activeCities(y) {
        return new Set(JOURNEY.cities.filter(c => c.stops.some(st => st.years && stopActive(st, y))).map(c => c.key));
    }

    function applyYear(root) {
        const S = state(root), y = S.year;
        const svg = root.querySelector(".jm-svg svg");
        if (!svg) return;
        const act = y === "all" ? null : activeCities(y);
        const litCountries = new Set();
        if (act) {
            act.forEach(k => { const c = cityByKey(k); if (c.country) litCountries.add(c.country); });
            JOURNEY.countries.forEach(c => { if (c.years && c.years.includes(y)) litCountries.add(c.id); });
            if (litCountries.has("156")) litCountries.add("158");
        }
        svg.querySelectorAll(".jm-visited[data-id], .jm-home[data-id]").forEach(p =>
            p.classList.toggle("jm-faded", !!act && !litCountries.has(p.getAttribute("data-id"))));
        svg.querySelectorAll(".jm-visited[data-region], .jm-home[data-region]").forEach(p => {
            const id = p.getAttribute("data-region");
            const lit = act && ((id === "110000" && act.has("beijing")) || (id === "310000" && act.has("shanghai")));
            p.classList.toggle("jm-faded", !!act && !lit);
        });
        svg.querySelectorAll(".jm-dotg").forEach(d => d.classList.toggle("jm-faded", !!act));
        svg.querySelectorAll(".jm-city").forEach(g => g.classList.toggle("jm-dim", !!act && !act.has(g.getAttribute("data-city"))));
        root.classList.toggle("jm-year-mode", !!act);
        drawYearArcs(root);
    }

    // arcs between the places I moved between in the selected year
    function drawYearArcs(root) {
        const S = state(root);
        if (S.playing) return;
        const y = S.year;
        const steps = JOURNEY.route;
        const legs = [];
        if (y !== "all") {
            steps.forEach((st, i) => {
                if (i && routeYear(st) === y && steps[i - 1].city !== st.city) legs.push([steps[i - 1].city, st.city]);
            });
        }
        if (S.view === "globe") {
            S.arcs = legs.map(([a, b]) => ({ a: cityByKey(a).ll, b: cityByKey(b).ll, t: 1 }));
            drawGlobe(root);
            return;
        }
        const g = root.querySelector(".jm-svg .jm-route");
        if (!g) return;
        g.innerHTML = "";
        const pts = root._pts || {};
        legs.forEach(([a, b]) => { if (pts[a] && pts[b]) drawArc(g, pts[a], pts[b], true); });
        g.querySelectorAll(".jm-arc").forEach(p => p.classList.remove("jm-arc-old"));
    }

    function setYear(root, y) {
        const S = state(root);
        stopRoute(root);
        S.year = y;
        S.place = null;
        markPlace(root);
        renderRuler(root);
        renderCityCards(root);
        renderLegend(root);
        applyYear(root);
        if (y === "all") { resetInfo(root); return; }
        showYear(root);
        if (S.view === "globe") {
            const act = Array.from(activeCities(y)).map(k => cityByKey(k).ll);
            if (act.length) { S.spin = false; updateSpinButton(root); rotateTo(root, act.length === 1 ? act[0] : d3.geoCentroid({ type: "MultiPoint", coordinates: act }), 900); }
        }
    }

    /* ---------------- panels ---------------- */

    function renderStats(root, L, T) {
        const S = state(root);
        const stats = root.querySelector(".jm-stats");
        if (!stats) return;
        let items;
        if (S.view !== "china") {
            const conts = new Set(JOURNEY.countries.map(c => c.continent));
            items = [
                [JOURNEY.countries.length, T.countries],
                [conts.size, T.continents],
                [`≈${Math.round(LAND_SHARE)}%`, T.land],
                [FARTHEST ? FARTHEST.city[L] : "", FARTHEST ? `${T.farthest} · ${(Math.round(FARTHEST.km / 10) * 10).toLocaleString("en-US")} ${T.km}` : ""]
            ];
        } else {
            items = [
                [Object.keys(JOURNEY.chinaRegions).length, T.provinces],
                [JOURNEY.cities.filter(c => inChina(c.ll)).length + 2, T.chinaCities]
            ];
        }
        stats.classList.toggle("jm-stats-2", items.length === 2);
        stats.innerHTML = items.map(([v, k]) => `<div><strong>${esc(v)}</strong><span>${esc(k)}</span></div>`).join("");
    }

    function renderLegend(root) {
        const legend = root.querySelector(".jm-legend");
        if (!legend) return;
        const S = state(root), T = JOURNEY_TEXT[lang()];
        legend.innerHTML = `<span><i class="lg-home"></i>${T.home}</span><span><i class="lg-visited"></i>${T.visited}</span><span><i class="lg-city"></i>${T.city}</span>` +
            (S.year !== "all" ? `<span><i class="lg-faded"></i>${T.faded}</span>` : "") + `<span><i class="lg-land"></i>${T.notYet}</span>`;
    }

    function renderRuler(root) {
        const S = state(root), T = JOURNEY_TEXT[lang()];
        let box = root.querySelector(".jm-years");
        if (!box) {
            box = document.createElement("div");
            box.className = "jm-years";
            root.querySelector(".jm-map").insertAdjacentElement("afterend", box);
        }
        const opts = YEARS.concat(["all"]);
        box.innerHTML = `<div class="jm-years-label">${esc(T.years)}</div><div class="jm-ruler" role="tablist" aria-label="${esc(T.years)}">` +
            opts.map(y => `<button type="button" role="tab" class="jm-yr${S.year === y ? " active" : ""}" aria-selected="${S.year === y}" data-jm-year="${y}"><span>${y === "all" ? esc(T.all) : y}</span></button>`).join("") +
            `</div>` + (S.year !== "all" ? `<p class="jm-year-note">${esc(T.yearNote)}</p>` : "");
        box.querySelectorAll("[data-jm-year]").forEach(b => {
            b.addEventListener("click", () => setYear(root, b.dataset.jmYear === "all" ? "all" : +b.dataset.jmYear));
            b.addEventListener("keydown", e => {
                if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                e.preventDefault();
                const i = opts.indexOf(S.year) + (e.key === "ArrowRight" ? 1 : -1);
                if (i < 0 || i >= opts.length) return;
                setYear(root, opts[i]);
                const nb = root.querySelector(`[data-jm-year="${opts[i]}"]`);
                if (nb) nb.focus();
            });
        });
        const act = box.querySelector(".jm-yr.active"), ruler = box.querySelector(".jm-ruler");
        if (act && ruler.scrollWidth > ruler.clientWidth) ruler.scrollLeft = act.offsetLeft - ruler.clientWidth / 2 + act.offsetWidth / 2;
    }

    const SKY = {
        beijing: '<path d="M14 58h92v-3H14zM22 55h76v-4H22zM40 51h40v-7H40zM28 44h64l-14-7H42zM46 37h28v-5H46zM36 32h48l-11-6H47zM51 26h18v-4H51zM43 22h34l-9-6H52zM59 16h2l-1-7z"/>',
        shanghai: '<path d="M8 58h104v-2H8zM14 56V40h8v16zM24 56V33h7v23zM84 56V29h9v27zM95 56V38h8v18zM70 56V22l5-6 5 6v34zM52 56l6-18h4l6 18h-3l-5-14-5 14zM59 30V14h2v16zM59.5 13V3h1v10z"/><circle cx="60" cy="34" r="6.5"/><circle cx="60" cy="16" r="3.4"/>',
        sydney: '<path d="M6 58h108v-2H6zM10 56v-3h54v3zM14 53q6-20 21-25-4 13-2 25zM29 53q6-17 20-21-4 11-2 21zM43 53q5-12 15-14-2 8 0 14zM64 45h50v2H64z"/><path d="M66 45q24-28 48 0" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M76 45V35M86 45V28M96 45V28M106 45V36" stroke="currentColor" stroke-width="1"/>',
        elsewhere: '<path d="M60 8c-9 0-16 7-16 16 0 12 16 30 16 30s16-18 16-30c0-9-7-16-16-16zm0 23a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>'
    };

    function renderCityCards(root) {
        const S = state(root), L = lang(), T = JOURNEY_TEXT[L];
        let box = root.querySelector(".jm-citycards");
        if (!box) {
            box = document.createElement("div");
            box.className = "jm-citycards";
            const info = root.querySelector(".jm-info");
            info.parentNode.insertBefore(box, info);
        }
        box.innerHTML = `<span class="jm-places-label">${esc(T.byCity)}</span><div class="jm-cards">` + PLACES.map(p => {
            const counts = placeCounts(p, T, S.year);
            const dim = S.year !== "all" && !counts;
            return `<button type="button" class="jm-pcard${S.place === p.key ? " active" : ""}${dim ? " jm-dim" : ""}" data-jm-place="${p.key}">` +
                `<span class="jm-pcard-year">${esc(placeSpan(p, L, T))}</span>` +
                `<svg class="jm-sky" viewBox="0 0 120 60" aria-hidden="true" fill="currentColor">${SKY[p.key] || SKY.elsewhere}</svg>` +
                `<span class="jm-pcard-body"><b>${esc(p[L])}</b><em>${esc(p.tag ? p.tag[L] : "")}</em><small>${esc(counts || placeCounts(p, T, "all"))}</small></span></button>`;
        }).join("") + `</div>`;
        box.querySelectorAll("[data-jm-place]").forEach(b => b.addEventListener("click", () => {
            stopRoute(root);
            selectPlace(root, b.dataset.jmPlace, true);
        }));
    }

    /* ---------------- play my route ---------------- */

    function updateRouteButton(root) {
        const btn = root.querySelector(".jm-route-btn");
        if (!btn) return;
        const S = state(root), T = JOURNEY_TEXT[lang()];
        btn.hidden = S.view === "china";
        btn.textContent = S.playing ? T.stop : S.routeDone ? T.replay : T.play;
    }

    function stopRoute(root) {
        const S = state(root);
        clearTimeout(root._routeTimer);
        if (S.playing) {
            S.playing = false;
            updateRouteButton(root);
        }
    }

    function drawArc(g, a, b, instant) {
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const dist = Math.hypot(dx, dy) || 1;
        const bend = Math.min(140, dist * 0.35);
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
        const S = state(root);
        stopRoute(root);
        if (S.view === "china") { S.view = "world"; render(root); }
        if (S.year !== "all") { S.year = "all"; renderRuler(root); renderLegend(root); renderCityCards(root); applyYear(root); }
        if (S.view === "world" && S.zoom.k > 1.01) { S.zoom = { k: 1, x: 0, y: 0 }; applyZoom(root); }
        const info = root.querySelector(".jm-info");
        const g = root.querySelector(".jm-svg .jm-route");
        if (!info) return;
        if (g) g.innerHTML = "";
        S.arcs = [];
        S.spin = false;
        updateSpinButton(root);

        const steps = JOURNEY.route;
        const instant = reduceMotion();
        let i = 0;
        S.place = null;
        S.routeDone = false;
        S.playing = true;
        updateRouteButton(root);
        markPlace(root);

        const next = () => {
            if (!S.playing) return;
            const L = lang(), T = JOURNEY_TEXT[L];
            const st = steps[i], prev = steps[i - 1];
            const city = cityByKey(st.city);
            if (S.view === "globe") {
                rotateTo(root, city.ll, instant ? 0 : 800);
                if (prev && prev.city !== st.city) {
                    S.arcs.forEach(a => { a.old = true; });
                    const arc = { a: cityByKey(prev.city).ll, b: city.ll, t: instant ? 1 : 0 };
                    S.arcs.push(arc);
                    animate(instant ? 0 : 1100, t => { arc.t = t; drawGlobe(root); });
                }
            } else {
                const pts = root._pts || {};
                const gg = root.querySelector(".jm-svg .jm-route");
                if (gg && prev && prev.city !== st.city && pts[prev.city] && pts[st.city]) drawArc(gg, pts[prev.city], pts[st.city], instant);
            }
            root.querySelectorAll(".jm-city").forEach(c => c.classList.toggle("jm-current", c.getAttribute("data-city") === st.city));
            info.dataset.locked = "1";
            info.classList.remove("jm-info-place");
            info.innerHTML = `<strong>${esc(pick(st.when, L))} · ${esc(city ? city[L] : "")}</strong><span>${esc(pick(st.text, L))}</span>` +
                `<span class="jm-route-note">${i + 1} / ${steps.length} · ${esc(T.routeNote)}</span>`;
            i++;
            if (i < steps.length) {
                root._routeTimer = setTimeout(next, instant ? 1200 : 2200);
            } else {
                S.playing = false;
                S.routeDone = true;
                updateRouteButton(root);
            }
        };
        next();
    }

    /* ---------------- chrome (buttons, controls) ---------------- */

    function ensureChrome(root) {
        const toggle = root.querySelector(".jm-toggle");
        if (toggle && !toggle.querySelector('[data-jm-view="globe"]')) {
            const b = document.createElement("button");
            b.type = "button";
            b.dataset.jmView = "globe";
            const china = toggle.querySelector('[data-jm-view="china"]');
            toggle.insertBefore(b, china || null);
        }
        if (!root.querySelector(".jm-route-btn")) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "jm-route-btn";
            btn.addEventListener("click", () => (state(root).playing ? stopRoute(root) : playRoute(root)));
            if (toggle) toggle.parentNode.insertBefore(btn, toggle);
        }
        const map = root.querySelector(".jm-map");
        if (!map.querySelector(".jm-ctrl")) {
            map.insertAdjacentHTML("beforeend",
                `<div class="jm-ctrl"><button type="button" data-jm-zoom="in">+</button><button type="button" data-jm-zoom="out">−</button>` +
                `<button type="button" data-jm-zoom="reset">⟲</button><button type="button" data-jm-spin>⟳</button></div><div class="jm-hint"></div>`);
            map.querySelectorAll("[data-jm-zoom]").forEach(b => b.addEventListener("click", () => zoomButton(root, b.dataset.jmZoom)));
            map.querySelector("[data-jm-spin]").addEventListener("click", () => {
                const S = state(root);
                S.spin = !S.spin;
                updateSpinButton(root);
            });
        }
        // stats card sits under the map, like a summary
        const stats = root.querySelector(".jm-stats"), foot = root.querySelector(".jm-foot");
        if (stats && foot && stats.previousElementSibling !== foot) foot.insertAdjacentElement("afterend", stats);
    }

    function labelChrome(root, L, T) {
        const S = state(root);
        root.querySelectorAll("[data-jm-view]").forEach(b => {
            b.textContent = T[b.dataset.jmView];
            b.classList.toggle("active", b.dataset.jmView === S.view);
            b.setAttribute("aria-pressed", b.dataset.jmView === S.view ? "true" : "false");
        });
        const map = root.querySelector(".jm-map");
        map.classList.toggle("jm-is-globe", S.view === "globe");
        [["in", T.zoomIn], ["out", T.zoomOut], ["reset", T.reset]].forEach(([k, t]) => {
            const b = map.querySelector(`[data-jm-zoom="${k}"]`);
            if (b) { b.title = t; b.setAttribute("aria-label", t); }
        });
        const sp = map.querySelector("[data-jm-spin]");
        if (sp) { sp.title = T.spin; sp.setAttribute("aria-label", T.spin); }
        const hint = map.querySelector(".jm-hint");
        if (hint) hint.textContent = S.view === "globe" ? T.hintGlobe : T.hintFlat;
        const chips = root.querySelector(".jm-chips");
        if (chips) chips.innerHTML = JOURNEY.countries.map(c => `<span>${esc(c[L])}</span>`).join("");
        updateRouteButton(root);
        updateSpinButton(root);
    }

    /* ---------------- main render ---------------- */

    function render(root) {
        const S = state(root);
        const L = lang(), T = JOURNEY_TEXT[L];
        root.dataset.view = S.view;
        if (S.view === "globe") renderGlobe(root, L, T); else renderFlat(root, L, T);
        bindTips(root);
        labelChrome(root, L, T);
        renderStats(root, L, T);
        renderLegend(root);
        renderRuler(root);
        renderCityCards(root);
        applyYear(root);
        if (S.playing) return;
        if (S.place) showPlace(root, S.place);
        else if (S.year !== "all") showYear(root);
        else resetInfo(root);
    }

    function init() {
        document.querySelectorAll("[data-journey-map]").forEach(root => {
            const S = state(root);
            ensureChrome(root);
            root.querySelectorAll("[data-jm-view]").forEach(b => b.addEventListener("click", () => {
                if (S.view === b.dataset.jmView) return;
                stopRoute(root);
                S.routeDone = false;
                S.arcs = [];
                S.view = b.dataset.jmView;
                S.zoom = { k: 1, x: 0, y: 0 };
                if (S.view === "globe") { S.gk = 1; S.spin = !reduceMotion(); }
                render(root);
                if (S.view === "globe" && S.place && cityByKey(S.place)) rotateTo(root, cityByKey(S.place).ll, 0);
            }));
            bindPointer(root);
            render(root);
            root._visible = true;
            if ("IntersectionObserver" in window) {
                new IntersectionObserver(es => es.forEach(e => { root._visible = e.isIntersecting; })).observe(root);
            }
            spinLoop(root);
            let rt;
            window.addEventListener("resize", () => {
                clearTimeout(rt);
                rt = setTimeout(() => {
                    const narrow = root.querySelector(".jm-map").clientWidth < 600;
                    if (state(root).view === "globe" && narrow !== root._narrow) render(root);
                }, 200);
            });
        });
    }

    window.addEventListener("portfolioLanguageChanged", () => {
        document.querySelectorAll("[data-journey-map]").forEach(root => {
            stopRoute(root);
            state(root).routeDone = false;
            render(root);
        });
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
