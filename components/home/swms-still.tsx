import { Check, Circle, FileText } from "lucide-react"

/**
 * SWMS template still — real pack structure, not stock B-roll.
 * Unique motion: 7s hazard-row scan + site-ready stamp (CSS; reduced-motion off).
 * No prices. Copy matches the live SWMS Template Pack headings.
 */
const SIDEBAR = [
  { title: "Identify the work", done: true, current: false },
  { title: "List site hazards", done: true, current: false },
  { title: "Name the controls", done: true, current: false },
  { title: "Working at heights", done: false, current: true },
  { title: "Sign and keep on site", done: false, current: false },
] as const

const HAZARDS = [
  { hazard: "Fall from unprotected edge", control: "Edge protection" },
  { hazard: "Dropped tools", control: "Tool lanyards" },
  { hazard: "Unstable access", control: "Competent person check" },
  { hazard: "Weather and wind on the roof", control: "Exclusion zone below" },
] as const

export function SwmsStill() {
  return (
    <div
      className="hero-swms-still relative min-w-[560px] bg-[#0B1220] text-slate-100"
      data-swms-motion="hazard-scan"
      aria-hidden="true"
    >
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="border-r border-white/10 bg-[#12141A] px-3 py-3">
          <p className="text-[11px] text-slate-400">Safe Work Method Statement</p>
          <p className="mt-1.5 text-[10px] uppercase tracking-wider text-orange-400/90">
            20-trade pack · Electrical
          </p>
          <p className="mt-1 text-xs font-medium text-slate-100">Working at heights</p>
          <ol className="mt-3 space-y-0.5">
            {SIDEBAR.map((item) => (
              <li
                key={item.title}
                className={
                  item.current
                    ? "flex items-center gap-2 rounded-md bg-orange-500/15 px-2 py-1 text-xs"
                    : "flex items-center gap-2 px-2 py-1 text-xs text-slate-400"
                }
              >
                {item.done ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                ) : item.current ? (
                  <FileText className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                ) : (
                  <Circle className="h-3.5 w-3.5 shrink-0 opacity-50" />
                )}
                <span className="truncate">{item.title}</span>
              </li>
            ))}
          </ol>
        </aside>

        <div className="relative px-5 py-3">
          <p className="text-[11px] text-slate-400">SWMS · High-risk construction work</p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">
            Working at heights
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Hazards on this activity
          </p>
          <table className="mt-1.5 w-full border-collapse text-left text-[11px] leading-snug">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-slate-500">
                <th className="pb-1 pr-3 font-medium">Hazard</th>
                <th className="pb-1 font-medium">Control</th>
              </tr>
            </thead>
            <tbody>
              {HAZARDS.map((row) => (
                <tr key={row.hazard} className="swms-hazard-row">
                  <td className="py-1.5 pr-3 text-slate-200">{row.hazard}</td>
                  <td className="py-1.5 text-slate-300">{row.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="swms-site-ready-stamp" aria-hidden="true">
        <span className="swms-site-ready-stamp-mark">Site ready</span>
      </div>
    </div>
  )
}
