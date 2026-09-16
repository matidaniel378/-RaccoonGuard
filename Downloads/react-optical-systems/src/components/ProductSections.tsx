import React from 'react';
import { motion } from 'motion/react';
import {
  Eye,
  Shield,
  Layers,
  Check,
  ArrowUpRight,
  Glasses,
  Building2,
  Stethoscope,
  Factory,
  Briefcase,
  Cpu,
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

  const engineeringPillars = [
    {
      id: 'pillar-1',
      badge: '01 / OPTICS',
      title: 'Prescription-Ready Micro-Waveguide',
      description:
        'Custom foveated micro-waveguide delivers 3,500 nits peak luminance with full optical transparency. Compatible with standard ophthalmic surfacing and prescription lab edging.',
      icon: Eye,
      tag: '1080p Waveguide',
    },
    {
      id: 'pillar-2',
      badge: '02 / ARCHITECTURE',
      title: 'Air-Gapped On-Device Processing',
      description:
        'A dedicated on-device neural coprocessor runs real-time ambient vision and translation models locally. Zero commercial data leaves the frame without encrypted authorization.',
      icon: Cpu,
      tag: 'Local Neural Enclave',
    },
    {
      id: 'pillar-3',
      badge: '03 / ERGONOMICS',
      title: '38g Aerospace Titanium Frame',
      description:
        'Precision-machined titanium chassis engineered for 16-hour continuous wear. Balanced 50/50 center of mass avoids nasal fatigue for active corporate and clinical workforces.',
      icon: Glasses,
      tag: 'Aerospace Grade',
    },
  ];

  const commercialSectors = [
    {
      id: 'sector-retail',
      title: 'Optical Retail & Eyewear Chains',
      desc: 'Turnkey wholesale distribution programs, branded in-store optical displays, and seamless prescription lab fulfillment for commercial optometry practices.',
      icon: Building2,
      metric: 'Turnkey Wholesale',
    },
    {
      id: 'sector-healthcare',
      title: 'Healthcare & Clinical Networks',
      desc: 'Hands-free patient vital telemetry, surgical heads-up schematics, and ISO 13485 cleanroom-compatible frames for modern medical institutions.',
      icon: Stethoscope,
      metric: 'Clinical Grade',
    },
    {
      id: 'sector-industry',
      title: 'Logistics & Field Engineering',
      desc: 'Real-time warehouse routing, hands-free component verification, and ANSI Z87.1 impact-tested frames for heavy industrial fleet deployments.',
      icon: Factory,
      metric: 'Ruggedized IP54',
    },
    {
      id: 'sector-enterprise',
      title: 'Corporate & Executive Fleets',
      desc: 'Enterprise MDM provisioning, secure executive teleprompts, and private meeting intelligence compliant with SOC2 and corporate IT security enclaves.',
      icon: Briefcase,
      metric: 'Enterprise MDM Ready',
    },
  ];

  return (
    <div className="w-full relative z-10">
      {/* SECTION: Optical Engineering */}
      <section
        id="optical-engineering"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span
            className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
              isDark
                ? 'bg-zinc-900/80 border-cyan-500/30 text-cyan-400'
                : 'bg-zinc-100 border-zinc-300 text-zinc-700'
            }`}
          >
            Optical Engineering
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Built to the standards of professional optical procurement.
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Engineered specifically for commercial eyewear buyers and enterprise distributors who require authentic ophthalmic quality, prescription versatility, and certified durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
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
                    {pillar.tag}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider text-cyan-500 mb-1">
                  {pillar.badge}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2.5">
                  {pillar.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Commercial Solutions & Procurement Programs */}
      <section
        id="commercial-solutions"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span
              className={`text-xs font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full border ${
                isDark
                  ? 'bg-zinc-900/80 border-cyan-500/30 text-cyan-400'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-700'
              }`}
            >
              Procurement & Distribution
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Turnkey deployment for commercial eyewear buyers.
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              REACT Optical Systems provides comprehensive B2B purchasing agreements, volume tier pricing, custom co-branding options, and direct integration with certified optical surfacing laboratories.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Wholesale volume tiers & tiered pricing matrices',
                'Prescription lab surfacing specs (-8.00D to +4.00D range)',
                'Enterprise MDM device provisioning (Intune, Jamf, AirWatch)',
                'ISO 13485 & CE optical compliance documentation',
                'Comprehensive 3-year commercial replacement warranty',
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
                <span>Request Commercial Catalog</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Commercial Target Sectors */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {commercialSectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
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
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isDark ? 'bg-zinc-800 text-cyan-400' : 'bg-zinc-100 text-zinc-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                        isDark
                          ? 'bg-zinc-800/60 border-zinc-700 text-zinc-300'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {sector.metric}
                    </span>
                  </div>
                  <h4 className="text-base font-bold tracking-tight mb-1.5">{sector.title}</h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {sector.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
