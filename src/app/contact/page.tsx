'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ContactPage() {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Thank you! Your message has been sent to our estate team.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="bg-briar-cream/40 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
            We Would Love To Hear From You
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-briar-green font-normal mt-2 mb-4">
            Contact Briar Tea
          </h1>
          <div className="relative h-6 w-36 mx-auto mb-6">
            <Image
              src="/images/decor-2.png"
              alt="Floral decoration"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Have questions about our single origin harvests, wholesale orders, or our heritage tea bungalows? Connect directly with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-briar-green text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-briar-gold font-bold">
                Direct Channels
              </span>
              <h2 className="font-serif text-3xl font-bold mt-2 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-briar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <a href="mailto:sales@briartea.com" className="text-stone-300 hover:text-white block mt-0.5">
                      Sales: sales@briartea.com
                    </a>
                    <a href="mailto:corporate@briartea.com" className="text-stone-300 hover:text-white block">
                      Corporate: corporate@briartea.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-briar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone Support</h4>
                    <p className="text-stone-300 mt-0.5">+91 94890 12345</p>
                    <p className="text-stone-400 text-xs mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-briar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Plantation Headquarters</h4>
                    <p className="text-stone-300 mt-0.5 leading-relaxed text-xs sm:text-sm">
                      BRIAR Tea Group, Woodbriar House, Tea Plantation Divisions, Valparai & Munnar High Ranges, South India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-emerald-900 text-xs text-stone-300">
              <p>For tea bungalow reservations, please visit teabungalows.com</p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-briar-leaf font-bold">
              Send an inquiry
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1 mb-6">
              Leave Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You For Reaching Out!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Our tea advisory team will review your inquiry and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-briar-green text-white text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-full mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.g. Siddharth Menon"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:border-briar-green focus:bg-white focus:outline-none text-stone-700"
                    >
                      <option value="">Select subject...</option>
                      <option value="Single Origin Tea Inquiry">Single Origin Tea Inquiry</option>
                      <option value="Order & Shipping Status">Order & Shipping Status</option>
                      <option value="Wholesale & Corporate Gifting">Wholesale & Corporate Gifting</option>
                      <option value="Hospitality Bungalows">Hospitality Bungalows</option>
                      <option value="Feedback / Other">Feedback / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your tea requirements or feedback..."
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl p-4 text-sm focus:border-briar-green focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-briar-green hover:bg-emerald-800 text-white font-semibold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 text-briar-gold" />
                  <span>{loading ? 'Submitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
