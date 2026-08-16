"use client";

import { useEffect, useRef, useState } from "react";

const firstGroupImages = [
  "/life-group-01-01.jpg",
  "/life-group-01-02.jpg",
  "/life-group-01-03.jpg",
  "/life-group-01-04.jpg",
  "/life-group-01-05.jpg",
  "/life-group-01-06.jpg",
  "/life-group-01-07.jpg",
  "/life-group-01-08.jpg",
  "/life-group-01-09.jpg",
] as const;

const secondGroupImages = [
  "/life-group-02-01.jpg",
  "/life-group-02-02.jpg",
  "/life-group-02-03.jpg",
  "/life-group-02-04.jpg",
  "/life-group-02-05.jpg",
  "/life-group-02-06.jpg",
  "/life-group-02-07.jpg",
  "/life-group-02-08.jpg",
  "/life-group-02-09.jpg",
] as const;

const moments = [
  { day: "12", month: "8月", fullDate: "2026年8月12日 19:23", text: "摄影师修炼中 📸（进度10%）", note: "很喜欢用相机记录那些让我想停下来的瞬间\n尤其喜欢动物、花和大海，\n一直想要苦练摄影技术，但依旧停留在自动挡阶段\n参数和技巧不妨碍我发现生活的美", count: 9, tone: "momentWarm", images: firstGroupImages },
  { day: "12", month: "8月", fullDate: "2026年8月12日 16:08", text: "生活花絮 📼", note: "也在认真记录和感受平凡的每一天\n下雪时感受历史的厚重，散步时收集琐碎的幸福，用甜品和奶茶给奖励自己\n也和朋友和家人在一起度过幸福时光", count: 9, tone: "momentGreen", images: secondGroupImages },
];

const thirdGroupImages = [
  "/life-group-03-01.jpg",
  "/life-group-03-02.jpg",
  "/life-group-03-03.jpg",
  "/life-group-03-04.jpg",
  "/life-group-03-05.jpg",
  "/life-group-03-06.jpg",
  "/life-group-03-07.jpg",
  "/life-group-03-08.jpg",
  "/life-group-03-09.jpg",
];

const fourthGroupImages = [
  "/life-group-04-01.jpg",
  "/life-group-04-02.jpg",
  "/life-group-04-03.jpg",
  "/life-group-04-04.jpg",
  "/life-group-04-05.jpg",
  "/life-group-04-06.jpg",
  "/life-group-04-07.jpg",
  "/life-group-04-08.jpg",
  "/life-group-04-09.jpg",
];

const photoGroups = [
  { number: 3, label: "第三组", day: "15", month: "8月", title: "音乐是生活的解药 🎸", note: "喜欢各种风格的音乐，也喜欢奔赴现场暂时忘掉生活的琐碎和烦恼\n但体力只允许奔赴附近的城市hh 但只要走进现场，我就是最嗨的！", images: thirdGroupImages },
  { number: 4, label: "第四组", day: "15", month: "8月", title: "早Coffee晚Alcohol ☕️🍹", note: "周末的时候喜欢走进街头巷尾，探索好喝的咖啡，也在夜晚降临时走进酒馆vibe一下", images: fourthGroupImages },
] as const;

type GalleryState = { group: 1 | 2 | 3 | 4; index: number };
type Point = { x: number; y: number };

