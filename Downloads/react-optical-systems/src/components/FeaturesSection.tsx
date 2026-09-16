import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Eye,
  Cpu,
  Volume2,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Radio,
  ScanEye,
  Building2,
  FileText,
  BadgeCheck,
} from 'lucide-react';
import { ThemeMode } from '../types';

interface FeaturesSectionProps {
  theme: ThemeMode;
  onOpenWaitlist: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  theme,
  onOpenWaitlist,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'compliance' | 'procurement'>('specs');
  const isDark = theme === 'dark';

  // Commercial Feature Highlights
  const mainFeatures = [
    {
      id: 'optical-surfacing',
      icon: Eye,
      tag: 'Rx Lab Compatible',
      title: 'Ophthalmic Surfacing Integration',
      description:
        'Engineered to interface with standard optical surfacing machinery. Supports custom single-vision, progressive, and photochromic prescription lenses from -8.00D to +4.00D.',
      stat: '-8.00 to +4.00D',
      statLabel: 'Prescription range',
    },
    {
      id: 'hardware-enclave',
      icon: Shield,
      tag: 'Air-Gapped Enclave',
      title: 'Enterprise Data Confidentiality',
      description:
        'Local cryptographic chip enclave handles voice, vision, and contextual telemetry entirely on-chassis. Compliant with HIPAA, SOC2 Type II, and corporate non-disclosure protocols.',
      stat: '100% On-Device',
      statLabel: 'Zero unauthorized cloud sync',
    },
    {
      id: 'fleet-mdm',
      icon: Cpu,
      tag: 'Enterprise Fleet MDM',
      title: 'Centralized MDM Provisioning',
      description:
        'Seamlessly enroll and configure device fleets using Microsoft Intune, VMware Workspace ONE, and Jamf. Manage firmware lifecycles and role-based device policies over-the-air.',
      stat: '< 60 Sec',
      statLabel: 'Zero-touch fleet enrollment',
    },
    {
      id: 'beam-audio',
      icon: Volume2,
      tag: 'Acoustic Discretion',
      title: 'Directional Acoustic Isolation',
      description:
        'Temporal bone-conduction transducers with active reverse-phase acoustic cancellation ensure confidential communications stay private, even in crowded open-plan offices.',
      stat: '< 1 dB',
      statLabel: 'External acoustic leakage',
    },
  ];

  // Technical & Industrial Specifications
  const hardwareSpecs = [
    {
      label: 'Chassis & Material',
      value: '38g Precision Aerospace Titanium Alloy',
      detail: 'Even 50/50 balance across nose bridge and mastoid temples for fatigue-free 16-hour corporate wear.',
    },
    {
      label: 'Optical Engine',
      value: 'Micro-OLED Waveguide · 1080p Glance Field',
      detail: '3,500 nits daylight peak luminance with certified high ophthalmic light transmittance.',
    },
    {
      label: 'Prescription Compatibility',
      value: 'Standard Lab Surfacing & Magnetic Clip-In',
      detail: 'Turnkey optical lab edging specs provided for Essilor, Zeiss, and independent optical laboratories.',
    },
    {
      label: 'Battery & Fleet Docking',
      value: '16-Hour Active Shift · Multi-Unit Docking Tray',
      detail: 'Magnetic fast charge: 80% capacity in 18 minutes. Commercial 10-bay charging trays available.',
    },
    {
      label: 'Acoustic Communications',
      value: 'Dual Bone Conduction & 3-MEMS Noise-Filtering Array',
      detail: 'Wind-attenuation mesh suppresses industrial floor background noise up to 85 dB.',
    },
    {
      label: 'Enterprise Connectivity',
      value: 'Wi-Fi 7 Enterprise (WPA3-Enterprise), BT 5.4 LE & UWB',
      detail: 'FIPS 140-3 cryptographic module with secure hardware root of trust.',
    },
  ];

  // Commercial Compliance Tiers
  const compliancePoints = [
    {
      title: 'ISO 13485 Optical Standard',
      desc: 'Manufactured under accredited medical and ophthalmic device quality management systems for clinical healthcare environments.',
      code: 'ISO 13485:2016 Certified',
    },
    {
      title: 'ANSI Z87.1 Impact Resistance',
      desc: 'Ballistic and high-velocity impact tested for logistics facilities, automated warehouses, and field engineering deployments.',
      code: 'ANSI/ISEA Z87.1-2020',
    },
    {
      title: 'TAA & NDAA Supply Chain Compliant',
      desc: 'All optical, silicon, and mechanical assemblies adhere to strict trade agreement standards for government and defense procurement.',
      code: 'TAA Compliant Sourcing',
    },
  ];

  // Commercial Procurement Tiers
  const procurementTiers = [
    {
      tier: 'Commercial Pilot Tier',
      volume: '10 – 50 Units',
      desc: 'Designed for optical retail evaluation, executive pilot groups, and enterprise departmental feasibility testing.',
      includes: ['Dedicated onboarding engineer', 'Sample prescription insert kits', 'Standard developer SDK access'],
    },
    {
      tier: 'Regional Fleet Rollout',
      volume: '50 – 500 Units',
      desc: 'For multi-store optical chains, clinical hospital systems, and regional field operations fleets.',
      includes: ['Volume procurement discount', 'Custom optical lab lens supply', 'MDM fleet deployment assistance', '2-year advanced hardware replacement'],
    },
    {
      tier: 'Enterprise Global Scale',
      volume: '500+ Units',
      desc: 'Full-scale enterprise optical deployments with custom corporate branding and dedicated supply chain SLAs.',
      includes: ['Custom frame engraving & co-branding', 'Tier-1 enterprise SLA & hot-swap buffer', 'Direct optical lab EDI integration', 'FIPS 140-3 custom security builds'],
    },
  ];

