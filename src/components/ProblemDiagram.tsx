import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '@/context/LanguageContext';
import { DIAGRAMS } from '@/data/diagrams';
import type { DiagramKind, DiagramText } from '@/data/diagrams';
import './ProblemDiagram.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ── a dot that travels along straight segments; its route is written on the dot, as "x,y x,y …" ── */

type Point = [number, number];

function along(points: Point[], t: number): Point {
      let total = 0;
      const lengths = points.slice(1).map((point, i) => {
            const length = Math.hypot(point[0] - points[i][0], point[1] - points[i][1]);
            total += length;
            return length;
      });
      let d = Math.max(0, Math.min(1, t)) * total;
      for (let i = 0; i < lengths.length; i++) {
            if (d <= lengths[i]) {
                  const f = lengths[i] ? d / lengths[i] : 0;
                  return [points[i][0] + (points[i + 1][0] - points[i][0]) * f, points[i][1] + (points[i + 1][1] - points[i][1]) * f];
            }
            d -= lengths[i];
      }
      return points[points.length - 1];
}

function travel(tl: gsap.core.Timeline, root: HTMLElement, selector: string, at: number, duration: number) {
      root.querySelectorAll<SVGCircleElement>(selector).forEach((dot) => {
            const points = (dot.dataset.route ?? '').split(' ').map((pair) => pair.split(',').map(Number) as Point);
            const proxy = { t: 0 };
            const place = () => {
                  const [x, y] = along(points, proxy.t);
                  dot.setAttribute('cx', x.toFixed(1));
                  dot.setAttribute('cy', y.toFixed(1));
            };
            tl.fromTo(proxy, { t: 0 }, { t: 1, duration, ease: 'power1.inOut', immediateRender: false, onUpdate: place }, at);
      });
}

/* ── the two stories: before, the error in red, held a while; after, the same pass, set right ── */

function meals(tl: gsap.core.Timeline, root: HTMLElement) {
      // before: the refused pass reaches the meals, which count one more
      travel(tl, root, '.pd-dotA', 0.3, 1.8);
      tl.to('.pd-dotA', { opacity: 0, duration: 0.2 }, 2.1)
            .to('.pd-a0', { opacity: 0, duration: 0.3 }, 2.1)
            .to(['.pd-a1', '.pd-wrong'], { opacity: 1, duration: 0.3 }, 2.1)
            // after: the same pass goes to the refused attempts, and the meals do not move
            .to('.pd-before', { opacity: 0, duration: 0.4 }, 5.0)
            .to('.pd-after', { opacity: 1, duration: 0.4 }, 5.2)
            .to(['.pd-a1', '.pd-wrong'], { opacity: 0, duration: 0.4 }, 5.0)
            .to('.pd-a0', { opacity: 1, duration: 0.4 }, 5.2)
            .to(['.pd-routeB', '.pd-boxB', '.pd-b0'], { opacity: 1, duration: 0.5 }, 5.2)
            .to('.pd-dotB', { opacity: 1, duration: 0.2 }, 5.8);
      travel(tl, root, '.pd-dotB', 5.9, 1.8);
      tl.to('.pd-dotB', { opacity: 0, duration: 0.2 }, 7.7)
            .to('.pd-b0', { opacity: 0, duration: 0.3 }, 7.7)
            .to(['.pd-b1', '.pd-ok'], { opacity: 1, duration: 0.3 }, 7.7)
            .to({}, { duration: 2 }, 8.0);
}

function clock(tl: gsap.core.Timeline, root: HTMLElement) {
      // before: the container on UTC records the pass three hours late
      tl.to('.pd-dotA', { opacity: 1, duration: 0.2 }, 0.2);
      travel(tl, root, '.pd-dotA', 0.3, 1.8);
      tl.to('.pd-dotA', { opacity: 0, duration: 0.2 }, 2.1)
            .to('.pd-none', { opacity: 0, duration: 0.3 }, 2.1)
            .to(['.pd-wrongtime', '.pd-late'], { opacity: 1, duration: 0.3 }, 2.2)
            // after: the container carries the school's time zone, and the pass keeps its own time
            .to('.pd-before', { opacity: 0, duration: 0.4 }, 5.0)
            .to('.pd-after', { opacity: 1, duration: 0.4 }, 5.2)
            .to('.pd-utc', { opacity: 0, duration: 0.4 }, 5.0)
            .to('.pd-tz', { opacity: 1, duration: 0.4 }, 5.2)
            .to(['.pd-wrongtime', '.pd-late'], { opacity: 0, duration: 0.4 }, 5.0)
            .to('.pd-none', { opacity: 1, duration: 0.3 }, 5.3)
            .to('.pd-dotB', { opacity: 1, duration: 0.2 }, 5.8);
      travel(tl, root, '.pd-dotB', 5.9, 1.8);
      tl.to('.pd-dotB', { opacity: 0, duration: 0.2 }, 7.7)
            .to('.pd-none', { opacity: 0, duration: 0.3 }, 7.7)
            .to(['.pd-passtime', '.pd-ok'], { opacity: 1, duration: 0.3 }, 7.8)
            .to({}, { duration: 2 }, 8.1);
}

