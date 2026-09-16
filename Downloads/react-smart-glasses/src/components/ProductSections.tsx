import React from 'react';
import { motion } from 'motion/react';
import {
  Eye,
  Zap,
  Brain,
  Shield,
  Layers,
  MessageSquare,
  Sparkles,
  Headphones,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { ThemeMode } from '../types';

interface ProductSectionsProps {
  theme: ThemeMode;
  onOpenWaitlist: () => void;
}

export const ProductSections: React.FC<ProductSectionsProps> = ({
  theme,
  onOpenWaitlist,
}) => {
  const isDark = theme === 'dark';

  const steps = [
    {
      id: 'step-1',
      badge: '01 / OPTICS',
      title: 'Glance Without Distraction',
      description:
        'Micro-OLED waveguide projects razor-sharp typography directly into your peripheral field of view. Disappears completely when looking forward.',
      icon: Eye,
      tag: '1080p Waveguide',
    },
    {
      id: 'step-2',
      badge: '02 / COGNITIVE ENGINE',
      title: '12ms Neural Prediction',
      description:
        'A dedicated on-device neural coprocessor analyzes conversational intent, highlights key decisions, and surfaces critical recall before you ask.',
      icon: Brain,
      tag: 'On-device AI',
    },
    {
      id: 'step-3',
      badge: '03 / PRIVATE ACOUSTICS',
      title: 'Beamformed Spatial Audio',
      description:
        'Dual-cavity acoustic phase cancellation beams high-fidelity audio into your temporal bones with undetectable external spill.',
      icon: Headphones,
      tag: '< 1dB Leakage',
    },
  ];

  const useCases = [
    {
      id: 'uc-1',
      title: 'Live Conversation Recall',
      desc: 'Never forget a client name, previous deal commitment, or meeting takeaway with automatic real-time subtle HUD prompts.',
      icon: MessageSquare,
    },
    {
      id: 'uc-2',
      title: 'Hands-Free Coding & Review',
      desc: 'Inspect CI/CD status, pull request summaries, and terminal deployment alerts while pacing or stepping away from screens.',
      icon: Zap,
    },
    {
      id: 'uc-3',
      title: 'Executive Telemetry',
      desc: 'Keep high-priority KPIs, schedule alerts, and urgent communications in view without repeatedly unlocking your phone.',
      icon: Layers,
    },
    {
      id: 'uc-4',
      title: 'Total Optical Privacy',
      desc: 'Zero cameras facing your peers without consent. Hardware privacy shutters and offline local execution guarantees total discretion.',
      icon: Shield,
    },
  ];

  return (
    <div className="w-full relative z-10">
      {/* SECTION: How it works */}
      <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span
            className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
              isDark
                ? 'bg-zinc-900/80 border-cyan-500/30 text-cyan-400'
                : 'bg-zinc-100 border-zinc-300 text-zinc-700'
            }`}
          >
            Architecture
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Engineered for unobtrusive cognitive flow.
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            We stripped away bulky headsets and heavy batteries to create lightweight everyday eyewear that amplifies natural human intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:shadow-cyan-950/20'
                    : 'bg-white/80 border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-zinc-800 text-cyan-400' : 'bg-zinc-100 text-zinc-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${
                      isDark ? 'bg-zinc-800/80 border-zinc-700 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider text-cyan-500 mb-1">
                  {step.badge}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2.5">
                  {step.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Solutions & Use cases */}
      <section id="solutions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span
              className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
                isDark
                  ? 'bg-zinc-900/80 border-cyan-500/30 text-cyan-400'
                : 'bg-zinc-100 border-zinc-300 text-zinc-700'
              }`}
            >
              Real World Capability
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              A second brain that works at the speed of thought.
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Traditional screens force you to break eye contact, slouch over phones, and wait for keyboards. REACT delivers intelligence at the precise millisecond you need it.
            </p>

            <div className="mt-8 space-y-3">
              {[
                '38-gram titanium magnesium aerodynamic chassis',
                'All-day battery life with magnetic quick-swap charging case',
                'Prescription lens inserts supported from -8.00 to +4.00',
                'Zero cloud dependence for critical on-device inferences',
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`mt-1 p-0.5 rounded-full ${
                      isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-md ${
                  isDark
                    ? 'bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-cyan-500/20'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                <span>Reserve Developer Unit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div id="use-cases" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/70 hover:border-zinc-700'
                      : 'bg-white/70 border-zinc-200/90 hover:bg-white hover:border-zinc-300 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-zinc-800 text-cyan-400' : 'bg-zinc-100 text-zinc-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold tracking-tight mb-1.5">{uc.title}</h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {uc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-4 border-t border-zinc-200/60 dark:border-zinc-800/60 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight">REACT</span>
          <span className="text-zinc-400">© 2026 REACT Systems Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-400">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Security Architecture</a>
        </div>
      </footer>
    </div>
  );
};
