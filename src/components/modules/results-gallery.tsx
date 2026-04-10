'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const galleries = [
  {
    title: 'Acne Treatment',
    before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Hair Growth Therapy',
    before: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Skin Rejuvenation',
    before: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
  },
];

export function ResultsGallery() {
  return (
    <section className="bg-white py-24 page-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-bold uppercase tracking-widest text-[#c5a47e]"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a] md:text-5xl"
          >
            Before & After Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-gray-600"
          >
            Discover the transformative power of our personalized treatments. These real patient journeys highlight our commitment to excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 * index }}
               className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-100"
             >
                <div className="flex h-[300px]">
                   {/* Before */}
                   <div className="relative w-1/2 overflow-hidden border-r-2 border-white">
                      <img src={item.before} alt={`${item.title} Before`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 text-xs font-semibold text-white rounded-md backdrop-blur-sm shadow-md">
                         Before
                      </div>
                   </div>
                   {/* After */}
                   <div className="relative w-1/2 overflow-hidden">
                      <img src={item.after} alt={`${item.title} After`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute bottom-3 right-3 bg-[#c5a47e]/90 px-3 py-1 text-xs font-semibold text-white rounded-md backdrop-blur-sm shadow-md">
                         After
                      </div>
                   </div>
                </div>
                <div className="bg-[#1a1a1a] p-4 text-center">
                   <h3 className="font-serif font-bold text-white text-lg">{item.title}</h3>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}