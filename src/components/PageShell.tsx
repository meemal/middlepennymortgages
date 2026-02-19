import React from 'react';
import SharedHeader from './SharedHeader';
import SharedFooter from './SharedFooter';
import WhatsAppButton from './WhatsAppButton';

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SharedHeader />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <SharedFooter />
      <WhatsAppButton />
    </div>
  );
}
