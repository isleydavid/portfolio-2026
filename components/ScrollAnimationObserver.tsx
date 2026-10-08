"use client";

import { useEffect } from 'react';

export function ScrollAnimationObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Se tem stagger-children, animar filhos sequencialmente
          if (entry.target.classList.contains('stagger-children')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('is-visible');
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    // Observar todos os elementos com animações
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in-up, .stagger-children, .animate-text-reveal, .animate-scale-in, [class*="reveal"]'
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
