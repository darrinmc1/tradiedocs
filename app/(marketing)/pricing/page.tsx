import Link from "next/link"
import { siteConfig } from "@/config/site.config"

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
      name: "What is included in the subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your subscription includes access to all document templates, lessons, and resources designed specifically for Australian tradies. New content is added regularly.",
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
      name: "Is there a free trial available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a free tier so you can explore the platform before committing to a paid plan. No credit card required to get started.",
      },
    },
    {
      "@type": "Question",
      name: "Are the documents legally compliant in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our templates are designed with Australian regulations in mind. We recommend reviewing documents with a qualified professional for your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major credit and debit cards via Stripe. All transactions are secure and encrypted.",
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
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to run your tradie business like a pro. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {plans.length > 0 ? (
            plans.map((plan: any) => (
              <div key={plan.id} className="glass-card p-8 rounded-2xl flex flex-col">
                <h2 className="text-xl font-bold text-white mb-2">{plan.name}</h2>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <p className="text-4xl font-bold text-white mb-1">
                  {plan.price === 0 ? "Free" : `$${(plan.price / 100).toFixed(0)}`}
                  {plan.price > 0 && <span className="text-lg text-slate-400">/mo</span>}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features?.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-orange-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price === 0 ? "/sign-up" : `/api/checkout?plan=${plan.id}`}
                  className="mt-8 block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  {plan.price === 0 ? "Get Started Free" : "Subscribe Now"}
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full glass-card p-12 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Founding Member Access</h2>
              <p className="text-slate-400 mb-2">Early access pricing — join the waitlist to lock in your rate.</p>
              <Link
                href="/sign-up"
                className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Join the Waitlist
              </Link>
            </div>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="glass-card p-6 rounded-2xl">
                <h3 className="font-bold text-white mb-2">{faq.name}</h3>
                <p className="text-slate-400 text-sm">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
