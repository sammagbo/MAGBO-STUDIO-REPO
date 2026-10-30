import type { StoryText } from '@/data/story';

const CARD_EDGE = 'M112 110 H352 L380 138 V274 A12 12 0 0 1 368 286 H112 A12 12 0 0 1 100 274 V122 A12 12 0 0 1 112 110 Z';

/**
 * The picture of the hero story, in line drawing, approved by Sam on 30/10/2026: the student card (paper with the
 * school's stamp, then a smart card with its chip), the terminal (camera between two infrared lights, a screen, a
 * contactless reader), the face it reads, and the canteen panel. Each part carries a class that the hero's timeline
 * animates; the colours come from the hero's tokens, so the picture follows the theme.
 */
export const StoryObject = ({ text }: { text: StoryText }) => (
      <svg className="hs" viewBox="0 0 480 400" aria-hidden="true" focusable="false">
            <g className="hs-card">
                  <path className="hs-solid" d={CARD_EDGE} />
                  <rect className="hs-plastic" x="100" y="110" width="280" height="176" rx="12" opacity="0" />
                  <path className="hs-ink" d={CARD_EDGE} />
                  <path className="hs-ink hs-thin hs-muted hs-fold" d="M352 110 V138 H380" />
                  <path className="hs-ink hs-corner" d="M352 110 H368 A12 12 0 0 1 380 122 V138" opacity="0" />
                  <text className="hs-label" x="124" y="143">{text.card}</text>
                  <rect className="hs-ink hs-thin" x="124" y="158" width="72" height="92" rx="4" />
                  <circle className="hs-ink hs-thin" cx="160" cy="192" r="15" />
                  <path className="hs-ink hs-thin" d="M135 246 Q160 212 185 246" />
                  <path className="hs-ink hs-thin hs-muted" d="M214 176 H336 M214 198 H312 M214 220 H344" />
                  <g className="hs-stamp">
                        <circle className="hs-ink hs-thin hs-muted" cx="196" cy="246" r="17" strokeDasharray="3 3" />
                        <circle className="hs-ink hs-thin hs-muted" cx="196" cy="246" r="10" />
                  </g>
                  <g className="hs-chip" opacity="0">
                        <rect className="hs-ink hs-thin" x="214" y="238" width="42" height="32" rx="6" />
                        <path className="hs-ink hs-thin" d="M214 254 H226 M244 254 H256 M228 238 V248 M242 238 V248 M228 260 V270 M242 260 V270" />
                        <rect className="hs-ink hs-thin" x="226" y="248" width="18" height="12" rx="2" />
                  </g>
                  <path className="hs-ink hs-thin hs-muted hs-waves" d="M272 246 Q280 254 272 262 M280 240 Q292 254 280 268 M288 234 Q304 254 288 274" opacity="0" />
            </g>
            <g className="hs-terminal" opacity="0">
                  <rect className="hs-ink" x="316" y="40" width="124" height="320" rx="20" />
                  <circle className="hs-ink hs-thin" cx="378" cy="52" r="2.5" />
                  <circle className="hs-ink hs-thin hs-muted" cx="366" cy="52" r="1.2" />
                  <circle className="hs-ink hs-thin hs-muted" cx="390" cy="52" r="1.2" />
                  <rect className="hs-ink hs-thin" x="332" y="64" width="92" height="120" rx="8" />
                  <rect className="hs-ink hs-thin" x="340" y="214" width="76" height="76" rx="12" />
                  <path className="hs-ink hs-thin hs-muted hs-pad-waves" d="M368 244 Q373 252 368 260 M375 239 Q383 252 375 265 M382 234 Q393 252 382 270" />
                  <path className="hs-ink hs-pad-check" d="M362 252 L372 262 L394 238" opacity="0" />
                  <g className="hs-face" opacity="0">
                        <ellipse className="hs-ink hs-thin" cx="378" cy="112" rx="18" ry="23" />
                        <path className="hs-ink hs-thin" d="M352 178 Q378 140 404 178" />
                        <path className="hs-ink hs-thin hs-red" d="M348 84 V76 H356 M400 76 H408 V84 M408 140 V148 H400 M356 148 H348 V140" />
                  </g>
                  <line className="hs-ink hs-thin hs-red hs-scan" x1="336" x2="420" y1="70" y2="70" opacity="0" />
            </g>
            <g className="hs-panel" opacity="0">
                  <rect className="hs-ink" x="232" y="88" width="228" height="244" rx="14" />
                  <text className="hs-label" x="254" y="122">{text.canteen}</text>
                  <path className="hs-ink" d="M256 158 L264 166 L278 150" />
                  <text className="hs-label hs-fg" x="292" y="164">{text.validated}</text>
                  <text className="hs-label hs-small" x="292" y="186">{text.counted}</text>
                  <path className="hs-ink hs-muted" d="M258 214 L274 230 M274 214 L258 230" />
                  <text className="hs-label hs-fg" x="292" y="226">{text.refused}</text>
                  <text className="hs-label hs-small" x="292" y="248">{text.noMeal}</text>
                  <circle className="hs-dot" cx="260" cy="290" r="4" />
                  <text className="hs-label hs-fg" x="274" y="295">{text.live}</text>
                  <text className="hs-label hs-small" x="274" y="316">{text.since}</text>
            </g>
      </svg>
);
