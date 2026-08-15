import Link from "next/link";

type JourneyEntry = {
  kind: "EDUCATION" | "STUDENT WORK" | "INTERNSHIP";
  image: string;
  period: string;
  place: string;
  role: string;
  description: string;
  schoolTags?: string[];
  notes?: string[];
  secondary?: boolean;
};

type JourneyChapter = {
  index: string;
  category: string;
  english: string;
  entries: JourneyEntry[];
};

const chapters: JourneyChapter[] = [
  {
    index: "01",
    category: "本科",
    english: "UNDERGRADUATE",
    entries: [
      { kind: "EDUCATION", image: "/journey-01.jpg", period: "2020.09 — 2024.07", place: "兰州大学 · 经济学院", schoolTags: ["985", "双一流"], role: "经济学学士　GPA 4.07 / 5.0 · 专业排名 2 / 45", description: "从理论基础出发，理解资源配置、消费者行为与市场运行逻辑，为认识用户需求、商业模式与产品价值奠定基础。", notes: ["校级一等奖学金", "优秀学生干部", "优秀共青团员"] },
      { kind: "STUDENT WORK", image: "/journey-02.jpg", period: "2020.10 — 2022.10", place: "经济学院学生会 · 事务与权益部", role: "部长", description: "参与新年晚会、校运会与学术科技节等大型活动，负责现场资源协调、流程衔接与参与者引导；协助梳理部门职能、统筹跨部门协作，并参与部员培训与交流。" },
    ],
  },
  {
    index: "02",
    category: "研究生",
    english: "GRADUATE",
    entries: [
      { kind: "EDUCATION", image: "/journey-03.jpg", period: "2024.09 — 2027.07", place: "北京师范大学 · 统计学院", schoolTags: ["985", "双一流"], role: "统计学学术型硕士　GPA 3.7 / 4.0", description: "在理论基础上，以数据发现问题、验证假设，并在实践中不断理解真实的人、真实的业务与真实的选择。", notes: ["学业一等奖学金", "共青团社会工作奖"] },
      { kind: "STUDENT WORK", image: "/journey-04.jpg", period: "2024.10 — 2026.02", place: "统计学院就业工作室 · 活动部", role: "部长", description: "全流程策划并执行线上、线下活动 10 余场，覆盖策划、嘉宾邀约、现场控场与复盘优化，单场平均参与 50+ 人；从 0 到 1 搭建并运营 200+ 人就业信息社群，精准分享赛事、实习与活动资讯。" },
    ],
  },
  {
    index: "03",
    category: "实习",
    english: "INTERNSHIPS",
    entries: [
      {
        kind: "INTERNSHIP",
        image: "/journey-05.jpg",
        secondary: true,
        period: "2024.02 — 2024.03",
        place: "中信证券北京分公司 · 呼家楼营业部",
        role: "市场拓展部 实习生",
        description:
          "参与营业部日常工作与学习，旁听晨会及业务培训，了解证券公司组织架构、财富管理与泛资管等业务；同时协助完成部门间协调及基础数据统计与分析。\n**第一次真正进入职场，也第一次开始具体思考：什么样的工作内容、团队氛围与生活方式更适合自己。**",
      },
      {
        kind: "INTERNSHIP",
        image: "/journey-06.jpg",
        secondary: false,
        period: "2025.07 — 2025.11",
        place: "滴滴出行 · 科技生态与发展部",
        role: "技术运营 / 活动运营实习生",
        description: "参与开发者 Hackathon 全流程运营，连接报名、组队、答疑、决赛与资源协同；覆盖 44 个一级部门、537 位参与者与 144 支团队。\n第一次真正接触开发者生态，也第一次理解大型项目如何被组织和推动。",
        notes: ["Hackathon", "赛事运营", "数据分析", "跨团队协作"],
      },
      {
        kind: "INTERNSHIP",
        image: "/journey-07.jpg",
        secondary: true,
        period: "2026.01 — 2026.03",
        place: "商汤科技 · 大模型事业部",
        role: "产品运营 - 办公小浣熊",
        description:
          "参与**办公小浣熊** Agent 产品运营，负责注册、下载、活跃等核心数据跟踪与专项分析；围绕产品新版本上线参与推广活动，并通过用户问卷收集反馈，跟进产品体验问题。\n第一次在 Chatbot 之外接触 Agent 产品，也第一次直观感受到：**以大模型作为“大脑”，AI 在任务理解与执行上可以拥有远超对话的能力。**",
      },
      {
        kind: "INTERNSHIP",
        image: "/journey-08.jpg",
        secondary: false,
        period: "2026.04 — 至今",
        place: "阶跃星辰 StepFun · 开发者生态部门",
        role: "开放平台运营实习生",
        description: "参与 Step 3.7 Flash 模型发布并协助设计裂变活动方案，独立负责海外版本适配；参与开发者服务流程优化并支持生态活动。\n开始站在开放平台与开发者的视角思考产品、增长与生态。",
        notes: ["AI 开放平台", "开发者增长", "平台服务", "海外适配"],
      },
    ],
  },
];

