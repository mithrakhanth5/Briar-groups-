import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import ProductSlider from '@/components/home/ProductSlider';
import StorySection from '@/components/home/StorySection';
import TeaTypesSection from '@/components/home/TeaTypesSection';
import EstateExplorer from '@/components/home/EstateExplorer';
import ReviewsSection from '@/components/home/ReviewsSection';
import FaqSection from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <div className="bg-[#070b09] text-stone-200 overflow-x-hidden max-w-full w-full">
      {/* Stage A: Futuristic Immersive Hero with WebGL steam & 3D tilt */}
      <Hero />

      {/* Freshness and Trust Badges */}
      <TrustBadges />

      {/* Product Showcase section anchor for hero button */}
      <div id="product-worlds">
        <ProductSlider />
      </div>

      {/* Single Origin Heritage Story & Stats */}
      <StorySection />

      {/* Choose Your Tea Types */}
      <TeaTypesSection />

      {/* Interactive Estate Terroir Explorer */}
      <EstateExplorer />

      {/* Customer Testimonials */}
      <ReviewsSection />

      {/* Single Origin Teas FAQ */}
      <FaqSection />
    </div>
  );
}
