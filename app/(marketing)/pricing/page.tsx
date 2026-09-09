import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, one-time pricing for tradie document templates. No subscriptions, no hidden fees. Pay once, use forever.",
}

const packs = [
  {
    name: "Starter Pack",
    slug: "starter-pack",
    price: 27,
    originalPrice: null,
    description: "Essential documents to get your trade business looking professional from day one.",
    highlight: false,
    badge: null,
    formats: ["Word (.docx)", "PDF"],
    includes: [
      "Professional Invoice Template",
      "Basic Quote Template",
      "Payment Receipt",
      "Simple Job Sheet",
      "Email follow-up script",
    ],
    notIncluded: [
      "Contract & Terms of Trade",
      "Variation Order Form",
      "Subcontractor Agreement",
      "Safety & Compliance Docs",
      "Customisation guide",
    ],
  },
  {
    name: "Professional Pack",
    slug: "professional-pack",
    price: 47,
    originalPrice: null,
    description: "The complete toolkit for tradies who want to win more jobs and get paid faster.",
    highlight: true,
    badge: "Most Popular",
    formats: ["Word (.docx)", "PDF", "Google Docs"],
    includes: [
      "Professional Invoice Template",
      "Detailed Quote Template",
      "Payment Receipt",
      "Job Sheet & Completion Report",
      "Contract & Terms of Trade",
      "Variation Order Form",
      "Email follow-up scripts (3)",
      "Customisation guide",
    ],
    notIncluded: [
      "Subcontractor Agreement",
      "Safety & Compliance Docs",
    ],
  },
  {
    name: "Complete Bundle",
    slug: "complete-bundle",
    price: 67,
    originalPrice: 97,
    description: "Every template we offer. Built for established tradies running a serious operation.",
    highlight: false,
    badge: "Best Value",
    formats: ["Word (.docx)", "PDF", "Google Docs", "Excel (.xlsx)"],
    includes: [
      "Everything in Professional Pack",
      "Subcontractor Agreement",
      "SWMS / Safety Method Statement",
      "Site Induction Checklist",
      "Defects Liability Notice",
      "Progress Claim Template",
      "All future template updates",
      "Priority email support",
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: "Is this a one-time payment?",
    a: "Yes. You pay once and own the templates forever. No subscriptions, no renewals, no surprises.",
  },
  {
    q: "What file formats are included?",
    a: "Depending on the pack, you get Word (.docx), PDF, Google Docs links, and Excel (.xlsx) versions. Every format is editable so you can add your logo and details.",
  },
  {
    q: "Can I edit the templates myself?",
    a: "Absolutely. All templates are fully editable. The Professional and Complete packs include a step-by-step customisation guide.",
  },
  {
    q: "Do these work for all trades?",
    a: "Yes. The templates are written in plain language and work for electricians, plumbers, builders, landscapers, painters, and any other trade.",
  },
  {
    q: "What if I need a template that isn't listed?",
    a: "Reach out via the contact page. We regularly add new templates and Complete Bundle customers get all future additions free.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Pricing</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            One-time price. Use forever.
          </h1>
          <p className="text-lg text-gray-600">
            No subscriptions. No lock-in. Just professional tradie documents you own outright.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packs.map((pack) => (
              <div
                key={pack.slug}
                className={`rounded-2xl border ${
                  pack.highlight
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-500"
                    : "border-gray-200 shadow-sm"
                } bg-white overflow-hidden flex flex-col`}
              >
                {/* Card Header */}
                <div className={`px-6 pt-6 pb-4 ${ pack.highlight ? "bg-blue-50" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{pack.name}</h2>
                    {pack.badge && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        pack.highlight ? "bg-blue-600 text-white" : "bg-amber-100 text-amber-800"
                      }`}>
                        {pack.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{pack.description}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-gray-900">${pack.price}</span>
                    {pack.originalPrice && (
                      <span className="text-lg text-gray-400 line-through mb-1">${pack.originalPrice}</span>
                    )}
                    <span className="text-sm text-gray-500 mb-1">AUD, one-time</span>
                  </div>
                </div>

                {/* File Formats */}
                <div className="px-6 py-3 bg-gray-50 border-t border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">File formats</p>
                  <div className="flex flex-wrap gap-2">
                    {pack.formats.map((fmt) => (
                      <span key={fmt} className="text-xs bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div className="px-6 py-4 flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What&apos;s included</p>
                  <ul className="space-y-2 mb-4">
                    {pack.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pack.notIncluded.length > 0 && (
                    <ul className="space-y-2">
                      {pack.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href={`/products/${pack.slug}`}
                    className={`block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                      pack.highlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get {pack.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All purchases include instant download. Secure checkout via Stripe.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Compare packs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-6 font-semibold text-gray-700 w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Starter<br /><span className="font-normal text-gray-500">$27</span></th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-t-lg">Professional<br /><span className="font-normal text-blue-500">$47</span></th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Complete<br /><span className="font-normal text-gray-500">$67</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Invoice Template", true, true, true],
                  ["Quote Template", true, true, true],
                  ["Payment Receipt", true, true, true],
                  ["Job Sheet", true, true, true],
                  ["Contract & Terms of Trade", false, true, true],
                  ["Variation Order Form", false, true, true],
                  ["Subcontractor Agreement", false, false, true],
                  ["SWMS / Safety Docs", false, false, true],
                  ["Progress Claim Template", false, false, true],
                  ["Google Docs format", false, true, true],
                  ["Excel format", false, false, true],
                  ["Customisation guide", false, true, true],
                  ["Future template updates", false, false, true],
                  ["Priority support", false, false, true],
                ].map(([feature, starter, pro, complete]) => (
                  <tr key={String(feature)} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-3 pr-6 text-gray-700">{String(feature)}</td>
                    <td className="text-center py-3 px-4">
                      {starter ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-4 bg-blue-50">
                      {pro ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {complete ? (
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure which pack is right for you?</h2>
          <p className="text-gray-400 mb-6">Most tradies start with the Professional Pack. It covers 95% of what you need day-to-day.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products/professional-pack"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Get Professional Pack — $47
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
