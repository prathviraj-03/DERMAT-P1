import { NavigationConfig } from '@/types';

export const navigationConfig: NavigationConfig = {
  leftNavigation: [
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/services' },
  ],
  rightNavigation: [
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ],
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Treatments', href: '/services' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book Consultation', href: '/contact' },
  ],
  servicesConfig: [
    { name: 'Acne & Pimple Treatment', href: '/services' },
    { name: 'Anti-Aging & Botox', href: '/services' },
    { name: 'Laser Skin Resurfacing', href: '/services' },
    { name: 'Hair Loss Treatment (PRP)', href: '/services' },
    { name: 'Skin Cancer Screening', href: '/services' },
  ]
};
