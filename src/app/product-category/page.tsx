'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { SlidersHorizontal, Search } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name'>('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        if (category !== 'all' && p.category !== category) return false;
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          return (
            p.name.toLowerCase().includes(term) ||
            p.region.toLowerCase().includes(term) ||
            p.tastingNotes.value.some((n) => n.toLowerCase().includes(term))
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // featured
      });
  }, [category, sortBy, searchTerm]);

  return (
    <div className="bg-[#070b09] text-stone-200 min-h-screen py-10 md:py-16">
      {/* Page Title */}
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-briar-gold font-bold">
            100% Pure Southern Terroir
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal mt-1 mb-3">
            Shop Single Origin Teas
          </h1>
          <p className="text-xs sm:text-sm text-stone-400">
            Every leaf harvested from our 23,000-acre estates in Munnar, Valparai, Meghamalai, and Nilgiris. Packed fresh to order at our source factories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Controls Bar: Category tabs, Search, Sort */}
        <div className="bg-stone-900/60 p-4 sm:p-6 rounded-2xl border border-stone-800 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all ${
                  category === 'all'
                    ? 'bg-briar-gold text-stone-950 font-bold shadow'
                    : 'bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                All Teas ({products.length})
              </button>
              <button
                onClick={() => setCategory('single-origin-black-tea')}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all ${
                  category === 'single-origin-black-tea'
                    ? 'bg-briar-gold text-stone-950 font-bold shadow'
                    : 'bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                Single Origin Black (4)
              </button>
              <button
                onClick={() => setCategory('single-origin-whole-leaf-specialty-tea')}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all ${
                  category === 'single-origin-whole-leaf-specialty-tea'
                    ? 'bg-briar-gold text-stone-950 font-bold shadow'
                    : 'bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                Whole Leaf Specialty (2)
              </button>
            </div>

            {/* Sort & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by name, region..."
                  className="pl-9 pr-4 py-2 text-xs bg-stone-950 border border-stone-800 rounded-xl focus:outline-none focus:border-briar-gold w-full sm:w-52 text-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-stone-500 shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-300 focus:outline-none focus:border-briar-gold"
                >
                  <option value="featured">Featured / Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-400 mb-6 px-1">
          <span>
            Showing <strong>{filtered.length}</strong> single origin teas
          </span>
          <span className="text-emerald-400 font-medium">
            ✓ Free Doorstep Shipping Included
          </span>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center bg-stone-900/60 rounded-2xl border border-stone-800 p-8">
            <h3 className="font-serif text-xl text-white mb-2">No teas match your criteria</h3>
            <p className="text-xs text-stone-400 mb-6">
              Try adjusting your category selection or clearing your search term.
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setSearchTerm('');
              }}
              className="bg-briar-gold text-stone-950 px-6 py-2 rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-stone-500">
          Loading Briar Teas...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
