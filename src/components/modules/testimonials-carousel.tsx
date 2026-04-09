'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Emily Davis',
    date: 'March 2024',
    treatment: 'Acne Scars Treatment',
    rating: 5,
    text: "The care and attention I received here was unparalleled. Dr. Jenkins took the time to understand my skin concerns, and after just three sessions, my skin looks flawless. Worth every penny.",
  },
  {
    id: 2,
    name: 'Michael Brown',
    date: 'February 2024',
    treatment: 'Hair Transplant',
    rating: 5,
    text: "Oceanic totally transformed my confidence. The entire procedure was explained clearly, and the post-op care was fantastic. I'm seeing amazing hair growth and couldn't be happier.",
  },
  {
    id: 3,
    name: 'Sophia Williams',
    date: 'January 2024',
    treatment: 'Laser Hair Removal',
    rating: 5,
    text: "I was nervous about the process, but the staff here is so professional and the environment is luxurious. It felt more like a spa day than a medical treatment. Highly recommended!",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#1a1a1a] py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#c5a47e]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#c5a47e]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-bold uppercase tracking-widest text-[#c5a47e]"
          >
            Verified Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl font-bold text-white md:text-5xl"
          >
            What Our Patients Say
          </motion.h2>
        </div>

        <div className="mx-auto max-w-4xl relative">
          <div className="absolute left-0 top-1/2 -mt-6 hidden md:block">
            <button
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/50 backdrop-blur-md transition-all hover:border-[#c5a47e] hover:bg-[#c5a47e] hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -mt-6 hidden md:block">
            <button
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/50 backdrop-blur-md transition-all hover:border-[#c5a47e] hover:bg-[#c5a47e] hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden md:px-20 relative">
             <Quote className="h-20 w-20 text-[#c5a47e]/20 absolute -top-4 -left-4 md:left-12 rotate-180 z-0" />
            
             <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#c5a47e] text-[#c5a47e]" />
                  ))}
                </div>
                <p className="mb-8 font-serif text-xl italic leading-relaxed text-white/90 md:text-3xl">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-full bg-[#c5a47e]/20 flex items-center justify-center text-[#c5a47e] font-serif text-xl border border-[#c5a47e]/30">
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-[#c5a47e] font-medium">{reviews[currentIndex].treatment}</p>
                    <p className="text-xs text-white/50 mt-1">{reviews[currentIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-8 bg-[#c5a47e]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}