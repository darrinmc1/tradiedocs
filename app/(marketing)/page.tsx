import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Business Documents for Australian Tradies
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Professional quotes, invoices, contracts and compliance documents — built specifically for Australian tradespeople.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
            Browse Templates
          </Link>
          <Link href="/pricing" className="border border-slate-600 hover:border-slate-400 text-white font-bold py-3 px-8 rounded-xl transition-all">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything a Tradie Needs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">Quote Templates</h3>
            <p className="text-slate-400">Professional quotes that win jobs. Customisable for any trade.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">🧾</div>
            <h3 className="text-xl font-bold mb-2">Invoice Templates</h3>
            <p className="text-slate-400">Get paid faster with clear, professional invoices that meet ATO requirements.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Contracts & Agreements</h3>
            <p className="text-slate-400">Protect your business with solid contracts reviewed for Australian conditions.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-12">Got questions about compliance and how our templates work? We&apos;ve got answers.</p>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Are these templates legally compliant?</h3>
            <p className="text-slate-400">Our templates are drafted with reference to Australian consumer law, the Australian Consumer Law (ACL), and relevant building and construction legislation. They are designed to meet standard compliance requirements for Australian tradespeople. We recommend reviewing any contract with a solicitor for high-value or complex jobs, as every situation is unique.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Will these templates work for my state or territory?</h3>
            <p className="text-slate-400">Yes — our templates are designed to work across all Australian states and territories including NSW, VIC, QLD, WA, SA, TAS, ACT, and NT. Where state-specific licensing or disclosure requirements differ (such as in QLD or VIC for domestic building work), we include notes to guide you on what to add for your location.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Do the invoice templates meet ATO requirements?</h3>
            <p className="text-slate-400">Absolutely. Our invoice templates include all mandatory fields required by the Australian Taxation Office (ATO) for valid tax invoices — including ABN, GST amounts, supplier details, and itemised descriptions. They are suitable for both GST-registered and non-registered tradies.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Are the templates suitable for subcontractors?</h3>
            <p className="text-slate-400">Yes. We have templates specifically designed for subcontractor arrangements, including subcontractor agreements that address payment terms, scope of work, liability, and insurance requirements — all common concerns in the Australian construction industry.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">How often are the templates updated?</h3>
            <p className="text-slate-400">We review and update our templates regularly to reflect changes in Australian legislation, ATO requirements, and industry standards. Members on our Pro plan receive automatic access to all updated versions at no extra cost.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Can I customise the templates for my trade?</h3>
            <p className="text-slate-400">Yes — all templates are provided in editable formats so you can add your business name, logo, licence number, and any trade-specific terms. They work for electricians, plumbers, builders, carpenters, painters, landscapers, and most other trades.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Do I need a lawyer to use these templates?</h3>
            <p className="text-slate-400">For everyday quoting, invoicing, and standard residential jobs, our templates are ready to use straight away. For large commercial contracts, disputes, or unusual circumstances, we always recommend getting independent legal advice. Think of our templates as a solid, professional starting point — not a substitute for legal counsel when the stakes are high.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="glass-card p-12 rounded-2xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-8">Join thousands of Australian tradies who trust TradieDocs for their business paperwork.</p>
          <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all inline-block">
            Browse All Templates
          </Link>
        </div>
      </section>
    </main>
  )
}
