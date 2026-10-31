'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { faqItems } from '@/data/products';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#040805] border-t border-stone-800 text-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1 mb-2">
            FAQ:{' '}
            <span className="bg-gradient-to-r from-amber-300 via-emerald-400 to-yellow-200 bg-clip-text text-transparent font-bold">
              SINGLE ORIGIN TEAS
            </span>
          </h2>
          <div className="relative h-5 w-28 mx-auto mb-3 opacity-80">
            <Image
              src="/images/decor-2.png"
              alt="Decorative leaf ornament"
              fill
              className="object-contain filter brightness-125"
            />
          </div>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Learn why single origin teas offer an incomparable sensory experience compared to generic commercial blends.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-stone-900/40 rounded-2xl border border-stone-800/90 shadow-sm overflow-hidden transition-colors backdrop-blur-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-stone-100 hover:text-briar-gold transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 pt-3 font-light">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
