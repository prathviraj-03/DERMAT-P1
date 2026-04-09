'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { homeContent } from '@/content';

export function VisionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const leftImageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const centerImageY = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="overflow-hidden bg-white py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images Layout - Left Side */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Left Image - Coming from left with rotation */}
            <motion.div
              style={{ x: leftImageX, opacity }}
              className="absolute top-1/4 left-0 z-10 h-64 w-48 md:h-72 md:w-56"
            >
              <motion.div
                initial={{ rotate: -10 }}
                whileInView={{ rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full overflow-hidden rounded-lg border-4 border-white shadow-2xl"
                style={{ transformOrigin: 'center center' }}
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800')" }}
                />
              </motion.div>
            </motion.div>

            {/* Center Image - Coming from top with rotation */}
            <motion.div
              style={{ y: centerImageY, opacity }}
              className="absolute top-0 left-1/2 z-20 h-72 w-56 -translate-x-1/2 md:h-96 md:w-72"
            >
              <motion.div
                initial={{ rotate: 5 }}
                whileInView={{ rotate: 2 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full overflow-hidden rounded-lg border-4 border-white shadow-2xl"
                style={{ transformOrigin: 'center center' }}
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800')" }}
                />
              </motion.div>
            </motion.div>

            {/* Right Image - Coming from right with rotation */}
            <motion.div
              style={{ x: rightImageX, opacity }}
              className="absolute right-0 bottom-1/4 z-10 h-64 w-48 md:h-72 md:w-56"
            >
              <motion.div
                initial={{ rotate: 10 }}
                whileInView={{ rotate: 3 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full overflow-hidden rounded-lg border-4 border-white shadow-2xl"
                style={{ transformOrigin: 'center center' }}
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800')" }}
                />
              </motion.div>
            </motion.div>

            {/* Decorative elements - hidden on mobile */}
            <motion.div
              className="absolute top-10 right-10 hidden h-20 w-20 rounded-full border-2 border-[#c5a47e]/30 md:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.div
              className="absolute bottom-10 left-10 hidden h-12 w-12 rounded-full bg-[#c5a47e]/20 md:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium tracking-[0.2em] text-[#c5a47e] uppercase"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-bold text-[#1a1a1a] md:text-5xl lg:text-6xl"
            >
              {homeContent.vision.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {homeContent.vision.body.map((para, idx) => (
                <p key={idx} className={`text-lg leading-relaxed text-[#666666] ${idx === 0 ? 'md:text-xl' : ''}`}>
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {homeContent.vision.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="rounded-lg bg-[#f5f5f5] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[#0a0a0a] md:text-3xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-[#666666]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
