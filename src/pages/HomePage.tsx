import React, { useEffect } from 'react';
import { Home, RefreshCw, Building2, Shield, Phone, MessageCircle, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';
import { updatePageMeta, generateLocalBusinessSchema, generateFAQSchema, defaultSEO } from '../utils/seoHelpers';

const serviceCards = [
  {
    icon: Home,
    title: 'First-Time Buyers',
    summary: 'Taking your first step onto the property ladder? We make the process clear, simple and stress-free from start to finish.',
    href: '/mortgages#first-time-buyers',
  },
  {
    icon: Users,
    title: 'Home Movers',
    summary: 'Moving to a new home? We will assess your options and find the right mortgage to suit your next chapter.',
    href: '/mortgages#home-movers',
  },
  {
    icon: RefreshCw,
    title: 'Remortgages',
    summary: 'Coming to the end of your current deal? We will search the market and secure a rate that works for you.',
    href: '/mortgages#remortgages',
  },
  {
    icon: Building2,
    title: 'Buy-to-Let',
    summary: 'Investing in property? We provide practical, straightforward advice for landlords at every stage.',
    href: '/mortgages#buy-to-let',
  },
];

const trustPoints = [
  'Qualified CMAP mortgage adviser',
  'Advising clients since 2017',
  'Nationwide remote advice via Zoom & Teams',
  'Transparent fixed fee of £395',
  'Authorised via HL Partnership Limited',
];

export default function HomePage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Middlepenny Mortgage Solutions | Expert Mortgage Adviser Scotland & UK',
      description: 'Clear, honest mortgage and protection advice from Emma Murphy, a CMAP qualified mortgage adviser. Helping first-time buyers, home movers, remortgages and buy-to-let across the UK since 2017.',
      keywords: 'mortgage adviser UK, mortgage broker Scotland, first-time buyer mortgage advice, remortgage adviser, buy-to-let mortgage, protection insurance, mortgage advice Scotland, HL partnership authorised mortgage adviser',
      canonicalUrl: `${defaultSEO.domain}/`,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          generateLocalBusinessSchema(),
          generateFAQSchema([
            {
              question: 'What mortgage services does Middlepenny Mortgage Solutions offer?',
              answer: 'We provide expert mortgage advice for first-time buyers, home movers, remortgages, and buy-to-let properties across the UK. We also offer protection insurance advice including life insurance, critical illness cover, and income protection.',
            },
            {
              question: 'How much does mortgage advice cost?',
              answer: 'Our standard mortgage advice fee is £395, with transparent pricing and no hidden charges. Financial services are VAT exempt, and your fee is confirmed before you proceed.',
            },
            {
              question: 'Is Emma Murphy HL partnership authorised?',
              answer: 'Yes, Emma Murphy is an appointed representative of HL Partnership Limited, which is authorised and regulated by the Financial Conduct Authority (FCA).',
            },
            {
              question: 'Do you provide mortgage advice remotely?',
              answer: 'Yes, we advise clients across the UK via Zoom and Teams, making it convenient to get expert mortgage advice from anywhere in the country.',
            },
            {
              question: 'What qualifications does Emma Murphy have?',
              answer: 'Emma Murphy is CMAP qualified (Certificate in Mortgage Advice and Practice) and has been advising clients since 2017, with nearly a decade of experience in financial services.',
            },
          ]),
        ],
      },
    });
  }, []);

  return (
    <PageShell>
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/BEautiful_Houses.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
           
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Straightforward Mortgage Advice, Tailored to You
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Clear, honest mortgage and protection advice for first-time buyers, home movers and remortgages across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href={`https://wa.me/${siteData.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20mortgage%20advice.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-grey px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm text-base"
              >
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="section-heading mb-4">How Can We Help You?</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Whether you are buying your first home, moving, remortgaging or investing, Emma provides expert advice tailored to your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="card group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center mb-5 group-hover:bg-brand-teal transition-colors duration-200">
                  <card.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="text-lg font-semibold text-brand-grey mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.summary}</p>
                <span className="flex items-center gap-1 text-brand-teal text-sm font-medium group-hover:gap-2 transition-all">
                  Find out more <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/mortgages" className="btn-secondary">
              View All Mortgage Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey-light" aria-labelledby="protection-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <img
                src="/Family_Moving.jpeg"
                alt="Happy family moving into their new home with protection insurance covering their mortgage and financial security"
                className="rounded-2xl shadow-lg w-full object-cover h-96 lg:h-full"
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden lg:block" aria-hidden="true">
                <Shield className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">Protection</p>
                <p className="text-sm text-white/80">Safeguarding what matters most</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-brand-teal text-sm font-medium mb-4">
                <Shield className="w-4 h-4" aria-hidden="true" />
                Protection & Insurance
              </div>
              <h2 id="protection-heading" className="section-heading mb-5">Protecting Your Home, Income & Family</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A mortgage is one of the biggest financial commitments you will ever make. Protection insurance ensures that if the unexpected happens (illness, injury or death) your home, income and loved ones remain financially secure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Emma provides straightforward advice on life insurance, critical illness cover, income protection and buildings and contents insurance, ensuring you have the right cover in place without paying for what you do not need.
              </p>
              <a href="/protection" className="btn-primary">
                Explore Protection Options
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-teal text-sm font-medium mb-4">
                <Award className="w-4 h-4" aria-hidden="true" />
                Why Middlepenny
              </div>
              <h2 id="about-heading" className="section-heading mb-5">Advice Built on Trust and Clarity</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                {siteData.valueStatement}
              </p>
              <ul className="space-y-3 mb-8">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <a href="/about" className="btn-secondary">
                About Emma Murphy
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <img
                src="/Emma_Murphy.JPG"
                alt="Emma Murphy, CMAP qualified mortgage adviser providing expert mortgage and protection advice across Scotland and the UK"
                className="rounded-2xl shadow-lg w-full object-cover object-top h-[500px]"
                loading="lazy"
                width="600"
                height="500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center text-white">
              <p className="text-5xl font-bold mb-2">{siteData.fee}</p>
              <p className="text-white/80 text-sm font-medium uppercase tracking-wide">Standard Mortgage Advice Fee</p>
            </div>
            <div className="text-center text-white">
              <p className="text-white/90 text-lg font-medium mb-1">Transparent Pricing</p>
              <p className="text-white/70 text-sm">No hidden charges. Financial services are VAT exempt. Your fee is confirmed before you proceed.</p>
            </div>
            <div className="text-center">
              <a href="/fees" className="inline-flex items-center gap-2 bg-white text-brand-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View Full Fee Details
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Ready to Take the Next Step?</h2>
          <p className="section-subheading mb-10">
            Get in touch today for a no-obligation conversation about your mortgage or protection needs. Emma advises clients across the UK via Zoom and Teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary text-base px-8 py-4">
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href={`https://wa.me/${siteData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-brand-grey px-8 py-4 rounded-lg font-semibold hover:border-brand-teal hover:text-brand-teal transition-all duration-200 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
