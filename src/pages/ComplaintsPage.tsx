import React from 'react';
import { AlertCircle, CheckCircle, Clock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import PageShell from '../components/PageShell';
import { siteData } from '../data/siteData';

const timescales = [
  {
    label: 'Three Business Days',
    description: 'Once we receive your complaint, if we are able to resolve the matter by close of business on the third working day following its receipt, we will simply do so and advise you in writing with our Summary Resolution Communication.',
  },
  {
    label: 'Five Business Days',
    description: 'If we are not able to resolve the matter as above, we will write to you within five business days acknowledging your complaint, confirming our understanding of the situation, and providing you with the name of the individual handling the complaint.',
  },
  {
    label: 'Four Weeks',
    description: 'If we haven\'t been able to resolve the complaint sooner, after four weeks we will send you either our Final Response letter or a progress report explaining why we are not yet in a position to resolve the complaint.',
  },
  {
    label: 'Eight Weeks',
    description: 'If we still haven\'t been able to resolve the case before hand, at eight weeks we will send you either our Final Response letter or an explanation why we are not yet in a position to resolve the complaint, giving the reason for the delay and indicating when we expect to be able to provide a final response.',
  },
];

const customerCommitments = [
  {
    title: 'Tell us what happened',
    description: 'We need to understand the situation as clearly as possible so we may ask you to provide your side of the story or let us have documents and information which may help our investigation. These can be provided by post, email, verbally or through any other means that you prefer.',
  },
  {
    title: 'Help us find the right solution',
    description: 'It is in everyone\'s interests to get complaints settled amicably so if there is a particular outcome you believe would be suitable, tell us and we will assess if this is possible. We may not be able to resolve the case the way you would like but we can try. And if we can\'t, we will explain why it is not possible and offer an alternative solution.',
  },
  {
    title: 'Respond to us as soon as you can',
    description: 'Hopefully we won\'t need to come back to you too often, but we may need further information or clarity on certain points. If we do need more information, we simply ask you to come back to us as soon as you can so that we can get things resolved quicker. If you can\'t come back straight away, that\'s fine too, just let us know.',
  },
  {
    title: 'Treat us with respect',
    description: 'Whilst it can be frustrating if something\'s gone wrong, our job is to find out what happened and where appropriate, put things right. Our staff will do everything we can to help so we ask you give them the time to do their work and treat them with respect.',
  },
];

export default function ComplaintsPage() {
  return (
    <PageShell>
      <section className="py-16 bg-brand-grey-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal-light flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-brand-grey">Customer Complaints Procedure</h1>
                <p className="text-gray-500 text-sm mt-1">HL Partnership Limited & Appointed Representatives</p>
              </div>
            </div>
            <img src="/HLPParnershipLogo.png" alt="HL Partnership Limited" className="h-12 object-contain self-start sm:self-center" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <div>
            <p className="text-gray-700 leading-relaxed">
              Hopefully all your dealings with HL Partnership Limited and our Appointed Representatives will be positive experiences. However, sometimes things go wrong and if that happens, we operate a structured Complaints Procedure to ensure we get things back on track as quickly as possible.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This document is a summary of that procedure which is designed to ensure any complaints are dealt with in a professional manner, are handled fairly, effectively, and promptly, and are resolved at the earliest possible opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-grey mb-2">Our Commitment to You</h2>
            <div className="w-12 h-1 bg-brand-teal rounded mb-8" />

            <div className="mb-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <p className="text-gray-700 leading-relaxed pt-1">We will endeavour to resolve your complaint as quickly as possible and will work within the following timescales:</p>
              </div>
              <div className="ml-11 space-y-4">
                {timescales.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 flex-shrink-0 w-40">
                      <Clock className="w-4 h-4 text-brand-teal" />
                      <span className="text-sm font-semibold text-brand-teal">{item.label}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="ml-11 mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Please note:</strong> A business day is a Monday to Friday between 9am and 5pm, excluding bank holidays. When a complaint is received on a non-business day, or on a business day outside business hours, we will treat the complaint as being received on the next business day.
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <p className="text-gray-700 leading-relaxed pt-1">We will ensure the person dealing with your complaint has the required skill, knowledge, and authority to respond to your complaint. Our staff are fully trained, and we operate a structured and robust complaints procedure to ensure all complaints are dealt with fairly.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div className="pt-1">
                  <p className="text-gray-700 leading-relaxed mb-5">We will ensure the letters we send are clear and explain things properly. When we resolve a complaint, you will either receive:</p>
                  <div className="space-y-4">
                    <div className="p-5 bg-brand-teal-light border border-brand-teal/20 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                        <h3 className="font-semibold text-brand-grey">Summary Resolution Communication</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed ml-7">Where we have been able to resolve a complaint within three business days, we will issue a Summary Resolution Communication explaining that we believe the complaint to be resolved. This will include details of how to escalate the case if you remain dissatisfied.</p>
                    </div>
                    <div className="p-5 bg-brand-teal-light border border-brand-teal/20 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                        <h3 className="font-semibold text-brand-grey">Final Response Letter</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed ml-7">Once we have completed an investigation, we will issue our Final Response Letter to you. This will detail the complaint, explain our investigation, and confirm our findings. The Final Response letter will either 'Uphold' your complaint or 'Reject' your complaint and explain why. If there is any settlement or redress awarded, an explanation of how this was calculated will also be included.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h2 className="text-xl font-bold text-brand-grey mb-4">Financial Ombudsman Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              We will give you access to the Financial Ombudsman Service which is a free service set up by Parliament to sort out individual complaints that consumers and financial businesses are not able to resolve themselves.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">
              If, once we have issued a Summary Resolution Communication or Final Response Letter (or after 8 weeks if we have yet to issue a Summary Resolution or Final Response letter), you remain dissatisfied with the outcome of our investigations, you may have the right to approach the Financial Ombudsman Service within 6 months of the date of the letter.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              If you do not refer your complaint in time, the Ombudsman will not have our permission to consider your complaint and so will only be able to do so in very limited circumstances. For example, if the Ombudsman believes that the delay was as a result of exceptional circumstances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              Details of how to get in touch with The Financial Ombudsman Service will be issued with our Summary Resolution and Final Response letters along with a leaflet explaining how the service works. If you require more information, the Financial Ombudsman Service can be contacted as follows:
            </p>
            <div className="bg-white rounded-xl p-5 border border-gray-100 space-y-3 text-sm">
              <p className="font-semibold text-brand-grey">Financial Ombudsman Service</p>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                <address className="not-italic">Exchange Tower, London, E14 9SR</address>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <a href="tel:03001239123" className="hover:text-brand-teal transition-colors">0300 123 9123</a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ExternalLink className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:text-brand-teal-dark transition-colors">www.financial-ombudsman.org.uk</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-grey mb-2">Your Commitment to Us</h2>
            <div className="w-12 h-1 bg-brand-teal rounded mb-8" />
            <p className="text-gray-700 leading-relaxed mb-6">In order to help resolve complaints as quickly and fairly as possible, we ask the following:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {customerCommitments.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="font-semibold text-brand-grey mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-grey mb-2">How to Complain</h2>
            <div className="w-12 h-1 bg-brand-teal rounded mb-8" />
            <p className="text-gray-700 leading-relaxed mb-6">
              If you wish to register a complaint, you can do so by contacting our Complaints Department using the following methods:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-semibold text-brand-grey text-sm">By Post</h3>
                </div>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  The Complaints Department<br />
                  HL Partnership Limited<br />
                  6 Merus Court,<br />
                  Meridian Business Park,<br />
                  Leicester,<br />
                  England,<br />
                  LE19 1RJ
                </address>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-semibold text-brand-grey text-sm">By Email</h3>
                </div>
                <a href="mailto:complaints@hlpartnership.co.uk" className="text-brand-teal underline text-sm hover:text-brand-teal-dark transition-colors break-all">
                  complaints@hlpartnership.co.uk
                </a>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-semibold text-brand-grey text-sm">By Telephone</h3>
                </div>
                <a href="tel:03300552651" className="text-brand-teal font-semibold text-sm hover:text-brand-teal-dark transition-colors">
                  03300 552 651
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
