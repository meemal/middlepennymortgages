import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import {
  getStoredConsent,
  setStoredConsent,
  clearStoredConsent,
  loadGoogleAnalytics,
  disableGoogleAnalytics,
  ConsentStatus,
} from '../utils/cookieConsent';

interface CookieBannerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function CookieBanner({ forceOpen = false, onClose }: CookieBannerProps) {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === 'accepted') {
      loadGoogleAnalytics();
      setStatus(stored);
    } else if (stored === 'declined') {
      disableGoogleAnalytics();
      setStatus(stored);
    } else {
      const timer = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      clearStoredConsent();
      setStatus(null);
      setVisible(true);
    }
  }, [forceOpen]);

  const handleAccept = () => {
    setStoredConsent('accepted');
    loadGoogleAnalytics();
    setStatus('accepted');
    setVisible(false);
    onClose?.();
  };

  const handleDecline = () => {
    setStoredConsent('declined');
    disableGoogleAnalytics();
    setStatus('declined');
    setVisible(false);
    onClose?.();
  };

  if ((status !== null && !forceOpen) || !visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      aria-modal="true"
    >
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 sm:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mt-0.5">
                  <Cookie className="w-4 h-4 text-teal-400" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white text-sm font-semibold">Cookie Preferences</p>
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We use a single analytics cookie (Google Analytics) to understand how visitors use our site so we can improve it. No personal data is sold or shared with third parties.{' '}
                    <a
                      href="/cookies"
                      className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </p>

                  <button
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-2 inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs transition-colors"
                    aria-expanded={expanded}
                  >
                    {expanded ? (
                      <>Less detail <ChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>More detail <ChevronDown className="w-3 h-3" /></>
                    )}
                  </button>

                  {expanded && (
                    <div className="mt-3 p-3 rounded-lg bg-slate-700/50 border border-slate-600/40 text-xs text-slate-300 leading-relaxed space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        <span><strong className="text-white">Essential cookies</strong> — always active. Required for the site to function (e.g. remembering your cookie preference). Cannot be disabled.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                        <span><strong className="text-white">Analytics cookies</strong> — optional. Google Analytics helps us see which pages are popular and how users navigate the site. Accepting is appreciated but entirely your choice.</span>
                      </div>
                      <p className="text-slate-400 pt-1">You can change your preference at any time via the "Cookie Settings" link in the footer.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-150 whitespace-nowrap"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  Decline Analytics
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-500 transition-all duration-150 shadow-sm whitespace-nowrap"
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Accept Analytics
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
