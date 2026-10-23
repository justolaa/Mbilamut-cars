import React, { useState, useMemo } from 'react';
import { VEHICLES_DATA } from '../../data/vehicles';
import VehicleCard from '../vehicles/VehicleCard';
import VehicleModal from '../vehicles/VehicleModal';
import { Search, Filter, AlertCircle, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalVehicle, setActiveModalVehicle] = useState(null);

  const categories = ['All', 'SUV', 'Sedan', 'Van & Bus', 'Luxury & VIP'];
  const serviceOptions = ['All', 'Self-Drive', 'Chauffeur-Driven'];

  const filteredVehicles = useMemo(() => {
    return VEHICLES_DATA.filter((v) => {
      // Category check
      const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
      // Service check
      const matchesService =
        selectedService === 'All' ||
        v.services.some((s) => s.toLowerCase().includes(selectedService.toLowerCase()));
      // Search query
      const matchesSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesService && matchesSearch;
    });
  }, [selectedCategory, selectedService, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedService('All');
    setSearchQuery('');
  };

  return (
    <section id="fleet" className="py-24 bg-surface-black border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
            Available Mobility
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Explore Our Vehicle Fleet
          </h2>
          <p className="text-surface-muted text-base sm:text-lg">
            Choose from high-clearance SUVs for Plateau hills, executive sedans for business travel, and passenger vans for group logistics.
          </p>
        </div>

        {/* Jos Inventory Transparency Notice */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-surface-card border border-brand-500/20 flex items-start gap-3 text-xs text-surface-muted">
          <AlertCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-white font-semibold">Live Fleet Notice: </span>
            Vehicles displayed below reflect representative fleet categories available for hire in Jos. Because our fleet deploys continuously, exact makes, models, and real-time dates are confirmed promptly upon sending your WhatsApp enquiry.
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4 max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-muted" />
              <input
                type="text"
                placeholder="Search SUV, Sedan, Van..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-card border border-surface-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-surface-muted focus:outline-none focus:border-brand-500"
              />
            </div>

            {/* Service Type Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-surface-muted whitespace-nowrap">Service:</span>
              {serviceOptions.map((srv) => (
                <button
                  key={srv}
                  onClick={() => setSelectedService(srv)}
                  className={`text-xs px-3 py-1.5 rounded-lg border whitespace-nowrap transition-colors ${
                    selectedService === srv
                      ? 'bg-brand-500/20 text-brand-400 border-brand-500'
                      : 'bg-surface-card text-surface-muted border-surface-border hover:border-slate-500'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-surface-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-surface-black shadow-sm font-bold'
                    : 'bg-surface-card text-surface-muted hover:text-white border border-surface-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={(v) => setActiveModalVehicle(v)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-surface-card rounded-2xl border border-surface-border max-w-md mx-auto p-8">
            <RefreshCw className="w-10 h-10 text-brand-500 mx-auto mb-4 animate-spin-reverse opacity-70" />
            <h3 className="text-lg font-bold text-white mb-2">No matching vehicles found</h3>
            <p className="text-xs text-surface-muted mb-6">
              We couldn't find vehicles matching your search criteria. Try resetting your filters or message our Jos desk directly.
            </p>
            <Button onClick={resetFilters} variant="secondary" size="sm">
              Reset All Filters
            </Button>
          </div>
        )}

      </div>

      {/* Modal Dialog */}
      {activeModalVehicle && (
        <VehicleModal
          vehicle={activeModalVehicle}
          onClose={() => setActiveModalVehicle(null)}
        />
      )}
    </section>
  );
}