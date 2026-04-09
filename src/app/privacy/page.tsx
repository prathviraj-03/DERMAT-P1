'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Privacy Policy
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
                Your privacy is important to us. It is DermaCare Clinic&apos;s policy
                to respect your privacy regarding any information we may collect
                from you across our website.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    1
                  </span>
                  Information We Collect
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  We only ask for personal information when we truly need it to
                  provide a service to you. We collect it by fair and lawful
                  means, with your knowledge and consent. This may include your
                  name, email address, phone number, and appointment
                  preferences.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    2
                  </span>
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  We use the collected information to schedule appointments,
                  provide services, send appointment reminders, and improve our
                  website experience. We do not share any personally identifying
                  information publicly or with third-parties, except when
                  required to by law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    3
                  </span>
                  Data Security
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. Your data is stored
                  securely and only accessible to authorized personnel.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    4
                  </span>
                  Your Rights
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  You have the right to access, correct, or delete your personal
                  information at any time. You may also opt-out of marketing
                  communications. To exercise these rights, please contact us
                  using the information below.
                </p>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold text-[#0a0a0a]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a47e] text-sm font-bold text-white">
                    5
                  </span>
                  Contact Us
                </h2>
                <p className="leading-relaxed text-[#666666]">
                  If you have any questions about our privacy policy, please
                  contact us at{' '}
                  <a
                    href="mailto:privacy@dermacareclinic.com"
                    className="font-semibold text-[#0a0a0a] transition-colors hover:text-[#c5a47e]"
                  >
                    privacy@dermacareclinic.com
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
