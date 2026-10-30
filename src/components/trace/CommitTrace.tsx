import { memo, useEffect, useId, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, PointerEvent, ReactElement, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/context/LanguageContext';
import {
  barShape,
  buildModel,
  computeLayout,
  idxAtX,
  monthAtTime,
  monthFacts,
  posAtTime,
  projectSpan,
  readTrace,
  timeAtIndex,
  xAtPos,
} from './model';
import type { Lang, Layout, Model } from './model';
import {
  WORDS,
  commitMeta,
  counterText,
  formatDate,
  formatNumber,
  goLiveDate,
  idleText,
  monthText,
  projectName,
  projectText,
  separatorText,
  sliderText,
} from './strings';
import './trace.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FG = 'currentColor'; // the colour of .ctrace, which follows the theme (trace.css)
const SOFT = { stroke: 'var(--ct-soft)' };
const RED = { fill: 'var(--ct-red)' }; // the go-live marker: the only red element
const RISE = 40; // the marker and its label rise this far above the bars
const DIMMED = 0.13; // lit bars of the other projects while one project is in focus

/* The scroll plays the history while the graph crosses the screen, from 90 % of its height to 30 % (after the approved
   prototype, hero-em-movimento.html, A+B, ending a little higher so the last caption is still on screen): the bars
   light up month by month until PLAY_END, then the whole history stays lit, and from FOCUS_FROM on MAGBO Access Control
   stands out, the project that follows the graph. */
const PLAY_END = 1;
const FOCUS_FROM = 1.1;
const SCROLL_END = 1.25;
const FOCUS_KEY = 'magbo';

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;

/* ── data: a chunk of its own, requested as soon as this module is evaluated ── */

let pending: Promise<Model> | null = null;

function loadModel(): Promise<Model> {
  pending ??= import('@/data/commit-trace.json')
    .then(module => buildModel(readTrace(module.default)))
    .catch((error: unknown) => {
      pending = null; // a later mount may try again
      throw error;
    });
  return pending;
}

if (typeof window !== 'undefined') loadModel().catch(() => undefined);

/* ── state ── */

type Mode = 'idle' | 'paused';

interface UiState {
  mode: Mode;
  /** pinned commit while paused */
  sel: number;
  /** commit under the mouse */
  hover: number;
  legendHover: number;
  legendPin: number;
}

type Action =
  | { type: 'seek'; index: number; clearHover?: boolean }
  | { type: 'release'; hover?: number }
  | { type: 'hover'; index: number }
  | { type: 'legendHover'; project: number }
  | { type: 'legendPin'; project: number };

const INITIAL: UiState = { mode: 'idle', sel: -1, hover: -1, legendHover: -1, legendPin: -1 };

function reduce(state: UiState, action: Action): UiState {
  switch (action.type) {
    case 'seek':
      if (state.mode === 'paused' && state.sel === action.index && (!action.clearHover || state.hover === -1)) return state;
      return { ...state, mode: 'paused', sel: action.index, hover: action.clearHover ? -1 : state.hover };
    case 'release':
      if (state.mode === 'idle' && action.hover === undefined) return state;
      return { ...state, mode: 'idle', sel: -1, hover: action.hover ?? state.hover };
    case 'hover':
      return state.hover === action.index ? state : { ...state, hover: action.index };
    case 'legendHover':
      return state.legendHover === action.project ? state : { ...state, legendHover: action.project };
    case 'legendPin':
      return { ...state, legendPin: state.legendPin === action.project ? -1 : action.project };
  }
}

const focusVisible = (element: Element) => {
  try {
    return element.matches(':focus-visible');
  } catch {
    return true; // browsers without :focus-visible
  }
};

const legendButton = (target: EventTarget) => (target instanceof Element ? target.closest<HTMLElement>('button[data-p]') : null);

/* ── the bars: drawn once per size, never per frame or per pointer move ── */

interface BarsProps {
  model: Model;
  layout: Layout;
  clipId: string;
}

const Bars = memo(function Bars({ model, layout, clipId }: BarsProps) {
  const { commits, projects } = model.trace;
  const { xs, bar, step, height, pauses } = layout;
  const mid = height / 2;
  const dim: ReactElement[] = [];
  const lit: ReactElement[][] = projects.map(() => []);
  commits.forEach((commit, i) => {
    const shape = barShape(commit.files, model.cap, height);
    const box = { x: xs[i].toFixed(2), y: shape.y.toFixed(2), width: bar.toFixed(2), height: shape.height.toFixed(2), rx: (bar / 2).toFixed(2) };
    dim.push(<rect key={i} {...box} />);
    lit[commit.project].push(<rect key={i} {...box} opacity={(0.5 + 0.5 * shape.weight).toFixed(2)} />);
  });
  const breaks = pauses.flatMap((pause, i) => (pause ? [i] : []));
  const goLiveX = model.goLive > 0 ? xs[model.goLive] - (step - bar) / 2 : null;
  return (
    <>
      <g opacity={0.2} fill={FG}>
        {dim}
      </g>
      <g className="ct-lit" clipPath={`url(#${clipId})`} fill={FG}>
        {lit.map((rects, p) => (
          // a project's opacity comes from a variable on the svg, so focus never re-renders the bars
          <g key={p} style={{ opacity: `var(--ct-o${p}, 1)` }}>
            {rects}
          </g>
        ))}
      </g>
      {breaks.map(i => (
        <line
          key={`pause-${i}`}
          x1={(xs[i] + bar + 4).toFixed(2)}
          x2={(xs[i + 1] - 4).toFixed(2)}
          y1={mid}
          y2={mid}
          style={SOFT}
          strokeWidth={1.5}
          strokeDasharray="0.5 4"
          strokeLinecap="round"
        />
      ))}
      {goLiveX !== null && <rect x={(goLiveX - 1).toFixed(2)} y={-RISE} width={2} height={height + RISE} style={RED} />}
    </>
  );
});

/* ── the trace ── */

function TraceView({ model, lang }: { model: Model; lang: Lang }) {
  const words = WORDS[lang];
  const { trace, n, playback } = model;
  const { commits, projects } = trace;
  const clipId = `ct-lit-${useId().replace(/:/g, '')}`;
  const featured = useMemo(() => projects.findIndex(project => project.key === FOCUS_KEY), [projects]);

  const [ui, dispatch] = useReducer(reduce, INITIAL);
  const { mode, sel, hover, legendHover, legendPin } = ui;

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const prodRef = useRef<HTMLDivElement>(null);
  const sepRef = useRef<HTMLDivElement>(null);
  const marksRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLParagraphElement>(null);
  const dragging = useRef(false);
  const press = useRef<{ x: number; y: number } | null>(null);

  /* the scroll: how far the graph has crossed the screen, from 0 to SCROLL_END; still at PLAY_END for less motion */
  const [sp, setSp] = useState(() => (reducedMotion() ? PLAY_END : 0));
  const spRef = useRef(sp);
  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage) return;
      const show = (p: number) => {
        // scrolling back into the playback lets go of a pinned commit, so the history plays again
        if (spRef.current >= PLAY_END && p < PLAY_END) dispatch({ type: 'release' });
        spRef.current = p;
        setSp(p);
      };
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const scroll = { p: 0 };
        show(0); // until the graph comes into view; the trigger only reports once it moves
        gsap.to(scroll, {
          p: SCROLL_END,
          ease: 'none',
          scrollTrigger: { trigger: stage, start: 'top 90%', end: 'top 30%', scrub: 0.5 },
          onUpdate: () => show(scroll.p),
        });
        // the fonts can move the graph down the page once they arrive
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
        return () => show(PLAY_END);
      });
      mm.add('(prefers-reduced-motion: reduce)', () => show(PLAY_END));
    },
    { scope: sectionRef },
  );

  /* size: everything is recomputed when the svg changes size */
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);
  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const measure = () => {
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      setSize(previous => (previous && previous.width === width && previous.height === height ? previous : { width, height }));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);
  const layout = useMemo(() => (size && size.width > 0 ? computeLayout(model.pauses, size.width, size.height) : null), [model, size]);

  /* words that only change with the language */
  const names = useMemo(() => projects.map(project => projectName(project, lang)), [projects, lang]);
  const texts = useMemo(() => {
    const list = model.trace.commits;
    const first = list[0].date;
    const last = list[list.length - 1].date;
    return {
      idle: idleText(lang, list.length, model.counts.filter(Boolean).length, first, last),
      months: model.playback.months.map((_, k) => monthText(lang, monthFacts(list, model.pauses, model.playback, k), p => names[p])),
      spans: model.trace.projects.map((_, p) => {
        const span = projectSpan(list, p);
        return span ? projectText(lang, span) : '';
      }),
      first: formatDate(lang, first),
      last: formatDate(lang, last),
      goLive: goLiveDate(lang),
    };
  }, [lang, model, names]);
  // every caption the graph can show, laid out hidden behind the visible one: the box keeps the tallest one's height
  const sizes = useMemo(
    () => [
      { title: texts.idle.title, text: `${texts.idle.text} ${texts.idle.hover}` },
      { title: texts.idle.title, text: `${texts.idle.text} ${texts.idle.tap}` },
      ...texts.months,
      ...texts.spans.map((text, p) => ({ title: names[p], text })),
    ],
    [texts, names],
  );

  /* what the state means on screen */
  const pinned = mode === 'paused' ? sel : -1;
  const playing = sp < PLAY_END && pinned < 0;
  const full = !playing && pinned < 0;
  const t = pinned >= 0 ? timeAtIndex(playback, pinned) + 1e-6 : Math.max(0, sp) * playback.total;
  const pos = full ? n : posAtTime(playback, t);
  const cursor = !playing && hover >= 0 ? hover : pinned;
  const legendProject = legendHover >= 0 ? legendHover : legendPin;
  const shown = pinned >= 0 ? pinned : !playing ? hover : -1;
  // past the playback, with nothing else in focus, the scroll brings MAGBO Access Control forward, little by little
  const lead = full && cursor < 0 && legendProject < 0 && sp > PLAY_END ? featured : -1;
  const focus = cursor >= 0 ? commits[cursor].project : playing ? -1 : legendProject >= 0 ? legendProject : lead;
  const dimmed = lead >= 0 ? 1 - (1 - DIMMED) * Math.min(1, (sp - PLAY_END) / (SCROLL_END - PLAY_END)) : DIMMED;
  const monthIndex = monthAtTime(playback, t);
  const captionProject = !playing && legendProject >= 0 ? legendProject : lead >= 0 && sp >= FOCUS_FROM ? lead : -1;
  const captionKey = captionProject >= 0 ? `p${captionProject}` : full ? 'idle' : `m${monthIndex}`;

  // the card keeps its last commit while it fades out; the slider keeps its last pinned commit
  const [cardIndex, setCardIndex] = useState(-1);
  if (shown >= 0 && shown !== cardIndex) setCardIndex(shown);
  const [ariaIndex, setAriaIndex] = useState(-1);
  if (pinned >= 0 && pinned !== ariaIndex) setAriaIndex(pinned);

  let sepX: number | null = null;
  let sepLines: [string, string] = ['', ''];
  if (layout && cursor >= 0) {
    sepX = layout.xs[cursor] + layout.bar / 2;
    sepLines = separatorText(lang, names[commits[cursor].project], commits[cursor]);
  } else if (layout && playing) {
    const commit = commits[Math.min(n - 1, Math.floor(pos))];
    sepX = xAtPos(layout, pos);
    sepLines = [formatDate(lang, commit.date), names[commit.project]];
  }

  const focusStyle = useMemo(() => {
    if (focus < 0) return undefined;
    const style: Record<string, number> = {};
    projects.forEach((_, p) => {
      style[`--ct-o${p}`] = p === focus ? 1 : dimmed;
    });
    return style as CSSProperties;
  }, [focus, dimmed, projects]);

  let highlight: ReactElement | null = null;
  if (layout && cursor >= 0) {
    const shape = barShape(commits[cursor].files, model.cap, layout.height);
    highlight = (
      <rect
        x={layout.xs[cursor].toFixed(2)}
        y={shape.y.toFixed(2)}
        width={layout.bar.toFixed(2)}
        height={shape.height.toFixed(2)}
        rx={(layout.bar / 2).toFixed(2)}
        fill={FG}
      />
    );
  }

  // the title in bold, then the text: one sentence for a screen reader, two lines on screen
  let caption: ReactNode;
  if (captionKey === 'idle') {
    caption = (
      <>
        <b>{texts.idle.title}</b> {texts.idle.text} <span className="ct-hov">{texts.idle.hover}</span>
        <span className="ct-tap">{texts.idle.tap}</span>
      </>
    );
  } else if (captionProject >= 0) {
    caption = (
      <>
        <b>{names[captionProject]}</b> {texts.spans[captionProject]}
      </>
    );
  } else {
    const month = texts.months[monthIndex];
    caption = (
      <>
        <b>{month.title}</b> {month.text}
      </>
    );
  }

  /* the go-live label: right of the red line, else left of it, else in its short form; never off-screen */
  useLayoutEffect(() => {
    const label = prodRef.current;
    if (!label || !layout || model.goLive <= 0) return;
    const gx = layout.xs[model.goLive] - (layout.step - layout.bar) / 2;
    for (const short of [false, true]) {
      label.classList.toggle('ct-short', short);
      label.style.left = '0px';
      const w = label.offsetWidth;
      if (gx + 12 + w <= layout.width) {
        label.style.left = `${gx + 12}px`;
        label.style.textAlign = 'left';
        return;
      }
      if (gx - 12 - w >= 0) {
        label.style.left = `${gx - 12 - w}px`;
        label.style.textAlign = 'right';
        return;
      }
    }
    label.style.left = `${Math.max(0, layout.width - label.offsetWidth)}px`;
  }, [layout, lang, model.goLive]);

  /* positions that depend on rendered sizes, after every render */
  useLayoutEffect(() => {
    if (!layout) return;
    const { width } = layout;
    const sep = sepRef.current;
    const marks = marksRef.current;
    if (sep && marks) sep.style.height = `${marks.offsetTop + 4}px`;

    // the separator label is centred on the line and kept inside the edges; the end labels step aside under it
    const label = labelRef.current;
    const ends = [startRef.current, endRef.current];
    if (label && sepX !== null) {
      const w = label.offsetWidth;
      label.style.left = `${Math.max(0, Math.min(width - w, sepX - w / 2)).toFixed(1)}px`;
      const r = label.getBoundingClientRect();
      for (const end of ends) {
        if (!end) continue;
        const q = end.getBoundingClientRect();
        end.style.visibility = q.right + 8 > r.left && q.left - 8 < r.right ? 'hidden' : '';
      }
    } else {
      for (const end of ends) if (end) end.style.visibility = '';
    }

    // the card sits beside the line and grows upwards; the go-live label steps aside while the card covers it
    const card = cardRef.current;
    const prod = prodRef.current;
    if (card && shown >= 0) {
      const cw = card.offsetWidth || 370;
      const x = layout.xs[shown] + layout.bar / 2;
      card.style.left = `${Math.max(0, Math.min(width - cw, x < width / 2 ? x + 16 : x - 16 - cw))}px`;
      card.style.top = `${Math.min(0, layout.height - card.offsetHeight)}px`;
      if (prod) {
        const c = card.getBoundingClientRect();
        const p = prod.getBoundingClientRect();
        prod.style.visibility = c.right > p.left && c.left < p.right && c.top < p.bottom && c.bottom > p.top ? 'hidden' : '';
      }
    } else if (prod) {
      prod.style.visibility = '';
    }
  });

  /* the caption fades in when it changes, unless the visitor prefers less motion */
  useEffect(() => {
    const element = capRef.current;
    if (!element || typeof element.animate !== 'function') return;
    if (reducedMotion()) return;
    element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
  }, [captionKey]);

  /* pointer and keyboard; while the scroll plays the history, the graph only listens to the keyboard */
  const xOf = (event: PointerEvent<HTMLDivElement>) => event.clientX - event.currentTarget.getBoundingClientRect().left;
  const capture = (event: PointerEvent<HTMLDivElement>) => {
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // the pointer is already gone: the drag ends with it
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!layout) return;
    const start = press.current;
    if (start && !dragging.current) {
      // a touch that moves sideways scrubs the commits; one that moves up or down is the page scrolling
      const dx = Math.abs(event.clientX - start.x);
      if (dx > 8 && dx > Math.abs(event.clientY - start.y)) {
        press.current = null;
        dragging.current = true;
        capture(event);
      }
    }
    if (dragging.current) {
      dispatch({ type: 'seek', index: idxAtX(layout, xOf(event)) });
      return;
    }
    if (event.pointerType === 'mouse' && !playing) dispatch({ type: 'hover', index: idxAtX(layout, xOf(event)) });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!layout || playing) return;
    if (event.pointerType !== 'mouse') {
      // a touch or a pen pins a commit when it lifts without moving: a swipe over the graph scrolls the page
      press.current = { x: event.clientX, y: event.clientY };
      return;
    }
    const index = idxAtX(layout, xOf(event));
    if (mode === 'paused' && index === sel) {
      dispatch({ type: 'release', hover: index }); // a second click on the pinned commit unpins it
      return;
    }
    dragging.current = true;
    capture(event);
    dispatch({ type: 'seek', index });
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (press.current && layout) dispatch({ type: 'seek', index: idxAtX(layout, xOf(event)) });
    press.current = null;
    dragging.current = false;
  };

  const endDrag = () => {
    press.current = null;
    dragging.current = false;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = pinned >= 0 ? pinned : playing ? Math.floor(pos) : -1;
    const big = event.shiftKey ? 10 : 1;
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = Math.min(n - 1, (current < 0 ? -1 : current) + big);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        next = Math.max(0, (current < 0 ? n : current) - big);
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = n - 1;
        break;
      case 'Escape':
        if (mode === 'paused') {
          event.preventDefault();
          dispatch({ type: 'release' });
        }
        return;
      default:
        return;
    }
    event.preventDefault();
    dispatch({ type: 'seek', index: next, clearHover: true });
  };

  const cardCommit = cardIndex >= 0 ? commits[cardIndex] : null;
  const ariaCommit = ariaIndex >= 0 ? commits[ariaIndex] : null;

  return (
    <section ref={sectionRef} className="ctrace" data-state={playing ? 'playing' : mode} aria-label={words.section}>
      <div className="ct-head">
        <p ref={capRef} className="ct-cap">
          {caption}
        </p>
        <div className="ct-sizer" aria-hidden="true">
          {sizes.map((entry, i) => (
            <p key={i} className="ct-cap">
              <b>{entry.title}</b> {entry.text}
            </p>
          ))}
        </div>
      </div>
      <div ref={stageRef} className="ct-stage">
        <svg
          ref={svgRef}
          className="ct-wave"
          aria-hidden="true"
          viewBox={layout ? `0 0 ${layout.width} ${layout.height}` : undefined}
          style={focusStyle}
        >
          {layout && (
            <>
              <defs>
                <clipPath id={clipId}>
                  <rect x={0} y={-60} width={(full ? layout.width : xAtPos(layout, pos)).toFixed(2)} height={layout.height + 120} />
                </clipPath>
              </defs>
              <Bars model={model} layout={layout} clipId={clipId} />
              {highlight}
            </>
          )}
        </svg>
        {model.goLive > 0 && (
          <div ref={prodRef} className="ct-prod" style={{ top: -RISE }}>
            <b>{texts.goLive}</b>
            <span className="ct-l">{words.goLive}</span>
            <span className="ct-s">{words.goLiveShort}</span>
          </div>
        )}
        <div
          className="ct-scrub"
          role="slider"
          tabIndex={0}
          aria-label={words.slider}
          aria-valuemin={1}
          aria-valuemax={n}
          aria-valuenow={ariaCommit ? ariaIndex + 1 : 1}
          aria-valuetext={ariaCommit ? sliderText(lang, names[ariaCommit.project], ariaCommit) : undefined}
          style={layout ? { height: layout.height + 12 } : undefined}
          onPointerMove={onPointerMove}
          onPointerLeave={() => dispatch({ type: 'hover', index: -1 })}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          onKeyDown={onKeyDown}
        />
        <div
          ref={sepRef}
          className="ct-sep"
          aria-hidden="true"
          style={sepX !== null ? { display: 'block', transform: `translateX(${(sepX - 0.5).toFixed(2)}px)` } : undefined}
        />
        <div ref={marksRef} className="ct-marks">
          <span ref={startRef} className="ct-start">
            <b>{texts.first}</b>
            {words.firstCommit}
          </span>
          <span ref={endRef} className="ct-end">
            <b>{texts.last}</b>
            {words.lastCommit}
          </span>
          <div ref={labelRef} className="ct-seplabel" aria-hidden="true" style={sepX !== null ? { display: 'block' } : undefined}>
            <b>{sepLines[0]}</b>
            <span>{sepLines[1]}</span>
          </div>
        </div>
        <div ref={cardRef} className={`ct-card${shown >= 0 ? ' ct-on' : ''}${pinned >= 0 ? ' ct-pinned' : ''}`}>
          {cardCommit && (
            <>
              <div className="ct-card-top">
                <b>{names[cardCommit.project]}</b>
                <span>{counterText(lang, cardIndex, n)}</span>
              </div>
              {cardCommit.message && <p className="ct-msg">{cardCommit.message}</p>}
              <p className="ct-meta">{commitMeta(lang, cardCommit)}</p>
              <a href={`https://github.com/${trace.owner}/${trace.repos[cardCommit.repo]}/commit/${cardCommit.sha}`} target="_blank" rel="noopener">
                {words.viewCommit}
              </a>
              <p className="ct-hint">{words.pinHint}</p>
            </>
          )}
        </div>
      </div>
      <div
        className="ct-legend"
        role="group"
        aria-label={words.legend}
        onPointerOver={event => {
          const button = legendButton(event.target);
          if (button && event.pointerType === 'mouse') dispatch({ type: 'legendHover', project: Number(button.dataset.p) });
        }}
        onPointerLeave={() => dispatch({ type: 'legendHover', project: -1 })}
        onFocus={event => {
          const button = legendButton(event.target);
          if (button && focusVisible(button)) dispatch({ type: 'legendHover', project: Number(button.dataset.p) });
        }}
        onBlur={() => dispatch({ type: 'legendHover', project: -1 })}
      >
        {model.legend.map(p => (
          <button
            key={p}
            type="button"
            data-p={p}
            className={p === focus ? 'ct-on' : undefined}
            aria-pressed={legendPin === p}
            onClick={() => dispatch({ type: 'legendPin', project: p })}
          >
            {names[p]}
            <span>{formatNumber(lang, model.counts[p])}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

/** Reserves the trace's place while its data loads. */
function TraceSkeleton({ lang }: { lang: Lang }) {
  return (
    <section className="ctrace ct-loading" aria-label={WORDS[lang].section} aria-busy="true">
      <div className="ct-head" />
      <div className="ct-stage">
        <svg className="ct-wave" aria-hidden="true" />
        <div className="ct-marks" />
      </div>
      <div className="ct-legend" />
    </section>
  );
}

/** Every public commit, all projects together: a bar per commit, played by the scroll month by month, a card per commit. */
export function CommitTrace() {
  const { language } = useLanguage();
  const [model, setModel] = useState<Model | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    loadModel().then(
      loaded => {
        if (active) setModel(loaded);
      },
      (error: unknown) => {
        if (!active) return;
        console.error('commit-trace: the data could not be loaded', error);
        setFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, []);

  if (failed || model?.n === 0) return null;
  return model ? <TraceView model={model} lang={language} /> : <TraceSkeleton lang={language} />;
}
