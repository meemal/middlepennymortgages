import React, { useState } from 'react';
import SharedHeader from './SharedHeader';
import SharedFooter from './SharedFooter';
import WhatsAppButton from './WhatsAppButton';
import CookieBanner from './CookieBanner';

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SharedHeader />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <SharedFooter onCookieSettings={() => setCookieSettingsOpen(true)} />
      <WhatsAppButton />
      <CookieBanner
        forceOpen={cookieSettingsOpen}
        onClose={() => setCookieSettingsOpen(false)}
      />
    </div>
  );
}
