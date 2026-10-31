'use client';

import React, { useEffect, useState } from 'react';

interface LeafParticle {
  id: number;
  left: number; // percentage 0-100
  top: number; // percentage
  size: number;
  duration: number; // seconds
  delay: number; // seconds
  rotate: number;
  opacity: number;
}

export default function FloatingTeaLeaves() {
  const [leaves, setLeaves] = useState<LeafParticle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(isReduced);

    if (isReduced) return;

    // Generate 14 gentle ambient floating tea leaves
    const initialLeaves: LeafParticle[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      top: Math.random() * 90,
      size: 18 + Math.random() * 22,
      duration: 12 + Math.random() * 16,
      delay: Math.random() * 8,
      rotate: Math.random() * 360,
      opacity: 0.25 + Math.random() * 0.45,
    }));

    setLeaves(initialLeaves);
  }, []);

  if (reducedMotion || leaves.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute transition-opacity duration-1000"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 1.5}px`,
            opacity: leaf.opacity,
            animation: `driftLeaf ${leaf.duration}s ease-in-out infinite alternate ${leaf.delay}s`,
            transform: `rotate(${leaf.rotate}deg)`,
          }}
        >
          {/* Detailed Botanical Green Tea Leaf SVG */}
          <svg
            viewBox="0 0 40 60"
            className="w-full h-full drop-shadow-[0_2px_8px_rgba(16,185,129,0.35)]"
          >
            <defs>
              <linearGradient id={`leafGrad-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
            </defs>
            {/* Curved organic leaf body */}
            <path
              d="M20,2 C32,16 38,34 32,54 C26,58 14,58 8,54 C2,34 8,16 20,2 Z"
              fill={`url(#leafGrad-${leaf.id})`}
            />
            {/* Center vein */}
            <path
              d="M20,2 Q21,28 20,56"
              stroke="#6ee7b7"
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            {/* Lateral veins */}
            <path
              d="M20,18 Q27,14 30,19 M20,28 Q28,24 31,30 M20,38 Q27,35 29,42 M20,18 Q13,14 10,19 M20,28 Q12,24 9,30 M20,38 Q13,35 11,42"
              stroke="#a7f3d0"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes driftLeaf {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.9);
          }
          50% {
            transform: translateY(-25px) translateX(15px) rotate(15deg) scale(1.05);
          }
          100% {
            transform: translateY(-50px) translateX(-15px) rotate(-10deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
