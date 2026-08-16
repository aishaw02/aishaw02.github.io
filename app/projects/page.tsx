import Link from "next/link";
import ProjectsShowcase from "./ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <main className="projectsDetail">
      <header className="siteHeader journeyDetailSiteHeader">
        <Link className="monogram" href="/" aria-label="返回主页">FP</Link>
        <nav aria-label="主导航">
          <a href="/journey">JOURNEY</a>
          <a className="isActive" href="/projects" aria-current="page">PROJECTS</a>
          <a href="/thoughts">THOUGHTS</a>
          <a href="/life">LIFE</a>
        </nav>
        <div className="journeyHeaderRight">
          <div className="journeyIdentityTags" aria-label="个人身份标签"><span>27届</span><span>北师大统计学硕</span><span>中共党员</span></div>
          <a className="headerResume" href="/wang-fangpu-resume.pdf" download="王方浦-27届-北师大统计学硕.pdf">DOWNLOAD CV <span>↓</span></a>
        </div>
      </header>
      <ProjectsShowcase />
    </main>
  );
}
