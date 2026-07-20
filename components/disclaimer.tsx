export function Disclaimer({ variant = "full" }: { variant?: "full" | "short" }) {
  if (variant === "short") {
    return (
      <p className="text-xs text-slate-500 leading-relaxed">
        General information and templates only — not legal, financial, or WHS
        advice. Rules, licensing thresholds, and tax figures change and vary by
        state; confirm current requirements with{" "}
        <a href="https://www.safeworkaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">Safe Work Australia</a>,
        your state regulator, and the{" "}
        <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">ATO</a>{" "}
        before relying on anything here.
      </p>
    )
  }
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-slate-400 leading-relaxed">
      <strong className="text-amber-400/90">General information only.</strong>{" "}
      TradieDocs provides general information and document templates about work
      health &amp; safety, licensing, and small-business admin. It is not legal,
      financial, tax, or WHS advice and doesn&apos;t account for your
      circumstances or your state&apos;s specific rules. Licensing thresholds,
      WHS regulations, penalties, and tax figures change and vary by state —
      always confirm current requirements with{" "}
      <a href="https://www.safeworkaustralia.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">Safe Work Australia</a>,
      your state WHS regulator, your state licensing body, and the{" "}
      <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">ATO</a>{" "}
      before relying on anything here. Templates are a starting point and must be
      adapted to each job and site.
    </div>
  )
}
