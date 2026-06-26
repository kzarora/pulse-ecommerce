"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
            A
          </span>
          <span className="text-lg tracking-tight">Arora</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 sm:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/#products" className="transition-colors hover:text-foreground">
            Shop
          </Link>
          <Link href="/#features" className="transition-colors hover:text-foreground">
            Features
          </Link>
        </nav>

        <Link
          href="/cart"
          className="relative inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="hidden sm:inline">Cart</span>
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
