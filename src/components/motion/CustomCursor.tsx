'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check for touch / fine pointer and reduced motion
    const hasTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('[data-interactive]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] top-0 left-0 transition-opacity duration-300"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer soft glowing ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 border-briar-gold/80 bg-briar-gold/15 backdrop-blur-[1px] scale-125'
            : 'w-7 h-7 border-emerald-400/50 bg-emerald-500/10'
        }`}
        style={{
          boxShadow: isHovered
            ? '0 0 20px var(--theme-accent-glow, rgba(197, 168, 128, 0.4))'
            : '0 0 10px rgba(16, 185, 129, 0.25)',
        }}
      >
        {/* Core center dot */}
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered ? 'w-1 h-1 bg-briar-gold' : 'w-1.5 h-1.5 bg-emerald-300'
          }`}
        />
      </div>
    </div>
  );
}
