import React from 'react';
import { Award, Clock, Monitor, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

const credentials = [
  { icon: Award, label: 'CMAP Qualified', detail: 'Certificate in Mortgage Advice and Practice' },
  { icon: Clock, label: 'Advising Since 2017', detail: 'Nearly a decade in financial services' },
  { icon: Monitor, label: 'Nationwide Remote Advice', detail: 'Serving clients across the UK via Zoom and Teams' },
  { icon: CheckCircle, label: 'FCA Regulated', detail: 'Appointed representative of HL Partnership Limited' },
];

const timeline = [
  {
    year: '2013',
    title: 'Estate Agency Career Begins',
    description: 'Emma started her career in estate agency, developing an in-depth understanding of the property market and the homebuying process.',
  },
  {
    year: '2017',
    title: 'Qualified Mortgage Adviser',
    description: 'After completing her CMAP qualification, Emma began advising clients on mortgages and protection combining her property knowledge with financial expertise.',
  },
  {
    year: 'Today',
    title: 'Middlepenny Mortgage Solutions',
    description: 'Now running her own advisory practice, Emma helps clients across the UK with mortgage and protection advice through a personal, relationship-led approach.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/BEautiful_Houses.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Emma Murphy</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            A qualified mortgage adviser combining nearly a decade of financial services experience with a genuine commitment to personal service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative">
                <img
                  src="/Emma_Murphy.JPG"
                  alt="Emma Murphy Mortgage Adviser"
                  className="rounded-2xl shadow-xl w-full object-cover object-top"
                  style={{ maxHeight: '600px' }}
                />
                <div className="absolute -bottom-5 -left-5 bg-brand-teal text-white px-6 py-4 rounded-xl shadow-lg">
                  <p className="font-bold text-lg">Emma Murphy</p>
                  <p className="text-white/80 text-sm">Mortgage & Protection Adviser</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-brand-teal text-sm font-medium mb-5">
                <Award className="w-4 h-4" />
                CMAP Qualified Adviser
              </div>
              <h2 className="text-3xl font-bold text-brand-grey mb-6">A Personal Approach to Mortgage Advice</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Emma began her career in estate agency in 2013, quickly developing a thorough understanding of the property market and the often complex emotions involved in buying and selling a home. That experience gave her a perspective most mortgage advisers simply do not have.
                </p>
                <p>
                  In 2017, Emma qualified as a mortgage adviser and began helping clients navigate the mortgage process with clarity and confidence. Nearly a decade later, that commitment to personal service remains at the heart of everything she does.
                </p>
                <p>
                  Emma advises clients across the UK, offering appointments via Zoom and Teams, making expert mortgage and protection advice accessible wherever you are, without the need to travel.
                </p>
                <p className="italic text-brand-grey font-medium border-l-4 border-brand-teal pl-4 py-2">
                  "{siteData.valueStatement.substring(0, 180)}..."
                </p>
              </div>
              <a href="/contact" className="btn-primary mt-8">
                <Phone className="w-4 h-4" />
                Speak to Emma
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Credentials & Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => (
              <div key={cred.label} className="card text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-teal-light flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="font-bold text-brand-grey mb-2">{cred.label}</h3>
                <p className="text-gray-500 text-sm">{cred.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Emma's Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-teal-light" />
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-8 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm relative z-10">
                    {item.year}
                  </div>
                  <div className="card flex-1 mt-2">
                    <h3 className="text-lg font-bold text-brand-grey mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-teal text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-white/85 text-lg mb-8">Get in touch to arrange a no-obligation conversation about your mortgage or protection needs.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            <Phone className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </section>
    </PageShell>
  );
}
