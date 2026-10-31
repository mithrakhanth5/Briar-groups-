'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, Truck, CheckCircle2, CreditCard, QrCode, Building, Wallet, ArrowLeft, Sparkles } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, subtotal, clearCart, taxBreakdown, deliveryState, setDeliveryState } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const finalTotal = taxBreakdown.total;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedId = 'BR-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div className="bg-[#070b09] min-h-screen py-16 px-4 text-stone-200">
        <div className="max-w-xl mx-auto bg-stone-900/90 rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs uppercase tracking-widest text-briar-gold font-bold">
            Order Dispatched Direct From Source
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-xs text-stone-400 mb-6">
            Order ID: <strong className="text-white font-mono">{orderId}</strong>
          </p>

          <div className="bg-stone-950 rounded-2xl p-6 text-left text-xs space-y-3 mb-6 border border-stone-800 font-light">
            <div className="flex justify-between">
              <span className="text-stone-400">Recipient:</span>
              <span className="font-semibold text-white">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Shipping Destination:</span>
              <span className="font-semibold text-white text-right">{formData.address}, {formData.city}, {deliveryState} - {formData.pincode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Payment Mode:</span>
              <span className="font-semibold text-white uppercase">{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Shipping:</span>
              <span className="font-semibold text-emerald-400">FREE</span>
            </div>
            <div className="flex justify-between border-t border-stone-800 pt-3">
              <span className="text-stone-400 font-bold">Total Paid:</span>
              <span className="font-bold text-briar-gold font-serif text-base">₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-xs text-stone-400 mb-8 leading-relaxed font-light">
            Your single-origin tea package is being prepared and vacuum-packed at our South Indian estate factory. Tracking details will be dispatched via email.
          </p>

          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-briar-gold to-amber-600 text-stone-950 text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-full shadow-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-[#070b09] min-h-screen py-20 px-4 text-center text-stone-200">
        <h2 className="font-serif text-2xl text-white mb-4">Your basket is currently empty</h2>
        <Link
          href="/product-category"
          className="bg-briar-gold text-stone-950 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Select Your Tea
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#070b09] text-stone-200 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/cart" className="text-xs text-stone-400 hover:text-briar-gold flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Basket
          </Link>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-8">
          Complete Your Order
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Delivery details & Payment */}
          <div className="lg:col-span-7 space-y-8">
            {/* Delivery Address */}
            <div className="bg-stone-900/60 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-4">
              <h2 className="font-serif text-xl font-bold text-white border-b border-stone-800 pb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-briar-gold" /> Delivery Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">Mobile Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-400 mb-1">Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="House/Flat number, building, street..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">State (GST Rule) *</label>
                  <select
                    value={deliveryState}
                    onChange={(e) => setDeliveryState(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-2 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  >
                    <option value="Tamil Nadu">Tamil Nadu (Intrastate)</option>
                    <option value="Kerala">Kerala (Interstate)</option>
                    <option value="Karnataka">Karnataka (Interstate)</option>
                    <option value="Maharashtra">Maharashtra (Interstate)</option>
                    <option value="Delhi">Delhi (Interstate)</option>
                    <option value="Other">Other State (Interstate)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-400 mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-briar-gold"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-stone-900/60 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-4">
              <h2 className="font-serif text-xl font-bold text-white border-b border-stone-800 pb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-briar-gold" /> Payment Method
              </h2>

              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-briar-gold bg-stone-950'
                      : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-briar-gold focus:ring-briar-gold"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">UPI (Instant QR & App)</span>
                      <span className="text-[11px] text-stone-400">Google Pay, PhonePe, Paytm, BHIM</span>
                    </div>
                  </div>
                  <QrCode className="w-5 h-5 text-stone-500" />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-briar-gold bg-stone-950'
                      : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="text-briar-gold focus:ring-briar-gold"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">Credit / Debit Cards</span>
                      <span className="text-[11px] text-stone-400">Visa, MasterCard, RuPay</span>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-stone-500" />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-briar-gold bg-stone-950'
                      : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-briar-gold focus:ring-briar-gold"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">Cash on Delivery (COD)</span>
                      <span className="text-[11px] text-stone-400">Pay cash upon delivery at your doorstep</span>
                    </div>
                  </div>
                  <Wallet className="w-5 h-5 text-stone-500" />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-stone-900/60 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6 h-fit sticky top-28">
            <h2 className="font-serif text-xl font-bold text-white border-b border-stone-800 pb-3">
              Order Breakdown ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h2>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-stone-950 rounded-lg overflow-hidden shrink-0 border border-stone-800">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.product.name}</h4>
                      <p className="text-stone-400">{item.selectedWeight || item.product.weight} × {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-mono text-stone-200">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 pt-4 border-t border-stone-800 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white">₹{subtotal.toFixed(2)}</span>
              </div>
              {taxBreakdown.isInterstate ? (
                <div className="flex justify-between">
                  <span>IGST (5% Interstate to {deliveryState})</span>
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
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-400">FREE</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-800 text-sm">
                <span className="font-bold text-white">Total Amount</span>
                <span className="font-serif text-2xl font-bold text-briar-gold">
                  ₹{finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-bold py-4 rounded-full text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? 'Processing Order...' : `Confirm Order • ₹${finalTotal.toFixed(2)}`}
            </button>

            <div className="text-[10px] text-stone-500 text-center space-y-1">
              <p className="flex items-center justify-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Single Origin Guarantee
              </p>
              <p>Direct from our estate tea factories to your cup.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
