'use client';

import Link from 'next/link';
import { services } from '@/content';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { BookButton } from '@/components/modules/book-button';

export function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background decoration - positioned within bounds on mobile */}
      <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[#c5a47e]/5 blur-3xl md:h-96 md:w-96" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#0a0a0a]/5 blur-3xl md:h-96 md:w-96" />

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
            What We Offer
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-[#1a1a1a] md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            Discover our range of premium services designed to help you look and
            feel your absolute best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0a0a0a] backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                  </div>

                  {/* Content area */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#0a0a0a]">
                    {service.name}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-[#666666]">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#666666]">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration} min</span>
                    </div>

                    <Link href={`/services/${service.slug}`}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-1 text-sm font-medium text-[#0a0a0a] transition-colors group-hover:text-[#c5a47e]"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <BookButton className="bg-[#c5a47e] px-6 font-semibold text-[#1a1a1a] hover:bg-[#d4b896]">
                    Book Now
                  </BookButton>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-8 font-semibold text-white shadow-lg hover:from-[#1a1a1a] hover:to-[#0a0a0a]"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
