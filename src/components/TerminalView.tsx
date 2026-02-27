import { useState, useRef, useEffect, useCallback } from 'react';
import { trackEvent } from '@/utils/telemetry';
import { sanitizeCommand } from '@/utils/security';

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

const PROJECTS = [
      { code: 'VOTE_GUARD', type: 'Critical Governance', desc: 'Electronic voting system with real-time state machine logic, quorum control, and PDF report generation.' },
      { code: 'SECTOR_WATCH', type: 'Physical Security', desc: 'QR-based access control infrastructure for educational institutions with sector-based monitoring.' },
      { code: 'CORE_SYNC', type: 'Fullstack Infra', desc: 'Hybrid architecture with React + Spring Boot, migrating local persistence to secure APIs.' },
      { code: 'MEDIA_OPS', type: 'High Performance UI', desc: 'Media platform with Spotify API, GSAP magnetic physics, parallax effects, and technical SEO.' },
];

const WHOAMI_LINES = [
      '┌──────────────────────────────────────────────┐',
      '│  SAMMY K MAGBO                                │',
      '│  Role: Senior Software Architect              │',
      '│  Clearance: Level 5 — Full Access              │',
      '├──────────────────────────────────────────────┤',
      '│  Stack: React, TypeScript, Spring Boot, Go    │',
      '│  Focus: Critical Infrastructure & GovTech     │',
      '│  Auth: GSAP, Framer Motion, Lenis, Three.js   │',
      '│  Base: São Paulo, BR (HQ)                     │',
      '│  Ops: Remote — Global                         │',
      '├──────────────────────────────────────────────┤',
      '│  Status: ██████████████████████ OPERATIONAL   │',
      '└──────────────────────────────────────────────┘',
];

const HELP_LINES = [
      'Available commands:',
      '',
      '  help             — Show this help menu',
      '  whoami           — Display operator profile',
      '  ls projects      — List classified operations',
      '  cat <project>    — View project intel (e.g. cat VOTE_GUARD)',
      '  clear            — Clear terminal output',
      '  exit             — Return to GUI mode',
      '',
];

interface TerminalViewProps {
      onExit: () => void;
}

interface HistoryLine {
      type: 'input' | 'output' | 'error' | 'system';
      text: string;
}

export const TerminalView = ({ onExit }: TerminalViewProps) => {
      const [history, setHistory] = useState<HistoryLine[]>([]);
      const [input, setInput] = useState('');
      const [isBooting, setIsBooting] = useState(true);
      const [bootIndex, setBootIndex] = useState(0);
      const [cmdHistory, setCmdHistory] = useState<string[]>([]);
      const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1);
      const inputRef = useRef<HTMLInputElement>(null);
      const scrollRef = useRef<HTMLDivElement>(null);

      // Boot sequence
      useEffect(() => {
            if (!isBooting) return;
            if (bootIndex >= BOOT_LINES.length) {
                  setIsBooting(false);
                  return;
            }
            const timer = setTimeout(() => {
                  setHistory(prev => [...prev, { type: 'system', text: BOOT_LINES[bootIndex] }]);
                  setBootIndex(prev => prev + 1);
            }, bootIndex < 6 ? 80 : 40);
            return () => clearTimeout(timer);
      }, [isBooting, bootIndex]);

      // Auto-scroll
      useEffect(() => {
            if (scrollRef.current) {
                  scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
      }, [history]);

      // Focus input
      useEffect(() => {
            if (!isBooting && inputRef.current) {
                  inputRef.current.focus();
            }
      }, [isBooting]);

      const processCommand = useCallback((cmd: string) => {
            const trimmed = cmd.trim().toLowerCase();
            const lines: HistoryLine[] = [{ type: 'input', text: `guest@magbo-studio:~$ ${cmd}` }];

            // Track command usage
            if (trimmed) {
                  trackEvent('CLI_COMMAND_USED', { command: trimmed });
            }

            if (trimmed === 'help') {
                  HELP_LINES.forEach(l => lines.push({ type: 'output', text: l }));
            } else if (trimmed === 'whoami') {
                  WHOAMI_LINES.forEach(l => lines.push({ type: 'output', text: l }));
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
                  const projectName = trimmed.replace('cat ', '').toUpperCase();
                  const project = PROJECTS.find(p => p.code === projectName);
                  if (project) {
                        lines.push({ type: 'output', text: '' });
                        lines.push({ type: 'output', text: `  ╔══ ${project.code} ══╗` });
                        lines.push({ type: 'output', text: `  Type: ${project.type}` });
                        lines.push({ type: 'output', text: `  Status: DEPLOYED` });
                        lines.push({ type: 'output', text: `  ──────────────────────────────────────` });
                        lines.push({ type: 'output', text: `  ${project.desc}` });
                        lines.push({ type: 'output', text: '' });
                  } else {
                        lines.push({ type: 'error', text: `  cat: ${projectName}: No such file or directory` });
                        lines.push({ type: 'output', text: '  Try: ls projects' });
                  }
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

      const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                  const cmd = sanitizeCommand(input);
                  if (cmd.trim()) {
                        setCmdHistory(prev => [...prev, cmd]);
                  }
                  setCmdHistoryIndex(-1);
                  processCommand(cmd);
                  setInput('');
            } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  if (cmdHistory.length > 0) {
                        const newIndex = cmdHistoryIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdHistoryIndex - 1);
                        setCmdHistoryIndex(newIndex);
                        setInput(cmdHistory[newIndex]);
                  }
            } else if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  if (cmdHistoryIndex !== -1) {
                        const newIndex = cmdHistoryIndex + 1;
                        if (newIndex >= cmdHistory.length) {
                              setCmdHistoryIndex(-1);
                              setInput('');
                        } else {
                              setCmdHistoryIndex(newIndex);
                              setInput(cmdHistory[newIndex]);
                        }
                  }
            }
      };

      return (
            <div
                  className="fixed inset-0 z-[9998] bg-black text-green-400 font-mono text-sm overflow-hidden flex flex-col"
                  onClick={() => inputRef.current?.focus()}
                  style={{ cursor: 'text' }}
            >
                  {/* Scanlines overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                        style={{
                              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
                        }}
                  />

                  {/* Terminal content */}
                  <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 pb-2 relative z-20">
                        {history.map((line, i) => (
                              <div key={i} className={`leading-6 whitespace-pre-wrap break-all ${line.type === 'input' ? 'text-green-300' :
                                    line.type === 'error' ? 'text-red-400' :
                                          line.type === 'system' ? 'text-green-500' :
                                                'text-gray-300'
                                    }`}>
                                    {line.text}
                              </div>
                        ))}

                        {/* Active prompt */}
                        {!isBooting && (
                              <div className="flex items-center leading-6">
                                    <span className="text-green-300 whitespace-nowrap">guest@magbo-studio:~$&nbsp;</span>
                                    <input
                                          ref={inputRef}
                                          type="text"
                                          value={input}
                                          onChange={(e) => setInput(e.target.value)}
                                          onKeyDown={handleKeyDown}
                                          className="flex-1 bg-transparent outline-none text-green-400 caret-green-400 font-mono text-sm"
                                          spellCheck={false}
                                          autoComplete="off"
                                          autoFocus
                                          style={{ cursor: 'text' }}
                                    />
                                    <span className="w-2 h-5 bg-green-400 animate-pulse ml-0.5" />
                              </div>
                        )}
                  </div>

                  {/* Bottom status bar */}
                  <div className="h-8 bg-green-900/20 border-t border-green-800/30 flex items-center px-6 text-[10px] text-green-600 tracking-wider relative z-20">
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
