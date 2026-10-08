"use client";

import { useEffect, useRef } from 'react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

export function SoundWrapper({ children }: { children: React.ReactNode }) {
  const { hover, click, reveal } = useSoundEffects();
  const hasPlayedReveal = useRef(false);

  useEffect(() => {
    // Play reveal sound on mount (apenas uma vez)
    if (!hasPlayedReveal.current) {
      setTimeout(() => reveal(), 300);
      hasPlayedReveal.current = true;
    }

    // Add sound to all interactive elements
    const addHoverSound = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        el.addEventListener('mouseenter', hover);
      });
    };

    const addClickSound = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        el.addEventListener('click', click);
      });
    };

    // Aplicar sons aos elementos
    addHoverSound('a, button, .project-card, .skill-card, [role="button"]');
    addClickSound('a, button, [role="button"]');

    // Cleanup
    return () => {
      const removeHoverSound = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          el.removeEventListener('mouseenter', hover);
        });
      };

      const removeClickSound = (selector: string) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          el.removeEventListener('click', click);
        });
      };

      removeHoverSound('a, button, .project-card, .skill-card, [role="button"]');
      removeClickSound('a, button, [role="button"]');
    };
  }, [hover, click, reveal]);

  return <>{children}</>;
}
