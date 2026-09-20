import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for tradies who want to get their paperwork sorted. No hidden fees, no surprises.",
}

const tiers = [
  {
    name: "Starter",
    price: "Free",
    priceDetail: "forever",
    description: "Perfect for sole traders just getting started with digital quoting.",
    cta: "Get started free",
    ctaHref: "/register",
    highlighted: false,
    features: [
      { text: "Up to 5 quotes per month", included: true },
      { text: "Basic quote templates", included: true },
      { text: "PDF export", included: true },
      { text: "Customer management (up to 20)", included: true },
      { text: "Email support", included: true },
      { text: "Unlimited quotes", included: false },
      { text: "Invoice generation", included: false },
      { text: "Payment tracking", included: false },
      { text: "Custom branding", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    priceDetail: "per month",
    description: "For growing trade businesses that need to look professional and stay on top of jobs.",
    cta: "Start 14-day free trial",
    ctaHref: "/register?plan=pro",
    highlighted: true,
    badge: "Most popular",
    features: [
      { text: "Unlimited quotes", included: true },
      { text: "Professional quote templates", included: true },
      { text: "PDF export", included: true },
      { text: "Unlimited customer management", included: true },
      { text: "Email support", included: true },
      { text: "Invoice generation", included: true },
      { text: "Payment tracking", included: true },
      { text: "Custom branding & logo", included: true },
      { text: "Priority support", included: false },
      { text: "Team members", included: false },
    ],
  },
  {
    name: "Business",
    price: "$79",
    priceDetail: "per month",
    description: "For established trade businesses managing a team and serious volume.",
    cta: "Start 14-day free trial",
    ctaHref: "/register?plan=business",
    highlighted: false,
    features: [
      { text: "Unlimited quotes", included: true },
      { text: "Professional quote templates", included: true },
      { text: "PDF export", included: true },
      { text: "Unlimited customer management", included: true },
      { text: "Email & phone support", included: true },
      { text: "Invoice generation", included: true },
      { text: "Payment tracking", included: true },
      { text: "Custom branding & logo", included: true },
      { text: "Priority support", included: true },
      { text: "Up to 5 team members", included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          No lock-in contracts. No hidden fees. Cancel any time.
          Start free and upgrade when you need more.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              tier.highlighted
                ? "border-primary bg-primary/5 shadow-lg scale-105"
                : "border-border bg-card"
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.priceDetail}</span>
              </div>
              <p className="text-muted-foreground text-sm">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-2 text-sm">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                  )}
                  <span className={feature.included ? "" : "text-muted-foreground/50"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              variant={tier.highlighted ? "default" : "outline"}
              className="w-full"
            >
              <Link href={tier.ctaHref}>{tier.cta}</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* FAQ / reassurance */}
      <div className="border rounded-2xl p-8 bg-muted/30">
        <h2 className="text-2xl font-bold mb-6 text-center">Common questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Do I need a credit card to start?</h3>
            <p className="text-muted-foreground text-sm">
              No. The Starter plan is completely free with no credit card required.
              You only need to add payment details when upgrading to Pro or Business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I cancel any time?</h3>
            <p className="text-muted-foreground text-sm">
              Yes. There are no lock-in contracts. Cancel your subscription at any
              time and you won&apos;t be charged again. Your data stays accessible
              until the end of your billing period.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What happens after the free trial?</h3>
            <p className="text-muted-foreground text-sm">
              After your 14-day trial you&apos;ll be asked to enter payment details
              to continue. If you don&apos;t upgrade, your account automatically
              moves to the free Starter plan.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-muted-foreground text-sm">
              Absolutely. Upgrade or downgrade at any time from your account
              settings. Changes take effect immediately and billing is prorated.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Still not sure? Start free — no credit card needed.
        </p>
        <Button asChild size="lg">
          <Link href="/register">Create your free account</Link>
        </Button>
      </div>
    </div>
  )
}
