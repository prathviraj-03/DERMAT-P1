'use client';

import Link from 'next/link';
import { services } from '@/content';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { BookButton } from '@/components/modules/book-button';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    ...Array.from(new Set(services.map((s) => s.category))),
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] py-32">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        {/* Background pattern */}
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
          className="absolute -bottom-20 -left-20 hidden h-96 w-96 rounded-full bg-[#d4a574]/15 blur-3xl md:block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/15 px-4 py-2 text-sm font-medium tracking-wide text-[#d4a574]"
            >
              Premium Services
            </motion.span>
            <h1 className="mb-6 font-serif text-5xl leading-tight font-bold text-[#f5f0e8] md:text-6xl lg:text-7xl">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#f5f0e8]/70">
              Discover our range of premium grooming services designed to help
              you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="relative z-20 container -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-[#e8e8e8] bg-white p-6 shadow-xl md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#999]" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#e8e8e8] bg-[#f5f5f5] py-4 pr-4 pl-12 text-[#1a1a1a] transition-colors placeholder:text-[#999] focus:border-[#c5a47e] focus:outline-none"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-5 w-5 flex-shrink-0 text-[#999]" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#0a0a0a] text-white shadow-lg'
                      : 'bg-[#f5f5f5] text-[#666] hover:bg-[#e8e8e8]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-20">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-[#666]">
            Showing{' '}
            <span className="font-semibold text-[#1a1a1a]">
              {filteredServices.length}
            </span>{' '}
            services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${service.image || '/assets/placeholder.jpg'})`,
                        backgroundColor: '#1a1a1a',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#1a1a1a] shadow-lg">
                        {service.category}
                      </span>
                    </div>
                    </div>

                    {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#c5a47e]">
                      {service.name}
                    </h3>
                    <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[#666]">
                      {service.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between border-t border-[#e8e8e8] pt-4">
                      <div className="flex items-center gap-2 text-sm text-[#999]">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration} mins</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5a47e] transition-all group-hover:gap-2">
                        Book Now <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#c5a47e]/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a47e]/20 bg-[#c5a47e]/10 px-4 py-2 text-sm font-medium text-[#c5a47e]">
              Ready to Transform?
            </span>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Book Your Appointment Today
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/70">
              Experience the Tribe difference. Our expert stylists are ready to
              help you look and feel your best.
            </p>
            <BookButton className="rounded-full bg-[#c5a47e] px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all hover:bg-[#b89468] hover:shadow-2xl">
              Book Appointment
            </BookButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
