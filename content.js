/*
 * 个人主页内容维护文件：网页上的大部分文字、链接和成果都在这里修改。
 * 修改时请保留英文双引号 " "、冒号 :、逗号 ,、方括号 [ ] 和大括号 { }。
 * // 后面的文字是备注，只供维护时阅读，不会显示在个人主页上。
 * 建议每次只修改一个小项，提交后等待 1-10 分钟，再刷新主页检查。
 */
window.SITE_CONTENT = {
  // 主页开关：true 显示完整主页；false 只显示“暂时不可用”页面。
  siteEnabled: true, // true显示完整主页,false暂停显示主页

  // About 部分：bio 是突出显示的简介，bioDetail 是下方的详细研究介绍。
  bio: "My doctoral research examines the cyclic evolution of faults under fluid-injection perturbations, with a particular focus on how frictional healing changes fault stability and seismic response.",
  bioDetail: "I combine coupled shear-flow rock-mechanics experiments with rate- and state-dependent friction simulations to reveal the thermo-hydro-mechanical-friction mechanisms linking fault healing, instability evolution, and earthquake-event scaling. This work bridges fundamental earthquake physics and applications in geological engineering, subsurface energy development, and induced-seismicity risk assessment. My earlier research investigated the dynamic response and damage evolution of underground structures subjected to tunnel-blasting disturbances.",

  // 学术资料链接：label=按钮名称，url=文件或网址，icon=图标名称（一般不需要修改 icon）。
  profiles: [
    { label: "English CV", url: "assets/Ning-Yang-CV.pdf", icon: "file-text" },
    { label: "中文简历", url: "assets/Ning-Yang-CV-Chinese.pdf", icon: "languages" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Xe28zMkAAAAJ&hl=en", icon: "graduation-cap" }
  ],

  // Research 部分：number=序号，title=研究方向名称，text=问题说明，icon=小图标。
  research: [
    { number: "01", title: "Earthquake physics", text: "How do fault-zone processes evolve through the seismic cycle and ultimately produce unstable slip?", icon: "activity" },
    { number: "02", title: "Fault friction & healing", text: "How can rate-and-state descriptions be connected to grain-scale mechanisms, thermal effects, and time-dependent healing?", icon: "layers-3" },
    { number: "03", title: "Fluid-induced seismicity", text: "How do pore-pressure perturbations reactivate healed faults, control event size, and alter seismic stability?", icon: "waves" },
    { number: "04", title: "THM coupling", text: "How do thermal, hydraulic, and mechanical processes interact in fractured rock during injection and shear?", icon: "orbit" },
    { number: "05", title: "Engineering translation", text: "How can fault-physics models support geothermal energy, underground storage, waste disposal, and hazard mitigation?", icon: "construction" },
    { number: "06", title: "AI-augmented geoscience", text: "How can physics-informed and graph-based learning improve prediction without sacrificing interpretability?", icon: "network" }
  ],

  // 论文列表：year=年份，status=状态，title=题目，authors=作者，journal=期刊，url=论文链接。
  // status 可使用 In preparation、Under review、Accepted 或 Published。暂时没有链接时可以不写 url。
  publications: [
    { year: "2026", status: "Submitted", title: "Mechanism of fault healing and slip nucleation under thermo-hydro-mechanical coupling", authors: "Ning Yang, Peng-Zhi Pan, et al.", journal: "International Journal of Rock Mechanics and Mining Sciences" },
    { year: "2026", status: "Under review", title: "Frictional healing-regulated stability of injection-induced fault reactivation", authors: "Ning Yang, Peng-Zhi Pan, et al.", journal: "Earth and Planetary Science Letters" },
    { year: "2027", status: "Published", title: "Fault healing and its control on reactivation: from laboratory experiments to subsurface energy applications", authors: "Peng-Zhi Pan*, Ning Yang*, et al.", journal: "Renewable and Sustainable Energy Reviews, 245, 117693", url: "https://www.sciencedirect.com/science/article/abs/pii/S1364032126009962" },
    { year: "2026", status: "Published", title: "Laboratory-scale characteristics of micro-slip during fault quiescence and implications for injection-induced reactivation stability", authors: "Ning Yang, Peng-Zhi Pan*, et al.", journal: "International Journal of Rock Mechanics and Mining Sciences, 197, 106339", url: "https://www.sciencedirect.com/science/article/abs/pii/S1365160925003168" },
    { year: "2026", status: "Published", title: "Dynamic response and improved safety prediction method for large diameter pipelines with different shapes subjected to close-proximity tunnel blasting vibration", authors: "Xiaoming Guan, Ning Yang, et al.", journal: "Soil Dynamics and Earthquake Engineering, 209, 110448", url: "https://www.sciencedirect.com/science/article/abs/pii/S026772612600360X" },
    { year: "2026", status: "Published", title: "Analysis of fracture processes in quasi-brittle materials based on a unified representation of geometric-material-interface heterogeneities", authors: "Yi Xie, Zhaofeng Wang, Peng-Zhi Pan, Xingguang Zhao, Ning Yang, et al.", journal: "Theoretical and Applied Fracture Mechanics, 147, 105896", url: "https://www.sciencedirect.com/science/article/abs/pii/S0167844226004623" },
    { year: "2023", status: "Published", title: "Driving parameter trends and a safety evaluation method based on the composite ratio for shield tunneling in complex strata", authors: "Ning Yang, Xin Jin, et al.", journal: "ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems, Part A, 9(2), 04023007", url: "https://ascelibrary.org/doi/10.1061/AJRUA6.RUENG-941" },
    { year: "2023", status: "Published", title: "Analysis of factors influencing vibration reduction and design optimization of damping holes in adjacent tunnel blasting", authors: "Xiaoming Guan, Yingkang Yao, Ning Yang, et al.", journal: "Case Studies in Construction Materials, 19, e02448", url: "https://www.sciencedirect.com/science/article/pii/S2214509523006289" },
    { year: "2022", status: "Published", title: "Vibration response and failure modes analysis of the temporary support structure under blasting excavation of tunnels", authors: "Xiaoming Guan, Ning Yang*, et al.", journal: "Engineering Failure Analysis, 136, 106188", url: "https://www.sciencedirect.com/science/article/abs/pii/S1350630722001625" }
  ],

  // 中国授权发明专利：no=专利号，title=英文名称，authors=发明人，url=专利页面。
  patents: [
    { no: "CN112539064B", title: "Blasting vibration reduction method for nearby tunnels with auxiliary pilot tunnels and pre-set composite vibration isolation layers", authors: "Xiaoming Guan, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN112539064B" },
    { no: "CN112417367B", title: "Multi-parameter coupled quantitative evaluation of interlayer grouting reinforcement in stacked tunnels", authors: "Xiaoming Guan, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN112417367B" },
    { no: "CN113217097B", title: "Deep open dewatering technique for tunnels in water-rich composite strata", authors: "Jianyong An, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN113217097B" },
    { no: "CN114781040B", title: "Blasting vibration safety assessment for buildings", authors: "Xiaoming Guan, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN114781040B" },
    { no: "CN114936342B", title: "Blasting charge calculation for near-field protected structures", authors: "Xiaoming Guan, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN114936342B" },
    { no: "CN115600368B", title: "Optimization method for deep-hole blasting", authors: "Xiaoming Guan, Ning Yang, et al.", url: "http://epub.cnipa.gov.cn/patent/CN115600368B" }
  ],

  // 教育经历：date=时间，title=学位和专业，place=学校或研究所，detail=导师和论文信息。
  education: [
    { date: "2023-2026", title: "Ph.D. · Civil Engineering", place: "Institute of Rock and Soil Mechanics, Chinese Academy of Sciences", detail: "Advisor: Prof. Peng-Zhi Pan · Thesis on fault healing, instability, and seismicity under fluid injection" },
    { date: "2020-2023", title: "M.S. · Hydraulic Engineering", place: "Qingdao University of Technology", detail: "Advisor: Assoc. Prof. Xiaoming Guan · Tunnel blasting and pipeline damage control" },
    { date: "2016-2020", title: "B.S. · Civil Engineering", place: "Qingdao University of Technology", detail: "Underground engineering · Excellent Graduation Thesis" }
  ],

  // 会议报告：date=年份，title=会议和报告类型，place=地点，detail=报告题目或备注，url=会议链接。
  conferences: [
    { date: "2026", title: "International Conference on Coupled Processes in Fractured Geological Media (CouFrac 2026) · Oral Presentation", place: "Uppsala, Sweden", detail: "Thermal healing regulates injection-induced fault reactivation stability", url: "https://www.coufrac2026.com/abstracts/" },
    { date: "2025", title: "Chinese Society for Rock Mechanics and Engineering (CSRME) 9th Symposium on Underground Waste Disposal · Oral Presentation", place: "Guiyang, China", detail: "Preliminary investigation on micro-slip and pore-pressure perturbation reactivation mechanisms of faults during healing periods in waste repositories · Recommended Young Investigator Presentation", url: "http://www.csrme.com/About/Content/show/id/5685.do" },
    { date: "2024", title: "International Conference on Coupled Processes in Fractured Geological Media (CouFrac 2024) · Poster Presentation", place: "Kyoto, Japan", detail: "Numerical study on friction weakening and re-nucleation of faults induced by fluid injection during the interseismic period · Invited to submit a full journal paper", url: "https://www.ec-convention.com/coufrac2024/index.html" }
  ],

  // 学术交流与培训：date=年份，title=活动名称，detail=单位和详细内容。
  exchanges: [
    { date: "2026", title: "Academic Visit Coordination · Prof. Junlong Shang", detail: "University of Manchester, United Kingdom · Fracture heterogeneity in subsurface rock systems and implications for geothermal exploitation, energy storage, nuclear-waste disposal, and induced-seismicity risk management." },
    { date: "2025", title: "Academic Visit Coordination · Prof. Christopher Spiers", detail: "Utrecht University, Netherlands · Microphysical mechanisms of rock-salt deformation, damage, and healing; fault friction under crustal thermo-hydro-mechanical conditions." },
    { date: "2025", title: "Academic Visit Coordination · Prof. Arno Zang", detail: "GFZ Helmholtz Centre for Geosciences, Germany · Rock hydraulic fatigue, fatigue hydraulic fracturing, and adaptive injection strategies for induced-seismicity mitigation." },
    { date: "2025", title: "Academic Visit Coordination · Prof. Qingyun Duan", detail: "Hohai University, China · Preparation of high-quality geoscience review manuscripts, proposal development, submission workflows, and peer review." },
    { date: "2025", title: "Special Training on Artificial Intelligence-enabled Underground Engineering", detail: "Chinese Academy of Sciences, Beijing · Physics-Informed Neural Networks (PINNs), Graph Neural Networks (GNNs), physical interpretability, and geohazard prediction." },
    { date: "2024", title: "Academic Visit Coordination · Dr. Amin Hekmatnejad", detail: "Pontificia Universidad Catolica de Valparaiso, Chile · Universal Discontinuity Index (UDI) and photogrammetry-deep-learning workflows for automated rock-mass assessment." },
    { date: "2024", title: "In-situ Computed Tomography (CT) Experimental Facility Training and Acceptance", detail: "Sanying Precision Instruments Co., Ltd., Tianjin, China · System principles, operational workflows, rock-testing procedures, and full-system acceptance verification." },
    { date: "2023", title: "Coal-mine Field Investigation", detail: "Yima and Ordos, China · Underground surveys and project-oriented discussions with Assoc. Prof. Peter Konicek and Vlastimil Kajzar of the Czech Academy of Sciences." }
  ],

  // 科研、现场和工程项目：date=项目时间，title=项目全称，detail=职责和研究内容，url=可选的项目链接。
  projects: [
    { date: "2025-2027", title: "Open Fund of the State Key Laboratory of Geomechanics and Geotechnical Engineering Safety (SKLGGES-024007): Injection-induced Seismicity and Associated Source Mechanisms", detail: "Insights from laboratory tests and micro-discrete-element-method (micro-DEM) modelling; laboratory shear-seepage tests, project coordination, and academic visitor arrangements." },
    { date: "2024-2027", title: "Development of Coupled Models and Their Validation Against Experiments (DECOVALEX 2027): Safety of Fluid Flow, Shear, Thermal and Reaction Processes within Crystalline Rock Fracture Networks (SAFENET-2)", detail: "International research project (QDS-10139A-CAS); numerical simulations of fault reactivation and induced seismicity.", url: "https://decovalex.org/D-2027/safenet2" },
    { date: "2023-2026", title: "National Science Fund for Distinguished Young Scholars (52125903): Fracture Mechanism and Analysis Method of Engineering Rock Masses", detail: "Laboratory experiments, numerical modelling, result interpretation, and theoretical studies of rock-fault shear-friction stability." },
    { date: "2023-2026", title: "Surrounding-rock Stability, Seepage Evaluation and Support Optimization for Underground Caverns of Luxi Pumped-Storage Hydropower Station", detail: "PowerChina Kunming Engineering Corporation Limited, Yunnan, China (E3415201) · Project lead for numerical analysis, reporting, defense, acceptance review, and optimized support strategies." },
    { date: "2024-2025", title: "Failure Modes, Stability Criteria and Countermeasures for High-wall Caverns under Complex Geological Conditions at GS Hydropower Station", detail: "PowerChina Kunming Engineering Corporation Limited, Yunnan, China (E2415201) · Dynamic-simulation subgroup lead; seismic modelling, technical reporting, project defense, and acceptance." },
    { date: "2022-2023", title: "Shandong Provincial Natural Science Foundation (ZR2022ME043): Pipeline Blasting Damage and Safety Evaluation", detail: "Multi-parameter dynamic response analysis and identification of unfavorable pipeline geometries under close-proximity tunnel blasting." },
    { date: "2022-2023", title: "Joint Open Fund of a State Key Laboratory (PBSKL2022C06): Structural Damage Identification under Urban Tunnel Blasting", detail: "Unmanned Aerial Vehicle (UAV) imagery, damage recognition, and structural safety analysis." },
    { date: "2022-2023", title: "Long-tunnel Ventilation Cavern Stability and Safe Construction", detail: "Construction-process optimization for large-span connecting passages, with associated Chinese invention patents." },
    { date: "2021-2022", title: "Big-data-driven Green Intelligent Blasting-control Technology for Complex Subgrades", detail: "Industrial project with Shandong Hi-Speed Group Co., Ltd. (B2-2022-0063); field reconnaissance, blasting-vibration monitoring, blast-hole design, seismic-wave acquisition, and data analysis." },
    { date: "2020-2023", title: "National Natural Science Foundation of China (51708317): High-order Modal Vibration Effects and Damage Characteristics of Existing Structures under Tunnel Blasting", detail: "Field blasting monitoring, numerical analysis, structural damage assessment, and safety evaluation." },
    { date: "2020-2022", title: "Shandong Provincial Key Research and Development Program (2019GSF111027): Tunnel Blasting near Underground Pipelines", detail: "Coupled vibration-stress monitoring, dynamic-response analysis, and risk-control strategies." },
    { date: "2020-2022", title: "Key Construction Technologies for Zhengzhou Metro Crossing Major Hazard Sources", detail: "Industrial project with China Construction Second Engineering Bureau Ltd., Henan, China (B2-2019-0243); construction and risk-mitigation strategies for high-water-level loess and water-rich sandy formations." }
  ],

  // 荣誉与奖励：date=年份，title=奖项名称，detail=授予单位或说明，url=可选的证明链接。
  awards: [
    { date: "2026", title: "Merit Student", detail: "Institute of Rock and Soil Mechanics, Chinese Academy of Sciences (IRSM, CAS)" },
    { date: "2023", title: "Outstanding Graduate of Shandong Province", detail: "Shandong Provincial Department of Education", url: "https://hrss.shandong.gov.cn/cxjc/anti/viewPdfSecurity?type=security&code=GXYP23YZS10429N429004363-3CE08B5CA3" },
    { date: "2023", title: "Second Prize, Science and Technology Award", detail: "China Communications and Transportation Association · Rank 7/15", url: "https://www.cctaw.cn/d/file/p/2023/04-07/c4c760ff968879a90c121c4ef18f494a.pdf" },
    { date: "2022", title: "National Scholarship", detail: "Ministry of Education of the People's Republic of China · Awarded to top-performing postgraduate students for academic excellence", url: "https://civil.qut.edu.cn/info/1211/7389.htm" },
    { date: "2022", title: "Second Prize, Outstanding Graduate Student", detail: "Qingdao University of Technology" },
    { date: "2020", title: "Excellent Graduation Thesis and Selection for Public Defense", detail: "Qingdao University of Technology · Ranked 4/440; competitive oral defense reviewed by academic and industry experts", url: "https://jw.qut.edu.cn/info/1005/1931.htm" },
    { date: "2019", title: "Outstanding Student Model", detail: "Qingdao University of Technology" },
    { date: "2018", title: "Outstanding Student", detail: "Qingdao University of Technology" }
  ]
};
