import HeroCarousel from "./HeroCarousel";

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="monogram" href="#top" aria-label="回到首页">FP</a>
        <nav aria-label="主导航">
          <a href="/journey">JOURNEY</a><a href="/projects">PROJECTS</a><a href="/thoughts">THOUGHTS</a><a href="/life">LIFE</a>
        </nav>
        <div className="journeyHeaderRight">
          <div className="journeyIdentityTags" aria-label="个人身份标签"><span>27届</span><span>北师大统计学硕</span><span>中共党员</span></div>
          <a className="headerResume" href="/wang-fangpu-resume.pdf" download="王方浦-27届-北师大统计学硕.pdf">DOWNLOAD CV <span>↓</span></a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <HeroCarousel />
        <div className="heroCopy">
          <div className="heroIdentity">
            <h1 className="heroName" id="hero-title"><span>你好，我是王方浦</span></h1>
            <p className="heroTagline">Welcome to my world.</p>
          </div>
          <a className="enterLink" href="#about">EXPLORE <span>→</span></a>
        </div>
      </section>

      <section className="aboutPage pageFrame" id="about">
        <div className="journeyCoverCopy">
          <h2><span className="journeyTitleCn"><span>行</span><span>迹</span></span><em><span>on</span><span>the</span><span>way</span></em></h2>
          <p><strong>从校园到职场，一段关于成长的时间线。</strong><br />记录了我学习经历、实习经历，以及每一次重要的选择与转折。每一段经历都有它存在的意义，也共同塑造了今天的我。</p>
          <a href="/journey"><span className="journeyLinkText">查看我的时间线</span><span className="journeyChevron" aria-hidden="true" /></a>
        </div>
        <figure className="journeyCoverImage"><img src="/journey-campus.jpg" alt="校园建筑与草木景观" /></figure>
      </section>

      <section className="homeEditorialCover pageFrame coverPractice" id="journey">
        <div className="homeEditorialCopy">
          <h2><span>实践</span><em>in practice</em></h2>
          <p><strong>真实项目的完整记录，也是成长的过程。</strong><br />收录了我参与过的校园项目、实习实践以及个人作品，不仅记录做了什么，也记录为什么这样做、最终取得了什么结果，以及我从中获得了哪些新的思考。</p>
          <a href="/projects"><span>让我成长的项目</span><i aria-hidden="true" /></a>
        </div>
        <figure className="homeEditorialImage"><img src="/home-practice.jpg" alt="项目活动现场的电脑与工作材料" /></figure>
      </section>

      <section className="homeEditorialCover pageFrame coverReflection" id="projects">
        <div className="homeEditorialCopy">
          <h2><span>所思</span><em>in reflection</em></h2>
          <p><strong>有些问题没有标准答案，但依旧值得反复思考</strong><br />不是具体的项目复盘，也不是成长鸡汤，而是一路走来逐渐形成的认知：关于 AI、关于工作，以及关于如何认识自己。</p>
          <a href="/thoughts"><span>从思考中探索答案</span><i aria-hidden="true" /></a>
        </div>
        <figure className="homeEditorialImage"><img src="/home-reflection.jpg" alt="AI 产品体验与分类活动展板" /></figure>
      </section>

      <section className="homeEditorialCover pageFrame coverDaily" id="life">
        <div className="homeEditorialCopy">
          <h2><span>日常</span><em>beyond work</em></h2>
          <p><strong>工作之外，让我成为自己的日常。</strong><br />旅行、摄影、音乐、Citywalk、美食……这里记录生活里的小事，也是我获取灵感、保持好奇心和感受世界的方式。</p>
          <a href="/life"><span>和我一起热爱生活</span><i aria-hidden="true" /></a>
        </div>
        <figure className="homeEditorialImage"><img src="/home-daily.jpg" alt="演唱会现场的彩色纸屑与观众" /></figure>
      </section>

      <footer id="contact">
        <div className="footerMain"><h2>未完待续…</h2><p>好奇 · 思考 · 探索 · 热爱</p><a href="mailto:aishawang02@163.com">aishawang02@163.com <span>↗</span></a></div>
        <div className="footerBottom"><span>© 2026 FANGPU</span><span>MADE WITH CHATGPT &amp; CODEX</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
