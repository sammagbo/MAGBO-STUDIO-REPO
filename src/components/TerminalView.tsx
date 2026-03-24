import { useState, useRef, useEffect, useCallback } from 'react';
import { trackEvent } from '@/utils/telemetry';
import { sanitizeCommand } from '@/utils/security';
import { SAMMY_DATA } from '@/data/terminal';
import gsap from 'gsap';

// ── Boot Sequence ─────────────────────────────────────────────────────
const BOOT_LINES = [
      '[  OK  ] Starting MagboOS kernel...',
      '[  OK  ] Loading security modules...',
      '[  OK  ] Mounting encrypted filesystem...',
      '[  OK  ] Initializing network stack...',
      '[  OK  ] Starting threat detection service...',
      '[  OK  ] All systems operational.',
      '',
      '███╗   ███╗ █████╗  ██████╗ ██████╗  ██████╗',
      '████╗ ████║██╔══██╗██╔════╝ ██╔══██╗██╔═══██╗',
      '██╔████╔██║███████║██║  ███╗██████╔╝██║   ██║',
      '██║╚██╔╝██║██╔══██║██║   ██║██╔══██╗██║   ██║',
      '██║ ╚═╝ ██║██║  ██║╚██████╔╝██████╔╝╚██████╔╝',
      '╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝',
      '',
      'MagboOS v3.0 — Secure Terminal Interface',
      'Type "help" for available commands.',
      '',
];

// ── Static Command Data ───────────────────────────────────────────────
const PROJECTS = [
      { code: 'VOTE_GUARD', type: 'Critical Governance', desc: 'Electronic voting system with real-time state machine logic, quorum control, and PDF report generation.' },
      { code: 'SECTOR_WATCH', type: 'Physical Security', desc: 'QR-based access control infrastructure for educational institutions with sector-based monitoring.' },
      { code: 'CORE_SYNC', type: 'Fullstack Infra', desc: 'Hybrid architecture with React + Spring Boot, migrating local persistence to secure APIs.' },
      { code: 'MEDIA_OPS', type: 'High Performance UI', desc: 'Media platform with Spotify API, GSAP magnetic physics, parallax effects, and technical SEO.' },
];

const WHOAMI_LINES = [
      '┌──────────────────────────────────────────────┐',
      `│  ${SAMMY_DATA.name.toUpperCase().padEnd(44)}│`,
      `│  Role: ${SAMMY_DATA.role.padEnd(39)}│`,
      `│  Clearance: ${SAMMY_DATA.clearance.padEnd(33)}│`,
      '├──────────────────────────────────────────────┤',
      `│  Focus: ${SAMMY_DATA.focus.padEnd(37)}│`,
      `│  Base: ${SAMMY_DATA.base.padEnd(39)}│`,
      `│  Ops: ${SAMMY_DATA.ops.padEnd(40)}│`,
      '├──────────────────────────────────────────────┤',
      '│  Status: ██████████████████████ OPERATIONAL   │',
      '└──────────────────────────────────────────────┘',
];

const HELP_LINES = [
      'Available commands:',
      '',
      '  help             — Show this help menu',
      '  whoami           — Display operator profile',
      '  skills           — List technical skill set',
      '  ls projects      — View classified operations',
      '  github           — Fetch real-time GitHub repositories',
      '  cat <file>       — Attempt to read a file',
      '  clear            — Clear terminal output',
      '  exit             — Terminate session',
      '',
];

// ── Types ─────────────────────────────────────────────────────────────
interface TerminalViewProps {
      onExit: () => void;
}

interface HistoryLine {
      type: 'input' | 'output' | 'error' | 'system';
      text: string;
}

