"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/hero-photo-water-sunset.jpg", label: "晚霞下的山与水面", position: "50% 48%", shade: 0 },
  { src: "/hero-slide-lake.jpg", label: "树影与湖面前举手的剪影", position: "50% 50%", shade: 0.1 },
  { src: "/hero-slide-garden-collage.webp", label: "夏日园林中的影像拼贴", position: "50% 50%", shade: 0.1 },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const move = (step: 1 | -1) => {
    setPreviousSlide(current);
    setDirection(step === 1 ? "forward" : "backward");
    setCurrent((current + step + slides.length) % slides.length);
  };
  const previous = () => move(-1);
  const next = () => move(1);

  useEffect(() => {
    if (hovered || focused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setPreviousSlide(current);
      setDirection("forward");
      setCurrent((current + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [hovered, focused, current]);

  return (
    <div
      className={`heroCarousel is${direction === "forward" ? "Forward" : "Backward"}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={`首页照片：${slides[current].label}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 45) {
          if (distance > 0) previous();
          else next();
        }
        touchStart.current = null;
      }}
    >
      {slides.map((slide, index) => (
        <div
          className={`heroImage heroSlide${index === current ? " isActive" : ""}${index === previousSlide ? " isLeaving" : ""}`}
          key={slide.src}
          aria-hidden={index !== current}
          style={{
            backgroundImage: `linear-gradient(rgba(7,13,10,${slide.shade}),rgba(7,13,10,${slide.shade})),url(${slide.src})`,
            backgroundPosition: slide.position,
          }}
        />
      ))}
      <button className="carouselArrow carouselPrevious" type="button" onClick={previous} aria-label="上一张照片">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>
      <button className="carouselArrow carouselNext" type="button" onClick={next} aria-label="下一张照片">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
      <span className="carouselCount" aria-live="polite">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
    </div>
  );
}
