import { useEffect, useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { CVSection } from '@/components/CVSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { CommandPalette } from '@/components/CommandPalette';
import { SEOHelmet } from '@/components/SEOHelmet';
import { NoiseOverlay } from '@/components/NoiseOverlay';
import { LanguageProvider } from '@/context/LanguageContext';
import { trackEvent } from '@/utils/telemetry';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy-load below-the-fold views to reduce initial bundle size
const ProjectsView = lazy(() => import('@/views/ProjectsView').then(m => ({ default: m.ProjectsView })));
const ExpertiseView = lazy(() => import('@/views/ExpertiseView').then(m => ({ default: m.ExpertiseView })));
const RadarView = lazy(() => import('@/views/RadarView').then(m => ({ default: m.RadarView })));
const StatusView = lazy(() => import('@/views/StatusView').then(m => ({ default: m.StatusView })));
const IntelView = lazy(() => import('@/views/IntelView').then(m => ({ default: m.IntelView })));
const LabsView = lazy(() => import('@/views/LabsView').then(m => ({ default: m.LabsView })));
const ArchiveView = lazy(() => import('@/views/ArchiveView').then(m => ({ default: m.ArchiveView })));
const ContactView = lazy(() => import('@/views/ContactView').then(m => ({ default: m.ContactView })));
const TerminalView = lazy(() => import('@/components/TerminalView').then(m => ({ default: m.TerminalView })));

gsap.registerPlugin(ScrollTrigger);

// Minimal loading spinner for lazy-loaded sections
const SectionFallback = () => (
      <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-anyflow-lime border-t-transparent rounded-full animate-spin" />
      </div>
);

function App() {
      const [cliMode, setCliMode] = useState(false);

      // Lenis smooth scroll (only when GUI mode active)
      useEffect(() => {
            if (cliMode) return;

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
      }, [cliMode]);

      // Global Ctrl+` (backtick/tilde) listener for CLI mode toggle
      useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                  if (e.ctrlKey && (e.key === '`' || e.key === '~')) {
                        e.preventDefault();
                        setCliMode(prev => {
                              const next = !prev;
                              if (next) {
                                    trackEvent('CLI_ACTIVATED', { trigger: 'keyboard', shortcut: 'Ctrl+~' });
                              }
                              return next;
                        });
                  }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
      }, []);

      return (
            <LanguageProvider>
                  <HelmetProvider>
                        <ErrorBoundary>
                              <SEOHelmet />

                              {/* CLI MODE — Hacker Switch */}
                              {cliMode && (
                                    <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
                                          <TerminalView onExit={() => setCliMode(false)} />
                                    </Suspense>
                              )}

                              {/* GUI MODE — Normal Site */}
                              {!cliMode && (
                                    <>
                                          <NoiseOverlay />
                                          <MainLayout>
                                                <CommandPalette />
                                                <HeroSection />
                                                <CVSection />
                                                <ProcessSection />
                                                <CapabilitiesSection />
                                                <Suspense fallback={<SectionFallback />}>
                                                      <div id="projects">
                                                            <ProjectsView />
                                                      </div>
                                                      <div id="labs">
                                                            <LabsView />
                                                      </div>
                                                      <div id="expertise">
                                                            <ExpertiseView />
                                                      </div>
                                                      <div id="tech-radar">
                                                            <RadarView />
                                                      </div>
                                                      <div id="status">
                                                            <StatusView />
                                                      </div>
                                                      <div id="intel">
                                                            <IntelView />
                                                      </div>
                                                      <div id="archive">
                                                            <ArchiveView />
                                                      </div>
                                                      <div id="contact">
                                                            <ContactView />
                                                      </div>
                                                </Suspense>
                                          </MainLayout>
                                    </>
                              )}

                        </ErrorBoundary>
                  </HelmetProvider>
            </LanguageProvider>
      );
}

export default App;
