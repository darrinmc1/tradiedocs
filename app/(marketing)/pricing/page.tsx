import Link from "next/link"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. Start free, upgrade when you're ready. No subscriptions, no surprises.",
}

const comparisonRows = [
  { feature: "Quote templates", free: "1 template", starter: "5 templates", pro: "Unlimited" },
  { feature: "Invoice templates", free: "1 template", starter: "5 templates", pro: "Unlimited" },
  { feature: "Safety & compliance docs", free: false, starter: "3 documents", pro: "Unlimited" },
  { feature: "Subcontractor agreements", free: false, starter: false, pro: true },
  { feature: "Variation order forms", free: false, starter: true, pro: true },
  { feature: "Scope of works templates", free: false, starter: true, pro: true },
  { feature: "Editable Word & PDF formats", free: true, starter: true, pro: true },
  { feature: "Mobile-friendly layout", free: true, starter: true, pro: true },
  { feature: "Australian compliance ready", free: true, starter: true, pro: true },
  { feature: "Commercial use licence", free: false, starter: true, pro: true },
  { feature: "Priority email support", free: false, starter: false, pro: true },
  { feature: "Lifetime updates", free: false, starter: true, pro: true },
]

const packs = [
  {
    name: "Starter Pack",
    price: "$47",
    description: "Perfect for sole traders and small operators just getting started.",
    href: "/products/starter-pack",
    highlight: false,
    includes: [
      "5 quote templates",
      "5 invoice templates",
      "3 safety & compliance docs",
      "Variation order form",
      "Scope of works template",
      "Editable Word & PDF formats",
      "Commercial use licence",
      "Lifetime updates",
    ],
  },
  {
    name: "Pro Pack",
    price: "$97",
    description: "Everything a growing trade business needs to look professional and stay protected.",
    href: "/products/pro-pack",
    highlight: true,
    badge: "Most Popular",
    includes: [
      "Unlimited quote templates",
      "Unlimited invoice templates",
      "Full safety & compliance library",
      "Subcontractor agreements",
      "Variation order forms",
      "Scope of works templates",
      "Editable Word & PDF formats",
      "Commercial use licence",
      "Priority email support",
      "Lifetime updates",
    ],
  },
]

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <CheckIcon className="mx-auto h-5 w-5 text-green-500" aria-label="Included" />
  }
  if (value === false) {
    return <XMarkIcon className="mx-auto h-5 w-5 text-zinc-300" aria-label="Not included" />
  }
  return <span className="text-sm text-zinc-700">{value}</span>
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-zinc-950 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">Pricing</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Simple pricing. No subscriptions.
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Pay once, use forever. Every template pack includes editable files, a commercial licence, and lifetime updates.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-amber-300 transition-colors"
            >
              Browse all products
            </Link>
            <Link
              href="/templates"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
            >
              Try a free template
            </Link>
          </div>
        </div>
      </section>

      {/* Pack cards */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-zinc-900">Choose your pack</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl border p-8 shadow-sm ${
                pack.highlight
                  ? "border-amber-400 bg-zinc-950 text-white"
                  : "border-zinc-200 bg-white text-zinc-900"
              }`}
            >
              {pack.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-zinc-900">
                  {pack.badge}
                </span>
              )}
              <h3 className={`text-xl font-bold ${pack.highlight ? "text-white" : "text-zinc-900"}`}>
                {pack.name}
              </h3>
              <p className={`mt-1 text-sm ${pack.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                {pack.description}
              </p>
              <p className="mt-6 text-4xl font-extrabold">{pack.price}</p>
              <p className={`text-xs ${pack.highlight ? "text-zinc-500" : "text-zinc-400"}`}>one-time payment</p>
              <ul className="mt-6 space-y-3">
                {pack.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        pack.highlight ? "text-amber-400" : "text-green-500"
                      }`}
                    />
                    <span className={pack.highlight ? "text-zinc-300" : "text-zinc-700"}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pack.href}
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  pack.highlight
                    ? "bg-amber-400 text-zinc-900 hover:bg-amber-300"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                Get {pack.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs paid comparison table */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-zinc-900">Free vs paid — what&apos;s included?</h2>
          <p className="mb-10 text-center text-sm text-zinc-500">
            Start with a free template to see the quality, then upgrade when you&apos;re ready.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="py-4 pl-6 pr-4 text-left font-semibold text-zinc-700">Feature</th>
                  <th className="px-4 py-4 text-center font-semibold text-zinc-700">Free</th>
                  <th className="px-4 py-4 text-center font-semibold text-zinc-700">Starter — $47</th>
                  <th className="px-4 py-4 text-center font-semibold text-amber-600">Pro — $97</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                  >
                    <td className="py-3 pl-6 pr-4 font-medium text-zinc-800">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CellValue value={row.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/products/pro-pack"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-amber-300 transition-colors"
            >
              Get the Pro Pack — $97
            </Link>
            <Link
              href="/templates"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              Download a free template first
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="mb-10 text-center text-2xl font-bold text-zinc-900">Frequently asked questions</h2>
        <dl className="space-y-6">
          {[
            {
              q: "Is this a subscription?",
              a: "No. Every pack is a one-time payment. You own the templates forever with no recurring fees.",
            },
            {
              q: "What formats do I get?",
              a: "All templates come in editable Microsoft Word (.docx) and PDF formats so you can customise them on any device.",
            },
            {
              q: "Can I use these for my business?",
              a: "Yes. Paid packs include a commercial use licence, meaning you can use the templates for all your client work.",
            },
            {
              q: "Are the templates Australian-specific?",
              a: "Yes. All documents are written for Australian tradies and comply with common Australian business and safety requirements.",
            },
            {
              q: "What if I need something not in the pack?",
              a: "Reach out via our contact page. We regularly add new templates and Pro Pack customers get priority requests.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-zinc-100 bg-zinc-50 p-6">
              <dt className="font-semibold text-zinc-900">{q}</dt>
              <dd className="mt-2 text-sm text-zinc-600">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  )
}
