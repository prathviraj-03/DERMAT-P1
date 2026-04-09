'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stickySections } from '@/content';
import { StickySectionItem } from '@/types';

function StickySection({
  section,
  index,
}: {
  section: StickySectionItem;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative sticky top-0 flex h-screen items-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${section.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className={`relative z-10 container ${isEven ? 'text-left' : 'text-right'}`}
      >
        <div className={`max-w-2xl ${isEven ? '' : 'ml-auto'}`}>
          <motion.span className="mb-4 block text-sm font-medium tracking-[0.2em] text-[#c5a47e] uppercase">
            {section.subtitle}
          </motion.span>

          <motion.h2 className="mb-6 font-serif text-5xl font-bold text-white md:text-7xl">
            {section.title}
          </motion.h2>

          <motion.p className="mb-8 text-xl leading-relaxed text-white/80">
            {section.description}
          </motion.p>

          {section.stats && (
            <div className={`flex gap-8 ${isEven ? '' : 'justify-end'}`}>
              {section.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-[#c5a47e]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className={`absolute ${isEven ? 'left-0' : 'right-0'} top-1/2 h-32 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#c5a47e] to-transparent`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

export function StickyScrollSection() {
  return (
    <section className="relative">
      {/* Header */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-[#1a1a1a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="mb-4 block text-sm font-medium tracking-[0.3em] text-[#c5a47e] uppercase">
            Our Expertise
          </span>
          <h2 className="mb-6 font-serif text-5xl font-bold text-white md:text-7xl">
            Discover Our
            <br />
            <span className="text-[#c5a47e]">Specialties</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/60">
            Scroll to explore our signature services
          </p>
          <motion.div
            className="mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#c5a47e]/50 p-2">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sticky Sections */}
      {stickySections.map((section, index) => (
        <StickySection key={index} section={section} index={index} />
      ))}
    </section>
  );
}
