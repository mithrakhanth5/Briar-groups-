'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    taxBreakdown,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#0a0f0c] text-stone-100 shadow-2xl flex flex-col justify-between border-l border-stone-800">
          {/* Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-briar-gold" />
              <h3 className="font-serif text-lg font-semibold tracking-wide text-white">
                Your Tea Basket ({cart.reduce((sum, i) => sum + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-stone-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Notice Bar */}
          <div className="bg-emerald-950/40 p-3.5 border-b border-emerald-900/60 text-xs flex items-center gap-2 text-emerald-300">
            <Sparkles className="w-4 h-4 text-briar-gold shrink-0" />
            <span>
              <strong>Free Doorstep Shipping</strong> on all single origin orders across India.
            </span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-800">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-stone-600 mx-auto mb-3 stroke-1" />
                <h4 className="font-serif text-lg text-stone-300 mb-1">
                  Your tea basket is empty
                </h4>
                <p className="text-xs text-stone-500 mb-6">
                  Experience pure single origin harvests from our South Indian estates.
                </p>
                <Link
                  href="/product-category"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 text-xs uppercase tracking-wider font-bold px-6 py-2.5 rounded-full shadow-lg"
                >
                  Explore Teas
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-center">
                  <div className="relative w-16 h-16 bg-stone-900 rounded-lg overflow-hidden shrink-0 border border-stone-800">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-semibold text-white truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-[10px] text-stone-400">
                      {item.selectedWeight || item.product.weight} • {item.product.region}
                    </p>
                    <div className="text-xs font-mono font-bold text-briar-gold mt-1">
                      ₹{item.product.price.toFixed(2)}
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-stone-800 rounded bg-stone-900 text-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-stone-400 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-white font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-400 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-stone-500 hover:text-rose-400 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-mono font-semibold text-white">
                      ₹{(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-950 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Estimated GST (5% Tea)</span>
                <span className="font-mono text-stone-300">₹{taxBreakdown.teaGst.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-400">FREE</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-2 border-t border-stone-800">
                <span className="font-semibold text-white">Total</span>
                <span className="font-serif text-lg font-bold text-briar-gold">
                  ₹{taxBreakdown.total.toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="text-center py-2.5 rounded-full border border-stone-700 hover:bg-stone-800 text-stone-300 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="text-center py-2.5 rounded-full bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-[10px] text-stone-500 text-center flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>100% Own Estate Leaf • Packed to Order</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
