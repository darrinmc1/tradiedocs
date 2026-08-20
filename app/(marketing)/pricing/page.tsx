import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description:
    "Simple, transparent pricing for tradies. Start free, upgrade when you're ready. Save 10+ hours per month with ready-to-use document templates.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials. No credit card required.",
    cta: "Get started free",
    ctaHref: "/register",
    highlight: false,
    features: [
      "3 document templates",
      "Up to 5 clients",
      "Basic quote builder",
      "PDF export",
      "Email support",
    ],
    missing: [
      "Unlimited templates",
      "Unlimited clients",
      "Invoice automation",
      "Payment tracking",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Everything you need to run a professional trade business.",
    cta: "Start 14-day free trial",
    ctaHref: "/register?plan=pro",
    highlight: true,
    badge: "Most popular",
    features: [
      "Unlimited document templates",
      "Unlimited clients",
      "Advanced quote builder",
      "PDF export with custom branding",
      "Invoice automation",
      "Payment tracking & reminders",
      "Job scheduling",
      "Priority email & chat support",
      "All template packs included",
    ],
    missing: [],
  },
  {
    name: "Business",
    price: "$79",
    period: "per month",
    description: "For growing trade businesses with a team.",
    cta: "Start 14-day free trial",
    ctaHref: "/register?plan=business",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team permissions & roles",
      "Multi-site job management",
      "Advanced reporting & analytics",
      "Xero & MYOB integration",
      "Dedicated account manager",
      "Phone support",
      "Custom template creation",
    ],
    missing: [],
  },
]

const templatePacks = [
  {
    icon: "🔨",
    name: "Builder Pack",
    count: 12,
    description: "Quotes, contracts, variation orders, and completion certificates for builders.",
  },
  {
    icon: "⚡",
    name: "Electrician Pack",
    count: 8,
    description: "Electrical compliance certificates, test reports, and service agreements.",
  },
  {
    icon: "🔧",
    name: "Plumber Pack",
    count: 9,
    description: "Plumbing quotes, compliance docs, and maintenance agreements.",
  },
  {
    icon: "❄️",
    name: "HVAC Pack",
    count: 7,
    description: "Service reports, maintenance schedules, and installation quotes.",
  },
  {
    icon: "🎨",
    name: "Painter Pack",
    count: 6,
    description: "Colour schedules, quotes, and project completion forms.",
  },
  {
    icon: "🪟",
    name: "General Trades Pack",
    count: 15,
    description: "Universal templates suitable for any trade or service business.",
  },
]

