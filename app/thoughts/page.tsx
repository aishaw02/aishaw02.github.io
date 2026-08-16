"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const posts = [
  { no: "01", category: "AI & PRODUCT", title: "我与 AI", subtitle: "从旁观，到主动参与", excerpt: "从第一次在生活里遇见 AI，到逐渐走近 AI 行业；这篇文章记录了我如何从旁观、迟疑与等待，走向理解、投入和主动参与。", date: "2026.08.10", wordCount: "1321 字", time: "5 MIN READ", tone: "thoughtToneOne", image: "/thought-cover-01-new.png" },
  { no: "02", category: "INTERNSHIP NOTES", title: "实习之后", subtitle: "关于负责，关于底气", excerpt: "几段实习之后，我发现自己对“把一件事做好”的理解发生了一些变化。相比具体的工作方法，有两件事对我之后面对工作的方式影响更大。", date: "2026.08.10", wordCount: "849 字", time: "4 MIN READ", tone: "thoughtToneTwo", image: "/thought-cover-02.jpg" },
  { no: "03", category: "SELF REFLECTION", title: "我这样看待自己", subtitle: "关于优缺点", excerpt: "认识自己是一件很难有标准答案的事情。不同环境里，我会看到自己不同的一面。到现在，我可以比较确定地说出自己的一些特点——有的帮助我走到这里，有的也长期让我苦恼着。", date: "2026.08.10", wordCount: "913 字", time: "4 MIN READ", tone: "thoughtToneThree", image: "/thought-cover-03-new.jpg" },
];

type ThoughtSection = {
  title: string;
  period: string;
  paragraphs: string[];
  closingLast?: boolean;
  subsections?: { title: string; paragraphs: string[] }[];
};

const thoughtOneSections: ThoughtSection[] = [
  {
    title: "初遇",
    period: "2023年",
    paragraphs: [
      "最初是在 B 站看到 AI 翻唱系列，也会在微博刷到“评论罗伯特”。现在看，AI很早就进入了我的生活，但当时我并没有把这些和“人工智能”联系起来，只是觉得生活中又出现了一些新奇有趣的东西，也没有思考过这背后的原理。",
      "AI已经出现了，但对我而言，它还只是一个模糊的背景。",
    ],
  },
  {
    title: "尝试",
    period: "2024.2",
    paragraphs: [
      "到了写本科毕业论文的阶段，ChatGPT已经火了一段时间了，但我最开始对AI有明显的抗拒，甚至觉得借助它完成论文和作业有一点“作弊”。直到一次偶然使用 WPS AI 续写，我第一次打开了新世界的大门，也直观感受到它的效率。",
      "于是我开始意识到：使用工具，并不意味着放弃独立思考。",
    ],
  },
  {
    title: "对话",
    period: "2024-2025",
    paragraphs: [
      "不仅ChatGPT持续出圈，DeepSeek、Kimi、豆包等国产产品也相继进入视野。AI逐渐成为我学习和生活中的常用工具。",
      "我开始认可它的使用价值，但使用方式依旧主要停留在“我提出问题，AI给出答案”的对话模式。在我的认知里，它仍然是一个能力很强的信息与内容工具。",
    ],
  },
  {
    title: "缘起",
    period: "2025.7",
    paragraphs: [
      "进入滴滴实习后，我第一次接触到黑客松。",
      "其中一个阶段的任务是收集参赛团队的作品文档。起码超过一半的项目都高频率地提到AI。但比起用了什么技术，我更关心结果——这个产品有没有真正解决问题、提高效率、改善体验？直到现在，这也是我对AI产品的判断标准：最终要回到真实的问题和真实的人。",
      "我也认为这是我与AI行业真正产生连接的开始。在我自己还都不知道的时候，这份经历已经为后来进入AI行业埋下了一些伏笔。",
    ],
  },
  {
    title: "迟疑",
    period: "2026.1",
    paragraphs: [
      "进入商汤，我第一次具体地接触Agent，也意识到，AI已经从“回答问题”走向了“理解并执行任务”。而我还依旧停留在对话阶段。",
      "但与此同时，我并没有产生强烈的行业认同。相反，我形成了一个持续很久的判断：**现在大量 AI 能力还没有真正进入普通人的日常生活，很大程度上是因为它们还不够稳定、自然和易用。**",
      "因此，我一度认为自己并不需要急着理解所有新技术。比起主动靠近，我更更愿意等待AI来到生活里。",
    ],
  },
  {
    title: "闪光",
    period: "2026.7",
    paragraphs: [
      "走进阶跃，我来到了一个更加AI Native的环境。",
      "身边的同事使用AI的方式不断刷新我的认知。我开始反思“等待”这件事，但也迟疑并焦虑着——现在开始是不是已经太晚了，我已经落下太多了。",
      "秋招临近，我又开始思考未来。有天晚上灵光一闪，我想到了《楚门的世界》。当然，AI并不是电影里的世界，未来也未必会以某种戏剧化的方式到来。但这个联想让我意识到一件事：**即使有一天 AI 已经足够成熟、足够自然地融入每个人的生活，我也不希望自己只是一个被动的使用者。**",
      "我想要对这一切拥有掌控感。并且我也开始对参与AI行业产生了更具体的责任意识：如果未来有机会参与推动 AI 进入更多人的生活，我希望自己参与创造的产品，至少能够在效率、体验、安全或人的自主性上，带来正向的边际价值。",
    ],
  },
  {
    title: "期许",
    period: "现在",
    paragraphs: [
      "带着这样目标，我变得更愿意了解，愿意投入。也开始通过真实项目验证 AI 到底能帮助我做到什么，而不是等待一个“足够成熟”的未来自动到来。",
      "与此同时，我对 AI 的理解也变得更克制——它可以提高效率、放大能力，也会不断改变产品和工作的方式；但技术本身始终只是手段。我更希望自己未来参与创造的，是那些**真正服务于人的需求，同时保留人的判断、选择与主体性**的产品。",
      "科技带来的异化或许很难完全避免。在一场又一场的洪流中，希望我们能始终看到彼此，看到自己。",
    ],
  },
];

