import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, CheckCircle, AlertTriangle, ShieldAlert, RotateCcw, Send } from 'lucide-react';
import { RaccoonState } from './RaccoonCharacter';

export function ControlsBar({
  raccoonState,
  onFillValid,
  onFillInvalid,
  onTriggerLockout,
  onReset,
  isMuted,
  onToggleMute,
  resendTimer,
  onResendCode
}) {
  return (
    <div className="w-full mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
      {/* Label */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span className="font-semibold uppercase tracking-wider text-slate-400">
          Interactive Portfolio Controls
        </span>
        <button
          onClick={onToggleMute}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
              <span>SFX Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span className="text-[#FF8A00]">SFX On</span>
            </>
          )}
        </button>
      </div>

      {/* Preset Action Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={onFillValid}
          disabled={raccoonState === RaccoonState.LOCKOUT}
          className="px-3 py-2 rounded-xl bg-[#00D26A]/10 hover:bg-[#00D26A]/20 border border-[#00D26A]/30 text-[#00D26A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <CheckCircle className="w-3.5 h-3.5" />
          Pass (123456)
        </button>

        <button
          onClick={onFillInvalid}
          disabled={raccoonState === RaccoonState.LOCKOUT}
          className="px-3 py-2 rounded-xl bg-[#FF4D4D]/10 hover:bg-[#FF4D4D]/20 border border-[#FF4D4D]/30 text-[#FF4D4D] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Fail (999999)
        </button>

        <button
          onClick={onTriggerLockout}
          className="px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          Test Lockout
        </button>

        <button
          onClick={onReset}
          className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Form
        </button>
      </div>

      {/* Resend OTP Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
        <span>Didn't receive the code?</span>
        <button
          onClick={onResendCode}
          disabled={resendTimer > 0 || raccoonState === RaccoonState.LOCKOUT}
          className="text-[#FF8A00] font-semibold hover:underline flex items-center gap-1.5 disabled:text-slate-500 disabled:no-underline disabled:cursor-not-allowed cursor-pointer"
        >
          <Send className="w-3 h-3" />
          {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend Code'}
        </button>
      </div>
    </div>
  );
}
