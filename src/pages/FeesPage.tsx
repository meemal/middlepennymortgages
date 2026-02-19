import React, { useEffect } from 'react';
import { CheckCircle, Info, Phone, ArrowRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';
import { updatePageMeta, generateBreadcrumbSchema, defaultSEO } from '../utils/seoHelpers';

const feeIncludes = [
  'Initial fact-find to understand your circumstances and needs',
  'Whole-of-market research across available mortgage products',
  'A clear, tailored recommendation with full explanation',
  'Preparation and submission of your mortgage application',
  'Liaison with lenders throughout the process',
  'Support and guidance through to completion',
];

export default function FeesPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Fees | £395 Transparent Mortgage Advice Fee | No Hidden Charges',
      description: 'Clear, transparent mortgage advice fee of £395. No hidden charges, VAT exempt financial services. Includes whole-of-market research, application submission, and ongoing support.',
      keywords: 'mortgage adviser fees, mortgage broker cost, £395 mortgage advice, transparent mortgage fees, no hidden charges, mortgage advice pricing',
      canonicalUrl: `${defaultSEO.domain}/fees`,
      schema: generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Fees', url: '/fees' },
      ]),
    });
  }, []);

  return (
    <PageShell>
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Key_In_Lock.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Fees</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Transparent, straightforward pricing with no hidden charges.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="card border-brand-teal border-2 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-teal" />
                <div className="pt-4">
                  <p className="text-sm font-medium text-brand-teal uppercase tracking-widest mb-4">Standard Mortgage Advice Fee</p>
                  <p className="text-7xl font-bold text-brand-grey mb-2">{siteData.fee}</p>
                  <p className="text-gray-500 text-sm mb-6">Financial services are VAT exempt</p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-800 text-sm leading-relaxed">
                        There may be a fee for mortgage advice. The exact amount will depend on your circumstances and will be confirmed before you proceed. The broker fee will be disclosed clearly in your Key Facts Illustration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-brand-grey mb-4">When Is the Fee Payable?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  The mortgage advice fee of {siteData.fee} is payable on application. This means you will not be asked to pay anything until you decide to proceed with a mortgage recommendation.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Initial conversations are entirely free and without obligation. Emma will discuss your needs, explain your options, and only confirm the fee once she has a clear picture of your circumstances.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-grey mb-5">What Your Fee Covers</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your mortgage advice fee covers the full end-to-end service from initial consultation through to completion. There are no add-ons and no surprises.
              </p>
              <ul className="space-y-3 mb-8">
                {feeIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-brand-teal-light border border-brand-teal/20 rounded-2xl p-6">
                <h3 className="font-semibold text-brand-grey mb-3">Protection Advice</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advice on protection products such as life insurance, critical illness cover and income protection is provided at no additional charge. Emma is remunerated by product providers by way of commission in relation to protection advice. Details will always be disclosed clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a Question About Fees?</h2>
          <p className="text-white/85 mb-8">
            Emma is happy to discuss fees and the service she provides before you commit to anything. There is no pressure and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5" />
              Get in Touch
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
