"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { no: "01", icon: "📍", prefix: "", number: "一", title: "场大赛｜滴滴 Hackathon", date: "2025.7–2025.11", image: "/project-cover-01.jpg" },
  { no: "02", icon: "🧩", prefix: "", number: "两", title: "条主线｜开放平台 × 开发者增长", date: "2026.4–2026.8", image: "/project-cover-02.png" },
  { no: "03", icon: "⚙️", prefix: "", number: "三", title: "项活动｜校企联动 × 经验分享 × 生涯规划", date: "2024.10–2026.2", image: "/project-cover-03.png" },
  { no: "04", icon: "🎬", prefix: "第", number: "四", title: "面墙", date: "2026.8–", image: "/project-cover-04.png" },
];

const didiGallery = [
  "/project-cover-01.jpg",
  "/didi-gallery-01.png",
  "/didi-gallery-02.jpg",
  "/didi-gallery-03.jpg",
  "/didi-gallery-04.jpg",
  "/didi-gallery-05.jpg",
  "/didi-gallery-06.jpg",
];

const platformGallery = [
  "/project-cover-02.png",
  "/platform-gallery-01.jpg",
  "/platform-gallery-02.jpg",
  "/platform-gallery-03.jpg",
  "/platform-gallery-04.jpg",
];

const didiSections = [
  ["我的角色 - 活动运营实习生", "赛事全流程运营｜数据看板搭建｜跨团队协作｜决赛策划与执行"],
  ["我做了什么 - 全流程参与", `01｜宣传预热
围绕赛事启动进行前期传播，通过内网公众号联动、宣传视频制作及线下摆摊推广等方式提升活动曝光，为赛事报名预热并建立活动认知。
参与公众号选题、宣传视频主题确认、脚本策划到拍摄及最终定稿的完整制作流程

02｜选手运营 × 持续传播
围绕选手群与赛题方群进行分层运营，持续响应参赛需求、围绕报名、组队、答疑、作品提交等环节提供支持，保障选手体验与作品顺利产出；
搭建赛事数据看板，实时跟踪报名、组队及作品提交等关键进展。同时持续产出赛事内容与热榜内容，维持内网讨论热度。

03｜24H Coding：决赛筹备与执行
围绕 24 小时集中 Coding 与首轮路演，策划互动环节，推进场地、物料等线下准备；
协调设计、供应商、搭建及物料等多方资源完成活动落地，并支持首轮路演选拔优秀队伍进入总决赛。

04｜1024 总决赛：线下路演 × 直播
参与 1024 程序员节总决赛线下路演及直播筹备与执行，协调多方推进现场落地；独立负责直播抽奖活动的方案设计、前期筹备与现场执行，配合完成总决赛路演及现场颁奖。

05｜收尾与总结
完成赛事数据、作品及相关资料整理，跟进获奖作品及后续事项，并参与项目总结与复盘，为后续赛事运营沉淀经验。`],
  ["项目成果", `规模较上届扩大近一倍
44 个一级部门参与 / 537 名参赛者 / 144 支参赛队伍
46 支队伍晋级决赛 / 250 人参与 24 小时集中开发`],
  ["我的观察", `这不只是一场比赛，业务上，它将真实业务问题开放给更多员工寻找新的解决方案；组织上，它创造跨部门协作与技术文化传播的场景；人才上，它也让创造力、协作能力与潜力在高密度实践中被看见。
它让不同部门不同业务的人集合在一起共同解决真实问题，让灵感碰撞，让热情实现，让改变发生。`],
];

