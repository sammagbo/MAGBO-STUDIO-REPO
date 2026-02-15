import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { MainLayout } from '@/layout/MainLayout';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsView } from '@/views/ProjectsView';
import { ExpertiseView } from '@/views/ExpertiseView';
import { ContactView } from '@/views/ContactView';
import { CommandPalette } from '@/components/CommandPalette';
import { SEOHelmet } from '@/components/SEOHelmet';

function App() {
      return (
            <HelmetProvider>
                  <ErrorBoundary>
                        <SEOHelmet />
                        <MainLayout>
                              <CommandPalette />
                              <HeroSection />
                              <ProjectsView />
                              <ExpertiseView />
                              <ContactView />
                        </MainLayout>
                  </ErrorBoundary>
            </HelmetProvider>
      );
}

export default App;
