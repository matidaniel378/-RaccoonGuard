import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sun, Moon, Menu, X } from 'lucide-react';
import { NavItem, ThemeMode } from '../types';

interface NavbarProps {
  navItems: NavItem[];
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  theme,
  onToggleTheme,
  onOpenWaitlist,
}) => {
  const [activeTab, setActiveTab] = useState<string>('how-it-works');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-3 sm:top-5 lg:top-7 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <motion.nav
        id="floating-navigation-bar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2.5 max-w-full"
      >
        {/* Left: Circle Icon / Mode Toggle Button */}
        <button
          id="nav-logo-icon-btn"
          type="button"
          onClick={onToggleTheme}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-105 shrink-0"
        >
          {/* Minimalist dot with concentric parenthesis logo symbol as shown in video */}
          <span className="font-mono text-sm tracking-tighter select-none font-bold text-white flex items-center justify-center">
            (·)
          </span>
        </button>

        {/* Center: Navigation Pill Container (visible on md+ screens) */}
        <div
          className={`hidden md:flex rounded-full p-1 sm:p-1.5 items-center gap-1 backdrop-blur-xl border shadow-sm transition-colors ${
            isDark
              ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
              : 'bg-white/80 border-zinc-200/80 text-zinc-700'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-xs font-semibold'
                    : isDark
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-700 hover:text-black'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right: "Procurement Inquiry ->" CTA Button */}
        <button
          id="nav-join-waitlist-btn"
          type="button"
          onClick={onOpenWaitlist}
          className="group bg-black hover:bg-zinc-800 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md shrink-0"
        >
          <span className="hidden xs:inline">Procurement Inquiry</span>
          <span className="xs:hidden">Procurement</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Mobile Hamburger Toggle for Small Screens */}
        <button
          id="nav-mobile-menu-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-full border shadow-sm shrink-0 cursor-pointer transition-colors ${
            isDark
              ? 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
              : 'bg-white/90 border-zinc-200 text-zinc-800 hover:bg-zinc-100'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto rounded-2xl p-4 shadow-2xl border md:hidden backdrop-blur-2xl z-50 ${
              isDark
                ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100'
                : 'bg-white/95 border-zinc-200 text-zinc-900'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-black text-white'
                      : isDark
                      ? 'text-zinc-300 hover:bg-zinc-900'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center px-1">
                <span className="text-xs font-medium text-zinc-500">Theme</span>
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 cursor-pointer"
                >
                  {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
                  <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
