import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Products & Templates | ${siteConfig.name}`,
  description: "Browse SWMS templates, quote packs, and compliance documents. Instant download, industry-ready, and fully editable.",
}

const products = [
  {
    id: "swms-bundle",
    name: "SWMS Template Bundle",
    category: "Safety",
    price: 49,
    originalPrice: 97,
    badge: "Best Value",
    badgeColor: "bg-green-100 text-green-800",
    description: "Complete set of Safe Work Method Statements covering the most common trade tasks. Pre-filled with hazards, controls, and legislative references.",
    includes: [
      "25 pre-built SWMS templates",
      "Editable Word & PDF formats",
      "Hazard identification checklists",
      "Risk control matrices",
      "Signature & sign-on pages",
      "Free updates for 12 months",
    ],
    downloads: 1842,
    href: "/checkout?product=swms-bundle",
    featured: true,
  },
  {
    id: "swms-single",
    name: "Single SWMS Template",
    category: "Safety",
    price: 9,
    originalPrice: null,
    badge: null,
    badgeColor: "",
    description: "One professionally written SWMS for a specific trade task. Ideal if you only need coverage for a single scope of work.",
    includes: [
      "1 SWMS template",
      "Editable Word & PDF formats",
      "Hazard & risk register included",
      "Compliant with Safe Work Australia",
    ],
    downloads: 3210,
    href: "/checkout?product=swms-single",
    featured: false,
  },
  {
    id: "quote-pack-starter",
    name: "Quote Pack — Starter",
    category: "Quoting",
    price: 29,
    originalPrice: null,
    badge: null,
    badgeColor: "",
    description: "Professional quote templates for small trades businesses. Covers common job types with itemised line items and terms.",
    includes: [
      "10 quote templates",
      "Editable Excel & Word formats",
      "GST-ready calculations",
      "Basic terms & conditions",
      "Your logo placeholder",
    ],
    downloads: 987,
    href: "/checkout?product=quote-pack-starter",
    featured: false,
  },
  {
    id: "quote-pack-pro",
    name: "Quote Pack — Pro",
    category: "Quoting",
    price: 59,
    originalPrice: 89,
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    description: "Everything in Starter plus advanced templates for larger jobs, variation orders, and progress claim invoices.",
    includes: [
      "25 quote & invoice templates",
      "Variation order forms",
      "Progress claim templates",
      "Retention tracking sheet",
      "Full terms & conditions",
      "Editable Excel, Word & PDF",
    ],
    downloads: 2104,
    href: "/checkout?product=quote-pack-pro",
    featured: true,
  },
  {
    id: "compliance-starter",
    name: "Compliance Doc Pack — Starter",
    category: "Compliance",
    price: 39,
    originalPrice: null,
    badge: null,
    badgeColor: "",
    description: "Core compliance documents every trade business needs. Covers inductions, site sign-in, and basic WHS policies.",
    includes: [
      "Site induction form",
      "Visitor & worker sign-in register",
      "WHS policy template",
      "Incident report form",
      "Toolbox talk record",
    ],
    downloads: 1456,
    href: "/checkout?product=compliance-starter",
    featured: false,
  },
  {
    id: "compliance-complete",
    name: "Compliance Doc Pack — Complete",
    category: "Compliance",
    price: 79,
    originalPrice: 129,
    badge: "Most Complete",
    badgeColor: "bg-purple-100 text-purple-800",
    description: "The full compliance library for trade contractors. Everything you need to satisfy principal contractors and pass site audits.",
    includes: [
      "Everything in Starter",
      "Subcontractor management pack",
      "Plant & equipment registers",
      "Chemical & SDS register",
      "Emergency response plan",
      "Monthly WHS inspection checklist",
      "ISO-aligned policy templates",
      "Free updates for 12 months",
    ],
    downloads: 891,
    href: "/checkout?product=compliance-complete",
    featured: true,
  },
]

const categories = ["All", "Safety", "Quoting", "Compliance"]

function DownloadBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-500">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {count.toLocaleString()} downloads
    </span>
  )
}

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Templates & Documents</p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Ready-to-use docs for trade businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professionally written SWMS templates, quote packs, and compliance documents. Download instantly, edit in Word or Excel, and get back to work.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Instant download
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Fully editable
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Compliant with Safe Work Australia
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              One-time payment
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category sections */}
        {["Safety", "Quoting", "Compliance"].map((category) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{category} Documents</h2>
              <span className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <div
                    key={product.id}
                    className={`relative rounded-2xl border ${
                      product.featured
                        ? "border-blue-200 shadow-md"
                        : "border-gray-200"
                    } bg-white p-6 flex flex-col`}
                  >
                    {product.badge && (
                      <span
                        className={`absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${product.badgeColor}`}
                      >
                        {product.badge}
                      </span>
                    )}

                    <div className="mb-4">
                      <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 pr-20">{product.name}</h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-5">{product.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {product.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg
                            className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">One-time payment · Instant download</p>
                        <div className="mt-1">
                          <DownloadBadge count={product.downloads} />
                        </div>
                      </div>
                      <Link
                        href={product.href}
                        className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          product.featured
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-900 text-white hover:bg-gray-700"
                        }`}
                      >
                        Buy now
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">10,000+</p>
              <p className="text-gray-600 text-sm">Documents downloaded by Australian tradies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">4.9 / 5</p>
              <p className="text-gray-600 text-sm">Average customer rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">100%</p>
              <p className="text-gray-600 text-sm">Money-back guarantee if not satisfied</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Are these templates compliant with Australian WHS laws?",
              a: "Yes. All SWMS and compliance documents are written to align with the Work Health and Safety Act 2011 and Safe Work Australia codes of practice. They are reviewed annually.",
            },
            {
              q: "What format do I receive the files in?",
              a: "Most templates come in both Microsoft Word (.docx) and PDF formats. Quote packs also include Excel (.xlsx) versions. You can edit them on any device.",
            },
            {
              q: "Is this a subscription or a one-time purchase?",
              a: "All products are a one-time payment. Bundles that include free updates will receive updated versions for 12 months at no extra cost.",
            },
            {
              q: "Can I use these for my whole team?",
              a: "Yes. Your purchase covers use across your entire business. You can share the files with your employees and subcontractors working under your ABN.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which pack is right for you?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Answer a few quick questions and we will recommend the right documents for your trade and business size.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a recommendation
          </Link>
        </div>
      </div>
    </div>
  )
}
