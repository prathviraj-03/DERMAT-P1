'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Loader2, Calendar, CheckCircle } from 'lucide-react';
import { useBooking } from '@/hooks/use-booking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { services, teamMembers } from '@/content';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  doctor: z.string().min(1, 'Please select a specialist'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time slot is required'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingModal() {
  const { isOpen, closeBooking, preselectedService } = useBooking();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const router = useRouter();

  // Time slots dummy data
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  // Lock body scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  React.useEffect(() => {
    if (isOpen && preselectedService) {
      setValue('service', preselectedService);
    }
  }, [isOpen, preselectedService, setValue]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);

    // Simulate booking (frontend only)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Booking Data:', data);
    
    closeBooking();
    reset();
    setIsSubmitting(false);

    // Serialize data to URL
    const query = new URLSearchParams(data as Record<string, string>).toString();
    router.push(`/checkout?${query}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        onClick={closeBooking}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#c5a47e]" />

          <button
            onClick={closeBooking}
            className="absolute top-6 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] text-[#666666] transition-colors hover:bg-[#0a0a0a] hover:text-white"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
              <Calendar className="h-5 w-5 text-black" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                Book Appointment
              </h2>
              <p className="text-sm text-[#666666]">
                Fill out the details below
              </p>
            </div>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0a0a0a]"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="font-serif text-2xl font-bold text-[#0a0a0a]">
                Booking Confirmed!
              </h3>
              <p className="text-[#666666]">
                We&apos;ll send you a confirmation email shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium text-[#1a1a1a]">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Your name"
                    className="rounded-xl border-[#e5e5e5] focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">
                      {errors.name.message}
                    </p>
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
                    className="rounded-xl border-[#e5e5e5] focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.message}
                    </p>
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
                  className="rounded-xl border-[#e5e5e5] focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="font-medium text-[#1a1a1a]">
                  Service
                </Label>
                <select
                  id="service"
                  className="flex h-12 w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-2 text-sm focus:border-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a] focus:outline-none"
                  {...register('service')}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="doctor" className="font-medium text-[#1a1a1a]">
                    Doctor
                  </Label>
                  <select
                    id="doctor"
                    className="flex h-12 w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-2 text-sm focus:border-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a] focus:outline-none"
                    {...register('doctor')}
                  >
                    <option value="">Select Doctor</option>
                    {teamMembers.map((doc) => (
                      <option key={doc.id} value={doc.id.toString()}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                  {errors.doctor && (
                    <p className="text-xs text-red-500">
                      {errors.doctor.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="font-medium text-[#1a1a1a]">
                    Time Slot
                  </Label>
                  <select
                    id="time"
                    className="flex h-12 w-full rounded-xl border border-[#e5e5e5] bg-white px-4 py-2 text-sm focus:border-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a] focus:outline-none"
                    {...register('time')}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-xs text-red-500">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="font-medium text-[#1a1a1a]">
                  Preferred Date
                </Label>
                <div>
                  <Input
                    id="date"
                    type="date"
                    {...register('date')}
                    placeholder="dd-mm-yyyy"
                    className="rounded-xl border-[#e5e5e5] text-[#1a1a1a] placeholder:text-[#666666] focus:border-[#0a0a0a] focus:ring-[#0a0a0a]"
                  />
                  <p className="mt-2 text-xs text-[#666666]">
                    Format: dd-mm-yyyy
                  </p>
                </div>
                {errors.date && (
                  <p className="text-xs text-red-500">{errors.date.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#0a0a0a] py-6 font-semibold text-white shadow-lg hover:bg-[#1a1a1a]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />{' '}
                    Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
