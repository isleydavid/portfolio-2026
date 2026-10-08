"use client";

import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1, rootMargin = '50px') {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add 'is-visible' class to trigger animations
          element.classList.add('is-visible');

          // If element has stagger-children class, trigger children animations
          if (element.classList.contains('stagger-children')) {
            const children = element.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('is-visible');
              }, index * 100);
            });
          }

          // Disconnect after animation triggers (optimization)
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
