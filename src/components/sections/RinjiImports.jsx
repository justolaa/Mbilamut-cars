import React from 'react';
import { Compass, Ship, ShieldCheck, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function RinjiImports() {
  const importServices = [
    {
      title: "Direct Vehicle Sourcing",
      desc: "Verified procurement of clean-title sedans, SUVs, and commercial haulers from reputable international auctions.",
    },
    {
      title: "Customs Clearing & Delivery",
      desc: "Complete shipping and port clearance documentation directly to your doorstep in Jos or anywhere in Nigeria.",
    },
    {
      title: "Pre-Purchase Inspection",
      desc: "Rigorous mechanical and body health audits conducted prior to purchase approval.",
    },
  ];

  return (
    <section className="py-20 bg-surface-black border-t border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-surface-card via-surface-card to-brand-950/40 border border-brand-500/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Background decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sister Company Identity */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
                <Ship className="w-3.5 h-3.5" />
                <span>Sister Enterprise • Automotive Sourcing</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Looking to Own a Vehicle? <br />
                <span className="text-brand-400">{BUSINESS_CONFIG.partnerBusiness.name}</span>
              </h2>

              <p className="text-surface-muted text-sm sm:text-base leading-relaxed">
                Beyond car hire, our sister venture specializes in bespoke automotive importation. From clean American and European spec SUVs to commercial fleet vehicles, we handle the entire sourcing and logistics chain.
              </p>

              <div className="pt-2">
                <Button
                  href={buildWhatsAppLink('rinji')}
                  variant="primary"
                  size="md"
                  icon={MessageCircle}
                  external
                >
                  Consult Rinji Auto Imports Desk
                </Button>
              </div>
            </div>

            {/* Right Column: 3 Pillars */}
            <div className="lg:col-span-6 space-y-3">
              {importServices.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-black/60 border border-surface-border flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-surface-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}