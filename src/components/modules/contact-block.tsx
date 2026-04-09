'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { contactInfoItems } from '@/content';

const iconMap: Record<string, any> = {
  MapPin, Phone, Mail, Clock, Navigation
};

export function ContactBlock() {
  const contactInfo = contactInfoItems;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-white py-24 md:py-32">
      {/* Background decoration - positioned within bounds */}
      <motion.div
        className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-[#c5a47e]/10 blur-3xl md:-top-40 md:-right-40 md:h-80 md:w-80"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 left-0 h-60 w-60 rounded-full bg-[#0a0a0a]/10 blur-3xl md:-bottom-40 md:-left-40 md:h-80 md:w-80"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm font-medium tracking-[0.2em] text-[#c5a47e] uppercase">
            Get In Touch
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-[#1a1a1a] md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            Have questions or want to book an appointment? We&apos;d love to
            hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = iconMap[item.icon as string];
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group cursor-pointer rounded-xl border border-[#e5e5e5] bg-white p-4 text-center shadow-lg md:p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] md:mb-4 md:h-14 md:w-14"
              >
                {Icon && <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />}
              </motion.div>
              <h3 className="mb-1 text-base font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#0a0a0a] md:mb-2 md:text-lg">
                {item.title}
              </h3>
              <p className="text-xs text-[#666666] md:text-sm">{item.content}</p>
              {item.subContent && <p className="text-xs text-[#666666] md:text-sm">{item.subContent}</p>}
            </motion.div>
          )})}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-8 font-semibold text-white shadow-lg hover:from-[#1a1a1a] hover:to-[#0a0a0a]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Now
            </Button>
          </Link>
          <Link href="https://maps.google.com" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0a0a0a] px-8 font-semibold text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
