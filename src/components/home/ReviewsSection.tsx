'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { customerReviews } from '@/data/products';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((p) => (p === 0 ? customerReviews.length - 1 : p - 1));
  };
  const next = () => {
    setCurrent((p) => (p === customerReviews.length - 1 ? 0 : p + 1));
  };

  const review = customerReviews[current];

  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-briar-gold font-bold">
            Connoisseur Impressions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1 mb-2">
            What Our Customers Say!
          </h2>
          <div className="relative h-5 w-28 mx-auto mb-3">
            <Image
              src="/images/decor-2.png"
              alt="Decorative ornament"
              fill
              className="object-contain filter invert opacity-80"
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-stone-800/90 border border-stone-700/80 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="w-12 h-12 text-emerald-800/50 absolute top-6 right-6" />

          {/* Stars */}
          <div className="flex text-amber-400 gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Comment */}
          <p className="font-serif text-lg sm:text-2xl text-stone-100 italic leading-relaxed mb-6">
            &ldquo;{review.comment}&rdquo;
          </p>

          {/* Author Details */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-700">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-white text-sm sm:text-base">
                  {review.author}
                </span>
                <span className="text-emerald-400 text-xs flex items-center gap-0.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Buyer
                </span>
              </div>
              <p className="text-xs text-stone-400">
                {review.location} • Reviewed: <span className="text-briar-gold">{review.tea}</span>
              </p>
            </div>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-stone-700 hover:bg-briar-green text-white flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-stone-700 hover:bg-briar-green text-white flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
