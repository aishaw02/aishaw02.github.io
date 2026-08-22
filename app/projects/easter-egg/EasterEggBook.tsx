"use client";

import { type CSSProperties, type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";

type BookParagraph = string | { text: string; bold?: string[]; boldAll?: boolean };
type BookPage = { kicker: string; title: string; level: "primary" | "secondary"; introTitle?: string; note?: string; compact?: boolean; paragraphs: BookParagraph[] };

const renderParagraph = (paragraph: BookParagraph) => {
  if (typeof paragraph === "string") return paragraph;
  if (paragraph.boldAll) return <strong>{paragraph.text}</strong>;
  const highlights = paragraph.bold ?? [];
  const pattern = new RegExp(`(${highlights.map((text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return paragraph.text.split(pattern).map((part, index) => highlights.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part);
};

const pages: BookPage[] = [
  {
    kicker: "A LETTER BEHIND THE SCREEN",
    title: "恭喜发现彩蛋🥳",
    level: "primary",
    note: "推荐阅读BGM：《珠玉》by 单依纯",
    paragraphs: [
      "如果能读到这里，我想先表达感谢。感谢你愿意认真探索这个网站，我想这是对这件作品很大的认可。",
      "其次，我想讲讲这部分为什么存在。",
      "在写东西的时候，我总是不小心陷入深度思考模式然后开始发散思维、或陷入某种情绪。但我并不想把这些发散和情绪带给这个网站的阅读者。不管这些情绪是好是坏，我都不想给大家带来被“入侵”的感觉。对我而言，入侵与被入侵都是很没有边界感的。",
      "所以，在制作这个网站的过程中，我都尽可能让内容的部分保持客观与理性；一方面，前面说过的，我不想让大家额外承担我的情绪；另一方面，这其实才是大部分时间里我会呈现的面貌。",
      { text: "但这里的彩蛋，是我想要给自己留下的自由空间，可以允许一些发散、感性，甚至不那么完整的表达。对于大家来说，如果想要了解更完整的我，这里或许可以作为最后一块拼图。", bold: ["可以允许一些发散、感性，甚至不那么完整的表达"] },
    ],
  },
  {
    kicker: "01 / AESTHETICS",
    title: "关于审美",
    level: "secondary",
    paragraphs: [
      { text: "我是会为颜值买单的人，所以在做这个网站的过程中，“好看”绝对属于第一梯队的需求。我喜欢的风格有很多，可爱、灵动、极简…总会有一些打动我的地方。但我希望选择一个最能代表我的。开始的时候，我大量浏览小红书并提炼了一些关键词给到gpt——线条、简洁、手帐、拼贴、手绘、夏日清凉。", bold: ["线条、简洁、手帐、拼贴、手绘、夏日清凉。"] },
      "AI做出来的是好看的，但我又在纠结那个原始的问题：这不是我。这个时候我刷到了观夏的小红书，抬头看到了生日刚收到的一瓶观夏香水。这是我近几年很喜欢的品牌，从审美到味道，都有很多让我觉得很契合的地方。所以我决定去官网看看，然后又想到了另一家叫做LE LABO的香水品牌。看完官网，我想我终于找到了方向。",
      { text: "有了灵感，我最终产出了现在的首页，这是第三个版本，但我认为也算是快速地找到了方向，于是更有了好好做下去的动力。其他部分的设计也花费了不少心思，但首页部分在我心中绝对符合“好的开始是成功的一半”这句话，所以其他的不再一一展开。", bold: ["好的开始是成功的一半"] },
    ],
  },
  {
    kicker: "02 / CONTENT",
    title: "关于网站的内容设置",
    level: "secondary",
    paragraphs: [
      "和审美一样，做网站最终还是要靠内容表达。所以放些什么东西在里面，以及怎么放才会逻辑通顺是另一件让我头大的事情。所以我再次大量浏览小红书并严肃阅读和关注前辈们做出来的网站……在这个过程中我甚至一度陷入了焦虑，好像我并没有很多值得展示的项目，并且我能够写出来的经历跟互联网上的很多人比起来，感觉会有些普通。",
      { text: "还有就是，我很难面对“美化”经历这件事，我当然理解求职需要包装和提炼，但我实在无法允许自己写一些没做过的东西进去。有天晚上我在笔记本上写写画画，写我的经历写我的思考写我想放进网站的东西。然后我突然就明白了——我想把真实的自己带到大家面前。", bold: ["我想把真实的自己带到大家面前"] },
      "当然这个网站是求职而生的，但我不希望它只剩下工作中的我。工作能力固然重要，但这是我这个人的一部分，我不想因为这个网站的目的是求职，就主动删掉其他同样真实的自己。所以我加入了我的学业旅程、加入了我没有持续很久的实习经历、加入了我在成长的过程中不那么成熟的、有些痛苦的时刻。走到现在，我的每一段经历都是无法忽视、无法割舍的，没有哪一段是因为不够完美而需要被假装不存在。",
    ],
  },
  {
    kicker: "03 / IMPERFECTION",
    title: "关于克服完美主义",
    level: "secondary",
    paragraphs: [
      "看了前两段的朋友想必也能体会到，我是一个很容易陷入纠结的人。面对一个全新的项目，在真正下手开始做之前，我总是想先做出一个“世界上最周密的计划”，然后发现还有更好的方案…总之无法开始。",
      "后来我才知道这叫完美主义。然后我就意识到了自己的问题，并且每次遇到一个新项目就提醒自己，先做一版出来，总能越改越好的！但意识到和能做到是两回事，完全struggle。但我想，这次的经历让我在克服完美主义这件事上，获得了阶段性胜利。",
      "我又意识到完美主义之外或许还有一个原因——不够自信。我很需要确定性，但我又无法确定自己给出的方案是否足够好，于是陷入计划并无法开始的死循环。但这次不太一样，在想好主题并确认结构后，我立马开始做了。过程中虽然依然会纠结、推翻、重来，我获得了一种有点陌生的坚定感。或者这也说明我和这个网站是双向奔赴的hhh",
    ],
  },
  {
    kicker: "04 / PHOTOGRAPHY",
    title: "感谢我热爱拍照",
    level: "secondary",
    paragraphs: [
      "在整个网站的制作过程中，我用了很多图片，这些全是我自己拍摄的。我可以毫不犹豫地说，我是一个热爱生活、并且热爱记录生活的人。至今为止，我相册中的照片数量来到2万+，并且完全舍不得删。",
      "我的想法是，照片能让文字之外的东西也被看见。所以在制作网站的过程中，我自然地想到用自己的照片，让我的工作和生活更加活灵活现地呈现在大家面前。所以多亏了我平时的积累，网站的素材也算够用，也感谢自己对生活的深刻记忆，我总能精准根据某个部分想要表达的内容联想到这个部分我想要的照片，以及这些照片是什么时候、在哪里、什么情况下产生的。",
      "所以制作网站的过程，也变成了一次回忆的整理。我重新见到了很多已经快要忘记的瞬间。所以这是我很喜欢这个网站的一个原因：它不仅在介绍现在的我，也保存了很多曾经的我。",
    ],
  },
  {
    kicker: "05 / A NEW DISCOVERY",
    title: "还有新发现",
    level: "secondary",
    paragraphs: [
      { text: "实习以来都是在做运营的工作，但这之间又有一些不同。比如滴滴那段更偏重线下的活动，后面的经历就是传统的运营。我之前总觉得做线上的东西并没有“真实落地”的感觉。我明白运营工作的价值，但也在一直在思考：什么样的工作，会真正让我获得成就感。", bold: ["什么样的工作，会真正让我获得成就感"] },
      "这次做网站的经历让我有了新的答案——原来“落地”并不一定意味着一个真实的场地。看着网站一步步成型并逐渐填充内容，最后变成了一个可以打开和浏览的网站。这个过程让我有了新的脚踏实地、一步一个脚印的感觉。这种感觉让我很踏实、让我想要继续做下去、并努力做得更好。",
      "很长一段时间我对工作的态度是消极的、缺少动力的，但是这个网站让我产生了久违“废寝忘食”感。我很开心，我又有动力了，生活的动力、学习新事物的动力、变得更好的动力。",
      "我想要变得更好。",
    ],
  },
  {
    kicker: "06 / FIRST UPDATE",
    title: "第一次更新",
    level: "secondary",
    note: "来自 2026.8.15 的日记",
    compact: true,
    paragraphs: [
      "这一天完成了最后的内容准备以及网站 1.0 版本的上线部署，并实时记录日记如下，作为这个网站的第一篇更新日志：",
      "8/15 00:02 现在在做：移动端适配性检查，自以为完成了大部分，大概 70%",
      "20:37 整理完所有的图片竟然已经快 9 点了……确实今天开始得也比较晚，但整个过程特别爽！",
      "22:14 我彻底完成了内容部分的构建，恭喜！",
      "8/16 00:25 做这个网站的过程中我发现了自己的新特点，越是复杂的任务，我就会更焦虑，我一定要眼看着它跑完才能做别的正事儿……",
      "00:37 部署进行中……我人生第一次感受到了 token 焦虑，也幸好这周中间重置了一次。",
      "00:45 上线啦！其他的事情就交给睡醒后的自己吧，我和电脑都需要冷静和休息一下。",
    ],
  },
  {
    kicker: "07 / SECOND UPDATE",
    title: "第二次更新",
    level: "secondary",
    note: "来自 2026.8.22",
    compact: true,
    paragraphs: [
      "总觉得过了很久，但距离上段实习离职也只过去了三天而已，中间还经历了一些混乱的事情。总之今天终于又重新开始正式准备秋招相关的东西了。但脑子乱乱的，有点没有头绪。所以就想记录一下心情，以及之前想到但没有写的东西。",
      "首先，关于求职过程中遇到的“垂直经历”的要求。这个想法来源于某天下班路过某宇宙大厂。这个厂是我过往投递实习和面试的过程中遇到的对垂直经历要求最高的，也曾经因为这个原因在面试中感受到不小的压力。但随着秋招的投递，我也逐渐理解了公司和业务方提出这种要求的原因。在投递的过程中，对于那些和我过去经历比较接近的岗位，我确实能对 JD 有更深刻的理解，更能读懂岗位对候选人的要求。求职如此，到了实际工作中一个“经验工”大概也确实能为工作省去很多不必要的解释和上下文。",
      "但从我自己，一个求职者的角度来讲。我的职业生涯还很长，在还没有正式开始的时候多多尝试也是对自己负责任的表现。不多试试我怎么知道自己真正喜欢的、真正适合的是什么。如果我真的确认了自己喜欢的、擅长的，那么未来还有很长时间留给我去深耕。另外，我也认为 AI 的应用和普及在一定程度降低了进入陌生领域、快速补齐上下文的成本。所以我依旧会投递一些我感兴趣但没有接触过的业务。一切都等聊了、试了再说也不迟。",
    ],
  },
  {
    kicker: "07 / SECOND UPDATE · CONTINUED",
    title: "第二次更新（续）",
    level: "secondary",
    compact: true,
    paragraphs: [
      "其次，关于我对运营和产品工作的理解。甚至不知道这些东西放在这里是否合适……显然，我做这个网站一方面是想亲身深入实践一下 vibe coding，另一方面，也希望它或许能成为我求职产品岗位的敲门砖。但我为什么想做产品呢，最朴素的原因其实是，我觉得现在在互联网干运营其实是一件不那么有性价比的事情。另外，根据我过往实习积累的经验，我会觉得产品的工作更能满足我的“掌控欲”——能更完整地参与一件事情从问题到结果的过程。",
      { text: "但直到现在，我也没觉得自己获得了运营工作的真谛，更别说几乎完全没有实际着手做过的产品。就只先记录一下此时此刻粗浅的理解：对于 AI 产品来说，产品的作用是让 AI 更好用，把能力变成价值；运营的工作是解决产品和用户之间的“最后一公里”——让这种价值被用户发现、理解和使用，并在反馈中持续放大。所以，只要业务本身有意义，我都愿意探索并寻找真谛。更重要的，产品和运营实在是离不开彼此，所以，我现在还相信，只要我努力翻越了其中一座山，另一座山的风景也会自然来到我面前。", bold: ["对于 AI 产品来说，产品的作用是让 AI 更好用，把能力变成价值；运营的工作是解决产品和用户之间的“最后一公里”——让这种价值被用户发现、理解和使用，并在反馈中持续放大。"] },
      "所以又要再次讲述我在网站中放自己经历并尽可能客观描述经历的项目的原因，我并没有刻意向某一个职业方向引导。只希望看到这个网站的人能看到之前工作中真实的我，我期待被发现更多新的可能性。",
    ],
  },
];

const PageContent = ({ page, number, className = "" }: { page: BookPage; number: number; className?: string }) => (
  <article className={`easterEggBookPage is${page.level === "primary" ? "Primary" : "Secondary"}${page.compact ? " isCompact" : ""} ${className}`}>
    <header>
      <p>{page.kicker}</p>
      {page.level === "primary" ? <><h1>{page.title}</h1>{page.introTitle && <h2 className="easterEggIntroTitle">{page.introTitle}</h2>}</> : <h2>{page.title}</h2>}
      {page.note && <span className="easterEggBgm">{page.note}</span>}
    </header>
    <div className="easterEggBody">
      {page.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{renderParagraph(paragraph)}</p>)}
    </div>
    <div className="easterEggPageNumber" aria-label={`第 ${number + 1} 页`}>{String(number + 1).padStart(2, "0")}</div>
  </article>
);

type TurnState = {
  direction: "next" | "prev";
  targetIndex: number;
  progress: number;
  mode: "auto" | "drag" | "settling";
};

const TURN_DURATION = 200;

export default function EasterEggBook() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);
  const [turn, setTurn] = useState<TurnState | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const turnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef<{ startX: number; pointerId: number; direction?: "next" | "prev"; targetIndex?: number; progress: number } | null>(null);
  const suppressClick = useRef(false);
  const step = isNarrow ? 1 : 2;
  const maxIndex = isNarrow ? pages.length - 1 : Math.max(0, pages.length - (pages.length % 2 === 0 ? 2 : 1));

  const clearTurnTimer = () => {
    if (turnTimer.current) clearTimeout(turnTimer.current);
    turnTimer.current = null;
  };

  const finishTurn = (targetIndex: number, duration = TURN_DURATION) => {
    clearTurnTimer();
    turnTimer.current = setTimeout(() => {
      setPageIndex(targetIndex);
      setTurn(null);
    }, duration);
  };

  const go = (amount: number) => {
    if (turn) return;
    const direction = amount > 0 ? "next" : "prev";
    const targetIndex = Math.min(maxIndex, Math.max(0, pageIndex + amount * step));
    if (targetIndex === pageIndex) return;
    if (reduceMotion) {
      setPageIndex(targetIndex);
      return;
    }
    setTurn({ direction, targetIndex, progress: 1, mode: "auto" });
    finishTurn(targetIndex);
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncViewport = () => {
      setIsNarrow(media.matches);
      setPageIndex((current) => media.matches ? current : current - current % 2);
      setTurn(null);
    };
    const syncMotion = () => setReduceMotion(motion.matches);
    syncViewport();
    syncMotion();
    media.addEventListener("change", syncViewport);
    motion.addEventListener("change", syncMotion);
    return () => {
      media.removeEventListener("change", syncViewport);
      motion.removeEventListener("change", syncMotion);
      clearTurnTimer();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // Keyboard navigation follows the same current-page state as the visible controls.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, step, maxIndex, turn, reduceMotion]);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (turn || reduceMotion || event.button !== 0) return;
    drag.current = { startX: event.clientX, pointerId: event.pointerId, progress: 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    const delta = event.clientX - drag.current.startX;
    if (!drag.current.direction && Math.abs(delta) > 8) {
      const direction = delta < 0 ? "next" : "prev";
      const targetIndex = Math.min(maxIndex, Math.max(0, pageIndex + (direction === "next" ? step : -step)));
      if (targetIndex === pageIndex) return;
      drag.current.direction = direction;
      drag.current.targetIndex = targetIndex;
      suppressClick.current = true;
    }
    if (!drag.current.direction || drag.current.targetIndex === undefined) return;
    const progress = Math.min(1, Math.abs(delta) / Math.max(220, event.currentTarget.clientWidth * .42));
    drag.current.progress = progress;
    setTurn({ direction: drag.current.direction, targetIndex: drag.current.targetIndex, progress, mode: "drag" });
  };

  const onPointerEnd = (event: ReactPointerEvent<HTMLElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    const currentDrag = drag.current;
    drag.current = null;
    if (!currentDrag.direction || currentDrag.targetIndex === undefined) {
      if (isNarrow) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      suppressClick.current = true;
      go(event.clientX < bounds.left + bounds.width / 2 ? -1 : 1);
      setTimeout(() => { suppressClick.current = false; }, 0);
      return;
    }
    if (currentDrag.progress >= .2) {
      const remaining = Math.max(100, TURN_DURATION * (1 - currentDrag.progress));
      setTurn({ direction: currentDrag.direction, targetIndex: currentDrag.targetIndex, progress: 1, mode: "settling" });
      finishTurn(currentDrag.targetIndex, remaining);
    } else {
      setTurn({ direction: currentDrag.direction, targetIndex: currentDrag.targetIndex, progress: 0, mode: "settling" });
      clearTurnTimer();
      turnTimer.current = setTimeout(() => setTurn(null), 150);
    }
    setTimeout(() => { suppressClick.current = false; }, 0);
  };

  const clickTurn = (amount: number) => {
    if (suppressClick.current) return;
    go(amount);
  };

  const visiblePages = pages.slice(pageIndex, pageIndex + step);
  const targetPages = turn ? pages.slice(turn.targetIndex, turn.targetIndex + step) : [];
  const currentTurn = Math.floor(pageIndex / step) + 1;
  const turnCount = Math.ceil(pages.length / step);

  let basePages = visiblePages.map((page, index) => ({ page, number: pageIndex + index }));
  let flipFront: { page: BookPage; number: number } | null = null;
  let flipBack: { page: BookPage; number: number } | null = null;
  if (turn) {
    if (isNarrow) {
      basePages = [{ page: targetPages[0], number: turn.targetIndex }];
      flipFront = { page: visiblePages[0], number: pageIndex };
      flipBack = { page: targetPages[0], number: turn.targetIndex };
    } else if (turn.direction === "next") {
      basePages = targetPages[1]
        ? [
            { page: visiblePages[0], number: pageIndex },
            { page: targetPages[1], number: turn.targetIndex + 1 },
          ]
        : [{ page: targetPages[0], number: turn.targetIndex }];
      flipFront = { page: visiblePages[1], number: pageIndex + 1 };
      flipBack = { page: targetPages[0], number: turn.targetIndex };
    } else {
      basePages = [
        { page: targetPages[0], number: turn.targetIndex },
        ...(visiblePages[1]
          ? [{ page: visiblePages[1], number: pageIndex + 1 }]
          : targetPages[1]
            ? [{ page: targetPages[1], number: turn.targetIndex + 1 }]
            : []),
      ];
      flipFront = { page: visiblePages[0], number: pageIndex };
      flipBack = { page: targetPages[1], number: turn.targetIndex + 1 };
    }
  }

  const flipStyle = turn ? ({ "--flip-progress": turn.progress } as CSSProperties) : undefined;

  return (
    <main className="easterEggPage">
      <div className="easterEggBookShell">
        <nav className="easterEggBookNav" aria-label="彩蛋小册导航">
          <a className="easterEggBack" href="/projects?project=04"><span aria-hidden="true">←</span>BACK TO PROJECTS</a>
          <span>{String(currentTurn).padStart(2, "0")} / {String(turnCount).padStart(2, "0")}</span>
        </nav>
        <section className={`easterEggBook${turn ? ` isFlipping isFlip${turn.direction === "next" ? "Next" : "Prev"} isFlip${turn.mode === "drag" ? "Dragging" : turn.mode === "settling" ? "Settling" : "Animating"}` : ""}`} aria-label="写在网站背后" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd}>
          {basePages.map(({ page, number }) => <PageContent page={page} number={number} key={`base-${number}`} />)}
          {turn && flipFront && flipBack && (
            <div className="easterEggFlipSheet" style={flipStyle} aria-hidden="true">
              <PageContent page={flipFront.page} number={flipFront.number} className="easterEggFlipFace easterEggFlipFront" />
              <PageContent page={flipBack.page} number={flipBack.number} className="easterEggFlipFace easterEggFlipBack" />
              <i className="easterEggFlipShade" />
            </div>
          )}
          {!isNarrow && <button className="easterEggPageHit easterEggPageHitPrev" type="button" onClick={() => clickTurn(-1)} disabled={pageIndex === 0 || Boolean(turn)} aria-label="点击左半页向前翻页" />}
          {!isNarrow && <button className="easterEggPageHit easterEggPageHitNext" type="button" onClick={() => clickTurn(1)} disabled={pageIndex === maxIndex || Boolean(turn)} aria-label="点击右半页向后翻页" />}
        </section>
        <div className="easterEggBookControls">
          <button type="button" onClick={() => go(-1)} disabled={pageIndex === 0 || Boolean(turn)} aria-label="上一页">← PREV</button>
          <p>写在网站背后 · FANGPU 2026</p>
          <button type="button" onClick={() => go(1)} disabled={pageIndex === maxIndex || Boolean(turn)} aria-label="下一页">NEXT →</button>
        </div>
      </div>
    </main>
  );
}
