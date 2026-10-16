import { useEffect } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { LanguageProvider } from '@/context/LanguageContext';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
      // Lenis smooth scroll
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
                  <ErrorBoundary>
                        <MainLayout>
                              <HeroSection />
                              <AboutSection />
                              <ExperienceSection />
                              <ProjectsSection />
                              <SkillsSection />
                              <ContactSection />
                        </MainLayout>
                  </ErrorBoundary>
            </LanguageProvider>
      );
}

export default App;
