import Link from "next/link";
import LifeFeed from "./LifeFeed";

export default function LifePage() {
  return (
    <main className="lifeMoments lifeMomentsSimple">
      <header className="siteHeader journeyDetailSiteHeader">
        <Link className="monogram" href="/" aria-label="返回主页">FP</Link>
        <nav aria-label="主导航"><a href="/journey">JOURNEY</a><a href="/projects">PROJECTS</a><a href="/thoughts">THOUGHTS</a><a className="isActive" href="/life" aria-current="page">LIFE</a></nav>
        <div className="journeyHeaderRight"><div className="journeyIdentityTags" aria-label="个人身份标签"><span>27届</span><span>北师大统计学硕</span><span>中共党员</span></div><a className="headerResume" href="/wang-fangpu-resume.pdf" download>DOWNLOAD CV <span>↓</span></a></div>
      </header>
      <LifeFeed />
    </main>
  );
}
