import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}.`,
}

export default function AboutPage() {
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
            TradieDocs exists because tradies shouldn&apos;t have to spend their
            evenings writing SWMS from scratch or formatting invoices in Word.
          </p>
          <p>
            Australian tradies — especially sole traders and small crews — are great
            at their trade but buried in compliance paperwork. Builders want a SWMS
            before you start. The ATO wants compliant invoices. WorkSafe wants
            documented risk assessments. Clients want professional-looking quotes.
          </p>
          <p>
            TradieDocs is a library of pre-built, editable templates covering the
            documents Australian tradies use every week: SWMS, quotes, invoices,
            variation notices, incident reports, toolbox talks, subcontractor
            agreements, and site induction checklists.
          </p>
          <p>
            Alongside the template packs, we publish free lessons covering the stuff
            nobody teaches you at TAFE: how SWMS actually work, how to write quotes
            that win jobs, your rights under security of payment laws, ABN and GST
            basics, licensing across states, and more.
          </p>
          <p>
            Questions? Reach out at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-orange-400 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  )
}
