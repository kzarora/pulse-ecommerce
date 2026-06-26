"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function AddToCartButton({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:scale-[0.98] ${className}`}
    >
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
