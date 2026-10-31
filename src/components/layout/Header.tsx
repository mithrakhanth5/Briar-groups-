'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const {
    cartCount,
    subtotal,
    setIsCartOpen,
    wishlist,
    compareList,
    setIsCompareOpen,
    setIsSearchOpen,
    setIsAuthModalOpen,
    currency,
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teasDropdownOpen, setTeasDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setTeasDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Heritage Micro-Bar */}
      <div className="bg-[#050806] text-stone-400 text-[11px] border-b border-stone-800/80 hidden md:block">
        <div className="container mx-auto px-6 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>100% Own-Estate Southern Indian Tea • Since 1928</span>
            </span>
            <span className="text-stone-700">|</span>
            <span className="text-emerald-400/90 font-medium">
              Free Doorstep Shipping Across India
            </span>
          </div>

          <div className="flex items-center gap-5">
            {/* Currency indicator (Fixed from glitchy £ INR 23 to clean ₹ INR) */}
            <div className="flex items-center gap-1.5 text-stone-300 font-mono">
              <span className="text-briar-gold font-bold">₹</span>
              <span>INR</span>
            </div>

            <span className="text-stone-800">|</span>

            {/* Compare trigger */}
            <button
              onClick={() => setIsCompareOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compare ({compareList.length})</span>
            </button>

            <span className="text-stone-800">|</span>

            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <User className="w-3.5 h-3.5 text-briar-gold" />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Dark Glassmorphic Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b09]/90 backdrop-blur-xl border-b border-stone-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3'
            : 'bg-[#070b09]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 flex items-center justify-between max-w-full">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1.5 text-stone-300 hover:text-briar-gold transition-colors focus:outline-none shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-8 w-28 sm:h-11 sm:w-44 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Briar Tea - 100% Single Origin Heritage"
                fill
                priority
                className="object-contain filter brightness-110 drop-shadow-[0_2px_10px_rgba(16,185,129,0.25)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                pathname === '/'
                  ? 'text-briar-gold border-b border-briar-gold pb-0.5'
                  : 'text-stone-300 hover:text-briar-gold'
              }`}
            >
              Home
            </Link>

            {/* Our Teas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setTeasDropdownOpen(true)}
              onMouseLeave={() => setTeasDropdownOpen(false)}
            >
              <Link
                href="/product-category"
                className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium py-2 transition-colors ${
                  pathname.startsWith('/product')
                    ? 'text-briar-gold'
                    : 'text-stone-300 hover:text-briar-gold'
                }`}
              >
                <span>The 6 Harvests</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    teasDropdownOpen ? 'rotate-180 text-briar-gold' : 'text-stone-500'
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel */}
              <div
                className={`absolute top-full left-0 w-[540px] bg-[#0c120e]/95 backdrop-blur-2xl text-stone-200 rounded-2xl shadow-2xl border border-stone-800 p-6 grid grid-cols-2 gap-6 transition-all duration-300 origin-top-left ${
                  teasDropdownOpen
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible pointer-events-none'
                }`}
              >
                <div>
                  <h4 className="text-[10px] font-bold text-briar-gold uppercase tracking-[0.25em] mb-3 pb-1 border-b border-stone-800">
                    Single Origin Black
                  </h4>
                  <ul className="space-y-2">
                    {products
                      .filter((p) => p.category === 'single-origin-black-tea')
                      .map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/product/${p.slug}`}
                            className="block p-2 rounded-lg hover:bg-stone-800/60 transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-white group-hover/item:text-briar-gold">
                              {p.name.replace(' Single Origin Black Tea', '')}
                            </div>
                            <div className="text-[10px] text-stone-400 mt-0.5">
                              {p.region}
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.25em] mb-3 pb-1 border-b border-stone-800">
                    Whole Leaf Specialty
                  </h4>
                  <ul className="space-y-2">
                    {products
                      .filter(
                        (p) =>
                          p.category ===
                          'single-origin-whole-leaf-specialty-tea'
                      )
                      .map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/product/${p.slug}`}
                            className="block p-2 rounded-lg hover:bg-stone-800/60 transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-white group-hover/item:text-emerald-400">
                              {p.name.replace(' Single Origin Whole Leaf Tea', '')}
                            </div>
                            <div className="text-[10px] text-stone-400 mt-0.5">
                              100% Unbroken Leaf
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-stone-800">
                    <Link
                      href="/product-category"
                      className="text-xs text-briar-gold hover:underline flex items-center justify-between"
                    >
                      <span>Explore Catalog</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                pathname === '/about'
                  ? 'text-briar-gold border-b border-briar-gold pb-0.5'
                  : 'text-stone-300 hover:text-briar-gold'
              }`}
            >
              Heritage
            </Link>

            <Link
              href="/infrastructure"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                pathname === '/infrastructure'
                  ? 'text-briar-gold border-b border-briar-gold pb-0.5'
                  : 'text-stone-300 hover:text-briar-gold'
              }`}
            >
              Estates & R&D
            </Link>

            <Link
              href="/contact"
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                pathname === '/contact'
                  ? 'text-briar-gold border-b border-briar-gold pb-0.5'
                  : 'text-stone-300 hover:text-briar-gold'
              }`}
            >
              Contact
            </Link>

            <a
              href="https://teabungalows.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] font-medium text-amber-300/90 hover:text-amber-200 flex items-center gap-1 transition-colors"
            >
              <span>Hospitality</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-stone-300 hover:text-briar-gold rounded-full hover:bg-stone-800/60 transition-colors"
              aria-label="Search teas"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-1.5 sm:p-2 text-stone-300 hover:text-rose-400 rounded-full hover:bg-stone-800/60 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Compare Drawer Trigger */}
            <button
              onClick={() => setIsCompareOpen(true)}
              className="relative p-2 text-stone-300 hover:text-emerald-400 rounded-full hover:bg-stone-800/60 transition-colors hidden sm:block"
              aria-label="Compare teas"
            >
              <Layers className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-500 text-stone-950 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-800/60 hover:border-briar-gold/80 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-105 active:scale-95 shrink-0"
              aria-label="Open basket"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-briar-gold" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-emerald-400 text-stone-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-mono font-semibold text-stone-200 hidden sm:inline-block">
                ₹{subtotal.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-[#0a0f0c] text-white p-6 flex flex-col justify-between transition-transform duration-300 border-r border-stone-800 shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/logo.png"
                  alt="Briar Tea"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-stone-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 space-y-4 text-sm font-medium">
              <Link href="/" className="block py-2 border-b border-stone-800/80 text-stone-200 hover:text-briar-gold">
                Home
              </Link>
              <Link href="/product-category" className="block py-2 border-b border-stone-800/80 text-stone-200 hover:text-briar-gold">
                The 6 Harvests (Catalog)
              </Link>
              <Link href="/about" className="block py-2 border-b border-stone-800/80 text-stone-200 hover:text-briar-gold">
                Heritage Story
              </Link>
              <Link href="/infrastructure" className="block py-2 border-b border-stone-800/80 text-stone-200 hover:text-briar-gold">
                Infrastructure & Plantations
              </Link>
              <Link href="/contact" className="block py-2 border-b border-stone-800/80 text-stone-200 hover:text-briar-gold">
                Contact & Estate Offices
              </Link>
              <a
                href="https://teabungalows.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 border-b border-stone-800/80 text-amber-300 flex items-center justify-between"
              >
                <span>Tea Bungalows</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-stone-800 text-xs text-stone-400 space-y-2">
            <p>100% Single Origin Heritage Since 1928</p>
            <p className="text-emerald-400">sales@briartea.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
