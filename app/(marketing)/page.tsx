import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  const testimonials = [
    {
      name: "Damo Hutchins",
      trade: "Licenced Electrician, NSW",
      quote: "Used to spend half my Sunday doing quotes and invoices. TradieDoc templates cut that down to 20 minutes. Bloody legend of a tool.",
      avatar: "DH",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Bec Sorensen",
      trade: "Plumber & Gas Fitter, QLD",
      quote: "My accountant actually complimented my paperwork for the first time ever. The SWMS and contractor agreements look super professional.",
      avatar: "BS",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mick Tran",
      trade: "Builder & Carpenter, VIC",
      quote: "Got a big commercial job and needed proper contracts fast. TradieDoc had exactly what I needed — saved me paying a lawyer $800 for a basic agreement.",
      avatar: "MT",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Shaz O'Brien",
      trade: "Painter & Decorator, WA",
      quote: "As a sole trader I never had time to sort out proper docs. Now I send professional quotes and invoices in minutes. Clients take me way more seriously.",
      avatar: "SO",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Documents Built for
          <span className="text-yellow-400"> Australian Tradies</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Professional quotes, invoices, contracts, and SWMS templates — ready to use in minutes. Stop losing jobs to dodgy paperwork.
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
            className="inline-block border border-slate-600 hover:border-slate-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
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
              Tradies Love TradieDoc
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Join thousands of Australian tradies who've ditched the paperwork stress.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4"
              >
                <p className="text-slate-200 text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-700">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.trade}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto glass-card p-12 rounded-3xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to sort your paperwork?
          </h2>
          <p className="text-slate-400 mb-8">
            Get access to all templates and start sending professional documents today.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all"
          >
            Start for Free
          </Link>
        </div>
      </section>
    </main>
  )
}
