import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradie document templates. See exactly what you get free vs paid, bundle deals, and how quickly templates pay for themselves.",
}

const freeFeatures = [
  "Browse all template categories",
  "Preview template structure",
  "1 free starter quote template",
  "Access to free lessons & guides",
  "Email support",
]

const proFeatures = [
  "Every template in the full library (50+)",
  "Quote, invoice & variation templates",
  "Subcontractor agreements",
  "Safety & SWMS documents",
  "Client communication scripts",
  "Instant download — Word & PDF",
  "Lifetime access, no subscription",
  "Free updates as templates improve",
  "Priority email support",
]

const bundles = [
  {
    name: "Starter Pack",
    emoji: "🔧",
    price: "$27",
    description: "Perfect if you just need the essentials to look professional from day one.",
    includes: [
      "Professional quote template",
      "Tax invoice template",
      "Payment terms & conditions",
      "Follow-up email scripts (3)",
    ],
    highlight: false,
  },
  {
    name: "Full Library",
    emoji: "📦",
    price: "$67",
    originalPrice: "$120+",
    description: "Everything you need to run a tight, professional trade business. One payment, yours forever.",
    includes: [
      "All 50+ templates included",
      "Quotes, invoices & variations",
      "Subcontractor & supplier agreements",
      "Safety docs & SWMS templates",
      "Client scripts & dispute letters",
      "Lifetime access + free updates",
    ],
    highlight: true,
  },
  {
    name: "Trade-Specific Bundle",
    emoji: "🏗️",
    price: "$47",
    description: "Curated templates for your specific trade — plumbing, electrical, building, landscaping & more.",
    includes: [
      "Trade-specific quote templates",
      "Relevant compliance documents",
      "Scope of works templates",
      "Defects & handover checklists",
    ],
    highlight: false,
  },
]

const roiItems = [
  {
    emoji: "💸",
    scenario: "One unpaid invoice recovered",
    value: "$500–$5,000+",
    note: "A proper invoice with clear payment terms gets paid faster and gives you legal standing if it doesn't.",
  },
  {
    emoji: "🤝",
    scenario: "One variation approved instead of disputed",
    value: "$200–$2,000+",
    note: "A written variation order signed before work starts means no argument about scope creep at the end.",
  },
  {
    emoji: "⏱️",
    scenario: "Time saved writing docs from scratch",
    value: "3–5 hrs/week",
    note: "Stop rewriting the same quote every time. Fill in the blanks and send — done in minutes.",
  },
  {
    emoji: "🛡️",
    scenario: "Avoided one legal dispute",
    value: "$1,000–$10,000+",
    note: "Clear contracts and documented agreements are your first line of defence if a job goes sideways.",
  },
]

const faqs = [
  {
    q: "Do I need a subscription?",
    a: "No. Every purchase is a one-time payment. You own the templates forever with no recurring fees.",
  },
  {
    q: "What format are the templates?",
    a: "All templates come as editable Word (.docx) files and PDF versions. Just open, fill in your details, and send.",
  },
  {
    q: "Can I customise them with my business name and logo?",
    a: "Absolutely — that's the whole point. Every template is fully editable so it looks like it came from your business.",
  },
  {
    q: "What if I only need one or two templates?",
    a: "Individual templates are available from $9 each on the products page. But the bundles work out to less than $2 per template.",
  },
  {
    q: "Are these templates legally compliant in Australia?",
    a: "Templates are written with Australian trade businesses in mind. We recommend having a solicitor review any contract before use in high-value situations.",
  },
  {
    q: "What's your refund policy?",
    a: "Because these are digital downloads, all sales are final. If you have an issue with a template, contact us and we'll make it right.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Stop losing money to bad paperwork.
            <span className="text-amber-400"> Start with the right docs.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8">
            One-time payment. No subscriptions. Templates that pay for themselves the first time you use them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Browse Templates
            </Link>
            <a
              href="#bundles"
              className="inline-block border border-slate-700 hover:border-amber-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              See Bundle Deals
            </a>
          </div>
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Free vs Full Access</h2>
          <p className="text-slate-400 text-center mb-12">Start free, upgrade when you're ready.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="border border-slate-800 rounded-2xl p-8">
              <div className="mb-6">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">Free</p>
                <p className="text-4xl font-extrabold">$0</p>
                <p className="text-slate-500 text-sm mt-1">No credit card needed</p>
              </div>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-slate-500 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className="block text-center border border-slate-700 hover:border-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro */}
            <div className="border border-amber-400 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Full Library</p>
                <p className="text-4xl font-extrabold">$67</p>
                <p className="text-slate-500 text-sm mt-1">One-time · Lifetime access</p>
              </div>
              <ul className="space-y-3 mb-8">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-amber-400 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Get Full Library — $67
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section id="bundles" className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Bundle Deals</h2>
          <p className="text-slate-400 text-center mb-12">Pick the pack that fits where you're at right now.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  bundle.highlight
                    ? "border-2 border-amber-400 bg-slate-900"
                    : "border border-slate-800 bg-slate-900/60"
                }`}
              >
                <div className="text-3xl mb-3">{bundle.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{bundle.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-extrabold text-amber-400">{bundle.price}</span>
                  {bundle.originalPrice && (
                    <span className="text-slate-500 line-through text-sm">{bundle.originalPrice}</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-5">{bundle.description}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {bundle.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className={`block text-center font-bold px-5 py-3 rounded-xl transition-colors ${
                    bundle.highlight
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-900"
                      : "border border-slate-700 hover:border-amber-400 text-white"
                  }`}
                >
                  Get {bundle.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The $67 that pays for itself</h2>
          <p className="text-slate-400 text-center mb-12">
            Here's what proper documentation is actually worth on a real job.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {roiItems.map((item) => (
              <div key={item.scenario} className="border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <p className="font-bold text-white mb-1">{item.scenario}</p>
                    <p className="text-amber-400 font-extrabold text-xl mb-2">{item.value}</p>
                    <p className="text-slate-400 text-sm">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-amber-400/30 bg-amber-400/5 rounded-2xl p-7 text-center">
            <p className="text-2xl font-bold mb-2">One recovered invoice pays for the full library <span className="text-amber-400">10× over.</span></p>
            <p className="text-slate-400 mb-6">Most tradies recoup the cost within the first week.</p>
            <Link
              href="/products"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Get the Full Library — $67
            </Link>
          </div>
        </div>
      </section>

      {/* Individual Templates */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Just need one template?</h2>
          <p className="text-slate-400 mb-8">
            Individual templates start from <span className="text-white font-semibold">$9 each</span>. Browse the full catalogue and grab exactly what you need — or save big with a bundle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Browse All Templates
            </Link>
            <Link
              href="/lessons"
              className="inline-block border border-slate-700 hover:border-amber-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Free Lessons & Guides
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get paid properly?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of tradies who've stopped leaving money on the table with dodgy paperwork.
          </p>
          <Link
            href="/products"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}
