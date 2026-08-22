import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. Start free, upgrade when you need more.",
}

const comparisonRows = [
  { feature: "Quote templates", free: "1 basic template", starter: "5 templates", pro: "Unlimited" },
  { feature: "Invoice templates", free: "1 basic template", starter: "5 templates", pro: "Unlimited" },
  { feature: "Contract templates", free: false, starter: "3 templates", pro: "Unlimited" },
  { feature: "Safety & compliance docs", free: false, starter: false, pro: true },
  { feature: "Editable Word/PDF format", free: true, starter: true, pro: true },
  { feature: "Mobile-friendly layout", free: true, starter: true, pro: true },
  { feature: "Logo & branding fields", free: false, starter: true, pro: true },
  { feature: "GST-ready calculations", free: false, starter: true, pro: true },
  { feature: "Terms & conditions included", free: false, starter: true, pro: true },
  { feature: "New templates added", free: false, starter: "Quarterly", pro: "Monthly" },
  { feature: "Commercial use licence", free: false, starter: true, pro: true },
  { feature: "Email support", free: false, starter: true, pro: true },
  { feature: "Priority support", free: false, starter: false, pro: true },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try before you buy. Grab a couple of basic templates to see if they suit your workflow.",
    cta: "Download Free Templates",
    href: "/templates?filter=free",
    highlight: false,
  },
  {
    name: "Starter Pack",
    price: "$49",
    period: "one-off",
    description: "Everything a sole trader or small crew needs to quote, invoice, and get paid faster.",
    cta: "Get Starter Pack",
    href: "/products/starter-pack",
    highlight: false,
  },
  {
    name: "Pro Bundle",
    price: "$97",
    period: "one-off",
    description: "The full toolkit — every template we make, plus priority support and all future updates.",
    cta: "Get Pro Bundle",
    href: "/products/pro-bundle",
    highlight: true,
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
      <section className="bg-zinc-950 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">Pricing</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            One-off price. No subscriptions.
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Pay once, own the templates forever. No monthly fees, no lock-in — just professional documents ready to use on the job.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-amber-400 bg-amber-50 shadow-lg"
                  : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-zinc-900">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold text-zinc-900">{plan.name}</h2>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-zinc-900">{plan.price}</span>
                <span className="mb-1 text-sm text-zinc-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-600">{plan.description}</p>
              <Link
                href={plan.href}
                className={`mt-6 block rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-amber-400 text-zinc-900 hover:bg-amber-300"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900">What&apos;s included</h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-6 py-4 font-semibold text-zinc-700">Feature</th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`px-6 py-4 text-center font-semibold ${
                      plan.highlight ? "text-amber-600" : "text-zinc-700"
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}>
                  <td className="px-6 py-3 font-medium text-zinc-800">{row.feature}</td>
                  <td className="px-6 py-3 text-center">
                    <CellValue value={row.free} />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <CellValue value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ / reassurance */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I pay a monthly fee?",
                a: "No. Every pack is a one-off purchase. Pay once and the templates are yours to keep and reuse forever.",
              },
              {
                q: "What format are the templates in?",
                a: "Templates come as editable Word (.docx) files and print-ready PDFs so you can customise them on any device.",
              },
              {
                q: "Can I use these for my whole business?",
                a: "Yes. The Starter and Pro packs include a commercial use licence, so you can use them across your entire operation.",
              },
              {
                q: "What if I just want one template?",
                a: "Individual templates are available for purchase on each product page. The packs just give you better value.",
              },
              {
                q: "Are these templates compliant with Australian law?",
                a: "Templates are written for Australian tradies and include standard terms, GST fields, and plain-English language. We recommend having a solicitor review contracts for high-value work.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="font-semibold text-zinc-900">{q}</h3>
                <p className="mt-2 text-sm text-zinc-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold">Ready to look more professional on the job?</h2>
          <p className="mt-3 text-zinc-300">Start with the free templates or grab a pack today — no account needed.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/templates?filter=free"
              className="rounded-lg border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-400"
            >
              Browse Free Templates
            </Link>
            <Link
              href="/products/pro-bundle"
              className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
            >
              Get the Pro Bundle — $97
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
