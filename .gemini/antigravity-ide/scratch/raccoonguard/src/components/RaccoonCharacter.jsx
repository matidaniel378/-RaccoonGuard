import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RaccoonState = {
  IDLE: 'idle',
  TYPING: 'typing',
  VERIFYING: 'verifying',
  WRONG: 'wrong',
  LOCKOUT: 'lockout',
  SUCCESS: 'success'
};

export function RaccoonCharacter({ state = RaccoonState.IDLE, activeDigit = 0, otpValue = '' }) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  // Calculate eye pupil X offset based on active digit index (0 to 5)
  // digit 0: look left (-6px), digit 5: look right (+6px)
  const getPupilXOffset = () => {
    if (state === RaccoonState.TYPING) {
      return (activeDigit - 2.5) * 2.5; // range roughly -6.25 to +6.25
    }
    return 0;
  };

  const pupilX = getPupilXOffset();

  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center select-none">
      {/* Background Aura Glows depending on State */}
      <AnimatePresence mode="wait">
        {state === RaccoonState.WRONG && (
          <motion.div
            key="wrong-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute inset-0 bg-red-500/25 blur-3xl rounded-full pointer-events-none"
          />
        )}
        {state === RaccoonState.LOCKOUT && (
          <motion.div
            key="lockout-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="absolute -inset-4 bg-gradient-to-r from-red-600/40 via-red-500/20 to-red-600/40 blur-3xl rounded-full pointer-events-none"
          />
        )}
        {state === RaccoonState.SUCCESS && (
          <motion.div
            key="success-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.15, 1] }}
            exit={{ opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-full pointer-events-none"
          />
        )}
        {state === RaccoonState.IDLE && (
          <motion.div
            key="idle-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            className="absolute inset-2 bg-[#FF8A00]/20 blur-2xl rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Main Raccoon Vector Graphic Canvas */}
      <motion.div
        className="relative w-full h-full"
        animate={
          state === RaccoonState.SUCCESS
            ? { y: [0, -24, 0, -12, 0], rotate: [0, -4, 4, -2, 0] }
            : state === RaccoonState.WRONG
            ? { x: [0, -12, 12, -8, 8, -4, 4, 0], y: [0, 2, -2, 0] }
            : state === RaccoonState.LOCKOUT
            ? { x: [0, -16, 16, -12, 12, -6, 6, 0], scale: [1, 1.03, 0.98, 1] }
            : state === RaccoonState.VERIFYING
            ? { y: [0, -6, 0, -6, 0], x: [-5, 5, -5, 5] }
            : { y: [0, -3, 0] }
        }
        transition={
          state === RaccoonState.SUCCESS
            ? { duration: 0.8, ease: "easeOut" }
            : state === RaccoonState.WRONG
            ? { duration: 0.5 }
            : state === RaccoonState.LOCKOUT
            ? { duration: 0.6, repeat: Infinity, repeatType: "reverse" }
            : state === RaccoonState.VERIFYING
            ? { duration: 0.4, repeat: Infinity }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="furDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#373946" />
              <stop offset="100%" stopColor="#1E2029" />
            </linearGradient>
            <linearGradient id="furLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
            <linearGradient id="maskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#181920" />
              <stop offset="100%" stopColor="#0B0C10" />
            </linearGradient>
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="goldBadge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF8A00" />
            </linearGradient>
            <linearGradient id="sirenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="100%" stopColor="#990000" />
            </linearGradient>
          </defs>

          {/* --- TAIL --- */}
          <motion.g
            animate={
              state === RaccoonState.SUCCESS
                ? { rotate: [0, 25, -20, 15, 0] }
                : state === RaccoonState.LOCKOUT
                ? { rotate: [-10, 10, -10] }
                : { rotate: [0, 8, -4, 0] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "40px 180px" }}
          >
            <path
              d="M35 155 C10 160, 5 195, 30 210 C60 225, 75 195, 55 175 Z"
              fill="url(#furDark)"
            />
            {/* Tail Stripes */}
            <path d="M22 170 C15 175, 20 188, 32 185" stroke="#111217" strokeWidth="6" strokeLinecap="round" />
            <path d="M28 190 C22 196, 32 205, 45 200" stroke="#111217" strokeWidth="7" strokeLinecap="round" />
          </motion.g>

          {/* --- BODY --- */}
          <ellipse cx="120" cy="175" rx="52" ry="45" fill="url(#furDark)" />
          {/* Belly Patch */}
          <ellipse cx="120" cy="182" rx="32" ry="30" fill="url(#furLight)" opacity="0.9" />

          {/* --- SECURITY VEST / BADGE --- */}
          <path
            d="M95 155 Q120 165 145 155 L140 198 Q120 205 100 198 Z"
            fill="#0F172A"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
          {/* Vest Zipper */}
          <line x1="120" y1="160" x2="120" y2="198" stroke="#475569" strokeWidth="2" />
          
          {/* Gold Star Security Badge on Chest */}
          <g transform="translate(106, 168) scale(0.7)">
            <polygon
              points="12,0 15,8 24,9 17,15 19,24 12,19 5,24 7,15 0,9 9,8"
              fill="url(#goldBadge)"
              filter="drop-shadow(0px 2px 4px rgba(255,138,0,0.5))"
            />
          </g>

          {/* --- ARMS & HANDS --- */}
          {/* Left Arm */}
          <motion.g
            animate={
              state === RaccoonState.WRONG || state === RaccoonState.LOCKOUT
                ? { rotate: 45, x: 12, y: -5 } // Crossed arms
                : state === RaccoonState.SUCCESS
                ? { rotate: -60, y: -15 } // Raised hands
                : state === RaccoonState.TYPING
                ? { rotate: -15, x: -2 }
                : { rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ transformOrigin: "80px 150px" }}
          >
            <path d="M78 150 Q60 170 70 188 Q82 192 86 175 Z" fill="url(#furDark)" />
            {/* Paw */}
            <circle cx="70" cy="186" r="7" fill="#181920" />
          </motion.g>

          {/* Right Arm */}
          <motion.g
            animate={
              state === RaccoonState.WRONG || state === RaccoonState.LOCKOUT
                ? { rotate: -45, x: -12, y: -5 } // Crossed arms
                : state === RaccoonState.SUCCESS
                ? { rotate: 60, y: -15 } // Raised hands
                : state === RaccoonState.TYPING
                ? { rotate: 15, x: 2 }
                : { rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ transformOrigin: "160px 150px" }}
          >
            <path d="M162 150 Q180 170 170 188 Q158 192 154 175 Z" fill="url(#furDark)" />
            {/* Paw */}
            <circle cx="170" cy="186" r="7" fill="#181920" />
          </motion.g>

          {/* --- GOLDEN KEY CARRIER (VERIFYING / LOADING STATE) --- */}
          <AnimatePresence>
            {state === RaccoonState.VERIFYING && (
              <motion.g
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: [-3, 3, -3] }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, rotate: { repeat: Infinity, duration: 0.3 } }}
              >
                {/* Glowing Golden Key held in paws */}
                <g transform="translate(70, 160) scale(0.85)">
                  {/* Key Ring */}
                  <circle cx="20" cy="20" r="14" fill="none" stroke="url(#goldBadge)" strokeWidth="5" />
                  <circle cx="20" cy="20" r="6" fill="#050505" />
                  {/* Key Shaft */}
                  <rect x="32" y="16" width="60" height="8" rx="2" fill="url(#goldBadge)" />
                  {/* Key Teeth */}
                  <path d="M75 24 L75 35 L82 35 L82 24 L87 24 L87 35 L92 35 L92 24 Z" fill="url(#goldBadge)" />
                </g>
              </motion.g>
            )}
          </AnimatePresence>

          {/* --- EARS --- */}
          {/* Left Ear */}
          <motion.g
            animate={
              state === RaccoonState.TYPING
                ? { rotate: [-4, 2, -4] }
                : state === RaccoonState.LOCKOUT
                ? { rotate: -12 }
                : { rotate: 0 }
            }
            transition={{ duration: 0.4, repeat: state === RaccoonState.TYPING ? Infinity : 0 }}
            style={{ transformOrigin: "70px 75px" }}
          >
            <path d="M60 85 C45 45, 80 40, 88 75 Z" fill="url(#furDark)" />
            <path d="M66 82 C55 55, 76 52, 82 76 Z" fill="#F472B6" opacity="0.6" />
          </motion.g>

          {/* Right Ear */}
          <motion.g
            animate={
              state === RaccoonState.TYPING
                ? { rotate: [4, -2, 4] }
                : state === RaccoonState.LOCKOUT
                ? { rotate: 12 }
                : { rotate: 0 }
            }
            transition={{ duration: 0.4, repeat: state === RaccoonState.TYPING ? Infinity : 0 }}
            style={{ transformOrigin: "170px 75px" }}
          >
            <path d="M180 85 C195 45, 160 40, 152 75 Z" fill="url(#furDark)" />
            <path d="M174 82 C185 55, 164 52, 158 76 Z" fill="#F472B6" opacity="0.6" />
          </motion.g>

          {/* --- HEAD BASE --- */}
          <ellipse cx="120" cy="105" rx="56" ry="46" fill="url(#furDark)" />

          {/* --- MASK PATCH (RACCOON BANDIT EYES) --- */}
          <path
            d="M66 102 C60 85, 105 82, 120 95 C135 82, 180 85, 174 102 C180 120, 135 125, 120 110 C105 125, 60 120, 66 102 Z"
            fill="url(#maskGrad)"
          />

          {/* Cheek Fluffs */}
          <path d="M64 110 Q45 115 58 128 Q70 125 68 112 Z" fill="url(#furLight)" />
          <path d="M176 110 Q195 115 182 128 Q170 125 172 112 Z" fill="url(#furLight)" />

          {/* --- SNOUT & NOSE --- */}
          <ellipse cx="120" cy="116" rx="22" ry="16" fill="url(#furLight)" />
          {/* Black Nose */}
          <path d="M113 110 C113 106, 127 106, 127 110 C127 115, 120 118, 120 118 C120 118, 113 115, 113 110 Z" fill="#0B0C10" />
          <circle cx="117" cy="108" r="1.5" fill="#FFFFFF" opacity="0.6" />

          {/* --- MOUTH EXPRESSIONS --- */}
          <g>
            {state === RaccoonState.SUCCESS && (
              /* Big Happy Smile with Tongue */
              <g>
                <path d="M110 120 Q120 134 130 120 Z" fill="#DC2626" />
                <path d="M108 119 Q120 132 132 119" stroke="#0B0C10" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            )}

            {(state === RaccoonState.IDLE || state === RaccoonState.TYPING || state === RaccoonState.VERIFYING) && (
              /* Friendly Neutral Smile */
              <path d="M112 121 Q120 126 128 121" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            )}

            {state === RaccoonState.WRONG && (
              /* Suspicious Wavy / Smirk Line */
              <path d="M110 123 Q115 119 120 123 Q125 127 130 121" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            )}

            {state === RaccoonState.LOCKOUT && (
              /* Angry Clenched Teeth Grille */
              <g transform="translate(110, 120)">
                <rect x="0" y="0" width="20" height="8" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
                <line x1="5" y1="0" x2="5" y2="8" stroke="#000" strokeWidth="1" />
                <line x1="10" y1="0" x2="10" y2="8" stroke="#000" strokeWidth="1" />
                <line x1="15" y1="0" x2="15" y2="8" stroke="#000" strokeWidth="1" />
                <line x1="0" y1="4" x2="20" y2="4" stroke="#000" strokeWidth="1" />
              </g>
            )}
          </g>

          {/* --- EYEBROWS --- */}
          {/* Left Eyebrow */}
          <motion.path
            animate={
              state === RaccoonState.LOCKOUT
                ? { d: "M80 82 L102 91" } // Angry slant down
                : state === RaccoonState.WRONG
                ? { d: "M80 84 Q91 80 102 88" } // Suspicious raised outer
                : state === RaccoonState.SUCCESS
                ? { d: "M80 86 Q91 78 102 86" } // Curved happy
                : { d: "M82 86 Q91 84 100 86" } // Normal
            }
            transition={{ duration: 0.25 }}
            stroke="#0B0C10"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Eyebrow */}
          <motion.path
            animate={
              state === RaccoonState.LOCKOUT
                ? { d: "M160 82 L138 91" } // Angry slant down
                : state === RaccoonState.WRONG
                ? { d: "M138 88 Q149 80 160 84" } // Suspicious
                : state === RaccoonState.SUCCESS
                ? { d: "M138 86 Q149 78 160 86" } // Curved happy
                : { d: "M140 86 Q149 84 158 86" } // Normal
            }
            transition={{ duration: 0.25 }}
            stroke="#0B0C10"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* --- EYES & PUPILS --- */}
          {/* Left Eye Socket */}
          <ellipse cx="92" cy="100" rx="11" ry={isBlinking ? 1 : 12} fill="#FFFFFF" />
          {/* Left Pupil */}
          {!isBlinking && (
            <motion.circle
              cx="92"
              cy="100"
              r={state === RaccoonState.LOCKOUT ? 3.5 : 5.5}
              fill={state === RaccoonState.LOCKOUT ? "#FF4D4D" : "#0F172A"}
              animate={{
                cx: 92 + pupilX,
                cy: state === RaccoonState.TYPING ? 101 : 100
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {state !== RaccoonState.LOCKOUT && (
                <circle cx="90" cy="98" r="2" fill="#FFFFFF" />
              )}
            </motion.circle>
          )}

          {/* Right Eye Socket */}
          <ellipse cx="148" cy="100" rx="11" ry={isBlinking ? 1 : 12} fill="#FFFFFF" />
          {/* Right Pupil */}
          {!isBlinking && (
            <motion.circle
              cx="148"
              cy="100"
              r={state === RaccoonState.LOCKOUT ? 3.5 : 5.5}
              fill={state === RaccoonState.LOCKOUT ? "#FF4D4D" : "#0F172A"}
              animate={{
                cx: 148 + pupilX,
                cy: state === RaccoonState.TYPING ? 101 : 100
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {state !== RaccoonState.LOCKOUT && (
                <circle cx="146" cy="98" r="2" fill="#FFFFFF" />
              )}
            </motion.circle>
          )}

          {/* --- SECURITY GUARD VISOR CAP --- */}
          <g transform="translate(0, 5)">
            {/* Cap Peak Visor */}
            <path
              d="M62 70 Q120 54 178 70 Q184 76 170 78 Q120 68 70 78 Q56 76 62 70 Z"
              fill="#090A0F"
            />
            {/* Cap Crown */}
            <path
              d="M70 70 Q120 28 170 70 Q160 52 145 42 Q120 36 95 42 Q80 52 70 70 Z"
              fill="url(#capGrad)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
            />
            {/* Gold Cap Band */}
            <path d="M72 68 Q120 54 168 68" stroke="url(#goldBadge)" strokeWidth="3.5" fill="none" />

            {/* Gold Shield Badge on Cap */}
            <g transform="translate(110, 42) scale(0.85)">
              <path
                d="M12 0 L24 6 L24 16 C24 24 12 28 12 28 C12 28 0 24 0 16 L0 6 Z"
                fill="url(#goldBadge)"
                filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.5))"
              />
              <path d="M12 4 L18 8 L18 14 C18 19 12 22 12 22 C12 22 6 19 6 14 L6 8 Z" fill="#050505" opacity="0.3" />
            </g>

            {/* --- SECURITY SIREN LIGHT (LOCKOUT MODE) --- */}
            {state === RaccoonState.LOCKOUT && (
              <g transform="translate(111, 16)">
                {/* Flashing Red Beacon */}
                <motion.rect
                  x="0"
                  y="0"
                  width="18"
                  height="16"
                  rx="4"
                  fill="url(#sirenGrad)"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1.1, 0.95] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                />
                <rect x="3" y="16" width="12" height="4" rx="1" fill="#475569" />
                {/* Light Ray Beams */}
                <motion.path
                  d="M-10 -5 L5 2 L-10 10 M28 -5 L13 2 L28 10"
                  stroke="#FF4D4D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                />
              </g>
            )}
          </g>

          {/* --- THERMAL CAMERA OVERLAY EFFECT (LOCKOUT ONLY) --- */}
          {state === RaccoonState.LOCKOUT && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <line x1="40" y1="40" x2="200" y2="40" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="200" x2="200" y2="200" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="4 4" />
              <text x="45" y="55" fill="#FF4D4D" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ALERT: ACCESS DENIED
              </text>
            </motion.g>
          )}

          {/* --- CELEBRATION SPARKLES (SUCCESS ONLY) --- */}
          {state === RaccoonState.SUCCESS && (
            <g>
              <motion.path
                d="M40 50 L44 60 L54 64 L44 68 L40 78 L36 68 L26 64 L36 60 Z"
                fill="#FFD700"
                animate={{ scale: [0.5, 1.2, 0.8], rotate: [0, 90, 180], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              />
              <motion.path
                d="M190 60 L193 68 L201 71 L193 74 L190 82 L187 74 L179 71 L187 68 Z"
                fill="#00D26A"
                animate={{ scale: [0.6, 1.3, 0.7], rotate: [0, -90, -180], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
              />
            </g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
