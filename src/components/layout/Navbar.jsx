import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface-black/90 backdrop-blur-md border-b border-surface-border py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-10 sm:h-12 flex items-center">
              <img 
                src="/images/branding/logo.png" 
                alt={BUSINESS_CONFIG.name} 
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback in case image asset is in another path
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden font-extrabold text-lg sm:text-xl tracking-tight text-white">
                MBILAMUT <span className="text-brand-500">UNIQUE</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-surface-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={buildWhatsAppLink('general')}
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              external
            >
              Enquire on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={buildWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire via WhatsApp"
              className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/30"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-surface-card border border-surface-border text-surface-muted hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-card border-b border-surface-border px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-surface-muted hover:text-brand-400 hover:pl-2 transition-all py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-surface-border/60 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-surface-muted">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>{BUSINESS_CONFIG.cac.statusText} • Jos, Plateau State</span>
            </div>

            <Button
              href={buildWhatsAppLink('general')}
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="w-full justify-center"
              external
            >
              Chat on WhatsApp ({BUSINESS_CONFIG.displayPhone})
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}