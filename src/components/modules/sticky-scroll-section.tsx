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
    <div ref={ref} className="relative sticky top-0 flex min-h-[100vh] w-full items-center justify-center overflow-hidden py-16 md:py-24 page-section">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
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
        className={`relative z-10 w-full px-6 text-center md:px-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}
      >
        <div className={`mx-auto max-w-2xl text-overflow-fix ${isEven ? 'md:mx-0' : 'md:ml-auto md:mr-0'}`}>
          <motion.span className="mb-3 block text-xs font-medium tracking-[0.2em] text-[#c5a47e] uppercase md:mb-4 md:text-sm">
            {section.subtitle}
          </motion.span>

          <motion.h2 className="mb-4 font-serif text-2xl md:text-3xl font-bold leading-tight text-white md:mb-6 md:text-[clamp(28px,8vw,48px)]">
            {section.title}
          </motion.h2>

          <motion.p className="mb-6 text-sm leading-relaxed text-white/80 md:mb-8 md:text-xl">
            {section.description}
          </motion.p>

          {section.stats && (
            <div className={`flex justify-center gap-4 md:gap-8 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
              {section.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-[#c5a47e] md:text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] text-white/60 md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className={`absolute ${isEven ? 'left-0' : 'right-0'} hidden md:block top-1/2 h-32 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#c5a47e] to-transparent`}
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
    <section className="relative w-full">
      {/* Header */}
      <div className="flex flex-col items-center justify-center bg-[#1a1a1a] page-section" style={{ padding: "10vw 5vw" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-overflow-fix px-6 md:px-0"
        >
          <span className="mb-3 block text-xs font-medium tracking-[0.3em] text-[#c5a47e] uppercase md:mb-4 md:text-sm">
            Our Expertise
          </span>
          <h2 className="mb-3 font-serif text-2xl md:text-3xl font-bold leading-tight text-white md:mb-4 md:text-[clamp(32px,10vw,64px)]">
            Discover Our
            <br />
            <span className="text-[#c5a47e]">Specialties</span>
          </h2>
          <p className="mx-auto max-w-[90%] text-sm text-white/60 md:max-w-2xl md:text-xl">
            Scroll to explore our signature services
          </p>
          <motion.div
            className="mt-6"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="mx-auto flex h-[44px] w-[28px] items-center md:items-start text-center md:text-left justify-center rounded-full border-2 border-[#c5a47e]/50 p-1.5">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-[#c5a47e]"
                animate={{ y: [0, 8, 0] }}
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
