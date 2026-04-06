import { Helmet } from 'react-helmet-async';

export const SEOHelmet = () => {
      const title = 'Sammy K Magbo — Software Engineer & Security Architect';
      const description = 'Fullstack engineer specializing in React, Spring Boot, and security architecture. Building resilient software for critical environments.';
      const url = 'https://magbo.dev';

      return (
            <Helmet>
                  <title>{title}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content="Software Engineer, Security Architect, React, TypeScript, Java, Spring Boot, Fullstack, Portfolio" />

                  {/* Open Graph */}
                  <meta property="og:title" content={title} />
                  <meta property="og:description" content={description} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={url} />

                  {/* Twitter */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={title} />
                  <meta name="twitter:description" content={description} />

                  {/* Theme */}
                  <meta name="theme-color" content="#050505" />
            </Helmet>
      );
};