const platformSections = [
  ["我的角色 - 开放平台运营实习生", "增长策略｜活动运营｜平台服务"],
  ["我做了什么 - 一次模型的发布", `01｜裂变增长：让模型走入更多人的视野
参与 Step 3.7 Flash 模型发布及 Step Plan 裂变活动，从活动方案讨论、规则设计到上线运营，围绕免费体验与邀请机制降低体验门槛，并持续跟踪活动表现与用户反馈。

02｜抖音店铺：尝试新的增长入口
配合 Step Plan 在抖音店铺的展示与传播，参与商品页面、活动内容及传播素材优化，尝试通过开放平台之外的新渠道触达潜在用户。

03｜海外适配：把国内方案带到海外
独立负责裂变活动海外版本适配，围绕用户权益、支付方式、产品能力、页面内容、传播渠道及服务流程逐项确认，推动国内活动方案在海外环境完成适配与落地。

04｜开发者活动：走到真实用户身边
参与科技市集、开发者沙龙、Hackathon 等线下活动，支持模型与平台传播，也借此直接接触开发者，观察他们如何认识模型、选择模型，以及真正关心哪些问题。

05｜平台服务：承接增长之后的用户
参与退款、开票、代金券等开放平台服务，并推动部分流程标准化与自动化；同时调研 AI 客服产品，探索如何降低开发者获取支持的成本。`],
  ["项目成果", `模型发布及裂变活动期间，平台新增注册用户数月环比增长 300%+
参与模型服务在抖音渠道的上线与运营，产生 1,500+ 订单，核销率 30%+
参与科技市集、开发者沙龙等 3 场线下活动，单场平均到场人数 200+
调研 8 款国内 AI 开放平台的开发者服务现状，完成对比分析并产出专项报告`],
  ["我的观察", `模型发布只是起点。
从知道一个模型、愿意尝试，到真正使用，再到遇到问题时获得支持，背后是一条完整的开发者旅程。
增长让开发者走进来，而产品与服务决定他们愿不愿意留下来。`],
];

const campusSections = [
  ["我的角色 - 学院就业工作室 活动部部长", "活动策划与执行｜资源协调｜社群运营"],
  ["我做了什么", `01｜校企联动：走进真实职场
策划企业参访与交流活动，从企业沟通、活动方案到学生招募与现场执行。让同学真正走进企业、接触真实业务与岗位，在专业所学、个人兴趣与职业选择之间找到更具体的连接。

02｜经验分享：让有价值的经验流动起来
以每月两场的节奏策划线上就业分享，覆盖互联网、金融、国央企等主题；负责选题、嘉宾邀约及内容沉淀。
借助真实的一手经验，让同学们更清楚地知道：为了职业目标，在不同成长阶段可以做哪些准备，以及真正进入求职后，哪些事情值得重点关注。

03｜生涯规划：预习求职旅程
组织学院职业规划大赛初赛，并推荐优秀选手参加校赛，负责赛事组织、选手沟通与现场执行。
比结果更重要的是，让参与者借这个过程完整梳理一次经历、能力与目标，对未来求职需要思考和准备的事情建立整体认知。

04｜就业社群：把服务延伸到活动之外
从 0 到 1 搭建 300+ 人就业社群，将原本分散在班级群里的实习、赛事与活动信息集中起来，并提供更及时的提醒与交流入口。
减少信息在层层转发中的损耗，让同学更方便地获取、追踪真正与自己相关的就业机会。`],
  ["项目成果", `10+ 场 活动 / 50+ 人 单场平均参与
300+ 人 就业社群 / 2 场/月 主题经验分享`],
  ["我的思考", "好的就业服务，不只是提供信息，而是让有价值的信息和资源更容易抵达真正需要的人。"],
];

const fourthWallLead = `最初的出发点来自秋招：我希望求职产品相关岗位，但已有经历并不完全垂直，因此想用一个真实项目补充对自己的展示。
在参考了一些个人网站与求职作品后，我发现自己并不想再做一份“网页简历”。相比只展示工作经历，我更希望这个网站回答一个更完整的问题：我是一个怎样的人。`;

const fourthWallWork = `01｜为什么是一个网站：先想清楚它要解决什么
从最初，我就希望它不只是简历的延伸，而是对自己的完整介绍。围绕这一目标重新组织内容，最终形成 Journey / Projects / Thoughts / Life 四个模块，分别呈现经历、实践、思考与生活。

02｜和 AI 一起做出来：把想法变成真实页面
主要借助 ChatGPT × Codex 完成网站搭建：ChatGPT 用于内容梳理、结构讨论与需求细化，Codex 负责页面、样式与交互实现。过程中不断把模糊的想法转化为明确需求，也逐渐理解 AI 的能力边界，以及哪些判断仍需要由自己负责。
同时，把这个项目作为一次 Vibe Coding 实践，持续调整与 AI 协作的方式，提高从想法到实现的效率。

03｜没有最终版：在一次次修改里逼近答案
网站能够正常使用之后，继续围绕内容顺序、信息密度、配色、图片、字体与交互细节进行迭代。每一次修改都基于同一个判断标准：它是否更清楚、更好用、更好看，也更准确地表达了我。`;

