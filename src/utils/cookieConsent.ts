const GA_ID = 'G-9PPNKYJECR';
export const CONSENT_KEY = 'middlepenny_cookie_consent';

export type ConsentStatus = 'accepted' | 'declined' | null;

export function getStoredConsent(): ConsentStatus {
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === 'accepted' || val === 'declined') return val;
  } catch {
    // ignore
  }
  return null;
}

export function setStoredConsent(status: 'accepted' | 'declined'): void {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // ignore
  }
}

export function clearStoredConsent(): void {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
}

export function loadGoogleAnalytics(): void {
  if (document.getElementById('ga-script')) return;

  (window as any)[`ga-disable-${GA_ID}`] = false;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export function disableGoogleAnalytics(): void {
  (window as any)[`ga-disable-${GA_ID}`] = true;
}
