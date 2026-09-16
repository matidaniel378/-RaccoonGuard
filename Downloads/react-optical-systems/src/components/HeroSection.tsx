import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedHeadline } from './AnimatedHeadline';
import { MicroBadges } from './MicroBadges';
import { HeroImage } from './HeroImage';
import { HERO_SUBHEADLINE, PILL_TAGS } from '../config/landingConfig';
import { ThemeMode } from '../types';

interface HeroSectionProps {
  theme: ThemeMode;
  onOpenWaitlist: () => void;
  customImageSrc?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onOpenWaitlist,
  customImageSrc,
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Fully responsive layout matching video on desktop, clean stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-center w-full z-10">
        
        {/* LEFT COLUMN: Hero content */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
          
          {/* Top pill tags: Professional Optical & Procurement tags */}
          <motion.div
            id="hero-top-pill-tags"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 lg:mb-8"
          >
            {PILL_TAGS.map((tag) => (
              <span
                key={tag.id}
                className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm shadow-xs ${
                  isDark
                    ? 'bg-zinc-900/70 border-zinc-800 text-zinc-300'
                    : 'bg-white/60 border-zinc-300/80 text-zinc-700'
                }`}
              >
                {tag.label}
              </span>
            ))}
          </motion.div>

          {/* Headline: "Precision Optics. Commercial Scale." */}
          <AnimatedHeadline theme={theme} />

          {/* CTA Button and Certification badge row */}
          <motion.div
            id="hero-cta-group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5"
          >
            {/* Primary CTA: "Request Commercial Quote ->" */}
            <button
              id="hero-start-free-btn"
              type="button"
              onClick={onOpenWaitlist}
              className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md ${
                isDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              <span>Request Commercial Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Certification & Standard Badge */}
            <MicroBadges theme={theme} />
          </motion.div>

          {/* Mobile-only Hero Image: Cleanly shown right under the CTA row on phones */}
          <div className="block lg:hidden my-6 sm:my-8 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] mx-auto">
            <HeroImage theme={theme} customImageSrc={customImageSrc} />
          </div>

          {/* Subheadline paragraph: Commercial and procurement positioning */}
          <motion.p
            id="hero-subheadline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className={`mt-2 sm:mt-4 lg:mt-24 xl:mt-28 text-xs sm:text-sm leading-relaxed max-w-[440px] ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {HERO_SUBHEADLINE}
          </motion.p>
        </div>

        {/* RIGHT COLUMN: Desktop side-profile portrait image */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 items-center justify-end">
          <HeroImage theme={theme} customImageSrc={customImageSrc} />
        </div>
      </div>
    </section>
  );
};