const roiPoints = [
  {
    stat: "10 hrs",
    label: "saved per month",
    detail: "Stop recreating documents from scratch every job.",
  },
  {
    stat: "3×",
    label: "faster quoting",
    detail: "Send professional quotes in minutes, not hours.",
  },
  {
    stat: "$480",
    label: "average monthly value",
    detail: "Based on tradies billing $48/hr for recovered admin time.",
  },
  {
    stat: "30%",
    label: "fewer invoice disputes",
    detail: "Clear, professional documents reduce back-and-forth.",
  },
]

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no lock-in contracts. Cancel your subscription at any time and you'll retain access until the end of your billing period.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your documents and client data remain accessible for 30 days after cancellation so you can export everything you need.",
  },
  {
    q: "Do I need a credit card to start the free plan?",
    a: "No credit card required for the free plan. You only need payment details when upgrading to Pro or Business.",
  },
  {
    q: "Are the template packs really included in Pro?",
    a: "Yes — all current and future template packs are included in the Pro and Business plans at no extra cost.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
  },
  {
    q: "Is there a discount for paying annually?",
    a: "Yes — pay annually and get 2 months free (equivalent to ~17% off). Contact us to switch to annual billing.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            Simple, transparent pricing
          </span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Stop losing money to admin.
            <br />
            <span className="text-blue-600">Start winning more jobs.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Professional document templates built for tradies. Start free — upgrade when you're ready.
            Most Pro members save <strong>10+ hours per month</strong> within their first week.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Get started free
            </Link>
            <Link
              href="#compare"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* ROI bar */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {roiPoints.map((point) => (
              <div key={point.stat} className="text-center">
                <div className="text-3xl font-extrabold text-blue-600">{point.stat}</div>
                <div className="text-sm font-semibold text-gray-800">{point.label}</div>
                <div className="mt-1 text-xs text-gray-500">{point.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section id="compare" className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Choose your plan</h2>
            <p className="text-gray-600">All plans include a 14-day free trial on paid tiers. No credit card needed for Free.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlight
                    ? "border-blue-500 shadow-xl ring-2 ring-blue-500"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {tier.badge}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                    <span className="mb-1 text-sm text-gray-500">/{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                </div>
                <Link
                  href={tier.ctaHref}
                  className={`mb-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {tier.cta}
                </Link>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                  {tier.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            All prices in AUD and exclude GST. Annual billing available — save 2 months.{" "}
            <Link href="/contact" className="text-blue-600 underline">
              Contact us
            </Link>{" "}
            for team or enterprise pricing.
          </p>
        </div>
      </section>

      {/* Free vs Paid comparison table */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Free vs Pro — at a glance</h2>
            <p className="text-gray-600">See exactly what you get on each plan before you commit.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-700">Free</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-700">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Document templates", "3", "Unlimited"],
                  ["Clients", "Up to 5", "Unlimited"],
                  ["Quote builder", "Basic", "Advanced"],
                  ["PDF export", "✓", "✓"],
                  ["Custom branding on PDFs", "✗", "✓"],
                  ["Invoice automation", "✗", "✓"],
                  ["Payment tracking", "✗", "✓"],
                  ["Payment reminders", "✗", "✓"],
                  ["Job scheduling", "✗", "✓"],
                  ["All template packs", "✗", "✓"],
                  ["Priority support", "✗", "✓"],
                ].map(([feature, free, pro]) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="px-6 py-3.5 font-medium text-gray-800">{feature}</td>
                    <td
                      className={`px-6 py-3.5 text-center ${
                        free === "✗" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {free}
                    </td>
                    <td
                      className={`px-6 py-3.5 text-center font-medium ${
                        pro === "✗" ? "text-gray-300" : "text-blue-700"
                      }`}
                    >
                      {pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/register?plan=pro"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Upgrade to Pro — 14 days free
            </Link>
          </div>
        </div>
      </section>

      {/* Template packs */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Template packs included in Pro</h2>
            <p className="text-gray-600">
              Every Pro plan includes all trade-specific template packs — built by industry professionals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templatePacks.map((pack) => (
              <div
                key={pack.name}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{pack.icon}</div>
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{pack.name}</h3>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {pack.count} templates
                  </span>
                </div>
                <p className="text-sm text-gray-600">{pack.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            New packs added regularly. Pro members get every new pack automatically at no extra cost.
          </p>
        </div>
      </section>

      {/* Social proof / testimonial */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <blockquote className="mb-6 text-xl font-medium italic text-white">
            &ldquo;I used to spend Sunday nights doing paperwork. Now I send quotes from my phone on the way home.
            Paid for itself in the first week.&rdquo;
          </blockquote>
          <p className="text-blue-200">— Jake T., Licensed Electrician, Brisbane</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register?plan=pro"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
            >
              Start your free trial
            </Link>
            <Link
              href="/templates"
              className="rounded-lg border border-blue-400 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700"
            >
              Browse templates
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            <p className="text-gray-600">Still have questions?{" "}
              <Link href="/contact" className="text-blue-600 underline">
                Get in touch
              </Link>.
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="mb-2 font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Ready to save 10 hours a month?</h2>
          <p className="mb-8 text-gray-600">
            Join thousands of tradies who've ditched the paperwork and started winning more jobs.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Get started free — no credit card needed
          </Link>
        </div>
      </section>
    </div>
  )
}
