import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Copy, Check, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/business';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function LocationContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-surface-dark border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Physical Presence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Visit Our Jos Office
          </h2>
          <p className="text-surface-muted text-base sm:text-lg">
            We operate from an established office in G.R.A., Jos. Walk in or reach out on WhatsApp before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-surface-card rounded-2xl border border-surface-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Office Address</h3>
                  <p className="text-surface-muted text-sm leading-relaxed">
                    {BUSINESS_CONFIG.address.line1}<br />
                    {BUSINESS_CONFIG.address.line2}<br />
                    {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state}, {BUSINESS_CONFIG.address.country}
                  </p>
                </div>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-black border border-surface-border hover:border-brand-500/40 text-xs font-semibold text-slate-300 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-brand-400" />
                    <span className="text-brand-400">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-surface-muted" />
                    <span>Copy Full Address for GPS / Dispatch</span>
                  </>
                )}
              </button>

              <div className="pt-4 border-t border-surface-border/60 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                  <div>
                    <p className="text-xs text-surface-muted">WhatsApp & Call Line</p>
                    <p className="text-sm font-bold text-white">{BUSINESS_CONFIG.displayPhone}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-black/60 border border-surface-border">
                  <p className="text-xs text-surface-muted">
                    <strong className="text-brand-400">Visiting Tip:</strong> Located within Appollo Crescent in G.R.A., Jos. For quickest service, send a message ahead on WhatsApp to confirm vehicle readiness.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-surface-border/60 flex flex-col sm:flex-row gap-3">
              <Button
                href={BUSINESS_CONFIG.mapsUrl}
                variant="primary"
                size="md"
                icon={Navigation}
                className="w-full justify-center"
                external
              >
                Get Directions
              </Button>

              <Button
                href={buildWhatsAppLink('general')}
                variant="secondary"
                size="md"
                icon={MessageCircle}
                className="w-full justify-center"
                external
              >
                Notify Desk
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 bg-surface-card rounded-2xl border border-surface-border overflow-hidden min-h-[380px] flex flex-col">
            <div className="p-3 bg-surface-black border-b border-surface-border flex items-center justify-between text-xs text-surface-muted px-4">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                Appollo Crescent, G.R.A., Jos (Plateau State)
              </span>
              <a
                href={BUSINESS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-400 hover:underline"
              >
                <span>View Large Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full flex-grow relative bg-surface-black">
              {/* Responsive Google Maps Embed using exact street location */}
              <iframe
                title="Mbilamut Unique Car Hire Services Location"
                src="https://maps.google.com/maps?q=Appollo%20Crescent,%20G.R.A.,%20Jos,%20Plateau%20State,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}