import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";

const features = [
  {
    title: "Free 2-day shipping",
    description: "On every order over $50, delivered fast and tracked.",
    icon: "🚚",
  },
  {
    title: "2-year warranty",
    description: "Every Arora device is covered against defects.",
    icon: "🛡️",
  },
  {
    title: "30-day returns",
    description: "Not in love with it? Send it back, no questions asked.",
    icon: "↩️",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            New season drop is live
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Tech that keeps pace with your aura.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Premium audio, wearables, and accessories engineered for everyday
            life. Discover the gear designed to move with you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-white/90"
            >
              Shop the collection
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Why Arora
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured products</h2>
          <p className="mt-2 text-foreground/60">
            Hand-picked essentials, ready to ship today.
          </p>
        </div>
        <ProductGrid />
      </section>
    </main>
  );
}
