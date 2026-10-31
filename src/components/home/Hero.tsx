'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import WebGLSteamCanvas from '@/components/motion/WebGLSteamCanvas';
import FloatingTeaLeaves from '@/components/motion/FloatingTeaLeaves';
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mountain,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function Hero() {
  const { addToCart } = useCart();
  const { setTheme } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100% over 10s
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  const activeProduct = products[currentIndex] || products[0];

  // Check prefers-reduced-motion
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(isReduced);

    if (isReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update theme when product changes
  useEffect(() => {
    if (activeProduct?.theme) {
      setTheme(activeProduct.theme);
    }
  }, [activeProduct, setTheme]);

  // 10-Second Auto-Switch Timer with live progress ticks
  useEffect(() => {
    if (isPaused) return;

    const intervalMs = 100; // tick every 100ms
    const totalDurationMs = 10000; // 10 seconds total

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (intervalMs / totalDurationMs) * 100;
        if (next >= 100) {
          setCurrentIndex((curr) => (curr + 1) % products.length);
          return 0;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const selectProduct = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setProgress(0);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    setProgress(0);
  };

  const tiltX = reducedMotion ? 0 : mousePos.y * -12;
  const tiltY = reducedMotion ? 0 : mousePos.x * 16;

  return (
    <section
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#040c07] text-white pt-20 pb-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Natural Green Estate Photographic Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/hero-2.webp"
          alt="Lush green tea estate canopy"
          fill
          priority
          className="object-cover object-center opacity-30 filter saturate-125 brightness-90 transition-all duration-1000"
        />
        {/* Deep emerald rainforest vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d07] via-[#04140b]/85 to-[#020a05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040c07] via-transparent to-[#040c07]/80" />
      </div>

      {/* 2. Dynamic Ambient Product World Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: activeProduct.themeGlow }}
      />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] rounded-full bg-emerald-600/15 blur-[120px] pointer-events-none" />

      {/* 3. Floating Natural Green Tea Leaves Animation */}
      <FloatingTeaLeaves />

      {/* 4. Three.js WebGL Rising Tea Steam Canvas */}
      <WebGLSteamCanvas color={activeProduct.themeAccent} opacity={0.45} />

      {/* 5. Main Hero Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bold Editorial & Highly Attractive "SINGLE ORIGIN TEA" Promotion */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Prominent Golden-Emerald Single Origin Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-950/80 via-[#0a2316]/90 to-emerald-950/80 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent">
              100% UNBLENDED • SOUTH INDIAN HERITAGE
            </span>
          </div>

          {/* Core Eye-Catching Promotional Typography */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-briar-gold animate-spin-slow" />
              <span>Direct From High-Altitude Gardens</span>
            </h2>

            {/* Glowing, Highly Attractive "SINGLE ORIGIN TEA" Keyword */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              The Purity of{' '}
              <span className="block mt-1 bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.7)] underline decoration-briar-gold/50 decoration-wavy decoration-1 underline-offset-8">
                SINGLE ORIGIN TEA
              </span>
            </h1>
          </div>

          {/* Value Proposition Description */}
          <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed">
            Unlike commercial brands that blend low-grade leaves from multiple auctions, every cup of{' '}
            <strong className="text-emerald-300 font-semibold font-serif">BRIAR</strong> comes from one single estate, harvested at peak morning dew and packed fresh at our own factories.
          </p>

          {/* Key Trust Checkmarks */}
          <div className="grid grid-cols-2 gap-3 max-w-lg text-xs text-stone-300 pt-1">
            <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-800/40 px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Own Estate Harvest</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-800/40 px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free Doorstep Shipping</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => addToCart(activeProduct, 1)}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-briar-gold via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-600 text-stone-950 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_45px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order {activeProduct.name.split(' ')[0]} • ₹{activeProduct.price}</span>
            </button>

            <Link
              href={`/product/${activeProduct.slug}`}
              className="px-7 py-4 rounded-full border border-emerald-500/50 hover:border-briar-gold bg-emerald-950/50 hover:bg-emerald-900/60 backdrop-blur-md text-stone-100 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-1.5"
            >
              <span>Explore Terroir</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

        {/* Right Column: 10-Second Auto-Cycling 3D Showcase Card */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          {/* 10-Second Timer Status Indicator Header */}
          <div className="w-full max-w-sm flex items-center justify-between px-3 py-1.5 mb-3 text-[11px] text-stone-400 bg-stone-900/70 border border-stone-800 rounded-full backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-stone-300 font-mono text-[10px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ORIGIN {currentIndex + 1} OF 6</span>
            </span>

            {/* 10-Second Countdown Progress Bar */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-stone-400">Next in {Math.ceil((100 - progress) / 10)}s</span>
              <div className="w-16 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-briar-gold transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Prev/Next manual arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevProduct}
                className="w-5 h-5 rounded-full hover:bg-stone-800 flex items-center justify-center text-stone-300"
                aria-label="Previous origin"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextProduct}
                className="w-5 h-5 rounded-full hover:bg-stone-800 flex items-center justify-center text-stone-300"
                aria-label="Next origin"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3D Glassmorphic Pedestal Card */}
          <div
            className="relative w-full max-w-sm bg-gradient-to-b from-[#0e1a12]/90 via-[#0a140e]/95 to-[#060c08] rounded-3xl p-6 border shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out"
            style={{
              borderColor: activeProduct.themeAccent,
              boxShadow: `0 20px 50px rgba(0,0,0,0.9), 0 0 35px ${activeProduct.themeGlow}`,
              transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Luminous internal glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none transition-colors duration-1000"
              style={{
                background: `radial-gradient(circle at 50% 35%, ${activeProduct.themeAccent}, transparent 70%)`,
              }}
            />

            {/* Top Origin Tag & Category */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm font-mono"
                style={{
                  color: activeProduct.themeAccent,
                  borderColor: `${activeProduct.themeAccent}50`,
                  backgroundColor: `${activeProduct.themeAccent}15`,
                }}
              >
                {activeProduct.categoryName}
              </span>

              <span className="text-[11px] font-mono text-stone-400 flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                {activeProduct.elevation.value}
              </span>
            </div>

            {/* Seamless Product Packaging Container with Fade Animation */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-stone-900/60 to-black/60 border border-stone-800/80 p-4 flex items-center justify-center group/card">
              <div
                key={activeProduct.id}
                className="relative w-full h-full animate-fade-in transition-transform duration-500 group-hover/card:scale-105"
              >
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] brightness-105"
                />
              </div>

              {/* Verified Origin Watermark */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#050b07]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-800 text-[10px] text-stone-300 flex items-center justify-between">
                <span className="font-semibold text-emerald-400">{activeProduct.region}</span>
                <span className="text-stone-400">100% Single Origin</span>
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="mt-4 space-y-2 relative z-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl font-bold text-white line-clamp-1">
                  {activeProduct.name}
                </h3>
                <span className="font-serif text-xl font-bold text-briar-gold font-mono">
                  ₹{activeProduct.price.toFixed(2)}
                </span>
              </div>

              <p className="text-xs text-stone-400 line-clamp-2 font-light leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => addToCart(activeProduct, 1)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-700/60 hover:border-briar-gold text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all hover:scale-105"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-briar-gold" />
                  <span>Add To Cart</span>
                </button>

                <Link
                  href={`/product/${activeProduct.slug}`}
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 hover:text-white text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Origin Selector Dots / Navigation Pills */}
          <div className="flex items-center gap-2 mt-4">
            {products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => selectProduct(idx)}
                className={`transition-all duration-300 rounded-full flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 ${
                  idx === currentIndex
                    ? 'bg-emerald-900 border border-emerald-400 text-white shadow-[0_0_12px_rgba(16,185,129,0.5)] scale-105'
                    : 'bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: p.themeAccent }}
                />
                <span className="hidden sm:inline">{p.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
