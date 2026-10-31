import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-briar-cream/30 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 sm:p-14 rounded-3xl border border-stone-200 shadow-sm">
        <h1 className="font-serif text-3xl sm:text-4xl text-briar-green font-bold mb-6">
          Refund & Cancellation Policy
        </h1>
        <div className="space-y-6 text-stone-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">1. 100% Quality Guarantee</h2>
            <p>
              At BRIAR Tea, we stand behind the craftsmanship and purity of our single-origin harvests. If your tea packaging arrives compromised, punctured, or defective, please notify us within 48 hours of delivery at sales@briartea.com with order details and photographs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">2. Replacements & Refunds</h2>
            <p>
              Approved claims are eligible for an immediate replacement package shipped with priority delivery, or a full refund processed back to your original payment method within 5 - 7 business days.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-2">3. Cancellations</h2>
            <p>
              Orders can be cancelled free of charge prior to estate dispatch. Once the parcel is in transit with the logistics partner, cancellation is no longer possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
