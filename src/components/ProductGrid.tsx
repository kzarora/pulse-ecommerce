"use client";

import { useState } from "react";
import { categories, products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "bg-foreground text-background"
                : "border border-black/10 text-foreground/70 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