// the end of each story, shown still to visitors who prefer less motion
const SETTLED: Record<DiagramKind, { hide: string[]; show: string[] }> = {
      meals: {
            hide: ['.pd-before', '.pd-a1', '.pd-wrong', '.pd-b0', '.pd-dotA', '.pd-dotB'],
            show: ['.pd-after', '.pd-a0', '.pd-routeB', '.pd-boxB', '.pd-b1', '.pd-ok'],
      },
      clock: {
            hide: ['.pd-before', '.pd-utc', '.pd-wrongtime', '.pd-late', '.pd-none', '.pd-dotA', '.pd-dotB'],
            show: ['.pd-after', '.pd-tz', '.pd-passtime', '.pd-ok'],
      },
};

/* ── the drawings: a wide one beside the text, and a compact one for a narrow column; CSS shows one of them ── */

// a box label on two lines in the compact drawing: split at its last space
const twoLines = (label: string): [string, string] => {
      const at = label.lastIndexOf(' ');
      return at < 0 ? [label, ''] : [label.slice(0, at), label.slice(at + 1)];
};

// the twelve marks of a clock face
const ticks = (cx: number, cy: number, r: number) =>
      Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI) / 6;
            const inner = i % 3 ? r * 0.875 : r * 0.79;
            const p = (radius: number) => [cx + radius * Math.sin(a), cy - radius * Math.cos(a)].map((v) => v.toFixed(1)).join(' ');
            return <path key={i} className={i % 3 ? 'pd-ink pd-thin pd-muted' : 'pd-ink pd-thin'} d={`M${p(inner)} L${p(r)}`} />;
      });

const State = ({ t }: { t: DiagramText }) => (
      <>
            <text className="pd-state pd-before" x="0" y="12">{t.before}</text>
            <text className="pd-state pd-after" x="0" y="12" opacity="0">{t.after}</text>
      </>
);

const MealsWide = ({ t }: { t: DiagramText }) => (
      <svg className="pd-wide" viewBox="0 0 480 250" focusable="false">
            <State t={t} />
            <rect className="pd-ink" x="8" y="48" width="70" height="158" rx="12" />
            <circle className="pd-ink pd-thin pd-muted" cx="43" cy="58" r="1.8" />
            <rect className="pd-ink pd-thin" x="18" y="68" width="50" height="58" rx="6" />
            <rect className="pd-ink pd-thin" x="21" y="140" width="44" height="44" rx="8" />
            <path className="pd-ink pd-red" d="M35 154 L51 170 M51 154 L35 170" />
            <text className="pd-label pd-plain" x="43" y="226" textAnchor="middle">{t.terminal}</text>
            <text className="pd-label pd-plain pd-bad" x="43" y="243" textAnchor="middle">{t.refused}</text>
            <path className="pd-ink pd-thin pd-muted" d="M84 125 H150" />
            <text className="pd-label pd-plain" x="117" y="114" textAnchor="middle">{t.studentId}</text>
            <path className="pd-ink pd-thin pd-muted pd-routeA" d="M240 125 H262 V66 H290" />
            <path className="pd-ink pd-thin pd-routeB" d="M240 125 H262 V196 H290" opacity="0" />
            <circle className="pd-fill pd-dotA" cx="86" cy="125" r="5" data-route="86,125 150,125 195,125 240,125 262,125 262,66 292,66" />
            <circle className="pd-fill pd-dotB" cx="86" cy="125" r="5" opacity="0" data-route="86,125 150,125 195,125 240,125 262,125 262,196 292,196" />
            <rect className="pd-ink pd-box" x="150" y="106" width="90" height="38" rx="8" />
            <text className="pd-mid" x="195" y="130" textAnchor="middle" letterSpacing=".06em">MAGBO</text>
            <rect className="pd-ink pd-box" x="290" y="20" width="186" height="92" rx="10" />
            <text className="pd-label" x="306" y="44">{t.meals}</text>
            <text className="pd-big pd-a0" x="306" y="82">+0</text>
            <text className="pd-big pd-bad pd-a1" x="306" y="82" opacity="0">+1</text>
            <text className="pd-label pd-plain pd-bad pd-wrong" x="306" y="102" opacity="0">{t.neverEaten}</text>
            <path className="pd-ink pd-ok" d="M350 72 L358 80 L372 64" opacity="0" />
            <g className="pd-boxB" opacity="0">
                  <rect className="pd-ink pd-box" x="290" y="150" width="186" height="92" rx="10" />
                  <text className="pd-label" x="306" y="174">{t.refusals}</text>
            </g>
            <text className="pd-big pd-b0" x="306" y="212" opacity="0">+0</text>
            <text className="pd-big pd-b1" x="306" y="212" opacity="0">+1</text>
      </svg>
);

