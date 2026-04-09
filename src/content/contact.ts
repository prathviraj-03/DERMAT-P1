import { ContactContent, ContactInfoItem } from '@/types';

export const contactContent: ContactContent = {
  heading: 'Contact Us',
  subheading: 'Have questions or want to book a consultation? Our dermatology team is here to help.',
  formLabels: {
    name: 'Your Name',
    email: 'Your Email',
    phone: 'Phone Number',
    service: 'Treatment of Interest',
    message: 'Describe Your Skin Concern',
    submit: 'Send Message'
  }
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    icon: 'MapPin',
    title: 'Visit Us',
    content: '456 MediCare Avenue, Suite 200',
    subContent: 'City, ST 12345',
    action: 'Get Directions',
    href: '#map',
  },
  {
    icon: 'Phone',
    title: 'Call Us',
    content: '+91 98765 43210',
    subContent: 'Available during clinic hours',
    action: 'Call Now',
    href: 'tel:+919876543210',
  },
  {
    icon: 'Mail',
    title: 'Email Us',
    content: 'care@dermacareClinic.com',
    subContent: 'We reply within 24 hours',
    action: 'Send Email',
    href: 'mailto:care@dermacareClinic.com',
  },
  {
    icon: 'Clock',
    title: 'Clinic Hours',
    content: 'Mon - Fri: 9:00 AM - 7:00 PM',
    subContent: 'Sat: 9:00 AM - 4:00 PM | Sun: Closed',
    action: 'Book Consultation',
    href: '#',
  },
];
