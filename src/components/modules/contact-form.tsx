'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission (frontend only)
    if (process.env.NODE_ENV !== 'test') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log('Contact Form Data:', data);

    setIsSuccess(true);
    reset();
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4 rounded-2xl border border-[#0a0a0a]/20 bg-[#0a0a0a]/10 p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0a0a0a]"
        >
          <CheckCircle className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0a0a0a]">
          Message Sent!
        </h3>
        <p className="text-[#666666]">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-medium text-[#1a1a1a]">
            Name
          </Label>
          <Input
            id="name"
            {...register('name')}
            placeholder="Your Name"
            className="rounded-xl border-[#e5e5e5] py-6 focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-medium text-[#1a1a1a]">
            Phone
          </Label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="rounded-xl border-[#e5e5e5] py-6 focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-medium text-[#1a1a1a]">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="you@example.com"
          className="rounded-xl border-[#e5e5e5] py-6 focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-medium text-[#1a1a1a]">
          Message
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="How can we help you?"
          className="min-h-[120px] rounded-xl border-[#e5e5e5] focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-[#0a0a0a] py-6 font-semibold text-white shadow-lg hover:bg-[#1a1a1a]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
