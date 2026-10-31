'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TeaTypesSection() {
  return (
    <section className="py-24 bg-[#050b07] border-y border-stone-800 text-stone-200 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
            Curated For Every Palate
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1 mb-3">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent font-bold">
              SINGLE ORIGIN STYLE
            </span>
          </h2>
          <div className="relative h-5 w-28 mx-auto mb-3 opacity-80">
            <Image
              src="/images/decor-2.png"
              alt="Decorative ornament"
              fill
              className="object-contain filter brightness-125"
            />
          </div>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Explore the contrast between full-bodied single-estate black teas and delicate unbroken whole leaf specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Single Origin Black Tea */}
          <div className="group relative bg-[#09120c] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 border border-stone-800 hover:border-emerald-600/60 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
              <Image
                src="/images/hero-1.webp"
                alt="Single Origin Black Tea"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md">
                4 High-Altitude Estates
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] text-briar-gold font-semibold uppercase tracking-wider block">
                  Malanad • Talayar • Rockwood • Megamalai
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                  Single Origin Black Tea
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
                Bold, brisk, and aromatic mountain teas crafted from select flushes. From the biscuity malt of Valparai to the high-grown floral cup of Munnar, these teas define the historic legacy of South Indian tea.
              </p>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-briar-gold">₹325 • 250g Pouch</span>
                <Link
                  href="/product-category?category=single-origin-black-tea"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                >
                  <span>Explore Black Teas</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Whole Leaf Specialty */}
          <div className="group relative bg-[#09120c] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 border border-stone-800 hover:border-emerald-600/60 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
              <Image
                src="/images/hero-3.webp"
                alt="Single Origin Whole Leaf Specialty Tea"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-briar-gold" />
                Artisanal Craft
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] text-briar-gold font-semibold uppercase tracking-wider block">
                  Misty Black • Misty Green
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                  Whole Leaf Specialty Tea
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
                100% unbroken whole leaves hand-plucked at 4,000 feet in the Nilgiris. Carefully steam-pan finished to protect active polyphenols, soothing florals, and subtle sweetness with zero bitterness.
              </p>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-briar-gold">₹325 • 100g Pouch</span>
                <Link
                  href="/product-category?category=single-origin-whole-leaf-specialty-tea"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                >
                  <span>Explore Whole Leaf</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
