import React, { useEffect } from 'react';
import { Home, Users, RefreshCw, Building2, Phone, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import PageShell from '../components/PageShell';
import { mortgageServices } from '../data/servicesData';
import { siteData } from '../data/siteData';
import { updatePageMeta, generateBreadcrumbSchema, generateServiceSchema, defaultSEO } from '../utils/seoHelpers';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  TruckMoving: Users,
  RefreshCw,
  Building2,
};

const serviceImages = [
  '/Key_In_Lock.jpeg',
  '/Family_Moving.jpeg',
  '/magestichouse.png',
  '/to_let_house.png',
];

export default function MortgagesPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Mortgage Services | First-Time Buyers, Remortgages & Buy-to-Let | Scotland & UK',
      description: 'Expert mortgage advice for first-time buyers, home movers, remortgages and buy-to-let properties. Whole of market access with transparent £395 fee. FCA regulated adviser serving clients across the UK.',
      keywords: 'first-time buyer mortgage, remortgage advice, buy-to-let mortgage, home mover mortgage, mortgage broker Scotland, whole of market mortgage adviser, FCA regulated mortgage advice',
      canonicalUrl: `${defaultSEO.domain}/mortgages`,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          generateServiceSchema('Mortgage Advisory Services', 'Comprehensive mortgage advice for first-time buyers, home movers, remortgages, and buy-to-let properties across the UK.'),
          generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Mortgage Services', url: '/mortgages' },
          ]),
        ],
      },
    });
  }, []);

  return (
    <PageShell>
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/BEautiful_Houses.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Mortgages</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            Clear, tailored mortgage advice for every stage of your property journey. No jargon — just honest guidance from a qualified adviser.
          </p>
          <div className="max-w-3xl mx-auto mt-6 bg-amber-50/95 backdrop-blur-sm border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-sm text-amber-900 text-left">
                <p>Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
                <p>Most Buy-to-Let mortgages are not regulated by the Financial Conduct Authority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-4 justify-center py-3" aria-label="Page sections">
            {mortgageServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="text-sm font-medium text-brand-grey hover:text-brand-teal transition-colors px-4 py-2 rounded-lg hover:bg-brand-teal-light"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {mortgageServices.map((service, index) => {
        const Icon = iconMap[service.icon] || Home;
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-brand-teal font-medium text-sm uppercase tracking-wide">Mortgage Advice</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-grey mb-5">{service.title}</h2>
                  <p className="text-gray-500 text-sm font-medium mb-3">
                    <span className="text-brand-teal">Who this is for:</span> {service.whoFor}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base mb-8">{service.description}</p>
                  <a href="/contact" className="btn-primary">
                    <Phone className="w-4 h-4" />
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full object-cover h-80"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 bg-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/85 text-lg mb-8">
            Emma is happy to discuss your situation and point you in the right direction — with no obligation and no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5" />
              Contact Us Today
            </a>
            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
