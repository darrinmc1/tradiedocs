import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { Disclaimer } from "@/components/disclaimer"
import Link from "next/link"

export const metadata = {
  title: `Tools | ${siteConfig.name}`,
  description:
    "Interactive tools are Coming Soon. No calculator, generator, or download is live on this page.",
}

export default function ToolsComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 inline-block rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-400">
            Coming soon
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Tools</span>
          </h1>
          <p className="text-lg text-slate-400">
            There is no live calculator, SWMS generator, or file download here.
            Written lessons are available now. Template packs are waitlist only.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-8">
        <NewsletterForm source="tools-waitlist" buttonLabel="Notify me" />
        <p className="text-sm text-slate-400">
          Prefer to read first?{" "}
          <Link href="/lessons" className="text-orange-400 hover:underline">
            Open the written lessons
          </Link>
          {" · "}
          <Link href="/products" className="text-orange-400 hover:underline">
            View Coming Soon packs
          </Link>
        </p>
        <Disclaimer variant="full" />
      </div>
    </div>
  )
}
