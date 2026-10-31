'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Factory, Mountain, Award, FlaskConical, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InfrastructurePage() {
  const plantations = [
    {
      name: 'Puthuthottam Estates',
      region: 'Anamalai Hills (Valparai, Tamil Nadu)',
      elevation: '3,000 – 5,000 ft',
      desc: 'Spread across mist-laden valleys in the Anaimalai mountain corridor, producing the biscuity, golden liquor of Malanad tea.',
    },
    {
      name: 'Talayar Estates',
      region: 'Munnar / Idukki, Kerala',
      elevation: '3,500 – 6,000 ft',
      desc: 'High-grown tea slopes nestled amidst the highest peaks of Munnar, renowned for balanced briskness and floral elegance.',
    },
    {
      name: 'Meghamalai Estates',
      region: 'Meghamalai (Theni, Tamil Nadu)',
      elevation: 'Up to 6,300 ft',
      desc: 'Exclusive cloud-mountain plantation where BRIAR is the sole producer, surrounded by virgin rainforests and crystal mountain lakes.',
    },
    {
      name: 'Sussex & Rockwood Estates',
      region: 'Nilgiris – Wayanad Range',
      elevation: '3,500 – 4,500 ft',
      desc: 'Our founding 1928 plantation district along the Noolpuzha river, home to our specialty whole-leaf processing units.',
    },
  ];

  const factories = [
    { name: 'Sussex Tea Factory', location: 'Nilgiri-Wayanad', specialty: 'Specialty Whole Leaf & Orthodox' },
    { name: 'Talliar Tea Factory', location: 'Munnar Hills', specialty: 'High-Grown CTC & Orthodox' },
    { name: 'Injipara Tea Factory', location: 'Valparai', specialty: 'Strong Biscuity Black Teas' },
    { name: 'Sirikundra Tea Factory', location: 'Anaimalai', specialty: 'Premium CTC Single Origin' },
    { name: 'Venniar Tea Factory', location: 'Meghamalai', specialty: 'High-Altitude Rare Flushes' },
    { name: 'Monica Tea Factory', location: 'Valparai', specialty: 'Sustainable Energy Powered' },
    { name: 'Sri Murugan Tea Factory', location: 'Tamil Nadu Ranges', specialty: 'ISO Certified Processing' },
  ];

  const certifications = [
    'ISO 22000 Food Safety Management',
    'HACCP Hazard Analysis Critical Control',
    'Rainforest Alliance Sustainable Agriculture',
    'Ethical Tea Partnership (ETP) Member',
    'FSSAI Certified Processing Standards',
    '100% Traceable Garden-to-Cup Provenance',
  ];

  return (
    <div className="bg-briar-cream/40 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
            23,000 Acres & 7 Modern Processing Plants
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-briar-green font-normal mt-2 mb-4">
            Plantation Infrastructure & Quality Control
          </h1>
          <div className="relative h-6 w-36 mx-auto mb-6">
            <Image
              src="/images/decor-2.png"
              alt="Floral decoration"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Since establishing our first garden in the 1920s, BRIAR has set industry benchmarks for agronomic consistency, precision withering, and hygienic food-grade manufacturing.
          </p>
        </div>

        {/* The 4 Plantations */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-stone-200 pb-4">
            <Mountain className="w-6 h-6 text-briar-green" />
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold">
              Our 4 Plantation Districts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plantations.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-briar-green">
                    {p.name}
                  </h3>
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                    {p.elevation}
                  </span>
                </div>
                <div className="text-xs font-semibold text-stone-500 mb-3">{p.region}</div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 7 Tea Factories */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-stone-200 pb-4">
            <Factory className="w-6 h-6 text-briar-green" />
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-bold">
              Our 7 State-of-the-Art Tea Factories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factories.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:border-briar-green transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-briar-green flex items-center justify-center mb-3">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {f.name}
                </h4>
                <div className="text-xs text-stone-500 mb-2">{f.location}</div>
                <div className="text-xs font-medium text-emerald-800 bg-emerald-50/80 px-2 py-1 rounded inline-block">
                  {f.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* R&D and Quality Control */}
        <div className="bg-gradient-to-r from-stone-900 to-briar-green-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl mb-20 border border-emerald-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-briar-gold font-bold">
                <FlaskConical className="w-4 h-4" />
                <span>R&D Laboratory</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Rigorous Testing & Micro-Batch Quality Assurance
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Every single harvest lot undergoes sensory cupping by licensed master tea tasters, assessing leaf appearance, infusion aroma, brightness of liquor, and liquor briskness.
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                Our in-house soil-and-water testing laboratories ensure complete pesticide-residue compliance and microbiological safety before any package leaves the plantation.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-briar-gold" />
                Certifications & Accreditations
              </h4>
              <ul className="space-y-3">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/product-category"
            className="inline-flex items-center gap-2 bg-briar-green hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105"
          >
            <span>Experience The Freshness In Your Cup</span>
            <ArrowRight className="w-4 h-4 text-briar-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
