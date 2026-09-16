import React from 'react';
import { motion } from 'motion/react';

interface MicroBadgesProps {
  theme?: 'light' | 'dark';
}

export const MicroBadges: React.FC<MicroBadgesProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div id="hero-micro-avatars" className="flex items-center select-none">
      {/* 2 Overlapping Compact Avatars as shown in video */}
      <div className="flex -space-x-2.5 overflow-hidden py-1">
        {/* Avatar 1: Real portrait of early user */}
        <motion.div
          whileHover={{ y: -2, scale: 1.05 }}
          className={`relative w-8 h-8 rounded-full border-2 shadow-xs overflow-hidden ${
            isDark ? 'border-zinc-950' : 'border-white'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
            alt="Pioneer user"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Avatar 2: Emerald neon circle badge */}
        <motion.div
          whileHover={{ y: -2, scale: 1.05 }}
          className={`relative w-8 h-8 rounded-full border-2 shadow-xs bg-zinc-950 flex items-center justify-center ${
            isDark ? 'border-zinc-950' : 'border-white'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
