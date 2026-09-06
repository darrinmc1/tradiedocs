"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
import { SwmsStillFrame } from "@/components/home/swms-still-frame"
import { useParallax } from "@/hooks/use-parallax"

const SWMS_PACK_HREF = "/products/swms-pack"
const GUIDES_HREF = "/lessons"

export function Hero() {
  const writtenCount = ALL_MODULES.filter((m) => m.status === "published").length
  const washRef = useParallax<HTMLDivElement>(0.16)
  const gridRef = useParallax<HTMLDivElement>(0.09)
  const artefactRef = useParallax<HTMLDivElement>(0.06)
  const stillRef = useParallax<HTMLDivElement>(0.03)

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div
        ref={washRef}
        className="pointer-events-none absolute -inset-x-10 -top-24 h-[140%] bg-[radial-gradient(80%_60%_at_70%_10%,rgba(249,115,22,0.16),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
        aria-hidden="true"
      />
      <div
        ref={artefactRef}
        className="pointer-events-none absolute right-[4%] top-16 hidden w-[22rem] opacity-[0.14] lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 280 360" className="h-auto w-full text-orange-400">
          <rect x="8" y="8" width="264" height="344" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text x="28" y="44" fill="currentColor" fontSize="11" fontFamily="ui-sans-serif, system-ui">
            SWMS
          </text>
          <line x1="28" y1="58" x2="180" y2="58" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="78" width="160" height="8" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="28" y="96" width="220" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="112" width="200" height="6" rx="2" fill="currentColor" opacity="0.28" />
          <rect x="28" y="148" width="90" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="168" width="220" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="184" width="190" height="6" rx="2" fill="currentColor" opacity="0.22" />
          <rect x="28" y="220" width="70" height="6" rx="2" fill="currentColor" opacity="0.4" />
          <rect x="28" y="240" width="140" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-5 px-6 py-6 sm:gap-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,32rem)] lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <p className="text-sm font-medium text-orange-300">
            Safe Work Method Statements
          </p>
          <h1 className="mt-2 max-w-[22ch] text-balance font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl">
            {siteConfig.copy.heroTitle}
          </h1>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base md:text-lg">
            {siteConfig.copy.heroSubtitle}
          </p>
        </div>

        <div ref={stillRef} className="min-w-0 will-change-transform lg:row-span-2">
          <SwmsStillFrame />
        </div>

        <div className="min-w-0">
          <p className="mb-4 hidden max-w-xl text-sm leading-relaxed text-slate-400 sm:block">
            Open the pack for the trade, fill the site address, keep a signed
            copy on site. {writtenCount} published guides sit next to the
            templates. Checkout is not live.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={SWMS_PACK_HREF}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-8 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:from-orange-400 hover:to-amber-500 hover:shadow-orange-500/40"
            >
              {siteConfig.copy.ctaButton}
            </Link>
            <Link
              href={GUIDES_HREF}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-slate-200 transition-colors hover:bg-white/10"
            >
              {siteConfig.copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
