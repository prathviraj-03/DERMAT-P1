'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, ShieldCheck, User, Calendar, Clock, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const name = searchParams.get('name') || '';
  const service = searchParams.get('service') || '';
  const doctor = searchParams.get('doctor') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';
  
  // Calculate mock price based on service length
  const mockPrice = (service.length * 150) + 1500;
  
  useEffect(() => {
    // If accessed directly without URL params, redirect back
    if (!name || !service) {
      router.push('/');
    }
  }, [name, service, router]);

  const handleMockPayment = () => {
    setIsProcessing(true);
    
    // Simulate Razorpay gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Save to mock database (localStorage)
      const existingBookings = JSON.parse(localStorage.getItem('mock_bookings') || '[]');
      const newBooking = {
        id: `MOCK-${Math.floor(Math.random() * 10000)}`,
        name,
        service,
        doctor,
        date,
        time,
        amount: mockPrice,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('mock_bookings', JSON.stringify([newBooking, ...existingBookings]));
      
      // Redirect to patient dashboard after 3s
      setTimeout(() => {
        router.push('/dashboard/patient');
      }, 3000);
      
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa] pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50"
          >
            <CheckCircle className="h-12 w-12 text-green-500" />
          </motion.div>
          <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-[#1a1a1a]">
            Payment Successful
          </h2>
          <p className="mt-2 text-[#666666]">
            Your appointment has been confirmed. Redirecting to your dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-12">
      <div className="container mx-auto max-w-4xl px-4">
        
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#1a1a1a] text-center">Checkout</h1>
          <p className="text-center text-[#666666] mt-2">Complete your booking securely via Razorpay (Mock)</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Order Summary */}
          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm h-fit">
            <h2 className="font-serif text-xl font-bold text-[#1a1a1a] mb-6">Appointment Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5]">
                  <User className="h-5 w-5 text-[#666666]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">{name}</p>
                  <p className="text-xs text-[#fafafa]0 capitalize">{service.replace('-', ' ')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5]">
                  <Stethoscope className="h-5 w-5 text-[#666666]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">Physician</p>
                  <p className="text-xs text-[#fafafa]0 capitalize">{doctor.replace('-', ' ')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#fafafa]0" />
                  <span className="text-sm text-[#666666]">{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#fafafa]0" />
                  <span className="text-sm text-[#666666]">{time}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#e5e5e5] pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#666666]">Consultation Fee</span>
                <span className="font-medium text-[#1a1a1a]">₹{mockPrice}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#666666]">Taxes (18% GST)</span>
                <span className="font-medium text-[#1a1a1a]">₹{Math.floor(mockPrice * 0.18)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#e5e5e5] pt-4">
                <span className="font-bold text-[#1a1a1a]">Total Payable</span>
                <span className="text-2xl font-bold text-[#b4905b]">₹{Math.floor(mockPrice * 1.18)}</span>
              </div>
            </div>
          </div>

          {/* Mock Razorpay UI */}
          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="h-6 w-6 text-green-600" />
                <h2 className="font-serif text-xl font-bold text-[#1a1a1a]">Secure Payment</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="rounded-xl border-2 border-[#b4905b] bg-[#fdfbf7] p-4 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-[#b4905b]" />
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Credit / Debit Card</p>
                      <p className="text-xs text-[#fafafa]0">Demo processing only</p>
                    </div>
                  </div>
                  <div className="h-4 w-4 rounded-full border-4 border-[#b4905b] bg-white" />
                </div>
                
                <div className="rounded-xl border border-[#e5e5e5] bg-white p-4 flex items-center gap-3 opacity-50">
                  <div className="h-6 w-6 bg-[#e5e5e5] rounded font-bold text-xs flex items-center justify-center text-[#fafafa]0">UPI</div>
                  <p className="font-medium text-[#fafafa]0">UPI / QR</p>
                </div>
              </div>
              
              <div className="rounded-lg bg-[#fafafa] p-4 border border-[#f5f5f5] mb-6">
                <p className="text-xs text-[#fafafa]0 text-center">
                  This is a mock implementation for demonstration purposes. No real transaction will occur.
                </p>
              </div>
            </div>

            <Button 
              onClick={handleMockPayment}
              disabled={isProcessing}
              className="w-full bg-[#1a0f0a] hover:bg-[#2c1810] text-white py-6 rounded-full text-lg shadow-lg"
            >
              {isProcessing ? 'Processing Payment...' : `Pay ₹${Math.floor(mockPrice * 1.18)} Securely`}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
