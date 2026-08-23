import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function OtpInput({
  otpValues,
  setOtpValues,
  activeIdx,
  setActiveIdx,
  isError,
  isSuccess,
  disabled,
  onComplete
}) {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!disabled && inputRefs.current[activeIdx]) {
      inputRefs.current[activeIdx].focus();
    }
  }, [activeIdx, disabled]);

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    // Take only last entered digit if single char input
    const digit = val.slice(-1);
    const newOtp = [...otpValues];
    newOtp[idx] = digit;
    setOtpValues(newOtp);

    if (digit !== '') {
      if (idx < 5) {
        setActiveIdx(idx + 1);
      }
      // Check complete
      const fullString = newOtp.join('');
      if (fullString.length === 6 && onComplete) {
        onComplete(fullString);
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      if (otpValues[idx] === '') {
        if (idx > 0) {
          setActiveIdx(idx - 1);
          const newOtp = [...otpValues];
          newOtp[idx - 1] = '';
          setOtpValues(newOtp);
        }
      } else {
        const newOtp = [...otpValues];
        newOtp[idx] = '';
        setOtpValues(newOtp);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (idx > 0) setActiveIdx(idx - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (idx < 5) setActiveIdx(idx + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    if (disabled) return;

    const pastedData = e.clipboardData.getData('text/plain').trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split('');
    const newOtp = ['', '', '', '', '', ''];

    digits.forEach((d, i) => {
      newOtp[i] = d;
    });

    setOtpValues(newOtp);

    const nextIndex = Math.min(digits.length, 5);
    setActiveIdx(nextIndex);

    if (digits.length === 6 && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  return (
    <div className="w-full my-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {otpValues.map((val, idx) => {
          const isFocused = activeIdx === idx && !disabled;
          const hasValue = val !== '';

          let borderStyle = "border-white/10 group-hover:border-white/20";
          let glowStyle = "";

          if (isSuccess) {
            borderStyle = "border-[#00D26A] bg-[#00D26A]/10 text-[#00D26A]";
            glowStyle = "shadow-[0_0_15px_rgba(0,210,106,0.3)]";
          } else if (isError) {
            borderStyle = "border-[#FF4D4D] bg-[#FF4D4D]/10 text-[#FF4D4D]";
            glowStyle = "shadow-[0_0_15px_rgba(255,77,77,0.3)]";
          } else if (isFocused) {
            borderStyle = "border-[#FF8A00] bg-[#FF8A00]/10 text-[#FF8A00]";
            glowStyle = "shadow-[0_0_20px_rgba(255,138,0,0.35)]";
          } else if (hasValue) {
            borderStyle = "border-white/40 text-white bg-white/5";
          }

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: disabled ? 1 : 1.05 }}
              whileTap={{ scale: disabled ? 1 : 0.95 }}
              animate={isError ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <input
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                disabled={disabled}
                onFocus={() => setActiveIdx(idx)}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={handlePaste}
                className={`w-11 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-bold font-['JetBrains_Mono',monospace] rounded-xl outline-none transition-all duration-200 glass-input ${borderStyle} ${glowStyle} ${
                  disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                }`}
              />

              {/* Active Caret Glow Dot under input */}
              {isFocused && !hasValue && (
                <motion.div
                  layoutId="activeDot"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF8A00]"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
