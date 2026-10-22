import { siteConfig } from "@/config/site.config"
import { getSupportEmail } from "@/lib/support-email"

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}.`,
}

export default function AboutPage() {
  const supportEmail = getSupportEmail()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-5xl mb-4">{siteConfig.theme.emoji}</div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">About {siteConfig.name}</span>
          </h1>
          <p className="text-lg text-slate-400">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <article className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed">
          <p>
            TradieDocs publishes written lessons on the documents Australian sole
            traders and small crews are asked for: SWMS, quotes, invoices,
            variations, licensing orientation, insurance, and tax basics.
          </p>
          <p>
            Builders may ask for a SWMS before you start. The ATO sets tax-invoice
            rules if you are GST-registered. WHS regulators expect high-risk
            construction work to be planned and documented. Clients expect a clear
            quote. These pages explain those documents in plain language.
          </p>
          <p>
            Template packs (SWMS starters, quote and invoice files, and a
            compliance bundle) are listed on the products page. They are{" "}
            <strong>Coming Soon</strong>: no pack files are ready to download yet.
          </p>
          <p>
            Lessons are free to read and do not require an account. They are
            general information — not legal, financial, tax, or WHS advice. Confirm
            current rules with your state regulator and the ATO before you rely on
            anything here.
          </p>
          {supportEmail ? (
            <p>
              Questions? Reach out at{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="text-orange-400 hover:underline"
              >
                {supportEmail}
              </a>
              .
            </p>
          ) : null}
        </article>
      </div>
    </div>
  )
}
