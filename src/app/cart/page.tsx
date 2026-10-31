'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    taxBreakdown,
    deliveryState,
    setDeliveryState,
    showToast,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'BRIAR10') {
      const disc = subtotal * 0.1;
      setDiscount(disc);
      showToast('Coupon BRIAR10 applied! 10% discount added.');
    } else if (couponCode.toUpperCase() === 'FIRSTHARVEST') {
      const disc = 50;
      setDiscount(disc);
      showToast('Coupon FIRSTHARVEST applied! ₹50 discount added.');
    } else {
      showToast('Invalid coupon code. Try BRIAR10 or FIRSTHARVEST');
    }
  };

  const finalTotal = Math.max(0, taxBreakdown.total - discount);

  return (
    <div className="bg-[#070b09] text-stone-200 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-2 text-center">
          Your Tea Basket
        </h1>
        <p className="text-stone-400 text-xs sm:text-sm text-center mb-12">
          Packed fresh to order at our own South Indian estate factories.
        </p>

        {cart.length === 0 ? (
          <div className="bg-stone-900/60 rounded-3xl p-12 text-center border border-stone-800 max-w-lg mx-auto">
            <ShoppingBag className="w-16 h-16 text-stone-600 mx-auto mb-4 stroke-1" />
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              Your basket is empty
            </h2>
            <p className="text-xs text-stone-400 mb-8">
              Explore our selection of rare single-origin harvests.
            </p>
            <Link
              href="/product-category"
              className="inline-block bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-full shadow-lg"
            >
              Explore Teas
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items List */}
            <div className="lg:col-span-8 bg-stone-900/40 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
              <div className="bg-emerald-950/40 border border-emerald-900/60 rounded-2xl p-4 text-xs text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-briar-gold shrink-0" />
                <span>
                  <strong>Free Doorstep Shipping</strong> is included on all orders across India.
                </span>
              </div>

              {/* Items Table */}
              <div className="divide-y divide-stone-800">
                {cart.map((item) => (
                  <div key={item.product.id} className="py-5 flex flex-col sm:flex-row items-center gap-5 justify-between">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-20 h-20 bg-stone-950 rounded-xl overflow-hidden shrink-0 border border-stone-800">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-serif text-base font-bold text-white hover:text-briar-gold"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-stone-400">
                          {item.selectedWeight || item.product.weight} • {item.product.region}
                        </p>
                        <p className="text-xs font-mono font-bold text-briar-gold mt-1">
                          ₹{item.product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone-800 rounded-lg bg-stone-950 text-xs">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-stone-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-semibold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-stone-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="font-serif text-base font-bold text-white w-24 text-right">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-stone-500 hover:text-rose-400 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-800 text-xs">
                <Link
                  href="/product-category"
                  className="text-briar-gold hover:underline"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-stone-500 hover:text-rose-400"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-4 bg-stone-900/60 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white border-b border-stone-800 pb-3">
                Order Summary
              </h3>

              {/* Delivery State selector for GST calculation */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Delivery Destination
                </label>
                <select
                  value={deliveryState}
                  onChange={(e) => setDeliveryState(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-briar-gold"
                >
                  <option value="Tamil Nadu">Tamil Nadu (Intra-state: CGST 2.5% + SGST 2.5%)</option>
                  <option value="Kerala">Kerala (Inter-state: IGST 5%)</option>
                  <option value="Karnataka">Karnataka (Inter-state: IGST 5%)</option>
                  <option value="Maharashtra">Maharashtra (Inter-state: IGST 5%)</option>
                  <option value="Delhi">Delhi (Inter-state: IGST 5%)</option>
                  <option value="Other">Other States (Inter-state: IGST 5%)</option>
                </select>
              </div>

              {/* Coupon Form */}
              <form onSubmit={applyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon (e.g. BRIAR10)"
                  className="flex-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-briar-gold uppercase"
                />
                <button
                  type="submit"
                  className="bg-stone-800 hover:bg-stone-700 text-white text-xs px-4 py-2 rounded-xl font-semibold"
                >
                  Apply
                </button>
              </form>

              <div className="space-y-3 text-xs text-stone-400 border-b border-stone-800 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal.toFixed(2)}</span>
                </div>
                {taxBreakdown.isInterstate ? (
                  <div className="flex justify-between">
                    <span>IGST (5% Interstate)</span>
                    <span className="font-mono text-stone-300">₹{taxBreakdown.teaIgst.toFixed(2)}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span>CGST (2.5%)</span>
                      <span className="font-mono text-stone-300">₹{taxBreakdown.teaCgst.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SGST (2.5%)</span>
                      <span className="font-mono text-stone-300">₹{taxBreakdown.teaSgst.toFixed(2)}</span>
                    </div>
                  </>
                )}
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Coupon Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-semibold">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="font-serif text-lg font-bold text-white">Total</span>
                <span className="font-serif text-2xl font-bold text-briar-gold">
                  ₹{finalTotal.toFixed(2)}
                </span>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-bold py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="space-y-1.5 text-[10px] text-stone-500 text-center pt-2">
                <p className="flex items-center justify-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Secure Checkout
                </p>
                <p>Shipped fresh from estate factories in Tamil Nadu & Kerala</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
