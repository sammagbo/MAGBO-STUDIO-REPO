import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { CVSection } from '@/components/CVSection';
import { CommandPalette } from '@/components/CommandPalette';
import { SEOHelmet } from '@/components/SEOHelmet';
import { NoiseOverlay } from '@/components/NoiseOverlay';
import { CRTShutdown } from '@/components/CRTShutdown';
import { BootSequence } from '@/components/BootSequence';
import { DataStream } from '@/components/DataStream';
import { LanguageProvider } from '@/context/LanguageContext';
import { trackEvent } from '@/utils/telemetry';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy-load below-the-fold views to reduce initial bundle size
const ProjectsView = lazy(() => import('@/views/ProjectsView').then(m => ({ default: m.ProjectsView })));
const StatusView = lazy(() => import('@/views/StatusView').then(m => ({ default: m.StatusView })));
const IntelView = lazy(() => import('@/views/IntelView').then(m => ({ default: m.IntelView })));
const ContactView = lazy(() => import('@/views/ContactView').then(m => ({ default: m.ContactView })));
const TerminalView = lazy(() => import('@/components/TerminalView').then(m => ({ default: m.TerminalView })));

gsap.registerPlugin(ScrollTrigger);

// ── Transition State Machine ──────────────────────────────────────────
// boot → gui → shutting-down → cli → booting-gui → gui
type TransitionPhase = 'boot' | 'gui' | 'shutting-down' | 'cli' | 'booting-gui';

// Minimal loading spinner for lazy-loaded sections
const SectionFallback = () => (
      <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-anyflow-lime border-t-transparent rounded-full animate-spin" />
      </div>
);

function App() {
      const [phase, setPhase] = useState<TransitionPhase>('boot');

      // Derived booleans for readability
      const showGUI = phase === 'gui' || phase === 'shutting-down';
      const showCLI = phase === 'cli' || phase === 'booting-gui';
      const isTransitioning = phase === 'shutting-down' || phase === 'booting-gui';

      // ── CRT Transition Callbacks ──────────────────────────────────────
      const handleShutdownComplete = useCallback(() => {
            setPhase('cli');
      }, []);

      const handleBootComplete = useCallback(() => {
            setPhase('gui');
      }, []);

      const handleCLIExit = useCallback(() => {
            setPhase('booting-gui');
      }, []);

      // Lenis smooth scroll (only when GUI mode active)
      useEffect(() => {
            if (phase !== 'gui') return;

            const lenis = new Lenis({
                  lerp: 0.08,
                  smoothWheel: true,
            });

            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                  lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);

            return () => {
                  lenis.destroy();
            };
      }, [phase]);

      // Global Ctrl+` (backtick/tilde) listener for CLI mode toggle
      useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                  // Block toggle during transition
                  if (isTransitioning) return;

                  if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
                        e.preventDefault();
                        if (phase === 'gui') {
                              trackEvent('CLI_ACTIVATED', { trigger: 'keyboard', shortcut: 'Ctrl+~' });
                              setPhase('shutting-down');
                        } else if (phase === 'cli') {
                              setPhase('booting-gui');
                        }
                  }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
      }, [phase, isTransitioning]);

      return (
            <LanguageProvider>
                  <HelmetProvider>
                        <ErrorBoundary>
                              <SEOHelmet />

                              {/* Initial Boot Sequence */}
                              {phase === 'boot' && (
                                    <BootSequence onComplete={() => setPhase('gui')} />
                              )}

                              {/* CRT Transition Overlay */}
                              {phase === 'shutting-down' && (
                                    <CRTShutdown direction="off" onComplete={handleShutdownComplete} />
                              )}
                              {phase === 'booting-gui' && (
                                    <CRTShutdown direction="on" onComplete={handleBootComplete} />
                              )}

                              {/* CLI MODE — Hacker Terminal */}
                              {showCLI && (
                                    <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
                                          <TerminalView onExit={handleCLIExit} />
                                    </Suspense>
                              )}

                              {/* GUI MODE — Normal Site */}
                              {showGUI && (
                                    <div style={{
                                          visibility: phase === 'shutting-down' ? 'hidden' : 'visible',
                                          position: phase === 'shutting-down' ? 'fixed' : 'relative',
                                    }}>
                                          <NoiseOverlay />
                                          <DataStream />
                                          <MainLayout>
                                                <CommandPalette />
                                                <HeroSection />
                                                <CVSection />
                                                <Suspense fallback={<SectionFallback />}>
                                                      <div id="projects">
                                                            <ProjectsView />
                                                      </div>
                                                      <div id="core">
                                                            <StatusView />
                                                            <IntelView />
                                                      </div>
                                                      <div id="contact">
                                                            <ContactView />
                                                      </div>
                                                </Suspense>
                                          </MainLayout>
                                    </div>
                              )}

                        </ErrorBoundary>
                  </HelmetProvider>
            </LanguageProvider>
      );
}

export default App;
