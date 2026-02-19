import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function SharedFooter() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="/">
              <img
                src="/Middlepenny_Logo.png"
                alt="Middlepenny Mortgage Solutions"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Clear, honest mortgage and protection advice across the UK. Personal service from a qualified adviser you can trust.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-brand-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-brand-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/mortgages#first-time-buyers" className="hover:text-brand-teal transition-colors">First-Time Buyers</a></li>
              <li><a href="/mortgages#home-movers" className="hover:text-brand-teal transition-colors">Home Movers</a></li>
              <li><a href="/mortgages#remortgages" className="hover:text-brand-teal transition-colors">Remortgages</a></li>
              <li><a href="/mortgages#buy-to-let" className="hover:text-brand-teal transition-colors">Buy-to-Let</a></li>
              <li><a href="/protection" className="hover:text-brand-teal transition-colors">Protection & Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-brand-teal transition-colors">About Emma</a></li>
              <li><a href="/fees" className="hover:text-brand-teal transition-colors">Fees</a></li>
              <li><a href="/contact" className="hover:text-brand-teal transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-brand-teal transition-colors">Terms of Business</a></li>
              <li><a href="/privacy" className="hover:text-brand-teal transition-colors">Privacy Policy</a></li>
              <li><a href="/complaints" className="hover:text-brand-teal transition-colors">Complaints Policy</a></li>
              <li><a href="/cookies" className="hover:text-brand-teal transition-colors">Cookies Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="flex items-start gap-2 hover:text-brand-teal transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{siteData.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.email}`} className="flex items-start gap-2 hover:text-brand-teal transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{siteData.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  {siteData.address.line1}<br />
                  {siteData.address.line2}<br />
                  {siteData.address.line3}<br />
                  {siteData.address.line4}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 space-y-4">
          <p className="text-slate-400 text-xs leading-relaxed">
            {siteData.regulatoryDisclosure}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            {siteData.jurisdictionDisclosure}
          </p>
          <p className="text-slate-400 text-xs">
            There may be a fee for mortgage advice. The exact amount will depend on your circumstances and will be confirmed before you proceed. Our standard mortgage advice fee is {siteData.fee}. Financial services are VAT exempt.
          </p>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Middlepenny Mortgage Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 bg-slate-700/50 px-6 py-3 rounded-lg border border-slate-600/50 hover:bg-slate-700 transition-all">
            <span className="text-slate-400 text-sm">Website by</span>
            <a href="https://humantouchai.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors group" aria-label="Website created by Human Touch AI">
              <img src="https://humantouchai.co.uk/HT-Logo-WT.png" alt="Human Touch AI Logo" className="h-6 w-auto group-hover:scale-110 transition-transform" loading="lazy" />
              <span className="font-medium text-slate-300 group-hover:text-white whitespace-nowrap">Human Touch AI</span>
              <span className="text-sm text-slate-500 group-hover:text-slate-300 hidden xl:inline whitespace-nowrap">Quality Websites Quickly</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
