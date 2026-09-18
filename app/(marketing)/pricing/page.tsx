import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for SWMS templates, quote packs, and compliance bundles. Pay once, use forever.",
}

const tiers = [
  {
    name: "SWMS Starter",
    price: "$29",
    period: "one-time",
    description: "Essential Safe Work Method Statements for sole traders and small crews.",
    highlight: false,
    badge: "",
    features: [
      "5 industry-specific SWMS templates",
      "Editable Word & PDF formats",
      "Covers top 5 high-risk activities",
      "Compliant with Safe Work Australia",
      "Instant download",
      "Free updates for 12 months",
    ],
    cta: "Get Starter Pack",
    href: "/products",
  },
  {
    name: "Tradie Pro Bundle",
    price: "$79",
    period: "one-time",
    description: "Everything a growing trade business needs — SWMS, quotes, and compliance docs in one pack.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "20 SWMS templates (all trades)",
      "10 professional quote templates",
      "Subcontractor agreement template",
      "Site induction checklist",
      "Toolbox talk templates (x5)",
      "Editable Word & PDF formats",
      "Compliant with Safe Work Australia",
      "Instant download",
      "Free updates for 12 months",
      "Priority email support",
    ],
    cta: "Get Pro Bundle",
    href: "/products",
  },
  {
    name: "Compliance Complete",
    price: "$149",
    period: "one-time",
    description: "The full compliance toolkit for contractors, builders, and trade businesses tendering for larger jobs.",
    highlight: false,
    badge: "Best Value",
    features: [
      "Everything in Pro Bundle",
      "WHS Management Plan template",
      "Emergency Response Plan",
      "Incident & Hazard Report forms",
      "Plant & Equipment register",
      "JSEA / JHA templates (x10)",
      "Principal Contractor pack",
      "Editable Word & PDF formats",
      "Compliant with Safe Work Australia",
      "Instant download",
      "Lifetime free updates",
      "Priority email support",
    ],
    cta: "Get Complete Pack",
    href: "/products",
  },
]

const comparisonRows = [
  { feature: "SWMS Templates", starter: "5", pro: "20", complete: "20+" },
  { feature: "Quote Templates", starter: "—", pro: "10", complete: "10" },
  { feature: "Subcontractor Agreement", starter: "—", pro: "✓", complete: "✓" },
  { feature: "WHS Management Plan", starter: "—", pro: "—", complete: "✓" },
  { feature: "JSEA / JHA Templates", starter: "—", pro: "—", complete: "✓" },
  { feature: "Principal Contractor Pack", starter: "—", pro: "—", complete: "✓" },
  { feature: "Toolbox Talk Templates", starter: "—", pro: "5", complete: "5" },
  { feature: "Editable Word & PDF", starter: "✓", pro: "✓", complete: "✓" },
  { feature: "Safe Work Australia Compliant", starter: "✓", pro: "✓", complete: "✓" },
  { feature: "Free Updates", starter: "12 months", pro: "12 months", complete: "Lifetime" },
  { feature: "Priority Support", starter: "—", pro: "✓", complete: "✓" },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-orange-500/20">
            Simple, Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Pay once.{" "}
            <span className="text-orange-400">Use forever.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No subscriptions. No hidden fees. Just professional trade documents you own outright — ready to use on your next job.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.highlight
                  ? "border-orange-500 bg-orange-500/5 shadow-xl shadow-orange-500/10"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {tier.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full ${
                    tier.highlight
                      ? "bg-orange-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {tier.badge}
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2">{tier.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-500 text-sm mb-1">{tier.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-orange-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                  tier.highlight
                    ? "bg-orange-500 hover:bg-orange-400 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
            Compare all plans
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900">
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Starter<br /><span className="text-orange-400 font-extrabold">$29</span></th>
                  <th className="text-center py-4 px-4 text-white font-bold bg-orange-500/5">Pro Bundle<br /><span className="text-orange-400 font-extrabold">$79</span></th>
                  <th className="text-center py-4 px-4 text-white font-bold">Complete<br /><span className="text-orange-400 font-extrabold">$149</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-800/60 ${
                      i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/40"
                    }`}
                  >
                    <td className="py-3.5 px-6 text-slate-300">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">{row.starter}</td>
                    <td className="py-3.5 px-4 text-center text-slate-200 bg-orange-500/5 font-medium">{row.pro}</td>
                    <td className="py-3.5 px-4 text-center text-slate-400">{row.complete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Are these documents legally compliant?",
                a: "Yes. All templates are written to comply with Safe Work Australia guidelines and relevant state WHS legislation. We recommend reviewing them with your industry association for site-specific requirements.",
              },
              {
                q: "What format do I receive?",
                a: "All documents are delivered as editable Microsoft Word (.docx) files and print-ready PDFs. You can customise them with your business name, logo, and job details.",
              },
              {
                q: "Is this a subscription?",
                a: "No. Every plan is a one-time purchase. You own the documents outright and can use them on as many jobs as you like.",
              },
              {
                q: "What if I need a document not in the pack?",
                a: "Reach out via our contact page. We regularly add new templates and can often accommodate custom requests for trade-specific documents.",
              },
              {
                q: "Can I share these with my team or subcontractors?",
                a: "Yes — your purchase covers use across your business. You can share templates with employees and subcontractors working under your ABN.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto bg-orange-500/10 border border-orange-500/30 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to get compliant?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of tradies who use TradieDoc templates to win more jobs and stay safe on site.
          </p>
          <Link
            href="/products"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 px-10 rounded-xl transition-all text-sm"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    </main>
  )
}
