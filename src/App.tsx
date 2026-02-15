import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsView } from '@/views/ProjectsView';
import { ExpertiseView } from '@/views/ExpertiseView';
import { RadarView } from '@/views/RadarView';
import { StatusView } from '@/views/StatusView';
import { IntelView } from '@/views/IntelView';
import { ContactView } from '@/views/ContactView';
import { CommandPalette } from '@/components/CommandPalette';
import { SEOHelmet } from '@/components/SEOHelmet';
import { LanguageProvider } from '@/context/LanguageContext';

function App() {
      return (
            <LanguageProvider>
                  <HelmetProvider>
                        <ErrorBoundary>
                              <SEOHelmet />
                              <MainLayout>
                                    <CommandPalette />
                                    <HeroSection />
                                    <div id="projects">
                                          <ProjectsView />
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