const entryLabels: Record<string, string> = {
  EDUCATION: "教育经历 / EDUCATION",
  "STUDENT WORK": "学生工作 / CAMPUS",
  INTERNSHIP: "实习经历 / INTERNSHIP",
};

function renderInlineStrong(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

export default function JourneyDetailPage() {
  return (
    <main className="journeyDetail">
      <header className="siteHeader journeyDetailSiteHeader">
        <Link className="monogram" href="/" aria-label="返回主页">FP</Link>
        <nav aria-label="主导航">
          <a className="isActive" href="/journey" aria-current="page">JOURNEY</a>
          <a href="/projects">PROJECTS</a>
          <a href="/thoughts">THOUGHTS</a>
          <a href="/life">LIFE</a>
        </nav>
        <div className="journeyHeaderRight">
          <div className="journeyIdentityTags" aria-label="个人身份标签"><span>27届</span><span>北师大统计学硕</span><span>中共党员</span></div>
          <a className="headerResume" href="/wang-fangpu-resume.pdf" download="王方浦-个人简历.pdf">DOWNLOAD CV <span>↓</span></a>
        </div>
      </header>

      <section className="journeyArchiveHeading" aria-labelledby="journey-title">
        <header className="projectsArchiveHeader">
          <div>
            <p>PERSONAL JOURNEY / 2020—2027</p>
            <h1 id="journey-title">成长行迹</h1>
          </div>
          <span>GROWTH ARCHIVE · 03</span>
        </header>
      </section>

      <section className="journeyDetailTimeline" aria-label="王方浦的经历时间线">
        {chapters.map((chapter) => (
          <article className="journeyDetailChapter" key={chapter.index}>
            <div className="journeyDetailMarker"><span>{chapter.index}</span><i /></div>
            <header>
              <p>{chapter.english}</p>
              <h2>{chapter.category}</h2>
            </header>

            <div className="journeyDetailEntries">
              {chapter.entries.map((entry) => (
                <div className={`journeyDetailEntry ${entry.kind === "STUDENT WORK" ? "isStudentWork" : ""} ${entry.secondary ? "isSecondary" : ""} ${entry.place === "经济学院学生会 · 事务与权益部" || entry.place === "中信证券北京分公司 · 呼家楼营业部" || entry.place === "阶跃星辰 StepFun · 开发者生态部门" ? "hasLongPlace" : ""}`} key={`${entry.kind}-${entry.place}`}>
                  <div className="journeyEntryMeta">
                    <time><small>{entryLabels[entry.kind]}</small>{entry.period}</time>
                    <figure><img src={entry.image} alt={`${entry.place}相关照片`} /></figure>
                  </div>
                  <div>
                    <h3>{entry.place}{entry.schoolTags && <span className="journeySchoolTags">{entry.schoolTags.map((tag) => <b key={tag}>{tag}</b>)}</span>}</h3><h4>{entry.role}</h4>
                    <p>{entry.description.split("\n").map((paragraph, index) => (
                      <span key={`${entry.place}-description-${index}`}>{renderInlineStrong(paragraph)}</span>
                    ))}</p>
                    {entry.notes && <ul>{entry.notes.map((note) => <li key={note}>{note}</li>)}</ul>}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="journeyDetailFooter">
        <p>THE PATH IS STILL UNFOLDING.</p>
        <a href="/projects">我的项目 <span>→</span></a>
      </footer>
    </main>
  );
}
