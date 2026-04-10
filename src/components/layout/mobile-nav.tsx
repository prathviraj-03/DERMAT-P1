'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Calendar, User as UserIcon, LayoutGrid, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/providers/auth-provider';

export function MobileNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Sparkles },
    { name: 'Book', href: '/book', icon: Calendar, highlight: true },
    { name: 'Explore', href: '/blogs', icon: LayoutGrid },
    { 
      name: 'Profile', 
      href: user ? `/dashboard/${user.role}` : '/login', 
      icon: UserIcon 
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-[#e5e5e5] md:hidden pointer-events-auto" style={{ width: "100%", paddingBottom: "env(safe-area-inset-bottom)", boxSizing: "border-box" }}>
      <nav className="flex justify-around items-center h-[auto]" style={{ padding: "2vw 4vw", paddingLeft: "max(4vw, env(safe-area-inset-left))", paddingRight: "max(4vw, env(safe-area-inset-right))", boxSizing: "border-box", width: "100%" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center relative"
              style={{ flex: 1 }}
              aria-label={item.name}
            >
              <div
                className={cn(
                  'flex flex-col items-center justify-center transition-transform duration-200',
                  isActive ? 'scale-110' : 'hover:bg-gray-50 active:bg-gray-100',
                  item.highlight ? 'bg-gradient-to-tr from-[#1a0f0a] to-[#2c1810] text-[#c5a47e] shadow-xl border-4 border-white' : ''
                )}
                style={{ 
                  borderRadius: item.highlight ? "50%" : "2.5vw",
                  width: item.highlight ? "14vw" : "11vw",
                  height: item.highlight ? "14vw" : "11vw",
                  minHeight: "44px",
                  minWidth: "44px",
                  transform: item.highlight ? "translateY(-4vw)" : undefined
                }}
              >
                <Icon
                  className={cn(
                    'transition-colors',
                    isActive && !item.highlight ? 'text-[#c5a47e]' : '',
                    !isActive && !item.highlight ? 'text-gray-500' : '',
                    item.highlight ? 'text-[#c5a47e]' : ''
                  )}
                  style={{
                    fontSize: "clamp(20px, 6vw, 26px)",
                    width: "clamp(20px, 6vw, 26px)",
                    height: "auto",
                  }}
                  strokeWidth={isActive || item.highlight ? 2.5 : 2}
                />
                {!item.highlight && (
                  <span
                    className={cn(
                      'font-medium',
                      isActive ? 'text-[#c5a47e]' : 'text-gray-500'
                    )}
                    style={{ fontSize: "clamp(9px, 2.5vw, 12px)", marginTop: "1vw" }}
                  >
                    {item.name}
                  </span>
                )}
              </div>
              
              {/* Active Indicator Dot */}
              {isActive && !item.highlight && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute bg-[#c5a47e] rounded-full"
                  style={{ bottom: "1vw", width: "1vw", height: "1vw" }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}