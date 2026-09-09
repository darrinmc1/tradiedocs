import { SwmsStill } from "@/components/home/swms-still"

export function SwmsStillFrame({
  caption = "SWMS · Working at heights",
  tall = false,
}: {
  caption?: string
  tall?: boolean
}) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[1.75rem] bg-orange-500/25 blur-3xl sm:-inset-8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 top-8 hidden h-[78%] w-[42%] rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl sm:block lg:-right-10"
        aria-hidden="true"
      />
      <figure className="relative overflow-hidden rounded-xl border border-white/10 bg-[#12141A] shadow-orange-glow">
        <figcaption className="border-b border-white/10 px-4 py-2 text-xs text-slate-400">
          {caption}
        </figcaption>
        <div className={`relative overflow-hidden ${tall ? "h-56 sm:h-64" : "h-44 sm:h-56 lg:h-60"}`}>
          <div className="kickoff-pan origin-top-left">
            <SwmsStill />
          </div>
          <div className="swms-site-ready-stamp" aria-hidden="true">
            <span className="swms-site-ready-stamp-mark">Site ready</span>
          </div>
        </div>
      </figure>
    </div>
  )
}
