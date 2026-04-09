'use client';

import Link from 'next/link';
import { blogPosts } from '@/content';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] py-32">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        {/* Elegant grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          className="absolute right-20 bottom-20 hidden h-48 w-48 rounded-full border border-[#d4a574]/40 md:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-10 left-10 hidden h-32 w-32 rounded-full bg-[#d4a574]/20 blur-2xl md:block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/15 px-4 py-2 text-sm font-medium tracking-wide text-[#d4a574]"
            >
              Insights & Tips
            </motion.span>
            <h1 className="mb-6 font-serif text-5xl leading-tight font-bold text-[#f5f0e8] md:text-6xl lg:text-7xl">
              Our Blog
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-[#f5f0e8]/70">
              Expert tips, latest trends, and beauty insights from our talented
              team to help you look and feel your best.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 bg-white">
        <div className="container py-16 md:py-24">
          {/* Featured Post */}
          {featuredPost && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <Link href={`/blogs/${featuredPost.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-72 min-h-[400px] overflow-hidden lg:h-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${featuredPost.image || '/assets/placeholder.jpg'})`,
                          backgroundColor: '#0a0a0a',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t" />
                      <div className="absolute top-6 left-6">
                        <span className="rounded-full bg-[#c5a47e] px-4 py-2 text-sm font-medium text-white">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <span className="mb-4 inline-block w-fit rounded-full bg-[#0a0a0a]/10 px-4 py-1 text-sm font-medium text-[#0a0a0a]">
                        {featuredPost.category}
                      </span>
                      <h2 className="mb-4 font-serif text-2xl font-bold text-[#1a1a1a] transition-colors group-hover:text-[#0a0a0a] md:text-3xl lg:text-4xl">
                        {featuredPost.title}
                      </h2>
                      <p className="mb-6 line-clamp-3 leading-relaxed text-[#666666]">
                        {featuredPost.excerpt}
                      </p>
                      <div className="mb-6 flex items-center gap-6 text-sm text-[#666666]">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 font-semibold text-[#c5a47e] transition-all group-hover:gap-4">
                        Read Article <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.section>
          )}

          {/* All Posts Grid */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-serif text-3xl font-bold text-[#1a1a1a] md:text-4xl">
                Latest Articles
              </h2>
              <span className="text-[#666666]">
                {blogPosts.length} articles
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <motion.article
                      whileHover={{ y: -8 }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-lg transition-all hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${post.image || '/assets/placeholder.jpg'})`,
                            backgroundColor: '#0a0a0a',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-[#c5a47e] px-3 py-1 text-xs font-medium text-white">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-[#1a1a1a] transition-colors group-hover:text-[#c5a47e]">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#666666]">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-4 text-xs text-[#666666]">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] p-12 text-center text-white">
              <motion.div
                className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#c5a47e]/20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
                  Stay Updated
                </h2>
                <p className="mb-8 text-white/80">
                  Subscribe to our newsletter for the latest beauty tips,
                  trends, and exclusive offers.
                </p>
                <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#c5a47e] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#c5a47e] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#b89468]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
