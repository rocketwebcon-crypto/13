import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  const siteName = "Oregon Septic";
  const fullTitle = `${title} | ${siteName}`;

  // LocalBusiness Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oregon Septic LLC",
    "image": "https://oregonseptic.com/logo.png",
    "telephone": "541-510-4530",
    "email": "office@oregonseptic.co",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Box 36",
      "addressLocality": "Junction City",
      "addressRegion": "OR",
      "postalCode": "97448",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.2192,
      "longitude": -123.2066
    },
    "url": "https://oregonseptic.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$",
    "areaServed": ["Lane", "Linn", "Benton", "Lincoln", "Douglas", "Clackamas", "Marion", "Polk", "Yamhill"]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://oregonseptic.com${canonicalUrl || ''}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://oregonseptic.com${canonicalUrl || ''}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/1200/630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://oregonseptic.com${canonicalUrl || ''}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://picsum.photos/1200/630" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;