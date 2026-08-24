import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import { StickyNewsletterBanner } from "@/components/sticky-newsletter-banner"

export default function MarketingHomePage() {
  return (
    <>
      <StickyNewsletterBanner />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                  Safe Work Method Statements — Done Right
                </h1>
                <p className="text-blue-200 text-lg mb-8">
                  Create compliant SWMS documents in minutes. Trusted by Australian tradies, contractors and safety managers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/swms/new"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl text-center transition-colors"
                  >
                    Create a SWMS Free
                  </Link>
                  <Link
                    href="/templates"
                    className="border border-blue-400 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
                  >
                    Browse Templates
                  </Link>
                </div>
              </div>
              {/* Email capture above the fold */}
              <div>
                <NewsletterForm variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need for WHS compliance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "📋", title: "SWMS Builder", desc: "Step-by-step builder with pre-filled hazard libraries for common trades." },
                { icon: "✅", title: "Compliance Checks", desc: "Automatic checks against SafeWork Australia and state WHS regulations." },
                { icon: "📄", title: "PDF Export", desc: "Professional, print-ready PDFs with your company branding." },
                { icon: "🔄", title: "Reusable Templates", desc: "Save and reuse your SWMS across multiple projects and sites." },
                { icon: "✍️", title: "Digital Signatures", desc: "Collect worker sign-offs digitally — no paper required." },
                { icon: "📁", title: "Document Storage", desc: "Securely store all your safety documents in one place." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page email capture */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm variant="default" />
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-8">Trusted by safety professionals across Australia</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { stat: "2,400+", label: "Active users" },
                { stat: "18,000+", label: "SWMS created" },
                { stat: "4.9 / 5", label: "Average rating" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-4xl font-extrabold text-blue-900">{stat}</p>
                  <p className="text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
