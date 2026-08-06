const journeys = [
  { no: "01", meta: "STATISTICS / BEGINNING", year: "起点", title: "从数据开始，学习理解问题", text: "统计学训练让我习惯先拆解问题、寻找证据，再做判断。后来，我把这种方式带进了产品与运营工作。" },
  { no: "02", meta: "DIDI / TECH OPERATIONS", year: "2025.07—11", title: "第一次走进开发者的世界", text: "参与内部开发者 Hackathon 全流程运营，从数据看板、分层触达到 24 小时总决赛，理解体验如何藏在流程细节里。" },
  { no: "03", meta: "STEPFUN / OPEN PLATFORM", year: "2026", title: "在真实约束里，把想法落地", text: "围绕开发者增长、生态与服务展开工作，并承接 Step Plan 海外适配，在渠道、触达和权益规则之间做取舍。" },
];

const projects = [
  { no: "01", type: "GLOBAL LAUNCH", title: "Step Plan 海外版本", lead: "不只是翻译，而是一次产品适配。", text: "结合海外团队反馈与资源约束，重新梳理推广渠道、用户触达与权益规则，支持产品完成海外冷启动。", stat: "3 / CORE DECISIONS" },
  { no: "02", type: "DEVELOPER EXPERIENCE", title: "开发者 Hackathon", lead: "让 537 位参赛者顺畅走完整段旅程。", text: "覆盖 44 个一级部门、144 支队伍。从零搭建全链路数据看板，把报名、组队、答疑与决赛连成完整体验。", stat: "537 / PARTICIPANTS" },
  { no: "03", type: "SERVICE DESIGN", title: "让服务少一点重复劳动", lead: "从日常问题里，看见可以被优化的流程。", text: "梳理退款、开票等开发者服务场景，并调研 AI 客服 Bot，探索流程优化与自动化的合理边界。", stat: "AI / WORKFLOW" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="monogram" href="#top" aria-label="回到首页">FP</a>
        <nav aria-label="主导航">
          <a href="#about">ABOUT</a><a href="#journey">JOURNEY</a><a href="#projects">PROJECTS</a><a href="#life">LIFE</a>
        </nav>
        <span className="indexLabel">PERSONAL INDEX / 2026</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroImage" role="img" aria-label="树影、水面与白色织物组成的夏日画面" />
        <div className="heroCopy">
          <div>
            <h1 id="hero-title">Hello, I&apos;m Fangpu.</h1>
            <p className="helloCn">很高兴认识你。</p>
            <p className="heroIntro">在产品、AI 与生活之间，保持好奇。</p>
            <p className="heroMeta">PRODUCT · AI · LIFE</p>
          </div>
          <a className="enterLink" href="#about">ENTER <span>→</span></a>
        </div>
      </section>

      <section className="introGrid" id="about">
        <div className="sectionIndex"><span>01 / ABOUT</span><span>WHO I AM</span></div>
        <div className="introTitle"><h2>一个热爱生活的人，<br />在认真探索 AI。</h2></div>
        <div className="introText">
          <p>我喜欢把复杂问题拆开，找到真正重要的部分，再用产品与运营的方式把事情推进下去。</p>
          <p>比起成为某一种人，我更享受持续学习和观察：读书、旅行、听音乐，也在真实项目里理解开发者、平台与 AI。</p>
          <p className="quote">希望做的产品、过的生活，<br />都有一点温度。</p>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="sectionIndex"><span>02 / JOURNEY</span><span>THREE CHAPTERS</span></div>
        <div className="sectionLead"><h2>每一段经历，<br />都让我多理解一点。</h2><p>不是一条预先写好的路线，<br />更像是一路好奇、一路靠近。</p></div>
        <div className="journeyList">
          {journeys.map((item) => <article className="journeyRow" key={item.no}>
            <span className="rowNo">{item.no}</span><div className="rowMeta"><span>{item.meta}</span><small>{item.year}</small></div><h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="sectionIndex"><span>03 / SELECTED WORK</span><span>PRODUCT · PLATFORM · PEOPLE</span></div>
        <div className="sectionLead"><h2>一些我认真做过的事。</h2><p>问题是什么，如何判断，<br />以及这件事改变了我什么。</p></div>
        <div className="projectList">
          {projects.map((project) => <article className="projectRow" key={project.no}>
            <div className="projectId"><strong>{project.no}</strong><span>{project.type}</span></div>
            <div className="projectBody"><h3>{project.title}</h3><h4>{project.lead}</h4><p>{project.text}</p></div>
            <span className="projectStat">{project.stat}</span>
          </article>)}
        </div>
      </section>

      <section className="life" id="life">
        <div className="lifeImage" role="img" aria-label="树影下的一杯水，记录夏日生活" />
        <div className="lifeCopy">
          <div className="sectionIndex"><span>04 / RECENT LIFE</span><span>OFF THE CLOCK</span></div>
          <h2>工作之外，<br />也是生活之中。</h2>
          <div className="lifeList"><p><span>01</span>旅行<small>在陌生地方重新观察日常</small></p><p><span>02</span>阅读<small>在产品与人之间来回</small></p><p><span>03</span>音乐<small>给普通的一天加一点背景声</small></p><p><span>04</span>创造<small>用 AI 把小想法做出来</small></p></div>
        </div>
      </section>

      <footer id="contact">
        <div className="sectionIndex"><span>05 / CONTACT</span><span>BEIJING · CHINA</span></div>
        <div className="footerMain"><h2>欢迎来聊聊。</h2><p>如果你也对产品、AI，或生活里的小事感兴趣。</p><a href="mailto:hello@example.com">HELLO@EXAMPLE.COM <span>↗</span></a></div>
        <div className="footerBottom"><span>© 2026 FANGPU</span><span>MADE WITH CURIOSITY.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
