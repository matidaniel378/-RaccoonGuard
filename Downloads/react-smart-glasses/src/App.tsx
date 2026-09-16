/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WaitlistModal } from './components/WaitlistModal';
import { NAV_ITEMS, HERO_IMAGE_CONFIG } from './config/landingConfig';
import { ThemeMode } from './types';

export default function App() {
  // Theme state: allows switching between smooth light gradient aesthetic & moody deep charcoal
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 font-sans selection:bg-zinc-900 selection:text-white ${
        isDark
          ? 'bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,#162334_0%,#0d141e_50%,#09090b_95%)] bg-zinc-950 text-zinc-100'
          : 'bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,#d5e4f0_0%,#edf3f8_45%,#ffffff_95%)] bg-white text-zinc-900'
      }`}
    >
      {/* 1. FLOATING NAVIGATION BAR */}
      <Navbar
        navItems={NAV_ITEMS}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
      />

      {/* 2. HERO SECTION */}
      <main>
        <HeroSection
          theme={theme}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />

        {/* 3. PRODUCT SPECIFICATIONS & SECTIONS */}
        <FeaturesSection
          theme={theme}
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
        />
      </main>

      {/* 4. WAITLIST / EARLY ACCESS MODAL */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        theme={theme}
      />
    </div>
  );
}
