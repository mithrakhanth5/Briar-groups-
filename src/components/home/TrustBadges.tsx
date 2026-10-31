'use client';

import React from 'react';
import { Truck, PackageCheck, ShieldCheck, Award, HeadphonesIcon, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Sparkles,
      title: '100% Single Origin',
      desc: 'Never blended • Pure estate leaves',
    },
    {
      icon: Truck,
      title: 'Free Doorstep Shipping',
      desc: 'Complimentary delivery across India',
    },
    {
      icon: PackageCheck,
      title: 'Handpacked at Source',
      desc: 'Vacuum packed at estate factories',
    },
    {
      icon: ShieldCheck,
      title: 'Heritage Since 1928',
      desc: '23,000 acres in southern ranges',
    },
    {
      icon: Award,
      title: 'Purity Guarantee',
      desc: 'Strict biological cultivation',
    },
  ];

  return (
    <section className="py-10 bg-[#060e09] border-y border-stone-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-emerald-950/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center p-3 rounded-2xl bg-stone-900/30 border border-stone-800/60 hover:border-emerald-600/50 transition-colors backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 flex items-center justify-center mb-2.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h4 className="text-[11px] uppercase font-bold tracking-wider text-stone-200 mb-0.5">
                  {b.title}
                </h4>
                <p className="text-[10px] text-stone-400 font-light">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
