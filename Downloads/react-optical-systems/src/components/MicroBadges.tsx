import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface MicroBadgesProps {
  theme?: 'light' | 'dark';
}

export const MicroBadges: React.FC<MicroBadgesProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div id="hero-commercial-badge" className="flex items-center gap-2 select-none">
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium backdrop-blur-xs ${
          isDark
            ? 'bg-zinc-900/70 border-zinc-800 text-zinc-300'
            : 'bg-zinc-100/90 border-zinc-200 text-zinc-700'
        }`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
        <span className="text-[11px] tracking-tight">ISO 13485 Optical Standard · Tier-1 Supply</span>
      </div>
    </div>
  );
};
