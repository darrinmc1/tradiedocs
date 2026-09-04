import { Hero } from "@/components/home/hero"
import { GuideRail } from "@/components/home/guide-rail"
import { WhatYouGet } from "@/components/home/what-you-get"
import { NewsletterForm } from "@/components/newsletter-form"
import { Disclaimer } from "@/components/disclaimer"
import { Reveal } from "@/components/home/reveal"
import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Hero />
      <GuideRail />
      <WhatYouGet />

      <section
        id="free-tips"
        className="scroll-mt-24 border-b border-white/10 bg-slate-950 py-16 md:py-20"
        aria-labelledby="free-tips-heading"
      >
        <div className="mx-auto max-w-xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-medium text-orange-300">Email</p>
            <h2
              id="free-tips-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-white"
            >
              {siteConfig.copy.emailCaptureHeading}
            </h2>
            <p className="mt-3 text-slate-400">
              {siteConfig.copy.emailCaptureSubheading}
            </p>
          </Reveal>
          <div className="mt-8">
            <NewsletterForm source="homepage" />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Prefer to browse first?{" "}
            <Link
              href="/lessons"
              className="text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline"
            >
              Read the free guides
            </Link>
            {" · "}
            <Link
              href="/products"
              className="text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline"
            >
              Browse coming-soon packs
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Disclaimer variant="full" />
      </section>
    </div>
  )
}
