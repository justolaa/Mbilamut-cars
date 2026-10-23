import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/gallery';
import { Camera, MapPin, Eye, X, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import Button from '../ui/Button';

export default function MediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const categories = ['All', 'VIP Movements', 'Events', 'Fleet in Action', 'Deliveries'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-surface-dark border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Experiences & Moments
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Client Moments & Fleet in Motion
          </h2>
          <p className="text-surface-muted text-base sm:text-lg">
            A visual record of our journeys, VIP movements, client dispatches, and event convoys across Plateau State.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-surface-black font-bold shadow-brand-glow'
                  : 'bg-surface-card text-surface-muted hover:text-white border border-surface-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-surface-card rounded-2xl border border-surface-border overflow-hidden cursor-pointer hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-surface-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black via-surface-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface-black/80 backdrop-blur-md text-brand-400 border border-white/10">
                    {item.category}
                  </span>
                </div>

                {item.isPlaceholder && (
                  <span className="absolute top-3 right-3 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-black/70 text-surface-muted border border-white/10">
                    Representative Asset
                  </span>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/40 backdrop-blur-sm">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-xs text-brand-400 font-medium mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-black/80 text-surface-muted hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[60vh] overflow-hidden bg-surface-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-400 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <span className="text-xs text-surface-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  {activeItem.location}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white mb-1.5">{activeItem.title}</h3>
                <p className="text-surface-muted text-sm leading-relaxed">{activeItem.caption}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  href={buildWhatsAppLink('general')}
                  variant="whatsapp"
                  size="sm"
                  icon={MessageCircle}
                  external
                >
                  Book Similar Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}