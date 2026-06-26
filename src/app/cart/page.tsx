"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, itemCount, setQuantity, removeItem, clearCart } =
    useCart();
  const [placed, setPlaced] = useState(false);

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 9;
  const total = subtotal + shipping;

  if (placed) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <div className="text-5xl">🎉</div>
        <h1 className="mt-6 text-3xl font-bold">Order confirmed!</h1>
        <p className="mt-3 text-foreground/60">
          Thanks for shopping with Arora. A confirmation email is on its way.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <div className="text-5xl">🛒</div>
        <h1 className="mt-6 text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 text-foreground/60">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/#products"
          className="mt-8 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Browse products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Your cart
        <span className="ml-2 text-lg font-normal text-foreground/50">
          ({itemCount} item{itemCount > 1 ? "s" : ""})
        </span>
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-4">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <Link
                href={`/products/${product.id}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link
                      href={`/products/${product.id}`}
                      className="font-semibold transition-colors hover:text-indigo-600"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-foreground/60">{product.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-sm text-foreground/50 transition-colors hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-black/10 dark:border-white/15">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      className="px-3 py-1 text-lg leading-none transition-colors hover:text-indigo-600"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      className="px-3 py-1 text-lg leading-none transition-colors hover:text-indigo-600"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-semibold">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              </div>
            </li>
          ))}

          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-foreground/50 transition-colors hover:text-red-500"
          >
            Clear cart
          </button>
        </ul>

        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-foreground/60">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-foreground/60">Shipping</dt>
              <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-black/10 pt-3 text-base font-semibold dark:border-white/10">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={() => {
              clearCart();
              setPlaced(true);
            }}
            className="mt-6 w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Checkout
          </button>
          <p className="mt-3 text-center text-xs text-foreground/50">
            Secure checkout · Demo only, no real payment
          </p>
        </aside>
      </div>
    </main>
  );
}
