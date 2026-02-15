import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsView } from '@/views/ProjectsView';
import { ExpertiseView } from '@/views/ExpertiseView';
import { RadarView } from '@/views/RadarView';
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
                                    <ProjectsView />
                                    <RadarView />
                                    <ExpertiseView />
                                    <ContactView />
                              </MainLayout>
                        </ErrorBoundary>
                  </HelmetProvider>
            </LanguageProvider>
      );
}

export default App;
