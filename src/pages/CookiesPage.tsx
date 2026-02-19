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
              <p className="text-gray-500 text-sm mt-1">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, improve efficiency, and provide information to the owners of the site.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">How We Use Cookies</h2>
              <p>This website may use cookies to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Ensure the website functions correctly and securely</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how visitors use our website so we can improve it</li>
                <li>Measure the effectiveness of our content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-brand-grey mb-2">Essential Cookies</h3>
                  <p className="text-sm">These cookies are strictly necessary for the website to function and cannot be switched off. They are usually set only in response to actions you take, such as logging in or filling in forms. They do not store any personally identifiable information.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-brand-grey mb-2">Analytics Cookies</h3>
                  <p className="text-sm">We may use analytics cookies to understand how visitors interact with our website. This information is aggregated and anonymised, it does not identify individual visitors. It helps us improve the structure, content and user experience of our site.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-brand-grey mb-2">Preference Cookies</h3>
                  <p className="text-sm">These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Third-Party Cookies</h2>
              <p>Some pages on our website may include embedded content from third-party services (such as social media platforms). These third parties may set their own cookies when you interact with their content. We do not control these cookies and recommend you review the relevant third party's cookie policy for more information.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Managing Cookies</h2>
              <p>You can control and manage cookies in your browser settings. Most browsers allow you to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-sm">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-4 text-sm">Please note that blocking or deleting cookies may affect your experience on our website and some functionality may not work as expected.</p>
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
