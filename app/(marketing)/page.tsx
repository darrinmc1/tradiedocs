import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        {siteConfig.tagline}
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
        {siteConfig.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold px-8 py-4 text-lg hover:bg-yellow-300 transition-colors"
        >
          Get Started Free
        </Link>
        <Link
          href="/lessons"
          className="inline-flex items-center justify-center rounded-xl border border-slate-600 text-white font-bold px-8 py-4 text-lg hover:border-slate-400 transition-colors"
        >
          Browse Lessons
        </Link>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="glass-card rounded-2xl p-6 text-left">
          <p className="text-slate-300 text-sm mb-4">&ldquo;Finally sorted out my invoicing and contracts. Saved me hours every week and I actually get paid on time now.&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">JM</div>
            <div>
              <p className="text-white font-semibold text-sm">Jake M.</p>
              <p className="text-slate-500 text-xs">Electrician, Brisbane QLD</p>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-left">
          <p className="text-slate-300 text-sm mb-4">&ldquo;Didn&apos;t realise how much I was leaving on the table with dodgy quotes. The templates alone are worth it — dead easy to use.&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">SR</div>
            <div>
              <p className="text-white font-semibold text-sm">Sarah R.</p>
              <p className="text-slate-500 text-xs">Plumber, Melbourne VIC</p>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 text-left">
          <p className="text-slate-300 text-sm mb-4">&ldquo;Went through the tax module before EOFY and it paid for itself ten times over. Wish I&apos;d found this years ago.&rdquo;</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">TC</div>
            <div>
              <p className="text-white font-semibold text-sm">Tom C.</p>
              <p className="text-slate-500 text-xs">Builder, Sydney NSW</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
