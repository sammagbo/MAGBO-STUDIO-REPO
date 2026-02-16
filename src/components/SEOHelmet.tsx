import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

export const SEOHelmet = () => {
      const { t, language } = useLanguage();

      return (
            <Helmet htmlAttributes={{ lang: language }}>
                  <title>{t.meta.title}</title>
                  <meta name="description" content={t.meta.description} />
                  <meta name="keywords" content={t.meta.keywords} />

                  {/* Open Graph / Facebook */}
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://magbo.studio/" />
                  <meta property="og:title" content={t.meta.title} />
                  <meta property="og:description" content={t.meta.description} />
                  <meta property="og:image" content="https://magbo.studio/og-image.jpg" />
                  <meta property="og:locale" content={language} />

                  {/* Twitter */}
                  <meta property="twitter:card" content="summary_large_image" />
                  <meta property="twitter:url" content="https://magbo.studio/" />
                  <meta property="twitter:title" content={t.meta.title} />
                  <meta property="twitter:description" content={t.meta.description} />
                  <meta property="twitter:image" content="https://magbo.studio/og-image.jpg" />

                  {/* Theme Color for mobile browsers */}
                  <meta name="theme-color" content="#020617" />
            </Helmet>
      );
};
