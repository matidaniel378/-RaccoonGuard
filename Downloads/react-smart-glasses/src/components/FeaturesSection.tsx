import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Shield,
  Eye,
  Activity,
  Cpu,
  Volume2,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  BatteryCharging,
  Layers,
  Compass,
  Radio,
  ScanEye,
  Sliders,
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
  const [activeTab, setActiveTab] = useState<'specs' | 'privacy' | 'telemetry'>('specs');
  const isDark = theme === 'dark';

  // Primary feature highlights
  const mainFeatures = [
    {
      id: 'neural-engine',
      icon: Cpu,
      tag: '12ms Latency',
      title: 'Real-Time Neural Coprocessor',
      description:
        'A dedicated on-device NPU processes ambient context, spoken dialogue, and visual cues simultaneously without sending private data to cloud servers.',
      stat: '< 12ms',
      statLabel: 'Cognitive loop inference',
    },
    {
      id: 'optical-privacy',
      icon: Shield,
      tag: 'Zero Cloud Exposure',
      title: 'Total Hardware Privacy',
      description:
        'Engineered from the silicon up for confidential environments. Integrated physical LED indicator, encrypted local enclave, and zero unauthorized camera capture.',
      stat: '100%',
      statLabel: 'Offline local encryption',
    },
    {
      id: 'live-telemetry',
      icon: ScanEye,
      tag: 'Glance OS 2.4',
      title: 'Live Cognitive Telemetry',
      description:
        'High-speed infrared gaze trackers read micro-saccades and pupil dilation, presenting subtle HUD summaries only when your eyes deliberately glance to the perimeter.',
      stat: '1080p',
      statLabel: 'Foveated micro-waveguide',
    },
    {
      id: 'beam-audio',
      icon: Volume2,
      tag: 'Phase Cancellation',
      title: 'Directional Acoustic Beam',
      description:
        'Acoustic micro-transducers project binaural spatial sound directly into your temporal bone. Completely silent to anyone standing more than 6 inches away.',
      stat: '< 1 dB',
      statLabel: 'External acoustic leakage',
    },
  ];

  // Hardware Specifications
  const hardwareSpecs = [
    {
      label: 'Chassis & Weight',
      value: '38 grams aerospace titanium-magnesium alloy',
      detail: 'Even 50/50 weight distribution across nose bridge and ear stems for fatigue-free 16hr wear.',
    },
    {
      label: 'Optics & Display',
      value: 'Micro-OLED Waveguide · 1080p Glance Area',
      detail: 'Peak luminance of 3,500 nits ensures readability under direct midday sunlight.',
    },
    {
      label: 'Battery & Charging',
      value: '16-Hour Active Life · Magnetic Quick-Swap Case',
      detail: '80% charge in 18 minutes. Charging case provides up to 5 additional full cycles on the go.',
    },
    {
      label: 'Prescription Compatibility',
      value: 'Magnetic Clip-In Inserts (-8.00D to +4.00D)',
      detail: 'Tool-free swap system compatible with single vision, progressive, and anti-reflective lenses.',
    },
    {
      label: 'Audio & Microphones',
      value: 'Dual Bone-Conduction & 3-MEMS Beamforming Array',
      detail: 'Acoustic wind-deflection micro-mesh filters ambient noise up to 85 dB for crystal calls.',
    },
    {
      label: 'Connectivity & Storage',
      value: 'Wi-Fi 7, Bluetooth 5.4 Low Latency & 64GB Enclave',
      detail: 'Seamless ultra-wideband handshake with iOS, Android, macOS, and Linux workstations.',
    },
  ];

  // Live Telemetry indicators for the interactive demo box
  const telemetryMetrics = [
    { label: 'Gaze Focus Accuracy', val: '99.4%', status: 'Optimal' },
    { label: 'Neural Processing Delay', val: '11.8 ms', status: 'Sub-threshold' },
    { label: 'Ambient Light Compensation', val: '1,420 nits', status: 'Calibrated' },
    { label: 'Acoustic Leakage Attenuation', val: '-42 dB', status: 'Undetectable' },
  ];

  return (
    <div className="w-full relative z-10">
      {/* 2. FEATURES SECTION (FOLLOWS DIRECTLY BELOW HERO) */}
      <section
        id="how-it-works"
        className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t transition-colors ${
          isDark ? 'border-zinc-800/80' : 'border-zinc-200/80'
        }`}
      >
        {/* Section Header: EXACT HEADING REQUESTED */}
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cognitive Specifications</span>
          </motion.div>

          <motion.h2
            id="features-main-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]"
          >
            Second brain that works at the speed of thought.
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
            Engineered to remove the friction between human cognition and ambient computing. Zero bulky headsets, zero distracting popups—just instantaneous contextual awareness.
          </motion.p>
        </div>

        {/* FEATURE GRID: 4 Key Pillars */}
        <div id="solutions" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 sm:mb-24">
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

                {/* Micro Telemetry Metric Pill */}
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

        {/* DETAILED SPECIFICATIONS, PRIVACY & TELEMETRY SECTION */}
        <div
          id="use-cases"
          className={`rounded-3xl border p-6 sm:p-10 lg:p-12 overflow-hidden transition-all ${
            isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
          }`}
        >
          {/* Sub-navigation tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Architectural Breakdown
              </h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Hardware specifications, privacy safeguards, and real-time sensory telemetry.
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
                onClick={() => setActiveTab('privacy')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'privacy'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'bg-zinc-900 text-white shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Privacy Enclave
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'telemetry'
                    ? isDark
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'bg-zinc-900 text-white shadow-sm'
                    : isDark
                    ? 'text-zinc-400 hover:text-zinc-200'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Live Telemetry
              </button>
            </div>
          </div>

          {/* TAB 1: Hardware Specifications List */}
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

          {/* TAB 2: Privacy Safeguards */}
          {activeTab === 'privacy' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <Lock className="w-6 h-6 text-cyan-500 mb-3" />
                <h4 className="text-lg font-bold mb-2">Hardware-Gated Kill Switch</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  A micro-slider on the temple arm physically disconnects voltage to all sensors. Cannot be bypassed via software or firmware updates.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <Shield className="w-6 h-6 text-indigo-500 mb-3" />
                <h4 className="text-lg font-bold mb-2">Zero Cloud Pipeline</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Your conversation transcriptions, eye gaze coordinates, and telemetry never leave the on-glasses 64GB secure cryptographic enclave.
                </p>
              </div>

              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <Radio className="w-6 h-6 text-emerald-500 mb-3" />
                <h4 className="text-lg font-bold mb-2">Public Consent Beacon</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  A discrete external micro-luminary lights up in soft white whenever spatial transcription is actively running, respecting everyone in the room.
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Live Telemetry Display */}
          {activeTab === 'telemetry' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 space-y-4"
            >
              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-900 text-white border-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
                      LIVE SENSOR STREAM · 120Hz
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">STATUS: NOMINAL</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {telemetryMetrics.map((met, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-850 border border-zinc-800">
                      <div className="text-[11px] text-zinc-400 mb-1">{met.label}</div>
                      <div className="text-xl font-bold font-mono text-cyan-400">{met.val}</div>
                      <div className="text-[10px] text-zinc-500 mt-1 font-mono">{met.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Banner inside Specifications */}
          <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-base">Ready to test the next cognitive leap?</p>
              <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Limited Wave 2 Developer Kits ship with unlocked SDK access and 2-year warranty.
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
              <span>Join developer waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
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
                <span className="font-bold tracking-tight text-base">REACT</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Cognitive smart glasses designed to sharpen focus, augment recall, and accelerate decisions in real time.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                Product
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#how-it-works" className="hover:underline text-zinc-600 dark:text-zinc-300">How it works</a></li>
                <li><a href="#solutions" className="hover:underline text-zinc-600 dark:text-zinc-300">Solutions</a></li>
                <li><a href="#use-cases" className="hover:underline text-zinc-600 dark:text-zinc-300">Hardware Specifications</a></li>
                <li><a href="#use-cases" className="hover:underline text-zinc-600 dark:text-zinc-300">Privacy Architecture</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                Developers
              </h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Glance OS SDK</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Neural Coprocessor API</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Spatial Audio Kit</a></li>
                <li><a href="#" className="hover:underline text-zinc-600 dark:text-zinc-300">Developer Documentation</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider font-semibold mb-3 text-zinc-500 dark:text-zinc-400">
                System Status
              </h5>
              <div
                className={`p-3 rounded-xl border text-xs ${
                  isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
                    All Systems Operational
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  OS 2.4.1 Release Channel · Enclave Active
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <div>
              © 2026 REACT Systems Inc. Built for human cognitive augmentation.
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Security Whitepaper</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
