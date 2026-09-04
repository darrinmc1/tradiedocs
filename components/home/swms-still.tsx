import { Check, Circle, FileText } from "lucide-react"

/**
 * Frozen still of a SWMS template — real pack structure, not stock B-roll.
 * No prices. Copy matches the live SWMS Template Pack headings.
 */
const SIDEBAR = [
  { title: "Identify the work", done: true, current: false },
  { title: "List site hazards", done: true, current: false },
  { title: "Name the controls", done: true, current: false },
  { title: "Working at heights", done: false, current: true },
  { title: "Sign and keep on site", done: false, current: false },
] as const

export function SwmsStill() {
  return (
    <div
      className="hero-swms-still min-w-[560px] bg-[#0C1018] text-[#F4EDE4]"
      aria-hidden="true"
    >
      <div className="grid grid-cols-[220px_1fr]">
        <aside className="border-r border-[#3A2A1C] bg-[#16110C] p-4">
          <p className="text-[11px] text-[#C4B4A4]">Safe Work Method Statement</p>
          <p className="mt-2 text-[10px] uppercase tracking-wider text-orange-400/90">
            20-trade pack · Electrical
          </p>
          <p className="mt-1 text-xs font-medium">Working at heights</p>
          <ol className="mt-4 space-y-1">
            {SIDEBAR.map((item) => (
              <li
                key={item.title}
                className={
                  item.current
                    ? "flex items-center gap-2 rounded-md bg-orange-500/15 px-2 py-1.5 text-xs"
                    : "flex items-center gap-2 px-2 py-1.5 text-xs text-[#C4B4A4]"
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

        <div className="p-6">
          <p className="text-xs text-[#C4B4A4]">SWMS · High-risk construction work</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">
            Working at heights
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#D6C7B6]">
            Starting-point template. Add your ABN, company name, site address,
            and workers. Review hazards and controls for this job before anyone
            signs.
          </p>
          <p className="mt-6 text-sm font-semibold">Hazards on this activity</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#D6C7B6]">
            Fall from an unprotected edge. Dropped tools. Unstable access.
            Weather and wind on the roof. Controls sit next to each hazard —
            edge protection, harness where required, exclusion zone below,
            tool lanyards, and a competent person to check the setup.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#D6C7B6]">
            Print, sign, keep on site. Confirm current WHS rules with your
            state regulator before you rely on the document.
          </p>
        </div>
      </div>
    </div>
  )
}
