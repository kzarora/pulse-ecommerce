export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "arora-aero-headphones",
    name: "Arora Aero Headphones",
    tagline: "Studio-grade wireless sound",
    description:
      "Immerse yourself in adaptive noise cancellation, 40-hour battery life, and plush memory-foam ear cushions engineered for all-day comfort.",
    price: 249,
    category: "Audio",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    badge: "Bestseller",
  },
  {
    id: "arora-glide-watch",
    name: "Arora Glide Smartwatch",
    tagline: "Health insights on your wrist",
    description:
      "Track heart rate, sleep, and workouts with a vivid AMOLED display, GPS, and a sleek titanium body that lasts up to 7 days per charge.",
    price: 329,
    category: "Wearables",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    badge: "New",
  },
  {
    id: "arora-charge-stand",
    name: "Arora Charge Stand",
    tagline: "3-in-1 wireless charging",
    description:
      "Power your phone, watch, and earbuds at once with fast 15W charging and a minimalist aluminium frame that fits any desk.",
    price: 79,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "arora-buds-pro",
    name: "Arora Buds Pro",
    tagline: "Crystal-clear earbuds",
    description:
      "Compact earbuds with spatial audio, sweat resistance, and a wireless charging case that delivers 28 hours of total playtime.",
    price: 159,
    category: "Audio",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "arora-flex-speaker",
    name: "Arora Flex Speaker",
    tagline: "Room-filling 360° audio",
    description:
      "A portable speaker with deep bass, IP67 waterproofing, and 24-hour battery life for music that goes everywhere you do.",
    price: 129,
    category: "Audio",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
    badge: "Popular",
  },
  {
    id: "arora-vision-camera",
    name: "Arora Vision Camera",
    tagline: "4K pocket cinematography",
    description:
      "Capture lifelike 4K60 footage with a built-in 3-axis gimbal, AI subject tracking, and a flip-up touchscreen for effortless vlogging.",
    price: 449,
    category: "Cameras",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "arora-keys-mechanical",
    name: "Arora Keys Mechanical",
    tagline: "Tactile low-profile keyboard",
    description:
      "A wireless mechanical keyboard with hot-swappable switches, per-key RGB, and a machined aluminium deck built for speed.",
    price: 139,
    category: "Accessories",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "arora-go-backpack",
    name: "Arora Go Backpack",
    tagline: "Tech-ready everyday carry",
    description:
      "A weather-resistant backpack with a padded 16-inch laptop sleeve, USB-C passthrough, and modular pockets for all your gear.",
    price: 99,
    category: "Lifestyle",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))),
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}
