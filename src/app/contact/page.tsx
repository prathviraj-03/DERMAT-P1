'use client';

import { ContactForm } from '@/components/modules/contact-form';
import { Mail, MapPin, Phone, Clock, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactInfo = [
    // page background is white after hero
    // (keeps hero dark, content panels white)

    {
      icon: MapPin,
      title: 'Visit Us',
      content: '456 MediCare Avenue, Suite 200',
      subContent: 'City, ST 12345',
      action: 'Get Directions',
      href: '#map',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      subContent: 'Available during clinic hours',
      action: 'Call Now',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'care@dermacareClinic.com',
      subContent: 'We reply within 24 hours',
      action: 'Send Email',
      href: 'mailto:care@dermacareClinic.com',
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      content: 'Mon - Fri: 9:00 AM - 7:00 PM',
      subContent: 'Sat: 9:00 AM - 4:00 PM',
      action: 'Book Consultation',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] py-32">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        {/* Elegant grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          className="absolute top-20 right-20 hidden h-40 w-40 rounded-full border border-[#d4a574]/40 md:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-10 left-10 hidden h-24 w-24 rounded-full bg-[#d4a574]/20 blur-2xl md:block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/15 px-6 md:px-12 lg:px-16 py-2 text-sm font-medium tracking-wide text-[#d4a574]"
            >
              Get In Touch
            </motion.span>
            <h1 className="mb-6 font-serif text-5xl leading-tight font-bold text-[#f5f0e8] md:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[#f5f0e8]/70">
              Have questions or ready to book a consultation? We&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-20 -mt-16 bg-white">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">
                    {info.title}
                  </h3>
                  <p className="font-medium text-[#1a1a1a]">{info.content}</p>
                  <p className="mb-4 text-sm text-[#666666]">
                    {info.subContent}
                  </p>
                  <a
                    href={info.href}
                    className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#c5a47e] transition-all hover:gap-3"
                  >
                    {info.action} <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-8 shadow-xl md:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c5a47e]">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] md:text-2xl md:text-3xl">
                      Send a Message
                    </h2>
                    <p className="text-sm text-[#666666]">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Google Maps Embed */}
              <div
                id="map"
                className="relative h-80 overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] shadow-xl"
              >
                <iframe
                  title="DermaCare Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9851287052066!2d77.59016631482225!3d12.971598990854424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
                <div className="absolute right-4 bottom-4 left-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#c5a47e]" />
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        DermaCare Clinic
                      </p>
                      <p className="text-xs text-[#666666]">
                        456 MediCare Avenue, Suite 200
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours Detail */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">
                    Operating Hours
                  </h3>
                  <div className="mb-4 flex-1 space-y-3 text-sm text-[#666666]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-[#c5a47e]">
                        Closed
                      </span>
                    </div>
                  </div>

                  <a
                    href="#book"
                    className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#c5a47e] transition-all hover:gap-3"
                  >
                    Book Appointment <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
