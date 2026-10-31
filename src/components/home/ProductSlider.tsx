'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProductSlider() {
  const [filter, setFilter] = useState<'all' | 'black' | 'specialty'>('all');

  const filteredProducts = products.filter((p) => {
    if (filter === 'black') return p.category === 'single-origin-black-tea';
    if (filter === 'specialty') return p.category === 'single-origin-whole-leaf-specialty-tea';
    return true;
  });

  return (
    <section className="py-24 bg-[#050b07] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-950/20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with floral ornament */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-briar-gold" />
            <span>Pure South Indian Mountain Terroir</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal mt-1 mb-3 leading-tight">
            The 6 Signature{' '}
            <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent font-bold">
              SINGLE ORIGIN TEAS
            </span>
          </h2>

          {/* Authentic Leaf Decor Divider */}
          <div className="relative h-5 w-32 mx-auto mb-4 opacity-80 filter brightness-125">
            <Image
              src="/images/decor-2.png"
              alt="Decorative leaf ornament"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            Directly harvested across our high-altitude tea gardens in Munnar, Valparai, Meghamalai, and Nilgiris. Packed fresh at source with complimentary doorstep delivery.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              All Harvests ({products.length})
            </button>
            <button
              onClick={() => setFilter('black')}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2 rounded-full transition-all ${
                filter === 'black'
                  ? 'bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              Single Origin Black Tea (4)
            </button>
            <button
              onClick={() => setFilter('specialty')}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2 rounded-full transition-all ${
                filter === 'specialty'
                  ? 'bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              Whole Leaf Specialty (2)
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/product-category"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-700/60 hover:border-briar-gold text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Explore The Complete Terroir Collection</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
