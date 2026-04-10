
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, User as UserIcon, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { navigationConfig } from "@/content";
import { useAuth } from "@/components/providers/auth-provider";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  React.useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allNavigation = [...navigationConfig.leftNavigation, ...navigationConfig.rightNavigation];

  return (
    <motion.header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500",
        isScrolled ? "bg-white/95 py-[2vw] shadow-lg backdrop-blur-md" : "bg-transparent py-[4vw]"
      )}
      style={{ boxSizing: "border-box" }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isLoaded ? 0 : -100, opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="relative z-10 w-full mx-auto" style={{ padding: "0 4vw", boxSizing: "border-box" }}>
        <div className="flex items-center justify-between" style={{ gap: "2.5vw" }}>
          
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link href="/" className="group flex flex-col">
              <span 
                className={cn("font-serif font-bold tracking-tight transition-colors duration-300", isScrolled ? "text-[#1a1a1a]" : "text-white")}
                style={{ fontSize: "clamp(20px, 6vw, 26px)" }}
              >
                Oceanic <span className="text-[#c5a47e]">Saloon</span>
              </span>
            </Link>
          </motion.div>
          
          <div className="flex items-center flex-shrink-0 md:hidden" style={{ gap: "2.5vw" }}>
            <button 
              className="rounded-xl bg-gray-50/50 hover:bg-gray-100 active:scale-95 transition-all text-[#1a1a1a] flex items-center justify-center"
              style={{ minHeight: "44px", padding: "3vw", width: "auto" }}
            >
              <Bell style={{ width: "clamp(20px, 6vw, 26px)", height: "auto" }} />
            </button>
            <button 
              className={cn("rounded-xl text-[#1a1a1a] flex items-center justify-center active:scale-95 transition-all", !isScrolled && "text-[#1a1a1a] md:text-white")}
              style={{ minHeight: "44px", padding: "3vw", width: "auto" }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu style={{ width: "clamp(20px, 6vw, 26px)", height: "auto" }} />
            </button>
          </div>

          <motion.nav
            className="hidden md:flex items-center justify-end gap-6 flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {allNavigation.map((item, index) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                    pathname === item.href ? "text-[#c5a47e]" : isScrolled ? "text-[#1a1a1a] hover:text-[#c5a47e]" : "text-white hover:text-[#c5a47e]"
                  )}
                >
                  {item.name}
                  <motion.span className={cn("absolute -bottom-1 left-0 h-0.5 bg-[#c5a47e] transition-all duration-300", pathname === item.href ? "w-full" : "w-0 group-hover:w-full")} />
                </Link>
              </motion.div>
            ))}

            <motion.div className="flex items-center gap-4 ml-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 }}>
              {user ? (
                <div className="relative">
                  <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className={cn("flex items-center gap-2 transition-colors active:scale-95", isScrolled ? "text-[#1a1a1a]" : "text-white")}>
                     <div className="h-8 w-8 rounded-full bg-[#c5a47e]/20 flex items-center justify-center border border-[#c5a47e]/50"><UserIcon className="h-4 w-4 text-[#c5a47e]" /></div>
                  </button>
                  {profileMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute right-0 top-12 w-48 bg-white border border-[#e5e5e5] rounded-xl shadow-xl py-2 overflow-hidden">
                      <div className="px-4 py-2 border-b border-[#e5e5e5] mb-2">
                        <p className="text-sm font-bold text-[#1a1a1a] truncate">{user.name}</p>
                        <p className="text-xs text-[#666666] capitalize">{user.role}</p>
                      </div>
                      <Link onClick={() => setProfileMenuOpen(false)} href={`/dashboard/${user.role}`}  className="flex items-center gap-3 px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#fafafa]">
                        <LayoutDashboard className="h-4 w-4" /> Dashboard
                      </Link>
                      <button onClick={() => { setProfileMenuOpen(false); logout(); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
                        <LogOut className="h-4 w-4" /> Sign Out
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link href="/login" className={cn("hover:text-[#c5a47e] transition-colors", isScrolled ? "text-[#1a1a1a]" : "text-white")}><UserIcon className="h-5 w-5" /></Link>
              )}
            </motion.div>
          </motion.nav>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 h-[100dvh] shadow-2xl border-l border-[#e5e5e5] bg-white z-[60] flex flex-col md:hidden"
            style={{ width: "100%", boxSizing: "border-box" }}
          >
            <div 
              className="flex justify-between items-center border-b border-[#e5e5e5] bg-white sticky top-0 z-10" 
              style={{ 
                padding: "4vw", 
                paddingTop: "max(4vw, env(safe-area-inset-top))",
                boxSizing: "border-box"
              }}
            >
              <span className="font-serif font-bold text-[#1a1a1a] truncate" style={{ fontSize: "clamp(16px, 5vw, 22px)" }}>Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="bg-gray-50/80 hover:bg-gray-100 rounded-xl active:scale-95 touch-manipulation flex items-center justify-center flex-shrink-0"
                style={{ minHeight: "44px", padding: "3vw", width: "auto" }}
              >
                 <X style={{ width: "clamp(20px, 6vw, 26px)", height: "auto" }} className="text-gray-900" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto w-full" style={{ padding: "6vw 4vw max(6vw, env(safe-area-inset-bottom)) 4vw", display: "flex", flexDirection: "column", gap: "6vw" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
                {allNavigation.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: index * 0.05 }}>
                    <Link
                      href={item.href}
                      className={cn("block font-serif font-medium tracking-wide transition-colors active:text-[#c5a47e] active:scale-[0.98] rounded-[2.5vw] origin-left break-words w-full", pathname === item.href ? "text-[#c5a47e] bg-orange-50/50" : "text-[#1a1a1a] hover:bg-gray-50")}
                      style={{ padding: "4vw", fontSize: "clamp(16px, 5vw, 20px)", boxSizing: "border-box" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-[#e5e5e5] w-full" style={{ paddingTop: "6vw", marginTop: "4vw" }}>
                {user ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "4vw" }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: "4vw" }}>
                       <div className="truncate" style={{ paddingRight: "4vw" }}>
                         <p className="font-bold text-[#1a1a1a] truncate" style={{ fontSize: "clamp(14px, 4vw, 16px)" }}>{user.name}</p>
                         <p className="text-[#666666] capitalize truncate" style={{ fontSize: "clamp(11px, 3vw, 13px)" }}>{user.role}</p>
                       </div>
                    </div>
                    <Link href={`/dashboard/${user.role}`} className="flex items-center justify-center w-full bg-[#fafafa] border border-[#e5e5e5] text-center font-bold text-[#1a1a1a] active:scale-95 transition-transform" style={{ padding: "3.5vw 4vw", borderRadius: "2.5vw", fontSize: "clamp(14px, 4vw, 16px)", minHeight: "44px" }} onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                    <button onClick={() => { setMobileMenuOpen(false); logout(); }} className="flex items-center justify-center w-full border border-red-200 bg-red-50 text-center font-bold text-red-600 active:scale-95 transition-transform" style={{ padding: "3.5vw 4vw", borderRadius: "2.5vw", fontSize: "clamp(14px, 4vw, 16px)", minHeight: "44px" }}>Sign Out</button>
                  </div>
                ) : (
                  <div>
                    <Link href="/login" className="block w-full bg-[#1a1a1a] text-center font-bold text-white shadow-lg active:scale-95 transition-transform" style={{ padding: "3.5vw 4vw", borderRadius: "2.5vw", fontSize: "clamp(14px, 4vw, 16px)", minHeight: "44px" }} onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/40 z-[55] md:hidden backdrop-blur-sm" />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

