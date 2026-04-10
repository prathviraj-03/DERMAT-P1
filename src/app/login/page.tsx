'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/components/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Phone, User as UserIcon } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { login, user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user?.role === 'patient') router.push('/dashboard/patient');
    if (user?.role === 'admin') router.push('/dashboard/admin');
  }, [user, router]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isRegistering) {
      if (!name || !phone || !password) {
        setError('Please fill in all required fields');
        return;
      }
      
      // Mock Register
      login({
        id: 'patient_new',
        name: name,
        phone: phone,
        role: 'patient',
      });
      router.push('/dashboard/patient');
      return;
    }

    // Hardcoded Patient Details
    if (phone === '9999999999' && password === 'pass123') {
      login({
        id: 'patient_001',
        name: 'Sarah Jenkins',
        phone: '9999999999',
        role: 'patient',
      });
      router.push('/dashboard/patient');
      return;
    }

    // Hardcoded Admin Details
    if (phone === '0000000000' && password === 'admin123') {
      login({
        id: 'admin_001',
        name: 'Dr. Priya Sharma',
        phone: '0000000000',
        role: 'admin',
      });
      router.push('/dashboard/admin');
      return;
    }

    setError('Invalid phone number or password');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2c1810] via-[#1a0f0a] to-[#0f0705] flex items-center justify-center p-6 pt-24 md:pt-32 relative overflow-hidden">
      {/* Background elegant pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,165,116,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,165,116,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#e8e8e8] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#c5a47e]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 text-center mb-8">
            <Link href="/" className="inline-flex justify-center mb-6">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-[#1a1a1a]">DermaCare</span>
                <span className="text-[#c5a47e]"> Clinic</span>
              </span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mb-2">{isRegistering ? 'Create Account' : 'Welcome Back'}</h1>
            <p className="text-[#666666]">{isRegistering ? 'Sign up for medical updates.' : 'Access your medical records and appointments.'}</p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium mb-6 text-center"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleAuth} className="space-y-6 relative z-10">
            {isRegistering && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-[#1a1a1a] font-medium">Full Name</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <Input
                    id="name"
                    required={isRegistering}
                    placeholder="Enter your name"
                    className="pl-10 h-12 rounded-xl border-[#e8e8e8] bg-[#fafafa] focus:bg-white text-[#1a1a1a] placeholder:text-[#a3a3a3]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#1a1a1a] font-medium">Phone Number</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]">
                  <Phone className="h-5 w-5" />
                </div>
                <Input
                  id="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 h-12 rounded-xl border-[#e8e8e8] bg-[#fafafa] focus:bg-white text-[#1a1a1a] placeholder:text-[#a3a3a3]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#1a1a1a] font-medium">Password</Label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a3a3]">
                  <Lock className="h-5 w-5" />
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="pl-10 h-12 rounded-xl border-[#e8e8e8] bg-[#fafafa] focus:bg-white text-[#1a1a1a] placeholder:text-[#a3a3a3]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="w-full sm:flex-1 h-12 bg-[#1a1a1a] hover:bg-[#c5a47e] text-white font-medium tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isRegistering ? 'Register' : 'Sign In'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  localStorage.setItem('mock_clinic_skipped_login', 'true');
                  router.push('/');
                }}
                className="w-full sm:flex-1 h-12 border-[#e8e8e8] text-[#1a1a1a] hover:bg-[#fafafa] font-medium tracking-wide rounded-xl"
              >
                Skip Login
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError('');
                }}
                className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors"
              >
                {isRegistering
                  ? 'Already have an account? Sign in here'
                  : "Don't have an account? Register here"}
              </button>
            </div>
          </form>

          {/* DEMO ACCOUNTS HELPER */}
          <div className="mt-8 pt-6 border-t border-[#e8e8e8] relative z-10 bg-[#fafafa] -mx-4 px-6 md:px-12 lg:px-16 py-4 rounded-xl text-center">
            <p className="text-xs font-bold text-[#c5a47e] uppercase tracking-wider mb-3">Demo Credentials</p>
            <div className="flex gap-4 justify-between">
              <div className="text-xs text-left bg-white p-3 rounded-lg border border-[#e8e8e8] flex-1">
                <p className="font-bold flex items-center gap-1 mb-1"><UserIcon className="h-3 w-3 "/> Patient</p>
                <p className="text-[#666666]">Phone: <span className="font-mono text-[#1a1a1a]">9999999999</span></p>
                <p className="text-[#666666]">Pass: <span className="font-mono text-[#1a1a1a]">pass123</span></p>
              </div>
              <div className="text-xs text-left bg-white p-3 rounded-lg border border-[#e8e8e8] flex-1">
                <p className="font-bold flex items-center gap-1 mb-1"><UserIcon className="h-3 w-3 "/> Admin</p>
                <p className="text-[#666666]">Phone: <span className="font-mono text-[#1a1a1a]">0000000000</span></p>
                <p className="text-[#666666]">Pass: <span className="font-mono text-[#1a1a1a]">admin123</span></p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}