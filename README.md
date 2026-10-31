# BRIAR TEA - Heritage Single Origin Website Recreation

A pixel-faithful, production-quality recreation of the luxury tea brand website **[briartea.com](https://briartea.com/)**, engineered with Next.js 14, React 18, TypeScript, Tailwind CSS, Lucide icons, and full eCommerce interactions.

---

## 🍵 Project Highlights & Terroir

- **Brand:** Briar Tea (Established 1928, 23,000+ acres across South Indian high ranges)
- **Primary Color:** `#194a33` (Deep forest green) with gold `#C5A880` and leaf `#5ba238` accents
- **Typography:** Luxury editorial serif headings paired with clean sans-serif UI typography
- **Storage Strategy:** Built with **D: Drive storage redirection** (`D:\Briear`) preserving C: drive capacity while keeping full project source accessibility.

---

## 🚀 Pages & Features Inventory

| Route | Page | Implemented Features |
| :--- | :--- | :--- |
| `/` | **Home** | Top announcement bar, luxury sticky header, 5-slide animated hero carousel (`hero-1.webp` to `hero-5.webp`), Trust Badges, "Must-have Teas" category filter slider, "Single Origin Saga" story with stats (1928, 23,000 acres, 8,800 artisans, 15.5M kg), "Choose Your Tea Types" (Black vs Specialty), Interactive Estate Terroir Explorer (Anaimalai, Munnar, Meghamalai, Nilgiris), Customer reviews carousel, collapsible single-origin FAQ, and multi-column luxury footer. |
| `/product-category` | **Shop / Catalog** | Complete collection grid with category pills, multi-criteria sorting (Price, Rating, Name, Featured), real-time search, Free Shipping tags, Quick View modals, and instant Cart triggers. |
| `/product/[slug]` | **Product Details** | High-res gallery preview, elevation and estate tags, pack size selectors (250g, 500g), quantity counters, Add to Cart & 1-Click Buy Now, tabbed tasting notes, connoisseur brewing guide (temperature, steeping time, leaf ratio), and related teas. |
| `/about` | **About Us** | 90+ years heritage narrative, the 4 quality pillars (Handpicked, Climate Neutral, Packed at Source, Shipped Direct), Mission & Vision, and estate statistics. |
| `/infrastructure` | **Infrastructure & Plantations** | The 4 Plantation Districts, 7 modern Tea Factories (Sussex, Talliar, Injipara, etc.), R&D sensory cupping laboratory, and international certifications (ISO 22000, HACCP, Rainforest Alliance). |
| `/contact` | **Contact Us** | Corporate & Sales channels, estate phone lines, regional headquarters details, and interactive inquiry form with validation and instant feedback. |
| `/cart` | **Shopping Cart** | Item list with quantity adjustments, free shipping progress bar (Free above ₹325), coupon code engine (`BRIAR10`, `FIRSTHARVEST`), and summary calculation. |
| `/checkout` | **Checkout** | Full shipping address collection, payment method selector (UPI, Credit/Debit Card, Net Banking, COD), order review, and instant confirmation receipt with generated Order ID. |
| `/wishlist` | **Wishlist** | Saved tea favorites with persistent local storage. |
| `/my-account` | **Customer Portal** | Order history, member profile status, and saved address management. |
| Policies | **Legal & Policy** | Dedicated `/shipping-policy`, `/refund-policy`, and `/terms-conditions`. |

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom Briar palette
- **Icons:** Lucide React
- **State Management:** React Context + LocalStorage (Cart, Wishlist, Search, Auth modals)

---

## 💻 How to Run Locally

### 1. Start the Server
The project is configured and compiled in `D:\Briear`:
```bash
# Navigate to the project directory
cd D:\Briear

# Run the production server
npm run start
```
Or to run in development mode with hot-reloading:
```bash
npm run dev
```

### 2. Access the Website
Open your browser and navigate to:
```
http://localhost:3000
```
