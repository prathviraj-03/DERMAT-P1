'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { navigationConfig, siteConfig } from '@/content';

export function Footer() {
  const quickLinks = navigationConfig.quickLinks;

  const services = navigationConfig.servicesConfig;

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-1 font-serif text-xl font-bold md:text-2xl">
                Join Our Newsletter
              </h3>
              <p className="text-sm text-white/60">
                Receive beauty tips, exclusive offers, and clinic updates.
              </p>
            </div>
            <div className="fluid-newsletter-row mt-2 w-full md:mt-0 md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/40 md:w-80"
              />
              <Button className="bg-[#c5a47e] font-semibold text-[#1a1a1a] hover:bg-[#d4b896]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 space-y-4 md:col-span-4 lg:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold md:text-3xl">
                <span className="text-white">{siteConfig.name.split(' ')[0]}</span>
                <span className="text-[#c5a47e]"> {siteConfig.name.split(' ').slice(1).join(' ')}</span>
              </span>
            </Link>
            <p className="mx-auto text-sm leading-relaxed text-white/70 md:mx-0 max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="mb-4 text-base font-semibold text-[#c5a47e] md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 transition-colors hover:text-[#c5a47e]"
                  >
                    <ArrowRight className="-ml-6 h-4 w-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="mb-4 text-base font-semibold text-[#c5a47e] md:text-lg">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-white/70 transition-colors hover:text-[#c5a47e]"
                  >
                    <ArrowRight className="-ml-6 h-4 w-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="mb-6 text-lg font-semibold text-[#c5a47e]">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#c5a47e]" />
                <span className="text-white/70">
                  {siteConfig.address.split(',')[0]}
                  <br />
                  {siteConfig.cityState}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#c5a47e]" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="text-white/70 transition-colors hover:text-[#c5a47e]"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#c5a47e]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 transition-colors hover:text-[#c5a47e]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#c5a47e]" />
                <div className="text-white/70">
                  {siteConfig.businessHours.map((hour, idx) => (
                    <p key={idx}>{hour}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} DermaCare Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#c5a47e]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-[#c5a47e]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
