import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadlineProps {
  theme?: 'light' | 'dark';
}

export const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <h1
      id="hero-main-headline"
      className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] tracking-tight leading-[1.08] select-none"
    >
      {/* Line 1: Think Smarter. React Faster. */}
      <div className="flex flex-wrap items-baseline gap-x-3">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`font-light tracking-tight ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
        >
          Think Smarter.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={`font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}
        >
          React Faster.
        </motion.span>
      </div>

      {/* Line 2: Evolve Daily. with smooth vertical roll reveal as seen in video */}
      <div className="overflow-hidden mt-1 sm:mt-2 h-[1.25em] relative">
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: [50, 0, 0, 0, 50, 0],
            opacity: [0, 1, 1, 1, 0, 1],
          }}
          transition={{
            duration: 7,
            times: [0, 0.14, 0.8, 0.9, 0.96, 1],
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className={`block font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}
        >
          Evolve Daily.
        </motion.span>
      </div>
    </h1>
  );
};
