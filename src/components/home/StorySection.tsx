'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';

export default function StorySection() {
  const stats = [
    { value: '1928', label: 'Plantation Heritage', sub: '90+ Years Tradition' },
    { value: '23,000+', label: 'Acres of Tea Estates', sub: 'South Indian High Ranges' },
    { value: '8,800+', label: 'Artisanal Workforce', sub: 'Trained Pluckers & Craft' },
    { value: '15.5M', label: 'Kg Produced Annually', sub: 'Pure Single Origin' },
  ];

  return (
    <section className="py-24 bg-[#040906] relative overflow-hidden text-stone-200 border-t border-stone-800">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-emerald-950/20 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main 2-column feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <Image
                src="/images/hero-2.webp"
                alt="Briar Single Origin Plantation"
                fill
                className="object-cover filter saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-briar-gold font-bold">
                  Untouched Rainforest Terroir
                </span>
                <p className="font-serif text-xl sm:text-2xl mt-1 leading-snug">
                  “For over 90 years, the BRIAR Family has poured passion and dedication into one thing: tea.”
                </p>
              </div>
            </div>

            {/* Overlapping badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-br from-emerald-950 to-stone-900 text-white p-6 rounded-2xl shadow-2xl border border-emerald-600/50 max-w-[200px] text-center hidden sm:block backdrop-blur-md">
              <span className="block text-3xl font-serif font-bold text-briar-gold">100%</span>
              <span className="text-xs uppercase tracking-wider font-semibold block mt-1">
                Single Origin Provenance
              </span>
              <span className="text-[10px] text-emerald-300 block mt-1">Zero Blending</span>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">
              <Leaf className="w-3.5 h-3.5" />
              <span>BRIAR Tea with Integrity</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight font-normal">
              The Journey of Authentic{' '}
              <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent font-bold">
                SINGLE ORIGIN TEA
              </span>
            </h2>

            <p className="text-stone-300 leading-relaxed text-xs sm:text-sm font-light">
              The BRIAR Group’s single origin tea heritage dates back to 1928. Over generations, BRIAR has grown with a singular purpose: to provide an authentic, undiluted tea experience in every cup.
            </p>

            <p className="text-stone-300 leading-relaxed text-xs sm:text-sm font-light">
              Our tea estates extend across the most exclusive South Indian plantation districts—from the Kannan Devan Hills in Kerala to the Nilgiri-Wayanad, Meghamalai, and Anamalai ranges in Tamil Nadu. Spanning over 23,000 acres, our gardens nurture tea bushes in mist-laden valleys where crisp mountain air and mineral-rich springs impart unmistakable flavor signatures.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              <div className="flex items-start gap-3 bg-stone-900/40 p-3.5 rounded-xl border border-stone-800/80">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                    Zero Artificial Blends
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    100% pure estate leaves directly from our own factories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/40 p-3.5 rounded-xl border border-stone-800/80">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                    Purity Commitment
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Strict natural biological pest control stewardship.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 text-xs uppercase tracking-widest font-bold px-7 py-3.5 rounded-full transition-all shadow-xl hover:scale-105"
              >
                <span>Read The Full Heritage Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid Banner */}
        <div className="mt-20 bg-stone-900/50 backdrop-blur-md text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
            {stats.map((s, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <div className="font-serif text-3xl sm:text-5xl font-bold text-briar-gold font-mono">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white mt-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
