import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, ArrowRight, Glasses, ShieldCheck } from 'lucide-react';
import { ThemeMode } from '../types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Product / Tech');

  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`relative w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl border backdrop-blur-2xl z-10 ${
              isDark
                ? 'bg-zinc-900/95 border-zinc-800 text-zinc-100 shadow-cyan-950/20'
                : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-900/15'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-1.5 rounded-full transition-colors cursor-pointer ${
                isDark ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <Glasses className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-cyan-500">
                    Priority Reservation
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  Be the first to experience REACT
                </h3>
                <p className={`text-sm mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Join 1,200+ pioneers testing the next frontier of cognitive computing and ambient intelligence.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="waitlist-email-input"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-500 dark:text-zinc-400"
                    >
                      Email address
                    </label>
                    <input
                      id="waitlist-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border transition-all outline-none ${
                        isDark
                          ? 'bg-zinc-800/80 border-zinc-700 text-zinc-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-500 dark:text-zinc-400">
                      Primary Use Case
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Product / Tech', 'Knowledge Worker', 'Researcher', 'Creative Pro'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setSelectedRole(role)}
                          className={`text-xs px-3 py-2 rounded-lg border text-left transition-all ${
                            selectedRole === role
                              ? isDark
                                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-semibold'
                                : 'bg-zinc-900 border-zinc-900 text-white font-semibold'
                              : isDark
                              ? 'bg-zinc-800/40 border-zinc-700 text-zinc-400 hover:border-zinc-600'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    id="waitlist-submit-button"
                    type="submit"
                    className={`w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer shadow-md ${
                      isDark
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-cyan-400/25'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-zinc-900/20'
                    }`}
                  >
                    <span>Claim Early Beta Invite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 mt-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>No spam. Instant hardware shipment notification.</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">You're on the list!</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  We reserved spot <span className="font-semibold text-cyan-400">#418</span> for{' '}
                  <span className="font-mono text-xs">{email}</span>.
                </p>
                <div
                  className={`p-3 rounded-xl border text-xs text-left mb-6 ${
                    isDark ? 'bg-zinc-800/60 border-zinc-700' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Next Batch Release:</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                    Wave 2 Developer Kits ship in Q4. You will receive an exclusive device configuration link in your inbox.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                  }`}
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