  return (
    <div className="w-full relative z-10">
      {/* FEATURES SECTION */}
      <section
        id="specifications"
        className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t transition-colors ${
          isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
        }`}
      >
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight uppercase mb-4 border"
            style={{
              backgroundColor: isDark ? 'rgba(24, 24, 27, 0.7)' : 'rgba(244, 244, 245, 0.9)',
              borderColor: isDark ? '#3f3f46' : '#e4e4e7',
              color: isDark ? '#38bdf8' : '#0284c7',
            }}
          >
            <BadgeCheck className="w-3.5 h-3.5" />
            <span>Commercial Eyewear Specifications</span>
          </motion.div>

          <motion.h2
            id="features-main-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]"
          >
            Precision engineering for commercial optical procurement.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Built from the ground up for commercial buyers who require certified ophthalmic optics, robust titanium durability, and institutional IT compliance.
          </motion.p>
        </div>

        {/* FEATURE GRID: 4 Commercial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 sm:mb-24">
          {mainFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-7 sm:p-9 border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-zinc-900/50 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-cyan-950/20'
                    : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isDark ? 'bg-zinc-800 text-cyan-400' : 'bg-zinc-100 text-zinc-900'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-mono font-medium tracking-wide px-3 py-1 rounded-full border ${
                      isDark
                        ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  {item.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {item.description}
                </p>

                {/* Micro Metric Footer */}
                <div
                  className={`pt-4 border-t flex items-baseline justify-between ${
                    isDark ? 'border-zinc-800' : 'border-zinc-100'
                  }`}
                >
                  <span className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {item.statLabel}
                  </span>
                  <span className="text-sm font-bold font-mono text-cyan-500">
                    {item.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DETAILED TABS: Specs / Compliance / Procurement */}
        <div
          id="procurement"
          className={`rounded-3xl border p-6 sm:p-10 lg:p-12 overflow-hidden transition-all ${
            isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}
        >
          {/* Sub-navigation tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Procurement Technical Dossier
              </h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Hardware tolerances, regulatory compliance standards, and commercial volume tiers.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1 sm:gap-1.5 p-1 rounded-2xl sm:rounded-full border bg-white/50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 self-start sm:self-center max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'specs'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'bg-zinc-900 text-white shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Hardware Specs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('compliance')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'compliance'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'bg-zinc-900 text-white shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Standards & Compliance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('procurement')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'procurement'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'bg-zinc-900 text-white shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Volume Tiers
              </button>
            </div>
          </div>

          {/* TAB 1: Hardware Specifications */}
          {activeTab === 'specs' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {hardwareSpecs.map((spec, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800/80' : 'bg-white border-zinc-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                      {spec.label}
                    </span>
                  </div>
                  <h4 className="text-base font-bold tracking-tight mb-1">
                    {spec.value}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {spec.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 2: Standards & Compliance */}
          {activeTab === 'compliance' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {compliancePoints.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
                  }`}
                >
                  <div className="text-xs font-mono font-semibold uppercase text-cyan-500 mb-2">
                    {item.code}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* TAB 3: Commercial Volume Tiers */}
          {activeTab === 'procurement' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {procurementTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between ${
                    isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-wider">
                        {tier.tier}
                      </span>
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {tier.volume}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {tier.desc}
                    </p>
                    <div className="space-y-2 border-t pt-4 border-zinc-200 dark:border-zinc-800">
                      {tier.includes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-cyan-400" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* B2B Procurement Action Banner */}
          <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-base">Evaluating for an optical chain or enterprise fleet?</p>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Commercial evaluation units and wholesale pricing agreements available for verified procurement officers.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenWaitlist}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-md ${
                isDark
                  ? 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-cyan-400/20'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-zinc-900/20'
              }`}
            >
              <span>Inquire for Commercial Procurement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CORPORATE FOOTER */}
      <footer
        id="landing-footer"
        className={`py-14 sm:py-16 px-4 sm:px-6 lg:px-12 border-t transition-colors ${
          isDark ? 'border-zinc-800/80 bg-zinc-950' : 'border-zinc-200/80 bg-zinc-50'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-zinc-800 text-cyan-400' : 'bg-zinc-900 text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold tracking-tight text-base">REACT OPTICAL SYSTEMS</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Commercial-grade smart eyewear designed for optical retail groups, corporate enterprise buyers, and industrial procurement.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                Commercial Programs
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#optical-engineering" className="hover:underline text-zinc-600 dark:text-zinc-300">Optical Engineering</a></li>
                <li><a href="#commercial-solutions" className="hover:underline text-zinc-600 dark:text-zinc-300">Retail & Wholesale Distribution</a></li>
                <li><a href="#specifications" className="hover:underline text-zinc-600 dark:text-zinc-300">Hardware Specifications</a></li>
                <li><a href="#procurement" className="hover:underline text-zinc-600 dark:text-zinc-300">Volume Tier Matrices</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                Compliance & Lab Integration
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Optical Surfacing Guide</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">ISO 13485 & CE Documentation</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">MDM Fleet Integration</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Enterprise Security Enclave</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                Procurement Operations
              </h5>
              <div
                className={`p-3 rounded-xl border text-xs ${
                  isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
                    Procurement Portal Active
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Tier-1 Supply Allocation · Q3/Q4 Production Open
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <div>
              © 2026 REACT Optical Systems Inc. Commercial Eyewear & Enterprise Optical Procurement.
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href="#" className="hover:underline">Commercial Privacy Policy</a>
              <a href="#" className="hover:underline">Master Supply Terms</a>
              <a href="#" className="hover:underline">Optical Warranty Agreement</a>
              <a href="#" className="hover:underline">TAA Statement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