const thoughtTwoSections: ThoughtSection[] = [
  {
    title: "Owner 意识：从完成事情，到对结果负责",
    period: "OWNER",
    paragraphs: [
      "学生工作是我最早接触活动策划与执行的地方。虽然也会认真准备，希望参与者真正有所收获，但服务对象主要是同学，也缺少明确的业务目标与结果指标。相比最终表现，我更多关注的是活动有没有顺利完成，整个过程也相对轻松。",
      "这种感受在阶跃独立负责海外裂变活动时第一次发生了明显变化。",
      "这是我第一次完整地独立负责一个项目。除了执行是否完整，我还需要关注活动能否按期上线、最终表现是否达到预期，也第一次真正感受到“对结果负责”带来的压力。",
      "恰好在接手项目之前，我的 mentor 离职了。没有人再提前把所有任务拆好告诉我下一步做什么，我需要自己理解目标、梳理时间节点、识别风险，判断哪些问题需要确认，以及应该找到谁共同推进。",
      "当然，独立负责并不意味着独自完成。我依然会主动寻求帮助，也需要很多人的协作。",
      "但这段经历让我重新理解了 Owner 意识：",
      "它不是一个人承担所有工作，而是明确自己对什么结果负责，并主动推动事情走向结果。",
    ],
  },
  {
    title: "有问题，就解决问题",
    period: "CONFIDENCE",
    paragraphs: [
      "活动上线后，因为担心出现意外，我问一起合作的产品同事：“应该不会有问题吧？一定会顺利的吧！”",
      "他回答：“没事的，有问题就解决。”",
      "这句话让我重新理解了**“确定感”**。过去面对不确定性，我习惯告诉自己“不会有问题”“一定会顺利”。但这种安慰建立在对未来的预测上，而现实中的项目很难完全按照计划发生。相比相信“问题不会出现”，我现在更愿意相信另一件事：**即使问题出现，我也有能力判断、处理，并继续推动事情向前。**",
      "提前准备固然重要，但准备并不是为了消除所有意外，而是为了降低可预见的风险，并在变化真正发生时拥有更大的处理空间。",
    ],
  },
  {
    title: "现在",
    period: "NOW",
    closingLast: false,
    paragraphs: [
      "回头看，这两件事最终指向的是同一种变化：少一点对外部确定性的依赖，多一点对自己解决问题能力的信任。对结果负责，并不意味着一切都必须处于掌控之中；真正稳定的底气，也不是相信事情永远不会出错。而是知道，即使事情偏离计划，我依然可以理解问题、寻找资源、做出判断，然后把它继续往前推进。",
    ],
  },
];

