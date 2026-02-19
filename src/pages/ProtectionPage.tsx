import React from 'react';
import { Heart, Shield, Banknote, Home, Building2, Phone, ArrowRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import { protectionServices } from '../data/servicesData';
import { siteData } from '../data/siteData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Shield,
  Banknote,
  Home,
  Building2,
};

const accentColors = [
  'from-rose-50 to-rose-100 border-rose-200',
  'from-teal-50 to-teal-100 border-teal-200',
  'from-blue-50 to-blue-100 border-blue-200',
  'from-amber-50 to-amber-100 border-amber-200',
  'from-green-50 to-green-100 border-green-200',
];

const iconColors = [
  'bg-rose-100 text-rose-600',
  'bg-teal-100 text-teal-600',
  'bg-blue-100 text-blue-600',
  'bg-amber-100 text-amber-600',
  'bg-green-100 text-green-600',
];

export default function ProtectionPage() {
  return (
    <PageShell>
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Family_Moving.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Protection & Insurance</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Protection is about safeguarding your home, income and family. Clear advice to ensure you have the right cover in place.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-5">Why Protection Matters</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Your home is likely your biggest financial asset. A mortgage is a long-term commitment, often stretching 25 years or more. Protection insurance ensures that if the unexpected happens, whether through serious illness, injury, or death, your family can remain in their home and maintain their standard of living. Emma will help you understand what cover is appropriate for your circumstances, without over-complicating it.
          </p>
        </div>
      </section>

      <section className="py-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {protectionServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`rounded-2xl border bg-gradient-to-br ${accentColors[index]} p-8 md:p-10`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColors[index]}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-brand-grey mb-4">{service.title}</h2>
                      <p className="text-gray-700 leading-relaxed text-base mb-6">{service.description}</p>
                      <a href="/contact.html" className="btn-primary text-sm py-2.5 px-5">
                        <Phone className="w-4 h-4" />
                        Discuss Your Options
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-white/70 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-4">Peace of Mind Starts with a Conversation</h2>
          <p className="text-white/85 text-lg mb-8">
            Emma will take the time to understand your circumstances and recommend the protection that is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact.html" className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
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
