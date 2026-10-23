import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury automotive background"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-black via-surface-black/85 to-surface-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card border border-brand-500/30 text-white text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-brand-400">{BUSINESS_CONFIG.cac.statusText}</span>
          <span className="text-surface-muted">•</span>
          <span className="text-surface-muted">Appollo Crescent, G.R.A., Jos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Your Journey. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-speed">
            Our Priority.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-surface-muted text-base sm:text-xl max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Premium car hire, self-drive & chauffeur rentals, and dependable logistics across Jos, Plateau State, and nationwide routes.
        </p>

        {/* Conversion CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <Button
            href={buildWhatsAppLink('general')}
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            className="w-full sm:w-auto"
            external
          >
            Instant WhatsApp Booking
          </Button>

          <Button
            href="#fleet"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>Explore Vehicles</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-8 border-t border-surface-border/50 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
            <span className="text-xs sm:text-sm text-surface-muted font-medium">Self-Drive & Chauffeur</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
            <span className="text-xs sm:text-sm text-surface-muted font-medium">Airport Transfers (Jos)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
            <span className="text-xs sm:text-sm text-surface-muted font-medium">Interstate Mobility</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
            <span className="text-xs sm:text-sm text-surface-muted font-medium">Dedicated Logistics Desk</span>
          </div>
        </div>

      </div>
    </section>
  );
}