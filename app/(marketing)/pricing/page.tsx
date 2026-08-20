import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. Compare free and paid options, individual templates, and bundle packs side-by-side.",
}

const freeVsPaidFeatures = [
  { feature: "Basic Quote Template", free: true, starter: true, pro: true },
  { feature: "Invoice Template", free: true, starter: true, pro: true },
  { feature: "Professional Formatting", free: false, starter: true, pro: true },
  { feature: "Editable in Word & Google Docs", free: false, starter: true, pro: true },
  { feature: "Multiple Trade Variations", free: false, starter: true, pro: true },
  { feature: "Job Sheet Templates", free: false, starter: true, pro: true },
  { feature: "Safety & SWMS Templates", free: false, starter: false, pro: true },
  { feature: "Contract Templates", free: false, starter: false, pro: true },
  { feature: "Variation & Change Order Forms", free: false, starter: false, pro: true },
  { feature: "Client Communication Templates", free: false, starter: false, pro: true },
  { feature: "Unlimited Downloads", free: false, starter: false, pro: true },
  { feature: "Priority Email Support", free: false, starter: false, pro: true },
]

const bundles = [
  {
    name: "Free Starter",
    price: "$0",
    period: "forever",
    description: "Get started with essential templates at no cost.",
    features: [
      "2 core templates included",
      "Basic quote template",
      "Basic invoice template",
      "PDF format",
    ],
    cta: "Download Free",
    ctaHref: "/templates?filter=free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Starter Bundle",
    price: "$29",
    period: "one-time",
    description: "Everything a sole trader needs to look professional from day one.",
    features: [
      "10 essential templates",
      "Quote & invoice templates",
      "Job sheet & checklist",
      "Word & Google Docs formats",
      "Multiple trade variations",
      "Free updates for 12 months",
    ],
    cta: "Get Starter Bundle",
    ctaHref: "/templates?bundle=starter",
    highlighted: false,
    badge: "Most Popular",
  },
  {
    name: "Pro Bundle",
    price: "$59",
    period: "one-time",
    description: "The complete toolkit for growing trade businesses.",
    features: [
      "25+ premium templates",
      "Everything in Starter",
      "Safety & SWMS templates",
      "Contract templates",
      "Variation & change order forms",
      "Client communication templates",
      "Unlimited downloads",
      "Priority email support",
      "Free updates for 24 months",
    ],
    cta: "Get Pro Bundle",
    ctaHref: "/templates?bundle=pro",
    highlighted: true,
    badge: "Best Value",
  },
]

const individualTemplates = [
  { name: "Quote Template", price: "$9", description: "Professional quote template with itemised pricing" },
  { name: "Invoice Template", price: "$9", description: "Tax invoice with payment terms and ABN fields" },
  { name: "Job Sheet", price: "$9", description: "Daily job sheet for tracking work and materials" },
  { name: "SWMS Template", price: "$15", description: "Safe Work Method Statement for high-risk work" },
  { name: "Subcontractor Agreement", price: "$19", description: "Simple subcontractor contract template" },
  { name: "Variation Form", price: "$9", description: "Document scope changes and additional costs" },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No subscriptions. No hidden fees. Pay once, use forever. Start free or grab a bundle and save.
          </p>
        </div>
      </section>

      {/* Bundle Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Choose Your Bundle</h2>
          <p className="text-gray-600 text-center mb-12">Bundles save you up to 70% compared to buying individually.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                  bundle.highlighted
                    ? "border-blue-600 shadow-xl"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {bundle.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                      bundle.highlighted
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    {bundle.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{bundle.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-gray-900">{bundle.price}</span>
                    <span className="text-gray-500 text-sm">{bundle.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{bundle.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {bundle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={bundle.ctaHref}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    bundle.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {bundle.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Compare Plans</h2>
          <p className="text-gray-600 text-center mb-10">See exactly what&apos;s included in each tier.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Starter<br /><span className="font-normal text-gray-500">$29</span></th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Pro<br /><span className="font-normal text-blue-400">$59</span></th>
                </tr>
              </thead>
              <tbody>
                {freeVsPaidFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-6 text-gray-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{row.free ? <CheckIcon /> : <CrossIcon />}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{row.starter ? <CheckIcon /> : <CrossIcon />}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{row.pro ? <CheckIcon /> : <CrossIcon />}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Templates */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Individual Templates</h2>
          <p className="text-gray-600 text-center mb-10">
            Only need one or two? Buy individual templates — or save more with a bundle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {individualTemplates.map((template) => (
              <div key={template.name} className="border border-gray-200 rounded-xl p-5 flex items-start justify-between gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-500">{template.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-lg font-bold text-gray-900">{template.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500 text-sm">
            💡 The Pro Bundle includes all of these and more for just $59 — saving you over $60.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is this a subscription?</h3>
              <p className="text-gray-600 text-sm">No. All purchases are one-time payments. You own the templates forever with no recurring fees.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What formats do I get?</h3>
              <p className="text-gray-600 text-sm">Paid templates come in Microsoft Word (.docx) and Google Docs format so you can edit them easily. Free templates are PDF only.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I customise the templates?</h3>
              <p className="text-gray-600 text-sm">Yes. All paid templates are fully editable. Add your logo, business name, ABN, and adjust any content to suit your trade.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What trades are covered?</h3>
              <p className="text-gray-600 text-sm">Templates are designed to work across all trades — electricians, plumbers, builders, carpenters, painters, landscapers, and more.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600 text-sm">Due to the digital nature of the products, we don&apos;t offer refunds after download. If you have an issue, contact us and we&apos;ll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to look more professional?</h2>
          <p className="text-gray-600 mb-8">Join thousands of tradies using our templates to win more jobs and get paid faster.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates?filter=free"
              className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
            >
              Start for Free
            </Link>
            <Link
              href="/templates?bundle=pro"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Get the Pro Bundle — $59
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
