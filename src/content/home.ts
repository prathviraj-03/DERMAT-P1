import { HomeContent, StickySectionItem } from '@/types';

export const homeContent: HomeContent = {
  hero: {
    headline: 'DermaCare',
    subheadline: 'Advanced Dermatology & Skin Health',
    ctaLabel: 'Book a Consultation',
    image: '/assets/hero-derma.jpg'
  },
  aboutPreview: {
    heading: 'About Our Clinic',
    body: [
      'At DermaCare Clinic, we combine the latest medical advancements with compassionate, patient-centered care. Our team of board-certified dermatologists specializes in diagnosing and treating all skin, hair, and nail conditions using evidence-based, FDA-approved treatments.',
      'We believe every patient deserves personalized attention and expert guidance. Our state-of-the-art facility is designed to provide a comfortable, professional environment where your skin health is our top priority.'
    ],
    features: [
      { icon: 'Award', title: '15+ Years of Excellence', description: 'Leading dermatology care trusted by thousands of patients' },
      { icon: 'Shield', title: 'Sterile & Safe Environment', description: 'Highest clinical hygiene standards maintained at all times' },
      { icon: 'Users', title: 'Board-Certified Specialists', description: 'Expert dermatologists with subspecialty training' },
      { icon: 'Star', title: 'FDA-Approved Treatments', description: 'Only clinically proven, science-backed procedures' },
    ],
    ctaLabel: 'Read More About Us'
  },
  vision: {
    heading: 'Our Vision',
    body: [
      'To be the most trusted, patient-first dermatology clinic — providing world-class skin health solutions in a safe, welcoming, and technologically advanced environment that empowers every patient to feel confident in their skin.',
      'We are committed to continuous medical education, cutting-edge research, and a holistic approach to skin wellness that addresses not just symptoms, but root causes.'
    ],
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800'
    ],
    stats: [
      { number: '100%', label: 'Certified Specialists' },
      { number: '30+', label: 'Treatment Options' },
      { number: '15+', label: 'Years in Practice' },
      { number: '10,000+', label: "Patients Treated" },
    ]
  }
};

export const stickySections: StickySectionItem[] = [
  {
    title: 'Medical Dermatology',
    subtitle: 'Diagnose & Heal',
    description: 'Accurate diagnosis and effective treatment of skin diseases including eczema, psoriasis, rosacea, fungal infections, and skin cancer screenings.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '30+', label: 'Conditions Treated' },
      { value: '100%', label: 'Evidence-Based Care' },
    ],
  },
  {
    title: 'Cosmetic Dermatology',
    subtitle: 'Refresh & Rejuvenate',
    description: 'From Botox and dermal fillers to laser resurfacing and chemical peels, we help you look and feel your absolute best at every age.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: '20+', label: 'Aesthetic Procedures' },
      { value: 'Premium', label: 'FDA-Approved Products' },
    ],
  },
  {
    title: 'Pediatric & Hair Dermatology',
    subtitle: 'Complete Skin Wellness',
    description: 'Specialized care for children\'s sensitive skin conditions and advanced trichology services for hair loss, scalp disorders, and nail health.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    stats: [
      { value: 'Expert', label: 'Pediatric Skin Care' },
      { value: 'Advanced', label: 'Hair & Scalp Therapy' },
    ],
  },
];
