import { PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata = {
  title: `Document Templates | ${siteConfig.name}`,
  description: "Professional document templates for Australian tradies. Quotes, invoices, contracts, safety docs and more — ready to use instantly.",
}

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tradie Document Templates",
  description: "Professional document templates for Australian tradies",
  url: `${siteConfig.url}/products`,
  itemListElement: PRODUCTS.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      url: `${siteConfig.url}/products/${product.id}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: product.price ? String(product.price / 100) : "0",
        availability: "https://schema.org/InStock",
      },
    },
  })),
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Document Templates
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional, ready-to-use document templates built specifically for Australian tradies. Save time and look more professional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="glass-card rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-all group"
              >
                {product.category && (
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3">
                    {product.category}
                  </span>
                )}
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {product.name}
                </h2>
                <p className="text-slate-400 text-sm flex-1 mb-4 line-clamp-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    {product.price === 0 ? "Free" : product.price ? `$${(product.price / 100).toFixed(2)}` : "Included"}
                  </span>
                  <span className="text-slate-500 group-hover:text-orange-400 transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