const renderHighlights = (text: string, highlights: string[]) => {
  const escaped = highlights.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(pattern).map((part, index) => highlights.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part);
};

type Point = { x: number; y: number };

export default function ProjectsShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const pointers = useRef(new Map<number, Point>());
  const dragOrigin = useRef<Point>({ x: 0, y: 0 });
  const offsetOrigin = useRef<Point>({ x: 0, y: 0 });
  const pinchDistance = useRef(0);
  const pinchScale = useRef(1);
  const pointerMoved = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selected = active === null ? null : projects[active];
  const selectedImages = selected?.no === "01"
    ? didiGallery
    : selected?.no === "02"
      ? platformGallery
      : selected
        ? [selected.image]
        : [];
  const selectedImageCount = selectedImages.length;
  const hasPreviousImage = galleryIndex > 0;
  const hasNextImage = galleryIndex < selectedImageCount - 1;
  const useNativeRatioPreview = selected?.no === "02"
    || (selected?.no === "01" && [1, 4, 5].includes(galleryIndex));

  useEffect(() => {
    const projectNo = new URLSearchParams(window.location.search).get("project");
    const projectIndex = projects.findIndex((project) => project.no === projectNo);
    if (projectIndex >= 0) {
      // The query string is an external source used to open a specific project on first load.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGalleryIndex(0);
      setLightbox(false);
      setScale(1);
      setOffset({ x: 0, y: 0 });
      setDragging(false);
      pointers.current.clear();
      setActive(projectIndex);
    }
  }, []);

  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setDragging(false);
    pointers.current.clear();
  };

  const updateScale = (next: number) => {
    const clamped = Math.min(4, Math.max(1, next));
    setScale(clamped);
    if (clamped === 1) setOffset({ x: 0, y: 0 });
  };

  const moveGallery = (direction: number) => {
    if ((direction < 0 && !hasPreviousImage) || (direction > 0 && !hasNextImage)) return;
    resetZoom();
    setGalleryIndex((current) => Math.min(selectedImageCount - 1, Math.max(0, current + direction)));
  };

  const openProject = (index: number) => {
    setGalleryIndex(0);
    setLightbox(false);
    resetZoom();
    setActive(index);
  };

  const closeLightbox = () => {
    resetZoom();
    setLightbox(false);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerMoved.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 1 && scale > 1) {
      setDragging(true);
      dragOrigin.current = { x: event.clientX, y: event.clientY };
      offsetOrigin.current = offset;
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchDistance.current = Math.hypot(a.x - b.x, a.y - b.y);
      pinchScale.current = scale;
      setDragging(false);
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (Math.hypot(event.clientX - dragOrigin.current.x, event.clientY - dragOrigin.current.y) > 5) pointerMoved.current = true;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDistance.current) updateScale(pinchScale.current * distance / pinchDistance.current);
    } else if (dragging && scale > 1) {
      setOffset({
        x: offsetOrigin.current.x + event.clientX - dragOrigin.current.x,
        y: offsetOrigin.current.y + event.clientY - dragOrigin.current.y,
      });
    }
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchDistance.current = 0;
    if (pointers.current.size === 0) setDragging(false);
  };

  const onStageClick = () => {
    if (pointerMoved.current) return;
    closeTimer.current = setTimeout(closeLightbox, 220);
  };

  const onStageDoubleClick = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    updateScale(scale === 1 ? 2 : 1);
  };

  useEffect(() => {
    if (active === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightbox) closeLightbox();
        else setActive(null);
        return;
      }
      if (selectedImageCount < 2 || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      moveGallery(direction);
    };
    // Lock the page behind the project dialog while it is open.
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // The handlers intentionally use the current gallery state listed below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, lightbox, selectedImageCount, galleryIndex]);

  return (
    <section className="projectsArchive" aria-labelledby="projects-title">
      <header className="projectsArchiveHeader">
        <div>
          <p>SELECTED WORK / 2025—2026</p>
          <h1 id="projects-title">实践档案</h1>
        </div>
        <span>PROJECT ARCHIVE · 04</span>
      </header>

      <div className="projectsArchiveGrid">
        {projects.map((project, index) => (
          <article className="projectArchiveCard" key={project.no}>
            <button className="projectArchiveOpen" type="button" onClick={() => openProject(index)} aria-label={`查看${project.prefix}${project.number}${project.title}`}>
              <figure>
                <img src={project.image} alt="项目图片占位" />
                <span>{project.no}</span>
              </figure>
              <div className="projectArchiveInfo">
                <h2><span className="projectTitleIcon" aria-hidden="true">{project.icon}</span><span className={`projectTitleCore${project.no === "04" ? " projectTitleCorePlain" : ""}`}>{project.prefix}<em>{project.number}</em></span>{project.title}</h2>
                <dl>
                  <dt>日期</dt>
                  <dd>{project.date}</dd>
                </dl>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div className="projectDetailModal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
          <article className="projectDetailPanel">
            <button className="projectDetailClose" type="button" onClick={() => setActive(null)} aria-label="关闭项目详情">×</button>
            <figure className="projectDetailVisual">
              <button className={`projectGalleryImage${useNativeRatioPreview ? " isNativeRatio" : ""}`} type="button" onClick={() => setLightbox(true)} aria-label="放大查看当前图片">
                <img src={selectedImages[galleryIndex]} alt={`${selected.prefix}${selected.number}${selected.title}项目图片 ${galleryIndex + 1}`} />
              </button>
              {selectedImages.length > 1 && (
                <>
                  <button className="projectGalleryArrow projectGalleryPrev" type="button" onClick={() => moveGallery(-1)} aria-label="上一张图片" disabled={!hasPreviousImage}>‹</button>
                  <button className="projectGalleryArrow projectGalleryNext" type="button" onClick={() => moveGallery(1)} aria-label="下一张图片" disabled={!hasNextImage}>›</button>
                  <span className="projectGalleryCount">{String(galleryIndex + 1).padStart(2, "0")} / {String(selectedImages.length).padStart(2, "0")}</span>
                </>
              )}
            </figure>
            <div className="projectDetailCopy">
              <p className="projectDetailEyebrow">PROJECT {selected.no} · {selected.date}</p>
              <h2 id="project-modal-title">{selected.no === "04" ? "打破第四面墙｜这个网站是怎么做出来的" : <><span>{selected.prefix}<em>{selected.number}</em></span>{selected.title}</>}</h2>
              <p className="projectDetailLead">{selected.no === "01"
                ? "滴滴第四届黑客松 D- Hacks - 面向全公司举办，以真实业务问题为赛题，通过集中创新的方式连接业务创新、组织协作与人才发现。"
                : selected.no === "02"
                  ? `围绕一次模型发布，参与开放平台及token plan的增长活动、开发者触达与配套服务，尝试让更多人了解平台、开始使用模型，也让已经进入平台的开发者获得更顺畅的服务体验。
一个模型发布之后，开放平台如何让模型能力真正走向用户。`
                  : selected.no === "03"
                    ? "围绕学生就业与职业发展，策划系列活动、拓展校企联系，让同学获得更多真实的行业信息、经验参考与职业探索机会。也为学院补充更丰富、更直接的就业资源。"
                    : renderHighlights(fourthWallLead, ["我是一个怎样的人"])}</p>
              {selected.no === "04" ? (
                <>
                  <div className="projectDetailSection">
                    <h3>我的角色 - 网站主理人</h3>
                    <p>产品定义｜内容策划｜Vibe Coding｜体验迭代</p>
                  </div>
                  <div className="projectDetailSection">
                    <h3>我做了什么</h3>
                    <p>{renderHighlights(fourthWallWork, ["而是对自己的完整介绍"])}</p>
                  </div>
                  <div className="projectDetailSection projectReferenceSection">
                    <h3>参考文献</h3>
                    <p>为了让网站在信息之外也保持舒适的视觉体验，我持续参考喜欢的网站、作品与视觉内容，并从中吸收页面结构、排版、留白、图片使用和交互方式的灵感。</p>
                    <ul>
                      <li>首页｜<a href="https://tosummer.cn/cn" target="_blank" rel="noreferrer">观夏官网</a>：参考大幅摄影、留白与首页整体氛围。</li>
                      <li>PROJECTS｜<a href="https://www.xiaohongshu.com/discovery/item/6909026600000000030119a0?source=webshare&amp;xhsshare=pc_web&amp;xsec_token=AB3d97MBmOciPLDyVhhoVjScT6K_tdwhS4QJAptODacOc=&amp;xsec_source=pc_share" target="_blank" rel="noreferrer">@林小淼的小红书文章</a>：参考 Blog / Archive 式的项目组织与呈现方式。</li>
                      <li>THOUGHTS｜<a href="https://www.lelabofragrances.com/santal-26.html" target="_blank" rel="noreferrer">LE LABO SANTAL 26</a>：参考文字、图片与留白之间的阅读节奏。</li>
                      <li>LIFE｜<span>微信朋友圈</span>：参考以图片为主、低解释成本的生活记录方式。</li>
                    </ul>
                  </div>
                  <div className="projectDetailSection">
                    <h3>我的思考：无论如何，不要丢掉自己</h3>
                    <p>这次实践让我更具体地理解了 AI 在创作过程中的作用：它显著降低了实现成本，但不会替代产品定义、判断与取舍。AI 可以帮助我更快地把想法做出来，而我仍需要回答：要解决什么问题、保留什么、删掉什么，以及最终想表达什么。</p>
                  </div>
                  <div className="projectEasterEggLink">
                    <a href="/projects/easter-egg">点击发现🎠 <span aria-hidden="true">↗</span></a>
                  </div>
                </>
              ) : (selected.no === "01" ? didiSections : selected.no === "02" ? platformSections : campusSections).map(([title, content]) => (
                <div className="projectDetailSection" key={title}>
                  <h3>{title}</h3>
                  {content && <p>{selected.no === "02" && title === "项目成果"
                    ? renderHighlights(content, ["300%+", "1,500+ 订单", "3 场", "200+"])
                    : content}</p>}
                </div>
              ))}
            </div>
          </article>
          {lightbox && (
            <div className="projectImageLightbox lifeZoomLightbox" role="dialog" aria-modal="true" aria-label="项目图片大图" onClick={closeLightbox}>
              <button className="projectLightboxClose" type="button" onClick={closeLightbox} aria-label="关闭大图">×</button>
              <div
                className={`lifeZoomStage${dragging ? " isDragging" : ""}${scale > 1 ? " isZoomed" : ""}`}
                onClick={(event) => { event.stopPropagation(); onStageClick(); }}
                onDoubleClick={(event) => { event.stopPropagation(); onStageDoubleClick(); }}
                onWheel={(event) => { event.preventDefault(); updateScale(scale + (event.deltaY < 0 ? .25 : -.25)); }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
              >
                <img
                  src={selectedImages[galleryIndex]}
                  alt={`${selected.prefix}${selected.number}${selected.title}项目大图 ${galleryIndex + 1}`}
                  draggable="false"
                  style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }}
                />
              </div>
              {selectedImages.length > 1 && (
                <>
                  <button className="projectLightboxArrow projectLightboxPrev" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(-1); }} aria-label="上一张图片" disabled={!hasPreviousImage}>‹</button>
                  <button className="projectLightboxArrow projectLightboxNext" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(1); }} aria-label="下一张图片" disabled={!hasNextImage}>›</button>
                  <span className="projectLightboxCount">{galleryIndex + 1} / {selectedImages.length}</span>
                </>
              )}
              <div className="lifeZoomControls" onClick={(event) => event.stopPropagation()} aria-label="图片缩放控制">
                <button type="button" onClick={() => updateScale(scale - .25)} aria-label="缩小图片">−</button>
                <span>{Math.round(scale * 100)}%</span>
                <button type="button" onClick={() => updateScale(scale + .25)} aria-label="放大图片">＋</button>
                <button type="button" onClick={resetZoom}>重置</button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
