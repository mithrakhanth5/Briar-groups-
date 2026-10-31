'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Search, X, Star } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.region.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tastingNotes.value.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20">
        <div
          className="inline-block w-full max-w-2xl bg-[#0c120e] text-left align-middle shadow-2xl rounded-2xl overflow-hidden transition-all relative z-10 border border-stone-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center gap-3 bg-stone-950">
            <Search className="w-5 h-5 text-briar-gold shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by tea, region (Malanad, Valparai, Munnar, Nilgiri)..."
              className="w-full bg-transparent text-white text-base md:text-lg placeholder-stone-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-stone-500 hover:text-stone-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-stone-500 hover:text-white rounded-full hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-3">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Malanad', 'Rockwood', 'Talayar', 'Megamalai', 'Whole Leaf', 'Valparai', 'Munnar'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="bg-stone-900 border border-stone-800 hover:border-briar-gold text-stone-300 text-xs px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-12 text-center text-stone-400">
                <p className="text-sm font-medium">No teas found for &quot;{query}&quot;</p>
                <p className="text-xs text-stone-600 mt-1">Try searching for &quot;Malanad&quot; or &quot;Nilgiri&quot;</p>
              </div>
            ) : (
              <div className="divide-y divide-stone-800/80">
                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-3">
                  Matching Teas ({filtered.length})
                </p>
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="py-3 flex items-center justify-between gap-4 hover:bg-stone-900/60 p-2 rounded-xl transition-colors"
                  >
                    <Link
                      href={`/product/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="relative w-12 h-12 bg-stone-950 rounded-lg overflow-hidden shrink-0 border border-stone-800">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="truncate">
                        <h4 className="text-xs font-semibold text-white hover:text-briar-gold truncate">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-stone-400">
                          {product.region}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-mono font-bold text-briar-gold">
                            ₹{product.price.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-amber-400 flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <button
                      onClick={() => {
                        addToCart(product);
                        setIsSearchOpen(false);
                      }}
                      className="shrink-0 bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-white text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
