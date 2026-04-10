'use client';

import Link from 'next/link';
import { blogPosts } from '@/content';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { useRef } from 'react';

export function LatestBlogs() {
  const latest = blogPosts.slice(0, 4);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const leftCardX = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const rightCardX = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const centerCardY = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const bottomCardY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#c5a47e]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-[#0a0a0a]/10 blur-3xl" />
      </div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Stacked Blog Images - Vision Style */}
          <div className="relative order-2 h-[500px] md:h-[600px] lg:order-1 collage-container-fix">
            {/* Top Left Card */}
            <motion.div
              style={{ x: leftCardX, opacity }}
              className="absolute top-8 left-0 z-10 w-[40%] md:w-56"
            >
              <Link href={`/blogs/${latest[0]?.slug}`}>
                <motion.div
                  initial={{ rotate: -8 }}
                  whileInView={{ rotate: -4 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="cursor-pointer overflow-hidden rounded-xl border-4 border-white shadow-2xl"
                >
                  <div
                    className="h-64 w-full bg-cover bg-center md:h-72"
                    style={{ backgroundImage: `url(${latest[0]?.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="text-xs font-medium tracking-wider text-[#c5a47e] uppercase">
                      {latest[0]?.category}
                    </span>
                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                      {latest[0]?.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Center Top Card */}
            <motion.div
              style={{ y: centerCardY, opacity }}
              className="absolute top-0 left-1/2 z-20 w-[45%] -translate-x-1/2 md:w-64"
            >
              <Link href={`/blogs/${latest[1]?.slug}`}>
                <motion.div
                  initial={{ rotate: 5 }}
                  whileInView={{ rotate: 2 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl border-4 border-white shadow-2xl"
                >
                  <div
                    className="h-72 w-full bg-cover bg-center md:h-80"
                    style={{ backgroundImage: `url(${latest[1]?.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="text-xs font-medium tracking-wider text-[#c5a47e] uppercase">
                      {latest[1]?.category}
                    </span>
                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                      {latest[1]?.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Right Card */}
            <motion.div
              style={{ x: rightCardX, opacity }}
              className="absolute top-1/4 right-0 z-10 w-[40%] md:w-56"
            >
              <Link href={`/blogs/${latest[2]?.slug}`}>
                <motion.div
                  initial={{ rotate: 8 }}
                  whileInView={{ rotate: 4 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl border-4 border-white shadow-2xl"
                >
                  <div
                    className="h-64 w-full bg-cover bg-center md:h-72"
                    style={{ backgroundImage: `url(${latest[2]?.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="text-xs font-medium tracking-wider text-[#c5a47e] uppercase">
                      {latest[2]?.category}
                    </span>
                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                      {latest[2]?.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Bottom Center Card */}
            <motion.div
              style={{ y: bottomCardY, opacity }}
              className="absolute bottom-0 left-1/3 z-15 w-[42%] -translate-x-1/2 md:w-60"
            >
              <Link href={`/blogs/${latest[3]?.slug}`}>
                <motion.div
                  initial={{ rotate: -6 }}
                  whileInView={{ rotate: -2 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl border-4 border-white shadow-2xl"
                >
                  <div
                    className="h-56 w-full bg-cover bg-center md:h-64"
                    style={{ backgroundImage: `url(${latest[3]?.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="text-xs font-medium tracking-wider text-[#c5a47e] uppercase">
                      {latest[3]?.category}
                    </span>
                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white">
                      {latest[3]?.title}
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 right-10 h-20 w-20 rounded-full border-2 border-[#c5a47e]/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.div
              className="absolute bottom-10 left-10 h-12 w-12 rounded-full bg-[#c5a47e]/20"
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
            className="order-1 space-y-6 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-[0.2em] text-[#c5a47e] uppercase"
            >
              From Our Blog
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-bold text-[#1a1a1a] md:text-5xl"
            >
              Latest News & Tips
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed text-[#666666]"
            >
              Stay updated with the latest trends in hair care, skin care, and
              grooming tips from our experts. Discover professional insights and
              beauty secrets.
            </motion.p>

            {/* Quick blog list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-4"
            >
              {latest.slice(0, 3).map((post, index) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                  <div className="group flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-colors hover:bg-[#f5f5f5]">
                    <span className="text-2xl md:text-3xl font-bold text-[#c5a47e]/30 transition-colors group-hover:text-[#c5a47e]">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="line-clamp-1 font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#c5a47e]">
                        {post.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-[#666666]">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/blogs">
                <Button
                  size="lg"
                  className="bg-[#0a0a0a] px-8 font-semibold text-white hover:bg-[#1a1a1a]"
                >
                  View All Blogs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
