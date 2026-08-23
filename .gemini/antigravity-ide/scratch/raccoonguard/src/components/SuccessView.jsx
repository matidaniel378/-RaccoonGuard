import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, RefreshCw, Lock, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export function SuccessView({ onReset, onOpenPortfolio }) {
  useEffect(() => {
    // Launch celebratory confetti burst!
    const count = 200;
    const defaults = {
      origin: { y: 0.6 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FF8A00', '#00D26A', '#FFFFFF']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FFD700', '#00D26A']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#FF8A00', '#FFFFFF']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="flex flex-col items-center text-center p-6 sm:p-8"
    >
      {/* Animated Glowing Checkmark Icon */}
      <div className="relative mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-[#00D26A]/30 blur-2xl rounded-full"
        />
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#00D26A]/20 to-emerald-950/60 border border-[#00D26A]/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,210,106,0.3)]"
        >
          <CheckCircle2 className="w-14 h-14 text-[#00D26A]" />
        </motion.div>
      </div>

      {/* Main Message */}
      <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
        Access Granted
      </h2>

      {/* Subtexts */}
      <div className="space-y-1 mb-8">
        <p className="text-emerald-400 font-semibold flex items-center justify-center gap-1.5 text-sm">
          <ShieldCheck className="w-4 h-4" />
          Protected by RaccoonGuard
        </p>
        <p className="text-slate-400 text-xs font-light">
          Created by <span className="text-white font-medium">Abenezer Tegenu</span>
        </p>
      </div>

      {/* Security Status Chips */}
      <div className="w-full grid grid-cols-2 gap-3 mb-8 text-left text-xs">
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
          <Lock className="w-4 h-4 text-[#00D26A]" />
          <div>
            <div className="text-slate-400">Encryption</div>
            <div className="text-white font-mono font-semibold">256-Bit AES</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
          <Award className="w-4 h-4 text-[#FF8A00]" />
          <div>
            <div className="text-slate-400">Verification</div>
            <div className="text-white font-mono font-semibold">Instant Pass</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          Test Another Code
        </button>

        <button
          onClick={onOpenPortfolio}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-amber-500 hover:from-[#FF8A00]/90 hover:to-amber-500/90 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(255,138,0,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          View Developer Profile
        </button>
      </div>
    </motion.div>
  );
}
