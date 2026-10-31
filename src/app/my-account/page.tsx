'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, MapPin, Heart, LogOut, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function MyAccountPage() {
  const { wishlist, setIsAuthModalOpen } = useCart();
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  return (
    <div className="bg-briar-cream/40 min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
              Customer Portal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mt-1">
              My Briar Account
            </h1>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="text-xs bg-white border border-stone-300 hover:border-briar-green px-4 py-2 rounded-lg font-semibold text-stone-700 hover:text-briar-green transition-colors"
          >
            Switch Account / Sign In
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="md:col-span-4 bg-white rounded-2xl p-4 border border-stone-200/90 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-3 transition-colors ${
                activeTab === 'orders'
                  ? 'bg-briar-green text-white'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Orders & Deliveries</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-3 transition-colors ${
                activeTab === 'profile'
                  ? 'bg-briar-green text-white'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Personal Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center gap-3 transition-colors ${
                activeTab === 'addresses'
                  ? 'bg-briar-green text-white'
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Saved Addresses</span>
            </button>

            <Link
              href="/wishlist"
              className="w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-between text-stone-600 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Wishlist</span>
              </div>
              <span className="bg-rose-100 text-rose-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                {wishlist.length}
              </span>
            </Link>
          </div>

          {/* Tab Panel */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            {activeTab === 'orders' && (
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-3">
                  Recent Tea Orders
                </h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-stone-900">Order #BR-928411</span>
                      <span className="bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                        Delivered
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">
                      1 × Rockwood Single Origin Black Tea (250g), 1 × Rockwood Misty Green Whole Leaf (100g)
                    </p>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-stone-200 text-stone-500">
                      <span>Delivered on 14 Oct 2026</span>
                      <span className="font-bold text-stone-900">Total: ₹650.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-3">
                  Account Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-stone-400 block mb-1">MEMBER STATUS</span>
                    <span className="font-bold text-stone-800">Briar Connoisseur Member</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block mb-1">EMAIL</span>
                    <span className="font-bold text-stone-800">connoisseur@briartea.com</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-3">
                  Default Shipping Address
                </h3>
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                  <p className="font-bold text-stone-900">Tea Connoisseur</p>
                  <p>14 Garden View Enclave, High Range Avenue</p>
                  <p>Bengaluru, Karnataka - 560001</p>
                  <p className="mt-2 text-stone-500">Phone: +91 98765 43210</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
