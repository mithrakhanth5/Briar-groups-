'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion or already shown in this session
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sessionSeen = sessionStorage.getItem('briar_preloader_seen');

    if (reducedMotion || sessionSeen) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('briar_preloader_seen', 'true');
      }, 700);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#070b09] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fading
          ? 'opacity-0 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]'
          : 'opacity-100 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-emerald-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Drawing Leaf & Steam SVG */}
        <div className="w-20 h-20 mb-6 relative">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-briar-gold fill-none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Steam rising path */}
            <path
              d="M45,35 Q50,20 45,10 M55,38 Q60,22 55,12"
              className="opacity-70 animate-pulse stroke-emerald-400"
              strokeDasharray="40"
              strokeDashoffset="0"
            />
            {/* Elegant tea leaf outline */}
            <path
              d="M20,65 C20,35 50,25 78,22 C80,55 65,80 35,78 C25,78 20,72 20,65 Z"
              className="transition-all duration-1000"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: fading ? 0 : 0,
                animation: 'dash 1.4s ease-in-out infinite alternate',
              }}
            />
            {/* Leaf central vein */}
            <path
              d="M20,65 Q45,55 78,22"
              className="stroke-emerald-500/80"
              strokeDasharray="90"
            />
          </svg>
        </div>

        {/* Briar Logo */}
        <div className="relative h-12 w-44 mb-3">
          <Image
            src="/images/logo.png"
            alt="Briar Tea"
            fill
            priority
            className="object-contain filter brightness-110 drop-shadow-[0_2px_12px_rgba(16,185,129,0.3)]"
          />
        </div>

        {/* Subtle tagline */}
        <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400 font-light mt-1">
          Single Origin Heritage • Since 1928
        </p>

        {/* Loading hairline indicator */}
        <div className="w-32 h-[1.5px] bg-stone-800/80 rounded-full overflow-hidden mt-6">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-briar-gold to-emerald-400 w-full animate-[progress_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
