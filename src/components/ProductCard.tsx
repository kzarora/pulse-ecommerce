import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5">
      <Link href={`/products/${product.id}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between text-xs text-foreground/50">
          <span>{product.category}</span>
          <span className="flex items-center gap-1">
            <span className="text-amber-500">★</span>
            {product.rating}
          </span>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-2 font-semibold leading-tight transition-colors hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-foreground/60">{product.tagline}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <AddToCartButton product={product} className="px-4 py-2" />
        </div>
      </div>
    </div>
  );
}
