'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Leaf, Globe, Heart, Award, ArrowRight, Trees, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const pillars = [
    {
      icon: Leaf,
      title: 'Handpicked Tea',
      desc: 'Trained artisans hand-select tender two-leaves-and-a-bud flushes at peak morning freshness.',
    },
    {
      icon: Globe,
      title: 'Climate & Plastic Neutral',
      desc: 'Committed to regenerative agriculture, rainforest corridors, and 100% recyclable packaging.',
    },
    {
      icon: Award,
      title: 'Packaged Fresh at Source',
      desc: 'No auction middlemen or blending warehouses. Packed right inside our own estate factories.',
    },
    {
      icon: Heart,
      title: 'Shipped Direct to Doorstep',
      desc: 'Ensuring you receive single origin freshness within days of production rather than stale store shelves.',
    },
  ];

  return (
    <div className="bg-briar-cream/40 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
            Heritage Since 1928
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-briar-green font-normal mt-2 mb-4">
            The Ultimate Tea Experience
          </h1>
          <div className="relative h-6 w-36 mx-auto mb-6">
            <Image
              src="/images/decor-2.png"
              alt="Floral decoration"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            For over 90 years, the BRIAR family has poured our passion and dedication into one thing: cultivating the finest unblended single origin teas across the pristine high ranges of South India.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-briar-green flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Heritage Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
                Our Genesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold leading-tight">
                From High Mountains To Your Teacup
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                The BRIAR Group’s single origin tea heritage dates back to early 1928. Over the decades, BRIAR has grown with a single focus: to provide an authentic, undiluted experience in every cup.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Today, BRIAR is a leading name among tea plantations, engaged in the cultivation, processing, and direct marketing of single origin tea. Our estates extend across the most exclusive South Indian plantation districts: from the Kannan Devan Hills in Kerala to the Nilgiri-Wayanad, Meghamalai, and Anamalai ranges in Tamil Nadu.
              </p>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Spanning over 23,000 acres with a trained workforce of over 8,800 dedicated employees, BRIAR produces 15.5 million kg of tea annually, alongside forest-grown coffee, cardamom, and pepper.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-100">
                <Image
                  src="/images/hero-5.webp"
                  alt="Briar Tea Plantation Estates"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-xl italic">
                    “Undiluted mountain character in every harvest.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-[#194a33] to-[#0f2d1f] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-800">
            <span className="text-xs uppercase tracking-widest text-briar-gold font-bold">
              Our Purpose
            </span>
            <h3 className="font-serif text-3xl font-bold mt-2 mb-4">
              Mission
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              To produce and deliver the purest single-origin tea directly from our estate gardens to tea lovers worldwide, preserving individual estate character without artificial blending, while upholding the highest environmental and social standards for our workers.
            </p>
          </div>

          <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800">
            <span className="text-xs uppercase tracking-widest text-briar-gold font-bold">
              Looking Forward
            </span>
            <h3 className="font-serif text-3xl font-bold mt-2 mb-4">
              Vision
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              To be globally recognized as the benchmark for luxury Single Origin Tea, celebrated for authenticity, transparent garden provenance, biodiversity conservation, and timeless hospitality through our heritage tea bungalows.
            </p>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="text-center bg-white p-10 rounded-2xl border border-stone-200 shadow-md">
          <h3 className="font-serif text-2xl sm:text-3xl text-briar-green font-bold mb-3">
            Ready to Taste 90 Years of Single Origin Mastery?
          </h3>
          <p className="text-sm text-stone-600 mb-6 max-w-xl mx-auto">
            Order directly from our estate factories with free doorstep shipping across India.
          </p>
          <Link
            href="/product-category"
            className="inline-flex items-center gap-2 bg-briar-green hover:bg-emerald-900 text-white text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105"
          >
            <span>Explore All Teas</span>
            <ArrowRight className="w-4 h-4 text-briar-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
