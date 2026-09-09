import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: `Simple, transparent pricing for ${siteConfig.name}. Get access to all document templates and lessons for Australian tradies.`,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in the free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free plan gives you access to a selection of document templates and introductory lessons to help you get started managing your tradie business.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel your subscription at any time. You will retain access until the end of your current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "Are the document templates suitable for Australian tradies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all document templates are specifically designed for Australian tradies and comply with relevant Australian business and legal requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a money-back guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact us within 30 days for a full refund.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major credit and debit cards including Visa, Mastercard, and American Express, processed securely through Stripe.",
      },
    },
  ],
}

export default function PricingPage() {
  const plans = siteConfig.pricing?.plans || []

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Honest Pricing
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to run your tradie business like a pro. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan: any) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-8 flex flex-col ${
                  plan.featured ? "border border-orange-500/50 relative" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-2">{plan.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-400 text-sm">{plan.period}</span>
                    )}
                  </div>
                  {plan.description && (
                    <p className="text-slate-400 text-sm mt-2">{plan.description}</p>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {(plan.features || []).map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-orange-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href || "/sign-up"}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.featured
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta || "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">{faq.name}</h3>
                  <p className="text-slate-400 text-sm">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
