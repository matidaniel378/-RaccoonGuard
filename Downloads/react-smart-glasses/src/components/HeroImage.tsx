import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE_CONFIG } from '../config/landingConfig';
import { ThemeMode } from '../types';

interface HeroImageProps {
  theme: ThemeMode;
  customImageSrc?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  theme,
  customImageSrc,
}) => {
  const isDark = theme === 'dark';

  const initialSrc = customImageSrc || HERO_IMAGE_CONFIG.src || '/images/smart-glasses-profile.jpg';
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  useEffect(() => {
    if (customImageSrc) {
      setImgSrc(customImageSrc);
    } else if (HERO_IMAGE_CONFIG.src) {
      setImgSrc(HERO_IMAGE_CONFIG.src);
    }
  }, [customImageSrc]);

  return (
    <div
      id="hero-image-container"
      className="relative w-full flex items-center justify-center lg:justify-end select-none pointer-events-none"
    >
      {/* Side-profile image with smooth bottom & side fade as seen in the video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[640px] xl:max-w-[680px]"
      >
        <img
          id="hero-glasses-portrait"
          src={imgSrc}
          alt={HERO_IMAGE_CONFIG.alt}
          onError={() => {
            if (imgSrc !== '/images/smart-glasses-profile.jpg') {
              setImgSrc('/images/smart-glasses-profile.jpg');
            }
          }}
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover object-center rounded-2xl lg:rounded-none"
        />

        {/* Bottom smooth fade to transparent/page background */}
        <div
          className={`absolute inset-x-0 bottom-0 h-16 sm:h-28 lg:h-44 pointer-events-none bg-gradient-to-t ${
            isDark
              ? 'from-zinc-950 via-zinc-950/80 to-transparent'
              : 'from-white via-white/85 to-transparent'
          }`}
        />

        {/* Left soft vignette blend */}
        <div
          className={`hidden lg:block absolute inset-y-0 left-0 w-20 pointer-events-none bg-gradient-to-r ${
            isDark
              ? 'from-zinc-950/60 to-transparent'
              : 'from-white/50 to-transparent'
          }`}
        />
      </motion.div>
    </div>
  );
};
