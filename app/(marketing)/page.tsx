import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  const testimonials = [
    {
      name: "Damo Hutchins",
      trade: "Electrician, Sydney NSW",
      avatar: "DH",
      avatarBg: "bg-yellow-500",
      quote: "Used to spend half my Sunday doing quotes and invoices. TradieDocs cut that down to 20 minutes. Absolute game changer for a one-man band."
    },
    {
      name: "Bec Sorensen",
      trade: "Plumber, Brisbane QLD",
      avatarBg: "bg-blue-500",
      avatar: "BS",
      quote: "The contract templates are legit. Saved me from a nightmare client dispute last month — had everything in writing and it held up. Worth every cent."
    },
    {
      name: "Mick Tran",
      trade: "Builder, Melbourne VIC",
      avatarBg: "bg-green-500",
      avatar: "MT",
      quote: "I'm not great with paperwork but TradieDocs makes it dead simple. My accountant is stoked because everything's actually organised now."
    },
    {
      name: "Shaz Kowalski",
      trade: "Painter & Decorator, Perth WA",
      avatarBg: "bg-purple-500",
      avatar: "SK",
      quote: "Finally stopped losing jobs to bigger companies just because my quotes looked dodgy. Professional docs made a massive difference to how clients see me."
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-xl transition-all"
          >
            Get Started Free
          </Link>
          <Link
            href="/pricing"
            className="inline-block border border-slate-600 hover:border-slate-400 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-3">Trusted by Aussie Tradies</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Real tradies. Real results. See what your fellow tradies are saying about TradieDocs.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 rounded-2xl flex flex-col gap-4">
              <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.trade}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
