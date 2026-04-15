import React from 'react';
import { Cookie } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

export default function CookiesPage() {
  return (
    <PageShell>
      <section className="py-16 bg-brand-grey-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center">
              <Cookie className="w-6 h-6 text-brand-teal" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-brand-grey">Cookies Policy</h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: April 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">What Are Cookies?</h2>
              <p>Cookies are small text files placed on your device when you visit a website. They are used to collect information about how a site is used and to help it function correctly.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">The Cookie We Use</h2>
              <p className="mb-4">This website uses a single cookie, set by Google Analytics. We do not use any essential, functional, or preference cookies.</p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-brand-grey mb-2">Google Analytics</h3>
                <p className="text-sm mb-3">We use Google Analytics to understand how visitors find and use our website. The information collected includes pages visited, time spent on the site, and approximate geographic location (country or region). This data is aggregated and anonymised — it does not identify you as an individual.</p>
                <p className="text-sm">The analytics cookie is set by Google, not by us. For full details on what Google Analytics collects and how it is used, please see{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-teal underline"
                  >
                    Google's Privacy Policy
                  </a>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Managing Cookies</h2>
              <p className="mb-3">You can prevent Google Analytics from collecting data about your visits by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teal underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
              <p>You can also manage or delete cookies at any time through your browser settings. Please be aware that disabling cookies will not affect your ability to use this website, as we do not rely on cookies for core functionality.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Contact</h2>
              <p>If you have any questions about our use of cookies, please contact us at <a href={`mailto:${siteData.email}`} className="text-brand-teal underline">{siteData.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
