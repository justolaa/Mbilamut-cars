import React from 'react';
import { ShieldCheck, Clock, UserCheck, Compass, Headphones, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';

export default function WhyChooseUs() {
  const values = [
    {
      icon: UserCheck,
      title: "Chauffeur & Self-Drive Choice",
      desc: "Freedom to drive yourself or hire with a respectful, professional driver who knows Plateau terrain.",
    },
    {
      icon: Clock,
      title: "Punctual Jos Dispatch",
      desc: "Coordinated departures for early morning flights from Heipang and time-sensitive business appointments.",
    },
    {
      icon: ShieldCheck,
      title: "CAC Registered Entity",
      desc: "Operating legally with accountability, clear rental agreements, and an established physical office.",
    },
    {
      icon: Compass,
      title: "Interstate Route Readiness",
      desc: "Vehicles inspected and prepped for safe travel beyond Jos across regional transit corridors.",
    },
    {
      icon: Headphones,
      title: "Direct WhatsApp Line",
      desc: "No call center delays or rigid apps. You talk directly with real coordinators who verify real availability.",
    },
    {
      icon: Sparkles,
      title: "Clean, Inspected Vehicles",
      desc: "Every vehicle is cleaned and mechanically inspected prior to customer handover.",
    },
  ];

  return (
    <section className="py-24 bg-surface-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            The Mbilamut Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Built On Accountability & Trust
          </h2>
          <p className="text-surface-muted text-base sm:text-lg">
            We focus on reliable, verified service rather than inflated promises. Here is why clients choose us in Jos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-500/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-surface-muted text-sm leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}