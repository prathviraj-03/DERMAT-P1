'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bell, Globe, User as UserIcon, LogOut, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BookButton } from '@/components/modules/book-button';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationConfig, siteConfig } from '@/content';
import { useAuth } from '@/components/providers/auth-provider';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  React.useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavigation = [...navigationConfig.leftNavigation, ...navigationConfig.rightNavigation];

  return (
    <motion.header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500',
        isScrolled
          ? 'bg-white/95 py-3 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-6'
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isLoaded ? 0 : -100, opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="relative z-10 container">
        <div className="flex items-center justify-center">
          {/* Left Navigation */}
          <motion.nav
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navigationConfig.leftNavigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'group relative py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300',
                    pathname === item.href
                      ? 'text-[#c5a47e]'
                      : isScrolled
                        ? 'text-[#1a1a1a] hover:text-[#c5a47e]'
                        : 'text-white hover:text-[#c5a47e]'
                  )}
                >
                  {item.name}
                  <motion.span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-[#c5a47e] transition-all duration-300',
                      pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Center Logo */}
          <motion.div
            className="mx-8 md:mx-16"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <Link href="/" className="group flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-center"
              >
                <span className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                  <span
                    className={isScrolled ? 'text-[#1a1a1a]' : 'text-white'}
                  >
                    DermaCare
                  </span>
                  <span className="text-[#c5a47e]"> Clinic</span>
                </span>
                <motion.div
                  className="mt-1 h-0.5 bg-gradient-to-r from-transparent via-[#c5a47e] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <motion.nav
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navigationConfig.rightNavigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'group relative py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300',
                    pathname === item.href
                      ? 'text-[#c5a47e]'
                      : isScrolled
                        ? 'text-[#1a1a1a] hover:text-[#c5a47e]'
                        : 'text-white hover:text-[#c5a47e]'
                  )}
                >
                  {item.name}
                  <motion.span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-[#c5a47e] transition-all duration-300',
                      pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Right Tools: Locale, Notification, User */}
            <motion.div 
              className="flex items-center gap-4 ml-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <button className={cn('hover:text-[#c5a47e] transition-colors', isScrolled ? 'text-[#1a1a1a]' : 'text-white')}>
                <Globe className="h-5 w-5" />
              </button>
              
              {user ? (
                <>
                  <button className={cn('hover:text-[#c5a47e] transition-colors relative', isScrolled ? 'text-[#1a1a1a]' : 'text-white')}>
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">2</span>
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      className={cn('flex items-center gap-2 hover:text-[#c5a47e] transition-colors', isScrolled ? 'text-[#1a1a1a]' : 'text-white')}
                    >
                      <div className="h-8 w-8 rounded-full bg-[#c5a47e]/20 flex items-center justify-center border border-[#c5a47e]/50">
                         <UserIcon className="h-4 w-4 text-[#c5a47e]" />
                      </div>
                    </button>

                    {profileMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute right-0 top-12 w-48 bg-white border border-[#e5e5e5] rounded-xl shadow-xl py-2 overflow-hidden"
                      >
                        <div className="px-4 py-2 border-b border-[#e5e5e5] mb-2">
                          <p className="text-sm font-bold text-[#1a1a1a] truncate">{user.name}</p>
                          <p className="text-xs text-[#666666] capitalize">{user.role}</p>
                        </div>
                        <Link 
                          onClick={() => setProfileMenuOpen(false)}
                          href={`/dashboard/${user.role}`} 
                          className="flex items-center gap-3 px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#fafafa]"
                        >
                          <LayoutDashboard className="h-4 w-4" /> Dashboard
                        </Link>
                        <button 
                          onClick={() => {
                            setProfileMenuOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                        >
                          <LogOut className="h-4 w-4" /> Sign Out
                        </button>
                      </motion.div>
                    )}
                  </div>
                </>
              ) : (
                <Link href="/login" className={cn('hover:text-[#c5a47e] transition-colors', isScrolled ? 'text-[#1a1a1a]' : 'text-white')}>
                  <UserIcon className="h-5 w-5" />
                </Link>
              )}
            </motion.div>
          </motion.nav>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={cn(
            'absolute top-1/2 right-4 flex -translate-y-1/2 items-center p-2 md:hidden',
            isScrolled ? 'text-[#1a1a1a]' : 'text-white'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#e5e5e5] bg-white/98 backdrop-blur-xl md:hidden"
          >
            <div className="container space-y-4 py-6">
              {allNavigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block border-b border-[#e5e5e5] py-3 text-lg font-medium tracking-wide transition-colors',
                      pathname === item.href
                        ? 'text-[#c5a47e]'
                        : 'text-[#1a1a1a] hover:text-[#c5a47e]'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Auth Status */}
              <div className="border-t border-[#e5e5e5] pt-4 mt-4">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                       <div>
                         <p className="font-bold text-[#1a1a1a]">{user.name}</p>
                         <p className="text-xs text-[#666666] capitalize">{user.role}</p>
                       </div>
                    </div>
                    <Link
                      href={`/dashboard/${user.role}`}
                      className="block w-full rounded-xl bg-[#fafafa] border border-[#e5e5e5] py-3 text-center font-bold text-[#1a1a1a]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        logout();
                      }}
                      className="w-full rounded-xl border border-red-200 bg-red-50 py-3 text-center font-bold text-red-600"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full rounded-xl bg-[#1a1a1a] py-3 text-center font-bold text-white shadow-lg shadow-black/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: allNavigation.length * 0.05,
                }}
                className="pt-4"
              >
                <BookButton
                  className="w-full bg-[#c5a47e] py-4 text-lg font-semibold text-[#0a0a0a] shadow-lg hover:bg-[#b89468]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </BookButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
