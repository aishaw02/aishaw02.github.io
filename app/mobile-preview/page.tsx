"use client";

import { useState } from "react";

const routes = [
  ["HOME", "/"],
  ["JOURNEY", "/journey"],
  ["PROJECTS", "/projects"],
  ["THOUGHTS", "/thoughts"],
  ["LIFE", "/life"],
] as const;

export default function MobilePreviewPage() {
  const [route, setRoute] = useState("/");
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <main className="mobilePreviewPage">
      <header className="mobilePreviewToolbar">
        <div>
          <p>LOCAL RESPONSIVE PREVIEW</p>
          <h1>手机端视图</h1>
        </div>
        <nav aria-label="选择预览页面">
          {routes.map(([label, href]) => (
            <button
              className={route === href ? "isActive" : undefined}
              type="button"
              onClick={() => setRoute(href)}
              key={href}
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="mobilePreviewReload" type="button" onClick={() => setReloadKey((key) => key + 1)}>
          REFRESH ↻
        </button>
      </header>

      <section className="mobilePreviewStage" aria-label="1179 × 2556 像素手机预览">
        <div className="mobilePreviewDevice">
          <div className="mobilePreviewSpeaker" aria-hidden="true" />
          <iframe
            key={`${route}-${reloadKey}`}
            src={route}
            title={`${routes.find((item) => item[1] === route)?.[0]} 手机端预览`}
          />
          <div className="mobilePreviewHomeBar" aria-hidden="true" />
        </div>
        <p>1179 × 2556 PX · 3× · 内部链接可直接点击</p>
      </section>
    </main>
  );
}
