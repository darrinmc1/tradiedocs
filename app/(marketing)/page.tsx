import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  const testimonials = [
    {
      quote: "TradieDocs saved me hours every week. I used to dread paperwork — now it takes me minutes. Absolute game changer for my business.",
      name: "Mick Hargreaves",
      trade: "Licensed Electrician, Brisbane QLD",
      initials: "MH",
      color: "from-yellow-500 to-orange-500",
    },
    {
      quote: "Finally, docs that actually make sense for tradies. My quotes look professional and I'm getting more jobs because of it.",
      name: "Sarah Kowalski",
      trade: "Plumber & Gas Fitter, Melbourne VIC",
      initials: "SK",
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote: "I was terrible at the admin side of running my own business. TradieDocs made it dead simple. Worth every cent.",
      name: "Dave Nguyen",
      trade: "Carpenter & Builder, Sydney NSW",
      initials: "DN",
      color: "from-green-500 to-emerald-500",
    },
    {
      quote: "The templates are spot on for Australian regs. My accountant was impressed and I stopped getting hit with compliance headaches.",
      name: "Tracey Bullock",
      trade: "Painting Contractor, Perth WA",
      initials: "TB",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Business Docs Built for
          <span className="text-yellow-400"> Aussie Tradies</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Stop drowning in paperwork. TradieDocs gives you professional quotes, invoices, contracts and compliance docs — done in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/products"
            className="inline-block border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Browse Templates
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Trusted by Tradies Across Australia
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Real tradies. Real results. See what Australian tradespeople are saying about TradieDocs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.trade}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
