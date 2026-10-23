import { BUSINESS_CONFIG } from '../data/business';

/**
 * Builds encoded WhatsApp URLs for different customer intents
 */
export function buildWhatsAppLink(intent, payload = {}) {
  const phone = BUSINESS_CONFIG.whatsappNumber;
  let text = "";

  switch (intent) {
    case 'vehicle':
      const { vehicleName, startDate, endDate, rentalType } = payload;
      text = `Hello Mbilamut Unique Car Hire Services, I am interested in hiring the *${vehicleName || 'vehicle'}*.`;
      if (rentalType) {
        text += `\n- Preference: ${rentalType}`;
      }
      if (startDate || endDate) {
        text += `\n- Intended Dates: ${startDate || 'Flexible'} to ${endDate || 'Flexible'}`;
      }
      text += `\nPlease let me know the current availability and pricing.`;
      break;

    case 'corporate':
      text = `Hello Mbilamut Unique Car Hire Services, I would like to discuss a corporate/VIP transportation requirement. Please let me know how we can proceed.`;
      break;

    case 'logistics':
      text = `Hello Mbilamut Unique Car Hire Services, I would like to enquire about your logistics services.`;
      break;

    case 'rinji':
      text = `Hello, I saw Rinji Auto Imports on the Mbilamut website and would like to enquire about vehicle sourcing and imports.`;
      break;

    case 'general':
    default:
      text = `Hello Mbilamut Unique Car Hire Services, I would like to make an enquiry about your services.`;
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}