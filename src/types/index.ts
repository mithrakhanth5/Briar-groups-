export interface UnverifiedField<T> {
  value: T;
  verified: boolean;
  todoNotice?: string;
}

export type ProductWorldTheme =
  | 'heritage-ink'
  | 'malanad'
  | 'megamalai'
  | 'rockwood'
  | 'talayar'
  | 'misty-black'
  | 'misty-green';

export interface Product {
  id: string; // '14' | '15' | '16' | '17' | '18' | '19'
  slug: string;
  name: string;
  subtitle: string;
  category: 'single-origin-black-tea' | 'single-origin-whole-leaf-specialty-tea';
  categoryName: string;
  price: number;
  weight: string;
  image: string;
  region: string; // Verified from original site
  description: string; // Verified from original site copy
  theme: ProductWorldTheme;
  themeAccent: string;
  themeGlow: string;
  themeBg: string;

  // Fields requiring verification flags per instruction:
  elevation: UnverifiedField<string>;
  tastingNotes: UnverifiedField<string[]>;
  aroma: UnverifiedField<string>;
  strength: UnverifiedField<'Mellow' | 'Medium' | 'Strong' | 'Robust'>;
  leafType: UnverifiedField<string>;
  liquorColor: UnverifiedField<string>;
  caffeineStrength: UnverifiedField<'Low' | 'Medium' | 'High'>;

  brewingGuide: {
    temp: UnverifiedField<string>;
    time: UnverifiedField<string>;
    amount: UnverifiedField<string>;
    cups: UnverifiedField<string>;
  };

  features: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  bestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  tea: string;
  rating: number;
  date: string;
  comment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
