import { Helmet } from 'react-helmet-async';

export const SEOHelmet = () => {
      return (
            <Helmet>
                  <title>MAGBO STUDIO | Elite Software Architecture</title>
                  <meta name="description" content="Specialized in Critical Infrastructure, GovTech & High-Security Systems. We architect institutional-grade platforms where failure is not an option." />

                  {/* Open Graph / Facebook */}
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://magbo.studio/" />
                  <meta property="og:title" content="MAGBO STUDIO | Elite Software Architecture" />
                  <meta property="og:description" content="Specialized in Critical Infrastructure, GovTech & High-Security Systems." />
                  <meta property="og:image" content="https://magbo.studio/og-image.jpg" />

                  {/* Twitter */}
                  <meta property="twitter:card" content="summary_large_image" />
                  <meta property="twitter:url" content="https://magbo.studio/" />
                  <meta property="twitter:title" content="MAGBO STUDIO | Elite Software Architecture" />
                  <meta property="twitter:description" content="Specialized in Critical Infrastructure, GovTech & High-Security Systems." />
                  <meta property="twitter:image" content="https://magbo.studio/og-image.jpg" />

                  {/* Theme Color for mobile browsers */}
                  <meta name="theme-color" content="#020617" />
            </Helmet>
      );
};
