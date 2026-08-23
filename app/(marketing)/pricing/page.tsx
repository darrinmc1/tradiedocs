import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. Get the exact paperwork you need — from free starter packs to complete business bundles.",
}

const plans = [
  {
    name: "Free Starter",
    price: "$0",
    period: "",
    description: "Essential templates to get you started with professional paperwork.",
    cta: "Download Free",
    ctaHref: "/templates?filter=free",
    highlight: false,
    features: [
      { label: "Basic Quote Template", included: true },
      { label: "Simple Invoice Template", included: true },
      { label: "1 Job Sheet Template", included: true },
      { label: "Email & PDF format", included: true },
      { label: "Editable in Word / Google Docs", included: true },
      { label: "Safety & SWMS Templates", included: false },
      { label: "Subcontractor Agreements", included: false },
      { label: "Variation & Change Order Forms", included: false },
      { label: "Client Contract Templates", included: false },
      { label: "Priority Email Support", included: false },
      { label: "Lifetime Updates", included: false },
    ],
  },
  {
    name: "Tradie Essentials",
    price: "$47",
    period: "one-off",
    description: "Everything a sole trader needs to run a professional operation.",
    cta: "Get Essentials Pack",
    ctaHref: "/products/tradie-essentials",
    highlight: false,
    features: [
      { label: "Basic Quote Template", included: true },
      { label: "Simple Invoice Template", included: true },
      { label: "1 Job Sheet Template", included: true },
      { label: "Email & PDF format", included: true },
      { label: "Editable in Word / Google Docs", included: true },
      { label: "Safety & SWMS Templates", included: true },
      { label: "Subcontractor Agreements", included: false },
      { label: "Variation & Change Order Forms", included: true },
      { label: "Client Contract Templates", included: false },
      { label: "Priority Email Support", included: false },
      { label: "Lifetime Updates", included: true },
    ],
  },
  {
    name: "Complete Business Bundle",
    price: "$97",
    period: "one-off",
    description: "The full toolkit for tradies running a serious business or small team.",
    cta: "Get Complete Bundle",
    ctaHref: "/products/complete-bundle",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Basic Quote Template", included: true },
      { label: "Simple Invoice Template", included: true },
      { label: "1 Job Sheet Template", included: true },
      { label: "Email & PDF format", included: true },
      { label: "Editable in Word / Google Docs", included: true },
      { label: "Safety & SWMS Templates", included: true },
      { label: "Subcontractor Agreements", included: true },
      { label: "Variation & Change Order Forms", included: true },
      { label: "Client Contract Templates", included: true },
      { label: "Priority Email Support", included: true },
      { label: "Lifetime Updates", included: true },
    ],
  },
]

const faqs = [
  {
    q: "Are these templates specific to Australian tradies?",
    a: "Yes. All templates are written for Australian conditions — including GST, ABN fields, and common trade terminology used across plumbing, electrical, building, and more.",
  },
  {
    q: "What format do I get the templates in?",
    a: "Templates come as editable Word (.docx) and Google Docs files, plus a PDF version for sending to clients. Just download, add your logo and details, and you're ready to go.",
  },
  {
    q: "Is this a subscription?",
    a: "No. All purchases are a one-off payment. You own the templates forever with no recurring fees.",
  },
  {
    q: "Can I customise the templates for my business?",
    a: "Absolutely. Every template is fully editable. Add your branding, adjust the terms, and tailor the layout to suit your trade.",
  },
  {
    q: "What if I only need one or two templates?",
    a: "You can browse individual templates in our template library and purchase only what you need. Bundles offer the best value if you need multiple documents.",
  },
]

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600">
            No subscriptions. No hidden fees. Buy once, use forever. Pick the pack that suits your trade business.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${
                plan.highlight
                  ? "border-yellow-400 shadow-xl ring-2 ring-yellow-400"
                  : "border-gray-200 shadow-sm"
              } p-8 flex flex-col relative`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  {plan.badge}
                </span>
              )}
              <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-gray-500 mb-1">{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-800" : "text-gray-400"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`block text-center rounded-xl py-3 px-6 font-semibold text-sm transition ${
                  plan.highlight
                    ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                    : "bg-gray-900 hover:bg-gray-700 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Full feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-700 w-1/2">Feature</th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-4 py-4 text-center font-semibold ${
                      plan.highlight ? "text-yellow-600" : "text-gray-700"
                    }`}
                  >
                    {plan.name}
                    <div className="text-lg font-extrabold text-gray-900">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feature, i) => (
                <tr
                  key={feature.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-3 text-gray-700 font-medium">{feature.label}</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-4 py-3 text-center">
                      {plan.features[i].included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center text-sm text-gray-600">
          <div>
            <div className="text-2xl font-bold text-gray-900">2,400+</div>
            <div>Tradies using our templates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">One-off</div>
            <div>No subscriptions, ever</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">Instant</div>
            <div>Download after purchase</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">AU-specific</div>
            <div>Built for Australian tradies</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to sort your paperwork?</h2>
          <p className="text-gray-400 mb-8">
            Download a free template today or grab the complete bundle and never worry about business documents again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates?filter=free"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-sm hover:bg-white hover:text-gray-900 transition"
            >
              Browse Free Templates
            </Link>
            <Link
              href="/products/complete-bundle"
              className="rounded-xl bg-yellow-400 text-gray-900 px-6 py-3 font-semibold text-sm hover:bg-yellow-500 transition"
            >
              Get Complete Bundle — $97
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
