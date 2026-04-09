'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Calendar, Clock, User, Stethoscope } from 'lucide-react';
import { services, teamMembers } from '@/content';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

export default function BookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service');
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: defaultService || '',
    }
  });

  const selectedTime = watch('time');
  const selectedDoctor = watch('doctor');

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const query = new URLSearchParams(data as Record<string, string>).toString();
    router.push(`/checkout?${query}`);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header Area */}
      <div className="bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c5a47e]/20">
            <Calendar className="h-8 w-8 text-[#c5a47e]" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-[#c5a47e] md:text-5xl">
            Book Appointment
          </h1>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">
            Choose your preferred service, specialist, and time. We'll take care of the rest.
          </p>
        </motion.div>
      </div>

      {/* Form Area */}
      <div className="container mx-auto px-4 -mt-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Personal Details */}
            <div>
              <h2 className="text-xl font-serif font-bold text-[#1a1a1a] flex items-center gap-2 mb-6 border-b pb-4">
                <User className="h-5 w-5 text-[#c5a47e]"/> Personal Information
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    {...register('name')}
                    placeholder="John Doe"
                    className="h-12 rounded-xl bg-#fafafa border-transparent focus:bg-white focus:border-[#c5a47e] focus:ring-[#c5a47e]"
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    {...register('phone')}
                    placeholder="+91 90000 00000"
                    className="h-12 rounded-xl bg-#fafafa border-transparent focus:bg-white focus:border-[#c5a47e] focus:ring-[#c5a47e]"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    className="h-12 rounded-xl bg-#fafafa border-transparent focus:bg-white focus:border-[#c5a47e] focus:ring-[#c5a47e]"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h2 className="text-xl font-serif font-bold text-[#1a1a1a] flex items-center gap-2 mb-6 border-b pb-4 mt-8">
                <Stethoscope className="h-5 w-5 text-[#c5a47e]"/> Appointment Details
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Select Service</Label>
                  <select
                    {...register('service')}
                    className="flex h-12 w-full rounded-xl border border-transparent bg-#fafafa px-4 text-sm focus:border-[#c5a47e] focus:ring-[#c5a47e] focus:bg-white focus:outline-none"
                  >
                    <option value="">Choose a treatment...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Doctor</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {teamMembers.map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setValue('doctor', doc.slug, { shouldValidate: true })}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          selectedDoctor === doc.slug 
                            ? 'border-[#c5a47e] bg-[#c5a47e]/5 shadow-sm' 
                            : 'border-#f5f5f5 bg-white hover:border-#e5e5e5'
                        }`}
                      >
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img src={doc.image} alt={doc.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-sm text-#1a1a1a">{doc.name}</p>
                          <p className="text-[10px] text-#fafafa0">{doc.role}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  {/* Hidden input for react-hook-form */}
                  <input type="hidden" {...register('doctor')} />
                  {errors.doctor && <p className="text-xs text-red-500">{errors.doctor.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Input
                    type="date"
                    {...register('date')}
                    min={new Date().toISOString().split('T')[0]} // cant book past
                    className="h-12 rounded-xl bg-#fafafa border-transparent focus:bg-white focus:border-[#c5a47e] focus:ring-[#c5a47e]"
                  />
                  {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 mb-3"><Clock className="h-4 w-4"/> Select Time Slot</Label>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setValue('time', t, { shouldValidate: true })}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                          selectedTime === t 
                            ? 'bg-[#c5a47e] text-white shadow-md' 
                            : 'bg-#f5f5f5 text-#666666 hover:bg-#e5e5e5'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {/* Hidden input for time */}
                  <input type="hidden" {...register('time')} />
                  {errors.time && <p className="text-xs text-red-500 mt-2">{errors.time.message}</p>}
                </div>

              </div>
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#1a0f0a] hover:bg-[#2c1810] py-4 text-center font-bold text-white shadow-xl transition-all disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </div>
            
          </form>
        </motion.div>
      </div>
    </div>
  );
}
