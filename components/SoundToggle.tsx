"use client";

import { useState, useEffect } from 'react';

export function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Restore saved preference
    const saved = localStorage.getItem('soundEnabled');
    if (saved !== null) {
      setSoundEnabled(saved === 'true');
    }

    // Disable by default if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && saved === null) {
      setSoundEnabled(false);
    }
  }, []);

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('soundEnabled', String(newValue));

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('soundToggle', { detail: { enabled: newValue } }));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
      aria-label={soundEnabled ? 'Desativar sons' : 'Ativar sons'}
      title={soundEnabled ? 'Desativar sons' : 'Ativar sons'}
    >
      {soundEnabled ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
    </button>
  );
}
