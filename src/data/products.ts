import { Product, Review, FAQItem } from '@/types';

export const products: Product[] = [
  {
    id: '16', // Original site ID
    slug: 'malanad-single-origin-black-tea',
    name: 'MALANAD Single Origin Black Tea',
    subtitle: 'From mist-kissed Anaimalai Hills',
    category: 'single-origin-black-tea',
    categoryName: 'Single Origin Black Tea',
    price: 325,
    weight: '250g',
    image: '/images/2.webp',
    region: 'Anaimalai Hills (Valparai)', // Verified
    description:
      'BRIAR presents MALANAD Single Origin Tea, from our own mist-kissed tea plantations in Anaimalai hills at elevations ranging from 3000 to 5000 feet. MALANAD Single Origin Tea unfolds a strong, biscuity saga with nature’s freshness in golden hues. Savour the rich symphony of MALANAD Tea, a connoisseur’s delight that pairs exquisitely with milk or as a robust morning wake-up cup.', // Verified
    theme: 'malanad',
    themeAccent: '#10b981',
    themeGlow: 'rgba(16, 185, 129, 0.4)',
    themeBg: '#041810',

    // Unverified fields flagged with TODO
    elevation: { value: '3,000 - 5,000 ft', verified: false, todoNotice: 'TODO: Confirm exact elevation bounds' },
    tastingNotes: { value: ['Biscuity', 'Malty richness', 'Golden hues', 'Full-bodied strength'], verified: false, todoNotice: 'TODO: Tasting notes not listed on original shop page' },
    aroma: { value: 'Warm baked biscuit and toasted honey malt', verified: false, todoNotice: 'TODO: Verify aroma profile' },
    strength: { value: 'Robust', verified: false, todoNotice: 'TODO: Verify strength rating' },
    leafType: { value: 'CTC Broken Orange Pekoe', verified: false, todoNotice: 'TODO: Verify leaf grade' },
    liquorColor: { value: 'Rich Amber Gold', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'High', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '100°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '4 - 5 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '3g (1 heaping tsp)', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 cup (200ml)', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      'Valparai mist-kissed estate tea',
      'Strong biscuity character',
      '100% own-estate harvest',
      'Packed immediately at source factory',
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 52,
    bestseller: true,
  },
  {
    id: '15', // Original site ID
    slug: 'megamalai-single-origin-black-tea',
    name: 'MEGAMALAI Single Origin Black Tea',
    subtitle: 'From the cloud-mist mountain heights',
    category: 'single-origin-black-tea',
    categoryName: 'Single Origin Black Tea',
    price: 325,
    weight: '250g',
    image: '/images/4.webp',
    region: 'Meghamalai, Theni', // Verified
    description:
      'Meghamalai, named for its lofty heights where clouds meet mountains (“Mega” for cloud and “malai” for mountains), reaches elevations up to 6300 feet. Here, our well-manicured tea gardens thrive amidst mountain springs and clear blue lakes. BRIAR Group, the only producer of tea from the Meghamalai region, crafts an ultra-rare single-origin experience with exquisite natural briskness.', // Verified
    theme: 'megamalai',
    themeAccent: '#f59e0b',
    themeGlow: 'rgba(245, 158, 11, 0.4)',
    themeBg: '#141006',

    elevation: { value: 'Up to 6,300 ft', verified: false, todoNotice: 'TODO: Verify exact garden elevation' },
    tastingNotes: { value: ['Mountain spice', 'Golden honey', 'Muscatel hints', 'Clean brisk finish'], verified: false, todoNotice: 'TODO: Verify tasting notes' },
    aroma: { value: 'Wildflowers and mountain spring dew', verified: false, todoNotice: 'TODO: Verify aroma' },
    strength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify strength' },
    leafType: { value: 'High Grown CTC', verified: false, todoNotice: 'TODO: Verify leaf grade' },
    liquorColor: { value: 'Bright Golden Orange', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '95°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '3 - 4 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '2.5g (1 tsp)', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 cup (200ml)', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      'Exclusive single producer of Meghamalai tea',
      'Rare 6,300 ft high-altitude microclimate',
      'Mountain spring water nourishment',
      'Complex aromatic finish',
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 34,
    bestseller: true,
  },
  {
    id: '14', // Original site ID
    slug: 'rockwood-single-origin-black-tea',
    name: 'ROCKWOOD Single Origin Black Tea',
    subtitle: 'From the Nilgiri – Wayanad region',
    category: 'single-origin-black-tea',
    categoryName: 'Single Origin Black Tea',
    price: 325,
    weight: '250g',
    image: '/images/3.webp',
    region: 'Nilgiri – Wayanad', // Verified
    description:
      'BRIAR presents ROCKWOOD, a premium Single Origin Tea from the Nilgiri – Wayanad region. Bright and strong, with soothing floral notes and distinctive aroma of the Nilgiris, ROCKWOOD Single Origin Tea is crafted from select leaves sourced from our earliest plantations and processed at our Sussex Factory. Nurtured by the flow of Noolpuzha, ROCKWOOD captures the essence of Nilgiris and Wayanad in every cup, delivering a delightful blend of bright strength and regional character.', // Verified
    theme: 'rockwood',
    themeAccent: '#818cf8',
    themeGlow: 'rgba(129, 140, 248, 0.4)',
    themeBg: '#0b0e1b',

    elevation: { value: '3,000 - 4,500 ft', verified: false, todoNotice: 'TODO: Verify elevation' },
    tastingNotes: { value: ['Floral', 'Bright', 'Crisp Nilgiri Aroma', 'Citrus undertones'], verified: false, todoNotice: 'TODO: Verify tasting notes' },
    aroma: { value: 'Sweet floral with fresh mountain pine notes', verified: false, todoNotice: 'TODO: Verify aroma' },
    strength: { value: 'Strong', verified: false, todoNotice: 'TODO: Verify strength' },
    leafType: { value: 'Orthodox BOP', verified: false, todoNotice: 'TODO: Verify leaf grade' },
    liquorColor: { value: 'Deep Amber Ruby', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'High', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '95°C - 100°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '3 - 5 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '2.5g (1 tsp)', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 cup (200ml)', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      '100% Single Origin from Nilgiri-Wayanad',
      'Processed at heritage Sussex Factory',
      'Rich in natural mountain antioxidants',
      'Direct from garden to cup freshness',
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 38,
    bestseller: true,
  },
  {
    id: '17', // Original site ID
    slug: 'talayar-single-origin-black-tea',
    name: 'TALAYAR Single Origin Black Tea',
    subtitle: 'From the high-altitude Munnar Hills',
    category: 'single-origin-black-tea',
    categoryName: 'Single Origin Black Tea',
    price: 325,
    weight: '250g',
    image: '/images/1.webp',
    region: 'Munnar Hills, Kerala', // Verified
    description:
      'TALAYAR Single Origin Tea originates from the Munnar Hills, spanning elevations from 3,500 to 6,000 feet above sea level. BRIAR Group proudly presents a high-grown Single Origin Tea, characterized by a balanced profile with a hint of floral notes and reddish hues. Crafted from select leaves cultivated on our highest mountain slopes, this tea reflects the pure, untamed beauty of Munnar.', // Verified
    theme: 'talayar',
    themeAccent: '#ea580c',
    themeGlow: 'rgba(234, 88, 12, 0.4)',
    themeBg: '#190a07',

    elevation: { value: '3,500 - 6,000 ft', verified: false, todoNotice: 'TODO: Verify elevation bounds' },
    tastingNotes: { value: ['Mellow floral', 'Reddish hues', 'Subtle briskness', 'Golden liquor'], verified: false, todoNotice: 'TODO: Verify tasting notes' },
    aroma: { value: 'Subtle orchid and misty morning tea dew', verified: false, todoNotice: 'TODO: Verify aroma' },
    strength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify strength' },
    leafType: { value: 'High Grown Orthodox', verified: false, todoNotice: 'TODO: Verify leaf grade' },
    liquorColor: { value: 'Bright Reddish Copper', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '90°C - 95°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '4 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '2.5g (1 tsp)', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 cup (200ml)', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      'High-grown tea from 6,000 ft slopes',
      'Distinctive reddish-golden cup profile',
      'Delicate floral character without bitterness',
      'Pure single estate harvest',
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 29,
    bestseller: true,
  },
  {
    id: '18', // Original site ID
    slug: 'rockwood-misty-black-single-origin-whole-leaf-tea',
    name: 'ROCKWOOD Misty Black Whole Leaf Tea',
    subtitle: '100% Unbroken Whole Leaf Specialty Tea',
    category: 'single-origin-whole-leaf-specialty-tea',
    categoryName: 'Single Origin Whole Leaf Specialty Tea',
    price: 325,
    weight: '100g',
    image: '/images/6.webp',
    region: 'Nilgiris – Wayanad', // Verified
    description:
      'Rockwood Misty Black Tea - a Whole Leaf Specialty Tea with soothing floral notes and Nilgiri aroma. Crafted from the finest tea leaves at our Sussex Factory, it contains 100% unbroken-whole leaves, preserving the full flavour profile and essence. Innovative processing retains essential components like natural antioxidants.', // Verified
    theme: 'misty-black',
    themeAccent: '#d97706',
    themeGlow: 'rgba(217, 119, 6, 0.4)',
    themeBg: '#120b08',

    elevation: { value: '4,000 ft', verified: false, todoNotice: 'TODO: Verify elevation' },
    tastingNotes: { value: ['Smooth velvet', 'Wild orchid', 'Honeyed amber', 'Zero bitterness'], verified: false, todoNotice: 'TODO: Verify tasting notes' },
    aroma: { value: 'Deep sweet muscatel and floral bouquet', verified: false, todoNotice: 'TODO: Verify aroma' },
    strength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify strength' },
    leafType: { value: '100% Unbroken Whole Leaf', verified: false, todoNotice: 'TODO: Verify whole leaf designation' },
    liquorColor: { value: 'Warm Mahogany Amber', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'Medium', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '90°C - 95°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '4 - 5 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '2g (whole leaves)', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 teapot / cup', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      '100% Unbroken artisanal whole leaf',
      'High polyphenol & antioxidant preservation',
      'Multiple infusions possible (up to 3 steeps)',
      'Delicate, nuanced, gourmet liquor',
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 22,
    bestseller: false,
  },
  {
    id: '19', // Original site ID
    slug: 'rockwood-misty-green-single-origin-whole-leaf-tea',
    name: 'ROCKWOOD Misty Green Whole Leaf Tea',
    subtitle: '100% Unbroken Green Whole Leaf Specialty Tea',
    category: 'single-origin-whole-leaf-specialty-tea',
    categoryName: 'Single Origin Whole Leaf Specialty Tea',
    price: 325,
    weight: '100g',
    image: '/images/5.webp',
    region: 'Nilgiris – Wayanad', // Verified
    description:
      'Rockwood Misty Green Tea - a Whole Leaf Specialty Tea with soothing floral notes and Nilgiri aroma. Crafted from the finest tea leaves at our Sussex Factory, it contains 100% unbroken-whole leaves, preserving the full flavour profile and essence. Innovative processing retains essential components like catechins and natural antioxidants.', // Verified
    theme: 'misty-green',
    themeAccent: '#34d399',
    themeGlow: 'rgba(52, 211, 153, 0.4)',
    themeBg: '#06160e',

    elevation: { value: '4,000 ft', verified: false, todoNotice: 'TODO: Verify elevation' },
    tastingNotes: { value: ['Fresh sweet grass', 'Toasted seaweed', 'Jasmine blossom', 'Naturally sweet'], verified: false, todoNotice: 'TODO: Verify tasting notes' },
    aroma: { value: 'Subtle fresh mountain meadows after morning rain', verified: false, todoNotice: 'TODO: Verify aroma' },
    strength: { value: 'Mellow', verified: false, todoNotice: 'TODO: Verify strength' },
    leafType: { value: 'Pan-Steamed Whole Green Leaf', verified: false, todoNotice: 'TODO: Verify green leaf technique' },
    liquorColor: { value: 'Luminous Jade Green', verified: false, todoNotice: 'TODO: Verify liquor color' },
    caffeineStrength: { value: 'Low', verified: false, todoNotice: 'TODO: Verify caffeine level' },

    brewingGuide: {
      temp: { value: '80°C - 85°C', verified: false, todoNotice: 'TODO: Confirm brewing temp' },
      time: { value: '2 - 3 mins', verified: false, todoNotice: 'TODO: Confirm steep time' },
      amount: { value: '2g', verified: false, todoNotice: 'TODO: Confirm amount' },
      cups: { value: '1 cup (200ml)', verified: false, todoNotice: 'TODO: Confirm volume' },
    },
    features: [
      'Gentle non-bitter green tea profile',
      'Rich in active EGCG catechins & polyphenols',
      '100% whole leaf carefully hand-selected',
      'Refreshing revitalizing morning and midday brew',
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 31,
    bestseller: false,
  },
];

export const heroSlides = [
  {
    id: 1,
    image: '/images/hero-1.webp',
    tag: 'HERITAGE SINCE 1928',
    title: 'Single Origin Saga',
    subtitle: 'Direct from our 23,000-acre lush South Indian tea gardens straight to your cup.',
    ctaText: 'Discover Our Teas',
    ctaLink: '/product-category',
  },
  {
    id: 2,
    image: '/images/hero-2.webp',
    tag: 'PURE & UNBLENDED',
    title: 'Know Exactly Where Your Tea Comes From',
    subtitle: 'Cultivated in high-altitude slopes of Anaimalai, Munnar, Meghamalai, and Nilgiris.',
    ctaText: 'Explore Single Origin',
    ctaLink: '/about',
  },
  {
    id: 3,
    image: '/images/hero-3.webp',
    tag: 'SPECIALTY CRAFT',
    title: '100% Unbroken Whole Leaf Specialty Teas',
    subtitle: 'Hand-picked tender buds and leaves preserving the complete mountain aroma.',
    ctaText: 'Shop Whole Leaf',
    ctaLink: '/product-category?category=single-origin-whole-leaf-specialty-tea',
  },
  {
    id: 4,
    image: '/images/hero-4.webp',
    tag: 'FRESH FROM FACTORY',
    title: 'Tea with Integrity & Provenance',
    subtitle: 'Zero middle-men. Vacuum packed at our own estate factories within hours of plucking.',
    ctaText: 'Our Infrastructure',
    ctaLink: '/infrastructure',
  },
  {
    id: 5,
    image: '/images/hero-5.webp',
    tag: 'SUSTAINABLE LUXURY',
    title: 'Plastic & Climate Neutral Estate Living',
    subtitle: 'Nurtured by 8,800 dedicated tea artisans across southern mountain sanctuaries.',
    ctaText: 'Read Our Story',
    ctaLink: '/about',
  },
];

export const estatesData = [
  {
    id: 'anaimalai',
    name: 'Anaimalai Hills (Valparai)',
    elevation: '3,000 – 5,000 ft',
    description: 'Pristine rainforest mountain corridor where Malanad tea gets its distinct biscuity aroma from consistent cloud cover and nutrient-rich soil.',
    tea: 'Malanad Single Origin Black Tea',
    image: '/images/BRIAR-MALANAD-TEA-COLOUR-SINGLE-ORIGIN-TEA_Anaimalai-Valparai.png',
    slug: 'malanad-single-origin-black-tea',
  },
  {
    id: 'munnar',
    name: 'Talayar / Munnar Hills',
    elevation: '3,500 – 6,000 ft',
    description: 'Perched in the breathtaking peaks of Munnar, Talayar produces brisk, high-grown golden teas celebrated for balanced floral subtleties.',
    tea: 'Talayar Single Origin Black Tea',
    image: '/images/BRIAR-TALAYAR-TEA-COLOUR-SINGLE-ORIGIN-TEA_Munnar.png',
    slug: 'talayar-single-origin-black-tea',
  },
  {
    id: 'meghamalai',
    name: 'Meghamalai (Cloud Mountain)',
    elevation: 'Up to 6,300 ft',
    description: 'Briar is the exclusive tea cultivator in this mystical biosphere where clouds meet mountaintops, yielding rare, highly coveted harvests.',
    tea: 'Megamalai Single Origin Black Tea',
    image: '/images/BRIAR-MEGAMALAI-TEA_Colour-SINGLE-ORIGIN-TEA_Meghamalai.png',
    slug: 'megamalai-single-origin-black-tea',
  },
  {
    id: 'nilgiris',
    name: 'Nilgiri – Wayanad Range',
    elevation: '4,000 ft',
    description: 'Bordering the blue mountains and the Noolpuzha river, home to our historic Sussex factory producing Rockwood and Misty Whole Leaf specialties.',
    tea: 'Rockwood Single Origin & Misty Leaf',
    image: '/images/BRIAR-ROCKWOOD-TEA-COLOUR-SINGLE-ORIGIN-TEA_Nilgiri-Wayanad.png',
    slug: 'rockwood-single-origin-black-tea',
  },
];

export const customerReviews: Review[] = [
  {
    id: 'r1',
    author: 'Rajiv Mehra',
    location: 'Bengaluru',
    tea: 'Rockwood Single Origin Black Tea',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The aroma when you open the pack is unbelievable. You can taste the freshness immediately—completely different from store-bought blended dust teas. Rich, fragrant, and smooth.',
  },
  {
    id: 'r2',
    author: 'Ananya Deshmukh',
    location: 'Mumbai',
    tea: 'Rockwood Misty Green Whole Leaf',
    rating: 5,
    date: '1 month ago',
    comment: 'Finding a green tea that does not taste bitter when steeped was almost impossible until I tried Briar Misty Green. The whole leaves unfurl gracefully in the cup.',
  },
  {
    id: 'r3',
    author: 'Dr. K. S. Raman',
    location: 'Chennai',
    tea: 'Malanad Single Origin Black Tea',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Reminds me of my childhood visits to Valparai plantations. That distinct biscuity, malty note is unmistakable. Makes the most comforting morning cup with a splash of milk.',
  },
  {
    id: 'r4',
    author: 'Sunil Varghese',
    location: 'Kochi',
    tea: 'Talayar Single Origin Black Tea',
    rating: 5,
    date: '1 month ago',
    comment: 'Golden liquor with delicate floral hints. High-grown Munnar tea at its best. Prompt shipping and beautiful packaging.',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What does “Single Origin” mean?',
    answer: 'Single Origin means that every single tea leaf inside your package comes exclusively from one specific plantation estate, without being mixed or blended with lower-grade teas from multiple sources. This preserves the pure terroir, elevation, and distinct microclimate character of that single mountain garden.',
  },
  {
    question: 'How is this different from regular teas sold in stores?',
    answer: 'Most supermarket brands blend teas from dozens of different auctions, countries, and harvest years to minimize costs and standardize a generic taste. In contrast, BRIAR teas are harvested from our own estate gardens and packed fresh at our own factories, guaranteeing unadulterated freshness and purity.',
  },
  {
    question: 'Why is freshness so important?',
    answer: 'Tea is an agricultural produce packed with delicate volatile oils, aroma compounds, and polyphenols. Over months on wholesale shelves, commercial teas oxidize and lose their vitality. Our direct garden-to-doorstep model delivers tea within weeks of plucking, retaining full antioxidant potency.',
  },
  {
    question: 'Are your teas organic and sustainably grown?',
    answer: 'The BRIAR Group takes immense pride in sustainable agricultural stewardship across our 23,000 acres. We practice largely biological and natural pest control methods across our gardens, protecting forest wildlife corridors, and maintaining fair housing and healthcare for over 8,800 estate workers.',
  },
  {
    question: 'Do you use your own tea leaves?',
    answer: 'Yes, 100%. We cultivate, pluck, wither, ferment, and pack all teas in our own 7 state-of-the-art factories (including Sussex, Talliar, Injipara, and Venniar). We never buy third-party auction dust or repackage external tea.',
  },
];
