export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  type?: 'website' | 'article';
  schema?: object;
}

export const defaultSEO = {
  siteName: 'Middlepenny Mortgage Solutions',
  domain: 'https://www.middlepennymortgagesolutions.co.uk',
  ogImage: '/Emma_Murphy_Middle_Penny_Social.jpg',
  twitterHandle: '@MiddlepennyMS',
};

export function updatePageMeta(seo: SEOData) {
  document.title = seo.title;

  updateMetaTag('description', seo.description);
  if (seo.keywords) {
    updateMetaTag('keywords', seo.keywords);
  }

  updateMetaTag('og:title', seo.title, 'property');
  updateMetaTag('og:description', seo.description, 'property');
  updateMetaTag('og:type', seo.type || 'website', 'property');
  updateMetaTag('og:url', seo.canonicalUrl, 'property');
  updateMetaTag('og:image', seo.ogImage || `${defaultSEO.domain}${defaultSEO.ogImage}`, 'property');
  updateMetaTag('og:site_name', defaultSEO.siteName, 'property');

  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seo.title);
  updateMetaTag('twitter:description', seo.description);
  updateMetaTag('twitter:image', seo.ogImage || `${defaultSEO.domain}${defaultSEO.ogImage}`);

  updateLinkTag('canonical', seo.canonicalUrl);

  if (seo.schema) {
    updateStructuredData(seo.schema);
  }
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function updateStructuredData(schema: object) {
  let scriptElement = document.querySelector('script[type="application/ld+json"][data-dynamic]');
  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'application/ld+json');
    scriptElement.setAttribute('data-dynamic', 'true');
    document.head.appendChild(scriptElement);
  }
  scriptElement.textContent = JSON.stringify(schema);
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${defaultSEO.domain}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': `${defaultSEO.domain}/#organization`,
    name: 'Middlepenny Mortgage Solutions',
    description: 'Professional mortgage and protection advice for first-time buyers, home movers, remortgages and buy-to-let across the UK.',
    url: defaultSEO.domain,
    logo: `${defaultSEO.domain}/Middlepenny_Logo.png`,
    image: `${defaultSEO.domain}/Emma_Murphy_Middle_Penny_Social.jpg`,
    telephone: '+441414659215',
    email: 'emma@middlepennymortgagesolutions.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '54 Middlepenny Road',
      addressLocality: 'Langbank',
      addressRegion: 'Scotland',
      postalCode: 'PA14 6XE',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.9193,
      longitude: -4.5767,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    founder: {
      '@type': 'Person',
      name: 'Emma Murphy',
      jobTitle: 'Mortgage Adviser',
      description: 'CMAP qualified mortgage adviser with nearly a decade of experience in financial services.',
      sameAs: [
        'https://www.linkedin.com/in/emma-murphy-mortgage-adviser/',
        'https://www.facebook.com/middlepennymortgages/',
      ],
    },
    sameAs: [
      'https://www.linkedin.com/in/emma-murphy-mortgage-adviser/',
      'https://www.facebook.com/middlepennymortgages/',
    ],
    priceRange: '£395',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Bank Transfer, Cash',
    openingHours: 'Mo-Fr 09:00-17:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mortgage Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'First-Time Buyer Mortgage Advice',
            description: 'Expert guidance for those taking their first step onto the property ladder.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remortgage Advice',
            description: 'Find better rates and terms when your current mortgage deal ends.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buy-to-Let Mortgage Advice',
            description: 'Specialist advice for property investors and landlords.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Protection Insurance Advice',
            description: 'Life insurance, critical illness cover, and income protection.',
          },
        },
      ],
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${defaultSEO.domain}/#person`,
    name: 'Emma Murphy',
    jobTitle: 'Mortgage Adviser',
    description: 'CMAP qualified mortgage adviser providing expert mortgage and protection advice across the UK since 2017.',
    url: `${defaultSEO.domain}/about`,
    image: `${defaultSEO.domain}/Emma_Murphy.JPG`,
    email: 'emma@middlepennymortgagesolutions.co.uk',
    telephone: '+441414659215',
    worksFor: {
      '@id': `${defaultSEO.domain}/#organization`,
    },
    sameAs: [
      'https://www.linkedin.com/in/emma-murphy-mortgage-adviser/',
    ],
    knowsAbout: [
      'Mortgage Advice',
      'First Time Buyer Mortgages',
      'Remortgages',
      'Buy-to-Let Mortgages',
      'Protection Insurance',
      'Life Insurance',
      'Critical Illness Cover',
      'Income Protection',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Qualification',
      name: 'Certificate in Mortgage Advice and Practice (CeMAP)',
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@id': `${defaultSEO.domain}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    description: description,
  };
}