const MealsCompact = ({ t }: { t: DiagramText }) => {
      const [meals1, meals2] = twoLines(t.meals);
      const [refusals1, refusals2] = twoLines(t.refusals);
      return (
            <svg className="pd-compact" viewBox="0 0 320 288" focusable="false">
                  <State t={t} />
                  <rect className="pd-ink" x="8" y="30" width="56" height="124" rx="10" />
                  <circle className="pd-ink pd-thin pd-muted" cx="36" cy="39" r="1.6" />
                  <rect className="pd-ink pd-thin" x="16" y="48" width="40" height="44" rx="5" />
                  <rect className="pd-ink pd-thin" x="17" y="106" width="38" height="38" rx="7" />
                  <path className="pd-ink pd-red" d="M29 118 L43 132 M43 118 L29 132" />
                  <text className="pd-label pd-plain" x="76" y="46">{t.terminal}</text>
                  <text className="pd-label pd-plain pd-bad" x="76" y="63">{t.refused}</text>
                  <path className="pd-ink pd-thin pd-muted" d="M70 92 H150" />
                  <text className="pd-label pd-plain" x="110" y="110" textAnchor="middle">{t.studentId}</text>
                  <path className="pd-ink pd-thin pd-muted pd-routeA" d="M195 111 V134 H81 V160" />
                  <path className="pd-ink pd-thin pd-routeB" d="M195 111 V134 H239 V160" opacity="0" />
                  <circle className="pd-fill pd-dotA" cx="72" cy="92" r="5" data-route="72,92 150,92 195,92 195,134 81,134 81,162" />
                  <circle className="pd-fill pd-dotB" cx="72" cy="92" r="5" opacity="0" data-route="72,92 150,92 195,92 195,134 239,134 239,162" />
                  <rect className="pd-ink pd-box" x="150" y="73" width="90" height="38" rx="8" />
                  <text className="pd-mid" x="195" y="97" textAnchor="middle" letterSpacing=".06em">MAGBO</text>
                  <rect className="pd-ink pd-box" x="6" y="160" width="150" height="120" rx="10" />
                  <text className="pd-label" x="18" y="184">{meals1}</text>
                  <text className="pd-label" x="18" y="198">{meals2}</text>
                  <text className="pd-big pd-a0" x="18" y="240">+0</text>
                  <text className="pd-big pd-bad pd-a1" x="18" y="240" opacity="0">+1</text>
                  <text className="pd-label pd-plain pd-bad pd-wrong" x="18" y="264" opacity="0">{t.neverEaten}</text>
                  <path className="pd-ink pd-ok" d="M62 230 L70 238 L84 222" opacity="0" />
                  <g className="pd-boxB" opacity="0">
                        <rect className="pd-ink pd-box" x="164" y="160" width="150" height="120" rx="10" />
                        <text className="pd-label" x="176" y="184">{refusals1}</text>
                        <text className="pd-label" x="176" y="198">{refusals2}</text>
                  </g>
                  <text className="pd-big pd-b0" x="176" y="240" opacity="0">+0</text>
                  <text className="pd-big pd-b1" x="176" y="240" opacity="0">+1</text>
            </svg>
      );
};

const ClockWide = ({ t }: { t: DiagramText }) => (
      <svg className="pd-wide" viewBox="0 0 480 250" focusable="false">
            <State t={t} />
            <circle className="pd-ink" cx="60" cy="122" r="48" />
            {ticks(60, 122, 46)}
            <path className="pd-ink" d="M60 122 L84.1 114.6" />
            <path className="pd-ink pd-thin" d="M60 122 L77.1 160.4" />
            <circle className="pd-fill" cx="60" cy="122" r="3" />
            <text className="pd-label pd-plain" x="60" y="196" textAnchor="middle">{t.pass}</text>
            <text className="pd-mid" x="60" y="216" textAnchor="middle">{t.passTime}</text>
            <path className="pd-ink pd-thin pd-muted" d="M114 122 H150" />
            <path className="pd-ink pd-thin pd-muted" d="M306 122 H330" />
            <circle className="pd-fill pd-dotA" cx="114" cy="122" r="5" opacity="0" data-route="114,122 150,122 306,122 330,122" />
            <circle className="pd-fill pd-dotB" cx="114" cy="122" r="5" opacity="0" data-route="114,122 150,122 306,122 330,122" />
            <rect className="pd-ink pd-box" x="150" y="88" width="156" height="68" rx="10" />
            <text className="pd-label" x="164" y="111">{t.container}</text>
            <text className="pd-mid pd-utc" x="164" y="138">UTC</text>
            <text className="pd-mid pd-small pd-tz" x="164" y="138" opacity="0">America/Sao_Paulo</text>
            <rect className="pd-ink pd-box" x="330" y="74" width="146" height="96" rx="10" />
            <text className="pd-label" x="344" y="98">{t.recorded}</text>
            <text className="pd-label pd-none" x="344" y="140">—</text>
            <text className="pd-big pd-bad pd-wrongtime" x="344" y="140" opacity="0">{t.wrongTime}</text>
            <text className="pd-label pd-plain pd-bad pd-late" x="344" y="160" opacity="0">{t.late}</text>
            <text className="pd-big pd-passtime" x="344" y="140" opacity="0">{t.passTime}</text>
            <path className="pd-ink pd-ok" d="M450 126 L458 134 L470 120" opacity="0" />
      </svg>
);

