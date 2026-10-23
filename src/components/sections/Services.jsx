import React from 'react';
import { SERVICES_DATA } from '../../data/services';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';
import { Check, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Our Core Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Tailored Mobility & Transport
          </h2>
          <p className="text-surface-muted text-base sm:text-lg">
            From executive airport pickups to private self-drive weekend trips and commercial logistics, every service is managed directly through our Jos dispatch desk.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-surface-card rounded-2xl border border-surface-border overflow-hidden hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Imagery */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" />
                <span className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-surface-black/80 backdrop-blur-md text-brand-400 border border-white/10">
                  {service.badge}
                </span>
              </div>

              {/* Service Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {service.tag}
                  </p>
                  <p className="text-surface-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-surface-border/50">
                  <Button
                    href={buildWhatsAppLink(service.intent)}
                    variant="secondary"
                    size="md"
                    icon={MessageCircle}
                    className="w-full justify-center group-hover:bg-brand-500 group-hover:text-surface-black group-hover:border-transparent transition-colors"
                    external
                  >
                    Enquire for {service.title.split(' ')[0]}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}