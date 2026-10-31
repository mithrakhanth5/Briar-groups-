import React from 'react';

export default function TermsConditionsPage() {
  return (
    <div className="bg-briar-cream/30 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 sm:p-14 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="font-serif text-3xl sm:text-4xl text-briar-green font-bold mb-6">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-stone-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">1. Introduction</h2>
            <p>
              Welcome to BRIAR Tea (briartea.com). By browsing or purchasing through this website, you agree to comply with and be bound by the following terms of service and trade practices established by the BRIAR Tea Group.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">2. Single Origin Integrity</h2>
            <p>
              All products labeled Single Origin are guaranteed to originate exclusively from our designated estate gardens (Valparai, Munnar, Meghamalai, Nilgiri-Wayanad). We adhere strictly to zero adulteration and no third-party tea blending.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">3. Intellectual Property</h2>
            <p>
              The names BRIAR, Malanad, Talayar, Rockwood, Megamalai, trademarks, logos, photographs, and historical narratives published on this platform are protected intellectual property of the Woodbriar / BRIAR Group.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
