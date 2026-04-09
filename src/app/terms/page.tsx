'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c5a47e]">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="text-white/80">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-8">
              <p className="m-0 leading-relaxed text-[#666666]">
                By accessing and using our services, you agree to be bound by
                these Terms of Service. Please read them carefully before
                proceeding.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    1
                  </span>
                  Terms
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  By accessing the website at DermaCare Clinic, you are agreeing to
                  be bound by these terms of service, all applicable laws and
                  regulations, and agree that you are responsible for compliance
                  with any applicable local laws.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    2
                  </span>
                  Appointments & Cancellations
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  Appointments can be made online or by phone. We require at
                  least 24 hours notice for cancellations. Late cancellations or
                  no-shows may be subject to a cancellation fee of up to 50% of
                  the service cost.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    3
                  </span>
                  Services & Pricing
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  All prices are subject to change without notice. Final prices
                  may vary based on treatment area, condition, and specialist level.
                  Additional treatments requested during your consultation will be
                  charged accordingly.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    4
                  </span>
                  Use License
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on DermaCare Clinic&apos;s
                  website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    5
                  </span>
                  Disclaimer
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  The materials on DermaCare Clinic&apos;s website are provided on an
                  &apos;as is&apos; basis. DermaCare Clinic makes no warranties,
                  expressed or implied, and hereby disclaims and negates all
                  other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    6
                  </span>
                  Modifications
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  DermaCare Clinic may revise these terms of service at any time
                  without notice. By using this website you are agreeing to be
                  bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    7
                  </span>
                  Contact
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  If you have any questions about these Terms of Service, please
                  contact us at{' '}
                  <a
                    href="mailto:legal@dermacareclinic.com"
                    className="font-semibold text-[#0a0a0a] transition-colors hover:text-[#c5a47e]"
                  >
                    legal@dermacareclinic.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
