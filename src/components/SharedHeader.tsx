import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

const navLinks = [
  {
    label: 'Mortgages',
    href: '/mortgages',
    children: [
      { label: 'First-Time Buyers', href: '/mortgages#first-time-buyers' },
      { label: 'Home Movers', href: '/mortgages#home-movers' },
      { label: 'Remortgages', href: '/mortgages#remortgages' },
      { label: 'Buy-to-Let', href: '/mortgages#buy-to-let' },
    ],
  },
  {
    label: 'Protection',
    href: '/protection',
    children: [
      { label: 'Life Insurance', href: '/protection#life-insurance' },
      { label: 'Critical Illness', href: '/protection#critical-illness' },
      { label: 'Income Protection', href: '/protection#income-protection' },
      { label: 'Buildings & Contents', href: '/protection#buildings-contents' },
      { label: 'Landlord Insurance', href: '/protection#landlord-insurance' },
    ],
  },
  { label: 'About Emma', href: '/about' },
  { label: 'Fees', href: '/fees' },
  { label: 'Contact', href: '/contact' },
];

export default function SharedHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="/Middlepenny_Logo.png"
              alt="Middlepenny Mortgage Solutions"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden nav:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-brand-grey font-medium hover:text-brand-teal transition-colors duration-200 rounded-lg hover:bg-brand-teal-light"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </a>
                {link.children && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-brand-grey hover:text-brand-teal hover:bg-brand-teal-light transition-colors duration-150"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden nav:flex items-center gap-3">
            <a
              href={`tel:${siteData.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-brand-grey hover:text-brand-teal transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              {siteData.phone}
            </a>
            <a href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get in Touch
            </a>
          </div>

          <div className="flex nav:hidden items-center gap-2">
            <a href="/contact" className="hidden sm:flex btn-primary text-sm py-2 px-4">
              Get in Touch
            </a>
            <button
              className="p-2 rounded-lg text-brand-grey hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-brand-grey font-medium hover:text-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-2 space-y-1 mb-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-brand-grey font-medium px-4"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                {siteData.phone}
              </a>
              <a href="/contact" className="btn-primary w-full justify-center">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
