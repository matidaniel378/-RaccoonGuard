import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Code, Cpu, Palette, ExternalLink, Mail, CheckCircle2, Globe } from 'lucide-react';

export function DeveloperModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/15 text-left z-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8A00] to-amber-600 p-0.5 shadow-[0_0_20px_rgba(255,138,0,0.4)]">
              <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center font-bold text-xl text-[#FF8A00]">
                AT
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                Abenezer Tegenu
                <CheckCircle2 className="w-4 h-4 text-[#00D26A]" />
              </h3>
              <p className="text-xs text-[#FF8A00] font-semibold tracking-wide uppercase">
                Software Engineer • AI Builder • Creative Developer
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
            I craft high-performance web applications, character-driven micro-products, and AI-powered digital experiences with meticulous focus on interactive motion, visual luxury, and production quality.
          </p>

          {/* Skill Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <Code className="w-4 h-4 text-[#FF8A00]" />
              <div className="text-xs font-bold text-white">Frontend Arch</div>
              <div className="text-[11px] text-slate-400">React, Vite, Motion, Web Audio</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <Cpu className="w-4 h-4 text-[#00D26A]" />
              <div className="text-xs font-bold text-white">AI Engineering</div>
              <div className="text-[11px] text-slate-400">LLM Agents, GenAI SDKs</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
              <Palette className="w-4 h-4 text-purple-400" />
              <div className="text-xs font-bold text-white">UI/UX Design</div>
              <div className="text-[11px] text-slate-400">Glassmorphism, SVG Motion</div>
            </div>
          </div>

          {/* Project Spec Badge */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF8A00]/10 via-amber-500/5 to-transparent border border-[#FF8A00]/20 mb-6">
            <div className="text-xs font-bold text-[#FF8A00] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              About RaccoonGuard
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              RaccoonGuard was designed as a showcase micro-product combining vector animation state machines, Web Audio API synthesis, Framer Motion physics, and dark luxury UI aesthetics.
            </p>
          </div>

          {/* Footer & Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Designed & Developed by <span className="text-white font-semibold">Abenezer Tegenu</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:abenezer.tegenu@example.com"
                className="px-3 py-2 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(255,138,0,0.3)]"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

