const PORTFOLIO_DATA = {
    experienceCategories: [
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
            id: "ngtec",
            category: "data-business",

            company: {
                en: "National Green Technology Exchange Center",
                zh: "国家绿色技术交易中心"
            },

            role: {
                en: "Research Intern · Green Technology Transactions & Data Governance",
                zh: "研究实习生 · 绿色技术交易与数据治理"
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

            logo: "",

            overviewBullets: {
                en: [
                    "Researched AI-enabled green-technology transaction matching, data governance and trustworthy matching mechanisms.",
                    "Developed a zero-carbon industrial-park analytical framework linking demand, technology supply, transaction design, MRV and implementation."
                ],
                zh: [
                    "研究 AI 驱动的绿色技术交易撮合、数据治理与可信撮合机制。",
                    "构建零碳园区分析框架，将需求、技术供给、交易机制、MRV 核证与项目落地进行系统连接。"
                ]
            },

            tags: [
                "AI Matching",
                "ESG",
                "Data Governance",
                "Policy Research"
            ],
metrics: [
    {
        value: "3",
        label: {
            en: "Zero-carbon industrial park cases analysed",
            zh: "零碳园区案例分析"
        }
    },
    {
        value: "≥90%",
        label: {
            en: "Proposed storage availability KPI",
            zh: "建议储能系统可用率 KPI"
        }
    },
    {
        value: "≤5%",
        label: {
            en: "Proposed annual cycle degradation KPI",
            zh: "建议年度循环衰减 KPI"
        }
    },
    {
        value: "100%",
        label: {
            en: "Proposed power-quality pass rate",
            zh: "建议电能质量达标率"
        }
    },
    {
        value: "≥95%",
        label: {
            en: "Proposed peak-shaving response accuracy",
            zh: "建议削峰响应准确率"
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
                "Demand diagnosis",
                "Technology matching",
                "Contracting",
                "Milestone delivery",
                "MRV verification",
                "Financing"
            ],

            zh: [
                "需求诊断",
                "技术匹配",
                "合同签署",
                "里程碑交付",
                "MRV 核证",
                "融资"
            ]
        },

        caption: {
            en: "Research framework connecting technology matching with evidence-based delivery, verification and financing.",
            zh: "将技术撮合、交付证据、MRV 核证与融资连接起来的研究框架。"
        }
    }
],

            details: {
                en: [
                    {
                        title: "Research Focus",
                        bullets: [
                            "Conducted structured research on demand identification, supplier matching, transaction mechanisms and data-governance requirements within green-technology trading platforms.",
                            "Mapped stakeholders including technology suppliers, demand-side organisations, financial institutions, industrial parks and regulatory actors."
                        ]
                    },
                    {
                        title: "Zero-Carbon Industrial Parks",
                        bullets: [
                            "Built an analytical framework connecting demand-side pain points, technology supply, implementation pathways and transaction mechanisms.",
                            "Analysed zero-carbon industrial-park cases and identified data standardisation, verification evidence and project acceptance as important implementation constraints."
                        ]
                    },
                    {
                        title: "AI & Trustworthy Matching",
                        bullets: [
                            "Examined the use of interpretable matching rules, RAG-assisted knowledge retrieval and future learning-to-rank approaches for technology matching.",
                            "Considered audit trails, MRV evidence and milestone-based verification as part of trustworthy transaction design."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "研究重点",
                        bullets: [
                            "系统研究绿色技术交易平台中的需求识别、供应商匹配、交易机制与数据治理要求。",
                            "梳理技术供应商、需求方、金融机构、产业园区及监管机构等主要利益相关方。"
                        ]
                    },
                    {
                        title: "零碳园区研究",
                        bullets: [
                            "建立连接需求端痛点、技术供给、实施路径与交易机制的分析框架。",
                            "分析零碳园区案例，并将数据标准化、核证证据与项目验收识别为重要实施约束。"
                        ]
                    },
                    {
                        title: "AI 与可信撮合",
                        bullets: [
                            "研究可解释规则、RAG 知识检索及未来 Learning-to-Rank 方法在技术撮合中的应用。",
                            "将审计追踪、MRV 核证材料和里程碑验收纳入可信交易机制设计。"
                        ]
                    }
                ]
            }
        },

        {
            id: "forcity",
            category: "finance-investment",

            company: {
                en: "Forcity Investment Group",
                zh: "Forcity Investment Group"
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

            logo: "",

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
                            "Completed bank reconciliations for FY2023 and FY2024.",
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
                            "完成 FY2023 与 FY2024 两个财年的银行对账。",
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
                en: "Daxin Accounting Firm",
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

            logo: "",

            overviewBullets: {
                en: [
                    "Supported a corporate audit project for Beijing Haidian Science and Technology Park Construction Co., Ltd.",
                    "Matched financial records with supporting documents and organised traceable audit evidence for project-team review."
                ],
                zh: [
                    "参与北京海淀科技园建设股份有限公司企业审计项目。",
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
                            "Supported audit procedures for Beijing Haidian Science and Technology Park Construction Co., Ltd.",
                            "Checked financial records against supporting documentation and organised audit evidence."
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
                            "参与北京海淀科技园建设股份有限公司审计项目。",
                            "核对财务记录与支持性文件并整理审计证据。"
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

            logo: "",

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
                            "Collected, cleaned and analysed multi-year Chinese coal-accident and industry data using Excel.",
                            "Supported sector monitoring through structured cross-year comparison and risk-pattern identification."
                        ]
                    },
                    {
                        title: "Indonesia Coal Research",
                        bullets: [
                            "Prepared an independent research report on the Indonesian coal market.",
                            "Analysed domestic and international coal-price movements, production, exports, policy developments and implications for major producers."
                        ]
                    },
                    {
                        title: "Research Support",
                        bullets: [
                            "Produced daily coal-industry news summaries.",
                            "Prepared notes from analyst meetings involving China Shenhua and Henan Energy."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "行业数据分析",
                        bullets: [
                            "使用 Excel 整理、清洗并分析中国煤炭行业及煤矿事故的多年数据。",
                            "通过跨年度比较和风险模式识别支持行业跟踪研究。"
                        ]
                    },
                    {
                        title: "印尼煤炭研究",
                        bullets: [
                            "独立完成印尼煤炭市场研究报告。",
                            "分析印尼国内外煤价、煤炭产量、出口、政策变化以及对主要煤企盈利能力的影响。"
                        ]
                    },
                    {
                        title: "研究支持",
                        bullets: [
                            "完成煤炭行业每日新闻整理。",
                            "整理中国神华、河南能源等分析师会议纪要。"
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
                en: "Data Processing Intern",
                zh: "数据处理实习生"
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

            logo: "",

            overviewBullets: {
                en: [
                    "Cleaned, validated and identified abnormal values in multi-source environmental datasets for a Yellow River governance project.",
                    "Produced analytical visualisations and policy summaries linking ecological protection with regional development indicators."
                ],
                zh: [
                    "参与黄河流域治理项目，对多源环境数据进行清洗、验证与异常值识别。",
                    "制作分析可视化并整理政策材料，探索生态保护与区域发展指标之间的关系。"
                ]
            },

            tags: [
                "Data Cleaning",
                "Environmental Data",
                "Policy Analysis",
                "Visualisation"
            ],

            details: {
                en: [
                    {
                        title: "Environmental Data Processing",
                        bullets: [
                            "Cleaned and validated multi-source environmental datasets including water-quality and soil-related indicators.",
                            "Identified abnormal observations and organised data for subsequent analysis."
                        ]
                    },
                    {
                        title: "Policy & Regional Analysis",
                        bullets: [
                            "Assisted in developing an analytical framework exploring relationships between ecological-protection policy and regional economic indicators.",
                            "Reviewed policy documents and local case materials to support ecological-governance and regional-development analysis."
                        ]
                    },
                    {
                        title: "Visual Analytics",
                        bullets: [
                            "Produced visual analytical outputs to support preliminary interpretation of environmental and policy data."
                        ]
                    }
                ],

                zh: [
                    {
                        title: "环境数据处理",
                        bullets: [
                            "清洗和验证包括水质、土壤等指标在内的多源环境数据。",
                            "识别异常观测并整理数据，为后续分析提供基础。"
                        ]
                    },
                    {
                        title: "政策与区域分析",
                        bullets: [
                            "协助建立生态保护政策与区域经济指标关系的分析框架。",
                            "梳理政策文件及地方案例，支持生态治理与区域发展研究。"
                        ]
                    },
                    {
                        title: "可视化分析",
                        bullets: [
                            "制作环境和政策数据相关的可视化分析结果。"
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
        en: "Project Researcher",
        zh: "项目研究员"
    },

    status: {
        en: "Ongoing Research",
        zh: "持续研究中"
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
        en: "2026 – Present",
        zh: "2026 – 至今"
    },

    sortDate: "2026-10",

    logo: "",

    overviewBullets: {
        en: [
            "Researching how RAG and GraphRAG architectures can improve evidence localisation, traceability and reliability in corporate ESG disclosure analysis.",
            "Developing and benchmarking retrieval systems on a shared ESG corpus containing 30 corporate reports and 2,015 evidence-grounded questions."
        ],

        zh: [
            "研究 RAG 与 GraphRAG 架构如何提升企业 ESG 信息披露分析中的证据定位、可追溯性与可靠性。",
            "基于包含 30 份企业 ESG 报告和 2,015 个证据型问题的统一语料，对不同检索与知识组织方法进行开发和基准测试。"
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
                    "Built a shared corpus using ESG reporting standards together with 30 real corporate ESG reports.",
                    "Structured indicators from SASB, GRI, TCFD and CDP into a common representation.",
                    "Created 2,015 benchmark questions covering fact retrieval, complex reasoning, contextual summarisation and evidence-constrained generation.",
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
                    "Extended the research workflow into an ESG document-analysis pipeline covering PDF batching, PaddleOCR parsing, table processing and internal-link analysis.",
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
                title: "Current Research Direction",
                bullets: [
                    "Investigating task routing so that simple factual queries can use lower-cost retrieval while complex or high-risk queries are routed to graph-based methods.",
                    "Extending the pipeline toward multimodal evidence from tables, charts, figures and page layouts.",
                    "Exploring ESG disclosure-gap analysis and evidence-grounded decision support while maintaining clear separation between reported facts and generated recommendations."
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
                    "使用 ESG 报告标准与 30 份真实企业 ESG 报告构建统一研究语料。",
                    "将 SASB、GRI、TCFD 与 CDP 等框架中的披露指标整理为统一结构。",
                    "构建 2,015 个评测问题，覆盖事实检索、复杂推理、上下文总结和证据约束生成四类任务。",
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
                title: "下一阶段研究方向",
                bullets: [
                    "研究任务路由机制，使简单事实问题使用低成本检索，而复杂、高风险或需要跨段证据的问题使用适合的图检索方法。",
                    "进一步加入表格、图表、图片和页面布局等多模态 ESG 证据。",
                    "探索 ESG 披露缺口分析和基于证据的决策支持，同时严格区分企业已披露事实与 AI 生成建议。"
                ]
            }
        ]
    }
},

    {
        id: "campaign-logistic",
        category: "ai-data",

        title: {
            en: "Customer Signup Prediction",
            zh: "客户注册预测与营销响应建模"
        },

        organisation: {
            en: "The University of Sydney",
            zh: "悉尼大学"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "2026",
            zh: "2026年"
        },

        sortDate: "2026-05",

        logo: "",

        overviewBullets: {
            en: [
                "Compared standard and polynomial logistic regression using validation log loss and held-out test performance.",
                "Selected a degree-3 model that materially improved classification performance across accuracy, recall and F1."
            ],
            zh: [
                "基于验证集 Log Loss 与测试集表现，对标准 Logistic Regression 与多项式 Logistic Regression 进行比较。",
                "最终选择三阶模型，在准确率、召回率及 F1 等指标上获得明显提升。"
            ]
        },

        tags: [
            "Python",
            "Machine Learning",
            "Logistic Regression",
            "Model Selection"
        ]
    },

    {
    id: "buss6002-model-selection",
    category: "ai-data",

    title: {
        en: "Financial Product Signup Prediction — Model Complexity & Out-of-Sample Selection",
        zh: "金融产品注册预测 — 模型复杂度与样本外选择"
    },

    organisation: {
        en: "The University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Individual Machine Learning Coursework",
        zh: "个人机器学习课程项目"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2026",
        zh: "2026"
    },

    sortDate: "2026-05",

    logo: "",

    overviewBullets: {
        en: [
            "Compared standard logistic regression with polynomial specifications on 6,000 customer observations to capture a non-monotonic relationship between contact intensity and signup probability.",
            "Selected degree 3 using validation log loss rather than training fit, improving held-out test accuracy from 63.3% to 79.7% and F1 from 0.655 to 0.810."
        ],

        zh: [
            "基于 6,000 条客户数据比较标准 Logistic Regression 与 Polynomial Logistic Regression，以捕捉接触强度与注册概率之间的非单调关系。",
            "使用 Validation Log Loss 而非训练集拟合效果选择 degree 3，使独立测试集 Accuracy 从 63.3% 提升至 79.7%，F1 从 0.655 提升至 0.810。"
        ]
    },

    tags: [
        "Logistic Regression",
        "Model Selection",
        "Validation",
        "Polynomial Features",
        "Classification",
        "scikit-learn",
        "Python"
    ],

    metrics: [
        {
            value: "6,000",
            label: {
                en: "Customer observations",
                zh: "客户观测数据"
            }
        },

        {
            value: "9",
            label: {
                en: "Polynomial degrees evaluated",
                zh: "评估的 Polynomial 候选模型"
            }
        },

        {
            value: "Degree 3",
            label: {
                en: "Selected model complexity",
                zh: "最终选择模型复杂度"
            }
        },

        {
            value: "0.443",
            label: {
                en: "Minimum validation log loss",
                zh: "最低 Validation Log Loss"
            }
        },

        {
            value: "0.797",
            label: {
                en: "Polynomial-model test accuracy",
                zh: "Polynomial 模型测试集 Accuracy"
            }
        },

        {
            value: "0.810",
            label: {
                en: "Polynomial-model test F1",
                zh: "Polynomial 模型测试集 F1"
            }
        }
    ],

    visuals: [
        {
            type: "process",

            title: {
                en: "Out-of-Sample Model Selection Workflow",
                zh: "样本外模型选择流程"
            },

            steps: {
                en: [
                    "6,000 observations",
                    "Stratified split",
                    "Train candidate models",
                    "Validation log loss",
                    "Select degree 3",
                    "Held-out test"
                ],

                zh: [
                    "6,000 条数据",
                    "分层数据划分",
                    "训练候选模型",
                    "Validation Log Loss",
                    "选择 Degree 3",
                    "独立测试集评估"
                ]
            },

            caption: {
                en: "The test set was kept completely separate from model selection. Polynomial complexity was chosen only from validation performance.",
                zh: "测试集在模型选择阶段完全隔离。Polynomial Degree 仅根据验证集表现进行选择。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Held-Out Test Accuracy",
                zh: "独立测试集 Accuracy"
            },

            items: [
                {
                    label: {
                        en: "Standard logistic",
                        zh: "标准 Logistic"
                    },
                    value: 63.3,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Degree-3 polynomial",
                        zh: "Degree-3 Polynomial"
                    },
                    value: 79.7,
                    suffix: "%"
                }
            ],

            caption: {
                en: "The selected nonlinear specification substantially improved classification performance on unseen observations.",
                zh: "最终选择的非线性模型在未参与训练和模型选择的数据上显著提高了分类表现。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Held-Out Test F1 Score",
                zh: "独立测试集 F1 Score"
            },

            items: [
                {
                    label: {
                        en: "Standard logistic",
                        zh: "标准 Logistic"
                    },
                    value: 65.5,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Degree-3 polynomial",
                        zh: "Degree-3 Polynomial"
                    },
                    value: 81.0,
                    suffix: "%"
                }
            ],

            caption: {
                en: "F1 was particularly useful because it balances the ability to identify actual signups with the reliability of positive predictions.",
                zh: "F1 同时兼顾识别真实注册用户的能力与正类预测可靠性，因此是该分类问题的重要评估指标。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Classification Errors",
                zh: "分类错误数量"
            },

            items: [
                {
                    label: {
                        en: "Standard false positives",
                        zh: "标准模型 False Positives"
                    },
                    value: 295,
                    suffix: ""
                },

                {
                    label: {
                        en: "Polynomial false positives",
                        zh: "Polynomial False Positives"
                    },
                    value: 174,
                    suffix: ""
                },

                {
                    label: {
                        en: "Standard false negatives",
                        zh: "标准模型 False Negatives"
                    },
                    value: 255,
                    suffix: ""
                },

                {
                    label: {
                        en: "Polynomial false negatives",
                        zh: "Polynomial False Negatives"
                    },
                    value: 130,
                    suffix: ""
                }
            ],

            caption: {
                en: "Relative to the standard logistic model, degree 3 produced 121 fewer false positives and 125 fewer false negatives.",
                zh: "与标准 Logistic 模型相比，Degree 3 模型减少了 121 个 False Positives 和 125 个 False Negatives。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Problem Formulation",
                bullets: [
                    "Modelled whether a customer would sign up for a financial product using contact-intensity score as the predictor.",
                    "Exploratory analysis suggested a non-monotonic relationship: signup probability increased across some intensity ranges but declined across others.",
                    "A standard logistic specification could only impose a monotonic relationship, motivating a more flexible polynomial representation."
                ]
            },

            {
                title: "Data & Experimental Design",
                bullets: [
                    "Validated 6,000 observations with binary signup outcomes and an intensity score constrained to the expected −1 to 1 range.",
                    "Used a stratified 3,000 / 1,500 / 1,500 train-validation-test split to preserve class balance.",
                    "The training set was used for model estimation, the validation set exclusively for polynomial-degree selection, and the test set only for final evaluation."
                ]
            },

            {
                title: "Model Complexity Selection",
                bullets: [
                    "Compared polynomial logistic models with degrees 2 through 10.",
                    "Used validation log loss because it evaluates probability quality and heavily penalises confidently incorrect predictions.",
                    "Validation log loss reached its minimum of 0.443 at degree 3, while training loss continued to improve slightly at higher degrees.",
                    "The divergence between training and validation performance demonstrated the transition from useful flexibility toward overfitting."
                ]
            },

            {
                title: "Final Model Evaluation",
                bullets: [
                    "After selecting degree 3, re-estimated both the standard and selected polynomial models using the combined training and validation data.",
                    "On the held-out test set, accuracy improved from 0.633 to 0.797 and F1 from 0.655 to 0.810.",
                    "True-positive rate improved from 0.672 to 0.833, true-negative rate from 0.591 to 0.759 and precision from 0.639 to 0.788."
                ]
            },

            {
                title: "Confusion-Matrix Comparison",
                bullets: [
                    "The standard model produced 427 true negatives, 295 false positives, 255 false negatives and 523 true positives.",
                    "The degree-3 model produced 548 true negatives, 174 false positives, 130 false negatives and 648 true positives.",
                    "This represented 121 fewer false positives and 125 fewer false negatives."
                ]
            },

            {
                title: "Business Interpretation",
                bullets: [
                    "False positives may translate into resources being spent targeting customers unlikely to sign up, while false negatives represent potentially missed signup opportunities.",
                    "The degree-3 model improved both types of classification error rather than improving one at the expense of the other.",
                    "The observed intensity–signup pattern should be interpreted as predictive association rather than evidence that changing contact intensity would causally change customer behaviour."
                ]
            },

            {
                title: "Model Governance Lesson",
                bullets: [
                    "The project illustrates why greater in-sample flexibility should not automatically be interpreted as a better model.",
                    "Model complexity was selected using out-of-sample validation evidence before the held-out test set was examined.",
                    "Degree 3 provided a practical balance between flexibility, interpretability and generalisation."
                ]
            }
        ],

        zh: [
            {
                title: "问题定义",
                bullets: [
                    "使用接触强度 Intensity Score 预测客户是否会注册金融产品。",
                    "探索性分析显示注册概率与接触强度之间存在非单调关系，即在部分区间上升、另一些区间下降。",
                    "标准 Logistic Regression 只能表达单调关系，因此需要使用更加灵活的 Polynomial 表示。"
                ]
            },

            {
                title: "数据与实验设计",
                bullets: [
                    "检查 6,000 条观测数据，确认 Signup 为二元结果，Intensity Score 位于预期的 −1 至 1 区间。",
                    "采用分层抽样划分为 3,000 条训练集、1,500 条验证集和 1,500 条测试集，以保持类别比例稳定。",
                    "训练集用于拟合模型，验证集只用于选择 Polynomial Degree，测试集仅用于最终模型评估。"
                ]
            },

            {
                title: "模型复杂度选择",
                bullets: [
                    "比较 Degree 2 至 Degree 10 的 Polynomial Logistic Regression。",
                    "使用 Validation Log Loss 评估概率预测质量，并对高置信度错误预测给予更高惩罚。",
                    "Degree 3 的 Validation Log Loss 最低，为 0.443；而更高阶模型的 Training Loss 仍继续小幅下降。",
                    "训练与验证表现的分化体现了模型从有效增加灵活性逐步进入过拟合的过程。"
                ]
            },

            {
                title: "最终模型评估",
                bullets: [
                    "确定 Degree 3 后，将 Training 与 Validation 数据合并并重新估计标准模型和 Polynomial 模型。",
                    "在完全独立的测试集上，Accuracy 从 0.633 提高到 0.797，F1 从 0.655 提高到 0.810。",
                    "TPR 从 0.672 提高到 0.833，TNR 从 0.591 提高到 0.759，Precision 从 0.639 提高到 0.788。"
                ]
            },

            {
                title: "Confusion Matrix 对比",
                bullets: [
                    "标准模型得到 427 个 True Negatives、295 个 False Positives、255 个 False Negatives 和 523 个 True Positives。",
                    "Degree-3 模型得到 548 个 True Negatives、174 个 False Positives、130 个 False Negatives 和 648 个 True Positives。",
                    "相比标准模型，共减少 121 个 False Positives 和 125 个 False Negatives。"
                ]
            },

            {
                title: "商业解释",
                bullets: [
                    "False Positives 可能意味着营销资源被投入到实际不会注册的客户，而 False Negatives 则意味着遗漏潜在注册机会。",
                    "Degree-3 模型同时降低了两种分类错误，而不是通过牺牲其中一种错误来改善另一种。",
                    "接触强度与注册概率之间的关系属于预测性关联，不应直接解释为改变接触强度会因果性地改变客户行为。"
                ]
            },

            {
                title: "模型治理启示",
                bullets: [
                    "项目展示了为什么更复杂、训练集拟合更好的模型并不必然具有更好的实际预测能力。",
                    "模型复杂度首先通过样本外验证数据选择，然后才对完全独立的测试集进行最终评估。",
                    "Degree 3 在模型灵活性、可解释性和泛化能力之间取得了更好的平衡。"
                ]
            }
        ]
    }
},
{
    id: "unicef",
    category: "ai-data",

    title: {
        en: "UNICEF Australia — Predictive Donor Reactivation",
        zh: "UNICEF Australia — 捐赠者重新激活预测"
    },

    organisation: {
        en: "UNICEF Australia · The University of Sydney",
        zh: "联合国儿童基金会澳大利亚 · 悉尼大学"
    },

    role: {
        en: "Team Project · Predictive Analytics & Campaign Strategy",
        zh: "团队项目 · 预测分析与营销策略"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2025",
        zh: "2025"
    },

    sortDate: "2025-06",

    logo: "",

    overviewBullets: {
        en: [
            "Co-developed a predictive donor-reactivation study using supporter, donation, channel and campaign data to identify high-probability returning donors.",
            "Benchmarked six model configurations and translated XGBoost probability scores into a targeted campaign strategy for the highest-scoring 20% of lapsed donors."
        ],

        zh: [
            "参与构建捐赠者重新激活预测分析项目，结合支持者、捐赠、渠道和营销活动数据识别高概率再次捐赠人群。",
            "比较六种模型配置，并将 XGBoost 预测概率转化为针对最高评分前 20% 流失捐赠者的定向营销策略。"
        ]
    },

    tags: [
        "XGBoost",
        "Predictive Analytics",
        "Classification",
        "Campaign ROI",
        "CRM Analytics",
        "Python"
    ],

    metrics: [
        {
            value: "38",
            label: {
                en: "Raw variables across donor and campaign data",
                zh: "捐赠者与营销数据原始变量"
            }
        },

        {
            value: "0.85",
            label: {
                en: "XGBoost test accuracy",
                zh: "XGBoost 测试集准确率"
            }
        },

        {
            value: "0.78",
            label: {
                en: "Returning-donor F1 score",
                zh: "再次捐赠者 F1 Score"
            }
        },

        {
            value: "0.79",
            label: {
                en: "Returning-donor recall",
                zh: "再次捐赠者 Recall"
            }
        },

        {
            value: "~20,000",
            label: {
                en: "Lapsed donors in proposed target segment",
                zh: "建议优先触达的流失捐赠者"
            }
        },

        {
            value: "A$150k",
            label: {
                en: "Base-case modelled campaign revenue",
                zh: "基础情景模拟活动收入"
            }
        }
    ],

    visuals: [
        {
            type: "process",

            title: {
                en: "Predictive Reactivation Workflow",
                zh: "捐赠者重新激活预测流程"
            },

            steps: {
                en: [
                    "Supporter & campaign data",
                    "Data cleaning",
                    "Feature engineering",
                    "Model benchmarking",
                    "Probability ranking",
                    "Targeted campaign"
                ],

                zh: [
                    "支持者与营销数据",
                    "数据清洗",
                    "特征工程",
                    "模型比较",
                    "预测概率排序",
                    "定向营销"
                ]
            },

            caption: {
                en: "The project connected predictive modelling with an operational targeting strategy rather than treating model accuracy as the final output.",
                zh: "该项目并未将模型准确率作为终点，而是进一步将预测结果转化为可执行的目标人群筛选与营销策略。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Selected XGBoost Test Performance",
                zh: "XGBoost 测试集表现"
            },

            items: [
                {
                    label: {
                        en: "Accuracy",
                        zh: "Accuracy"
                    },
                    value: 85,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Weighted F1",
                        zh: "Weighted F1"
                    },
                    value: 86,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Returning-donor F1",
                        zh: "再次捐赠者 F1"
                    },
                    value: 78,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Returning-donor Recall",
                        zh: "再次捐赠者 Recall"
                    },
                    value: 79,
                    suffix: "%"
                }
            ],

            caption: {
                en: "Model selection considered minority-class identification, overfitting risk and computational efficiency rather than overall accuracy alone.",
                zh: "模型选择不仅考虑整体准确率，同时考虑少数类别识别能力、过拟合风险与计算效率。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Base-Case Campaign Economics",
                zh: "基础情景营销经济性"
            },

            items: [
                {
                    label: {
                        en: "Projected revenue",
                        zh: "预测收入"
                    },
                    value: 150000,
                    suffix: " AUD"
                },

                {
                    label: {
                        en: "Estimated campaign cost",
                        zh: "预计活动成本"
                    },
                    value: 45400,
                    suffix: " AUD"
                }
            ],

            caption: {
                en: "Illustrative scenario only: 20,000 targeted donors × 15% assumed conversion × A$50 assumed average donation. These are modelled estimates, not realised UNICEF revenue.",
                zh: "仅为情景测算：20,000 名目标捐赠者 × 假设 15% 转化率 × 假设平均 A$50 捐赠额。该结果为模型估算，并非 UNICEF 实际实现收入。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Business Problem",
                bullets: [
                    "The project addressed the challenge of identifying which lapsed donors were most likely to donate again so that campaign resources could be allocated more efficiently.",
                    "The analytical task was formulated as a binary classification problem using supporter, donation, channel and campaign history."
                ]
            },

            {
                title: "Data & Feature Design",
                bullets: [
                    "Worked with 38 raw variables spanning demographic, behavioural, channel and campaign information.",
                    "Removed low-information or redundant variables and retained features with potential behavioural or segmentation value.",
                    "The analysis found that campaign sub-type, donation channel and recurring or web-based engagement patterns were important predictive signals."
                ]
            },

            {
                title: "Model Benchmarking",
                bullets: [
                    "Compared six model configurations: base logistic regression, ridge logistic regression, Random Forest, XGBoost, GBDT and a neural-network model.",
                    "Evaluated models using accuracy, class-specific F1, weighted F1, minority-class recall and evidence of overfitting.",
                    "Random Forest achieved the highest Class 1 recall, but showed a greater overfitting concern."
                ]
            },

            {
                title: "XGBoost Selection",
                bullets: [
                    "Selected XGBoost as the final reported model after balancing predictive quality, minority-class performance, overfitting control and computational efficiency.",
                    "On the test set, XGBoost achieved 0.85 accuracy, 0.86 weighted F1, 0.78 Class 1 F1 and 0.79 Class 1 recall.",
                    "Extensive tuning produced only marginal gains, suggesting that additional model complexity offered diminishing returns for this dataset."
                ]
            },

            {
                title: "Targeting Strategy",
                bullets: [
                    "Ranked lapsed donors by predicted re-donation probability and proposed prioritising the highest-scoring 20%, approximately 20,000 individuals.",
                    "Recommended behaviour-based personalisation using donors' campaign history and channel preferences rather than relying only on demographic segmentation.",
                    "Proposed combining digital outreach with selective direct mail for different donor profiles."
                ]
            },

            {
                title: "Campaign Economics",
                bullets: [
                    "The base-case scenario assumed 20,000 targeted donors, a 15% conversion rate and an average A$50 donation, producing modelled revenue of A$150,000.",
                    "Estimated total campaign cost was A$45,400, including postage, printing, email marketing, copywriting, graphic design and campaign coordination.",
                    "All revenue figures were scenario estimates designed for decision support and should not be interpreted as realised campaign outcomes."
                ]
            }
        ],

        zh: [
            {
                title: "商业问题",
                bullets: [
                    "项目核心问题是识别哪些已经流失的捐赠者最有可能再次捐赠，从而更有效地配置营销资源。",
                    "分析任务被定义为二元分类问题，并综合支持者、捐赠、渠道与历史营销活动信息。"
                ]
            },

            {
                title: "数据与特征设计",
                bullets: [
                    "使用 38 个原始变量，覆盖人口属性、行为、渠道及营销活动信息。",
                    "删除信息量低或重复变量，并保留具有行为分析与客户分群价值的特征。",
                    "分析显示 Campaign Sub-type、Donation Channel，以及 recurring 和 web-based engagement 等行为特征具有较强预测价值。"
                ]
            },

            {
                title: "模型比较",
                bullets: [
                    "比较六种模型配置：基础 Logistic Regression、Ridge Logistic Regression、Random Forest、XGBoost、GBDT 和 Neural Network。",
                    "使用 Accuracy、类别 F1、Weighted F1、少数类别 Recall 以及过拟合程度进行综合评估。",
                    "Random Forest 的 Class 1 Recall 最高，但同时表现出更明显的过拟合风险。"
                ]
            },

            {
                title: "XGBoost 模型选择",
                bullets: [
                    "综合预测能力、少数类别识别、过拟合控制和计算效率后，将 XGBoost 作为最终报告模型。",
                    "测试集上 XGBoost Accuracy 为 0.85、Weighted F1 为 0.86、Class 1 F1 为 0.78、Class 1 Recall 为 0.79。",
                    "进一步大规模调参带来的提升有限，说明增加模型复杂度对该数据集产生的边际收益较低。"
                ]
            },

            {
                title: "目标人群策略",
                bullets: [
                    "按照再次捐赠预测概率对流失捐赠者进行排序，并建议优先触达预测评分最高的前 20%，约 20,000 人。",
                    "建议根据历史营销活动和渠道偏好进行行为型个性化，而不是仅依赖人口统计分群。",
                    "结合数字渠道与选择性 Direct Mail，为不同捐赠者类型设计多渠道触达策略。"
                ]
            },

            {
                title: "营销经济性",
                bullets: [
                    "基础情景假设触达 20,000 名捐赠者、转化率 15%、平均每次捐赠 A$50，对应模型预测收入 A$150,000。",
                    "预计总营销成本为 A$45,400，包括邮寄、印刷、Email Marketing、文案、视觉设计和活动协调。",
                    "所有收入结果均属于情景预测，用于支持决策，不代表 UNICEF 实际已经获得的收入。"
                ]
            }
        ]
    }
},
{
    id: "disney-data-architecture",
    category: "ai-data",

    title: {
        en: "Disney MagicBand — Enterprise Data Architecture, Governance & Zero Trust",
        zh: "Disney MagicBand — 企业数据架构、治理与零信任安全"
    },

    organisation: {
        en: "Disney MagicBand Case Study · The University of Sydney",
        zh: "Disney MagicBand 案例研究 · 悉尼大学"
    },

    role: {
        en: "Team Project · Data Architecture, Governance & Security",
        zh: "团队项目 · 数据架构、治理与安全"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2026",
        zh: "2026"
    },

    sortDate: "2026-05",

    logo: "",

    overviewBullets: {
        en: [
            "Co-designed an enterprise data architecture supporting guest experience, operational decision-making and attraction/infrastructure performance management.",
            "Owned the security and ethics workstream, designing seven Zero-Trust Policy Enforcement Points across the full data lifecycle."
        ],

        zh: [
            "共同设计支持游客体验、运营决策和设施/游乐项目绩效管理的企业级数据架构。",
            "负责安全与伦理工作流，围绕完整数据生命周期设计 7 个 Zero-Trust Policy Enforcement Points。"
        ]
    },

    tags: [
        "Data Architecture",
        "Data Governance",
        "Zero Trust",
        "Lakehouse",
        "Data Quality",
        "Privacy",
        "IoT"
    ],

    metrics: [
        {
            value: "3",
            label: {
                en: "Business domains supported",
                zh: "支持的核心业务域"
            }
        },

        {
            value: "7",
            label: {
                en: "Guest-experience data sources",
                zh: "Guest Experience 数据源"
            }
        },

        {
            value: "6",
            label: {
                en: "Data-quality control points",
                zh: "数据质量控制点"
            }
        },

        {
            value: "7",
            label: {
                en: "Zero-Trust Policy Enforcement Points",
                zh: "零信任策略执行点"
            }
        },

        {
            value: "4",
            label: {
                en: "Major privacy / compliance frameworks mapped",
                zh: "映射的主要隐私与合规框架"
            }
        }
    ],

    visuals: [
        {
            type: "process",

            title: {
                en: "Enterprise Data Architecture",
                zh: "企业数据架构"
            },

            steps: {
                en: [
                    "Data Sources",
                    "Ingestion",
                    "Storage",
                    "Processing",
                    "Consumption",
                    "Cross-cutting Governance"
                ],

                zh: [
                    "数据源",
                    "数据接入",
                    "数据存储",
                    "数据处理",
                    "业务消费",
                    "贯穿式数据治理"
                ]
            },

            caption: {
                en: "The architecture integrates guest, operational and infrastructure data while maintaining a cross-cutting governance and security layer.",
                zh: "该架构整合游客、运营与基础设施数据，并通过贯穿全流程的数据治理与安全层进行统一控制。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Control Architecture",
                zh: "控制体系"
            },

            items: [
                {
                    label: {
                        en: "Data-quality checkpoints",
                        zh: "数据质量控制点"
                    },
                    value: 6,
                    suffix: ""
                },

                {
                    label: {
                        en: "Zero-Trust PEPs",
                        zh: "Zero-Trust PEPs"
                    },
                    value: 7,
                    suffix: ""
                }
            ],

            caption: {
                en: "Data-quality controls address accuracy, completeness and consistency, while the Zero-Trust overlay enforces access and security decisions throughout the data lifecycle.",
                zh: "数据质量控制用于保证准确性、完整性与一致性；Zero-Trust 安全层则负责在数据全生命周期实施访问和安全策略。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Business Architecture",
                bullets: [
                    "Designed the architecture around three business needs: Guest Experience Optimisation, Operational Decision Support, and Infrastructure & Attraction Performance Management.",
                    "Connected MagicBand, mobile applications, reservations, transaction systems, IoT sensors, crowd sensors and operational systems to downstream analytics and decision applications."
                ]
            },

            {
                title: "Data Platform Design",
                bullets: [
                    "Used Kafka and Fivetran for ingestion, Snowflake and Delta Lake for structured and lakehouse storage, and Cassandra / HBase for operational and NoSQL workloads.",
                    "Used Databricks, Spark, Flink, TensorFlow / PyTorch and related processing tools for personalisation, predictive maintenance and real-time operational analytics.",
                    "Included Guest MDM and Asset MDM to improve consistency across guest, MagicBand, park and attraction entities."
                ]
            },

            {
                title: "Data Quality Framework",
                bullets: [
                    "Designed six data-quality control points spanning source validation, ingestion checks, telemetry anomaly filtering, standardisation, master-data consistency and output validation.",
                    "Controls addressed duplicate events, invalid device IDs, timestamp errors, schema inconsistencies, unrealistic sensor readings and inconsistent business definitions."
                ]
            },

            {
                title: "Security & Zero Trust",
                bullets: [
                    "Owned the security and ethics workstream and designed seven Policy Enforcement Points based on Zero-Trust principles.",
                    "Controls covered source/device entry, data in motion, payment tokenisation, storage, processing workspaces, outputs and audit/monitoring.",
                    "Applied least-privilege logic so different users and systems only access the minimum data required for their role."
                ]
            },

            {
                title: "Privacy, Ethics & Compliance",
                bullets: [
                    "Mapped the architecture against COPPA, CCPA/CPRA, GDPR and PCI DSS requirements.",
                    "Used the PAPA framework — Privacy, Accuracy, Property and Access — to structure ethical risk analysis.",
                    "Highlighted the sensitivity of location data, payment information, child-related personalisation and behavioural records."
                ]
            },

            {
                title: "Technology Trade-offs",
                bullets: [
                    "Compared scalability, real-time performance, interoperability, vendor dependence and operating complexity when selecting technologies.",
                    "Recognised that a multi-platform architecture creates integration, licensing and specialised-talent risks.",
                    "Any technology cost or productivity improvements discussed in the coursework were external benchmark estimates rather than realised Disney outcomes."
                ]
            }
        ],

        zh: [
            {
                title: "业务架构",
                bullets: [
                    "围绕三类核心业务需求设计架构：Guest Experience Optimisation、Operational Decision Support 和 Infrastructure & Attraction Performance Management。",
                    "将 MagicBand、移动应用、预订系统、交易系统、IoT 传感器、人流传感器和运营系统连接至下游分析与决策应用。"
                ]
            },

            {
                title: "数据平台设计",
                bullets: [
                    "使用 Kafka 与 Fivetran 进行数据接入，Snowflake 与 Delta Lake 支持结构化和 Lakehouse 存储，Cassandra / HBase 支持运营型和 NoSQL 工作负载。",
                    "使用 Databricks、Spark、Flink、TensorFlow / PyTorch 等工具支持个性化、预测性维护和实时运营分析。",
                    "设计 Guest MDM 与 Asset MDM，以提高 Guest、MagicBand、Park 与 Attraction 等核心实体的一致性。"
                ]
            },

            {
                title: "数据质量框架",
                bullets: [
                    "设计 6 个 Data Quality Control Points，覆盖源数据验证、接入检查、Telemetry 异常过滤、标准化、主数据一致性和输出验证。",
                    "控制内容包括重复事件、无效 Device ID、时间戳错误、Schema 不一致、不合理传感器读数及业务定义不一致。"
                ]
            },

            {
                title: "安全与 Zero Trust",
                bullets: [
                    "负责安全与伦理工作流，并基于 Zero-Trust 原则设计 7 个 Policy Enforcement Points。",
                    "控制范围覆盖 Source / Device Entry、Data in Motion、Payment Tokenisation、Storage、Processing Workspace、Output 以及 Audit / Monitoring。",
                    "通过 Least Privilege 逻辑确保不同用户和系统只能访问完成其职责所需的最小数据。"
                ]
            },

            {
                title: "隐私、伦理与合规",
                bullets: [
                    "将架构与 COPPA、CCPA/CPRA、GDPR 和 PCI DSS 要求进行映射。",
                    "使用 PAPA 框架——Privacy、Accuracy、Property、Access——进行伦理风险分析。",
                    "重点识别 Location Data、Payment Information、儿童相关个性化数据和行为记录的敏感性。"
                ]
            },

            {
                title: "技术权衡",
                bullets: [
                    "在技术选型中比较扩展性、实时处理能力、系统兼容性、Vendor Dependence 与运维复杂度。",
                    "识别多技术栈可能带来的系统集成、许可费用与专业人才需求风险。",
                    "课程项目中的成本节约或生产率改善数字来自外部 benchmark，不应解释为 Disney 已经实际实现的业务成果。"
                ]
            }
        ]
    }
},
{
    id: "yellow-river-environment",
    category: "policy-analytics",

    title: {
        en: "Yellow River Basin — Environmental Resource & Policy Analytics",
        zh: "黄河流域 — 环境资源与政策分析"
    },

    organisation: {
        en: "Environmental Defense Fund (EDF)",
        zh: "Environmental Defense Fund (EDF) · 美国环保协会"
    },

    role: {
        en: "Internship Research Project · Environmental Data Analysis",
        zh: "实习研究项目 · 环境数据分析"
    },

    location: {
        en: "Beijing, China",
        zh: "中国 · 北京"
    },

    dates: {
        en: "2023",
        zh: "2023"
    },

    sortDate: "2023-08",

    logo: "",

    overviewBullets: {
        en: [
            "Analysed Yellow River Basin water resources, water quality, soil erosion and environmental-governance investment using official environmental and water-resource data.",
            "Converted environmental indicators into decision-oriented priorities covering agricultural water efficiency, tributary pollution control, erosion management and project-effect verification."
        ],

        zh: [
            "基于官方环境与水资源数据分析黄河流域水资源、水环境、水土流失及生态治理投入。",
            "将环境指标转化为农业节水、支流污染治理、水土流失治理和项目效果核验等决策优先方向。"
        ]
    },

    tags: [
        "Environmental Analytics",
        "ESG",
        "Water Resources",
        "Policy Research",
        "Scenario Analysis",
        "Data Validation"
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
                title: "Research Scope & Data Validation",
                bullets: [
                    "Analysed water resources, water quality, soil erosion, ecological conditions and environmental-governance investment across the Yellow River Basin.",
                    "Used official environmental and water-resource publications while preserving their original geographic boundaries, denominators and monitoring scopes.",
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
                title: "Policy Priorities",
                bullets: [
                    "Prioritised verifiable agricultural net-water saving and groundwater monitoring rather than relying only on infrastructure investment.",
                    "Recommended targeting tributary pollution through section-level monitoring and pollution-source analysis.",
                    "Suggested concentrating erosion-control research and project pipelines in the most affected regions while separately tracking construction, maintenance and actual environmental effectiveness."
                ]
            }
        ],

        zh: [
            {
                title: "研究范围与数据核验",
                bullets: [
                    "分析黄河流域水资源、水环境、水土流失、生态变化和环境治理投入。",
                    "使用官方环境与水资源公报，并保留不同数据源原有的统计边界、分母及监测范围。",
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
                title: "政策优先方向",
                bullets: [
                    "优先关注可验证的农业净节水和地下水监测，而不是仅以基础设施投入规模评价效果。",
                    "建议基于断面监测和污染源负荷识别支流污染治理重点。",
                    "水土流失治理应优先覆盖重点集中地区，并分别跟踪建设规模、维护情况与实际环境效果。"
                ]
            }
        ]
    }
},
{
    id: "tpg",
    category: "finance-investment",

    title: {
        en: "TPG Telecom — Capital Structure & Credit Analysis",
        zh: "TPG Telecom — 资本结构与信用分析"
    },

    organisation: {
        en: "University of Sydney",
        zh: "悉尼大学"
    },

    role: {
        en: "Finance Strategy Project",
        zh: "金融战略项目"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2025",
        zh: "2025"
    },

    sortDate: "2025-11",

    logo: "",

    overviewBullets: {
        en: [
            "Benchmarked TPG against Telstra, Singtel and Spark NZ across leverage, interest coverage, liquidity and valuation metrics.",
            "Recommended allocating approximately 80% of A$5.25bn asset-sale proceeds to debt reduction and 20% to a special dividend."
        ],
        zh: [
            "对比 TPG、Telstra、Singtel 与 Spark NZ 的杠杆、利息保障、流动性与估值指标。",
            "建议将约 52.5 亿澳元资产出售所得中的约 80% 用于偿债，20% 用于特别股息。"
        ]
    },

    tags: [
        "Corporate Finance",
        "Credit Analysis",
        "Excel",
        "Capital Structure"
    ],

    metrics: [
        {
            value: "3.23×",
            label: {
                en: "Debt / EBITDA",
                zh: "债务 / EBITDA"
            }
        },
        {
            value: "5.24×",
            label: {
                en: "EBITDA net interest coverage",
                zh: "EBITDA 净利息保障倍数"
            }
        },
        {
            value: "68.34%",
            label: {
                en: "Financial liabilities due within 5 years",
                zh: "5 年内到期金融负债占比"
            }
        },
        {
            value: "A$5.25bn",
            label: {
                en: "Approx. divestment proceeds analysed",
                zh: "分析的资产出售所得"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Credit Diagnostic",
                bullets: [
                    "Built a comparable-company analysis against Telstra, Singtel and Spark NZ.",
                    "Identified high leverage, weaker interest coverage and clustered debt maturities as key financial-flexibility constraints."
                ]
            },
            {
                title: "Capital Allocation",
                bullets: [
                    "Compared debt repayment, share repurchase and special-dividend alternatives.",
                    "Rejected the buyback case given TPG's forward valuation premium and prioritised deleveraging."
                ]
            }
        ],

        zh: [
            {
                title: "信用诊断",
                bullets: [
                    "与 Telstra、Singtel 和 Spark NZ 进行可比公司分析。",
                    "识别高杠杆、较低利息保障倍数和债务到期集中为财务灵活性的核心约束。"
                ]
            },
            {
                title: "资本配置",
                bullets: [
                    "比较偿债、股份回购和特别股息三种资金使用方案。",
                    "基于 TPG 较高的远期估值溢价否决回购，并优先进行去杠杆。"
                ]
            }
        ]
    }
},
{
    id: "abercrombie-super",
    category: "finance-investment",

    title: {
        en: "Strategic Asset Allocation & CIO Briefing",
        zh: "战略资产配置与 CIO 决策分析"
    },

    organisation: {
        en: "Abercrombie Superannuation · University of Sydney",
        zh: "Abercrombie Superannuation · 悉尼大学"
    },

    role: {
        en: "Institutional Portfolio Strategy Project",
        zh: "机构投资组合策略项目"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2025",
        zh: "2025"
    },

    sortDate: "2025-05",

    logo: "",

    overviewBullets: {
        en: [
            "Redesigned the strategic asset allocation using Refinitiv data, peer benchmarking and explicit portfolio constraints.",
            "Built a 10-year Monte Carlo framework with 10,000 paths per scenario to test portfolio resilience across four macroeconomic environments."
        ],
        zh: [
            "结合 Refinitiv 数据、同业比较和明确的投资组合约束重新设计战略资产配置方案。",
            "建立 10 年期 Monte Carlo 模型，每个情景运行 10,000 条路径，测试组合在四类宏观环境下的韧性。"
        ]
    },

    tags: [
        "Asset Allocation",
        "Monte Carlo",
        "Python",
        "Refinitiv",
        "Portfolio Strategy",
        "Scenario Analysis"
    ],

    metrics: [
        {
            value: "6.00% → 6.42%",
            label: {
                en: "Modelled expected return",
                zh: "模型预期收益率"
            }
        },
        {
            value: "8.23% → 8.08%",
            label: {
                en: "Portfolio volatility",
                zh: "投资组合波动率"
            }
        },
        {
            value: "52.42% → 54.55%",
            label: {
                en: "Probability of meeting the CPI+ objective",
                zh: "达到 CPI+ 投资目标的概率"
            }
        },
        {
            value: "US$27.4m",
            label: {
                en: "One-off SAA reallocation cost",
                zh: "SAA 一次性再配置成本"
            }
        },
        {
            value: "10,000",
            label: {
                en: "Monte Carlo paths per scenario",
                zh: "每个情景 Monte Carlo 模拟路径"
            }
        },
        {
            value: "4",
            label: {
                en: "Macroeconomic scenarios tested",
                zh: "测试宏观情景数量"
            }
        }
    ],

    visuals: [
        {
            type: "bars",

            title: {
                en: "Strategic Asset Allocation — Core Portfolio Metrics",
                zh: "战略资产配置 — 核心组合指标"
            },

            items: [
                {
                    label: {
                        en: "Original expected return",
                        zh: "原组合预期收益率"
                    },
                    value: 6.00,
                    suffix: "%"
                },
                {
                    label: {
                        en: "Proposed expected return",
                        zh: "建议组合预期收益率"
                    },
                    value: 6.42,
                    suffix: "%"
                }
            ],

            caption: {
                en: "The redesigned allocation increased modelled expected return while slightly reducing portfolio volatility.",
                zh: "重新设计后的资产配置在提高模型预期收益率的同时，小幅降低了组合波动率。"
            }
        },

        {
            type: "bars",

            title: {
                en: "High-Growth Scenario — Probability of Exceeding 5.5%",
                zh: "高增长情景 — 超过 5.5% 收益目标的概率"
            },

            items: [
                {
                    label: {
                        en: "Original SAA",
                        zh: "原 SAA"
                    },
                    value: 68.43,
                    suffix: "%"
                },
                {
                    label: {
                        en: "Proposed SAA",
                        zh: "建议 SAA"
                    },
                    value: 79.51,
                    suffix: "%"
                }
            ],

            caption: {
                en: "Scenario result from the portfolio simulation; not a realised investment return.",
                zh: "该结果来自投资组合情景模拟，并非实际实现的投资收益。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Low-Growth Scenario — Probability of Exceeding 5.5%",
                zh: "低增长情景 — 超过 5.5% 收益目标的概率"
            },

            items: [
                {
                    label: {
                        en: "Original SAA",
                        zh: "原 SAA"
                    },
                    value: 50.22,
                    suffix: "%"
                },
                {
                    label: {
                        en: "Proposed SAA",
                        zh: "建议 SAA"
                    },
                    value: 56.00,
                    suffix: "%"
                }
            ],

            caption: {
                en: "The proposed allocation improved target-achievement probability even under a weaker macroeconomic environment.",
                zh: "即使在较弱的宏观经济环境下，建议配置仍提高了目标收益率的达成概率。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Geopolitical-Tension Scenario",
                zh: "地缘政治紧张情景"
            },

            items: [
                {
                    label: {
                        en: "Original SAA",
                        zh: "原 SAA"
                    },
                    value: 61.25,
                    suffix: "%"
                },
                {
                    label: {
                        en: "Proposed SAA",
                        zh: "建议 SAA"
                    },
                    value: 75.77,
                    suffix: "%"
                }
            ],

            caption: {
                en: "Probability of exceeding the 5.5% target increased from 61.25% to 75.77% under the geopolitical-tension scenario.",
                zh: "在地缘政治紧张情景下，超过 5.5% 目标收益率的概率由 61.25% 提高至 75.77%。"
            }
        },

        {
            type: "bars",

            title: {
                en: "ESG Scenario — Probability of Exceeding 5.5%",
                zh: "ESG 情景 — 超过 5.5% 收益目标的概率"
            },

            items: [
                {
                    label: {
                        en: "Original SAA",
                        zh: "原 SAA"
                    },
                    value: 61.02,
                    suffix: "%"
                },
                {
                    label: {
                        en: "Proposed SAA",
                        zh: "建议 SAA"
                    },
                    value: 74.92,
                    suffix: "%"
                }
            ],

            caption: {
                en: "The proposed allocation also improved the modelled probability of reaching the return objective under the ESG scenario.",
                zh: "在 ESG 情景下，建议配置同样提高了达到目标收益率的模型概率。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Strategic Asset Allocation",
                bullets: [
                    "Built return and volatility forecasts across 10 asset classes using Refinitiv Workspace.",
                    "Worked within a minimum 60% growth-asset constraint while redesigning the strategic allocation.",
                    "Reduced Australian equity exposure from 30% to 15%, increased international equity from 35% to 49%, exited Australian listed property from 5% to 0%, and introduced a 10% international small-cap allocation."
                ]
            },

            {
                title: "Benchmark & Peer Evaluation",
                bullets: [
                    "Challenged the suitability of the S&P/ASX 300 A-REIT index as a property benchmark rather than accepting it mechanically.",
                    "Identified that the index was 85% concentrated in its top 10 constituents, with Goodman Group representing 36.39%.",
                    "Benchmarked property allocations against major Australian superannuation peers to assess whether listed property exposure appropriately represented institutional portfolios."
                ]
            },

            {
                title: "Portfolio Outcome",
                bullets: [
                    "Modelled expected return improved from 6.00% to 6.42%, while volatility declined from 8.23% to 8.08%.",
                    "The probability of meeting the CPI+ objective increased from 52.42% to 54.55%.",
                    "The probability of a negative year decreased from 23.30% to 21.32%, while the Shortfall Risk Measure decreased from 4.66 to 4.26.",
                    "Modelled post-tax and post-cost annual return increased from US$1,092m to US$1,133m against a one-off reallocation cost of US$27.4m."
                ]
            },

            {
                title: "Monte Carlo Scenario Analysis",
                bullets: [
                    "Built a Python Monte Carlo simulation across eight portfolio asset classes over a 10-year horizon.",
                    "Ran 10,000 paths per scenario across high-growth, low-growth, geopolitical-tension and ESG environments.",
                    "The proposed SAA increased the simulated probability of exceeding the 5.5% target in all four scenarios."
                ]
            },

            {
                title: "Tactical Asset Allocation",
                bullets: [
                    "Designed a defensive tactical overlay using COVID-type drawdown and recovery evidence from 2020–2023.",
                    "Observed approximately three-month recovery periods for Australian and international equities, longer recovery for property, and approximately three years for infrastructure.",
                    "Evaluated a 28% turnover cap and 0.5% two-way transaction costs, producing an estimated reallocation cost of US$28.95m."
                ]
            }
        ],

        zh: [
            {
                title: "战略资产配置",
                bullets: [
                    "使用 Refinitiv Workspace 对 10 个资产类别进行收益率与波动率预测。",
                    "在成长型资产占比至少 60% 的约束下重新设计战略资产配置。",
                    "将澳大利亚股票从 30% 降至 15%，国际股票从 35% 提高至 49%，澳大利亚上市地产由 5% 降至 0%，并新增 10% 国际小盘股配置。"
                ]
            },

            {
                title: "基准与同业分析",
                bullets: [
                    "没有直接接受 S&P/ASX 300 A-REIT 指数，而是检验其作为地产资产基准的合理性。",
                    "识别出该指数前十大成分股集中度达到 85%，其中 Goodman Group 单一公司占比达到 36.39%。",
                    "进一步比较澳大利亚养老金同业的地产配置，以判断上市地产指数是否能够代表机构投资组合的真实地产敞口。"
                ]
            },

            {
                title: "投资组合结果",
                bullets: [
                    "模型预期收益率由 6.00% 提高至 6.42%，同时波动率由 8.23% 降至 8.08%。",
                    "达到 CPI+ 投资目标的概率由 52.42% 提高至 54.55%。",
                    "负收益年份概率由 23.30% 降至 21.32%，Shortfall Risk Measure 由 4.66 降至 4.26。",
                    "税后及成本后年度模型收益由 US$1,092m 提高至 US$1,133m，一次性再配置成本约为 US$27.4m。"
                ]
            },

            {
                title: "Monte Carlo 情景分析",
                bullets: [
                    "使用 Python 对 8 个投资组合资产类别进行 10 年期 Monte Carlo 模拟。",
                    "在高增长、低增长、地缘政治紧张和 ESG 四类情景中，每个情景运行 10,000 条模拟路径。",
                    "建议配置在四类情景下均提高了超过 5.5% 目标收益率的模拟概率。"
                ]
            },

            {
                title: "战术资产配置",
                bullets: [
                    "基于 2020–2023 年 COVID 类型市场冲击下的回撤和恢复行为设计防御型 TAA 调整。",
                    "澳大利亚股票和国际股票恢复期约为 3 个月，地产恢复时间更长，基础设施约需 3 年。",
                    "在 28% 换手率上限和 0.5% 双向交易成本假设下，估算再配置成本约为 US$28.95m。"
                ]
            }
        ]
    }
},

    {
    id: "early-childhood",
    category: "policy-analytics",

    title: {
        en: "Australian Early Childhood Service Accessibility Analytics",
        zh: "澳大利亚幼儿教育服务可达性分析"
    },

    organisation: {
        en: "Department of Education Case · The University of Sydney",
        zh: "教育部门案例 · 悉尼大学"
    },

    role: {
        en: "Team Project · Geospatial & Policy Analytics",
        zh: "团队项目 · 地理空间与政策分析"
    },

    location: {
        en: "Sydney, Australia",
        zh: "澳大利亚 · 悉尼"
    },

    dates: {
        en: "2026",
        zh: "2026"
    },

    sortDate: "2026-05",

    logo: "",

    overviewBullets: {
        en: [
            "Integrated child-development, socioeconomic, service-quality, remoteness, transport and Google Review data at Local Government Area level.",
            "Built a policy-priority framework to identify communities where developmental vulnerability overlaps with socioeconomic disadvantage and service-access barriers."
        ],

        zh: [
            "在 Local Government Area 层级整合儿童发展、社会经济、服务质量、偏远程度、交通与 Google Reviews 数据。",
            "构建政策优先级框架，识别儿童发展脆弱性、社会经济劣势与服务可达性障碍重叠的高优先级地区。"
        ]
    },

    tags: [
        "Geospatial Analytics",
        "Public Policy",
        "Python",
        "SEIFA",
        "AEDC",
        "Transport Accessibility",
        "Text Analytics"
    ],

    metrics: [
        {
            value: "81.2%",
            label: {
                en: "DV2 rate in Tiwi Islands",
                zh: "Tiwi Islands 的 DV2 比例"
            }
        },

        {
            value: "15 / 20",
            label: {
                en: "Highest-vulnerability areas in SEIFA IRSD decile 1",
                zh: "Top 20 高脆弱地区中位于 SEIFA 最弱势十分位"
            }
        },

        {
            value: "15 / 20",
            label: {
                en: "Highest-vulnerability areas classified Very Remote",
                zh: "Top 20 高脆弱地区中属于 Very Remote"
            }
        },

        {
            value: "0.03",
            label: {
                en: "Pearson correlation: Google rating vs DV2",
                zh: "Google Rating 与 DV2 的 Pearson 相关系数"
            }
        },

        {
            value: "0.04",
            label: {
                en: "Spearman correlation: Google rating vs DV2",
                zh: "Google Rating 与 DV2 的 Spearman 相关系数"
            }
        }
    ],

    visuals: [
        {
            type: "process",

            title: {
                en: "Policy Analytics Workflow",
                zh: "政策分析流程"
            },

            steps: {
                en: [
                    "Multi-source data",
                    "LGA standardisation",
                    "Geospatial matching",
                    "Accessibility indicators",
                    "Adjusted analysis",
                    "Policy prioritisation"
                ],

                zh: [
                    "多源数据",
                    "LGA 统一口径",
                    "空间匹配",
                    "可达性指标构建",
                    "控制变量分析",
                    "政策优先级排序"
                ]
            },

            caption: {
                en: "The analysis standardised heterogeneous datasets to a common LGA geography before combining developmental outcomes, service access and structural disadvantage.",
                zh: "分析首先将不同来源的数据统一到 LGA 地理层级，再结合儿童发展结果、服务可达性与结构性劣势进行比较。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Developmental Vulnerability — National Median vs Tiwi Islands",
                zh: "儿童发展脆弱性 — 全国中位数与 Tiwi Islands 对比"
            },

            items: [
                {
                    label: {
                        en: "National median DV2",
                        zh: "全国 DV2 中位数"
                    },
                    value: 11.3,
                    suffix: "%"
                },

                {
                    label: {
                        en: "Tiwi Islands DV2",
                        zh: "Tiwi Islands DV2"
                    },
                    value: 81.2,
                    suffix: "%"
                }
            ],

            caption: {
                en: "Tiwi Islands represents a high-intensity vulnerability case. The underlying sample is small, so the result should be interpreted as vulnerability intensity rather than absolute population impact.",
                zh: "Tiwi Islands 属于高强度脆弱性案例。由于样本量较小，该结果应理解为脆弱性比例较高，而不是代表受影响儿童绝对人数最大。"
            }
        },

        {
            type: "bars",

            title: {
                en: "Structural Disadvantage in the Top 20 Vulnerability Areas",
                zh: "Top 20 高脆弱地区中的结构性劣势"
            },

            items: [
                {
                    label: {
                        en: "SEIFA IRSD decile 1",
                        zh: "SEIFA IRSD 最弱势十分位"
                    },
                    value: 15,
                    suffix: " / 20"
                },

                {
                    label: {
                        en: "Very Remote",
                        zh: "Very Remote"
                    },
                    value: 15,
                    suffix: " / 20"
                },

                {
                    label: {
                        en: "Remote",
                        zh: "Remote"
                    },
                    value: 2,
                    suffix: " / 20"
                }
            ],

            caption: {
                en: "The concentration of disadvantage and remoteness indicates that developmental vulnerability is strongly place-based rather than randomly distributed.",
                zh: "社会经济劣势与偏远程度高度集中，说明儿童发展脆弱性具有明显的地域结构，而非随机分布。"
            }
        }
    ],

    details: {
        en: [
            {
                title: "Data Integration",
                bullets: [
                    "Combined AEDC developmental outcomes with education-service, transport, SEIFA, remoteness and Google Review data.",
                    "Standardised datasets at Local Government Area level to support consistent cross-source comparison.",
                    "Used postcode and suburb correspondence data together with spatial joins to link service locations to LGAs and remoteness categories."
                ]
            },

            {
                title: "Transport & Accessibility Cleaning",
                bullets: [
                    "Constructed nearest-public-transport distance using the minimum distance to a train station or bus stop.",
                    "Compared alternative outlier thresholds and flagged distances above 50 km as extreme for the main accessibility analysis while retaining them in the full cleaned dataset.",
                    "Built indicators covering service supply, service quality, accessible high-quality capacity and transport accessibility."
                ]
            },

            {
                title: "Developmental Vulnerability",
                bullets: [
                    "The national median DV2 rate was 11.3%, while several remote communities recorded substantially higher vulnerability.",
                    "Tiwi Islands recorded 81.2%, while Anangu Pitjantjatjara Yankunytjatjara and MacDonnell both exceeded 70%.",
                    "The analysis emphasised that these rankings represent vulnerability intensity and should be interpreted cautiously where valid-record counts are small."
                ]
            },

            {
                title: "SEIFA & Remoteness",
                bullets: [
                    "Fifteen of the Top 20 highest-vulnerability areas were in SEIFA IRSD decile 1, the most disadvantaged group.",
                    "Fifteen of the Top 20 were classified Very Remote and another two were Remote; none were located in a Major City.",
                    "These patterns indicate that socioeconomic disadvantage, geography and transport barriers overlap in many high-risk communities."
                ]
            },

            {
                title: "Adjusted Service-Access Analysis",
                bullets: [
                    "Raw relationships suggested that stronger and higher-quality service access was generally associated with lower developmental vulnerability.",
                    "After controlling for SEIFA and remoteness, most correlations weakened substantially toward zero.",
                    "This suggests that service capacity alone cannot explain developmental outcomes without accounting for underlying socioeconomic and geographic conditions."
                ]
            },

            {
                title: "Policy Priority Framework",
                bullets: [
                    "Developed a composite policy-priority score combining high DV1 and DV2, low SEIFA, limited accessible high-quality service capacity within 5 km and poor transport access.",
                    "Used the framework to identify locations where multiple forms of disadvantage overlap and where targeted intervention may have greater value.",
                    "Recommended interpreting Remote and Very Remote subgroup findings cautiously because some cells contain small samples."
                ]
            },

            {
                title: "Google Reviews Analysis",
                bullets: [
                    "Used Google Reviews as a supplementary measure of parent experience rather than as an official quality indicator.",
                    "Found almost no relationship between weighted Google ratings and DV2: Pearson correlation 0.03 and Spearman correlation 0.04.",
                    "The result suggests that parent satisfaction with individual services should not be treated as a proxy for child developmental outcomes."
                ]
            }
        ],

        zh: [
            {
                title: "数据整合",
                bullets: [
                    "整合 AEDC 儿童发展结果、教育服务、交通、SEIFA、偏远程度和 Google Reviews 数据。",
                    "将不同数据源统一到 Local Government Area 层级，以保证跨数据集比较的一致性。",
                    "结合 postcode / suburb 对应数据及空间连接，将服务地点匹配到 LGA 与 remoteness 分类。"
                ]
            },

            {
                title: "交通与可达性数据清洗",
                bullets: [
                    "使用距火车站和公交站距离的最小值构建 nearest public transport 指标。",
                    "比较不同异常值阈值，将超过 50 km 的距离标记为极端值，并从主要可达性分析中排除，但保留在完整清洗数据中。",
                    "进一步构建服务供给、服务质量、高质量服务可达容量及交通可达性指标。"
                ]
            },

            {
                title: "儿童发展脆弱性",
                bullets: [
                    "全国 DV2 中位数为 11.3%，但部分偏远社区的脆弱性比例显著更高。",
                    "Tiwi Islands 的 DV2 达到 81.2%，Anangu Pitjantjatjara Yankunytjatjara 与 MacDonnell 均超过 70%。",
                    "分析特别强调，高排名代表的是脆弱性强度；对于有效记录数较少的地区，应谨慎解释。"
                ]
            },

            {
                title: "SEIFA 与偏远程度",
                bullets: [
                    "Top 20 高脆弱地区中有 15 个位于 SEIFA IRSD decile 1，即最弱势组。",
                    "Top 20 中有 15 个属于 Very Remote，另有 2 个属于 Remote，没有任何一个位于 Major City。",
                    "结果表明社会经济劣势、地理偏远与交通障碍在许多高风险社区中同时存在。"
                ]
            },

            {
                title: "控制变量后的服务可达性分析",
                bullets: [
                    "原始相关关系显示，更强和更高质量的服务可达性通常与更低的儿童发展脆弱性相关。",
                    "控制 SEIFA 和 remoteness 后，大部分相关系数明显向 0 收缩。",
                    "这说明仅增加服务容量并不能独立解释儿童发展结果，必须同时考虑社会经济和地理条件。"
                ]
            },

            {
                title: "政策优先级框架",
                bullets: [
                    "构建综合政策优先级指标，结合高 DV1 / DV2、低 SEIFA、5 km 内高质量服务容量不足以及较差交通可达性。",
                    "利用该框架识别多重劣势重叠的地区，为资源配置和定向干预提供依据。",
                    "由于部分 Remote 和 Very Remote 子组样本较小，相关结果需要谨慎解释。"
                ]
            },

            {
                title: "Google Reviews 分析",
                bullets: [
                    "将 Google Reviews 作为家长体验的补充信息来源，而不是官方服务质量指标。",
                    "Weighted Google Rating 与 DV2 几乎没有关系：Pearson 相关系数为 0.03，Spearman 相关系数为 0.04。",
                    "结果说明家长对单个服务机构的满意度不能直接作为儿童发展结果的替代指标。"
                ]
            }
        ]
    }
},

    {
        id: "disney-data",
        category: "analytics-systems",

        title: {
            en: "Enterprise Data Architecture & Governance",
            zh: "企业级数据架构与治理设计"
        },

        organisation: {
            en: "Disney MyMagic+ Case · University of Sydney",
            zh: "Disney MyMagic+ 案例 · 悉尼大学"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "2026",
            zh: "2026年"
        },

        sortDate: "2026-07",

        logo: "",

        overviewBullets: {
            en: [
                "Designed a modern multi-layer data architecture supporting guest experience, operational analytics and infrastructure management.",
                "Integrated governance, security, data-quality and zero-trust controls across ingestion, storage, processing and output layers."
            ],
            zh: [
                "设计现代多层数据架构，用于支持游客体验、运营分析及基础设施管理。",
                "在数据摄取、存储、处理与输出层中整合治理、安全、数据质量及零信任控制机制。"
            ]
        },

        tags: [
            "Data Architecture",
            "Lakehouse",
            "Data Governance",
            "Zero Trust"
        ]
    },

    {
        id: "yellow-river",
        category: "esg-policy",

        title: {
            en: "Yellow River Environmental Resources Analysis",
            zh: "黄河流域环境资源分析"
        },

        organisation: {
            en: "Environmental & Policy Research",
            zh: "环境与政策研究"
        },

        location: {
            en: "China",
            zh: "中国"
        },

        dates: {
            en: "2023–2024",
            zh: "2023–2024年"
        },

        sortDate: "2024-01",

        logo: "",

        overviewBullets: {
            en: [
                "Analysed water quality, agricultural water use, groundwater and soil-erosion indicators across the Yellow River Basin.",
                "Connected environmental indicators with policy and regional-development implications using structured quantitative analysis."
            ],
            zh: [
                "分析黄河流域水质、农业用水、地下水及水土流失等环境指标。",
                "通过结构化定量分析，将环境指标与政策及区域发展影响相结合。"
            ]
        },

        tags: [
            "ESG",
            "Environmental Data",
            "Policy Analysis",
            "Sustainability"
        ]
    },

    {
        id: "beneficial-ownership",
        category: "esg-policy",

        title: {
            en: "Beneficial Ownership & Financial Regulation",
            zh: "受益所有权与金融监管研究"
        },

        organisation: {
            en: "The University of Sydney",
            zh: "悉尼大学"
        },

        location: {
            en: "Sydney, Australia",
            zh: "澳大利亚 · 悉尼"
        },

        dates: {
            en: "2026",
            zh: "2026年"
        },

        sortDate: "2026-04",

        logo: "",

        overviewBullets: {
            en: [
                "Evaluated Australia's beneficial-ownership disclosure framework against FATF Recommendations 24 and 25.",
                "Compared Australia's proposed approach with international disclosure and verification models."
            ],
            zh: [
                "依据 FATF 第 24 与第 25 项建议评估澳大利亚受益所有权披露框架。",
                "对比澳大利亚拟议制度与其他司法辖区的信息披露及核验机制。"
            ]
        },

        tags: [
            "Financial Regulation",
            "Compliance",
            "FATF",
            "Policy Research"
        ]
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
                "Developed an ESG business proposal connecting AI, social responsibility and sustainable consumer behaviour.",
                "Led data collection and analysis within a cross-university team that won the Beijing regional championship."
            ],
            zh: [
                "设计连接人工智能、社会责任与可持续消费行为的 ESG 商业方案。",
                "负责跨校团队的数据收集与分析模块，并获得北京赛区冠军。"
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
                "分析消费者使用场景与产品痛点，识别可持续产品改进机会。",
                "设计用户反馈流程，并围绕环境表现、用户体验与包装对改进需求进行优先级排序。"
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
                "Conducted consumer-profile and competitor analysis for beauty-product positioning.",
                "Developed customer segmentation, KOL collaboration ideas and differentiated market strategies."
            ],
            zh: [
                "围绕美妆产品定位开展消费者画像及竞争对手分析。",
                "设计用户分群、KOL 合作思路及差异化市场策略。"
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