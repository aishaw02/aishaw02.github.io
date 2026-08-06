const journeys = [
  {
    index: "01",
    period: "统计学 · 起点",
    title: "从数据开始，学习理解问题",
    text: "统计学训练让我习惯先拆解问题、寻找证据，再做判断。后来我把这种方式带进了产品与运营工作。",
  },
  {
    index: "02",
    period: "滴滴出行 · 技术运营",
    title: "第一次走进开发者的世界",
    text: "参与内部开发者 Hackathon 的全流程运营：从数据看板、分层触达到 24 小时总决赛，认识到好的体验藏在每一个流程细节里。",
  },
  {
    index: "03",
    period: "StepFun · 开放平台运营",
    title: "在真实约束里，把想法落地",
    text: "围绕开发者增长、生态与服务展开工作，也独立承接 Step Plan 海外版本适配，在渠道、触达和权益规则之间做取舍。",
  },
];

const projects = [
  {
    number: "01",
    tag: "GLOBAL LAUNCH",
    title: "Step Plan 海外版本",
    line: "不只是翻译，而是一次产品适配。",
    detail: "结合海外团队反馈与资源约束，重新梳理推广渠道、用户触达和权益规则，支持产品完成海外冷启动。",
    tone: "sage",
  },
  {
    number: "02",
    tag: "DEVELOPER EXPERIENCE",
    title: "开发者 Hackathon",
    line: "让 537 位参赛者顺畅走完整段旅程。",
    detail: "覆盖 44 个一级部门、144 支队伍。从零搭建全链路数据看板，并把报名、组队、答疑与决赛现场连成一个完整体验。",
    tone: "clay",
  },
  {
    number: "03",
    tag: "SERVICE DESIGN",
    title: "让服务少一点重复劳动",
    line: "从日常问题里，看见可以被优化的流程。",
    detail: "梳理退款、开票等开发者服务场景，并调研 AI 客服 Bot，探索流程优化与自动化的合理边界。",
    tone: "paper",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">FP<span>.</span></a>
        <div className="navLinks">
          <a href="#about">关于我</a>
          <a href="#journey">经历</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> OPEN TO NEW POSSIBILITIES</p>
          <h1>Hello.<br />I&apos;m <em>Fangpu.</em></h1>
          <p className="intro">很高兴认识你。这里记录我的经历、思考，以及一些真正让我感兴趣的事情。</p>
          <div className="heroActions">
            <a className="primary" href="#journey">认识我 <span>↘</span></a>
            <a className="textLink" href="#projects">看看我的工作 <span>→</span></a>
          </div>
        </div>
        <div className="portrait" aria-label="照片占位区">
          <div className="sun" />
          <div className="leaf leafOne" /><div className="leaf leafTwo" />
          <div className="portraitCard">
            <span className="portraitInitials">FP</span>
            <p>一张你喜欢的<br />生活照片会放在这里</p>
          </div>
          <p className="scribble">still figuring<br />things out ✦</p>
        </div>
      </section>

      <section className="ticker" aria-label="个人关键词">
        <div>CURIOUS MIND <i>✦</i> PRODUCT THINKER <i>✦</i> AI EXPLORER <i>✦</i> LIFE LOVER <i>✦</i> CURIOUS MIND</div>
      </section>

      <section className="about shell section" id="about">
        <div>
          <p className="kicker">A LITTLE ABOUT ME</p>
          <h2>一个热爱生活的人，<br />在认真探索 <em>AI。</em></h2>
        </div>
        <div className="aboutText">
          <p>我喜欢把复杂问题拆开，找到其中真正重要的部分，再用产品与运营的方式把事情推进下去。</p>
          <p>比起“成为某一种人”，我更享受持续学习和观察：读书、旅行、听音乐，也在真实的项目里理解开发者、平台与 AI。</p>
          <blockquote>“希望做的产品、过的生活，都有一点温度。”</blockquote>
        </div>
      </section>

      <section className="journey section" id="journey">
        <div className="shell">
          <p className="kicker">MY JOURNEY</p>
          <div className="sectionHeading"><h2>每一段经历，<br />都让我多理解一点。</h2><p>不是一条预先写好的路线，<br />更像是一路好奇、一路靠近。</p></div>
          <div className="timeline">
            {journeys.map((item) => (
              <article className="journeyItem" key={item.index}>
                <span className="index">{item.index}</span>
                <p className="period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects shell section" id="projects">
        <p className="kicker">SELECTED WORK</p>
        <div className="sectionHeading"><h2>一些我认真做过的事。</h2><p>我更想讲清楚：问题是什么，<br />我如何判断，以及学到了什么。</p></div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard ${project.tone}`} key={project.number}>
              <div className="projectTop"><span>{project.number}</span><span>{project.tag}</span></div>
              <div className="projectMark" aria-hidden="true"><span>{project.number}</span></div>
              <h3>{project.title}</h3>
              <strong>{project.line}</strong>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="loves section">
        <div className="shell loveGrid">
          <div><p className="kicker">THINGS I LOVE</p><h2>工作之外，<br />也是生活之中。</h2></div>
          <div className="loveList">
            <p><span>01</span><strong>旅行</strong><small>在陌生地方重新观察日常</small></p>
            <p><span>02</span><strong>阅读</strong><small>最近总在产品与人之间来回</small></p>
            <p><span>03</span><strong>音乐</strong><small>给普通的一天加一点背景声</small></p>
            <p><span>04</span><strong>创造</strong><small>用 AI 把脑海里的小想法做出来</small></p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footerInner">
          <p className="kicker">SAY HELLO</p>
          <h2>如果你也对产品、AI<br />或生活里的小事感兴趣，<br /><em>欢迎来聊聊。</em></h2>
          <a className="primary" href="mailto:hello@example.com">写封邮件 <span>↗</span></a>
          <div className="footerBottom"><span>© 2026 Fangpu</span><span>Made with curiosity &amp; a lot of coffee.</span><a href="#top">回到顶部 ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
