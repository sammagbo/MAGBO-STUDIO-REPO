import { useEffect, useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { WorkSection } from '@/components/WorkSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { SEOHelmet } from '@/components/SEOHelmet';
import { trackEvent } from '@/utils/telemetry';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy-load the terminal easter egg
const TerminalView = lazy(() => import('@/components/TerminalView').then(m => ({ default: m.TerminalView })));

gsap.registerPlugin(ScrollTrigger);

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

      // Ctrl+` / Ctrl+~ listener for hidden terminal
      useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                  if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
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
            <HelmetProvider>
                  <ErrorBoundary>
                        <SEOHelmet />

                        {/* CLI MODE — Hacker Switch (Easter Egg) */}
                        {cliMode && (
                              <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
                                    <TerminalView onExit={() => setCliMode(false)} />
                              </Suspense>
                        )}

                        {/* GUI MODE — Premium Portfolio */}
                        {!cliMode && (
                              <MainLayout>
                                    <HeroSection />
                                    <AboutSection />
                                    <ExperienceSection />
                                    <WorkSection />
                                    <SkillsSection />
                                    <ContactSection />
                              </MainLayout>
                        )}

                  </ErrorBoundary>
            </HelmetProvider>
      );
}

export default App;
