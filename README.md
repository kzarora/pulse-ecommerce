# Arora, Ecommerce Store

A modern, responsive ecommerce storefront built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- 🏠 Marketing landing page with hero, feature highlights, and product grid
- 🔎 Client-side category filtering
- 📦 Product detail pages (statically generated via `generateStaticParams`)
- 🛒 Shopping cart with quantity controls, persisted to `localStorage`
- 💳 Demo checkout flow with order summary (subtotal, shipping, total)
- 🌗 Dark mode support and fully responsive layout

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- React Context + `useReducer` for cart state

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build             |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: CartProvider, Navbar, Footer
│   ├── page.tsx            # Home page (hero + products)
│   ├── cart/page.tsx       # Cart & checkout
│   └── products/[id]/      # Product detail pages
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── AddToCartButton.tsx
├── context/
│   └── CartContext.tsx     # Cart state, actions, persistence
└── lib/
    └── products.ts         # Product catalog & helpers
```

> Note: Product images are loaded from Unsplash and configured in `next.config.ts`. Checkout is a demo only — no real payment is processed.
