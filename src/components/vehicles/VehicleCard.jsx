import React from 'react';
import { Users, Settings, MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function VehicleCard({ vehicle, onSelect }) {
  return (
    <div className="group bg-surface-card rounded-2xl border border-surface-border overflow-hidden hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      
      {/* Vehicle Media */}
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-black">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface-black/80 backdrop-blur-md text-brand-400 border border-white/10">
              {vehicle.category}
            </span>
          </div>

          {vehicle.isPlaceholder && (
            <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-black/70 text-surface-muted border border-white/10">
              Sample Asset
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-surface-muted text-xs leading-relaxed mb-4 line-clamp-2">
            {vehicle.tagline}
          </p>

          {/* Quick Specs */}
          <div className="flex items-center gap-4 text-xs text-slate-300 mb-4 pb-4 border-b border-surface-border/60">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-500" />
              <span>{vehicle.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 text-brand-500" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          {/* Service Availability Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {vehicle.services.map((service, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-surface-border/50 text-brand-400 border border-brand-500/10"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onSelect(vehicle)}
          className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl bg-surface-border/40 hover:bg-surface-border text-white border border-surface-border transition-colors text-center"
        >
          View & Dates
        </button>

        <a
          href={buildWhatsAppLink('vehicle', { vehicleName: vehicle.name })}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-xs font-bold py-2.5 px-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-black transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </a>
      </div>

    </div>
  );
}