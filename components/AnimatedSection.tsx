"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  stagger = false,
  delay = 0
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={ref}
      className={`
        ${className}
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        ${stagger ? 'stagger-children' : ''}
      `}
    >
      {children}
    </section>
  );
}
