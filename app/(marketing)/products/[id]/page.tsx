import { notFound } from "next/navigation"
import Link from "next/link"
import { PRODUCTS } from "@/data/products"
import { siteConfig } from "@/config/site.config"

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
      price: product.price ? (product.price / 100).toFixed(2) : "0",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.id}`,
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/products" className="text-sm text-slate-400 hover:text-white mb-8 inline-block">
          &larr; Back to Products
        </Link>
        <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
        <p className="text-slate-300 mb-8">{product.description}</p>
        {product.price && (
          <p className="text-2xl font-bold text-white mb-8">
            ${(product.price / 100).toFixed(2)} AUD
          </p>
        )}
        <Link
          href="/pricing"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Get Access
        </Link>
      </div>
    </>
  )
}
