import React from 'react';
import { Award, Briefcase, CalendarCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function CorporateVIP() {
  const corporatePoints = [
    {
      icon: Briefcase,
      title: "Corporate Account Transport",
      desc: "Monthly retainers and recurring travel arrangements for visiting executives, NGOs, and corporate teams in Jos.",
    },
    {
      icon: ShieldCheck,
      title: "VIP & Dignitary Movement",
      desc: "Discreet, high-comfort crossover and SUV mobility with vetted chauffeurs trained in professional etiquette.",
    },
    {
      icon: CalendarCheck,
      title: "Event & Wedding Convoys",
      desc: "Coordinated vehicle fleets for large ceremonies, political summits, retreats, and VIP guest transport.",
    },
  ];

  return (
    <section id="corporate" className="py-24 bg-surface-dark border-t border-surface-border relative overflow-hidden">
      {/* Subtle brand glow behind text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
              Executive Mobility
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Corporate & VIP <br />
              <span className="text-brand-400">Transport Logistics</span>
            </h2>

            <p className="text-surface-muted text-base leading-relaxed">
              When punctuality, discretion, and vehicle presentation reflect directly on your organization, Mbilamut delivers dependable vehicle management across Plateau State.
            </p>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border">
              <p className="text-xs text-surface-muted leading-relaxed">
                <strong className="text-white">Custom invoicing:</strong> Official receipts and documented transport agreements are available for registered companies, NGOs, and institutions.
              </p>
            </div>

            <Button
              href={buildWhatsAppLink('corporate')}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              external
            >
              Discuss Corporate Requirements
            </Button>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corporatePoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-500/40 transition-colors ${
                    idx === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pt.title}</h3>
                  <p className="text-surface-muted text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}