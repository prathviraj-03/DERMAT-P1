export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  cityState: string;
  bookingUrl: string;
  businessHours: string[];
  socialLinks: Record<string, string>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
}

export interface NavigationConfig {
  leftNavigation: NavItem[];
  rightNavigation: NavItem[];
  quickLinks: NavItem[];
  servicesConfig: NavItem[];
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  subContent?: string;
  action?: string;
  href?: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface StickySectionItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: { value: string; label: string }[];
}

export interface HomeContent {
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    image: string;
  };
  aboutPreview: {
    heading: string;
    body: string[];
    features: { icon: string; title: string; description: string }[];
    ctaLabel: string;
  };
  vision: {
    heading: string;
    body: string[];
    images: string[];
    stats: { number: string; label: string }[];
  };
}

export interface AboutContent {
  heading: string;
  subheading: string;
  body: string[];
  values: ValueItem[];
  stats?: { label: string; value: string }[];
}

export interface ContactContent {
  heading: string;
  subheading: string;
  formLabels: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    submit: string;
  };
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  benefits: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  // Optional read time for display (e.g. '5 min read')
  readTime?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}
