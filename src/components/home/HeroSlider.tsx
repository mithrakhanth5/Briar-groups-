'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroSlides } from '@/data/products';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-[550px] md:h-[650px] lg:h-[720px] overflow-hidden bg-stone-950 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Zoom animation */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover transition-transform duration-10000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </div>

            {/* Content Box */}
            <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center max-w-5xl">
              <div
                className={`transition-all duration-700 delay-200 transform ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {/* Gold Tag */}
                <div className="inline-flex items-center gap-2 bg-briar-green/80 backdrop-blur-md border border-briar-gold/40 text-briar-gold px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-briar-gold" />
                  <span>{slide.tag}</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15] max-w-2xl mb-4 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-lg text-stone-200 max-w-xl mb-8 leading-relaxed font-light">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="bg-briar-gold hover:bg-amber-600 text-stone-950 font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                  >
                    {slide.ctaText}
                  </Link>

                  <Link
                    href="/about"
                    className="border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-briar-green text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-briar-green text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-8 h-2 bg-briar-gold shadow'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
