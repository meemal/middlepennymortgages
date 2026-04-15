import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CONSENT_KEY = 'middlepenny_cookie_consent';

type ConsentStatus = 'accepted' | 'declined' | null;

export default function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus;
    if (stored === 'accepted' || stored === 'declined') {
      setStatus(stored);
    } else {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setStatus('accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setStatus('declined');
    setVisible(false);
  };

  if (status !== null || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-teal-light flex items-center justify-center">
            <Cookie className="w-5 h-5 text-brand-teal" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-brand-grey mb-1">This site uses cookies</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              We use a single Google Analytics cookie to understand how visitors use our site. No personal data is collected.{' '}
              <a
                href="/cookies.html"
                className="text-brand-teal underline underline-offset-2 hover:text-brand-teal-dark transition-colors"
              >
                Cookie Policy
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
            >
              <X className="w-3.5 h-3.5" />
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-teal rounded-lg hover:bg-brand-teal-dark transition-all duration-150 shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
