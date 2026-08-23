import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const metadata = {
  title: `Templates | ${siteConfig.name}`,
  description: "Browse our collection of free and premium templates.",
}

const products = [
  {
    id: 1,
    name: "Starter Blog Template",
    description: "A clean, minimal blog template perfect for getting started.",
    price: 0,
    category: "Blog",
    href: "/products/starter-blog",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Pro SaaS Dashboard",
    description: "Full-featured SaaS dashboard with analytics, billing, and user management.",
    price: 49,
    category: "SaaS",
    href: "/products/pro-saas-dashboard",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Portfolio Showcase",
    description: "Elegant portfolio template to showcase your work and skills.",
    price: 0,
    category: "Portfolio",
    href: "/products/portfolio-showcase",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "E-Commerce Storefront",
    description: "Complete e-commerce solution with cart, checkout, and product pages.",
    price: 79,
    category: "E-Commerce",
    href: "/products/ecommerce-storefront",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Landing Page Kit",
    description: "High-converting landing page components and layouts.",
    price: 29,
    category: "Marketing",
    href: "/products/landing-page-kit",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Documentation Site",
    description: "Clean documentation template with search and versioning support.",
    price: 0,
    category: "Docs",
    href: "/products/documentation-site",
    image: "/placeholder.svg",
  },
]

export default function ProductsPage() {
  const freeProducts = products.filter((p) => p.price === 0)
  const paidProducts = products.filter((p) => p.price > 0)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Templates</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Choose from our collection of free and premium templates. Free templates are yours to use immediately — no
          account required.
        </p>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 ring-2 ring-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-300 dark:ring-emerald-600">
              FREE
            </span>
            <span className="text-sm text-muted-foreground">No cost, download instantly</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-800 ring-2 ring-violet-400 dark:bg-violet-900/40 dark:text-violet-300 dark:ring-violet-600">
              PAID
            </span>
            <span className="text-sm text-muted-foreground">One-time purchase</span>
          </div>
        </div>
      </div>

      {/* Filter summary */}
      <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
        <span>
          <strong className="text-foreground">{products.length}</strong> templates total
        </span>
        <span className="text-border">|</span>
        <span>
          <strong className="text-emerald-600 dark:text-emerald-400">{freeProducts.length}</strong> free
        </span>
        <span className="text-border">|</span>
        <span>
          <strong className="text-violet-600 dark:text-violet-400">{paidProducts.length}</strong> paid
        </span>
      </div>

      {/* Free Templates Section */}
      <section className="mb-16">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-2xl font-bold">Free Templates</h2>
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 ring-2 ring-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-300 dark:ring-emerald-600">
            FREE
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freeProducts.map((product) => (
            <TemplateCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Paid Templates Section */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-2xl font-bold">Premium Templates</h2>
          <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-800 ring-2 ring-violet-400 dark:bg-violet-900/40 dark:text-violet-300 dark:ring-violet-600">
            PAID
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paidProducts.map((product) => (
            <TemplateCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

function TemplateCard({ product }: { product: (typeof products)[number] }) {
  const isFree = product.price === 0

  return (
    <Card
      className={[
        "group relative flex flex-col overflow-hidden transition-shadow hover:shadow-lg",
        isFree
          ? "ring-2 ring-emerald-300 dark:ring-emerald-700"
          : "ring-2 ring-violet-300 dark:ring-violet-700",
      ].join(" ")}
    >
      {/* Prominent top banner */}
      <div
        className={[
          "flex items-center justify-between px-4 py-2 text-sm font-bold tracking-wide",
          isFree
            ? "bg-emerald-500 text-white dark:bg-emerald-600"
            : "bg-violet-600 text-white dark:bg-violet-700",
        ].join(" ")}
      >
        <span>{isFree ? "✓ FREE" : "★ PREMIUM"}</span>
        <span>{isFree ? "No cost" : `$${product.price}`}</span>
      </div>

      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <div className="flex h-full items-center justify-center text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Floating badge on image */}
        <div className="absolute left-3 top-3">
          <span
            className={[
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shadow",
              isFree
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                : "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
            ].join(" ")}
          >
            {product.category}
          </span>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{product.name}</h3>
          {/* Price badge */}
          <span
            className={[
              "shrink-0 rounded-full px-2.5 py-0.5 text-sm font-bold",
              isFree
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                : "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300",
            ].join(" ")}
          >
            {isFree ? "Free" : `$${product.price}`}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={product.href} className="w-full">
          <Button
            className={[
              "w-full font-semibold",
              isFree
                ? "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                : "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500",
            ].join(" ")}
          >
            {isFree ? "Get for Free" : `Buy for $${product.price}`}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
