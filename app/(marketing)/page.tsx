import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { Disclaimer } from "@/components/disclaimer"

const templatePreviews = [
  {
    name: "SWMS Drafting Pack",
    description: "Editable starting-point documents and prompts to help structure job-specific safety paperwork. They are not a substitute for site-specific review, legal obligations or competent safety advice.",
    href: "/products/swms-pack",
    status: "Coming soon",
    emoji: "🦺",
  },
  {
    name: "Quote & Invoice Pack",
    description: "Practical quote and invoice templates with itemised pricing, GST fields and payment-term sections for Australian tradies.",
    href: "/products/quote-invoice-pack",
    status: "Coming soon",
    emoji: "🧾",
  },
  {
    name: "Free Business Admin Guides",
    description: "Free lessons on quoting, invoicing, record keeping, SWMS basics and common paperwork workflows — no sign-up required.",
    href: "/lessons",
    status: "Free",
    emoji: "📖",
  },
] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} relative overflow-hidden py-24 md:py-32`}>
        <div className="absolute inset-0 bg-[url('/images/hero-tradiedocs.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-300">{siteConfig.name}</p>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl"><span className="gradient-text-cyan">Less paperwork chaos. Better job records.</span></h1>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-slate-300">Templates, checklists and short guides for quotes, invoices, job records and safety paperwork — built around the admin Australian tradies repeat every week.</p>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-slate-400">TradieDocs provides educational material and editable starting points. It does not guarantee legal, WHS, tax or regulatory compliance; documents must be reviewed for the actual job and jurisdiction.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/lessons" className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-4 font-bold text-white transition-all hover:from-orange-400 hover:to-amber-500">Read the free guides</Link>
            <Link href="/products" className="rounded-xl border border-white/15 px-8 py-4 font-bold text-slate-200 hover:bg-white/5">Preview templates</Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="templates-heading">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Useful before subscriptions</p>
          <h2 id="templates-heading" className="text-3xl font-extrabold"><span className="gradient-text-cyan">Working guides and template previews</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">Paid checkout is not live, so TradieDocs is not publishing pack prices yet. The focus is making the paperwork useful first.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templatePreviews.map((preview) => (
            <Link key={preview.name} href={preview.href} className="glass-card flex flex-col rounded-2xl p-6 transition-all hover:scale-[1.02]">
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="text-3xl" aria-hidden="true">{preview.emoji}</span>
                <span className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${preview.status === "Free" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-amber-500/30 bg-amber-500/10 text-amber-400"}`}>{preview.status}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{preview.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-400">{preview.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="free-tips" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 text-center" aria-labelledby="free-tips-heading">
        <p className="mb-4 inline-block rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-400">Free</p>
        <h2 id="free-tips-heading" className="mb-4 text-3xl font-extrabold">Get practical tradie admin tips by email</h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">Short notes on quoting, invoices, paperwork habits and job records. No fake compliance promises.</p>
        <NewsletterForm source="homepage" />
        <p className="mt-6 text-sm text-slate-500">Prefer to browse first? <Link href="/lessons" className="text-orange-400 underline-offset-4 hover:text-orange-300 hover:underline">Read the free guides</Link>.</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20"><Disclaimer variant="full" /></section>
    </div>
  )
}
