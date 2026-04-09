'use client';

import { blogPosts } from '@/content';
import { formatDate } from '@/lib/utils';
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type BlogPost = (typeof blogPosts)[number];

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostPageClient({ post, relatedPosts }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blogs"
              className="mb-8 inline-flex items-center gap-2 text-[#f5f0e8]/70 transition-colors hover:text-[#f5f0e8]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a574]/40 bg-[#d4a574]/15 px-4 py-2 text-sm font-medium tracking-wide text-[#d4a574]">
              {post.category}
            </span>
            <h1 className="mb-6 font-serif text-3xl leading-tight font-bold text-[#f5f0e8] md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#f5f0e8]/70">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-10 aspect-video overflow-hidden rounded-2xl shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${post.image || '/assets/placeholder.jpg'})`,
                  backgroundColor: '#1a1a1a',
                }}
              />
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="mb-8 border-l-4 border-[#c5a47e] pl-6 text-xl leading-relaxed font-medium text-[#666666]">
                {post.excerpt}
              </p>
              <div className="leading-relaxed whitespace-pre-wrap text-[#1a1a1a]">
                {post.content}
              </div>
            </motion.article>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 border-t border-[#e5e5e5] pt-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-[#666666]">Tags:</span>
                  <span className="rounded-full bg-[#f5f5f5] px-4 py-1 text-sm text-[#1a1a1a]">
                    {post.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-28 space-y-8"
            >
              <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-xl font-bold text-white">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a1a]">{post.author}</h4>
                    <p className="text-sm text-[#666666]">Medical Expert</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#666666]">
                  Our expert team shares their knowledge and tips to help you
                  maintain optimal skin health.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-lg">
                <h4 className="mb-4 font-bold text-[#1a1a1a]">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.map((p) => p.category))).map(
                    (cat) => (
                      <span
                        key={cat}
                        className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === post.category ? 'bg-[#c5a47e] text-white' : 'bg-[#f5f5f5] text-[#666666] hover:bg-[#c5a47e] hover:text-white'}`}
                      >
                        {cat}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-6 text-white">
                <h4 className="mb-2 text-xl font-bold">
                  Ready for a Transformation?
                </h4>
                <p className="mb-4 text-sm text-white/80">
                  Book your appointment today and experience the difference.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c5a47e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b89468]"
                >
                  Book Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-3xl font-bold text-[#1a1a1a]">
              Related Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="block overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white p-6 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-bold text-[#1a1a1a]">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[#666666]">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