const ClockCompact = ({ t }: { t: DiagramText }) => (
      <svg className="pd-compact" viewBox="0 0 320 290" focusable="false">
            <State t={t} />
            <circle className="pd-ink" cx="52" cy="82" r="40" />
            {ticks(52, 82, 38)}
            <path className="pd-ink" d="M52 82 L72.1 75.9" />
            <path className="pd-ink pd-thin" d="M52 82 L65.8 113.1" />
            <circle className="pd-fill" cx="52" cy="82" r="2.5" />
            <text className="pd-label pd-plain" x="52" y="142" textAnchor="middle">{t.pass}</text>
            <text className="pd-mid" x="52" y="160" textAnchor="middle">{t.passTime}</text>
            <path className="pd-ink pd-thin pd-muted" d="M94 82 H118" />
            <path className="pd-ink pd-thin pd-muted" d="M216 112 V176" />
            <circle className="pd-fill pd-dotA" cx="94" cy="82" r="5" opacity="0" data-route="94,82 118,82 216,82 216,112 216,178" />
            <circle className="pd-fill pd-dotB" cx="94" cy="82" r="5" opacity="0" data-route="94,82 118,82 216,82 216,112 216,178" />
            <rect className="pd-ink pd-box" x="118" y="52" width="196" height="60" rx="10" />
            <text className="pd-label" x="130" y="74">{t.container}</text>
            <text className="pd-mid pd-utc" x="130" y="100">UTC</text>
            <text className="pd-mid pd-small pd-tz" x="130" y="100" opacity="0">America/Sao_Paulo</text>
            <rect className="pd-ink pd-box" x="6" y="176" width="308" height="104" rx="10" />
            <text className="pd-label" x="18" y="200">{t.recorded}</text>
            <text className="pd-label pd-none" x="18" y="244">—</text>
            <text className="pd-big pd-bad pd-wrongtime" x="18" y="244" opacity="0">{t.wrongTime}</text>
            <text className="pd-label pd-plain pd-bad pd-late" x="18" y="266" opacity="0">{t.late}</text>
            <text className="pd-big pd-passtime" x="18" y="244" opacity="0">{t.passTime}</text>
            <path className="pd-ink pd-ok" d="M126 232 L134 240 L148 224" opacity="0" />
      </svg>
);

/**
 * A problem of MAGBO Access Control, drawn under its title, from the approved prototype (30/10/2026): before, the
 * error in red; after, the same pass set right. The scroll plays it while the drawing rises from three quarters of
 * the screen to a fifth. Visitors who prefer less motion see the end. The text beside it says the same in words, so
 * the drawing is hidden from screen readers.
 */
export const ProblemDiagram = ({ kind }: { kind: DiagramKind }) => {
      const rootRef = useRef<HTMLDivElement>(null);
      const { language } = useLanguage();
      const t = DIAGRAMS[language];

      useGSAP(
            () => {
                  const root = rootRef.current;
                  if (!root) return;
                  const mm = gsap.matchMedia();
                  mm.add('(prefers-reduced-motion: no-preference)', () => {
                        const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: 'top 75%', end: 'top 20%', scrub: 0.5 } });
                        (kind === 'meals' ? meals : clock)(tl, root);
                  });
                  mm.add('(prefers-reduced-motion: reduce)', () => {
                        gsap.set(SETTLED[kind].hide, { opacity: 0 });
                        gsap.set(SETTLED[kind].show, { opacity: 1 });
                  });
            },
            { scope: rootRef, dependencies: [kind] },
      );

      return (
            <div ref={rootRef} className="pd" aria-hidden="true">
                  {kind === 'meals' ? (
                        <>
                              <MealsWide t={t} />
                              <MealsCompact t={t} />
                        </>
                  ) : (
                        <>
                              <ClockWide t={t} />
                              <ClockCompact t={t} />
                        </>
                  )}
            </div>
      );
};
