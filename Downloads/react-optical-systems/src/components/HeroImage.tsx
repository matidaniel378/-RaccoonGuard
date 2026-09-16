import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
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
  const containerRef = useRef<HTMLDivElement>(null);

  const initialSrc = customImageSrc || HERO_IMAGE_CONFIG.src || '/images/smart-glasses-profile.jpg';
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);

  useEffect(() => {
    if (customImageSrc) {
      setImgSrc(customImageSrc);
    } else if (HERO_IMAGE_CONFIG.src) {
      setImgSrc(HERO_IMAGE_CONFIG.src);
    }
  }, [customImageSrc]);

  // Interactive 3D cursor-tracking parallax motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const flareX = useTransform(smoothX, [-0.5, 0.5], ['30%', '70%']);
  const flareY = useTransform(smoothY, [-0.5, 0.5], ['30%', '65%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      id="hero-image-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center lg:justify-end select-none perspective-[1200px]"
    >
      {/* 3D Motion wrapper responding to mouse parallax */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px]"
      >
        {/* Continuous organic breathing / lifelike floating motion */}
        <motion.div
          animate={{
            y: [-6, 5, -6],
            rotate: [-0.3, 0.3, -0.3],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`relative rounded-2xl overflow-hidden ${
            isDark ? 'border border-zinc-800/90 shadow-2xl bg-zinc-950' : ''
          }`}
        >
          {/* Subtle soft cyan glow matching the optical waveguide prism */}
          <motion.div
            style={{ left: flareX, top: flareY }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-sky-500/15"
          />

          {/* Main High-Fashion Portrait Image */}
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
            className="w-full h-auto object-cover object-center relative z-10 transition-transform duration-300"
          />

          {/* Gentle optical shimmer beam gliding across the lenses */}
          <motion.div
            animate={{
              x: ['-120%', '240%'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
            className="absolute top-[30%] left-0 w-36 h-28 pointer-events-none z-20 -rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md mix-blend-overlay"
          />


          {/* Bottom smooth fade to transparent/page background */}
          <div
            className={`absolute inset-x-0 bottom-0 h-20 sm:h-32 lg:h-44 pointer-events-none z-20 bg-gradient-to-t ${
              isDark
                ? 'from-zinc-950 via-zinc-950/80 to-transparent'
                : 'from-white via-white/85 to-transparent'
            }`}
          />

          {/* Left soft vignette blend */}
          <div
            className={`hidden lg:block absolute inset-y-0 left-0 w-24 pointer-events-none z-20 bg-gradient-to-r ${
              isDark
                ? 'from-zinc-950/70 to-transparent'
                : 'from-white/60 to-transparent'
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
