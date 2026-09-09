import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Products | ${siteConfig.name}`,
  description: "Browse all tradie document template packs. Professional invoices, quotes, contracts, and more — editable Word, PDF, and Google Docs formats.",
}

const products = [
  {
    slug: "starter-pack",
    name: "Starter Pack",
    price: 27,
    badge: null,
    tagline: "Get the basics right",
    description: "Four essential documents to make your trade business look professional from the very first job. Perfect if you're just starting out or want to tidy up your paperwork.",
    formats: ["Word (.docx)", "PDF"],
    templates: [
      { name: "Invoice Template", desc: "Itemised invoice with GST, payment terms, and bank details" },
      { name: "Quote Template", desc: "Clean quote layout with scope of works and validity period" },
      { name: "Payment Receipt", desc: "Confirm payments received and keep your records clean" },
      { name: "Job Sheet", desc: "Simple on-site job record for hours, materials, and sign-off" },
    ],
    bestFor: ["Solo tradies starting out", "Part-time or side-hustle operators", "Anyone replacing handwritten invoices"],
    color: "gray",
  },
  {
    slug: "professional-pack",
    name: "Professional Pack",
    price: 47,
    badge: "Most Popular",
    tagline: "Win more jobs, get paid faster",
    description: "The complete day-to-day toolkit for tradies running a proper business. Covers quoting, invoicing, contracts, and variations — everything you need to look the part and protect yourself.",
    formats: ["Word (.docx)", "PDF", "Google Docs"],
    templates: [
      { name: "Invoice Template", desc: "Itemised invoice with GST, payment terms, and bank details" },
      { name: "Detailed Quote Template", desc: "Multi-line quote with inclusions, exclusions, and T&Cs" },
      { name: "Payment Receipt", desc: "Confirm payments received and keep your records clean" },
      { name: "Job Sheet & Completion Report", desc: "Record work done, materials used, and get client sign-off" },
      { name: "Contract & Terms of Trade", desc: "Plain-English contract covering payment, disputes, and liability" },
      { name: "Variation Order Form", desc: "Document scope changes and get approval before doing extra work" },
      { name: "Email Follow-up Scripts (x3)", desc: "Overdue invoice, quote follow-up, and job completion emails" },
      { name: "Customisation Guide", desc: "Step-by-step instructions to add your logo, colours, and details" },
    ],
    bestFor: ["Established tradies", "Anyone who's been burned by scope creep", "Businesses wanting to look more professional"],
    color: "blue",
  },
  {
    slug: "complete-bundle",
    name: "Complete Bundle",
    price: 67,
    originalPrice: 97,
    badge: "Best Value",
    tagline: "Everything, for serious operators",
    description: "Every template we make, plus all future additions. Built for tradies running crews, taking on subcontractors, or working on larger commercial jobs where documentation really matters.",
    formats: ["Word (.docx)", "PDF", "Google Docs", "Excel (.xlsx)"],
    templates: [
      { name: "Everything in Professional Pack", desc: "All 8 templates from the Professional Pack included" },
      { name: "Subcontractor Agreement", desc: "Protect yourself when bringing on subbies — covers pay, liability, and IP" },
      { name: "SWMS Template", desc: "Safe Work Method Statement for high-risk construction work" },
      { name: "Site Induction Checklist", desc: "Onboard workers and visitors safely with a documented induction" },
      { name: "Defects Liability Notice", desc: "Formally notify clients of defects and your rectification process" },
      { name: "Progress Claim Template", desc: "Stage-based billing for larger projects with milestone tracking" },
      { name: "All Future Template Updates", desc: "New templates added to the bundle at no extra cost" },
      { name: "Priority Email Support", desc: "Get help customising your templates within 1 business day" },
    ],
    bestFor: ["Tradies with employees or subbies", "Those doing commercial or government work", "Anyone who wants the full set and future updates"],
    color: "amber",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Products</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Professional templates for every trade
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Editable Word, PDF, and Google Docs templates built specifically for Australian tradies. Buy once, use forever.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
          >
            Compare packs side-by-side →
          </Link>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {products.map((product, index) => (
            <div
              key={product.slug}
              id={product.slug}
              className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              {/* Product Header */}
              <div className={`px-8 py-6 border-b border-gray-100 ${
                product.color === "blue" ? "bg-blue-50" :
                product.color === "amber" ? "bg-amber-50" : "bg-gray-50"
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                      {product.badge && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          product.color === "blue" ? "bg-blue-600 text-white" :
                          product.color === "amber" ? "bg-amber-500 text-white" :
                          "bg-gray-700 text-white"
                        }`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{product.tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-end gap-2 justify-end">
                      <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
                      {"originalPrice" in product && product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through mb-0.5">${product.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">AUD · one-time payment</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Templates list */}
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">What&apos;s included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.templates.map((template) => (
                        <div key={template.name} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{template.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{template.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Formats */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">File formats</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.formats.map((fmt) => (
                          <span key={fmt} className="text-xs bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded font-medium">
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Best for */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Best for</h3>
                      <ul className="space-y-2">
                        {product.bestFor.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-0.5">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/products/${product.slug}`}
                      className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                        product.color === "blue"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Get {product.name} — ${product.price}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">Instant</p>
              <p className="text-sm text-gray-500">Download after purchase — no waiting</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">One-time</p>
              <p className="text-sm text-gray-500">Pay once, own the templates forever</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">Editable</p>
              <p className="text-sm text-gray-500">Add your logo and details in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Want to compare everything side by side?</p>
          <Link
            href="/pricing"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            View full pricing comparison
          </Link>
        </div>
      </section>
    </main>
  )
}
