import React from 'react';
import { FileText } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

export default function TermsPage() {
  return (
    <PageShell>
      <section className="py-16 bg-brand-grey-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center">
              <FileText className="w-6 h-6 text-brand-teal" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-brand-grey">Terms of Business</h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">1. About Us</h2>
              <p>Middlepenny Mortgage Solutions is a trading name of Emma Murphy. Emma Murphy is an appointed representative of HL Partnership Limited which is authorised and regulated by the Financial Conduct Authority. HL Partnership Limited's FCA Register number is 303397. You can verify this at <a href="https://www.fca.org.uk/register" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline">www.fca.org.uk/register</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">2. Our Services</h2>
              <p>We provide independent mortgage advice, searching from a comprehensive range of mortgage products available to us. We also advise on protection products including life insurance, critical illness cover, income protection, buildings and contents insurance, and landlord insurance.</p>
              <p className="mt-3">We will make a personal recommendation based on your individual needs and circumstances following a full fact-find.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">3. Our Fees</h2>
              <p>There may be a fee for mortgage advice. The exact amount will depend on your circumstances and will be confirmed before you proceed. Our standard mortgage advice fee is <strong>{siteData.fee}</strong>, payable on application.</p>
              <p className="mt-3">Financial services are VAT exempt. The broker fee will be clearly documented in your Key Facts Illustration before you commit to any product or service.</p>
              <p className="mt-3">Advice on protection products is provided without charge to you. We receive commission from product providers in relation to protection recommendations, which will always be disclosed clearly.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">4. Your Responsibilities</h2>
              <p>You must ensure that all information you provide to us is accurate and complete. Providing inaccurate information could affect any mortgage or insurance product you take out, potentially invalidating a claim or resulting in your application being declined.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">5. Conflicts of Interest</h2>
              <p>We will always act in your best interests. Where a conflict of interest arises, we will inform you and take appropriate steps to manage it in accordance with our obligations under the FCA's rules.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">6. Complaints</h2>
              <p>If you are unhappy with any aspect of our service, please contact us in the first instance:</p>
              <address className="not-italic mt-3 bg-gray-50 p-4 rounded-lg">
                <strong>HLP Limited</strong><br />
               HLP UK Ltd Suite 7<br />
Commerce House<br />
Ridings Park<br />
Cannock<br />
Staffordshire<br />
WS11 7FJ<br />
                Email: <a href={`mailto:
enquiries@hlpltd.net`} className="text-brand-teal underline">
enquiries@hlpltd.net</a><br />
                Tel: 01543 275 101 
              </address>
              <p className="mt-4">If you are not satisfied with our response, you have the right to refer your complaint to the Financial Ombudsman Service (FOS) at <a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline">www.financial-ombudsman.org.uk</a> or by telephone on 0800 023 4567.</p>
              <p className="mt-3">Please also refer to our <a href="/complaints" className="text-brand-teal underline">Complaints Policy</a> for full details of our complaints procedure.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">7. Data Protection</h2>
              <p>We collect and use your personal data to provide mortgage and protection advice services. Please read our <a href="/privacy" className="text-brand-teal underline">Privacy Policy</a> for full details of how we handle your data.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">8. Regulatory Information</h2>
              <p>{siteData.regulatoryDisclosure}</p>
              <p className="mt-3">{siteData.jurisdictionDisclosure}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">9. Governing Law</h2>
              <p>These Terms of Business are governed by the laws of Scotland and are subject to the exclusive jurisdiction of the Scottish courts.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
