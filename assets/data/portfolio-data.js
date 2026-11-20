const PORTFOLIO_DATA = {
    experienceCategories: [
        {
            id: "consulting-strategy",
            name: {
                en: "Consulting & Strategy",
                zh: "咨询与战略"
            }
        },
        {
            id: "data-business",
            name: {
                en: "Data & Business Analysis",
                zh: "数据与商业分析"
            }
        },
        {
            id: "finance-investment",
            name: {
                en: "Finance & Investment Analysis",
                zh: "金融与投资分析"
            }
        },
        {
            id: "securities-research",
            name: {
                en: "Securities Research",
                zh: "证券研究"
            }
        },
        {
            id: "accounting-audit",
            name: {
                en: "Accounting & Audit",
                zh: "会计与审计"
            }
        }
    ],

    experiences: [
        {
            id: "roland-berger",
            category: "consulting-strategy",

            company: {
                en: "Roland Berger",
                zh: "罗兰贝格"
            },

            role: {
                en: "Strategy Consulting Intern",
                zh: "战略咨询实习生"
            },

            location: {
                en: "China",
                zh: "中国"
            },

            dates: {
                en: "Sep 2026 – Present",
                zh: "2026年9月 – 至今"
            },

            sortDate: "2026-11",

            logo: "assets/logos/roland-berger.jpg",

            overviewBullets: {
                en: [
                    "Working on an automation and digital-transformation engagement for a listed Chinese manufacturer: Phase 1 decides which investments can deliver returns the finance team will recognise; Phase 2 diagnoses capacity constraints and production losses.",
                    "Built the issue tree and hypotheses, a benchmark and data-grading framework, an investment-return model and an auto-updating Excel dashboard, followed by a 37-KPI dictionary, OEE loss analysis and bottleneck analysis."
                ],
                zh: [
                    "参与某 A 股制造业上市公司自动化与数字化转型项目：一期判断哪些投资能产生可被财务确认的回报，二期诊断产能约束与生产损失。",
                    "搭建议题树与假设、对标与数据分级框架、投资回报模型及自动更新的 Excel 看板，并完成 37 项 KPI 字典、OEE 损失分析与产能瓶颈分析。"
                ]
            },

            tags: [
                "Strategy Consulting",
                "Digital Transformation",
                "Investment Case",
                "Operations Diagnostics",
                "Benchmarking",
                "Excel"
            ],

            metrics: [
                {
                    value: "15",
                    label: {
                        en: "Initial hypotheses written as 'if A, then B, otherwise C' decision rules",
                        zh: "写成“若 A 则 B，否则 C”决策规则的初始假设"
                    }
                },
                {
                    value: "42",
                    label: {
                        en: "External data points graded A / B / C by reliability (4 / 17 / 21)",
                        zh: "按 A / B / C 三级可信度分级的外部数据点（4 / 17 / 21）"
                    }
                },
                {
                    value: "9 + 7",
                    label: {
                        en: "Listed peers and benchmark factory cases compared",
                        zh: "对标的上市同业与标杆工厂案例"
                    }
                },
                {
                    value: "7 of 9",
                    label: {
                        en: "Use cases and investment packages clearing the value threshold",
                        zh: "通过金额门槛的用例与投资包"
                    }
                },
                {
                    value: "~1,060",
                    label: {
                        en: "Formulas across the Phase 1 dashboard workbooks (13 tabs)",
                        zh: "一期看板两个工作簿的公式数（13 个页签）"
                    }
                },
                {
                    value: "37",
                    label: {
                        en: "KPIs defined in the Phase 2 KPI dictionary",
                        zh: "二期 KPI 字典指标"
                    }
                }
            ],

            visuals: [
                {
                    type: "process",

                    title: {
                        en: "Engagement Workflow",
                        zh: "项目推进路径"
                    },

                    steps: {
                        en: [
                            "Reframe the question",
                            "Issue tree & 15 hypotheses",
                            "Benchmarks & data grading",
                            "Use-case returns & screening",
                            "KPI dictionary & OEE losses",
                            "Plan funnel & bottlenecks"
                        ],
                        zh: [
                            "重构课题",
                            "议题树与 15 条假设",
                            "对标与数据分级",
                            "用例回报与筛选",
                            "KPI 字典与 OEE 损失",
                            "计划达成漏斗与瓶颈"
                        ]
                    },

                    caption: {
                        en: "Steps 1–4 belong to Phase 1 (investment decision); steps 5–6 to Phase 2 (capacity constraints and production losses).",
                        zh: "第 1—4 步属于一期（投资决策），第 5—6 步属于二期（产能约束与生产损失）。"
                    }
                },

                {
                    type: "process",

                    title: {
                        en: "Use-case Valuation Logic",
                        zh: "用例价值测算逻辑"
                    },

                    steps: {
                        en: [
                            "Cost base by category",
                            "× Industry improvement",
                            "× Historical realisation rate",
                            "− Operating costs",
                            "NPV / IRR / payback screen",
                            "Investment ceiling & first wave"
                        ],
                        zh: [
                            "分类成本基数",
                            "× 行业改善幅度",
                            "× 历史分类兑现率",
                            "− 运营成本",
                            "NPV / IRR / 回收期筛选",
                            "投资上限与首批规模"
                        ]
                    },

                    caption: {
                        en: "Discount rate of 8%, with 10% and 12% sensitivities; one-off investment is evaluated separately from the annual benefit threshold.",
                        zh: "折现率 8%，另做 10%、12% 敏感性；一次性投入与年度收益门槛分开评价。"
                    }
                }
            ],

            details: {
                en: [
                    {
                        title: "Phase 1 · Problem Framing & Hypotheses",
                        bullets: [
                            "Reframed the brief from 'which equipment to buy' to 'which investments can produce returns the finance team will recognise'.",
                            "Broke the problem into 5 themes and 15 initial hypotheses, each written as an 'if A, then B, otherwise C' decision rule with a validation owner and closing date.",
                            "Planned 8 data packages in the order public data → client data → site verification, and worked through 41 open items with the project lead."
                        ]
                    },
                    {
                        title: "Phase 1 · Benchmarking & Data Quality",
                        bullets: [
                            "Unified definitions for 10 key metrics, graded 42 external data points by reliability (A / B / C: 4 / 17 / 21) and benchmarked 9 listed peers and 7 benchmark factory cases.",
                            "Found that two main business lines' gross margins moved in opposite directions by about 7.5 percentage points each over two years; as industry factors could not explain it, flagged it for validation with client data instead of attributing a cause.",
                            "Split a rise in unit cost into purchase price, product mix and material consumption to isolate the part that is actually controllable.",
                            "Quality controls: back-solved undisclosed costs to within 0.01 percentage points, extracted key figures twice independently, and tracked the share of primary sources (76% in the dashboard, 53% in the benchmark table)."
                        ]
                    },
                    {
                        title: "Phase 1 · Investment Returns & Dashboard",
                        bullets: [
                            "Estimated realisable profit as cost base × industry improvement × historical realisation rate by category, then deducted operating costs to get a risk-adjusted annual net benefit.",
                            "Screened 9 use cases and investment packages on NPV, IRR and payback (8% discount rate, with 10% and 12% sensitivities); 7 cleared the value threshold and fed an investment ceiling and a first-wave budget recommendation.",
                            "Built an auto-updating Excel dashboard linked raw data → calculations → dashboard: 13 tabs and about 1,060 formulas across two workbooks in Phase 1, later extended for Phase 2."
                        ]
                    },
                    {
                        title: "Phase 2 · KPI Baseline, OEE & Losses",
                        bullets: [
                            "Wrote a 37-KPI dictionary (formula, denominator, time window, data source); showed that three calculation methods on the same line can differ by 5–10 percentage points, and unified availability, quality-rate and other definitions.",
                            "Decomposed OEE for three business lines (61%, 68% and 57%) into availability, performance and quality losses.",
                            "Built preliminary loss trees and Pareto views (model coverage 88%–91%, still to be validated on site) and plan-attainment funnels: an 11–18-point gap attributed by first cause, with rush orders and order changes in the top three for every business."
                        ]
                    },
                    {
                        title: "Phase 2 · Capacity Bottlenecks",
                        bullets: [
                            "Showed that once a high-spec product passes about 23% of tonnage, the bottleneck moves to a downstream process; with orders up 10% the gap is about 189 tonnes, and two extra machines at the new bottleneck (about +247 tonnes) close it without adding production lines.",
                            "Also mapped end-to-end value streams and their information breakpoints, and drafted minimum data and automation standards for overseas plants to be written into equipment contracts."
                        ]
                    },
                    {
                        title: "Note",
                        bullets: [
                            "Client details are anonymised. Financial values are model estimates based on industry benchmarks and planning assumptions, not realised results; operating baselines such as OEE were provided as working assumptions until client data became available."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "一期 · 课题重构与假设",
                        bullets: [
                            "将课题由“采购何种设备”重构为“哪些投资能产生可被财务确认的回报”。",
                            "拆解 5 个一级主题、15 条初始假设，每条写成“若 A 则 B，否则 C”的决策规则，并配置验证负责人与关闭时点。",
                            "规划 8 个数据包，取证顺序为“公开数据 — 客户数据 — 现场核实”；与带教逐项确认事项共 41 项。"
                        ]
                    },
                    {
                        title: "一期 · 对标与数据质量",
                        bullets: [
                            "统一 10 项关键指标口径；42 个外部数据点按 A / B / C 三级可信度分级（4 / 17 / 21 个）；对标 9 家上市同业与 7 个标杆工厂案例。",
                            "识别两项主营业务毛利率两年内一升一降、幅度均约 7.5 个百分点；行业因素无法解释，列为需客户内部数据验证的问题，不作归因。",
                            "将单位成本上升拆分为采购价格、产品结构与材料单耗三部分，识别真正可控的降本空间。",
                            "质量控制：未披露成本倒推误差不超过 0.01 个百分点；关键数据双重独立摘录；跟踪一手来源占比（看板 76%、基准表 53%）。"
                        ]
                    },
                    {
                        title: "一期 · 投资回报与看板",
                        bullets: [
                            "以“成本基数 × 行业改善幅度 × 历史分类兑现率”测算可兑现利润，扣除运营成本后得到风险调整年化净收益。",
                            "以 NPV、IRR 与回收期评价 9 个用例与投资包（折现率 8%，另做 10%、12% 敏感性），7 个通过金额门槛，据此给出投资上限与首批投入建议。",
                            "搭建按“原始数据 — 计算 — 看板”链路联动的自动更新 Excel 看板：一期 13 个页签、两个工作簿合计约 1,060 个公式，二期继续扩展。"
                        ]
                    },
                    {
                        title: "二期 · KPI 基线、OEE 与损失",
                        bullets: [
                            "编写 37 项 KPI 字典（公式、分母、时间窗口、数据源）；同一条线三种算法可差 5—10 个百分点，统一可用率、质量率等口径。",
                            "将三类业务 OEE（61%、68%、57%）按可用率、性能率、质量率拆解主要损失来源。",
                            "搭建初步损失树与 Pareto（模型覆盖率 88%—91%，待现场实证）及计划达成漏斗：缺口 11—18 个百分点按首因归因，插单改单在三类业务均列前三。"
                        ]
                    },
                    {
                        title: "二期 · 产能瓶颈",
                        bullets: [
                            "某高端产品吨数占比超过约 23% 后，瓶颈转移到下游工序；订单再增 10% 时缺口约 189 吨，在新瓶颈工序增加 2 台设备（约 +247 吨）即可覆盖，无需新增产线。",
                            "另绘制端到端价值流并识别信息断点，起草海外基地最低数据与自动化标准，供写入设备采购合同。"
                        ]
                    },
                    {
                        title: "说明",
                        bullets: [
                            "客户信息已匿名处理。金额均为基于行业基准与规划假设的模型测算，并非已实现收益；OEE 等运营基线在客户数据到位前为工作假设。"
                        ]
                    }
                ]
            }
        },

        {
            id: "ngtec",
            category: "data-business",

            company: {
                en: "National Green Technology Exchange Center",
                zh: "国家绿色技术交易中心"
            },

            role: {
                en: "Research Analyst Intern",
                zh: "研究分析实习生"
            },

            location: {
                en: "Beijing, China",
                zh: "中国 · 北京"
            },

            dates: {
                en: "Nov 2025 – Feb 2026",
                zh: "2025年11月 – 2026年2月"
            },

            sortDate: "2026-02",

            logo: "assets/logos/beijing-green-exchange.jpg",

            overviewBullets: {
                en: [
                    "Wrote a 17-page research report on how green-technology trading can enable zero-carbon industrial parks, designing an AI-enabled matching platform that runs from pain-point diagnosis to MRV verification and financing.",
                    "Produced a 13-slide construction plan for a Hebei node centre and a 26-slide pain-point diagnosis of a central state-owned energy group, from group level down to subsidiaries and zero-carbon parks.",
                    "Co-conducted AI matching research with Peking University and Germany's Steinbeis, and revised two cross-institution strategic cooperation agreements."
                ],
                zh: [
                    "撰写 17 页《国家绿色技术交易赋能零碳园区建设》研究报告，设计从痛点诊断到 MRV 核证与融资对接的 AI 智能撮合平台方案。",
                    "完成 13 页《河北省节点中心建设方案》汇报 PPT 与 26 页能源央企痛点诊断，从集团、二级公司到零碳园区逐层分析。",
                    "与北京大学、德国 Steinbeis 共同开展 AI 智能撮合交易专题研究，并修订 2 份跨机构战略合作协议。"
                ]
            },

            tags: [
                "AI Matching",
                "Zero-Carbon Parks",
                "ESG",
                "Data Governance",
                "Policy Research",
                "PowerPoint"
            ],

            metrics: [
                {
                    value: "17 pages",
                    label: {
                        en: "Zero-carbon park research report",
                        zh: "零碳园区研究报告"
                    }
                },
                {
                    value: "13 slides",
                    label: {
                        en: "Hebei node-centre construction plan",
                        zh: "河北省节点中心建设方案"
                    }
                },
                {
                    value: "26 slides",
                    label: {
                        en: "Pain-point diagnosis of a central SOE energy group",
                        zh: "能源央企痛点诊断"
                    }
                },
                {
                    value: "8",
                    label: {
                        en: "Construction initiatives across 3 pillars (Hebei plan)",
                        zh: "建设内容，分属 3 大体系（河北方案）"
                    }
                },
                {
                    value: "7",
                    label: {
                        en: "AI-agent use cases with defined inputs, outputs and KPIs",
                        zh: "AI 智能体方案（含输入、输出与 KPI）"
                    }
                },
                {
                    value: "4",
                    label: {
                        en: "Storage acceptance KPIs set in the report",
                        zh: "报告提出的储能验收 KPI"
                    }
                }
            ],

            visuals: [
                {
                    type: "process",

                    title: {
                        en: "AI-enabled Green Technology Transaction Workflow",
                        zh: "AI 驱动的绿色技术交易流程"
                    },

                    steps: {
                        en: [
                            "Pain-point diagnosis",
                            "Technology selection",
                            "Contract signing",
                            "Delivery & acceptance",
                            "MRV verification",
                            "Financing"
                        ],
                        zh: [
                            "痛点诊断",
                            "技术比选",
                            "交易签约",
                            "交付验收",
                            "MRV 核证",
                            "融资对接"
                        ]
                    },

                    caption: {
                        en: "Six-stage chain used in both the zero-carbon park report and the AI matching research.",
                        zh: "零碳园区报告与 AI 智能撮合研究共同采用的 6 环节运作链路。"
                    }
                },

                {
                    type: "process",

                    title: {
                        en: "Hebei Node Centre — Plan Structure",
                        zh: "河北省节点中心 — 方案结构"
                    },

                    steps: {
                        en: [
                            "6 policy anchors",
                            "6 structural pain points",
                            "8 initiatives · 3 pillars",
                            "Joint management committee",
                            "3-phase roll-out"
                        ],
                        zh: [
                            "6 项政策依据",
                            "6 类结构性痛点",
                            "8 项建设内容 · 3 大体系",
                            "联合管理委员会",
                            "三阶段实施"
                        ]
                    },

                    caption: {
                        en: "From national and Hebei policy to an operating mechanism and a short-, medium- and long-term implementation plan.",
                        zh: "从国家与河北政策依据，到运营机制和短、中、长期实施计划。"
                    }
                },

                {
                    type: "bars",

                    title: {
                        en: "Park Energy-Integration Gap (Energy SOE Diagnosis)",
                        zh: "园区源网荷储协同缺口（能源央企诊断）"
                    },

                    items: [
                        {
                            label: {
                                en: "Park consumption rate — current",
                                zh: "园区源网荷储消纳率 — 现状"
                            },
                            value: 85,
                            suffix: "%"
                        },
                        {
                            label: {
                                en: "Park consumption rate — target",
                                zh: "园区源网荷储消纳率 — 目标"
                            },
                            value: 95,
                            suffix: "%"
                        },
                        {
                            label: {
                                en: "Chemical load vs PV output match",
                                zh: "化工负荷与光伏出力匹配度"
                            },
                            value: 60,
                            suffix: "%"
                        }
                    ],

                    caption: {
                        en: "Quantified gaps used to prioritise the AI-agent use cases; wind and solar curtailment at one subsidiary's sites was 5–8%.",
                        zh: "以量化缺口确定 AI 智能体方案的优先级；某新能源场站弃风弃光率为 5–8%。"
                    }
                }
            ],

            details: {
                en: [
                    {
                        title: "Zero-Carbon Park Research Report (17 pages)",
                        bullets: [
                            "Designed an AI-enabled matching platform from the exchange's perspective, linking six stages from pain-point diagnosis to technology selection, contracting, delivery acceptance, MRV verification and financing, and compared it with conventional green-power and carbon-trading platforms on five dimensions.",
                            "Framed the problem with industry evidence (over 60% of zero-carbon park projects struggle to implement technology and nearly 70% stall at financing) and identified three gaps: from technically feasible to tradable, from built to recognised, and from demonstration to scaled replication.",
                            "Built a capability framework of five technology modules and set four storage acceptance KPIs: availability ≥90%, annual degradation ≤5%, power-quality pass rate 100% and peak-shaving response accuracy ≥95%.",
                            "Designed an 8-field pain-point data dictionary and a 'standardise → interface → intelligence' data roadmap; matching starts with interpretable rules + RAG and moves to learning-to-rank, optimising deal probability, delivery success, dispute rate and satisfaction through grey releases and A/B tests.",
                            "Proposed four revenue lines and a '1 operating platform + 2 capability centres + 3 business lines' model, with four categories of AI risk mapped to NIST AI RMF 1.0 and the EU AI Act.",
                            "Ran a simulated roll-out for a regional subsidiary of a central SOE energy group and Hebei's three first-batch national zero-carbon parks: Baoding High-tech Zone, Cangzhou Cangdong and Tangshan Laoting."
                        ]
                    },
                    {
                        title: "Hebei Node Centre Construction Plan (13 slides)",
                        bullets: [
                            "Reviewed six national and Hebei policies, including Hebei's target to cut energy use per unit of industrial value added by 16.5% by 2025 against 2020.",
                            "Identified six structural pain points: supply–demand matching, patent-to-industry transfer, technology valuation, green-finance support, trusted data spaces and the technology-broker system.",
                            "Designed eight initiatives across three pillars: a green-technology map, evaluation standards and a trusted data space; a transaction and incubation fund, CCER methodology development and a green-technology board; and broker certification plus a contract-registration node.",
                            "Set out the operating mechanism, including a joint management committee led by the Hebei Academy of Sciences and the exchange centre, a three-phase implementation plan and five requests for government support.",
                            "The deck served as the base draft for the exchange's briefing to the provincial government."
                        ]
                    },
                    {
                        title: "Energy SOE Pain-Point Diagnosis (26 slides)",
                        bullets: [
                            "Diagnosed a central state-owned energy group at three levels: four group-level pain-point categories, two regional subsidiaries and six zero-carbon parks.",
                            "Quantified integration gaps: 5–8% wind and solar curtailment at one subsidiary's sites, an 85% consumption rate at one park against a 95% target, and only a 60% match between chemical loads and PV output.",
                            "Designed seven AI-agent use cases (forecasting, 5–15-minute rolling dispatch, VPP aggregation, trading, contract compliance, MRV and settlement, and deviation settlement), each with defined inputs, outputs and KPIs.",
                            "Benchmarked one subsidiary against its main regional competitor on five dimensions and proposed a pathway built on differentiation, AI-driven cost leadership and green finance."
                        ]
                    },
                    {
                        title: "AI Matching Research & Partnerships",
                        bullets: [
                            "Co-conducted research on AI-enabled green-technology matching with Peking University and Germany's Steinbeis, covering application scenarios, participants, matching rules, data governance, matching algorithms and trust mechanisms, and presented the interim findings.",
                            "Revised two strategic cooperation agreements (Beijing Green Exchange with the Hebei Academy of Sciences, and Steinbeis with Beijing Green Exchange) across objectives, responsibilities, mechanisms and key wording.",
                            "Supported preparations for the Beijing–Tianjin–Hebei Coordinated Development Conference."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "零碳园区研究报告（17 页）",
                        bullets: [
                            "从交易所视角设计 AI 智能撮合交易平台，打通“痛点诊断 — 技术比选 — 交易签约 — 交付验收 — MRV 核证 — 融资对接”6 个环节，并从 5 个维度与传统绿电 / 碳交易平台对标。",
                            "以行业数据界定问题（超 60% 零碳园区项目技术落地难、近 70% 在融资环节受阻），归纳“技术可行 → 可成交”“建成 → 被认可”“示范 → 规模复制”3 个断层。",
                            "构建 5 大技术模块能力框架，提出 4 项储能验收 KPI：可用率 ≥90%、年衰减 ≤5%、电能质量合格率 100%、削峰填谷响应准确率 ≥95%。",
                            "设计 8 字段痛点数据字典与“先标准化、后接口化、再智能化”的数据建设路径；撮合策略由“可解释规则 + RAG”起步，积累数据后升级为排序学习，以成交概率、履约成功率、纠纷率、满意度 4 项目标经灰度发布与 A/B 测试迭代。",
                            "提出 4 条收入线及“1 个运营中台 + 2 个能力中心 + 3 条业务线”运营架构，并参照 NIST AI RMF 1.0 与欧盟 AI Act 梳理 4 类 AI 风险。",
                            "以 1 家能源央企区域公司及河北首批 3 个国家级零碳园区（保定高新区、沧州沧东、唐山乐亭）为对象做模拟推演。"
                        ]
                    },
                    {
                        title: "河北省节点中心建设方案（13 页）",
                        bullets: [
                            "梳理 6 项国家及河北政策依据，包括河北 2025 年规上工业单位增加值能耗较 2020 年下降 16.5% 的目标。",
                            "提炼 6 类结构性痛点：供需对接、专利与产业衔接、技术评价与估值、绿色金融配套、可信数据空间、技术经纪人体系。",
                            "设计 3 大体系 8 项建设内容：绿色技术图谱、评价标准、可信数据空间；交易与产业孵化配套基金、CCER 方法学开发、绿色技术板；技术经纪人培训认证、绿色技术合同登记节点。",
                            "设计运营机制（河北省科学院与国家绿色技术交易中心牵头的联合管理委员会）、短 / 中 / 长期三阶段实施计划及 5 项恳请政府支持事项。",
                            "该材料作为交易所向省政府汇报的底稿。"
                        ]
                    },
                    {
                        title: "能源央企痛点诊断（26 页）",
                        bullets: [
                            "从集团（4 类痛点）、2 家二级公司到 6 个零碳园区，逐层诊断某能源央企面临的问题。",
                            "量化协同缺口：某新能源场站弃风弃光率 5–8%，某园区源网荷储消纳率 85%（目标 95%），化工负荷与光伏出力匹配度仅 60%。",
                            "设计预测与计划、5–15 分钟滚动调度、VPP 资源聚合、交易报价、合规与合同、MRV 与结算、偏差结算 7 类 AI 智能体方案，逐一定义输入、输出与 KPI。",
                            "从 5 个维度将其区域子公司与当地主要竞争对手对标，提出“差异化 + AI 成本领先 + 绿色金融”的超越路径。"
                        ]
                    },
                    {
                        title: "AI 智能撮合研究与合作",
                        bullets: [
                            "与北京大学、德国 Steinbeis 共同开展 AI 智能撮合交易专题研究，梳理应用场景、参与主体、撮合规则及数据治理、匹配算法、可信机制等关键要素，完成阶段性汇报。",
                            "修订北京绿交所 × 河北省科学院、德国 Steinbeis × 北京绿交所 2 份战略合作协议，按合作目标、权责分工、推进机制与关键表述梳理条款。",
                            "参与京津冀协同发展大会预备工作。"
                        ]
                    }
                ]
            }
        },

        {
            id: "forcity",
            category: "finance-investment",

            company: {
                en: "Forecity Investment Group",
                zh: "Forecity Investment Group"
            },

            role: {
                en: "Accounting Analyst",
                zh: "财务分析 / 会计分析"
            },

            location: {
                en: "Sydney, Australia",
                zh: "澳大利亚 · 悉尼"
            },

            dates: {
                en: "Sep 2025 – Nov 2025",
                zh: "2025年9月 – 2025年11月"
            },

            sortDate: "2025-11",

            logo: "",

            overviewBullets: {
                en: [
                    "Analysed project-level costs, expenditure and input-output performance across subsidiary projects.",
                    "Supported management decisions on whether additional project expenditure should continue based on cost evidence, progress and expected-return logic."
                ],
                zh: [
                    "分析不同项目的成本、费用及投入产出表现，并形成结构化财务分析。",
                    "结合成本证据、项目进度与预期回报逻辑，支持管理层判断是否继续追加项目投入。"
                ]
            },

            tags: [
                "Financial Analysis",
                "Cost Analysis",
                "Investment Decision"
            ],

            details: {
                en: [
                    {
                        title: "Project Financial Analysis",
                        bullets: [
                            "Reviewed project-level costs, expenses and input-output performance across subsidiary projects.",
                            "Prepared structured financial schedules and variance observations for management review."
                        ]
                    },
                    {
                        title: "Decision Support",
                        bullets: [
                            "Assessed whether additional expenditure should continue based on cost performance, project progress and expected-return logic.",
                            "Translated financial evidence into concise observations supporting resource-allocation decisions."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "项目财务分析",
                        bullets: [
                            "分析各子项目成本、费用及投入产出表现。",
                            "整理结构化财务明细及差异分析，支持管理层审阅。"
                        ]
                    },
                    {
                        title: "管理决策支持",
                        bullets: [
                            "基于成本表现、项目进度和预期收益逻辑判断是否应继续追加项目投入。",
                            "将财务数据转化为支持资源配置决策的分析结论。"
                        ]
                    }
                ]
            }
        },

        {
            id: "ais",
            category: "accounting-audit",

            company: {
                en: "Australasia International School",
                zh: "Australasia International School"
            },

            role: {
                en: "Accounting Intern",
                zh: "会计实习生"
            },

            location: {
                en: "Sydney, Australia",
                zh: "澳大利亚 · 悉尼"
            },

            dates: {
                en: "Feb 2025 – Jul 2025",
                zh: "2025年2月 – 2025年7月"
            },

            sortDate: "2025-07",

            logo: "assets/logos/ais.png",

            overviewBullets: {
                en: [
                    "Used Xero to record tuition transactions and maintain traceable accounting records.",
                    "Completed FY2023 and FY2024 bank reconciliations and prepared supporting workpapers for audit review."
                ],
                zh: [
                    "使用 Xero 记录学费交易并维护可追溯的会计记录。",
                    "完成 FY2023 与 FY2024 两个财年的银行对账，并整理审计支持底稿。"
                ]
            },

            tags: [
                "Xero",
                "Bank Reconciliation",
                "Accounting",
                "Audit Support"
            ],

            details: {
                en: [
                    {
                        title: "Accounting Operations",
                        bullets: [
                            "Recorded tuition transactions in Xero and matched payments with accounting records and supporting materials.",
                            "Maintained organised transaction records to improve traceability and reporting accuracy."
                        ]
                    },
                    {
                        title: "Bank Reconciliation & Audit Support",
                        bullets: [
                            "Processed about 20 transactions a day in Xero, more than 2,000 in total.",
                            "Completed FY2023–FY2024 bank reconciliations covering about A$200,000 of transactions; investigated 6 discrepancies and tied closing balances out 100%.",
                            "Investigated differences between bank statements and accounting records and prepared workpapers for audit review."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "日常会计工作",
                        bullets: [
                            "在 Xero 中记录学费交易，并匹配付款记录、会计科目及支持性材料。",
                            "维护结构化交易记录，提高账务可追溯性与报告准确性。"
                        ]
                    },
                    {
                        title: "银行对账与审计支持",
                        bullets: [
                            "在 Xero 中日均处理约 20 笔交易，累计 2,000+ 笔。",
                            "完成 FY2023—FY2024 银行对账，覆盖约 20 万澳元流水；核查 6 项差异，期末余额 100% 勾稽一致。",
                            "核查银行流水与账务记录差异，并整理相关审计工作底稿。"
                        ]
                    }
                ]
            }
        },

        {
            id: "daxin",
            category: "accounting-audit",

            company: {
                en: "Da Xin Certified Public Accountants",
                zh: "大信会计师事务所"
            },

            role: {
                en: "Audit Intern",
                zh: "审计实习生"
            },

            location: {
                en: "Beijing, China",
                zh: "中国 · 北京"
            },

            dates: {
                en: "Jun 2024 – Jul 2024",
                zh: "2024年6月 – 2024年7月"
            },

            sortDate: "2024-07",

            logo: "assets/logos/daxin-cpa.jpg",

            overviewBullets: {
                en: [
                    "Supported the annual audit of a science-park development company, covering cash, receivables, revenue, and costs and expenses.",
                    "Matched financial records with supporting documents and organised traceable audit evidence for project-team review."
                ],
                zh: [
                    "参与某科技园建设公司年度审计，覆盖货币资金、应收账款、收入、成本费用 4 大科目。",
                    "核对财务记录与支持性凭证，整理可追溯审计证据及工作底稿。"
                ]
            },

            tags: [
                "Audit",
                "Workpapers",
                "Financial Records",
                "Evidence Verification"
            ],

            details: {
                en: [
                    {
                        title: "Audit Engagement",
                        bullets: [
                            "Supported the annual audit of a science-park development company across four account areas: cash, receivables, revenue, and costs and expenses.",
                            "Checked financial records against supporting documentation, organised audit evidence and took part in a physical asset count on site."
                        ]
                    },
                    {
                        title: "Documentation",
                        bullets: [
                            "Prepared traceable workpaper support for project-team review.",
                            "Developed practical understanding of audit evidence, documentation quality and financial controls."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "审计项目",
                        bullets: [
                            "参与某科技园建设公司年度审计，覆盖货币资金、应收账款、收入、成本费用 4 大科目。",
                            "核对财务记录与支持性文件并整理审计证据，参与实物资产监盘。"
                        ]
                    },
                    {
                        title: "审计底稿",
                        bullets: [
                            "整理可追溯的审计工作底稿以支持项目组复核。",
                            "加深对审计证据、财务控制与文档质量要求的理解。"
                        ]
                    }
                ]
            }
        },

        {
            id: "shanxi",
            category: "securities-research",

            company: {
                en: "Shanxi Securities Research Institute",
                zh: "山西证券研究所"
            },

            role: {
                en: "Research Intern · Coal & Power",
                zh: "行业研究实习生 · 煤炭与电力组"
            },

            location: {
                en: "Beijing, China",
                zh: "中国 · 北京"
            },

            dates: {
                en: "Nov 2023 – Mar 2024",
                zh: "2023年11月 – 2024年3月"
            },

            sortDate: "2024-03",

            logo: "assets/logos/shanxi-securities.jpg",

            overviewBullets: {
                en: [
                    "Collected, cleaned and analysed five years of coal-accident and industry data using Excel and industry research tools.",
                    "Produced Indonesia coal-market research covering production, exports, coal prices, policies and producer profitability."
                ],
                zh: [
                    "使用 Excel 等工具整理并分析近五年煤矿事故及行业数据，开展跨年度比较。",
                    "完成印尼煤炭市场研究，覆盖产量、出口、煤价、政策及煤企盈利能力分析。"
                ]
            },

            tags: [
                "Equity Research",
                "Coal & Power",
                "Excel",
                "Industry Analysis"
            ],
metrics: [
    {
        value: "5 Years",
        label: {
            en: "Coal accident and industry data analysed",
            zh: "煤矿事故及行业数据分析跨度"
        }
    },
    {
        value: "775.2 Mt",
        label: {
            en: "Indonesia coal production in 2023",
            zh: "2023 年印尼煤炭产量"
        }
    },
    {
        value: "518 Mt",
        label: {
            en: "Indonesia coal exports in 2023",
            zh: "2023 年印尼煤炭出口量"
        }
    },
    {
        value: "+12.8%",
        label: {
            en: "2023 production growth YoY",
            zh: "2023 年煤炭产量同比增长"
        }
    },
    {
        value: "−29.8%",
        label: {
            en: "Scenario cash-contribution change under a 10% coal-price decline",
            zh: "煤价下降 10% 情景下销售现金贡献变化"
        }
    }
],

visuals: [
    {
        type: "bars",

        title: {
            en: "Indonesia Coal Market Snapshot — 2023",
            zh: "印尼煤炭市场概览 — 2023"
        },

        items: [
            {
                label: {
                    en: "Production",
                    zh: "产量"
                },
                value: 775.2,
                suffix: " Mt"
            },
            {
                label: {
                    en: "Exports",
                    zh: "出口"
                },
                value: 518,
                suffix: " Mt"
            }
        ],

        caption: {
            en: "Indonesia produced 775.2 Mt of coal in 2023 and exported 518 Mt.",
            zh: "2023 年印尼煤炭产量为 775.2 Mt，出口量为 518 Mt。"
        }
    },

    {
        type: "bars",

        title: {
            en: "Coal-price Stress Scenario",
            zh: "煤价压力测试情景"
        },

        items: [
            {
                label: {
                    en: "Base scenario",
                    zh: "基准情景"
                },
                value: 1176,
                suffix: " US$m"
            },
            {
                label: {
                    en: "10% lower coal price",
                    zh: "煤价下降 10%"
                },
                value: 826,
                suffix: " US$m"
            }
        ],

        caption: {
            en: "Scenario-based sales cash contribution only; this is not a profit, EBITDA or free-cash-flow forecast.",
            zh: "该结果仅为销售现金贡献压力测试，并非利润、EBITDA 或自由现金流预测。"
        }
    }
],

            details: {
                en: [
                    {
                        title: "Industry Data Analysis",
                        bullets: [
                            "Compiled five years of coal-mine accident, supply–demand and company financial data from Wind and Choice, and built a cross-year comparable dataset in Excel.",
                            "Supported sector monitoring through structured cross-year comparison and risk-pattern identification."
                        ]
                    },
                    {
                        title: "Indonesia Coal Research Report",
                        bullets: [
                            "Wrote a research report on the Indonesian coal market: 2023 output reached 775.2 Mt (+12.8%) and exports 518 Mt (66.8% of output), with China taking 42% of Indonesia's thermal-coal exports.",
                            "Cross-checked Choice data against Indonesia's energy ministry (ESDM): the 2024 approved production plan (922.14 Mt) is 19% above 2023 actual output (775.2 Mt), so expectations of a cut came from mixing in the 710 Mt early-year target.",
                            "Cross-checked Adaro and Bayan financials and identified a 'volume up, profit down' pattern: sales volume +7.1% / +18.3% against EBITDA −49.2% / −43.2%.",
                            "Adjusted for a one-off DMO accrual reversal, revising the apparent fall in unit cash cost from 5.4% to 1.6%.",
                            "Built a volume × (price − cost) cash-contribution model with a 3 × 5 price–cost sensitivity matrix: a 10% price fall cuts contribution by 29.8% and would need a 42.4% volume increase to offset.",
                            "Kept IEA and Indonesian official export data separate because their definitions differ, and documented primary sources and calculation checks in the appendix."
                        ]
                    },
                    {
                        title: "Research Support",
                        bullets: [
                            "Tracked key companies such as China Shenhua and Henan Energy, reading 50+ research reports, announcements and analyst-meeting notes and tagging them by price, supply–demand, policy and operating performance.",
                            "Produced daily coal-industry news summaries."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "行业数据分析",
                        bullets: [
                            "通过 Wind、东方财富 Choice 汇集近 5 年煤矿事故、行业供需及公司财务数据，用 Excel 统一口径建立跨年度可比数据集。",
                            "通过跨年度比较和风险模式识别支持行业跟踪研究。"
                        ]
                    },
                    {
                        title: "印尼煤炭行业研究报告",
                        bullets: [
                            "撰写印尼煤炭行业研究报告：2023 年产量 775.2 百万吨（+12.8%）、出口 518 百万吨（占产量 66.8%），中国占印尼动力煤出口的 42%。",
                            "交叉核验 Choice 与印尼能矿部（ESDM）原始披露：2024 年获批计划产量 922.14 百万吨，较 2023 年实际 775.2 百万吨高 19%；市场减产预期源于年初 710 百万吨目标值，属口径混用。",
                            "交叉验证 Adaro 与 Bayan 财务数据，识别“量增利减”：销量 +7.1% / +18.3%，EBITDA −49.2% / −43.2%。",
                            "剔除 DMO 计提一次性转回的影响，将单位现金成本表观降幅由 5.4% 修正为 1.6%。",
                            "搭建“销量 ×（售价 − 成本）”现金贡献模型与 3 × 5 售价—成本敏感性矩阵：售价下降 10% 使贡献下降 29.8%，需销量增长 42.4% 才能弥补。",
                            "IEA 与印尼官方出口数据口径不同，分别保留、不交叉拼接；附录列示原始资料与计算复核。"
                        ]
                    },
                    {
                        title: "研究支持",
                        bullets: [
                            "跟踪中国神华、河南能源等重点公司，研读研报、公告及分析师交流纪要 50+ 份，按价格 / 供需 / 政策 / 经营表现 4 类标签归纳。",
                            "完成煤炭行业每日新闻整理。"
                        ]
                    }
                ]
            }
        },

        {
            id: "edf",
            category: "data-business",

            company: {
                en: "Environmental Defense Fund",
                zh: "美国环保协会"
            },

            role: {
                en: "Data Analysis Intern",
                zh: "数据分析实习生"
            },

            location: {
                en: "Beijing, China",
                zh: "中国 · 北京"
            },

            dates: {
                en: "Jul 2023 – Aug 2023",
                zh: "2023年7月 – 2023年8月"
            },

            sortDate: "2023-08",

            logo: "assets/logos/edf.jpg",

            overviewBullets: {
                en: [
                    "Built a Yellow River Basin dataset from 9 government bulletins, unifying regional and indicator definitions and flagging abnormal records.",
                    "Wrote a Yellow River environmental-resource report that turned water-quality, water-use, soil-erosion and funding data into scenario estimates and verification checklists for project decisions."
                ],
                zh: [
                    "整合校验 9 份政府公报中的水资源、水土保持、生态环境与泥沙数据，统一地区与指标口径并核验异常记录，构建黄河流域数据集。",
                    "撰写黄河流域环境资源研究报告，将水质、用水、水土流失与治理资金数据转化为情景测算与项目核验清单。"
                ]
            },

            tags: [
                "Data Cleaning",
                "Environmental Data",
                "Water Resources",
                "Policy Analysis",
                "Scenario Analysis",
                "Visualisation"
            ],

            metrics: [
                {
                    value: "91.0%",
                    label: {
                        en: "Good / excellent water-quality sections in 2023",
                        zh: "2023 年主要江河优良断面比例"
                    }
                },

                {
                    value: "64.6%",
                    label: {
                        en: "Share of basin gross water use from agriculture",
                        zh: "农业占流域毛用水比例"
                    }
                },

                {
                    value: "251,100 km²",
                    label: {
                        en: "Soil-erosion area remaining in 2023",
                        zh: "2023 年仍存在的水土流失面积"
                    }
                },

                {
                    value: "61.8%",
                    label: {
                        en: "Share of erosion area in Inner Mongolia, Shaanxi & Gansu",
                        zh: "内蒙古、陕西和甘肃占流域水土流失面积"
                    }
                },

                {
                    value: "RMB 4.211bn",
                    label: {
                        en: "Central funding arranged for key soil-conservation projects",
                        zh: "国家水土保持重点工程中央资金安排"
                    }
                },

                {
                    value: "~634m m³",
                    label: {
                        en: "Illustrative net-water-saving scenario",
                        zh: "情景测算净节水规模"
                    }
                }
            ],

            visuals: [
                {
                    type: "bars",

                    title: {
                        en: "Water-Quality Improvement",
                        zh: "水环境质量改善"
                    },

                    items: [
                        {
                            label: {
                                en: "Good / excellent sections — 2021",
                                zh: "2021 年优良断面比例"
                            },
                            value: 81.9,
                            suffix: "%"
                        },

                        {
                            label: {
                                en: "Good / excellent sections — 2023",
                                zh: "2023 年优良断面比例"
                            },
                            value: 91.0,
                            suffix: "%"
                        }
                    ],

                    caption: {
                        en: "The proportion of good or excellent sections increased by 9.1 percentage points between 2021 and 2023.",
                        zh: "2021 至 2023 年主要江河优良断面比例提高 9.1 个百分点。"
                    }
                },

                {
                    type: "bars",

                    title: {
                        en: "Soil-Erosion Area",
                        zh: "水土流失面积变化"
                    },

                    items: [
                        {
                            label: {
                                en: "2020",
                                zh: "2020 年"
                            },
                            value: 26.27,
                            suffix: " ×10k km²"
                        },

                        {
                            label: {
                                en: "2023",
                                zh: "2023 年"
                            },
                            value: 25.11,
                            suffix: " ×10k km²"
                        }
                    ],

                    caption: {
                        en: "Total erosion area declined by approximately 4.4% from 2020 to 2023, while substantial regional concentration remained.",
                        zh: "2020 至 2023 年水土流失总面积下降约 4.4%，但区域集中问题仍然明显。"
                    }
                },

                {
                    type: "process",

                    title: {
                        en: "Environmental Decision Framework",
                        zh: "环境决策分析框架"
                    },

                    steps: {
                        en: [
                            "Official datasets",
                            "Boundary validation",
                            "Indicator comparison",
                            "Regional concentration",
                            "Scenario modelling",
                            "Project priorities"
                        ],

                        zh: [
                            "官方数据",
                            "统计边界核验",
                            "指标比较",
                            "区域集中分析",
                            "情景测算",
                            "项目优先级"
                        ]
                    },

                    caption: {
                        en: "The analysis separates observed environmental outcomes from scenario assumptions and project-level attribution.",
                        zh: "分析明确区分实际观测环境结果、情景假设以及单个治理项目的效果归因。"
                    }
                }
            ],

            details: {
                en: [
                    {
                        title: "Dataset Construction & Validation",
                        bullets: [
                            "Integrated and validated 9 government bulletins across four categories (water resources, soil and water conservation, eco-environment and sediment) into one dataset covering water resources, water quality, soil erosion, vegetation and wetlands, and water–sediment dynamics.",
                            "Unified regional and indicator definitions, validated abnormal records, and preserved each source's geographic boundaries, denominators and monitoring scope.",
                            "Avoided treating province-wide administrative statistics as direct substitutes for natural-basin statistics."
                        ]
                    },

                    {
                        title: "Water Quality",
                        bullets: [
                            "The share of good or excellent water-quality sections reached 91.0% in 2023, 9.1 percentage points above 2021.",
                            "The proportion of worse-than-Class-V sections declined from 3.8% to 1.5%.",
                            "All 42 monitored mainstem sections were rated Class I–II, while weaker sections remained in tributaries."
                        ]
                    },

                    {
                        title: "Water-Resource Constraints",
                        bullets: [
                            "Agricultural gross water use reached 25.347 billion m³ in 2023, representing 64.6% of basin water use.",
                            "Groundwater represented 27.9% of total basin water use.",
                            "Monitored shallow-groundwater storage in plain areas declined by approximately 1.1702 billion m³, highlighting the need to link agricultural-water policy with groundwater monitoring."
                        ]
                    },

                    {
                        title: "Soil Erosion",
                        bullets: [
                            "Total soil-erosion area declined from 262,700 km² in 2020 to 251,100 km² in 2023, a reduction of approximately 4.4%.",
                            "Inner Mongolia, Shaanxi and Gansu together accounted for approximately 61.8% of the remaining erosion area.",
                            "The soil-conservation rate in the middle-reach coarse-sediment region remained only 48.47%, supporting geographically targeted intervention."
                        ]
                    },

                    {
                        title: "Governance Investment",
                        bullets: [
                            "Central government funding arranged for key soil-and-water-conservation projects in 2023 totalled RMB 4.211 billion.",
                            "Small-watershed management and slope-farmland treatment accounted for RMB 2.777 billion of the allocation.",
                            "Converted the allocation into unit funding intensities (e.g. about RMB 368,500 per km² of small-watershed treatment) and tested 70% / 85% / 100% effective-area scenarios.",
                            "The analysis explicitly separated budget allocation from actual payment, project completion, maintenance quality and environmental outcomes."
                        ]
                    },

                    {
                        title: "Scenario Analysis",
                        bullets: [
                            "Modelled a scenario in which agricultural gross water use falls by 5%, equivalent to approximately 1.267 billion m³.",
                            "Assuming 50% of that reduction becomes verified net water saving, the implied net saving is approximately 634 million m³.",
                            "This is a conditional scenario for estimating scale and monitoring requirements, not a claimed realised environmental outcome."
                        ]
                    },

                    {
                        title: "Policy Priorities & Application Outputs",
                        bullets: [
                            "Prioritised verifiable agricultural net-water saving and groundwater monitoring rather than relying only on infrastructure investment.",
                            "Recommended targeting tributary pollution through section-level monitoring and pollution-source analysis.",
                            "Suggested concentrating erosion-control research and project pipelines in the most affected regions while separately tracking construction, maintenance and actual environmental effectiveness.",
                            "Produced resource-condition and verification checklists for five project types (agricultural water saving, coal-chemical and thermal-power water use, wastewater reuse, mine rehabilitation and check dams), with calculation formulas and checks documented in the appendix."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "数据集构建与核验",
                        bullets: [
                            "整合校验 9 份政府公报（水资源、水土保持、生态环境与泥沙 4 类），构建覆盖水资源、水环境、水土流失、植被湿地与水沙变化的流域数据集。",
                            "统一地区与指标口径，核验异常记录，并保留不同数据源原有的统计边界、分母及监测范围。",
                            "避免直接使用沿黄省区全省行政数据替代自然流域统计数据。"
                        ]
                    },

                    {
                        title: "水环境",
                        bullets: [
                            "2023 年主要江河优良断面比例达到 91.0%，较 2021 年提高 9.1 个百分点。",
                            "劣 V 类断面比例由 3.8% 降至 1.5%。",
                            "黄河干流 42 个监测断面全部达到 I–II 类，但部分支流水环境仍存在薄弱环节。"
                        ]
                    },

                    {
                        title: "水资源约束",
                        bullets: [
                            "2023 年农业毛用水达到 253.47 亿立方米，占流域总用水量的 64.6%。",
                            "地下水占黄河流域总用水量的 27.9%。",
                            "监测平原区浅层地下水蓄水减少约 11.702 亿立方米，说明农业用水政策需要与地下水监测结合。"
                        ]
                    },

                    {
                        title: "水土流失",
                        bullets: [
                            "水土流失面积由 2020 年的 26.27 万平方公里下降至 2023 年的 25.11 万平方公里，降幅约 4.4%。",
                            "内蒙古、陕西和甘肃合计占剩余水土流失面积约 61.8%。",
                            "中游多沙粗沙区水土保持率仅为 48.47%，支持将治理资源进一步向重点区域集中。"
                        ]
                    },

                    {
                        title: "治理投入",
                        bullets: [
                            "2023 年国家水土保持重点工程中央资金安排合计 42.11 亿元。",
                            "小流域治理和坡耕地治理两项合计 27.77 亿元。",
                            "将资金安排换算为单位投入强度（如小流域治理约 36.85 万元 / 平方公里），并对 70% / 85% / 100% 有效治理比例做三档敏感性分析。",
                            "分析明确区分财政资金安排、实际支付、项目完工、维护质量和最终环境治理效果。"
                        ]
                    },

                    {
                        title: "情景分析",
                        bullets: [
                            "测算农业毛用水压减 5% 的情景，对应约 12.67 亿立方米毛用水减少。",
                            "进一步假设其中 50% 转化为可验证净节水，对应约 6.34 亿立方米。",
                            "该结果仅用于判断潜在规模和监测重点，并不是已经实现的环境治理成果。"
                        ]
                    },

                    {
                        title: "政策优先方向与应用输出",
                        bullets: [
                            "优先关注可验证的农业净节水和地下水监测，而不是仅以基础设施投入规模评价效果。",
                            "建议基于断面监测和污染源负荷识别支流污染治理重点。",
                            "水土流失治理应优先覆盖重点集中地区，并分别跟踪建设规模、维护情况与实际环境效果。",
                            "输出农业节水、煤化工与火电用水、污水再生利用、矿区修复、淤地坝 5 类项目的资源条件与核验证据清单，附录列示计算公式与复核。"
                        ]
                    }
                ]
            }
        }
    ],

    projectCategories: [
    {
        id: "ai-data",
        name: {
            en: "AI & Data Science",
            zh: "人工智能与数据科学"
        }
    },
    {
        id: "finance-investment",
        name: {
            en: "Finance & Investment",
            zh: "金融与投资"
        }
    },
    {
        id: "analytics-systems",
        name: {
            en: "Analytics & Data Systems",
            zh: "数据分析与数据系统"
        }
    },
    {
        id: "esg-policy",
        name: {
            en: "ESG, Sustainability & Regulation",
            zh: "ESG、可持续发展与监管"
        }
    },
    {
        id: "business-strategy",
        name: {
            en: "Business Strategy & Competitions",
            zh: "商业战略与竞赛"
        }
    }
],

projects: [

    {
    id: "graphrag-esg",
    category: "ai-data",

    title: {
        en: "GraphRAG × ESG Disclosure Intelligence",
        zh: "GraphRAG × ESG 信息披露智能分析"
    },

    organisation: {
        en: "RAIDS Lab · The University of Sydney",
        zh: "悉尼大学 RAIDS Lab"
    },

    organisationUrl: "https://raids-lab.com/",

    role: {
        en: "Research Project Member",
        zh: "研究项目成员"
    },

    status: {
        en: "Ongoing · updated regularly",
        zh: "持续更新中"
    },

    statusNote: {
        en: "This project is actively being developed. Methods, experiments and findings shown here represent the current research stage and may be updated as the study progresses.",
        zh: "该项目目前仍在持续研究与更新中。此页面展示的方法、实验与阶段性发现均基于当前研究进展，后续可能随项目推进继续更新。"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "May 2026 – Present",
        zh: "2026年5月 – 至今"
    },

    sortDate: "2026-11",

    logo: "",

    overviewBullets: {
        en: [
            "Built section- and table-aware chunking that keeps page numbers, and a company–indicator–year knowledge graph, for an ESG benchmark of 30 corporate reports and 2,015 evidence-grounded questions; helped annotate reports and compare 5 retrieval architectures (standard RAG vs four GraphRAG variants).",
            "The evidence-retrieval pipeline raised page-localisation accuracy from 77.4% to 88.3% (+14%) while reducing token use on all 30 reports; current results show graph retrieval helps on complex reasoning but not on every task. Ongoing."
        ],
        zh: [
            "为包含 30 份企业 ESG 报告、2,015 道有证据支撑问题的基准，搭建按章节和表格切分并保留页码的分块流程，以及“公司—指标—年份”知识图谱；参与报告标注，并比较 5 种检索架构（标准 RAG 与四种 GraphRAG）。",
            "证据检索流程把页码定位准确率从 77.4% 提高到 88.3%（提升 14%），并在全部 30 份报告上降低了 token 用量；目前结果显示图检索在复杂推理上更有优势，但并非所有任务都更好。研究持续进行中。"
        ]
    },

    tags: [
        "GraphRAG",
        "RAG",
        "LLM",
        "Information Retrieval",
        "ESG",
        "Knowledge Graphs",
        "Responsible AI"
    ],

    metrics: [
        {
            value: "30",
            label: {
                en: "Corporate ESG reports in the benchmark corpus",
                zh: "基准语料中的企业 ESG 报告"
            }
        },

        {
            value: "2,015",
            label: {
                en: "Evidence-grounded benchmark questions",
                zh: "基于证据构建的评测问题"
            }
        },

        {
            value: "5",
            label: {
                en: "Retrieval architectures compared",
                zh: "对比的检索架构"
            }
        },

        {
            value: "4",
            label: {
                en: "Question and reasoning task levels",
                zh: "问题与推理任务层级"
            }
        }
    ],

    visuals: [
        {
            type: "process",

            title: {
                en: "Current ESG Intelligence Research Pipeline",
                zh: "当前 ESG 智能分析研究流程"
            },

            steps: {
                en: [
                    "ESG standards & reports",
                    "OCR & normalization",
                    "Shared ESG corpus",
                    "RAG / GraphRAG retrieval",
                    "Evidence-grounded answers",
                    "Evaluation & verification"
                ],

                zh: [
                    "ESG 标准与企业报告",
                    "OCR 与文本规范化",
                    "统一 ESG 语料库",
                    "RAG / GraphRAG 检索",
                    "基于证据的回答",
                    "评测与验证"
                ]
            },

            caption: {
                en: "The research pipeline is designed to separate document processing, retrieval architecture, answer generation and evidence verification so that each component can be evaluated independently.",
                zh: "该研究流程将文档处理、检索架构、答案生成与证据验证分开，从而能够分别评估不同组件对结果的影响。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Benchmark Question Distribution",
                zh: "评测问题分布"
            },

            items: [
                {
                    label: {
                        en: "Fact Retrieval",
                        zh: "事实检索"
                    },
                    value: 958,
                    suffix: ""
                },

                {
                    label: {
                        en: "Complex Reasoning",
                        zh: "复杂推理"
                    },
                    value: 616,
                    suffix: ""
                },

                {
                    label: {
                        en: "Contextual Summarisation",
                        zh: "上下文总结"
                    },
                    value: 368,
                    suffix: ""
                },

                {
                    label: {
                        en: "Creative Generation",
                        zh: "创造性生成"
                    },
                    value: 73,
                    suffix: ""
                }
            ],

            caption: {
                en: "The 2,015-question benchmark spans four task levels, allowing retrieval systems to be evaluated beyond simple factual lookup.",
                zh: "2,015 个评测问题覆盖四类任务，使不同检索系统不仅能够在简单事实检索上比较，还能测试复杂推理、总结与证据约束生成能力。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Research Context",
                bullets: [
                    "Corporate ESG reports are long, heterogeneous and frequently contain metrics distributed across narrative text, tables, figures and multiple reporting periods.",
                    "The research asks when graph-based retrieval creates meaningful value over standard hybrid retrieval, rather than assuming GraphRAG is always superior.",
                    "A key objective is to make generated ESG analysis traceable back to verifiable source evidence."
                ]
            },

            {
                title: "ESG Corpus & Benchmark Construction",
                bullets: [
                    "The team built a shared corpus from ESG reporting standards and 30 corporate ESG reports spanning 11 SASB industries, with a manually annotated reference set.",
                    "Structured indicators from SASB, GRI, TCFD and CDP into a common representation.",
                    "The benchmark contains 2,015 questions across four difficulty levels: fact retrieval, complex reasoning, contextual summarisation and evidence-constrained generation.",
                    "Ground-truth data includes disclosure status, reported values and source evidence locations."
                ]
            },

            {
                title: "Retrieval Systems Compared",
                bullets: [
                    "Compared a non-graph DualChannel baseline with HippoRAG v1, HippoRAG v2, LightRAG and HyperGraphRAG.",
                    "Used the same ESG corpus, blind question set, embedding model and answer model to create a controlled comparison.",
                    "Evaluated how different knowledge structures affect exact-value retrieval, multi-step reasoning, evidence coverage and faithful generation."
                ]
            },

            {
                title: "EulerESG Analysis Pipeline",
                bullets: [
                    "The research workflow extends into an ESG document-analysis pipeline covering PDF batching, PaddleOCR parsing, table processing and internal-link analysis.",
                    "Using retrieved evidence raised page-localisation accuracy from 0.7744 to 0.8827 and reduced token use on all 30 reports.",
                    "The pipeline incorporates embedding generation, hybrid retrieval, reranking and LLM-based disclosure classification.",
                    "Evidence and analysis outputs can be exported in structured formats including JSON, XLSX, Markdown and PDF."
                ]
            },

            {
                title: "Current Research Findings",
                bullets: [
                    "Current experiments suggest that GraphRAG performance is task-dependent rather than universally superior to standard retrieval.",
                    "HyperGraphRAG currently shows particular strength on complex reasoning and evidence-grounded generation, while LightRAG provides broad evidence coverage for summarisation tasks.",
                    "HippoRAG v2 currently offers a useful balance between factual performance and prompt cost.",
                    "These findings remain part of an ongoing research programme and may change as additional experiments, robustness tests and multimodal evidence are incorporated."
                ]
            },

            {
                title: "My Contribution",
                bullets: [
                    "Supervised by Dr. Zhengyi Yang (RAIDS Lab).",
                    "Contributed to report annotation, benchmark construction and the comparison of retrieval approaches.",
                    "Split long reports into chunks by section and table while preserving page numbers, and built a company–indicator–year knowledge graph.",
                    "Helped define which steps of the pipeline require human review."
                ]
            },

            {
                title: "Current Research Direction",
                bullets: [
                    "Investigating task routing so that simple factual queries can use lower-cost retrieval while complex or high-risk queries are routed to graph-based methods.",
                    "Extending the pipeline toward multimodal evidence from tables, charts, figures and page layouts.",
                    "Exploring ESG disclosure-gap analysis and evidence-grounded decision support while maintaining clear separation between reported facts and generated recommendations."
                ]
            },

            {
                title: "Status",
                bullets: [
                    "Ongoing — this page is updated as the research progresses."
                ]
            }
        ],

        zh: [
            {
                title: "研究背景",
                bullets: [
                    "企业 ESG 报告通常篇幅较长、结构异质，关键指标可能分散在正文、表格、图表及不同报告周期中。",
                    "本研究并不预设 GraphRAG 一定优于传统检索，而是重点研究在什么任务条件下图结构能够真正创造额外价值。",
                    "核心目标之一是确保 AI 生成的 ESG 分析能够回溯至可验证的原始证据。"
                ]
            },

            {
                title: "ESG 语料与评测集构建",
                bullets: [
                    "课题组以 ESG 报告标准与覆盖 SASB 11 个行业的 30 份企业 ESG 报告构建统一语料，并人工标注参考数据集。",
                    "将 SASB、GRI、TCFD 与 CDP 等框架中的披露指标整理为统一结构。",
                    "评测集共 2,015 道题，分四个难度层级：事实检索、复杂推理、上下文总结和证据约束生成。",
                    "Ground Truth 包括披露状态、报告数值及对应原文证据位置。"
                ]
            },

            {
                title: "检索系统对比",
                bullets: [
                    "比较非图结构 DualChannel 基线与 HippoRAG v1、HippoRAG v2、LightRAG 和 HyperGraphRAG。",
                    "所有系统使用相同 ESG 语料、盲测问题、Embedding 模型与答案模型，从而进行受控比较。",
                    "重点评估不同知识结构对精确数值检索、多步推理、证据覆盖与忠实生成的影响。"
                ]
            },

            {
                title: "EulerESG 分析流程",
                bullets: [
                    "引入检索证据后，页码定位准确率由 0.7744 提升至 0.8827，30 份报告全部节省 token。",
                    "将研究进一步扩展为 ESG 文档分析流程，包括 PDF 批处理、PaddleOCR 解析、表格处理和内部链接分析。",
                    "流程同时覆盖 Embedding 生成、混合检索、重排序及基于 LLM 的披露分类。",
                    "分析和证据结果可导出为 JSON、XLSX、Markdown 和 PDF 等结构化格式。"
                ]
            },

            {
                title: "当前阶段性发现",
                bullets: [
                    "现阶段实验显示，GraphRAG 的优势高度依赖任务类型，并不能在所有任务中统一替代传统检索。",
                    "目前 HyperGraphRAG 在复杂推理和基于证据的生成任务中表现出较强优势，而 LightRAG 在总结任务中的证据覆盖表现较好。",
                    "HippoRAG v2 当前在事实型任务表现与 Prompt 成本之间呈现较好的平衡。",
                    "这些均为持续研究中的阶段性发现，随着更多实验、稳健性测试和多模态证据加入，结果可能继续更新。"
                ]
            },

            {
                title: "本人工作",
                bullets: [
                    "导师：Dr. Zhengyi Yang（RAIDS Lab）。",
                    "参与报告标注、评测集构建与检索方案对比。",
                    "将长报告按章节与表格分块并保留页码，构建“公司 — 指标 — 年份”知识图谱。",
                    "参与界定流程中需要人工复核的环节。"
                ]
            },

            {
                title: "下一阶段研究方向",
                bullets: [
                    "研究任务路由机制，使简单事实问题使用低成本检索，而复杂、高风险或需要跨段证据的问题使用适合的图检索方法。",
                    "进一步加入表格、图表、图片和页面布局等多模态 ESG 证据。",
                    "探索 ESG 披露缺口分析和基于证据的决策支持，同时严格区分企业已披露事实与 AI 生成建议。"
                ]
            },

            {
                title: "研究状态",
                bullets: [
                    "持续更新中——本页会随研究进展同步更新。"
                ]
            }
        ]
    }
},

    {
        id: "next-gen-clubs-churn",
        category: "ai-data",

        title: {
            en: "Next Gen Clubs — Member Churn Prediction & Family Retention Pilot",
            zh: "Next Gen Clubs — 会员流失预测与家庭挽留试点"
        },

        organisation: {
            en: "Next Gen Clubs Case · The University of Sydney",
            zh: "Next Gen Clubs 案例 · 悉尼大学"
        },

        role: {
            en: "Assignment 1 (individual) + Assignment 2 (team of 4: Random Forest & CatBoost, SHAP-screened XGBoost, stacking and model integration)",
            zh: "作业 1（个人）+ 作业 2（4 人小组，负责随机森林与 CatBoost、SHAP 筛选版 XGBoost、模型堆叠与整合）"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "Aug 2026 – Oct 2026",
            zh: "2026年8月 – 2026年10月"
        },

        sortDate: "2026-10",

        logo: "",

        background: {
            paragraphs: {
                en: [
                    "Next Gen Health & Lifestyle Clubs is a premium health, fitness and wellness operator with six large destination clubs across Australia and New Zealand. One membership covers gyms, group fitness, indoor and outdoor pools, tennis and squash courts, personal training, wellness facilities, children's programs and hospitality.",
                    "For a premium membership business built on long-term relationships, keeping existing members matters. Next Gen holds rich operational data (memberships, attendance, facility use, class bookings, ancillary spending, household links and Experian MOSAIC segments, which classify Australian households into 14 groups and 52 types), but had not yet turned it into evidence about why members leave and when to step in.",
                    "In this unit we acted as Next Gen's analytics team. Assignment 1 was individual (data engineering and exploratory analysis); Assignment 2 was a team project (modelling and the retention strategy)."
                ],
                zh: [
                    "Next Gen Health & Lifestyle Clubs 是一家高端健康、健身与生活方式俱乐部运营商，在澳大利亚和新西兰拥有 6 家大型综合俱乐部。一张会员卡即可使用健身房、团体课、室内外泳池、网球与壁球场、私教、康体设施、儿童项目及餐饮等服务。",
                    "对依赖长期关系的高端会员制业务来说，留住现有会员至关重要。Next Gen 积累了大量运营数据（会员信息、到店记录、设施使用、课程预约、附加消费、家庭关系，以及将澳洲家庭分为 14 个大类、52 个小类的 Experian MOSAIC 人群分类），但还没有把这些数据转化为“会员为什么离开、什么时候该干预”的证据。",
                    "课程中我们以 Next Gen 数据分析团队的身份完成项目：作业 1 为个人作业（数据工程与探索性分析），作业 2 为小组作业（建模与挽留策略）。"
                ]
            },
            points: {
                en: [
                    "Explore the data to find the behaviours and attributes most associated with churn.",
                    "Predict whether a member cancels in the next 3 months from their characteristics and activity over the last 2 years, evaluated with the F1-score.",
                    "Design a retention project Next Gen could run, backed by high-level revenue and cost estimates."
                ],
                zh: [
                    "通过探索性分析，找出与退会关系最密切的行为和属性。",
                    "基于会员属性和过去 2 年的活动，预测其是否会在未来 3 个月内退会，以 F1 分数评估模型。",
                    "设计一个 Next Gen 可以执行的挽留项目，并给出收入与成本的初步测算。"
                ]
            }
        },

        overviewBullets: {
            en: [
                "Turned 2.4M+ attendance records, 883K sales lines and 709K bookings into a leakage-safe table for 12,272 members with pandas; the EDA separated risk profiles from 1.6% to 23.1% churn against a 7.2% base rate.",
                "In a team of 4, built the Random Forest, CatBoost and SHAP-screened XGBoost models and led nested stacking and model selection under family-grouped cross-validation (tuning lifted Random Forest F1 by 11%); the selected model's top-10% list holds 25 leavers per 100 contacted vs 7 at random (3.5×), supporting a 90-day retention pilot at about 1 : 3.6 cost to revenue."
            ],
            zh: [
                "用 pandas 将 240 万+ 条到店记录、88 万条消费明细和 71 万条预约整理成防信息泄漏的会员表（12,272 人）；探索性分析识别出的风险画像退会率从 1.6% 到 23.1%，基准为 7.2%。",
                "4 人小组中负责随机森林、CatBoost 与 SHAP 筛选版 XGBoost，并在按家庭分组的交叉验证下主导嵌套堆叠与选型（调参使随机森林 F1 提升 11%）；最终模型风险前 10% 名单中每 100 人有 25 人退会，随机联系只有 7 人（3.5 倍），据此设计的 90 天挽留试点成本与收入约为 1 : 3.6。"
            ]
        },

        tags: [
            "Python",
            "pandas",
            "scikit-learn",
            "XGBoost",
            "SciPy",
            "matplotlib",
            "Nested Cross-Validation",
            "Bootstrap",
            "Experiment Design"
        ],

        metrics: [
            {
                value: "2.4M+",
                label: {
                    en: "Attendance records processed, alongside 883K sales lines and 709K bookings",
                    zh: "处理的到店记录，另有 88 万条消费明细与 71 万条预约"
                }
            },
            {
                value: "7.16%",
                label: {
                    en: "Churn rate among 12,272 labelled members",
                    zh: "12,272 名有标签会员的退会率"
                }
            },
            {
                value: "23.1% vs 1.6%",
                label: {
                    en: "Churn in the highest- vs lowest-risk behavioural profile (Assignment 1)",
                    zh: "最高与最低风险行为画像的退会率（作业 1）"
                }
            },
            {
                value: "0.784",
                label: {
                    en: "Final XGBoost ROC-AUC (PR-AUC 0.254)",
                    zh: "最终 XGBoost 的 ROC-AUC（PR-AUC 0.254）"
                }
            },
            {
                value: "3.5×",
                label: {
                    en: "Churn rate of the top-10% risk list vs the average",
                    zh: "风险前 10% 名单退会率相对平均水平"
                }
            },
            {
                value: "≈1 : 3.6",
                label: {
                    en: "Quarterly pilot cost vs revenue protected",
                    zh: "试点季度成本与保住收入之比"
                }
            }
        ],

        visuals: [
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-data-pipeline.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "From Raw Event Data to a Leakage-safe Member Table",
                    zh: "从原始事件数据到防泄漏的会员级数据集"
                },
                caption: {
                    en: "Five sources were aggregated to one row per member, restricted to information available before the prediction date (T0 = 19 July 2024), then engineered into intensity, recency, trajectory, absence and commitment features.",
                    zh: "将 5 类数据聚合为一人一行，只保留预测日（T0 = 2024 年 7 月 19 日）之前可获得的信息，再构造强度、近期性、变化趋势、缺失状态与未来承诺等特征。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-churn-by-tenure.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Churn Falls Sharply with Membership Tenure",
                    zh: "退会率随会龄增长明显下降"
                },
                caption: {
                    en: "16.3% of members under 1.5 years churned, against 2.3% beyond 12 years; error bars are Wilson 95% intervals.",
                    zh: "会龄不足 1.5 年的会员退会率为 16.3%，12 年以上仅 2.3%；误差线为 Wilson 95% 置信区间。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-churn-by-recency.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Churn Rises as the Gap Since the Last Visit Grows",
                    zh: "距上次到店越久，退会率越高"
                },
                caption: {
                    en: "2.9% for members seen within the last week vs 17.2% after a 91–180-day gap; members with no attendance history are shown separately rather than treated as long absence.",
                    zh: "一周内到过店的会员退会率 2.9%，间隔 91—180 天的为 17.2%；从未到店的会员单独列出，不与“长期未到店”混为一谈。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-attendance-x-tenure.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Recent Attendance × Tenure",
                    zh: "近期到店 × 会龄"
                },
                caption: {
                    en: "The two signals compound: newer members with no visits in the last 90 days churned at 22.9%, while long-standing frequent visitors churned at 0.6%.",
                    zh: "两个信号叠加效应明显：近 90 天未到店的新会员退会率达 22.9%，长期且频繁到店的老会员仅 0.6%。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-future-booking.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Future Bookings Known at T0 Signal Commitment",
                    zh: "预测日已存在的未来预约代表投入度"
                },
                caption: {
                    en: "Among members under 3 years, churn was 13.3% without a future booking and 3.4% with one; future bookings were kept separate from historical activity to avoid leakage.",
                    zh: "会龄 3 年以内的会员中，没有未来预约的退会率为 13.3%，有未来预约的为 3.4%；未来预约与历史活动分开构造，避免信息泄漏。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-inactive-domains.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Disengagement Across Attendance, Spending and Bookings",
                    zh: "到店、消费与预约多维度沉寂"
                },
                caption: {
                    en: "Churn climbs from 3.4% when all three domains were active in the last 90 days to 13.8% when all three were inactive.",
                    zh: "近 90 天三个维度都活跃时退会率为 3.4%，三个维度都沉寂时升至 13.8%。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-risk-profiles.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Combined Behavioural Risk Profiles",
                    zh: "组合行为风险画像"
                },
                caption: {
                    en: "Mutually exclusive profiles built with np.select: members under 3 years who stopped attending and had no future booking churned at 23.1%, against 1.6% for frequent attenders with a future booking.",
                    zh: "用 np.select 构造互斥的风险画像：会龄 3 年以内、已停止到店且无未来预约的会员退会率 23.1%，频繁到店且有未来预约的仅 1.6%。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a1-attendance-correlation.png",
                source: {
                    en: "Assignment 1 · my figure",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "Feature Screening: Redundancy Within the Attendance Domain",
                    zh: "特征筛选：到店类特征的内部冗余"
                },
                caption: {
                    en: "Count features across windows were highly correlated (|r| ≥ 0.80), so the shortlist kept only a few representative features per domain; 134 numeric candidates were narrowed to a 26-feature evidence-based list.",
                    zh: "不同时间窗口的计数类特征高度相关（|r| ≥ 0.80），因此每个领域只保留少数代表变量；134 个数值候选特征最终收敛为 26 个有证据支撑的候选特征。"
                }
            },
            {
                type: "gallery",
                source: {
                    en: "Assignment 1 · my figures",
                    zh: "作业 1 · 本人绘制"
                },
                title: {
                    en: "More from the Assignment 1 Exploratory Analysis",
                    zh: "作业 1 探索性分析：更多图表"
                },
                caption: {
                    en: "Supporting views behind the feature shortlist. Rates are 90-day churn, with member counts shown on each bar or cell; click a figure to open it full size.",
                    zh: "支撑候选特征筛选的补充视图。比率均为 90 天退会率，各柱或格中标注样本量；点击图片可查看原图。"
                },
                images: [
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-attendance-trajectory.png",
                        title: {
                            en: "Attendance trajectory",
                            zh: "到店变化趋势"
                        },
                        caption: {
                            en: "Churn climbs along the disengagement gradient: 4.2% when attendance increased, 5.3%–5.5% when stable or declining but still active, 16.8% when inactive in both periods and 17.2% for members who stopped attending.",
                            zh: "退会率随参与度下降逐级上升：到店增加的为 4.2%，稳定或下降但仍活跃的为 5.3%—5.5%，两期都未到店的为 16.8%，停止到店的达 17.2%。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-age-x-tenure.png",
                        title: {
                            en: "Age × tenure",
                            zh: "年龄 × 会龄"
                        },
                        caption: {
                            en: "Age matters mainly early in the membership: under 3 years, 18–29-year-olds churned at 17.7% and 30–44-year-olds at 15.1%; beyond 8 years every age group stayed below 5%.",
                            zh: "年龄差异主要出现在入会早期：会龄 3 年以内，18—29 岁退会率 17.7%，30—44 岁 15.1%；会龄 8 年以上各年龄段均低于 5%。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-mosaic-x-tenure.png",
                        title: {
                            en: "MOSAIC segment × tenure",
                            zh: "MOSAIC 分群 × 会龄"
                        },
                        caption: {
                            en: "Differences between MOSAIC segments appear mainly among members under 3 years (about 10%–16%); after 3 years the segments sit closer together, all below the 7.2% average.",
                            zh: "分群差异主要出现在会龄 3 年以内的会员中（约 10%—16%）；3 年以后各分群差距收窄，均低于 7.2% 的整体水平。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-club-x-tenure.png",
                        title: {
                            en: "Club × tenure",
                            zh: "俱乐部 × 会龄"
                        },
                        caption: {
                            en: "Part of the gap between clubs reflects their tenure mix, but club DC still stands out among newer members (14.2% against 8.6%–12.5% at the other clubs).",
                            zh: "俱乐部之间的差异部分来自会龄结构，但在会龄 3 年以内的会员中，DC 俱乐部仍明显偏高（14.2%，其他俱乐部为 8.6%—12.5%）。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-service-breadth.png",
                        title: {
                            en: "Breadth of service use",
                            zh: "服务使用广度"
                        },
                        caption: {
                            en: "Members who used no service category in the previous year churned at about 10%, against 6.2% with one category and 4.1% with two or more.",
                            zh: "过去一年未使用任何服务类别的会员退会率约 10%，使用 1 类为 6.2%，2 类及以上为 4.1%。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-booking-attendance.png",
                        title: {
                            en: "Booking follow-through",
                            zh: "预约履约情况"
                        },
                        caption: {
                            en: "Members who attended 80%+ of their confirmed bookings churned at 3.5%, against 8.9% for members with no confirmed bookings, so realised attendance adds information beyond booking counts.",
                            zh: "确认预约履约率在 80% 以上的会员退会率 3.5%，没有确认预约的为 8.9%：实际到场比单纯的预约次数提供了更多信息。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-distributions.png",
                        title: {
                            en: "Distributions: churned vs retained",
                            zh: "分布对比：流失与留存会员"
                        },
                        caption: {
                            en: "Cumulative distributions show churned members with shorter tenure, fewer recent visits, longer gaps since their last visit, purchase and booking, and lower two-year ancillary spend.",
                            zh: "累积分布显示，流失会员会龄更短、近期到店更少，距上次到店、消费和预约的间隔更长，两年附加消费也更低。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a1-skewness.png",
                        title: {
                            en: "Skewness check before modelling",
                            zh: "建模前的偏度检查"
                        },
                        caption: {
                            en: "Activity and spend variables are strongly right-skewed (two-year spend skewness about 5.8); a log(1 + x) transform brings them to roughly −0.4 to 1.2.",
                            zh: "活动与消费变量明显右偏（两年消费偏度约 5.8），经 log(1 + x) 变换后降至约 −0.4 到 1.2。"
                        }
                    }
                ]
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-eda-engagement.png",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "Team EDA: Engagement Patterns Associated with Churn",
                    zh: "小组 EDA：与退会相关的参与度模式"
                },
                caption: {
                    en: "A: churners already attend less and decline further approaching T0. B: among members last seen 31–90 days earlier, a falling visit rate lifts churn from 6.5% to 14.2%. C: final-90-day inactivity matters even for members active over six months (sales 9.1% vs 4.0%, bookings 10.3% vs 4.0%). D: a future booking known at T0 goes with 1.7% churn vs 7.9% without. Intervals use 2,000 household bootstrap resamples.",
                    zh: "A：流失会员本来到店就少，临近 T0 还在继续下降。B：上次到店在 31—90 天前的会员中，到店率下降者退会率 14.2%，稳定者 6.5%。C：即使过去半年活跃，最后 90 天沉寂仍对应更高退会（消费 9.1% 对 4.0%，预约 10.3% 对 4.0%）。D：T0 时已有未来预约的退会率 1.7%，没有的 7.9%。区间按家庭重抽样 2,000 次计算。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-model-comparison.png",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Outer-CV F1 by Model",
                    zh: "各模型的外层交叉验证 F1"
                },
                caption: {
                    en: "Large dots pool all 12,272 members; small dots are the five outer folds. The spread between folds is wider than the gaps between models, so no model was declared a clear winner on F1.",
                    zh: "大点为全部 12,272 名会员的汇总结果，小点为 5 个外层折。折与折之间的差异大于模型之间的差距，因此不能仅凭 F1 断定哪个模型更好。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-calibration.png",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Calibration by Risk Decile",
                    zh: "按风险十分位的校准情况"
                },
                caption: {
                    en: "The final XGBoost is calibrated as delivered (mean 7.1% vs 7.2% observed, slope 0.99); CatBoost's raw scores overstate risk until a Platt correction fitted inside training.",
                    zh: "最终 XGBoost 无需额外处理即校准良好（平均预测 7.1%，实际 7.2%，斜率 0.99）；CatBoost 原始分数高估风险，需要在训练集内做 Platt 校正。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-gains-long-tenure.png",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Ranking Quality and the Long-tenure Blind Spot",
                    zh: "排序效果与老会员盲区"
                },
                caption: {
                    en: "The riskiest fifth of members holds over half of all churners, but long-tenure churners are rarely flagged by a single cut-off even though ranking within those bands still works.",
                    zh: "风险最高的 20% 会员覆盖一半以上的退会者；但老会员在统一阈值下很少被标记，尽管在各会龄段内部排序仍然有效。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Random Forest and CatBoost Pipelines",
                    zh: "随机森林与 CatBoost 各版本表现"
                },
                columns: {
                    en: ["Pipeline", "F1 (pooled)", "F1 (fold mean)", "Fold SD", "Precision", "Recall", "ROC-AUC", "AP"],
                    zh: ["版本", "F1（汇总）", "F1（各折平均）", "各折标准差", "精确率", "召回率", "ROC-AUC", "AP"]
                },
                rows: [
                    [{ en: "CatBoost, tuned, five-seed average", zh: "CatBoost，调参，五种子平均" }, "0.303", "0.305", "0.047", "0.249", "0.388", "0.782", "0.245"],
                    [{ en: "CatBoost, library defaults", zh: "CatBoost，默认参数" }, "0.298", "0.297", "0.034", "0.238", "0.400", "0.779", "0.238"],
                    [{ en: "CatBoost, tuned, single seed", zh: "CatBoost，调参，单种子" }, "0.291", "0.289", "0.030", "0.228", "0.402", "0.780", "0.239"],
                    [{ en: "Random Forest, tuned", zh: "随机森林，调参" }, "0.285", "0.279", "0.054", "0.231", "0.372", "0.771", "0.235"],
                    [{ en: "Random Forest, library defaults", zh: "随机森林，默认参数" }, "0.257", "0.254", "0.028", "0.187", "0.411", "0.739", "0.203"]
                ],
                highlightRow: 0,
                caption: {
                    en: "12,272 labelled members under the team's flag-share rule. F1, precision and recall are pooled over all held-out members; ROC-AUC and AP are means over the five outer folds. CatBoost's 0.018 lead over the tuned forest sits within a 95% interval of −0.001 to +0.037, so it is the higher-scoring option rather than a demonstrably better algorithm.",
                    zh: "12,272 名有标签会员，统一使用小组的名单比例规则。F1、精确率与召回率为全部验证会员的汇总值；ROC-AUC 与 AP 为 5 个外层折的平均。CatBoost 比调参后的随机森林高 0.018，但 95% 区间为 −0.001 到 +0.037，因此只能说它得分更高，不能说它明显更好。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "What the Tree Ensembles Learned",
                    zh: "树集成模型学到了什么"
                },
                columns: {
                    en: ["Predictor", "Rank, Random Forest", "Rank, CatBoost", "Direction (CatBoost SHAP)"],
                    zh: ["变量", "随机森林排名", "CatBoost 排名", "方向（CatBoost SHAP）"]
                },
                rows: [
                    [{ en: "Days since last club visit", zh: "距上次到店天数" }, 1, 1, { en: "Longer gap raises risk", zh: "间隔越长风险越高" }],
                    [{ en: "Age", zh: "年龄" }, 5, 2, { en: "Older members carry lower risk", zh: "年龄越大风险越低" }],
                    [{ en: "Tenure in years", zh: "会龄（年）" }, 2, 3, { en: "Longer tenure lowers risk", zh: "会龄越长风险越低" }],
                    [{ en: "Primary member's visit rate, last six months", zh: "主账户持有人近 6 个月到店率" }, 10, 4, { en: "Higher rate lowers risk", zh: "到店率越高风险越低" }],
                    [{ en: "Change in booking rate, last six months vs the six before", zh: "近 6 个月预约率相对前 6 个月的变化" }, 21, 5, { en: "A fall raises risk", zh: "下降则风险升高" }],
                    [{ en: "Days since the primary member's last purchase", zh: "主账户持有人距上次消费天数" }, 37, 6, { en: "Longer gap raises risk, weakly", zh: "间隔越长风险略高" }],
                    [{ en: "Membership tier", zh: "会籍等级" }, 14, 7, { en: "Categorical, no single direction", zh: "分类变量，无单一方向" }],
                    [{ en: "Months of observable spending history", zh: "可观察的消费历史月数" }, 6, 8, { en: "Shorter history raises risk", zh: "历史越短风险越高" }],
                    [{ en: "Visits in the last 90 days", zh: "近 90 天到店次数" }, 4, 9, { en: "More visits lower risk", zh: "到店越多风险越低" }],
                    [{ en: "Primary member's share of administrative bookings", zh: "主账户持有人的行政类预约占比" }, 49, 10, { en: "Higher share raises risk", zh: "占比越高风险越高" }],
                    [{ en: "Days of observable attendance history", zh: "可观察的到店历史天数" }, 9, 11, { en: "Shorter history raises risk", zh: "历史越短风险越高" }],
                    [{ en: "Share of visits in the evening", zh: "晚间到店占比" }, 7, 14, { en: "Higher share raises risk", zh: "占比越高风险越高" }],
                    [{ en: "Visit rate, last six months", zh: "近 6 个月到店率" }, 3, 165, { en: "Higher rate lowers risk", zh: "到店率越高风险越低" }],
                    [{ en: "Share of visits at weekends", zh: "周末到店占比" }, 8, 172, { en: "No clear direction", zh: "无明确方向" }]
                ],
                caption: {
                    en: "Ranks among 173 predictors by the mean fall in average precision when a predictor is shuffled on held-out folds. The six-month visit rate ranks 3rd for Random Forest but 165th for CatBoost, because CatBoost falls back on closely correlated visit counts when it is shuffled, even though its SHAP values rank it 7th; ranks are best read as families of signals, and they are predictive associations, not causes.",
                    zh: "按在验证折上打乱某变量后平均精确率（AP）的下降幅度，在 173 个变量中排名。近 6 个月到店率在随机森林中排第 3，在 CatBoost 中却排第 165：打乱它时 CatBoost 会改用高度相关的到店次数，尽管其 SHAP 排名为第 7。因此排名应按“一类信号”来理解，而且反映的是预测关联，并非因果。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-shap-xgboost.png",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "Out-of-fold SHAP Explanations for the Final XGBoost",
                    zh: "最终 XGBoost 的折外 SHAP 解释"
                },
                caption: {
                    en: "Tenure and days since the last visit carry the most weight; SHAP explains model scores, not causes, but gives each flagged member a reason that staff can act on.",
                    zh: "会龄与距上次到店天数贡献最大；SHAP 解释的是模型分数而非因果，但能为每位被标记的会员给出员工可执行的理由。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-model-diversity.png",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Why Stacking Was Worth Testing",
                    zh: "为什么值得尝试模型堆叠"
                },
                caption: {
                    en: "Logistic regression ranks members differently from the tree models (rank correlation 0.81–0.89) and catches 29 churners no other model flags, so combining models could plausibly help.",
                    zh: "逻辑回归与树模型的排序差异较大（秩相关 0.81—0.89），并能抓到 29 个其他模型都漏掉的退会者，因此组合模型有可能带来提升。"
                }
            },
            {
                type: "image",
                src: "assets/img/projects/next-gen-clubs/a2-nested-stack.png",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "Nested Stack vs Fixed Combinations",
                    zh: "嵌套堆叠与固定组合的比较"
                },
                caption: {
                    en: "The stack is chosen on training folds only; the 22 fixed combinations are shown for description. Picking the best of them after seeing outer results would repeat the leak in another form.",
                    zh: "堆叠模型只在训练折内选择；22 种固定组合仅作描述。看过外层结果再挑最好的组合，等于换一种方式重复信息泄漏。"
                }
            },
            {
                type: "gallery",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "Diagnostics from the Model Tracks",
                    zh: "各模型分支的诊断图"
                },
                caption: {
                    en: "Supporting checks behind the comparison: logistic regression, Random Forest and CatBoost, and the nested stack. Click a figure to open it full size.",
                    zh: "模型比较背后的补充检查：逻辑回归、随机森林与 CatBoost，以及嵌套堆叠。点击图片可查看原图。"
                },
                images: [
                    {
                        src: "assets/img/projects/next-gen-clubs/a2-logistic-household.png",
                        title: {
                            en: "Logistic regression: fold spread and household score sharing",
                            zh: "逻辑回归：各折差异与家庭分数共享"
                        },
                        caption: {
                            en: "Held-out F1 ranged from 0.254 to 0.336 across folds (pooled 0.286). Blending each member's score with the household mean gave +0.009 (95% interval −0.005 to +0.021), so it was rejected under the pre-set rule.",
                            zh: "各折 F1 在 0.254—0.336 之间（汇总 0.286）。把会员分数与家庭平均分混合后提升 +0.009（95% 区间 −0.005 到 +0.021），按事先规则不采用。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a2-logistic-selection.png",
                        title: {
                            en: "Logistic regression: feature-selection stability",
                            zh: "逻辑回归：特征选择的稳定性"
                        },
                        caption: {
                            en: "Predictors kept by all three routes (Benjamini–Hochberg score-test filter, recursive feature elimination and L1) ranged from 22 to 49 across outer folds, 31 on the full sample; panel B shows which survive most consistently.",
                            zh: "三种方法（BH 校正的得分检验筛选、递归特征消除与 L1）都保留的变量在各外层折中为 22—49 个，全样本为 31 个；B 图显示最稳定入选的变量。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a2-rf-catboost-differences.png",
                        title: {
                            en: "Random Forest and CatBoost: what actually helped (my part)",
                            zh: "随机森林与 CatBoost：哪些改动真正有效（本人负责）"
                        },
                        caption: {
                            en: "Paired household-bootstrap differences in F1: only Random Forest tuning (+0.028) and CatBoost five-seed averaging (+0.013) have intervals above zero; tuning CatBoost beyond its defaults and changing the decision rule did not.",
                            zh: "按家庭配对 bootstrap 的 F1 差异：只有随机森林调参（+0.028）与 CatBoost 五种子平均（+0.013）的区间在 0 以上；CatBoost 在默认参数上再调参、改变判定规则都没有显著效果。"
                        }
                    },
                    {
                        src: "assets/img/projects/next-gen-clubs/a2-stack-by-fold.png",
                        title: {
                            en: "What the nested stack chose in each fold (my part)",
                            zh: "嵌套堆叠在各折中的选择（本人负责）"
                        },
                        caption: {
                            en: "Logistic regression + XGBoost in three folds and logistic regression + CatBoost + XGBoost in two; Random Forest was never selected.",
                            zh: "三个折选择逻辑回归 + XGBoost，两个折选择逻辑回归 + CatBoost + XGBoost；随机森林从未入选。"
                        }
                    }
                ]
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · my part (group report)",
                    zh: "作业 2 · 本人负责（小组报告）"
                },
                title: {
                    en: "All Candidate Models Compared",
                    zh: "全部候选模型对比"
                },
                columns: {
                    en: ["Model", "CV F1", "Precision", "Recall", "PR-AUC", "Kaggle public F1"],
                    zh: ["模型", "交叉验证 F1", "精确率", "召回率", "PR-AUC", "Kaggle 公开榜 F1"]
                },
                rows: [
                    [{ en: "XGBoost, full (final model) †", zh: "XGBoost 全量（最终模型）†" }, "0.295", "0.231", "0.406", "0.254", "0.457"],
                    [{ en: "Stacked model", zh: "堆叠模型" }, "0.300", "0.247", "0.382", "0.241", "0.439"],
                    [{ en: "CatBoost", zh: "CatBoost" }, "0.303", "0.249", "0.388", "0.241", "0.438"],
                    [{ en: "LightGBM, full †", zh: "LightGBM 全量 †" }, "0.295", "0.229", "0.415", "0.252", "0.407"],
                    [{ en: "Logistic regression", zh: "逻辑回归" }, "0.286", "0.233", "0.369", "0.218", "0.456"],
                    [{ en: "Random Forest", zh: "随机森林" }, "0.285", "0.231", "0.372", "0.232", "0.409"]
                ],
                highlightRow: 0,
                caption: {
                    en: "Pooled outer-CV results on 12,272 labelled members; PR-AUC is the mean over five folds. † Evaluated on the original household folds with fold-specific cut-offs, so comparisons with the other models are unmatched. A random list would have precision 0.072. The public leaderboard covers only part of the 1,350 hidden members, and its order does not follow CV.",
                    zh: "12,272 名有标签会员的外层交叉验证汇总结果；PR-AUC 为 5 折平均。† 在原始家庭折上评估并使用各折各自的阈值，与其他模型并非严格配对比较。随机名单的精确率为 0.072。公开榜只覆盖 1,350 名隐藏会员中的一部分，排名与交叉验证结果并不一致。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "What Each Contact Budget Delivers",
                    zh: "不同联系规模能覆盖多少退会者"
                },
                columns: {
                    en: ["Members contacted", "Members (of 12,272)", "Leavers on list", "Leavers per 100 contacted", "Share of all leavers"],
                    zh: ["联系比例", "会员数（共 12,272）", "名单中的退会者", "每 100 人中的退会者", "占全部退会者"]
                },
                rows: [
                    ["5%", 615, 207, 34, "24%"],
                    ["10%", 1227, 312, 25, "35%"],
                    ["15%", 1840, 408, 22, "46%"],
                    ["20%", 2455, 486, 20, "55%"],
                    ["30%", 3680, 592, 16, "67%"]
                ],
                caption: {
                    en: "Members ranked within each outer fold by the final XGBoost's held-out predictions. Random contact reaches about 7 leavers per 100.",
                    zh: "按最终 XGBoost 的折外预测在每个外层折内排序。随机联系每 100 人约能覆盖 7 个退会者。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "90-day Household Retention Pilot: One Quarter (Illustrative)",
                    zh: "90 天家庭挽留试点：单季度测算（示意）"
                },
                columns: {
                    en: ["Group", "Households", "Members", "Leavers", "Contacted", "Save rate", "Saved", "Cost (AUD)", "Revenue (AUD)"],
                    zh: ["分组", "家庭数", "会员数", "退会者", "实际联系", "挽回率", "挽回人数", "成本（澳元）", "收入（澳元）"]
                },
                rows: [
                    [{ en: "Tier 1: personal call", zh: "Tier 1：电话联系" }, 496, 780, 241, 397, "10%", 19, "13,200", "47,200"],
                    [{ en: "Tier 2: app message", zh: "Tier 2：App 消息" }, 1400, 1726, 249, 1120, "5%", 10, "1,100", "24,400"],
                    [{ en: "Long-tenure list", zh: "老会员名单" }, 225, 242, 19, 180, "5%", 1, "900", "1,900"],
                    [{ en: "Set-up, scoring and evaluation", zh: "搭建、评分与评估" }, "–", "–", "–", "–", "–", "–", "5,000", "–"],
                    [{ en: "Total", zh: "合计" }, 2121, 2748, 509, 1697, "", 30, "20,200", "73,500"]
                ],
                highlightRow: 4,
                caption: {
                    en: "List sizes and leavers come from the model's out-of-fold predictions; save rates, costs and member value are stated assumptions, and a random fifth of households is held back as a control to measure the real effect.",
                    zh: "名单规模与退会者来自模型折外预测；挽回率、成本与会员价值均为明确列出的假设，并随机保留五分之一家庭作为对照组来衡量真实效果。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Assignment 2 · group report",
                    zh: "作业 2 · 小组报告"
                },
                title: {
                    en: "How Sensitive Is the Pilot Estimate? (AUD, one quarter)",
                    zh: "试点测算的敏感性（澳元，单季度）"
                },
                columns: {
                    en: ["Scenario", "Revenue retained", "Cost", "Net benefit"],
                    zh: ["情景", "保住的收入", "成本", "净收益"]
                },
                rows: [
                    [{ en: "As assumed", zh: "基准假设" }, "73,500", "20,200", "+53,300"],
                    [{ en: "Save rates halved", zh: "挽回率减半" }, "36,800", "20,200", "+16,500"],
                    [{ en: "Fee halved (A$1,200)", zh: "会费减半（1,200 澳元）" }, "37,500", "20,200", "+17,300"],
                    [{ en: "Save rates and fee both halved", zh: "挽回率与会费同时减半" }, "18,800", "20,200", "−1,500"]
                ],
                caption: {
                    en: "The data contain no fee field, so a saved member is valued at an assumed A$2,400 annual fee plus about A$50 of ancillary spend (gross revenue over a year, not profit). A Tier 1 contact costs about A$33 (20 minutes of staff time plus a A$40 session taken up by half of those offered), an app message A$1, loyalty recognition A$5, and set-up, scoring and evaluation A$5,000 a quarter. Tier 1 breaks even at a 2.8% save rate.",
                    zh: "数据中没有会费字段，因此挽回一名会员的价值按假设的年费 2,400 澳元加约 50 澳元附加消费计算（一年的总收入，并非利润）。Tier 1 每次联系约 33 澳元（20 分钟员工时间，加上约一半家庭会接受的 40 澳元体验课），App 消息 1 澳元，老会员关怀 5 澳元，搭建、评分与评估每季度 5,000 澳元。Tier 1 挽回率达到 2.8% 即可保本。"
                }
            },
            {
                type: "process",

                title: {
                    en: "Modelling & Pilot Workflow (Assignment 2)",
                    zh: "建模与试点流程（作业 2）"
                },

                steps: {
                    en: [
                        "6 raw tables → 1 row per member",
                        "Leakage-safe features",
                        "Family-grouped nested CV",
                        "Paired bootstrap comparison",
                        "Final model: XGBoost",
                        "Randomised 90-day pilot"
                    ],
                    zh: [
                        "6 张原始表 → 一人一行",
                        "防时间泄漏的特征",
                        "按家庭分组的嵌套交叉验证",
                        "配对 bootstrap 比较",
                        "最终模型：XGBoost",
                        "随机对照 90 天试点"
                    ]
                },

                caption: {
                    en: "Validation was grouped by family because 12,272 members belonged to only 9,067 households.",
                    zh: "12,272 名会员仅分属 9,067 个家庭，因此验证按家庭分组，避免同一家庭同时出现在训练与测试中。"
                }
            }
        ],

        details: {
            en: [
                {
                    title: "Assignment 1 · Data Engineering (individual)",
                    bullets: [
                        "Audited and merged the member, label, attendance, sales, booking and MOSAIC files: 13,622 members, 2,692,253 attendance records, 883,294 sales lines and 709,049 bookings, checking IDs, duplicates, date ranges and 393 orphan household links.",
                        "Restricted every behavioural feature to information available before T0 (19 July 2024) and split bookings into historical activity (698,676) and future commitments already known at T0 (9,699), with explicit leakage checks.",
                        "Engineered intensity, recency, trajectory (recent vs previous 90 days), structural-absence, service-breadth and household features, producing 180 columns for 12,272 labelled members (879 churners, 7.16%)."
                    ]
                },
                {
                    title: "Assignment 1 · Exploratory Analysis (individual)",
                    bullets: [
                        "Screened 134 numeric candidates by correlation with churn and within-domain redundancy, and categorical attributes with chi-square tests and Cramér's V, narrowing to a 26-feature evidence-based shortlist.",
                        "Churn falls from 16.3% for members under 1.5 years to 2.3% beyond 12 years, and rises from 2.9% when the last visit was within a week to 17.2% after 91–180 days.",
                        "Members inactive in attendance, spending and bookings churned at 13.8% vs 3.4% when active in all three; a future booking known at T0 cut churn among members under 3 years from 13.3% to 3.4%.",
                        "Combined profiles separate risk sharply (23.1% vs 1.6%); every rate is reported with its member count and a Wilson 95% interval."
                    ]
                },
                {
                    title: "Assignment 2 · Team Data Processing & Findings",
                    bullets: [
                        "Scope: 13,622 members (12,272 labelled for development plus 1,350 unlabelled Kaggle test members), a history window from 21 July 2022 to the end of 19 July 2024, and a 90-day outcome window. All six files were audited against the data dictionary; four exact duplicate booking rows were removed.",
                        "The team's modelling table held 173 candidate variables for 12,272 labelled members from 9,067 families; activity rates were measured over each member's own exposure window, from a valid join date or the start of the data, whichever was later.",
                        "Validity rules were stated rather than hidden: an age of 126 and the default join date of 1 January 1990 were invalidated, age recorded in 2026 was shifted back two years to approximate age at T0, booking records entered after the activity started were excluded from planning measures, and swipes within 20 minutes were merged into one visit.",
                        "Missing data were kept explicit: 50 ages and 238 tenures stayed unavailable after the validity checks, 1,507 labelled members had no visit history and 3,872 no booking history. Genuine absences became zeros, while undefined recencies and rates stayed missing with no-history flags.",
                        "Predictors were organised into four nested sets, from a Core set (age, tenure, recency, recent attendance and purchasing) to an Expanded set adding service breadth, future bookings, household features, spending mix, trajectories and MOSAIC segments.",
                        "Other risk markers: members with no visit for more than 90 days churned at 17.1% against 3.1% for those seen in the past week; second-year members at 14.8% (54% of all leavers); members aged 26–35 at 13.9%; club DC at 12.2% against 5.5%–6.8% elsewhere. These are risk markers, not causes.",
                        "Family effect: of the 446 members whose family member churned, 380 (85%) churned too.",
                        "Long-tenure blind spot: members with 3+ years made up 57% of members and 28% of churn, yet a single ranked list caught only 20 of their 247 churners; churners' median time since last visit was 78 days vs 4 days for retained members."
                    ]
                },
                {
                    title: "Assignment 2 · Random Forest, CatBoost & SHAP-screened XGBoost (my part)",
                    bullets: [
                        "Why tree ensembles: churn depends on combinations of behaviour, such as a recent absence plus falling attendance, and trees learn these interactions without specifying them and can treat missing values as information. Random Forest averages hundreds of deep trees to steady a noisy outcome with only 879 churners; CatBoost grows shallow trees sequentially and encodes the 16 nominal predictors with ordered target statistics, so a member's own outcome never leaks into their encoding.",
                        "Leakage-safe tuning: encoding, tuning, tree count and flag rate were all refitted inside the training folds, so every member was scored strictly out of fold. Each family got the same pre-declared budget of eleven configurations (one near the library defaults plus ten random draws), ranked by inner F1 with ties broken by average precision, and untuned defaults were run on the same folds to measure what tuning was worth.",
                        "Tested four pre-declared improvements with a Bonferroni correction (five-seed averaging for CatBoost, habit-relative features for both, redundancy pruning for Random Forest); only seed averaging passed (+0.013). Tuning lifted Random Forest F1 by 0.028 (interval +0.010 to +0.046), mostly by raising the minimum leaf size to 20 instead of memorising single members; tuning CatBoost did not beat its well-regularised defaults.",
                        "Results: CatBoost (five-seed average) reached F1 0.303, precision 0.249, recall 0.388 and ROC-AUC 0.782, the highest F1 of all models; the tuned forest reached 0.285. Ranked within each fold, CatBoost's riskiest tenth churned at 25.7% (3.6× the base rate) and its riskiest fifth held 53% of churners.",
                        "Calibration: because two folds selected class weighting, raw CatBoost scores overstated risk (mean 0.115 against 0.072 observed, slope 0.78); Platt scaling fitted only on each fold's inner predictions brought them to 0.074 and 1.006 without changing who is flagged.",
                        "Diagnostics: permutation importance ranks days since the last visit first in both models, with tenure and age in the top five; beyond three years of tenure recall falls to 1%–7% while within-band ROC-AUC stays at 0.72–0.79, showing that long-tenure churn is a cut-off problem rather than a lack of signal, which led to the separate long-tenure list in the pilot.",
                        "Sensitivity: replacing the household-blending rule with the team's flag-share rule changed F1 by +0.005 for CatBoost and −0.003 for Random Forest, both intervals crossing zero; the Kaggle public scores (0.438–0.463) differ by only a few dozen decisions and exceed every CV estimate, so they were not used to rank models.",
                        "SHAP-screened XGBoost for the stack: inside each outer-training sample, SHAP guided a reduced predictor set (65–146 of 173 across folds) and the settings, all refitted with fold-local encoders and equal class weights; it exported inner out-of-fold predictions on the team folds so that it could enter the nested stack, and it was part of the selected stack in all five folds."
                    ]
                },
                {
                    title: "Assignment 2 · Teammates' Model Tracks",
                    bullets: [
                        "Regularised logistic regression as the interpretable baseline: 164 predictors after removing algebraically redundant terms; a predictor was kept only if a Benjamini–Hochberg score-test filter, recursive feature elimination and L1 all selected it (22–49 per fold, 31 on the full sample); L2 with C = 0.03 was chosen. Pooled F1 0.286, ROC-AUC 0.767.",
                        "Full XGBoost and LightGBM on all 173 predictors with native missing-value handling: tree count chosen by inner log loss and the cut-off by inner F1; class weights of 6.5× and 13× were tested and equal weights won. Both reached F1 ≈ 0.295; training F1 still exceeded held-out F1 by 0.12–0.15, a sign of remaining overfitting. The full XGBoost became the final model.",
                        "Every family relies on the same core signals: tenure and time since the last visit rank first and second in the XGBoost and LightGBM SHAP explanations, with recent visits and age close behind; correlated activity measures share credit."
                    ]
                },
                {
                    title: "Assignment 2 · Model Integration, Stacking & Selection (my part)",
                    bullets: [
                        "Compared six model families with family-grouped nested cross-validation (F1: CatBoost 0.303, stacking 0.300, XGBoost 0.295, among others); the 95% intervals of every pairwise difference crossed zero.",
                        "Found that the first stacking combiner had used predictions that had seen the test folds; once rebuilt fully nested it no longer beat the best single model, so, as agreed in advance, stacking was not deployed.",
                        "Set up the comparison protocol: checksum checks that every delivered file matched its fold assignment, one flag-share operating rule for all team-fold pipelines, and a paired household bootstrap (2,000 resamples) in which a difference counts only if its 95% interval excludes zero.",
                        "Built the nested stack from 22 candidates (every subset of two to four models, combined by rank averaging or a non-negative logistic regression on calibrated log-odds), with each outer fold's combiner trained only on inner out-of-fold predictions.",
                        "Selected XGBoost (PR-AUC 0.254, ROC-AUC 0.784, calibration slope 0.99, mean predicted churn 7.1% vs 7.2% actual). Because this departed from the pre-set rule that favoured CatBoost's point estimate, the report states the basis explicitly: stronger ranking measures and calibrated scores without an extra correction step.",
                        "The top-10% risk list churned at 3.5× the average and covered 35% of churners; the top 20% covered 55%. Public Kaggle F1 was 0.457, read as optimistic because the choice was made after seeing the leaderboard; internal CV F1 was about 0.30."
                    ]
                },
                {
                    title: "Assignment 2 · 90-Day Family Retention Pilot",
                    bullets: [
                        "Every active member is scored each quarter. Tier 1 is the riskiest 5% (a personal call, with a complimentary personal training session or a membership freeze where it helps); Tier 2 is the next 15% (a personalised app message and class invitation); a separate long-tenure list takes 3+-year members in the top 10% of their own group (low-cost loyalty recognition). That is about 496, 1,400 and 225 households.",
                        "The household is the unit of action and of randomisation: one contact per household through the primary account holder, no repeat contact within 90 days, and a random fifth of each list held back as an untreated control, because the model predicts who will leave, not who can be persuaded to stay.",
                        "Estimated a quarterly cost of about A$20,000 against about A$73,500 of protected revenue (about 1 : 3.6); a 2.8% save rate in Tier 1 is enough to break even. Net benefit falls to about A$16,500–17,300 if save rates or the fee are halved, and turns slightly negative (about −A$1,500) if both are. Save rates and costs are scenario assumptions, not measured effects.",
                        "Rollout rule: Tier 1 means about 31 calls a week, around five per club. With 397 households contacted and 99 held back, one quarter gives an interval of about ±12 percentage points, so the first quarter tests operations (reach, uptake and cost), and expansion needs at least two matured quarters with a Tier 1 save rate above break-even.",
                        "Turned scores into decisions with a simple rule: contact a member when p × s × V exceeds c (churn probability × chance contact saves them × value of a saved membership vs contact cost). The F1-optimal cut-offs (about 13%–20% risk) are cost-optimal only if a missed churner costs four to seven times a wasted contact.",
                        "Supporting recommendations: use each member's SHAP reasons to personalise the conversation, record contract end dates, fees, app activity and cancellation reasons under the Australian and New Zealand privacy principles, retrain quarterly with drift checks, and do not deploy the stack."
                    ]
                }
            ],

            zh: [
                {
                    title: "作业 1 · 数据工程（个人）",
                    bullets: [
                        "审计并合并会员、标签、到店、消费、预约与 MOSAIC 数据：13,622 名会员、2,692,253 条到店记录、883,294 条消费明细、709,049 条预约，逐项核查 ID、重复、日期范围及 393 条孤立的家庭关联记录。",
                        "所有行为特征只使用预测日 T0（2024 年 7 月 19 日）之前的信息；将预约拆分为历史活动（698,676 条）与 T0 时已知的未来承诺（9,699 条），并做显式泄漏检查。",
                        "构造强度、近期性、变化趋势（近 90 天对比前 90 天）、结构性缺失、服务广度与家庭特征，得到 12,272 名有标签会员、180 列的数据集（879 名退会者，7.16%）。"
                    ]
                },
                {
                    title: "作业 1 · 探索性分析（个人）",
                    bullets: [
                        "按与退会的相关性和同类特征间的冗余度筛选 134 个数值候选特征，并用卡方检验与 Cramér's V 筛选分类属性，最终形成 26 个有证据支撑的候选特征。",
                        "会龄不足 1.5 年的会员退会率 16.3%，12 年以上降至 2.3%；一周内到过店的为 2.9%，间隔 91—180 天的升至 17.2%。",
                        "到店、消费、预约三项都沉寂的会员退会率 13.8%，三项都活跃的为 3.4%；会龄 3 年以内的会员中，T0 时已有未来预约可使退会率由 13.3% 降至 3.4%。",
                        "组合画像对风险的区分非常明显（23.1% 对 1.6%）；所有比率都同时报告样本量与 Wilson 95% 置信区间。"
                    ]
                },
                {
                    title: "作业 2 · 小组数据处理与发现",
                    bullets: [
                        "范围：13,622 名会员（12,272 名有标签的建模会员 + 1,350 名无标签的 Kaggle 测试会员），历史窗口为 2022 年 7 月 21 日至 2024 年 7 月 19 日结束，结果窗口为 90 天。6 个文件均对照数据字典审计，删除 4 条完全重复的预约记录。",
                        "小组建模表包含 173 个候选变量，覆盖 12,272 名有标签会员，分属 9,067 个家庭；活动率按每位会员自己的观察窗口计算，起点取有效入会日与数据起始日中较晚者。",
                        "有效性规则公开说明：年龄 126 岁与默认入会日 1990-01-01 视为无效；2026 年记录的年龄减 2 岁以近似 T0 时的年龄；活动开始后才录入的预约不计入计划类指标；20 分钟内的多次刷卡合并为一次到店。",
                        "缺失值明确标注：有效性检查后仍有 50 个年龄与 238 个会龄不可用，1,507 名有标签会员没有到店记录、3,872 名没有预约记录。真实的“没有发生”记为 0，无法定义的间隔与比率保留缺失并加“无历史”标记。",
                        "变量分为四个逐层扩展的集合：从核心集（年龄、会龄、近期性、近期到店与消费）到扩展集，逐步加入服务广度、未来预约、家庭特征、消费结构、变化趋势与 MOSAIC 分群。",
                        "其他风险信号：超过 90 天未到店的会员退会率 17.1%，一周内到过店的为 3.1%；入会第二年的会员为 14.8%（占全部退会者 54%）；26—35 岁会员为 13.9%；DC 俱乐部为 12.2%，其他俱乐部为 5.5%—6.8%。这些都是风险标记，并非成因。",
                        "家庭效应：家里有人退会的 446 人中，380 人（85%）也退会。",
                        "老会员盲区：入会 3 年以上的会员占会员 57%、占退会 28%，统一名单只抓到其中 20 / 247 个退会者；流失者距上次到店中位数 78 天，留存者仅 4 天。"
                    ]
                },
                {
                    title: "作业 2 · 随机森林、CatBoost 与 SHAP 筛选版 XGBoost（本人负责）",
                    bullets: [
                        "为什么用树集成：退会取决于行为的组合（例如最近缺勤又叠加到店下降），树模型无需事先指定就能学到这类交互，并能把缺失本身当作信息。随机森林平均数百棵深树，让只有 879 个退会者的噪声结果更稳定；CatBoost 依次生长浅树，并用有序目标统计编码 16 个分类变量，保证会员自己的结果不会泄漏进编码。",
                        "防泄漏调参：编码、调参、树的数量和标记比例全部在训练折内重新拟合，每位会员都严格按折外方式打分。两类模型使用相同的预设预算——11 组参数（1 组接近默认值，10 组随机抽取），按内层 F1 排序、平局看平均精确率；同时在相同折上跑未调参的默认版本，用来衡量调参的价值。",
                        "用 Bonferroni 校正检验了 4 项预先声明的改进（CatBoost 五种子平均、两类模型的“相对习惯”特征、随机森林的冗余剪枝），只有种子平均通过（+0.013）。调参使随机森林 F1 提升 0.028（区间 +0.010 到 +0.046），主要是把最小叶子样本数提高到 20，避免记住单个会员；CatBoost 再调参没有超过其本身正则良好的默认参数。",
                        "结果：CatBoost（五种子平均）F1 0.303、精确率 0.249、召回率 0.388、ROC-AUC 0.782，是所有模型中 F1 最高的；调参后的随机森林为 0.285。在各折内排序后，CatBoost 风险最高的 10% 退会率为 25.7%（基准的 3.6 倍），风险最高的 20% 覆盖 53% 的退会者。",
                        "校准：由于有两个折选用了类别权重，CatBoost 原始分数高估风险（平均 0.115，实际 0.072，斜率 0.78）；只用各折内层预测拟合的 Platt 校正将其调整到 0.074 与 1.006，且不改变被标记的会员。",
                        "诊断：置换重要性在两类模型中都把距上次到店天数排第一，会龄与年龄进入前五；会龄 3 年以上时召回率降到 1%—7%，但组内 ROC-AUC 仍有 0.72—0.79，说明老会员流失是统一阈值的问题而非缺少信号，这直接促成了试点中单独的老会员名单。",
                        "敏感性：把家庭混合规则换成小组的名单比例规则后，CatBoost F1 变化 +0.005、随机森林 −0.003，区间均跨过 0；Kaggle 公开榜分数（0.438—0.463）之间只差几十个判定，且都高于所有交叉验证估计，因此不用它给模型排序。",
                        "用于堆叠的 SHAP 筛选版 XGBoost：在每个外层训练样本内，用 SHAP 指导选出精简变量集（各折 65—146 个，共 173 个）与参数，全部用折内编码器与等权重重新拟合；它在小组折上导出内层折外预测，因此可以进入嵌套堆叠，并在全部 5 个折的最终堆叠中都被选中。"
                    ]
                },
                {
                    title: "作业 2 · 组员负责的模型分支",
                    bullets: [
                        "正则化逻辑回归作为可解释基线：去掉代数上冗余的变量后剩 164 个；只有同时被 BH 校正的得分检验、递归特征消除与 L1 选中的变量才保留（各折 22—49 个，全样本 31 个）；最终选择 L2、C = 0.03。汇总 F1 0.286，ROC-AUC 0.767。",
                        "全量 XGBoost 与 LightGBM 使用全部 173 个变量并直接处理缺失值：树的数量按内层对数损失选择，阈值按内层 F1 选择；测试了 6.5 倍与 13 倍的类别权重，最终等权最好。两者 F1 均约 0.295；训练 F1 仍比验证 F1 高 0.12—0.15，说明仍有过拟合。全量 XGBoost 成为最终模型。",
                        "各类模型依赖的核心信号一致：在 XGBoost 与 LightGBM 的 SHAP 解释中，会龄与距上次到店天数排前两位，近期到店与年龄紧随其后；相关的活动变量会分摊重要性。"
                    ]
                },
                {
                    title: "作业 2 · 模型整合、堆叠与选型（本人负责）",
                    bullets: [
                        "用按家庭分组的嵌套交叉验证比较 6 类模型（F1：CatBoost 0.303、堆叠 0.300、XGBoost 0.295 等），两两差异的 95% 区间均跨过 0。",
                        "发现第一版堆叠组合器使用了见过测试折的预测；改为完全嵌套后未超过最佳单模型，按事先约定不上线堆叠。",
                        "制定比较规则：用校验和核对每份交付文件与折分配一致，所有小组折管线统一使用一种名单比例规则，并用按家庭重抽样 2,000 次的配对 bootstrap 检验差异，只有 95% 区间不含 0 才算差异成立。",
                        "搭建嵌套堆叠：共 22 个候选（2—4 个模型的所有组合 × 秩平均或基于校准 log-odds 的非负逻辑回归），每个外层折的组合器只用内层折外预测训练。",
                        "最终选定 XGBoost（PR-AUC 0.254、ROC-AUC 0.784，校准斜率 0.99，平均预测 7.1%、实际 7.2%）。由于这偏离了事先约定（按点估计应选 CatBoost），报告明确写出依据：排序指标更强，且无需额外校准步骤。",
                        "风险前 10% 名单退会率为平均水平的 3.5 倍、覆盖 35% 的退会者；前 20% 覆盖 55%。Kaggle 公开榜 F1 为 0.457，但因选型发生在看过榜单之后，视为偏乐观；内部交叉验证 F1 约 0.30。"
                    ]
                },
                {
                    title: "作业 2 · 90 天家庭挽留试点",
                    bullets: [
                        "每季度为所有在籍会员评分。Tier 1 为风险最高的 5%（电话联系，必要时提供一次免费私教课或冻结会籍以代替退会）；Tier 2 为其后的 15%（个性化 App 消息与课程邀请）；另设老会员名单，选取会龄 3 年以上、在本组内风险前 10% 的会员（低成本的忠诚关怀）。三类分别约 496、1,400 与 225 户。",
                        "以家庭为执行与随机分组单位：每户只联系一次（通过主账户持有人），90 天内不重复联系，每个名单随机保留五分之一家庭作为对照组——因为模型预测的是谁会走，而不是谁能被挽留。",
                        "测算一季度成本约 2 万澳元、保住约 7.35 万澳元收入（约 1 : 3.6）；Tier 1 挽回率达到 2.8% 即可保本。若挽回率或会费减半，净收益降至约 1.65—1.73 万澳元；两者同时减半则略为负（约 −1,500 澳元）。挽回率与成本均为情景假设，并非实测效果。",
                        "推广规则：Tier 1 每周约 31 通电话，每家俱乐部约 5 通。联系 397 户、对照 99 户时，单季度的区间约为 ±12 个百分点，因此第一季度先检验执行（触达、接受率与成本），至少两个季度的 90 天结果成熟且 Tier 1 挽回率高于保本线后才扩大。",
                        "把分数转化为决策：当 p × s × V 大于 c（退会概率 × 联系后挽回的概率 × 挽回会员的价值，对比联系成本）时才联系。F1 最优阈值（约 13%—20% 风险）只有在“漏掉一个退会者的代价是多联系一个人的 4—7 倍”时才是成本最优。",
                        "配套建议：用每位会员的 SHAP 原因定制沟通内容；在澳新隐私原则下补充记录合同到期日、会费、App 活动与退会原因；每季度重训并监控漂移；不上线堆叠模型。"
                    ]
                }
            ]
        },

        code: [
            {
                title: {
                    en: "Leakage-safe trajectory features: recent vs previous 90 days",
                    zh: "防泄漏的趋势特征：近 90 天对比前 90 天"
                },
                language: "Python · pandas",
                source: {
                    en: "Assignment 1 · my code",
                    zh: "作业 1 · 本人代码"
                },
                caption: {
                    en: "Every window ends strictly before the prediction date T0, so no feature can see the outcome period.",
                    zh: "所有时间窗口都严格截止在预测日 T0 之前，任何特征都看不到结果期的信息。"
                },
                code: `start_recent90   = T0 - pd.Timedelta(days=90)
start_previous90 = T0 - pd.Timedelta(days=180)
end_previous90   = T0 - pd.Timedelta(days=90)

recent90_days = (
    attendance_pre[(attendance_pre["ADateTime"] >= start_recent90)
                   & (attendance_pre["ADateTime"] < T0)]
    .groupby("HashID")["AttendDate"].nunique()
    .rename("AttendanceDaysRecent90d")
)
previous90_days = (
    attendance_pre[(attendance_pre["ADateTime"] >= start_previous90)
                   & (attendance_pre["ADateTime"] < end_previous90)]
    .groupby("HashID")["AttendDate"].nunique()
    .rename("AttendanceDaysPrevious90d")
)

# Change between the two windows (absolute and relative)
attendance_features["AttendanceDaysChange90d"] = (
    attendance_features["AttendanceDaysRecent90d"]
    - attendance_features["AttendanceDaysPrevious90d"]
)
attendance_features["AttendanceDaysPctChange90d"] = np.where(
    attendance_features["AttendanceDaysPrevious90d"] > 0,
    (attendance_features["AttendanceDaysRecent90d"]
     - attendance_features["AttendanceDaysPrevious90d"])
    / attendance_features["AttendanceDaysPrevious90d"],
    np.nan,
)`
            },
            {
                title: {
                    en: "Rebuilding households from primary and linked members",
                    zh: "根据主卡与附属卡记录重建家庭关系"
                },
                language: "Python · pandas",
                source: {
                    en: "Assignment 1 · my code",
                    zh: "作业 1 · 本人代码"
                },
                caption: {
                    en: "393 linked members pointed to a primary record that was not in the file, so household size is kept as a known minimum instead of being undercounted.",
                    zh: "有 393 名附属会员对应的主卡记录不在数据中，因此家庭规模记为“已知下限”，避免低估。"
                },
                code: `members_hh = members.copy()

# Primary members key their own household; linked members point to their primary
members_hh["HouseholdKey"] = (
    members_hh["HashID"]
    .where(members_hh["PrimaryInd"] == 1, members_hh["PrimaryID"])
    .astype("string")
)

observed_primary_ids = set(members_hh.loc[members_hh["PrimaryInd"] == 1, "HashID"])
members_hh["PrimaryRecordObserved"] = (
    members_hh["HouseholdKey"].isin(observed_primary_ids).astype(int)
)

observed_household_size = members_hh.groupby("HouseholdKey")["HashID"].nunique()
members_hh["ObservedHouseholdSize"] = members_hh["HouseholdKey"].map(observed_household_size)

observed_linked_count = members_hh.groupby("HouseholdKey")["LinkInd"].sum()
members_hh["ObservedLinkedCount"] = members_hh["HouseholdKey"].map(observed_linked_count)

# If the primary record is missing, the household has at least one more member
members_hh["KnownHouseholdSizeMin"] = (
    members_hh["ObservedHouseholdSize"] + (1 - members_hh["PrimaryRecordObserved"])
)
members_hh["HasLinkedRelationship"] = (members_hh["ObservedLinkedCount"] > 0).astype(int)`
            },
            {
                title: {
                    en: "Separating booking history from commitments known at T0",
                    zh: "区分历史预约与 T0 时已知的未来承诺"
                },
                language: "Python · pandas",
                source: {
                    en: "Assignment 1 · my code",
                    zh: "作业 1 · 本人代码"
                },
                caption: {
                    en: "A booking made before T0 for a class after T0 is a legitimate signal of commitment; anything booked after T0 would leak the outcome.",
                    zh: "T0 之前预约、T0 之后上课的记录是合法的“投入度”信号；T0 之后才产生的预约则会泄漏结果。"
                },
                code: `# Historical activity: booked before T0 AND took place before T0
historical_bookings = bookings_clean[
    (bookings_clean["BookedDateTime"] < T0)
    & (bookings_clean["StartDateTime"] < T0)
].copy()

# Future commitment already known at T0: booked before T0, starts on/after T0
future_known_bookings = bookings_clean[
    (bookings_clean["BookedDateTime"] < T0)
    & (bookings_clean["StartDateTime"] >= T0)
].copy()

print("Historical leakage check:",
      ((historical_bookings["BookedDateTime"] >= T0)
       | (historical_bookings["StartDateTime"] >= T0)).sum())          # 0
print("Future commitment booking-time leakage:",
      (future_known_bookings["BookedDateTime"] >= T0).sum())           # 0`
            },
            {
                title: {
                    en: "Categorical screening with chi-square tests and Cramér's V",
                    zh: "用卡方检验与 Cramér's V 筛选分类属性"
                },
                language: "Python · SciPy",
                source: {
                    en: "Assignment 1 · my code",
                    zh: "作业 1 · 本人代码"
                },
                caption: {
                    en: "Effect size (Cramér's V) is ranked alongside the practical churn-rate spread, ignoring groups with fewer than 100 members.",
                    zh: "同时看效应量（Cramér's V）与实际退会率差距，并排除样本少于 100 人的组。"
                },
                code: `from scipy.stats import chi2_contingency

for col in categorical_candidates:
    temp = analysis_df[[col, TARGET]].dropna().copy()
    if temp[col].nunique() < 2:
        continue

    contingency = pd.crosstab(temp[col], temp[TARGET])
    chi2, p_value, _, _ = chi2_contingency(contingency)
    n = contingency.to_numpy().sum()
    min_dim = min(contingency.shape[0] - 1, contingency.shape[1] - 1)
    cramers_v = np.sqrt(chi2 / (n * min_dim)) if min_dim > 0 else np.nan

    group_stats = (temp.groupby(col, observed=True)[TARGET]
                   .agg(Members="size", ChurnRate="mean").reset_index())
    # Ignore very small groups when calculating practical churn-rate spread
    eligible = group_stats.loc[group_stats["Members"] >= 100]
    if len(eligible) >= 2:
        highest_row = eligible.loc[eligible["ChurnRate"].idxmax()]
        lowest_row = eligible.loc[eligible["ChurnRate"].idxmin()]
        spread_pp = (highest_row["ChurnRate"] - lowest_row["ChurnRate"]) * 100
    else:
        spread_pp = np.nan

    categorical_rows.append({"Feature": col, "CramersV": cramers_v,
                             "ChiSquareP": p_value, "ChurnSpread_pp": spread_pp})

categorical_screen = (pd.DataFrame(categorical_rows)
                      .sort_values(["CramersV", "ChurnSpread_pp"], ascending=False))`
            },
            {
                title: {
                    en: "Wilson intervals and mutually exclusive risk profiles",
                    zh: "Wilson 置信区间与互斥风险画像"
                },
                language: "Python · NumPy",
                source: {
                    en: "Assignment 1 · my code",
                    zh: "作业 1 · 本人代码"
                },
                caption: {
                    en: "Wilson intervals stay reliable for small groups and low rates; np.select assigns each member to the first matching profile.",
                    zh: "Wilson 区间在小样本和低比率下仍然可靠；np.select 按顺序把每位会员归入第一个满足条件的画像。"
                },
                code: `def wilson_ci(churners, n, z=1.96):
    if n == 0:
        return np.nan, np.nan
    p = churners / n
    denominator = 1 + z**2 / n
    centre = (p + z**2 / (2 * n)) / denominator
    half_width = z * np.sqrt(p * (1 - p) / n + z**2 / (4 * n**2)) / denominator
    return centre - half_width, centre + half_width

no_future = risk_df["HasFutureBooking90dAtT0"] == 0
conditions = [
    (risk_df["TenureYears"] < 3) & (risk_df["AttendanceTrajectory"] == "Stopped attending") & no_future,
    (risk_df["AttendanceTrajectory"] == "Inactive in both periods") & no_future,
    (risk_df["TenureYears"] >= 3) & (risk_df["AttendanceTrajectory"] == "Stopped attending") & no_future,
    risk_df["AttendanceDays90d"].between(1, 5) & no_future,
    (risk_df["AttendanceDays90d"] >= 16) & (risk_df["HasFutureBooking90dAtT0"] == 1),
]
# np.select takes the first matching condition, so the ordering
# makes the profiles mutually exclusive
risk_df["RiskProfile_Report"] = np.select(conditions, profile_labels,
                                          default="Other members")`
            },
            {
                title: {
                    en: "Paired household bootstrap for differences in F1",
                    zh: "按家庭重抽样的配对 bootstrap：比较模型 F1 差异"
                },
                language: "Python · NumPy",
                source: {
                    en: "Assignment 2 · my integration code",
                    zh: "作业 2 · 本人负责的整合代码"
                },
                caption: {
                    en: "Whole households are resampled together, so family members never split across the bootstrap and the comparison respects the grouped validation design.",
                    zh: "以家庭为单位整体重抽样，同一家庭成员不会被拆开，比较方式与按家庭分组的验证设计保持一致。"
                },
                code: `def household_bootstrap(a, b, n=2000):
    """Paired differences conditional on fitted predictions."""
    b = b.set_index("HashID").loc[a.HashID].reset_index()
    np.testing.assert_array_equal(a.churn_90d, b.churn_90d)
    codes, unique = pd.factorize(a.HouseholdSplitGroupID)
    G = len(unique)
    y = a.churn_90d.to_numpy(int)

    def counts(d):  # TP, FP, FN per household
        return np.array([np.bincount(codes, condition, minlength=G)
                         for condition in [(d == 1) & (y == 1),
                                           (d == 1) & (y == 0),
                                           (d == 0) & (y == 1)]])

    ca, cb = counts(a.Prediction.to_numpy()), counts(b.Prediction.to_numpy())
    rng = np.random.default_rng(6600)
    delta = []
    for _ in range(n):
        weights = np.bincount(rng.integers(G, size=G), minlength=G)
        ra, rb = ca @ weights, cb @ weights
        score = lambda r: 2 * r[0] / max(2 * r[0] + r[1] + r[2], 1)   # F1
        delta.append(score(ra) - score(rb))
    lo, hi = np.quantile(delta, [.025, .975])
    return dict(DeltaF1Low=float(lo), DeltaF1High=float(hi))`
            },
            {
                title: {
                    en: "Stacking: Platt calibration and a non-negative logistic meta-learner",
                    zh: "模型堆叠：Platt 校准与非负权重逻辑回归元学习器"
                },
                language: "Python · scikit-learn · SciPy",
                source: {
                    en: "Assignment 2 · my integration code",
                    zh: "作业 2 · 本人负责的整合代码"
                },
                caption: {
                    en: "Base-model scores are calibrated inside each training split, then combined with weights constrained to be non-negative (L-BFGS-B).",
                    zh: "各基模型分数在每个训练折内单独校准，再以非负约束的权重（L-BFGS-B）组合。"
                },
                code: `def platt(p, y):
    model = LogisticRegression(C=1e6, max_iter=2000).fit(logodds(p).reshape(-1, 1), y)
    a, b = float(model.coef_[0, 0]), float(model.intercept_[0])
    require(a > 0, "Non-increasing calibrator; inspect upstream inputs")
    return [a, b]

def nnlr(Z, y, C=1.):
    Z = np.asarray(Z, float)
    y = np.asarray(y, float)
    d = Z.shape[1]

    def objective(theta):
        w, b = theta[:d], theta[d]
        m = Z @ w + b
        g = expit(m) - y
        loss = np.sum(np.logaddexp(0, m) - y * m) + .5 / C * (w @ w)
        return loss, np.r_[Z.T @ g + w / C, g.sum()]

    result = minimize(objective, np.r_[np.full(d, 1 / d), logit(y.mean())],
                      jac=True, method="L-BFGS-B",
                      bounds=[(0, None)] * d + [(None, None)],
                      options={"maxiter": 2000})
    require(result.success, result.message)
    return dict(weights=result.x[:d].tolist(), intercept=float(result.x[d]))`
            }
        ]
    },

    {
    id: "buss6002-model-selection",
    category: "ai-data",

    title: {
        en: "Campaign Signup Prediction — Finding the Contact-Intensity Sweet Spot with Polynomial Logistic Regression",
        zh: "营销活动签约预测：用多项式逻辑回归找到触达强度的“最佳区间”"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · end-to-end modelling, evaluation and written analysis",
        zh: "个人项目 · 独立完成建模、评估与书面分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2026",
        zh: "2026 年第一学期"
    },

    sortDate: "2026-05",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "A financial services company was testing a messaging campaign for a new financial product. Each customer received a different level of contact intensity (emails, app notifications and other marketing messages), recorded as a score from −1 (lowest) to 1 (highest), together with whether the customer signed up.",
                "The business team wanted to know whether contact intensity alone can predict signup, and whether the relationship is simple: very low intensity may not get the customer's attention, while very high intensity may annoy customers and push them away. The core question was whether a polynomial logistic regression classifies signups better than a standard logistic regression when both use only the contact-intensity score.",
                "Working as the analyst, I had to formulate the problem, explain and implement both models in Python, choose the polynomial degree with a proper train / validation / test design, compare the classifiers on unseen data, and interpret what the result means for the business."
            ],
            zh: [
                "一家金融服务公司在为一款新金融产品测试营销活动：每位客户收到的触达强度不同（邮件、App 推送等营销信息），用 −1（最低）到 1（最高）的分数记录，同时记录客户是否签约。",
                "业务团队想知道：只凭触达强度能否预测签约？两者的关系是否简单？触达太少可能引不起注意，触达太多又可能让客户反感流失。核心问题是：在只使用触达强度一个变量的情况下，多项式逻辑回归能否比标准逻辑回归更准确地识别签约客户。",
                "我以分析师身份独立完成：定义问题，解释并用 Python 实现两类模型，按训练 / 验证 / 测试的规范流程选择多项式阶数，在未见过的数据上比较两个分类器，并解读结果对业务的意义。"
            ]
        },
        pointsTitle: {
            en: "What the analysis had to show",
            zh: "分析需要回答的问题"
        },
        points: {
            en: [
                "Frame the business question as binary classification and explore how signup changes with contact intensity.",
                "Specify the standard model (logistic function of β₀ + β₁x) and the polynomial model (logistic function of φd(x)ᵀβ with φd(x) = [1, x, x², …, xᵈ]).",
                "Choose the degree from 2 to 10 with validation log loss, taking the smallest degree on ties.",
                "Compare the selected polynomial model with the standard model on a held-out test set using the confusion matrix, accuracy, true positive rate, true negative rate, precision and F1.",
                "Interpret the fitted curve, its business meaning and its limitations, and suggest extensions."
            ],
            zh: [
                "把业务问题表述为二分类问题，并探索签约率如何随触达强度变化。",
                "写出标准模型（β₀ + β₁x 的逻辑函数）和多项式模型（φd(x)ᵀβ 的逻辑函数，其中 φd(x) = [1, x, x², …, xᵈ]）。",
                "用验证集对数损失在 2—10 阶中选择阶数，出现并列时取较低阶。",
                "在独立测试集上，用混淆矩阵、准确率、真正例率、真负例率、精确率和 F1 比较选定的多项式模型与标准模型。",
                "解读拟合曲线的含义、业务意义与局限，并提出改进方向。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Modelled signup for 6,000 customers from a single contact-intensity score: binned EDA revealed an inverted-U pattern (2% signup at the lowest intensity, about 90% mid-range, 13% at the highest), and I compared standard logistic regression with polynomial degrees 2–10 selected by validation log loss on a stratified 3,000 / 1,500 / 1,500 split.",
            "The selected degree-3 model raised held-out accuracy from 63.3% to 79.7% (+26%) and F1 from 0.655 to 0.810 (+24%), cutting false positives by 41% and false negatives by 49%."
        ],
        zh: [
            "仅凭触达强度一个变量为 6,000 名客户建立签约预测：分箱探索发现倒 U 形关系（最低强度签约率 2%，中段约 90%，最高强度 13%），并在分层的 3,000 / 1,500 / 1,500 划分上，以验证集对数损失在 2—10 阶多项式中选模，与标准逻辑回归比较。",
            "选定的 3 阶模型将测试准确率从 63.3% 提高到 79.7%（提升 26%），F1 从 0.655 提高到 0.810（提升 24%），误报减少 41%，漏报减少 49%。"
        ]
    },

    tags: [
        "Python",
        "pandas",
        "NumPy",
        "scikit-learn",
        "matplotlib",
        "Logistic Regression",
        "Polynomial Features",
        "Model Selection",
        "Log Loss",
        "Classification Metrics"
    ],

    metrics: [
        {
            value: "6,000",
            label: {
                en: "Customer records, one predictor (contact intensity)",
                zh: "客户记录，仅一个预测变量（触达强度）"
            }
        },
        {
            value: "51.9%",
            label: {
                en: "Signup rate: close to balanced, so accuracy is meaningful but not enough",
                zh: "签约率：接近平衡，准确率有参考意义但不够全面"
            }
        },
        {
            value: "Degree 3",
            label: {
                en: "Selected from degrees 2–10 by validation log loss (0.443)",
                zh: "以验证集对数损失（0.443）从 2—10 阶中选出"
            }
        },
        {
            value: "63.3% → 79.7%",
            label: {
                en: "Test accuracy: standard vs degree-3 polynomial (+26%)",
                zh: "测试准确率：标准模型对比 3 阶多项式（提升 26%）"
            }
        },
        {
            value: "0.655 → 0.810",
            label: {
                en: "Test F1: standard vs degree-3 polynomial (+24%)",
                zh: "测试 F1：标准模型对比 3 阶多项式（提升 24%）"
            }
        },
        {
            value: "−41% / −49%",
            label: {
                en: "Fewer false positives / false negatives on the test set",
                zh: "测试集误报 / 漏报减少比例"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My workflow",
                zh: "本人流程"
            },
            title: {
                en: "From Raw Data to a Held-out Model Comparison",
                zh: "从原始数据到独立测试集上的模型比较"
            },
            steps: {
                en: [
                    "Check 6,000 rows (no missing, 0/1 target, score in [−1, 1])",
                    "Binned EDA: inverted-U signup pattern",
                    "Stratified 3,000 / 1,500 / 1,500 split",
                    "Fit standard + degrees 2–10 on training",
                    "Pick degree by validation log loss → 3",
                    "Refit on 4,500, evaluate once on test"
                ],
                zh: [
                    "检查 6,000 行数据（无缺失、目标为 0/1、分数在 [−1, 1]）",
                    "分箱探索：签约率呈倒 U 形",
                    "分层划分 3,000 / 1,500 / 1,500",
                    "在训练集上拟合标准模型与 2—10 阶模型",
                    "按验证集对数损失选阶 → 3 阶",
                    "用 4,500 条重新拟合，在测试集上一次性评估"
                ]
            },
            caption: {
                en: "Each data split had one job: the training set estimated coefficients, the validation set only chose the degree, and the test set was touched once, for the final comparison.",
                zh: "每个数据集只承担一项任务：训练集估计系数，验证集只用于选阶，测试集只在最后比较时使用一次。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output",
                zh: "本人输出"
            },
            title: {
                en: "Class Balance Across the Stratified Split",
                zh: "分层划分后各数据集的类别比例"
            },
            columns: {
                en: ["Dataset", "Customers", "Signups", "Signup rate"],
                zh: ["数据集", "客户数", "签约数", "签约率"]
            },
            rows: [
                [{ en: "Full dataset", zh: "全部数据" }, "6,000", "3,111", "51.85%"],
                [{ en: "Training", zh: "训练集" }, "3,000", "1,555", "51.83%"],
                [{ en: "Validation", zh: "验证集" }, "1,500", "778", "51.87%"],
                [{ en: "Test (held out)", zh: "测试集（独立保留）" }, "1,500", "778", "51.87%"],
                [{ en: "Training + validation (final refit)", zh: "训练 + 验证（最终重新拟合）" }, "4,500", "2,333", "51.84%"]
            ],
            caption: {
                en: "The classes are close to 50 / 50 (2,889 non-signups vs 3,111 signups), so a model cannot look good just by predicting the majority class. Accuracy is still not enough on its own because it hides which kind of mistake is made, so TPR, TNR, precision and F1 were also reported.",
                zh: "两类样本接近 50 / 50（未签约 2,889 人，签约 3,111 人），模型无法靠“全部预测为多数类”取得好成绩。但准确率仍不能区分错误类型，因此同时报告真正例率、真负例率、精确率和 F1。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/signup-model/eda-binned-signup.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "Binned EDA: Signup Rises, Peaks, Then Falls",
                zh: "分箱探索：签约率先升后降"
            },
            caption: {
                en: "A scatter of 0/1 outcomes shows no trend, so I grouped the score into ten equal-width bins and plotted the observed signup rate in each, with ±1 standard error. The rate climbs from 2% to about 90% at moderate intensity, then drops to 13% at the highest intensity: a sweet spot rather than a straight line. This plot uses all 6,000 rows descriptively; fitting, selection and evaluation used the separate splits.",
                zh: "0/1 结果直接画散点看不出趋势，因此我把分数等宽分成 10 个区间，画出每个区间的实际签约率（±1 标准误）。签约率从 2% 升到中等强度时约 90%，在最高强度又降到 13%，呈现“最佳区间”而非直线。此图只用全部 6,000 行做描述性探索，建模、选阶和评估使用各自独立的数据集。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output",
                zh: "本人输出"
            },
            title: {
                en: "Observed Signup Rate by Contact-Intensity Bin",
                zh: "各触达强度区间的实际签约率"
            },
            columns: {
                en: ["Intensity bin", "Customers (all)", "Signup rate (all)", "Customers (training)", "Signup rate (training)"],
                zh: ["强度区间", "客户数（全部）", "签约率（全部）", "客户数（训练集）", "签约率（训练集）"]
            },
            rows: [
                [{ en: "−1.0 to −0.8", zh: "−1.0 至 −0.8" }, "575", "2.3%", "272", "1.1%"],
                [{ en: "−0.8 to −0.6", zh: "−0.8 至 −0.6" }, "639", "12.5%", "302", "10.9%"],
                [{ en: "−0.6 to −0.4", zh: "−0.6 至 −0.4" }, "601", "40.1%", "311", "42.1%"],
                [{ en: "−0.4 to −0.2", zh: "−0.4 至 −0.2" }, "592", "70.8%", "304", "69.7%"],
                [{ en: "−0.2 to 0.0", zh: "−0.2 至 0.0" }, "595", "82.7%", "277", "82.3%"],
                [{ en: "0.0 to 0.2", zh: "0.0 至 0.2" }, "555", "89.5%", "295", "89.8%"],
                [{ en: "0.2 to 0.4", zh: "0.2 至 0.4" }, "627", "86.9%", "310", "86.8%"],
                [{ en: "0.4 to 0.6", zh: "0.4 至 0.6" }, "565", "80.5%", "292", "81.8%"],
                [{ en: "0.6 to 0.8", zh: "0.6 至 0.8" }, "637", "45.1%", "312", "41.7%"],
                [{ en: "0.8 to 1.0", zh: "0.8 至 1.0" }, "614", "13.4%", "325", "13.8%"]
            ],
            highlightRow: 5,
            caption: {
                en: "Signup is highest around a neutral-to-moderate score (0.0 to 0.2) and lowest at both extremes. Full-data columns use the same bins as the figure above, counted from the project dataset. The training-set rates are the points plotted against the fitted curves below, and they match the full-data pattern within a few percentage points.",
                zh: "签约率在中性到中等强度（0.0 至 0.2）最高，在两端最低。“全部”两列与上图分箱相同，由项目数据统计；训练集各区间的签约率用于下方检验拟合曲线，与全量数据的形态只相差几个百分点。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/signup-model/logloss-by-degree.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "Training vs Validation Log Loss by Polynomial Degree",
                zh: "各多项式阶数的训练与验证对数损失"
            },
            caption: {
                en: "Training loss keeps falling slightly as the degree rises, because a more flexible curve always fits the training data a little better. Validation loss is lowest at degree 3 (0.443) and drifts up afterwards, so the extra terms fit noise rather than signal.",
                zh: "阶数越高，训练损失越会小幅下降，因为更灵活的曲线总能更贴合训练数据；但验证损失在 3 阶最低（0.443），之后逐渐上升，说明更多高阶项拟合的是噪声而不是规律。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output",
                zh: "本人输出"
            },
            title: {
                en: "Degree Selection Results (Fitted on Training, Scored on Validation)",
                zh: "选阶结果（训练集拟合，验证集评分）"
            },
            columns: {
                en: ["Degree", "Training log loss", "Validation log loss", "Lowest validation probability", "Highest validation probability"],
                zh: ["阶数", "训练对数损失", "验证对数损失", "验证集最低预测概率", "验证集最高预测概率"]
            },
            rows: [
                ["2", "0.440052", "0.445767", "0.003183", "0.883580"],
                ["3", "0.439658", "0.443417", "0.005452", "0.885672"],
                ["4", "0.439555", "0.445556", "0.001544", "0.874092"],
                ["5", "0.439505", "0.445706", "0.001417", "0.874447"],
                ["6", "0.439630", "0.446168", "0.001114", "0.873227"],
                ["7", "0.439500", "0.446604", "0.000802", "0.873969"],
                ["8", "0.439488", "0.446551", "0.000828", "0.874058"],
                ["9", "0.439428", "0.446975", "0.000569", "0.874258"],
                ["10", "0.439424", "0.446846", "0.000635", "0.874218"]
            ],
            highlightRow: 1,
            caption: {
                en: "My manual cross-entropy matched sklearn's log loss at every degree (largest difference 5.6 × 10⁻¹⁷). All probabilities were finite and inside (0, 1); higher degrees push the lowest probabilities closer to 0, an early sign of overconfident edges.",
                zh: "我手写的交叉熵在每个阶数上都与 sklearn 的对数损失一致（最大差异 5.6 × 10⁻¹⁷）。所有概率均为有限值且在 (0, 1) 内；阶数越高，最低概率越接近 0，是边缘区域过度自信的早期信号。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/signup-model/fitted-curves.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "Fitted Probability Curves vs Observed Signup Rates",
                zh: "拟合概率曲线与实际签约率对比"
            },
            caption: {
                en: "The standard model can only draw a monotonic S-curve, which here is almost a flat line from about 36% to 67%: it barely separates customers. The degree-3 curve follows the binned training rates (dots, ±1 SE), peaking at about 89% between scores 0.0 and 0.2 and falling to near 0 and about 4% at the two ends.",
                zh: "标准模型只能画出单调的 S 形曲线，在这里几乎是一条从约 36% 到 67% 的斜线，难以区分客户；3 阶曲线贴合训练集分箱签约率（圆点，±1 标准误），在 0.0 至 0.2 之间达到约 89% 的峰值，在两端分别降到接近 0 和约 4%。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output",
                zh: "本人输出"
            },
            title: {
                en: "Held-out Test Results (1,500 Customers, Threshold 0.5)",
                zh: "独立测试集结果（1,500 名客户，阈值 0.5）"
            },
            columns: {
                en: ["Measure", "Standard logistic", "Degree-3 polynomial", "Change"],
                zh: ["指标", "标准逻辑回归", "3 阶多项式", "变化"]
            },
            rows: [
                [{ en: "True negatives", zh: "真负例" }, "427", "548", "+121"],
                [{ en: "False positives", zh: "误报（假正例）" }, "295", "174", "−121 (−41%)"],
                [{ en: "False negatives", zh: "漏报（假负例）" }, "255", "130", "−125 (−49%)"],
                [{ en: "True positives", zh: "真正例" }, "523", "648", "+125"],
                [{ en: "Accuracy", zh: "准确率" }, "0.633", "0.797", "+0.164 (+26%)"],
                [{ en: "True positive rate (recall)", zh: "真正例率（召回率）" }, "0.672", "0.833", "+0.161 (+24%)"],
                [{ en: "True negative rate", zh: "真负例率" }, "0.591", "0.759", "+0.168 (+28%)"],
                [{ en: "Precision", zh: "精确率" }, "0.639", "0.788", "+0.149 (+23%)"],
                [{ en: "F1", zh: "F1" }, "0.655", "0.810", "+0.155 (+24%)"]
            ],
            highlightRow: 8,
            caption: {
                en: "Both models were refitted on training + validation (4,500 rows) and scored once on the 1,500-row test set. The degree-3 model won on every metric and cut both error types at the same time, rather than trading one for the other.",
                zh: "两个模型都在训练 + 验证（4,500 行）上重新拟合，并只在 1,500 行测试集上评估一次。3 阶模型在所有指标上都更好，并且同时减少了两类错误，而不是用一种错误换另一种。"
            }
        },
        {
            type: "bars",
            source: {
                en: "My output",
                zh: "本人输出"
            },
            title: {
                en: "Test-set Errors by Model",
                zh: "两个模型在测试集上的错误数量"
            },
            items: [
                {
                    label: { en: "False positives · standard", zh: "误报 · 标准模型" },
                    value: 295,
                    suffix: ""
                },
                {
                    label: { en: "False positives · degree 3", zh: "误报 · 3 阶模型" },
                    value: 174,
                    suffix: ""
                },
                {
                    label: { en: "False negatives · standard", zh: "漏报 · 标准模型" },
                    value: 255,
                    suffix: ""
                },
                {
                    label: { en: "False negatives · degree 3", zh: "漏报 · 3 阶模型" },
                    value: 130,
                    suffix: ""
                }
            ],
            caption: {
                en: "A false positive means marketing effort spent on a customer who will not sign up; a false negative is a likely signup the team would miss. Total errors fell from 550 to 304.",
                zh: "误报意味着营销资源花在不会签约的客户身上；漏报意味着错过本会签约的客户。总错误数从 550 降到 304。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Data checks, stratified split and polynomial design matrix",
                zh: "数据检查、分层划分与多项式设计矩阵"
            },
            language: "Python · NumPy · scikit-learn",
            source: {
                en: "Reconstructed from my report · reproduces every reported number",
                zh: "根据报告方法重建 · 可复现报告中的全部数字"
            },
            caption: {
                en: "Implements the checks and the 2:1:1 stratified split described in the report; phi(x, d) builds the n × (d + 1) matrix with the intercept column included, which is why the model is later fitted with fit_intercept=False. The printed signup rates match the class-balance table above.",
                zh: "实现报告中的数据检查与 2:1:1 分层划分；phi(x, d) 生成含截距列的 n × (d + 1) 矩阵，因此之后拟合时设置 fit_intercept=False。输出的各数据集签约率与上方类别比例表一致。"
            },
            code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (log_loss, confusion_matrix, accuracy_score,
                             precision_score, recall_score, f1_score)

df = pd.read_csv("campaign_signup.csv")               # 6,000 rows × 2 columns

# Checks reported: no missing values, binary target, score within [-1, 1]
assert df.isna().sum().sum() == 0
assert set(df["signup"].unique()) <= {0, 1}
assert df["intensity_score"].between(-1, 1).all()

X = df["intensity_score"].to_numpy()
y = df["signup"].to_numpy()

# Stratified 2:1:1 split: hold out the test set first, then split train / validation
X_temp, X_test, y_temp, y_test = train_test_split(
    X, y, test_size=1500, stratify=y, random_state=1)
X_train, X_vali, y_train, y_vali = train_test_split(
    X_temp, y_temp, test_size=1500, stratify=y_temp, random_state=1)

def phi(x, d):
    """Design matrix of shape n × (d + 1): columns 1, x, x², …, x^d."""
    return np.column_stack([x ** k for k in range(d + 1)])

for name, target in [("full", y), ("training", y_train), ("validation", y_vali),
                     ("test", y_test), ("training + validation", y_temp)]:
    print(f"{name:<22} n = {len(target):>5}   signup rate = {target.mean():.4f}")`
        },
        {
            title: {
                en: "Degree selection by validation log loss, with a manual cross-entropy check",
                zh: "按验证集对数损失选阶，并手写交叉熵核对"
            },
            language: "Python · NumPy · scikit-learn",
            source: {
                en: "Manual log-loss block from my report · loop reconstructed",
                zh: "手写对数损失部分出自本人报告 · 循环部分为重建"
            },
            caption: {
                en: "The manual_validation_log_loss expression is copied from my report. The loop around it reproduces the degree table exactly, including the selected degree (3) and the best validation log loss (0.44341739829150384).",
                zh: "manual_validation_log_loss 表达式直接取自本人报告；外层循环可完整复现选阶结果表，包括选定阶数（3）与最佳验证对数损失（0.44341739829150384）。"
            },
            code: `results = []
for d in range(2, 11):
    model = LogisticRegression(fit_intercept=False)   # intercept = first column of phi; default L2
    model.fit(phi(X_train, d), y_train)

    train_loss = log_loss(y_train, model.predict_proba(phi(X_train, d))[:, 1])
    p_hat = model.predict_proba(phi(X_vali, d))[:, 1]
    p_hat = np.clip(p_hat, 1e-15, 1 - 1e-15)          # keep away from log(0)
    val_loss = log_loss(y_vali, p_hat)

    # Manual binary cross-entropy, checked against sklearn
    m = len(y_vali)
    manual_validation_log_loss = -1 / m * np.sum(
        y_vali * np.log(p_hat) +
        (1 - y_vali) * np.log(1 - p_hat)
    )

    results.append({
        "degree": d,
        "training_log_loss": train_loss,
        "validation_log_loss": val_loss,
        "abs_log_loss_difference": abs(val_loss - manual_validation_log_loss),
        "min_pred_prob": p_hat.min(),
        "max_pred_prob": p_hat.max(),
    })

results = pd.DataFrame(results)
# idxmin returns the first minimum, i.e. the smallest degree on ties
best_degree = int(results.loc[results["validation_log_loss"].idxmin(), "degree"])
print("Selected polynomial degree:", best_degree)                    # 3
print("Best validation log loss:", results["validation_log_loss"].min())  # 0.4434…`
        },
        {
            title: {
                en: "Final refit on training + validation and one-time test evaluation",
                zh: "用训练 + 验证数据重新拟合，并在测试集上一次性评估"
            },
            language: "Python · NumPy · scikit-learn",
            source: {
                en: "Reconstructed from my report · reproduces every reported number",
                zh: "根据报告方法重建 · 可复现报告中的全部数字"
            },
            caption: {
                en: "Output: TN 427 / FP 295 / FN 255 / TP 523 for the standard model and 548 / 174 / 130 / 648 for degree 3, with accuracy 0.633 vs 0.797 and F1 0.655 vs 0.810, matching the report.",
                zh: "输出结果：标准模型 TN 427 / FP 295 / FN 255 / TP 523，3 阶模型 548 / 174 / 130 / 648；准确率 0.633 对比 0.797，F1 0.655 对比 0.810，与报告一致。"
            },
            code: `def evaluate(d):
    # Refit on training + validation (4,500 rows); the test set is used only here
    model = LogisticRegression(fit_intercept=False).fit(phi(X_temp, d), y_temp)
    p_test = model.predict_proba(phi(X_test, d))[:, 1]
    y_pred = (p_test >= 0.5).astype(int)                # threshold τ = 0.5
    tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
    return {"TN": tn, "FP": fp, "FN": fn, "TP": tp,
            "accuracy": accuracy_score(y_test, y_pred),
            "TPR": recall_score(y_test, y_pred),
            "TNR": tn / (tn + fp),
            "precision": precision_score(y_test, y_pred),
            "F1": f1_score(y_test, y_pred)}

final = pd.DataFrame({"standard (d = 1)": evaluate(1),
                      f"polynomial (d = {best_degree})": evaluate(best_degree)})
print(final.round(3))`
        }
    ],

    details: {
        en: [
            {
                title: "Problem and Data",
                bullets: [
                    "Framed the task as binary classification: y = 1 if the customer signed up, 0 otherwise, predicted from one variable, the campaign contact-intensity score (−1 to 1).",
                    "Loaded 6,000 records with two columns and confirmed there were no missing values, signup took only 0 and 1, and every score lay within [−1, 1].",
                    "Found the classes close to balanced (3,111 signups, 51.85%; 2,889 non-signups), so accuracy is informative, but still reported error-specific metrics because accuracy cannot tell false positives from false negatives.",
                    "Used a binned plot instead of a raw scatter, since 0/1 points hide the trend; the binned rates showed an inverted-U \"sweet spot\" rather than a steady increase."
                ]
            },
            {
                title: "Model Specification",
                bullets: [
                    "Treated signup as Bernoulli given x, so the model's job is to estimate the signup probability p = P(y = 1 | x).",
                    "Standard logistic regression: log-odds = β₀ + β₁x. Because the logistic function is monotonic, the probability can only rise or only fall with intensity, so it cannot represent a peak in the middle.",
                    "Polynomial logistic regression: replace β₀ + β₁x with φd(x)ᵀβ = β₀ + β₁x + β₂x² + … + βdxᵈ. The logistic function still keeps outputs in (0, 1), while the polynomial lets the curve bend up and then down.",
                    "The standard model is the special case d = 1, which makes the two directly comparable."
                ]
            },
            {
                title: "Implementation and Numerical Checks",
                bullets: [
                    "Built the design matrix with a first column of ones and columns x, x², …, xᵈ (shape n × (d + 1)), and fitted sklearn's LogisticRegression with fit_intercept=False so the intercept was not added twice.",
                    "Kept sklearn's default L2 regularisation for numerical stability and used the same setting for every candidate model.",
                    "Computed log loss from predicted probabilities, not class labels, and verified it with a hand-written binary cross-entropy (probabilities clipped away from 0 and 1); the two agreed to 5.6 × 10⁻¹⁷.",
                    "Checked that all predicted probabilities were finite and inside [0, 1], and that the fitted curves matched the binned observed rates."
                ]
            },
            {
                title: "Choosing the Degree",
                bullets: [
                    "Split the data 2:1:1 with stratification: 3,000 training, 1,500 validation and 1,500 test; signup rates stayed at about 51.8–51.9% in every split.",
                    "Fitted degrees 2 to 10 on the training set and selected by validation log loss, taking the smallest degree on ties. Choosing on training loss would always favour the most flexible model; choosing on the test set would spoil the final unbiased check.",
                    "Used log loss rather than accuracy because it scores the full probability: −log(p̂) when y = 1 and −log(1 − p̂) when y = 0, so confident mistakes are penalised heavily, whereas accuracy only counts them as one more error.",
                    "Validation loss fell from 0.4458 at degree 2 to its minimum 0.4434 at degree 3 and then rose for higher degrees, while training loss kept edging down: degree 3 balances underfitting and overfitting."
                ]
            },
            {
                title: "Final Evaluation on the Test Set",
                bullets: [
                    "After choosing degree 3, refitted both the standard and the degree-3 model on training + validation (4,500 rows); the test set was not used for fitting or selection.",
                    "Classified a customer as a signup when p̂ ≥ 0.5, a sensible baseline because the classes are balanced and no business costs for each error type were given.",
                    "Degree 3 beat the standard model on every metric: accuracy 0.633 → 0.797, TPR 0.672 → 0.833, TNR 0.591 → 0.759, precision 0.639 → 0.788, F1 0.655 → 0.810.",
                    "Treated F1 as the most relevant single measure, because the goal is to find likely signups: it combines how many real signups are caught (TPR) with how trustworthy a predicted signup is (precision)."
                ]
            },
            {
                title: "What It Means for the Business",
                bullets: [
                    "The fitted curve says very low contact rarely converts, moderate contact converts best, and very high contact converts poorly again, which is consistent with customers ignoring too little contact and tiring of too much.",
                    "Fewer false positives (−121) means less effort spent on customers who will not sign up; fewer false negatives (−125) means fewer missed signups.",
                    "The trade-off is interpretability: the standard model is easier to explain, while the polynomial needs validation to control its flexibility.",
                    "The relationship is predictive, not causal: the data cannot show that changing a customer's contact intensity would change their decision."
                ]
            },
            {
                title: "Limitations and Next Steps",
                bullets: [
                    "One predictor oversimplifies behaviour: age, income, financial needs, product eligibility, past engagement, message content, channel and timing are all likely to matter, and their interactions with intensity are not captured.",
                    "Polynomial terms can be unstable near the edges of the intensity range, are unreliable outside it, and make individual coefficients hard to interpret as marginal effects.",
                    "Next steps: add customer and campaign variables; run randomised campaign experiments to separate the causal effect of intensity from customer differences; compare splines, generalised additive models, decision trees and random forests; add intensity × segment interactions and L1 or L2 penalties; and set the threshold from business costs instead of fixing it at 0.5."
                ]
            }
        ],
        zh: [
            {
                title: "问题与数据",
                bullets: [
                    "将任务定义为二分类问题：客户签约 y = 1，否则 y = 0，只用一个变量即营销触达强度分数（−1 到 1）进行预测。",
                    "读取 6,000 条、2 列数据，确认无缺失值，签约变量只取 0 和 1，所有分数都在 [−1, 1] 范围内。",
                    "两类样本接近平衡（签约 3,111 人，占 51.85%；未签约 2,889 人），准确率有参考意义；但准确率无法区分误报和漏报，因此同时报告区分错误类型的指标。",
                    "用分箱图代替原始散点图，因为 0/1 散点看不出趋势；分箱签约率呈倒 U 形“最佳区间”，而非持续上升。"
                ]
            },
            {
                title: "模型设定",
                bullets: [
                    "在给定 x 的条件下把签约视为伯努利分布，模型要估计的是签约概率 p = P(y = 1 | x)。",
                    "标准逻辑回归：对数几率 = β₀ + β₁x。由于逻辑函数单调，签约概率只能随强度单调上升或下降，无法表达中间高、两端低的形态。",
                    "多项式逻辑回归：把 β₀ + β₁x 替换为 φd(x)ᵀβ = β₀ + β₁x + β₂x² + … + βdxᵈ。逻辑函数仍保证输出在 (0, 1) 之间，多项式项则让曲线可以先升后降。",
                    "标准模型就是 d = 1 时的特例，因此两者可以直接比较。"
                ]
            },
            {
                title: "实现与数值检查",
                bullets: [
                    "构造设计矩阵：第一列为 1，其余列为 x, x², …, xᵈ（形状 n × (d + 1)），并用 sklearn 的 LogisticRegression 拟合，设置 fit_intercept=False，避免截距重复。",
                    "保留 sklearn 默认的 L2 正则化以保证数值稳定，并对所有候选模型使用同一设置。",
                    "用预测概率而非预测类别计算对数损失，并用手写的二元交叉熵核对（概率略微裁剪以避免 log(0)），两者差异仅 5.6 × 10⁻¹⁷。",
                    "检查所有预测概率均为有限值且在 [0, 1] 内，并确认拟合曲线与分箱实际签约率一致。"
                ]
            },
            {
                title: "阶数选择",
                bullets: [
                    "按 2:1:1 分层划分：训练集 3,000、验证集 1,500、测试集 1,500，各数据集签约率都保持在约 51.8%—51.9%。",
                    "在训练集上拟合 2—10 阶模型，按验证集对数损失选阶，并列时取较低阶。若按训练损失选，总会偏向最复杂的模型；若按测试集选，最终评估就不再无偏。",
                    "选用对数损失而非准确率，是因为它评价完整的概率：y = 1 时计 −log(p̂)，y = 0 时计 −log(1 − p̂)，高置信度的错误会被重罚；而准确率只把它算作一次普通错误。",
                    "验证损失从 2 阶的 0.4458 降到 3 阶的最低值 0.4434，此后随阶数上升；训练损失则持续小幅下降，说明 3 阶在欠拟合与过拟合之间取得平衡。"
                ]
            },
            {
                title: "测试集最终评估",
                bullets: [
                    "确定 3 阶后，用训练 + 验证数据（4,500 行）重新拟合标准模型和 3 阶模型；测试集从未参与拟合或选阶。",
                    "当 p̂ ≥ 0.5 时判为签约。由于两类样本平衡且没有给出两类错误的业务成本，0.5 是合理的基准阈值。",
                    "3 阶模型所有指标均优于标准模型：准确率 0.633 → 0.797，真正例率 0.672 → 0.833，真负例率 0.591 → 0.759，精确率 0.639 → 0.788，F1 0.655 → 0.810。",
                    "以 F1 作为最相关的综合指标：业务目标是找到可能签约的客户，F1 同时衡量真实签约客户被找出的比例（真正例率）和预测为签约的可靠程度（精确率）。"
                ]
            },
            {
                title: "业务含义",
                bullets: [
                    "拟合曲线显示：触达过少很少转化，适度触达转化最好，触达过多转化又变差，这与“太少引不起注意、太多引起反感”的直觉一致。",
                    "误报减少 121 个，意味着更少的营销资源浪费在不会签约的客户身上；漏报减少 125 个，意味着更少错过本会签约的客户。",
                    "代价是可解释性：标准模型更容易解释，多项式模型则需要依靠验证来控制其灵活度。",
                    "这是预测关系而非因果关系：数据无法证明改变某位客户的触达强度就会改变其签约决定。"
                ]
            },
            {
                title: "局限与改进方向",
                bullets: [
                    "只用一个变量过于简化：年龄、收入、理财需求、产品资格、过往互动、信息内容、渠道和时间都可能影响签约，且它们与触达强度的交互作用未被刻画。",
                    "多项式项在强度范围边缘可能不稳定，在范围之外的预测不可靠，单个系数也难以解释为边际效应。",
                    "改进方向：加入客户与营销活动变量；通过随机实验区分触达强度的因果效应与客户本身差异；与样条、广义可加模型、决策树、随机森林比较；加入强度与客群的交互项及 L1 / L2 正则化；按业务成本设定分类阈值，而不是固定为 0.5。"
                ]
            }
        ]
    }
},
{
    id: "unicef",
    category: "ai-data",

    title: {
        en: "Which Lapsed Donors Will Give Again? Six Models and a Targeted Reactivation Plan for UNICEF Australia",
        zh: "哪些流失捐赠者会再次捐款？为 UNICEF Australia 比较六种模型并设计定向再激活方案"
    },

    organisation: {
        en: "UNICEF Australia · The University of Sydney",
        zh: "联合国儿童基金会澳大利亚 · 悉尼大学"
    },

    role: {
        en: "Team of 5 · predictive modelling and campaign strategy, plus an individual follow-up notebook",
        zh: "5 人小组 · 预测建模与营销策略，另有个人跟进 notebook"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2025",
        zh: "2025 年第一学期"
    },

    sortDate: "2025-05",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "UNICEF Australia depends on individual donations, and direct mail (DM) has long been one of its most important fundraising channels. Rising postage costs, donor fatigue and falling response rates mean each letter now has to earn its place. The question: which supporters who were mailed before are most likely to give again within three months of being contacted, so the next campaign can be sent to them first?",
                "Each of us first built the data pipeline and exploratory analysis individually (see the companion project). As a team of five we then agreed one modelling dataset, compared six classifiers and turned the chosen model into a costed campaign plan. For the individual follow-up assignment I rebuilt the team pipeline and the final XGBoost search in my own notebook."
            ],
            zh: [
                "UNICEF Australia 依赖个人捐款，直邮（DM）长期是其最重要的募捐渠道之一。邮寄成本上升、捐赠者疲劳和响应率下降，意味着每一封信都要物有所值。核心问题是：曾经收到过募捐信的支持者中，谁最有可能在再次被联系后三个月内捐款，好让下一次活动优先寄给他们？",
                "我们每人先独立完成数据管道和探索性分析（见配套项目）。随后五人小组统一建模数据集，比较六种分类模型，并把选定模型转化为有成本测算的营销方案。在后续个人作业中，我在自己的 notebook 里重建了小组的数据管道和最终的 XGBoost 调参。"
            ]
        },
        pointsTitle: {
            en: "How the work was organised",
            zh: "工作结构"
        },
        points: {
            en: [
                "Carry over the insights from each member’s individual EDA and agree one modelling dataset.",
                "For every model: rationale, assumptions and limitations, tuning, train and test performance, and key predictors.",
                "Select a final model on more than accuracy: returning-donor detection, overfitting and computational cost.",
                "Turn the model into a campaign: who to target, how to reach them, projected revenue and cost."
            ],
            zh: [
                "汇总各成员个人探索性分析的结论，统一建模数据集。",
                "每个模型都要说明：选择理由、假设与局限、调参、训练集与测试集表现，以及关键预测变量。",
                "选择最终模型时不只看准确率，还要看识别再捐赠者的能力、过拟合程度和计算成本。",
                "把模型转化为营销方案：触达谁、如何触达、预期收入与成本。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "In a team of 5, built a modelling set of 164,043 supporters mailed by UNICEF Australia in 2022–24 (38 raw variables → 85 features) and compared 6 classifiers to predict who gives again within 100 days of contact.",
            "The chosen XGBoost found 79% of returning donors (baseline logistic 66%) with 0.77 precision against a 30.8% base rate; mailing the top-scoring 20% (≈20,000 donors) projects A$150K base-case revenue on A$45.4K cost (3.3×)."
        ],
        zh: [
            "5 人小组项目：以 UNICEF Australia 在 2022–24 年寄过募捐信的 164,043 名支持者构建建模数据集（38 个原始变量 → 85 个特征），比较 6 种分类模型，预测谁会在被联系后 100 天内再次捐款。",
            "选定的 XGBoost 能找出 79% 的再捐赠者（基准逻辑回归为 66%），精确率 0.77，而实际再捐赠比例只有 30.8%；向得分最高的 20%（约 2 万人）寄信，基础情景预计收入 15 万澳元，成本 4.54 万澳元（3.3 倍）。"
        ]
    },

    tags: [
        "XGBoost",
        "Random Forest",
        "Regularised Logistic Regression",
        "Neural Network",
        "SHAP",
        "Feature Engineering",
        "Campaign ROI",
        "Python",
        "scikit-learn"
    ],

    metrics: [
        {
            value: "164,043",
            label: {
                en: "DM-contacted supporters in the modelling set (2022–24)",
                zh: "建模数据集中被 DM 联系过的支持者（2022–24 年）"
            }
        },
        {
            value: "38 → 85",
            label: {
                en: "Raw variables → one-hot features (12 variables kept)",
                zh: "原始变量 → 独热编码特征（保留 12 个变量）"
            }
        },
        {
            value: "0.66 → 0.79",
            label: {
                en: "Returning-donor recall, baseline logistic → XGBoost",
                zh: "再捐赠者召回率：基准逻辑回归 → XGBoost"
            }
        },
        {
            value: "0.71 → 0.78",
            label: {
                en: "Returning-donor F1, baseline logistic → XGBoost",
                zh: "再捐赠者 F1：基准逻辑回归 → XGBoost"
            }
        },
        {
            value: "0.77 vs 30.8%",
            label: {
                en: "XGBoost precision vs the share who actually gave again",
                zh: "XGBoost 精确率对比实际再捐赠比例"
            }
        },
        {
            value: "3.3×",
            label: {
                en: "Base-case revenue ÷ cost (A$150K ÷ A$45.4K, scenario)",
                zh: "基础情景收入 ÷ 成本（15 万 ÷ 4.54 万澳元，情景测算）"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "Team · data preparation",
                zh: "小组 · 数据准备"
            },
            title: {
                en: "From Raw Records to a Ranked Mailing List",
                zh: "从原始记录到排序后的寄信名单"
            },
            steps: {
                en: [
                    "Keep DM campaigns and supporters contacted since 1 January 2022",
                    "Label: any gift within 100 days of a DM contact",
                    "Test filling missing ages; keep them blank",
                    "Merge sparse categories with similar giving rates",
                    "Keep one flag per dependent group: DoNotPhone, Has_Age",
                    "Tune and compare 6 classifiers",
                    "Rank by predicted probability; mail the top 20%"
                ],
                zh: [
                    "保留 DM 活动，以及 2022 年 1 月 1 日以来被联系过的支持者",
                    "标签：DM 联系后 100 天内有无任何捐款",
                    "测试填补缺失年龄；最终保留空值",
                    "合并捐款率相近的稀疏类别",
                    "每组相互依赖的变量只留一个：DoNotPhone、Has_Age",
                    "调参并比较 6 种分类模型",
                    "按预测概率排序，向前 20% 寄信"
                ]
            },
            caption: {
                en: "Records go back to the 1980s, so only the last three years were kept to reflect current behaviour. The three-month window was stretched to 100 days to allow for postal delivery, which barely changed category counts. 164,043 supporters remained, 30.8% of whom gave within the window.",
                zh: "数据最早可追溯到 1980 年代，因此只保留最近三年，以反映当前的捐款行为。三个月窗口放宽到 100 天，以考虑邮寄时间，这对各类别人数几乎没有影响。最终保留 164,043 名支持者，其中 30.8% 在窗口期内捐款。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/unicef/age-imputation.png",
            source: {
                en: "Team · feature engineering",
                zh: "小组 · 特征工程"
            },
            title: {
                en: "Filling Missing Ages Washed Out the Age Signal",
                zh: "填补缺失年龄冲淡了年龄信号"
            },
            caption: {
                en: "Only 19,729 supporters (12%) had an age. Sampling missing ages from each postcode’s age mix grew every bracket, but the gap between the youngest and oldest groups shrank from about 11 points (64% vs 75% giving) to 4 (30% vs 34%). The filled-in supporters were mostly non-givers, so filling mixed two different populations; the team kept ages blank and used Has_Age as a feature instead.",
                zh: "只有 19,729 名支持者（12%）有年龄记录。按各邮编的年龄分布抽样填补后，每个年龄段的人数都增加了，但最年轻与最年长组之间的差距从约 11 个百分点（捐款率 64% 对 75%）缩小到 4 个（30% 对 34%）。被填补的人大多没有捐款，填补等于把两类人群混在一起；因此小组保留年龄空值，改用 Has_Age 作为特征。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · feature engineering",
                zh: "小组 · 特征工程"
            },
            title: {
                en: "Example of Category Consolidation: Campaign Sub-type",
                zh: "类别合并示例：活动子类型"
            },
            columns: {
                en: ["Merged group", "Giving rates", "Supporters"],
                zh: ["合并后的组", "各类捐款率", "支持者人数"]
            },
            rows: [
                [{ en: "Appeal + Engagement + Receipt", zh: "Appeal + Engagement + Receipt" }, "15–20%", "118,932"],
                [{ en: "Paddington Postcard + Global Parent + Children’s Emergency Fund", zh: "Paddington Postcard + Global Parent + Children’s Emergency Fund" }, "78–82%", "36,498"],
                [{ en: "Catalogue + Community Fundraising + General + Wiggles books", zh: "Catalogue + Community Fundraising + General + Wiggles books" }, "0–5%", "1,723"]
            ],
            caption: {
                en: "Categories were merged when their giving rates were within about 0.05 of each other; the Wiggles books category had a single supporter. The same rule was applied to thematic area, activity, payment type and donation channel. Logistic regression on grouped and original features scored the same (accuracy 0.84, returning-donor F1 0.71), so grouping cut dimensions without losing signal.",
                zh: "捐款率相差约 0.05 以内的类别合并为一组；Wiggles 图书类别只有 1 名支持者。同样的规则也用于主题领域、活动类型、支付方式和捐款渠道。用合并后与原始特征分别跑逻辑回归，结果相同（准确率 0.84，再捐赠者 F1 0.71），说明合并降低了维度而没有损失信息。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · model comparison",
                zh: "小组 · 模型比较"
            },
            title: {
                en: "Six Models on the Held-Out Test Set",
                zh: "六种模型在测试集上的表现"
            },
            columns: {
                en: ["Model", "Test split", "Accuracy", "Donor F1", "Donor recall"],
                zh: ["模型", "测试集划分", "准确率", "捐赠者 F1", "捐赠者召回率"]
            },
            rows: [
                [{ en: "Logistic regression (baseline)", zh: "逻辑回归（基准）" }, "80/20", "0.84", "0.71", "0.66"],
                [{ en: "Ridge logistic regression (L2)", zh: "岭逻辑回归（L2）" }, "70/30", "0.83", "0.74", "0.81"],
                [{ en: "Random forest", zh: "随机森林" }, "80/20", "0.85", "0.78", "0.84"],
                [{ en: "XGBoost (selected)", zh: "XGBoost（选定）" }, "80/20", "0.85", "0.78", "0.79"],
                [{ en: "Gradient-boosted trees", zh: "梯度提升树（GBDT）" }, "70/30", "0.84", "0.74", "0.72"],
                [{ en: "Neural network", zh: "神经网络" }, "70/30", "0.86", "0.77", "0.79"]
            ],
            highlightRow: 3,
            caption: {
                en: "“Donor” = gave again within 100 days (30.8% of supporters). The 80/20 test set had 32,809 supporters and the 70/30 one 49,213. Random forest found the most returning donors, but its recall fell 4 points from training to test against 2 for XGBoost. The network’s figures come from the report’s summary table, because its detailed classification tables repeat the GBDT numbers.",
                zh: "“捐赠者”指 100 天内再次捐款（占支持者 30.8%）。80/20 划分的测试集有 32,809 人，70/30 划分的有 49,213 人。随机森林找出的再捐赠者最多，但其召回率从训练集到测试集下降 4 个百分点，XGBoost 只下降 2 个。神经网络的数字取自报告的汇总表，因为其详细分类结果表重复了 GBDT 的数字。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · XGBoost tuning",
                zh: "小组 · XGBoost 调参"
            },
            title: {
                en: "XGBoost Tuning Path (Cross-Validated)",
                zh: "XGBoost 调参路径（交叉验证）"
            },
            columns: {
                en: ["Round", "Trees", "Depth", "Learning rate", "Subsample", "Balanced acc."],
                zh: ["轮次", "树数量", "深度", "学习率", "子采样", "平衡准确率"]
            },
            rows: [
                ["1", "90", "9", "0.11", "1.0", "0.8382"],
                ["2", "80", "9", "0.08", "0.8", "0.8383"],
                ["3", "100", "9", "0.08", "0.8", "0.8386"],
                ["4", "112", "9", "0.11", "0.8", "0.8430"]
            ],
            highlightRow: 3,
            caption: {
                en: "The search ran in stages: RandomizedSearchCV over 500 random combinations first, then GridSearchCV once the space was down to about 700 fits. A further 10,125-fit grid adding reg_alpha, reg_lambda, min_child_weight and class weighting moved accuracy only from 0.84 to 0.85, so the simpler core model was kept. colsample_bytree stayed at 1.0 throughout.",
                zh: "调参分阶段进行：先用 RandomizedSearchCV 随机搜索 500 组参数，待搜索空间缩小到约 700 次拟合后改用 GridSearchCV 精调。之后又加入 reg_alpha、reg_lambda、min_child_weight 和类别权重做了 10,125 次拟合的网格搜索，准确率只从 0.84 升到 0.85，因此保留更简单的核心模型。colsample_bytree 始终为 1.0。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/unicef/xgboost-importance.png",
            source: {
                en: "Team · key predictors",
                zh: "小组 · 关键预测变量"
            },
            title: {
                en: "Top 10 Features in the Selected XGBoost Model",
                zh: "选定 XGBoost 模型的前 10 个特征"
            },
            caption: {
                en: "One merged sub-type (Paddington Postcard, Global Parent and Children’s Emergency Fund, about 80% giving) dominates with an importance of about 0.62, followed by recurring and mail-type donation channels, the EOFY/signature-event activity group and education/WASH content. Random forest, GBDT and the network’s SHAP values put the same groups near the top: past campaign and channel behaviour, not demographics, drives the prediction.",
                zh: "一个合并后的子类型（Paddington Postcard、Global Parent 和 Children’s Emergency Fund，捐款率约 80%）的重要性约 0.62，遥遥领先；其次是定期扣款和邮寄类捐款渠道、财年末/标志性活动组，以及教育/WASH 主题内容。随机森林、GBDT 和神经网络的 SHAP 值也把这些类别排在前列：驱动预测的是过往活动与渠道行为，而不是人口特征。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · campaign economics",
                zh: "小组 · 营销经济性"
            },
            title: {
                en: "Revenue Scenarios for Mailing the Top 20% (≈20,000 Donors)",
                zh: "向前 20%（约 2 万人）寄信的收入情景"
            },
            columns: {
                en: ["Scenario", "Response", "Avg gift (A$)", "Revenue (A$)", "Revenue ÷ cost"],
                zh: ["情景", "响应率", "平均捐款（澳元）", "收入（澳元）", "收入 ÷ 成本"]
            },
            rows: [
                [{ en: "Base case", zh: "基础情景" }, "15%", "50", "150,000", "3.3"],
                [{ en: "Conservative", zh: "保守情景" }, "10%", "50", "100,000", "2.2"],
                [{ en: "Optimistic digital", zh: "乐观数字化情景" }, "15%", "120", "360,000", "7.9"],
                [{ en: "Conservative digital", zh: "保守数字化情景" }, "10%", "120", "240,000", "5.3"]
            ],
            highlightRow: 0,
            caption: {
                en: "Cost is A$45,400 in every case: postage A$30,000 and printing A$10,000 for 20,000 letters, email A$400 and creative work A$5,000. A$50 reflects the most common one-off gift in Australia and A$120 typical digital giving (Giving Australia). The report printed A$50 in the formula for the conservative-digital case, but its A$240,000 result corresponds to A$120. At A$50 a gift, the mailing breaks even at a 4.5% response rate. These are scenario estimates, not realised revenue.",
                zh: "所有情景成本均为 45,400 澳元：2 万封信的邮费 30,000 澳元、印刷 10,000 澳元，电子邮件 400 澳元，创意制作 5,000 澳元。50 澳元对应澳大利亚最常见的单笔捐款，120 澳元对应典型的数字化捐款水平（Giving Australia）。报告在保守数字化情景的公式中写的是 50 澳元，但其 24 万澳元的结果对应的是 120 澳元。按每笔 50 澳元计算，响应率达到 4.5% 即可收回成本。以上均为情景测算，不是实际收入。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Rebuilding the team pipeline and the final XGBoost search",
                zh: "重建小组数据管道与最终 XGBoost 调参"
            },
            language: "Python · pandas · scikit-learn · XGBoost",
            source: {
                en: "My individual follow-up notebook, condensed",
                zh: "本人个人跟进 notebook（精简）"
            },
            caption: {
                en: "Condensed from my notebook: plotting and the other four category maps are removed. Performance figures on this page are the team’s reported test results.",
                zh: "根据本人 notebook 精简，去掉了绘图代码和另外四个类别映射。本页的模型表现数字均为小组报告中的测试集结果。"
            },
            code: `import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV, train_test_split
from xgboost import XGBClassifier

# 1. Keep DM campaigns and supporters contacted by DM since 2022
dm_ids = campaign.loc[campaign["Solicitation_Channel"] == "DM", "CampaignID"].unique()
members = campaign_member[campaign_member["CampaignID"].isin(dm_ids)].copy()
members["MemberCreatedDate"] = pd.to_datetime(members["MemberCreatedDate"], dayfirst=True)
members = members[members["MemberCreatedDate"] >= "2022-01-01"]
supporter = supporter[supporter["SupporterID"].isin(members["SupporterID"].unique())].copy()

# 2. Target: any gift within 100 days of a DM contact (90 days plus postal delay)
gifts = donations.merge(members, on="SupporterID", suffixes=("", "_contacted"))
gifts["Gift_Date"] = pd.to_datetime(gifts["Gift_Date"], errors="coerce")
in_window = gifts[(gifts["Gift_Date"] >= gifts["MemberCreatedDate"]) &
                  (gifts["Gift_Date"] <= gifts["MemberCreatedDate"] + pd.Timedelta(days=100))]
supporter["DonatedWithin3Months"] = supporter["SupporterID"].isin(in_window["SupporterID"]).astype(int)

# 3. Merge sub-types whose giving rates are within about 0.05
subtype_merge = {
    "Appeal": "Appeal_Engagement_Receipt", "Engagement": "Appeal_Engagement_Receipt",
    "Receipt": "Appeal_Engagement_Receipt",
    "Paddington Postcard": "Paddington_Global_Children",
    "Global Parent": "Paddington_Global_Children",
    "Children's Emergency Fund": "Paddington_Global_Children",
    "Catalogue": "Catalogue_CommFund_General_Wiggles",
    "Community Fundraising": "Catalogue_CommFund_General_Wiggles",
    "General": "Catalogue_CommFund_General_Wiggles",
    "The Wiggles Brave Little Books": "Catalogue_CommFund_General_Wiggles"}
supporter["Sub_Type_Grouped"] = supporter["Sub_Type"].replace(subtype_merge)

# 4. Final grid around the team's best settings (model_features: grouped columns, IDs and targets dropped)
X = pd.get_dummies(model_features, drop_first=True).astype(int)
X_train, X_test, y_train, y_test = train_test_split(
    X, supporter["DonatedWithin3Months"], test_size=0.2, random_state=0)
grid = {"n_estimators": np.arange(110, 115), "learning_rate": np.arange(0.08, 0.13, 0.01),
        "subsample": [0.8], "max_depth": [9], "colsample_bytree": [1.0]}
# reg_alpha, reg_lambda, min_child_weight and scale_pos_weight were tried and left out
search = GridSearchCV(XGBClassifier(eval_metric="logloss", random_state=0),
                      grid, scoring="f1", cv=5, n_jobs=-1)        # 25 candidates x 5 folds
search.fit(X_train, y_train)`
        }
    ],

    details: {
        en: [
            {
                title: "The Problem · Team",
                bullets: [
                    "Framed as binary classification: will a supporter who was mailed give again within the window? Correctly flagged supporters can be mailed first, cutting wasted postage.",
                    "The data mixes demographic, behavioural, channel and campaign variables, mostly high-cardinality categories and binary flags, so the team leaned on tree-based models and kept logistic regression and a neural network for comparison.",
                    "Hypothesis going in: supporter-level features such as age or Mosaic segment would predict better than campaign-level ones. The results pointed the other way."
                ]
            },
            {
                title: "Data Preparation · Team",
                bullets: [
                    "Removed columns with no predictive value: supporter-table gift dates (already in the donation table), mailing country (Australia or blank), donor type (99.99% individuals), and campaign type and solicitation channel, which are constant once only DM campaigns remain.",
                    "Kept DM supporters contacted since 1 January 2022 and widened the label window to 100 days; 164,043 supporters remained.",
                    "Tested postcode-based age imputation and rejected it after it shrank the age gradient from about 11 points to 4.",
                    "Merged sparse categories in sub-type, thematic area, activity, payment type and donation channel, naming each group after its members so predictors stay readable.",
                    "Of the binary flags, kept only DoNotPhone and Has_Age: they show the largest giving gap and are independent of each other. All non-binary columns were kept."
                ]
            },
            {
                title: "Logistic Models · Team",
                bullets: [
                    "Baseline logistic regression on all features, untuned: accuracy 0.84, but returning-donor recall only 0.66 against 0.92 for non-donors, a bias towards the majority class.",
                    "Regularised versions tuned on λ = 1/C: L1 peaked near λ ≈ 8, L2 near λ ≈ 4 and Elastic Net (α = 0.5) near λ ≈ 6, all at about 0.828 accuracy. L2 was kept for its stable coefficients with correlated predictors.",
                    "Ridge raised returning-donor recall to 0.81 at 0.69 precision (12,277 found, 2,905 missed, 5,570 false alarms on 49,213 test supporters); AUC 0.89."
                ]
            },
            {
                title: "Tree Ensembles · Team",
                bullets: [
                    "Random forest, tuned in stages (narrow the grid around an interior best, shift it outward when the best sits on an edge): from 50 trees and depth 6 (balanced accuracy 0.8088) to 110 trees and depth 18 (0.8514), max_features fixed at sqrt.",
                    "Its test accuracy rose only 0.01 over the baseline, but returning-donor F1 rose 0.07 to 0.78, evidence of non-linear structure the logistic model missed.",
                    "XGBoost started strong and gained little from tuning (0.8382 → 0.8430 balanced accuracy); its returning-donor F1 matched random forest at 0.78 with a smaller train–test gap.",
                    "GBDT tried seven combinations with subsample fixed at 0.8; the best (100 trees, learning rate 0.09, depth 9) reached 0.808 balanced accuracy and 0.74 returning-donor F1."
                ]
            },
            {
                title: "Neural Network · Team",
                bullets: [
                    "Dense network with 0.2 dropout, Adam (learning rate 0.001), batch size 64 and up to 30 epochs with early stopping (patience 5); validation loss levelled off around epoch 10.",
                    "AUC 0.92, the highest of the models compared, though precision fell sharply at high recall.",
                    "SHAP ranked recurring donation channels, education and WASH content and the Paddington/Global Parent sub-type at the top, consistent with the tree models."
                ]
            },
            {
                title: "Model Selection · Team",
                bullets: [
                    "Accuracy alone misleads with a 69/31 class split, so the team weighed returning-donor F1 and recall, weighted F1, overfitting and computational cost.",
                    "XGBoost and the network tied on weighted F1 (0.86); XGBoost was slightly higher on returning-donor F1 (0.78 vs 0.77). Random forest had the best recall (0.84) but a larger train–test gap.",
                    "XGBoost was selected for its balance of precision and recall, small generalisation gap, built-in regularisation and efficient training. Against the baseline it finds about 1,300 more of the 10,093 returning donors in the test set."
                ]
            },
            {
                title: "What Drives a Return Gift · Team",
                bullets: [
                    "Campaign sub-type: child-focused appeals (Paddington Postcard, Global Parent, Children’s Emergency Fund) had about 80% giving rates and dominate the model.",
                    "Donation channel: recurring and journal- or phone-based channels signal sustained engagement; some digital-first payment methods were linked to one-off giving.",
                    "Timing and content: Christmas and end-of-financial-year appeals, signature events and quarterly engagements, and WASH and education themes."
                ]
            },
            {
                title: "Campaign Recommendation · Team",
                bullets: [
                    "Rank lapsed donors by XGBoost probability and mail the top 20% (about 20,000), a decile-based targeting practice from direct marketing.",
                    "Personalise messages to each donor’s campaign history and channel. Email inspires 33% of online donors, social media 29% and print only 9%, and 57% prefer email thank-yous (Nonprofit Tech for Good, 2025), so email goes first.",
                    "Reserve physical mail for older or traditionally engaged donors and use digital retargeting where contact data allows."
                ]
            },
            {
                title: "My Individual Follow-up · My part",
                bullets: [
                    "Rebuilt the team pipeline in my own notebook: DM filter, 2022 recency cut-off, 100-day label (both “gave to the contacted campaign” and “gave to any campaign”), and Mosaic segments assigned from postcode (70%) and age (30%) profiles.",
                    "Re-ran the chi-square checks on the 164,043-supporter set: every pair of contact flags was dependent, while Has_Postcode was independent of DoNotContact, DoNotPhone and DoNotEmail.",
                    "Wrote the consolidation maps for sub-type, thematic area, activity, payment type and donation channel, and built grouped and ungrouped feature sets with a shared stratified 80/20 split so models could be compared on identical rows.",
                    "Set up the final XGBoost grid around the team’s best settings (110–114 trees, learning rate 0.08–0.12, depth 9, subsample 0.8: 25 candidates × 5 folds), with the regularisation and class-weight terms left out after they added little."
                ]
            },
            {
                title: "Notes on the Figures",
                bullets: [
                    "Response rates (10–15%) and gift sizes (A$50, A$120) in the revenue scenarios are external benchmarks, not model outputs.",
                    "Campaign features describe campaigns a supporter had already given to, so part of the signal is past giving. A deployed version should build features only from data available before each mail-out."
                ]
            }
        ],

        zh: [
            {
                title: "问题定义 · 小组",
                bullets: [
                    "定义为二分类问题：寄过信的支持者会不会在窗口期内再次捐款？准确识别出这些人，就能优先给他们寄信，减少无效邮寄。",
                    "数据混合了人口、行为、渠道和活动变量，大多是高基数类别变量和二元变量，因此小组以树模型为主，同时保留逻辑回归和神经网络作对比。",
                    "最初假设支持者层面的特征（如年龄、Mosaic 分群）比活动层面的特征更有预测力，结果恰恰相反。"
                ]
            },
            {
                title: "数据准备 · 小组",
                bullets: [
                    "删除没有预测价值的字段：支持者表中的捐款日期（捐款表已有）、邮寄国家（只有澳大利亚或空白）、捐赠者类型（99.99% 为个人），以及只保留 DM 活动后取值不变的活动类型和募捐渠道。",
                    "保留 2022 年 1 月 1 日以来被 DM 联系过的支持者，并把标签窗口放宽到 100 天，最终剩下 164,043 名支持者。",
                    "测试了按邮编填补年龄，但填补后年龄梯度从约 11 个百分点缩小到 4 个，因此放弃。",
                    "合并子类型、主题领域、活动类型、支付方式和捐款渠道中的稀疏类别，并用成员类别的名称命名新组，保证预测变量可读。",
                    "二元变量只保留 DoNotPhone 和 Has_Age：两者捐款率差异最大，且彼此独立。所有非二元字段全部保留。"
                ]
            },
            {
                title: "逻辑回归模型 · 小组",
                bullets: [
                    "基准逻辑回归使用全部特征、不调参：准确率 0.84，但再捐赠者召回率只有 0.66，而非捐赠者为 0.92，明显偏向多数类。",
                    "正则化版本按 λ = 1/C 调参：L1 在 λ ≈ 8 附近最优，L2 在 λ ≈ 4，Elastic Net（α = 0.5）在 λ ≈ 6，准确率都在 0.828 左右。最终保留 L2，因为在预测变量相关时系数更稳定。",
                    "岭回归把再捐赠者召回率提高到 0.81，精确率 0.69（在 49,213 名测试样本中找出 12,277 人、漏掉 2,905 人、误报 5,570 人）；AUC 0.89。"
                ]
            },
            {
                title: "树集成模型 · 小组",
                bullets: [
                    "随机森林分阶段调参（最优值在区间内部时缩小网格，落在边缘时向外扩展）：从 50 棵树、深度 6（平衡准确率 0.8088）到 110 棵树、深度 18（0.8514），max_features 固定为 sqrt。",
                    "测试集准确率只比基准高 0.01，但再捐赠者 F1 提高 0.07 至 0.78，说明存在逻辑回归捕捉不到的非线性结构。",
                    "XGBoost 起点就很高，调参提升有限（平衡准确率 0.8382 → 0.8430）；其再捐赠者 F1 与随机森林相同，为 0.78，但训练集与测试集差距更小。",
                    "GBDT 在子采样固定为 0.8 的情况下测试了七组参数；最优组合（100 棵树、学习率 0.09、深度 9）平衡准确率 0.808，再捐赠者 F1 0.74。"
                ]
            },
            {
                title: "神经网络 · 小组",
                bullets: [
                    "全连接网络，dropout 0.2，Adam 优化器（学习率 0.001），批量 64，最多 30 轮并设早停（patience 5）；验证损失在第 10 轮左右趋于平稳。",
                    "AUC 0.92，为所有模型中最高，但在高召回率区间精确率下降明显。",
                    "SHAP 把定期扣款渠道、教育与 WASH 主题以及 Paddington/Global Parent 子类型排在最前，与树模型一致。"
                ]
            },
            {
                title: "模型选择 · 小组",
                bullets: [
                    "在 69/31 的类别比例下只看准确率会产生误导，因此小组综合考虑再捐赠者 F1 与召回率、加权 F1、过拟合和计算成本。",
                    "XGBoost 与神经网络的加权 F1 相同（0.86），XGBoost 的再捐赠者 F1 略高（0.78 对 0.77）。随机森林召回率最高（0.84），但训练与测试差距更大。",
                    "最终选择 XGBoost：精确率与召回率平衡、泛化差距小、自带正则化且训练高效。与基准模型相比，它在测试集的 10,093 名再捐赠者中多找出约 1,300 人。"
                ]
            },
            {
                title: "再次捐款的驱动因素 · 小组",
                bullets: [
                    "活动子类型：以儿童为主题的募捐（Paddington Postcard、Global Parent、Children’s Emergency Fund）捐款率约 80%，在模型中占主导。",
                    "捐款渠道：定期扣款以及期刊、电话类渠道代表持续参与；部分数字优先的支付方式与一次性捐款相关。",
                    "时机与内容：圣诞节和财年末募捐、标志性活动和季度活动，以及 WASH 与教育主题。"
                ]
            },
            {
                title: "营销建议 · 小组",
                bullets: [
                    "按 XGBoost 预测概率对流失捐赠者排序，向前 20%（约 2 万人）寄信，这是直复营销中常用的按十分位定向方法。",
                    "根据每位捐赠者的活动历史和渠道偏好定制信息。电子邮件对 33% 的线上捐赠者最有感召力，社交媒体 29%，纸质邮件只有 9%，且 57% 的人希望通过邮件收到感谢（Nonprofit Tech for Good，2025），因此以电子邮件优先。",
                    "纸质信件留给年长或传统型捐赠者；在有联系方式的情况下，辅以数字化再营销。"
                ]
            },
            {
                title: "个人跟进作业 · 本人负责",
                bullets: [
                    "在自己的 notebook 中重建小组数据管道：DM 筛选、2022 年时间截点、100 天标签（同时生成“向被联系活动捐款”和“向任意活动捐款”两个标签），以及按邮编画像 70%、年龄画像 30% 归入 Mosaic 分群。",
                    "在 164,043 人的数据集上重新做卡方检验：所有联系方式变量两两相关，而 Has_Postcode 与 DoNotContact、DoNotPhone、DoNotEmail 相互独立。",
                    "编写子类型、主题领域、活动类型、支付方式和捐款渠道的合并映射，并构建合并与未合并两套特征，使用同一个分层 80/20 划分，确保模型在完全相同的样本上比较。",
                    "围绕小组的最优参数设置最终的 XGBoost 网格（110–114 棵树、学习率 0.08–0.12、深度 9、子采样 0.8，共 25 组 × 5 折）；正则化和类别权重参数因提升有限而不再纳入。"
                ]
            },
            {
                title: "数字说明",
                bullets: [
                    "收入情景中的响应率（10–15%）和捐款额（50、120 澳元）来自外部基准，不是模型输出。",
                    "活动特征描述的是支持者已经捐过款的活动，因此部分信号来自过往捐款行为。若实际部署，应只使用每次寄信前已有的数据构建特征。"
                ]
            }
        ]
    }
},
{
    id: "beauty-review-insights",
    category: "ai-data",

    title: {
        en: "Beauty Review Insights Workbench — What 2,797 Serum Reviews Are Really Saying",
        zh: "美妆评论洞察工作台——2,797 条精华评论到底在说什么"
    },

    organisation: {
        en: "Personal project",
        zh: "个人作品"
    },

    role: {
        en: "Independent project · review analytics, rule-based text tagging, LLM-assisted labelling, e-commerce content",
        zh: "独立完成 · 评论分析、规则打标、大模型辅助标注、电商内容"
    },

    dates: {
        en: "Nov 2026",
        zh: "2026 年 11 月"
    },

    sortDate: "2026-11",

    logo: "",

    liveEmbed: {
        provider: "html",
        url: "dashboards/beauty-review-insights.html",
        height: 900,
        title: {
            en: "Beauty Review Insights Workbench (interactive, in Chinese)",
            zh: "美妆评论洞察工作台（可交互）"
        },
        caption: {
            en: "Scroll inside the frame or open it in a new tab. Try the review tagger (the same rules used for the statistics), the compliance checker and the simulated live-room radar; everything runs in the browser.",
            zh: "可在框内滚动，或在新窗口打开。可以试用评论打标器（就是统计用的那套规则）、合规词自查和直播弹幕预警模拟，全部在浏览器里运行。"
        }
    },

    background: {
        paragraphs: {
            en: [
                "Beauty e-commerce teams sit on thousands of reviews but rarely turn them into decisions. I wanted to show the full path: from raw reviews, to reliable labels, to findings about why people give bad ratings, and finally to content an operations team could publish the same day.",
                "The data is the public Sephora Skincare Reviews & Sentiment dataset on Kaggle (MIT licence). I focused on serums, the category with the clearest ingredient claims, and used Claude in two places only: to label a gold-standard sample for checking my rules, and to draft content from the findings, which I then rewrote line by line."
            ],
            zh: [
                "美妆电商手里有成千上万条评论，却很少真正转化为决策。我想完整展示一条路径：从原始评论，到可靠的标签，到“消费者为什么给差评”的结论，最后到运营当天就能上线的内容。",
                "数据来自 Kaggle 公开的 Sephora Skincare Reviews & Sentiment（MIT 许可）。我聚焦成分宣称最清晰的精华品类，只在两处用 Claude：一是标注金标准样本来检验规则，二是根据结论起草内容，再由我逐句改写。"
            ]
        },
        pointsTitle: {
            en: "What the workbench does",
            zh: "工作台能做什么"
        },
        points: {
            en: [
                "Explains complaints and praise: reasons for 1–2★ reviews, benefits in 5★ reviews, differences by skin type.",
                "Splits complaints by who can fix them: communication, trial guidance, or the brand’s supply chain.",
                "Compares ingredient tracks and price bands, and ranks tracks by an opportunity index for new products.",
                "Turns findings into selling points, a 60-second live-stream script, product-page copy and member messages, with a compliance checker, a live-chat alert prototype and a batch-quality watch."
            ],
            zh: [
                "解释差评与好评：1–2 星的差评原因、5 星好评提到的功效、不同肤质的差异。",
                "按“谁能解决”给差评分流：沟通、试用指引，还是品牌供应链。",
                "比较各成分赛道和价格带，并用机会指数排出改良新品的方向。",
                "把结论写成卖点、60 秒直播口播、详情页和会员消息，并配有合规词自查、直播弹幕预警原型和品质异常预警。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Cleaned 40,324 Sephora reviews to 2,797 serum reviews (282 products, 89 brands) and built keyword rules for 8 pain points, 7 benefits and 6 skin types; against a Claude-labelled, spot-checked gold set, raised hold-out precision from 0.54 to 0.82 (F1 0.59 → 0.72).",
            "Found irritation (25.9%) and “no visible effect” (25.1%) lead 1–2★ complaints and 36% are fixable through better communication; ranked 8 ingredient tracks by an opportunity index and turned the findings into live-stream scripts, product-page copy and a compliance checker."
        ],
        zh: [
            "把 40,324 条 Sephora 评论清洗为 2,797 条精华评论（282 款产品、89 个品牌），为 8 类痛点、7 类功效、6 类肤质建立关键词规则；以 Claude 标注并抽检的金标准检验，留出集精确率从 0.54 提升到 0.82（F1 0.59 → 0.72）。",
            "发现刺激（25.9%）和“没效果”（25.1%）是 1–2 星差评的前两位，36% 的差评可以靠更好的沟通化解；用机会指数给 8 个成分赛道排序，并把结论写成直播话术、详情页文案和合规词自查工具。"
        ]
    },

    tags: [
        "Text Analytics",
        "Rule-Based NLP",
        "LLM-Assisted Labelling",
        "Precision / Recall",
        "Voice of Customer",
        "E-commerce Content",
        "Claude",
        "JavaScript"
    ],

    metrics: [
        {
            value: "2,797",
            label: {
                en: "Serum reviews analysed, from 40,324 raw reviews",
                zh: "分析的精华评论，来自 40,324 条原始评论"
            }
        },
        {
            value: "0.54 → 0.82",
            label: {
                en: "Tagging precision on 100 held-out reviews",
                zh: "100 条留出评论上的打标精确率"
            }
        },
        {
            value: "21.9%",
            label: {
                en: "Reviews rated 1–2★ (613); average rating 3.92",
                zh: "1–2 星差评占比（613 条）；平均 3.92 星"
            }
        },
        {
            value: "35.9%",
            label: {
                en: "Complaints fixable through communication (220 of 613)",
                zh: "可靠沟通化解的差评（613 条中 220 条）"
            }
        },
        {
            value: "13.0% vs 33.2%",
            label: {
                en: "Negative-review rate: barrier repair vs brightening, the two ends of 8 tracks",
                zh: "差评率：屏障修护 vs 淡斑，8 个赛道的两端"
            }
        },
        {
            value: "18 / 20",
            label: {
                en: "Sampled batch-watch alerts that were real quality issues",
                zh: "抽查的品质预警中确属品质问题的条数"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My work · method",
                zh: "本人工作 · 方法"
            },
            title: {
                en: "From Raw Reviews to Publishable Content",
                zh: "从原始评论到可上线内容"
            },
            steps: {
                en: [
                    "Clean: 40,324 → 2,797 serum reviews",
                    "Rules: 8 pain points, 7 benefits, 6 skin types",
                    "Gold set: 241 reviews labelled by Claude, spot-checked",
                    "Refine: negation, star rating, context",
                    "Analyse: complaints, skin, tracks, price",
                    "Write: draft, rewrite, compliance check"
                ],
                zh: [
                    "清洗：40,324 → 2,797 条精华评论",
                    "建规则：8 类痛点、7 类功效、6 类肤质",
                    "金标准：Claude 标注 241 条并抽检",
                    "改规则：否定词、星级、语境",
                    "出结论：差评、肤质、赛道、价格",
                    "写内容：起草、改写、合规检查"
                ]
            },
            caption: {
                en: "Raw reviews were de-duplicated by ID (18,586 unique) before taking the serum category and linking price and product names. Of the 241 gold-standard reviews, 141 were used to refine the rules and 100 (40 negative, 20 neutral, 40 positive) were held back until the end, so the final accuracy is not inflated by tuning. Content was drafted by Claude from the findings and rewritten line by line.",
                zh: "原始评论先按 ID 去重（18,586 条），再取精华品类并关联价格与产品名。241 条金标准中，141 条用于改规则，100 条（40 条差评、20 条中评、40 条好评）留到最后才用，因此最终准确率不会因调规则而虚高。内容由 Claude 按结论起草，再逐句改写。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · validation",
                zh: "本人工作 · 验证"
            },
            title: {
                en: "How Accurate the Tagging Rules Are",
                zh: "打标规则准不准"
            },
            columns: {
                en: ["Metric (hold-out)", "First version", "Final", "Reading"],
                zh: ["指标（留出集）", "初版", "最终", "解读"]
            },
            rows: [
                [{ en: "Precision", zh: "精确率" }, "0.54", "0.82", { en: "Most labels are right, so the shares below can be trusted", zh: "打上的标签大多是对的，下面的占比可以信" }],
                [{ en: "Recall", zh: "召回率" }, "0.63", "0.64", { en: "“No effect” and “not worth it” are phrased too many ways; rules catch the common ones", zh: "“没效果”“不值”的说法太多样，规则只抓到常见表达" }],
                [{ en: "F1", zh: "F1" }, "0.59", "0.72", { en: "0.80 on the 141 tuning reviews, so some overfitting; 0.72 is the honest figure", zh: "改规则用的 141 条上是 0.80，有过拟合，以 0.72 为准" }]
            ],
            highlightRow: 0,
            caption: {
                en: "Packaging complaints were missed entirely on the hold-out set because the rules were made strict to avoid false alarms. That points to a division of labour: rules for high-volume, fixed phrasing; an LLM to read the rest one by one.",
                zh: "“包装”类在留出集上一条也没抓到，因为为了压误报，规则卡得太严。这说明更合理的分工是：规则负责量大、表达固定的部分，其余交给大模型逐条读。"
            }
        },
        {
            type: "bars",
            source: {
                en: "My work · findings",
                zh: "本人工作 · 结论"
            },
            title: {
                en: "Why People Give 1–2 Stars (613 Reviews, Multiple Reasons Allowed)",
                zh: "1–2 星差评的原因（613 条，可多选）"
            },
            items: [
                { label: { en: "Irritation / allergy", zh: "刺激过敏" }, value: 25.9, suffix: "%", highlight: true },
                { label: { en: "No visible effect", zh: "无明显效果" }, value: 25.1, suffix: "%", highlight: true },
                { label: { en: "Breakouts", zh: "致痘闷痘" }, value: 20.1, suffix: "%" },
                { label: { en: "Price / value", zh: "价格价值" }, value: 20.1, suffix: "%" },
                { label: { en: "Smell", zh: "气味" }, value: 19.4, suffix: "%" },
                { label: { en: "Sticky / heavy", zh: "黏腻厚重" }, value: 10.1, suffix: "%" },
                { label: { en: "Packaging", zh: "包装" }, value: 3.4, suffix: "%" },
                { label: { en: "Pilling", zh: "搓泥" }, value: 2.8, suffix: "%" }
            ],
            caption: {
                en: "Irritation and “no effect” tie at the top: the first needs trial guidance and after-sales care, the second a clear statement of how long results take. Nearly one in five complaints mentions smell, yet product pages rarely describe it, a cheap fix.",
                zh: "刺激和“没效果”并列前两位：前者靠试用指引和售后关怀兜底，后者要讲清见效周期。近两成差评提到气味，详情页却很少写气味，补一句描述几乎没有成本。"
            }
        },
        {
            type: "bars",
            source: {
                en: "My work · findings",
                zh: "本人工作 · 结论"
            },
            title: {
                en: "What 5★ Reviews Praise (1,591 Reviews, Multiple Allowed)",
                zh: "5 星好评提到的功效与体验（1,591 条，可多选）"
            },
            items: [
                { label: { en: "Hydration", zh: "保湿补水" }, value: 37.9, suffix: "%" },
                { label: { en: "Brightening / dark spots", zh: "提亮淡斑" }, value: 36.5, suffix: "%" },
                { label: { en: "Skin feel / texture", zh: "肤感质地" }, value: 31.7, suffix: "%", highlight: true },
                { label: { en: "Soothing / repair", zh: "舒缓修护" }, value: 20.6, suffix: "%" },
                { label: { en: "Anti-ageing / firming", zh: "抗老紧致" }, value: 17.5, suffix: "%" },
                { label: { en: "Clearing acne", zh: "净痘清痘" }, value: 12.8, suffix: "%" },
                { label: { en: "Oil control / pores", zh: "控油毛孔" }, value: 5.8, suffix: "%" }
            ],
            caption: {
                en: "Reviews that mention skin feel average 4.63★, higher than any single benefit: fast absorption and no stickiness are the most direct source of praise, so a live stream should open with an on-skin demo.",
                zh: "提到肤感的评论平均 4.63 星，高于任何一项功效：吸收快、不黏是最直接的好评来源，所以直播开场应先做上脸演示。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · findings",
                zh: "本人工作 · 结论"
            },
            title: {
                en: "By Skin Type (Self-Reported in Reviews)",
                zh: "按肤质看（来自评论自述）"
            },
            columns: {
                en: ["Skin type", "Reviews", "Avg ★", "Neg. rate", "Main complaints", "What to do"],
                zh: ["肤质", "评论数", "平均星级", "差评率", "主要痛点", "该怎么做"]
            },
            rows: [
                [{ en: "Sensitive", zh: "敏感肌" }, "337", "3.95", "20.8%", { en: "Irritation, breakouts, smell", zh: "刺激、致痘、气味" }, { en: "Recommend a patch test; avoid absolute “gentle” claims", zh: "强调先在耳后试用，避免绝对化的“温和”承诺" }],
                [{ en: "Dry", zh: "干皮" }, "133", "4.47", "9.0%", { en: "Sticky, no effect", zh: "黏腻、没效果" }, { en: "Most satisfied; use their feedback in hydration content", zh: "满意度最高，保湿类内容多用干皮反馈" }],
                [{ en: "Acne-prone", zh: "痘肌" }, "83", "3.84", "24.1%", { en: "Breakouts, sticky", zh: "致痘、黏腻" }, { en: "Highest negative rate; explain texture and clogging risk", zh: "差评率最高，讲清质地和是否易闷痘" }],
                [{ en: "Combination", zh: "混合皮" }, "77", "4.18", "14.3%", { en: "Breakouts, sticky, price", zh: "致痘、黏腻、价格" }, { en: "Zone-by-zone use, less on the T-zone", zh: "给分区用法，T 区少量" }],
                [{ en: "Oily", zh: "油皮" }, "60", "4.05", "21.7%", { en: "Sticky, breakouts", zh: "黏腻、致痘" }, { en: "Lead with a light texture; show absorption speed", zh: "主推清爽质地，演示吸收速度" }]
            ],
            caption: {
                en: "Complaints per skin type come from that group’s 1–3★ reviews.",
                zh: "各肤质的痛点统计自该肤质的 1–3 星评论。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · findings",
                zh: "本人工作 · 结论"
            },
            title: {
                en: "How Many Complaints Could Have Been Avoided",
                zh: "差评里，有多少本可以避免"
            },
            columns: {
                en: ["Who can fix it", "Reviews", "Share", "What it covers", "Response"],
                zh: ["谁能解决", "条数", "占比", "包括什么", "应对"]
            },
            rows: [
                [{ en: "Communication", zh: "沟通可化解" }, "220", "35.9%", { en: "No effect 105, not worth it 79, smell 77, sticky 33, pilling 13 (multiple allowed)", zh: "没效果 105、不值 79、气味 77、黏腻 33、搓泥 13（可多选）" }, { en: "Set expectations on the page, in the live stream and in service replies", zh: "在详情页、直播和客服回复里提前讲清预期" }],
                [{ en: "Trial guidance", zh: "试用可降低" }, "237", "38.7%", { en: "Mentions irritation or breakouts", zh: "提到刺激或致痘" }, { en: "Patch-test steps with the first order, a check-in in week one", zh: "首单附试用步骤，首周回访" }],
                [{ en: "Brand and supply chain", zh: "需反馈品牌" }, "71", "11.6%", { en: "Damaged packaging, empty bottles, separation, off smell, suspected reformulation", zh: "包装损坏、空瓶、分层、变味、疑似换配方" }, { en: "Collect by batch and pass to the brand", zh: "按批次汇总给品牌和供应链" }],
                [{ en: "Unclassified", zh: "未归类" }, "85", "13.9%", { en: "“Didn’t like it”, “not for me” or unusual phrasing", zh: "“不喜欢”“不适合我”或比较特别的表达" }, { en: "Left for an LLM to read one by one", zh: "交给大模型逐条读" }]
            ],
            caption: {
                en: "Each group comes with a customer-service reply template; for example, for “no effect”: suggest four weeks of use before judging, send a usage guide, and offer a sample of another texture.",
                zh: "每一类都配了客服回复模板。例如“没效果”类：建议连续使用 4 周再评估，补发使用指南，并可申请其他质地的小样。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · assortment",
                zh: "本人工作 · 选品"
            },
            title: {
                en: "Ingredient Tracks: Reputation and Opportunity",
                zh: "成分赛道：口碑与机会"
            },
            columns: {
                en: ["Track", "Reviews", "Avg ★", "Neg. rate", "Opportunity", "Top complaints"],
                zh: ["赛道", "评论", "平均星级", "差评率", "机会指数", "差评里最常提到"]
            },
            rows: [
                [{ en: "Brightening / tranexamic acid", zh: "淡斑/传明酸" }, "449", "3.51", "33.2%", "100", { en: "Irritation 30.2%, no effect 24.8%", zh: "刺激 30.2%、没效果 24.8%" }],
                [{ en: "Vitamin C", zh: "维C" }, "452", "3.67", "29.6%", "94", { en: "Irritation 29.9%, no effect 19.4%", zh: "刺激 29.9%、没效果 19.4%" }],
                [{ en: "Retinoids", zh: "A 醇类" }, "402", "3.81", "24.1%", "80", { en: "Irritation 40.2%, smell 23.7%", zh: "刺激 40.2%、气味 23.7%" }],
                [{ en: "Peptides", zh: "多肽" }, "256", "3.72", "27.7%", "69", { en: "Smell 23.9%, irritation 23.9%", zh: "气味 23.9%、刺激 23.9%" }],
                [{ en: "Hyaluronic acid", zh: "玻尿酸" }, "393", "4.09", "17.3%", "67", { en: "No effect 33.8%, breakouts 26.5%", zh: "没效果 33.8%、致痘 26.5%" }],
                [{ en: "Exfoliating acids", zh: "酸类焕肤" }, "291", "3.92", "21.3%", "64", { en: "Breakouts 33.9%, irritation 30.6%", zh: "致痘 33.9%、刺激 30.6%" }],
                [{ en: "Niacinamide", zh: "烟酰胺" }, "307", "4.06", "17.9%", "61", { en: "No effect 29.1%, irritation 21.8%", zh: "没效果 29.1%、刺激 21.8%" }],
                [{ en: "Barrier / ceramides", zh: "屏障/神经酰胺" }, "154", "4.29", "13.0%", "37", { en: "Irritation 25.0%, smell 20.0%", zh: "刺激 25.0%、气味 20.0%" }]
            ],
            highlightRow: 0,
            caption: {
                en: "Tracks come from ingredient or benefit claims in product names. Opportunity index = geometric mean of demand (reviews ÷ largest track) and gap (negative rate ÷ highest rate) × 100. Brightening and vitamin C are wanted but disappoint many buyers, so a gentler brightening serum is worth testing; barrier repair scores lowest because its reputation is already stable, making it a good entry product. With about 10 reviews per product, only tracks are compared, not products.",
                zh: "赛道按产品名中的成分或功效宣称归类。机会指数 = 需求分（评论量 ÷ 最大赛道评论量）与缺口分（差评率 ÷ 最高差评率）的几何平均 × 100。淡斑和维C是消费者想要、却让很多人失望的赛道，“温和型淡斑精华”值得验证；屏障修护指数最低，是因为口碑已稳定，适合做引流款。每款产品约 10 条评论，所以只比较赛道，不做单品排名。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · pricing",
                zh: "本人工作 · 价格"
            },
            title: {
                en: "The Higher the Price, the More Complaints Are About Value",
                zh: "价格越高，差评越在意“值不值”"
            },
            columns: {
                en: ["Price band", "Reviews", "Avg ★", "Not worth it", "No effect"],
                zh: ["价格带", "评论", "平均星级", "嫌不值", "嫌没效"]
            },
            rows: [
                ["< $30", "602", "3.83", "9.0%", "29.2%"],
                ["$30–60", "810", "3.98", "19.2%", "19.2%"],
                ["$60–100", "960", "3.91", "22.0%", "25.7%"],
                ["≥ $100", "425", "3.94", "35.2%", "28.4%"]
            ],
            highlightRow: 3,
            caption: {
                en: "Shares are of each band’s negative reviews. Over a third of complaints about products above $100 say “not worth it”, while complaints under $30 are more about no effect, so premium products should explain cost per day and usage period, and budget products how soon results appear.",
                zh: "占比为该价格带差评中的比例。百元以上产品的差评，超过三分之一在说不值；三十美元以下的差评，更多在说没效果。因此高价款要讲每天成本和使用周期，平价款要讲多久能看到变化。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · quality watch",
                zh: "本人工作 · 品质预警"
            },
            title: {
                en: "Batch-Quality Watch: The Six Most Concentrated Alerts",
                zh: "品质异常预警：最集中的六个案例"
            },
            columns: {
                en: ["Category", "Reviews", "Within (days)", "Signal"],
                zh: ["品类", "条数", "集中天数", "信号"]
            },
            rows: [
                [{ en: "Face oil", zh: "面部油" }, "6", "7", { en: "Separation", zh: "分层" }],
                [{ en: "Cleanser", zh: "洁面" }, "6", "22", { en: "Reformulation", zh: "换配方" }],
                [{ en: "Toner", zh: "爽肤水" }, "5", "22", { en: "Spoiled, reformulation", zh: "变质、换配方" }],
                [{ en: "Cleanser", zh: "洁面" }, "4", "12", { en: "Separation, reformulation", zh: "分层、换配方" }],
                [{ en: "Moisturiser", zh: "面霜" }, "3", "9", { en: "Reformulation", zh: "换配方" }],
                [{ en: "Tinted moisturiser", zh: "有色面霜" }, "3", "14", { en: "Separation", zh: "分层" }]
            ],
            caption: {
                en: "Across all 18,586 skincare reviews, 343 reviews rated 1–3★ mention reformulation, separation, spoilage, expiry or empty bottles. Rule: 3 or more for the same product within 30 days triggers a check with the brand; 9 products triggered, and 18 of 20 sampled hits were real quality issues. Brands are not named. With only the latest ~10 reviews per product, some clustering comes from how the data was collected.",
                zh: "在全部 18,586 条护肤评论中，有 343 条 1–3 星评论提到换配方、分层、变质、过期或空瓶。规则：同一款产品 30 天内出现 3 条及以上，就推送品牌核查批次；共有 9 款产品触发，抽查 20 条命中评论中 18 条确属品质问题。不点名品牌。由于每款产品只有约 10 条最新评论，部分“短期集中”来自数据抓取方式。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Data and Cleaning",
                bullets: [
                    "Sephora Skincare Reviews & Sentiment (Kaggle, MIT licence): 40,324 raw reviews, de-duplicated by review ID to 18,586, then the serum category: 2,797 reviews of 282 products from 89 brands, linked to price and product name.",
                    "Ratings: 1,591 five-star, 396 four-star, 197 three-star, 212 two-star and 401 one-star; average 3.92, with 613 reviews (21.9%) at 1–2 stars."
                ]
            },
            {
                title: "Labelling and Validation",
                bullets: [
                    "Categories: 8 pain points, 7 benefits and experiences, 6 skin types, first captured with keyword rules.",
                    "Gold standard: Claude labelled 241 reviews one by one, which I spot-checked; 141 were used to study errors and refine the rules, 100 were held back for the final test.",
                    "Fixes from reading each error: negation (“isn’t sticky” is not a sticky complaint), star-rating constraints (most complaint words in 4–5★ reviews are not counted as complaints), and sentence context (a pump only counts as a packaging complaint if the same sentence says it broke, leaked or failed).",
                    "Result on the hold-out set: precision 0.54 → 0.82, recall 0.63 → 0.64, F1 0.59 → 0.72."
                ]
            },
            {
                title: "Content Built from the Findings",
                bullets: [
                    "Two fictional example products, so no real brand is implied: a barrier-repair serum (most stable track, aimed at sensitive skin) and a vitamin C serum (largest track, high irritation and “no effect” complaints).",
                    "For each: three selling points, a 60-second live-stream script (opening, pain point, demo, usage, call to action), product-page hero copy, Q&A answers and member messages on days 1, 7 and 28 after purchase.",
                    "Claude drafted from the findings; I rewrote every line, and the copy passed a compliance check."
                ]
            },
            {
                title: "Tools in the Workbench",
                bullets: [
                    "Review tagger: paste an English review and choose a star rating to see the same rules used for the statistics, with matched words highlighted and negated words struck through.",
                    "Compliance checker: flags common risky claims in Chinese cosmetics copy under the Advertising Law and cosmetic claim rules, such as absolute terms, “zero irritation”, anti-allergy, medical terms, whitening and spot-removal claims and quick-result promises. For self-checks only, not legal advice.",
                    "Live-room radar: a simulated stream of 50 chat messages classified by Chinese keyword rules into 6 question types; when 5 or more of the last 15 fall into one type, the host is prompted with a matching script."
                ]
            },
            {
                title: "What It Means for E-commerce Operations",
                bullets: [
                    "Assortment: use barrier repair as an entry product; test a gentle brightening serum suggested by the opportunity index, with samples at launch.",
                    "Live stream: open with an on-skin texture demo; when the radar flags a topic, switch scripts; explain usage before benefits for retinoids and vitamin C.",
                    "Product page: state skin feel, smell and time to results above the fold; add cost per day for premium products.",
                    "Members and service: day 1, 7 and 28 messages (patch test, skin-feel check-in, before-and-after review and repurchase); route complaints by who can fix them."
                ]
            },
            {
                title: "Limitations",
                bullets: [
                    "The reviews are from Sephora in the US, in English; they do not represent Chinese consumers, so the analysis should be rerun on Tmall or Douyin reviews before use there.",
                    "About 10 reviews per product, so conclusions stay at track level, and differences between tracks are correlations, not causes.",
                    "Skin type and ingredients come from self-descriptions and product names, so some are missed; some reviews come from brand-gifted trials, which may lift ratings."
                ]
            }
        ],

        zh: [
            {
                title: "数据与清洗",
                bullets: [
                    "Sephora Skincare Reviews & Sentiment（Kaggle，MIT 许可）：40,324 条原始评论按评论 ID 去重为 18,586 条，再取精华品类：2,797 条评论，覆盖 89 个品牌的 282 款产品，并关联价格与产品名。",
                    "星级分布：5 星 1,591 条、4 星 396 条、3 星 197 条、2 星 212 条、1 星 401 条；平均 3.92 星，1–2 星差评 613 条（21.9%）。"
                ]
            },
            {
                title: "打标与验证",
                bullets: [
                    "标签体系：8 类痛点、7 类功效与体验、6 类肤质，先用关键词规则做第一版。",
                    "金标准：用 Claude 逐条标注 241 条评论，并由我抽检；其中 141 条用来分析误判、修改规则，100 条留到最后测试。",
                    "逐条看误判后的改进：否定词识别（“isn’t sticky”不算黏腻）、星级约束（4–5 星评论里的大部分痛点词不计为差评）、语境判断（只有同一句里说坏了、漏了、按不出来，泵头才算包装问题）。",
                    "留出集结果：精确率 0.54 → 0.82，召回率 0.63 → 0.64，F1 0.59 → 0.72。"
                ]
            },
            {
                title: "根据结论写的内容",
                bullets: [
                    "两款均为虚构示例产品，不对应任何真实品牌：屏障修护精华（口碑最稳的赛道，面向敏感肌）和维C焕亮精华（评论量最大的赛道，刺激和没效果类差评多）。",
                    "每款都有三条卖点、60 秒直播口播（开场、痛点、演示、用法、下单）、详情页首屏文案、问答，以及购买后第 1、7、28 天的会员消息。",
                    "Claude 按结论起草，本人逐句改写，并通过合规词检查。"
                ]
            },
            {
                title: "工作台里的工具",
                bullets: [
                    "评论打标器：贴一条英文评论、选择星级，即可看到统计用的同一套规则如何打标，命中的词高亮，被否定词排除的词划线。",
                    "合规词自查：参考《广告法》和化妆品功效宣称相关规定，标出中文文案里的常见风险表述，如绝对化用语、“零刺激”、抗敏、医疗用语、美白祛斑类宣称和速效承诺。仅供运营自查，不替代法务审核。",
                    "直播弹幕预警：50 条模拟弹幕按中文关键词规则归入 6 类问题；最近 15 条中某一类达到 5 条，就提示主播切换到对应话术。"
                ]
            },
            {
                title: "对电商运营的意义",
                bullets: [
                    "选品：屏障修护类做拉新款；按机会指数验证温和型淡斑新品，上新同步备小样。",
                    "直播：开场先上脸演示肤感；弹幕预警提示时切换话术；A 醇和维C 先讲用法再讲功效。",
                    "详情页：首屏写清肤感、气味和见效周期；高价款补充每天成本。",
                    "会员与客服：首购后第 1、7、28 天分别提醒试用、回访肤感、对比复盘和复购；差评按“谁能解决”分流。"
                ]
            },
            {
                title: "局限",
                bullets: [
                    "数据是美国 Sephora 的英文评论，不能直接代表中国消费者，落地前要用天猫、抖音的评论重跑。",
                    "每款产品约 10 条评论，结论只停在赛道层面，赛道之间的差异是相关，不是因果。",
                    "肤质和成分来自评论自述与产品名，会有漏标；部分评论来自品牌赠送的试用，好评率可能偏高。"
                ]
            }
        ]
    }
},
{
    id: "cicc-investment-analysis",
    category: "finance-investment",

    title: {
        en: "CICC Investment Analysis Project — Business Model, Industry and Financial Analysis to an Investment Report",
        zh: "中金证券投资分析项目——从商业模式、行业与财务分析到投资分析报告"
    },

    organisation: {
        en: "CICC",
        zh: "中金证券"
    },

    role: {
        en: "Investment analysis project · business model, industry and financial analysis",
        zh: "投资分析项目 · 商业模式、行业与财务分析"
    },

    status: {
        en: "In progress",
        zh: "进行中"
    },

    dates: {
        en: "18 Nov – 19 Dec 2026",
        zh: "2026.11.18 – 2026.12.19"
    },

    sortDate: "2026-11",

    logo: "",

    overviewBullets: {
        en: [
            "Four-week CICC project on one target company: breaking down its business model (revenue and cost structure, profit model, core resources and moat) and its industry (size, supply and demand, competition, growth drivers), with Excel waterfall and dual-axis charts and a forecasting model.",
            "Analysing the financial statements for profitability, operating efficiency, solvency and growth with pivot tables, then helping restructure and polish the investment analysis deck into the final research report."
        ],
        zh: [
            "中金证券四周投资分析项目，围绕一家目标公司：拆解商业模式（收入结构、成本结构、盈利模式、核心资源与竞争壁垒）和行业（规模、供需、竞争格局、增长驱动），用 Excel 制作瀑布图、双坐标轴图并搭建预测模型。",
            "梳理财务报表，分析盈利能力、营运能力、偿债能力与成长性，使用数据透视表等工具做数据分析，并协助优化和美化投资分析 PPT，输出最终版研究报告。"
        ]
    },

    tags: [
        "Equity Research",
        "Business Model Analysis",
        "Industry Analysis",
        "Financial Statement Analysis",
        "Forecasting Model",
        "Excel",
        "PowerPoint"
    ],

    metrics: [
        {
            value: "4",
            label: {
                en: "Weekly modules, from business model to final report",
                zh: "每周一个模块，从商业模式到最终报告"
            }
        },
        {
            value: "5",
            label: {
                en: "Business-model lenses: revenue, cost, profit model, core resources, moat",
                zh: "商业模式拆解维度：收入、成本、盈利模式、核心资源、竞争壁垒"
            }
        },
        {
            value: "4",
            label: {
                en: "Financial angles: profitability, operating efficiency, solvency, growth",
                zh: "财务分析角度：盈利、营运、偿债、成长"
            }
        }
    ],

    visuals: [
        {
            type: "table",
            source: {
                en: "Project outline",
                zh: "项目大纲"
            },
            title: {
                en: "Four-Week Structure",
                zh: "四周安排"
            },
            columns: {
                en: ["Week", "Topic", "Goal", "My work"],
                zh: ["周次", "主题", "核心目标", "本人工作"]
            },
            rows: [
                ["1", { en: "Business model", zh: "公司商业模式分析" }, { en: "Break down revenue structure, cost structure, profit model and moat", zh: "掌握商业模式拆解方法，梳理收入结构、成本结构、盈利模式与核心壁垒" }, { en: "Help break down the target company’s business model; Excel waterfall and dual-axis charts", zh: "协助拆解目标公司商业模式；用 Excel 完成瀑布图、双坐标轴图等可视化" }],
                ["2", { en: "Industry analysis", zh: "行业分析" }, { en: "Industry size, supply and demand, competition and growth drivers", zh: "掌握行业规模、供需格局、竞争格局与增长驱动分析" }, { en: "Take part in the industry study, identify key variables and build a forecasting model", zh: "参与整体行业研究，梳理关键变量，搭建预测模型" }],
                ["3", { en: "Operations and financials", zh: "公司经营状况、财务分析" }, { en: "Link the three statements, financial ratios, performance attribution and valuation basics", zh: "掌握三张表勾稽、财务比率、业绩归因与估值基础" }, { en: "Review reported results; analyse profitability, efficiency, solvency and growth with pivot tables", zh: "梳理财务报表业绩，分析盈利、营运、偿债能力与成长性；使用数据透视表分析" }],
                ["4", { en: "Investment report", zh: "如何撰写金融投资分析报告" }, { en: "Connect the full framework into a presentable report", zh: "串联完整分析框架，形成可展示的报告 / 作品集" }, { en: "Help restructure and polish the investment analysis deck; produce the final research report", zh: "协助完成投资分析 PPT 结构优化与美化，输出最终版研究报告" }]
            ],
            caption: {
                en: "Outline only for now: the target company, model outputs and report will be added when the project is complete.",
                zh: "目前只是大纲：目标公司、模型结果和报告内容将在项目结束后补充。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Week 1 · Business Model",
                bullets: [
                    "Help break down the target company’s business model: revenue structure, cost structure, profit model, core resources and competitive moat.",
                    "Visualise the breakdown in Excel with waterfall and dual-axis charts."
                ]
            },
            {
                title: "Week 2 · Industry Analysis",
                bullets: [
                    "Take part in the overall industry study: market size, supply and demand, competitive landscape, growth drivers and key variables.",
                    "Build a forecasting model from those drivers."
                ]
            },
            {
                title: "Week 3 · Operations and Financials",
                bullets: [
                    "Review the company’s reported results and how the three financial statements link together.",
                    "Analyse profitability, operating efficiency, solvency and growth, using pivot tables and other Excel tools; cover performance attribution and the basics of valuation."
                ]
            },
            {
                title: "Week 4 · Investment Report",
                bullets: [
                    "Connect the full analysis into one framework.",
                    "Help restructure and polish the investment analysis PowerPoint and produce the final research report."
                ]
            }
        ],

        zh: [
            {
                title: "第 1 周 · 公司商业模式分析",
                bullets: [
                    "协助拆解目标公司商业模式，分析收入结构、成本结构、盈利模式、核心资源与竞争壁垒。",
                    "使用 Excel 完成瀑布图、双坐标轴图等可视化。"
                ]
            },
            {
                title: "第 2 周 · 行业分析",
                bullets: [
                    "参与整体行业研究，分析行业规模、供需格局、竞争格局、增长驱动与关键变量。",
                    "基于这些驱动因素搭建预测模型。"
                ]
            },
            {
                title: "第 3 周 · 公司经营状况与财务分析",
                bullets: [
                    "梳理财务报表业绩，理解三张表之间的勾稽关系。",
                    "分析盈利能力、营运能力、偿债能力与成长性，使用数据透视表等工具进行数据分析；涉及业绩归因与估值基础。"
                ]
            },
            {
                title: "第 4 周 · 投资分析报告",
                bullets: [
                    "串联完整的分析框架。",
                    "协助完成投资分析 PPT 结构优化与美化，输出最终版研究报告。"
                ]
            }
        ]
    }
},
{
    id: "graduate-outcome-dashboard",
    category: "analytics-systems",

    title: {
        en: "Graduate Outcome Dashboard — Rebuilding QILT’s ComparED as One Interactive View",
        zh: "毕业生成果看板——把 QILT 的 ComparED 重建为一个可交互的整合视图"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Team of 3 · my part: design-vs-implementation review, code review and testing, demo recording",
        zh: "3 人小组 · 本人负责：设计与实现对比、代码审阅与测试、演示录制"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2025",
        zh: "2025 年第二学期"
    },

    sortDate: "2025-11",

    logo: "",

    liveEmbed: {
        provider: "html",
        url: "dashboards/graduate-outcomes.html",
        height: 1420,
        title: {
            en: "Australian University Graduate Outcome Dashboard (2019–2024)",
            zh: "澳大利亚大学毕业生成果看板（2019–2024）"
        },
        caption: {
            en: "Pick an institution at the top for its scores, ranking, factor breakdown and trend; set Institution A and B (institution → discipline → major → student type) to compare them on the radars. Built on synthetic, QILT-shaped data: university names are real, scores are not.",
            zh: "在顶部选择学校，查看其分数、排名、因子构成和趋势；在下方分别设置 A、B（学校 → 学院 → 专业 → 学生类型），用雷达图对比。数据为按 QILT 结构生成的合成数据：学校名称真实，分数并非真实结果。"
        }
    },

    background: {
        paragraphs: {
            en: [
                "Graduate outcomes matter to students choosing a course, to universities defending their reputation and enrolments, and to policymakers planning funding. In Australia they are measured by QILT through three surveys: the Student Experience Survey (SES), the Graduate Outcomes Survey (GOS) and the Employer Satisfaction Survey (ESS). Its public tool, ComparED, shows only a small part of that.",
                "The team identified four gaps in ComparED: the three surveys sit in separate sections; only four GOS indicators and one satisfaction measure appear, with breakdowns such as international vs domestic left in static annual reports; comparisons are limited to a single year; and filters cover only institution and study area.",
                "Our dashboard puts all three surveys in one view, breaks each into its factors, adds a six-year trend against the national average and an A/B comparison down to major and student type. Factor-level QILT data is not public, so it runs on a 50,000-record synthetic dataset generated to match QILT’s structure. The team built it as a Python Dash app; the version embedded above was rebuilt as a static page so it runs on this site."
            ],
            zh: [
                "毕业生成果数据对选课的学生、维护声誉和招生的大学，以及规划拨款的政策制定者都很重要。在澳大利亚，这些数据由 QILT 通过三项调查收集：学生体验调查（SES）、毕业生成果调查（GOS）和雇主满意度调查（ESS）。其公开工具 ComparED 只展示了其中一小部分。",
                "小组指出 ComparED 的四个不足：三项调查分散在不同版块；GOS 只列出四个指标、满意度只有一个指标，国际生与本地生等细分只在静态年报里；只能比较单一年份；筛选只能按学校和学科领域。",
                "我们的看板把三项调查放进同一视图，拆解每项调查的构成因子，加入对比全国平均的六年趋势，以及细化到专业和学生类型的 A/B 对比。由于 QILT 的因子级数据不公开，看板使用按 QILT 结构生成的 5 万条合成数据。小组用 Python Dash 开发；上方嵌入的版本已重建为静态网页，可直接在本网站运行。"
            ]
        },
        pointsTitle: {
            en: "What the team delivered",
            zh: "小组交付内容"
        },
        points: {
            en: [
                "A working dashboard (Python Dash and Plotly) with the code and dataset.",
                "A report covering the problem, objectives, data, design vs implementation, critical evaluation and reflection.",
                "A video walkthrough of the dashboard."
            ],
            zh: [
                "可运行的看板（Python Dash 与 Plotly）及代码和数据集。",
                "报告：问题、目标、数据、设计与实现对比、批判性评估与反思。",
                "看板演示视频。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "In a team of 3, built an interactive dashboard combining QILT’s three surveys (11 weighted factors) across 30 universities and 60 majors, 2019–2024 (synthetic data), replacing ComparED’s single-year, 2-filter view with 4-level filters, A/B comparison and trends.",
            "My part: compared the build with the original design and justified 4 changes (ranking card, stacked bars instead of pies, Major filter, 11-factor radar), reviewed and tested the code and 50,000-row dataset, and recorded the demo."
        ],
        zh: [
            "3 人小组项目：开发交互看板，整合 QILT 三项调查（11 个加权因子），覆盖 30 所大学、60 个专业和 2019–2024 年（合成数据），把 ComparED 单一年份、2 个筛选条件的视图升级为 4 级筛选、A/B 对比和趋势分析。",
            "本人负责：对比实现与原设计并论证 4 处改动（排名卡、用堆叠条形图替代饼图、新增专业筛选、11 因子雷达图），审阅和测试代码及 5 万行数据集，并录制演示。"
        ]
    },

    tags: [
        "Python",
        "Dash",
        "Plotly",
        "Dashboard Design",
        "Interactive Visualisation",
        "Synthetic Data",
        "Higher Education Data"
    ],

    metrics: [
        {
            value: "3 → 1",
            label: {
                en: "Surveys (SES, GOS, ESS) brought into a single view",
                zh: "三项调查（SES、GOS、ESS）整合进一个视图"
            }
        },
        {
            value: "11",
            label: {
                en: "Weighted factors behind the three survey scores",
                zh: "构成三项调查分数的加权因子"
            }
        },
        {
            value: "2 → 4",
            label: {
                en: "Filter levels: institution and area → institution, faculty, major, student type",
                zh: "筛选层级：学校、学科 → 学校、学院、专业、学生类型"
            }
        },
        {
            value: "1 → 6",
            label: {
                en: "Years shown: single-year view → 2019–2024 trend with national average",
                zh: "可看年份：单一年份 → 2019–2024 趋势并对比全国平均"
            }
        },
        {
            value: "50,000",
            label: {
                en: "Synthetic records shaped like QILT data (30 universities, 60 majors)",
                zh: "按 QILT 结构生成的合成记录（30 所大学、60 个专业）"
            }
        },
        {
            value: "4",
            label: {
                en: "Design changes I documented and justified (Elements A–D)",
                zh: "本人记录并论证的设计改动（元素 A–D）"
            }
        }
    ],

    visuals: [
        {
            type: "table",
            source: {
                en: "Team · problem",
                zh: "小组 · 问题分析"
            },
            title: {
                en: "What ComparED Lacks and What the Dashboard Adds",
                zh: "ComparED 的不足与本看板的改进"
            },
            columns: {
                en: ["Area", "ComparED today", "Our dashboard"],
                zh: ["方面", "ComparED 现状", "本看板"]
            },
            rows: [
                [{ en: "Surveys", zh: "调查" }, { en: "SES, GOS and ESS in separate sections", zh: "SES、GOS、ESS 分在不同版块" }, { en: "All three side by side, plus a total score and national ranking", zh: "三项并列呈现，另有总分和全国排名" }],
                [{ en: "Detail", zh: "细节" }, { en: "4 GOS indicators; 1 measure of graduate satisfaction", zh: "GOS 只有 4 个指标；毕业生满意度只有 1 个指标" }, { en: "Each score broken into its weighted factors (11 in total)", zh: "每项分数拆解为加权因子（共 11 个）" }],
                [{ en: "Time", zh: "时间" }, { en: "One year at a time", zh: "一次只能看一年" }, { en: "2019–2024 trend against the national average", zh: "2019–2024 趋势，并对比全国平均" }],
                [{ en: "Filters", zh: "筛选" }, { en: "Institution and study area only", zh: "只能按学校和学科领域" }, { en: "Institution → faculty → major → student type, for two selections at once", zh: "学校 → 学院 → 专业 → 学生类型，可同时设置两组对比" }],
                [{ en: "Context", zh: "解读" }, { en: "Raw numbers and ratings", zh: "只有原始数字和评分" }, { en: "Ranking, radar shapes and factor bars that show strengths and weaknesses", zh: "排名、雷达形状和因子条形图，直观显示强项与短板" }]
            ],
            caption: {
                en: "The design follows four principles set out in the report (affordances, accessibility, aesthetics and acceptance) and Shneiderman’s “overview first, zoom and filter, then details on demand”.",
                zh: "设计遵循报告提出的四项原则（可供性、无障碍、美观、易接受），以及 Shneiderman 的“先总览，再缩放筛选，最后按需查看细节”。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · data",
                zh: "小组 · 数据"
            },
            title: {
                en: "How the Scores Are Built (Synthetic Data in QILT’s Structure)",
                zh: "分数如何构成（按 QILT 结构生成的合成数据）"
            },
            columns: {
                en: ["Score", "Factors and weights"],
                zh: ["分数", "因子与权重"]
            },
            rows: [
                [{ en: "SES · student experience", zh: "SES · 学生体验" }, { en: "Engagement 30%, teaching quality 29%, learning resources 28%, skill development 13%", zh: "学习投入 30%、教学质量 29%、学习资源 28%、技能发展 13%" }],
                [{ en: "GOS · graduate outcomes", zh: "GOS · 毕业生成果" }, { en: "Occupation 30%, further study 29%, salary 28%, employment rate 13%", zh: "职业 30%、继续深造 29%、薪资 28%、就业率 13%" }],
                [{ en: "ESS · employer satisfaction", zh: "ESS · 雇主满意度" }, { en: "Employability skills 41%, technical skills 40%, foundation skills 19%", zh: "就业能力 41%、专业技能 40%、基础技能 19%" }],
                [{ en: "Total score", zh: "总分" }, { en: "Average of SES, GOS and ESS", zh: "SES、GOS、ESS 的平均值" }]
            ],
            caption: {
                en: "50,000 records, 2019–2024 (5,690 to 9,324 a year), across 30 universities, 10 faculties, 60 majors and domestic and international students. The dataset was generated with ChatGPT to match QILT’s published structure, as declared in the report; every score is illustrative. In the dataset and the submitted app the GOS and ESS factor sets were swapped relative to QILT; the table and the web version above use the QILT assignment.",
                zh: "共 5 万条记录，2019–2024 年（每年 5,690 至 9,324 条），覆盖 30 所大学、10 个学院、60 个专业以及本地生和国际生。报告已声明数据由 ChatGPT 按 QILT 公开结构生成，所有分数均为示意。数据集和提交版看板中 GOS 与 ESS 的因子归属与 QILT 相反；本表和上方网页版已按 QILT 的定义更正。"
            }
        },
        {
            type: "process",
            source: {
                en: "Team · layout",
                zh: "小组 · 布局"
            },
            title: {
                en: "Overview First, Then Compare",
                zh: "先总览，再对比"
            },
            steps: {
                en: [
                    "Choose an institution",
                    "Total, SES, GOS and ESS cards plus national rank",
                    "Survey radar and factor bars for the latest year",
                    "Six-year trend against the national average",
                    "Set A and B: institution → faculty → major → student type",
                    "Compare on 3-score and 11-factor radars; see faculty and student-type bars"
                ],
                zh: [
                    "选择学校",
                    "总分、SES、GOS、ESS 卡片及全国排名",
                    "最新年份的调查雷达图和因子条形图",
                    "对比全国平均的六年趋势",
                    "设置 A 和 B：学校 → 学院 → 专业 → 学生类型",
                    "用 3 项分数和 11 个因子的雷达图对比；查看学院和学生类型条形图"
                ]
            },
            caption: {
                en: "Dropdowns cascade so only valid combinations can be chosen, and default to Business and Finance where available. The faculty and student-type charts follow the institution chosen at the top; the A/B selectors drive the two radars.",
                zh: "下拉菜单逐级联动，只能选到存在的组合，并在可行时默认选择商科和金融。学院与学生类型图表跟随顶部所选学校；A/B 选择器控制两张雷达图。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/graduate-outcomes/original-design.jpg",
            source: {
                en: "Team · original design",
                zh: "小组 · 原始设计"
            },
            title: {
                en: "The Original Design, Before Implementation",
                zh: "实现之前的原始设计"
            },
            caption: {
                en: "The planned layout: selection bar, four score cards, survey radar, donut charts for each survey’s factors (Element B), a trend over the selected year ±2, auto-generated descriptions, and a comparison row with a total-score trend line (Element D). The table below records what changed in the build.",
                zh: "计划中的布局：筛选栏、四张分数卡、调查雷达图、每项调查因子的环形图（元素 B）、所选年份前后各 2 年的趋势、自动生成的文字说明，以及包含总分趋势线（元素 D）的对比区。下表记录实现中的改动。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · design vs implementation",
                zh: "本人负责 · 设计与实现对比"
            },
            title: {
                en: "What Changed from Design to Build, and Why",
                zh: "从设计到实现的改动及理由"
            },
            columns: {
                en: ["Element", "Design", "Build", "Why"],
                zh: ["元素", "设计", "实现", "理由"]
            },
            rows: [
                ["A", { en: "Total score only", zh: "只有总分" }, { en: "National ranking card beside the scores (e.g. “9th”)", zh: "分数旁增加全国排名卡（如“第 9 名”）" }, { en: "A rank is easier to read than a raw score", zh: "排名比原始分数更直观" }],
                ["B", { en: "Donut charts for SES, GOS and ESS factors", zh: "用环形图展示 SES、GOS、ESS 因子" }, { en: "Stacked bar charts", zh: "改为堆叠条形图" }, { en: "Lengths are compared more accurately than angles", zh: "长度比角度更容易准确比较" }],
                ["C", { en: "Institution, discipline, student type", zh: "学校、学科、学生类型" }, { en: "Added a Major filter under faculty", zh: "在学院下新增专业筛选" }, { en: "Students compare specific programs, not whole faculties", zh: "学生比较的是具体专业，而不是整个学院" }],
                ["D", { en: "Line chart of total score across institutions", zh: "跨学校的总分折线图" }, { en: "11-factor radar comparing A and B", zh: "比较 A 与 B 的 11 因子雷达图" }, { en: "Shows where two programs differ, not just by how much", zh: "显示两个专业在哪些方面不同，而不只是差多少" }]
            ],
            caption: {
                en: "Not built: the auto-generated narrative under each section, and titles on several charts, which the evaluation names as the main readability gaps. The report calls the radar “12-factor”; the data has 11 factors (4 SES, 4 GOS, 3 ESS).",
                zh: "未实现：各区块下方自动生成的文字解读，以及部分图表的标题，评估部分指出这是可读性的主要短板。报告把雷达图称为“12 因子”，实际数据为 11 个因子（SES 4 个、GOS 4 个、ESS 3 个）。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Survey weights, national ranking and the cascading A/B filters",
                zh: "调查权重、全国排名与 A/B 级联筛选"
            },
            language: "Python · Dash · pandas",
            source: {
                en: "Team app, condensed (reviewed and refined by me)",
                zh: "小组应用（精简，本人参与审阅与完善）"
            },
            caption: {
                en: "Condensed from the team’s app.py: layout code, chart styling and the B-side callbacks (mirrors of A) are removed. Weights are shown with GOS and ESS in the QILT assignment.",
                zh: "根据小组 app.py 精简，去掉了布局、图表样式和 B 侧回调（与 A 侧相同）。权重中的 GOS 与 ESS 已按 QILT 定义标注。"
            },
            code: `import pandas as pd
from dash import Dash, Input, Output

df = pd.read_csv("au_50000.csv")
LATEST_YEAR = int(df["year"].max())          # 2024

SES_WEIGHTS = {"engagement": 0.30, "skill": 0.13, "quality": 0.29, "resources": 0.28}
GOS_WEIGHTS = {"occupation": 0.30, "employment_rate": 0.13, "further_study": 0.29, "salary": 0.28}
ESS_WEIGHTS = {"technical_skill": 0.40, "foundation_skill": 0.19, "employment_skill": 0.41}

def national_rank(inst):
    """Dense rank of an institution's mean total score in the latest year."""
    latest = df[df["year"] == LATEST_YEAR]
    by_inst = latest.groupby("institution", as_index=False)["total_score"].mean()
    by_inst["rank"] = by_inst["total_score"].rank(method="dense", ascending=False)
    return int(by_inst.loc[by_inst["institution"] == inst, "rank"].iloc[0])

def pick_preferred(options, keywords):
    for kw in keywords:
        for opt in options:
            if kw.lower() in opt.lower():
                return opt
    return options[0] if options else None

app = Dash(__name__)

@app.callback(Output("disc-a-select", "options"), Output("disc-a-select", "value"),
              Input("inst-a-select", "value"))
def update_disciplines_a(inst):
    sub = df[(df["institution"] == inst) & (df["year"] == LATEST_YEAR)]
    discs = sorted(sub["discipline"].dropna().unique())
    return [{"label": d, "value": d} for d in discs], pick_preferred(discs, ["Business", "Commerce"])

@app.callback(Output("major-a-select", "options"), Output("major-a-select", "value"),
              Input("inst-a-select", "value"), Input("disc-a-select", "value"))
def update_majors_a(inst, disc):
    sub = df[(df["institution"] == inst) & (df["discipline"] == disc) & (df["year"] == LATEST_YEAR)]
    majors = sorted(sub["major"].dropna().unique())
    return [{"label": m, "value": m} for m in majors], pick_preferred(majors, ["Finance", "Accounting"])`
        }
    ],

    details: {
        en: [
            {
                title: "The Problem · Team",
                bullets: [
                    "Students use graduate outcomes to judge career prospects, universities to show performance and attract enrolments, and policymakers to guide funding; international students also face adapting to a new labour market.",
                    "ComparED shares QILT data but fragments it, gives raw numbers without visual or written context, allows only single-year comparisons and only two filters."
                ]
            },
            {
                title: "Objectives · Team",
                bullets: [
                    "Affordances: filters and a clear layout so users can find and read key indicators within 5 seconds; all three surveys in one place; factor detail; trends.",
                    "Accessibility: students read the outcome-level scores, while universities and policymakers use the factor-level detail to plan improvements.",
                    "Aesthetics and acceptance: a light, consistent colour scheme, interactive charts instead of static tables, and short interpretive text."
                ]
            },
            {
                title: "Data · Team",
                bullets: [
                    "Factor-level QILT data is restricted to institutions, so the team generated a 50,000-record synthetic dataset with ChatGPT in QILT’s structure, and declared this in the report.",
                    "Each record has institution, faculty, major, student type and year, 11 factor scores, the three weighted survey scores and a total.",
                    "The data is clean and evenly spread, which keeps the dashboard responsive but makes differences between universities small and random, so it demonstrates the design rather than real rankings."
                ]
            },
            {
                title: "Design vs Implementation · My part",
                bullets: [
                    "Confirmed what the build kept from the design: one interface for SES, GOS and ESS, an overview-then-detail structure, filters for institution, discipline and student type, and mixed chart types (radar, line and bar).",
                    "Documented and justified four changes: the ranking card, stacked bars instead of donut charts, the new Major filter, and the 11-factor A/B radar replacing a total-score line chart.",
                    "Recorded what was dropped and why it matters: auto-generated narrative text and several chart titles, both of which help readers with lower data literacy."
                ]
            },
            {
                title: "Code, Testing and Demo · My part",
                bullets: [
                    "Reviewed and refined the Dash code with the team and checked that the code and dataset ran end to end for submission.",
                    "Recorded the dashboard demonstration used in the video walkthrough."
                ]
            },
            {
                title: "Evaluation and Reflection · Team",
                bullets: [
                    "Met the main goals: integrated surveys, comparisons across institutions, faculties and student types, and multi-year trends.",
                    "Limits: one variable is compared at a time, there is no automated narrative, some charts lack titles, and majors do not line up perfectly across universities that group faculties differently.",
                    "Collaboration lesson: parallel edits caused clashing callback IDs and inconsistent layouts, resolved through frequent communication and manual merging.",
                    "Next steps: connect to official data, add a guided multi-variable comparison mode and narrative explanations, and run usability tests."
                ]
            },
            {
                title: "Web Version on This Site",
                bullets: [
                    "The Dash app needs a Python server, so for this site it was rebuilt as a single static page with the same data, charts and interactions, aggregated from the 50,000 records.",
                    "Two adjustments: GOS and ESS factors follow the QILT definitions, and the trend chart can switch between a zoomed axis and the 0–100 scale."
                ]
            }
        ],

        zh: [
            {
                title: "问题 · 小组",
                bullets: [
                    "学生用毕业生成果判断职业前景，大学用它展示表现、吸引招生，政策制定者用它指导拨款；国际学生还要适应新的劳动力市场。",
                    "ComparED 虽然公开了 QILT 数据，但信息分散，只有原始数字、缺少图形和文字解读，只能比较单一年份，筛选条件也只有两个。"
                ]
            },
            {
                title: "目标 · 小组",
                bullets: [
                    "可供性：通过筛选和清晰布局，让用户 5 秒内找到并读懂关键指标；三项调查集中呈现；提供因子细节和趋势。",
                    "无障碍：学生看总体分数，大学和政策制定者用因子层面的细节规划改进。",
                    "美观与易接受：浅色、一致的配色，用交互图表替代静态表格，并配简短解读。"
                ]
            },
            {
                title: "数据 · 小组",
                bullets: [
                    "QILT 的因子级数据只对院校开放，因此小组用 ChatGPT 按 QILT 结构生成了 5 万条合成数据，并在报告中声明。",
                    "每条记录包含学校、学院、专业、学生类型和年份，11 个因子分数、三项加权调查分数及总分。",
                    "数据干净且分布均匀，看板运行流畅，但学校之间的差异很小且随机，因此它展示的是设计，而不是真实排名。"
                ]
            },
            {
                title: "设计与实现对比 · 本人负责",
                bullets: [
                    "确认实现保留了设计的核心：SES、GOS、ESS 集中在一个界面，先总览后细节的结构，学校、学科、学生类型筛选，以及雷达图、折线图、条形图的组合。",
                    "记录并论证四处改动：排名卡、用堆叠条形图替代环形图、新增专业筛选，以及用 11 因子 A/B 雷达图替代总分折线图。",
                    "记录未实现的部分及其影响：自动生成的文字解读和部分图表标题，这两点都有助于数据素养较低的读者理解。"
                ]
            },
            {
                title: "代码、测试与演示 · 本人负责",
                bullets: [
                    "与组员一起审阅和完善 Dash 代码，并检查代码和数据集能完整运行，确保可提交。",
                    "录制演示视频中使用的看板操作演示。"
                ]
            },
            {
                title: "评估与反思 · 小组",
                bullets: [
                    "达成主要目标：整合三项调查，可跨学校、学院和学生类型比较，并能看多年趋势。",
                    "局限：一次只能比较一个变量，没有自动文字解读，部分图表缺少标题；不同大学的学院划分不同，专业无法完全对齐。",
                    "协作经验：多人同时修改代码导致回调 ID 冲突和布局不一致，通过频繁沟通和手动合并解决。",
                    "下一步：接入官方数据，加入引导式多变量比较和文字解读，并做可用性测试。"
                ]
            },
            {
                title: "本网站上的网页版",
                bullets: [
                    "Dash 应用需要 Python 服务器，因此为本网站重建为单个静态网页，使用相同的数据、图表和交互，数据由 5 万条记录汇总而来。",
                    "两处调整：GOS 与 ESS 的因子按 QILT 定义归属；趋势图可在放大坐标轴与 0–100 刻度之间切换。"
                ]
            }
        ]
    }
},
{
    id: "smart-travel-dashboard",
    category: "analytics-systems",

    title: {
        en: "Smart Travel & Environment Dashboard — A Proposal to Answer “Is It Safe to Go Out Today?”",
        zh: "智慧出行与环境看板——回答“今天适合出门吗？”的设计方案"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual assignment · dashboard proposal, audience and feature design, wireframe",
        zh: "个人作业 · 看板方案、用户与功能设计、线框图"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2025",
        zh: "2025 年第二学期"
    },

    sortDate: "2025-09",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Weather in Australia has become a daily health question as much as a forecast: longer pollen seasons, heatwaves, very high UV and reports of mosquito-borne disease all affect whether it is sensible to travel or spend time outdoors. Answering that needs data that is timely, complete and trustworthy, in one place.",
                "The tools people use today split the answer. Apple Weather is clean and gives a ten-day forecast, but relies on third-party data, gives only regional summaries and does not show how the factors relate. The Bureau of Meteorology and the ABS air-quality pages are authoritative, but rely on static tables and annual reports spread across several pages, and neither brings in pollen, UV and disease risk.",
                "The assignment was to propose a dashboard that is either new or a substantial improvement on an existing one, covering the problem, objectives, audience, features, a static wireframe and the data needed. I proposed the Smart Travel & Environment Dashboard, which turns environmental and health data into a plain answer: is today a good day to go out, and what should I watch for?"
            ],
            zh: [
                "在澳大利亚，天气已经不只是天气预报，而是每天的健康问题：花粉季变长、热浪频发、紫外线极强，蚊媒疾病也时有报道，这些都影响人们是否适合出行或户外活动。要回答这个问题，需要及时、完整、可信的数据，而且最好集中在一个地方。",
                "现有工具把答案拆散了。Apple 天气界面简洁、有十天预报，但依赖第三方数据，只给出区域概况，也不展示各项指标之间的关系。澳大利亚气象局（BOM）和统计局（ABS）的空气质量页面权威，但以静态表格和年度报告为主，分散在多个页面，也都没有整合花粉、紫外线和疾病风险。",
                "作业要求提出一个全新的看板，或对现有看板做实质性改进，内容包括问题、目标、用户、功能、静态线框图和所需数据。我提出“智慧出行与环境看板”，把环境与健康数据转化为直接的回答：今天适合出门吗？需要注意什么？"
            ]
        },
        pointsTitle: {
            en: "What the proposal had to cover, in order",
            zh: "方案必须按顺序包含"
        },
        points: {
            en: [
                "Statement of the problem.",
                "Objectives of the dashboard.",
                "Who the audience is and what each group needs.",
                "The affordances (features) and why each is needed.",
                "A static wireframe made with a prototyping tool.",
                "The data and data sources required (1,500–2,000 words expected)."
            ],
            zh: [
                "问题陈述。",
                "看板目标。",
                "目标用户及各自需求。",
                "必要的交互功能及其理由。",
                "用原型工具制作的静态线框图。",
                "所需数据与数据来源（建议 1,500–2,000 词）。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Proposed a dashboard that answers “is today safe to go out?” by combining weather, UV, air quality, pollen and mosquito-borne disease risk, fixing gaps in Apple Weather (third-party data, no linked factors) and BOM/ABS (static tables, no health data).",
            "Designed 13 interface elements for 4 audiences, from a one-line daily verdict and allergen alerts to elder and read-aloud modes, with a sourced data plan: 5 data feeds led by BOM, KNN imputation, and ARIMA and XGBoost forecasts."
        ],
        zh: [
            "提出一个回答“今天出门安全吗？”的看板，整合天气、紫外线、空气质量、花粉和蚊媒疾病风险，弥补 Apple 天气（第三方数据、指标互不关联）与 BOM/ABS（静态表格、缺少健康数据）的不足。",
            "为 4 类用户设计 13 个界面元素，从一句话的当日结论、过敏原提醒到长者模式和语音播报，并给出有来源的数据方案：以 BOM 为主的 5 类数据、KNN 缺失值填补，以及 ARIMA 和 XGBoost 预测。"
        ]
    },

    tags: [
        "Dashboard Design",
        "Wireframing",
        "User Research",
        "Accessibility",
        "Data Sourcing",
        "Public Health Data",
        "Environmental Data"
    ],

    metrics: [
        {
            value: "13",
            label: {
                en: "Interface elements (A–M), each justified",
                zh: "界面元素（A–M），逐一说明理由"
            }
        },
        {
            value: "4",
            label: {
                en: "Audiences: public, health and community services, researchers, government and industry",
                zh: "目标用户：公众、医疗与社区机构、研究者、政府与行业"
            }
        },
        {
            value: "5",
            label: {
                en: "Data feeds: BOM, NEPM/ABS, AirRater and state pollen monitoring, NSW Health, user location",
                zh: "数据来源：BOM、NEPM/ABS、AirRater 及州级花粉监测、NSW Health、用户位置"
            }
        },
        {
            value: "90% in 10 s",
            label: {
                en: "Target: users can identify each chart’s data source within 10 seconds",
                zh: "目标：90% 的用户能在 10 秒内认出数据来源"
            }
        },
        {
            value: "7 / 30 / 90",
            label: {
                en: "Day windows for trend comparison, plus a 7-day forecast",
                zh: "趋势比较的天数窗口，另有 7 天预报"
            }
        },
        {
            value: "1 click",
            label: {
                en: "One-click overview: “Is today suitable for travel?”",
                zh: "一键总览：“今天适合出行吗？”"
            }
        }
    ],

    visuals: [
        {
            type: "image",
            src: "assets/img/projects/smart-travel/wireframe.jpg",
            source: {
                en: "My proposal · wireframe",
                zh: "本人方案 · 线框图"
            },
            title: {
                en: "Static Wireframe with Elements A–M",
                zh: "标注 A–M 元素的静态线框图"
            },
            caption: {
                en: "Controls sit down the left (time and audience menus, location, search, broadcast and elder modes, allergen search, data explanations). The top line gives the verdict in plain words. The centre combines current weather with heat, UV and weather maps; the right and bottom show temperature and UV by hour, pollutant trends and levels, pollen sources and hourly pollen, and a mosquito-borne disease map. Chart data in the mock-up is illustrative.",
                zh: "左侧是控制区（时间与用户版本菜单、定位、搜索、播报与长者模式、过敏原搜索、数据释义）。顶部一句话给出当日结论。中间把当前天气与温度、紫外线和天气地图放在一起；右侧和底部是逐时温度与紫外线、污染物趋势与浓度、花粉来源与逐时花粉，以及蚊媒疾病地图。线框图中的图表数据为示意。"
            }
        },
        {
            type: "table",
            source: {
                en: "My proposal · problem",
                zh: "本人方案 · 问题分析"
            },
            title: {
                en: "Where Existing Tools Fall Short",
                zh: "现有工具的不足"
            },
            columns: {
                en: ["Tool", "What works", "What is missing"],
                zh: ["工具", "优点", "不足"]
            },
            rows: [
                [{ en: "Apple Weather", zh: "Apple 天气" }, { en: "Clean interface, ten-day forecast, many indicators in one app", zh: "界面简洁、十天预报、指标集中" }, { en: "Third-party data that can differ from Australian standards; regional summaries only; factors shown side by side with no conclusion", zh: "第三方数据，可能与澳大利亚标准不一致；只有区域概况；指标并列却没有结论" }],
                [{ en: "Bureau of Meteorology website", zh: "澳大利亚气象局网站" }, { en: "Official national monitoring and long-term records", zh: "官方全国监测与长期记录" }, { en: "Static tables and reports; key findings sit several clicks deep in publications", zh: "以静态表格和报告为主；关键信息藏在多层出版物页面里" }],
                [{ en: "ABS air-quality platform", zh: "ABS 空气质量平台" }, { en: "Authoritative pollution data and trends", zh: "权威的污染数据与趋势" }, { en: "Annual reporting; no pollen, UV or disease indicators", zh: "按年度发布；没有花粉、紫外线或疾病指标" }],
                [{ en: "Proposed dashboard", zh: "本方案" }, { en: "Official sources labelled on every chart, one screen, interactive filters", zh: "每张图标注官方来源、一屏呈现、交互筛选" }, { en: "Turns the indicators into a daily verdict and specific advice", zh: "把各项指标转化为当日结论和具体建议" }]
            ],
            caption: {
                en: "The design follows two principles cited in the proposal: dashboards should show the essentials without clutter (Few, 2013), and interaction is what turns data into insight (Heer & Shneiderman, 2012). Static, multi-page reports raise cognitive load and make patterns hard to see (Sweller, 1988).",
                zh: "设计遵循方案中引用的两条原则：看板应突出要点、避免冗余（Few, 2013）；交互是从数据中获得洞察的关键（Heer & Shneiderman, 2012）。静态、多页面的报告会增加认知负担，难以发现规律（Sweller, 1988）。"
            }
        },
        {
            type: "table",
            source: {
                en: "My proposal · objectives",
                zh: "本人方案 · 目标"
            },
            title: {
                en: "Eight Objectives and How the Design Meets Them",
                zh: "八项目标及对应设计"
            },
            columns: {
                en: ["Objective", "Design response"],
                zh: ["目标", "设计对策"]
            },
            rows: [
                [{ en: "Accuracy and transparency", zh: "准确与透明" }, { en: "Label official sources (BOM, NEPM) and update times; compare live readings with forecasts; target: 90% of users find the source within 10 seconds", zh: "标注官方来源（BOM、NEPM）和更新时间；对比实时监测与预报；目标：90% 用户 10 秒内找到来源" }],
                [{ en: "Integrate health indicators", zh: "整合健康指标" }, { en: "Combine environmental and health data; forecasts for pollen, UV, respiratory and vector-borne risk", zh: "合并环境与健康数据；提供花粉、紫外线、呼吸道与蚊媒风险预测" }],
                [{ en: "Trends and history", zh: "趋势与历史" }, { en: "Line charts over 7, 30 and 90 days, with regional and period comparisons to spot unusual changes", zh: "7、30、90 天折线图，按地区和时段比较，发现异常变化" }],
                [{ en: "Weather forecast", zh: "天气预报" }, { en: "Today plus the next 7 days", zh: "当天及未来 7 天" }],
                [{ en: "Interactivity", zh: "交互探索" }, { en: "Custom regions, time ranges and metrics; multi-region comparison; a one-click “Is today suitable for travel?” overview", zh: "自定义地区、时间和指标；多地区比较；一键回答“今天适合出行吗？”" }],
                [{ en: "Accessibility", zh: "无障碍" }, { en: "Read-aloud, simplified and elder modes", zh: "语音播报、简洁模式和长者模式" }],
                [{ en: "Personalised guidance", zh: "个性化提示" }, { en: "Users set priority indicators and allergens to get alerts; colour-coded risk cues and short notes beside the data; links that explain expert terms", zh: "用户设定关注指标和过敏原以获得提醒；数据旁配颜色风险提示和简短说明；专业术语附解释链接" }],
                [{ en: "Visual clarity", zh: "视觉清晰" }, { en: "Simple charts (line, pie, heat map); key indicators highlighted, redundancy removed", zh: "简单图表（折线、饼图、热力图）；突出关键指标、去除冗余" }]
            ],
            caption: {
                en: "The objectives map directly to the gaps above: trust in the data, health indicators in one place, time comparison, and a clear answer for non-experts.",
                zh: "这些目标逐一对应上表的不足：数据可信、健康指标集中、可做时间比较、为非专业用户给出清晰答案。"
            }
        },
        {
            type: "table",
            source: {
                en: "My proposal · audience",
                zh: "本人方案 · 目标用户"
            },
            title: {
                en: "Four Audiences and What Each Needs",
                zh: "四类用户及其需求"
            },
            columns: {
                en: ["Audience", "What they need", "Example"],
                zh: ["用户", "需求", "示例"]
            },
            rows: [
                [{ en: "General public (primary)", zh: "公众（主要用户）" }, { en: "Pollen, UV, heat and air quality turned into simple prompts for daily decisions", zh: "把花粉、紫外线、高温和空气质量转化为简单提示，用于日常决策" }, { en: "“It’s a good day to go out” or “People with pollen allergies, avoid Redfern”", zh: "“今天适合出门”或“花粉过敏者请避开 Redfern”" }],
                [{ en: "Health and community services", zh: "医疗与社区机构" }, { en: "Real-time risk to protect older people, children and people with chronic conditions", zh: "实时风险信息，保护老人、儿童和慢性病患者" }, { en: "Nursing homes adjusting care plans during a heatwave", zh: "养老院在热浪期间调整照护安排" }],
                [{ en: "Researchers", zh: "研究者" }, { en: "Structured, downloadable long-term data", zh: "结构化、可下载的长期数据" }, { en: "Studying climate–health patterns and policy effects", zh: "研究气候与健康的关系及政策效果" }],
                [{ en: "Government and industry", zh: "政府与行业" }, { en: "Forecasts and trends for planning and risk management", zh: "用于规划和风险管理的预测与趋势" }, { en: "Tourism operators protecting staff and visitors", zh: "旅游业者保护员工和游客" }]
            ],
            caption: {
                en: "The public is the primary audience, so the default view leads with a verdict and advice; the audience menu switches to views with more detail for professional users.",
                zh: "公众是主要用户，因此默认视图先给结论和建议；通过用户版本菜单可切换到面向专业用户、信息更详细的视图。"
            }
        },
        {
            type: "table",
            source: {
                en: "My proposal · affordances",
                zh: "本人方案 · 交互功能"
            },
            title: {
                en: "The 13 Interface Elements and Why Each Is There",
                zh: "13 个界面元素及其理由"
            },
            columns: {
                en: ["Element", "Feature", "Why"],
                zh: ["元素", "功能", "理由"]
            },
            rows: [
                ["A", { en: "Menus: today / history / forecast, and public / government / researcher / health versions", zh: "菜单：今天 / 历史 / 预报，以及公众 / 政府 / 研究者 / 医疗版本" }, { en: "Fast filtering with low cognitive load; tailored views per group", zh: "快速筛选、降低认知负担；为不同用户定制视图" }],
                ["B", { en: "Personal page: avatar, background colour, homepage layout", zh: "个人页面：头像、背景色、首页布局" }, { en: "Personalisation builds attachment and repeat use (Norman, 2004)", zh: "个性化增强情感联系和使用黏性（Norman, 2004）" }],
                ["C", { en: "Location with map, automatic or manual", zh: "定位与地图，可自动或手动" }, { en: "Compare risk around you without irrelevant regions", zh: "比较身边的风险，避免无关地区的信息干扰" }],
                ["D", { en: "Search for indicators", zh: "指标搜索" }, { en: "Faster retrieval and a sense of control", zh: "更快找到信息，增强掌控感" }],
                ["E", { en: "Broadcast (read-aloud) and elder modes", zh: "播报（朗读）模式与长者模式" }, { en: "Access for visually impaired and older users (WCAG 2.1)", zh: "方便视障和年长用户使用（WCAG 2.1）" }],
                ["F", { en: "Personal allergen and pollen settings", zh: "个人过敏原与花粉设置" }, { en: "Alerts specific to each user", zh: "针对个人的提醒" }],
                ["G", { en: "Legends and data explanations", zh: "图例与数据释义" }, { en: "Green-to-red scales and thresholds let people read risk without numbers", zh: "绿到红的色阶和阈值让人不看数字也能判断风险" }],
                ["H", { en: "Data-source label on each chart", zh: "每张图标注数据来源" }, { en: "Traceability and trust", zh: "可追溯、可信任" }],
                ["I", { en: "Heat, weather, UV and wind maps", zh: "温度、天气、紫外线和风力地图" }, { en: "Show regional variation and high-risk areas at a glance (Cairo, 2012)", zh: "一眼看出地区差异和高风险区域（Cairo, 2012）" }],
                ["J", { en: "Information query", zh: "信息查询" }, { en: "Background knowledge behind each legend", zh: "解释图例背后的背景知识" }],
                ["K", { en: "Charts: hourly pollutants, temperature vs UV, hourly pollen by type; pollen and pollutant shares; pollutant comparison", zh: "图表：逐时污染物、温度与紫外线、按类型的逐时花粉；花粉与污染物占比；污染物比较" }, { en: "Lines for trends, pies for shares, bars for comparison (Simkin & Hastie, 1987)", zh: "折线看趋势、饼图看占比、柱状图做比较（Simkin & Hastie, 1987）" }],
                ["L", { en: "Mosquito-borne disease map with coloured markers", zh: "蚊媒疾病地图，用彩色标记" }, { en: "Spot local health risks quickly and act early", zh: "快速发现身边的健康风险并提前防护" }],
                ["M", { en: "Action suggestions", zh: "行动建议" }, { en: "Move from data to action, e.g. sun protection and areas to avoid", zh: "从数据走向行动，例如防晒和建议避开的区域" }]
            ],
            caption: {
                en: "Trade-offs noted in the proposal: menus ease navigation but add a learning step, personalisation adds system load, too many charts on a small screen can confuse, and the design assumes a stable connection that rural areas may lack.",
                zh: "方案中指出的取舍：菜单便于导航但需要学习，个性化会增加系统负担，小屏幕上图表过多会造成混乱，而且设计默认网络稳定，偏远地区未必满足。"
            }
        },
        {
            type: "process",
            source: {
                en: "My proposal · data",
                zh: "本人方案 · 数据"
            },
            title: {
                en: "Proposed Data Pipeline",
                zh: "数据管道设计"
            },
            steps: {
                en: [
                    "Feeds: BOM, NEPM/ABS, pollen monitoring, NSW Health, location",
                    "Collect through official APIs; crawlers only where no API exists",
                    "Clean: KNN imputation, outlier checks, STL smoothing",
                    "Forecast: ARIMA, XGBoost, regression for pollen peaks",
                    "Store in a cloud database; anonymise location",
                    "Show as maps, charts, alerts and advice"
                ],
                zh: [
                    "数据源：BOM、NEPM/ABS、花粉监测、NSW Health、位置",
                    "通过官方 API 采集；只有在没有 API 时才用爬虫",
                    "清洗：KNN 填补缺失值、异常值检测、STL 平滑",
                    "预测：ARIMA、XGBoost，花粉高峰用回归模型",
                    "存入云数据库；位置数据匿名化",
                    "以地图、图表、提醒和建议呈现"
                ]
            },
            caption: {
                en: "Forecasts are cross-validated. Risks are named up front: crawlers break when sites change and raise compliance questions, external APIs can change their access rules, data delays reduce accuracy, and location data must be anonymised and encrypted under the Privacy Act 1988.",
                zh: "预测模型均做交叉验证。方案也提前说明了风险：网站改版会让爬虫失效并带来合规问题，外部 API 可能改变访问规则，数据延迟会降低准确性，位置数据须按《1988 年隐私法》匿名化并加密传输。"
            }
        },
        {
            type: "table",
            source: {
                en: "My proposal · data",
                zh: "本人方案 · 数据"
            },
            title: {
                en: "Data Required and How Each Is Processed",
                zh: "所需数据及处理方法"
            },
            columns: {
                en: ["Data", "Source", "Processing"],
                zh: ["数据", "来源", "处理方法"]
            },
            rows: [
                [{ en: "Weather, temperature, UV, heatwave warnings", zh: "天气、温度、紫外线、热浪预警" }, { en: "BOM, real-time and forecast", zh: "BOM，实时与预报" }, { en: "Standardised via API; outlier detection and KNN imputation; ARIMA trend forecasts", zh: "通过 API 标准化；异常值检测与 KNN 填补；ARIMA 趋势预测" }],
                [{ en: "Air quality (PM2.5, PM10, O₃, NO₂)", zh: "空气质量（PM2.5、PM10、O₃、NO₂）" }, { en: "NEPM and ABS", zh: "NEPM 和 ABS" }, { en: "Automatic updates; STL decomposition to reduce noise; XGBoost short-term forecasts", zh: "自动更新；STL 分解降噪；XGBoost 短期预测" }],
                [{ en: "Pollen count by type", zh: "按类型的花粉浓度" }, { en: "AirRater and state monitoring programs", zh: "AirRater 及州级监测项目" }, { en: "Real-time plus historical data; regression model flags high-risk periods", zh: "实时与历史数据结合；回归模型预警高风险时段" }],
                [{ en: "Vector-borne disease alerts", zh: "蚊媒疾病预警" }, { en: "NSW Health surveillance and public bulletins", zh: "NSW Health 监测与公共通报" }, { en: "Summary and trend only; spatial analysis to locate high-risk areas", zh: "仅提供汇总与趋势；用空间分析识别高风险区域" }],
                [{ en: "Location and history", zh: "位置与历史数据" }, { en: "GPS, manual input or Google Maps API; archive of 7 days to 1 year", zh: "GPS、手动输入或 Google 地图 API；7 天至 1 年的历史存档" }, { en: "Anonymised; time-series comparison and long-term forecasting", zh: "匿名化；时间序列比较与长期预测" }]
            ],
            caption: {
                en: "Shared steps for every feed: missing-value filling, outlier detection, smoothing, cross-validation and consistency checks, with encrypted transfer and cloud storage (AWS) so a mobile version can follow.",
                zh: "所有数据都经过统一步骤：缺失值填补、异常值检测、平滑、交叉验证和一致性检查；传输加密并存储在云端（AWS），便于日后扩展到移动端。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "The Problem · My part",
                bullets: [
                    "Daily travel decisions in Australia now depend on health factors as much as weather: pollen, heat, UV and mosquito-borne disease.",
                    "Consumer apps are easy to use but not authoritative and leave users to connect the indicators themselves; official sites are authoritative but static, fragmented and without health indicators.",
                    "The gap: an integrated, interactive, user-focused platform that turns environmental and health data into practical travel guidance."
                ]
            },
            {
                title: "Objectives · My part",
                bullets: [
                    "Eight objectives: accurate and transparent data, integrated health indicators, trend and history analysis, a 7-day forecast, interactive exploration, accessibility, personalised guidance and a clean visual design.",
                    "Measurable target for trust: 90% of users can identify each chart’s data source within 10 seconds.",
                    "A one-click overview answers the core question directly: is today suitable for travel?"
                ]
            },
            {
                title: "Audience · My part",
                bullets: [
                    "Primary: the general public, including commuters and outdoor workers, who need simple prompts rather than raw readings.",
                    "Secondary: hospitals, nursing homes and community services (protecting vulnerable groups), researchers (long-term downloadable data), and government and industry such as tourism (forecasts for planning)."
                ]
            },
            {
                title: "Features and Layout · My part",
                bullets: [
                    "13 elements (A–M): menus for time and audience, personal page, location and map, search, broadcast and elder modes, allergen settings, legends, source labels, risk maps, information query, charts, a disease map and action suggestions.",
                    "The wireframe puts controls on the left, the verdict and advice across the top, maps in the centre and detailed charts around them, so a user reads the answer first and the evidence second.",
                    "Chart choice follows the task: lines for hourly and daily trends, pies for pollen and pollutant shares, bars for pollutant comparison, heat maps for spatial intensity."
                ]
            },
            {
                title: "Data Plan · My part",
                bullets: [
                    "Official sources first: BOM for weather, UV and heatwaves; NEPM and ABS for air quality; AirRater and state monitoring for pollen; NSW Health surveillance for mosquito-borne disease.",
                    "Methods: API collection, KNN imputation and outlier checks, STL smoothing, ARIMA and XGBoost forecasts with cross-validation.",
                    "Privacy and resilience: anonymised location, encrypted transfer under the Privacy Act 1988, caching and local storage where access is limited."
                ]
            }
        ],

        zh: [
            {
                title: "问题 · 本人负责",
                bullets: [
                    "在澳大利亚，日常出行决策越来越取决于健康因素，而不只是天气：花粉、高温、紫外线和蚊媒疾病。",
                    "消费类应用易用但不够权威，需要用户自己把各项指标联系起来；官方网站权威，却是静态、分散的，而且没有健康指标。",
                    "缺口在于：一个整合、可交互、以用户为中心的平台，把环境与健康数据转化为实用的出行建议。"
                ]
            },
            {
                title: "目标 · 本人负责",
                bullets: [
                    "八项目标：数据准确透明、整合健康指标、趋势与历史分析、7 天预报、交互探索、无障碍、个性化提示，以及简洁的视觉设计。",
                    "可衡量的可信度目标：90% 的用户能在 10 秒内认出每张图的数据来源。",
                    "一键总览直接回答核心问题：今天适合出行吗？"
                ]
            },
            {
                title: "目标用户 · 本人负责",
                bullets: [
                    "主要用户是公众，包括通勤者和户外工作者，他们需要简单的提示，而不是原始读数。",
                    "次要用户：医院、养老院和社区服务机构（保护弱势人群），研究者（长期可下载数据），以及政府和旅游等行业（用于规划的预测）。"
                ]
            },
            {
                title: "功能与布局 · 本人负责",
                bullets: [
                    "13 个元素（A–M）：时间与用户菜单、个人页面、定位与地图、搜索、播报与长者模式、过敏原设置、图例、来源标注、风险地图、信息查询、图表、疾病地图和行动建议。",
                    "线框图左侧是控制区，顶部是结论与建议，中间是地图，周围是详细图表，让用户先看到答案，再看证据。",
                    "图表按任务选择：折线看逐时和逐日趋势，饼图看花粉与污染物占比，柱状图比较污染物，热力图看空间强度。"
                ]
            },
            {
                title: "数据方案 · 本人负责",
                bullets: [
                    "优先使用官方来源：BOM 提供天气、紫外线和热浪数据；NEPM 和 ABS 提供空气质量；AirRater 及州级监测提供花粉；NSW Health 监测提供蚊媒疾病信息。",
                    "方法：API 采集、KNN 填补与异常值检测、STL 平滑，以及带交叉验证的 ARIMA 和 XGBoost 预测。",
                    "隐私与稳定性：位置匿名化，按《1988 年隐私法》加密传输；在访问受限时使用缓存和本地存储。"
                ]
            }
        ]
    }
},
{
    id: "unicef-donor-eda",
    category: "ai-data",

    title: {
        en: "Who Gives Again After a Letter? Data Pipeline and EDA for 661,000 UNICEF Australia Supporters",
        zh: "收到募捐信后谁会再捐？为 66 万名 UNICEF Australia 支持者搭建数据管道并做探索性分析"
    },

    organisation: {
        en: "UNICEF Australia · The University of Sydney",
        zh: "联合国儿童基金会澳大利亚 · 悉尼大学"
    },

    role: {
        en: "Individual assignment · data pipeline, external data enrichment and exploratory analysis",
        zh: "个人作业 · 数据管道、外部数据整合与探索性分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2025",
        zh: "2025 年第一学期"
    },

    sortDate: "2025-04",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "UNICEF Australia shared six of its fundraising tables for this capstone: 661,292 supporters, 21,943 campaigns, 49.5 million campaign-membership rows and 6.1 million donation records, plus a Mosaic Australia lifestyle-segment index and postcode profiles. The question running through the semester: which recipients of a direct-mail (DM) appeal will donate within the next three months?",
                "This individual stage came before the team modelling. I built the whole pipeline in Python, from cleaning and external data to segment assignment, the DM split and the three-month label, then explored which supporter, channel, payment and socio-economic features go with giving, and summarised the findings in an executive briefing.",
                "The team later built its modelling dataset with the same merge method (see the companion team project: six models and a targeted reactivation plan)."
            ],
            zh: [
                "UNICEF Australia 为这门毕业设计课程提供了六张募捐数据表：661,292 名支持者、21,943 个营销活动、4,950 万条活动成员记录和 610 万条捐款记录，另有 Mosaic Australia 生活方式分群指数和邮编画像。整个学期围绕一个问题：收到直邮（DM）募捐信的人中，谁会在接下来三个月内捐款？",
                "这一阶段是个人作业，在小组建模之前完成。我用 Python 搭建了完整的数据管道，包括清洗、外部数据、分群归类、DM 拆分和“三个月内是否捐款”标签；随后分析哪些支持者、渠道、支付方式和社会经济特征与捐款相关，并写成管理层简报。",
                "之后小组沿用同样的合并方法构建建模数据集（见配套的小组项目：六种模型与定向再激活方案）。"
            ]
        },
        pointsTitle: {
            en: "What this stage covered",
            zh: "这一阶段的工作"
        },
        points: {
            en: [
                "Clean and merge the six internal tables, with the supporter table as the base.",
                "Add external data: ATO average taxable income by postcode (2020–21) and the ABS SEIFA 2021 IRSAD decile by postal area.",
                "Assign each supporter a Mosaic segment, split DM from non-DM supporters and label who gave within 90 days.",
                "Explore which features relate to giving and brief the findings for UNICEF."
            ],
            zh: [
                "以支持者表为主表，清洗并合并六张内部数据表。",
                "加入外部数据：澳大利亚税务局（ATO）2020–21 年各邮编平均应税收入，以及澳大利亚统计局（ABS）SEIFA 2021 各邮政区 IRSAD 十分位。",
                "为每位支持者归入 Mosaic 分群，区分 DM 与非 DM 支持者，并标注谁在 90 天内捐款。",
                "分析哪些特征与捐款相关，并为 UNICEF 撰写结论简报。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Built an end-to-end Python pipeline over 661,292 supporters, 49.5M campaign-membership rows and 6.1M donations, adding ATO postcode income and ABS SEIFA deciles and assigning Mosaic segments from a 50/50 postcode–income profile.",
            "DM supporters gave within 90 days at 15.9% vs 24.2% for non-DM, but 66% of DM givers gave more than once (non-DM 16%); profile completeness was the sharpest signal, e.g. 24.9% vs 3.5% with and without a postcode."
        ],
        zh: [
            "用 Python 搭建端到端数据管道，处理 661,292 名支持者、4,950 万条活动成员记录和 610 万条捐款，接入 ATO 邮编收入和 ABS SEIFA 十分位，并按邮编与收入画像各占 50% 归入 Mosaic 分群。",
            "DM 支持者 90 天内捐款率 15.9%，低于非 DM 的 24.2%，但其中 66% 捐了不止一次（非 DM 仅 16%）；资料完整度是最明显的信号，例如有邮编者捐款率 24.9%，无邮编者仅 3.5%。"
        ]
    },

    tags: [
        "Data Pipeline",
        "Exploratory Data Analysis",
        "Feature Engineering",
        "Chi-square Test",
        "External Data Integration",
        "Python",
        "pandas",
        "seaborn"
    ],

    metrics: [
        {
            value: "661,292",
            label: {
                en: "Supporters, merged with 5 other internal tables",
                zh: "支持者，与另外 5 张内部表合并"
            }
        },
        {
            value: "49.5M / 6.1M",
            label: {
                en: "Campaign-membership rows / donation records, read in chunks",
                zh: "活动成员记录 / 捐款记录，分块读取"
            }
        },
        {
            value: "15.9% vs 24.2%",
            label: {
                en: "90-day giving rate, DM vs non-DM supporters",
                zh: "90 天内捐款率：DM 对非 DM 支持者"
            }
        },
        {
            value: "66% vs 16%",
            label: {
                en: "Repeat givers among 90-day donors, DM vs non-DM",
                zh: "90 天内捐款者中多次捐款的比例：DM 对非 DM"
            }
        },
        {
            value: "24.9% vs 3.5%",
            label: {
                en: "DM giving rate with vs without a postcode on file",
                zh: "DM 支持者捐款率：有邮编对无邮编"
            }
        },
        {
            value: "28% → 58%",
            label: {
                en: "DM giving rate, ages 30–39 → 80+",
                zh: "DM 捐款率：30–39 岁 → 80 岁以上"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My part · pipeline",
                zh: "本人负责 · 数据管道"
            },
            title: {
                en: "From Six Tables to One Supporter-Level Dataset",
                zh: "从六张表到一张支持者级数据集"
            },
            steps: {
                en: [
                    "6 internal tables + ATO postcode income + ABS SEIFA deciles",
                    "Clean: drop low-value columns, code binaries 0/1, unify text missing values",
                    "Mosaic segment: 50% postcode profile + 50% income-band profile",
                    "Split DM / non-DM supporters through campaign membership",
                    "Label: a gift within 90 days of joining a campaign",
                    "Single vs repeat givers: attach each supporter’s campaign traits",
                    "EDA and chi-square independence checks"
                ],
                zh: [
                    "6 张内部表 + ATO 邮编收入 + ABS SEIFA 十分位",
                    "清洗：删除低价值字段、二元变量编码为 0/1、统一文本形式的缺失值",
                    "Mosaic 分群：邮编画像 50% + 收入档画像 50%",
                    "通过活动成员关系区分 DM / 非 DM 支持者",
                    "标签：加入活动后 90 天内有无捐款",
                    "单次与多次捐款者：为每位支持者附上活动特征",
                    "探索性分析与卡方独立性检验"
                ]
            },
            caption: {
                en: "Age was missing for 90% of supporters and postcode for 61%, so missingness was kept and tested as a signal rather than dropped. Country (Australia or blank) and city (implied by postcode) were removed; the two largest files were read in 8,000-row chunks to stay within memory.",
                zh: "90% 的支持者缺少年龄，61% 缺少邮编，因此没有直接删除缺失值，而是把“是否缺失”保留下来作为信号检验。国家（只有澳大利亚或空白）和城市（可由邮编推出）两个字段被删除；两个最大的文件按每块 8,000 行分块读取，避免内存溢出。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · notebook output",
                zh: "本人负责 · notebook 输出"
            },
            title: {
                en: "DM vs Non-DM Supporters",
                zh: "DM 与非 DM 支持者对比"
            },
            columns: {
                en: ["Measure", "DM", "Non-DM"],
                zh: ["指标", "DM", "非 DM"]
            },
            rows: [
                [{ en: "Supporters", zh: "支持者人数" }, "338,596", "322,696"],
                [{ en: "Gave within 90 days", zh: "90 天内捐款人数" }, "53,664", "78,127"],
                [{ en: "90-day giving rate", zh: "90 天内捐款率" }, "15.85%", "24.21%"],
                [{ en: "Of these, one gift only", zh: "其中只捐一次" }, "34.0%", "84.0%"],
                [{ en: "Of these, two or more gifts", zh: "其中捐两次及以上" }, "66.0%", "16.0%"]
            ],
            highlightRow: 4,
            caption: {
                en: "DM reaches people who respond less often, but those who do respond tend to keep giving: 35,398 of the 53,664 DM givers gave at least twice in the window. That made repeat behaviour, not just a first gift, worth modelling.",
                zh: "DM 触达的人群整体响应率较低，但响应的人更倾向于持续捐款：53,664 名 DM 捐款者中有 35,398 人在窗口期内至少捐了两次。因此值得建模的不只是首次捐款，还有持续捐款行为。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Profile Completeness and Giving (DM Supporters)",
                zh: "资料完整度与捐款（DM 支持者）"
            },
            columns: {
                en: ["Field on file", "Has it", "Doesn’t"],
                zh: ["资料字段", "有", "无"]
            },
            rows: [
                [{ en: "Postcode", zh: "邮编" }, "24.9%", "3.5%"],
                [{ en: "Age", zh: "年龄" }, "39%", "12%"],
                [{ en: "Mosaic segment", zh: "Mosaic 分群" }, "25%", "4%"],
                [{ en: "Home phone", zh: "住宅电话" }, "38%", "14%"],
                [{ en: "Work phone", zh: "工作电话" }, "24%", "5%"],
                [{ en: "Mobile phone", zh: "手机" }, "23%", "8%"],
                [{ en: "Email", zh: "电子邮箱" }, "23%", "8%"]
            ],
            caption: {
                en: "Share of DM supporters giving within 90 days. Complete records likely mark supporters who are easier to reach with targeted mail. The pattern reverses outside DM: non-DM supporters without a postcode gave more often (26.5% vs 14.4%), and so did those without an age, which points to online givers who share less personal data.",
                zh: "数值为 DM 支持者 90 天内捐款的比例。资料完整，往往意味着更容易被定向邮件触达。非 DM 渠道的规律正好相反：没有邮编的非 DM 支持者捐款更多（26.5% 对 14.4%），没有年龄的也一样，说明线上捐款者往往不愿留下个人信息。"
            }
        },
        {
            type: "bars",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "90-Day Giving Rate by Age (DM Supporters with an Age)",
                zh: "按年龄划分的 90 天捐款率（有年龄记录的 DM 支持者）"
            },
            items: [
                { label: { en: "18–29", zh: "18–29 岁" }, value: 30, suffix: "%" },
                { label: { en: "30–39", zh: "30–39 岁" }, value: 28, suffix: "%" },
                { label: { en: "40–49", zh: "40–49 岁" }, value: 39, suffix: "%" },
                { label: { en: "50–59", zh: "50–59 岁" }, value: 45, suffix: "%" },
                { label: { en: "60–69", zh: "60–69 岁" }, value: 51, suffix: "%" },
                { label: { en: "70–79", zh: "70–79 岁" }, value: 55, suffix: "%" },
                { label: { en: "80–100", zh: "80–100 岁" }, value: 58, suffix: "%", highlight: true }
            ],
            caption: {
                en: "Age was the strongest demographic gradient: from 40 onwards each older bracket gives more, and from 60 more than half give within 90 days. Within each age bracket a postcode added only a few points (most at 40–49, about 6), and under-40s and over-80s without one actually gave more often, so much of the overall postcode gap reflects records that are missing several fields at once.",
                zh: "年龄是最明显的人口特征梯度：从 40 岁开始，年龄段越高捐款率越高，60 岁以上超过一半会在 90 天内捐款。在同一年龄段内，有邮编只带来几个百分点的提升（40–49 岁最多，约 6 个百分点），40 岁以下和 80 岁以上没有邮编的人反而捐得更多，说明邮编整体差距很大程度上来自同时缺失多个字段的记录。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Donation Channel and Payment Method (DM Supporters)",
                zh: "捐款渠道与支付方式（DM 支持者）"
            },
            columns: {
                en: ["Category", "Supporters", "Giving rate"],
                zh: ["类别", "支持者人数", "捐款率"]
            },
            rows: [
                [{ en: "Channel · Mail", zh: "渠道 · 邮寄" }, "10,562", "55%"],
                [{ en: "Channel · Recurring Run", zh: "渠道 · 定期扣款" }, "85,270", "29%"],
                [{ en: "Channel · Web", zh: "渠道 · 网页" }, "154,276", "12%"],
                [{ en: "Channel · Raisely (small)", zh: "渠道 · Raisely（小类）" }, "1,307", "97%"],
                [{ en: "Payment · Cheque", zh: "支付 · 支票" }, "11,658", "28%"],
                [{ en: "Payment · Direct debit", zh: "支付 · 直接扣款" }, "18,351", "23%"],
                [{ en: "Payment · Credit card", zh: "支付 · 信用卡" }, "150,214", "21%"],
                [{ en: "Payment · PayPal (CBA)", zh: "支付 · PayPal（CBA）" }, "13,083", "11%"],
                [{ en: "Payment · Cash", zh: "支付 · 现金" }, "11,606", "4%"],
                [{ en: "Payment · Bank account (small)", zh: "支付 · 银行账户（小类）" }, "3,907", "76%"]
            ],
            caption: {
                en: "Web is the largest channel but converts least; Mail is small, yet more than half its supporters gave again. Small categories such as Raisely and bank account can reflect a single campaign, so I flagged them for grouping with similar categories rather than reading them as channel effects; the team later turned this into its category-consolidation rule.",
                zh: "网页是最大的渠道，但转化率最低；邮寄渠道人数少，却有一半以上的人再次捐款。Raisely、银行账户这类小类别可能只反映单个活动，因此我建议把它们与相近类别合并，而不是当作渠道效应解读；小组后来把这一点做成了类别合并规则。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Where Giving Differs, and Where It Doesn’t (DM Supporters)",
                zh: "哪些维度有差异，哪些没有（DM 支持者）"
            },
            columns: {
                en: ["Dimension", "Range", "Reading"],
                zh: ["维度", "范围", "解读"]
            },
            rows: [
                [{ en: "Age bracket", zh: "年龄段" }, { en: "28% (30–39) to 58% (80+)", zh: "28%（30–39 岁）至 58%（80 岁以上）" }, { en: "Strongest demographic gradient", zh: "最明显的人口特征梯度" }],
                [{ en: "State", zh: "州 / 领地" }, { en: "19% (NT) to 31% (ACT)", zh: "19%（北领地）至 31%（首都领地）" }, { en: "ACT, TAS and WA highest; NT and QLD lowest", zh: "首都领地、塔州、西澳最高；北领地、昆州最低" }],
                [{ en: "Mosaic segment (A–N)", zh: "Mosaic 分群（A–N）" }, { en: "22% (H, M) to 29% (N)", zh: "22%（H、M）至 29%（N）" }, { en: "Moderate spread; kept as a feature", zh: "差异中等；保留为特征" }],
                [{ en: "IRSAD decile (1–10)", zh: "IRSAD 十分位（1–10）" }, { en: "23% to 26%", zh: "23% 至 26%" }, { en: "DM appeal works almost equally across socio-economic levels", zh: "DM 募捐在不同社会经济水平中效果接近" }],
                [{ en: "Average gift by IRSAD decile", zh: "按 IRSAD 十分位的平均捐款额" }, { en: "$67–$74 (deciles 1–3) to about $125 (decile 10)", zh: "67–74 澳元（第 1–3 档）至约 125 澳元（第 10 档）" }, { en: "Richer areas give more per gift, not more often", zh: "富裕地区每次捐得更多，而不是捐得更频繁" }]
            ],
            caption: {
                en: "Socio-economic status changed how much people give far more than whether they give, so the briefing recommended weighting high-decile areas for gift size while keeping DM broad. Payment methods and channels were spread evenly across deciles, with credit card and direct debit most common in every decile.",
                zh: "社会经济水平影响的主要是捐多少，而不是捐不捐，因此简报建议在保持 DM 覆盖面的同时，针对高十分位地区争取更高的单笔金额。各十分位的支付方式和渠道分布基本一致，信用卡和直接扣款在每一档都最常见。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/unicef-eda/chi-square-matrix.png",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Chi-square Independence Test of the Contact Flags",
                zh: "联系方式变量的卡方独立性检验"
            },
            caption: {
                en: "Every pair of contact-preference and contact-availability flags was dependent at p < 0.05 (“Dep”): someone who refuses phone contact usually refuses email too, and their giving patterns look almost identical. Using all nine would add collinearity, so the team kept one representative flag (DoNotPhone) plus Has_Age.",
                zh: "所有联系偏好与联系方式变量两两之间在 p < 0.05 下都不独立（图中 “Dep”）：拒绝电话联系的人通常也拒绝邮件，捐款规律也几乎一样。九个变量全部放入会带来共线性，因此小组只保留一个代表变量（DoNotPhone）和 Has_Age。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Mosaic segment from postcode and income, and the 90-day giving label",
                zh: "按邮编与收入归入 Mosaic 分群，以及 90 天捐款标签"
            },
            language: "Python · pandas · NumPy",
            source: {
                en: "My notebook, condensed",
                zh: "本人 notebook（精简）"
            },
            caption: {
                en: "Condensed from my notebook: printing and the intermediate cleaning steps are removed. Each Mosaic profile row is first normalised so the 14 groups sum to 1 for that postcode or income band.",
                zh: "根据本人 notebook 精简，去掉了打印和中间清洗步骤。每个邮编或收入档的 Mosaic 画像先做归一化，使 14 个分群的占比之和为 1。"
            },
            code: `import numpy as np
import pandas as pd

# 1. Income band for each supporter's postcode (ATO average taxable income, 2020-21)
income_min = [0, 33800, 52000, 78000, 104000, 156000, 208000]
income_labels = ["Under $33,779", "$33,800-$51,999", "$52,000-$77,999", "$78,000-$103,999",
                 "$104,000-$155,999", "$156,000-$207,999", "$208,000+"]
band = np.digitize(sup["Average total income or loss"], bins=income_min, right=True)
sup["Income_Category"] = [income_labels[i - 1] for i in band]

# 2. Mosaic group A-N: average the postcode profile and the income-band profile 50/50
groups = sorted({c.split("_")[0] for c in sup.columns
                 if c.endswith("_postcode") and c.split("_")[0] + "_income" in sup.columns})
for g in groups:
    sup[g + "_final"] = 0.5 * sup[g + "_postcode"] + 0.5 * sup[g + "_income"]
sup["Mosaic_Category"] = (sup[[g + "_final" for g in groups]]
                          .idxmax(axis=1, skipna=True).str.replace("_final", ""))

# 3. Label: did a DM supporter give to their campaign within 90 days of joining it?
md = donations_dm.merge(members_dm, on=["SupporterID", "CampaignID"], how="inner")
md["MemberCreatedDate"] = pd.to_datetime(md["MemberCreatedDate"], dayfirst=True)
md["Gift_Date"] = pd.to_datetime(md["Gift_Date"], errors="coerce")
window = md[(md["Gift_Date"] >= md["MemberCreatedDate"]) &
            (md["Gift_Date"] <= md["MemberCreatedDate"] + pd.Timedelta(days=90))]
counts = window.groupby("SupporterID").size()

supporter_dm["NumDonationsWithin3Months"] = (
    supporter_dm["SupporterID"].map(counts).fillna(0).astype(int))
print((supporter_dm["NumDonationsWithin3Months"] > 0).mean())   # 0.1585 (53,664 of 338,596)`
        }
    ],

    details: {
        en: [
            {
                title: "The Data · My part",
                bullets: [
                    "Internal tables: supporters (661,292 × 18), campaigns (21,943), campaign members (49.5 million rows), donations (6.1 million), the Mosaic Australia Grand Index and postcode Mosaic profiles.",
                    "External data I added: ATO Taxation Statistics 2020–21 (average total income by postcode) and ABS SEIFA 2021 for postal areas, keeping only the IRSAD decile.",
                    "Missing data was heavy: age was blank for 596,776 supporters (90%) and postcode, state and city for 405,504 (61%)."
                ]
            },
            {
                title: "Cleaning and Enrichment · My part",
                bullets: [
                    "Used the supporter table as the base, since it holds everyone, contacted or not. Dropped mailing country (Australia or blank), city (implied by postcode) and the first and last gift dates, which repeat the donation table.",
                    "Coded every Yes/No and True/False field as 0/1 and converted text such as “nan”, “NaN” and “Null” into true missing values so counts and modes were not distorted.",
                    "Mapped each postcode’s average income into the seven Census income bands used by Mosaic, then averaged the postcode and income-band profiles 50/50 and assigned the most likely of the 14 Mosaic groups; 1,437 supporters with a postcode still could not be matched."
                ]
            },
            {
                title: "DM Split and Labels · My part",
                bullets: [
                    "Found every DM campaign, then every supporter who was a member of one, and split all four core tables into DM and non-DM sets so the two channels could be compared.",
                    "Labelled a supporter as a giver if a gift to their campaign fell within 90 days of joining it: 53,664 of 338,596 DM supporters (15.85%) and 78,127 non-DM supporters (24.21%).",
                    "For one-time givers, attached the traits of the single campaign they gave to (channel, payment type, theme). For repeat givers, attached their most frequent value for each trait across all their gifts."
                ]
            },
            {
                title: "What the EDA Showed · My part",
                bullets: [
                    "Completeness: DM supporters with a postcode gave at 24.9% vs 3.5% without; with an age 39% vs 12%; with a Mosaic segment 25% vs 4%. Contact details told the same story, e.g. 38% vs 14% for a home phone.",
                    "Channels and payment: Mail converted best among large channels (55%), Recurring Run 29% and Web only 12% despite the most supporters; cheque (28%) and direct debit (23%) beat cash (4%).",
                    "Campaign content: supporters linked to Inspired Gifts gave at 64% vs 13% for Always On; emergency-assistance content had the highest giving rate of any theme (36%).",
                    "Socio-economics: giving rates were flat across IRSAD deciles (23–26%), but the average gift rose from $67–74 in deciles 1–3 to about $125 in decile 10."
                ]
            },
            {
                title: "Executive Briefing · My part",
                bullets: [
                    "Keep DM alongside traditional payment methods (direct debit, cheque), whose supporters respond well, and complete missing supporter data, since incomplete records were the clearest marker of non-response.",
                    "Retain older supporters, who give most often, and use digital, interest-based or social outreach for under-40s, for whom mail targeting by postcode added nothing.",
                    "Use socio-economic data for gift size rather than targeting: DM appeals work across deciles, but high-decile areas give larger amounts."
                ]
            },
            {
                title: "How It Fed the Team Model",
                bullets: [
                    "The team project built on these individual pipelines: low-value columns removed, age kept as the key demographic, one flag per dependent group of binaries, and rare categories merged with similar ones.",
                    "The team then narrowed the data to DM supporters contacted since 2022, widened the window to 100 days for postal delays, and switched the Mosaic weighting to postcode 70% and age 30%."
                ]
            }
        ],

        zh: [
            {
                title: "数据 · 本人负责",
                bullets: [
                    "内部数据：支持者表（661,292 × 18）、营销活动表（21,943 条）、活动成员表（4,950 万行）、捐款表（610 万条）、Mosaic Australia 总指数，以及各邮编的 Mosaic 画像。",
                    "我加入的外部数据：ATO 2020–21 年税务统计（各邮编平均总收入）和 ABS SEIFA 2021 邮政区数据，只保留 IRSAD 十分位。",
                    "缺失值很多：596,776 名支持者（90%）没有年龄，405,504 名（61%）没有邮编、州和城市。"
                ]
            },
            {
                title: "清洗与数据丰富 · 本人负责",
                bullets: [
                    "以支持者表为主表，因为它包含所有人，无论是否被联系过。删除邮寄国家（只有澳大利亚或空白）、城市（可由邮编推出），以及与捐款表重复的首次和末次捐款日期。",
                    "把所有 Yes/No、True/False 字段编码为 0/1，并把 “nan”、“NaN”、“Null” 等文本转为真正的缺失值，避免计数和众数被扭曲。",
                    "把各邮编的平均收入映射到 Mosaic 使用的七个人口普查收入档，再将邮编画像与收入档画像各按 50% 加权，归入 14 个 Mosaic 分群中可能性最大的一个；仍有 1,437 名有邮编的支持者无法匹配。"
                ]
            },
            {
                title: "DM 拆分与标签 · 本人负责",
                bullets: [
                    "先找出所有 DM 营销活动及其全部成员，再把四张核心表拆分为 DM 与非 DM 两组，以便比较两个渠道。",
                    "若支持者在加入活动后 90 天内向该活动捐款，即标记为捐款者：DM 支持者中 338,596 人有 53,664 人（15.85%），非 DM 支持者中有 78,127 人（24.21%）。",
                    "对只捐一次的人，附上其唯一捐款活动的特征（渠道、支付方式、主题）；对多次捐款的人，附上其所有捐款中每项特征出现最多的取值。"
                ]
            },
            {
                title: "探索性分析发现 · 本人负责",
                bullets: [
                    "资料完整度：有邮编的 DM 支持者捐款率 24.9%，无邮编仅 3.5%；有年龄 39% 对 12%；有 Mosaic 分群 25% 对 4%。联系方式也一样，例如有住宅电话 38%，没有则 14%。",
                    "渠道与支付：大渠道中邮寄转化最好（55%），定期扣款 29%，网页人数最多却只有 12%；支票（28%）和直接扣款（23%）高于现金（4%）。",
                    "活动内容：与 Inspired Gifts 相关的支持者捐款率 64%，Always On 只有 13%；紧急援助主题的捐款率在所有主题中最高（36%）。",
                    "社会经济：各 IRSAD 十分位的捐款率几乎持平（23–26%），但平均捐款额从第 1–3 档的 67–74 澳元升至第 10 档的约 125 澳元。"
                ]
            },
            {
                title: "管理层简报 · 本人负责",
                bullets: [
                    "继续把 DM 与传统支付方式（直接扣款、支票）结合，这些支持者响应较好；同时补全缺失的支持者资料，因为资料不完整是不响应最明显的标志。",
                    "维系捐款最频繁的年长支持者；对 40 岁以下人群采用数字化、兴趣导向或社交动员式的触达，按邮编定向邮寄对他们没有帮助。",
                    "把社会经济数据用于提高单笔金额而非筛选对象：DM 募捐在各十分位都有效，但高十分位地区捐得更多。"
                ]
            },
            {
                title: "对小组模型的贡献",
                bullets: [
                    "小组项目建立在各成员的个人数据管道之上：删除低价值字段、保留年龄作为关键人口特征、每组相互依赖的二元变量只保留一个，并把稀有类别与相近类别合并。",
                    "随后小组把数据收窄到 2022 年以来被联系过的 DM 支持者，把窗口放宽到 100 天以考虑邮寄延误，并把 Mosaic 权重改为邮编 70%、年龄 30%。"
                ]
            }
        ]
    }
},
    {
        id: "thailand-nomad-dashboard",
        category: "analytics-systems",

        title: {
            en: "Thailand Digital Nomad Visa — Tableau Policy Dashboard",
            zh: "泰国数字游民签证 — Tableau 政策决策看板"
        },

        organisation: {
            en: "The University of Sydney",
            zh: "悉尼大学"
        },

        role: {
            en: "Group project (Group 6) · Tableau dashboard design",
            zh: "小组项目（第 6 组）· Tableau 看板设计"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "Semester 2, 2026",
            zh: "2026 年第二学期"
        },

        sortDate: "2026-10",

        logo: "",

        // Show the dashboard visuals before the written details.
        visualsFirst: true,

        // Live, clickable dashboard. Paste the Tableau Public link here once the
        // workbook is published (e.g. https://public.tableau.com/views/<Workbook>/<Dashboard>).
        // Nothing is shown while the url is empty.
        liveEmbed: {
            provider: "tableau",
            url: "",
            height: 840,
            title: {
                en: "Thailand digital nomad trips, 2019–2023: where, when and for how long",
                zh: "泰国数字游民出行（2019—2023）：去哪里、什么时候、待多久"
            },
            caption: {
                en: "Click a destination to filter the monthly chart and highlight the heatmap; change the long-stay threshold to test 30-, 60- or 90-day stays.",
                zh: "点击任一目的地可筛选月度趋势并高亮热力图；切换“长期停留阈值”可比较 30、60、90 天三种情形。"
            }
        },

        background: {
            paragraphs: {
                en: [
                    "Thailand wants to design a competitive digital nomad visa. Remote professionals can work from anywhere, many countries now compete for them with special visas, and for Thailand they are a way to diversify an economy that has long relied on tourism.",
                    "The government had no clear picture of how digital nomads actually travel. It did have a large Nomad List dataset (250,000+ self-recorded trips across 18 columns: user and trip IDs, start and end times, stay length, place, country and coordinates) covering a period that includes COVID-19, but in raw form it was hard to interpret.",
                    "The audience is a group of government stakeholders with different questions: the Minister of Digital Economy and Society leading the visa initiative, the Tourism Authority of Thailand, the ministry's data science lead, a Ministry of Foreign Affairs policy adviser benchmarking Thailand against other countries' visas, and a representative of the nomad community."
                ],
                zh: [
                    "泰国希望设计一项有竞争力的数字游民签证。远程工作者可以在任何地方办公，各国正用专门签证争夺这类人群；对长期依赖旅游业的泰国来说，这也是推动经济多元化的机会。",
                    "政府并不清楚数字游民实际如何出行。手里有一份 Nomad List 大数据集（25 万余条用户自行记录的行程、18 个字段：用户与行程 ID、起止时间、停留天数、地点、国家与经纬度），时间跨度包含新冠疫情期间，但原始数据很难直接解读。",
                    "看板的读者是一组关注点各不相同的政府相关方：牵头签证项目的数字经济与社会部部长、泰国旅游局、部内数据科学负责人、负责与他国签证对标的外交部政策顾问，以及数字游民社群代表。"
                ]
            },
            points: {
                en: [
                    "Business understanding: research how countries compete for digital talent and what Thailand's policy “business model” is.",
                    "Data understanding: explore the data in Tableau, focusing on the features most relevant to Thailand's policy decisions.",
                    "Visualisation: build one dashboard for government stakeholders that shows only the most decision-relevant insights, and justify every design choice."
                ],
                zh: [
                    "业务理解：研究各国如何争夺数字人才，以及泰国这项政策背后的“商业模式”。",
                    "数据理解：在 Tableau 中做探索性分析，重点关注与泰国政策决策最相关的字段。",
                    "可视化：为政府相关方做一张看板，只展示最影响决策的洞察，并说明每一个设计选择的理由。"
                ]
            }
        },

        overviewBullets: {
            en: [
                "Co-designed a Tableau policy dashboard from 250K+ Nomad List trip records: converted epoch timestamps, validated dates and stay lengths, defined arrival (7,166) and completed (6,840) scopes for Thailand, and condensed 30 exploratory and audit worksheets into 4 linked views with a 30/60/90-day long-stay control.",
                "Benchmarked Thailand against 5 competing destinations (6,840 stays, second only to Spain's 8,208) and showed that Chiang Mai's median stay of 23 days is 2.6× Bangkok's 9, pointing to where a long-stay visa would actually be used."
            ],
            zh: [
                "参与设计基于 25 万+ 条 Nomad List 行程记录的 Tableau 政策看板：转换时间戳、校验日期与停留天数，为泰国定义到达口径（7,166 次）和完整停留口径（6,840 次），并把 30 张探索与审计工作表浓缩为 4 个联动视图，配有 30/60/90 天长住阈值控件。",
                "将泰国与 5 个竞争目的地对比（6,840 次停留，仅次于西班牙的 8,208 次），并发现清迈的停留中位数 23 天是曼谷（9 天）的 2.6 倍，说明长住签证真正会被用在哪里。"
            ]
        },

        tags: [
            "Tableau",
            "Dashboard Design",
            "Data Cleaning",
            "Calculated Fields",
            "LOD Expressions",
            "Policy Analytics"
        ],

        metrics: [
            {
                value: "250K+",
                label: {
                    en: "Nomad List trip records in the source data",
                    zh: "原始数据中的 Nomad List 行程记录"
                }
            },
            {
                value: "7,166",
                label: {
                    en: "Thailand trips with a valid start date (arrival scope)",
                    zh: "有有效出发日期的泰国行程（到访口径）"
                }
            },
            {
                value: "6,840",
                label: {
                    en: "Completed Thailand stays of 1–365 days (completed scope)",
                    zh: "停留 1—365 天的完整泰国行程（完成口径）"
                }
            },
            {
                value: "6",
                label: {
                    en: "Destinations benchmarked: Thailand and five peers",
                    zh: "对标的目的地：泰国与 5 个竞争国家"
                }
            },
            {
                value: "30",
                label: {
                    en: "Worksheets built for exploration, audits and robustness checks; 4 made the dashboard",
                    zh: "用于探索、审计与稳健性检查的工作表；最终只有 4 张进入看板"
                }
            },
            {
                value: "23 vs 9",
                label: {
                    en: "Median stay in days: Chiang Mai vs Bangkok",
                    zh: "清迈与曼谷的中位停留天数"
                }
            }
        ],

        visuals: [
            {
                type: "bars",
                source: {
                    en: "Group dashboard",
                    zh: "小组看板"
                },
                title: {
                    en: "Thailand vs Peers: Recorded Trips",
                    zh: "泰国与竞争目的地：行程记录数"
                },
                items: [
                    { label: { en: "Spain", zh: "西班牙" }, value: 8208, suffix: "" },
                    { label: { en: "Thailand", zh: "泰国" }, value: 6840, suffix: "", highlight: true },
                    { label: { en: "Portugal", zh: "葡萄牙" }, value: 5323, suffix: "" },
                    { label: { en: "Indonesia", zh: "印度尼西亚" }, value: 3432, suffix: "" },
                    { label: { en: "Vietnam", zh: "越南" }, value: 2162, suffix: "" },
                    { label: { en: "Malaysia", zh: "马来西亚" }, value: 1502, suffix: "" }
                ],
                caption: {
                    en: "Completed stays of 1–365 days, 2019–2023, as saved in the workbook. Thailand is highlighted, as in the dashboard, so the eye finds it first.",
                    zh: "2019—2023 年停留 1—365 天的完整行程，数值取自保存的工作簿。与看板一致，泰国用高亮色标出，方便一眼找到。"
                }
            },
            {
                type: "bars",
                source: {
                    en: "Group dashboard",
                    zh: "小组看板"
                },
                title: {
                    en: "Median Stay by Destination Country (days)",
                    zh: "各目的地国家的中位停留天数"
                },
                items: [
                    { label: { en: "Spain", zh: "西班牙" }, value: 8, suffix: "" },
                    { label: { en: "Thailand", zh: "泰国" }, value: 11, suffix: "", highlight: true },
                    { label: { en: "Portugal", zh: "葡萄牙" }, value: 11, suffix: "" },
                    { label: { en: "Indonesia", zh: "印度尼西亚" }, value: 16, suffix: "" },
                    { label: { en: "Vietnam", zh: "越南" }, value: 7, suffix: "" },
                    { label: { en: "Malaysia", zh: "马来西亚" }, value: 7, suffix: "" }
                ],
                caption: {
                    en: "The median is used rather than the mean so that a few very long trips do not distort the typical stay.",
                    zh: "使用中位数而不是平均数，避免少数超长行程拉高“典型停留时长”。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Group dashboard",
                    zh: "小组看板"
                },
                title: {
                    en: "Top 10 Destinations in Thailand",
                    zh: "泰国十大目的地"
                },
                columns: {
                    en: ["Destination", "Recorded trips", "Median stay (days)", "Long-stay share (≥ 30 days)"],
                    zh: ["目的地", "行程记录数", "中位停留（天）", "长期停留占比（≥ 30 天）"]
                },
                rows: [
                    [{ en: "Bangkok", zh: "曼谷" }, 2619, 9, "20.4%"],
                    [{ en: "Chiang Mai", zh: "清迈" }, 1294, 23, "37.4%"],
                    [{ en: "Phuket", zh: "普吉" }, 808, 12, "23.8%"],
                    [{ en: "Ko Pha Ngan", zh: "帕岸岛" }, 412, 23, "39.8%"],
                    [{ en: "Ko Samui", zh: "苏梅岛" }, 360, 9, "25.0%"],
                    [{ en: "Ko Lanta", zh: "兰达岛" }, 169, 14, "22.5%"],
                    [{ en: "Pattaya", zh: "芭提雅" }, 164, 7, "22.6%"],
                    [{ en: "Ko Tao", zh: "涛岛" }, 159, 7, "13.2%"],
                    [{ en: "Krabi", zh: "甲米" }, 144, 5, "8.3%"],
                    [{ en: "Pai", zh: "拜县" }, 89, 5, "11.2%"]
                ],
                caption: {
                    en: "Completed stays, default 30-day threshold. Trips with no matched destination (4.3% of stays) are excluded from the ranking rather than silently dropped.",
                    zh: "完整行程口径，默认长期停留阈值 30 天。无法匹配目的地的行程（占 4.3%）不参与排名，但不会被悄悄删除。"
                }
            },
            {
                type: "process",
                title: {
                    en: "From Raw Trip Records to Dashboard",
                    zh: "从原始行程记录到看板"
                },
                steps: {
                    en: [
                        "250K+ raw trip records",
                        "Epoch → UTC dates (2019–2023)",
                        "Validate dates & durations",
                        "Audit flags & unmatched places",
                        "Arrival vs completed scopes",
                        "One-page dashboard + notes"
                    ],
                    zh: [
                        "25 万余条原始行程",
                        "时间戳 → UTC 日期（2019—2023）",
                        "校验日期与停留时长",
                        "审计标记与未匹配地点",
                        "到访口径与完成口径",
                        "单页看板 + 说明页"
                    ]
                },
                caption: {
                    en: "Every count on the dashboard states which scope it uses, and a second page explains what is counted and what is not.",
                    zh: "看板上的每个数字都注明使用哪个口径，另设一页说明“统计了什么、没统计什么”。"
                }
            }
        ],

        details: {
            en: [
                {
                    title: "Who the Dashboard Serves",
                    bullets: [
                        "Built around the questions each stakeholder brings: how Thailand compares with competing destinations (foreign affairs), where nomads stay and for how long (visa design and infrastructure), and when they arrive (tourism planning).",
                        "Following the brief, only four views made the final page; the rest of the exploration stayed in supporting worksheets."
                    ]
                },
                {
                    title: "Dashboard Design",
                    bullets: [
                        "Title framed as the policy question: “where, when and for how long”.",
                        "Top left: Thailand against Spain, Portugal, Indonesia, Vietnam and Malaysia on recorded trips and median stay, with Thailand in orange and the peers in blue.",
                        "Bottom left: the top 10 Thai destinations, with trips, median stay and long-stay share in three aligned columns so popularity and stay length can be read together.",
                        "Top right: monthly trip starts from 2019 to 2023, showing the COVID-19 collapse and the recovery.",
                        "Bottom right: a seasonality heatmap for Bangkok, Chiang Mai and Phuket, normalised within each destination so places of very different size can be compared month by month.",
                        "Right rail: the long-stay threshold control, colour legend, start-year filter and short reading notes."
                    ]
                },
                {
                    title: "Interactions and Why They Exist",
                    bullets: [
                        "A long-stay threshold parameter (30, 60 or 90 days) recalculates the long-stay share, so policymakers can see how many trips each candidate visa length would actually cover.",
                        "Clicking a destination filters the monthly trend and highlights its row in the heatmap (two dashboard actions); clicking again resets the view.",
                        "The monthly chart is deliberately not filtered by start year, so the full trend stays visible while the other panels focus on the selected years.",
                        "A separate “About the data” page holds scopes, definitions and caveats, keeping the main page uncluttered for non-technical readers."
                    ]
                },
                {
                    title: "Data Cleaning & Validation",
                    bullets: [
                        "Converted epoch timestamps to UTC dates and limited the analysis window to 2019–2023.",
                        "Cross-checked every text date against its epoch timestamp (format check plus year, month and day match) and treated mismatches as invalid instead of trusting either field.",
                        "Recomputed stay length from the epoch duration and checked it against end minus start; an audit sheet counted negative, zero and over-365-day durations, duration mismatches and missing location keys.",
                        "Counted trips as distinct trip IDs and travellers as distinct usernames; grouped trips without a location key as “Unmatched destination” (4.3% of stays) so they stay visible in the totals."
                    ]
                },
                {
                    title: "Analysis Scopes & Robustness Checks",
                    bullets: [
                        "Arrival scope: Thailand trips with a valid start date (n = 7,166), used for trip-start counts. Completed scope: valid start and end, consistent duration and a stay of 1–365 days (n = 6,840), used for median stay and long-stay share.",
                        "For Bangkok, Chiang Mai and Phuket, re-ran the statistics including the over-365-day tail, including zero-day stays, on a short-stay pool and excluding the final year, to check that conclusions did not hinge on one cleaning rule.",
                        "Compared trip-weighted results with equal weighting per user and with per-user medians, to check whether a few prolific users were driving the long-stay figures.",
                        "Used level-of-detail calculations (e.g. a fixed Thailand trip total) for shares, and median-based statistics for stay length."
                    ]
                },
                {
                    title: "Key Insights",
                    bullets: [
                        "Thailand recorded 6,840 completed stays, second only to Spain (8,208) among the six destinations, with a median stay of 11 days (Indonesia 16, Spain 8).",
                        "Bangkok has the most trips (2,619) but a short median stay (9 days, 20.4% long stays), while Chiang Mai (23 days, 37.4%) and Ko Pha Ngan (23 days, 39.8%) attract the longer stays a nomad visa is designed for.",
                        "Trip starts collapsed in 2020–2021; 2022–2023 account for about 69% of all starts, so the pooled seasonality pattern mostly reflects these two years."
                    ]
                },
                {
                    title: "Reading the Data with Care",
                    bullets: [
                        "Rows are trips recorded by Nomad List users, not official visitor counts; Spain ranking above Thailand may partly reflect who uses the platform.",
                        "Monthly values for 2020–2021 rest on few trips and are volatile.",
                        "Usernames were used only for the account-level checks and never appear on the dashboard."
                    ]
                }
            ],

            zh: [
                {
                    title: "看板服务对象",
                    bullets: [
                        "围绕各相关方的问题设计：泰国与竞争目的地相比如何（外交部对标），数字游民在哪里停留、待多久（签证设计与基础设施布局），以及什么时候来（旅游规划）。",
                        "按任务要求，最终页面只放 4 个视图，其余探索分析保留在辅助工作表中。"
                    ]
                },
                {
                    title: "看板设计",
                    bullets: [
                        "标题直接点出政策问题：“去哪里、什么时候、待多久”。",
                        "左上：泰国与西班牙、葡萄牙、印尼、越南、马来西亚在行程数与中位停留天数上的对比，泰国为橙色，其他国家为蓝色。",
                        "左下：泰国十大目的地，行程数、中位停留与长期停留占比三列对齐，热门程度与停留时长可以一起看。",
                        "右上：2019—2023 年月度出发行程数，展示疫情期间的断崖与之后的恢复。",
                        "右下：曼谷、清迈、普吉的季节性热力图，按目的地内部归一化，规模差异很大的地方也能逐月比较。",
                        "右侧栏：长期停留阈值控件、图例、出发年份筛选和简短的阅读说明。"
                    ]
                },
                {
                    title: "交互设计及原因",
                    bullets: [
                        "长期停留阈值参数（30 / 60 / 90 天）会重新计算长期停留占比，决策者可以直接看到不同签证时长能覆盖多少行程。",
                        "点击某个目的地会筛选月度趋势，并在热力图中高亮该行（两个看板动作）；再次点击即可恢复。",
                        "月度趋势图有意不受出发年份筛选影响，保证完整趋势始终可见，其余面板则聚焦所选年份。",
                        "单独设置“关于数据”页面，集中说明口径、定义与注意事项，让主页面对非技术读者保持简洁。"
                    ]
                },
                {
                    title: "数据清洗与校验",
                    bullets: [
                        "将 epoch 时间戳转换为 UTC 日期，并把分析窗口限定在 2019—2023 年。",
                        "逐条核对文本日期与对应时间戳（格式检查 + 年月日一致），不一致的视为无效，而不是任意信任其中一个字段。",
                        "用 epoch 时长重新计算停留天数，并与“结束 − 开始”交叉核对；审计表统计负时长、零时长、超过 365 天、时长不一致和缺失地点等问题。",
                        "行程按 trip ID 去重计数，用户按用户名去重计数；缺少地点键的行程归为“未匹配目的地”（占 4.3%），保留在总量中。"
                    ]
                },
                {
                    title: "分析口径与稳健性检查",
                    bullets: [
                        "到访口径：有有效出发日期的泰国行程（n = 7,166），用于出发量统计。完成口径：起止日期有效、时长一致且停留 1—365 天（n = 6,840），用于中位停留与长期停留占比。",
                        "针对曼谷、清迈、普吉，分别在“包含超过 365 天的长尾”“包含零天停留”“短期停留样本”“去掉最后一年”几种情形下重算指标，确认结论不依赖某一条清洗规则。",
                        "比较按行程加权与按用户等权、以及按用户中位数的结果，检查长期停留指标是否由少数高频用户驱动。",
                        "占比类指标使用 LOD 计算（如固定的泰国行程总数），停留时长使用基于中位数的统计。"
                    ]
                },
                {
                    title: "主要发现",
                    bullets: [
                        "泰国共有 6,840 条完整停留记录，在 6 个目的地中仅次于西班牙（8,208），中位停留 11 天（印尼 16 天，西班牙 8 天）。",
                        "曼谷行程最多（2,619）但中位停留只有 9 天（长期停留 20.4%）；清迈（23 天，37.4%）和帕岸岛（23 天，39.8%）吸引的正是数字游民签证想覆盖的长期停留人群。",
                        "2020—2021 年出发量断崖式下降；2022—2023 年约占全部出发量的 69%，因此合并后的季节性规律主要反映这两年。"
                    ]
                },
                {
                    title: "数据解读注意事项",
                    bullets: [
                        "每一行是 Nomad List 用户自行记录的行程，不是官方入境人数；西班牙排在泰国之前，可能部分反映了平台用户构成。",
                        "2020—2021 年各月行程很少，月度数值波动大。",
                        "用户名只用于账户层面的检查，不出现在看板上。"
                    ]
                }
            ]
        }
    },

{
    id: "disney-data-architecture",
    category: "analytics-systems",

    title: {
        en: "Disney MagicBand — Data Architecture, Quality, Security & Governance",
        zh: "迪士尼 MagicBand 数据架构、质量、安全与治理"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual assignment (data flows, data model, architecture) + group report (my part: security & ethics)",
        zh: "个人作业（数据流、数据模型、架构）+ 小组报告（本人负责安全与伦理）"
    },

    recognition: {
        en: "Received a recommendation letter from the course lecturer",
        zh: "获得课程老师的推荐信"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Mar 2026 – May 2026",
        zh: "2026年3月 – 2026年5月"
    },

    sortDate: "2026-05",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Walt Disney Parks and Resorts welcomes around 126 million visitors a year. Its MyMagic+ programme, an estimated US$800 million to US$1 billion investment, gives every guest a MagicBand: an RFID wristband that works as park ticket, room key, payment method and ride reservation, and that talks to thousands of sensors and about 100 linked systems across the resort.",
                "The result is one of the largest consumer data platforms in the world: guest locations and movement, queue lengths, restaurant and retail demand, ride usage and crowd density, streamed in real time. Disney's data infrastructure grew from relational databases to Hadoop in 2009, then to a platform built on Hadoop, Cassandra and MongoDB, with a technology team of more than 1,000 people.",
                "With that scale comes the core problem of this unit: the data is only valuable if it is integrated, trustworthy, secure and governed, and the platform handles highly sensitive information, including children's data, location tracking and linked credit cards. Acting as consultants, we designed how Disney should manage this data across three subject areas: Guest Experience Optimisation, Operational Decision Support, and Infrastructure and Attraction Performance Management."
            ],
            zh: [
                "华特迪士尼乐园及度假区每年接待约 1.26 亿人次游客。其 MyMagic+ 项目投入约 8 亿至 10 亿美元，为每位游客配发 MagicBand 手环：内置 RFID，可作门票、房卡、支付工具和项目预约凭证，并与度假区内数千个传感器和约 100 个关联系统交互。",
                "由此形成了全球规模最大的消费者数据平台之一：游客位置与动线、排队长度、餐饮零售需求、游乐设施使用与人流密度都在实时流入。迪士尼的数据基础设施从关系型数据库起步，2009 年转向 Hadoop，之后建成基于 Hadoop、Cassandra 与 MongoDB 的数据平台，技术团队超过 1,000 人。",
                "规模越大，本课程要解决的核心问题越突出：数据只有在整合、可信、安全且受治理时才有价值，而平台处理的又是高度敏感的信息，包括儿童数据、位置追踪和绑定的信用卡。我们以顾问身份，为迪士尼设计游客体验优化、运营决策支持、设施与游乐项目绩效管理三大主题领域的数据管理方案。"
            ]
        },
        pointsTitle: {
            en: "The brief (individual assignment, then group report)",
            zh: "任务要求（先个人作业，后小组报告）"
        },
        points: {
            en: [
                "Individual: make the case for data management in the three subject areas and explain what goes wrong without it.",
                "Individual: draw data flow diagrams for Guest Experience Optimisation and Infrastructure and Attraction Performance Management, and show where data can be reused.",
                "Individual: design a logical data model for Operational Decision Support, with business rules, assumptions and a plan to validate them.",
                "Individual: propose a data management architecture for all three areas and two analytics use cases it enables.",
                "Group: upgrade the architecture with named technologies and a cost/benefit and risk analysis, then add data-quality control points, a privacy and ethics analysis, a data-centric security architecture with policy enforcement points, and a governance programme."
            ],
            zh: [
                "个人：论证三大主题领域为什么需要数据管理，以及缺少数据管理会出现什么问题。",
                "个人：为游客体验优化、设施与游乐项目绩效管理绘制数据流图，并指出可复用的数据。",
                "个人：为运营决策支持设计逻辑数据模型，写明业务规则、假设以及验证方法。",
                "个人：提出覆盖三大领域的数据管理架构，以及它能支撑的两个分析用例。",
                "小组：在此基础上升级架构并指明具体技术、做成本收益与风险分析，再加入数据质量控制点、隐私与伦理分析、带策略执行点的数据安全架构和数据治理方案。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Designed a data architecture for Disney's MagicBand ecosystem (about 126 million visitors a year, ~100 linked systems): 2 data-flow diagrams, a 10-entity 3NF logical data model and a layered data platform supporting guest experience, park operations and attraction maintenance.",
            "In the group report, upgraded it to a 5-layer lakehouse with named technologies, 6 data-quality control points, 7 zero-trust policy enforcement points and a privacy map across COPPA, CCPA/CPRA, GDPR and PCI DSS (my part: security and ethics), plus a DAMA-DMBOK governance programme."
        ],
        zh: [
            "为迪士尼 MagicBand 体系（每年约 1.26 亿游客、约 100 个关联系统）设计数据架构：2 张数据流图、10 个实体的 3NF 逻辑数据模型，以及支撑游客体验、园区运营和设施维护的分层数据平台。",
            "在小组报告中将其升级为配有具体技术选型的 5 层湖仓架构，加入 6 个数据质量控制点、7 个零信任策略执行点，以及覆盖 COPPA、CCPA/CPRA、GDPR 和 PCI DSS 的隐私合规分析（本人负责安全与伦理），并提出基于 DAMA-DMBOK 的数据治理方案。"
        ]
    },

    tags: [
        "Data Architecture",
        "Lakehouse",
        "Data Flow Diagrams",
        "Logical Data Modelling (3NF)",
        "Data Quality",
        "Zero Trust Security",
        "Privacy & Ethics",
        "Data Governance"
    ],

    metrics: [
        {
            value: "3",
            label: {
                en: "Subject areas supported by one architecture",
                zh: "同一套架构支撑的主题领域"
            }
        },
        {
            value: "10",
            label: {
                en: "Entities in the 3NF logical data model",
                zh: "3NF 逻辑数据模型中的实体"
            }
        },
        {
            value: "5 layers",
            label: {
                en: "Sources, ingestion, storage, processing and output, plus cross-cutting governance",
                zh: "数据源、摄取、存储、处理、输出，外加贯穿全程的治理层"
            }
        },
        {
            value: "6",
            label: {
                en: "Data-quality control points (DQ1–DQ6)",
                zh: "数据质量控制点（DQ1—DQ6）"
            }
        },
        {
            value: "7",
            label: {
                en: "Zero-trust policy enforcement points (PEP1–PEP7)",
                zh: "零信任策略执行点（PEP1—PEP7）"
            }
        },
        {
            value: "4",
            label: {
                en: "Regulations mapped: COPPA, CCPA/CPRA, GDPR, PCI DSS",
                zh: "梳理的法规：COPPA、CCPA/CPRA、GDPR、PCI DSS"
            }
        }
    ],

    visuals: [
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/ind-geo-dfd.jpg",
            source: {
                en: "Individual assignment · my diagram",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Data Flow Diagram: Guest Experience Optimisation",
                zh: "数据流图：游客体验优化"
            },
            caption: {
                en: "Seven processes from pre-arrival planning to real-time itinerary adjustment and experience remediation, fed by six data stores including guest profile and consent data, the MagicBand interaction log and live park status.",
                zh: "7 个处理过程，从行前规划到实时行程调整与体验补救；数据来自 6 个数据存储，包括游客档案与授权数据、MagicBand 实时交互日志和园区实时状态。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/ind-iapm-dfd.png",
            source: {
                en: "Individual assignment · my diagram",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Data Flow Diagram: Infrastructure & Attraction Performance Management",
                zh: "数据流图：设施与游乐项目绩效管理"
            },
            caption: {
                en: "Sensor data flows into performance monitoring, infrastructure health checks, predictive maintenance and queue/capacity optimisation; facility status is synchronised back to the guest-experience system so itineraries can react to closures.",
                zh: "传感器数据流入绩效监测、设施健康检查、预测性维护和排队/容量优化；设施状态同步回游客体验系统，使行程能随设施关闭实时调整。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/ind-ods-logical-model.png",
            source: {
                en: "Individual assignment · my diagram",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Logical Data Model: Operational Decision Support",
                zh: "逻辑数据模型：运营决策支持"
            },
            caption: {
                en: "Ten entities with attributes, relationships and cardinality. GuestParkVisit resolves the many-to-many link between guests and parks; CrowdFlow aggregates MagicBand location data into crowd density and wait time.",
                zh: "10 个实体，标明属性、关系与基数。GuestParkVisit 拆解游客与园区的多对多关系；CrowdFlow 将 MagicBand 位置数据聚合为人流密度与等待时间。"
            }
        },
        {
            type: "table",
            source: {
                en: "Individual assignment",
                zh: "个人作业"
            },
            title: {
                en: "Key Business Rules in the Logical Model",
                zh: "逻辑模型中的关键业务规则"
            },
            columns: {
                en: ["Relationship", "Cardinality", "Business rule"],
                zh: ["关系", "基数", "业务规则"]
            },
            rows: [
                [{ en: "Guest – MagicBand", zh: "游客 – MagicBand" }, { en: "1 : many", zh: "1 : 多" }, { en: "A guest can hold several bands over time; each band is bound to one guest at any point in time.", zh: "一位游客可先后持有多个手环；任一时点每个手环只绑定一位游客。" }],
                [{ en: "Guest – Park (via GuestParkVisit)", zh: "游客 – 园区（经 GuestParkVisit）" }, { en: "many : many, resolved", zh: "多 : 多（已拆解）" }, { en: "A guest can visit many parks; each visit record links exactly one guest to one park (3NF).", zh: "一位游客可游览多个园区；每条到访记录只对应一位游客和一个园区（3NF）。" }],
                [{ en: "Park – Attraction", zh: "园区 – 游乐项目" }, { en: "1 : many", zh: "1 : 多" }, { en: "A park contains many attractions; each attraction belongs to exactly one park.", zh: "一个园区包含多个项目；每个项目只属于一个园区。" }],
                [{ en: "MagicBand – CrowdFlow – Park", zh: "MagicBand – 人流 – 园区" }, { en: "1 : many", zh: "1 : 多" }, { en: "Band location events feed time-stamped crowd density and wait time for each park.", zh: "手环位置事件汇总为各园区带时间戳的人流密度与等待时间。" }],
                [{ en: "Attraction – OperationalAlert", zh: "游乐项目 – 运营警报" }, { en: "1 : many (optional)", zh: "1 : 多（可选）" }, { en: "An attraction can trigger many alerts, each with a type, severity and reason.", zh: "一个项目可触发多条警报，每条记录类型、严重程度与原因。" }],
                [{ en: "Attraction / CastMember – MaintenanceLog", zh: "项目 / 员工 – 维护日志" }, { en: "1 : many", zh: "1 : 多" }, { en: "Each maintenance log belongs to one attraction and is handled by one cast member.", zh: "每条维护日志对应一个项目，并由一名员工处理。" }]
            ],
            caption: {
                en: "Rules are to be confirmed with park managers, cast members, maintenance teams and system administrators, and the model verified through integrity, consistency, cross-model and scenario checks.",
                zh: "业务规则需与园区经理、一线员工、维护团队和系统管理员确认；模型通过完整性、一致性、跨模型一致性与场景验证来核实。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/ind-architecture.png",
            source: {
                en: "Individual assignment · my diagram",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "First Architecture: Layered Data Platform",
                zh: "初版架构：分层数据平台"
            },
            caption: {
                en: "Data lake, operational data store, enterprise data warehouse, subject marts and an MDM hub; Kafka + Flink for streams, NiFi for ETL/ELT, Spark for batch and an ML engine, served through a semantic layer to guest, facility and operations applications.",
                zh: "数据湖、操作型数据存储、企业数据仓库、主题数据集市与 MDM 主数据中心；Kafka + Flink 处理流数据，NiFi 负责 ETL/ELT，Spark 负责批处理并配合机器学习引擎，经语义层服务游客、设施与运营应用。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/grp-lakehouse-architecture.png",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Upgraded Lakehouse Architecture with Named Technologies",
                zh: "升级版湖仓一体架构（含具体技术）"
            },
            caption: {
                en: "Five layers and three subject-area lanes: Snowflake warehouse (D1), Delta Lake/Iceberg lake (D2), Cassandra NoSQL store (D5), an HBase operations store and Guest/Asset MDM, with governance and security across every layer.",
                zh: "5 个层次、3 条主题领域通道：Snowflake 数据仓库（D1）、Delta Lake/Iceberg 数据湖（D2）、Cassandra NoSQL 存储（D5）、HBase 运营决策存储以及游客/资产主数据，治理与安全贯穿每一层。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Technology Choices and Why",
                zh: "技术选型及理由"
            },
            columns: {
                en: ["Technology", "Role", "Why it was chosen"],
                zh: ["技术", "作用", "选择理由"]
            },
            rows: [
                ["Kafka, Fivetran", { en: "Streaming and automated ingestion", zh: "流式与自动化数据摄取" }, { en: "Handles high-velocity MagicBand and IoT events; open-source core limits lock-in; managed connectors cut pipeline maintenance.", zh: "承接高频 MagicBand 与 IoT 事件；开源内核降低锁定风险；托管连接器减少管道维护。" }],
                ["Snowflake (D1)", { en: "Data warehouse", zh: "数据仓库" }, { en: "Separate compute and storage with consumption billing, so idle off-peak compute is not paid for.", zh: "计算与存储分离、按用量计费，非高峰期不为闲置算力付费。" }],
                ["Delta Lake + Iceberg (D2)", { en: "Data lake", zh: "数据湖" }, { en: "ACID transactions prevent corruption under concurrent high-frequency sensor writes.", zh: "ACID 事务防止高频并发写入传感器数据时出错。" }],
                ["Cassandra (D5)", { en: "NoSQL store for infrastructure data", zh: "设施数据 NoSQL 存储" }, { en: "Linear horizontal scaling absorbs peak park days without over-provisioning.", zh: "线性水平扩展，可应对园区高峰而无需长期超配。" }],
                ["Databricks / Spark", { en: "Batch processing and ML", zh: "批处理与机器学习" }, { en: "Unifies Spark batch jobs with TensorFlow/PyTorch models on managed, auto-scaling compute.", zh: "在托管、自动扩缩的计算资源上统一 Spark 批处理与 TensorFlow/PyTorch 模型。" }],
                ["Flink, HBase, Presto", { en: "Real-time crowd analytics and ad hoc queries", zh: "实时人流分析与即席查询" }, { en: "Millisecond-latency stream processing for operational decisions, plus SQL access to the operations store.", zh: "为运营决策提供毫秒级流处理，并可用 SQL 查询运营数据。" }],
                ["Great Expectations, Apache Atlas, IAM, Splunk/Datadog", { en: "Quality, metadata, access and audit", zh: "质量、元数据、权限与审计" }, { en: "Cross-cutting controls that make data quality, lineage, access and audit enforceable.", zh: "贯穿全程的控制工具，使数据质量、血缘、访问与审计可以落地执行。" }]
            ],
            caption: {
                en: "Risks weighed against these benefits: specialised talent (hiring and training costs estimated 20–30% higher), legacy integration during peak seasons, licensing and vendor concentration, and NoSQL–warehouse inconsistency under weak MDM. Mitigations: phased rollout, multi-vendor negotiation, a training programme and robust MDM.",
                zh: "与收益对应的风险：需要专业人才（招聘与培训成本估计高 20%—30%）、旺季对接遗留系统的风险、许可费用与供应商集中、MDM 薄弱时 NoSQL 与数据仓库不一致。对策：分阶段上线、多供应商谈判、专项培训与强化 MDM。"
            }
        },
        {
            type: "process",
            title: {
                en: "Six Data-Quality Control Points",
                zh: "六个数据质量控制点"
            },
            steps: {
                en: [
                    "DQ1 Source capture check",
                    "DQ2 Schema & format validation",
                    "DQ3 Telemetry anomaly validation",
                    "DQ4 Cleaning & standardisation",
                    "DQ5 Master data & metadata quality",
                    "DQ6 Analytics & output validation"
                ],
                zh: [
                    "DQ1 源头采集检查",
                    "DQ2 结构与格式校验",
                    "DQ3 遥测异常校验",
                    "DQ4 清洗与标准化",
                    "DQ5 主数据与元数据质量",
                    "DQ6 分析与输出校验"
                ]
            },
            caption: {
                en: "Quality problems start at the source and travel downstream, so checks sit at every hand-off from capture to the KPIs, alerts and recommendations people act on.",
                zh: "质量问题从源头产生并向下游传递，因此从采集到员工实际使用的 KPI、警报与推荐，每个交接环节都设检查。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/grp-dq-control-points.png",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Data-Quality Control Points on the Architecture",
                zh: "架构上的数据质量控制点"
            },
            caption: {
                en: "DQ1–DQ6 marked on the architecture, each with the checks it performs (e.g. device ID and timestamp checks at capture, deduplication and ID matching before storage, KPI and model-input checks before output).",
                zh: "在架构图上标出 DQ1—DQ6 及各自的检查内容（如采集端的设备 ID 与时间戳检查、入库前的去重与 ID 匹配、输出前的 KPI 与模型输入检查）。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Privacy Regulations and Ethical Risks",
                zh: "隐私法规与伦理风险"
            },
            columns: {
                en: ["Data category", "Data at risk", "Regulation", "PAPA issue", "Measures"],
                zh: ["数据类别", "风险数据", "法规", "PAPA 问题", "应对措施"]
            },
            rows: [
                [{ en: "Children's PII", zh: "儿童个人信息" }, { en: "Children's names, preferences, character-interaction data", zh: "儿童姓名、偏好、角色互动数据" }, "COPPA", { en: "Privacy, Access", zh: "隐私、访问" }, { en: "Parental opt-in, parental review and deletion, limit unnecessary analysis of children's data", zh: "家长同意、家长查看与删除、限制不必要的儿童数据分析" }],
                [{ en: "Guest PII", zh: "游客个人信息" }, { en: "Names, MagicBand ID, location, behaviour and preference data", zh: "姓名、MagicBand ID、位置、行为与偏好数据" }, "CCPA / CPRA / GDPR", { en: "Privacy, Access, Property, Accuracy", zh: "隐私、访问、产权、准确性" }, { en: "Data minimisation, transparent privacy controls, review / delete / correct, retention limits", zh: "数据最小化、透明的隐私控制、查看/删除/更正、保留期限" }],
                [{ en: "Payment card data", zh: "支付卡数据" }, { en: "Card-linked MagicBand payments", zh: "绑定信用卡的 MagicBand 支付数据" }, "PCI DSS", { en: "Access, Accuracy", zh: "访问、准确性" }, { en: "Tokenisation, breach-response procedure, data minimisation", zh: "令牌化、数据泄露响应流程、数据最小化" }]
            ],
            caption: {
                en: "PAPA = privacy, accuracy, property and access (Mason). Privacy impact assessments before system changes, pseudonymisation and prompt breach notification complete the measures.",
                zh: "PAPA 指隐私、准确性、产权与访问（Mason 框架）。另配合系统变更前的隐私影响评估、假名化以及及时的泄露通知。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/grp-security-pep.png",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Data-centric Security: Seven Policy Enforcement Points",
                zh: "以数据为中心的安全：7 个策略执行点"
            },
            caption: {
                en: "Following NIST SP 800-207 zero trust, the governance layer makes access decisions (IAM, consent, data classification) and PEP1–PEP7 enforce them from device entry to audit.",
                zh: "参照 NIST SP 800-207 零信任：治理层负责访问决策（IAM、授权状态、数据分级），PEP1—PEP7 从设备接入到审计逐点执行。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/disney-magicband/grp-governance-framework.png",
            source: {
                en: "Group report",
                zh: "小组报告"
            },
            title: {
                en: "Data Governance Framework (DAMA-DMBOK)",
                zh: "数据治理框架（DAMA-DMBOK）"
            },
            caption: {
                en: "Principles flow into governance domains, activities, enabling tools and business outcomes such as trusted data, compliance, operational excellence and better guest experiences.",
                zh: "从原则到治理领域、关键活动、支撑工具，再到可信数据、合规、运营卓越与更好游客体验等业务结果。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "The Problem: Why Disney Needs Data Management at Scale",
                bullets: [
                    "Guest Experience Optimisation: if guest data stays scattered across systems, profiles fragment and itinerary, dining and personalised recommendations lose accuracy.",
                    "Operational Decision Support: inconsistent standards or delayed updates make dashboards and early-warning systems unreliable, leading to misallocated staff, more congestion and longer waits.",
                    "Infrastructure and Attraction Performance: without unified sensor, equipment and maintenance data, fault prediction, preventive maintenance and safety monitoring are hard to support.",
                    "With high volume, velocity and many sources, only a scalable architecture with managed integration, quality, metadata, governance, security and privacy turns raw data into predictive, actionable insight."
                ]
            },
            {
                title: "Individual · Data Flow Diagrams & Data Reuse",
                bullets: [
                    "Guest Experience DFD: seven processes, from pre-arrival itinerary planning and frictionless entry to tap-to-pay, personalised character interaction, real-time itinerary adjustment and experience remediation, across six data stores.",
                    "Infrastructure DFD: five processes covering sensor collection, attraction performance monitoring, infrastructure health checks, predictive maintenance and queue/capacity optimisation, across five data stores.",
                    "Data reuse: the same facility-status and crowd/queue data serve maintenance and capacity planning on one side and itinerary changes and guest notifications on the other, reducing silos and duplicate processing."
                ]
            },
            {
                title: "Individual · Logical Data Model for Operational Decision Support",
                bullets: [
                    "Ten entities: Guest, MagicBand, CrowdFlow, Park, Attraction, OperationalAlert, OperationalMetric, CastMember, MaintenanceLog and GuestParkVisit, with attributes, relationships and cardinality marked.",
                    "GuestParkVisit resolves the guest–park many-to-many relationship (3NF) and supports time-based crowd statistics and cross-park analysis; CrowdFlow aggregates MagicBand location data into congestion level and wait time.",
                    "Assumed timestamped operational data from MagicBands, the mobile app, park systems and sensors.",
                    "Validation plan: confirm rules with park managers, cast members, maintenance teams and system administrators against current processes and dashboards; verify the model through integrity, consistency, cross-model consistency and scenario checks."
                ]
            },
            {
                title: "Individual · First Architecture & Two Use Cases",
                bullets: [
                    "Layered design: data sources → storage (data lake, operational data store, enterprise data warehouse, subject marts, MDM hub) → processing (Kafka + Flink, NiFi, Spark, ML engine) → consumption through a semantic layer, with governance across every layer (Apache Atlas metadata, Great Expectations checks, access control, privacy compliance and immutable audit logs).",
                    "Use case 1, dynamic trip rescheduling: when waits rise or dining areas fill up, the app suggests a new ride order or another restaurant, using MagicBand, app, booking, queue and facility data in near real time.",
                    "Use case 2, predictive crowd-flow management: combine live crowd flow, attraction popularity and historical movement to predict congestion, so managers can re-deploy staff and redirect guests before queues build."
                ]
            },
            {
                title: "Group · Lakehouse Architecture, Cost/Benefit & Risks",
                bullets: [
                    "Guest experience data from seven sources (Disney App, MagicBand, digital footprints, interaction logs, transactions, park operations and external feeds) is streamed through Kafka and Fivetran into Snowflake and Delta Lake, then processed by Spark MLlib and ClickHouse for the guest app and embedded analytics.",
                    "Infrastructure data from IoT sensors, maintenance systems and asset databases flows through Databricks and Airflow/Hive batch pipelines into Cassandra and the lake for TensorFlow/PyTorch predictive maintenance, surfaced in Tableau/Superset.",
                    "Operational data from crowd sensors, operations systems and cast devices is ingested in real time with Kafka/Flink into HBase, with Flink crowd analytics and Presto ad hoc queries feeding custom apps.",
                    "Guest and Asset MDM prevent duplication across domains; risks and mitigations are weighed explicitly (see the technology table)."
                ]
            },
            {
                title: "Group · Data Quality Management",
                bullets: [
                    "People: inconsistent input across departments, unclear data ownership and different definitions of terms like “guest visit”, “queue time” or “ride downtime”.",
                    "Process: integrating MagicBand, thousands of sensors and about 100 linked systems, delayed real-time updates, and weak retention and refresh rules.",
                    "Technology: RFID and sensor misreads, duplicate reads and wrong timestamps in crowded areas, plus format and field mismatches with legacy systems.",
                    "Six control points (DQ1–DQ6) check data from capture to output, improving accuracy, integrity, consistency, timeliness and validity."
                ]
            },
            {
                title: "Group · Data Ethics (my part)",
                bullets: [
                    "Mapped the regulations Disney must meet: COPPA for children under 13, CCPA/CPRA for Californian guests' rights to know, delete, correct and limit use, GDPR for EU guests, and PCI DSS for card-linked MagicBands.",
                    "Analysed breach risks with Mason's PAPA framework: privacy (location, purchases and children's data), accuracy (tampered profiles leading to wrong or unfair treatment), property (loss of control over one's data) and access (unauthorised parties).",
                    "Recommended privacy impact assessments before system changes, data minimisation, pseudonymisation, anonymisation and deletion, parental opt-in with review and deletion rights, retention limits, and a clear breach-response and notification procedure."
                ]
            },
            {
                title: "Group · Data-centric Security (my part)",
                bullets: [
                    "Added a zero-trust overlay to the architecture (NIST SP 800-207): the governance layer acts as the policy decision point using IAM, consent status, data classification and security metadata.",
                    "PEP1 source and device entry (authentication, consent, rate limits); PEP2 ingestion and data in motion (TLS/mTLS, Kafka SASL/SSL); PEP3 payment tokenisation at the PCI boundary; PEP4 storage at rest (encryption, KMS key rotation, RBAC/ABAC, masking, retention).",
                    "PEP5 processing workspaces (analysts and models only see approved, masked or pseudonymised data); PEP6 output and consumption (role-based access, output masking, API controls, minimisation); PEP7 audit and monitoring across PEP1–PEP6.",
                    "Least privilege in practice: managers see aggregated dashboards, maintenance teams see ride telemetry, data scientists work with masked datasets."
                ]
            },
            {
                title: "Group · Data Governance Programme",
                bullets: [
                    "Case for executives: real-time data from many sources needs governance to keep quality, privacy, security and compliance; without it, guests get wrong recommendations, operations lose efficiency and data is duplicated or exposed.",
                    "Chose DAMA-DMBOK for its enterprise view of data as a strategic asset, covering data quality, metadata, security, stewardship, lifecycle and architecture governance.",
                    "Recommendations: formal data stewardship roles, policies for access, retention, privacy and quality, training for security, ethics and compliance roles, and IAM, encryption, auditing and continuous monitoring.",
                    "Effectiveness measured through audits, governance KPIs, compliance, customer satisfaction, security incidents, data accuracy, decision speed and fewer duplicates."
                ]
            },
            {
                title: "Note",
                bullets: [
                    "This is a design project, so there is no code; the deliverables are the diagrams, data model and written justification. Cost and productivity figures in the group report are external benchmarks, not Disney's realised results."
                ]
            }
        ],

        zh: [
            {
                title: "问题：迪士尼为什么需要大规模数据管理",
                bullets: [
                    "游客体验优化：游客数据分散在不同系统中，会导致档案割裂，行程、餐饮与个性化推荐的准确性下降。",
                    "运营决策支持：标准不一或更新滞后会让看板与预警系统失去可靠性，造成人员错配、拥堵加剧与等待时间变长。",
                    "设施与游乐项目绩效：传感器、设备状态与维护记录若缺乏统一管理，就难以支撑故障预测、预防性维护和安全监测。",
                    "在数据量大、速度快、来源多的环境下，只有可扩展的架构加上对整合、质量、元数据、治理、安全与隐私的系统管理，才能把原始数据转化为可预测、可执行的洞察。"
                ]
            },
            {
                title: "个人 · 数据流图与数据复用",
                bullets: [
                    "游客体验数据流图：7 个处理过程，从行前行程规划、无感入园，到触碰支付、个性化角色互动、实时行程调整和体验补救，涉及 6 个数据存储。",
                    "设施绩效数据流图：5 个处理过程，涵盖传感器采集、项目绩效监测、设施健康检查、预测性维护与排队/容量优化，涉及 5 个数据存储。",
                    "数据复用：同一份设施状态与人流/排队数据，一边支撑维护与容量规划，一边支撑行程调整与游客通知，减少数据孤岛与重复处理。"
                ]
            },
            {
                title: "个人 · 运营决策支持逻辑数据模型",
                bullets: [
                    "10 个实体：Guest、MagicBand、CrowdFlow、Park、Attraction、OperationalAlert、OperationalMetric、CastMember、MaintenanceLog、GuestParkVisit，标明属性、关系与基数。",
                    "GuestParkVisit 拆解游客与园区的多对多关系（3NF），支持按时间的人流统计与跨园区分析；CrowdFlow 将 MagicBand 位置数据聚合为拥堵等级与等待时间。",
                    "假设运营数据均带时间戳，来自 MagicBand、手机 App、园区系统与传感器。",
                    "验证方法：结合现有流程与看板，与园区经理、一线员工、维护团队和系统管理员确认业务规则；通过完整性、一致性、跨模型一致性和场景验证核实模型。"
                ]
            },
            {
                title: "个人 · 初版架构与两个用例",
                bullets: [
                    "分层设计：数据源 → 存储（数据湖、操作型数据存储、企业数据仓库、主题数据集市、MDM 中心）→ 处理（Kafka + Flink、NiFi、Spark、机器学习引擎）→ 经语义层服务各类应用；治理贯穿各层（Apache Atlas 元数据、Great Expectations 质量校验、访问控制、隐私合规与不可篡改审计日志）。",
                    "用例一，动态行程调整：等待时间上升或餐厅拥挤时，App 基于 MagicBand、App、预订、排队与设施数据近实时推荐新的项目顺序或其他餐厅。",
                    "用例二，人流预测管理：结合实时人流、项目热度与历史动线预测拥堵，让管理者提前调配人员、引导分流，而不是等排队形成后再处理。"
                ]
            },
            {
                title: "小组 · 湖仓一体架构、成本收益与风险",
                bullets: [
                    "游客体验数据来自 7 类来源（Disney App、MagicBand、数字足迹、互动日志、交易系统、园区运营与外部数据），经 Kafka 与 Fivetran 进入 Snowflake 与 Delta Lake，由 Spark MLlib 与 ClickHouse 处理后服务游客 App 与嵌入式分析。",
                    "设施数据来自 IoT 传感器、维护系统与资产数据库，经 Databricks 与 Airflow/Hive 批处理进入 Cassandra 与数据湖，用于 TensorFlow/PyTorch 预测性维护，并在 Tableau/Superset 中展示。",
                    "运营数据来自人流传感器、运营系统与员工设备，经 Kafka/Flink 实时进入 HBase，由 Flink 人流分析与 Presto 即席查询服务定制应用。",
                    "游客与资产主数据（MDM）避免跨领域重复；风险与对策逐项权衡（见技术选型表）。"
                ]
            },
            {
                title: "小组 · 数据质量管理",
                bullets: [
                    "人员：各部门录入方式不一、数据责任不清、对“到访”“排队时间”“设施停机”等术语定义不同。",
                    "流程：需整合 MagicBand、数千个传感器和约 100 个关联系统；实时更新滞后；数据保留与更新规则薄弱。",
                    "技术：人群密集区 RFID 与传感器漏读、重复读取和时间戳错误，以及与遗留系统的格式和字段不兼容。",
                    "6 个控制点（DQ1—DQ6）从采集到输出逐级把关，提升数据的准确性、完整性、一致性、及时性与有效性。"
                ]
            },
            {
                title: "小组 · 数据伦理（本人负责）",
                bullets: [
                    "梳理迪士尼需遵守的法规：针对 13 岁以下儿童的 COPPA，保障加州游客知情、删除、更正与限制使用权利的 CCPA/CPRA，适用于欧盟游客的 GDPR，以及适用于绑定信用卡 MagicBand 的 PCI DSS。",
                    "用 Mason 的 PAPA 框架分析泄露风险：隐私（位置、消费与儿童数据）、准确性（档案被篡改导致错误或不公平对待）、产权（失去对自身数据的控制）与访问（未授权方获取）。",
                    "建议：系统变更前做隐私影响评估；数据最小化、假名化、匿名化与删除机制；家长同意并可查看和删除；限制保留期；建立清晰的泄露响应与通知流程。"
                ]
            },
            {
                title: "小组 · 以数据为中心的安全（本人负责）",
                bullets: [
                    "在架构上叠加零信任设计（NIST SP 800-207）：治理层作为策略决策点，依据 IAM、授权状态、数据分级与安全元数据做访问决策。",
                    "PEP1 数据源与设备接入（认证、授权、限流）；PEP2 摄取与传输中数据（TLS/mTLS、Kafka SASL/SSL）；PEP3 PCI 边界的支付令牌化；PEP4 存储静态数据（加密、KMS 密钥轮换、RBAC/ABAC、脱敏、保留）。",
                    "PEP5 处理工作区（分析师与模型只能使用经批准、脱敏或假名化的数据）；PEP6 输出与使用（基于角色的访问、输出脱敏、API 控制、最小化）；PEP7 汇总 PEP1—PEP6 日志做审计与监控。",
                    "最小权限落地：管理者看汇总看板，维护团队看设施遥测数据，数据科学家使用脱敏数据。"
                ]
            },
            {
                title: "小组 · 数据治理方案",
                bullets: [
                    "向高管论证：多源实时数据需要治理来保障质量、隐私、安全与合规；缺少治理会导致错误推荐、运营效率下降以及数据重复或泄露。",
                    "选择 DAMA-DMBOK：它把数据视为战略资产，覆盖数据质量、元数据、安全、数据管家、生命周期与架构治理。",
                    "落地建议：设立正式的数据管家角色；制定访问、保留、隐私与质量政策；为安全、伦理与合规岗位提供培训；部署 IAM、加密、审计与持续监控。",
                    "效果评估：审计、治理 KPI、合规情况、客户满意度、安全事件、数据准确率、决策速度与重复数据的减少。"
                ]
            },
            {
                title: "说明",
                bullets: [
                    "这是一个设计类项目，没有代码；成果是数据流图、数据模型、架构图与书面论证。小组报告中的成本与效率数字来自外部基准，并非迪士尼实际实现的结果。"
                ]
            }
        ]
    }
},
{
    // FINC3600 Project 1 (internal marker; not shown on the site)
    id: "finc3600-tpg",
    category: "finance-investment",

    title: {
        en: "TPG Telecom Corporate Finance Advisory — Liquidity Review and a Western Australia 5G Expansion",
        zh: "TPG Telecom 公司金融顾问：流动性评估与西澳 5G 扩张方案"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Team of 5 · my part: individual leverage and liquidity brief; Western Australia revenue model; ESG, competition, risk and timeline in the board presentation",
        zh: "5 人小组 · 本人负责：个人杠杆与流动性简报；西澳扩张收入模型；董事会汇报中的 ESG、竞争格局、风险与时间线"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2025",
        zh: "2025 年第一学期"
    },

    sortDate: "2025-04",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Acting as an independent corporate finance advisory team, we were asked by the CFO of TPG Telecom (ASX: TPG), Australia’s third mobile operator, for advice ahead of the company’s annual strategy meeting, using only public information up to 1 March 2025.",
                "Two events shaped the case. TPG had agreed to sell its fibre and fixed infrastructure assets to Vocus for about A$5.25 billion, and it had a regional network-sharing agreement with Optus that gives TPG customers access to Optus towers outside the cities.",
                "Each team member wrote one individual CFO brief (I wrote leverage and liquidity), the team wrote a joint brief on the use of the sale proceeds, and the team then presented a single strategic recommendation to the board, with a 10-minute presentation and Q&A."
            ],
            zh: [
                "我们以独立公司金融顾问团队的身份，在 TPG Telecom（ASX: TPG，澳大利亚第三大移动运营商）年度战略会前，为其 CFO 提供建议，只能使用 2025 年 3 月 1 日前的公开信息。",
                "案例有两个背景：TPG 已同意以约 52.5 亿澳元将光纤和固网基础设施出售给 Vocus；同时与 Optus 签有区域网络共享协议，TPG 用户可在城市以外使用 Optus 的基站。",
                "每位成员各写一份个人 CFO 简报（我负责杠杆与流动性），团队合写一份关于出售所得用途的简报，最后向董事会提出一项战略建议，进行 10 分钟汇报和答辩。"
            ]
        },
        pointsTitle: {
            en: "What the advice had to cover",
            zh: "建议需要覆盖的内容"
        },
        points: {
            en: [
                "Leverage and liquidity: net debt, term structure, bank vs other debt, drawn and undrawn facilities, credit ratios, compared with 3–5 peers.",
                "How a large cash inflow should be used, and how any new debt should be raised.",
                "A strategic (5-year-plus) recommendation for the board, with financial and non-financial implications, risks and a timeline."
            ],
            zh: [
                "杠杆与流动性：净债务、期限结构、银行债务与其他债务、已用与未用额度、信用指标，并与 3—5 家同业比较。",
                "大额现金流入应如何使用，新增债务应如何筹集。",
                "向董事会提出的 5 年以上战略建议，包括财务与非财务影响、风险和时间线。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "In a team of 5 advising TPG Telecom’s CFO and board, wrote the leverage and liquidity brief benchmarking TPG against Telstra, Singtel and Spark: a cash ratio of 0.03 against an industry level of 0.11 and a quick ratio of 0.67, with A$685m of undrawn facilities able to cover the A$228m of bank debt due within a year.",
            "Built the revenue model behind the board recommendation to extend TPG’s Optus network deal into regional Western Australia: a 30% share of about 134,000 miners and 301,000 regional residents yields about A$88m a year, valued at A$964m against A$507m of payments to Optus at a 6% WACC, with 25% as the minimum viable share."
        ],
        zh: [
            "在 5 人小组中为 TPG Telecom 的 CFO 和董事会提供建议，本人撰写杠杆与流动性简报，将 TPG 与 Telstra、Singtel、Spark 对标：现金比率 0.03（行业 0.11），速动比率 0.67，6.85 亿澳元未使用额度足以覆盖一年内到期的 2.28 亿澳元银行债务。",
            "搭建董事会建议背后的收入模型，即借助与 Optus 的网络协议拓展西澳偏远地区：按约 13.4 万矿工和 30.1 万偏远地区居民的 30% 份额计算，年收入约 8,800 万澳元；按 6% WACC 计算价值 9.64 亿澳元，对应支付给 Optus 的 5.07 亿澳元，最低需要 25% 的市场份额。"
        ]
    },

    tags: [
        "Corporate Finance",
        "Liquidity Analysis",
        "Credit Metrics",
        "Revenue Modelling",
        "NPV",
        "Sensitivity Analysis",
        "Porter’s Five Forces",
        "ESG"
    ],

    metrics: [
        {
            value: "A$5.25bn",
            label: {
                en: "Proceeds from the infrastructure sale to Vocus that framed the advice",
                zh: "出售基础设施给 Vocus 的所得，是建议的出发点"
            }
        },
        {
            value: "0.03 vs 0.11",
            label: {
                en: "TPG’s cash ratio against the industry level (my brief)",
                zh: "TPG 现金比率与行业水平对比（本人简报）"
            }
        },
        {
            value: "A$685m",
            label: {
                en: "Undrawn facilities, against A$228m of bank debt due within 12 months",
                zh: "未使用借款额度，12 个月内到期银行债务为 2.28 亿澳元"
            }
        },
        {
            value: "A$87.7m",
            label: {
                en: "Modelled annual revenue from regional WA at a 30% share",
                zh: "按 30% 份额测算的西澳偏远地区年收入"
            }
        },
        {
            value: "A$964m vs A$507m",
            label: {
                en: "Value of WA operating profit vs payments to Optus (6% WACC)",
                zh: "西澳经营利润价值与支付给 Optus 的现值（6% WACC）"
            }
        },
        {
            value: "25%",
            label: {
                en: "Minimum market share for the expansion to work",
                zh: "扩张可行所需的最低市场份额"
            }
        }
    ],

    visuals: [
        {
            type: "table",
            source: {
                en: "My part · liquidity brief",
                zh: "本人负责 · 流动性简报"
            },
            title: {
                en: "Leverage and Liquidity Against Peers (FY2024)",
                zh: "杠杆与流动性同业对比（2024 财年）"
            },
            columns: {
                en: ["Company", "Debt (A$m)", "D / E", "Int. cover", "Current", "Quick", "Cash", "Rating"],
                zh: ["公司", "债务（A$m）", "债务/权益", "利息覆盖", "流动比率", "速动比率", "现金比率", "评级"]
            },
            rows: [
                ["TPG", "6,262", "0.56", "1.79", "0.72", "0.67", "0.03", "BBB+"],
                ["Telstra", "15,763", "0.91", "5.52", "0.53", "0.48", "0.09", "A-"],
                ["Singtel", "7,782", "0.31", "2.69", "1.35", "1.35", "0.60", "A+"],
                [{ en: "Spark (NZ)", zh: "Spark（新西兰）" }, "1,619", "1.02", "3.71", "1.01", "0.93", "0.06", "A-"],
                [{ en: "Industry level", zh: "行业水平" }, "–", "0.68", "0.80", "0.81", "0.71", "0.11", "–"]
            ],
            highlightRow: 0,
            caption: {
                en: "TPG’s leverage is close to the industry and its interest cover has recovered, but its short-term liquidity is the weakest in the group: cash covers only 3% of current liabilities, against 11% for the industry. It is also the only company rated below the A band.",
                zh: "TPG 的杠杆接近行业水平，利息覆盖也已回升，但短期流动性是同业中最弱的：现金只能覆盖 3% 的流动负债，行业为 11%。它也是唯一评级低于 A 档的公司。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · liquidity brief",
                zh: "本人负责 · 流动性简报"
            },
            title: {
                en: "TPG’s Five-Year Leverage Trend",
                zh: "TPG 近五年杠杆变化"
            },
            columns: {
                en: ["Year", "Total debt (A$m)", "Debt / equity", "Debt / assets", "Interest cover"],
                zh: ["年份", "总债务（百万澳元）", "债务 / 权益", "债务 / 资产", "利息覆盖"]
            },
            rows: [
                ["2020", "5,473", "0.46", "0.29", "0.70"],
                ["2021", "5,710", "0.49", "0.30", "2.20"],
                ["2022", "5,655", "0.48", "0.29", "4.10"],
                ["2023", "6,310", "0.54", "0.32", "1.20"],
                ["2024", "6,262", "0.56", "0.31", "1.79"]
            ],
            highlightRow: 4,
            caption: {
                en: "Debt rose slowly and levelled off in 2023–24, while gearing crept towards the industry average. Steady refinancing over five years suggested TPG could keep its existing debt structure rather than restructure it.",
                zh: "债务缓慢上升并在 2023—24 年趋于稳定，杠杆逐步接近行业平均。五年来持续顺利再融资，说明 TPG 可以维持现有债务结构，而无需大幅调整。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · liquidity brief",
                zh: "本人负责 · 流动性简报"
            },
            title: {
                en: "Debt Maturity and Sources",
                zh: "债务期限与来源"
            },
            columns: {
                en: ["Item", "A$m", "Note"],
                zh: ["项目", "百万澳元", "说明"]
            },
            rows: [
                [{ en: "Bank borrowings due < 6 months", zh: "6 个月内到期银行借款" }, "59", { en: "Short term: about 5% of contractual repayments", zh: "短期：约占合同还款额 5%" }],
                [{ en: "Due 6–12 months", zh: "6—12 个月到期" }, "169", ""],
                [{ en: "Due 1–2 years", zh: "1—2 年到期" }, "2,341", { en: "Largest wall of maturities", zh: "最集中的到期段" }],
                [{ en: "Due 2–5 years", zh: "2—5 年到期" }, "1,630", ""],
                [{ en: "Due > 5 years", zh: "5 年以上到期" }, "517", ""],
                [{ en: "Bank borrowings (balance)", zh: "银行借款（余额）" }, "4,099", { en: "65% of total debt", zh: "占总债务 65%" }],
                [{ en: "Lease liabilities", zh: "租赁负债" }, "2,205", { en: "35% of total debt", zh: "占总债务 35%" }],
                [{ en: "Undrawn borrowing facilities", zh: "未使用借款额度" }, "685", { en: "Covers all bank debt due within a year", zh: "足以覆盖一年内到期的全部银行债务" }]
            ],
            caption: {
                en: "Maturities are contractual cash flows including interest (A$4,716m in total). TPG relies entirely on bank loans and leases, with no bonds outstanding, so a credit rating that opens the bond market became part of the team’s later recommendation.",
                zh: "到期金额为含利息的合同现金流（合计 47.16 亿澳元）。TPG 完全依赖银行贷款和租赁，没有发行债券，因此争取信用评级以打开债券市场成为团队后续建议的一部分。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team brief",
                zh: "团队简报"
            },
            title: {
                en: "Team Brief: Credit Metrics Behind the Use of Sale Proceeds",
                zh: "团队简报：出售所得用途背后的信用指标"
            },
            columns: {
                en: ["Company", "Debt / EBITDA", "EBITDA / net interest", "Trailing P/E", "Forward P/E"],
                zh: ["公司", "债务 / EBITDA", "EBITDA / 净利息", "历史市盈率", "预期市盈率"]
            },
            rows: [
                ["TPG", "3.23", "5.24", "16.93", "28.39"],
                ["Telstra", "2.34", "13.83", "23.37", "20.00"],
                ["Singtel", "3.10", "11.34", "22.51", "19.28"],
                ["Spark", "2.54", "9.31", "13.95", "14.03"]
            ],
            highlightRow: 0,
            caption: {
                en: "Moody’s associates an A rating with debt/EBITDA of 1–1.75×, so at 3.23× TPG would need to repay at least half its debt; 68% of financial liabilities fall due within 5 years. The team recommended putting 80% of the proceeds toward that debt and paying the rest as a special dividend, and rejected a buyback because TPG’s forward P/E of 28.4 was well above peers.",
                zh: "穆迪认为 A 级对应债务/EBITDA 1—1.75 倍，TPG 为 3.23 倍，至少要偿还一半债务；68% 的金融负债在 5 年内到期。团队建议将 80% 的出售所得用于偿还这部分债务，其余作为特别股息；由于 TPG 预期市盈率 28.4 倍远高于同业，否决了股票回购。"
            }
        },
        {
            type: "process",
            source: {
                en: "Team · board recommendation",
                zh: "团队 · 董事会建议"
            },
            title: {
                en: "Board Recommendation: Deleverage, Then Expand Through Optus",
                zh: "董事会建议：先去杠杆，再借助 Optus 扩张"
            },
            steps: {
                en: [
                    "Receive A$5.25bn from Vocus by end-2025",
                    "Repay about 60% of debt; lift cash reserves",
                    "Apply for a credit rating; target A- by 2026",
                    "Refinance into lower-cost debt",
                    "Pay Optus a 10% premium to prioritise WA towers, 2025–29"
                ],
                zh: [
                    "2025 年底前收到 Vocus 的 52.5 亿澳元",
                    "偿还约 60% 的债务，提高现金储备",
                    "申请信用评级，目标 2026 年达到 A-",
                    "再融资为成本更低的债务",
                    "2025—29 年向 Optus 支付 10% 溢价，优先建设西澳基站"
                ]
            },
            caption: {
                en: "A rating is not essential to the plan, but it would let TPG issue bonds instead of relying only on bank loans and is expected to cut interest costs by at least 1 percentage point (A$1m per A$100m borrowed).",
                zh: "评级并非方案成败的必要条件，但能让 TPG 发行债券而不只依赖银行贷款，预计利息成本至少下降 1 个百分点（每借 1 亿澳元节省 100 万）。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · WA revenue model",
                zh: "本人负责 · 西澳收入模型"
            },
            title: {
                en: "Western Australia Revenue Model at a 30% Market Share",
                zh: "西澳收入模型（30% 市场份额）"
            },
            columns: {
                en: ["Customer group", "Customers", "Price (A$/month)", "Revenue (A$m/month)"],
                zh: ["客户群", "客户数", "人均价格（澳元/月）", "收入（百万澳元/月）"]
            },
            rows: [
                [{ en: "Miners, single", zh: "矿工（单身）" }, "12,060", "70", "0.844"],
                [{ en: "Miners, with partner", zh: "矿工（有伴侣）" }, "28,140", "55", "1.548"],
                [{ en: "Residents, 1-person households", zh: "居民，1 人家庭" }, "24,740", "70", "1.732"],
                [{ en: "2-person households", zh: "2 人家庭" }, "32,596", "55", "1.793"],
                [{ en: "3-person households", zh: "3 人家庭" }, "12,370", "49", "0.606"],
                [{ en: "4-person households", zh: "4 人家庭" }, "12,099", "46", "0.557"],
                [{ en: "5-person households", zh: "5 人家庭" }, "5,598", "41", "0.223"],
                [{ en: "Total (× 12 = A$87.7m a year)", zh: "合计（× 12 = 每年 8,770 万澳元）" }, "127,603", "–", "7.31"]
            ],
            highlightRow: 7,
            caption: {
                en: "Inputs: about 134,000 miners, 70% with a partner; a regional WA population of 300,977 split by household size (27.4% one person, 36.1% two, 13.7% three, 13.4% four, 6.2% five); and per-person prices from TPG’s SIM-only and SIM-plus-home-internet plans, assuming a 50/50 split between the two. Larger households pay less per person because plans are shared.",
                zh: "输入：约 13.4 万名矿工，其中 70% 有伴侣；西澳偏远地区人口 300,977 人，按家庭规模拆分（1 人 27.4%、2 人 36.1%、3 人 13.7%、4 人 13.4%、5 人 6.2%）；人均价格来自 TPG 纯 SIM 套餐与 SIM + 家庭宽带套餐，假设两者各占一半。家庭人数越多，共享套餐后人均价格越低。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · WA revenue model",
                zh: "本人负责 · 西澳收入模型"
            },
            title: {
                en: "Operating Profit vs the Cost of the Optus Deal",
                zh: "经营利润与 Optus 合作成本对比"
            },
            columns: {
                en: ["Item", "A$m", "Basis"],
                zh: ["项目", "百万澳元", "依据"]
            },
            rows: [
                [{ en: "Annual revenue (from 2027)", zh: "年收入（2027 年起）" }, "89", { en: "Revenue model above, rounded", zh: "上表收入模型，取整" }],
                [{ en: "Operating expenses", zh: "运营费用" }, "26.4", { en: "TPG’s 70% expense ratio halved, as towers and staff already exist", zh: "TPG 70% 费用率减半，因基站和人员已存在" }],
                [{ en: "Employee expenses", zh: "人工费用" }, "4.4", ""],
                [{ en: "Annual operating profit", zh: "年经营利润" }, "57.85", ""],
                [{ en: "Value of operating profit at 6% WACC", zh: "按 6% WACC 计算的经营利润价值" }, "964.17", { en: "Operating profit ÷ 6%", zh: "经营利润 ÷ 6%" }],
                [{ en: "Annual payment to Optus for WA, incl. 10% premium", zh: "每年西澳部分支付给 Optus（含 10% 溢价）" }, "63.8", { en: "A$1,590m deal (~A$145m a year) × 40% cost share + 10%", zh: "15.9 亿澳元协议（约每年 1.45 亿）× 40% 成本占比 + 10%" }],
                [{ en: "Present value of Optus payments", zh: "Optus 付款现值" }, "507.21", { en: "Discounted at 6%", zh: "按 6% 折现" }]
            ],
            highlightRow: 4,
            caption: {
                en: "Revenue starts in 2027 after two years of build, while payments to Optus start in 2025. Even so, the value of the expected profit is almost twice the present value of the payments.",
                zh: "收入在两年建设期后的 2027 年开始，而支付给 Optus 的款项从 2025 年开始。即便如此，预期利润的价值也接近付款现值的两倍。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · WA revenue model",
                zh: "本人负责 · 西澳收入模型"
            },
            title: {
                en: "Sensitivity of Annual Revenue",
                zh: "年收入敏感性分析"
            },
            columns: {
                en: ["Driver", "Assumption", "Revenue (A$m/year)", "Change from base"],
                zh: ["驱动因素", "假设", "收入（百万澳元/年）", "相对基准变化"]
            },
            rows: [
                [{ en: "Market share", zh: "市场份额" }, "20%", "58.47", "−33.3%"],
                [{ en: "Market share", zh: "市场份额" }, "25%", "73.09", "−16.7%"],
                [{ en: "Market share", zh: "市场份额" }, { en: "30% (base)", zh: "30%（基准）" }, "87.70", "0%"],
                [{ en: "Market share", zh: "市场份额" }, "35%", "102.32", "+16.7%"],
                [{ en: "SIM only / SIM + home internet", zh: "纯 SIM / SIM + 家庭宽带" }, { en: "50 / 50 (base)", zh: "50 / 50（基准）" }, "88.86", "0%"],
                [{ en: "SIM only / SIM + home internet", zh: "纯 SIM / SIM + 家庭宽带" }, "60 / 40", "83.35", "−6.2%"],
                [{ en: "SIM only / SIM + home internet", zh: "纯 SIM / SIM + 家庭宽带" }, "70 / 30", "77.82", "−12.4%"],
                [{ en: "SIM only / SIM + home internet", zh: "纯 SIM / SIM + 家庭宽带" }, "80 / 20", "72.30", "−18.6%"]
            ],
            caption: {
                en: "Revenue moves one-for-one with market share, so share is the key risk: the team set 25% as the minimum for the project to pay off. A shift towards cheaper SIM-only plans cuts revenue by up to 19%.",
                zh: "收入与市场份额同比例变动，因此份额是关键风险：团队把 25% 定为项目回本的最低份额。若客户更多选择便宜的纯 SIM 套餐，收入最多下降 19%。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · competition",
                zh: "本人负责 · 竞争分析"
            },
            title: {
                en: "Porter’s Five Forces in Regional Western Australia",
                zh: "西澳偏远地区的波特五力分析"
            },
            columns: {
                en: ["Force", "Level", "Why"],
                zh: ["力量", "强度", "原因"]
            },
            rows: [
                [{ en: "Competitive rivalry", zh: "行业竞争" }, { en: "High", zh: "高" }, { en: "Telstra has dominated WA for years; Optus towers let TPG enter, so competition will intensify", zh: "Telstra 多年主导西澳；Optus 基站让 TPG 得以进入，竞争将加剧" }],
                [{ en: "Threat of substitutes", zh: "替代品威胁" }, { en: "High", zh: "高" }, { en: "Satellite phones exist but are costly and limited; mobile plans remain the best option", zh: "卫星电话昂贵且功能有限；移动套餐仍是最佳选择" }],
                [{ en: "Buyer power", zh: "买方议价能力" }, { en: "High", zh: "高" }, { en: "Telstra users had no alternative; cheaper TPG plans give buyers choice", zh: "Telstra 用户此前别无选择；TPG 更便宜的套餐让买方有了选择" }],
                [{ en: "Supplier power", zh: "供应商议价能力" }, { en: "Medium", zh: "中" }, { en: "TPG relies on the Optus network during rollout", zh: "建设期 TPG 依赖 Optus 网络" }],
                [{ en: "Threat of new entrants", zh: "新进入者威胁" }, { en: "Low", zh: "低" }, { en: "High costs, strict approvals and hard-to-reach remote areas", zh: "成本高、审批严、偏远地区难以覆盖" }]
            ]
        },
        {
            type: "table",
            source: {
                en: "My part · risk",
                zh: "本人负责 · 风险"
            },
            title: {
                en: "Key Risks and Responses",
                zh: "主要风险与应对"
            },
            columns: {
                en: ["Risk", "What could happen", "Response"],
                zh: ["风险", "可能情况", "应对"]
            },
            rows: [
                [{ en: "Vocus deal", zh: "Vocus 交易" }, { en: "Blocked by regulatory checks", zh: "被监管审查阻止" }, { en: "Find an alternative buyer for the infrastructure", zh: "为基础设施寻找其他买家" }],
                [{ en: "Credit rating", zh: "信用评级" }, { en: "Not issued, or lower than hoped", zh: "未获评级或低于预期" }, { en: "Lose the bond option, but the plan still works on bank debt", zh: "失去发债选项，但方案仍可依靠银行贷款推进" }],
                [{ en: "Optus contract", zh: "Optus 协议" }, { en: "Optus asks for more money to prioritise WA", zh: "Optus 要求更多资金才优先建设西澳" }, { en: "May require further borrowing", zh: "可能需要额外借款" }],
                [{ en: "WA expansion", zh: "西澳扩张" }, { en: "Market share falls short", zh: "市场份额不达预期" }, { en: "Sensitivity shows at least 25% is needed", zh: "敏感性分析显示至少需要 25%" }]
            ]
        },
        {
            type: "process",
            source: {
                en: "My part · timeline",
                zh: "本人负责 · 时间线"
            },
            title: {
                en: "Implementation Timeline",
                zh: "实施时间线"
            },
            steps: {
                en: [
                    "2025: repay debt due within 5 years; apply for a rating",
                    "2026: secure debt or bonds for the Optus premium; agree WA priority",
                    "2027: market low-cost bundles to miners and value-conscious customers; monitor build",
                    "2028: complete WA construction; keep marketing",
                    "2029: renew contracts; expand into other states’ regions"
                ],
                zh: [
                    "2025：偿还 5 年内到期债务；申请评级",
                    "2026：为 Optus 溢价筹措贷款或债券；商定西澳优先建设",
                    "2027：向矿工和价格敏感客户推广低价组合套餐；跟进建设",
                    "2028：完成西澳建设；持续营销",
                    "2029：续签合同；拓展其他州的偏远地区"
                ]
            },
            caption: {
                en: "Deleveraging and the rating come first, so the WA build is funded on better terms; marketing starts while construction is still under way.",
                zh: "先去杠杆、争取评级，让西澳建设以更好的条件融资；建设期间就开始营销。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · financial implications",
                zh: "团队 · 财务影响"
            },
            title: {
                en: "Financial Statement Implications",
                zh: "财务报表影响"
            },
            columns: {
                en: ["Metric", "Current", "2025", "2027", "2028", "Telstra", "Optus (Singtel)"],
                zh: ["指标", "当前", "2025", "2027", "2028", "Telstra", "Optus（Singtel）"]
            },
            rows: [
                [{ en: "Debt (A$m)", zh: "债务（百万澳元）" }, "6,262", "2,525", "3,000", "3,000", "–", "–"],
                [{ en: "Financial expense (A$m)", zh: "财务费用（百万澳元）" }, "375", "151.5", "150", "150", "–", "–"],
                [{ en: "Interest coverage (EBIT basis)", zh: "利息覆盖（EBIT 口径）" }, "0.61", "1.52", "2.67", "2.67", "5.52", "2.69"],
                [{ en: "Cash ratio", zh: "现金比率" }, "0.026", "0.125", "0.12", "0.12", "0.09", "0.60"],
                [{ en: "Gearing", zh: "杠杆" }, "0.56", "0.185", "0.27", "0.27", "0.48", "0.50"],
                [{ en: "WACC", zh: "WACC" }, "5.8%", "6.40%", "6.05%", "6.10%", "5%", "8.40%"]
            ],
            caption: {
                en: "Repaying A$3,737m (about 60%) of debt and adding A$150m of cash would cut financial expense by about A$225m a year and lift interest coverage close to Optus’s level; new borrowing for the Optus premium raises debt back to A$3bn from 2027.",
                zh: "偿还 37.37 亿澳元（约 60%）债务并增加 1.5 亿澳元现金，每年可减少约 2.25 亿澳元财务费用，利息覆盖接近 Optus 水平；2027 年起为支付 Optus 溢价新增借款，债务回升至 30 亿澳元。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "The Engagement · Team",
                bullets: [
                    "Advisory brief dated 1 March 2025, public information only; the client was TPG’s CFO, and the final audience was the board.",
                    "Deliverables: five individual two-page CFO briefs (capital structure, leverage and liquidity, ESG, payout policy, WACC), one team brief on the scope of operations, and a board presentation of one strategic recommendation with a 10-minute Q&A.",
                    "Comparables used across the work: Telstra (ASX: TLS), Singtel (SGX: Z74, owner of Optus) and Spark New Zealand."
                ]
            },
            {
                title: "Leverage and Liquidity Brief: Findings · My part",
                bullets: [
                    "Position: A$42m of cash against A$6,262m of debt, of which A$4,099m (65%) is bank borrowing and A$2,205m (35%) lease liabilities; about 5% of repayments fall due within a year and 95% later.",
                    "Credit quality: rated BBB+ by S&P, below Telstra (A-), Spark (A-) and Singtel (A+); interest cover improved from 1.2 in 2023 to 1.79 in 2024.",
                    "Leverage: debt/equity rose steadily from 0.46 to 0.56 over five years, approaching the 0.68 industry level, while debt/assets stayed around 0.3, a stable capital structure.",
                    "Liquidity: current ratio 0.72, quick ratio 0.67 and cash ratio 0.03, all below the industry levels of 0.81, 0.71 and 0.11, so short-term liquidity is TPG’s weak point.",
                    "Capacity: A$685m of undrawn facilities can repay the A$228m of bank debt due within 12 months without changing the debt structure; the ongoing 5G investment limits capacity for acquisitions."
                ]
            },
            {
                title: "Leverage and Liquidity Brief: Recommendations · My part",
                bullets: [
                    "Keep the existing debt structure and keep refinancing as it has for five years: avoiding excessive debt limits distress costs, while cutting debt too far would give up the interest tax shield.",
                    "Use pecking-order logic for new funding: internal cash first, then debt, before equity.",
                    "Put surplus cash into marketable securities to lift the cash ratio towards the industry level, improving financial flexibility and, over time, supporting a rating closer to peers."
                ]
            },
            {
                title: "Team Brief: Use of the Vocus Proceeds · Team",
                bullets: [
                    "Debt/EBITDA of 3.23× against Moody’s 1–1.75× band for an A rating meant TPG would need to repay at least half its debt to match peers.",
                    "Recommended 80% of the A$5.25bn to retire half of the debt due within 5 years and the remainder as a one-off special dividend, which returns capital without committing to a permanent payout.",
                    "Rejected a buyback: TPG traded on a forward P/E of 28.4 against 14–20 for peers, so shares were not cheap."
                ]
            },
            {
                title: "Board Recommendation · Team",
                bullets: [
                    "Pay Optus a 10% premium on the agreed value from 2025 to 2029 to prioritise upgrading and building towers in Western Australia, funded through debt.",
                    "Use the Vocus proceeds to repay about 60% of debt (A$3,737m), lift cash reserves and seek an A- rating by mid-2026 to open the bond market and cut borrowing costs by at least 1 percentage point.",
                    "Rationale: regional WA, with dense mining activity, is largely outside TPG’s coverage and served almost only by Telstra."
                ]
            },
            {
                title: "Western Australia Revenue Model · My part",
                bullets: [
                    "Built demand from two groups: about 134,000 miners (70% with a partner, per mining workforce research) and 300,977 regional residents split by household size.",
                    "Priced each group from TPG’s published plans, assuming half of switchers take SIM-only and half take SIM plus home internet, with shared plans lowering the per-person price for larger households.",
                    "At a 30% share, revenue is A$7.31m a month, or A$87.7m a year; halving TPG’s 70% expense ratio (towers and staff already exist) gives A$57.85m of annual operating profit.",
                    "Valued that profit at A$964m at the 6% WACC against A$507m in present value of payments to Optus, then tested market share (20–35%) and plan mix (50/50 to 80/20): revenue ranges from A$58m to A$102m, and at least a 25% share is needed."
                ]
            },
            {
                title: "ESG, Competition, Risk and Timeline · My part",
                bullets: [
                    "ESG: affordable 5G in regional WA strengthens TPG’s social performance and its Inclusion & Belonging and Digital Economy goals; 34.2% of WA residents were born overseas, 3.3% identify as Indigenous, and 7.8% of regional residents report Aboriginal ancestry.",
                    "It also enables smart education for remote schools (for example, 9,727 students across 29 public schools in the Pilbara) and smart healthcare such as remote monitoring and emergency response.",
                    "Five forces: rivalry, substitutes and buyer power are high, supplier power medium and the threat of new entrants low, which favours entering now through existing Optus towers.",
                    "Risks cover the Vocus deal, the rating outcome, Optus pricing and market share, each with a response; the timeline runs from debt repayment in 2025 to completed WA construction in 2028 and expansion to other states in 2029."
                ]
            },
            {
                title: "Financial Implications · Team",
                bullets: [
                    "Debt falls from A$6,262m to A$2,525m in 2025, then rises to A$3,000m from 2027 to fund the Optus premium.",
                    "Financial expense falls from A$375m to about A$150m a year; EBIT interest coverage rises from 0.61 to 2.67, cash ratio from 0.026 to 0.12, and gearing falls from 0.56 to 0.27.",
                    "WACC moves from 5.8% to about 6.1% as the debt weight falls, against 5% for Telstra and 8.4% for Optus."
                ]
            }
        ],
        zh: [
            {
                title: "项目背景 · 小组",
                bullets: [
                    "顾问任务日期为 2025 年 3 月 1 日，只能使用公开信息；客户是 TPG 的 CFO，最终汇报对象是董事会。",
                    "交付物：5 份个人两页 CFO 简报（资本结构、杠杆与流动性、ESG、派息政策、WACC），1 份团队业务范围简报，以及 1 项战略建议的董事会汇报和 10 分钟答辩。",
                    "对标公司：Telstra（ASX: TLS）、Singtel（SGX: Z74，Optus 母公司）和 Spark 新西兰。"
                ]
            },
            {
                title: "杠杆与流动性简报：发现 · 本人负责",
                bullets: [
                    "现状：现金 4,200 万澳元，债务 62.62 亿澳元，其中银行借款 40.99 亿（65%），租赁负债 22.05 亿（35%）；约 5% 的还款在一年内到期，95% 在一年以后。",
                    "信用：标普评级 BBB+，低于 Telstra（A-）、Spark（A-）和 Singtel（A+）；利息覆盖从 2023 年的 1.2 升至 2024 年的 1.79。",
                    "杠杆：债务/权益五年内从 0.46 稳步升至 0.56，接近行业 0.68；债务/资产保持在 0.3 左右，资本结构稳定。",
                    "流动性：流动比率 0.72、速动比率 0.67、现金比率 0.03，均低于行业的 0.81、0.71 和 0.11，短期流动性是 TPG 的短板。",
                    "缓冲：6.85 亿澳元未使用额度可偿还 12 个月内到期的 2.28 亿澳元银行债务，且不改变债务结构；正在进行的 5G 投资限制了收购能力。"
                ]
            },
            {
                title: "杠杆与流动性简报：建议 · 本人负责",
                bullets: [
                    "保持现有债务结构，像过去五年一样持续再融资：避免过度负债可降低财务困境成本，而过度降债会失去利息税盾。",
                    "按优序融资理论安排新增资金：先用内部现金，其次债务，最后才是股权。",
                    "将富余现金投资于有价证券，把现金比率提升到接近行业水平，增强财务灵活性，并逐步支持评级向同业靠拢。"
                ]
            },
            {
                title: "团队简报：Vocus 出售所得用途 · 小组",
                bullets: [
                    "债务/EBITDA 为 3.23 倍，而穆迪 A 级区间为 1—1.75 倍，TPG 至少要偿还一半债务才能与同业看齐。",
                    "建议将 52.5 亿澳元中的 80% 用于偿还 5 年内到期债务的一半，其余作为一次性特别股息，回报股东而不形成长期派息承诺。",
                    "否决回购：TPG 预期市盈率 28.4 倍，同业为 14—20 倍，股价并不便宜。"
                ]
            },
            {
                title: "董事会建议 · 小组",
                bullets: [
                    "2025—2029 年在约定价值基础上向 Optus 支付 10% 溢价，优先升级和新建西澳基站，以债务融资。",
                    "用 Vocus 所得偿还约 60% 债务（37.37 亿澳元），增加现金储备，争取 2026 年中获得 A- 评级，以打开债券市场，降低借款成本至少 1 个百分点。",
                    "理由：矿业密集的西澳偏远地区基本不在 TPG 覆盖范围内，几乎只有 Telstra 提供服务。"
                ]
            },
            {
                title: "西澳收入模型 · 本人负责",
                bullets: [
                    "需求来自两类人群：约 13.4 万名矿工（据矿业劳动力研究，70% 有伴侣）和 300,977 名偏远地区居民（按家庭规模拆分）。",
                    "按 TPG 公开套餐定价，假设转网用户一半选纯 SIM、一半选 SIM + 家庭宽带；家庭人数越多，共享套餐后人均价格越低。",
                    "按 30% 份额，月收入 731 万澳元，年收入 8,770 万澳元；由于基站和人员已存在，将 TPG 70% 的费用率减半，得到每年 5,785 万澳元经营利润。",
                    "按 6% WACC 计算该利润价值 9.64 亿澳元，对应支付给 Optus 的付款现值 5.07 亿澳元；再测试市场份额（20%—35%）和套餐组合（50/50 至 80/20）：收入在 5,800 万至 1.02 亿澳元之间，至少需要 25% 的份额。"
                ]
            },
            {
                title: "ESG、竞争格局、风险与时间线 · 本人负责",
                bullets: [
                    "ESG：在西澳偏远地区提供平价 5G，可提升 TPG 的社会责任表现，契合其“包容与归属”和“数字经济”目标；西澳 34.2% 的居民出生在海外，3.3% 为原住民，偏远地区 7.8% 的居民有原住民血统。",
                    "还能支持偏远学校的智慧教育（例如皮尔巴拉地区 29 所公立学校的 9,727 名学生），以及远程监测、急救响应等智慧医疗。",
                    "五力分析：行业竞争、替代品威胁和买方议价能力高，供应商议价能力中等，新进入者威胁低，有利于现在借助 Optus 现有基站进入。",
                    "风险涵盖 Vocus 交易、评级结果、Optus 定价和市场份额，均有应对；时间线从 2025 年偿债到 2028 年完成西澳建设，2029 年拓展到其他州。"
                ]
            },
            {
                title: "财务影响 · 小组",
                bullets: [
                    "债务从 62.62 亿澳元降至 2025 年的 25.25 亿，2027 年起为支付 Optus 溢价回升至 30 亿。",
                    "财务费用从每年 3.75 亿降至约 1.5 亿澳元；EBIT 利息覆盖从 0.61 升至 2.67，现金比率从 0.026 升至 0.12，杠杆从 0.56 降至 0.27。",
                    "随债务权重下降，WACC 从 5.8% 升至约 6.1%；Telstra 为 5%，Optus 为 8.4%。"
                ]
            }
        ]
    }
},
{
    // FINC3600 Project 2 (internal marker; not shown on the site)
    id: "finc3600-abercrombie",
    category: "finance-investment",

    title: {
        en: "Abercrombie Super — Strategic Asset Allocation Review, Scenario Simulation and a COVID Tactical Tilt",
        zh: "Abercrombie 养老基金：战略资产配置复盘、情景模拟与新冠战术调整"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Team of 5 · my part: Python Monte Carlo scenario simulation and the COVID tactical asset allocation",
        zh: "5 人小组 · 本人负责：Python 蒙特卡洛情景模拟与新冠情景下的战术资产配置"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2025",
        zh: "2025 年第一学期"
    },

    sortDate: "2025-05",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Abercrombie Super is a case-study superannuation fund regulated by APRA. As its Asset Allocation team, reporting to the Chief Investment Officer, we reviewed the default MySuper Balanced option as at 2 April 2025 and made recommendations to the Investment Committee.",
                "The Balanced option targets CPI + 3% a year over 10 years, must have at least a 50% modelled probability of meeting that objective, and must keep 60–76% in growth assets within set ranges for each asset class. It held six asset classes (30% Australian equity, 35% unhedged international equity, 5% listed property, 15% Australian bonds, 8% hedged international bonds and 7% cash), and the fund was considering four new ones: emerging markets, international small caps, listed infrastructure and hedged international equity.",
                "The team delivered a one-page CIO brief and a 10-slide Investment Committee presentation. I built the Python scenario simulation that stress-tested the new allocation and designed the tactical tilt for a sudden COVID-style outbreak."
            ],
            zh: [
                "Abercrombie Super 是一家受 APRA 监管的案例养老基金。我们作为向首席投资官汇报的资产配置团队，复盘了截至 2025 年 4 月 2 日的默认 MySuper 平衡型产品，并向投资委员会提出建议。",
                "平衡型产品的目标是 10 年年化 CPI + 3%，模型测算达标概率须不低于 50%，增长型资产须保持在 60%—76%，各资产类别也有上下限。原配置为 6 类资产（澳洲股票 30%、未对冲海外股票 35%、上市地产 5%、澳洲债券 15%、对冲海外债券 8%、现金 7%），基金还在考虑 4 类新资产：新兴市场、海外小盘股、上市基础设施和对冲海外股票。",
                "团队提交了一页 CIO 简报和 10 页投资委员会汇报。我负责用 Python 搭建情景模拟，对新配置做压力测试，并设计在突发新冠类疫情下的战术调整。"
            ]
        },
        pointsTitle: {
            en: "What the Investment Committee asked for",
            zh: "投资委员会的要求"
        },
        points: {
            en: [
                "Review each asset class and recommend a new strategic asset allocation (SAA), with ranges for any new asset classes and metrics for the old and new portfolios.",
                "Test how robust the recommendation is through scenario analysis.",
                "Recommend a tactical asset allocation (TAA) tilt for a sudden, global COVID-style outbreak with lockdowns, a market crash, a falling Australian dollar, rate cuts and early release of super."
            ],
            zh: [
                "复盘各资产类别，提出新的战略资产配置（SAA），为新增资产设定区间，并给出新旧组合的各项指标。",
                "用情景分析检验建议的稳健性。",
                "针对突发全球性新冠类疫情（封锁、市场暴跌、澳元贬值、降息、提前支取养老金）提出战术资产配置（TAA）调整。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "In a team of 5 reviewing a superannuation fund’s default Balanced option, the team’s new allocation raised expected return from 6.00% to 6.42% and cut volatility from 8.23% to 8.08%; I built the Python Monte Carlo (10,000 paths × 10 years) that stress-tested it under 4 macro scenarios, where it beat the old allocation on the probability of exceeding 5.5% a year in every case (68.4% → 79.5% under high growth).",
            "Designed the COVID tactical tilt from 2020 rebound times and 2020–23 volatilities for 10 asset classes: cut international small caps by 10 points and Australian bonds by 4 in favour of hedged international equity (+9) and hedged international bonds (+5), a 28% turnover costing about A$29m while keeping the 60% growth-asset floor."
        ],
        zh: [
            "在 5 人小组中复盘养老基金默认的平衡型产品，团队的新配置将预期收益从 6.00% 提高到 6.42%，波动率从 8.23% 降至 8.08%；本人用 Python 搭建蒙特卡洛模拟（10,000 条路径 × 10 年），在 4 种宏观情景下压力测试，新配置年化收益超过 5.5% 的概率在每种情景下都高于原配置（高增长情景 68.4% → 79.5%）。",
            "根据 10 类资产在 2020 年的反弹时长和 2020—23 年的波动率设计新冠战术调整：海外小盘股减 10 个百分点、澳洲债券减 4 个百分点，增加对冲海外股票（+9）和对冲海外债券（+5），换手 28%、交易成本约 2,900 万澳元，且保持增长型资产不低于 60%。"
        ]
    },

    tags: [
        "Asset Allocation",
        "Monte Carlo Simulation",
        "Scenario Analysis",
        "Tactical Asset Allocation",
        "Python",
        "NumPy",
        "Refinitiv",
        "Superannuation"
    ],

    metrics: [
        {
            value: "6.00% → 6.42%",
            label: {
                en: "Expected return, current vs new SAA (team)",
                zh: "预期收益：原配置对比新配置（团队）"
            }
        },
        {
            value: "52.4% → 54.6%",
            label: {
                en: "Probability of meeting CPI + 3% (team)",
                zh: "达到 CPI + 3% 目标的概率（团队）"
            }
        },
        {
            value: "10,000 × 10 yrs",
            label: {
                en: "Monte Carlo paths per scenario (my part)",
                zh: "每种情景的蒙特卡洛路径（本人负责）"
            }
        },
        {
            value: "4 of 4",
            label: {
                en: "Scenarios where the new SAA had a higher chance of beating 5.5% a year",
                zh: "新配置年化超过 5.5% 概率更高的情景数"
            }
        },
        {
            value: "28%",
            label: {
                en: "Turnover of the COVID tactical tilt (my part)",
                zh: "新冠战术调整的换手比例（本人负责）"
            }
        },
        {
            value: "A$28.95m",
            label: {
                en: "Transaction cost of the tilt at 0.5% round trip",
                zh: "按往返 0.5% 计算的调整交易成本"
            }
        }
    ],

    visuals: [
        {
            type: "table",
            source: {
                en: "Team · SAA",
                zh: "团队 · SAA"
            },
            title: {
                en: "Current vs New Strategic Asset Allocation (%)",
                zh: "原配置与新战略资产配置（%）"
            },
            columns: {
                en: ["Asset class", "Current", "New", "Allowed range", "Return forecast", "Volatility"],
                zh: ["资产类别", "原配置", "新配置", "允许区间", "收益预测", "波动率"]
            },
            rows: [
                [{ en: "Australian listed equity", zh: "澳洲上市股票" }, "30", "15", "10–50", "6.50", "14.06"],
                [{ en: "International equity (unhedged)", zh: "海外股票（未对冲）" }, "35", "40", "10–45", "7.50", "11.21"],
                [{ en: "Australian listed property", zh: "澳洲上市地产" }, "5", "0", "0–10", "6.00", "19.95"],
                [{ en: "Australian fixed income", zh: "澳洲固定收益" }, "15", "9", "5–30", "3.80", "3.81"],
                [{ en: "International fixed income (hedged)", zh: "海外固定收益（对冲）" }, "8", "10", "0–20", "4.30", "3.56"],
                [{ en: "Cash", zh: "现金" }, "7", "7", "5–25", "3.00", "0.58"],
                [{ en: "International small caps (new)", zh: "海外小盘股（新增）" }, "0", "10", "0–10", "8.00", "13.84"],
                [{ en: "International equity (hedged, new)", zh: "海外股票（对冲，新增）" }, "0", "9", "0–15", "7.40", "11.59"],
                [{ en: "Growth assets", zh: "增长型资产" }, "70", "74", "60–76", "–", "–"]
            ],
            highlightRow: 8,
            caption: {
                en: "Forecasts blend historical returns with house views (Vanguard, J.P. Morgan, Goldman Sachs, CBA) and a 2.5% CPI from the RBA; volatilities are historical. Emerging markets (6.0% return, 13.0% volatility) and listed infrastructure (6.0%, 14.35%) were assessed but left out because they offered less return per unit of risk.",
                zh: "收益预测结合历史收益和机构观点（Vanguard、摩根大通、高盛、联邦银行），CPI 采用澳联储的 2.5%；波动率使用历史数据。新兴市场（收益 6.0%、波动 13.0%）和上市基础设施（6.0%、14.35%）经评估后未纳入，因单位风险收益较低。"
            }
        },
        {
            type: "table",
            source: {
                en: "Team · SAA",
                zh: "团队 · SAA"
            },
            title: {
                en: "Portfolio Metrics: Current vs New SAA",
                zh: "组合指标：原配置对比新配置"
            },
            columns: {
                en: ["Metric", "Current SAA", "New SAA"],
                zh: ["指标", "原配置", "新配置"]
            },
            rows: [
                [{ en: "Expected return", zh: "预期收益" }, "6.00%", "6.42%"],
                [{ en: "Volatility", zh: "波动率" }, "8.23%", "8.08%"],
                [{ en: "Probability of meeting CPI + 3%", zh: "达到 CPI + 3% 的概率" }, "52.42%", "54.55%"],
                [{ en: "Probability of a negative year", zh: "出现负收益年份的概率" }, "23.30%", "21.32%"],
                [{ en: "Standard risk measure (negative years in 20)", zh: "标准风险指标（20 年内负收益年数）" }, "4.66", "4.26"],
                [{ en: "Annual return after tax and costs (A$m)", zh: "税后、扣费后年收益（百万澳元）" }, "1,092", "1,133"],
                [{ en: "Index costs a year (A$m)", zh: "每年指数费用（百万澳元）" }, "29.12", "35.61"],
                [{ en: "One-off reallocation cost (A$m)", zh: "一次性调仓成本（百万澳元）" }, "–", "27.39"]
            ],
            caption: {
                en: "Higher return with lower risk: about A$41m more a year after tax and fees, which recovers the one-off switching cost within the first year.",
                zh: "收益更高、风险更低：税后扣费每年多约 4,100 万澳元，第一年内即可收回一次性调仓成本。"
            }
        },
        {
            type: "process",
            source: {
                en: "My part · scenario simulation",
                zh: "本人负责 · 情景模拟"
            },
            title: {
                en: "How the Monte Carlo Simulation Works",
                zh: "蒙特卡洛模拟思路"
            },
            steps: {
                en: [
                    "Set scenario returns and volatilities for 8 asset classes",
                    "Draw 10 years × 10,000 paths from normal distributions (seed 42)",
                    "Apply current and new weights to every path",
                    "Average annual return per path",
                    "Share of paths above 5.5% and the 5th percentile"
                ],
                zh: [
                    "设定 8 类资产在该情景下的收益与波动",
                    "从正态分布抽取 10 年 × 10,000 条路径（随机种子 42）",
                    "对每条路径套用原配置和新配置权重",
                    "计算每条路径的年均收益",
                    "统计超过 5.5% 的路径比例和第 5 百分位"
                ]
            },
            caption: {
                en: "The 5.5% target is the fund’s objective of CPI (2.5%) + 3%. Re-running the code with the inputs listed in the presentation appendix reproduces the reported high-growth, low-growth and ESG probabilities to within 0.1 percentage point.",
                zh: "5.5% 的目标即基金的 CPI（2.5%）+ 3%。用汇报附录中的输入重新运行代码，可以复现汇报中高增长、低增长和 ESG 情景的概率（误差在 0.1 个百分点以内）。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · scenario simulation",
                zh: "本人负责 · 情景模拟"
            },
            title: {
                en: "Scenario Results: Current → New SAA",
                zh: "情景结果：原配置 → 新配置"
            },
            columns: {
                en: ["Scenario", "Return", "Volatility", "P(meet objective)", "SRM", "P(return > 5.5%)"],
                zh: ["情景", "收益", "波动率", "达标概率", "标准风险指标", "收益 > 5.5% 的概率"]
            },
            rows: [
                [{ en: "High growth", zh: "高增长" }, "6.00 → 6.97%", "9.53 → 9.53%", "49.5 → 51.1%", "5.42 → 5.38", "68.4 → 79.5%"],
                [{ en: "Low growth", zh: "低增长" }, "5.51 → 5.70%", "6.38 → 6.67%", "53.2 → 55.5%", "3.88 → 3.93", "50.2 → 56.0%"],
                [{ en: "Political tension", zh: "地缘政治紧张" }, "6.16 → 6.73%", "8.57 → 8.32%", "53.1 → 55.9%", "4.72 → 4.18", "61.3 → 75.8%"],
                [{ en: "ESG transition", zh: "ESG 转型" }, "5.90 → 6.37%", "6.94 → 6.82%", "52.3 → 55.1%", "3.95 → 3.50", "61.0 → 74.9%"]
            ],
            caption: {
                en: "The new allocation improves the odds of beating 5.5% in all four scenarios. Its one weak spot is low growth, where cutting equity returns by 1–2 points makes it slightly more volatile than the old mix.",
                zh: "新配置在四种情景下超过 5.5% 的概率都更高。唯一的弱点是低增长情景：股票收益下调 1—2 个百分点后，新配置的波动略高于原配置。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · scenario simulation",
                zh: "本人负责 · 情景模拟"
            },
            title: {
                en: "Scenario Assumptions",
                zh: "情景假设"
            },
            columns: {
                en: ["Scenario", "CPI", "Return adjustments vs base", "Volatility window"],
                zh: ["情景", "CPI", "相对基准的收益调整", "波动率取值区间"]
            },
            rows: [
                [{ en: "High growth", zh: "高增长" }, "3.0%", { en: "Equities and small caps +1; property +0.5; fixed income −1; cash unchanged", zh: "股票和小盘股 +1；地产 +0.5；固定收益 −1；现金不变" }, { en: "Jan 2021 – Dec 2022", zh: "2021 年 1 月—2022 年 12 月" }],
                [{ en: "Low growth", zh: "低增长" }, "3.0%", { en: "Equities and small caps −1 to −2; fixed income and cash +1; property unchanged", zh: "股票和小盘股 −1 至 −2；固定收益和现金 +1；地产不变" }, { en: "Jan 2013 – Dec 2017", zh: "2013 年 1 月—2017 年 12 月" }],
                [{ en: "Political tension", zh: "地缘政治紧张" }, "2.5%", { en: "Australian equity and small caps +1; international equity +0.5; cash +0.8; fixed income −0.3", zh: "澳洲股票和小盘股 +1；海外股票 +0.5；现金 +0.8；固定收益 −0.3" }, { en: "Jan 2015 – Jan 2025", zh: "2015 年 1 月—2025 年 1 月" }],
                [{ en: "ESG transition", zh: "ESG 转型" }, "2.5%", { en: "Fixed income and property +0.2; Australian equity −0.5; small caps −0.2", zh: "固定收益和地产 +0.2；澳洲股票 −0.5；小盘股 −0.2" }, { en: "Jan 2023 – Jan 2025", zh: "2023 年 1 月—2025 年 1 月" }]
            ],
            caption: {
                en: "Each scenario uses volatilities from a historical window that resembles it. Refinitiv only accepts historical volatilities, so I also searched every window of two years or more for one where riskier asset classes were reliably more volatile, as theory expects; none matched, which the team reported as a model limitation.",
                zh: "每种情景使用与之相似的历史区间计算波动率。Refinitiv 只接受历史波动率，因此我还检索了所有两年以上的区间，寻找风险越高的资产波动也越大的区间（符合理论排序），结果一个也没有，团队将此作为模型局限写入汇报。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · COVID tilt",
                zh: "本人负责 · 新冠战术调整"
            },
            title: {
                en: "COVID Scenario Inputs: How Fast Each Asset Class Recovered in 2020",
                zh: "新冠情景输入：各资产类别 2020 年的恢复速度"
            },
            columns: {
                en: ["Asset class", "Rebound period", "Volatility 2020–23 (%)", "Scenario return (%)"],
                zh: ["资产类别", "反弹时长", "2020—23 年波动率（%）", "情景收益（%）"]
            },
            rows: [
                [{ en: "Australian listed equity", zh: "澳洲上市股票" }, { en: "3 months", zh: "3 个月" }, "18.03", "4.50"],
                [{ en: "International equity (unhedged)", zh: "海外股票（未对冲）" }, { en: "3 months", zh: "3 个月" }, "11.67", "5.50"],
                [{ en: "International equity (hedged)", zh: "海外股票（对冲）" }, { en: "3 months", zh: "3 个月" }, "16.21", "5.40"],
                [{ en: "Emerging markets equity", zh: "新兴市场股票" }, { en: "5 months", zh: "5 个月" }, "12.17", "4.00"],
                [{ en: "International small caps", zh: "海外小盘股" }, { en: "9 months", zh: "9 个月" }, "15.54", "5.00"],
                [{ en: "Australian listed property", zh: "澳洲上市地产" }, { en: "1 year 9 months", zh: "1 年 9 个月" }, "28.37", "3.00"],
                [{ en: "International infrastructure (hedged)", zh: "海外基础设施（对冲）" }, { en: "3 years", zh: "3 年" }, "17.36", "4.00"],
                [{ en: "Australian fixed income", zh: "澳洲固定收益" }, { en: "No fall in the first year", zh: "第一年未下跌" }, "5.93", "4.00"],
                [{ en: "International fixed income (hedged)", zh: "海外固定收益（对冲）" }, { en: "No fall in the first year", zh: "第一年未下跌" }, "5.20", "4.50"],
                [{ en: "Cash", zh: "现金" }, { en: "No change in the first year", zh: "第一年无变化" }, "0.49", "1.00"]
            ],
            caption: {
                en: "Rebound period is the time each index took to regain roughly its pre-crash level, used as a relative measure of recovery strength rather than a forecast. The 2020–23 volatilities may overstate a repeat outbreak, which we flagged as a limitation.",
                zh: "反弹时长指各指数回到暴跌前水平大约所需的时间，用来比较恢复力度，而非预测。2020—23 年的波动率可能高估再次暴发时的波动，我们已将其列为局限。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · COVID tilt",
                zh: "本人负责 · 新冠战术调整"
            },
            title: {
                en: "Recommended Tactical Tilt (%)",
                zh: "建议的战术调整（%）"
            },
            columns: {
                en: ["Asset class", "SAA", "TAA", "Change"],
                zh: ["资产类别", "SAA", "TAA", "变化"]
            },
            rows: [
                [{ en: "Australian listed equity", zh: "澳洲上市股票" }, "15", "15", "0"],
                [{ en: "International equity (unhedged)", zh: "海外股票（未对冲）" }, "40", "40", "0"],
                [{ en: "International equity (hedged)", zh: "海外股票（对冲）" }, "9", "18", "+9"],
                [{ en: "International small caps", zh: "海外小盘股" }, "10", "0", "−10"],
                [{ en: "Australian fixed income", zh: "澳洲固定收益" }, "9", "5", "−4"],
                [{ en: "International fixed income (hedged)", zh: "海外固定收益（对冲）" }, "10", "15", "+5"],
                [{ en: "Cash", zh: "现金" }, "7", "7", "0"],
                [{ en: "Total turnover", zh: "总换手" }, "–", "–", "28"]
            ],
            highlightRow: 7,
            caption: {
                en: "Small caps, the slowest-recovering equity, move into large-cap hedged international equity, which bounced back in 3 months; part of the Australian bond allocation moves into hedged global bonds. Growth assets stay at 73%, above the 60% floor. At 0.5% round trip the tilt costs A$28.95m, and a heavy defensive stance could lag in a fast rebound; under the fund’s policy, tactical positions are held for 12 months or less.",
                zh: "把恢复最慢的小盘股转为 3 个月即反弹的大盘对冲海外股票；部分澳洲债券转为对冲全球债券。增长型资产保持 73%，高于 60% 下限。按往返 0.5% 计算，调整成本 2,895 万澳元；防御过重可能在快速反弹中跑输；按基金政策，战术仓位一般不超过 12 个月。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · COVID tilt",
                zh: "本人负责 · 新冠战术调整"
            },
            title: {
                en: "Why the Tilt: Policy and Market Response",
                zh: "调整理由：政策与市场反应"
            },
            columns: {
                en: ["Lens", "What happened in 2020", "Implication for the fund"],
                zh: ["角度", "2020 年的情况", "对基金的影响"]
            },
            rows: [
                [{ en: "Fiscal policy", zh: "财政政策" }, { en: "JobKeeper, direct transfers and early release of up to A$10,000 of super", zh: "JobKeeper、直接转移支付，允许提前支取最多 1 万澳元养老金" }, { en: "Higher withdrawals: liquidity must be maintained", zh: "提取增加：须保持流动性" }],
                [{ en: "Monetary policy", zh: "货币政策" }, { en: "RBA cash rate cut to a record-low 0.1% and large-scale quantitative easing; later inflation from over-stimulus", zh: "澳联储将现金利率降至 0.1% 的历史低点并大规模量化宽松；后期过度刺激推高通胀" }, { en: "Bond yields fall; inflation risk later", zh: "债券收益率下降；后期有通胀风险" }],
                [{ en: "Asset response", zh: "资产反应" }, { en: "Growth assets plunged for about a week before rebounding; defensive assets held steady", zh: "增长型资产暴跌约一周后反弹；防御型资产保持稳定" }, { en: "Tilt towards protection and faster-recovering assets", zh: "向防御和恢复更快的资产倾斜" }]
            ]
        },
        {
            type: "table",
            source: {
                en: "Team · peer review",
                zh: "团队 · 同业对比"
            },
            title: {
                en: "Peer Balanced Options vs Our Current and New SAA (%)",
                zh: "同业平衡型产品与本基金原配置、新配置对比（%）"
            },
            columns: {
                en: ["Asset class", "Legalsuper", "AustralianSuper", "MySuper avg", "Current", "New"],
                zh: ["资产类别", "Legalsuper", "AustralianSuper", "MySuper 平均", "原配置", "新配置"]
            },
            rows: [
                [{ en: "Australian equity", zh: "澳洲股票" }, "25.14", "23.85", "21.9", "30", "15"],
                [{ en: "International equity", zh: "海外股票" }, "28.66", "30.65", "31.0", "35", "49"],
                [{ en: "Infrastructure", zh: "基础设施" }, "10.0", "15.16", "10.8", "0", "0"],
                [{ en: "Unlisted equity", zh: "非上市股权" }, "5.23", "5.48", "5.8", "0", "0"],
                [{ en: "Property", zh: "地产" }, "8.13", "4.2", "7.6", "5", "0"],
                [{ en: "Fixed income", zh: "固定收益" }, "9.14", "16.66", "18.37", "23", "19"],
                [{ en: "Credit", zh: "信用债" }, "7.0", "4.0", "0", "0", "0"],
                [{ en: "Cash", zh: "现金" }, "7.14", "1.81", "5.6", "7", "7"],
                [{ en: "Other (peers: alternatives; new SAA: small caps)", zh: "其他（同业为另类资产，新配置为小盘股）" }, "6.83", "0.05", "1.3", "0", "10"]
            ],
            caption: {
                en: "Peers hold 4–8% in property, but mostly unlisted and spread across sectors and countries. The fund can only use the S&P/ASX 300 A-REIT index, where the top ten names are 85% of the index and Goodman Group alone is 36%, so the team removed listed property rather than hold a concentrated proxy.",
                zh: "同业持有 4%—8% 的地产，但多为非上市、跨行业跨国家分散持有。基金只能使用 S&P/ASX 300 A-REIT 指数，前十大成分股占 85%，仅 Goodman Group 就占 36%，因此团队选择剔除上市地产，而不是持有一个高度集中的替代指数。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Monte Carlo simulation of the current and new allocations",
                zh: "现有配置与新配置的蒙特卡洛模拟"
            },
            language: "Python · NumPy · pandas",
            source: {
                en: "My code · transcribed from the presentation appendix",
                zh: "本人代码 · 转录自汇报附录"
            },
            caption: {
                en: "Shown with the high-growth inputs. Running it outputs 68.43% and 79.51%, exactly the probabilities reported for that scenario. Two comment labels on the return inputs were corrected to match the order used by the weights, and the plotting lines were condensed. Each asset is drawn independently, so correlations between asset classes are not modelled; adding a covariance matrix would be the next step.",
                zh: "此处为高增长情景的输入。运行后输出 68.43% 和 79.51%，与汇报中该情景的概率完全一致。收益输入中的两处注释已按权重顺序更正，绘图部分作了精简。每类资产独立抽样，未刻画资产之间的相关性，下一步可加入协方差矩阵。"
            },
            code: `import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as mtick
import seaborn as sns

# === Settings ===
n_years = 10
n_simulations = 10000
initial_value = 1.0
target_return = 0.055  # CPI + 3%

# === Expected returns and stdevs (8 assets, high-growth scenario) ===
expected_returns = np.array([
    0.0750,  # Australian listed equity
    0.0850,  # Int'l listed equity (Unhedged)
    0.0650,  # Australian listed property
    0.0280,  # Australian fixed income
    0.0330,  # Int'l fixed income (hedged)
    0.0300,  # Cash
    0.0900,  # Int'l Small Caps
    0.0840   # Int'l listed equity (Hedged)
])

stdevs = np.array([
    0.1419,  # Australian listed equity
    0.1215,  # Int'l listed equity (Unhedged)
    0.1995,  # Australian listed property
    0.0642,  # Australian fixed income
    0.0517,  # Int'l fixed income (hedged)
    0.0031,  # Cash
    0.1325,  # Int'l Small Caps
    0.1694   # Int'l listed equity (Hedged)
])

# === Portfolio weights ===
weights_A = np.array([0.30, 0.35, 0.05, 0.15, 0.08, 0.07, 0.00, 0.00])  # Original
weights_B = np.array([0.15, 0.40, 0.00, 0.09, 0.10, 0.07, 0.10, 0.09])  # Proposed

# === Monte Carlo simulation ===
np.random.seed(42)
returns = np.random.normal(
    loc=expected_returns[:, np.newaxis, np.newaxis],
    scale=stdevs[:, np.newaxis, np.newaxis],
    size=(8, n_years, n_simulations))

# Apply portfolios
portfolio_returns_A = np.tensordot(weights_A, returns, axes=([0], [0]))
portfolio_returns_B = np.tensordot(weights_B, returns, axes=([0], [0]))

# Calculate portfolio values
values_A = np.cumprod(1 + portfolio_returns_A, axis=0) * initial_value
values_B = np.cumprod(1 + portfolio_returns_B, axis=0) * initial_value
geo_A = values_A[-1] ** (1 / n_years) - 1
geo_B = values_B[-1] ** (1 / n_years) - 1

# === Expected return per path ===
exp_A = np.mean(portfolio_returns_A, axis=0)  # shape: (n_simulations,)
exp_B = np.mean(portfolio_returns_B, axis=0)
exp_A_pct, exp_B_pct = exp_A * 100, exp_B * 100

# Histograms of returns in %, with 5th-percentile lines
plt.figure(figsize=(10, 6))
sns.histplot(exp_A_pct, bins=100, color='#002fa7', kde=True, stat='probability', label='Aber SAA', alpha=0.6)
sns.histplot(exp_B_pct, bins=100, color='#ffe76f', kde=True, stat='probability', label='New SAA', alpha=0.6)
plt.axvline(np.percentile(exp_A_pct, 5), color='#002fa7', linestyle='--', linewidth=2, label='Aber SAA 5th Percentile')
plt.axvline(np.percentile(exp_B_pct, 5), color='#e377c2', linestyle='--', linewidth=2, label='New SAA 5th Percentile')
plt.title("High Growth Monte Carlo Simulation", fontsize=16)
plt.xlabel("Expected Average Annual Return (%)", fontsize=14)
plt.ylabel("Probability", fontsize=14)
plt.gca().xaxis.set_major_formatter(mtick.PercentFormatter(decimals=0))
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

# Probability of exceeding the 5.5% target
target = 0.055
prob_A = np.mean(exp_A > target) * 100
prob_B = np.mean(exp_B > target) * 100
print(f"Aber SAA P(>5.5%): {prob_A:.2f}%")
print(f"New SAA P(>5.5%): {prob_B:.2f}%")`
        },
        {
            title: {
                en: "Searching for a volatility window that fits theory",
                zh: "寻找符合理论排序的波动率区间"
            },
            language: "Python · NumPy · pandas",
            source: {
                en: "My code · transcribed from the presentation appendix",
                zh: "本人代码 · 转录自汇报附录"
            },
            caption: {
                en: "Theory says property and infrastructure should be less volatile than equities, but Refinitiv only accepts historical volatilities. The script tests every window of two years or more for one where the asset classes fall in the expected volatility order; none did, so the team reported it as a model limitation rather than forcing the inputs.",
                zh: "理论上地产和基础设施的波动应低于股票，但 Refinitiv 只接受历史波动率。脚本检验所有两年以上的区间，寻找各资产波动率符合理论排序的时段；结果一个也没有，团队据此将其列为模型局限，而不是人为调整输入。"
            },
            code: `from itertools import combinations
import pandas as pd
import numpy as np

# Load and clean the dataset (monthly returns exported from Refinitiv)
xls = pd.ExcelFile("Historical Returns.xlsx")
df = xls.parse("Historical Returns")
df.columns = df.iloc[1]
df = df.drop(index=[0, 1])
df = df.rename(columns={df.columns[0]: "Date"})
df["Date"] = pd.to_datetime(df["Date"])
df.iloc[:, 1:] = df.iloc[:, 1:].apply(pd.to_numeric, errors='coerce')

# Volatility tiers that theory expects, from riskiest to safest
vol_tiers = [
    ["IntSmallCap", "EM Equities"],
    ["Int Listed Equity_Unhedged", "IntListedEquity_Hedged"],
    ["Australian Listed Equity"],
    ["IntListedInfrastructure_Hedged", "Australian listed property"],
    ["IntFixedIncome_Hedged", "Australian Fixed Income"],
    ["Cash"]]

# Flatten the list to get all asset names
all_assets = [a for tier in vol_tiers for a in tier]

# Test whether a volatility ranking respects the tier order
def is_group_order_correct(vol_ranking):
    ranks = {asset: i for i, asset in enumerate(vol_ranking)}
    group_indices = [min([ranks[a] for a in tier if a in ranks]) for tier in vol_tiers]
    return group_indices == sorted(group_indices)

# Check every time span of at least 2 years
years = df["Date"].dt.year.unique()
matches = []
for start, end in combinations(years, 2):
    if end - start >= 2:
        mask = (df["Date"].dt.year >= start) & (df["Date"].dt.year <= end)
        subset = df.loc[mask]
        vol = subset[all_assets].std() * (12 ** 0.5)   # annualised
        vol_ranking = vol.sort_values(ascending=False).index.tolist()
        if is_group_order_correct(vol_ranking):
            matches.append((start, end, vol))

# Output results
if matches:
    for m in matches:
        print(f"Matched period: {m[0]}-{m[1]}")
        print(m[2].sort_values(ascending=False))
        print()
else:
    print("No periods matched your grouped volatility structure.")

# Output: No periods matched your grouped volatility structure.`
        }
    ],

    details: {
        en: [
            {
                title: "The Mandate · Team",
                bullets: [
                    "Role: the fund’s internal Asset Allocation team, advising the CIO and the Investment Committee on the default MySuper Balanced option, using public information up to 2 April 2025.",
                    "Rules from the fund’s Investment Governance Framework: CPI + 3% over 10 years, at least a 50% probability of meeting it, 60–76% growth assets, ranges for every asset class, a 0.25% one-way switching cost, and tax rates of 0% for Australian equity, 14% for other growth assets and 15% for defensive assets.",
                    "Deliverables: a one-page CIO brief on the new SAA, then a 10-slide Investment Committee presentation covering SAA, scenarios and TAA."
                ]
            },
            {
                title: "Strategic Asset Allocation · Team",
                bullets: [
                    "Forecast returns for 10 asset classes by ranking them on risk premium, then anchoring to historical averages and house views; kept historical volatilities as the 10-year risk measure.",
                    "Cut Australian equity from 30% to 15% and removed listed property, raised unhedged international equity to 40%, and added international small caps (10%) and hedged international equity (9%); emerging markets and infrastructure were left out on risk-adjusted return.",
                    "Result: expected return 6.00% → 6.42%, volatility 8.23% → 8.08%, probability of meeting the objective 52.4% → 54.6%, negative years in 20 from 4.66 to 4.26, and about A$41m more a year after tax and fees for a one-off A$27.4m switching cost.",
                    "Listed property was dropped because the only available index is dominated by Goodman Group (36%), while peers’ 4–8% property holdings are mostly diversified unlisted assets."
                ]
            },
            {
                title: "Scenario Simulation · My part",
                bullets: [
                    "Designed four scenarios (high growth, low growth, political tension and ESG transition), each with its own CPI, return adjustments by asset class and a historical window for volatilities.",
                    "Wrote a Python Monte Carlo that draws 10 years of returns for 8 asset classes across 10,000 paths, applies the current and new weights, and reports the share of paths averaging above the 5.5% objective and the 5th-percentile outcome.",
                    "The new allocation came out ahead in all four scenarios on the chance of beating 5.5% a year: 68.4% → 79.5% (high growth), 50.2% → 56.0% (low growth), 61.3% → 75.8% (political tension) and 61.0% → 74.9% (ESG).",
                    "Re-running the code with the appendix inputs reproduces the reported high-growth, low-growth and ESG results; independent draws (no correlations) and historical volatilities are the main limitations."
                ]
            },
            {
                title: "Model Limitation Check · My part",
                bullets: [
                    "Refinitiv would not accept forward-looking volatilities, only ones computed from a historical period.",
                    "Wrote a script that tests every window of two years or more for a period in which riskier asset classes are more volatile, in the order theory expects (small caps and emerging markets first, cash last).",
                    "No window matched, so the team kept historical volatilities and disclosed the limitation instead of choosing a convenient period."
                ]
            },
            {
                title: "COVID Tactical Tilt · My part",
                bullets: [
                    "Assessed the policy response (JobKeeper, early release of up to A$10,000 of super, a 0.1% cash rate and quantitative easing) and how each asset class behaved: growth assets crashed for about a week, then rebounded at very different speeds.",
                    "Measured each index’s 2020 rebound time and its 2020–23 volatility, then cut return assumptions for growth assets and cash while nudging bond returns up.",
                    "Recommended moving 10 points out of international small caps (9-month rebound) and 4 points out of Australian bonds into hedged international equity (+9, 3-month rebound) and hedged international bonds (+5).",
                    "Implications: 28% turnover costing A$28.95m at 0.5% round trip, growth assets held at 73% (above the 60% floor), and a risk of lagging if markets rebound fast, so the tilt is short term."
                ]
            }
        ],
        zh: [
            {
                title: "任务背景 · 小组",
                bullets: [
                    "角色：基金内部资产配置团队，就默认 MySuper 平衡型产品向 CIO 和投资委员会提供建议，只使用 2025 年 4 月 2 日前的公开信息。",
                    "基金投资治理框架的规则：10 年 CPI + 3%，达标概率不低于 50%，增长型资产 60%—76%，各资产类别有区间限制，单边调仓成本 0.25%，税率为澳洲股票 0%、其他增长型资产 14%、防御型资产 15%。",
                    "交付物：一页 CIO 简报（新 SAA），以及涵盖 SAA、情景和 TAA 的 10 页投资委员会汇报。"
                ]
            },
            {
                title: "战略资产配置 · 小组",
                bullets: [
                    "先按风险溢价对 10 类资产的收益排序，再结合历史均值和机构观点确定预测；10 年期风险指标沿用历史波动率。",
                    "澳洲股票从 30% 降至 15%，剔除上市地产，未对冲海外股票升至 40%，新增海外小盘股（10%）和对冲海外股票（9%）；新兴市场和基础设施因风险调整后收益较低未纳入。",
                    "结果：预期收益 6.00% → 6.42%，波动率 8.23% → 8.08%，达标概率 52.4% → 54.6%，20 年内负收益年数 4.66 → 4.26；税后扣费每年多约 4,100 万澳元，一次性调仓成本 2,740 万澳元。",
                    "剔除上市地产是因为唯一可用的指数由 Goodman Group 主导（36%），而同业 4%—8% 的地产配置多为分散的非上市资产。"
                ]
            },
            {
                title: "情景模拟 · 本人负责",
                bullets: [
                    "设计四种情景（高增长、低增长、地缘政治紧张、ESG 转型），每种情景设定各自的 CPI、各资产收益调整和计算波动率的历史区间。",
                    "用 Python 编写蒙特卡洛模拟：为 8 类资产抽取 10 年收益、共 10,000 条路径，分别套用原配置和新配置权重，统计年均收益超过 5.5% 目标的路径比例和第 5 百分位结果。",
                    "新配置在四种情景下年化超过 5.5% 的概率都更高：高增长 68.4% → 79.5%，低增长 50.2% → 56.0%，地缘政治紧张 61.3% → 75.8%，ESG 61.0% → 74.9%。",
                    "用附录输入重新运行代码，可复现汇报中高增长、低增长和 ESG 情景的结果；资产独立抽样（未考虑相关性）和使用历史波动率是主要局限。"
                ]
            },
            {
                title: "模型局限检验 · 本人负责",
                bullets: [
                    "Refinitiv 不接受前瞻性的波动率，只能使用某一历史区间计算的波动率。",
                    "编写脚本检验所有两年以上的区间，寻找风险越高的资产波动也越大、符合理论排序的时段（小盘股和新兴市场最高，现金最低）。",
                    "没有任何区间符合，因此团队保留历史波动率，并如实披露这一局限，而不是挑选一个“合适”的区间。"
                ]
            },
            {
                title: "新冠战术调整 · 本人负责",
                bullets: [
                    "分析政策应对（JobKeeper、提前支取最多 1 万澳元养老金、0.1% 现金利率和量化宽松）以及各资产表现：增长型资产暴跌约一周后反弹，但反弹速度差异很大。",
                    "测算各指数 2020 年的反弹时长和 2020—23 年的波动率，下调增长型资产和现金的收益假设，略微上调债券收益。",
                    "建议将海外小盘股（反弹需 9 个月）减 10 个百分点、澳洲债券减 4 个百分点，转入对冲海外股票（+9，3 个月反弹）和对冲海外债券（+5）。",
                    "影响：换手 28%，按往返 0.5% 计算成本 2,895 万澳元；增长型资产保持 73%（高于 60% 下限）；若市场快速反弹可能跑输，因此只作为短期调整。"
                ]
            }
        ]
    }
},

    {
    id: "early-childhood",
    category: "analytics-systems",

    title: {
        en: "Early Childhood Education & Care in Australia — Service Access, Quality and Child Development",
        zh: "澳大利亚早教与托育服务分析：可达性、服务质量与儿童发展"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual assignment (ACECQA service analysis) + group report, Group 46 of 4 (my part: data processing and KBQ3)",
        zh: "个人作业（ACECQA 服务分析）+ 小组报告，第 46 组共 4 人（本人负责：数据处理与 KBQ3）"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 1, 2026",
        zh: "2026 年第一学期"
    },

    sortDate: "2026-05",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Early childhood education and care (ECEC) in Australia is regulated under a national framework. Every approved service is listed in a national register, updated daily from the National Quality Agenda IT System, and is rated against the National Quality Standard (NQS) on a five-step scale from Significant Improvement Required to Excellent. The Australian Children's Education & Care Quality Authority (ACECQA) works with the Australian, state and territory governments to implement changes that benefit children from birth to 13 and their families, apply the national law consistently, and support the sector to improve quality.",
                "The unit had two linked parts. The individual assignment was a preliminary, explanatory analysis of the register of approved services (17,663 services, 103 columns: location, overall NQS rating, approved places, program types, and distances to the nearest train and bus station that the instructor had added by hand and asked us to treat sceptically), presented to ACECQA as a 5–10 minute video with slides and Python code.",
                "The group assignment cast us as consultants to the Department of Education, which wants to improve early childhood outcomes under resource constraints. It combined the 2021 Australian Early Development Census (AEDC), which measures how many children are developmentally vulnerable on one (DV1) or two or more (DV2) of five domains, with the services data, ABS SEIFA disadvantage scores, remoteness boundaries and a new Google Reviews dataset. Each group chose three of six key business questions and wrote a 10-page report with code; we chose KBQ1, KBQ3 and KBQ6."
            ],
            zh: [
                "澳大利亚的早期教育与托育（ECEC）实行全国统一监管：所有获批机构都登记在每日更新的全国名录中（数据来自 National Quality Agenda IT System），并按国家质量标准（NQS）评为五级之一，从“需要显著改进”到“卓越”。澳大利亚儿童教育与托育质量管理局（ACECQA）与联邦及各州政府合作，推动有利于 0—13 岁儿童及其家庭的改革，确保全国法规统一执行，并支持行业提升质量。",
                "课程分两部分。个人作业是对获批机构名录的初步解释性分析（17,663 家机构、103 个字段：位置、NQS 总评级、核定名额、项目类型，以及老师手工加入、要求我们审慎对待的到最近火车站和公交站的距离），以 5—10 分钟视频加幻灯片和 Python 代码的形式向 ACECQA 汇报。",
                "小组作业以教育部顾问的身份开展：教育部希望在资源有限的情况下改善幼儿发展结果。数据包括 2021 年澳大利亚早期发展普查（AEDC，衡量在五个发展领域中有一个及以上（DV1）或两个及以上（DV2）领域发展脆弱的儿童比例）、机构名录、ABS SEIFA 社会经济劣势指数、偏远地区边界以及新增的 Google 评论数据。每组从六个关键业务问题中选三个，完成 10 页报告和代码；我们选择了 KBQ1、KBQ3 和 KBQ6。"
            ]
        },
        pointsTitle: {
            en: "The questions we answered",
            zh: "需要回答的问题"
        },
        points: {
            en: [
                "Individual (ACECQA): where should ACECQA and governments prioritise attention to improve access, quality and operational capacity in education and care services?",
                "Group KBQ1: which LGAs have the highest share of children vulnerable on two or more domains, and how do they compare on SEIFA, remoteness, population and transport access?",
                "Group KBQ3 (my lead): does the distribution and accessibility of services, including high-quality capacity and proximity to public transport, line up with AEDC outcomes across LGAs?",
                "Group KBQ6: what do Google Reviews say about services, and do higher ratings go with stronger AEDC outcomes?"
            ],
            zh: [
                "个人（ACECQA）：为提升机构的可达性、服务质量和运营容量，ACECQA 与政府应优先关注哪里？",
                "小组 KBQ1：哪些地方政府区域（LGA）两个及以上领域发展脆弱的儿童比例最高？它们在 SEIFA、偏远程度、人口规模和交通可达性上有何特征？",
                "小组 KBQ3（本人主导）：机构的分布和可达性（包括高质量服务容量与公共交通距离）是否与各 LGA 的 AEDC 结果相匹配？",
                "小组 KBQ6：Google 评论反映了什么？评分越高的地区，AEDC 结果是否也更好？"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Cleaned 17,663 approved early-learning services and matched 99.99% of them to ABS Remoteness Areas with a point-in-polygon join; an access–quality–capacity priority matrix showed the share rated Working Towards rising from 8% in major cities to 30% in very remote areas.",
            "In a team of 4 (my part: data processing and KBQ3), linked AEDC, SEIFA, service and transport data for 548 LGAs, lifting LGA name-match coverage from 95% to 99.8% with fuzzy and manual matching; partial correlations showed service–vulnerability links of up to −0.33 fall to about 0 once disadvantage and remoteness are controlled, and a five-factor score flagged 49 of 412 LGAs as high priority."
        ],
        zh: [
            "清洗 17,663 家获批早教与托育机构，用点面匹配将 99.99% 的机构对应到 ABS 偏远地区；“可达性—质量—容量”优先矩阵显示，“正在达标”的占比从大城市的 8% 升至极偏远地区的 30%。",
            "4 人小组中负责数据处理与 KBQ3：整合 548 个 LGA 的 AEDC、SEIFA、机构与交通数据，借助模糊匹配与人工核对把 LGA 名称匹配率从 95% 提高到 99.8%；偏相关分析显示，服务与发展脆弱率最高约 −0.33 的相关在控制社会经济与偏远程度后接近 0，五因素评分从 412 个 LGA 中识别出 49 个高优先地区。"
        ]
    },

    tags: [
        "Python",
        "pandas",
        "GeoPandas",
        "Shapely",
        "Spatial Joins",
        "matplotlib",
        "seaborn",
        "Fuzzy Matching",
        "Partial Correlation",
        "Policy Analytics"
    ],

    metrics: [
        {
            value: "17,663",
            label: {
                en: "Approved services cleaned and analysed (individual)",
                zh: "清洗并分析的获批机构（个人作业）"
            }
        },
        {
            value: "8% → 30%",
            label: {
                en: "Share rated Working Towards NQS, major cities vs very remote areas",
                zh: "“正在达标”评级占比：大城市对比极偏远地区"
            }
        },
        {
            value: "548 → 412",
            label: {
                en: "AEDC LGAs linked, and LGAs kept in the main KBQ3 analysis",
                zh: "完成匹配的 AEDC 地区数，以及进入 KBQ3 主分析的地区数"
            }
        },
        {
            value: "−0.33 → 0.00",
            label: {
                en: "Accessible high-quality places vs DV1: raw vs adjusted correlation",
                zh: "可达高质量名额与 DV1：原始相关对比控制后的偏相关"
            }
        },
        {
            value: "49",
            label: {
                en: "LGAs scoring 4 or 5 on the five-factor policy priority score",
                zh: "五因素政策优先评分达到 4 或 5 分的 LGA"
            }
        },
        {
            value: "r = 0.03",
            label: {
                en: "Weighted Google rating vs DV2 across LGAs (team KBQ6)",
                zh: "加权 Google 评分与 DV2 的相关（小组 KBQ6）"
            }
        }
    ],

    visuals: [
        {
            type: "image",
            src: "assets/img/projects/early-childhood/ind-transport-map.png",
            source: {
                en: "Individual assignment · my figure",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Median Distance to Public Transport by State and Remoteness Area",
                zh: "按州与偏远地区划分的机构到公共交通中位距离"
            },
            caption: {
                en: "Each of the 35 polygons is a state-specific ABS Remoteness Area, coloured by the median distance from its services to the nearest train or bus station. Access weakens sharply outside the cities; polygon size reflects land area, not the number of services.",
                zh: "35 个多边形各代表一个州内的 ABS 偏远地区类别，颜色为区内机构到最近火车站或公交站的中位距离。离开城市后可达性急剧变差；多边形大小反映的是面积，而非机构数量。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/ind-quality-by-remoteness.png",
            source: {
                en: "Individual assignment · my figure",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "NQS Rating Mix by Remoteness Area",
                zh: "各偏远地区的 NQS 评级构成"
            },
            caption: {
                en: "Meeting NQS dominates everywhere, but Working Towards NQS rises from 8% in major cities (n = 11,915) to 22% in remote and 30% in very remote areas (n = 134), while Exceeding NQS falls from 22% to 10–13%. The right panel zooms in on the rare top and bottom ratings so they are not misread.",
                zh: "各地区都以“达标”为主，但“正在达标”从大城市的 8%（n = 11,915）升至偏远地区的 22% 和极偏远地区的 30%（n = 134），“超标”则从 22% 降到 10%—13%。右侧小图放大了极少见的最高与最低评级，避免误读。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/ind-distance-by-rating.png",
            source: {
                en: "Individual assignment · my figure",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Distance to Public Transport by Overall Rating",
                zh: "不同评级机构到公共交通的距离"
            },
            caption: {
                en: "Medians sit close together (2.2–2.6 km for Exceeding, Meeting and Working Towards NQS), so transport access alone does not explain quality; Working Towards has the widest spread (IQR 1.2–6.8 km) and Excellent has only 27 services. Log scale because distance is highly right-skewed.",
                zh: "“超标”“达标”“正在达标”的中位距离都在 2.2—2.6 km，说明交通可达性本身解释不了质量差异；“正在达标”的离散度最大（四分位距 1.2—6.8 km），“卓越”只有 27 家。距离严重右偏，因此使用对数坐标。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/ind-capacity-heatmap.png",
            source: {
                en: "Individual assignment · my figure",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Operational Capacity: Median Approved Places by Program and Remoteness",
                zh: "运营容量：按项目类型与偏远程度的核定名额中位数"
            },
            caption: {
                en: "Long day care runs at a median of 73–74 places in major cities and inner regional areas but 41 in very remote areas; preschools that are part of a school shrink from 50 to 24. Cells with fewer than 30 service-program records are starred, and family day care is left out because approved places are largely unavailable.",
                zh: "长日托在大城市和内陆区域的核定名额中位数为 73—74，在极偏远地区只有 41；附属于学校的幼儿园从 50 降到 24。少于 30 条记录的格子以星号标注；家庭日托因名额数据基本缺失而未纳入。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/ind-priority-matrix.png",
            source: {
                en: "Individual assignment · my figure",
                zh: "个人作业 · 本人绘制"
            },
            title: {
                en: "Priority Matrix: Access, Quality and Scale by State and Remoteness",
                zh: "优先矩阵：按州与偏远程度看可达性、质量与规模"
            },
            caption: {
                en: "Each bubble is a state × remoteness segment of rated services: x is the median distance to public transport (log scale), y is the share rated Meeting NQS or above, size is the number of services (square-root scaled) and dashed lines are the national references. The worse-access, weaker-quality corner is made up of remote and very remote segments; hollow bubbles have fewer than 30 services.",
                zh: "每个气泡代表一个“州 × 偏远类别”的已评级机构群：横轴为到公共交通的中位距离（对数坐标），纵轴为“达标及以上”的占比，气泡大小为机构数量（平方根缩放），虚线为全国参考值。“可达性差、质量弱”的角落几乎都是偏远和极偏远地区；空心气泡表示少于 30 家机构。"
            }
        },
        {
            type: "gallery",
            source: {
                en: "Individual assignment · my figures (appendix)",
                zh: "个人作业 · 本人绘制（附录）"
            },
            title: {
                en: "Supporting Views from the Individual Analysis",
                zh: "个人分析的补充图表"
            },
            caption: {
                en: "Appendix charts used to cross-check the main findings. Click a figure to open it full size.",
                zh: "用来交叉验证主要结论的附录图表，点击可查看原图。"
            },
            images: [
                {
                    src: "assets/img/projects/early-childhood/ind-state-remoteness-distance.png",
                    title: {
                        en: "State × remoteness distance heatmap",
                        zh: "州 × 偏远程度的距离热力图"
                    },
                    caption: {
                        en: "A numerical check on the map: 1–2 km in most major-city segments, but 225–308 km in very remote NSW, QLD, WA and NT.",
                        zh: "对地图的数值核对：多数大城市区段为 1—2 km，而新州、昆州、西澳和北领地的极偏远地区达到 225—308 km。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/ind-bus-train.png",
                    title: {
                        en: "Bus vs train access by remoteness",
                        zh: "按偏远程度比较公交与火车可达性"
                    },
                    caption: {
                        en: "Median distance to the nearest bus station climbs much faster than to the nearest train station as areas become more remote.",
                        zh: "随着地区越来越偏远，到最近公交站的中位距离比到火车站的上升得更快。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/ind-state-quality.png",
                    title: {
                        en: "Share rated Meeting NQS or above by state",
                        zh: "各州“达标及以上”占比"
                    },
                    caption: {
                        en: "From 95.6% in Victoria to 78.1% in the Northern Territory.",
                        zh: "从维州的 95.6% 到北领地的 78.1%。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/ind-quality-gap.png",
                    title: {
                        en: "Major cities vs regional/remote gap by state",
                        zh: "各州大城市与区域/偏远地区的质量差距"
                    },
                    caption: {
                        en: "The gap is widest in WA (+10.1 points) and QLD (+6.9); the ACT's reversed gap rests on a very small regional group.",
                        zh: "西澳（+10.1 个百分点）和昆州（+6.9）的差距最大；首都领地的反向差距基于极小的区域样本。"
                    }
                }
            ]
        },
        {
            type: "table",
            source: {
                en: "Individual assignment · my analysis",
                zh: "个人作业 · 本人分析"
            },
            title: {
                en: "Analysis-specific Subsets Instead of Global Row Deletion",
                zh: "按分析目的建立子集，而非整体删行"
            },
            columns: {
                en: ["Analysis", "Rows kept", "Share of services", "Exclusion rule"],
                zh: ["分析", "保留行数", "占全部机构", "排除规则"]
            },
            rows: [
                [{ en: "Master dataset", zh: "主数据集" }, 17663, "100%", { en: "No global row deletion", zh: "不整体删行" }],
                [{ en: "Quality ratings", zh: "质量评级" }, 16336, "92.5%", { en: "Missing overall rating excluded", zh: "排除缺少总评级的机构" }],
                [{ en: "Capacity", zh: "运营容量" }, 17246, "97.6%", { en: "Missing approved places excluded", zh: "排除缺少核定名额的机构" }],
                [{ en: "Maps and remoteness join", zh: "地图与偏远地区匹配" }, 17653, "99.9%", { en: "Placeholder or invalid coordinates excluded", zh: "排除占位或无效坐标" }],
                [{ en: "Program-level comparison", zh: "按项目类型比较" }, 30193, "–", { en: "Long format: one service per program it offers", zh: "长表：每家机构按其开设的项目各占一行" }]
            ],
            caption: {
                en: "Each chart uses only the rows it needs, so a missing rating never removes a service from the transport or capacity analysis.",
                zh: "每张图只使用所需的数据行，因此缺少评级不会让机构从交通或容量分析中消失。"
            }
        },
        {
            type: "process",
            source: {
                en: "Group report · my part",
                zh: "小组报告 · 本人负责"
            },
            title: {
                en: "Group Data Pipeline: From Six Sources to One LGA Table",
                zh: "小组数据流程：从六个数据源到一张 LGA 分析表"
            },
            steps: {
                en: [
                    "Rebuild 11 AEDC sheets (2021)",
                    "Map LGAs to postcodes & suburbs",
                    "Clean services & flag >50 km",
                    "Spatial join to Remoteness Areas",
                    "Aggregate services to LGAs",
                    "Add SEIFA & remoteness controls"
                ],
                zh: [
                    "重建 11 张 AEDC 表（2021）",
                    "LGA 对应邮编与郊区",
                    "清洗机构数据，标记 >50 km",
                    "空间匹配偏远地区",
                    "机构汇总到 LGA",
                    "加入 SEIFA 与偏远程度控制变量"
                ]
            },
            caption: {
                en: "The LGA is the common unit because AEDC outcomes, SEIFA scores and service accessibility can all be aggregated and compared at that level.",
                zh: "选择 LGA 作为统一分析单位，因为 AEDC 结果、SEIFA 指数和服务可达性都能在这一层级汇总和比较。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report · my part",
                zh: "小组报告 · 本人负责"
            },
            title: {
                en: "Choosing the Transport-distance Cut-off Instead of Deleting Outliers",
                zh: "比较多个阈值来确定交通距离的极端值，而不是直接删除"
            },
            columns: {
                en: ["Cut-off (km)", "Services above", "Share of valid services"],
                zh: ["阈值（km）", "超过阈值的机构", "占有效机构比例"]
            },
            rows: [
                ["5", 4735, "26.8%"],
                ["10", 2600, "14.7%"],
                ["20", 1454, "8.2%"],
                ["35.7 (95th pct.)", 883, "5.0%"],
                ["50", 615, "3.5%"],
                ["100", 278, "1.6%"],
                ["200", 106, "0.6%"]
            ],
            highlightRow: 4,
            caption: {
                en: "Nearest public transport is the shorter of the train and bus distances (median 2.3 km, maximum 620 km, 17,653 services with valid locations). Services beyond 50 km were flagged as extreme and left out of the main accessibility analysis, but kept in the full cleaned dataset.",
                zh: "最近公共交通距离取火车站与公交站距离中较小者（中位数 2.3 km，最大 620 km，共 17,653 家位置有效的机构）。超过 50 km 的机构标记为极端值，不进入主要可达性分析，但仍保留在完整清洗数据中。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report · my part",
                zh: "小组报告 · 本人负责"
            },
            title: {
                en: "Building the KBQ3 Analysis Sample",
                zh: "KBQ3 分析样本的构建过程"
            },
            columns: {
                en: ["Step", "LGAs", "Note"],
                zh: ["步骤", "LGA 数量", "说明"]
            },
            rows: [
                [{ en: "AEDC LGAs (2021)", zh: "AEDC 中的 LGA（2021）" }, 548, { en: "DV1 and DV2 combined", zh: "合并 DV1 与 DV2" }],
                [{ en: "Matched to services by state + cleaned name", zh: "按州 + 清洗后的名称匹配机构" }, 472, { en: "76 left unmatched", zh: "76 个未匹配" }],
                [{ en: "After reviewing fuzzy suggestions", zh: "审核模糊匹配建议后" }, 482, { en: "10 validated name corrections", zh: "10 条经核对的名称修正" }],
                [{ en: "Flagged: fewer than 30 children assessed", zh: "标记：受测儿童少于 30 人" }, 128, { en: "Small samples make rates unstable", zh: "样本过小导致比率不稳定" }],
                [{ en: "Flagged: DV1 below DV2 (logic error)", zh: "标记：DV1 低于 DV2（逻辑错误）" }, 2, { en: "Impossible by definition", zh: "按定义不可能出现" }],
                [{ en: "Main analysis sample", zh: "主分析样本" }, 412, { en: "All with SEIFA and remoteness", zh: "全部具备 SEIFA 与偏远程度数据" }]
            ],
            highlightRow: 5,
            caption: {
                en: "The 66 LGAs still unmatched hold only 1.4% of the 287,449 children assessed, and their median DV2 (10.0%) is close to the matched LGAs' (11.6%), so the exclusion is unlikely to bias the results.",
                zh: "仍未匹配的 66 个 LGA 只占 287,449 名受测儿童的 1.4%，其 DV2 中位数（10.0%）与已匹配地区（11.6%）接近，排除它们不太可能造成偏差。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-dv2-distribution.png",
            source: {
                en: "Group report · KBQ1 (team)",
                zh: "小组报告 · KBQ1（小组）"
            },
            title: {
                en: "KBQ1: Distribution of DV2 Rates across 548 LGAs",
                zh: "KBQ1：548 个 LGA 的 DV2 比率分布"
            },
            caption: {
                en: "Right-skewed: most LGAs sit near the 11.3% median, the mean is 13.0% and the 90th percentile 21.1%, while a few areas exceed 70%. Vulnerability is concentrated in a small number of places.",
                zh: "分布明显右偏：多数 LGA 在 11.3% 的中位数附近，均值 13.0%，第 90 百分位 21.1%，少数地区超过 70%。发展脆弱集中在少数地方。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-top20-dv2.png",
            source: {
                en: "Group report · KBQ1 (team)",
                zh: "小组报告 · KBQ1（小组）"
            },
            title: {
                en: "KBQ1: Top 20 LGAs by DV2 Rate",
                zh: "KBQ1：DV2 比率最高的 20 个 LGA"
            },
            caption: {
                en: "Among LGAs with at least 30 valid records, Tiwi Islands reaches 81.2% (26 of 32 children), Anangu Pitjantjatjara Yankunytjatjara 77.8% and MacDonnell 74.5%; even the 20th, Derby-West Kimberley, is 30.6%, almost three times the median. The ranking shows intensity, not the number of vulnerable children.",
                zh: "在有效记录不少于 30 条的 LGA 中，提维群岛达 81.2%（32 名儿童中 26 名），APY 地区 77.8%，麦克唐奈 74.5%；排第 20 的德比—西金伯利也有 30.6%，几乎是中位数的三倍。排名反映的是脆弱程度，而非脆弱儿童的绝对数量。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-top20-profile.png",
            source: {
                en: "Group report · KBQ1 (team)",
                zh: "小组报告 · KBQ1（小组）"
            },
            title: {
                en: "KBQ1: Structural Profile of the Top 20 High-DV2 LGAs",
                zh: "KBQ1：DV2 最高 20 个 LGA 的结构特征"
            },
            caption: {
                en: "15 of the 20 are in SEIFA IRSD decile 1, 15 are Very Remote and 2 Remote (none in a major city), most are small communities, and many lie far from the nearest train or bus stop.",
                zh: "20 个地区中有 15 个处于 SEIFA IRSD 第 1 十分位（最弱势），15 个为极偏远、2 个为偏远（没有一个在大城市），多数人口规模小，且不少离最近的火车站或公交站很远。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-sample-cells.png",
            source: {
                en: "Group report · KBQ3 · my figure",
                zh: "小组报告 · KBQ3 · 本人绘制"
            },
            title: {
                en: "KBQ3: LGA Sample Size by SEIFA Quintile and Remoteness",
                zh: "KBQ3：按 SEIFA 五分位与偏远程度的 LGA 样本量"
            },
            caption: {
                en: "Major cities cluster in the least disadvantaged quintile (67 LGAs) while outer regional and very remote areas lean disadvantaged, and some remote cells are very small. This is why SEIFA and remoteness enter the adjusted analysis as controls.",
                zh: "大城市集中在最不弱势的五分位（67 个 LGA），外区域和极偏远地区偏向弱势，部分偏远格子样本很小。因此在调整分析中把 SEIFA 与偏远程度作为控制变量。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-raw-partial-dv2.png",
            source: {
                en: "Group report · KBQ3 · my figure",
                zh: "小组报告 · KBQ3 · 本人绘制"
            },
            title: {
                en: "KBQ3: Raw vs Adjusted Associations with DV2",
                zh: "KBQ3：服务指标与 DV2 的原始相关与调整后相关"
            },
            caption: {
                en: "Blue bars are raw Spearman correlations; orange bars are partial correlations after controlling for SEIFA and remoteness. Most associations shrink to almost zero, and approved places per 1,000 children turns weakly positive, so capacity alone is not a protective factor.",
                zh: "蓝色为原始 Spearman 相关，橙色为控制 SEIFA 与偏远程度后的偏相关。多数关联缩小到接近 0，“每千名儿童核定名额”甚至转为弱正相关，说明容量本身并不是保护因素。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report · KBQ3 · my analysis",
                zh: "小组报告 · KBQ3 · 本人分析"
            },
            title: {
                en: "KBQ3: Service Indicators vs Developmental Vulnerability",
                zh: "KBQ3：服务指标与发展脆弱率的相关"
            },
            columns: {
                en: ["Service indicator", "DV1 raw", "DV1 adjusted", "DV2 raw", "DV2 adjusted"],
                zh: ["服务指标", "DV1 原始", "DV1 调整后", "DV2 原始", "DV2 调整后"]
            },
            rows: [
                [{ en: "Approved places per 1,000", zh: "每千名儿童核定名额" }, "−0.30", "+0.11", "−0.28", "+0.13"],
                [{ en: "High-quality places per 1,000", zh: "每千名儿童高质量名额" }, "−0.28", "−0.03", "−0.24", "+0.01"],
                [{ en: "Accessible high-quality places per 1,000 (≤5 km)", zh: "每千名儿童可达高质量名额（≤5 km）" }, "−0.33", "−0.00", "−0.30", "+0.03"],
                [{ en: "High-quality service ratio", zh: "高质量机构占比" }, "−0.20", "−0.04", "−0.16", "−0.00"],
                [{ en: "High-quality services per 1,000", zh: "每千名儿童高质量机构数" }, "−0.25", "−0.05", "−0.20", "+0.00"],
                [{ en: "Services per 1,000", zh: "每千名儿童机构数" }, "−0.12", "+0.01", "−0.13", "+0.00"],
                [{ en: "Median transport distance (km)", zh: "到公共交通的中位距离（km）" }, "+0.15", "+0.02", "+0.12", "−0.01"],
                [{ en: "Capacity-weighted transport distance", zh: "按容量加权的交通距离" }, "+0.12", "+0.03", "+0.10", "+0.02"],
                [{ en: "Share of services >5 km from transport", zh: "距交通 >5 km 的机构占比" }, "+0.20", "+0.01", "+0.18", "−0.02"]
            ],
            caption: {
                en: "Spearman correlations across 410–412 LGAs (353 with transport data); \"per 1,000\" means per 1,000 children with valid AEDC scores. Adjusted values are rank-based partial correlations controlling for SEIFA IRSD score and remoteness. High quality means rated Exceeding NQS or Excellent.",
                zh: "基于 410—412 个 LGA 的 Spearman 相关（有交通数据的为 353 个）；“每千名”指每千名有效 AEDC 受测儿童。调整后为控制 SEIFA IRSD 分数与偏远程度的秩偏相关。“高质量”指评级为“超标”或“卓越”。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/early-childhood/grp-priority-map.png",
            source: {
                en: "Group report · KBQ3 · my figure",
                zh: "小组报告 · KBQ3 · 本人绘制"
            },
            title: {
                en: "KBQ3: Policy Priority Score by LGA",
                zh: "KBQ3：各 LGA 的政策优先评分"
            },
            caption: {
                en: "Each LGA scores 0–5, one point each for high DV1, high DV2, high socio-economic disadvantage, no accessible high-quality places within 5 km and poor transport access. The highest scores cluster in the Northern Territory, remote Western Australia, northern Queensland and several regional LGAs in the east; grey LGAs are outside the analysis sample.",
                zh: "每个 LGA 得 0—5 分：DV1 高、DV2 高、社会经济高度弱势、5 km 内没有可达的高质量名额、交通可达性差，各计 1 分。高分地区集中在北领地、西澳偏远地区、昆州北部以及东部的若干区域性 LGA；灰色为未进入分析样本的地区。"
            }
        },
        {
            type: "table",
            source: {
                en: "Group report · KBQ3 · my analysis",
                zh: "小组报告 · KBQ3 · 本人分析"
            },
            title: {
                en: "KBQ3: What Each Priority Score Looks Like",
                zh: "KBQ3：各优先评分的地区特征"
            },
            columns: {
                en: ["Score", "LGAs", "Mean DV1", "Mean DV2", "Median SEIFA", "Median transport distance (km)"],
                zh: ["评分", "LGA 数", "DV1 均值", "DV2 均值", "SEIFA 中位数", "交通中位距离（km）"]
            },
            rows: [
                ["5", 6, "40.8%", "24.2%", 916, "26.8"],
                ["4", 43, "42.2%", "27.2%", 907, "12.9"],
                ["3", 50, "31.3%", "20.9%", 939, "2.4"],
                ["2", 83, "22.9%", "11.7%", 974, "21.0"],
                ["1", 83, "20.5%", "10.4%", 988, "2.3"],
                ["0", 147, "18.7%", "9.1%", 1021, "1.9"]
            ],
            caption: {
                en: "Thresholds are quartiles of the 412-LGA sample: DV1 ≥ 28.4%, DV2 ≥ 15.5%, SEIFA score ≤ 946, median transport distance ≥ 11.4 km, and zero accessible high-quality places (the bottom quartile). The six LGAs scoring 5 are Roper Gulf (NT), North Burnett (QLD), Tenterfield (NSW), Break O'Day (TAS), Dorset (TAS) and Somerset (QLD).",
                zh: "阈值取 412 个 LGA 样本的四分位：DV1 ≥ 28.4%、DV2 ≥ 15.5%、SEIFA 分数 ≤ 946、交通中位距离 ≥ 11.4 km，以及可达高质量名额为 0（即最低四分位）。得 5 分的六个地区为 Roper Gulf（北领地）、North Burnett（昆州）、Tenterfield（新州）、Break O'Day（塔州）、Dorset（塔州）和 Somerset（昆州）。"
            }
        },
        {
            type: "gallery",
            source: {
                en: "Group report · KBQ3 · my figures",
                zh: "小组报告 · KBQ3 · 本人绘制"
            },
            title: {
                en: "More from KBQ3",
                zh: "KBQ3 补充图表"
            },
            images: [
                {
                    src: "assets/img/projects/early-childhood/grp-raw-partial-dv1.png",
                    title: {
                        en: "Raw vs adjusted associations with DV1",
                        zh: "与 DV1 的原始相关与调整后相关"
                    },
                    caption: {
                        en: "The same pattern as DV2: the protective-looking raw correlations largely disappear once SEIFA and remoteness are held constant.",
                        zh: "与 DV2 一致：看似有保护作用的原始相关，在控制 SEIFA 与偏远程度后基本消失。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-city-transport.png",
                    title: {
                        en: "Major cities only: DV2 vs transport access",
                        zh: "仅大城市：DV2 与交通可达性"
                    },
                    caption: {
                        en: "Across 134 metropolitan LGAs, DV2 rises weakly with distance to public transport (Spearman ρ = 0.27); bubble size reflects the number of children assessed.",
                        zh: "在 134 个大城市 LGA 中，DV2 随到公共交通的距离略有上升（Spearman ρ = 0.27）；气泡大小代表受测儿童人数。"
                    }
                }
            ]
        },
        {
            type: "gallery",
            source: {
                en: "Group report · KBQ1 & KBQ6 (team)",
                zh: "小组报告 · KBQ1 与 KBQ6（小组）"
            },
            title: {
                en: "Team Analyses: KBQ1 Priority Matrix and KBQ6 Google Reviews",
                zh: "小组分析：KBQ1 优先矩阵与 KBQ6 Google 评论"
            },
            caption: {
                en: "Parts of the report written by teammates and agreed as a group. Click a figure to open it full size.",
                zh: "以下为组员完成、经小组共同讨论的部分，点击可查看原图。"
            },
            images: [
                {
                    src: "assets/img/projects/early-childhood/grp-priority-matrix-kbq1.png",
                    title: {
                        en: "KBQ1 policy priority matrix",
                        zh: "KBQ1 政策优先矩阵"
                    },
                    caption: {
                        en: "Most of the top 20 sit in the high-DV2, low-SEIFA corner, and many have larger bubbles (longer distances to transport).",
                        zh: "前 20 个地区大多位于“高 DV2、低 SEIFA”区域，且不少气泡较大（离交通更远）。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-review-coverage.png",
                    title: {
                        en: "Google review coverage by LGA",
                        zh: "各 LGA 的 Google 评论覆盖率"
                    },
                    caption: {
                        en: "Only 356 services had usable ratings; coverage peaks at 11.8% in Cambridge and is around 5–6% in most LGAs.",
                        zh: "只有 356 家机构有可用评分；覆盖率最高的 Cambridge 为 11.8%，多数 LGA 约 5%—6%。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-review-keywords.png",
                    title: {
                        en: "Top TF-IDF keywords in reviews",
                        zh: "评论中的 TF-IDF 高频关键词"
                    },
                    caption: {
                        en: "Reviews centre on staff and the care atmosphere (love, staff, great, friendly) rather than facilities or curriculum.",
                        zh: "评论集中在员工和照护氛围（love、staff、great、friendly），较少涉及设施或课程。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-review-low.png",
                    title: {
                        en: "Keywords in 1- and 2-star reviews",
                        zh: "1—2 星评论的关键词"
                    },
                    caption: {
                        en: "Staff and teachers still dominate, but management, bad, bullying, rude and terrible become visible.",
                        zh: "员工和老师仍是主题，但 management、bad、bullying、rude、terrible 等词明显增多。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-rating-vs-dv2.png",
                    title: {
                        en: "Weighted Google rating vs DV2",
                        zh: "加权 Google 评分与 DV2"
                    },
                    caption: {
                        en: "Pearson r = 0.03 and Spearman ρ ≈ 0.05 across LGAs: parent satisfaction does not track child development outcomes.",
                        zh: "各 LGA 的 Pearson r = 0.03、Spearman ρ 约 0.05：家长满意度与儿童发展结果基本无关。"
                    }
                },
                {
                    src: "assets/img/projects/early-childhood/grp-keyword-diff.png",
                    title: {
                        en: "Keyword differences: high- vs low-DV2 LGAs",
                        zh: "高 DV2 与低 DV2 地区的关键词差异"
                    },
                    caption: {
                        en: "High-DV2 areas mention staff, welcome and helpfulness more (staff +5.1 points); low-DV2 areas mention environment, nurturing and parents more. The differences are small.",
                        zh: "高 DV2 地区更常提到员工、欢迎和乐于助人（staff 高 5.1 个百分点）；低 DV2 地区更常提到环境、培育和家长参与。差异不大。"
                    }
                }
            ]
        }
    ],

    details: {
        en: [
            {
                title: "Individual · Data Preparation (ACECQA register)",
                bullets: [
                    "Audited 17,663 services across 103 columns: no duplicate approval numbers; overall rating missing for 1,327 services (7.5%), approved places for 417 (2.4%) and state and postcode for 10.",
                    "Standardised text and missing-value labels, converted numbers, dates and postcodes (four digits with leading zeros), stored NQS ratings as an ordered category and turned the seven program flags into 0/1 fields.",
                    "Parsed the geometry field into longitude and latitude and found 10 services sharing one placeholder point outside Australia with no state or postcode; they were excluded only from maps, while 9 genuine island locations (Christmas Island and the Torres Strait) were kept.",
                    "Created helper variables: nearest public transport as the shorter of the train and bus distances (median 2.3 km, maximum 620 km), approval year, number of programs offered, and log and 99th-percentile-capped versions for skewed charts; reshaped program flags into a long table of 30,193 service–program records.",
                    "Used analysis-specific subsets instead of deleting rows globally (16,336 rated services for quality, 17,246 for capacity, 17,653 for maps), and documented every rule in before-and-after audit tables."
                ]
            },
            {
                title: "Individual · Spatial Join to ABS Remoteness Areas",
                bullets: [
                    "Read the ABS 2021 Remoteness Areas shapefile (GDA2020), skipped 19 records with no geometry (offshore, migratory and no-usual-address categories) and kept 35 state-specific remoteness polygons.",
                    "Matched every service point to a polygon with Shapely, using covers() so that points on a boundary still match: 17,652 of 17,653 services were placed; the single unmatched service is an island kindergarten in the Torres Strait.",
                    "Result: 12,787 services in major cities (72.4%), 3,158 inner regional, 1,334 outer regional, 219 remote and 154 very remote, which became the backbone of every comparison."
                ]
            },
            {
                title: "Individual · Findings for ACECQA",
                bullets: [
                    "Access weakens sharply with remoteness: the median distance to public transport is 1–2 km in most major-city segments but 225–308 km in very remote NSW, Queensland, WA and the Northern Territory.",
                    "Quality declines with remoteness: Working Towards NQS rises from 8% in major cities to 22% in remote and 30% in very remote areas, while Exceeding NQS falls from 22% to 10–13%.",
                    "Transport access alone does not explain quality: median distances are 2.2–2.6 km for Exceeding, Meeting and Working Towards NQS services, although Working Towards has the widest spread.",
                    "Capacity differs by program and place: long day care has a median of 73–74 approved places in major cities and inner regional areas but 41 in very remote areas, and school-based preschools drop from 50 to 24.",
                    "By state, the share rated Meeting NQS or above ranges from 95.6% in Victoria to 78.1% in the Northern Territory; the city–regional gap is largest in WA (+10.1 points) and Queensland (+6.9).",
                    "The priority matrix combines access, quality and scale for each state × remoteness segment against national benchmarks (about 2.3 km and 91% Meeting NQS or above); the worse-access, weaker-quality corner is made up of remote and very remote segments, several of them small."
                ]
            },
            {
                title: "Individual · Recommendations and Limitations",
                bullets: [
                    "Targeted accessibility support for remote and very remote segments with long public transport distances.",
                    "Quality improvement support where Working Towards NQS shares are highest, mainly regional and remote areas.",
                    "Capacity planning by program type, using the program-level capacity differences to show where supply may need to grow.",
                    "Data governance: validate manually added location variables, since placeholder coordinates were found in the register.",
                    "Limitations: distance measures proximity, not travel time; some services have no rating; some remote segments are small; the analysis is explanatory, not causal. The main message is to move from national or state averages to targeted, segment-level priorities."
                ]
            },
            {
                title: "Group · Data Processing (my part)",
                bullets: [
                    "AEDC: rebuilt 11 multi-sheet Excel tables with merged headers into tidy tables, kept 2021 only, filled missing percentages from the state summaries, spread each state's remaining valid-score total across LGAs with missing counts, and recomputed counts from percentages so that every row is internally consistent.",
                    "LGA ↔ postcode: cleaned LGA names (removing words such as City, Shire and Regional), matched 522 exactly, 8 by fuzzy matching (SequenceMatcher ≥ 0.85) and resolved the remaining 17 with a documented manual table, so 547 of 548 LGAs received a postcode.",
                    "Services: standardised text and null-like values, rebuilt four-digit postcodes, set negative distances to missing, flagged invalid coordinates and placeholder addresses (10 services) and computed the nearest public transport distance.",
                    "Outliers: instead of deleting long distances, compared ten cut-offs from 5 to 200 km and flagged the 615 services (3.5%) beyond 50 km as extreme, excluded from the main accessibility analysis but kept in the full dataset; also grouped access into five bands from ≤0.4 km to >50 km.",
                    "Remoteness: spatially joined services to the ABS Remoteness Areas with GeoPandas after checking and aligning coordinate systems (17,652 matched).",
                    "Exported analysis-ready files for the team with an audit table: full dataset 17,663 rows, spatial 17,653, main transport 17,038, quality 16,336, quality + transport 15,763 and the 615 extreme records kept separately."
                ]
            },
            {
                title: "Group · KBQ1 Developmental Vulnerability and LGA Profiles (team)",
                bullets: [
                    "DV2 across 548 LGAs is right-skewed: median 11.3%, mean 13.0%, 90th percentile 21.1% and a maximum of 81.2%.",
                    "Excluding LGAs with fewer than 30 valid records, Tiwi Islands (81.2%), Anangu Pitjantjatjara Yankunytjatjara (77.8%) and MacDonnell (74.5%) lead the ranking, which measures intensity rather than the number of vulnerable children.",
                    "15 of the top 20 LGAs are in SEIFA IRSD decile 1, 15 are Very Remote and 2 Remote, none are in a major city, most have small populations, and many are far from public transport: vulnerability is place-based."
                ]
            },
            {
                title: "Group · KBQ3 Service Distribution vs AEDC Outcomes (my part)",
                bullets: [
                    "Service indicators: defined high quality as Exceeding NQS or Excellent (with Meeting NQS or above as a sensitivity check) and poor access as more than 5 km from public transport, then built LGA-level supply, quality, accessible high-quality capacity (high-quality places within 5 km of public transport) and transport measures, including a capacity-weighted median distance, all standardised per 1,000 children with valid AEDC scores.",
                    "Sample: combined DV1 and DV2, flagged 128 LGAs with fewer than 30 children and 2 with DV1 below DV2, matched AEDC to services by state and cleaned name (472), reviewed the top-5 fuzzy suggestions for the 76 unmatched and applied 10 validated corrections (482); the final main sample is 412 LGAs.",
                    "Controls: merged SEIFA IRSD 2021 by LGA code with a one-to-one check (547 of 548 matched) and derived each LGA's remoteness from its services' Remoteness Areas (dominant category and mean score), then checked SEIFA quintile × remoteness cell sizes before adjusting.",
                    "Raw vs adjusted: raw Spearman correlations with DV1 and DV2 were −0.12 to −0.33 for supply and quality indicators and +0.10 to +0.20 for distance indicators; after rank-based partial correlation controlling for SEIFA and remoteness, all fell within ±0.05 except approved places per 1,000, which turned weakly positive (+0.11 for DV1, +0.13 for DV2).",
                    "Interpretation: service shortages travel with disadvantage and remoteness rather than acting as an independent driver of vulnerability. Within major cities (134 LGAs), DV2 still rises weakly with distance to transport (ρ = 0.27), so access matters most in combination with context.",
                    "Policy priority score (0–5): one point each for DV1 and DV2 in the top quarter, SEIFA in the bottom quarter, no accessible high-quality places within 5 km and median transport distance in the top quarter. 6 LGAs score 5 and 43 score 4; LGAs scoring 4 or 5 are spread across Queensland (10), the Northern Territory (9), WA (9), SA (8), Tasmania (7) and NSW (5), and are mapped on ABS LGA boundaries."
                ]
            },
            {
                title: "Group · KBQ6 Insights from Google Reviews (team)",
                bullets: [
                    "Reviews were de-duplicated and matched to services by normalised name similarity (score ≥ 70); only 356 services had usable ratings, so the analysis treats reviews as a view of parent experience, not an official quality measure.",
                    "TF-IDF with stemming and domain stop-words shows reviews centre on staff and atmosphere (love, staff, great, friendly); 1- and 2-star reviews add management, bad, bullying and rude.",
                    "Review-weighted Google ratings show almost no relationship with DV2 across LGAs (Pearson 0.03), and keyword differences between high- and low-DV2 areas are small, so ratings capture satisfaction rather than developmental outcomes."
                ]
            },
            {
                title: "Group · Conclusions and Limitations",
                bullets: [
                    "Developmental vulnerability is concentrated in disadvantaged, remote and small communities, and service gaps overlap with these conditions; improving outcomes needs accessible high-quality services together with transport connectivity and broader support, not just more services.",
                    "Limitations: datasets from different sources and geographic levels can introduce matching errors; transport variables were constructed, not official; review coverage is low; all data are a single 2021 snapshot; results are associations, not causal effects; and the priority score is a decision-support tool whose indicators and thresholds involve judgement."
                ]
            }
        ],

        zh: [
            {
                title: "个人 · 数据准备（ACECQA 机构名录）",
                bullets: [
                    "审计 17,663 家机构、103 个字段：审批编号没有重复；1,327 家（7.5%）缺少总评级，417 家（2.4%）缺少核定名额，10 家缺少州和邮编。",
                    "统一文本和缺失值标记，转换数值、日期和邮编（补足四位前导零），将 NQS 评级设为有序类别，并把 7 个项目字段转为 0/1。",
                    "从 geometry 字段解析经纬度，发现 10 家机构共用澳洲境外的同一个占位坐标且没有州和邮编，只在地图分析中排除；同时保留了 9 个真实的海岛位置（圣诞岛和托雷斯海峡）。",
                    "构造辅助变量：最近公共交通距离取火车站与公交站距离的较小值（中位数 2.3 km，最大 620 km）、审批年份、开设项目数，以及用于偏态作图的对数和 99 分位截尾版本；并把项目字段整理成 30,193 条“机构—项目”长表。",
                    "按分析目的建立子集而不整体删行（质量分析 16,336 家已评级机构、容量分析 17,246 家、地图 17,653 家），所有规则都记录在清洗前后的审计表中。"
                ]
            },
            {
                title: "个人 · 与 ABS 偏远地区的空间匹配",
                bullets: [
                    "读取 ABS 2021 偏远地区 shapefile（GDA2020），跳过 19 条没有几何形状的记录（离岸、流动和无常住地址类别），保留 35 个按州划分的偏远地区多边形。",
                    "用 Shapely 将每个机构点匹配到多边形，使用 covers() 以保证落在边界上的点也能匹配：17,653 家中有 17,652 家成功匹配，唯一未匹配的是托雷斯海峡的一所海岛幼儿园。",
                    "结果：大城市 12,787 家（72.4%），内陆区域 3,158 家，外区域 1,334 家，偏远 219 家，极偏远 154 家，成为后续所有比较的基础。"
                ]
            },
            {
                title: "个人 · 给 ACECQA 的发现",
                bullets: [
                    "可达性随偏远程度急剧下降：多数大城市区段到公共交通的中位距离为 1—2 km，而新州、昆州、西澳和北领地的极偏远地区达到 225—308 km。",
                    "质量随偏远程度下降：“正在达标”从大城市的 8% 升至偏远地区的 22% 和极偏远地区的 30%，“超标”则从 22% 降至 10%—13%。",
                    "交通可达性本身解释不了质量：“超标”“达标”“正在达标”机构的中位距离都在 2.2—2.6 km，只是“正在达标”的离散度最大。",
                    "容量因项目类型和地区而异：长日托在大城市和内陆区域的核定名额中位数为 73—74，在极偏远地区为 41；附属于学校的幼儿园从 50 降到 24。",
                    "按州看，“达标及以上”占比从维州的 95.6% 到北领地的 78.1%；城市与区域的差距在西澳（+10.1 个百分点）和昆州（+6.9）最大。",
                    "优先矩阵把每个“州 × 偏远类别”的可达性、质量和规模放在一起，并与全国基准（约 2.3 km、91% 达标及以上）比较；“可达性差、质量弱”的角落全是偏远和极偏远区段，其中几个样本较小。"
                ]
            },
            {
                title: "个人 · 建议与局限",
                bullets: [
                    "定向的可达性支持：优先关注公共交通距离很长的偏远和极偏远区段。",
                    "质量提升支持：重点放在“正在达标”占比最高的地区，主要是区域和偏远地区。",
                    "按项目类型做容量规划：利用不同项目的容量差异判断哪里需要扩充供给。",
                    "数据治理：对手工加入的位置变量做校验，名录中已经发现了占位坐标。",
                    "局限：距离只代表远近而非实际通行时间；部分机构没有评级；部分偏远区段样本小；分析是解释性的，不代表因果。核心建议是从全国或州平均值转向更精细的区段级优先排序。"
                ]
            },
            {
                title: "小组 · 数据处理（本人负责）",
                bullets: [
                    "AEDC：把 11 张多表头的 Excel 表重建为整洁的数据表，只保留 2021 年；用州汇总值补缺失百分比，把各州剩余的有效人数平均分配给缺失计数的 LGA，并由百分比反算人数，保证每行内部一致。",
                    "LGA 与邮编对应：清洗 LGA 名称（去掉 City、Shire、Regional 等词），522 个精确匹配，8 个通过模糊匹配（SequenceMatcher ≥ 0.85），其余 17 个用有记录的人工对照表解决，548 个 LGA 中 547 个获得邮编。",
                    "机构数据：统一文本和类空值，重建四位邮编，把负距离设为缺失，标记无效坐标和占位地址（10 家），并计算最近公共交通距离。",
                    "极端值：没有直接删除远距离记录，而是比较了 5—200 km 的 10 个阈值，把超过 50 km 的 615 家（3.5%）标记为极端值，不进入主要可达性分析但保留在完整数据中；同时按 ≤0.4 km 到 >50 km 分为五档可达性。",
                    "偏远程度：检查并统一坐标系后，用 GeoPandas 将机构与 ABS 偏远地区做空间连接（17,652 家匹配成功）。",
                    "为小组导出可直接分析的文件并附审计表：完整数据 17,663 行，空间数据 17,653 行，主要交通分析 17,038 行，质量 16,336 行，质量 + 交通 15,763 行，615 条极端记录单独保存。"
                ]
            },
            {
                title: "小组 · KBQ1 发展脆弱性与 LGA 画像（小组）",
                bullets: [
                    "548 个 LGA 的 DV2 分布右偏：中位数 11.3%，均值 13.0%，第 90 百分位 21.1%，最大值 81.2%。",
                    "排除有效记录少于 30 条的地区后，提维群岛（81.2%）、APY 地区（77.8%）和麦克唐奈（74.5%）排名最高；排名衡量的是脆弱程度，而非脆弱儿童人数。",
                    "前 20 个 LGA 中 15 个处于 SEIFA IRSD 第 1 十分位，15 个极偏远、2 个偏远，没有一个在大城市，多数人口少，且不少离公共交通很远：发展脆弱具有明显的地域性。"
                ]
            },
            {
                title: "小组 · KBQ3 服务分布与 AEDC 结果（本人负责）",
                bullets: [
                    "服务指标：把“高质量”定义为“超标”或“卓越”（以“达标及以上”做敏感性检验），把“交通差”定义为距公共交通 5 km 以上；在 LGA 层面构建供给、质量、可达高质量容量（距公共交通 5 km 内的高质量名额）和交通指标，包括按容量加权的中位距离，全部按每千名有效 AEDC 受测儿童标准化。",
                    "样本：合并 DV1 与 DV2，标记 128 个受测儿童少于 30 人的 LGA 和 2 个 DV1 低于 DV2 的逻辑错误；按州 + 清洗后名称匹配机构（472 个），对 76 个未匹配地区审核前 5 个模糊匹配建议并应用 10 条经核对的修正（482 个）；最终主样本为 412 个 LGA。",
                    "控制变量：按 LGA 代码合并 SEIFA IRSD 2021 并做一对一校验（548 个中 547 个匹配），由区内机构所属的偏远地区推算每个 LGA 的偏远程度（主导类别与平均分），并在调整前检查 SEIFA 五分位 × 偏远程度的格子样本量。",
                    "原始与调整后：供给与质量指标和 DV1、DV2 的原始 Spearman 相关为 −0.12 到 −0.33，距离指标为 +0.10 到 +0.20；控制 SEIFA 与偏远程度做秩偏相关后，除“每千名儿童核定名额”转为弱正相关（DV1 +0.11、DV2 +0.13）外，其余都落在 ±0.05 以内。",
                    "解读：服务短缺与社会经济弱势和偏远程度相伴出现，而不是独立推高脆弱率的因素。在大城市内部（134 个 LGA），DV2 仍随交通距离略有上升（ρ = 0.27），说明可达性要结合具体环境来看。",
                    "政策优先评分（0—5）：DV1、DV2 处于最高四分位，SEIFA 处于最低四分位，5 km 内没有可达高质量名额，交通中位距离处于最高四分位，各计 1 分。6 个 LGA 得 5 分、43 个得 4 分；4 分及以上的地区分布在昆州（10）、北领地（9）、西澳（9）、南澳（8）、塔州（7）和新州（5），并绘制在 ABS LGA 边界地图上。"
                ]
            },
            {
                title: "小组 · KBQ6 Google 评论洞察（小组）",
                bullets: [
                    "评论去重后按标准化名称相似度（≥ 70 分）匹配到机构；只有 356 家机构有可用评分，因此只把评论当作家长体验的参考，而非官方质量指标。",
                    "经词干化和领域停用词处理的 TF-IDF 显示，评论集中在员工与氛围（love、staff、great、friendly）；1—2 星评论中多出 management、bad、bullying、rude 等词。",
                    "按评论数加权的 Google 评分与各 LGA 的 DV2 几乎无关（Pearson 0.03），高、低 DV2 地区的关键词差异也很小：评分反映的是满意度，而不是儿童发展结果。"
                ]
            },
            {
                title: "小组 · 结论与局限",
                bullets: [
                    "发展脆弱集中在社会经济弱势、偏远和人口少的社区，服务缺口与这些条件高度重叠；改善结果不能只靠增加机构数量，而要把可达的高质量服务、交通连接和更广泛的社区支持结合起来。",
                    "局限：不同来源和地理层级的数据可能带来匹配误差；交通变量是构造的而非官方数据；评论覆盖率低；所有数据都是 2021 年的单一时点；结论是相关而非因果；优先评分是辅助决策工具，指标与阈值的选择带有主观判断。"
                ]
            }
        ]
    },

    code: [
        {
            title: {
                en: "Separating placeholder coordinates from genuine island locations",
                zh: "区分占位坐标与真实的海岛位置"
            },
            language: "Python · pandas",
            source: {
                en: "Individual assignment · my code",
                zh: "个人作业 · 本人代码"
            },
            caption: {
                en: "A plain mainland bounding box would have dropped Christmas Island and the Torres Strait; the placeholder test removes only the 10 records that share one fake point.",
                zh: "如果只用澳洲本土的经纬度范围，会误删圣诞岛和托雷斯海峡的机构；占位点检测只排除共用同一个假坐标的 10 条记录。"
            },
            code: `geom = df["geometry"].astype("string").str.extract(r"c\\(([-\\d\\.]+),\\s*([-\\d\\.]+)\\)")
df["lon"] = pd.to_numeric(geom[0], errors="coerce")
df["lat"] = pd.to_numeric(geom[1], errors="coerce")

# Broad Australian extent keeps Christmas Island, Lord Howe and the Torres Strait
df["coord_valid_au_broad"] = df["lon"].between(95, 170) & df["lat"].between(-45, -8)

# One placeholder point shared by records with no state or postcode
df["coord_placeholder_error"] = (
    np.isclose(df["lon"], 97.48747, atol=1e-5) &
    np.isclose(df["lat"], 23.14958, atol=1e-5)
)

df["coord_use_for_map"] = df["coord_valid_au_broad"] & ~df["coord_placeholder_error"]

# Valid but outside the mainland box: kept, flagged for review
df["coord_edge_or_external"] = df["coord_use_for_map"] & ~(
    df["lon"].between(110, 155) & df["lat"].between(-45, -10)
)

df_map = df[df["coord_use_for_map"]].copy()   # 17,653 of 17,663 services`
        },
        {
            title: {
                en: "Point-in-polygon matching to ABS Remoteness Areas",
                zh: "与 ABS 偏远地区的点面匹配"
            },
            language: "Python · pyshp · Shapely",
            source: {
                en: "Individual assignment · my code",
                zh: "个人作业 · 本人代码"
            },
            caption: {
                en: "Null geometries are skipped explicitly, and covers() is used instead of contains() so that services on a boundary are still classified.",
                zh: "显式跳过空几何记录，并用 covers() 而非 contains()，确保落在边界上的机构也能被分类。"
            },
            code: `sf = shapefile.Reader("RA_2021_AUST_GDA2020.shp", encoding="utf-8")
ra_fields = [f[0] for f in sf.fields[1:]]

valid_rows = []
for rec, shp in zip(sf.records(), sf.shapes()):
    if shp.shapeType == 0:            # NULL geometry: offshore / no usual address
        continue
    row = dict(zip(ra_fields, rec))
    row["polygon"] = shape(shp.__geo_interface__)
    valid_rows.append(row)
ra_df = pd.DataFrame(valid_rows)      # 35 state-specific Remoteness Area polygons

ra_lookup = list(ra_df[["RA_CODE21", "RA_NAME21", "polygon"]].itertuples(index=False, name=None))

def match_ra(lon, lat):
    pt = Point(lon, lat)
    for ra_code, ra_name, poly in ra_lookup:
        if poly.covers(pt):           # also matches points on a boundary
            return ra_code, ra_name
    return pd.NA, pd.NA

df_map_ra = df.loc[df["coord_use_for_map"], ["row_id", "lon", "lat"]].copy()
df_map_ra[["RA_CODE21", "RA_NAME21"]] = pd.DataFrame(
    [match_ra(lon, lat) for lon, lat in zip(df_map_ra["lon"], df_map_ra["lat"])],
    index=df_map_ra.index
)
df = df.merge(df_map_ra[["row_id", "RA_CODE21", "RA_NAME21"]], on="row_id", how="left")
# 17,652 of 17,653 services matched`
        },
        {
            title: {
                en: "Building the access–quality–scale priority matrix",
                zh: "构建“可达性—质量—规模”优先矩阵"
            },
            language: "Python · pandas · NumPy",
            source: {
                en: "Individual assignment · my code",
                zh: "个人作业 · 本人代码"
            },
            caption: {
                en: "Segments are compared with national reference lines; square-root bubble scaling keeps small remote segments visible next to the large city segments.",
                zh: "各区段与全国参考线比较；气泡按平方根缩放，使小规模的偏远区段在大城市区段旁边仍然可见。"
            },
            code: `meets_or_above = ["Meeting NQS", "Exceeding NQS", "Excellent"]
plot_df["meets_or_above_nqs"] = plot_df["OverallRating"].isin(meets_or_above).astype(int)

bubble_df = (
    plot_df.groupby(["State", "RA_NAME21"], observed=True, as_index=False)
    .agg(median_transport_km=("NearestPublicTransport_km", "median"),
         quality_share_pct=("meets_or_above_nqs", "mean"),
         service_count=("meets_or_above_nqs", "size"))
)
bubble_df["quality_share_pct"] *= 100
bubble_df["x_plot"] = np.log1p(bubble_df["median_transport_km"])   # distance is highly skewed

# Square-root scaling so large segments do not swamp small ones
lo = np.sqrt(bubble_df["service_count"].min())
hi = np.sqrt(bubble_df["service_count"].max())
bubble_df["bubble_size"] = 120 + (np.sqrt(bubble_df["service_count"]) - lo) / (hi - lo) * (1800 - 120)

# National reference lines and flags
x_ref = plot_df["NearestPublicTransport_km"].median()
y_ref = plot_df["meets_or_above_nqs"].mean() * 100
bubble_df["small_n"] = bubble_df["service_count"] < 30            # drawn as hollow bubbles
bubble_df["priority_segment"] = (
    (bubble_df["median_transport_km"] > x_ref) & (bubble_df["quality_share_pct"] < y_ref)
)`
        },
        {
            title: {
                en: "Rebuilding the AEDC tables so counts and percentages agree",
                zh: "重建 AEDC 表，使人数与百分比保持一致"
            },
            language: "Python · pandas",
            source: {
                en: "Group report · my code (data processing)",
                zh: "小组报告 · 本人代码（数据处理）"
            },
            caption: {
                en: "Excerpt from the loop over the 11 AEDC sheets: keep 2021, fill gaps from the state summaries, then recompute counts from percentages.",
                zh: "节选自处理 11 张 AEDC 表的循环：只保留 2021 年，用州汇总补缺，再由百分比反算人数。"
            },
            code: `for sheet in target_sheets:                              # 11 AEDC sheets
    df = lga_data[sheet].copy()
    df.iloc[2:, 2:] = df.iloc[2:, 2:].ffill(axis=1)         # merged year headers

    # ... header clean-up and split into LGA rows (lga_df) and state rows (state_df) ...

    # Keep 2021 columns only
    keep_cols = [0, 1, 2, df.shape[1] - 1] + [
        i for i in range(3, df.shape[1] - 1) if str(df.iloc[0, i]) == "2021"
    ]

    # 1) A missing LGA percentage falls back to its state's figure
    for col in pct_cols:
        if col in state_df.columns:
            state_pct = state_df.set_index("StateName")[col]
            lga_df[col] = lga_df[col].fillna(lga_df["State"].map(state_pct))

    # 2) Missing valid-score counts share the state's remaining total
    for state in lga_df["State"].dropna().unique():
        state_total = state_valid_map.get(state)
        in_state = lga_df["State"] == state
        missing = in_state & lga_df["Valid_scores"].isna()
        if pd.isna(state_total) or missing.sum() == 0:
            continue
        known = lga_df.loc[in_state, "Valid_scores"].sum()
        lga_df.loc[missing, "Valid_scores"] = round((state_total - known) / missing.sum())

    # 3) Recompute counts from percentages so n and % always agree
    for n_col, pct_col in calc_pairs:
        lga_df[n_col] = (lga_df["Valid_scores"] * lga_df[pct_col] / 100).round().astype("Int64")
        lga_df[pct_col] = np.where(
            (lga_df[n_col] == 0) & (lga_df["Valid_scores"] == 0), 0,
            (lga_df[n_col] / lga_df["Valid_scores"] * 100).round(1)
        )`
        },
        {
            title: {
                en: "Matching LGA names: cleaning, exact match, then fuzzy match",
                zh: "LGA 名称匹配：清洗、精确匹配，再模糊匹配"
            },
            language: "Python · re · difflib",
            source: {
                en: "Group report · my code (data processing)",
                zh: "小组报告 · 本人代码（数据处理）"
            },
            caption: {
                en: "522 exact and 8 fuzzy matches; the 17 below the 0.85 threshold went to a documented manual table instead of being forced.",
                zh: "522 个精确匹配、8 个模糊匹配；相似度低于 0.85 的 17 个没有强行匹配，而是进入有记录的人工对照表。"
            },
            code: `def clean_name(x):
    """'Albury (City)' -> 'albury'; 'Cootamundra-Gundagai Regional' -> 'cootamundra gundagai'"""
    if pd.isna(x):
        return ""
    x = str(x).lower().strip()
    x = re.sub(r"\\([^)]*\\)", " ", x)       # drop bracketed qualifiers
    x = x.replace("&", " and ")
    x = re.sub(r"[^a-z0-9]+", " ", x)
    drop = {"city", "shire", "regional", "council", "area", "municipality",
            "municipal", "district", "borough", "town"}
    return " ".join(w for w in x.split() if w not in drop)

def fuzzy_find(name, choices, threshold=0.85):
    best, best_score = None, 0
    for choice in choices:
        score = SequenceMatcher(None, name, choice).ratio()
        if score > best_score:
            best, best_score = choice, score
    return (best, best_score) if best_score >= threshold else (None, best_score)

matched = lga.merge(postcode_lookup, on="lga_clean", how="left")       # exact matches
for i, row in matched[matched["matched_postcode"].isna()].iterrows():
    name, score = fuzzy_find(row["lga_clean"], lookup_names)
    matched.loc[i, "match_score"] = score
    if name is not None:
        matched.loc[i, "matched_postcode"] = postcode_lookup.loc[
            postcode_lookup["lga_clean"] == name, "matched_postcode"].iloc[0]
        matched.loc[i, "match_method"] = "fuzzy_match"
    else:
        matched.loc[i, "match_method"] = "needs_review"                  # resolved manually`
        },
        {
            title: {
                en: "Auditing transport-distance cut-offs and flagging, not deleting, outliers",
                zh: "审计交通距离阈值：标记而非删除极端值"
            },
            language: "Python · pandas",
            source: {
                en: "Group report · my code (data processing)",
                zh: "小组报告 · 本人代码（数据处理）"
            },
            caption: {
                en: "The cut-off table made the choice of 50 km explicit; extreme records stay in the full dataset for transparency.",
                zh: "阈值表让 50 km 的选择有据可查；极端记录仍保留在完整数据中，保持透明。"
            },
            code: `df["NearestPublicTransport_km"] = df[
    ["DistanceToTrainStation_km", "DistanceToBusStation_km"]
].min(axis=1)
valid_transport = df["coord_use_for_map"] & df["NearestPublicTransport_km"].notna()
dist = df.loc[valid_transport, "NearestPublicTransport_km"]

# Compare cut-offs before deciding what counts as extreme
threshold_audit = pd.DataFrame([
    {"Cutoff_km": t,
     "Rows_above_cutoff": (dist > t).sum(),
     "Percent_of_valid_transport_rows": round((dist > t).mean() * 100, 2)}
    for t in [5, 10, 20, 30, 35.72, 50, 75, 100, 150, 200]
])

# Flag, don't delete: >50 km leaves the main analysis but stays in the full file
df["pt_distance_extreme_gt50"] = df["NearestPublicTransport_km"] > 50     # 615 services (3.48%)

df["pt_access_category"] = pd.cut(
    df["NearestPublicTransport_km"],
    bins=[0, 0.4, 0.8, 5, 50, np.inf],
    labels=["Very good access (≤0.4km)", "Reasonable access (0.4–0.8km)",
            "Weak access (0.8–5km)", "Poor access (5–50km)",
            "Extreme / excluded from main PT analysis (>50km)"],
    include_lowest=True
)`
        },
        {
            title: {
                en: "Accessible high-quality capacity and a capacity-weighted median distance",
                zh: "可达高质量容量与按容量加权的中位距离"
            },
            language: "Python · pandas · NumPy",
            source: {
                en: "Group report · my code (KBQ3)",
                zh: "小组报告 · 本人代码（KBQ3）"
            },
            caption: {
                en: "Weighting by approved places measures how far the typical child place is from transport, not the typical service.",
                zh: "按核定名额加权，衡量的是“典型的一个托位”而不是“典型的一家机构”离交通有多远。"
            },
            code: `def weighted_median(values, weights):
    temp = pd.DataFrame({
        "value": pd.to_numeric(values, errors="coerce"),
        "weight": pd.to_numeric(weights, errors="coerce")
    }).dropna()
    temp = temp[temp["weight"] > 0]
    if len(temp) == 0:
        return np.nan
    temp = temp.sort_values("value")
    cutoff = temp["weight"].sum() / 2
    return temp.loc[temp["weight"].cumsum() >= cutoff, "value"].iloc[0]

svc = kbq3_edu.copy()
svc["capacity_weight"] = pd.to_numeric(svc["NumberOfApprovedPlaces"], errors="coerce")

# High-quality (Exceeding NQS or Excellent) places within 5 km of public transport
svc["accessible_high_quality_places_5km"] = np.where(
    svc["strict_high_quality"] & svc["valid_transport_main"]
    & (svc["NearestPublicTransport_km"] <= 5) & svc["capacity_weight"].notna(),
    svc["capacity_weight"], 0
)

lga_capacity = (
    svc.dropna(subset=["lga_state_key"])
    .groupby("lga_state_key", as_index=False)
    .agg(
        accessible_high_quality_places_5km=("accessible_high_quality_places_5km", "sum"),
        capacity_weighted_median_transport_km=(
            "transport_km_for_main",
            lambda x: weighted_median(x, svc.loc[x.index, "capacity_weight"])
        )
    )
)

# Standardise by the number of children assessed in each LGA
kbq3["accessible_high_quality_places_5km_per_1000"] = (
    kbq3["accessible_high_quality_places_5km"] / kbq3["valid_scores_2021"] * 1000
)`
        },
        {
            title: {
                en: "Rank-based partial correlation controlling for SEIFA and remoteness",
                zh: "控制 SEIFA 与偏远程度的秩偏相关"
            },
            language: "Python · NumPy · pandas",
            source: {
                en: "Group report · my code (KBQ3)",
                zh: "小组报告 · 本人代码（KBQ3）"
            },
            caption: {
                en: "Variables are ranked, the controls are regressed out of both sides, and the residuals are correlated: a Spearman-style partial correlation.",
                zh: "先对变量排序，再从两侧回归掉控制变量，最后计算残差相关，即 Spearman 式的偏相关。"
            },
            code: `def residualize(y, X):
    y = np.asarray(y, dtype=float)
    X = np.column_stack([np.ones(len(X)), np.asarray(X, dtype=float)])
    beta = np.linalg.lstsq(X, y, rcond=None)[0]
    return y - X @ beta

def partial_corr(data, x_col, y_col, control_cols, method="spearman"):
    use_cols = [x_col, y_col] + control_cols
    temp = data[use_cols].dropna().copy()
    raw_corr = temp[[x_col, y_col]].corr(method=method).iloc[0, 1]

    if method == "spearman":                 # rank first, then residualise
        for col in use_cols:
            temp[col] = temp[col].rank()

    x_resid = residualize(temp[x_col], temp[control_cols])
    y_resid = residualize(temp[y_col], temp[control_cols])
    partial = pd.Series(x_resid).corr(pd.Series(y_resid), method="pearson")
    return {"x": x_col, "y": y_col, "n": len(temp),
            "raw_corr": raw_corr, "partial_corr": partial}

partial_results = pd.DataFrame([
    partial_corr(kbq3_cov_main, x_col, y_col, ["seifa_score", "remoteness_score"])
    for y_col in ["dv1_pct_2021", "dv2_pct_2021"]
    for x_col in all_service_indicators
])`
        },
        {
            title: {
                en: "Five-factor policy priority score",
                zh: "五因素政策优先评分"
            },
            language: "Python · pandas",
            source: {
                en: "Group report · my code (KBQ3)",
                zh: "小组报告 · 本人代码（KBQ3）"
            },
            caption: {
                en: "Each flag is a quartile rule on the 412-LGA sample, and every LGA keeps a readable list of the reasons behind its score.",
                zh: "每个标记都是基于 412 个 LGA 样本的四分位规则，每个地区都保留一段可读的评分理由。"
            },
            code: `p = kbq3_cov_main.copy()

p["high_dv1"] = p["dv1_pct_2021"] >= p["dv1_pct_2021"].quantile(0.75)             # 28.4%
p["high_dv2"] = p["dv2_pct_2021"] >= p["dv2_pct_2021"].quantile(0.75)             # 15.5%
p["low_accessible_high_quality_capacity"] = (
    p["accessible_high_quality_places_5km_per_1000"]
    <= p["accessible_high_quality_places_5km_per_1000"].quantile(0.25)           # = 0
)
p["poor_transport_access_lga"] = (
    p["median_nearest_transport_km"] >= p["median_nearest_transport_km"].quantile(0.75)  # 11.4 km
)
p["high_disadvantage"] = p["seifa_score"] <= p["seifa_score"].quantile(0.25)     # lower IRSD = more disadvantaged

reasons = {
    "high_dv1": "high DV1",
    "high_dv2": "high DV2",
    "low_accessible_high_quality_capacity": "low accessible high-quality capacity",
    "poor_transport_access_lga": "poor transport access",
    "high_disadvantage": "high socio-economic disadvantage",
}
p["policy_priority_score"] = p[list(reasons)].astype(int).sum(axis=1)
p["priority_reason"] = p.apply(
    lambda r: "; ".join(label for flag, label in reasons.items() if r[flag]), axis=1
)

priority_table = p.sort_values(
    ["policy_priority_score", "dv2_pct_2021", "dv1_pct_2021"], ascending=False
)`
        }
    ]
},


{
    id: "nsw-milk-distribution",
    category: "analytics-systems",

    title: {
        en: "NSW Milk Distribution Network — Siting Three Centres with Mixed-Integer Programming, 2001–2021",
        zh: "新南威尔士州牛奶配送网络：用混合整数规划选址三个配送中心（2001—2021）"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · demand estimation, MILP formulation in Gurobi, scenario re-runs and written analysis",
        zh: "个人项目 · 需求测算、Gurobi 混合整数规划建模、情景重算与书面分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2023",
        zh: "2023 年第二学期"
    },

    sortDate: "2023-10",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Acting as a consultant to the NSW Government, I advised where to build up to three milk distribution centres serving every local government area (LGA) in the state. Moving n litres over d km costs d × n × A$0.10, building a centre costs A$1,000 per litre of daily capacity, and no centre may hold more than 50% of state demand.",
                "Demand had to be built from public data: ABS population by LGA and by age band, matched to the recommended daily calcium intake for 11 life stages. As the brief required, distances between LGAs were generated with a random number generator, so the chosen sites demonstrate the method rather than a real-world recommendation.",
                "I solved the model for 2001, tested it against 10% annual population growth to 2004, and re-ran it with 2006 and 2021 census populations, the last with 55.6% inflation since 2001."
            ],
            zh: [
                "我以新州政府顾问的身份，就在哪里建设最多三个牛奶配送中心、覆盖全州所有地方政府区域（LGA）提出建议。把 n 升牛奶运输 d 公里的成本为 d × n × 0.10 澳元，建设配送中心的成本为每升日处理能力 1,000 澳元，且任何一个中心的产能不得超过全州需求的 50%。",
                "需求需要用公开数据自行推算：ABS 各 LGA 人口和各年龄段人口，对应 11 个人生阶段的每日钙推荐摄入量。按作业要求，LGA 之间的距离用随机数生成，因此选出的地点用于展示方法，而不是真实的选址建议。",
                "我先求解 2001 年的模型，再检验 2004 年前人口每年增长 10% 的情形，并用 2006 年和 2021 年人口普查数据重算，其中 2021 年计入自 2001 年以来 55.6% 的通胀。"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Formulate and solve a model that sites three centres in 2001 at minimum cost under all requirements.",
                "Run a sensitivity analysis for 10% annual population growth over three years and discuss a 20-year facility life.",
                "Discuss other factors that matter over twenty years.",
                "Re-run the model with 2006 data, then with 2021 data and 55.6% inflation, and compare the results."
            ],
            zh: [
                "建立并求解模型，在满足全部要求的前提下以最低成本确定 2001 年三个中心的位置。",
                "对未来三年人口每年增长 10% 做敏感性分析，并讨论设施 20 年使用期的影响。",
                "讨论 20 年间还需要考虑的其他因素。",
                "用 2006 年数据、再用 2021 年数据并计入 55.6% 通胀重算模型，比较结果。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Built a Gurobi mixed-integer model to site three milk distribution centres for 128 NSW areas, converting ABS census and calcium data into 5.63m litres a day of demand; optimal distribution cost A$132.0m, 2.3% of the total.",
            "Re-ran six demand scenarios (10% annual growth, 2006 and 2021 census data, 55.6% inflation): demand ranged from 5.63m to 7.50m litres a day, and the same three sites stayed optimal every time, all under the 50% cap."
        ],
        zh: [
            "用 Gurobi 混合整数规划为新州 128 个区域选址三个牛奶配送中心，把 ABS 普查和钙需求数据换算为每天 563 万升需求；最优配送成本 1.32 亿澳元，占总成本 2.3%。",
            "在六种需求情景下重算（每年增长 10%、2006 与 2021 年普查、55.6% 通胀）：每日需求 563 万—750 万升，最优选址始终是同样三个地点，且都低于 50% 产能上限。"
        ]
    },

    tags: [
        "Mixed-Integer Programming",
        "Facility Location",
        "Gurobi",
        "Python",
        "NumPy",
        "Sensitivity Analysis",
        "Scenario Analysis",
        "ABS Census Data"
    ],

    metrics: [
        {
            value: "128",
            label: {
                en: "Local government areas in the model",
                zh: "模型覆盖的地方政府区域"
            }
        },
        {
            value: "5.63m L",
            label: {
                en: "Daily milk demand in 2001, derived from calcium needs",
                zh: "按钙需求推算的 2001 年每日牛奶需求"
            }
        },
        {
            value: "16,512",
            label: {
                en: "Decision variables (128 binary), solved to a 0% gap",
                zh: "决策变量（其中 128 个二元变量），求解至 0% 间隙"
            }
        },
        {
            value: "A$132.0m",
            label: {
                en: "Distribution cost at the optimal sites, 2001",
                zh: "2001 年最优选址下的配送成本"
            }
        },
        {
            value: "6 of 6",
            label: {
                en: "Scenarios in which the same three sites stayed optimal",
                zh: "最优选址保持不变的情景数"
            }
        },
        {
            value: "40.3%",
            label: {
                en: "Largest share any centre supplied, against a 50% cap",
                zh: "单个中心的最高供应占比（上限 50%）"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My work · demand model",
                zh: "本人完成 · 需求模型"
            },
            title: {
                en: "From Census Data to Daily Milk Demand",
                zh: "从人口普查数据到每日牛奶需求"
            },
            steps: {
                en: [
                    "ABS population for 128 LGAs and 6 state age bands",
                    "Split the bands into 11 calcium life stages",
                    "Life-stage share × LGA population × calcium RDI",
                    "Divide by 1,200 mg of calcium per litre",
                    "Litres a day for each LGA: 5.63m in total"
                ],
                zh: [
                    "ABS 128 个 LGA 人口和全州 6 个年龄段",
                    "把年龄段拆分为 11 个钙需求人生阶段",
                    "人生阶段占比 × LGA 人口 × 钙推荐量",
                    "除以每升 1,200 毫克钙",
                    "得到各 LGA 每日用量，合计 563 万升"
                ]
            },
            caption: {
                en: "Assumptions: people spread evenly by single year within each ABS band; 14% of babies aged 0–6 months breastfed (NSW Health); women 50.6% of adults; 70% of the 65-and-over group aged over 70; and all calcium supplied by milk.",
                zh: "假设：每个 ABS 年龄段内各年龄人数平均分布；0—6 个月婴儿中 14% 为母乳喂养（NSW Health）；成年人中女性占 50.6%；65 岁及以上人群中 70% 超过 70 岁；全部钙摄入都来自牛奶。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · demand model",
                zh: "本人完成 · 需求模型"
            },
            title: {
                en: "Calcium Need by Life Stage, NSW 2001",
                zh: "各人生阶段钙需求（新州，2001 年）"
            },
            columns: {
                en: ["Life stage", "RDI (mg/day)", "Estimated people", "Share"],
                zh: ["人生阶段", "推荐量（毫克/天）", "估算人数", "占比"]
            },
            rows: [
                [{ en: "Babies 0–6 months, breastfed", zh: "0—6 个月婴儿（母乳）" }, "210", "5,913", "0.09%"],
                [{ en: "Babies 0–6 months, formula", zh: "0—6 个月婴儿（配方奶）" }, "350", "36,321", "0.58%"],
                [{ en: "Babies 7–12 months", zh: "7—12 个月婴儿" }, "270", "42,234", "0.67%"],
                [{ en: "Children 1–3", zh: "1—3 岁儿童" }, "500", "253,405", "4.02%"],
                [{ en: "Children 4–8", zh: "4—8 岁儿童" }, "700", "440,872", "6.99%"],
                [{ en: "Children 9–11", zh: "9—11 岁儿童" }, "1,000", "267,303", "4.24%"],
                [{ en: "Adolescents 12–18", zh: "12—18 岁青少年" }, "1,300", "605,441", "9.59%"],
                [{ en: "Women 19–50", zh: "19—50 岁女性" }, "1,000", "1,454,546", "23.05%"],
                [{ en: "Women 51–70", zh: "51—70 岁女性" }, "1,300", "609,806", "9.66%"],
                [{ en: "Men 19–70", zh: "19—70 岁男性" }, "1,000", "2,015,395", "31.93%"],
                [{ en: "Adults over 70", zh: "70 岁以上成年人" }, "1,300", "579,933", "9.19%"],
                [{ en: "Total", zh: "合计" }, "–", "6,311,168", "100%"]
            ],
            highlightRow: 11,
            caption: {
                en: "State-level shares were applied to every LGA, as the brief allowed. The three groups that need 1,300 mg a day (adolescents, women 51–70 and adults over 70) make up 28.4% of the population.",
                zh: "按作业允许的做法，把全州层面的占比套用到每个 LGA。每天需要 1,300 毫克钙的三类人群（青少年、51—70 岁女性和 70 岁以上成年人）占人口的 28.4%。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · formulation",
                zh: "本人完成 · 模型构建"
            },
            title: {
                en: "Model Formulation",
                zh: "模型构建"
            },
            columns: {
                en: ["Element", "Formulation", "Meaning"],
                zh: ["要素", "数学表达", "含义"]
            },
            rows: [
                [{ en: "Sites x_i", zh: "选址 x_i" }, { en: "Binary, i = 1, …, 128", zh: "二元变量，i = 1, …, 128" }, { en: "1 if a centre opens in LGA i", zh: "在 LGA i 建中心则为 1" }],
                [{ en: "Flows y_ij", zh: "流量 y_ij" }, { en: "Continuous, ≥ 0", zh: "连续变量，≥ 0" }, { en: "Litres a day from the centre in LGA i to LGA j", zh: "每天从 LGA i 的中心运往 LGA j 的升数" }],
                [{ en: "Objective", zh: "目标函数" }, "min 1,000 × total demand + Σi Σj 0.10 d_ij y_ij", { en: "Establishment plus distribution cost", zh: "建设成本加配送成本" }],
                [{ en: "Number of centres", zh: "中心数量" }, "Σi x_i = 3", { en: "Three centres, the most the budget allows", zh: "建三个中心，即预算允许的上限" }],
                [{ en: "Capacity and linking", zh: "产能与关联约束" }, "Σj y_ij ≤ 0.5 × total demand × x_i", { en: "No centre above 50% of demand; a closed site ships nothing", zh: "单个中心不超过需求的 50%；未建中心的地点不能发货" }],
                [{ en: "Demand", zh: "需求" }, { en: "Σi y_ij = demand_j, for every j", zh: "对每个 j，Σi y_ij = 需求_j" }, { en: "Every LGA receives exactly what it needs", zh: "每个 LGA 恰好收到所需数量" }]
            ],
            caption: {
                en: "Capacity equals the litres a centre ships, so establishment is fixed at A$1,000 per litre of state demand and the site choice is driven by distribution cost. Distances are random integers from 10 to 1,600 km (seed 0), made symmetric with a zero diagonal; 1,600 km approximates the longest span of NSW. With 258 constraints, Gurobi proved optimality in 320 seconds.",
                zh: "中心产能等于其发货量，因此建设成本固定为全州需求每升 1,000 澳元，选址由配送成本决定。距离为 10—1,600 公里的随机整数（随机种子 0），并处理为对称矩阵、对角线为 0；1,600 公里约为新州最长跨度。模型共 258 条约束，Gurobi 用 320 秒证明最优。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · 2001",
                zh: "本人输出 · 2001 年"
            },
            title: {
                en: "Optimal Sites in 2001",
                zh: "2001 年最优选址"
            },
            columns: {
                en: ["Centre", "Litres a day", "Share of supply"],
                zh: ["配送中心", "每日供应（升）", "供应占比"]
            },
            rows: [
                ["Blacktown", "2,250,088", "39.96%"],
                ["Camden", "1,904,854", "33.83%"],
                ["Clarence Valley", "1,476,325", "26.22%"],
                [{ en: "Total", zh: "合计" }, "5,631,267", "100%"]
            ],
            highlightRow: 3,
            caption: {
                en: "Total cost A$5,763.2m: A$5,631.3m to build capacity and A$132.0m of distribution. No centre comes close to the 50% cap. Because distances are pseudo-random, the method matters more than the names: the same code sites real centres once road distances are supplied.",
                zh: "总成本 57.632 亿澳元，其中建设 56.313 亿、配送 1.320 亿。没有任何中心接近 50% 上限。由于距离是伪随机数，方法比地名更重要：换成真实道路距离后，同样的代码即可用于实际选址。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · scenarios",
                zh: "本人输出 · 情景分析"
            },
            title: {
                en: "Scenario Re-runs: Daily Demand and Cost",
                zh: "情景重算：需求与成本"
            },
            columns: {
                en: ["Scenario", "Demand (m L)", "Build (A$m)", "Distribution (A$m)", "Total (A$m)"],
                zh: ["情景", "需求（百万升/天）", "建设（百万澳元）", "配送（百万澳元）", "合计（百万澳元）"]
            },
            rows: [
                [{ en: "2001 base", zh: "2001 年基准" }, "5.63", "5,631.3", "132.0", "5,763.2"],
                [{ en: "2002, +10%", zh: "2002 年，+10%" }, "6.19", "6,194.4", "145.2", "6,339.6"],
                [{ en: "2003, +10% a year", zh: "2003 年，每年 +10%" }, "6.81", "6,813.8", "159.7", "6,973.5"],
                [{ en: "2004, +10% a year", zh: "2004 年，每年 +10%" }, "7.50", "7,495.2", "175.6", "7,670.9"],
                [{ en: "2006 census", zh: "2006 年普查" }, "5.83", "5,834.6", "135.8", "5,970.4"],
                [{ en: "2021 census, 2021 dollars", zh: "2021 年普查，2021 年价格" }, "7.09", "–", "251.0", "–"]
            ],
            caption: {
                en: "The same three sites were optimal in every run. Uniform growth scales every flow and cost by the same factor, so it cannot move the sites on its own; the 2006 and 2021 runs, which use each LGA’s actual population, are the stronger test. The 2021 run prices distribution at 1.556 times the 2001 rate and leaves out establishment, which does not depend on location.",
                zh: "每次重算的最优选址都是同样三个地点。统一比例增长会让所有流量和成本按同一倍数放大，本身不会改变选址；使用各 LGA 实际人口的 2006 年和 2021 年重算才是更有力的检验。2021 年的配送成本按 2001 年费率的 1.556 倍计算，并不计建设成本，因为它与选址无关。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · census re-runs",
                zh: "本人输出 · 普查数据重算"
            },
            title: {
                en: "What Changed Between Censuses",
                zh: "各次普查之间的变化"
            },
            columns: {
                en: ["Measure", "2001", "2006", "2021"],
                zh: ["指标", "2001", "2006", "2021"]
            },
            rows: [
                [{ en: "LGA population", zh: "LGA 人口" }, "6,529,139", "6,741,595", "8,096,042"],
                [{ en: "Milk demand (L/day)", zh: "牛奶需求（升/天）" }, "5,631,267", "5,834,605", "7,091,834"],
                [{ en: "Litres per resident", zh: "人均升数" }, "0.862", "0.865", "0.876"],
                [{ en: "Adults over 70", zh: "70 岁以上占比" }, "9.19%", "9.68%", "12.05%"],
                [{ en: "Blacktown share", zh: "Blacktown 占比" }, "39.96%", "39.74%", "40.29%"],
                [{ en: "Camden share", zh: "Camden 占比" }, "33.83%", "34.12%", "34.60%"],
                [{ en: "Clarence Valley share", zh: "Clarence Valley 占比" }, "26.22%", "26.14%", "25.11%"]
            ],
            caption: {
                en: "Population grew 24.0% from 2001 to 2021 but demand grew 25.9%, because the over-70s, who need 1,300 mg of calcium a day, grew fastest. Supply shifted slightly from Clarence Valley towards Blacktown and Camden, so I flagged Clarence Valley for review first. The 2006 census also showed real growth far below 10% a year: demand was 5.83m litres, against 7.50m projected for 2004.",
                zh: "2001—2021 年人口增长 24.0%，需求增长 25.9%，原因是每天需要 1,300 毫克钙的 70 岁以上人群增长最快。供应份额从 Clarence Valley 小幅转向 Blacktown 和 Camden，因此我建议优先评估 Clarence Valley。2006 年普查也显示实际增长远低于每年 10%：需求为 583 万升，而按假设推算 2004 年已达 750 万升。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · 20-year view",
                zh: "本人分析 · 20 年视角"
            },
            title: {
                en: "Factors Over a 20-Year Facility Life",
                zh: "设施 20 年使用期需要考虑的因素"
            },
            columns: {
                en: ["Factor", "Why it matters"],
                zh: ["因素", "影响"]
            },
            rows: [
                [{ en: "Other calcium sources", zh: "其他钙来源" }, { en: "Food and supplements also supply calcium, so assuming all of it comes from milk overstates demand.", zh: "食物和补充剂也提供钙，假设全部来自牛奶会高估需求。" }],
                [{ en: "Health awareness", zh: "健康意识" }, { en: "Intake may rise as people become more health-conscious.", zh: "随着健康意识提高，钙摄入可能上升。" }],
                [{ en: "Ageing population", zh: "人口老龄化" }, { en: "A larger share of people needing 1,300 mg a day raises demand per person.", zh: "每天需要 1,300 毫克的人群占比上升，会提高人均需求。" }],
                [{ en: "Real distances and traffic", zh: "真实距离与交通" }, { en: "Generated distances ignore road networks and congestion.", zh: "生成的距离没有反映道路网络和交通拥堵。" }],
                [{ en: "Uneven growth across LGAs", zh: "各 LGA 增长不均" }, { en: "People move towards well-serviced areas, so growth is not a fixed rate everywhere.", zh: "人口会流向配套更好的地区，各地增长并非固定比例。" }],
                [{ en: "Regulation", zh: "监管变化" }, { en: "New rules over 20 years may change how centres operate.", zh: "20 年内的新规定可能改变中心的运营方式。" }],
                [{ en: "Habits and competitors", zh: "消费习惯与竞争" }, { en: "Changing preferences or new entrants alter demand and the centres’ competitiveness.", zh: "偏好变化或新进入者会改变需求和中心的竞争力。" }],
                [{ en: "Disasters and pandemics", zh: "灾害与疫情" }, { en: "Events such as COVID-19 disrupt both supply and demand.", zh: "新冠等事件会同时冲击供给和需求。" }]
            ],
            caption: {
                en: "For a 20-year life, I recommended re-solving the model as new census data arrive rather than relying on a fixed growth rate, and closing or adding centres if a site stops being cost-effective.",
                zh: "对于 20 年使用期，我建议在每次新普查数据发布后重新求解模型，而不是依赖固定增长率；若某个中心不再具有成本效益，可考虑关闭或另建。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Demand from census data, random distances and the siting model",
                zh: "由普查数据推算需求、生成随机距离并构建选址模型"
            },
            language: "Python · NumPy · Gurobi",
            source: {
                en: "My code · condensed from the notebook",
                zh: "本人代码 · 根据 notebook 精简"
            },
            caption: {
                en: "Condensed from my notebook: the per-LGA loops are wrapped in one function and printing is removed. Running it reproduces the reported 2001 demand of 5,631,267 litres a day and the A$131,966,712 distribution cost at Blacktown, Camden and Clarence Valley.",
                zh: "根据我的 notebook 精简：把逐个 LGA 的循环合并为一个函数，并去掉打印语句。运行后可复现报告中的 2001 年每日需求 5,631,267 升，以及 Blacktown、Camden、Clarence Valley 三个中心下 131,966,712 澳元的配送成本。"
            },
            code: `import numpy as np
import gurobipy as gp
from gurobipy import GRB

# Calcium RDI (mg/day) and each life stage's share of the NSW population, 2001
calcium = {"babies_0_6_breastfed": 210, "babies_0_6_formula": 350, "babies_7_12": 270,
           "children_1_3": 500, "children_4_8": 700, "children_9_11": 1000,
           "adolescents_12_18": 1300, "women_19_50": 1000, "women_51_70": 1300,
           "men_19_70": 1000, "adults_over_70": 1300}
share_2001 = {"babies_0_6_breastfed": 0.0009, "babies_0_6_formula": 0.0058, "babies_7_12": 0.0067,
              "children_1_3": 0.0402, "children_4_8": 0.0699, "children_9_11": 0.0424,
              "adolescents_12_18": 0.0959, "women_19_50": 0.2305, "women_51_70": 0.0966,
              "men_19_70": 0.3193, "adults_over_70": 0.0919}
CALCIUM_PER_LITRE = 1200   # mg of calcium in one litre of milk

def milk_demand(lga_population, share):
    """Litres a day per LGA: people in each life stage x RDI, converted to litres of milk."""
    litres = []
    for population in lga_population.values():
        mg = sum(population * share[g] * calcium[g] for g in calcium)
        litres.append(round(mg / CALCIUM_PER_LITRE))
    return np.array(litres)

demand = milk_demand(lga_population_2001, share_2001)   # 128 LGAs, 5,631,267 L/day in total

# Pseudo-random symmetric distances in km, as the brief requires
np.random.seed(0)
raw = np.random.randint(10, 1601, (128, 128))
upper = np.triu(raw, k=1)                 # zero diagonal
dist = upper + upper.T

m = len(demand)
total = demand.sum()

mod = gp.Model("milk_sites_2001")
x = mod.addVars(m, vtype=GRB.BINARY)                       # 1 if a centre opens in LGA i
y = mod.addVars(m, m, vtype=GRB.CONTINUOUS, lb=0)          # litres a day from centre i to LGA j

establishment = 1000 * total                               # A$1,000 per litre of capacity
distribution = 0.10 * sum(dist[i, j] * y[i, j] for i in range(m) for j in range(m))
mod.setObjective(establishment + distribution, GRB.MINIMIZE)

mod.addConstr(sum(x[i] for i in range(m)) == 3)                         # three centres
for i in range(m):                                                       # 50% cap; closed sites ship nothing
    mod.addConstr(sum(y[i, j] for j in range(m)) <= 0.5 * total * x[i])
for j in range(m):                                                       # every LGA gets its demand
    mod.addConstr(sum(y[i, j] for i in range(m)) == demand[j])

mod.optimize()
sites = [name_LGA[i] for i in range(m) if x[i].X > 0.5]   # ['Blacktown', 'Camden', 'Clarence Valley']`
        }
    ],

    details: {
        en: [
            {
                title: "The Brief",
                bullets: [
                    "Advise the NSW Government on up to three milk distribution centres serving every LGA, with costs of d × n × A$0.10 to distribute and A$1,000 per litre of capacity to build.",
                    "No centre may exceed 50% of state demand, to spread risk.",
                    "Demand comes from calcium intake guidelines for 11 life stages; distances are generated randomly, as instructed."
                ]
            },
            {
                title: "Estimating Demand",
                bullets: [
                    "Collected 2001 ABS populations for 128 LGAs (Unincorporated NSW excluded) and six state age bands.",
                    "Mapped the bands onto the 11 RDI life stages: years spread evenly within each band, a 14% breastfeeding rate for babies under six months, a 50.6% female share, and 70% of the over-65s aged over 70.",
                    "Multiplied each LGA’s population by the life-stage shares and calcium RDIs, then divided by 1,200 mg per litre: 5.63 million litres a day for the state, from 1,853 litres in Brewarrina to 265,292 in Canterbury-Bankstown."
                ]
            },
            {
                title: "Formulation and Solution",
                bullets: [
                    "128 binary site variables and 16,384 flow variables; constraints for exactly three centres, the 50% cap linked to the site decision, and full supply to every LGA.",
                    "Because capacity equals the litres shipped, establishment is a fixed A$5.63bn and the sites are chosen on distribution cost.",
                    "Gurobi proved the optimum in 320 seconds: Blacktown, Camden and Clarence Valley supply 40.0%, 33.8% and 26.2% of demand, for A$132.0m of distribution and A$5.76bn in total."
                ]
            },
            {
                title: "Growth Sensitivity and a 20-Year Life",
                bullets: [
                    "Scaled demand by 10% a year for 2002–2004: demand rose to 7.50m litres and total cost to A$7.67bn, with the same sites and the same supply shares.",
                    "Uniform growth multiplies every flow by the same factor, so it confirms feasibility under the 50% cap rather than testing the sites; uneven growth across LGAs is what could move them.",
                    "For a 20-year life, I recommended re-solving as census data arrive and reviewing centres that stop being cost-effective."
                ]
            },
            {
                title: "2006 and 2021 Re-runs",
                bullets: [
                    "2006 census: demand of 5.83m litres, well below the 7.50m projected for 2004, showing 10% annual growth was unrealistic; the same three sites stayed optimal at A$135.8m of distribution.",
                    "2021 census with 55.6% inflation: demand of 7.09m litres and A$251.0m of distribution in 2021 dollars (A$161.3m at 2001 prices), again with the same sites.",
                    "Demand grew faster than population (25.9% against 24.0%) as the over-70 share rose from 9.2% to 12.1%; Clarence Valley’s share slipped from 26.2% to 25.1%, so it is the first centre to review."
                ]
            },
            {
                title: "Limitations",
                bullets: [
                    "Distances are random, so the named sites illustrate the method; real road distances would change them.",
                    "All calcium is assumed to come from milk, and state-level age shares are applied to every LGA.",
                    "Capacity is set to the litres shipped, with no spare capacity for growth or disruption."
                ]
            }
        ],
        zh: [
            {
                title: "作业要求",
                bullets: [
                    "为新州政府就最多三个、覆盖所有 LGA 的牛奶配送中心提供建议：配送成本为 d × n × 0.10 澳元，建设成本为每升产能 1,000 澳元。",
                    "为分散风险，单个中心不得超过全州需求的 50%。",
                    "需求根据 11 个人生阶段的钙摄入推荐量推算；距离按要求随机生成。"
                ]
            },
            {
                title: "需求测算",
                bullets: [
                    "收集 2001 年 ABS 128 个 LGA 的人口（不含 Unincorporated NSW）和全州 6 个年龄段数据。",
                    "把年龄段对应到 11 个钙推荐人生阶段：年龄段内各年龄平均分布，6 个月以下婴儿母乳喂养率 14%，女性占 50.6%，65 岁以上人群中 70% 超过 70 岁。",
                    "用各 LGA 人口乘以人生阶段占比和钙推荐量，再除以每升 1,200 毫克：全州每天 563 万升，从 Brewarrina 的 1,853 升到 Canterbury-Bankstown 的 265,292 升。"
                ]
            },
            {
                title: "建模与求解",
                bullets: [
                    "128 个选址二元变量和 16,384 个流量变量；约束包括恰好三个中心、与选址关联的 50% 产能上限，以及满足每个 LGA 的需求。",
                    "由于产能等于发货量，建设成本固定为 56.3 亿澳元，选址由配送成本决定。",
                    "Gurobi 用 320 秒证明最优：Blacktown、Camden 和 Clarence Valley 分别供应 40.0%、33.8% 和 26.2% 的需求，配送成本 1.32 亿澳元，总成本 57.6 亿澳元。"
                ]
            },
            {
                title: "增长敏感性与 20 年使用期",
                bullets: [
                    "2002—2004 年需求每年增长 10%：需求升至 750 万升，总成本升至 76.7 亿澳元，选址和供应占比都不变。",
                    "统一比例增长让所有流量按同一倍数放大，因此它验证的是 50% 上限下的可行性，而不是检验选址；真正可能改变选址的是各 LGA 增长不均。",
                    "对于 20 年使用期，我建议在每次普查数据发布后重新求解，并评估不再具有成本效益的中心。"
                ]
            },
            {
                title: "2006 年与 2021 年重算",
                bullets: [
                    "2006 年普查：需求 583 万升，远低于按假设推算的 2004 年 750 万升，说明每年 10% 的增长不现实；最优选址仍是同样三个地点，配送成本 1.358 亿澳元。",
                    "2021 年普查并计入 55.6% 通胀：需求 709 万升，按 2021 年价格配送成本 2.510 亿澳元（按 2001 年价格为 1.613 亿），选址依然不变。",
                    "需求增速快于人口（25.9% 对 24.0%），因为 70 岁以上人群占比从 9.2% 升至 12.1%；Clarence Valley 的供应占比从 26.2% 降至 25.1%，应优先评估。"
                ]
            },
            {
                title: "局限",
                bullets: [
                    "距离是随机生成的，选出的地名仅用于展示方法；使用真实道路距离后结果会不同。",
                    "假设全部钙摄入来自牛奶，并把全州年龄结构套用到每个 LGA。",
                    "产能等于发货量，没有为增长或突发情况预留余量。"
                ]
            }
        ]
    }
},

{
    id: "milk-tanker-genai",
    category: "analytics-systems",

    title: {
        en: "Milk Tanker Fleet Planning and a Critique of ChatGPT as an Optimisation Modeller",
        zh: "牛奶罐车车队规划与 ChatGPT 优化建模能力评估"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · fleet MILP, delivery-time objective and generative AI evaluation",
        zh: "个人项目 · 车队混合整数规划、配送时间目标与生成式 AI 评估"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2023",
        zh: "2023 年第二学期"
    },

    sortDate: "2023-11",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "This project extends my NSW milk distribution model. Instead of a flat per-litre charge, each centre must now buy tankers: each holds 10,000 litres, serves at most 4 LGAs from one centre and costs A$125,000, while distribution still costs d × n × A$0.10.",
                "Because milk is perishable, the brief then asked for a version that minimises total delivery time, where a route takes its distance at 40 km/h plus 1.2 hours per stop, and for a discussion of how to balance cost against time.",
                "The second half evaluates generative AI: I gave ChatGPT the original siting problem and a tutorial transshipment problem, compared its formulations and code with my own, and assessed where it helps and where it fails."
            ],
            zh: [
                "本项目在我的新州牛奶配送模型基础上扩展。配送不再按每升固定费率计算，而是由各中心购买罐车：每辆容量 1 万升，从一个中心出发最多服务 4 个 LGA，单价 12.5 万澳元；配送成本仍为 d × n × 0.10 澳元。",
                "由于牛奶易变质，作业还要求建立以最短总配送时间为目标的版本：每条线路的时间为距离按 40 公里/小时计算，再加每站 1.2 小时；并讨论如何平衡成本与时间。",
                "后半部分评估生成式 AI：我把原来的选址问题和一道课程转运问题交给 ChatGPT，将它给出的模型和代码与我的结果比较，分析它在哪些地方有用、在哪些地方出错。"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Re-model the problem to choose the sites and the number of tankers each centre buys.",
                "Re-formulate it to minimise total delivery time, and discuss the cost–time trade-off and other objectives.",
                "Critically analyse ChatGPT’s model and code for the siting problem, and the pros and cons of generative AI here.",
                "Repeat the analysis on a tutorial problem and compare where ChatGPT is more or less useful."
            ],
            zh: [
                "重新建模，同时确定选址和每个中心购买的罐车数量。",
                "改为以最短总配送时间为目标，并讨论成本与时间的权衡以及其他目标。",
                "评估 ChatGPT 对选址问题给出的模型和代码，以及生成式 AI 在此类问题上的优缺点。",
                "用一道课程题目重复分析，比较 ChatGPT 在哪类问题上更有用。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Added a tanker fleet (10,000 L, up to 4 stops, A$125,000 each) to the 128-area model with a two-stage Gurobi MILP: same three sites, 564 tankers costing A$70.5m, +1.2% on the A$5.76bn network cost.",
            "Benchmarked ChatGPT on two optimisation problems: its siting code failed to run (undefined data, no demand model), while on a 5-node network it missed 2 of 8 routes yet still reached the $455 optimum."
        ],
        zh: [
            "用两阶段 Gurobi 混合整数规划为 128 个区域的模型加入罐车车队（每辆 1 万升、最多 4 站、12.5 万澳元）：选址不变，需要 564 辆罐车、7,050 万澳元，网络总成本增加 1.2%。",
            "用两道优化题测试 ChatGPT：选址代码无法运行（数据未定义、没有需求模型）；在 5 节点网络中漏掉 8 条路线中的 2 条，但仍得到 455 美元的最优解。"
        ]
    },

    tags: [
        "Mixed-Integer Programming",
        "Fleet Sizing",
        "Multi-Objective Optimisation",
        "Gurobi",
        "Python",
        "Generative AI Evaluation",
        "ChatGPT",
        "Network Flow"
    ],

    metrics: [
        {
            value: "564",
            label: {
                en: "Tankers of 10,000 L needed for the three sites",
                zh: "三个中心所需的 1 万升罐车数量"
            }
        },
        {
            value: "A$70.5m",
            label: {
                en: "Fleet cost, adding 1.2% to the network cost",
                zh: "车队成本，使网络总成本增加 1.2%"
            }
        },
        {
            value: "435,408",
            label: {
                en: "Variables in the per-tanker assignment model",
                zh: "逐车分配模型的变量数"
            }
        },
        {
            value: "3 of 4",
            label: {
                en: "Most stops any tanker needs, out of 4 allowed",
                zh: "单辆罐车最多所需站点数（上限 4 个）"
            }
        },
        {
            value: "2 of 8",
            label: {
                en: "Routes ChatGPT left out of the transshipment model",
                zh: "ChatGPT 转运模型漏掉的路线"
            }
        },
        {
            value: "$455",
            label: {
                en: "Optimal cost ChatGPT still reached on that network",
                zh: "ChatGPT 在该网络上仍得到的最优成本"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My work · fleet model",
                zh: "本人完成 · 车队模型"
            },
            title: {
                en: "Two-Stage Approach to Sites and Fleet",
                zh: "选址与车队的两阶段求解"
            },
            steps: {
                en: [
                    "Joint MILP: sites plus fleet size per centre, 4 stops per tanker in aggregate",
                    "Same three sites: Blacktown, Camden, Clarence Valley",
                    "Fix the sites; create 564 candidate tankers",
                    "Assign each tanker to one centre and up to 4 LGAs",
                    "Report fleet per centre and total cost"
                ],
                zh: [
                    "联合模型：选址加各中心车队规模，总体满足每车 4 站",
                    "仍选出 Blacktown、Camden、Clarence Valley",
                    "固定选址，设置 564 辆候选罐车",
                    "为每辆罐车分配一个中心和最多 4 个 LGA",
                    "输出各中心车队规模和总成本"
                ]
            },
            caption: {
                en: "A per-tanker model over all 128 candidate sites was too large to solve, so the sites from the joint model were fixed first. The joint model (33,024 variables) solved to optimality in 69 seconds; the per-tanker model had 435,408 variables and a 30-minute time limit.",
                zh: "在全部 128 个候选地点上直接建立逐车模型规模过大，无法求解，因此先固定联合模型选出的地点。联合模型（33,024 个变量）69 秒求得最优；逐车模型有 435,408 个变量，设置 30 分钟时限。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · formulation",
                zh: "本人完成 · 模型构建"
            },
            title: {
                en: "Per-Tanker Model Formulation",
                zh: "逐车分配模型"
            },
            columns: {
                en: ["Element", "Formulation", "Meaning"],
                zh: ["要素", "数学表达", "含义"]
            },
            rows: [
                ["a_il", { en: "Binary", zh: "二元变量" }, { en: "1 if centre i buys tanker l", zh: "中心 i 购买罐车 l 则为 1" }],
                ["w_ijl", { en: "Binary", zh: "二元变量" }, { en: "1 if tanker l from centre i serves LGA j", zh: "中心 i 的罐车 l 服务 LGA j 则为 1" }],
                ["e_ijl", { en: "Continuous, ≥ 0", zh: "连续变量，≥ 0" }, { en: "Litres tanker l carries from centre i to LGA j", zh: "罐车 l 从中心 i 运往 LGA j 的升数" }],
                [{ en: "Objective", zh: "目标函数" }, "min 1,000 × demand + 125,000 Σ a_il + 0.10 Σ d_ij e_ijl", { en: "Capacity, fleet and distribution cost", zh: "产能、车队和配送成本" }],
                [{ en: "Tanker load", zh: "罐车载量" }, "Σij e_ijl ≤ 10,000", { en: "One tanker holds 10,000 L", zh: "每辆罐车最多 1 万升" }],
                [{ en: "Stops", zh: "站点数" }, "Σij w_ijl ≤ 4", { en: "At most 4 LGAs per tanker", zh: "每辆罐车最多服务 4 个 LGA" }],
                [{ en: "Linking", zh: "关联约束" }, "e_ijl ≤ 10,000 w_ijl; w_ijl ≤ a_il", { en: "Milk moves only on a bought tanker’s route", zh: "牛奶只能由已购罐车按其线路运输" }],
                [{ en: "Demand and capacity", zh: "需求与产能" }, "Σil e_ijl = demand_j; Σjl e_ijl ≤ 0.5 × demand", { en: "Every LGA supplied; 50% cap per centre", zh: "满足每个 LGA；单个中心不超过 50%" }]
            ],
            caption: {
                en: "l runs over 564 candidate tankers, the fewest that can carry 5.63 million litres. A centre counts as one of a tanker’s 4 stops when its own LGA also has demand.",
                zh: "l 取遍 564 辆候选罐车，这是运送 563 万升所需的最少数量。若中心所在 LGA 本身也有需求，它也计入罐车的 4 个站点之一。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · re-checked",
                zh: "本人输出 · 复核"
            },
            title: {
                en: "Network Cost With and Without a Tanker Fleet (A$m)",
                zh: "有无罐车车队时的网络成本（百万澳元）"
            },
            columns: {
                en: ["Component", "Per-litre model", "With tankers"],
                zh: ["组成", "按升计费模型", "罐车模型"]
            },
            rows: [
                [{ en: "Establishment", zh: "建设成本" }, "5,631.3", "5,631.3"],
                [{ en: "Tankers (564 × A$125,000)", zh: "罐车（564 × 12.5 万澳元）" }, "–", "70.5"],
                [{ en: "Distribution", zh: "配送成本" }, "132.0", "132.0"],
                [{ en: "Total", zh: "合计" }, "5,763.2", "5,833.7"]
            ],
            highlightRow: 3,
            caption: {
                en: "Distribution still costs d × n × A$0.10 per litre, so with the sites fixed the fleet adds a fixed A$125,000 per tanker and distribution matches the per-litre model. The fleet split was re-computed for this page with the three chosen sites.",
                zh: "配送仍按每升 d × n × 0.10 澳元计算，因此在选址固定时，车队只增加每辆 12.5 万澳元的固定成本，配送成本与按升计费模型相同。车队在各中心的分配已按选定的三个地点为本页重新计算。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · re-checked",
                zh: "本人输出 · 复核"
            },
            title: {
                en: "Fleet by Centre",
                zh: "各中心车队规模"
            },
            columns: {
                en: ["Centre", "Litres a day", "Tankers", "Most stops per tanker"],
                zh: ["配送中心", "每日供应（升）", "罐车数", "单车最多站点"]
            },
            rows: [
                ["Blacktown", "2,247,026", "225", "3"],
                ["Camden", "1,904,854", "191", "3"],
                ["Clarence Valley", "1,479,387", "148", "3"],
                [{ en: "Total", zh: "合计" }, "5,631,267", "564", "–"]
            ],
            highlightRow: 3,
            caption: {
                en: "One least-cost allocation: Blacktown and Clarence Valley can trade some LGAs at equal distribution cost. Large LGAs fill whole tankers, so the 4-stop limit never binds and each centre needs only its volume divided by 10,000, rounded up.",
                zh: "这是成本最低的分配方案之一：Blacktown 和 Clarence Valley 之间部分 LGA 可以互换而配送成本不变。大型 LGA 可以装满整车，因此 4 站上限从未起约束作用，每个中心所需罐车数就是供应量除以 1 万后向上取整。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · time objective",
                zh: "本人完成 · 时间目标"
            },
            title: {
                en: "Delivery-Time Objective and the Cost–Time Trade-off",
                zh: "配送时间目标与成本—时间权衡"
            },
            columns: {
                en: ["Item", "Formulation"],
                zh: ["项目", "数学表达"]
            },
            rows: [
                [{ en: "Route time of tanker l", zh: "罐车 l 的线路时间" }, { en: "(Σij d_ij w_ijl) ÷ 40 + 1.2 × Σij w_ijl hours", zh: "(Σij d_ij w_ijl) ÷ 40 + 1.2 × Σij w_ijl 小时" }],
                [{ en: "Time objective", zh: "时间目标" }, { en: "Minimise Σl route time, under the cost model’s constraints", zh: "在成本模型的约束下最小化 Σl 线路时间" }],
                [{ en: "Trade-off", zh: "权衡方法" }, { en: "Minimise Q such that w1 (Cost − Cost*) ÷ Cost* ≤ Q and w2 (Time − Time*) ÷ Time* ≤ Q", zh: "最小化 Q，使 w1 (成本 − 成本*) ÷ 成本* ≤ Q，且 w2 (时间 − 时间*) ÷ 时间* ≤ Q" }],
                [{ en: "Weights", zh: "权重" }, { en: "w1 = w2 = 1", zh: "w1 = w2 = 1" }]
            ],
            caption: {
                en: "Cost* and Time* are the optima of each objective on its own, so Q is the largest percentage shortfall from either ideal. Distance travelled is approximated as the sum of centre-to-LGA distances on the route. Total time cannot tell one tanker driving 10 hours from ten tankers driving one hour each: more tankers shorten elapsed delivery time but cost more, which is the trade-off the weights settle.",
                zh: "成本* 和时间* 分别是单独优化各目标时的最优值，因此 Q 是距离任一理想值的最大百分比差距。行驶距离近似为线路上中心到各 LGA 的距离之和。总时间无法区分一辆车开 10 小时和十辆车各开 1 小时：车多可以缩短实际送达时间，但成本更高，这正是权重需要平衡的地方。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · other objectives",
                zh: "本人分析 · 其他目标"
            },
            title: {
                en: "Other Objectives and How They Change the Model",
                zh: "其他目标及其对模型的影响"
            },
            columns: {
                en: ["Objective", "Effect on the model"],
                zh: ["目标", "对模型的影响"]
            },
            rows: [
                [{ en: "Repeat trips", zh: "多趟配送" }, { en: "Let a tanker make several 10,000 L trips, adding trip-level variables and a capacity per trip.", zh: "允许一辆罐车多次往返、每趟 1 万升，需要增加按趟次的变量和每趟容量约束。" }],
                [{ en: "Freshness", zh: "新鲜度" }, { en: "Refrigerated tankers cut spoilage but cost more to buy and run.", zh: "冷藏罐车能减少变质，但购置和运营成本更高。" }],
                [{ en: "Fuel, repairs and tanker life", zh: "燃油、维修与车辆寿命" }, { en: "Longer routes raise fuel cost; repairs and replacement add to fleet cost.", zh: "线路越长燃油成本越高；维修和更换也会增加车队成本。" }],
                [{ en: "Labour", zh: "人工" }, { en: "Remote LGAs may need extra drivers and staff.", zh: "偏远 LGA 可能需要额外的司机和员工。" }],
                [{ en: "Emergencies", zh: "突发事件" }, { en: "Contingency plans to reroute or speed up delivery need spare capacity and real-time data.", zh: "改道或加急配送的应急预案需要备用运力和实时数据。" }]
            ],
            caption: {
                en: "Each objective adds variables and constraints, so I proposed weighted multi-objective optimisation rather than folding everything into one cost figure.",
                zh: "每个目标都会增加变量和约束，因此我建议采用加权多目标优化，而不是把所有因素合并为一个成本数字。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · ChatGPT",
                zh: "本人分析 · ChatGPT"
            },
            title: {
                en: "ChatGPT on the Milk Siting Problem",
                zh: "ChatGPT 对牛奶选址问题的回答"
            },
            columns: {
                en: ["Issue", "What ChatGPT produced", "Assessment"],
                zh: ["问题", "ChatGPT 的输出", "评估"]
            },
            rows: [
                [{ en: "Data preparation", zh: "数据准备" }, { en: "Code written straight from the brief text", zh: "直接根据题目文字写代码" }, { en: "No demand derived from census and calcium data, and no distance matrix; both must be prepared and supplied first", zh: "没有由普查和钙数据推算需求，也没有距离矩阵；两者都需要先准备好再提供" }],
                [{ en: "Undefined sets", zh: "集合未定义" }, { en: "locations, LGAs, d, demand and total_demand never defined", zh: "locations、LGAs、d、demand、total_demand 均未定义" }, { en: "The code stops with a NameError before solving", zh: "代码在求解前就因 NameError 中断" }],
                [{ en: "Extra variable", zh: "多余变量" }, { en: "A capacity variable z multiplied by the site binary", zh: "容量变量 z 与选址二元变量相乘" }, { en: "Not defined in the formulation, and the product of two variables makes the model harder to solve and read", zh: "模型中没有定义，且两个变量相乘使模型更难求解、更难理解" }],
                [{ en: "Overall", zh: "总体" }, { en: "A plausible-looking formulation", zh: "看起来合理的模型" }, { en: "Neither the model nor a result was usable without rework", zh: "模型和结果都需要重做才能使用" }]
            ],
            caption: {
                en: "I gave ChatGPT the full brief, including the calcium table, and asked for a formulation and gurobipy code, then compared both with my own model.",
                zh: "我把完整题目（包括钙推荐量表）交给 ChatGPT，要求它给出模型和 gurobipy 代码，再与我的模型逐项比较。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · ChatGPT",
                zh: "本人分析 · ChatGPT"
            },
            title: {
                en: "ChatGPT on a Tutorial Transshipment Problem",
                zh: "ChatGPT 对课程转运问题的回答"
            },
            columns: {
                en: ["Check", "ChatGPT", "Full model"],
                zh: ["检查项", "ChatGPT", "完整模型"]
            },
            rows: [
                [{ en: "Routes modelled", zh: "建模的路线" }, { en: "6 of 8 (no 1→2 or 5→4)", zh: "8 条中的 6 条（缺少 1→2 和 5→4）" }, "8"],
                [{ en: "Supply at nodes 1 and 2", zh: "节点 1、2 的供给" }, { en: "At most 15 each", zh: "各不超过 15" }, { en: "Net outflow of 15 each; equivalent here, as supply equals demand", zh: "各净流出 15；因总供给等于总需求，此处两者等价" }],
                [{ en: "Minimum cost", zh: "最低成本" }, "$455", "$455"],
                [{ en: "Verdict", zh: "结论" }, { en: "Right answer, incomplete model", zh: "答案正确，模型不完整" }, "–"]
            ],
            caption: {
                en: "A broker moves 30 cars from locations 1 and 2 to auctions at 4 (20 cars) and 5 (10 cars), with at most 10 cars on any route. Re-solving the full 8-route network gives the same $455, so the two missing routes are simply unused at the optimum; with different costs, ChatGPT’s model would miss cheaper paths.",
                zh: "一名经纪商要把 30 辆车从地点 1 和 2 运往地点 4（20 辆）和 5（10 辆）的拍卖会，每条路线最多 10 辆。对完整 8 条路线的网络重新求解，最优成本同样是 455 美元，说明缺失的两条路线在最优解中本就不会使用；如果成本不同，ChatGPT 的模型就会错过更便宜的路径。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · ChatGPT",
                zh: "本人分析 · ChatGPT"
            },
            title: {
                en: "Where Generative AI Helped and Fell Short",
                zh: "生成式 AI 的优势与不足"
            },
            columns: {
                en: ["Area", "Finding"],
                zh: ["方面", "发现"]
            },
            rows: [
                [{ en: "Speed", zh: "效率" }, { en: "Quickly framed the problem and generated repetitive structures, such as arrays of 128 values, with fewer manual errors.", zh: "能快速梳理问题，并生成重复性结构（如 128 个数值的数组），减少手工错误。" }],
                [{ en: "Explanation", zh: "解释" }, { en: "Explained basic definitions and its own code on request.", zh: "可以按要求解释基本概念和它自己写的代码。" }],
                [{ en: "Data and context", zh: "数据与背景" }, { en: "Did not prepare data beyond the prompt; output quality depended on the data supplied.", zh: "不会准备题目以外的数据；输出质量取决于提供的数据。" }],
                [{ en: "Prompting", zh: "提示词" }, { en: "Needed precise prompts; vague ones drifted from the brief.", zh: "需要精确的提示词，表述含糊时会偏离题目。" }],
                [{ en: "Judgment", zh: "判断" }, { en: "Could not replace domain judgment; final modelling decisions stay with people.", zh: "无法替代专业判断；最终建模决策仍应由人做出。" }]
            ],
            caption: {
                en: "ChatGPT was more reliable on the clear, compact tutorial problem than on the open siting problem that needed data integration and modelling choices. I recommended supplying prepared data and key definitions up front and correcting its output iteratively.",
                zh: "ChatGPT 在清晰、紧凑的课程题目上比在需要整合数据和建模判断的开放式选址问题上可靠得多。我建议先提供整理好的数据和关键定义，再逐步纠正它的输出。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Per-tanker assignment model with the sites fixed",
                zh: "固定选址后的逐车分配模型"
            },
            language: "Python · Gurobi",
            source: {
                en: "My code · condensed; site indices corrected",
                zh: "本人代码 · 精简；已修正选址索引"
            },
            caption: {
                en: "Condensed from my notebook. The site indices are 0-based here (Blacktown, Camden, Clarence Valley); the original run passed the 1-based numbers 10, 21 and 29, which point to the next LGAs in the list, so the fleet figures on this page were re-solved with the correct indices.",
                zh: "根据我的 notebook 精简。这里的选址索引从 0 开始（Blacktown、Camden、Clarence Valley）；原始运行使用了从 1 开始的编号 10、21、29，实际指向列表中的下一个 LGA，因此本页的车队数据已用正确索引重新求解。"
            },
            code: `import math
import gurobipy as gp
from gurobipy import GRB

centres = [9, 20, 28]                       # 0-based: Blacktown, Camden, Clarence Valley
n = len(demand_2001)                        # 128 LGAs
total = demand_2001.sum()                   # 5,631,267 L/day
T = math.ceil(total / 10000)                # 564 candidate tankers of 10,000 L
LGAS, TANKERS = range(n), range(T)

mod = gp.Model("milk_tankers")
e = mod.addVars(centres, LGAS, TANKERS, lb=0, name="e")                   # litres: centre i -> LGA j on tanker l
a = mod.addVars(centres, TANKERS, vtype=GRB.BINARY, name="a")             # centre i buys tanker l
w = mod.addVars(centres, LGAS, TANKERS, vtype=GRB.BINARY, name="w")       # tanker l from centre i serves LGA j

distribution = 0.10 * sum(dist[i, j] * e[i, j, l] for i in centres for j in LGAS for l in TANKERS)
tanker_cost = 125000 * sum(a[i, l] for i in centres for l in TANKERS)
mod.setObjective(1000 * total + tanker_cost + distribution, GRB.MINIMIZE)

for i in centres:      # no centre above 50% of demand
    mod.addConstr(sum(e[i, j, l] for j in LGAS for l in TANKERS) <= 0.5 * total)
for j in LGAS:         # every LGA receives its demand
    mod.addConstr(sum(e[i, j, l] for i in centres for l in TANKERS) == demand_2001[j])
for l in TANKERS:
    mod.addConstr(sum(e[i, j, l] for i in centres for j in LGAS) <= 10000)   # tanker capacity
    mod.addConstr(sum(w[i, j, l] for i in centres for j in LGAS) <= 4)       # at most 4 LGAs per tanker
mod.addConstr(sum(a[i, l] for i in centres for l in TANKERS) <= T)

# Milk moves only on a bought tanker's route
mod.addConstrs(e[i, j, l] <= 10000 * w[i, j, l] for i in centres for j in LGAS for l in TANKERS)
mod.addConstrs(w[i, j, l] <= a[i, l] for i in centres for j in LGAS for l in TANKERS)

mod.setParam("TimeLimit", 1800)
mod.setParam("Threads", 4)
mod.optimize()`
        }
    ],

    details: {
        en: [
            {
                title: "The Brief",
                bullets: [
                    "Replace the flat per-litre charge with tankers: 10,000 L each, at most 4 LGAs per tanker from a single centre, A$125,000 per tanker, and distribution still at d × n × A$0.10.",
                    "Re-formulate to minimise total delivery time (distance at 40 km/h plus 1.2 hours per stop), then discuss the cost–time trade-off and other objectives.",
                    "Ask ChatGPT the original siting problem and a tutorial problem, and critically compare its models and code with my own."
                ]
            },
            {
                title: "Fleet Model",
                bullets: [
                    "Stage 1: a joint MILP with a site binary, an integer fleet size per centre, and a binary link for each centre–LGA pair, enforcing tanker capacity and 4 stops per tanker in aggregate (33,024 variables).",
                    "It solved to optimality in 69 seconds and chose the same three sites as the per-litre model.",
                    "Stage 2: with the sites fixed, a per-tanker model with 564 candidate tankers (the fewest that can carry 5.63 million litres) assigns each tanker to one centre and up to 4 LGAs; it has 435,408 variables and ran with a 30-minute limit."
                ]
            },
            {
                title: "Results",
                bullets: [
                    "564 tankers cost A$70.5m, raising total network cost from A$5,763.2m to A$5,833.7m (+1.2%); distribution stays at A$132.0m because the per-litre rate is unchanged.",
                    "Re-solved for this page with the three chosen sites (the original run had pointed at the neighbouring LGAs through an index offset): 225 tankers at Blacktown, 191 at Camden and 148 at Clarence Valley.",
                    "No tanker needs more than 3 stops, because large LGAs fill whole tankers, so the 4-stop limit does not bind."
                ]
            },
            {
                title: "Delivery Time and the Trade-off",
                bullets: [
                    "Route time is the distance travelled at 40 km/h plus 1.2 hours per LGA visited, summed over all tankers, under the same constraints as the cost model.",
                    "Total time treats one tanker driving 10 hours the same as ten tankers driving one hour each; buying more tankers shortens elapsed delivery time but raises cost.",
                    "To balance the two, I proposed minimising Q, the largest weighted percentage gap from each objective’s own optimum, starting with equal weights. The combined cost-and-time run found no feasible solution within its 50-minute limit, so the method is set out here without a result."
                ]
            },
            {
                title: "Other Objectives",
                bullets: [
                    "Allow repeat trips per tanker, with a 10,000 L limit per trip.",
                    "Weigh refrigerated tankers against spoilage, plus fuel, repairs, tanker life and labour for remote LGAs.",
                    "Plan for emergencies with spare capacity and real-time rerouting; handle the extra objectives with weighted multi-objective optimisation."
                ]
            },
            {
                title: "ChatGPT on the Siting Problem",
                bullets: [
                    "Its code could not run: the sets and parameters (locations, LGAs, d, demand, total_demand) were never defined.",
                    "It skipped the data work entirely, with no demand derived from census and calcium data and no distance matrix.",
                    "It added a capacity variable multiplied by the site binary, which it did not define and which makes the model harder to solve; overall the model and its result needed rework."
                ]
            },
            {
                title: "ChatGPT on a Tutorial Problem, and the Verdict",
                bullets: [
                    "On a 5-node car transshipment network, ChatGPT left out 2 of the 8 routes but still reached the optimal $455, which I confirmed by re-solving the full network: the missing routes are unused at the optimum.",
                    "It helped with speed, repetitive code and explanations, but depended on precise prompts and on data being supplied.",
                    "It is far more reliable on compact, fully specified problems than on open problems that need data integration and modelling judgment; people should prepare the data, define the sets and check every constraint."
                ]
            },
            {
                title: "Limitations",
                bullets: [
                    "Distances are pseudo-random, as in the base model, so the named sites illustrate the method.",
                    "Route distance is approximated by centre-to-LGA distances rather than an ordered tour.",
                    "The per-tanker models are large; a time limit and fixed sites were needed to get a solution."
                ]
            }
        ],
        zh: [
            {
                title: "作业要求",
                bullets: [
                    "用罐车取代按升计费：每辆 1 万升，从一个中心出发最多服务 4 个 LGA，单价 12.5 万澳元，配送成本仍为 d × n × 0.10 澳元。",
                    "改为以最短总配送时间为目标（距离按 40 公里/小时计，每站加 1.2 小时），并讨论成本与时间的权衡以及其他目标。",
                    "把原来的选址问题和一道课程题交给 ChatGPT，将它的模型和代码与我的结果对比评估。"
                ]
            },
            {
                title: "车队模型",
                bullets: [
                    "第一阶段：联合混合整数规划，包含选址二元变量、各中心车队规模整数变量，以及每个中心—LGA 配对的二元关联变量，总体上满足罐车容量和每车 4 站（33,024 个变量）。",
                    "模型 69 秒求得最优，选出的三个地点与按升计费模型相同。",
                    "第二阶段：固定选址后，用 564 辆候选罐车（运送 563 万升所需的最少数量）建立逐车模型，为每辆罐车分配一个中心和最多 4 个 LGA；模型有 435,408 个变量，设置 30 分钟时限。"
                ]
            },
            {
                title: "结果",
                bullets: [
                    "564 辆罐车成本 7,050 万澳元，网络总成本从 57.632 亿升至 58.337 亿澳元（+1.2%）；由于每升费率不变，配送成本仍为 1.320 亿澳元。",
                    "本页按选定的三个地点重新求解（原始运行因索引偏移，实际指向了相邻的 LGA）：Blacktown 225 辆、Camden 191 辆、Clarence Valley 148 辆。",
                    "大型 LGA 可以装满整车，因此没有罐车需要超过 3 个站点，4 站上限不起约束作用。"
                ]
            },
            {
                title: "配送时间与权衡",
                bullets: [
                    "线路时间为行驶距离按 40 公里/小时计算，再加每个 LGA 1.2 小时，对所有罐车求和，约束与成本模型相同。",
                    "总时间把一辆车开 10 小时和十辆车各开 1 小时视为相同；多买罐车可以缩短实际送达时间，但会提高成本。",
                    "为平衡两者，我提出最小化 Q，即距离各目标自身最优值的最大加权百分比差距，初始权重相等。成本与时间合并的模型在 50 分钟时限内没有找到可行解，因此这里只介绍方法，不报告结果。"
                ]
            },
            {
                title: "其他目标",
                bullets: [
                    "允许罐车多趟配送，每趟不超过 1 万升。",
                    "权衡冷藏罐车与变质损失，并考虑燃油、维修、车辆寿命和偏远 LGA 的人工成本。",
                    "用备用运力和实时改道应对突发事件；以加权多目标优化处理这些额外目标。"
                ]
            },
            {
                title: "ChatGPT 对选址问题的回答",
                bullets: [
                    "代码无法运行：集合和参数（locations、LGAs、d、demand、total_demand）都没有定义。",
                    "完全跳过了数据工作，既没有由普查和钙数据推算需求，也没有距离矩阵。",
                    "增加了一个与选址二元变量相乘的容量变量，既没有定义，又让模型更难求解；总体上模型和结果都需要重做。"
                ]
            },
            {
                title: "ChatGPT 对课程题的回答与总体结论",
                bullets: [
                    "在 5 节点的车辆转运网络中，ChatGPT 漏掉了 8 条路线中的 2 条，但仍得到最优成本 455 美元；我对完整网络重新求解确认，缺失的路线在最优解中本就不会使用。",
                    "它在效率、重复性代码和解释方面有帮助，但依赖精确的提示词和外部提供的数据。",
                    "它在紧凑、条件完整的问题上远比在需要整合数据和建模判断的开放式问题上可靠；数据准备、集合定义和逐条约束检查仍应由人完成。"
                ]
            },
            {
                title: "局限",
                bullets: [
                    "与基础模型一样，距离为伪随机数，选出的地名仅用于展示方法。",
                    "线路距离用中心到各 LGA 的距离之和近似，而不是按顺序的巡回路线。",
                    "逐车模型规模很大，需要设置时限并先固定选址才能求解。"
                ]
            }
        ]
    }
},

{
    id: "house-price-regression",
    category: "ai-data",

    title: {
        en: "What Drives House Prices? Hypothesis Tests, OLS vs LAD and Multiple Regression on 1,000 Sales",
        zh: "房价由什么决定？对 1,000 套房屋的假设检验、OLS 与 LAD 对比及多元回归"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · EDA, hypothesis testing, OLS and LAD regression, out-of-sample evaluation",
        zh: "个人项目 · 探索性分析、假设检验、OLS 与 LAD 回归、样本外评估"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2023",
        zh: "2023 年第二学期"
    },

    sortDate: "2023-09",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "The goal was to explain how a house’s attributes affect its sale price and to predict prices for houses not yet seen. The training data covered 1,000 sales with living area, bedrooms, bathrooms, age, occupancy status, pool, fireplace, waterfront and days on the market.",
                "I worked in Python with pandas, SciPy and statsmodels: exploratory analysis and cleaning, three tests of whether waterfront homes sell for more, OLS and LAD versions of a size-only model, then two- and three-predictor regressions scored on a separate test set of 80 houses."
            ],
            zh: [
                "目标是解释房屋特征如何影响成交价格，并预测尚未出现的房屋价格。训练数据包含 1,000 笔成交记录，变量有居住面积、卧室数、浴室数、房龄、居住状态、泳池、壁炉、是否临水和挂牌天数。",
                "我用 Python（pandas、SciPy、statsmodels）完成：探索性分析与数据清洗，用三种检验判断临水房是否卖得更贵，对仅含面积的模型分别做 OLS 和 LAD 估计，再建立两变量和三变量回归，并在另外 80 套房屋的测试集上评估。"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Clean the data, treat variable types for regression, and identify the most and least influential predictors with evidence.",
                "Test whether waterfront houses sell for more with a t-test, a median test and a Mann–Whitney test, checking every assumption.",
                "Fit price on living area by OLS and by LAD, assess the assumptions of each and compare the estimates.",
                "Add a second and then a third predictor, check collinearity, and compare all three models’ test RMSE on 80 unseen houses."
            ],
            zh: [
                "清洗数据、为回归处理变量类型，并用证据找出影响最大和最小的变量。",
                "分别用 t 检验、中位数检验和 Mann–Whitney 检验判断临水房是否更贵，并检查各自的假设。",
                "用 OLS 和 LAD 分别拟合价格对居住面积的回归，评估各自假设并比较估计结果。",
                "依次加入第二、第三个变量，检查共线性，并比较三个模型在 80 套新房屋上的测试 RMSE。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Analysed 1,000 house sales in Python (statsmodels): living area was the strongest driver (r = 0.76), and comparing OLS with outlier-robust LAD showed a few luxury sales inflating the price slope by 47% (87.1 vs 59.2 per sqft).",
            "Built 1- to 3-predictor regressions: adding bathrooms and waterfront lifted R² from 0.584 to 0.629 (waterfront worth +$49,920) and gave the lowest test error on 80 unseen houses, about $142k RMSE against $144k for size alone."
        ],
        zh: [
            "用 Python（statsmodels）分析 1,000 笔房屋成交：居住面积是最强的价格驱动因素（r = 0.76）；将 OLS 与抗异常值的 LAD 对比，发现少数豪宅使价格斜率被高估 47%（每 sqft 87.1 对 59.2）。",
            "建立 1—3 个变量的回归：加入浴室数和临水后 R² 从 0.584 升至 0.629（临水溢价 49,920 美元），在 80 套新房屋上的测试误差最低，RMSE 约 14.2 万美元，仅用面积时约 14.4 万美元。"
        ]
    },

    tags: [
        "Linear Regression",
        "OLS",
        "LAD / Quantile Regression",
        "Hypothesis Testing",
        "Python",
        "statsmodels",
        "SciPy",
        "EDA"
    ],

    metrics: [
        {
            value: "997",
            label: {
                en: "Sales kept after dropping 3 with no price",
                zh: "删除 3 条无价格记录后保留的成交数"
            }
        },
        {
            value: "r = 0.76",
            label: {
                en: "Living area, the strongest single predictor",
                zh: "居住面积，单一变量中相关性最强"
            }
        },
        {
            value: "87.1 vs 59.2",
            label: {
                en: "Price per sqft unit, OLS vs LAD",
                zh: "每 sqft 价格：OLS 对 LAD"
            }
        },
        {
            value: "0.584 → 0.629",
            label: {
                en: "R², size only vs size, baths and waterfront",
                zh: "R²：仅面积 → 面积、浴室和临水"
            }
        },
        {
            value: "+$49,920",
            label: {
                en: "Waterfront premium at the same size and baths",
                zh: "面积和浴室数相同时的临水溢价"
            }
        },
        {
            value: "62 of 71",
            label: {
                en: "Waterfront homes priced above the median",
                zh: "价格高于中位数的临水房"
            }
        }
    ],

    visuals: [
        {
            type: "image",
            src: "assets/img/projects/house-price-regression/correlation-heatmap.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "Correlation of Every Predictor with Price",
                zh: "各变量与价格的相关性"
            },
            caption: {
                en: "Living area (0.76) and bathrooms (0.67) move most closely with price; days on the market (0.11) the least. Size and bathrooms are themselves correlated at 0.71, which is why the later models check for collinearity.",
                zh: "居住面积（0.76）和浴室数（0.67）与价格的相关性最高，挂牌天数（0.11）最低。面积与浴室数之间的相关系数也达到 0.71，因此后续模型专门检查了共线性。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · EDA",
                zh: "本人输出 · 探索性分析"
            },
            title: {
                en: "Cleaning and Variable Treatment",
                zh: "数据清洗与变量处理"
            },
            columns: {
                en: ["Step", "What I found", "Decision"],
                zh: ["步骤", "发现", "处理"]
            },
            rows: [
                [{ en: "Missing values", zh: "缺失值" }, { en: "3 of 1,000 sales had no price", zh: "1,000 笔中有 3 笔没有价格" }, { en: "Dropped; too few to bias the sample", zh: "删除；数量太少，不会造成偏差" }],
                [{ en: "Data types", zh: "数据类型" }, { en: "Pool stored as Yes/No text", zh: "泳池以 Yes/No 文字存储" }, { en: "Recoded to 1/0, like fireplace and waterfront", zh: "与壁炉、临水一样改为 1/0" }],
                [{ en: "Categorical variable", zh: "分类变量" }, { en: "Occupancy has 3 levels (owner, vacant, tenant)", zh: "居住状态有 3 个水平（自住、空置、出租）" }, { en: "Use 2 dummy variables in regression", zh: "回归中使用 2 个虚拟变量" }],
                [{ en: "Skewness", zh: "偏度" }, { en: "Price skewness 5.88 and kurtosis 55.8; size, age and days on market also right-skewed", zh: "价格偏度 5.88、峰度 55.8；面积、房龄和挂牌天数也右偏" }, { en: "Kept the outliers and compared OLS with robust LAD; log or square-root transforms noted as options", zh: "保留异常值，并用稳健的 LAD 与 OLS 对比；对数或平方根变换作为备选" }]
            ],
            caption: {
                en: "Scales differ across variables, but OLS coefficients absorb the units, so no normalisation was applied.",
                zh: "各变量量纲不同，但 OLS 系数会自动吸收单位差异，因此没有做标准化。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/house-price-regression/waterfront-prices.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "Price Distribution With and Without Waterfront",
                zh: "临水与非临水房的价格分布"
            },
            caption: {
                en: "Both groups are heavily right-skewed. The 71 waterfront homes average $259,827, against $153,556 for all sales, but a few sales above $1 million stretch the tail.",
                zh: "两组价格都严重右偏。71 套临水房平均 259,827 美元，而全部成交的平均价为 153,556 美元，但少数超过 100 万美元的成交拉长了尾部。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · hypothesis tests",
                zh: "本人输出 · 假设检验"
            },
            title: {
                en: "Do Waterfront Homes Sell for More? Three Tests",
                zh: "临水房是否更贵？三种检验"
            },
            columns: {
                en: ["Test", "Statistic", "p-value", "Key assumption", "Holds?"],
                zh: ["检验", "统计量", "p 值", "关键假设", "是否满足"]
            },
            rows: [
                [{ en: "Welch t-test, one-sided", zh: "Welch t 检验（单侧）" }, "t = 3.92", "0.0001", { en: "Near-normal means via CLT; finite 4th moment", zh: "依靠中心极限定理近似正态；四阶矩有限" }, { en: "Doubtful: skewness 3.8, kurtosis 16.2 in the waterfront group", zh: "存疑：临水组偏度 3.8、峰度 16.2" }],
                [{ en: "Median test", zh: "中位数检验" }, "χ² = 41.0", "1.5e−10", { en: "Expected count of at least 5 per cell", zh: "每个单元格期望频数不少于 5" }, { en: "Yes", zh: "满足" }],
                [{ en: "Mann–Whitney U, one-sided", zh: "Mann–Whitney U（单侧）" }, "U = 50,574.5", "1.9e−14", { en: "Independent groups, ordinal data", zh: "两组独立，数据至少为定序" }, { en: "Yes", zh: "满足" }]
            ],
            caption: {
                en: "All three reject equal prices at the 5% level. I relied most on the Mann–Whitney test: it does not need the normality the skewed prices violate, and it uses the full ranking rather than only above or below the median, so it has more power than the median test. 62 of 71 waterfront homes sold above the overall median, against 432 of 917 other homes.",
                zh: "三种检验都在 5% 显著性水平下拒绝“价格相同”的原假设。我最信任 Mann–Whitney 检验：它不需要价格分布满足正态性（偏态价格不满足），而且利用完整的排序信息，而不只是高于或低于中位数，因此比中位数检验更有效力。71 套临水房中有 62 套价格高于总体中位数，其他房屋为 917 套中的 432 套。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/house-price-regression/ols-vs-lad.png",
            source: {
                en: "My figure",
                zh: "本人绘制"
            },
            title: {
                en: "OLS (red) vs LAD (blue): Price on Living Area",
                zh: "OLS（红）与 LAD（蓝）：价格对居住面积"
            },
            caption: {
                en: "The handful of sales above $1 million pull the least-squares line upwards at large sizes; the median-based LAD line follows the bulk of the data.",
                zh: "少数超过 100 万美元的成交把最小二乘回归线在大面积处向上拉；基于中位数的 LAD 回归线更贴近大部分数据。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · regression",
                zh: "本人输出 · 回归"
            },
            title: {
                en: "Size-Only Model: OLS vs LAD",
                zh: "仅含面积的模型：OLS 对 LAD"
            },
            columns: {
                en: ["Measure", "OLS", "LAD"],
                zh: ["指标", "OLS", "LAD"]
            },
            rows: [
                [{ en: "Intercept ($)", zh: "截距（美元）" }, "−48,630", "6,870"],
                [{ en: "Slope ($ per sqft)", zh: "斜率（美元/sqft）" }, "87.14", "59.19"],
                [{ en: "Slope t-statistic", zh: "斜率 t 统计量" }, "37.35", "44.56"],
                [{ en: "R² / pseudo R²", zh: "R² / 伪 R²" }, "0.584", "0.354"],
                [{ en: "Residual skewness / kurtosis", zh: "残差偏度 / 峰度" }, "5.15 / 63.4", "–"]
            ],
            caption: {
                en: "Both slopes are positive and highly significant, but the OLS slope is 47% steeper because squared errors give extreme sales great weight. With residual kurtosis of 63, the finite-fourth-moment assumption behind OLS is the weakest link; LAD only needs a finite first moment, so I preferred it for this data.",
                zh: "两种斜率都为正且高度显著，但 OLS 斜率陡 47%，因为平方误差让极端成交的权重很大。残差峰度高达 63，OLS 所依赖的四阶矩有限假设最不可靠；LAD 只要求一阶矩有限，因此我认为它更适合这份数据。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · regression",
                zh: "本人输出 · 回归"
            },
            title: {
                en: "Adding Predictors: Fit and Test Error",
                zh: "加入变量：拟合度与测试误差"
            },
            columns: {
                en: ["Model", "R²", "Adj. R²", "SER ($)", "Test RMSE ($k)"],
                zh: ["模型", "R²", "调整后 R²", "SER（美元）", "测试 RMSE（千美元）"]
            },
            rows: [
                [{ en: "Size", zh: "面积" }, "0.584", "0.583", "72,574", "144"],
                [{ en: "Size + baths", zh: "面积 + 浴室" }, "0.617", "0.616", "69,647", "148"],
                [{ en: "Size + baths + waterfront", zh: "面积 + 浴室 + 临水" }, "0.629", "0.628", "68,533", "142"]
            ],
            highlightRow: 2,
            caption: {
                en: "Bathrooms were the next-strongest correlate of price (0.67) and waterfront added a distinct premium. In the final model each extra bathroom adds $45,480 and waterfront $49,920, holding size fixed; VIFs of 2.01, 2.02 and 1.04 rule out problematic collinearity. Test error on 80 unseen houses was lowest for the three-predictor model, but the two-predictor model did worse than size alone, a reminder that better in-sample fit does not guarantee better predictions on a small test set.",
                zh: "浴室数是与价格相关性第二强的变量（0.67），临水则带来独立的溢价。最终模型中，在面积不变时，每多一个浴室价格高 45,480 美元，临水高 49,920 美元；VIF 分别为 2.01、2.02 和 1.04，不存在严重共线性。在 80 套新房屋上，三变量模型的测试误差最低，但两变量模型反而不如仅用面积的模型，说明样本内拟合更好并不保证在小测试集上预测更准。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Waterfront tests, OLS vs LAD and test-set RMSE",
                zh: "临水检验、OLS 与 LAD 对比及测试集 RMSE"
            },
            language: "Python · pandas · SciPy · statsmodels",
            source: {
                en: "My code · condensed from the notebook",
                zh: "本人代码 · 根据 notebook 精简"
            },
            caption: {
                en: "Condensed from my notebook; plotting and printing removed.",
                zh: "根据我的 notebook 精简，去掉了绘图和打印语句。"
            },
            code: `import numpy as np
import pandas as pd
import statsmodels.formula.api as smf
from scipy import stats

train = pd.read_csv("house_price_data_train.csv").dropna()      # 997 sales with a price
test = pd.read_csv("house_price_data_test.csv").dropna()        # 80 unseen sales
for df in (train, test):
    df["Pool"] = df["Pool"].replace({"Yes": 1, "No": 0})

# Do waterfront homes sell for more? Three tests at alpha = 0.05
wf = train.loc[train["Waterfront"] == 1, "price"]
other = train.loc[train["Waterfront"] == 0, "price"]
t_stat, p_two = stats.ttest_ind(wf, other, equal_var=False)       # Welch t-test
chi2, p_median, grand_median, table = stats.median_test(other, wf, ties="ignore")
u_stat, p_mw = stats.mannwhitneyu(wf, other, alternative="greater")

# Size-only model: least squares vs least absolute deviations (median regression)
ols_1 = smf.ols("price ~ sqft", data=train).fit()                # slope 87.14, R2 0.584
lad_1 = smf.quantreg("price ~ sqft", data=train).fit(q=0.5)       # slope 59.19

# Add predictors in order of evidence from the EDA
ols_2 = smf.ols("price ~ sqft + Baths", data=train).fit()                  # R2 0.617
ols_3 = smf.ols("price ~ sqft + Baths + Waterfront", data=train).fit()     # R2 0.629

def vif(target, others):
    r2 = smf.ols(f"{target} ~ {' + '.join(others)}", data=train).fit().rsquared_adj
    return 1 / (1 - r2)

vifs = {v: vif(v, [o for o in ["sqft", "Baths", "Waterfront"] if o != v])
        for v in ["sqft", "Baths", "Waterfront"]}                 # all about 2 or less

# Out-of-sample check on the 80 test houses
def rmse(model, cols):
    pred = model.predict(test[cols])
    return np.sqrt(np.mean((test["price"] - pred) ** 2))

errors = {"size": rmse(ols_1, ["sqft"]),
          "size + baths": rmse(ols_2, ["sqft", "Baths"]),
          "size + baths + waterfront": rmse(ols_3, ["sqft", "Baths", "Waterfront"])}`
        }
    ],

    details: {
        en: [
            {
                title: "The Brief",
                bullets: [
                    "Explain how house attributes affect price and predict prices for unseen houses, using 1,000 training sales and 80 test sales.",
                    "Cover exploratory analysis, hypothesis tests, OLS and LAD regression, multiple regression, collinearity and out-of-sample RMSE, then advise a property investor."
                ]
            },
            {
                title: "Exploration and Cleaning",
                bullets: [
                    "Dropped the 3 sales with no price and recoded pool from Yes/No to 1/0; occupancy, pool, fireplace and waterfront are categorical, the rest numeric.",
                    "Price is extremely right-skewed (skewness 5.88, kurtosis 55.8), so I kept the outliers but planned a robust LAD comparison rather than deleting expensive sales.",
                    "All nine predictors correlate significantly with price at the 5% level; living area is the strongest (r = 0.76) and days on the market the weakest (r = 0.11)."
                ]
            },
            {
                title: "Waterfront Hypothesis Tests",
                bullets: [
                    "Welch t-test: t = 3.92, one-sided p = 0.0001; but CLT and finite-fourth-moment assumptions are doubtful given skewness of 3.8 and kurtosis of 16.2 in the waterfront group.",
                    "Median test: χ² = 41.0, p = 1.5 × 10⁻¹⁰, with every cell count above 5; 62 of 71 waterfront homes sold above the median.",
                    "Mann–Whitney U = 50,574.5, p = 1.9 × 10⁻¹⁴; I trusted this test most because it needs no normality and uses full rank information."
                ]
            },
            {
                title: "OLS vs LAD",
                bullets: [
                    "OLS: price = −48,630 + 87.14 × sqft, R² 0.584; LAD: price = 6,870 + 59.19 × sqft, pseudo R² 0.354.",
                    "Linearity and exogeneity looked reasonable, but residual kurtosis of 63 breaks the finite-fourth-moment assumption that OLS needs.",
                    "LAD needs only a finite first moment and is far less sensitive to the luxury sales, so I preferred it here; OLS overstates the value of each extra unit of size by 47%."
                ]
            },
            {
                title: "Multiple Regression and Prediction",
                bullets: [
                    "Second predictor: bathrooms, the next-strongest correlate (0.67); R² rose to 0.617 (F = 800.4) and SER fell from $72,574 to $69,647.",
                    "Third predictor: waterfront; R² 0.629 (F = 562.3), with every coefficient significant and VIFs of 2.01, 2.02 and 1.04.",
                    "Test RMSE on 80 houses: about $144k (size), $148k (size + baths) and $142k (all three), so the richest model predicted best, though not every added variable helped."
                ]
            },
            {
                title: "Findings for an Investor",
                bullets: [
                    "Size, bathrooms and waterfront location are the attributes that add the most value; holding size fixed, a waterfront home commands about $49,920 more.",
                    "Because a few extreme sales distort averages, median-based estimates such as LAD give a more realistic guide to typical prices.",
                    "OLS assumptions are not fully met, so log transforms or robust methods would be the next step before relying on point predictions."
                ]
            }
        ],
        zh: [
            {
                title: "作业要求",
                bullets: [
                    "用 1,000 笔训练成交和 80 笔测试成交，解释房屋特征如何影响价格，并预测新房屋的价格。",
                    "内容包括探索性分析、假设检验、OLS 与 LAD 回归、多元回归、共线性和样本外 RMSE，最后为房产投资者提出建议。"
                ]
            },
            {
                title: "探索与清洗",
                bullets: [
                    "删除 3 笔没有价格的记录，把泳池从 Yes/No 改为 1/0；居住状态、泳池、壁炉和临水为分类变量，其余为数值变量。",
                    "价格极度右偏（偏度 5.88、峰度 55.8），因此保留异常值，改用稳健的 LAD 做对比，而不是删除高价成交。",
                    "九个变量与价格的相关性在 5% 水平下都显著；居住面积最强（r = 0.76），挂牌天数最弱（r = 0.11）。"
                ]
            },
            {
                title: "临水假设检验",
                bullets: [
                    "Welch t 检验：t = 3.92，单侧 p = 0.0001；但临水组偏度 3.8、峰度 16.2，中心极限定理和四阶矩有限假设都存疑。",
                    "中位数检验：χ² = 41.0，p = 1.5 × 10⁻¹⁰，所有单元格频数都大于 5；71 套临水房中有 62 套高于中位数。",
                    "Mann–Whitney U = 50,574.5，p = 1.9 × 10⁻¹⁴；我最信任这一检验，因为它不需要正态性，并利用完整的排序信息。"
                ]
            },
            {
                title: "OLS 与 LAD",
                bullets: [
                    "OLS：价格 = −48,630 + 87.14 × sqft，R² 0.584；LAD：价格 = 6,870 + 59.19 × sqft，伪 R² 0.354。",
                    "线性和外生性假设基本合理，但残差峰度高达 63，违反了 OLS 所需的四阶矩有限假设。",
                    "LAD 只要求一阶矩有限，对豪宅成交远没有那么敏感，因此我认为它更适合；OLS 把每单位面积的价值高估了 47%。"
                ]
            },
            {
                title: "多元回归与预测",
                bullets: [
                    "第二个变量：浴室数，与价格相关性第二强（0.67）；R² 升至 0.617（F = 800.4），SER 从 72,574 降至 69,647 美元。",
                    "第三个变量：临水；R² 0.629（F = 562.3），所有系数都显著，VIF 分别为 2.01、2.02 和 1.04。",
                    "80 套房屋上的测试 RMSE：仅面积约 14.4 万、面积 + 浴室约 14.8 万、三个变量约 14.2 万美元；变量最多的模型预测最好，但并非每加一个变量都有帮助。"
                ]
            },
            {
                title: "给投资者的结论",
                bullets: [
                    "面积、浴室数和临水位置是最能提升价值的特征；面积相同时，临水房约贵 49,920 美元。",
                    "少数极端成交会扭曲平均值，基于中位数的估计（如 LAD）更能反映典型价格。",
                    "OLS 假设没有完全满足，在依赖点预测之前，下一步应尝试对数变换或稳健方法。"
                ]
            }
        ]
    }
},

{
    id: "earnings-height-regression",
    category: "ai-data",

    title: {
        en: "Does Height Pay? Modelling Earnings for 14,000 US Workers with Multiple Regression",
        zh: "身高会影响收入吗？用多元回归为 1.4 万名美国劳动者建模收入"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Team of 5 · my part: exploratory analysis, data cleaning, model selection and assumption checks",
        zh: "5 人小组 · 本人负责：探索性分析、数据清洗、模型选择与假设检验"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2023",
        zh: "2023 年第二学期"
    },

    sortDate: "2023-11",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Labour economists have long documented a height premium: taller people tend to earn more. Using the 1994 US National Health Interview Survey (the Case and Paxson data), our team modelled annual earnings against height, education, age, sex, marital status, occupation, class of worker, race, region and weight.",
                "We had 14,296 surveyed workers to train on and had to predict earnings for 3,574 others whose earnings were hidden; markers scored the predictions by RMSE. Only methods taught in the unit were allowed, so the work centred on multiple linear regression, interactions and transformations.",
                "I carried out the exploratory analysis and cleaning, and the model selection: building and comparing three regression specifications and their variants, and checking each against the least-squares assumptions, collinearity and omitted-variable bias."
            ],
            zh: [
                "劳动经济学研究长期记录了“身高溢价”：个子高的人往往收入更高。我们小组使用 1994 年美国全国健康访问调查（Case 与 Paxson 数据），以年收入为因变量，对身高、教育年限、年龄、性别、婚姻状况、职业、雇主类型、种族、地区和体重建模。",
                "训练数据有 14,296 名受访者，另需为 3,574 名收入未知的受访者做预测，由阅卷人按 RMSE 评分。作业只允许使用课程讲授的方法，因此重点是多元线性回归、交互项和变量变换。",
                "我负责探索性分析和数据清洗，以及模型选择：建立并比较三种回归设定及其变体，并逐一检查最小二乘假设、多重共线性和遗漏变量偏误。"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Understand and clean the data, then use exploratory analysis to justify transformations and predictor choices.",
                "Split the training data for validation and compare a full model, a reduced model without interactions and a reduced model with interactions.",
                "For each model report significance, adjusted R² and RMSE, assess the assumptions, multicollinearity and omitted-variable bias, and compare validation error.",
                "Choose one model, predict earnings for 3,574 people, and discuss limitations."
            ],
            zh: [
                "理解并清洗数据，用探索性分析为变量变换和变量选择提供依据。",
                "划分训练集与验证集，比较全变量模型、不含交互项的简化模型和含交互项的简化模型。",
                "为每个模型报告显著性、调整后 R² 和 RMSE，评估假设、多重共线性和遗漏变量偏误，并比较验证误差。",
                "选定最终模型，为 3,574 人预测收入，并讨论局限。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "In a team of 5 modelling earnings for 14,293 US workers, my part was the EDA and model selection: 3 regression specifications plus log, cubic and spline variants, each checked for assumptions, collinearity and omitted-variable bias.",
            "The chosen model (cubic education with interactions) reached adjusted R² 0.371 and validation RMSE $21,187, 21.5% below predicting the average ($26,992), and produced 3,574 test predictions."
        ],
        zh: [
            "在 5 人小组中为 14,293 名美国劳动者建模收入，本人负责探索性分析和模型选择：比较 3 种回归设定及对数、三次多项式和样条变体，并逐一检查假设、共线性和遗漏变量偏误。",
            "最终模型（教育三次项加交互项）调整后 R² 0.371，验证集 RMSE 21,187 美元，比直接用平均值预测（26,992 美元）低 21.5%，并完成 3,574 条测试预测。"
        ]
    },

    tags: [
        "Multiple Linear Regression",
        "Interaction Terms",
        "Polynomial Regression",
        "Spline Regression",
        "Forward Selection",
        "Python",
        "statsmodels",
        "EDA"
    ],

    metrics: [
        {
            value: "14,293",
            label: {
                en: "Workers after cleaning, split 80/20 for validation",
                zh: "清洗后的样本量，按 80/20 划分验证集"
            }
        },
        {
            value: "≥ 25%",
            label: {
                en: "Workers in the top earnings bracket, capped at $84,055",
                zh: "处于最高收入档（上限 84,055 美元）的比例"
            }
        },
        {
            value: "0.360 → 0.371",
            label: {
                en: "Adjusted R², full model vs chosen model",
                zh: "调整后 R²：全变量模型 → 最终模型"
            }
        },
        {
            value: "$21,187",
            label: {
                en: "Validation RMSE, lowest of 6 candidates",
                zh: "验证集 RMSE，6 个候选模型中最低"
            }
        },
        {
            value: "+$376",
            label: {
                en: "Earnings per extra inch of height, full model",
                zh: "全变量模型中每高 1 英寸的收入增加"
            }
        },
        {
            value: "3,574",
            label: {
                en: "Test predictions submitted (team)",
                zh: "提交的测试集预测（团队）"
            }
        }
    ],

    visuals: [
        {
            type: "image",
            src: "assets/img/projects/earnings-height/distributions.png",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Distributions of the Numeric Variables",
                zh: "数值变量的分布"
            },
            caption: {
                en: "Earnings were reported in 23 brackets and converted to bracket averages, so the variable takes few distinct values and piles up at the top bracket of $84,055, which holds at least a quarter of workers. Education peaks at 12 and 16 years, height is close to normal, and weight is strongly right-skewed (skewness 3.10, kurtosis 16.9).",
                zh: "收入原本按 23 个区间申报，再换算为区间平均值，因此取值很少，并在最高档 84,055 美元处大量堆积，这一档至少占四分之一。教育年限在 12 年和 16 年处出现峰值，身高接近正态分布，体重则明显右偏（偏度 3.10、峰度 16.9）。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Correlation with Earnings",
                zh: "各变量与收入的相关系数"
            },
            columns: {
                en: ["Variable", "Correlation", "Reading"],
                zh: ["变量", "相关系数", "解读"]
            },
            rows: [
                [{ en: "Education (years)", zh: "教育年限" }, "0.388", { en: "Strongest positive link; curved, so a transform is needed", zh: "正相关最强；关系呈曲线，需要变换" }],
                [{ en: "Marital status (code)", zh: "婚姻状况（编码）" }, "−0.349", { en: "Married with spouse at home earn most", zh: "已婚且配偶同住者收入最高" }],
                [{ en: "Occupation (code)", zh: "职业（编码）" }, "−0.302", { en: "Higher codes are manual jobs; large median gaps", zh: "编码越大越偏体力劳动；中位数差距大" }],
                [{ en: "Race (code)", zh: "种族（编码）" }, "−0.131", { en: "Clear median differences between groups", zh: "组间中位数差异明显" }],
                [{ en: "Height (inches)", zh: "身高（英寸）" }, "0.102", { en: "Weak positive link; 0.702 with sex", zh: "弱正相关；与性别相关系数 0.702" }],
                [{ en: "Age", zh: "年龄" }, "0.093", { en: "Little linear trend", zh: "线性趋势不明显" }],
                [{ en: "Sex (1 = male)", zh: "性别（1 = 男）" }, "0.052", { en: "Medians close", zh: "中位数接近" }],
                [{ en: "Region (code)", zh: "地区（编码）" }, "−0.037", { en: "Near zero", zh: "接近零" }],
                [{ en: "Weight (lb)", zh: "体重（磅）" }, "0.013", { en: "Near zero", zh: "接近零" }]
            ],
            caption: {
                en: "Correlations for coded categories only hint at structure, so the categorical variables entered the models as dummies (m − 1 per variable), with the box plots below used to judge them. The only strong correlation between predictors is height with sex (0.702), so multicollinearity was not expected to be a problem.",
                zh: "分类变量的编码相关系数只能提示大致关系，因此在模型中把它们转换为虚拟变量（每个变量 m − 1 个），并结合下方箱线图判断。变量之间唯一较强的相关是身高与性别（0.702），因此预计不会出现严重的多重共线性。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/earnings-height/earnings-by-category.png",
            source: {
                en: "My part · EDA",
                zh: "本人负责 · 探索性分析"
            },
            title: {
                en: "Earnings by Sex, Marital Status, Class of Worker, Region, Race and Occupation",
                zh: "按性别、婚姻、雇主类型、地区、种族和职业划分的收入"
            },
            caption: {
                en: "Marital status, race and occupation show distinct medians and spreads; sex, class of worker and region look similar across groups. Married workers living with a spouse have a much higher median than every other marital group.",
                zh: "婚姻状况、种族和职业的中位数和离散程度差异明显；性别、雇主类型和地区各组之间较为接近。已婚且配偶同住者的收入中位数远高于其他婚姻状况。"
            }
        },
        {
            type: "process",
            source: {
                en: "My part · model selection",
                zh: "本人负责 · 模型选择"
            },
            title: {
                en: "How the Candidate Models Were Built",
                zh: "候选模型的构建流程"
            },
            steps: {
                en: [
                    "Model 1: all 10 predictors, categories as dummies",
                    "Model 2: forward selection on adjusted R², stop at the plateau",
                    "Model 3: forward selection with interactions, drop insignificant terms",
                    "Variants of Model 3: log earnings, cubic or spline education",
                    "Compare adjusted R², SER, validation RMSE and MAE"
                ],
                zh: [
                    "模型 1：全部 10 个变量，分类变量转为虚拟变量",
                    "模型 2：按调整后 R² 前向选择，在增幅趋平处停止",
                    "模型 3：含交互项的前向选择，剔除不显著项",
                    "模型 3 变体：对数收入、教育三次项或样条",
                    "比较调整后 R²、SER、验证集 RMSE 和 MAE"
                ]
            },
            caption: {
                en: "All candidates were fitted on the same 80% training split (11,434 workers, random seed 42) and scored on the same 20% validation split (2,859 workers), so their errors are directly comparable.",
                zh: "所有候选模型都在同一个 80% 训练集（11,434 人，随机种子 42）上拟合，并在同一个 20% 验证集（2,859 人）上评分，因此误差可以直接比较。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · model selection",
                zh: "本人负责 · 模型选择"
            },
            title: {
                en: "Forward Selection Path for Model 2",
                zh: "模型 2 的前向选择路径"
            },
            columns: {
                en: ["Step", "Predictor added", "Adj. R²", "SER ($)"],
                zh: ["步骤", "加入的变量", "调整后 R²", "SER（美元）"]
            },
            rows: [
                ["1", { en: "Occupation", zh: "职业" }, "0.150", "24,864"],
                ["2", { en: "Marital status", zh: "婚姻状况" }, "0.288", "22,762"],
                ["3", { en: "Education", zh: "教育年限" }, "0.334", "22,013"],
                ["4", { en: "Region", zh: "地区" }, "0.341", "21,900"],
                ["5", { en: "Age", zh: "年龄" }, "0.349", "21,767"],
                ["6", { en: "Class of worker", zh: "雇主类型" }, "0.353", "21,701"],
                ["7", { en: "Race", zh: "种族" }, "0.357", "21,630"],
                ["8", { en: "Height", zh: "身高" }, "0.359", "21,588"],
                ["9", { en: "Sex", zh: "性别" }, "0.359", "21,588"],
                ["10", { en: "Weight", zh: "体重" }, "0.360", "21,584"]
            ],
            highlightRow: 5,
            caption: {
                en: "Gains flatten after step 6, so Model 2 keeps six predictors to limit overfitting. Once height is in, sex adds nothing, consistent with the 0.702 correlation between them.",
                zh: "第 6 步之后增幅趋平，因此模型 2 保留六个变量以减少过拟合。加入身高后，性别不再带来任何提升，与两者 0.702 的相关系数一致。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · model selection",
                zh: "本人负责 · 模型选择"
            },
            title: {
                en: "Candidate Models on the Same Validation Set",
                zh: "候选模型在同一验证集上的表现"
            },
            columns: {
                en: ["Model", "Adj. R²", "SER ($)", "Validation RMSE ($)", "Validation MAE ($)"],
                zh: ["模型", "调整后 R²", "SER（美元）", "验证 RMSE（美元）", "验证 MAE（美元）"]
            },
            rows: [
                [{ en: "1 · All predictors", zh: "1 · 全部变量" }, "0.360", "21,584", "21,314", "17,587"],
                [{ en: "2 · Six predictors", zh: "2 · 六个变量" }, "0.353", "21,701", "21,429", "17,669"],
                [{ en: "3 · Interactions", zh: "3 · 交互项" }, "0.370", "21,417", "21,231", "17,177"],
                [{ en: "3 · Log earnings", zh: "3 · 对数收入" }, "0.352", "21,706", "21,597", "16,931"],
                [{ en: "3 · Cubic education", zh: "3 · 教育三次项" }, "0.371", "21,394", "21,187", "17,121"],
                [{ en: "3 · Spline, 2 knots", zh: "3 · 样条（2 个节点）" }, "0.370", "21,409", "21,440", "17,401"]
            ],
            highlightRow: 4,
            caption: {
                en: "Model 3 keeps eight predictors and seven interaction sets (education, age and height with occupation and marital status, plus age with class of worker). The cubic-education version has the best adjusted R² and RMSE; the log model has the lowest MAE and satisfies the assumptions best but is harder to interpret, so we chose the cubic model. For the log model, earnings were converted back with Duan’s smearing estimator.",
                zh: "模型 3 保留八个变量和七组交互项（教育、年龄、身高分别与职业和婚姻状况交互，以及年龄与雇主类型交互）。教育三次项版本的调整后 R² 和 RMSE 最好；对数模型的 MAE 最低、假设满足得最好，但更难解释，因此最终选择三次项模型。对数模型的预测用 Duan 涂抹估计量换算回原始尺度。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · assumption checks",
                zh: "本人负责 · 假设检验"
            },
            title: {
                en: "Least-Squares Assumptions for the Chosen Model",
                zh: "最终模型的最小二乘假设检查"
            },
            columns: {
                en: ["Assumption", "Finding", "Response"],
                zh: ["假设", "发现", "应对"]
            },
            rows: [
                [{ en: "Linearity", zh: "线性" }, { en: "Education is curved against earnings", zh: "教育与收入呈曲线关系" }, { en: "Cubic terms capture the curve", zh: "用三次项刻画曲线" }],
                [{ en: "Exogeneity", zh: "外生性" }, { en: "Residual mean still drifts from zero, though less than without the cubic terms", zh: "残差均值仍偏离零，但比不加三次项时小" }, { en: "Acknowledged as a limitation", zh: "作为局限披露" }],
                [{ en: "i.i.d. sampling", zh: "独立同分布" }, { en: "No detail on how the survey sampled", zh: "调查抽样方式不详" }, { en: "Assumed", zh: "假定成立" }],
                [{ en: "Finite fourth moment", zh: "四阶矩有限" }, { en: "Earnings bounded between $4,726 and $84,055", zh: "收入介于 4,726 和 84,055 美元之间" }, { en: "Satisfied", zh: "满足" }],
                [{ en: "Multicollinearity", zh: "多重共线性" }, { en: "Base predictors’ VIFs 1.02–1.40 (mean 1.14); polynomial terms up to 1,564", zh: "基础变量 VIF 为 1.02—1.40（均值 1.14）；多项式项最高 1,564" }, { en: "Expected from powers of one variable; accepted", zh: "同一变量的幂次项必然相关，可以接受" }],
                [{ en: "Homoskedasticity", zh: "同方差" }, { en: "Residual spread grows with fitted earnings", zh: "残差离散度随拟合值增大" }, { en: "Use heteroskedasticity-robust (HC0) standard errors", zh: "使用异方差稳健（HC0）标准误" }],
                [{ en: "Omitted variables", zh: "遗漏变量" }, { en: "Excluded sex and weight correlate weakly with included predictors, except sex with height", zh: "被排除的性别和体重与已纳入变量相关性弱，性别与身高除外" }, { en: "Low risk; height carries most of the sex signal", zh: "风险较低；身高已承载大部分性别信息" }]
            ],
            caption: {
                en: "The same checks were run for Models 1 and 2: both failed exogeneity and homoskedasticity, with all VIFs below 2.3 and average VIFs of 1.38 and 1.13.",
                zh: "模型 1 和模型 2 也做了同样的检查：两者都不满足外生性和同方差假设，所有 VIF 都低于 2.3，平均 VIF 分别为 1.38 和 1.13。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/earnings-height/cubic-model-residuals.png",
            source: {
                en: "My part · assumption checks",
                zh: "本人负责 · 假设检验"
            },
            title: {
                en: "Residuals vs Fitted Values, Cubic-Education Model",
                zh: "教育三次项模型的残差与拟合值"
            },
            caption: {
                en: "The diagonal bands come from the bracketed earnings: each band is one bracket value minus a range of fitted values. The top band is the $84,055 cap. This structure, not just model choice, limits how far any linear model can reduce error.",
                zh: "图中的斜线条纹来自分档收入：每条斜线对应一个收入档位减去不同的拟合值，最上方一条是 84,055 美元的上限档。这种结构本身（而不仅是模型选择）限制了任何线性模型能把误差降到多低。"
            }
        },
        {
            type: "table",
            source: {
                en: "My part · model estimates",
                zh: "本人负责 · 模型估计"
            },
            title: {
                en: "What Model 1 Says, Holding Other Factors Fixed",
                zh: "模型 1 的估计结果（控制其他因素）"
            },
            columns: {
                en: ["Factor", "Effect on earnings ($)", "t-statistic"],
                zh: ["因素", "对收入的影响（美元）", "t 统计量"]
            },
            rows: [
                [{ en: "Each extra inch of height", zh: "每高 1 英寸" }, "+376", "4.86"],
                [{ en: "Each extra year of education", zh: "每多 1 年教育" }, "+2,551", "25.75"],
                [{ en: "Each extra year of age", zh: "每大 1 岁" }, "+245", "11.29"],
                [{ en: "Male vs female", zh: "男性对女性" }, "+626", "1.00"],
                [{ en: "Divorced vs married, spouse at home", zh: "离婚对已婚且配偶同住" }, "−21,110", "−35.57"],
                [{ en: "Never married vs married, spouse at home", zh: "未婚对已婚且配偶同住" }, "−20,690", "−34.16"],
                [{ en: "Federal vs private employee", zh: "联邦政府雇员对私企雇员" }, "+8,011", "7.42"]
            ],
            caption: {
                en: "With every characteristic controlled, each inch of height adds about $376 a year and is significant, consistent with the height premium in the literature, while sex is no longer significant once height is included. In the interaction model the height coefficient alone (−$259) is not the overall effect, because height also enters through its interactions with occupation and marital status.",
                zh: "在控制所有特征后，每高 1 英寸年收入约增加 376 美元且显著，与文献中的身高溢价一致；而纳入身高后，性别不再显著。在含交互项的模型中，身高的单独系数（−259 美元）并不是总体效应，因为身高还通过与职业、婚姻状况的交互项发挥作用。"
            }
        }
    ],

    code: [
        {
            title: {
                en: "Validation split, forward selection and the cubic-education model",
                zh: "验证集划分、前向选择与教育三次项模型"
            },
            language: "Python · pandas · statsmodels · scikit-learn",
            source: {
                en: "Team notebook · my model-selection section, condensed",
                zh: "团队 notebook · 本人负责的模型选择部分（精简）"
            },
            caption: {
                en: "Condensed from the team notebook: the ten hand-written forward-selection steps are expressed as a loop over the order we selected, and plotting is removed.",
                zh: "根据团队 notebook 精简：把手写的十步前向选择改写为按所选顺序的循环，并去掉绘图代码。"
            },
            code: `import numpy as np
import pandas as pd
import statsmodels.formula.api as smf
from sklearn.model_selection import train_test_split

train = pd.read_csv("earnings_data_train.csv").dropna().set_index("ID")     # 14,293 workers
fit_df, val_df = train_test_split(train, test_size=0.2, random_state=42)    # 11,434 / 2,859

def rmse(model, data):
    return np.sqrt(np.mean((data["earnings"] - model.predict(data)) ** 2))

# Model 2: forward selection, one predictor at a time, judged on adjusted R2 and SER
order = ["C(occupation)", "C(mrd)", "educ", "C(region)", "age",
         "C(cworker)", "C(race)", "height", "sex", "weight"]
path = []
for k in range(1, len(order) + 1):
    m = smf.ols("earnings ~ " + " + ".join(order[:k]), data=fit_df).fit()
    path.append((order[k - 1], round(m.rsquared_adj, 3), round(m.mse_resid ** 0.5, 3)))
model_2 = smf.ols("earnings ~ " + " + ".join(order[:6]), data=fit_df).fit()   # plateau after step 6

# Model 3: kept main effects and interactions, with a cubic in education
formula_3 = ("earnings ~ educ + np.power(educ, 2) + np.power(educ, 3)"
             " + C(occupation) + C(mrd) + age + height + C(region) + C(race) + C(cworker)"
             " + C(occupation)*educ + C(mrd)*educ + age*C(occupation) + age*C(mrd)"
             " + height*C(occupation) + height*C(mrd) + age*C(cworker)")
model_3_cubic = smf.ols(formula_3, data=fit_df).fit()

print(model_3_cubic.rsquared_adj)              # 0.371
print(rmse(model_3_cubic, val_df))             # about 21,187 on the validation split`
        }
    ],

    details: {
        en: [
            {
                title: "The Brief · Team",
                bullets: [
                    "Model annual earnings for 14,296 US workers from height and other personal characteristics, then predict earnings for 3,574 people whose earnings are hidden; marks depend partly on test RMSE against the best group.",
                    "Deliverables: a 25-page report, an implementation notebook and a predictions file, using only methods taught in the unit."
                ]
            },
            {
                title: "Exploration and Cleaning · My part",
                bullets: [
                    "Removed rows with missing values (14,293 workers kept) and checked scales, skewness and kurtosis: only weight is heavily skewed (3.10) and heavy-tailed (16.9).",
                    "Education (0.388), marital status (−0.349) and occupation (−0.302) correlate most with earnings; weight (0.013) and region (−0.037) barely at all. The only strong link between predictors is height with sex (0.702).",
                    "Scatter plots showed a curved education–earnings relationship, and box plots showed large gaps across marital status, race and occupation but little across sex, class of worker or region.",
                    "Earnings take only 23 bracket values and at least 25% of workers sit at the $84,055 cap, which limits how well any linear model can fit."
                ]
            },
            {
                title: "Preparing Features · Team",
                bullets: [
                    "Turned the five multi-level categories into m − 1 dummy variables; sex was already coded 0/1.",
                    "Split the training data 80/20 at random (seed 42) for validation.",
                    "Compared linear, log-linear, linear-log and log-log fits of earnings on education; log-linear fitted best (adjusted R² 0.158) with the most even residuals."
                ]
            },
            {
                title: "Model Selection · My part",
                bullets: [
                    "Model 1 (all predictors): adjusted R² 0.360, SER $21,584, validation RMSE $21,314.",
                    "Model 2 (forward selection): six predictors (occupation, marital status, education, region, age, class of worker), where gains in adjusted R² flatten; adjusted R² 0.353, validation RMSE $21,429.",
                    "Model 3 (with interactions): eight predictors plus seven interaction sets, insignificant terms removed; adjusted R² 0.370, validation RMSE $21,231.",
                    "Model 3 variants: log earnings (lowest MAE, $16,931, using Duan’s smearing), cubic education (adjusted R² 0.371, RMSE $21,187) and a two-knot spline (RMSE $21,440); the cubic model was chosen for its accuracy and interpretability."
                ]
            },
            {
                title: "Assumptions, Collinearity and Omitted Variables · My part",
                bullets: [
                    "All models fail exogeneity and homoskedasticity: residuals drift from zero and fan out as fitted earnings rise; the cubic terms reduce both problems but do not remove them.",
                    "VIFs for the base predictors stay between 1.02 and 2.30; only the polynomial terms show high VIFs (up to 1,564), which is expected and accepted.",
                    "Omitted sex and weight correlate weakly with the included predictors except through height, so omitted-variable bias is low; train and validation RMSE are close, so overfitting is not a concern."
                ]
            },
            {
                title: "Results and Limitations · Team",
                bullets: [
                    "The final model explains 37.1% of the variation in earnings and cuts validation RMSE to $21,187, 21.5% below the $26,992 spread of earnings; it produced the 3,574 submitted predictions.",
                    "Holding everything else fixed in Model 1, each inch of height adds about $376 a year (t = 4.86); in the interaction model, height works partly through occupation and marital status.",
                    "Next steps: heteroskedasticity-robust (HC0) standard errors, further transformations for remaining non-linearity, and a response with more variation than 23 brackets."
                ]
            }
        ],
        zh: [
            {
                title: "作业要求 · 小组",
                bullets: [
                    "用身高等个人特征为 14,296 名美国劳动者的年收入建模，并为 3,574 名收入未知的人预测收入；部分分数取决于测试 RMSE 与最佳小组的差距。",
                    "交付物：25 页报告、实现代码 notebook 和预测文件，且只能使用课程讲授的方法。"
                ]
            },
            {
                title: "探索与清洗 · 本人负责",
                bullets: [
                    "删除含缺失值的记录（保留 14,293 人），检查量纲、偏度和峰度：只有体重明显右偏（3.10）且尾部厚（16.9）。",
                    "与收入相关性最强的是教育（0.388）、婚姻状况（−0.349）和职业（−0.302）；体重（0.013）和地区（−0.037）几乎无关。变量之间唯一较强的相关是身高与性别（0.702）。",
                    "散点图显示教育与收入呈曲线关系；箱线图显示婚姻状况、种族和职业之间差距大，性别、雇主类型和地区之间差距小。",
                    "收入只有 23 个档位取值，至少 25% 的人处于 84,055 美元的上限档，这限制了任何线性模型的拟合效果。"
                ]
            },
            {
                title: "特征准备 · 小组",
                bullets: [
                    "把五个多水平分类变量转换为 m − 1 个虚拟变量；性别本身已是 0/1 编码。",
                    "按 80/20 随机划分训练集和验证集（随机种子 42）。",
                    "比较收入对教育的线性、对数—线性、线性—对数和双对数拟合；对数—线性拟合最好（调整后 R² 0.158），残差最均匀。"
                ]
            },
            {
                title: "模型选择 · 本人负责",
                bullets: [
                    "模型 1（全部变量）：调整后 R² 0.360，SER 21,584 美元，验证 RMSE 21,314 美元。",
                    "模型 2（前向选择）：六个变量（职业、婚姻状况、教育、地区、年龄、雇主类型），此后调整后 R² 增幅趋平；调整后 R² 0.353，验证 RMSE 21,429 美元。",
                    "模型 3（含交互项）：八个变量加七组交互项，并剔除不显著项；调整后 R² 0.370，验证 RMSE 21,231 美元。",
                    "模型 3 变体：对数收入（MAE 最低，16,931 美元，用 Duan 涂抹估计换算）、教育三次项（调整后 R² 0.371，RMSE 21,187 美元）和两节点样条（RMSE 21,440 美元）；综合准确度和可解释性选择三次项模型。"
                ]
            },
            {
                title: "假设、共线性与遗漏变量 · 本人负责",
                bullets: [
                    "所有模型都不满足外生性和同方差：残差偏离零，且随拟合值增大而扩散；三次项缓解了这两个问题，但没有消除。",
                    "基础变量的 VIF 在 1.02—2.30 之间；只有多项式项的 VIF 很高（最高 1,564），这是预期之内、可以接受的。",
                    "被排除的性别和体重除通过身高外与已纳入变量相关性弱，遗漏变量偏误较低；训练与验证 RMSE 接近，不存在过拟合问题。"
                ]
            },
            {
                title: "结果与局限 · 小组",
                bullets: [
                    "最终模型解释了 37.1% 的收入差异，验证 RMSE 降至 21,187 美元，比收入的标准差 26,992 美元低 21.5%；并据此提交了 3,574 条预测。",
                    "在模型 1 中控制其他因素后，每高 1 英寸年收入约增加 376 美元（t = 4.86）；在交互模型中，身高的作用部分通过职业和婚姻状况体现。",
                    "下一步：使用异方差稳健（HC0）标准误、对剩余非线性做进一步变换，并使用比 23 个档位变化更丰富的收入数据。"
                ]
            }
        ]
    }
},

{
    id: "decision-trees-analysis",
    category: "analytics-systems",

    title: {
        en: "Decision Trees Under Uncertainty — Athlete Drug Testing, a Sealed Tender Bid and Ranking Risky Investments",
        zh: "不确定性下的决策树：运动员药检、密封投标与风险投资排序"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · Bayesian revision, decision trees, sensitivity analysis and stochastic dominance in Excel PrecisionTree",
        zh: "个人项目 · 在 Excel PrecisionTree 中完成贝叶斯修正、决策树、敏感性分析与随机占优分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2024",
        zh: "2024 年第二学期"
    },

    sortDate: "2024-09",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "Three business decisions, each solved with decision trees built in Excel PrecisionTree and written up as a report for decision-makers.",
                "First, should the Australian Institute of Sport introduce mandatory drug testing before the Paris Olympics, given that tests are imperfect and every outcome carries a benefit or cost? Second, what should a computer supplier bid in a sealed, lowest-price-wins university tender when it does not know its rivals’ bids? Third, how should three risky investments be ranked when investors’ risk preferences are unknown?"
            ],
            zh: [
                "三个商业决策问题，均在 Excel PrecisionTree 中用决策树求解，并为决策者撰写报告。",
                "第一，在测试并不完全准确、每种结果都有收益或成本的情况下，澳大利亚体育学院（AIS）是否应在巴黎奥运会前实行强制药检？第二，在密封、最低价中标的大学采购招标中，电脑供应商在不知道对手报价时应该报多少？第三，在不知道投资者风险偏好时，三项风险投资应如何排序？"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Drug testing: build pay-off tables, revise probabilities with Bayes’ theorem, solve the decision tree without double counting, and test how the answer depends on the cost and benefit values.",
                "Tender bid: build a pay-off table and decision tree, find the bid that maximises expected monetary value (EMV), then run tornado and one- and two-way strategy-region analyses.",
                "Investments: rank three pay-off distributions for investors of every risk type."
            ],
            zh: [
                "药检：建立收益表，用贝叶斯定理修正概率，求解决策树并避免重复计算成本，再检验结论对成本和收益取值的敏感性。",
                "投标：建立收益表和决策树，找到期望货币价值（EMV）最大的报价，并做龙卷风图以及单因素、双因素策略区域分析。",
                "投资：为各种风险偏好的投资者对三种收益分布排序。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Built Bayesian decision trees in Excel PrecisionTree for an anti-doping policy: with 8% drug use and imperfect tests (only 76.3% of positives are real users), testing scored −1.51 against −0.80 for not testing, flipping only if the benefit of a ban rose by about 38%.",
            "Optimised a sealed tender bid ($230,000, EMV $24,400 vs $12,200 for the highest bid) with tornado and strategy-region analysis, and ranked three investments by EMV, risk profiles and stochastic dominance: B first for every risk attitude."
        ],
        zh: [
            "在 Excel PrecisionTree 中为反兴奋剂政策建立贝叶斯决策树：药物使用率 8%、检测不完全准确（阳性中只有 76.3% 是真正使用者），检测的净收益为 −1.51，不检测为 −0.80；只有当禁赛收益提高约 38% 时结论才会改变。",
            "优化密封投标报价（报 23 万美元，EMV 24,400 美元，最高报价仅 12,200 美元），并做龙卷风图和策略区域分析；用 EMV、风险曲线和随机占优对三项投资排序：对各种风险偏好，B 都排第一。"
        ]
    },

    tags: [
        "Decision Trees",
        "Bayesian Analysis",
        "Expected Monetary Value",
        "Sensitivity Analysis",
        "Stochastic Dominance",
        "PrecisionTree",
        "Excel",
        "Risk Analysis"
    ],

    metrics: [
        {
            value: "76.3%",
            label: {
                en: "Chance a positive test is a real drug user",
                zh: "阳性结果确为药物使用者的概率"
            }
        },
        {
            value: "−0.80 vs −1.51",
            label: {
                en: "Net benefit index: no testing vs testing",
                zh: "净收益指数：不检测对检测"
            }
        },
        {
            value: "$24,400",
            label: {
                en: "Best tender EMV, from bidding $230,000",
                zh: "最优投标 EMV（报价 23 万美元）"
            }
        },
        {
            value: "±67%",
            label: {
                en: "EMV swing from a ±10% change in supply cost",
                zh: "供货成本 ±10% 带来的 EMV 变化"
            }
        },
        {
            value: "55%",
            label: {
                en: "No-rival odds at which a higher bid becomes best",
                zh: "更高报价成为最优时的无对手概率"
            }
        },
        {
            value: "B > A > C",
            label: {
                en: "Investment ranking by second-order dominance",
                zh: "按二阶随机占优的投资排序"
            }
        }
    ],

    visuals: [
        {
            type: "table",
            source: {
                en: "My work · drug testing",
                zh: "本人完成 · 药检"
            },
            title: {
                en: "Net Benefit Pay-off Table (Index, Test Cost = −1)",
                zh: "净收益表（指数，检测成本 = −1）"
            },
            columns: {
                en: ["Situation", "Ban: index", "Ban", "Don’t ban: index", "Don’t ban"],
                zh: ["情形", "禁赛：指数", "禁赛", "不禁赛：指数", "不禁赛"]
            },
            rows: [
                [{ en: "Tested, drug-free", zh: "检测，未用药" }, "−C1 − C2 − C3", "−23", "−C1 − C2", "−3"],
                [{ en: "Tested, drug user", zh: "检测，用药" }, "+B − C1", "24", "−C1 − C4", "−11"],
                [{ en: "Not tested, drug-free", zh: "不检测，未用药" }, "−C3", "−20", "0", "0"],
                [{ en: "Not tested, drug user", zh: "不检测，用药" }, "+B", "25", "−C4", "−10"]
            ],
            caption: {
                en: "Values are indexed to the cost of one test (C1 = −1): privacy cost C2 = −2, falsely banning a clean athlete C3 = −20, missing a user C4 = −10, and banning a user B = +25. The test cost is charged once on the test branch, so it is not double counted at the end nodes.",
                zh: "所有数值以一次检测的成本为基准（C1 = −1）：侵犯隐私 C2 = −2，错误禁赛清白运动员 C3 = −20，漏掉用药者 C4 = −10，正确禁赛用药者 B = +25。检测成本只在“检测”分支上计一次，避免在末端节点重复计算。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · Bayes revision",
                zh: "本人完成 · 贝叶斯修正"
            },
            title: {
                en: "What a Test Result Really Tells You",
                zh: "检测结果真正说明了什么"
            },
            columns: {
                en: ["Test result", "Probability", "Drug user", "Drug-free"],
                zh: ["检测结果", "出现概率", "确为用药者", "确为未用药"]
            },
            rows: [
                [{ en: "Positive", zh: "阳性" }, "9.7%", "76.29%", "23.71%"],
                [{ en: "Negative", zh: "阴性" }, "90.3%", "0.66%", "99.34%"]
            ],
            caption: {
                en: "Inputs: 8% of athletes use drugs, 2.5% of clean athletes test positive and 7.5% of users test negative. Because users are rare, almost a quarter of positive results come from clean athletes, which is what makes the cost of a false accusation decisive.",
                zh: "输入：8% 的运动员用药，2.5% 的清白运动员会被误检为阳性，7.5% 的用药者会被漏检为阴性。由于用药者占比低，近四分之一的阳性结果来自清白运动员，这使错误指控的成本成为关键。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/decision-trees/drug-test-tree.png",
            source: {
                en: "My PrecisionTree model",
                zh: "本人 PrecisionTree 模型"
            },
            title: {
                en: "Decision Tree: Test or Not, Then Ban or Not",
                zh: "决策树：是否检测，再决定是否禁赛"
            },
            caption: {
                en: "If tested, the best policy is to ban positives (12.86) and clear negatives (−3.05), giving −1.51 overall. Not testing and banning no one gives −0.80, so with these values mandatory testing costs more than it returns.",
                zh: "如果检测，最优策略是对阳性禁赛（12.86）、对阴性放行（−3.05），总体为 −1.51；不检测且不禁赛为 −0.80，因此在这些取值下强制检测得不偿失。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · sensitivity",
                zh: "本人完成 · 敏感性分析"
            },
            title: {
                en: "When Would Testing Pay Off?",
                zh: "什么情况下检测才划算？"
            },
            columns: {
                en: ["Input changed", "New value", "Best decision"],
                zh: ["变动的输入", "新取值", "最优决策"]
            },
            rows: [
                [{ en: "Test cost C1, −50%", zh: "检测成本 C1，−50%" }, "−0.5", { en: "No test, no ban", zh: "不检测、不禁赛" }],
                [{ en: "Test cost C1, +50% / +100%", zh: "检测成本 C1，+50% / +100%" }, "−1.5 / −2", { en: "No test, no ban", zh: "不检测、不禁赛" }],
                [{ en: "Benefit B, −50% / −20%", zh: "收益 B，−50% / −20%" }, "12.5 / 20", { en: "No test, no ban", zh: "不检测、不禁赛" }],
                [{ en: "Benefit B, +20%", zh: "收益 B，+20%" }, "30", { en: "No test, no ban", zh: "不检测、不禁赛" }],
                [{ en: "Benefit B, +50%", zh: "收益 B，+50%" }, "37.5", { en: "Test, ban positives", zh: "检测，对阳性禁赛" }]
            ],
            highlightRow: 4,
            caption: {
                en: "The values are judgements, so I tested how far they could move. Solving the tree for the break-even points shows testing wins once B exceeds about 34.6 (38% above 25), or if a test cost less than about 0.29 of its current cost. A policy that values clean competition highly, for example after a doping scandal, could justify testing.",
                zh: "这些取值都是主观判断，因此我检验了它们可以变动多少。求解决策树的盈亏平衡点可知：当 B 超过约 34.6（比 25 高 38%），或检测成本降到当前的约 0.29 以下时，检测才会更优。如果政策高度重视公平竞赛（例如兴奋剂丑闻之后），就可能有理由实行检测。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · tender bid",
                zh: "本人完成 · 投标"
            },
            title: {
                en: "Tender Pay-off Table ($’000) and EMV",
                zh: "投标收益表（千美元）与 EMV"
            },
            columns: {
                en: ["Our bid", "Rival < 230", "230–240", "240–250", "> 250", "No rival", "EMV"],
                zh: ["我方报价", "对手 < 230", "230—240", "240—250", "> 250", "无对手", "EMV"]
            },
            rows: [
                [{ en: "Probability", zh: "概率" }, "14%", "28%", "21%", "7%", "30%", "–"],
                ["$230k", "−10", "30", "30", "30", "30", "24.4"],
                ["$240k", "−10", "−10", "40", "40", "40", "19.0"],
                ["$250k", "−10", "−10", "−10", "50", "50", "12.2"]
            ],
            highlightRow: 1,
            caption: {
                en: "Winning earns the bid minus $10,000 of bid preparation and $190,000 of supply cost; losing costs the $10,000 preparation. Rival bands carry 70% of the probability because there is a 30% chance of no rival. Each bid sits at the top of a band, the highest price that still beats rivals in the bands above; declining to bid is worth $0.",
                zh: "中标收益为报价减去 1 万美元投标准备费和 19 万美元供货成本；未中标则损失 1 万美元准备费。由于有 30% 的概率没有对手，各报价区间合计占 70% 的概率。每个报价都取在区间上限，即仍能赢过更高区间对手的最高价格；不投标的价值为 0。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/decision-trees/bid-tornado.png",
            source: {
                en: "My PrecisionTree output",
                zh: "本人 PrecisionTree 输出"
            },
            title: {
                en: "Tornado Graph: What Moves the Tender EMV",
                zh: "龙卷风图：影响投标 EMV 的因素"
            },
            caption: {
                en: "Supply cost (±10%) swings EMV from $8,060 to $40,740 (±67%); the chance of no rival (0–60%) moves it from $22,000 to $28,400; bid preparation cost (±10%) only ±4%. Locking in supplier prices matters far more than trimming bid costs.",
                zh: "供货成本（±10%）使 EMV 在 8,060 至 40,740 美元之间变化（±67%）；无对手概率（0—60%）使其在 22,000 至 28,400 美元之间变化；投标准备费（±10%）只影响 ±4%。锁定供货价格远比压缩投标费用重要。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · strategy region",
                zh: "本人输出 · 策略区域"
            },
            title: {
                en: "Bid EMV as the Chance of No Rival Changes ($)",
                zh: "无对手概率变化时各报价的 EMV（美元）"
            },
            columns: {
                en: ["No-rival chance", "Bid $230k", "Bid $240k", "Bid $250k"],
                zh: ["无对手概率", "报价 23 万", "报价 24 万", "报价 25 万"]
            },
            rows: [
                ["0%", "22,000", "10,000", "−4,000"],
                [{ en: "30% (base)", zh: "30%（基准）" }, "24,400", "19,000", "12,200"],
                ["50%", "26,000", "25,000", "23,000"],
                ["55%", "26,400", "26,500", "25,700"],
                ["60%", "26,800", "28,000", "28,400"]
            ],
            highlightRow: 1,
            caption: {
                en: "$230,000 stays best until the chance of no rival reaches about 55%, when $240,000 edges ahead, and $250,000 takes over at 60%. The two-way strategy region shows bid preparation cost (±10%) never changes the choice, so the decision rests on how likely rivals are to drop out.",
                zh: "在无对手概率达到约 55% 之前，报价 23 万美元始终最优；55% 时 24 万美元略占优势，60% 时 25 万美元成为最优。双因素策略区域图显示，投标准备费（±10%）不会改变选择，因此决策取决于对手退出的可能性。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/decision-trees/bid-strategy-region.png",
            source: {
                en: "My PrecisionTree output",
                zh: "本人 PrecisionTree 输出"
            },
            title: {
                en: "One-Way Strategy Region for the Bid Decision",
                zh: "投标决策的单因素策略区域图"
            },
            caption: {
                en: "The $250,000 line is the steepest: a high bid only pays when rivals are unlikely, while $230,000 is the most stable across the range.",
                zh: "25 万美元这条线最陡：只有在对手很可能不出现时，高报价才划算；23 万美元在整个区间内最稳定。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · investments",
                zh: "本人完成 · 投资"
            },
            title: {
                en: "Three Investments: Return and Risk ($’000)",
                zh: "三项投资的收益与风险（千美元）"
            },
            columns: {
                en: ["Measure", "A", "B", "C"],
                zh: ["指标", "A", "B", "C"]
            },
            rows: [
                [{ en: "Expected value", zh: "期望值" }, "57.9", "60.8", "54.0"],
                [{ en: "Standard deviation", zh: "标准差" }, "24.80", "27.22", "24.81"],
                [{ en: "Worst outcome", zh: "最差结果" }, "18", "27", "18"],
                [{ en: "Best outcome", zh: "最好结果" }, "90", "99", "90"],
                [{ en: "Largest regret", zh: "最大后悔值" }, "11", "11", "9"]
            ],
            caption: {
                en: "B has the highest expected value, the best worst case and the best best case; its higher standard deviation comes from upside spread rather than extra downside.",
                zh: "B 的期望值最高，最差结果和最好结果也都最好；它的标准差较高来自上行空间更大，而不是下行风险更多。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/decision-trees/risk-profile-a-vs-b.png",
            source: {
                en: "My PrecisionTree output",
                zh: "本人 PrecisionTree 输出"
            },
            title: {
                en: "Cumulative Risk Profiles: Investment A vs B",
                zh: "累积风险曲线：投资 A 对 B"
            },
            caption: {
                en: "The curves cross, so neither dominates at first order. Summing the areas between them from the left, A’s curve is never cumulatively below B’s (running total ≥ 0, ending at 2.9), so B dominates A at second order; the same test gives B over C (6.8) and A over C (3.9).",
                zh: "两条曲线相交，因此不存在一阶随机占优。从左往右累加两条曲线之间的面积，A 的累积面积始终不低于 B（累计值 ≥ 0，最终为 2.9），因此 B 二阶随机占优于 A；同样的检验得出 B 优于 C（6.8）、A 优于 C（3.9）。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · investor types",
                zh: "本人分析 · 投资者类型"
            },
            title: {
                en: "Which Investment Suits Which Investor",
                zh: "不同投资者适合哪项投资"
            },
            columns: {
                en: ["Investor", "Criterion", "Choice"],
                zh: ["投资者", "准则", "选择"]
            },
            rows: [
                [{ en: "Risk-neutral", zh: "风险中性" }, { en: "Highest EMV", zh: "EMV 最高" }, { en: "B (60.8)", zh: "B（60.8）" }],
                [{ en: "Risk-averse", zh: "风险厌恶" }, { en: "Second-order stochastic dominance", zh: "二阶随机占优" }, "B > A > C"],
                [{ en: "Optimistic / risk-seeking", zh: "乐观 / 风险偏好" }, { en: "Maximax", zh: "最大最大准则" }, { en: "B (best case 99)", zh: "B（最好结果 99）" }],
                [{ en: "Regret-averse", zh: "厌恶后悔" }, { en: "Minimax regret", zh: "最小最大后悔准则" }, { en: "C (largest regret 9)", zh: "C（最大后悔值 9）" }]
            ],
            caption: {
                en: "B is the recommendation for almost every investor. C only wins under minimax regret, which lines up the four pay-off levels as if they were shared scenarios, so it is the least reliable of the criteria here.",
                zh: "几乎对所有投资者都推荐 B。C 只在最小最大后悔准则下胜出，而该准则把四档收益当作共同情景来对齐，因此在本题中最不可靠。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Drug Testing: Set-up",
                bullets: [
                    "Mapped every combination of test decision, true state and ban decision to an indexed net benefit, charging the test cost once to avoid double counting.",
                    "Revised the 8% prior with Bayes’ theorem: a positive result means a 76.3% chance of a real user, and a negative result a 0.66% chance."
                ]
            },
            {
                title: "Drug Testing: Decision and Sensitivity",
                bullets: [
                    "Best decision: do not test and do not ban (−0.80); testing with the best follow-up (ban positives, clear negatives) scores −1.51, because false positives are costly when users are rare.",
                    "Halving or doubling the test cost, or moving the ban benefit by ±20%, leaves the decision unchanged; raising the benefit by 50% switches it to test and ban.",
                    "Break-even points from the tree: testing pays once the ban benefit exceeds about 34.6, or the test cost falls below about 0.29 of today’s."
                ]
            },
            {
                title: "Tender Bid: EMV",
                bullets: [
                    "Bids of $230,000, $240,000 and $250,000 each sit at the top of a rival band; outcomes are the margin over $200,000 of costs if won, or −$10,000 if lost.",
                    "Bidding $230,000 maximises EMV at $24,400 (wins 86% of the time), against $19,000 for $240,000 and $12,200 for $250,000."
                ]
            },
            {
                title: "Tender Bid: Sensitivity",
                bullets: [
                    "Tornado: supply cost is by far the biggest driver (±67% of EMV for ±10%), the no-rival probability next (−10% to +16%), and bid preparation cost the smallest (±4%).",
                    "One-way strategy region: $230,000 remains optimal up to a 50% chance of no rival; $240,000 leads at 55% and $250,000 at 60%.",
                    "Two-way strategy region (bid cost × no-rival chance): the choice changes only with the no-rival probability, never with bid cost."
                ]
            },
            {
                title: "Ranking the Investments",
                bullets: [
                    "EMV ranks B (60.8) above A (57.9) and C (54.0).",
                    "Cumulative risk profiles cross, so I tested second-order dominance by summing the areas between curves: B dominates A and C, and A dominates C.",
                    "Maximax also picks B; only minimax regret favours C. Recommendation: B for risk-neutral, risk-averse and risk-seeking investors alike."
                ]
            }
        ],
        zh: [
            {
                title: "药检：模型设定",
                bullets: [
                    "把“是否检测 × 真实状态 × 是否禁赛”的每种组合对应到指数化净收益，检测成本只计一次，避免重复计算。",
                    "用贝叶斯定理修正 8% 的先验概率：阳性结果意味着 76.3% 的概率确为用药者，阴性结果意味着只有 0.66% 的概率。"
                ]
            },
            {
                title: "药检：决策与敏感性",
                bullets: [
                    "最优决策：不检测、不禁赛（−0.80）；检测并采取最优后续行动（阳性禁赛、阴性放行）为 −1.51，因为用药者稀少时误判阳性的代价很高。",
                    "检测成本减半或翻倍、禁赛收益 ±20%，都不改变决策；禁赛收益提高 50% 时决策变为检测并禁赛。",
                    "决策树求得的盈亏平衡点：禁赛收益超过约 34.6，或检测成本降到当前的约 0.29 以下时，检测才划算。"
                ]
            },
            {
                title: "投标：EMV",
                bullets: [
                    "23 万、24 万、25 万美元三个报价分别位于对手报价区间的上限；中标时收益为报价减去 20 万美元成本，未中标则损失 1 万美元。",
                    "报价 23 万美元的 EMV 最高，为 24,400 美元（86% 的概率中标）；24 万美元为 19,000 美元，25 万美元为 12,200 美元。"
                ]
            },
            {
                title: "投标：敏感性",
                bullets: [
                    "龙卷风图：供货成本是最大驱动因素（±10% 对应 EMV ±67%），其次是无对手概率（−10% 至 +16%），投标准备费影响最小（±4%）。",
                    "单因素策略区域：无对手概率不超过 50% 时 23 万美元始终最优；55% 时 24 万美元领先，60% 时 25 万美元领先。",
                    "双因素策略区域（投标准备费 × 无对手概率）：决策只随无对手概率变化，不随投标准备费变化。"
                ]
            },
            {
                title: "投资排序",
                bullets: [
                    "按 EMV 排序：B（60.8）高于 A（57.9）和 C（54.0）。",
                    "累积风险曲线相交，因此通过累加曲线之间的面积检验二阶随机占优：B 占优于 A 和 C，A 占优于 C。",
                    "最大最大准则同样选择 B；只有最小最大后悔准则偏向 C。结论：对风险中性、风险厌恶和风险偏好的投资者都推荐 B。"
                ]
            }
        ]
    }
},

{
    id: "bubble-tea-simulation",
    category: "analytics-systems",

    title: {
        en: "Should We Open a Bubble Tea Shop? Monte Carlo Simulation of Profit, Lockdown Risk and Free Delivery",
        zh: "该不该开奶茶店？用蒙特卡洛模拟评估利润、封城风险与免费配送"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual project · Monte Carlo simulation, scenario and sensitivity analysis in Excel @RISK",
        zh: "个人项目 · 在 Excel @RISK 中完成蒙特卡洛模拟、情景分析与敏感性分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "Semester 2, 2024",
        zh: "2024 年第二学期"
    },

    sortDate: "2024-10",

    logo: "",

    background: {
        paragraphs: {
            en: [
                "The case: opening a bubble tea shop in Haymarket, Sydney, and persuading analytically minded co-investors. A consultant supplied a 10-drink menu with prices and a fixed product mix, seasonal demand (9,000 cups a month in the October–March peak, 6,000 off-peak, with a 30% coefficient of variation), variable costs of 28–35% of price, and $360,300 a year of fixed costs.",
                "I built the first-year profit model in Excel with @RISK, simulating 120 monthly demand figures and 10 variable-cost rates over 5,000 iterations. I then layered on the risk of monthly lockdowns, tested lockdown probabilities from 1% to 50%, and assessed whether to offer free delivery on online orders during lockdowns."
            ],
            zh: [
                "案例：在悉尼 Haymarket 开一家奶茶店，并说服善于分析的同学共同投资。顾问提供了 10 款饮品的价格和固定产品组合、季节性需求（10 月—3 月旺季每月 9,000 杯，淡季 6,000 杯，变异系数 30%）、占售价 28%—35% 的变动成本，以及每年 360,300 美元的固定成本。",
                "我在 Excel @RISK 中建立首年利润模型，模拟 120 个月度需求和 10 个变动成本率，共 5,000 次迭代。随后加入每月封城风险，测试 1%—50% 的封城概率，并评估封城期间是否为线上订单提供免费配送。"
            ]
        },
        pointsTitle: {
            en: "What the brief asked for",
            zh: "作业要求"
        },
        points: {
            en: [
                "Simulate yearly sales, costs and profit with at least 5,000 iterations, describe the model and results, and decide whether to open the shop.",
                "Add a 5% monthly chance of a lockdown that halves demand, and assess how resilient the profit is.",
                "Test lockdown probabilities of 1%, 5%, 10%, 20%, 30%, 40% and 50%.",
                "Model free delivery during lockdowns, then use RiskOptimizer to find the largest share of delivery cost the shop can cover while keeping the chance of losing more than $20,000 to 5%."
            ],
            zh: [
                "以至少 5,000 次迭代模拟年度销售、成本和利润，说明模型与结果，并决定是否开店。",
                "加入每月 5% 的封城概率（封城当月需求减半），评估利润的抗风险能力。",
                "测试 1%、5%、10%、20%、30%、40% 和 50% 的封城概率。",
                "模拟封城期间的免费配送，再用 RiskOptimizer 找出在“亏损超过 2 万美元的概率不超过 5%”的条件下，店铺最多能承担多少比例的配送费。"
            ]
        }
    },

    overviewBullets: {
        en: [
            "Built a 5,000-iteration @RISK Monte Carlo model of a bubble tea shop (10 drinks × 12 months of normal demand, triangular costs): first-year profit averaged $52,667, 8.8% of revenue, with no loss in any iteration.",
            "Added monthly lockdown risk: at 5% a month, mean profit fell 20% to $42,359 and the chance of a loss rose to 2.1%; profit turns negative above about 25%, and covering all delivery fees still kept the chance of losing over $20,000 at 2.7%."
        ],
        zh: [
            "用 @RISK 为奶茶店建立 5,000 次迭代的蒙特卡洛模型（10 款饮品 × 12 个月的正态需求、三角分布成本）：首年平均利润 52,667 美元，占收入 8.8%，没有任何一次迭代亏损。",
            "加入每月封城风险：每月 5% 时平均利润下降 20% 至 42,359 美元，亏损概率升至 2.1%；封城概率超过约 25% 时利润转负；即使承担全部配送费，亏损超过 2 万美元的概率仍只有 2.7%。"
        ]
    },

    tags: [
        "Monte Carlo Simulation",
        "@RISK",
        "Excel",
        "Risk Analysis",
        "Scenario Analysis",
        "Sensitivity Analysis",
        "RiskOptimizer",
        "Business Case"
    ],

    metrics: [
        {
            value: "5,000",
            label: {
                en: "Iterations per simulation",
                zh: "每次模拟的迭代次数"
            }
        },
        {
            value: "$52,667",
            label: {
                en: "Mean first-year profit, 8.8% of revenue",
                zh: "首年平均利润，占收入 8.8%"
            }
        },
        {
            value: "−20%",
            label: {
                en: "Mean profit with a 5% monthly lockdown risk",
                zh: "每月 5% 封城风险下的平均利润变化"
            }
        },
        {
            value: "≈ 25%",
            label: {
                en: "Monthly lockdown odds at which profit turns negative",
                zh: "利润转负时的每月封城概率"
            }
        },
        {
            value: "2.1% → 8.2%",
            label: {
                en: "Chance of a loss, without vs with free delivery",
                zh: "亏损概率：不免配送费 → 免配送费"
            }
        },
        {
            value: "2.7%",
            label: {
                en: "Chance of losing over $20,000 with full free delivery",
                zh: "全额免配送费时亏损超过 2 万美元的概率"
            }
        }
    ],

    visuals: [
        {
            type: "process",
            source: {
                en: "My work · model",
                zh: "本人完成 · 模型"
            },
            title: {
                en: "How the @RISK Model Works",
                zh: "@RISK 模型结构"
            },
            steps: {
                en: [
                    "Inputs: 10 drinks, prices, mix, seasonal demand, cost table",
                    "RiskNormal demand for each drink and month (SD = 30% of mean)",
                    "RiskTriang variable cost per drink (28%, 30%, 35% of price)",
                    "Revenue − variable cost − $360,300 fixed cost",
                    "Outputs: yearly profit and profit as % of revenue"
                ],
                zh: [
                    "输入：10 款饮品的价格、组合、季节性需求和成本表",
                    "每款饮品每月需求服从 RiskNormal（标准差 = 均值的 30%）",
                    "每款饮品变动成本服从 RiskTriang（售价的 28%、30%、35%）",
                    "收入 − 变动成本 − 360,300 美元固定成本",
                    "输出：年度利润和利润占收入比例"
                ]
            },
            caption: {
                en: "Demand is simulated month by month for each drink (120 inputs), while each drink’s variable cost is simulated once as a yearly average, as the brief specified.",
                zh: "按作业要求，需求按每款饮品、每个月分别模拟（120 个输入），每款饮品的变动成本则作为全年平均值只模拟一次。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · base case",
                zh: "本人完成 · 基准情形"
            },
            title: {
                en: "Base-Case Economics (Expected Values)",
                zh: "基准情形经济账（期望值）"
            },
            columns: {
                en: ["Item", "Value", "How it is derived"],
                zh: ["项目", "数值", "计算方式"]
            },
            rows: [
                [{ en: "Average price", zh: "平均售价" }, "$6.65", { en: "Prices weighted by product mix", zh: "按产品组合加权的售价" }],
                [{ en: "Annual demand", zh: "年需求" }, "90,000", { en: "6 × 9,000 peak + 6 × 6,000 off-peak cups", zh: "旺季 6 × 9,000 + 淡季 6 × 6,000 杯" }],
                [{ en: "Revenue", zh: "收入" }, "$598,500", { en: "Demand × average price", zh: "需求 × 平均售价" }],
                [{ en: "Variable cost", zh: "变动成本" }, "$185,535", { en: "$2.06 a cup: triangular mean of 31% of price", zh: "每杯 2.06 美元：三角分布均值为售价的 31%" }],
                [{ en: "Fixed cost", zh: "固定成本" }, "$360,300", { en: "Salaries $240,900, rent $62,400, build $30,000, other $15,000, utilities $12,000", zh: "薪资 240,900、租金 62,400、装修设备 30,000、其他 15,000、水电 12,000 美元" }],
                [{ en: "Profit", zh: "利润" }, "$52,665", { en: "8.8% of revenue", zh: "占收入 8.8%" }]
            ],
            highlightRow: 5,
            caption: {
                en: "Salaries are two-thirds of fixed costs, so how much the investors work in the shop themselves has a large effect on the real return.",
                zh: "薪资占固定成本的三分之二，因此投资人自己在店里投入多少工作，对实际回报影响很大。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/bubble-tea/base-profit.png",
            source: {
                en: "My @RISK output",
                zh: "本人 @RISK 输出"
            },
            title: {
                en: "First-Year Profit and Margin, 5,000 Iterations",
                zh: "首年利润与利润率（5,000 次迭代）"
            },
            caption: {
                en: "Profit is close to normal (skewness −0.004) with a mean of $52,667 and a standard deviation of $14,107, ranging from $3,375 to $110,580; every iteration made a profit. The margin averages 8.7% with a 2.1-point standard deviation.",
                zh: "利润接近正态分布（偏度 −0.004），均值 52,667 美元，标准差 14,107 美元，范围 3,375—110,580 美元，所有迭代都盈利。利润率平均 8.7%，标准差 2.1 个百分点。"
            }
        },
        {
            type: "table",
            source: {
                en: "My work · lockdown model",
                zh: "本人完成 · 封城模型"
            },
            title: {
                en: "What I Added for Lockdowns and Delivery",
                zh: "为封城和配送新增的模型部分"
            },
            columns: {
                en: ["Element", "@RISK distribution", "Role"],
                zh: ["要素", "@RISK 分布", "作用"]
            },
            rows: [
                [{ en: "Lockdown in a month", zh: "当月是否封城" }, "RiskBernoulli(5%)", { en: "Switches that month to lockdown demand", zh: "决定当月是否切换为封城需求" }],
                [{ en: "Lockdown demand", zh: "封城需求" }, { en: "RiskNormal, mean and SD halved", zh: "RiskNormal，均值和标准差减半" }, { en: "4,500 peak and 3,000 off-peak cups on average", zh: "旺季平均 4,500 杯，淡季 3,000 杯" }],
                [{ en: "Online share of sales", zh: "线上销售占比" }, "RiskUniform(50%, 80%)", { en: "Online orders in a lockdown month", zh: "封城月份的线上订单量" }],
                [{ en: "Delivery cost per order", zh: "每单配送成本" }, "RiskNormal($4, $1.20)", { en: "Cost of free delivery, by month", zh: "按月计算的免费配送成本" }],
                [{ en: "Share of fee covered", zh: "承担配送费比例" }, { en: "RiskOptimizer, 1% steps", zh: "RiskOptimizer，步长 1%" }, { en: "Largest share that meets the risk limit", zh: "满足风险上限的最大比例" }]
            ],
            caption: {
                en: "Lockdowns, online share and delivery cost are all simulated separately for each of the 12 months.",
                zh: "封城、线上占比和配送成本都按 12 个月分别模拟。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · scenarios",
                zh: "本人输出 · 情景"
            },
            title: {
                en: "Profit Distribution Under Each Scenario ($)",
                zh: "各情景下的利润分布（美元）"
            },
            columns: {
                en: ["Scenario", "Mean", "Std dev.", "Minimum", "Chance of loss"],
                zh: ["情景", "均值", "标准差", "最小值", "亏损概率"]
            },
            rows: [
                [{ en: "No lockdowns", zh: "无封城" }, "52,667", "14,107", "3,375", "0.0%"],
                [{ en: "5% monthly lockdown risk", zh: "每月 5% 封城风险" }, "42,359", "18,901", "−31,282", "2.1%"],
                [{ en: "Same, with free delivery", zh: "同上，免配送费" }, "36,423", "25,056", "−82,529", "8.2%"]
            ],
            caption: {
                en: "Each lockdown month halves sales but leaves fixed costs unchanged, so a 5% risk cuts mean profit by 20% and makes the distribution wider and left-skewed (skewness −0.30, then −0.69 with free delivery). Delivery costs fall entirely in the bad months, which is why they nearly quadruple the chance of a loss while trimming the mean by only 14%.",
                zh: "封城月份销量减半，但固定成本不变，因此 5% 的封城风险使平均利润下降 20%，分布变宽并左偏（偏度 −0.30，加入免费配送后为 −0.69）。配送成本全部发生在糟糕的月份，所以它只让均值下降 14%，却让亏损概率增加到近四倍。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/bubble-tea/lockdown-profit.png",
            source: {
                en: "My @RISK output",
                zh: "本人 @RISK 输出"
            },
            title: {
                en: "Profit with a 5% Monthly Lockdown Risk",
                zh: "每月 5% 封城风险下的利润"
            },
            caption: {
                en: "97.9% of iterations remain profitable, but a left tail now reaches −$31,282.",
                zh: "97.9% 的迭代仍然盈利，但左尾已延伸到 −31,282 美元。"
            }
        },
        {
            type: "table",
            source: {
                en: "My output · sensitivity",
                zh: "本人输出 · 敏感性分析"
            },
            title: {
                en: "Sensitivity to the Monthly Lockdown Probability",
                zh: "对每月封城概率的敏感性"
            },
            columns: {
                en: ["Lockdown probability", "Mean profit ($)", "Chance of profit"],
                zh: ["封城概率", "平均利润（美元）", "盈利概率"]
            },
            rows: [
                ["1%", "50,589", "99.8%"],
                ["5%", "42,359", "97.9%"],
                ["10%", "31,941", "91.4%"],
                ["20%", "11,463", "67.5%"],
                ["30%", "−9,235", "40.3%"],
                ["40%", "−30,011", "17.3%"],
                ["50%", "−50,549", "5.9%"]
            ],
            highlightRow: 1,
            caption: {
                en: "Each extra percentage point of monthly lockdown risk costs about $2,065 of expected profit, so the mean turns negative at roughly 25%. Below about 20% the shop remains a reasonable bet; investors who expect frequent disruption should not open it.",
                zh: "每月封城概率每增加 1 个百分点，期望利润约减少 2,065 美元，因此在约 25% 时均值转负。封城概率低于约 20% 时开店仍较合理；预期频繁中断的投资人则不应开店。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/bubble-tea/lockdown-sensitivity.png",
            source: {
                en: "My chart",
                zh: "本人绘制"
            },
            title: {
                en: "Mean Profit and Chance of Profit by Lockdown Probability",
                zh: "不同封城概率下的平均利润与盈利概率"
            },
            caption: {
                en: "Bars show mean profit; the line shows the chance of making a profit.",
                zh: "柱形为平均利润，折线为盈利概率。"
            }
        },
        {
            type: "image",
            src: "assets/img/projects/bubble-tea/free-delivery-tail.png",
            source: {
                en: "My @RISK output",
                zh: "本人 @RISK 输出"
            },
            title: {
                en: "Free Delivery: Chance of Losing More Than $20,000",
                zh: "免费配送：亏损超过 2 万美元的概率"
            },
            caption: {
                en: "Even when the shop covers 100% of delivery costs, only 2.7% of iterations lose more than $20,000, inside the 5% limit, so the largest share that meets the limit is the full 100%.",
                zh: "即使店铺承担 100% 的配送费，也只有 2.7% 的迭代亏损超过 2 万美元，在 5% 的上限之内，因此满足上限的最大比例就是 100%。"
            }
        },
        {
            type: "table",
            source: {
                en: "My analysis · decisions",
                zh: "本人分析 · 决策"
            },
            title: {
                en: "Decisions for Co-Investors",
                zh: "给共同投资人的决策建议"
            },
            columns: {
                en: ["Question", "Evidence", "Decision"],
                zh: ["问题", "依据", "决策"]
            },
            rows: [
                [{ en: "Open the shop?", zh: "是否开店？" }, { en: "Mean profit $52,667; no loss in 5,000 runs", zh: "平均利润 52,667 美元；5,000 次中无亏损" }, { en: "Yes, a steady if modest return", zh: "开，回报不高但稳定" }],
                [{ en: "With 5% lockdown risk?", zh: "考虑 5% 封城风险？" }, { en: "Mean −20%; 2.1% chance of a loss", zh: "均值下降 20%；亏损概率 2.1%" }, { en: "Still open, with a cash buffer", zh: "仍可开店，但需留足现金" }],
                [{ en: "If lockdowns are more likely?", zh: "封城更频繁时？" }, { en: "Mean turns negative near 25%", zh: "约 25% 时均值转负" }, { en: "Reconsider above about 20%", zh: "超过约 20% 时应重新考虑" }],
                [{ en: "Offer free delivery?", zh: "是否免配送费？" }, { en: "Mean −14%; loss odds 8.2%; tail risk 2.7%", zh: "均值下降 14%；亏损概率 8.2%；尾部风险 2.7%" }, { en: "Affordable within the risk limit; keeps customers during lockdowns", zh: "在风险上限内可承受，有助于封城期间留住客户" }]
            ],
            caption: {
                en: "Free delivery is a trade-off: it costs about $5,900 of expected profit and raises the chance of a loss, but it stays within the 5% tail-risk limit and protects demand when walk-in sales disappear.",
                zh: "免费配送是一种权衡：它使期望利润减少约 5,900 美元，并提高亏损概率，但仍在 5% 的尾部风险上限之内，而且能在到店客流消失时保住需求。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Model Design",
                bullets: [
                    "Inputs: 10 drinks with fixed mix and prices (mix-weighted average $6.65), seasonal monthly demand of 9,000 and 6,000 cups, a 30% coefficient of variation converted to standard deviations, and the consultant’s cost tables.",
                    "Each drink’s monthly demand is a normal draw (120 inputs); each drink’s variable cost is one triangular draw of 28%, 30% and 35% of its price.",
                    "Outputs: yearly revenue, variable and fixed cost, profit and profit as a share of revenue, run for 5,000 iterations."
                ]
            },
            {
                title: "Base Case and Decision",
                bullets: [
                    "Expected values: revenue $598,500, variable cost $185,535, fixed cost $360,300 and profit $52,665 (8.8%).",
                    "Simulated profit: mean $52,667, standard deviation $14,107, range $3,375 to $110,580, and no loss in any iteration.",
                    "Decision: open the shop. The return is modest but steady, which suits conservative investors; with salaries at two-thirds of fixed costs, investors’ own involvement in day-to-day operations and cost control will shape the actual return."
                ]
            },
            {
                title: "Lockdown Risk",
                bullets: [
                    "Each month a Bernoulli draw decides whether a lockdown halves that month’s demand (5% chance).",
                    "Mean profit falls from $52,667 to $42,359 (−20%), the standard deviation rises to $18,901, the worst case reaches −$31,282, and 2.1% of iterations make a loss.",
                    "The decision stands for a 5% risk, but a cash reserve or other hedge is advisable for a risk-averse investor."
                ]
            },
            {
                title: "Lockdown Sensitivity",
                bullets: [
                    "Mean profit falls almost linearly, by about $2,065 per percentage point of monthly lockdown risk: $50,589 at 1%, $11,463 at 20% and −$50,549 at 50%.",
                    "The chance of a profit drops from 99.8% at 1% to 67.5% at 20% and 40.3% at 30%; mean profit turns negative at about 25%.",
                    "If investors believe the risk is above about 20%, the case to open weakens sharply."
                ]
            },
            {
                title: "Free Delivery and Risk Limit",
                bullets: [
                    "During lockdowns, 50–80% of sales are online and each order costs about $4 to deliver; covering it all cuts mean profit to $36,423 (−14%) and raises the chance of a loss to 8.2%.",
                    "The risk limit asks for no more than a 5% chance of losing over $20,000; at 100% coverage that chance is 2.7%, so the full fee can be covered.",
                    "Recommendation: cover delivery during lockdowns to keep customers when walk-in trade stops, accepting a modest cost that stays inside the agreed risk limit."
                ]
            }
        ],
        zh: [
            {
                title: "模型设计",
                bullets: [
                    "输入：10 款饮品的固定组合与价格（加权平均 6.65 美元）、每月 9,000 杯和 6,000 杯的季节性需求、由 30% 变异系数换算的标准差，以及顾问提供的成本表。",
                    "每款饮品每月需求为一次正态抽样（共 120 个输入）；每款饮品的变动成本为一次三角分布抽样（售价的 28%、30%、35%）。",
                    "输出：年度收入、变动成本与固定成本、利润及利润占收入比例，共运行 5,000 次迭代。"
                ]
            },
            {
                title: "基准情形与决策",
                bullets: [
                    "期望值：收入 598,500 美元，变动成本 185,535 美元，固定成本 360,300 美元，利润 52,665 美元（8.8%）。",
                    "模拟利润：均值 52,667 美元，标准差 14,107 美元，范围 3,375—110,580 美元，没有任何一次迭代亏损。",
                    "决策：开店。回报不高但稳定，适合保守型投资者；薪资占固定成本的三分之二，投资人自己参与日常经营和成本控制的程度会直接影响实际回报。"
                ]
            },
            {
                title: "封城风险",
                bullets: [
                    "每个月用伯努利分布抽样决定当月是否封城（概率 5%），封城当月需求减半。",
                    "平均利润从 52,667 美元降至 42,359 美元（−20%），标准差升至 18,901 美元，最差情况为 −31,282 美元，2.1% 的迭代出现亏损。",
                    "在 5% 风险下结论不变，但对风险厌恶的投资者，建议预留现金或采取其他对冲措施。"
                ]
            },
            {
                title: "封城敏感性",
                bullets: [
                    "平均利润几乎线性下降，每月封城概率每增加 1 个百分点约减少 2,065 美元：1% 时 50,589 美元，20% 时 11,463 美元，50% 时 −50,549 美元。",
                    "盈利概率从 1% 时的 99.8% 降到 20% 时的 67.5%、30% 时的 40.3%；约 25% 时平均利润转负。",
                    "如果投资人认为封城概率高于约 20%，开店的理由就明显减弱。"
                ]
            },
            {
                title: "免费配送与风险上限",
                bullets: [
                    "封城期间 50%—80% 的销售来自线上，每单配送成本约 4 美元；全额承担会使平均利润降至 36,423 美元（−14%），亏损概率升至 8.2%。",
                    "风险上限要求亏损超过 2 万美元的概率不超过 5%；全额承担时该概率为 2.7%，因此可以承担全部配送费。",
                    "建议：封城期间承担配送费，在到店客流中断时留住客户；这项成本不大，且在约定的风险上限之内。"
                ]
            }
        ]
    }
},

    {
        id: "amer-sports-ipo",
        category: "finance-investment",

        title: {
            en: "Amer Sports’ 2024 NYSE IPO — Offshore Financing, Currency Risk and Geopolitical Risk",
            zh: "Amer Sports 2024 年纽交所 IPO：跨境融资、外汇风险与地缘政治风险评估"
        },

        organisation: {
            en: "The University of Sydney",
            zh: "悉尼大学"
        },

        role: {
            en: "Group report (team of 4) · my part: IPO valuation and deal success; foreign exchange risk",
            zh: "4 人小组报告 · 本人负责：IPO 估值与交易成效、外汇风险"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "Semester 1, 2024",
            zh: "2024 年第一学期"
        },

        sortDate: "2024-05",

        logo: "",

        background: {
            paragraphs: {
                en: [
                    "Amer Sports owns Wilson, Salomon and Arc’teryx. An investor consortium led by China’s ANTA Sports took the Finnish company private in 2019, and on 1 February 2024 it returned to public markets with an initial public offering on the New York Stock Exchange (ticker AS), followed days later by a high-yield bond and new term loans.",
                    "The case asked us to critically evaluate this offshore financing decision. Two complications made it interesting: the company earns revenue in many currencies but raised US dollars, and its largest shareholder is Chinese at a time when China-linked listings in New York faced political scrutiny.",
                    "Our group of four wrote a 10-page report. I wrote the evaluation of the IPO’s valuation and deal success and the foreign exchange risk analysis, including the currency volatility statistics and the sensitivity analysis."
                ],
                zh: [
                    "Amer Sports 旗下有 Wilson、Salomon、始祖鸟（Arc’teryx）等品牌。2019 年，由中国安踏体育牵头的财团将这家芬兰公司私有化；2024 年 2 月 1 日，公司在纽约证券交易所 IPO 重新上市（代码 AS），随后又发行高收益债券并签订新的定期贷款。",
                    "案例要求我们批判性评估这项跨境融资决策。难点有两个：公司收入来自多种货币，却在美国募集美元；同时最大股东是中国企业，而当时与中国有关的公司在纽约上市正面临政治审视。",
                    "我们 4 人小组完成了 10 页报告。我负责 IPO 估值与交易成效评估，以及外汇风险分析（包括汇率波动统计和敏感性分析）。"
                ]
            },
            pointsTitle: {
                en: "Questions the report had to answer",
                zh: "报告需要回答的问题"
            },
            points: {
                en: [
                    "Motivation, timing and location of the listing.",
                    "Valuation of the IPO and whether the deal succeeded.",
                    "Foreign exchange risk and its effect on the overall costs and benefits.",
                    "Geopolitical risk and its effect on the overall costs and benefits."
                ],
                zh: [
                    "上市的动机、时机与地点。",
                    "IPO 估值以及交易是否成功。",
                    "外汇风险及其对整体成本与收益的影响。",
                    "地缘政治风险及其对整体成本与收益的影响。"
                ]
            }
        },

        overviewBullets: {
            en: [
                "In a team of 4, evaluated Amer Sports’ US$1.37 billion NYSE IPO (105 million shares at $13, below the $16–18 range) and its $1.8 billion debt refinancing; I assessed valuation and deal success, setting the shortfall against the $1.6–1.8 billion target, the muted +3% debut and the 2024 earnings outlook.",
                "Measured the group’s currency exposure using 5 years of daily rates for 6 currencies (coefficient of variation 4.2%–12.8% against the US dollar) and a ±2% / ±5% dollar sensitivity, in which a 5% move shifts the dollar value of foreign-currency debt by about 5%, and set out the dividend, bond-coupon and hedging implications."
            ],
            zh: [
                "在 4 人小组中评估 Amer Sports 13.7 亿美元的纽交所 IPO（1.05 亿股、每股 13 美元，低于 16—18 美元的定价区间）及 18 亿美元债务再融资；本人负责估值与交易成效，结合 16—18 亿美元的募资目标、首日仅涨 3% 的表现和 2024 年盈利指引作出判断。",
                "用 6 种货币近 5 年的日度汇率衡量外汇风险（对美元的变异系数为 4.2%—12.8%），并做美元 ±2% / ±5% 的敏感性分析（美元每变动 5%，外币债务折合美元的金额约变动 5%），进而分析股息、债券利息和对冲安排。"
            ]
        },

        tags: [
            "International Finance",
            "IPO Valuation",
            "Foreign Exchange Risk",
            "Sensitivity Analysis",
            "Hedging",
            "Geopolitical Risk",
            "Descriptive Statistics"
        ],

        metrics: [
            {
                value: "$13",
                label: {
                    en: "Final IPO price, below the marketed $16–18 range",
                    zh: "最终发行价，低于 16—18 美元的定价区间"
                }
            },
            {
                value: "$1.37bn",
                label: {
                    en: "Gross proceeds, against a $1.6–1.8bn target",
                    zh: "募资总额，目标为 16—18 亿美元"
                }
            },
            {
                value: "+3.1%",
                label: {
                    en: "First-day move ($13.40), a muted debut",
                    zh: "首日涨幅（13.40 美元），表现平淡"
                }
            },
            {
                value: "$1.8bn",
                label: {
                    en: "Third-party loans refinanced to 2031, alongside about $4bn of shareholder loans retired",
                    zh: "第三方贷款再融资至 2031 年，另清偿约 40 亿美元股东贷款"
                }
            },
            {
                value: "4.2%–12.8%",
                label: {
                    en: "5-year coefficient of variation against the USD, CNY lowest and JPY highest",
                    zh: "5 年对美元的变异系数，人民币最低、日元最高"
                }
            },
            {
                value: "±5%",
                label: {
                    en: "Dollar move that shifts foreign-currency debt by −4.76% / +5.26% in USD terms",
                    zh: "美元变动 ±5% 时，外币债务折合美元变动 −4.76% / +5.26%"
                }
            }
        ],

        visuals: [
            {
                type: "table",
                source: {
                    en: "My part · deal success",
                    zh: "本人负责 · 交易成效"
                },
                title: {
                    en: "The IPO at a Glance: Plan vs Outcome",
                    zh: "IPO 概览：计划与结果"
                },
                columns: {
                    en: ["Item", "Planned", "Outcome"],
                    zh: ["项目", "计划", "结果"]
                },
                rows: [
                    [{ en: "Price per share", zh: "每股价格" }, "$16–18", "$13"],
                    [{ en: "Shares offered", zh: "发行股数" }, { en: "100 million", zh: "1 亿股" }, { en: "105 million (upsized)", zh: "1.05 亿股（扩大）" }],
                    [{ en: "Gross proceeds", zh: "募资总额" }, "$1.6–1.8bn", "$1.37bn"],
                    [{ en: "Valuation", zh: "估值" }, { en: "Up to $8.7bn", zh: "最高 87 亿美元" }, "$6.3bn"],
                    [{ en: "First trading day", zh: "首个交易日" }, "–", { en: "Opened and closed at $13.40 (+3.1%)", zh: "开盘、收盘均为 13.40 美元（+3.1%）" }],
                    [{ en: "ANTA’s cornerstone order", zh: "安踏基石认购" }, "–", { en: "$220m; 44.7% stake after the IPO", zh: "2.2 亿美元；IPO 后持股 44.7%" }]
                ],
                highlightRow: 2,
                caption: {
                    en: "Priced 19% below the bottom of the range, the deal raised about 80% of the $1.7bn midpoint target. Reports at the time linked the discount to the Federal Reserve signalling that rate cuts were not imminent, investor unease about the company’s debt and losses, and its growing reliance on Greater China.",
                    zh: "发行价比区间下限低 19%，募资约为 17 亿美元中值目标的 80%。当时的报道把折价归因于美联储暗示近期不会降息、投资者对公司负债和亏损的担忧，以及公司对大中华区的依赖上升。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · deal success",
                    zh: "本人负责 · 交易成效"
                },
                title: {
                    en: "How the Money Was Used: The February 2024 Refinancing",
                    zh: "资金用途：2024 年 2 月的再融资"
                },
                columns: {
                    en: ["Instrument", "Amount", "Currency", "Terms"],
                    zh: ["工具", "金额", "币种", "条款"]
                },
                rows: [
                    [{ en: "IPO (new ordinary shares)", zh: "IPO（新发普通股）" }, "$1.37bn", "USD", { en: "Listed on NYSE, 1 February 2024", zh: "2024 年 2 月 1 日纽交所上市" }],
                    [{ en: "Senior secured notes", zh: "优先担保债券" }, "$800m", "USD", { en: "6.75% coupon, due 2031; upsized from $600m", zh: "票息 6.75%，2031 年到期；由 6 亿美元扩至 8 亿美元" }],
                    [{ en: "Term loan", zh: "定期贷款" }, "$500m", "USD", { en: "New senior secured facility", zh: "新优先担保贷款" }],
                    [{ en: "Term loan", zh: "定期贷款" }, "€700m", "EUR", { en: "New senior secured facility", zh: "新优先担保贷款" }],
                    [{ en: "Debt repaid or retired", zh: "偿还或清偿的债务" }, { en: "≈$1.8bn + ≈$4bn", zh: "约 18 亿 + 约 40 亿美元" }, { en: "Mixed", zh: "多币种" }, { en: "Third-party loans refinanced; shareholder loans retired", zh: "第三方贷款再融资；股东贷款清偿" }]
                ],
                caption: {
                    en: "At the end of 2023 the group carried $1.86bn of bank loans and $4.08bn of shareholder loans, and its 2023 finance cost was $413m. The IPO was therefore mainly a balance-sheet repair. The new $800m of notes alone carry about $54m of coupons a year, paid in US dollars.",
                    zh: "2023 年末，集团有 18.6 亿美元银行贷款和 40.8 亿美元股东贷款，2023 年财务费用 4.13 亿美元，因此这次 IPO 主要是为了修复资产负债表。仅新发的 8 亿美元债券每年就需支付约 5,400 万美元利息，以美元支付。"
                }
            },
            {
                type: "bars",
                source: {
                    en: "Company FY2023 results",
                    zh: "公司 2023 财年业绩"
                },
                title: {
                    en: "Where Revenue Comes From (FY2023, $4.37bn)",
                    zh: "收入来源（2023 财年，43.7 亿美元）"
                },
                items: [
                    { label: { en: "Americas", zh: "美洲" }, value: 39.5, suffix: "%" },
                    { label: { en: "EMEA", zh: "欧洲、中东和非洲" }, value: 33.2, suffix: "%" },
                    { label: { en: "Greater China", zh: "大中华区" }, value: 19.3, suffix: "%" },
                    { label: { en: "Asia Pacific", zh: "亚太" }, value: 8.0, suffix: "%" }
                ],
                caption: {
                    en: "About 60% of revenue is earned outside the Americas, mostly in euros, pounds, yuan, yen and other currencies, while the IPO proceeds and most new debt are in US dollars. This mismatch is the source of the transaction risk analysed below. Revenue grew 23% in 2023, led by Greater China (+61%).",
                    zh: "约 60% 的收入来自美洲以外，以欧元、英镑、人民币、日元等货币计价，而 IPO 所得和大部分新债务都是美元。这种错配正是下文分析的交易风险来源。2023 年收入增长 23%，其中大中华区增长 61%。"
                }
            },
            {
                type: "process",
                source: {
                    en: "My part · FX analysis",
                    zh: "本人负责 · 外汇分析"
                },
                title: {
                    en: "How I Analysed Foreign Exchange Risk",
                    zh: "外汇风险分析思路"
                },
                steps: {
                    en: [
                        "Identify the exposure: USD proceeds vs multi-currency debt",
                        "Measure 5-year volatility of 6 currencies",
                        "Stress-test ±2% and ±5% dollar moves",
                        "Look ahead: dividends and bond coupons",
                        "Weigh hedging cost against stability"
                    ],
                    zh: [
                        "识别敞口：美元募资与多币种债务",
                        "测算 6 种货币近 5 年的波动",
                        "压力测试美元 ±2%、±5%",
                        "前瞻：股息与债券利息",
                        "权衡对冲成本与现金流稳定"
                    ]
                },
                caption: {
                    en: "The analysis looks at transaction risk, meaning the effect of exchange-rate moves on actual cash flows: debt repayments, dividends and interest.",
                    zh: "分析聚焦交易风险，即汇率变动对实际现金流（还债、股息、利息）的影响。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · FX analysis",
                    zh: "本人负责 · 外汇分析"
                },
                title: {
                    en: "Five-Year Volatility of the Main Revenue Currencies Against the USD",
                    zh: "主要收入货币对美元近 5 年的波动"
                },
                columns: {
                    en: ["Currency (units per USD)", "Average", "Standard deviation", "Coefficient of variation"],
                    zh: ["货币（每 1 美元兑换）", "均值", "标准差", "变异系数"]
                },
                rows: [
                    [{ en: "Chinese yuan (CNY)", zh: "人民币（CNY）" }, "6.8175", "0.2876", "4.22%"],
                    [{ en: "Euro (EUR)", zh: "欧元（EUR）" }, "0.8990", "0.0461", "5.13%"],
                    [{ en: "British pound (GBP)", zh: "英镑（GBP）" }, "0.7813", "0.0409", "5.24%"],
                    [{ en: "Australian dollar (AUD)", zh: "澳元（AUD）" }, "1.4360", "0.0814", "5.67%"],
                    [{ en: "Indian rupee (INR)", zh: "印度卢比（INR）" }, "76.1884", "4.5040", "5.91%"],
                    [{ en: "Japanese yen (JPY)", zh: "日元（JPY）" }, "120.1682", "15.3266", "12.75%"]
                ],
                highlightRow: 5,
                caption: {
                    en: "Daily rates over the five years to early 2024, for currencies matched to Amer’s revenue regions. Because the currencies trade at very different scales, I compared them using the coefficient of variation (standard deviation ÷ average). The yen was by far the most volatile; the managed yuan was the least.",
                    zh: "使用截至 2024 年初的 5 年日度汇率，货币按 Amer 的收入地区选取。各货币量级差异很大，因此用变异系数（标准差 ÷ 均值）比较。日元波动远高于其他货币；有管理的人民币波动最低。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · FX analysis",
                    zh: "本人负责 · 外汇分析"
                },
                title: {
                    en: "Sensitivity: What a Dollar Move Does to Foreign-Currency Debt",
                    zh: "敏感性分析：美元变动对外币债务的影响"
                },
                columns: {
                    en: ["US dollar move", "Change in USD needed to repay", "Most likely currencies to move this much"],
                    zh: ["美元变动", "偿还所需美元的变化", "最可能出现该幅度波动的货币"]
                },
                rows: [
                    [{ en: "Appreciates 2%", zh: "升值 2%" }, "−1.96%", { en: "GBP 28.6%, EUR 16.4%", zh: "英镑 28.6%，欧元 16.4%" }],
                    [{ en: "Appreciates 5%", zh: "升值 5%" }, "−4.76%", { en: "GBP 12.6%, EUR 5.7%", zh: "英镑 12.6%，欧元 5.7%" }],
                    [{ en: "Depreciates 2%", zh: "贬值 2%" }, "+2.04%", { en: "EUR 43.0%, GBP 41.9%", zh: "欧元 43.0%，英镑 41.9%" }],
                    [{ en: "Depreciates 5%", zh: "贬值 5%" }, "+5.26%", { en: "AUD 44.2%, CNY 40.1%", zh: "澳元 44.2%，人民币 40.1%" }]
                ],
                caption: {
                    en: "The debt change is 1 ÷ (1 ± move) − 1: a stronger dollar makes foreign-currency debt cheaper to repay with USD proceeds, a weaker dollar makes it dearer. The last column gives the estimated probability of each move based on recent exchange-rate data. The euro and pound stand out, which matters because EMEA is the second-largest region and the refinancing included a €700m loan. At about $1.08 per euro, a 5% dollar move shifts that loan alone by roughly $36–40m (my illustration for this page).",
                    zh: "债务变化 = 1 ÷（1 ± 变动幅度）− 1：美元走强时，用美元偿还外币债务更便宜；美元走弱时更贵。最后一列为根据近期汇率数据估计的各幅度波动概率。欧元和英镑最突出，而 EMEA 是第二大收入地区，再融资中也包括 7 亿欧元贷款。按约 1.08 美元兑 1 欧元计算，美元变动 5% 仅这笔贷款折合美元就会变动约 3,600 万—4,000 万美元（为本页补充的示例）。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · FX analysis",
                    zh: "本人负责 · 外汇分析"
                },
                title: {
                    en: "Forward-Looking FX Exposures and Responses",
                    zh: "前瞻性外汇敞口与应对"
                },
                columns: {
                    en: ["Exposure", "Why it matters", "Response"],
                    zh: ["敞口", "影响", "应对"]
                },
                rows: [
                    [{ en: "Future dividends in USD", zh: "未来以美元派发股息" }, { en: "Peers pay dividends; an illustrative $0.75 per share on about 505m shares needs about $379m, which would draw on cash from every region, not only the US. A strong dollar shrinks the USD value of foreign earnings.", zh: "同业普遍派息；以每股 0.75 美元、约 5.05 亿股为例需约 3.79 亿美元，需要动用各地区而非仅美国的现金。美元走强会压缩海外利润折合的美元。" }, { en: "Time payouts with forwards or futures matched to the payment date", zh: "用与支付日匹配的远期或期货锁定汇率" }],
                    [{ en: "Coupons on the $800m notes", zh: "8 亿美元债券的利息" }, { en: "6.75% semi-annual coupons set while US rates were at a two-decade high; any shortfall in USD cash must be met by converting other currencies.", zh: "6.75% 的票息在美国利率处于 20 年高位时确定，每半年支付；美元现金不足时需兑换其他货币支付。" }, { en: "Match USD costs with Americas revenue; hedge the residual", zh: "用美洲美元收入匹配美元支出，剩余部分对冲" }],
                    [{ en: "Repaying foreign-currency debt with USD", zh: "用美元偿还外币债务" }, { en: "Each 5% dollar move changes the USD cost by about 5%.", zh: "美元每变动 5%，偿债所需美元约变动 5%。" }, { en: "Forwards or options; accept the premium as the price of predictable cash flows", zh: "远期或期权；把期权费视为换取现金流可预测性的成本" }]
                ],
                caption: {
                    en: "Cost–benefit view: hedging costs premiums and fees, and if rates move favourably the premium is lost. In exchange it caps the downside, stabilises cash flow and makes budgeting more reliable, which matters for a company that had only just returned to profitability guidance.",
                    zh: "成本收益：对冲需要支付期权费和交易费，汇率朝有利方向变动时期权费会损失；换来的是下行风险封顶、现金流稳定和预算更可靠，这对刚刚给出盈利指引的公司尤为重要。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · deal success",
                    zh: "本人负责 · 交易成效"
                },
                title: {
                    en: "Was the Deal a Success? Short Term vs Long Term",
                    zh: "交易成功吗？短期与长期"
                },
                columns: {
                    en: ["Lens", "Evidence", "Verdict"],
                    zh: ["角度", "依据", "判断"]
                },
                rows: [
                    [{ en: "Fundraising target", zh: "募资目标" }, { en: "$1.37bn raised vs $1.6–1.8bn sought; price cut to $13", zh: "募得 13.7 亿美元，目标 16—18 亿；价格降至 13 美元" }, { en: "Fell short", zh: "未达预期" }],
                    [{ en: "Market reception", zh: "市场反应" }, { en: "+3.1% on day one with thin early trading; Fed rates still high after 11 hikes from March 2022 to July 2023", zh: "首日 +3.1%，开盘成交清淡；美联储 2022 年 3 月至 2023 年 7 月加息 11 次后利率仍高" }, { en: "Muted", zh: "平淡" }],
                    [{ en: "Balance sheet", zh: "资产负债表" }, { en: "$1.8bn of third-party loans refinanced to 2031 and about $4bn of shareholder loans retired", zh: "18 亿美元第三方贷款再融资至 2031 年，约 40 亿美元股东贷款清偿" }, { en: "Achieved", zh: "达成" }],
                    [{ en: "Earnings outlook", zh: "盈利前景" }, { en: "2024 guidance: EPS $0.30–0.40 despite a $0.08–0.09 one-off refinancing charge (Q1: −$0.01 to $0.02); 2023 revenue +23% and net loss narrowed from $253m to $209m", zh: "2024 年指引：每股收益 0.30—0.40 美元（含 0.08—0.09 美元一次性再融资费用；一季度 −0.01 至 0.02 美元）；2023 年收入增长 23%，净亏损由 2.53 亿收窄至 2.09 亿美元" }, { en: "Positive", zh: "积极" }]
                ],
                caption: {
                    en: "My conclusion: judged by the fundraising target and the debut, the IPO under-delivered; judged by its purpose of repairing the balance sheet and returning to profit, it worked. The muted price reflected high interest rates and concerns about debt and losses rather than a failed strategy.",
                    zh: "我的结论：按募资目标和首日表现看，IPO 未达预期；按“修复资产负债表、恢复盈利”的目的看，它是成功的。定价偏低反映的是高利率环境以及市场对负债和亏损的担忧，而非战略失败。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Group sections",
                    zh: "小组部分"
                },
                title: {
                    en: "Why List, Why Now, Why New York",
                    zh: "为何上市、为何此时、为何纽约"
                },
                columns: {
                    en: ["Question", "Group’s argument"],
                    zh: ["问题", "小组观点"]
                },
                rows: [
                    [{ en: "Motivation", zh: "动机" }, { en: "Before the IPO the company relied on operating cash flow and shareholder loans; listing would fund innovation and expansion, repay debt and improve the capital structure.", zh: "上市前公司依靠经营现金流和股东贷款；上市可为创新和扩张融资、偿还债务、改善资本结构。" }],
                    [{ en: "Timing", zh: "时机" }, { en: "Inflation was easing (IMF forecast 2.9% US inflation for 2024) and rate cuts were expected; post-pandemic demand for health and outdoor products was rising (57.3% US outdoor participation in 2023); losses were narrowing.", zh: "通胀回落（IMF 预测美国 2024 年通胀 2.9%），市场预期降息；疫情后健康与户外需求上升（2023 年美国户外运动参与率 57.3%）；亏损在收窄。" }],
                    [{ en: "Location", zh: "地点" }, { en: "The US has the deepest equity market (Europe relies more on bank finance), the Americas is Amer’s largest revenue region, and NYSE offers the widest investor base and liquidity.", zh: "美国股市规模最大（欧洲更依赖银行融资）；美洲是 Amer 最大的收入地区；纽交所投资者基础最广、流动性最好。" }]
                ],
                caption: {
                    en: "The group concluded that February 2024 was a reasonable, though not optimal, window: waiting for rate cuts could have improved pricing but carried its own uncertainty.",
                    zh: "小组认为 2024 年 2 月是合理但不一定最优的窗口：等待降息或可改善定价，但也有不确定性。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Group sections",
                    zh: "小组部分"
                },
                title: {
                    en: "Geopolitical Risk",
                    zh: "地缘政治风险"
                },
                columns: {
                    en: ["Relationship", "Exposure", "Assessment"],
                    zh: ["关系", "敞口", "评估"]
                },
                rows: [
                    [{ en: "China–US", zh: "中美" }, { en: "ANTA is the largest shareholder; Greater China is 19% of revenue; key suppliers are in China; US tariffs on Chinese apparel (mostly around 15%).", zh: "安踏为最大股东；大中华区占收入 19%；主要供应商在中国；美国对中国服装加征关税（多数约 15%）。" }, { en: "Board independence reduces governance concerns; sporting goods are not on the US priority trade-dispute list. Shifting some sourcing to Southeast Asia, as Nike did, would cut tariff risk at an up-front cost.", zh: "董事会独立降低治理疑虑；运动用品不在美国重点贸易争端清单上。可效仿耐克把部分采购转向东南亚，以前期成本换取关税风险下降。" }],
                    [{ en: "EU–US", zh: "欧美" }, { en: "Headquartered in Finland; the US is the EU’s largest partner in services trade.", zh: "总部在芬兰；美国是欧盟最大的服务贸易伙伴。" }, { en: "EU registration supports access to US markets despite Chinese ownership.", zh: "尽管由中资控股，欧盟注册身份有助于进入美国市场。" }],
                    [{ en: "Credit", zh: "信用" }, { en: "Sub-investment-grade issuer paying 6.75% while US policy rates were about 5.5%.", zh: "非投资级发行人，美国政策利率约 5.5% 时需支付 6.75% 票息。" }, { en: "A downgrade would raise future borrowing costs.", zh: "若评级下调，未来融资成本将上升。" }]
                ]
            }
        ],

        details: {
            en: [
                {
                    title: "The Case · Team",
                    bullets: [
                        "Amer Sports (Wilson, Salomon, Arc’teryx) was taken private from Nasdaq Helsinki in 2019 by a consortium led by ANTA Sports, alongside FountainVest, Anamered and Tencent.",
                        "On 1 February 2024 it listed on the NYSE and, within days, refinanced its bank debt with a high-yield bond and new US-dollar and euro term loans.",
                        "The brief asked for a specific, evidence-based evaluation of this offshore financing decision, with emphasis on foreign exchange and geopolitical risk, in a report of at most 10 pages."
                    ]
                },
                {
                    title: "Motivation, Timing and Location · Team",
                    bullets: [
                        "Motivation: before the IPO, the company relied on operating cash flow and shareholder loans while spending heavily on product innovation; listing would fund growth and repay debt.",
                        "Timing: easing inflation, expected rate cuts, rising post-pandemic demand for outdoor products and narrowing losses made February 2024 a reasonable, if not optimal, window.",
                        "Location: the US offers the deepest equity market, Amer’s largest revenue region is the Americas, and NYSE offers the widest investor base and liquidity."
                    ]
                },
                {
                    title: "IPO Valuation and Deal Success · My part",
                    bullets: [
                        "Compared the plan with the outcome: 100 million shares at $16–18 were planned, while 105 million were sold at $13, raising $1.37bn against a $1.6–1.8bn target and valuing the company at about $6.3bn.",
                        "Explained the discount: continuing losses and a heavy debt load weighed on investor confidence, and after 11 Federal Reserve rate rises from March 2022 to July 2023 investors demanded higher returns from a leveraged issuer.",
                        "Traced the use of funds: together with $800m of 6.75% notes due 2031 and new $500m and €700m term loans, the proceeds refinanced about $1.8bn of third-party loans and retired about $4bn of shareholder loans.",
                        "Used the earnings outlook as the long-term test: 2024 EPS guidance of $0.30–0.40 despite a one-off $0.08–0.09 refinancing charge, and a Q1 range of −$0.01 to $0.02 that reflected those charges rather than weak operations.",
                        "Verdict: a short-term shortfall against the fundraising target, but a long-term success in repairing the balance sheet and setting up a return to profit."
                    ]
                },
                {
                    title: "Foreign Exchange Risk: The Exposure · My part",
                    bullets: [
                        "Framed the problem as transaction risk: exchange-rate moves change the cash needed for debt repayments, dividends and interest.",
                        "The IPO raised US dollars, but about 60% of revenue is earned outside the Americas and the group operates in euros, pounds, yuan, yen and other currencies, so proceeds must be converted to retire debt held across regions.",
                        "Because the company did not disclose the currency mix of the debt it repaid, the report assumed that debt was spread across its operating regions."
                    ]
                },
                {
                    title: "Foreign Exchange Risk: Measurement · My part",
                    bullets: [
                        "Computed descriptive statistics on five years of daily exchange rates for six currencies matched to the revenue regions: CNY, EUR, GBP, AUD, INR and JPY.",
                        "Used the coefficient of variation to compare currencies on different scales: the yen was the most volatile (12.75%) and the yuan the least (4.22%), with the others between 5.1% and 5.9%.",
                        "Built a sensitivity table for ±2% and ±5% dollar moves: a 2% appreciation reduces the USD needed to repay foreign-currency debt by 1.96%, and a 5% depreciation raises it by 5.26%.",
                        "Combined this with the estimated probability of each move from recent data: the euro and pound were the most likely to move by 2%, which matters because EMEA is the second-largest region.",
                        "Showed why both views are needed: historical volatility pointed to Asia-Pacific currencies, while recent conditions pointed to the euro and pound."
                    ]
                },
                {
                    title: "Foreign Exchange Risk: Dividends, Bonds and Hedging · My part",
                    bullets: [
                        "Dividends: as a mature brand group whose peers pay dividends, Amer is likely to start paying them; an illustrative $0.75 per share would need about $379m in US dollars, drawn from earnings in many currencies.",
                        "Bonds: the $800m notes, upsized from $600m and priced at 6.75% while US rates were at a two-decade high, create semi-annual US-dollar coupons of about $27m each that may need converted foreign earnings.",
                        "Hedging: forwards or futures can lock in rates for known payment dates, and options can cap the downside. The premium and fees are a cost, and are lost if rates move favourably, but stable cash flows and more reliable budgeting outweigh that cost over time."
                    ]
                },
                {
                    title: "Geopolitical Risk · Team",
                    bullets: [
                        "China–US: ANTA held about 45% after the IPO, Greater China is 19% of revenue and key suppliers are in China, so tariffs and trade tensions are the main risks. The group recommended gradually moving some sourcing to Southeast Asia, as Nike did, accepting up-front migration costs.",
                        "The group judged delisting risk to be low: the board operates independently of ANTA, and sporting goods are not a priority in US trade disputes with China.",
                        "EU–US: as a Finland-headquartered company, Amer benefits from the close EU–US trade relationship despite its Chinese ownership.",
                        "Credit: as a sub-investment-grade borrower, a downgrade would raise the cost of future debt."
                    ]
                },
                {
                    title: "Overall Conclusion · Team",
                    bullets: [
                        "Listing on the NYSE fitted Amer’s growth strategy and repaired its balance sheet, but it left the company exposed to currency movements on debt service and future dividends.",
                        "Geopolitics cuts both ways: China–US tension is a cost, while the EU base and board independence reduce it. Careful hedging and supply-chain diversification are needed to keep the benefits of the US listing."
                    ]
                }
            ],
            zh: [
                {
                    title: "案例 · 小组",
                    bullets: [
                        "Amer Sports（Wilson、Salomon、始祖鸟）于 2019 年被安踏体育牵头、联合方源资本、Anamered 和腾讯的财团从纳斯达克赫尔辛基私有化退市。",
                        "2024 年 2 月 1 日公司在纽交所上市，并在几天内用高收益债券以及新的美元、欧元定期贷款对银行债务进行了再融资。",
                        "作业要求在 10 页以内，对这项跨境融资决策作出具体、有依据的评估，重点是外汇风险和地缘政治风险。"
                    ]
                },
                {
                    title: "动机、时机与地点 · 小组",
                    bullets: [
                        "动机：上市前公司依靠经营现金流和股东贷款，同时在产品创新上投入很大；上市可为增长融资并偿还债务。",
                        "时机：通胀回落、市场预期降息、疫情后户外需求上升、亏损收窄，因此 2024 年 2 月是合理但不一定最优的窗口。",
                        "地点：美国股市最深，美洲是 Amer 最大的收入地区，纽交所投资者基础最广、流动性最好。"
                    ]
                },
                {
                    title: "IPO 估值与交易成效 · 本人负责",
                    bullets: [
                        "对比计划与结果：原计划以 16—18 美元发行 1 亿股，实际以 13 美元发行 1.05 亿股，募资 13.7 亿美元（目标 16—18 亿），估值约 63 亿美元。",
                        "解释折价原因：持续亏损和较重的债务削弱了投资者信心；美联储 2022 年 3 月至 2023 年 7 月加息 11 次后，投资者对高杠杆发行人要求更高回报。",
                        "梳理资金用途：IPO 所得连同 8 亿美元 6.75%、2031 年到期的债券以及新的 5 亿美元和 7 亿欧元定期贷款，用于再融资约 18 亿美元第三方贷款，并清偿约 40 亿美元股东贷款。",
                        "以盈利前景作为长期检验：2024 年每股收益指引 0.30—0.40 美元（已含 0.08—0.09 美元的一次性再融资费用）；一季度 −0.01 至 0.02 美元的区间反映的是这些费用，而非经营疲弱。",
                        "结论：短期未达募资目标，但从修复资产负债表、走向盈利的长期角度看是成功的。"
                    ]
                },
                {
                    title: "外汇风险：敞口 · 本人负责",
                    bullets: [
                        "把问题界定为交易风险：汇率变动会改变偿债、派息和付息所需的现金。",
                        "IPO 募集的是美元，但约 60% 的收入来自美洲以外，集团业务涉及欧元、英镑、人民币、日元等货币，因此偿还各地区债务时需要换汇。",
                        "公司未披露所偿还债务的币种结构，报告据此假设债务分布在各经营地区。"
                    ]
                },
                {
                    title: "外汇风险：测算 · 本人负责",
                    bullets: [
                        "用 6 种与收入地区对应的货币（人民币、欧元、英镑、澳元、印度卢比、日元）近 5 年的日度汇率做描述统计。",
                        "用变异系数比较量级不同的货币：日元波动最大（12.75%），人民币最小（4.22%），其余在 5.1%—5.9% 之间。",
                        "做美元 ±2%、±5% 的敏感性表：美元升值 2% 时偿还外币债务所需美元减少 1.96%，贬值 5% 时增加 5.26%。",
                        "结合根据近期数据估计的各幅度波动概率：欧元和英镑最可能出现 2% 的波动，而 EMEA 正是第二大收入地区。",
                        "说明两种视角都需要：历史波动指向亚太货币，近期市场情况则指向欧元和英镑。"
                    ]
                },
                {
                    title: "外汇风险：股息、债券与对冲 · 本人负责",
                    bullets: [
                        "股息：作为同业普遍派息的成熟品牌集团，Amer 很可能开始派息；以每股 0.75 美元为例需约 3.79 亿美元，资金来自多种货币的利润。",
                        "债券：8 亿美元债券由 6 亿扩大而来，在美国利率处于 20 年高位时以 6.75% 定价，每半年约需支付 2,700 万美元利息，可能需要兑换海外利润支付。",
                        "对冲：远期或期货可为已知支付日锁定汇率，期权可以封顶下行风险。期权费和交易费是成本，汇率朝有利方向变动时会损失，但长期看现金流稳定和预算可靠的好处大于成本。"
                    ]
                },
                {
                    title: "地缘政治风险 · 小组",
                    bullets: [
                        "中美：IPO 后安踏持股约 45%，大中华区占收入 19%，主要供应商在中国，关税和贸易摩擦是主要风险。小组建议效仿耐克，逐步把部分采购转移到东南亚，接受前期迁移成本。",
                        "小组认为退市风险较低：董事会独立于安踏运作，运动用品也不是美国对华贸易争端的重点。",
                        "欧美：作为总部在芬兰的公司，尽管由中资控股，Amer 仍受益于紧密的欧美贸易关系。",
                        "信用：作为非投资级借款人，评级下调会提高未来的融资成本。"
                    ]
                },
                {
                    title: "总体结论 · 小组",
                    bullets: [
                        "在纽交所上市符合 Amer 的增长战略并修复了资产负债表，但也让公司在偿债和未来派息上暴露于汇率波动。",
                        "地缘政治有利有弊：中美摩擦带来成本，欧盟总部和董事会独立则起到缓冲。需要审慎对冲并分散供应链，才能保住美国上市的好处。"
                    ]
                }
            ]
        }
    },

    {
        id: "beneficial-ownership",
        category: "esg-policy",

        title: {
            en: "International Financial Crime — Beneficial Ownership Transparency and Australia’s AML Gap",
            zh: "International Financial Crime：受益所有权透明度与澳大利亚反洗钱制度缺口"
        },

        organisation: {
            en: "The University of Sydney",
            zh: "悉尼大学"
        },

        role: {
            en: "Group research paper (team of 5) · my part: Australia analysis (R.24 / R.25), conclusion and final integration · revised after marker feedback",
            zh: "5 人小组研究论文 · 本人负责：澳大利亚分析（R.24 / R.25）、结论与统稿 · 按老师评语修订"
        },

        recognition: {
            en: "Received a recommendation letter from the course lecturer",
            zh: "获得课程老师的推荐信"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "Semester 2, 2025",
            zh: "2025 年第二学期"
        },

        sortDate: "2025-10",

        logo: "",

        background: {
            paragraphs: {
                en: [
                    "Beneficial ownership (BO) transparency lets authorities see the real people who own or control companies and trusts. Without it, criminals can hide the proceeds of crime behind nominees and chains of entities. The Financial Action Task Force (FATF) sets the global standard in Recommendation 24 (companies and other legal persons) and Recommendation 25 (trusts and other legal arrangements).",
                    "Our group was asked to critically assess the statement: “Australia has failed to enact a comprehensive law requiring the disclosure of beneficial ownership of legal persons and legal arrangements in breach of the FATF Standards. This failure constitutes a major weakness in Australia’s AML system to prevent and detect the proceeds of crime.” The paper had to examine at least one country that complies with Recommendations 24 and 25, stay within 3,000 words and rely on at least four academic or official sources.",
                    "I wrote the Australia analysis and the conclusion and integrated the final paper. After marking, I revised the whole paper in response to the marker’s comments: the central argument is now one thesis tested in every section, and the case studies and Australian analysis move from description to critical synthesis."
                ],
                zh: [
                    "受益所有权（BO）透明度让监管和执法机关能看到公司和信托背后真正的所有者与控制人；缺少这类信息，犯罪所得就可以藏在代持人和多层实体之后。反洗钱金融行动特别工作组（FATF）在第 24 项建议（公司等法人）和第 25 项建议（信托等法律安排）中设定了全球标准。",
                    "小组的题目是批判性评估以下论断：“澳大利亚未能制定全面的法律，要求披露法人和法律安排的受益所有权，违反了 FATF 标准；这一缺失是澳大利亚反洗钱体系在预防和发现犯罪所得方面的重大弱点。”论文需考察至少一个符合第 24、25 项建议的国家，字数不超过 3,000，并使用至少 4 个学术或官方来源。",
                    "我负责澳大利亚分析和结论，并统稿全文。评分后，我按老师评语修订了全文：把核心论点收紧为一个论题，并在每一部分反复检验；案例比较和澳大利亚分析从描述转向批判性综合。"
                ]
            },
            pointsTitle: {
                en: "What the paper had to do",
                zh: "论文需要完成的任务"
            },
            points: {
                en: [
                    "Explain what Recommendations 24 and 25 require and how the FATF rates compliance and effectiveness.",
                    "Diagnose why Australia is rated Partially Compliant on Recommendation 24 and Non-Compliant on Recommendation 25.",
                    "Compare Australia with countries that comply: the UK’s public register and the Netherlands’ restricted-access register, with Canada as a federal control case.",
                    "Weigh counter-arguments and decide whether the statement holds, then recommend reforms."
                ],
                zh: [
                    "说明第 24、25 项建议的要求，以及 FATF 如何评定技术合规和有效性。",
                    "分析澳大利亚为何在第 24 项被评为“部分合规”、在第 25 项被评为“不合规”。",
                    "与合规国家比较：英国的公开登记模式和荷兰的受限访问模式，并以同为联邦制的加拿大作对照。",
                    "权衡反方观点，判断论断是否成立，并提出改革建议。"
                ]
            }
        },

        overviewBullets: {
            en: [
                "In a team of 5, assessed Australia’s beneficial-ownership regime against FATF Recommendations 24 and 25 (Partially Compliant and Non-Compliant, unchanged in the 2024 follow-up) and benchmarked it against the UK, the Netherlands and Canada; I wrote the Australia legal analysis and the conclusion and integrated the final paper.",
                "Revised the paper after marking around a three-test framework (coverage, verification, access and enforcement): showed that the UK’s public register (about 20% of entities with no individual owner declared) and the Dutch register (27% populated at the FATF visit) both fell short on accuracy, and proposed 4 reforms ahead of Australia’s 2026–27 evaluation."
            ],
            zh: [
                "在 5 人小组中，对照 FATF 第 24、25 项建议评估澳大利亚的受益所有权制度（分别为“部分合规”和“不合规”，2024 年跟进报告未上调），并与英国、荷兰、加拿大比较；本人负责澳大利亚法律分析与结论，并统稿全文。",
                "评分后围绕“覆盖范围、信息核验、获取与执法”三项检验修订全文：指出英国公开登记（约 20% 的实体未申报任何自然人受益人）和荷兰登记（FATF 现场评估时填报率仅 27%）都在信息准确性上不足，并针对澳大利亚 2026—27 年评估提出 4 项改革建议。"
            ]
        },

        tags: [
            "AML/CTF",
            "FATF",
            "Beneficial Ownership",
            "Financial Regulation",
            "Legal Analysis",
            "Comparative Policy",
            "Policy Research"
        ],

        metrics: [
            {
                value: "PC / NC",
                label: {
                    en: "Australia’s ratings on R.24 / R.25, unchanged in the 2024 follow-up",
                    zh: "澳大利亚第 24 / 25 项建议评级，2024 年跟进报告未变"
                }
            },
            {
                value: "4",
                label: {
                    en: "Countries compared: Australia, UK, Netherlands, Canada",
                    zh: "比较国家：澳大利亚、英国、荷兰、加拿大"
                }
            },
            {
                value: "3",
                label: {
                    en: "Tests used throughout: coverage, verification, access and enforcement",
                    zh: "贯穿全文的三项检验：覆盖、核验、获取与执法"
                }
            },
            {
                value: "≈20%",
                label: {
                    en: "UK register entities with no individual beneficial owner declared",
                    zh: "英国登记中未申报任何自然人受益人的实体占比"
                }
            },
            {
                value: "27%",
                label: {
                    en: "Dutch register populated at the time of the FATF on-site visit",
                    zh: "FATF 现场评估时荷兰登记的填报率"
                }
            },
            {
                value: "4",
                label: {
                    en: "Reforms proposed for Australia’s 2026–27 FATF evaluation",
                    zh: "针对 2026—27 年 FATF 评估提出的改革建议"
                }
            }
        ],

        visuals: [
            {
                type: "process",
                source: {
                    en: "Revised paper · my integration",
                    zh: "修订版论文 · 本人统稿"
                },
                title: {
                    en: "How the Argument Is Built",
                    zh: "论证结构"
                },
                steps: {
                    en: [
                        "Define terms; state one thesis",
                        "Derive 3 tests from FATF R.24 / R.25",
                        "Apply the tests to Australia",
                        "Compare UK, Netherlands, Canada",
                        "Weigh counter-arguments",
                        "Verdict + 4 reforms"
                    ],
                    zh: [
                        "界定“全面”并提出一个核心论点",
                        "从 FATF 第 24 / 25 项建议提炼三项检验",
                        "用三项检验分析澳大利亚",
                        "比较英国、荷兰、加拿大",
                        "权衡反方观点",
                        "结论 + 4 项改革"
                    ]
                },
                caption: {
                    en: "Thesis: the statement is substantially correct but incomplete. Australia does breach the Standards, most clearly for trusts, but a register law alone would not close the gap; what matters is coverage, verification, and access and enforcement.",
                    zh: "核心论点：论断基本正确但不完整。澳大利亚确实未达标准，信托方面最明显；但仅靠一部登记法无法弥补缺口，关键在于覆盖范围、信息核验以及获取与执法。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Group paper · ratings checked against FATF reports",
                    zh: "小组论文 · 评级已与 FATF 报告核对"
                },
                title: {
                    en: "FATF Ratings for Beneficial Ownership (Latest as at October 2025)",
                    zh: "受益所有权相关的 FATF 评级（截至 2025 年 10 月）"
                },
                columns: {
                    en: ["Country", "R.24 (companies)", "R.25 (trusts)", "IO.5 (effectiveness)", "Core mechanism"],
                    zh: ["国家", "R.24（公司）", "R.25（信托）", "IO.5（有效性）", "核心机制"]
                },
                rows: [
                    [{ en: "Australia", zh: "澳大利亚" }, { en: "Partially Compliant", zh: "部分合规" }, { en: "Non-Compliant", zh: "不合规" }, { en: "Moderate", zh: "中等" }, { en: "Company records and reporting-entity due diligence", zh: "公司自有记录 + 报告实体尽职调查" }],
                    [{ en: "United Kingdom", zh: "英国" }, { en: "Largely Compliant", zh: "基本合规" }, { en: "Compliant", zh: "合规" }, { en: "Substantial", zh: "较高" }, { en: "Free public register of people with significant control", zh: "免费公开的重大控制人登记" }],
                    [{ en: "Netherlands", zh: "荷兰" }, { en: "Largely Compliant", zh: "基本合规" }, { en: "Largely Compliant", zh: "基本合规" }, { en: "Moderate", zh: "中等" }, { en: "Central register; public access closed in 2022", zh: "中央登记；2022 年起关闭公众访问" }],
                    [{ en: "Canada", zh: "加拿大" }, { en: "Partially Compliant", zh: "部分合规" }, { en: "Non-Compliant", zh: "不合规" }, { en: "Low", zh: "低" }, { en: "Internal company registers", zh: "公司内部登记" }]
                ],
                highlightRow: 0,
                caption: {
                    en: "Sources: Australia 2015 evaluation and 2024 follow-up; UK 2018 evaluation and 2022 follow-up; Netherlands 2022 evaluation; Canada 2016 evaluation and 2021 follow-up. The Netherlands has a central register yet the same Moderate effectiveness as Australia, an early sign that a register alone does not solve the problem. Canada, also a federation, mirrors Australia’s ratings.",
                    zh: "来源：澳大利亚 2015 年评估与 2024 年跟进报告；英国 2018 年评估与 2022 年跟进报告；荷兰 2022 年评估；加拿大 2016 年评估与 2021 年跟进报告。荷兰有中央登记，有效性却与澳大利亚同为“中等”，说明仅有登记并不能解决问题；同为联邦制的加拿大与澳大利亚评级相同。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · Australia analysis",
                    zh: "本人负责 · 澳大利亚分析"
                },
                title: {
                    en: "Australia Against the Three Tests",
                    zh: "用三项检验分析澳大利亚"
                },
                columns: {
                    en: ["Test", "Finding", "Evidence"],
                    zh: ["检验", "发现", "依据"]
                },
                rows: [
                    [{ en: "Coverage", zh: "覆盖范围" }, { en: "The first phase covers only unlisted companies under the Corporations Act; trusts are still at an “early policy development phase”; State-registered entities are captured only when they sit in a company’s ownership chain (“trace-through”).", zh: "第一阶段只覆盖《公司法》下的非上市公司；信托仍处于“早期政策制定阶段”；州注册实体只有出现在公司股权链中时才通过“穿透”被记录。" }, { en: "Treasury consultation paper (2022) and policy specifications (2024)", zh: "财政部 2022 年征求意见稿、2024 年政策细则" }],
                    [{ en: "Verification", zh: "信息核验" }, { en: "Companies only need to be “reasonably satisfied” of owners’ identity; no government check. The 2024 AML/CTF Amendment Act (s 26H) makes the entity, not its directors, liable, so personal incentives to verify are weak.", zh: "公司只需对受益人身份“合理确信”，没有政府核验。2024 年反洗钱修正法第 26H 条把责任放在实体而非董事身上，个人核验动力弱。" }, { en: "Policy specifications (2024); AML/CTF Amendment Act 2024", zh: "2024 年政策细则；2024 年反洗钱修正法" }],
                    [{ en: "Access and enforcement", zh: "获取与执法" }, { en: "Each company keeps its own register first; the central register has no date, and the Government stopped the registers modernisation program in August 2023 after its projected cost rose from $480.5 million to up to $2.8 billion.", zh: "先由各公司自行保存登记，中央登记没有时间表；政府于 2023 年 8 月叫停登记系统现代化项目，因预计成本从 4.805 亿澳元升至最高 28 亿澳元。" }, { en: "Ministerial release (2023); registers review (2023)", zh: "部长新闻稿（2023）；登记系统审查报告（2023）" }],
                    [{ en: "Partial fix", zh: "部分改善" }, { en: "From 1 July 2026, lawyers, accountants and trust and company service providers must conduct due diligence. This narrows the trust gap but is not a register.", zh: "自 2026 年 7 月 1 日起，律师、会计师和信托与公司服务提供者须履行尽职调查。这缩小了信托缺口，但并不等于登记制度。" }, { en: "AML/CTF Amendment Act 2024 (Tranche 2)", zh: "2024 年反洗钱修正法（第二阶段改革）" }]
                ],
                caption: {
                    en: "The FATF’s 2024 follow-up lists the remaining deficiencies: Australia traces ownership only for listed companies, and “there is no obligation for trustees to hold and maintain information on trusts”. A low-cost fix already exists: since 2021, directors must verify their identity to get a Director ID, but no such check is planned for beneficial owners.",
                    zh: "FATF 2024 年跟进报告列出的剩余缺陷：澳大利亚只能追溯上市公司的股权，且“受托人没有保存和维护信托信息的义务”。低成本的解决路径已经存在：自 2021 年起董事必须核验身份才能取得董事编号，但受益所有人没有类似核验。"
                }
            },
            {
                type: "process",
                source: {
                    en: "My part · Australia analysis",
                    zh: "本人负责 · 澳大利亚分析"
                },
                title: {
                    en: "Australia’s Reform Timeline",
                    zh: "澳大利亚改革时间线"
                },
                steps: {
                    en: [
                        "2015 · FATF evaluation: R.24 PC, R.25 NC",
                        "2022 · Treasury consults on a public register",
                        "Aug 2023 · Registers modernisation stopped",
                        "2024 · Follow-up: R.24 / R.25 not upgraded",
                        "Late 2024 · AML/CTF Act amended; register design released",
                        "Jul 2026 · Gatekeepers regulated; next evaluation 2026–27"
                    ],
                    zh: [
                        "2015 · FATF 评估：R.24 部分合规，R.25 不合规",
                        "2022 · 财政部就公开登记征求意见",
                        "2023 年 8 月 · 登记系统现代化项目叫停",
                        "2024 · 跟进报告：R.24 / R.25 均未上调",
                        "2024 年底 · 反洗钱法修订；公布登记方案",
                        "2026 年 7 月 · 专业服务者纳入监管；2026—27 年新一轮评估"
                    ]
                },
                caption: {
                    en: "Ten years after the 2015 evaluation, the trust gap is still open, and the next evaluation will apply the stricter standards revised in 2022 (R.24) and 2023 (R.25).",
                    zh: "距 2015 年评估已近十年，信托缺口仍未填补；下一轮评估将适用 2022 年（R.24）和 2023 年（R.25）修订后的更严标准。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Revised paper",
                    zh: "修订版论文"
                },
                title: {
                    en: "Synthesis: The Three Tests Across Countries",
                    zh: "综合比较：三项检验在各国的结果"
                },
                columns: {
                    en: ["Test", "United Kingdom", "Netherlands", "Australia (planned)"],
                    zh: ["检验", "英国", "荷兰", "澳大利亚（规划中）"]
                },
                rows: [
                    [{ en: "Coverage", zh: "覆盖范围" }, { en: "Companies (public register); trusts (restricted register)", zh: "公司（公开登记）；信托（受限登记）" }, { en: "Companies and other legal entities in one central register", zh: "公司及其他法人统一登记" }, { en: "Unlisted companies only; trusts deferred", zh: "仅非上市公司；信托推迟" }],
                    [{ en: "Verification", zh: "信息核验" }, { en: "Self-declaration until 2025; government identity checks now legislated", zh: "2025 年前靠自行申报；现已立法要求政府身份核验" }, { en: "Weak checks; “pseudo-owners” (senior managers) allowed", zh: "核验薄弱；允许以高管作“替代受益人”" }, { en: "Companies “reasonably satisfied”; no government check", zh: "公司“合理确信”即可；无政府核验" }],
                    [{ en: "Access and enforcement", zh: "获取与执法" }, { en: "Open to all; few prosecutions", zh: "人人可查；起诉极少" }, { en: "Authorities and obliged entities; sanctions rare; illegal trust-office sector", zh: "限主管机关与义务机构；处罚少见；存在非法信托服务市场" }, { en: "Piecemeal company registers; central stage undated", zh: "分散在各公司；中央登记无时间表" }]
                ],
                highlightRow: 1,
                caption: {
                    en: "Public versus restricted access was not decisive: both comparators achieved technical compliance and both struggled with accuracy. Verification is the common failure point. Australia’s planned design combines the UK’s original reliance on self-declaration with the Dutch problem of incomplete coverage, without either country’s central register.",
                    zh: "公开还是受限访问并不是决定因素：两个对照国都达到技术合规，也都在准确性上遇到问题，共同的薄弱环节是核验。澳大利亚的规划同时带有英国早期“自行申报”和荷兰“覆盖不全”的问题，却没有两国都有的中央登记。"
                }
            },
            {
                type: "table",
                source: {
                    en: "Group paper · revised",
                    zh: "小组论文 · 修订"
                },
                title: {
                    en: "What the Two Comparator Countries Show",
                    zh: "两个对照国的经验"
                },
                columns: {
                    en: ["Country", "Strength", "Weakness found", "Lesson for Australia"],
                    zh: ["国家", "优势", "发现的问题", "对澳大利亚的启示"]
                },
                rows: [
                    [{ en: "United Kingdom", zh: "英国" }, { en: "Free public register since 2016; kept open after Brexit despite the 2022 EU court ruling", zh: "2016 年起免费公开登记；英国脱欧后不受 2022 年欧盟法院裁决约束，继续公开" }, { en: "About 20% of entities declared no individual owner; prosecutions rare; the UK had to legislate identity checks (mandatory from 18 November 2025)", zh: "约 20% 的实体未申报任何自然人受益人；起诉极少；英国不得不立法要求身份核验（2025 年 11 月 18 日起强制）" }, { en: "Publicity is not verification. The UK trust register is not fully public, yet R.25 is rated Compliant", zh: "公开不等于核验；英国信托登记并不完全公开，R.25 仍为“合规”" }],
                    [{ en: "Netherlands", zh: "荷兰" }, { en: "Central register (2020); Largely Compliant on both recommendations", zh: "2020 年建立中央登记；两项建议均为“基本合规”" }, { en: "27% populated at the FATF visit; senior managers registered as “pseudo-owners”; sanctions rare; potentially illegal trust services about 15% of the market", zh: "FATF 现场评估时填报率 27%；以高管登记为“替代受益人”；处罚少见；可能非法的信托服务约占 15% 市场" }, { en: "Technical compliance is not effectiveness; regulation can push activity to unlicensed providers", zh: "技术合规不等于有效；监管收紧会把业务推向无牌机构" }]
                ],
                caption: {
                    en: "The 15% figure comes from a 2021 study for the Dutch Ministry of Finance. After the EU court ruling of 22 November 2022, Dutch access was limited to authorities, institutions doing due diligence and, under a proposed law, people with a legitimate interest such as journalists.",
                    zh: "15% 来自 2021 年荷兰财政部委托的研究。2022 年 11 月 22 日欧盟法院裁决后，荷兰登记仅向主管机关、履行尽职调查的机构开放，拟议法律还将开放给有正当利益的人（如记者）。"
                }
            },
            {
                type: "table",
                source: {
                    en: "My part · conclusion",
                    zh: "本人负责 · 结论"
                },
                title: {
                    en: "Four Reforms Before the 2026–27 Evaluation",
                    zh: "2026—27 年评估前的四项改革"
                },
                columns: {
                    en: ["Test", "Reform", "Why"],
                    zh: ["检验", "改革建议", "理由"]
                },
                rows: [
                    [{ en: "Coverage", zh: "覆盖范围" }, { en: "Require trustees of all express trusts to hold beneficial ownership information and register it with a Commonwealth agency, with restricted access", zh: "要求所有明示信托的受托人保存受益所有权信息，并向联邦机构登记，限制访问" }, { en: "Closes the Non-Compliant trust gap; the UK shows a restricted trust register can be Compliant", zh: "填补“不合规”的信托缺口；英国经验表明受限的信托登记也可达到“合规”" }],
                    [{ en: "Verification", zh: "信息核验" }, { en: "Extend Director ID-style government identity checks to beneficial owners", zh: "把董事编号式的政府身份核验延伸到受益所有人" }, { en: "Uses an existing system; avoids the UK’s years of unchecked filings", zh: "利用现有系统；避免英国多年未核验申报的问题" }],
                    [{ en: "Access", zh: "获取" }, { en: "Legislate a date for the central register; give authorities direct access meanwhile", zh: "立法规定中央登记的上线日期；过渡期内给予主管机关直接访问权" }, { en: "FATF requires timely access for authorities, not public access", zh: "FATF 要求的是主管机关的及时获取，而非公众访问" }],
                    [{ en: "Enforcement", zh: "执法" }, { en: "Use Tranche 2 supervision to target unlicensed trust and company service providers and sanction false filings", zh: "借助第二阶段改革的监管，打击无牌信托与公司服务提供者，并处罚虚假申报" }, { en: "Prevents Dutch-style displacement to unregulated providers", zh: "防止出现荷兰式的“转向无牌机构”" }]
                ]
            },
            {
                type: "table",
                source: {
                    en: "Revision log",
                    zh: "修订记录"
                },
                title: {
                    en: "From Marker Feedback to Revision",
                    zh: "从老师评语到修订"
                },
                columns: {
                    en: ["Marker comment", "What I changed"],
                    zh: ["老师评语", "修订内容"]
                },
                rows: [
                    [{ en: "The central argument could be more sharply defined and consistently reinforced", zh: "核心论点可以更明确，并在全文持续强化" }, { en: "One thesis in the introduction, built on three tests; each section ends with a verdict on those tests", zh: "引言提出一个论点和三项检验；每一部分都以三项检验的结论收尾" }],
                    [{ en: "Push further into critical synthesis in the case studies", zh: "案例部分需要更多批判性综合" }, { en: "Added evidence on verification failures in the UK and the Netherlands, a cross-country synthesis table and a counter-arguments section", zh: "补充英国与荷兰核验失败的证据，新增跨国综合表和反方观点部分" }],
                    [{ en: "Push further in the Australian analysis", zh: "澳大利亚分析需要更深入" }, { en: "Linked director liability to verification incentives; added the constitutional reason trusts were deferred, the stopped registers program and the Director ID route", zh: "把董事责任与核验动力联系起来；补充信托被推迟的宪法原因、被叫停的登记项目以及董事编号路径" }],
                    [{ en: "Accuracy and presentation", zh: "准确性与格式" }, { en: "Checked every rating against FATF reports and corrected R.25 (not upgraded in 2024, still Non-Compliant); fixed table typos and a missing reference; highlighted the four key sources; about 2,760 words", zh: "逐项与 FATF 报告核对评级，更正 R.25（2024 年未上调，仍为“不合规”）；修正表格拼写和缺失参考文献；用颜色标出四个关键来源；约 2,760 词" }]
                ],
                caption: {
                    en: "The marker described the submitted paper as “well-structured and thoroughly researched”, called the UK–Netherlands comparison “a particular strength” and wrote that “the legal analysis in the Australia section is a standout feature”.",
                    zh: "老师对提交版的评价：“结构清晰、研究充分”，英荷比较是“突出的优势”，并写道“澳大利亚部分的法律分析是一大亮点”。"
                }
            }
        ],

        details: {
            en: [
                {
                    title: "Research Question and Thesis · Team, sharpened in revision",
                    bullets: [
                        "Defined a “comprehensive” law as one that covers both companies and trusts and gives authorities verified information in a timely way.",
                        "Thesis: the statement is substantially correct but incomplete. Australia breaches the FATF Standards, most clearly for trusts, and this is a major weakness, but enacting a register law would not by itself close the gap.",
                        "Built three tests from Recommendations 24 and 25 (coverage, verification, access and enforcement) and applied them to every country, so the argument is reinforced in each section rather than stated once."
                    ]
                },
                {
                    title: "FATF Standards · Team",
                    bullets: [
                        "Explained how the FATF rates technical compliance (Compliant to Non-Compliant) separately from effectiveness (Immediate Outcome 5, High to Low): a country can have the right laws and still fail in practice.",
                        "Recommendation 24, revised in 2022, requires a multi-pronged approach: companies hold their own ownership records, and a public authority or register also holds or can obtain them.",
                        "Recommendation 25, revised in 2023, requires trustees to hold information on settlors, trustees, protectors and beneficiaries, and authorities to access it quickly and share it internationally.",
                        "Key point for the argument: the FATF requires access for authorities, not public access."
                    ]
                },
                {
                    title: "Australia: Coverage · My part",
                    bullets: [
                        "Information is spread across more than 30 ASIC registers and the Australian Business Register, and many entities are created under State law; Treasury’s “trace-through” rule captures them only inside a company’s ownership chain.",
                        "The first phase covers only unlisted Corporations Act companies. For trusts, Treasury remained at an “early policy development phase” in 2024.",
                        "Explained why: the Commonwealth’s corporations power does not extend to trusts as such, which is consistent with Treasury framing the register as a tax-integrity measure.",
                        "Trusts are the highest-risk gap: the FATF flagged slow access to trust information in 2015, discretionary trusts have open classes of beneficiaries and complex control, and AUSTRAC’s 2024 risk assessment treats legal structures as a major vulnerability."
                    ]
                },
                {
                    title: "Australia: Verification and Accountability · My part",
                    bullets: [
                        "Treasury’s design only requires companies to be “reasonably satisfied” of their owners’ identity; there is no government check.",
                        "Legal analysis of the 2024 AML/CTF Amendment Act: under s 26H(2)–(3), the reporting entity contravenes the provision if its governing body does, and this is a civil penalty provision. No provision makes directors personally liable, so regulators fall back on the general duty of care in s 180 of the Corporations Act.",
                        "Linked this to beneficial ownership: when accountability stops at the entity, the people who decide how much to invest in verification face weak incentives, so a decentralised model cannot reliably produce “accurate” information.",
                        "Showed the gap is a policy choice: directors have had to verify their identity for a Director ID since 2021, but no equivalent check is planned for beneficial owners."
                    ]
                },
                {
                    title: "Australia: Access, Timing and Tranche 2 · My part",
                    bullets: [
                        "Under the staged model each company keeps its own register first, with access through ASIC for regulators, law enforcement, reporting entities, journalists and academics; the central register has no date.",
                        "The central stage depends on registry infrastructure, but the registers modernisation program was stopped in August 2023 after its projected cost rose to as much as $2.8 billion.",
                        "Tranche 2 brings lawyers, accountants and trust and company service providers into AML/CTF regulation from 1 July 2026. It strengthens enforcement but is due diligence, not a register, and does not reach trusts set up without a regulated professional.",
                        "Corrected the submitted paper: the 2024 follow-up report did not upgrade Recommendation 25, which remains Non-Compliant."
                    ]
                },
                {
                    title: "Comparative Case Studies · Team, deepened in revision",
                    bullets: [
                        "United Kingdom: free public register of people with significant control since 2016. Public scrutiny exposed problems (about 20% of entities with no individual owner declared, few prosecutions) but could not fix them, so the UK legislated government identity checks in 2023, mandatory from 18 November 2025.",
                        "The UK’s trust register is not fully public, yet the UK is rated Compliant on Recommendation 25: Australia can meet the trust standard without publishing trust data.",
                        "Netherlands: central register since 2020 and Largely Compliant on both recommendations, but only 27% populated at the FATF visit, with “pseudo-owners” allowed and sanctions rare; public access closed after the EU court ruling of November 2022.",
                        "Regulatory arbitrage: as Dutch supervision of trust offices tightened, potentially illegal trust services were estimated at about 15% of the market.",
                        "Canada, a federation with the same ratings as Australia, shows that split company law is a shared structural obstacle that reform must design around."
                    ]
                },
                {
                    title: "Counter-arguments · Added in revision",
                    bullets: [
                        "“Australia is not blind”: due diligence and ASIC tracing exist, and Australia’s effectiveness rating equals the Netherlands’. Response: the rating dates from 2015 and the FATF’s 2024 deficiencies remain; due-diligence data is scattered and slow to obtain.",
                        "Privacy: the EU court found public registers can be disproportionate. Response: this argues for restricted access, not for delay, since the FATF only requires access for authorities.",
                        "Cost: large registry IT projects can fail. Response: verification can build on existing systems, namely Director ID and Tranche 2."
                    ]
                },
                {
                    title: "Conclusion and Recommendations · My part",
                    bullets: [
                        "Verdict: the statement is substantially correct (a breach, most clearly for trusts, and a major weakness), but incomplete in implying that a law alone is the solution.",
                        "Four reforms, one per test: a trustee obligation with a restricted Commonwealth trust register; government identity checks for beneficial owners; a legislated date for the central register with direct access for authorities meanwhile; and Tranche 2 supervision aimed at unlicensed service providers and false filings."
                    ]
                }
            ],
            zh: [
                {
                    title: "研究问题与核心论点 · 小组，修订时收紧",
                    bullets: [
                        "将“全面”的法律界定为：同时覆盖公司和信托，并让主管机关及时获得经过核验的信息。",
                        "核心论点：论断基本正确但不完整。澳大利亚确实违反 FATF 标准，信托方面最明显，这也是重大弱点；但仅制定一部登记法并不能弥补缺口。",
                        "从第 24、25 项建议提炼三项检验（覆盖范围、信息核验、获取与执法），并用于每个国家，使论点在每一部分都得到强化，而不是只在开头出现一次。"
                    ]
                },
                {
                    title: "FATF 标准 · 小组",
                    bullets: [
                        "说明 FATF 将技术合规（合规至不合规）与有效性（第 5 项直接成果，高至低）分开评定：一个国家可能法律齐全，但实际效果不佳。",
                        "第 24 项建议于 2022 年修订，要求“多管齐下”：公司自行保存所有权记录，同时由公共机构或登记系统保存或能够获取这些信息。",
                        "第 25 项建议于 2023 年修订，要求受托人保存委托人、受托人、保护人和受益人的信息，主管机关能迅速获取并开展国际合作。",
                        "论证关键：FATF 要求的是主管机关能获取，而不是向公众公开。"
                    ]
                },
                {
                    title: "澳大利亚：覆盖范围 · 本人负责",
                    bullets: [
                        "信息分散在 ASIC 的 30 多个登记簿和澳大利亚商业登记中，许多实体依州法设立；财政部的“穿透”规则只在这些实体出现于公司股权链时才把它们记录下来。",
                        "第一阶段只覆盖《公司法》下的非上市公司；关于信托，财政部在 2024 年仍处于“早期政策制定阶段”。",
                        "分析原因：联邦的公司立法权并不直接覆盖信托，这与财政部把登记定位为税收诚信措施相吻合。",
                        "信托是风险最高的缺口：FATF 在 2015 年就指出信托信息获取缓慢；全权信托的受益人范围开放、控制关系复杂；AUSTRAC 2024 年风险评估也把法律结构列为重大弱点。"
                    ]
                },
                {
                    title: "澳大利亚：核验与问责 · 本人负责",
                    bullets: [
                        "财政部方案只要求公司对受益人身份“合理确信”，没有政府核验。",
                        "对 2024 年反洗钱修正法的法律分析：根据第 26H 条第（2）—（3）款，治理机构违规即视为报告实体违规，属于民事处罚条款；法案没有规定董事个人责任，监管机构只能依靠《公司法》第 180 条的一般注意义务追责。",
                        "与受益所有权联系起来：责任止于实体层面，决定投入多少资源做核验的人缺少个人激励，分散式模式难以稳定产出“准确”的信息。",
                        "说明这是政策选择而非技术障碍：自 2021 年起董事必须核验身份才能取得董事编号，但受益所有人没有类似安排。"
                    ]
                },
                {
                    title: "澳大利亚：获取、时间表与第二阶段改革 · 本人负责",
                    bullets: [
                        "分阶段方案下，先由各公司自行保存登记，监管机构、执法机构、报告实体、记者和学者通过 ASIC 申请查阅；中央登记没有时间表。",
                        "中央登记依赖登记系统基础设施，但登记系统现代化项目已于 2023 年 8 月叫停，此前预计成本最高升至 28 亿澳元。",
                        "第二阶段改革自 2026 年 7 月 1 日起把律师、会计师和信托与公司服务提供者纳入反洗钱监管。这加强了执法，但属于尽职调查而非登记，也覆盖不到没有专业人士参与设立的信托。",
                        "更正提交版的错误：2024 年跟进报告并未上调第 25 项建议的评级，仍为“不合规”。"
                    ]
                },
                {
                    title: "案例比较 · 小组，修订时深化",
                    bullets: [
                        "英国：2016 年起免费公开重大控制人登记。公众监督暴露了问题（约 20% 的实体未申报任何自然人受益人，起诉很少），却无法解决问题，因此英国在 2023 年立法要求政府身份核验，2025 年 11 月 18 日起强制执行。",
                        "英国的信托登记并不完全公开，第 25 项建议却被评为“合规”：澳大利亚无需公开信托数据也能达标。",
                        "荷兰：2020 年起建立中央登记，两项建议均为“基本合规”，但 FATF 现场评估时填报率只有 27%，允许以高管作“替代受益人”，处罚少见；2022 年 11 月欧盟法院裁决后关闭公众访问。",
                        "监管套利：荷兰收紧对信托服务机构的监管后，可能非法的信托服务估计约占 15% 的市场。",
                        "加拿大同为联邦制，评级与澳大利亚相同，说明公司法分属不同层级政府是共同的结构性障碍，改革必须绕开而不是等待。"
                    ]
                },
                {
                    title: "反方观点 · 修订时新增",
                    bullets: [
                        "“澳大利亚并非一无所知”：已有尽职调查和 ASIC 追溯，有效性评级也与荷兰相同。回应：该评级来自 2015 年，FATF 2024 年列出的缺陷仍在；尽职调查信息分散，获取缓慢。",
                        "隐私：欧盟法院认为公开登记可能不成比例。回应：这支持的是“限制访问”而不是“推迟建设”，因为 FATF 只要求主管机关能获取。",
                        "成本：大型登记系统项目可能失败。回应：核验可以依托现有系统，即董事编号和第二阶段改革。"
                    ]
                },
                {
                    title: "结论与建议 · 本人负责",
                    bullets: [
                        "结论：论断基本正确（确实违反标准，信托方面最明显，且是重大弱点），但“只要立法就能解决”的隐含前提不完整。",
                        "四项改革，各对应一项检验：规定受托人义务并建立受限访问的联邦信托登记；对受益所有人实行政府身份核验；立法规定中央登记日期，过渡期内给予主管机关直接访问权；借助第二阶段改革监管无牌服务机构并处罚虚假申报。"
                    ]
                }
            ]
        }
    },

    {
        id: "ey-gordon",
        category: "business-strategy",

        title: {
            en: "EY × Gordon ESG Business Race",
            zh: "EY × Gordon ESG 商业竞赛"
        },

        organisation: {
            en: "Beijing Regional Champion",
            zh: "北京赛区冠军"
        },

        location: {
            en: "Beijing, China",
            zh: "中国 · 北京"
        },

        dates: {
            en: "May 2024 – Jun 2024",
            zh: "2024年5月 – 2024年6月"
        },

        sortDate: "2024-06",

        logo: "",

        overviewBullets: {
            en: [
                "Led the data-analysis module of a cross-university team building an ESG business proposal on how AI can improve corporate ESG management and disclosure.",
                "Won the Beijing regional championship, ranking 1st of 60 teams."
            ],
            zh: [
                "在跨校团队中负责数据分析模块，围绕“AI 如何提升企业 ESG 管理与披露”提出商业方案。",
                "获得北京赛区冠军（60 支队伍中第 1 名）。"
            ]
        },

        tags: [
            "ESG Strategy",
            "Business Analysis",
            "Competition",
            "Market Research"
        ]
    },

    {
        id: "unilever",
        category: "business-strategy",

        title: {
            en: "Unilever China Sustainable R&D Innovation Competition",
            zh: "联合利华中国可持续研发创新竞赛"
        },

        organisation: {
            en: "Unilever China",
            zh: "联合利华中国"
        },

        location: {
            en: "China",
            zh: "中国"
        },

        dates: {
            en: "Jul 2024 – Sep 2024",
            zh: "2024年7月 – 2024年9月"
        },

        sortDate: "2024-09",

        logo: "",

        overviewBullets: {
            en: [
                "Analysed consumer scenarios and product pain points to identify sustainable product-improvement opportunities.",
                "Designed a user-feedback process and prioritised improvement needs across environmental performance, user experience and packaging."
            ],
            zh: [
                "分析消费场景与产品痛点，寻找可持续产品改进机会。",
                "设计用户反馈流程，并从环保表现、使用体验和包装三方面排定改进优先级。"
            ]
        },

        tags: [
            "Consumer Insights",
            "Sustainability",
            "Product Strategy",
            "R&D"
        ]
    },

    {
        id: "lvmh",
        category: "business-strategy",

        title: {
            en: "LVMH Beauty Campus Creative Challenge",
            zh: "LVMH Beauty Campus 创意挑战赛"
        },

        organisation: {
            en: "LVMH",
            zh: "路威酩轩集团"
        },

        location: {
            en: "China",
            zh: "中国"
        },

        dates: {
            en: "Jul 2024 – Sep 2024",
            zh: "2024年7月 – 2024年9月"
        },

        sortDate: "2024-09",

        logo: "",

        overviewBullets: {
            en: [
                "Conducted consumer-profile and competitor analysis to position beauty products.",
                "Developed customer segments, KOL collaboration ideas and differentiated market strategies."
            ],
            zh: [
                "开展消费者画像与竞品分析，为美妆产品定位。",
                "制定客户细分、KOL 合作思路和差异化市场策略。"
            ]
        },

        tags: [
            "Consumer Analytics",
            "Market Strategy",
            "Segmentation",
            "Brand Strategy"
        ]
    }

],

    travel: []
};