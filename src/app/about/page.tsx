'use client';

import { teamMembers } from '@/content/team';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Heart, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Committed to delivering the highest quality services with precision and care.',
    },
    {
      icon: Shield,
      title: 'Hygiene First',
      description:
        'Hospital-grade sterilization protocols for your complete safety.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description:
        'A welcoming space for everyone, regardless of gender or style.',
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description:
        'Personalized attention to every client&apos;s unique needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2c1810] py-32">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        {/* Elegant background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Decorative elements - hidden on mobile */}
        <motion.div
          className="absolute top-20 right-20 hidden h-72 w-72 rounded-full border border-[#d4a574]/30 md:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute bottom-10 left-10 hidden h-40 w-40 rounded-full bg-[#d4a574]/15 blur-3xl md:block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
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
              About DermaCare Clinic
            </motion.span>
            <h1 className="mb-6 font-serif text-5xl leading-tight font-bold text-[#f5f0e8] md:text-6xl lg:text-7xl">
              Our Story
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[#f5f0e8]/70">
              Founded in 2020, DermaCare Clinic was born from a desire to create a
              space where clinical expertise meets patient comfort. We believe that
              everyone deserves access to personalized skin health solutions and procedures
              that enhance their confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-20 md:py-28">
        <div className="flex flex-col gap-28">
          {/* Values Grid */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/5 px-6 md:px-12 lg:px-16 py-2 text-sm font-medium tracking-wide text-[#0a0a0a]">
                What We Stand For
              </span>
              <h2 className="font-serif text-4xl font-bold text-[#0a0a0a] md:text-5xl">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="h-full rounded-3xl border border-[#e8e8e8] bg-[#fafafa] p-8 text-center transition-all duration-300 hover:border-[#c5a47e]/30 hover:bg-white hover:shadow-xl">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a0a0a] transition-colors duration-300 group-hover:bg-[#c5a47e]">
                      {Icon && <Icon className="h-7 w-7 text-white" />}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#0a0a0a]">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#666666]">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )})}
            </div>
          </motion.section>

          {/* Mission & Hygiene */}
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-10 lg:p-12"
            >
              <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c5a47e]/10 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c5a47e]">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-white md:text-4xl">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-white/70">
                  To provide exceptional hair, skin, and grooming services in a
                  comfortable, inclusive environment. We are dedicated to
                  continuous education and using only the highest quality
                  products to ensure every client leaves feeling their absolute
                  best.
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap gap-4">
                    {[
                      'Premium Products',
                      'Expert Stylists',
                      'Modern Techniques',
                    ].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 md:px-12 lg:px-16 py-2 text-sm text-white/80"
                      >
                        <CheckCircle className="h-4 w-4 text-[#c5a47e]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-[#e8e8e8] bg-[#fafafa] p-10 lg:p-12"
            >
              <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#c5a47e]/5 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a0a0a]">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold text-[#0a0a0a] md:text-4xl">
                  Hygiene Standards
                </h2>
                <p className="text-lg leading-relaxed text-[#666666]">
                  Your safety is our top priority. We adhere to hospital-grade
                  sterilization protocols for all tools and surfaces. Our team
                  wears protective gear and we maintain a rigorous cleaning
                  schedule to ensure a safe, hygienic environment for every
                  visit.
                </p>
                <div className="mt-8 border-t border-[#e8e8e8] pt-6">
                  <div className="flex flex-wrap gap-4">
                    {[
                      'Sterilized Tools',
                      'Clean Environment',
                      'Safe Products',
                    ].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/5 px-6 md:px-12 lg:px-16 py-2 text-sm text-[#0a0a0a]"
                      >
                        <CheckCircle className="h-4 w-4 text-[#c5a47e]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#c5a47e]/10 px-6 md:px-12 lg:px-16 py-2 text-sm font-medium tracking-wide text-[#c5a47e]">
                <Users className="h-4 w-4" />
                The Experts
              </span>
              <h2 className="mb-4 font-serif text-4xl font-bold text-[#0a0a0a] md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#666666]">
                Our talented professionals are dedicated to making you look and
                feel your best.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="rounded-3xl border border-[#e8e8e8] bg-white p-8 text-center transition-all duration-300 hover:border-[#c5a47e]/30 hover:shadow-2xl">
                    <motion.div
                      className="relative mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full bg-[#0a0a0a] ring-4 ring-[#fafafa] transition-all group-hover:ring-[#c5a47e]/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                    </motion.div>
                    <h3 className="mb-1 text-xl font-bold text-[#0a0a0a]">
                      {member.name}
                    </h3>
                    <p className="mb-4 font-medium text-[#c5a47e]">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-[#666666]">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
