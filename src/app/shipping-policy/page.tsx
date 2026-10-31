import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="bg-briar-cream/30 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 sm:p-14 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="font-serif text-3xl sm:text-4xl text-briar-green font-bold mb-6">
          Shipping & Delivery Policy
        </h1>
        <div className="space-y-6 text-stone-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">1. Fresh From Estate Factory</h2>
            <p>
              All BRIAR teas are vacuum packed immediately after processing at our South Indian estate factories. Orders placed are dispatched directly from our regional fulfillment centers to ensure optimal leaf freshness.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">2. Free Shipping</h2>
            <p>
              We are pleased to offer complimentary standard doorstep delivery on all orders above ₹325 across India. For orders below ₹325, a nominal shipping charge of ₹50 is applied.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">3. Delivery Timelines</h2>
            <p>
              Metro cities: 3 - 5 business days. Non-metro and regional locations: 4 - 7 business days. Real-time courier tracking numbers are sent via email/SMS as soon as the consignment leaves our estate facility.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
