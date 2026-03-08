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

                  {/* Content Security Policy — defense-in-depth (primary CSP via vercel.json) */}
                  <meta
                        httpEquiv="Content-Security-Policy"
                        content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://api.github.com https://vitals.vercel-insights.com https://www.google-analytics.com; frame-ancestors 'none';"
                  />

                  {/* Structured Data (JSON-LD) for SEO */}
                  <script type="application/ld+json">
                        {`
                              {
                                    "@context": "https://schema.org",
                                    "@type": "ProfessionalService",
                                    "name": "MAGBO STUDIO",
                                    "image": "https://magbo.studio/og-image.jpg",
                                    "description": "${t.meta.description}",
                                    "url": "https://magbo.studio",
                                    "founder": {
                                          "@type": "Person",
                                          "name": "Sammy K Magbo",
                                          "jobTitle": "Security \u0026 Software Architect"
                                    }
                              }
                        `}
                  </script>

                  {/* Theme Color for mobile browsers */}
                  <meta name="theme-color" content="#020617" />
            </Helmet>
      );
};
