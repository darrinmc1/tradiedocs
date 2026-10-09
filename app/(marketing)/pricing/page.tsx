import { siteConfig } from "@/config/site.config"
import { ComingSoonCta } from "@/components/coming-soon-cta"
import { Disclaimer } from "@/components/disclaimer"

export const metadata = {
  title: `Coming soon | ${siteConfig.name}`,
  description:
    "TradieDocs template packs are not available yet. Join the list to hear when they are.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className={`${siteConfig.theme.heroGradient} py-16 px-4 text-center`}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Coming soon - join the list</span>
          </h1>
          <p className="text-lg text-slate-400">
            Template packs are not available yet. Leave your email and we will
            let you know when they are.
          </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 py-16">
        <ComingSoonCta source="pricing-coming-soon" />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <Disclaimer variant="full" />
      </section>
    </div>
  )
}
