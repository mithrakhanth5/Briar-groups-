import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import SmoothScroll from '@/components/motion/SmoothScroll';
import CustomCursor from '@/components/motion/CustomCursor';
import Preloader from '@/components/motion/Preloader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import CompareDrawer from '@/components/shop/CompareDrawer';
import SearchModal from '@/components/layout/SearchModal';
import AuthModal from '@/components/layout/AuthModal';
import QuickViewModal from '@/components/shop/QuickViewModal';
import Toast from '@/components/ui/Toast';

export const metadata: Metadata = {
  metadataBase: new URL('https://briartea.com'),
  title: 'BRIAR Tea | 100% Single Origin Heritage South Indian Tea',
  description:
    'Since 1928, BRIAR Tea produces 100% single origin, unblended tea harvested across 23,000 acres in Anaimalai, Munnar, Meghamalai, and Nilgiris. Packed fresh at estate factories and shipped direct.',
  keywords: [
    'Briar Tea',
    'Single Origin Tea',
    'Malanad Black Tea',
    'Rockwood Tea',
    'Talayar Munnar Tea',
    'Megamalai Tea',
    'Whole Leaf Specialty Tea',
    'Nilgiri Tea',
    'Heritage South Indian Tea',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BRIAR Tea | 100% Single Origin Heritage South Indian Tea',
    description:
      'Since 1928, pure unblended single-origin tea directly from our estate factories in South India.',
    url: 'https://briartea.com',
    siteName: 'BRIAR Tea',
    images: [
      {
        url: '/images/hero-1.webp',
        width: 1200,
        height: 630,
        alt: 'Briar Single Origin Tea Harvest',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRIAR Tea | 100% Single Origin Heritage South Indian Tea',
    description:
      '100% single origin, unblended tea harvested in South Indian high ranges since 1928.',
    images: ['/images/hero-1.webp'],
  },
  icons: {
    icon: '/images/spinner.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BRIAR Tea Group',
    url: 'https://briartea.com',
    logo: 'https://briartea.com/images/logo.png',
    foundingDate: '1928',
    description:
      'Producers and purveyors of 100% single origin unblended South Indian tea across 23,000 acres.',
    sameAs: [
      'https://www.facebook.com/profile.php?id=100070005372962',
      'https://www.instagram.com/briar.tea/',
      'https://teabungalows.com/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94890-12345',
      contactType: 'customer service',
      email: 'sales@briartea.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil', 'Malayalam'],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#070b09] text-stone-200 selection:bg-briar-gold selection:text-stone-950 font-sans antialiased overflow-x-hidden">
        <ThemeProvider>
          <CartProvider>
            <SmoothScroll>
              <CustomCursor />
              <Preloader />
              <Header />
              <main className="min-h-[70vh]">{children}</main>
              <Footer />

              {/* Global Drawers & Modals */}
              <CartDrawer />
              <CompareDrawer />
              <SearchModal />
              <AuthModal />
              <QuickViewModal />
              <Toast />
            </SmoothScroll>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
