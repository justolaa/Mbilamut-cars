import React from 'react';
import { MapPin, Phone, MessageCircle, Shield, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-card border-t border-surface-border pt-16 pb-10 text-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Identity & CAC */}
          <div className="space-y-4">
            <div className="h-10">
              <img 
                src="/images/branding/logo.png" 
                alt={BUSINESS_CONFIG.name} 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden font-bold text-lg text-white">
                MBILAMUT <span className="text-brand-500">UNIQUE</span>
              </div>
            </div>

            <p className="text-sm text-surface-muted leading-relaxed">
              Dependable car hire, self-drive, chauffeur-driven rentals, and logistics solutions across Jos, Plateau State, and nationwide routes.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-border/50 text-xs font-semibold text-brand-400 border border-brand-500/20">
              <Shield className="w-3.5 h-3.5 text-brand-500" />
              <span>{BUSINESS_CONFIG.cac.statusText}</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Mobility Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">Personal & Executive Car Hire</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">Self-Drive & Chauffeur Rentals</a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-brand-400 transition-colors">Corporate Transport & VIP Escorts</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">Event & Wedding Convoys</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">Intrastate & Interstate Logistics</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Office & Physical Location */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Office Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.address.line1},<br />
                  {BUSINESS_CONFIG.address.line2},<br />
                  {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}
                </span>
              </div>

              <div className="pt-2">
                <a 
                  href={BUSINESS_CONFIG.mapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Related Business & Instant Connect */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Related Business</h3>
            
            <div className="p-4 rounded-xl bg-surface-black border border-surface-border">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-white font-bold text-sm">{BUSINESS_CONFIG.partnerBusiness.name}</h4>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-400">
                  {BUSINESS_CONFIG.partnerBusiness.badge}
                </span>
              </div>
              <p className="text-xs text-surface-muted leading-relaxed mb-3">
                {BUSINESS_CONFIG.partnerBusiness.description}
              </p>
              <a
                href={buildWhatsAppLink('rinji')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 font-semibold"
              >
                <span>Enquire about imports</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <Button
              href={buildWhatsAppLink('general')}
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
              className="w-full justify-center"
              external
            >
              Direct WhatsApp Line
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <p className="text-surface-muted">
            Jos, Plateau State, Nigeria • Designed for dependable mobility
          </p>
        </div>
      </div>
    </footer>
  );
}