import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  const faqs = [
    {
      q: "Are these SWMS templates legally compliant?",
      a: "Yes. All our Safe Work Method Statement (SWMS) templates are built to meet the requirements of the Work Health and Safety (WHS) Act and Regulations across Australian states and territories. They're reviewed regularly to stay current with Safe Work Australia guidelines. That said, you should always tailor each SWMS to your specific job site conditions — no generic template replaces your duty of care."
    },
    {
      q: "How often do I need to update my SWMS?",
      a: "You should review and update your SWMS whenever the scope of work changes, a new hazard is identified, after a near-miss or incident, or at least annually as a general rule. Our templates are versioned so you always know when they were last updated, and we notify members when significant regulatory changes require a revision."
    },
    {
      q: "Do I need a subscription to use TradieDoc templates?",
      a: "No ongoing subscription required. You can purchase individual SWMS and compliance document packs as a one-off download. We also offer a membership plan for tradies who want access to the full library plus future updates — but there's no lock-in contract."
    },
    {
      q: "What trades are the SWMS templates suitable for?",
      a: "Our library covers a wide range of trades including electrical, plumbing, carpentry, concreting, roofing, landscaping, painting, tiling, and general construction. Each template is tailored to the specific high-risk activities and hazards relevant to that trade."
    },
    {
      q: "Can I edit the templates to suit my business?",
      a: "Absolutely. All documents are provided in editable formats (Word/PDF) so you can add your business name, logo, site-specific details, and any additional controls relevant to your job. Customising your SWMS is not just allowed — it's required to make it legally valid for your specific work."
    },
    {
      q: "Do these documents cover high-risk construction work (HRCW)?",
      a: "Yes. Many of our SWMS templates specifically address high-risk construction work as defined under the WHS Regulations — including work at heights, in confined spaces, involving live electrical, demolition, and more. These are the situations where a written SWMS is legally mandatory."
    },
    {
      q: "Will these templates hold up during a SafeWork inspection?",
      a: "Our templates are structured to meet the documentation requirements inspectors look for: identified hazards, risk ratings, control measures aligned to the hierarchy of controls, and worker sign-off sections. While we can't guarantee outcomes of any specific inspection, tradies using our documents are well-prepared."
    },
    {
      q: "I'm a sole trader — do I still need a SWMS?",
      a: "If you're carrying out high-risk construction work, yes — even as a sole trader. The legal obligation applies to the work being done, not the size of your business. A SWMS protects you legally and practically, and many principal contractors will require one before you set foot on site."
    },
    {
      q: "How is TradieDoc different from free templates I find online?",
      a: "Free templates are often generic, outdated, or not written for Australian WHS law. TradieDoc templates are trade-specific, regularly updated, written in plain English, and include guidance notes so you understand what you're filling in — not just a blank form to tick a box."
    },
    {
      q: "What if I need a document that isn't in the library yet?",
      a: "Get in touch. We take requests seriously and regularly add new templates based on what tradies actually need. Members get early access to new documents as soon as they're published."
    }
  ]

  return (
    <main>
      {/* ── existing page content would remain here ── */}

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-950" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-center mb-12">
            Real questions from tradies about compliance, SWMS, and how TradieDoc works.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <h3 className="text-white font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">Still have questions?</p>
            <Link
              href="/about"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
