import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/#products"
        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
      >
        ← Back to shop
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-black/5 bg-white dark:border-white/10 dark:bg-white/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium text-indigo-600">
            {product.category}
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/60">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-amber-500">
              {"★".repeat(Math.round(product.rating))}
              <span className="text-foreground/20">
                {"★".repeat(5 - Math.round(product.rating))}
              </span>
            </span>
            <span className="text-sm text-foreground/60">{product.rating} / 5</span>
          </div>

          <p className="mt-6 leading-relaxed text-foreground/80">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
            <AddToCartButton product={product} className="px-8 py-3" />
          </div>

          <ul className="mt-8 space-y-2 text-sm text-foreground/70">
            <li>✓ Free 2-day shipping</li>
            <li>✓ 2-year warranty included</li>
            <li>✓ 30-day money-back guarantee</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">You may also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-semibold">{item.name}</h3>
                <p className="text-sm text-foreground/60">
                  {formatPrice(item.price)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