const thoughtThreeSections: ThoughtSection[] = [
  {
    title: "三个优点",
    period: "STRENGTHS",
    closingLast: false,
    paragraphs: [],
    subsections: [
      { title: "结构感", paragraphs: ["面对复杂、信息量大的事情，我习惯先建立结构，梳理目标、流程、时间节点和优先级。清晰的结构会让我更容易理解问题，也能为后续执行、复盘和优化提供依据。", "相比在混乱中直接开始，我更擅长先把一件事情“理清楚”，再逐步向前推进。"] },
      { title: "同理心", paragraphs: ["我会自然地关注不同角色的感受和需求。做活动时，我会思考参与者真正需要什么；看产品时，我会关心它是否解决了真实问题；和不同角色协作时，也会尝试理解对方的目标和限制。", "这种习惯让我重视体验，也让我在很多问题上不会只从自己的立场出发。"] },
      { title: "责任感", paragraphs: ["当一件事情真正交到我手里，或者我认可它的意义时，我会很在意最后呈现出来的结果。", "这种投入会体现在对细节的关注、对完整性的要求，以及愿意持续调整和优化。相比单纯完成任务，我更容易从“**这件事情为什么值得做好**”中获得动力。"] },
    ],
  },
  {
    title: "由此带来的不足",
    period: "LIMITATIONS",
    closingLast: false,
    paragraphs: [],
    subsections: [
      { title: "结构感有时会变成完美主义", paragraphs: ["因为习惯提前把事情想清楚，我容易在项目初期过度规划，甚至提前思考很多还没有真正发生的问题。这种习惯能减少遗漏，但也会拖慢开始的速度。", "现在我会有意识地提醒自己：**先产出一个可以讨论和验证的版本，再通过真实反馈逐步完善与迭代。**"] },
      { title: "换位思考有时会削弱自己的判断", paragraphs: ["因为比较容易理解不同人的立场，我有时会希望找到一个让所有人都满意的答案，也因此在决策时产生不必要的迟疑。", "我正在学习把“理解别人”和“形成自己的判断”分开：充分听取意见，但最终仍然需要根据目标做出取舍。", "**最优解不一定是完美解，共识和效率之间也需要平衡。**"] },
      { title: "面对陌生的复杂问题，我需要时间形成判断", paragraphs: ["在第一次遇到某些复杂场景时，我并不总能马上形成非常笃定的判断。过去也会更希望有人告诉我应该怎么做。我认为其中一部分来自经验不足——很多解决问题的方法，还没有通过足够多的实践变成直觉。", "因此，我一直比较重视复盘。希望把每一次新的问题、判断和结果记录下来，让今天的陌生经验成为下一次可以调用的方法。"] },
    ],
  },
  {
    title: "总的来说",
    period: "SUMMARY",
    closingLast: false,
    paragraphs: [
      "**优点和缺点并不是完全相反的两组标签。**认识自己并不是判断哪些特点应该保留、哪些应该消失，而是逐渐知道：**在什么情况下发挥它们，又在什么情况下提醒自己稍微往回收。**",
      "**很多决定都不会有一个完美的答案。既然已经做出了当下最合适的选择，与其反复怀疑，不如坚定走下去。**",
    ],
  },
];

function renderThoughtEmphasis(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      : part,
  );
}

