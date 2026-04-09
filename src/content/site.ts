import { SiteConfig, NavigationConfig, ContactInfoItem, HomeContent, AboutContent, ContactContent, StickySectionItem, ValueItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'DermaCare Clinic',
  tagline: 'Advanced Dermatology & Skin Health',
  description: 'Experience expert dermatological care at DermaCare Clinic. Board-certified specialists providing medical and cosmetic skin treatments.',
  phone: '+91 86559 25011',
  email: 'care@dermacareClinic.com',
  address: '456 MediCare Avenue, Suite 200',
  cityState: 'City, State 12345',
  bookingUrl: '/contact',
  businessHours: [
    'Mon - Fri: 9:00 AM - 7:00 PM',
    'Saturday: 9:00 AM - 4:00 PM',
    'Sunday: Closed'
  ],
  socialLinks: {},
  seo: {
    title: 'DermaCare Clinic | Advanced Dermatology & Skin Health',
    description: 'Expert dermatological care including acne treatment, laser therapy, Botox, PRP hair loss treatment, and skin cancer screening. Book your consultation today.',
    keywords: [
      'dermatologist',
      'skin clinic',
      'acne treatment',
      'laser skin treatment',
      'Botox',
      'PRP therapy',
      'hair loss treatment',
      'skin cancer screening',
      'cosmetic dermatology',
      'medical dermatology'
    ],
    ogTitle: 'DermaCare Clinic | Advanced Dermatology & Skin Health',
    ogDescription: 'Board-certified dermatologists providing world-class skin, hair, and nail care at DermaCare Clinic.',
  }
};
