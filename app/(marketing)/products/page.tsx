import Link from "next/link"
import { PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: `Browse all document templates and resources for Australian tradies from ${siteConfig.name}.`,
}

export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} Products`,
    description: `Document templates and resources for Australian tradies`,
    url: `${siteConfig.url}/products`,
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.description,
      url: `${siteConfig.url}/products/${product.id}`,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        url: `${siteConfig.url}/products/${product.id}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "AUD",
          price: product.price ? (product.price / 100).toFixed(2) : "0",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Products</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional document templates and resources built for Australian tradies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all flex flex-col"
            >
              <h2 className="text-lg font-bold text-white mb-2">{product.name}</h2>
              <p className="text-slate-400 text-sm flex-1">{product.description}</p>
              {product.price && (
                <p className="text-orange-400 font-bold mt-4">
                  ${(product.price / 100).toFixed(2)} AUD
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
