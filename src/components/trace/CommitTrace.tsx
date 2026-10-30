import { memo, useEffect, useId, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, PointerEvent, ReactElement, ReactNode } from 'react';
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

const FG = 'currentColor'; // the colour of .ctrace, which follows the theme (trace.css)
const SOFT = { stroke: 'var(--ct-soft)' };
const RED = { fill: 'var(--ct-red)' }; // the go-live marker: the only red element
const RISE = 40; // the marker and its label rise this far above the bars
const DIMMED = 0.13; // lit bars of the other projects while one project is in focus

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

type Mode = 'idle' | 'playing' | 'paused' | 'ended';

interface UiState {
  mode: Mode;
  /** playback clock, in seconds */
  t: number;
  /** pinned commit while paused */
  sel: number;
  /** commit under the mouse */
  hover: number;
  legendHover: number;
  legendPin: number;
}

type Action =
  | { type: 'play' }
  | { type: 'pause' }
  | { type: 'seek'; index: number; clearHover?: boolean }
  | { type: 'release'; hover?: number }
  | { type: 'tick'; dt: number }
  | { type: 'hover'; index: number }
  | { type: 'legendHover'; project: number }
  | { type: 'legendPin'; project: number };

const INITIAL: UiState = { mode: 'idle', t: 0, sel: -1, hover: -1, legendHover: -1, legendPin: -1 };

function reduce(model: Model, state: UiState, action: Action): UiState {
  const { playback, n } = model;
  switch (action.type) {
    case 'play': {
      const restart = state.mode === 'idle' || state.mode === 'ended' || (state.mode === 'paused' && state.sel >= n - 1);
      return { ...state, mode: 'playing', t: restart ? 0 : state.t, hover: -1 };
    }
    case 'pause':
      return state.mode === 'playing'
        ? { ...state, mode: 'paused', sel: Math.min(n - 1, Math.floor(posAtTime(playback, state.t))) }
        : state;
    case 'seek':
      if (state.mode === 'paused' && state.sel === action.index && (!action.clearHover || state.hover === -1)) return state;
      return {
        ...state,
        mode: 'paused',
        sel: action.index,
        t: timeAtIndex(playback, action.index) + 1e-6,
        hover: action.clearHover ? -1 : state.hover,
      };
    case 'release':
      return { ...state, mode: 'idle', sel: -1, hover: action.hover ?? state.hover };
    case 'tick': {
      if (state.mode !== 'playing') return state;
      const t = state.t + action.dt;
      return t >= playback.total ? { ...state, mode: 'ended', t: playback.total } : { ...state, t };
    }
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

  const [ui, dispatch] = useReducer((state: UiState, action: Action) => reduce(model, state, action), INITIAL);
  const { mode, t, sel, hover, legendHover, legendPin } = ui;

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
      seconds: formatNumber(lang, Math.round(model.playback.total)),
    };
  }, [lang, model, names]);

  /* what the state means on screen, as in the prototype's render() */
  const playing = mode === 'playing';
  const full = mode === 'idle' || mode === 'ended';
  const pos = full ? n : posAtTime(playback, t);
  const pinned = mode === 'paused' ? sel : -1;
  const cursor = !playing && hover >= 0 ? hover : pinned;
  const legendProject = legendHover >= 0 ? legendHover : legendPin;
  const shown = pinned >= 0 ? pinned : !playing ? hover : -1;
  const focus = cursor >= 0 ? commits[cursor].project : playing ? -1 : legendProject;
  const monthIndex = mode === 'ended' ? playback.months.length - 1 : monthAtTime(playback, t);
  const captionKey = !playing && legendProject >= 0 ? `p${legendProject}` : mode === 'idle' ? 'idle' : `m${monthIndex}`;

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
      style[`--ct-o${p}`] = p === focus ? 1 : DIMMED;
    });
    return style as CSSProperties;
  }, [focus, projects]);

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

  let caption: ReactNode;
  if (captionKey === 'idle') {
    caption = (
      <span>
        {texts.idle.text} <span className="ct-hov">{texts.idle.hover}</span>
        <span className="ct-tap">{texts.idle.tap}</span>
      </span>
    );
  } else if (captionKey.startsWith('p')) {
    caption = (
      <span>
        <b>{names[legendProject]}</b> {texts.spans[legendProject]}
      </span>
    );
  } else {
    const month = texts.months[monthIndex];
    caption = (
      <span>
        <b>{month.title}</b> {month.text}
      </span>
    );
  }

  /* the playback clock */
  useEffect(() => {
    if (mode !== 'playing') return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      dispatch({ type: 'tick', dt: Math.max(0, now - last) / 1000 });
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [mode]);

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
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
  }, [captionKey]);

  /* pointer and keyboard */
  const xOf = (event: PointerEvent<HTMLDivElement>) => event.clientX - event.currentTarget.getBoundingClientRect().left;

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!layout) return;
    if (dragging.current) {
      dispatch({ type: 'seek', index: idxAtX(layout, xOf(event)) });
      return;
    }
    if (event.pointerType === 'mouse' && !playing) dispatch({ type: 'hover', index: idxAtX(layout, xOf(event)) });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!layout) return;
    const index = idxAtX(layout, xOf(event));
    if (event.pointerType === 'mouse' && mode === 'paused' && index === sel) {
      dispatch({ type: 'release', hover: index }); // a second click on the pinned commit unpins it
      return;
    }
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    dispatch({ type: 'seek', index });
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = mode === 'paused' ? sel : playing ? Math.floor(posAtTime(playback, t)) : -1;
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
      case ' ':
      case 'Enter':
        event.preventDefault();
        dispatch({ type: playing ? 'pause' : 'play' });
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
    <section className="ctrace" data-state={mode} aria-label={words.section}>
      <div className="ct-stage">
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
          onPointerUp={endDrag}
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
      <div className="ct-caption">
        <button type="button" className="ct-play" onClick={() => dispatch({ type: playing ? 'pause' : 'play' })}>
          <svg className="ct-i-play" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 1.2v9.6L10.4 6z" fill="currentColor" />
          </svg>
          <svg className="ct-i-pause" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 1h3v10H2zM7 1h3v10H7z" fill="currentColor" />
          </svg>
          <span>{playing ? words.pause : mode === 'paused' ? words.resume : words.replay(texts.seconds)}</span>
        </button>
        <p ref={capRef} className="ct-cap">
          {caption}
        </p>
        <a className="ct-more" href="#work">
          {words.seeProjects}
        </a>
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

/** Reserves the trace's height while its data loads. */
function TraceSkeleton({ lang }: { lang: Lang }) {
  return (
    <section className="ctrace ct-loading" aria-label={WORDS[lang].section} aria-busy="true">
      <div className="ct-stage">
        <svg className="ct-wave" aria-hidden="true" />
        <div className="ct-marks" />
      </div>
      <div className="ct-caption">
        <span className="ct-play" aria-hidden="true">
          &nbsp;
        </span>
        <p className="ct-cap" />
      </div>
      <div className="ct-legend" />
    </section>
  );
}

/** Every public commit, all projects together: a bar per commit, a playback by month, a card per commit. */
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
