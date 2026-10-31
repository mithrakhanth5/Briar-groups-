'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useCart();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-briar-cream/40 min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 fill-rose-500" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-2">
            My Saved Teas
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            Keep track of your favorite single origin flushes and specialty whole leaf teas.
          </p>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto shadow-sm">
            <p className="text-sm text-stone-600 mb-6">
              You haven&apos;t added any teas to your wishlist yet.
            </p>
            <Link
              href="/product-category"
              className="inline-flex items-center gap-2 bg-briar-green hover:bg-emerald-900 text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-full"
            >
              <span>Explore Teas</span>
              <ArrowRight className="w-4 h-4 text-briar-gold" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
