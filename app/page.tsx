const journeys = [
  { no: "01", year: "2024", label: "STATISTICS / BEGINNING", title: "从数据开始", text: "学习拆解问题、寻找证据，再做判断。" },
  { no: "02", year: "2025", label: "DIDI / TECH OPERATIONS", title: "走进开发者的世界", text: "把报名、组队、答疑与决赛连成完整体验。" },
  { no: "03", year: "2026", label: "STEPFUN / OPEN PLATFORM", title: "把想法落地", text: "在渠道、触达和权益规则之间做真实取舍。" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="monogram" href="#top" aria-label="回到首页">FP</a>
        <nav aria-label="主导航">
          <a href="#about">ABOUT</a><a href="#journey">JOURNEY</a><a href="#projects">PROJECTS</a><a href="#life">LIFE</a>
        </nav>
        <a className="headerResume" href="/wang-fangpu-resume.pdf" download="王方浦-个人简历.pdf">DOWNLOAD CV <span>↓</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroImage" role="img" aria-label="夏日林间水面旁的身影" />
        <div className="heroCopy">
          <div>
            <h1 id="hero-title">Hello, I&apos;m Fangpu.</h1>
            <p className="helloCn">很高兴认识你，我是王方浦</p>
          </div>
          <a className="enterLink" href="#about">ENTER <span>→</span></a>
        </div>
      </section>

      <section className="aboutPage pageFrame" id="about">
        <div className="pageTop"><span>01 / ABOUT</span><span>关于我</span></div>
        <aside className="aboutAside"><strong>FANGPU</strong><p>Product &amp; Growth<br />Explorer of AI<br />Based in Beijing</p><i>—</i></aside>
        <h2>一个热爱生活的人，<br />在认真探索 AI。</h2>
        <figure className="aboutPortrait"><img src="/life-garden.jpg" alt="夏日园林中的个人生活照片" /></figure>
        <p className="aboutNote">我喜欢把复杂问题拆开，找到真正重要的部分，再用产品与运营的方式把事情推进下去。</p>
        <p className="aboutMotto">STAY CURIOUS.<br />BUILD WITH WARMTH.</p>
        <span className="coordinates">39.9042° N<br />116.4074° E</span>
      </section>

      <section className="journeyPage pageFrame" id="journey">
        <div className="pageTop"><span>02 / JOURNEY</span><span>经历</span></div>
        <div className="journeyIntro"><h2>三段经历，<br />一条持续靠近的路。</h2><p>不是预先写好的路线，<br />而是一路好奇、一路理解。</p></div>
        <div className="timeline" aria-label="经历时间线">
          {journeys.map((item) => <article className="timelineItem" key={item.no}>
            <span className="timelineYear">{item.year}</span><span className="timelineDot" />
            <div className="timelineCopy"><b>{item.no}</b><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>)}
        </div>
        <p className="journeyFoot">THREE MOMENTS.<br />ONE CONTINUOUS PATH.</p>
      </section>

      <section className="projectPage pageFrame" id="projects">
        <div className="pageTop"><span>03 / PROJECTS</span><span>项目</span></div>
        <div className="projectTabs" aria-label="项目索引"><b>01</b><span>/</span><span>02</span><span>/</span><span>03</span></div>
        <div className="projectFeature">
          <div className="projectNarrative"><span className="projectNo">01</span><h2>Step Plan<br />海外版本</h2><p className="projectLead">不只是翻译，而是一次产品适配。</p><p>结合海外团队反馈与资源约束，重新梳理推广渠道、用户触达与权益规则，支持产品完成海外冷启动。</p><a href="#contact">VIEW CASE STUDY <span>→</span></a></div>
          <div className="projectVisual" aria-label="Step Plan 项目视觉示意"><div className="caseLabel">STEP PLAN<br /><small>GLOBAL LAUNCH / 2026</small></div><div className="caseCard"><span>PLAN</span><strong>Ideas travel.<br />Products adapt.</strong><i>01 / 03</i></div></div>
        </div>
        <div className="decisionStrip"><div><b>01</b><span>渠道洞察</span><p>识别海外用户真正可触达的入口。</p></div><div><b>02</b><span>设计决策</span><p>在资源与体验之间确认优先级。</p></div><div><b>03</b><span>结果影响</span><p>让产品更自然地进入新环境。</p></div></div>
      </section>

      <section className="lifePage pageFrame" id="life">
        <div className="pageTop"><span>04 / LIFE</span><span>生活</span></div>
        <h2>工作之外，<br />也是生活之中。</h2>
        <figure className="lifeShot shotOne"><img src="/hero-photo.jpg" alt="林间水面与人物" /><figcaption>旅行 / 重新观察日常</figcaption></figure>
        <figure className="lifeShot shotTwo"><img src="/life-sunset.jpg" alt="海边夕阳" /><figcaption>音乐 / 给一天加一点背景声</figcaption></figure>
        <figure className="lifeShot shotThree"><img src="/life-garden.jpg" alt="夏日园林" /><figcaption>创造 / 把小想法做出来</figcaption></figure>
        <div className="lifeWords"><p><span>01</span>旅行<small>TRAVEL</small></p><p><span>02</span>阅读<small>READING</small></p><p><span>03</span>音乐<small>MUSIC</small></p><p><span>04</span>创造<small>CREATE</small></p></div>
        <p className="lifeNote">记录生活，<br />也记录温度。</p>
      </section>

      <footer id="contact">
        <div className="sectionIndex"><span>05 / CONTACT</span><span>BEIJING · CHINA</span></div>
        <div className="footerMain"><h2>欢迎来聊聊。</h2><p>如果你也对产品、AI，或生活里的小事感兴趣。</p><a href="mailto:hello@example.com">HELLO@EXAMPLE.COM <span>↗</span></a></div>
        <div className="footerBottom"><span>© 2026 FANGPU</span><span>MADE WITH CURIOSITY.</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
