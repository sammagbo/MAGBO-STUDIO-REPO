import { Helmet } from 'react-helmet-async';

export const SEOHelmet = () => {
      const title = 'Sammy K. Magbo — Software Engineer | Java & Spring Boot';
      const description = 'Software engineer and problem solver with cross-sector IT experience. Focused on Java and Spring Boot backend development. Relocating to Bordeaux, France — September 2026.';
      const url = 'https://sammagbo.com';

      return (
            <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content="Sammy Magbo, Software Engineer, Java, Spring Boot, Backend Developer, Bordeaux, France, Portfolio" />

                  {/* Open Graph */}
                  <meta property="og:title" content={title} />
                  <meta property="og:description" content={description} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={url} />
                  <meta property="og:image" content="https://sammagbo.com/og-image.png" />

                  {/* Twitter */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={title} />
                  <meta name="twitter:description" content={description} />
                  <meta name="twitter:image" content="https://sammagbo.com/og-image.png" />

                  {/* Theme */}
                  <meta name="theme-color" content="#050505" />
            </Helmet>
      );
};
