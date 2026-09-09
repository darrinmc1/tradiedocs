import { siteConfig } from "@/config/site.config"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SWMS & Safety Docs for Australian Tradies
        </h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Download ready-to-use, compliant SWMS templates, toolbox talks, and safety documents — built specifically for Australian tradies.
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

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to know about our SWMS templates and safety documents before you buy.
        </p>

        <div className="space-y-6">

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Are these SWMS templates legally compliant?</h3>
            <p className="text-slate-400">
              Yes. All our SWMS templates are written to meet the requirements of the <em>Work Health and Safety Act 2011</em> and the <em>Work Health and Safety Regulation 2017</em> as adopted across Australian states and territories. They cover the mandatory elements required for high-risk construction work, including hazard identification, risk controls, and worker sign-off sections. We recommend reviewing each document with your site supervisor to ensure it reflects your specific work conditions.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Do these templates work in my state or territory?</h3>
            <p className="text-slate-400">
              Yes. Our templates are designed to comply with the model WHS laws adopted by NSW, VIC, QLD, SA, WA, TAS, ACT, and NT. Each template references the relevant national standards and codes of practice. If your state has specific additional requirements (such as Victoria&apos;s OHS Act), the templates include notes to guide you through any local variations.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">How often do I need to update my SWMS?</h3>
            <p className="text-slate-400">
              Under WHS regulations, a SWMS must be reviewed and updated whenever there is a change to the work, the site conditions, or the risk controls. As a general rule, you should review your SWMS at the start of each new job, after any incident or near-miss, and at least annually. Our templates are designed to be easy to edit so you can keep them current without starting from scratch.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Can I edit the templates to suit my specific job?</h3>
            <p className="text-slate-400">
              Absolutely. All templates are provided in editable Word (.docx) format so you can customise them with your company name, logo, specific tasks, site details, and risk controls. In fact, WHS regulations require that your SWMS reflects the actual work being performed — so editing the template to match your job is not just allowed, it&apos;s required.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Do I need a SWMS for every job?</h3>
            <p className="text-slate-400">
              A SWMS is legally required for any high-risk construction work (HRCW) as defined under the WHS Regulations. This includes work at heights over 2 metres, demolition, excavation, work near energised electrical installations, and more. If your work falls into any of these categories, you must have a SWMS in place before work begins. Our product catalogue covers all major HRCW categories.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">What trades are these templates suitable for?</h3>
            <p className="text-slate-400">
              Our library covers a wide range of trades including carpentry, electrical, plumbing, roofing, concreting, landscaping, painting, tiling, HVAC, and general construction. Whether you&apos;re a sole trader or running a small crew, you&apos;ll find templates relevant to your day-to-day work. Browse our full product catalogue to find documents specific to your trade.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">How quickly can I access the templates after purchase?</h3>
            <p className="text-slate-400">
              Instantly. As soon as your payment is processed, you&apos;ll receive a download link via email and can access your files directly from your account dashboard. There&apos;s no waiting — you can have a compliant SWMS ready to go in minutes, even if you&apos;re on-site and need it urgently.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Are the templates written by safety professionals?</h3>
            <p className="text-slate-400">
              Yes. Our templates are developed by experienced WHS consultants and construction safety professionals with hands-on experience across Australian worksites. They&apos;re written in plain English so they&apos;re easy for workers to understand and sign off on — not just legal jargon that sits in a folder.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">What happens if a SafeWork inspector asks to see my SWMS?</h3>
            <p className="text-slate-400">
              If a SafeWork (or WorkSafe) inspector visits your site, you are legally required to produce your SWMS on request. Our templates include all the mandatory elements inspectors look for: identified high-risk work, hazards and risks, control measures, and worker acknowledgement signatures. Using a properly completed TradieDoc template gives you confidence that you&apos;re covered.
            </p>
          </div>

          <div className="border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">Is there a subscription or is it a one-time purchase?</h3>
            <p className="text-slate-400">
              We offer both options. You can purchase individual templates as a one-time download, or subscribe to get access to our full library plus any new templates we add. Subscribers also get free updates whenever a template is revised to reflect changes in legislation or codes of practice. Check our <Link href="/pricing" className="text-orange-400 hover:text-orange-300 underline">pricing page</Link> for current plans.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
