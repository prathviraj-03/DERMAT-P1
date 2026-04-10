'use client';

import { Hero } from '@/components/modules/hero';
import { VisionSection } from '@/components/modules/vision-section';
import { AboutPreview } from '@/components/modules/about-preview';
import { StickyScrollSection } from '@/components/modules/sticky-scroll-section';
import { FeaturedServices } from '@/components/modules/featured-services';
import { LatestBlogs } from '@/components/modules/latest-blogs';
import { ContactBlock } from '@/components/modules/contact-block';
import { ResultsGallery } from '@/components/modules/results-gallery';
import { TestimonialsCarousel } from '@/components/modules/testimonials-carousel';
import { motion } from 'framer-motion';
import { BookButton } from '@/components/modules/book-button';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/auth-provider';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const hasSkipped = localStorage.getItem('mock_clinic_skipped_login');
    if (!user && !hasSkipped) {
      router.replace('/login');
    } else {
      setIsInitializing(false);
    }
  }, [user, router]);

  if (isInitializing) {
    return <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <VisionSection />

      {/* Sticky Scroll Section */}
      <StickyScrollSection />

      {/* About Preview */}
      <AboutPreview />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Results Gallery */}
      <ResultsGallery />

      {/* Verified Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#c5a47e]/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-full border border-[#c5a47e]/30 bg-[#c5a47e]/20 px-6 py-2 text-sm font-semibold tracking-[0.2em] text-[#c5a47e] uppercase"
              >
                Ready to Transform?
              </motion.span>
              <h2 className="font-serif text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Book Your Appointment
                <span className="text-[#c5a47e]"> Today</span>
              </h2>
              <p className="mx-auto max-w-[600px] text-base leading-relaxed text-white/70 md:text-lg">
                Join thousands of satisfied clients. Experience premium beauty
                services with easy online booking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookButton
                size="lg"
                className="rounded-full bg-[#c5a47e] px-10 py-6 text-base font-bold text-[#1a1a1a] shadow-2xl transition-transform hover:scale-105 hover:bg-[#d4b896]"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </BookButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <LatestBlogs />

      {/* Contact Block */}
      <ContactBlock />
    </div>
  );
}
