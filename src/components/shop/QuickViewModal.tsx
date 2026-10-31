'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { X, Star, ShoppingBag, Heart, Truck, ArrowRight, Minus, Plus } from 'lucide-react';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const wishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-10">
        <div
          className="inline-block w-full max-w-3xl bg-[#0a0f0c] text-left align-middle shadow-2xl rounded-2xl overflow-hidden transition-all relative z-10 border border-stone-800 text-stone-200"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Preview */}
            <div className="relative bg-gradient-to-b from-stone-900 to-stone-950 p-8 flex items-center justify-center min-h-[340px]">
              <div className="relative w-full h-72">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="absolute bottom-4 left-4 text-[10px] bg-stone-900/90 border border-stone-700 text-stone-300 px-3 py-1 rounded-full shadow-sm">
                Single Origin • {quickViewProduct.region}
              </span>
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  {quickViewProduct.categoryName}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  {quickViewProduct.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(quickViewProduct.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-stone-300">{quickViewProduct.rating}</span>
                  <span className="text-xs text-stone-500">({quickViewProduct.reviewsCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="font-serif text-3xl font-bold text-briar-gold font-mono">
                    ₹{quickViewProduct.price.toFixed(2)}
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-medium px-2.5 py-0.5 rounded-full">
                    Free Shipping
                  </span>
                </div>

                <p className="text-xs text-stone-400 mt-3 line-clamp-3 leading-relaxed font-light">
                  {quickViewProduct.description}
                </p>

                {/* Quick specs */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                  <div>
                    <span className="text-stone-500 block text-[9px] uppercase tracking-wider">ELEVATION (UNVERIFIED)</span>
                    <span className="font-semibold text-stone-200 font-mono">{quickViewProduct.elevation.value}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[9px] uppercase tracking-wider">ESTATE REGION</span>
                    <span className="font-semibold text-stone-200">{quickViewProduct.region}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-stone-800 rounded-xl text-sm bg-stone-900">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-stone-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-semibold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-stone-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart • ₹{(quickViewProduct.price * quantity).toFixed(2)}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      wishlisted
                        ? 'bg-rose-950 border-rose-800 text-rose-400'
                        : 'border-stone-800 text-stone-400 hover:text-rose-400 hover:bg-stone-900'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href={`/product/${quickViewProduct.slug}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="text-briar-gold font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View full tasting details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-stone-500 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    Packed fresh at source
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
