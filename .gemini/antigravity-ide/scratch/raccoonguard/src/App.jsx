import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { RaccoonCharacter, RaccoonState } from './components/RaccoonCharacter';
import { OtpInput } from './components/OtpInput';
import { ControlsBar } from './components/ControlsBar';
import { SuccessView } from './components/SuccessView';
import { DeveloperModal } from './components/DeveloperModal';
import { soundEngine } from './utils/audioSynth';
import { Shield, KeyRound, AlertCircle, RefreshCcw } from 'lucide-react';

export default function App() {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [activeIdx, setActiveIdx] = useState(0);
  const [raccoonState, setRaccoonState] = useState(RaccoonState.IDLE);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [isMuted, setIsMuted] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verifyProgress, setVerifyProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Enter the 6-digit code sent to your device.');

  // Resend Countdown Timer
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  // Update RaccoonState to typing when user interacts with digits
  useEffect(() => {
    if (raccoonState === RaccoonState.IDLE || raccoonState === RaccoonState.TYPING) {
      const hasContent = otpValues.some((val) => val !== '');
      if (hasContent) {
        setRaccoonState(RaccoonState.TYPING);
      } else {
        setRaccoonState(RaccoonState.IDLE);
      }
    }
  }, [otpValues]);

  // Handle digit audio feedback
  const handleDigitChange = (newValues) => {
    soundEngine.playKeyPress(activeIdx);
    setOtpValues(newValues);
  };

  // Process Code Submission & Verification
  const verifyCode = (codeToVerify) => {
    const code = codeToVerify || otpValues.join('');
    if (code.length < 6 || raccoonState === RaccoonState.VERIFYING) return;

    setRaccoonState(RaccoonState.VERIFYING);
    setStatusMessage('RaccoonGuard is inspecting security credentials...');
    setVerifyProgress(0);

    // Animate loading progress bar alongside running raccoon
    let prog = 0;
    const progressInterval = setInterval(() => {
      prog += 10;
      setVerifyProgress(prog);
      soundEngine.playRunningFootstep();
      if (prog >= 100) clearInterval(progressInterval);
    }, 120);

    // Final outcome check after 1.3 seconds
    setTimeout(() => {
      clearInterval(progressInterval);

      if (code === '123456') {
        // Success Path!
        setRaccoonState(RaccoonState.SUCCESS);
        soundEngine.playSuccessChime();
        setStatusMessage('Authentication successful! Access granted.');
      } else {
        // Failed Path
        const remaining = attemptsLeft - 1;
        setAttemptsLeft(remaining);

        if (remaining <= 0) {
          setRaccoonState(RaccoonState.LOCKOUT);
          soundEngine.playLockoutSiren();
          setStatusMessage('SECURITY LOCKOUT: Too many incorrect attempts!');
        } else {
          setRaccoonState(RaccoonState.WRONG);
          soundEngine.playErrorBuzz();
          setStatusMessage(`Invalid code. ${remaining} ${remaining === 1 ? 'attempt' : 'attempts'} remaining.`);

          // Revert back to typing/idle after showing wrong expression
          setTimeout(() => {
            setRaccoonState(RaccoonState.IDLE);
            setOtpValues(['', '', '', '', '', '']);
            setActiveIdx(0);
          }, 1800);
        }
      }
    }, 1300);
  };

  // Preset Handlers
  const handleFillValid = () => {
    const validCode = ['1', '2', '3', '4', '5', '6'];
    setOtpValues(validCode);
    setActiveIdx(5);
    verifyCode('123456');
  };

  const handleFillInvalid = () => {
    const invalidCode = ['9', '9', '9', '9', '9', '9'];
    setOtpValues(invalidCode);
    setActiveIdx(5);
    verifyCode('999999');
  };

  const handleTriggerLockout = () => {
    setAttemptsLeft(0);
    setRaccoonState(RaccoonState.LOCKOUT);
    soundEngine.playLockoutSiren();
    setStatusMessage('SECURITY LOCKOUT: System in high-alert lockdown.');
  };

  const handleReset = () => {
    setOtpValues(['', '', '', '', '', '']);
    setActiveIdx(0);
    setRaccoonState(RaccoonState.IDLE);
    setAttemptsLeft(3);
    setStatusMessage('Enter the 6-digit code sent to your device.');
  };

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleResendCode = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    soundEngine.playKeyPress(0);
    setStatusMessage('A new verification code has been dispatched!');
  };

  let cardGlowClass = "glass-card-glow";
  if (raccoonState === RaccoonState.WRONG || raccoonState === RaccoonState.LOCKOUT) {
    cardGlowClass = "glass-card-error";
  } else if (raccoonState === RaccoonState.SUCCESS) {
    cardGlowClass = "glass-card-success";
  }

  return (
    <div className="min-h-screen relative bg-[#050505] text-white flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden">
      {/* Background Ambient Mesh Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF8A00]/15 via-amber-600/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">
        {/* Header Branding */}
        <Header onOpenPortfolio={() => setIsModalOpen(true)} />

        {/* Main Interface Card */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full glass-card ${cardGlowClass} rounded-3xl p-6 sm:p-8 flex flex-col items-center relative overflow-hidden transition-all duration-500`}

        >
          {/* Lockout Security Warning Banner */}
          {raccoonState === RaccoonState.LOCKOUT && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="w-full mb-4 p-3 rounded-2xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-semibold flex items-center justify-between gap-2 shadow-[0_0_20px_rgba(255,77,77,0.3)]"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Security Lockdown Active</span>
              </div>
              <button
                onClick={handleReset}
                className="px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-white font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCcw className="w-3 h-3" /> Unlock
              </button>
            </motion.div>
          )}

          {/* Success View vs Active OTP Form */}
          {raccoonState === RaccoonState.SUCCESS ? (
            <SuccessView
              onReset={handleReset}
              onOpenPortfolio={() => setIsModalOpen(true)}
            />
          ) : (
            <>
              {/* Interactive Raccoon Security Guard Character */}
              <RaccoonCharacter
                state={raccoonState}
                activeDigit={activeIdx}
                otpValue={otpValues.join('')}
              />

              {/* Running Golden Key Progress Bar during Verification */}
              {raccoonState === RaccoonState.VERIFYING && (
                <div className="w-full my-4">
                  <div className="flex items-center justify-between text-xs text-[#FF8A00] font-mono mb-1.5 font-semibold">
                    <span className="flex items-center gap-1">
                      <KeyRound className="w-3.5 h-3.5 animate-spin" />
                      Verifying Golden Key...
                    </span>
                    <span>{verifyProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF8A00] to-amber-300 shadow-[0_0_12px_rgba(255,138,0,0.8)]"
                      style={{ width: `${verifyProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Status Message Text */}
              <p
                className={`text-xs sm:text-sm text-center font-medium my-2 min-h-[20px] transition-colors ${
                  raccoonState === RaccoonState.WRONG || raccoonState === RaccoonState.LOCKOUT
                    ? 'text-red-400 font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {statusMessage}
              </p>

              {/* OTP Digits Input Boxes */}
              <OtpInput
                otpValues={otpValues}
                setOtpValues={handleDigitChange}
                activeIdx={activeIdx}
                setActiveIdx={setActiveIdx}
                isError={raccoonState === RaccoonState.WRONG || raccoonState === RaccoonState.LOCKOUT}
                isSuccess={raccoonState === RaccoonState.SUCCESS}
                disabled={raccoonState === RaccoonState.VERIFYING || raccoonState === RaccoonState.LOCKOUT}
                onComplete={verifyCode}
              />

              {/* Manual Verification Trigger Button */}
              <button
                onClick={() => verifyCode()}
                disabled={
                  otpValues.join('').length < 6 ||
                  raccoonState === RaccoonState.VERIFYING ||
                  raccoonState === RaccoonState.LOCKOUT
                }
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF8A00] to-amber-500 hover:from-[#FF8A00]/90 hover:to-amber-500/90 text-slate-950 font-bold text-sm shadow-[0_0_30px_rgba(255,138,0,0.35)] disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Verify Security Code
              </button>

              {/* Interactive Showcase Demo Controls */}
              <ControlsBar
                raccoonState={raccoonState}
                onFillValid={handleFillValid}
                onFillInvalid={handleFillInvalid}
                onTriggerLockout={handleTriggerLockout}
                onReset={handleReset}
                isMuted={isMuted}
                onToggleMute={handleToggleMute}
                resendTimer={resendTimer}
                onResendCode={handleResendCode}
              />
            </>
          )}
        </motion.main>
      </div>

      {/* Footer Branding */}
      <footer className="w-full py-4 text-center z-10">
        <p className="text-xs text-slate-500 font-light">
          Designed and Developed by{' '}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-slate-300 font-semibold hover:text-[#FF8A00] transition-colors underline decoration-dotted cursor-pointer"
          >
            Abenezer Tegenu
          </button>
        </p>
      </footer>

      {/* Developer Portfolio Showcase Modal */}
      <DeveloperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
