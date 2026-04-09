'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { BookButton } from '@/components/modules/book-button';
import { homeContent } from '@/content';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: imageY, scale }} className="absolute inset-0 z-0">
        <motion.img
          src="/assets/hero.jpg"
          alt="Oceanic Salon Hero"
          className="absolute inset-0 h-full w-full object-cover object-top"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Animated Image coming from bottom */}
      <motion.div
        className="absolute right-0 bottom-0 z-10 hidden h-[80%] w-[45%] lg:block"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero.jpg)',
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
        {/* Gold accent overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#c5a47e]/20 to-transparent"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-20 container px-4 md:px-6"
      >
        <div className="flex max-w-3xl flex-col items-start space-y-8">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

          {/* Main Title - Oceanic */}
          <div className="space-y-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                {[homeContent.hero.headline].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 100, rotateX: -45 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: {
                          duration: 1,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    className="inline-block text-white"
                    style={{
                      textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="font-serif text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-[#c5a47e]">Beauty</span>
                <span className="text-white/90"> & Wellness</span>
              </h2>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Experience the art of skin transformation at DermaCare Clinic. Where medical expertise
            meets luxurious patient care in dermatology and wellness treatments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 pt-4 sm:flex-row"
          >
            <BookButton
              size="lg"
              className="group bg-[#c5a47e] px-10 py-7 text-lg font-semibold text-[#1a1a1a] shadow-2xl hover:bg-[#d4b896]"
            >
              <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Book an Appointment
            </BookButton>

            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent px-8 py-6 text-lg text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10"
                >
                  Explore Services
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex gap-8 pt-8 md:gap-12"
          >
            {[
              { number: '10+', label: 'Years' },
              { number: '5000+', label: 'Clients' },
              { number: '50+', label: 'Services' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#c5a47e] md:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-sm tracking-wider text-white/60 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/50 uppercase">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 text-[#c5a47e]" />
      </motion.div>

      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <motion.div
        className="absolute top-20 left-10 hidden h-32 w-32 rounded-full border border-[#c5a47e]/20 md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 hidden h-16 w-16 rounded-full border border-[#c5a47e]/30 md:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      />
    </section>
  );
}
