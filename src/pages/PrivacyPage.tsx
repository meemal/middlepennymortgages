import React from 'react';
import { Lock } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="py-16 bg-brand-grey-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center">
                <Lock className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <p className="text-brand-teal text-sm font-semibold uppercase tracking-wide mb-1">Appendix 3</p>
                <h1 className="text-3xl font-bold text-brand-grey">Data Protection Statement</h1>
                <p className="text-gray-500 text-sm mt-1">How we will handle your personal data and protect your privacy</p>
              </div>
            </div>
            <img src="/HLPParnershipLogo.png" alt="HL Partnership Limited" className="h-12 object-contain self-start sm:self-center" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div className="bg-brand-teal-light border border-brand-teal/20 rounded-xl p-6">
              <p className="text-gray-700">
                A guide to how we meet the requirements of the Data Protection Act. Making sure personal data is secure and properly dealt with is of paramount importance in our dealings with you. It is therefore important you understand what information we will take, why we need it, and how we will process your details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Who will process my data?</h2>
              <p>
                Middlepenny Mortgage Solutions is an appointed representative of HL Partnership Limited which is authorised and regulated by the Financial Conduct Authority. As such, both Middlepenny Mortgage Solutions and HL Partnership Limited will process your data in order to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">What data will you ask me for?</h2>
              <p>
                In order to fully understand your financial needs and be able to give good advice, we need to obtain information about you, your family, your personal circumstances, and your preferences. Some of the information will be private and may be sensitive, such as details of your income and expenditure, health, debts and credit commitments, legal proceedings and adverse credit. Much of the information you provide will need to be passed on to the companies whose products you apply for.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Do I have to provide my personal data?</h2>
              <p>
                In order for us to be able to give you suitable advice, we need you to provide all the information we ask for as openly and honestly as possible. If you prefer not to disclose some information, please tell us that you prefer not to disclose it and we will assess whether this will alter or impede the work we are doing for you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">How will you use my data?</h2>
              <ol className="space-y-6 mt-4">
                <li>
                  <p className="mb-3">The primary reason we will use your data is to allow us to do the job you've asked us to do. Specifically, we will use your data to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Assess and provide advice to meet your needs and circumstances;</li>
                    <li>Introduce you to a range of product and service providers in order to meet your requirements;</li>
                    <li>Administer cases and assist processing of applications;</li>
                    <li>Tell you about any changes to products and service we have arranged for you;</li>
                    <li>Inform you about products and services we think may be suitable for you (unless you ask us not to send you this information).</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">We may also process your information in order to meet our legal and regulatory requirements. These may include:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Complying with the regulations set out by the Financial Conduct Authority and other regulators as required;</li>
                    <li>Preventing financial crimes such as money laundering and fraud by passing your details to other relevant bodies such as the police and National Crime Agency where required.</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">We may also process your personal data for our own legitimate interests. Typically, these would be limited to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Analysing our business for trends and research how we can improve our services to customers;</li>
                    <li>Reviewing the work we have carried out for you to ensure we have met the regulations and quality standards;</li>
                    <li>Ensuring we are able to exercise or defend legal challenges in the future.</li>
                  </ul>
                </li>
                <li>
                  <p>HL Partnership Limited will use your data to monitor and assess our work to ensure we have provided a high standard of service and met our legal and regulatory commitments.</p>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">How long we will store your data?</h2>
              <p>
                We will only keep your personal information as long as necessary. How long that is depends on the type of data and the nature of the work we have carried out. In most cases, your personal data will be stored for an indefinite period as we need to keep evidence that we have fulfilled our legal and regulatory requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Can I see a copy of my personal data?</h2>
              <p>
                Yes. Please write to our Data Controller (details below) and we will provide a copy of any personal data we hold about you within one calendar month of receiving your request. Please note that we may need to verify your identity before providing the information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">What if my data is incorrect or incomplete?</h2>
              <p>
                You have the right to have your data corrected or completed by contacting our Data Controller in writing (details below). Please be aware that we need to maintain records of information as it was at the time of the advice or the transaction taking place.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Can I have my data erased?</h2>
              <p>
                If we have provided you with advice or processed a transaction on your behalf, we will not normally be able to erase your personal data. This is because we are obliged to maintain records of our advice and transactions to meet our regulatory requirements and in case we need to exercise or defend legal claims in future.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">Who is the Data Controller?</h2>
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 font-semibold text-brand-grey w-1/3"></th>
                      <th className="text-left px-5 py-3 font-semibold text-brand-grey">Middlepenny Mortgage Solutions</th>
                      <th className="text-left px-5 py-3 font-semibold text-brand-grey">HL Partnership Limited</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-5 py-3 font-medium text-gray-600">Name</td>
                      <td className="px-5 py-3">Emma Murphy</td>
                      <td className="px-5 py-3">HL Partnership Limited</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-5 py-3 font-medium text-gray-600 align-top">Address</td>
                      <td className="px-5 py-3">
                        {siteData.address.line2}<br />
                        {siteData.address.line3}<br />
                        {siteData.address.line4}
                      </td>
                      <td className="px-5 py-3">
                        6 Merus Court<br />
                        Meridian Business Park<br />
                        Leicester<br />
                        LE19 1RJ
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-medium text-gray-600">Telephone</td>
                      <td className="px-5 py-3">{siteData.phone}</td>
                      <td className="px-5 py-3">03300 552651</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-5 py-3 font-medium text-gray-600">Email</td>
                      <td className="px-5 py-3">
                        <a href={`mailto:${siteData.email}`} className="text-brand-teal underline">{siteData.email}</a>
                      </td>
                      <td className="px-5 py-3">
                        <a href="mailto:compliance@hlpartnership.co.uk" className="text-brand-teal underline">compliance@hlpartnership.co.uk</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-medium text-gray-600">Data Controller Registration</td>
                      <td className="px-5 py-3 text-gray-500 italic">Available on request</td>
                      <td className="px-5 py-3">Z8588911</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">How can I get more information?</h2>
              <p>
                If you would like further details on how we use your personal information or if you have any data protection queries, please write to:
              </p>
              <address className="not-italic mt-3 bg-gray-50 p-4 rounded-lg text-sm">
                The Data Protection Officer<br />
                HL Partnership Limited<br />
                6 Merus Court, Meridian Business Park, Leicester LE19 1RJ<br />
                Email: <a href="mailto:compliance@hlpartnership.co.uk" className="text-brand-teal underline">compliance@hlpartnership.co.uk</a>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-grey mb-3">If you'd like to make a complaint about how we have handled your personal data…</h2>
              <p className="mb-4">
                …please write in the first instance to The Data Protection Officer at the above address.
              </p>
              <p className="mb-3">
                If you are not satisfied with the Data Protection Officer's response, you can make a complaint to:
              </p>
              <address className="not-italic bg-gray-50 p-4 rounded-lg text-sm">
                Information Commissioner's Office<br />
                Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF<br />
                Telephone: 0303 123 1113 (local rate) or 01625 545 745 (national rate)<br />
                Email through their website at: <a href="https://ico.org.uk/concerns/" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline">https://ico.org.uk/concerns/</a>
              </address>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-brand-grey mb-3">Important Notes on Protecting your own Data</h2>
              <p className="mb-4">
                Please be aware of cybercrime and protecting your own information online, particularly financial information. Do not send unsecure personal information over the internet. We recommend you use encryption software or provide any information to us using the online tools we provide.
              </p>
              <p>
                Do not respond to emails asking you to pay money. Never make a payment purely in response to an email. Always call the company to validate any payment requests and check the phone number independently from the email (i.e. via a secure web site). If you receive a phone call asking for payment ensure you are satisfied the call is genuine, or else call the company back to check. Neither Middlepenny Mortgage Solutions nor HL Partnership will take responsibility if you transfer money to a fraudster in error.
              </p>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
