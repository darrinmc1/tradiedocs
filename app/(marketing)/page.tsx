import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            {siteConfig.hero?.heading ?? "Business Docs for Australian Tradies"}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {siteConfig.hero?.subheading ?? "Stop losing jobs to dodgy paperwork. Get professional quotes, contracts, and invoices built for tradies — in minutes."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/products"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-xl text-lg transition-all"
            >
              Browse Templates
            </Link>
            <Link
              href="/lessons"
              className="inline-block border border-slate-500 hover:border-slate-300 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all"
            >
              Free Lessons
            </Link>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-5 rounded-2xl text-left">
              <p className="text-slate-300 text-sm mb-4">&ldquo;Used the quote template on a big reno job and landed the contract. Looked way more professional than what I was sending before.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">JM</div>
                <div>
                  <p className="text-white text-sm font-semibold">Jake M.</p>
                  <p className="text-slate-500 text-xs">Carpenter &mdash; Brisbane, QLD</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl text-left">
              <p className="text-slate-300 text-sm mb-4">&ldquo;Finally got paid on time. The invoice template is dead simple and my clients actually read it. Worth every cent.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">SR</div>
                <div>
                  <p className="text-white text-sm font-semibold">Sarah R.</p>
                  <p className="text-slate-500 text-xs">Electrician &mdash; Melbourne, VIC</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl text-left">
              <p className="text-slate-300 text-sm mb-4">&ldquo;The subcontractor agreement saved me from a nightmare situation. Proper terms, plain English. Legends.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">DT</div>
                <div>
                  <p className="text-white text-sm font-semibold">Dave T.</p>
                  <p className="text-slate-500 text-xs">Plumber &mdash; Perth, WA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof micro-copy */}
          <p className="mt-8 text-slate-500 text-sm">Trusted by tradies across Australia &mdash; no lock-in, no BS.</p>
        </div>
      </section>
    </main>
  )
}
