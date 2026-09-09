import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { ALL_PRODUCTS } from "@/data/products"
import { ComingSoonCta } from "@/components/coming-soon-cta"
import { Disclaimer } from "@/components/disclaimer"
import { Check } from "lucide-react"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description:
    "One-time prices for TradieDocs template packs. Checkout is not live — join the waitlist to be notified.",
}

const faqs = [
  {
    q: "Are these templates specific to Australian tradies?",
    a: "Yes. Packs are written for Australian conditions — including GST, ABN fields, and common trade terminology used across plumbing, electrical, building, and more. Confirm current WHS and tax rules with your state regulator and the ATO.",
  },
  {
    q: "Can I buy a pack today?",
    a: "Not yet. Checkout is not live and there is no downloadable file. Use Notify me on a pack to join the waitlist.",
  },
  {
    q: "Is this a subscription?",
    a: "No. When checkout opens, each pack is planned as a one-off payment — no recurring fee.",
  },
  {
    q: "What if I only need one or two templates?",
    a: "The Quote + Invoice Pack and SWMS Template Pack are sold separately. The Full Compliance Bundle is the combined option when checkout is live.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className={`${siteConfig.theme.heroGradient} py-16 px-4 text-center`}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Simple, one-time pack prices</span>
          </h1>
          <p className="text-lg text-slate-400">
            Same catalogue as the products page. Checkout is coming soon — no
            live purchase and no file download yet.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ALL_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col"
            >
              <h2 className="text-xl font-bold text-white mb-1">{product.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-white">${product.price}</span>
                <span className="text-sm text-slate-500 mb-1">one-time</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">{product.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-10">
        <Disclaimer variant="full" />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-white/10 pb-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
