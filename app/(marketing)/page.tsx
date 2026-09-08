import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  const testimonials = [
    {
      name: "Dave Kowalski",
      trade: "Licensed Electrician, Sydney NSW",
      quote: "TradieDocs saved me hours every week. My quotes look professional and clients actually pay on time now.",
      initials: "DK",
      color: "bg-yellow-500",
    },
    {
      name: "Mick Tran",
      trade: "Plumber & Gas Fitter, Brisbane QLD",
      quote: "Finally, paperwork that doesn't give me a headache. Set up in 10 minutes and I was sending invoices same day.",
      initials: "MT",
      color: "bg-blue-500",
    },
    {
      name: "Sarah O'Brien",
      trade: "Carpenter & Builder, Melbourne VIC",
      quote: "The contract templates are spot on for Australian regs. Saved me from a nasty dispute with a client last month.",
      initials: "SO",
      color: "bg-orange-500",
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
        {siteConfig.hero?.headline ?? "Docs & Contracts for Australian Tradies"}
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
        {siteConfig.hero?.subheadline ?? "Stop losing money on dodgy paperwork. Professional quotes, invoices, and contracts built for tradies — ready in minutes."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-colors"
        >
          Get Started Free
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-600 text-white font-semibold text-lg hover:border-slate-400 transition-colors"
        >
          Browse Templates
        </Link>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Trusted by tradies across Australia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 text-left flex flex-col gap-4"
            >
              <p className="text-slate-200 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.trade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