export default function LifeFeed() {
  const [active, setActive] = useState<number | null>(null);
  const [detailGroup, setDetailGroup] = useState<3 | 4 | null>(null);
  const [gallery, setGallery] = useState<GalleryState | null>(null);
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
  const galleryImages = gallery?.group === 1
    ? firstGroupImages
    : gallery?.group === 2
      ? thirdGroupImages
      : gallery?.group === 3
        ? fourthGroupImages
        : secondGroupImages;
  const galleryLabel = gallery === null ? "" : `第${gallery.group}组`;
  const hasPreviousImage = gallery !== null && gallery.index > 0;
  const hasNextImage = gallery !== null && gallery.index < galleryImages.length - 1;
  const overlayOpen = active !== null || detailGroup !== null || gallery !== null;

  useEffect(() => {
    if (!overlayOpen) return;

    const scrollY = window.scrollY;
    const previous = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = previous.overflow;
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [overlayOpen]);

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

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (gallery !== null) setGallery(null);
        else if (detailGroup !== null) setDetailGroup(null);
        else setActive(null);
        return;
      }
      if (gallery === null || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      if ((direction < 0 && gallery.index === 0) || (direction > 0 && gallery.index === galleryImages.length - 1)) return;
      setScale(1);
      setOffset({ x: 0, y: 0 });
      setDragging(false);
      pointers.current.clear();
      setGallery((current) => current === null ? null : {
        ...current,
        index: Math.min(galleryImages.length - 1, Math.max(0, current.index + direction)),
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detailGroup, gallery, galleryImages.length]);

  const moveGallery = (direction: number) => {
    if ((direction < 0 && !hasPreviousImage) || (direction > 0 && !hasNextImage)) return;
    resetZoom();
    setGallery((current) => current === null ? null : {
      ...current,
      index: Math.min(galleryImages.length - 1, Math.max(0, current.index + direction)),
    });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerMoved.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 1) {
      dragOrigin.current = { x: event.clientX, y: event.clientY };
      offsetOrigin.current = offset;
      if (scale > 1) setDragging(true);
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
    const wasSinglePointer = pointers.current.size === 1;
    const swipeX = event.clientX - dragOrigin.current.x;
    const swipeY = event.clientY - dragOrigin.current.y;
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchDistance.current = 0;
    if (pointers.current.size === 0) setDragging(false);
    if (wasSinglePointer && scale === 1 && Math.abs(swipeX) > 48 && Math.abs(swipeX) > Math.abs(swipeY)) {
      moveGallery(swipeX > 0 ? -1 : 1);
    }
  };

  const closeGallery = () => {
    resetZoom();
    setGallery(null);
  };

  const onStageClick = () => {
    if (pointerMoved.current) return;
    closeTimer.current = setTimeout(closeGallery, 220);
  };

  const onStageDoubleClick = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    updateScale(scale === 1 ? 2 : 1);
  };

  const renderMoment = (moment: (typeof moments)[number], index: number) => (
    <button className="lifeFeedEntry" key={moment.fullDate} onClick={() => setActive(index)} aria-label={`查看 ${moment.fullDate} 的生活动态`}>
      <time><b>{moment.day}</b><span>{moment.month}</span></time>
      <div className={`momentPhotoGrid ${moment.tone}${moment.images ? " isNineGrid" : ""}`}>
        {moment.images
          ? moment.images.map((image, imageIndex) => <figure key={image}><img src={image} alt={`${moment.fullDate}生活照片 ${imageIndex + 1}`} /></figure>)
          : Array.from({ length: moment.count }, (_, i) => <figure key={i}><span>IMAGE {i + 1}</span></figure>)}
      </div>
      <div className="lifeFeedCopy"><strong>{moment.text}</strong><p>{moment.note}</p><small>{moment.fullDate}</small></div>
    </button>
  );

  return (
    <>
      <section className="lifeFeedPage" aria-labelledby="life-title">
        <header className="lifeFeedIdentity">
          <img src="/life-avatar.jpg" alt="戴着眼镜和耳机的绿色玩偶头像" />
          <div><p>LIFE / MOMENTS</p><h1 id="life-title">IshA</h1><span>不要东张西望</span></div>
          <aside className="lifeShareQr"><img src="/life-qr.jpg" alt="分享朋友圈二维码" /><span>扫一扫，分享朋友圈</span></aside>
        </header>
        <div className="lifeFeedList">
          {renderMoment(moments[0], 0)}
          {photoGroups.map((group) => (
            <button className="lifeNineGridEntry" type="button" aria-label={`查看${group.label}生活照片详情`} key={group.number} onClick={() => setDetailGroup(group.number)}>
              <time><b>{group.day}</b><span>{group.month}</span></time>
              <div className="lifeNineGrid">
                {group.images.map((image, index) => (
                  <figure key={image}><img src={image} alt={`${group.label}生活照片 ${index + 1}`} /></figure>
                ))}
              </div>
              <div className="lifeFeedCopy lifeGroupCopy"><strong>{group.title}</strong><p>{group.note}</p></div>
            </button>
          ))}
          {renderMoment(moments[1], 1)}
        </div>
      </section>

      {active !== null && (
        <div className="momentModal" role="dialog" aria-modal="true" aria-label="生活动态详情" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
          <article className="momentModalCard lifeGroupDetailCard">
            <div className="lifeMobileDetailBar">
              <button type="button" onClick={() => setActive(null)} aria-label="返回 Life 列表">‹</button>
              <strong>详情</strong>
              <span aria-hidden="true">•••</span>
            </div>
            <button className="momentModalClose" onClick={() => setActive(null)} aria-label="关闭详情">×</button>
            <div className="lifeGroupDetailBody">
              <img className="lifeGroupDetailAvatar" src="/life-avatar.jpg" alt="" />
              <div className="lifeGroupDetailContent">
                <header><div><h2>IshA</h2><p>{moments[active].text}</p></div></header>
                <p className="lifeMomentDetailNote">{moments[active].note}</p>
                <div className="lifeGroupDetailGrid lifeMomentDetailGrid">
                  {moments[active].images
                    ? moments[active].images.map((image, imageIndex) => (
                      <button type="button" key={image} onClick={() => setGallery({ group: active === 0 ? 1 : 4, index: imageIndex })} aria-label={`放大查看生活照片 ${imageIndex + 1}`}>
                        <img src={image} alt={`${moments[active].fullDate}生活照片 ${imageIndex + 1}`} />
                      </button>
                    ))
                    : Array.from({ length: moments[active].count }, (_, i) => <figure key={i}><span>IMAGE {i + 1}</span></figure>)}
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {detailGroup !== null && (
        <div className="momentModal" role="dialog" aria-modal="true" aria-label={`${detailGroup === 3 ? "第三组" : "第四组"}生活照片详情`} onMouseDown={(event) => event.target === event.currentTarget && setDetailGroup(null)}>
          <article className="momentModalCard lifeGroupDetailCard">
            <div className="lifeMobileDetailBar">
              <button type="button" onClick={() => setDetailGroup(null)} aria-label="返回 Life 列表">‹</button>
              <strong>详情</strong>
              <span aria-hidden="true">•••</span>
            </div>
            <button className="momentModalClose" type="button" onClick={() => setDetailGroup(null)} aria-label="关闭详情">×</button>
            <div className="lifeGroupDetailBody">
              <img className="lifeGroupDetailAvatar" src="/life-avatar.jpg" alt="" />
              <div className="lifeGroupDetailContent">
                <header><div><h2>IshA</h2><p>{detailGroup === 3 ? photoGroups[0].title : photoGroups[1].title}</p></div></header>
                <p className="lifeMomentDetailNote">{detailGroup === 3 ? photoGroups[0].note : photoGroups[1].note}</p>
                <div className="lifeGroupDetailGrid">
                  {(detailGroup === 3 ? thirdGroupImages : fourthGroupImages).map((image, index) => (
                    <button type="button" key={image} onClick={() => setGallery({ group: detailGroup === 3 ? 2 : 3, index })} aria-label={`放大查看生活照片 ${index + 1}`}>
                      <img src={image} alt={`生活照片 ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {gallery !== null && (
        <div className="projectImageLightbox lifeZoomLightbox" role="dialog" aria-modal="true" aria-label={`${galleryLabel}生活照片大图`} onClick={closeGallery}>
          <button className="projectLightboxClose" type="button" onClick={closeGallery} aria-label="关闭大图">×</button>
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
              src={galleryImages[gallery.index]}
              alt={`${galleryLabel}生活照片大图 ${gallery.index + 1}`}
              draggable="false"
              style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }}
            />
          </div>
          <button className="projectLightboxArrow projectLightboxPrev" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(-1); }} aria-label="上一张图片" disabled={!hasPreviousImage}>‹</button>
          <button className="projectLightboxArrow projectLightboxNext" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(1); }} aria-label="下一张图片" disabled={!hasNextImage}>›</button>
          <span className="projectLightboxCount">{gallery.index + 1} / {galleryImages.length}</span>
          <div className="mobileLightboxDots" aria-hidden="true">
            {galleryImages.map((image, index) => <i className={index === gallery.index ? "isActive" : ""} key={image} />)}
          </div>
          <div className="lifeZoomControls" onClick={(event) => event.stopPropagation()} aria-label="图片缩放控制">
            <button type="button" onClick={() => updateScale(scale - .25)} aria-label="缩小图片">−</button>
            <span>{Math.round(scale * 100)}%</span>
            <button type="button" onClick={() => updateScale(scale + .25)} aria-label="放大图片">＋</button>
            <button type="button" onClick={resetZoom}>重置</button>
          </div>
        </div>
      )}
    </>
  );
}