// ── Component ─────────────────────────────────────────────────────────
export const TerminalView = ({ onExit }: TerminalViewProps) => {
      // 4 required states
      const [history, setHistory] = useState<HistoryLine[]>([]);
      const [input, setInput] = useState('');
      const [commandHistory, setCommandHistory] = useState<string[]>([]);
      const [historyIndex, setHistoryIndex] = useState(-1);

      // Boot sequence state
      const [isBooting, setIsBooting] = useState(true);
      const [bootIndex, setBootIndex] = useState(0);

      // Refs
      const inputRef = useRef<HTMLInputElement>(null);
      const scrollRef = useRef<HTMLDivElement>(null);
      const bottomRef = useRef<HTMLDivElement>(null);

      // ── Boot Sequence (choreographed) ─────────────────────────────────
      useEffect(() => {
            if (!isBooting) return;
            if (bootIndex >= BOOT_LINES.length) {
                  setIsBooting(false);
                  return;
            }

            // System log lines (0-5): 80ms stagger
            // Empty line before banner (6): 60ms
            // ASCII banner block (7-12): 200ms pause then dump as single block
            // Welcome text (13+): 100ms stagger
            let delay: number;
            if (bootIndex < 6) {
                  delay = 80;
            } else if (bootIndex === 6) {
                  delay = 60;
            } else if (bootIndex === 7) {
                  // Dump entire ASCII banner as a single block after a dramatic pause
                  const timer = setTimeout(() => {
                        const bannerLines: HistoryLine[] = [];
                        for (let i = 7; i <= 12; i++) {
                              if (i < BOOT_LINES.length) {
                                    bannerLines.push({ type: 'system', text: BOOT_LINES[i] });
                              }
                        }
                        setHistory(prev => [...prev, ...bannerLines]);
                        setBootIndex(13); // skip past the banner
                  }, 200);
                  return () => clearTimeout(timer);
            } else if (bootIndex > 7 && bootIndex <= 12) {
                  // Already handled by the block dump above
                  setBootIndex(13);
                  return;
            } else {
                  delay = 100;
            }

            const timer = setTimeout(() => {
                  setHistory(prev => [...prev, { type: 'system', text: BOOT_LINES[bootIndex] }]);
                  setBootIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timer);
      }, [isBooting, bootIndex]);

      // ── Auto-Scroll (bottomRef + scrollIntoView) ─────────────────────
      useEffect(() => {
            if (bottomRef.current) {
                  bottomRef.current.scrollIntoView({ behavior: 'smooth' });
            }
      }, [history]);

      // ── Focus Input + Fade-In Welcome Text After Boot ─────────────────
      useEffect(() => {
            if (!isBooting) {
                  inputRef.current?.focus();
                  // GSAP fade-in the last few history lines (welcome text)
                  const container = scrollRef.current;
                  if (container) {
                        const lastLines = container.querySelectorAll('.terminal-line:nth-last-child(-n+4)');
                        gsap.fromTo(lastLines,
                              { opacity: 0, y: 6 },
                              { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
                        );
                  }
            }
      }, [isBooting]);

      // ── Command Processor ─────────────────────────────────────────────
      const processCommand = useCallback(async (cmd: string) => {
            const trimmed = cmd.trim().toLowerCase();
            const lines: HistoryLine[] = [{ type: 'input', text: `guest@magbo-studio:~$ ${cmd}` }];

            // Stealth telemetry
            if (trimmed) {
                  trackEvent('CLI_COMMAND_USED', { command: trimmed });
            }

            if (trimmed === 'help') {
                  HELP_LINES.forEach(l => lines.push({ type: 'output', text: l }));

            } else if (trimmed === 'whoami') {
                  WHOAMI_LINES.forEach(l => lines.push({ type: 'output', text: l }));

            } else if (trimmed === 'skills') {
                  lines.push({ type: 'output', text: '' });
                  lines.push({ type: 'output', text: '  OPERATOR SKILL SET — CLASSIFIED' });
                  lines.push({ type: 'output', text: '  ─────────────────────────────────' });
                  SAMMY_DATA.skills.forEach(skill => {
                        lines.push({ type: 'output', text: `  > ${skill}` });
                  });
                  lines.push({ type: 'output', text: '' });
                  lines.push({ type: 'output', text: `  Total: ${SAMMY_DATA.skills.length} active modules` });
                  lines.push({ type: 'output', text: '' });

            } else if (trimmed === 'ls projects') {
                  lines.push({ type: 'output', text: '' });
                  lines.push({ type: 'output', text: '  CODENAME         TYPE                 STATUS' });
                  lines.push({ type: 'output', text: '  ─────────────    ──────────────────   ──────────' });
                  PROJECTS.forEach(p => {
                        const code = p.code.padEnd(17);
                        const type = p.type.padEnd(21);
                        lines.push({ type: 'output', text: `  ${code}${type}DEPLOYED` });
                  });
                  lines.push({ type: 'output', text: '' });

            } else if (trimmed.startsWith('cat ')) {
                  const target = trimmed.replace('cat ', '').trim();
                  lines.push({ type: 'error', text: `  cat: ${target}: Permission denied` });
                  lines.push({ type: 'output', text: '  This file is classified. Access restricted to root operators.' });

            } else if (trimmed === 'github') {
                  lines.push({ type: 'output', text: '  [..] Establishing connection to GitHub API...' });
                  setHistory(prev => [...prev, ...lines]);

                  try {
                        const res = await fetch('https://api.github.com/users/sammagbo/repos?sort=updated&per_page=5');
                        if (!res.ok) throw new Error('API failure');
                        const data = await res.json();

                        const newLines: HistoryLine[] = [
                              { type: 'output', text: '  [OK] Connection secure. Latest remote transmissions:' },
                              { type: 'output', text: '' }
                        ];

                        data.forEach((repo: { name: string; language: string | null; description: string | null }) => {
                              const desc = repo.description ? `: ${repo.description.substring(0, 40)}...` : '';
                              newLines.push({ type: 'output', text: `  > ${repo.name.padEnd(20)} [${repo.language || 'Mixed'}]${desc}` });
                        });
                        newLines.push({ type: 'output', text: '' });
                        setHistory(prev => [...prev, ...newLines]);
                  } catch {
                        setHistory(prev => [...prev, { type: 'error', text: '  [ERR] Failed to pull remote data. Connection intercepted.' }]);
                  }
                  return;

            } else if (trimmed === 'clear') {
                  setHistory([]);
                  return;

            } else if (trimmed === 'exit') {
                  onExit();
                  return;

            } else if (trimmed === '') {
                  lines.length = 0;
                  lines.push({ type: 'input', text: 'guest@magbo-studio:~$' });

            } else {
                  lines.push({ type: 'error', text: `  bash: ${cmd}: command not found` });
                  lines.push({ type: 'output', text: '  Type "help" for available commands.' });
            }

            setHistory(prev => [...prev, ...lines]);
      }, [onExit]);

      // ── Keyboard Handler (Enter, ArrowUp, ArrowDown) ──────────────────
      const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                  const cmd = sanitizeCommand(input);
                  if (cmd.trim()) {
                        setCommandHistory(prev => [...prev, cmd]);
                  }
                  setHistoryIndex(-1);
                  processCommand(cmd);
                  setInput('');

            } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  if (commandHistory.length > 0) {
                        const newIndex = historyIndex === -1
                              ? commandHistory.length - 1
                              : Math.max(0, historyIndex - 1);
                        setHistoryIndex(newIndex);
                        setInput(commandHistory[newIndex]);
                  }

            } else if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  if (historyIndex !== -1) {
                        const newIndex = historyIndex + 1;
                        if (newIndex >= commandHistory.length) {
                              setHistoryIndex(-1);
                              setInput('');
                        } else {
                              setHistoryIndex(newIndex);
                              setInput(commandHistory[newIndex]);
                        }
                  }
            }
      };

      // ── Render ────────────────────────────────────────────────────────
      return (
            <div
                  className="fixed inset-0 z-[9998] font-mono text-sm overflow-hidden flex flex-col"
                  onClick={() => inputRef.current?.focus()}
                  style={{ backgroundColor: '#0a0a0a', color: '#BBFD6A', cursor: 'text' }}
            >
                  {/* CRT Scanlines overlay with flicker */}
                  <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(187,253,106,0.04) 2px, rgba(187,253,106,0.04) 4px)',
                              animation: 'crtFlicker 4s ease-in-out infinite',
                        }}
                  />

                  {/* CRT Vignette — edge shadow for monitor glow effect */}
                  <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                              boxShadow: 'inset 0 0 120px rgba(0,0,0,0.7), inset 0 0 60px rgba(0,0,0,0.4)',
                        }}
                  />

                  {/* Terminal content */}
                  <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 pb-2 relative z-20 phosphor-glow">
                        {history.map((line, i) => (
                              <div key={i} className="terminal-line leading-6 whitespace-pre-wrap break-all"
                                    style={{
                                          color: line.type === 'input' ? '#60a5fa'
                                                : line.type === 'error' ? '#f87171'
                                                      : line.type === 'system' ? '#BBFD6A'
                                                            : '#d1d5db',
                                    }}>
                                    {line.text}
                              </div>
                        ))}

                        {/* Active prompt */}
                        {!isBooting && (
                              <div className="flex items-center leading-6">
                                    <span className="text-blue-400 whitespace-nowrap">guest@magbo-studio:~$&nbsp;</span>
                                    <input
                                          ref={inputRef}
                                          type="text"
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          onKeyDown={handleKeyDown}
                                          className="flex-1 bg-transparent outline-none font-mono text-sm"
                                          spellCheck={false}
                                          autoComplete="off"
                                          autoFocus
                                          style={{ color: '#BBFD6A', caretColor: '#BBFD6A', cursor: 'text' }}
                                    />
                                    <span className="w-2 h-5 animate-pulse ml-0.5" style={{ backgroundColor: '#BBFD6A' }} />
                              </div>
                        )}

                        {/* Auto-scroll anchor */}
                        <div ref={bottomRef} />
                  </div>

                  {/* Bottom status bar */}
                  <div className="h-8 flex items-center px-6 text-[10px] tracking-wider relative z-20"
                        style={{ backgroundColor: 'rgba(187,253,106,0.05)', borderTop: '1px solid rgba(187,253,106,0.15)', color: 'rgba(187,253,106,0.6)' }}>
                        <span>MagboOS v3.0</span>
                        <span className="mx-4">|</span>
                        <span>SECURE_SESSION</span>
                        <span className="mx-4">|</span>
                        <span>256-BIT ENCRYPTED</span>
                        <span className="flex-1" />
                        <span className="opacity-50">Press Ctrl+~ or type "exit" to return to GUI</span>
                  </div>
            </div>
      );
};
