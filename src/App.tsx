import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { CVSection } from '@/components/CVSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { ProjectsView } from '@/views/ProjectsView';
import { ExpertiseView } from '@/views/ExpertiseView';
import { RadarView } from '@/views/RadarView';
import { StatusView } from '@/views/StatusView';
import { IntelView } from '@/views/IntelView';
import { LabsView } from '@/views/LabsView';
import { ArchiveView } from '@/views/ArchiveView';
import { ContactView } from '@/views/ContactView';
import { CommandPalette } from '@/components/CommandPalette';
import { SEOHelmet } from '@/components/SEOHelmet';
import { LanguageProvider } from '@/context/LanguageContext';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
      useEffect(() => {
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
      }, []);

      return (
            <LanguageProvider>
                  <HelmetProvider>
                        <ErrorBoundary>
                              <SEOHelmet />
                              <MainLayout>
                                    <CommandPalette />
                                    <HeroSection />
                                    <CVSection />
                                    <ProcessSection />
                                    <CapabilitiesSection />
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
                              </MainLayout>
                        </ErrorBoundary>
                  </HelmetProvider>
            </LanguageProvider>
      );
}

export default App;
