import React, { useState } from 'react';
import { X, Users, Settings, Wind, Luggage, Check, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function VehicleModal({ vehicle, onClose }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalType, setRentalType] = useState(vehicle.services[0] || 'Chauffeur-Driven');

  if (!vehicle) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close vehicle details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-black/70 text-surface-muted hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/40 backdrop-blur-sm">
              {vehicle.category}
            </span>
            {vehicle.isPlaceholder && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface-black/80 text-surface-muted border border-white/10">
                Sample Representation
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{vehicle.name}</h3>
            <p className="text-surface-muted text-sm leading-relaxed">{vehicle.description}</p>
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-surface-black/60 border border-surface-border flex items-center gap-2.5">
              <Users className="w-4 h-4 text-brand-500 shrink-0" />
              <div>
                <p className="text-[10px] text-surface-muted uppercase">Capacity</p>
                <p className="text-xs font-bold text-white">{vehicle.seats} Seats</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-black/60 border border-surface-border flex items-center gap-2.5">
              <Settings className="w-4 h-4 text-brand-500 shrink-0" />
              <div>
                <p className="text-[10px] text-surface-muted uppercase">Gearbox</p>
                <p className="text-xs font-bold text-white">{vehicle.transmission}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-black/60 border border-surface-border flex items-center gap-2.5">
              <Wind className="w-4 h-4 text-brand-500 shrink-0" />
              <div>
                <p className="text-[10px] text-surface-muted uppercase">Climate</p>
                <p className="text-xs font-bold text-white">{vehicle.climate}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-surface-black/60 border border-surface-border flex items-center gap-2.5">
              <Luggage className="w-4 h-4 text-brand-500 shrink-0" />
              <div>
                <p className="text-[10px] text-surface-muted uppercase">Luggage</p>
                <p className="text-xs font-bold text-white">{vehicle.luggage}</p>
              </div>
            </div>
          </div>

          {/* Quick Date & Rental Option Selector */}
          <div className="p-4 rounded-xl bg-surface-black border border-surface-border space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400">
              <Calendar className="w-4 h-4" />
              <span>Configure WhatsApp Enquiry</span>
            </div>

            {/* Mode selection */}
            <div>
              <label className="block text-xs text-surface-muted mb-1.5">Rental Mode</label>
              <div className="flex flex-wrap gap-2">
                {vehicle.services.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setRentalType(mode)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                      rentalType === mode
                        ? 'bg-brand-500/20 text-brand-400 border-brand-500'
                        : 'bg-surface-card text-surface-muted border-surface-border hover:border-slate-500'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Dates row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-surface-muted mb-1">Intended Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-surface-card border border-surface-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-surface-muted mb-1">Intended Return Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-surface-card border border-surface-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <Button
              href={buildWhatsAppLink('vehicle', {
                vehicleName: vehicle.name,
                startDate,
                endDate,
                rentalType,
              })}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              className="w-full justify-center"
              external
            >
              Enquire Availability on WhatsApp
            </Button>
            <p className="text-center text-[11px] text-surface-muted mt-2.5">
              Live availability and exact quote confirmed directly by our Jos operations desk.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}