import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, UserCheck } from 'lucide-react';

export function Header({ onOpenPortfolio }) {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-4 px-4 z-10">
      {/* Portfolio Developer Badge */}
      <motion.button
        onClick={onOpenPortfolio}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#FF8A00]/40 backdrop-blur-md transition-all group cursor-pointer mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D26A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D26A]"></span>
        </span>
        <span className="text-xs font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors">
          Software Engineer <span className="text-[#FF8A00]">•</span> AI Builder <span className="text-[#FF8A00]">•</span> Creative Developer
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#FF8A00] opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Main Logo & Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center justify-center gap-3 mb-2"
      >
        <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-[#FF8A00]/20 to-amber-900/10 border border-[#FF8A00]/30 shadow-[0_0_25px_rgba(255,138,0,0.25)]">
          <Shield className="w-8 h-8 text-[#FF8A00]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#FF8A00] bg-clip-text text-transparent">
          RaccoonGuard
        </h1>
      </motion.div>

      {/* Subtitle & Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-1"
      >
        <p className="text-sm font-semibold tracking-wider uppercase text-[#FF8A00] flex items-center justify-center gap-1.5">
          <UserCheck className="w-4 h-4" />
          Built by Abenezer Tegenu
        </p>
        <p className="text-sm text-slate-400 font-light max-w-sm">
          The friendliest security guard on the internet.
        </p>
      </motion.div>
    </header>
  );
}
