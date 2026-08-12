import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { NewsletterForm } from "@/components/newsletter-form"
import { Disclaimer } from "@/components/disclaimer"
import { getProductById } from "@/data/products"

const swmsPack = getProductById("swms-pack")!
const quoteInvoicePack = getProductById("quote-invoice-pack")!

/** Named template previews surfaced on the soft-launch homepage (from real product data). */
const TEMPLATE_PREVIEWS = [
  {
    id: "swms",
    name: "SWMS Template Pack",
    description:
      "Pre-filled Safe Work Method Statements for 20 trades — editable Word format.",
    href: `/products/${swmsPack.id}`,
    access: "paid" as const,
    priceLabel: `$${swmsPack.price}`,
    emoji: swmsPack.emoji,
  },
  {
    id: "quote",
    name: "Quote Template",
    description:
      "Professional quote layout with itemised pricing, scope, and acceptance block.",
    href: `/products/${quoteInvoicePack.id}`,
    access: "paid" as const,
    priceLabel: `$${quoteInvoicePack.price}`,
    emoji: "\u{1F4C4}",
  },
  {
    id: "invoice",
    name: "Tax Invoice Template",
    description:
      "ATO-oriented tax invoice with ABN, GST lines, payment terms, and bank details.",
    href: `/products/${quoteInvoicePack.id}`,
    access: "paid" as const,
    priceLabel: `$${quoteInvoicePack.price}`,
    emoji: "\u{1F4B3}",
  },
  {
    id: "free-guides",
    name: "Free Compliance Guides",
    description:
      "15 free lessons on SWMS basics, quoting, invoicing, licensing, and more — no sign-up required.",
    href: "/lessons",
    access: "free" as const,
    priceLabel: "Free",
    emoji: "\u{1F4D6}",
  },
] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero — one composition, one primary CTA */}
      <div
        className={`${siteConfig.theme.heroGradient} relative overflow-hidden py-24 md:py-32`}
      >
        <div
          className="absolute inset-0 bg-[url('/images/hero-tradiedocs.jpg')] bg-cover bg-center opacity-25"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-300 mb-4">
            {siteConfig.name}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text-cyan">{siteConfig.copy.heroTitle}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            {siteConfig.copy.heroSubtitle}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              {siteConfig.copy.ctaButton}
            </Link>
            <a
              href="#free-tips"
              className="text-sm font-medium text-slate-400 hover:text-orange-300 transition-colors underline-offset-4 hover:underline"
            >
              Or get free tips by email
            </a>
          </div>
        </div>
      </div>

      {/* Named template previews — free vs paid */}
      <section className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="templates-heading">
        <h2
          id="templates-heading"
          className="text-3xl font-extrabold text-center mb-3"
        >
          <span className="gradient-text-cyan">Template previews</span>
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
          Named packs and starters available now — clear free vs paid labels, no guesswork.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATE_PREVIEWS.map((preview) => (
            <Link
              key={preview.id}
              href={preview.href}
              className="glass-card p-6 rounded-2xl flex flex-col transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-3xl" aria-hidden="true">
                  {preview.emoji}
                </span>
                <span
                  className={
                    preview.access === "free"
                      ? "shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-400"
                      : "shrink-0 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-400"
                  }
                >
                  {preview.access === "free" ? "Free" : "Paid"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{preview.name}</h3>
              <p className="text-sm text-slate-400 flex-1 mb-4">{preview.description}</p>
              <span className="text-sm font-semibold text-orange-400">
                {preview.priceLabel}
                {preview.access === "paid" ? (
                  <span className="text-slate-500 font-normal"> one-time</span>
                ) : null}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Free email path — conversion without inventing Stripe */}
      <section
        id="free-tips"
        className="mx-auto max-w-4xl px-6 py-20 text-center scroll-mt-24"
        aria-labelledby="free-tips-heading"
      >
        <p className="inline-block mb-4 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-400">
          Free
        </p>
        <h2 id="free-tips-heading" className="text-3xl font-extrabold mb-4">
          {siteConfig.copy.emailCaptureHeading}
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          {siteConfig.copy.emailCaptureSubheading}
        </p>
        <NewsletterForm source="homepage" />
        <p className="mt-6 text-sm text-slate-500">
          Prefer to browse first?{" "}
          <Link href="/lessons" className="text-orange-400 hover:text-orange-300 underline-offset-4 hover:underline">
            Read the free guides
          </Link>
          {" · "}
          <Link href="/products" className="text-orange-400 hover:text-orange-300 underline-offset-4 hover:underline">
            Browse paid templates
          </Link>
        </p>
      </section>

      {/* Trust — not legal advice; no invented state badges or WorkSafe claims */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Disclaimer variant="full" />
      </section>
    </div>
  )
}
