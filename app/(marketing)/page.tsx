import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
        {siteConfig.tagline}
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
        {siteConfig.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg transition-all"
        >
          Get Started Free
        </Link>
        <Link
          href="/lessons"
          className="inline-flex items-center justify-center rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold px-8 py-4 text-lg transition-all"
        >
          Browse Lessons
        </Link>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="glass-card p-6 rounded-2xl text-left">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-orange-400 text-sm">★★★★★</span>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            &ldquo;Finally sorted out my invoicing and contracts. Saved me hours every week and I actually get paid on time now.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">JM</div>
            <div>
              <p className="text-white text-sm font-semibold">Jake M.</p>
              <p className="text-slate-500 text-xs">Electrician, Brisbane QLD</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl text-left">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-orange-400 text-sm">★★★★★</span>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            &ldquo;The document templates are dead easy to use. My accountant was stoked when I showed up with everything in order.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">SR</div>
            <div>
              <p className="text-white text-sm font-semibold">Sarah R.</p>
              <p className="text-slate-500 text-xs">Plumber, Melbourne VIC</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl text-left">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-orange-400 text-sm">★★★★★</span>
          </div>
          <p className="text-slate-300 text-sm mb-4">
            &ldquo;Wish I had this when I started my business. Proper tradie-friendly — no confusing legal jargon, just what you need.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">DT</div>
            <div>
              <p className="text-white text-sm font-semibold">Dave T.</p>
              <p className="text-slate-500 text-xs">Builder, Sydney NSW</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
