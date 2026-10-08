"use client";

import { useEffect, useRef, useState } from 'react';

interface SoundEffects {
  hover: () => void;
  click: () => void;
  reveal: () => void;
  toggle: () => void;
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
}

export function useSoundEffects(): SoundEffects {
  const [isEnabled, setIsEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Check user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsEnabled(false);
    }

    // Initialize Web Audio API (better than HTML5 audio for short sounds)
    if (typeof window !== 'undefined' && window.AudioContext) {
      audioContextRef.current = new AudioContext();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playTone = (frequency: number, duration: number, volume: number = 0.1) => {
    if (!isEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    // Envelope: fade in/out suave
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  const hover = () => {
    // Som sutil de hover (440Hz = A4, muito sutil)
    playTone(440, 0.08, 0.05);
  };

  const click = () => {
    // Click mais percussivo (800Hz)
    playTone(800, 0.12, 0.08);
  };

  const reveal = () => {
    // Som de revelação (sweep up)
    if (!isEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(200, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  };

  const toggle = () => {
    // Som de toggle (duas notas rápidas)
    playTone(600, 0.08, 0.06);
    setTimeout(() => playTone(800, 0.08, 0.06), 80);
  };

  return {
    hover,
    click,
    reveal,
    toggle,
    isEnabled,
    setIsEnabled
  };
}
