'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { estatesData } from '@/data/products';
import { MapPin, Mountain, ArrowRight } from 'lucide-react';

export default function EstateExplorer() {
  const [activeEstate, setActiveEstate] = useState(estatesData[0].id);
  const current = estatesData.find((e) => e.id === activeEstate) || estatesData[0];

  return (
    <section className="py-24 bg-[#040805] text-stone-200 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[450px] bg-emerald-950/20 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
            Transparent Provenance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mt-1 mb-3">
            Know Exactly Where Your{' '}
            <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent font-bold">
              SINGLE ORIGIN TEA
            </span>{' '}
            Comes From
          </h2>
          <div className="relative h-5 w-28 mx-auto mb-3 opacity-80">
            <Image
              src="/images/decor-2.png"
              alt="Decorative leaf ornament"
              fill
              className="object-contain filter brightness-125"
            />
          </div>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Click through our four southern mountain estates to discover the distinct microclimates, elevations, and soil compositions that define each signature harvest.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-3xl mx-auto">
          {estatesData.map((estate) => {
            const isSelected = estate.id === activeEstate;
            return (
              <button
                key={estate.id}
                onClick={() => setActiveEstate(estate.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-emerald-400'}`} />
                <span>{estate.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Panel */}
        <div className="max-w-5xl mx-auto bg-stone-900/40 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Estate Seal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-stone-950/80 p-4 border border-stone-800 flex items-center justify-center shadow-inner">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Estate Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full font-mono">
                  <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                  {current.elevation}
                </span>
                <span className="text-xs text-stone-400 font-medium">100% Own Estate Terroir</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                {current.name}
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {current.description}
              </p>

              <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-stone-500 uppercase tracking-widest block font-bold">
                    PRODUCED TEA
                  </span>
                  <span className="text-sm font-serif font-bold text-white">
                    {current.tea}
                  </span>
                </div>
                <Link
                  href={`/product/${current.slug}`}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-700/60 hover:border-briar-gold text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors shadow"
                >
                  <span>Taste This Tea</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
