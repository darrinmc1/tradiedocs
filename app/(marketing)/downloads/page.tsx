import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { Disclaimer } from "@/components/disclaimer"
import Link from "next/link"

export const metadata = {
  title: `Downloads | ${siteConfig.name}`,
  description:
    "Template downloads are Coming Soon. There is no zip or Word file available on this page.",
}

export default function DownloadsComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 inline-block rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-400">
            Coming soon
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Downloads</span>
          </h1>
          <p className="text-lg text-slate-400">
            There is no template zip or Word file to download yet. Checkout is
            not live. Leave an email if you want a notice when a pack is
            available.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-8">
        <NewsletterForm source="downloads-waitlist" buttonLabel="Notify me" />
        <p className="text-sm text-slate-400">
          <Link href="/lessons" className="text-orange-400 hover:underline">
            Read the written lessons
          </Link>
          {" · "}
          <Link href="/products" className="text-orange-400 hover:underline">
            View planned packs
          </Link>
        </p>
        <Disclaimer variant="full" />
      </div>
    </div>
  )
}
