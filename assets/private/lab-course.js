/* Coursework items for the Lab page. Kept in /assets/private/ (blocked in robots.txt) so search
 * engines never index coursework; visitors see them as normal.
 */
(function () {
    var NEXTGEN =
        '<div class="lab-model-meta">' +
        '<span class="lab-tag" data-zh="课程项目 · 机器学习">Coursework · machine learning</span>' +
        '<a href="project-detail.html?id=next-gen-clubs-churn" data-zh="来自：Next Gen 会员流失分析与挽留策略 →">From: Next Gen Member Churn Analysis &amp; Retention Strategy →</a>' +
        '</div><div data-nextgen-model></div>';

    var card = function (o) {
        return '<article class="lab-card reveal visible">' +
            '<a class="lab-thumb" href="' + o.href + '" target="_blank" rel="noopener"><img src="' + o.img + '" alt="' + o.alt + '" loading="lazy" width="640" height="400"></a>' +
            '<div class="lab-card-body">' +
            '<span class="lab-tag" data-zh="' + o.tagZh + '">' + o.tagEn + '</span>' +
            '<h3 data-zh="' + o.nameZh + '">' + o.nameEn + '</h3>' +
            '<p data-zh="' + o.descZh + '">' + o.descEn + '</p>' +
            '<div class="lab-actions">' +
            '<a class="btn btn-primary" href="' + o.href + '" target="_blank" rel="noopener" data-zh="打开看板 ↗">Open dashboard ↗</a>' +
            '<a class="btn btn-ghost" href="project-detail.html?id=' + o.id + '" data-zh="项目详情 →">Project details →</a>' +
            '</div></div></article>';
    };

    var DASHBOARDS =
        card({
            id: "thailand-nomad-dashboard", href: "dashboards/thailand-nomad.html", img: "assets/img/lab/thailand-nomad.jpg", alt: "Thailand Nomad Dashboard preview",
            tagEn: "Coursework · group project · Tableau", tagZh: "课程项目 · 小组 · Tableau",
            nameEn: "Thailand Nomad Dashboard", nameZh: "泰国数字游民看板",
            descEn: "250K+ Nomad List trips cleaned into two clear definitions (7,166 arrivals, 6,840 completed stays) and four linked views; the median stay in Chiang Mai (23 days) is 2.6 times Bangkok’s (9 days). Web version rebuilt from the group’s Tableau workbook.",
            descZh: "清洗 25 万+ 条 Nomad List 行程记录，定义到达（7,166 次）与完整停留（6,840 次）两种口径，浓缩为 4 个联动视图；清迈停留中位数 23 天，是曼谷（9 天）的 2.6 倍。网页版由小组 Tableau 工作簿重建。"
        }) +
        card({
            id: "graduate-outcome-dashboard", href: "dashboards/graduate-outcomes.html", img: "assets/img/lab/graduate-outcomes.jpg", alt: "Graduate Outcome Dashboard preview",
            tagEn: "Coursework · team of 3 · Dash + Plotly", tagZh: "课程项目 · 3 人小组 · Dash + Plotly",
            nameEn: "Graduate Outcome Dashboard", nameZh: "毕业生成果看板",
            descEn: "Rebuilds QILT’s ComparED as one interactive view: 3 surveys and 11 weighted factors across 30 universities and 60 fields, with filters expanded from 2 levels to 4 and years from 1 to 6 (synthetic data).",
            descZh: "把 QILT 的 ComparED 重建为一个可交互视图：整合 3 项调查、11 个加权因子，覆盖 30 所大学、60 个专业；筛选从 2 级增加到 4 级，年份从 1 年增加到 6 年（合成数据）。"
        });

    function fill() {
        var n = document.querySelector('[data-private-lab="nextgen"]');
        if (n && !n.hasChildNodes()) n.innerHTML = NEXTGEN;
        var d = document.querySelector('[data-private-lab="dashboards"]');
        if (d && !d.querySelector('[href="dashboards/thailand-nomad.html"]')) d.insertAdjacentHTML("beforeend", DASHBOARDS);
        if (typeof applyStaticTranslations === "function" && typeof getPortfolioLanguage === "function") {
            applyStaticTranslations(getPortfolioLanguage());
        }
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill); else fill();
})();
