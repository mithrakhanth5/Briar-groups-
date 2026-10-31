'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '@/types';
import { products } from '@/data/products';
import { calculateOrderTax, TaxBreakdown } from '@/data/tax';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedWeight?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  taxBreakdown: TaxBreakdown;
  deliveryState: string;
  setDeliveryState: (state: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  compareList: string[];
  toggleCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  currency: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [deliveryState, setDeliveryState] = useState<string>('Tamil Nadu');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currency = '₹ INR';

  // Load from local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('briar_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('briar_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedCompare = localStorage.getItem('briar_compare');
      if (savedCompare) setCompareList(JSON.parse(savedCompare));
    } catch (e) {
      console.error('Failed to load storage', e);
    }
  }, []);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem('briar_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  // Save wishlist
  useEffect(() => {
    try {
      localStorage.setItem('briar_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  // Save compare
  useEffect(() => {
    try {
      localStorage.setItem('briar_compare', JSON.stringify(compareList));
    } catch (e) {
      console.error('Failed to save compare list', e);
    }
  }, [compareList]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1, selectedWeight?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity,
          selectedWeight: selectedWeight || product.weight,
        },
      ];
    });
    showToast(`Added "${product.name}" to cart`);
    setIsCartOpen(true);
  };

  // URL /cart?add=[id] query param handler with router replace cleanup
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const addId = url.searchParams.get('add');
    if (addId) {
      const matchingProduct = products.find((p) => p.id === addId);
      if (matchingProduct) {
        addToCart(matchingProduct, 1);
      }
      // Remove query param without triggering page reload so refresh doesn't re-add
      url.searchParams.delete('add');
      window.history.replaceState({}, '', url.pathname + (url.search ? url.search : ''));
    }
  }, []);

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed item from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved item to Wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const toggleCompare = (productId: string) => {
    setCompareList((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from comparison');
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 4) {
        showToast('You can compare a maximum of 4 teas');
        return prev;
      }
      showToast('Added tea to comparison');
      return [...prev, productId];
    });
  };

  const isInCompare = (productId: string) => compareList.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const taxBreakdown = calculateOrderTax(subtotal, deliveryState);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        taxBreakdown,
        deliveryState,
        setDeliveryState,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        toggleCompare,
        isInCompare,
        isCompareOpen,
        setIsCompareOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        currency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
