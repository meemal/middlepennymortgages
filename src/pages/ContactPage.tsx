import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
  marketingConsent: boolean;
  website: string; // Honeypot field
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacyAccepted: false,
  marketingConsent: false,
  website: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.privacyAccepted) {
      setError('Please confirm you have read and understood the Privacy Policy before submitting.');
      return;
    }

    // Honeypot spam protection
    if (form.website) {
      // Silent fail for bots
      setSubmitted(true);
      return;
    }

    setLoading(true);

    try {
      // Create FormData object for Formspree
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('subject', form.subject);
      formData.append('message', form.message);
      formData.append('marketingConsent', form.marketingConsent ? 'Yes' : 'No');
      formData.append('_subject', `New Contact Form: ${form.subject}`);

      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setError('Sorry, there was an error sending your message. Please try again or contact us directly.');
        }
      }
    } catch (err) {
      setError('Sorry, there was an error sending your message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Key_In_Lock.jpeg')" }}
        />
        <div className="absolute inset-0 bg-brand-grey/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto">
            Get in touch for a no-obligation conversation about your mortgage or protection needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-2xl font-bold text-brand-grey mb-8">Send a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Received</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for getting in touch. Emma will be in contact with you shortly to discuss your enquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot field - hidden from users but visible to bots */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-grey mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-grey mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-grey mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
                      placeholder="your@email.co.uk"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-grey mb-1.5">
                      How Can We Help? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition bg-white"
                    >
                      <option value="">Please select...</option>
                      <option value="First-Time Buyer Mortgage">First-Time Buyer Mortgage</option>
                      <option value="Home Mover Mortgage">Home Mover Mortgage</option>
                      <option value="Remortgage">Remortgage</option>
                      <option value="Buy-to-Let Mortgage">Buy-to-Let Mortgage</option>
                      <option value="Protection & Insurance">Protection & Insurance</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-grey mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition resize-none"
                      placeholder="Tell us a little about your situation and what you are looking for..."
                    />
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 space-y-4 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={form.privacyAccepted}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-brand-teal flex-shrink-0"
                      />
                      <label htmlFor="privacyAccepted" className="text-sm text-gray-700 leading-relaxed">
                        I confirm I have read and understood the{' '}
                        <a href="/privacy" className="text-brand-teal underline hover:text-brand-teal-dark font-medium">
                          Privacy Policy
                        </a>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="marketingConsent"
                        checked={form.marketingConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-brand-teal flex-shrink-0"
                      />
                      <label htmlFor="marketingConsent" className="text-sm text-gray-700 leading-relaxed">
                        I would like to receive occasional updates and information about mortgage and protection products from Middlepenny Mortgage Solutions. You may withdraw your consent at any time.
                      </label>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Your personal data will be processed in accordance with our{' '}
                    <a href="/privacy" className="text-brand-teal underline">Privacy Policy</a>.
                    Fields marked <span className="text-red-500">*</span> are required.
                  </p>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-grey mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-brand-teal-light hover:bg-brand-teal/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Telephone</p>
                      <p className="font-semibold text-brand-grey group-hover:text-brand-teal transition-colors">{siteData.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${siteData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                      <p className="font-semibold text-gray-700 group-hover:text-green-700 transition-colors">{siteData.mobile}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-grey flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="font-semibold text-brand-grey group-hover:text-brand-teal transition-colors text-sm">{siteData.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-grey" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Trading Address</p>
                      <address className="not-italic text-brand-grey font-medium text-sm leading-relaxed">
                        {siteData.address.line1}<br />
                        {siteData.address.line2}<br />
                        {siteData.address.line3}<br />
                        {siteData.address.line4}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-brand-grey mb-4">Follow Emma</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={siteData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-brand-grey hover:border-brand-teal hover:text-brand-teal transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={siteData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-brand-grey hover:border-brand-teal hover:text-brand-teal transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-amber-800 mb-2 text-sm">Remote Advice Available</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Emma advises clients across the UK via Zoom and Teams — so wherever you are, you can access expert mortgage and protection advice from the comfort of your own home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
