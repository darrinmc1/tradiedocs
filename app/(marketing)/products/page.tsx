import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { ALL_PRODUCTS } from "@/data/products"
import { ComingSoonCta } from "@/components/coming-soon-cta"
import { Disclaimer } from "@/components/disclaimer"
import { Check } from "lucide-react"

export const metadata = {
  title: `Templates | ${siteConfig.name}`,
  description:
    "SWMS, quote, invoice, and compliance template packs for Australian tradies. Checkout is coming soon — join the waitlist.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Template packs</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Priced packs for when checkout is live. Nothing here is for sale yet —
            use Notify me if you want an email when a pack is available.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ALL_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-4xl" aria-hidden="true">
                  {product.emoji}
                </span>
                <span className="shrink-0 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-400">
                  Coming soon
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-sm text-slate-400 flex-1 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-extrabold text-white mb-4">
                ${product.price}
                <span className="ml-1 text-sm font-normal text-slate-500">one-time</span>
              </p>
              <ComingSoonCta
                price={product.price}
                productId={product.id}
                source={`product-waitlist-${product.id}`}
                layout="card"
              />
              <Link
                href={`/products/${product.id}`}
                className="mt-4 text-center text-sm text-slate-400 hover:text-orange-400 transition-colors"
              >
                View pack details
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Disclaimer variant="full" />
        </div>
      </div>
    </div>
  )
}
