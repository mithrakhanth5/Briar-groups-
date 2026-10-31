'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Briar Connoisseur Circle.');
    setEmail('');
  };

  return (
    <footer className="bg-[#050806] text-stone-300 pt-20 pb-10 border-t border-stone-800 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-950/20 blur-[140px] pointer-events-none" />

      {/* Newsletter Banner */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="bg-gradient-to-r from-stone-900/90 via-[#0d1611]/90 to-stone-900/90 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-briar-gold font-bold">
            The Connoisseur Journal
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-stone-100 font-normal mt-2 mb-3">
            Receive First-Flush Harvest Releases & Estate Notes
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mb-6">
            Direct notifications when single-origin batches are packed at our South Indian estate factories.
          </p>

          {subscribed ? (
            <div className="bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 px-6 py-3 rounded-full text-xs inline-block">
              ✓ You are now subscribed to the Briar Circle.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-stone-950/80 border border-stone-700/80 focus:border-briar-gold rounded-full px-5 py-3 text-xs text-white placeholder-stone-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-briar-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-bold px-7 py-3 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80 text-xs relative z-10">
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <div className="relative h-11 w-44">
              <Image
                src="/images/logo.png"
                alt="Briar Tea"
                fill
                className="object-contain filter brightness-110"
              />
            </div>
          </Link>
          <p className="text-stone-400 leading-relaxed pr-6 text-xs font-light">
            Cultivated across 23,000 acres in the South Indian high ranges (Anaimalai, Munnar, Meghamalai, Nilgiris). 100% single origin, non-blended, packed fresh to order at our own estate factories and shipped direct.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100070005372962"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-briar-gold flex items-center justify-center text-stone-400 hover:text-white transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/briar.tea/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-briar-gold flex items-center justify-center text-stone-400 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-stone-100 uppercase tracking-widest mb-4 pb-1 border-b border-stone-800">
            The 6 Teas
          </h4>
          <ul className="space-y-2 text-stone-400">
            <li>
              <Link href="/product/malanad-single-origin-black-tea" className="hover:text-briar-gold transition-colors">
                Malanad Black Tea (Valparai)
              </Link>
            </li>
            <li>
              <Link href="/product/megamalai-single-origin-black-tea" className="hover:text-briar-gold transition-colors">
                Megamalai Black Tea (Theni)
              </Link>
            </li>
            <li>
              <Link href="/product/rockwood-single-origin-black-tea" className="hover:text-briar-gold transition-colors">
                Rockwood Black Tea (Nilgiris)
              </Link>
            </li>
            <li>
              <Link href="/product/talayar-single-origin-black-tea" className="hover:text-briar-gold transition-colors">
                Talayar Black Tea (Munnar)
              </Link>
            </li>
            <li>
              <Link href="/product/rockwood-misty-black-single-origin-whole-leaf-tea" className="hover:text-briar-gold transition-colors">
                Misty Black Whole Leaf
              </Link>
            </li>
            <li>
              <Link href="/product/rockwood-misty-green-single-origin-whole-leaf-tea" className="hover:text-briar-gold transition-colors">
                Misty Green Whole Leaf
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-stone-100 uppercase tracking-widest mb-4 pb-1 border-b border-stone-800">
            Heritage & Origins
          </h4>
          <ul className="space-y-2 text-stone-400">
            <li>
              <Link href="/about" className="hover:text-briar-gold transition-colors">
                Our 90-Year Story
              </Link>
            </li>
            <li>
              <Link href="/infrastructure" className="hover:text-briar-gold transition-colors">
                Plantations & 7 Factories
              </Link>
            </li>
            <li>
              <a href="https://teabungalows.com/" target="_blank" rel="noopener noreferrer" className="hover:text-briar-gold transition-colors text-amber-300">
                Briar Tea Bungalows ↗
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-briar-gold transition-colors">
                Estate Contacts
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-briar-gold transition-colors">
                Saved Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-stone-100 uppercase tracking-widest mb-4 pb-1 border-b border-stone-800">
            Customer Care & Policies
          </h4>
          <ul className="space-y-2 text-stone-400">
            <li>
              <a href="mailto:sales@briartea.com" className="hover:text-white block">
                sales@briartea.com
              </a>
            </li>
            <li>
              <a href="mailto:corporate@briartea.com" className="hover:text-white block">
                corporate@briartea.com
              </a>
            </li>
            <li className="pt-2 border-t border-stone-800">
              <Link href="/shipping-policy" className="hover:text-briar-gold block py-0.5">
                Shipping Policy
              </Link>
              <Link href="/refund-policy" className="hover:text-briar-gold block py-0.5">
                Refund & Cancellation
              </Link>
              <Link href="/terms-conditions" className="hover:text-briar-gold block py-0.5">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4 relative z-10">
        <p>© {new Date().getFullYear()} BRIAR Tea Group. All Rights Reserved. Est. 1928.</p>
        <div className="flex items-center gap-6 text-stone-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Own Estate Leaf
          </span>
          <span className="flex items-center gap-1.5 text-briar-gold">
            <Sparkles className="w-3.5 h-3.5" /> Direct From Source Factory
          </span>
        </div>
      </div>
    </footer>
  );
}
