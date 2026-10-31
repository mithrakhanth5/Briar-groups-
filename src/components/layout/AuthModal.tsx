'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Lock, Mail, User, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, showToast } = useCart();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      showToast(
        activeTab === 'login'
          ? `Welcome back to Briar Tea, ${email.split('@')[0]}!`
          : `Account successfully created! Welcome, ${name || 'Tea Lover'}!`
      );
      setIsSubmitted(false);
      setIsAuthModalOpen(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsAuthModalOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-12">
        <div
          className="inline-block w-full max-w-md bg-white text-left align-middle shadow-2xl rounded-2xl overflow-hidden transition-all relative z-10 border border-stone-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header & Tabs */}
          <div className="bg-stone-50 border-b border-stone-200 relative">
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pt-6 px-6 text-center">
              <span className="text-xs uppercase tracking-widest text-briar-green font-semibold">
                Briar Heritage Account
              </span>
              <h3 className="font-serif text-2xl text-stone-900 mt-1">
                {activeTab === 'login' ? 'Sign In' : 'Create an Account'}
              </h3>
            </div>

            <div className="flex border-t border-stone-200 mt-5">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                  activeTab === 'login'
                    ? 'border-briar-green text-briar-green bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
                  activeTab === 'register'
                    ? 'border-briar-green text-briar-green bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {activeTab === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Priya Sharma"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-stone-700">
                  Password
                </label>
                {activeTab === 'login' && (
                  <button
                    type="button"
                    onClick={() => showToast('Password reset link will be sent to your email.')}
                    className="text-xs text-briar-green hover:underline"
                  >
                    Lost your password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:border-briar-green focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {activeTab === 'login' && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-briar-green border-stone-300 rounded focus:ring-briar-green"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-stone-600">
                  Remember me on this browser
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full py-3 bg-briar-green hover:bg-emerald-800 text-white rounded-lg font-semibold text-sm uppercase tracking-wider transition-all shadow-md mt-2 flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <span>Processing...</span>
              ) : activeTab === 'login' ? (
                'Sign In to Account'
              ) : (
                'Create My Account'
              )}
            </button>

            <div className="pt-2 text-center text-xs text-stone-500">
              {activeTab === 'login' ? (
                <p>
                  Don&apos;t have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('register')}
                    className="text-briar-green font-semibold hover:underline"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-briar-green font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
