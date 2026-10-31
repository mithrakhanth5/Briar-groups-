'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { X, ShoppingBag, Trash2, Layers, AlertCircle, ArrowRight } from 'lucide-react';

export default function CompareDrawer() {
  const { compareList, toggleCompare, isCompareOpen, setIsCompareOpen, addToCart } = useCart();

  if (!isCompareOpen) return null;

  const comparedProducts = products.filter((p) => compareList.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsCompareOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-full max-w-4xl bg-[#0a0f0c] text-stone-200 shadow-2xl flex flex-col justify-between border-l border-stone-800">
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-briar-gold" />
              <h3 className="font-serif text-xl font-semibold text-white">
                Tea Comparison Matrix ({comparedProducts.length} of 4)
              </h3>
            </div>
            <button
              onClick={() => setIsCompareOpen(false)}
              className="p-1 text-stone-400 hover:text-white"
              aria-label="Close compare drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Matrix Body */}
          <div className="flex-1 overflow-x-auto overflow-y-auto p-6">
            {comparedProducts.length === 0 ? (
              <div className="py-20 text-center">
                <Layers className="w-12 h-12 text-stone-600 mx-auto mb-3 stroke-1" />
                <h4 className="font-serif text-lg text-stone-300 mb-1">
                  No teas selected for comparison
                </h4>
                <p className="text-xs text-stone-500 mb-6">
                  Select up to 4 teas to compare terroir, elevations, and flavor profiles side by side.
                </p>
                <Link
                  href="/product-category"
                  onClick={() => setIsCompareOpen(false)}
                  className="inline-block bg-briar-green hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-full"
                >
                  Browse Teas
                </Link>
              </div>
            ) : (
              <div className="min-w-[600px] space-y-6">
                {/* Product Headers */}
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-stone-800">
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="relative bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center flex flex-col items-center">
                      <button
                        onClick={() => toggleCompare(p.id)}
                        className="absolute top-2 right-2 text-stone-500 hover:text-rose-400 p-1"
                        aria-label="Remove from compare"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="relative w-20 h-20 mb-2">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h5 className="font-serif text-xs font-bold text-white line-clamp-1">
                        {p.name}
                      </h5>
                      <span className="text-xs font-mono font-bold text-briar-gold mt-1">
                        ₹{p.price.toFixed(2)}
                      </span>

                      <button
                        onClick={() => addToCart(p)}
                        className="mt-3 w-full bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-white text-[10px] uppercase font-bold py-1.5 rounded-lg flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3 text-briar-gold" />
                        <span>Add</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Comparison Rows */}
                <div className="space-y-4 text-xs">
                  {/* Origin Region (Verified) */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                      Origin Region (Verified)
                    </span>
                    <div className="grid grid-cols-4 gap-4 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                      {comparedProducts.map((p) => (
                        <div key={p.id} className="font-medium text-stone-300">
                          {p.region}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Elevation (Unverified TODO) */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        Harvest Elevation
                      </span>
                      <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">
                        TODO: Unverified
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                      {comparedProducts.map((p) => (
                        <div key={p.id} className="text-stone-300 font-mono">
                          {p.elevation.value}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leaf Grade (Unverified TODO) */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        Leaf Style & Grade
                      </span>
                      <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">
                        TODO: Unverified
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                      {comparedProducts.map((p) => (
                        <div key={p.id} className="text-stone-300">
                          {p.leafType.value}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Liquor Color (Unverified TODO) */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        Cup Liquor Hue
                      </span>
                      <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">
                        TODO: Unverified
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                      {comparedProducts.map((p) => (
                        <div key={p.id} className="text-stone-300">
                          {p.liquorColor.value}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Caffeine Strength (Unverified TODO) */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        Strength / Caffeine
                      </span>
                      <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">
                        TODO: Unverified
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                      {comparedProducts.map((p) => (
                        <div key={p.id} className="text-stone-300 font-semibold text-briar-gold">
                          {p.strength.value} ({p.caffeineStrength.value})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
