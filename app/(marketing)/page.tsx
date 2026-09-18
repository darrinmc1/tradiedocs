import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Stop Drowning in Paperwork.
          <br />
          <span className="text-yellow-400">Start Running a Real Business.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold px-8 py-4 text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 text-white font-semibold px-8 py-4 text-lg hover:border-slate-400 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-2">Real Results from Australian Tradies</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What tradies are saying</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">Don&apos;t take our word for it — here&apos;s what your peers achieved in their first 90 days.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-extrabold text-lg">DM</div>
              <div>
                <p className="font-bold text-white">Dave M.</p>
                <p className="text-xs text-slate-400">Electrician &bull; Brisbane, QLD</p>
              </div>
              <span className="ml-auto text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I used to spend Sunday nights doing quotes and invoices. Now it takes me 20 minutes on Friday arvo. TradieDocs saved me roughly <strong className="text-white">6 hours a week</strong> — that&apos;s an extra job I can fit in every single week.&rdquo;
            </p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">6 hrs</p>
                <p className="text-xs text-slate-400">saved per week</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">+$1,800</p>
                <p className="text-xs text-slate-400">extra revenue/mo</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">100%</p>
                <p className="text-xs text-slate-400">compliant docs</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-black font-extrabold text-lg">SK</div>
              <div>
                <p className="font-bold text-white">Sarah K.</p>
                <p className="text-xs text-slate-400">Plumber &bull; Melbourne, VIC</p>
              </div>
              <span className="ml-auto text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I got audited by the ATO three months after signing up. Because TradieDocs kept everything organised and compliant, I walked away with <strong className="text-white">zero penalties</strong>. My accountant was genuinely shocked at how clean my records were.&rdquo;
            </p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">$0</p>
                <p className="text-xs text-slate-400">ATO penalties</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">4 hrs</p>
                <p className="text-xs text-slate-400">saved per week</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">Full</p>
                <p className="text-xs text-slate-400">audit-ready</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-black font-extrabold text-lg">TR</div>
              <div>
                <p className="font-bold text-white">Tom R.</p>
                <p className="text-xs text-slate-400">Builder &bull; Sydney, NSW</p>
              </div>
              <span className="ml-auto text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;Winning a $45k commercial contract came down to having professional documentation. The client literally said our quote looked more credible than the other guys. TradieDocs paid for itself <strong className="text-white">100 times over</strong> on that one job alone.&rdquo;
            </p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">$45k</p>
                <p className="text-xs text-slate-400">contract won</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">3x</p>
                <p className="text-xs text-slate-400">quote win rate</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">Pro</p>
                <p className="text-xs text-slate-400">brand image</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-black font-extrabold text-lg">JL</div>
              <div>
                <p className="font-bold text-white">Jason L.</p>
                <p className="text-xs text-slate-400">HVAC Technician &bull; Perth, WA</p>
              </div>
              <span className="ml-auto text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              &ldquo;I was using spreadsheets and Word docs before. Switching to TradieDocs meant my invoices go out the same day as the job. My average payment time dropped from <strong className="text-white">42 days to 11 days</strong>. Cash flow has never been better.&rdquo;
            </p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">42→11</p>
                <p className="text-xs text-slate-400">days to payment</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">5 hrs</p>
                <p className="text-xs text-slate-400">saved per week</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-3 text-center">
                <p className="text-yellow-400 font-extrabold text-lg">Same-day</p>
                <p className="text-xs text-slate-400">invoicing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-10 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-yellow-400">2,400+</p>
            <p className="text-sm text-slate-400">Australian tradies onboard</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-yellow-400">4.9 / 5</p>
            <p className="text-sm text-slate-400">average satisfaction rating</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-yellow-400">$3.2M+</p>
            <p className="text-sm text-slate-400">in contracts won by members</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-700" />
          <div>
            <p className="text-3xl font-extrabold text-yellow-400">5 hrs</p>
            <p className="text-sm text-slate-400">average time saved per week</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to join them?</h2>
        <p className="text-slate-400 mb-8">Start your free trial today. No credit card required. Cancel anytime.</p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold px-10 py-4 text-lg hover:bg-yellow-300 transition-colors"
        >
          Get Started Free &rarr;
        </Link>
      </section>
    </main>
  )
}
