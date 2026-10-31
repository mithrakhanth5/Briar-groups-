'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Heart, ShoppingBag, Eye, Star, Truck, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, toggleCompare, isInCompare } = useCart();
  const wishlisted = isInWishlist(product.id);
  const compared = isInCompare(product.id);

  return (
    <div className="group relative bg-[#0c120e] rounded-2xl overflow-hidden border border-stone-800 hover:border-briar-gold/60 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between">
      {/* Top badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.bestseller && (
          <span className="bg-briar-gold text-stone-950 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow">
            Bestseller
          </span>
        )}
        <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
          <Truck className="w-3 h-3 text-emerald-400" /> Free Shipping
        </span>
      </div>

      {/* Action buttons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
            wishlisted
              ? 'bg-rose-950 text-rose-400 border border-rose-700'
              : 'bg-stone-900/90 text-stone-300 hover:text-rose-400 border border-stone-700'
          }`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-rose-500' : ''}`} />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleCompare(product.id);
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
            compared
              ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
              : 'bg-stone-900/90 text-stone-300 hover:text-emerald-300 border border-stone-700'
          }`}
          aria-label={compared ? 'Remove from compare' : 'Add to compare'}
        >
          <Layers className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setQuickViewProduct(product);
          }}
          className="w-8 h-8 bg-stone-900/90 text-stone-300 hover:text-briar-gold rounded-full flex items-center justify-center border border-stone-700 shadow-md transition-all"
          aria-label="Quick View"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Image Container */}
      <Link
        href={`/product/${product.slug}`}
        className="block relative w-full pt-[95%] bg-gradient-to-b from-stone-900/50 to-stone-950/80 overflow-hidden cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-105"
        />
      </Link>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{product.region}</span>
            <span className="text-stone-400 font-normal">{product.elevation.value}</span>
          </div>

          <Link href={`/product/${product.slug}`} className="block group-hover:text-briar-gold transition-colors">
            <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-stone-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-300">{product.rating}</span>
            <span className="text-xs text-stone-500">({product.reviewsCount})</span>
          </div>

          {/* Tasting notes pills */}
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tastingNotes.value.slice(0, 3).map((note) => (
              <span
                key={note}
                className="text-[10px] bg-stone-900 text-stone-400 border border-stone-800 px-2 py-0.5 rounded"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Add To Cart */}
        <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-stone-500 font-medium">{product.weight}</div>
            <div className="font-serif text-lg font-bold text-briar-gold font-mono">
              ₹{product.price.toFixed(2)}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-700/60 hover:border-briar-gold text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-briar-gold" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
