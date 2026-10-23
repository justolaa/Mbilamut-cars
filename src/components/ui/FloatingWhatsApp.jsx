import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover (desktop) */}
      <span className="hidden md:block mr-3 px-3 py-1.5 rounded-lg bg-surface-card border border-surface-border text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with our Jos office
      </span>

      <a
        href={buildWhatsAppLink('general')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-brand-glow transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}