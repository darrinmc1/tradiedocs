import { notFound } from "next/navigation"
import { PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id)
  if (!product) return {}
  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id)
  if (!product) notFound()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: `${siteConfig.url}/products/${product.id}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "AUD",
      price: product.price ? String(product.price / 100) : "0",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.id}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    category: product.category || "Business Document Template",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/products" className="text-slate-400 hover:text-white text-sm transition-colors">
              ← Back to Products
            </Link>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="flex-1">
                {product.category && (
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3 block">
                    {product.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-slate-400 text-lg leading-relaxed">{product.description}</p>
              </div>
              <div className="md:text-right">
                {product.price !== undefined && (
                  <div className="text-3xl font-bold text-white mb-4">
                    {product.price === 0 ? "Free" : `$${(product.price / 100).toFixed(2)}`}
                    <span className="text-slate-400 text-sm font-normal ml-1">AUD</span>
                  </div>
                )}
                <Link
                  href={`/sign-up`}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all"
                >
                  Get This Template
                </Link>
              </div>
            </div>
            {product.features && product.features.length > 0 && (
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-bold text-white mb-4">What&apos;s Included</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-orange-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
