import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. Start free, upgrade when you need more. No subscriptions, no surprises.",
}

const freeFeatures = [
  { label: "1 free quote template", included: true },
  { label: "1 free invoice template", included: true },
  { label: "Basic formatting", included: true },
  { label: "PDF download", included: true },
  { label: "Commercial use", included: false },
  { label: "Editable Word/Excel format", included: false },
  { label: "Logo & branding fields", included: false },
  { label: "Priority support", included: false },
]

const paidFeatures = [
  { label: "All free templates included", included: true },
  { label: "Full template library access", included: true },
  { label: "PDF download", included: true },
  { label: "Commercial use", included: true },
  { label: "Editable Word/Excel format", included: true },
  { label: "Logo & branding fields", included: true },
  { label: "Priority support", included: true },
  { label: "Lifetime updates", included: true },
]

const bundles = [
  {
    name: "Starter Bundle",
    description: "Essential templates for sole traders just getting started.",
    price: 19,
    templates: [
      "Quote Template",
      "Tax Invoice Template",
      "Receipt Template",
    ],
    highlight: false,
  },
  {
    name: "Tradie Bundle",
    description: "Everything a busy tradie needs to run a professional operation.",
    price: 39,
    templates: [
      "Quote Template",
      "Tax Invoice Template",
      "Receipt Template",
      "Job Sheet Template",
      "Purchase Order Template",
      "Variation Order Template",
    ],
    highlight: true,
  },
  {
    name: "Complete Bundle",
    description: "The full toolkit for contractors and small trade businesses.",
    price: 59,
    templates: [
      "Quote Template",
      "Tax Invoice Template",
      "Receipt Template",
      "Job Sheet Template",
      "Purchase Order Template",
      "Variation Order Template",
      "Subcontractor Agreement",
      "Safety Checklist Template",
      "Progress Claim Template",
    ],
    highlight: false,
  },
]

const individualTemplates = [
  { name: "Quote Template", price: 9 },
  { name: "Tax Invoice Template", price: 9 },
  { name: "Receipt Template", price: 7 },
  { name: "Job Sheet Template", price: 9 },
  { name: "Purchase Order Template", price: 9 },
  { name: "Variation Order Template", price: 9 },
  { name: "Subcontractor Agreement", price: 14 },
  { name: "Safety Checklist Template", price: 9 },
  { name: "Progress Claim Template", price: 12 },
]

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-yellow-400 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple, honest pricing
          </h1>
          <p className="text-lg text-gray-800 max-w-xl mx-auto">
            Start with free templates. Pay once for the ones you need. No subscriptions, no lock-in.
          </p>
        </div>
      </section>

      {/* Free vs Paid Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Free vs Paid — what&apos;s the difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-white border border-gray-200 text-gray-500 font-medium w-1/2">
                    Feature
                  </th>
                  <th className="py-3 px-4 bg-white border border-gray-200 text-gray-700 font-semibold text-center">
                    Free
                  </th>
                  <th className="py-3 px-4 bg-yellow-400 border border-yellow-400 text-gray-900 font-semibold text-center">
                    Paid Templates
                  </th>
                </tr>
              </thead>
              <tbody>
                {freeFeatures.map((feature, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 border border-gray-200 text-gray-700">
                      {feature.label}
                    </td>
                    <td className="py-3 px-4 border border-gray-200 text-center">
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XIcon className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 border border-yellow-200 bg-yellow-50 text-center">
                      {paidFeatures[i]?.included ? (
                        <CheckIcon className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <XIcon className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Free templates are great for trying things out. Paid templates are built for professional use.
          </p>
        </div>
      </section>

      {/* Bundle Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Template Bundles
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Save more when you buy a bundle. One-time payment, yours to keep.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`rounded-2xl border-2 p-6 flex flex-col ${
                  bundle.highlight
                    ? "border-yellow-400 bg-yellow-50 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                {bundle.highlight && (
                  <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{bundle.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">${bundle.price}</span>
                  <span className="text-gray-500 text-sm ml-1">AUD one-time</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {bundle.templates.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className={`block text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors ${
                    bundle.highlight
                      ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                      : "bg-gray-900 hover:bg-gray-700 text-white"
                  }`}
                >
                  Get this bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Template Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Individual Templates
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Only need one or two? Buy exactly what you need.
          </p>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-5 text-gray-500 font-medium">Template</th>
                  <th className="text-right py-3 px-5 text-gray-500 font-medium">Price (AUD)</th>
                  <th className="py-3 px-5"></th>
                </tr>
              </thead>
              <tbody>
                {individualTemplates.map((item, i) => (
                  <tr
                    key={item.name}
                    className={`border-b border-gray-100 last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-5 text-gray-800 font-medium">{item.name}</td>
                    <td className="py-3 px-5 text-right text-gray-900 font-semibold">
                      ${item.price}
                    </td>
                    <td className="py-3 px-5 text-right">
                      <Link
                        href="/products"
                        className="text-xs font-semibold text-yellow-700 hover:text-yellow-900 underline underline-offset-2"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to pay a subscription?",
                a: "No. Every template is a one-time purchase. Pay once, download, and use it forever.",
              },
              {
                q: "What formats do I get?",
                a: "Paid templates come as editable Word (.docx) or Excel (.xlsx) files plus a PDF version. Free templates are PDF only.",
              },
              {
                q: "Can I use these for my business?",
                a: "Yes. All paid templates include a commercial use licence. Free templates are for personal/trial use only.",
              },
              {
                q: "What if I need a refund?",
                a: "Because these are digital downloads, we don't offer refunds after download. If you have an issue, contact us and we'll sort it out.",
              },
              {
                q: "Are these compliant with Australian tax requirements?",
                a: "Yes. Our invoice and quote templates are designed to meet ATO requirements for Australian sole traders and small businesses.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to look more professional?
          </h2>
          <p className="text-gray-800 mb-8">
            Browse all templates and start with a free download today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products"
              className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Browse all templates
            </Link>
            <Link
              href="/free-templates"
              className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
            >
              Try free templates
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
