import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Fleet from './components/sections/Fleet';
import CorporateVIP from './components/sections/CorporateVIP';
import WhyChooseUs from './components/sections/WhyChooseUs';
import MediaGallery from './components/sections/MediaGallery';
import RinjiImports from './components/sections/RinjiImports';
import LocationContact from './components/sections/LocationContact';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-black text-white flex flex-col selection:bg-brand-500 selection:text-black">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Fleet />
        <CorporateVIP />
        <WhyChooseUs />
        <MediaGallery />
        <RinjiImports />
        <LocationContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}