export default function ThoughtsPage() {
  const [active, setActive] = useState<number | null>(null);
  const [coverOpen, setCoverOpen] = useState(false);
  const [coverScale, setCoverScale] = useState(1);
  const selected = active === null ? null : posts[active];
  const thoughtSectionSets = [thoughtOneSections, thoughtTwoSections, thoughtThreeSections];
  const selectedSections = active === null ? [] : thoughtSectionSets[active];

  useEffect(() => {
    if (active === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (coverOpen) {
          setCoverOpen(false);
          setCoverScale(1);
        } else {
          setActive(null);
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, coverOpen]);

  return (
    <main className="thoughtsDetail">
      <header className="siteHeader journeyDetailSiteHeader">
        <Link className="monogram" href="/" aria-label="返回主页">FP</Link>
        <nav aria-label="主导航"><a href="/journey">JOURNEY</a><a href="/projects">PROJECTS</a><a className="isActive" href="/thoughts" aria-current="page">THOUGHTS</a><a href="/life">LIFE</a></nav>
        <div className="journeyHeaderRight"><div className="journeyIdentityTags" aria-label="个人身份标签"><span>27届</span><span>北师大统计学硕</span><span>中共党员</span></div><a className="headerResume" href="/wang-fangpu-resume.pdf" download="王方浦-27届-北师大统计学硕.pdf">DOWNLOAD CV <span>↓</span></a></div>
      </header>

      <section className="projectsArchive thoughtsArchive" aria-labelledby="thoughts-title">
        <header className="projectsArchiveHeader">
          <div>
            <p>NOTES & REFLECTIONS / 2026</p>
            <h1 id="thoughts-title">思考手记</h1>
          </div>
          <span>THOUGHT ARCHIVE · 03</span>
        </header>

        <div className="projectsArchiveGrid thoughtsArchiveGrid">
          {posts.map((post, index) => (
            <article className="projectArchiveCard thoughtArchiveCard" key={post.no}>
              <button className="projectArchiveOpen" type="button" onClick={() => { setCoverOpen(false); setActive(index); }} aria-label={`查看${post.title}`}>
                <figure className={`thoughtArchiveVisual ${post.tone}`}>
                  {post.image && <img src={post.image} alt={`${post.title}封面`} />}
                  {!post.image && <><small>{post.category}</small><b>{post.no}</b><span>{post.no}</span></>}
                </figure>
                <div className="projectArchiveInfo thoughtArchiveInfo">
                  <h2>{post.title}</h2>
                  <div className="thoughtArchiveDescription">
                    <p>{post.subtitle}</p>
                    <span>{post.category}</span>
                    <span>{post.date}　/　{post.wordCount && <>{post.wordCount}　/　</>}{post.time}</span>
                  </div>
                  <span className="thoughtArchiveRead">阅读全文 <i>↗</i></span>
                </div>
              </button>
            </article>
          ))}
        </div>

        {selected && (
          <div className="projectDetailModal" role="dialog" aria-modal="true" aria-labelledby="thought-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
            <article className="projectDetailPanel thoughtDetailPanel">
              <button className="projectDetailClose" type="button" onClick={() => setActive(null)} aria-label="关闭思考详情">×</button>
              <div className={`thoughtArticlePage thoughtArticlePage${selected.no}`}>
                <header className="thoughtArticleHeader">
                  <p>THOUGHT {selected.no} / {selected.category}</p>
                  <h2 id="thought-modal-title">{selected.title}</h2>
                  <div className="thoughtArticleSubtitle">{selected.subtitle}</div>
                  <div className="thoughtArticleMeta"><span>{selected.date}</span><span>{selected.time}</span></div>
                </header>

                <div className="thoughtArticleLayout">
                  <div className="thoughtArticleMain">
                    <>
                      {selected.no !== "01" && <p className="thoughtArticleLead">{selected.excerpt}</p>}
                      {selectedSections.map((section, sectionIndex) => (
                          <section className="thoughtArticleSection thoughtArticleRealSection" id={`thought-section-${sectionIndex + 1}`} key={section.title}>
                            <p className="thoughtArticleSectionNo">{String(sectionIndex + 1).padStart(2, "0")} / {section.period}</p>
                            <h3>{section.title}</h3>
                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                              <p className={paragraphIndex === section.paragraphs.length - 1 && section.closingLast !== false ? "thoughtArticleClosing" : undefined} key={`${section.title}-${paragraphIndex}`}>
                                {renderThoughtEmphasis(paragraph)}
                              </p>
                            ))}
                            {section.subsections?.map((subsection) => (
                              <div className="thoughtArticleSubsection" key={subsection.title}>
                                <h4>{subsection.title}</h4>
                                {subsection.paragraphs.map((paragraph, paragraphIndex) => <p key={`${subsection.title}-${paragraphIndex}`}>{renderThoughtEmphasis(paragraph)}</p>)}
                              </div>
                            ))}
                          </section>
                      ))}
                    </>
                  </div>

                  <aside className="thoughtArticleAside" aria-label="文章辅助信息">
                    <section>
                      <p>CONTENTS</p>
                      {selectedSections.map((section, index) => (
                          <a className={selected.no === "01" && index >= 4 ? "isEmphasized" : undefined} href={`#thought-section-${index + 1}`} key={section.title}>
                            {String(index + 1).padStart(2, "0")}　{section.title}{selected.no === "01" ? ` · ${section.period}` : ""}
                          </a>
                        ))}
                    </section>
                    <section>
                      <p>ARTICLE INFO</p>
                      <span>{selected.category}</span>
                      <span>{selected.date}</span>
                      <span>{selected.time}</span>
                    </section>
                    {selected.image && <button className="thoughtArticleAsideCover" type="button" onClick={() => { setCoverScale(1); setCoverOpen(true); }} aria-label={`放大查看${selected.title}文章封面`}><img src={selected.image} alt={`${selected.title}文章封面`} /></button>}
                  </aside>
                </div>
              </div>
            </article>
            {coverOpen && selected.image && (
              <div className="thoughtCoverLightbox" role="dialog" aria-modal="true" aria-label={`${selected.title}文章封面大图`} onClick={() => { setCoverOpen(false); setCoverScale(1); }}>
                <button type="button" onClick={() => { setCoverOpen(false); setCoverScale(1); }} aria-label="关闭封面大图">×</button>
                <div className="thoughtCoverStage" onWheel={(event) => { event.preventDefault(); setCoverScale((scale) => Math.min(4, Math.max(1, scale + (event.deltaY < 0 ? .25 : -.25)))); }}>
                  <img src={selected.image} alt={`${selected.title}文章封面大图`} style={{ transform: `scale(${coverScale})` }} />
                </div>
                <div className="thoughtCoverControls" aria-label="封面缩放控制" onClick={(event) => event.stopPropagation()}>
                  <button type="button" onClick={() => setCoverScale((scale) => Math.max(1, scale - .25))} aria-label="缩小封面">−</button>
                  <span>{Math.round(coverScale * 100)}%</span>
                  <button type="button" onClick={() => setCoverScale((scale) => Math.min(4, scale + .25))} aria-label="放大封面">＋</button>
                  <button type="button" onClick={() => setCoverScale(1)}>重置</button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
