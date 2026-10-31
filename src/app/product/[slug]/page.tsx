'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
  Thermometer,
  Clock,
  Coffee,
  Mountain,
  Share2,
  CheckCircle2,
  Layers,
  AlertCircle,
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const { addToCart, toggleWishlist, isInWishlist, showToast, toggleCompare, isInCompare } = useCart();
  const wishlisted = isInWishlist(product.id);
  const compared = isInCompare(product.id);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'tasting' | 'brewing' | 'estate'>('desc');
  const [selectedPack, setSelectedPack] = useState(product.weight);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPack);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedPack);
    router.push('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#070b09] text-stone-200 min-h-screen py-10 md:py-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mb-8">
        <nav className="text-xs text-stone-400 flex items-center gap-2 font-mono">
          <Link href="/" className="hover:text-briar-gold">
            Home
          </Link>
          <span>/</span>
          <Link href="/product-category" className="hover:text-briar-gold">
            Shop
          </Link>
          <span>/</span>
          <span className="text-white font-medium truncate">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Product Card */}
        <div className="bg-stone-900/40 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl mb-16 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Product Image Showcase */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-lg aspect-square bg-gradient-to-b from-stone-900 to-stone-950 rounded-2xl p-8 border border-stone-800 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-6 hover:scale-105 transition-transform duration-500 ease-out filter brightness-105"
                />
                <span className="absolute top-4 left-4 bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  100% Single Origin
                </span>
                <button
                  onClick={handleShare}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/90 text-stone-400 hover:text-white shadow-sm border border-stone-700"
                  aria-label="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Sub features bar */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-lg mt-4 text-xs">
                <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800 flex items-center gap-2.5">
                  <Mountain className="w-4 h-4 text-briar-gold shrink-0" />
                  <div>
                    <span className="text-[9px] text-stone-500 block uppercase tracking-wider">ELEVATION (UNVERIFIED)</span>
                    <span className="font-bold text-stone-200 font-mono">{product.elevation.value}</span>
                  </div>
                </div>
                <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[9px] text-stone-500 block uppercase tracking-wider">PROVENANCE REGION</span>
                    <span className="font-bold text-stone-200">{product.region}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Buying Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <span>{product.categoryName}</span>
                  <span className="text-stone-600">•</span>
                  <span className="text-stone-400 font-normal">{product.region}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-3">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-stone-300">{product.rating}</span>
                  <span className="text-xs text-stone-500">({product.reviewsCount} verified reviews)</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    Packed Fresh
                  </span>
                </div>

                {/* Price block */}
                <div className="flex items-baseline gap-4 py-4 border-y border-stone-800 mb-6">
                  <span className="font-serif text-4xl font-bold text-briar-gold font-mono">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    Free Doorstep Delivery Included
                  </span>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {product.description}
                </p>

                {/* Tasting notes chips with unverified flag */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      Tasting Profile
                    </span>
                    <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.2 rounded border border-amber-800">
                      TODO: Unverified Notes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.tastingNotes.value.map((note) => (
                      <span
                        key={note}
                        className="text-xs bg-stone-900 text-stone-300 border border-stone-800 px-3 py-1 rounded-full font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Weight selection */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                    Select Pack Size: <span className="text-briar-gold font-normal">{selectedPack}</span>
                  </span>
                  <div className="flex gap-3">
                    {[product.weight, '500g (Twin Pack)'].map((pkg) => (
                      <button
                        key={pkg}
                        type="button"
                        onClick={() => setSelectedPack(pkg)}
                        className={`text-xs px-4 py-2 rounded-xl font-semibold border transition-all ${
                          selectedPack === pkg
                            ? 'border-briar-gold bg-stone-950 text-briar-gold shadow-sm'
                            : 'border-stone-800 text-stone-400 hover:border-stone-700'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity, Cart & Buy Now Buttons */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Quantity */}
                  <div className="flex items-center border border-stone-800 rounded-xl bg-stone-950 text-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-3 text-stone-400 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-3 text-stone-400 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-briar-gold via-amber-500 to-briar-gold hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart • ₹{(product.price * quantity).toFixed(2)}</span>
                  </button>

                  {/* Compare */}
                  <button
                    onClick={() => toggleCompare(product.id)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      compared
                        ? 'bg-emerald-950 border-emerald-600 text-emerald-300'
                        : 'border-stone-800 text-stone-400 hover:text-emerald-300 hover:bg-stone-900'
                    }`}
                    aria-label={compared ? 'Remove from compare' : 'Add to compare'}
                  >
                    <Layers className="w-5 h-5" />
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      wishlisted
                        ? 'bg-rose-950 border-rose-800 text-rose-400'
                        : 'border-stone-800 text-stone-400 hover:text-rose-400 hover:bg-stone-900'
                    }`}
                    aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Direct Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.01]"
                >
                  Buy Now With 1-Click
                </button>

                <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Shipped fresh from factory
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Tabs: Description, Tasting, Brewing, Estate */}
        <div className="bg-stone-900/40 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl mb-16 backdrop-blur-md">
          {/* Tab Headers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 border-b border-stone-800 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('desc')}
              className={`font-serif text-base sm:text-xl font-bold pb-2 border-b-2 transition-colors ${
                activeTab === 'desc'
                  ? 'border-briar-gold text-briar-gold'
                  : 'border-transparent text-stone-500 hover:text-stone-300'
              }`}
            >
              Description & Origin
            </button>
            <button
              onClick={() => setActiveTab('brewing')}
              className={`font-serif text-base sm:text-xl font-bold pb-2 border-b-2 transition-colors ${
                activeTab === 'brewing'
                  ? 'border-briar-gold text-briar-gold'
                  : 'border-transparent text-stone-500 hover:text-stone-300'
              }`}
            >
              Brewing Ritual Guide
            </button>
            <button
              onClick={() => setActiveTab('tasting')}
              className={`font-serif text-base sm:text-xl font-bold pb-2 border-b-2 transition-colors ${
                activeTab === 'tasting'
                  ? 'border-briar-gold text-briar-gold'
                  : 'border-transparent text-stone-500 hover:text-stone-300'
              }`}
            >
              Tasting Profile & Terroir
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl text-stone-300">
            {activeTab === 'desc' && (
              <div className="space-y-4 leading-relaxed text-xs sm:text-sm font-light">
                <p>{product.description}</p>
                <div className="mt-6">
                  <h4 className="font-serif text-base font-bold text-white mb-3">
                    Key Harvest Distinctions:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-stone-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-briar-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'brewing' && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif text-xl text-white">
                    Connoisseur Steeping Guide
                  </h3>
                  <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">
                    TODO: Unverified Steeping Specs
                  </span>
                </div>
                <p className="text-xs text-stone-400 mb-8 font-light">
                  Follow our estate recommendations for optimal unblended flavor extraction.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 text-center">
                    <Thermometer className="w-6 h-6 text-briar-gold mx-auto mb-2" />
                    <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider block">WATER TEMP</span>
                    <span className="font-serif text-lg font-bold text-white">{product.brewingGuide.temp.value}</span>
                  </div>

                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 text-center">
                    <Clock className="w-6 h-6 text-briar-gold mx-auto mb-2" />
                    <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider block">STEEP TIME</span>
                    <span className="font-serif text-lg font-bold text-white">{product.brewingGuide.time.value}</span>
                  </div>

                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 text-center">
                    <Coffee className="w-6 h-6 text-briar-gold mx-auto mb-2" />
                    <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider block">LEAF AMOUNT</span>
                    <span className="font-serif text-lg font-bold text-white">{product.brewingGuide.amount.value}</span>
                  </div>

                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 text-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wider block">WATER RATIO</span>
                    <span className="font-serif text-lg font-bold text-white">{product.brewingGuide.cups.value}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasting' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-1">Aroma Profile</h4>
                  <p className="text-stone-300 text-xs sm:text-sm font-light">{product.aroma.value}</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2">Cup Strength & Body</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-briar-gold font-mono">{product.strength.value}</span>
                    <div className="w-48 bg-stone-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-briar-gold h-full"
                        style={{
                          width:
                            product.strength.value === 'Mellow'
                              ? '30%'
                              : product.strength.value === 'Medium'
                              ? '60%'
                              : product.strength.value === 'Strong'
                              ? '85%'
                              : '100%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Teas Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-briar-gold font-bold">
              Pair Your Harvest
            </span>
            <h2 className="font-serif text-3xl text-white font-normal mt-1">
              You May Also Savor
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
