"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"
import { ALL_MODULES } from "@/data/modules"

const FEATURED_IDS = [
  "do-you-need-a-swms",
  "swms-vs-jsa-vs-risk-assessment",
  "how-to-fill-out-a-swms",
  "what-happens-when-worksafe-shows-up",
] as const

const CHIPS = [
  { label: "Safety & SWMS", href: "/lessons" },
  { label: "Quotes & invoicing", href: "/lessons" },
  { label: "Licensing", href: "/lessons" },
] as const

export function GuideRail() {
  const featured = FEATURED_IDS.map((id) => ALL_MODULES.find((m) => m.id === id)).filter(
    (m): m is NonNullable<typeof m> => Boolean(m && m.status === "published"),
  )
  const writtenCount = ALL_MODULES.filter((m) => m.status === "published").length

  return (
    <section className="border-b border-white/10 bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-orange-300">Written guides</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight text-white">
            Published SWMS and site-paperwork guides.
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            {writtenCount} published guides. SWMS first. Quotes, invoices, and
            licensing sit next to them.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <Reveal key={chip.label} className={`stagger-${i + 1}`}>
              <Link
                href={chip.href}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-100 transition-colors hover:border-orange-400/50 hover:bg-white/10"
              >
                {chip.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {featured.map((lesson, i) => (
            <li key={lesson.id}>
              <Reveal className={`stagger-${Math.min(i + 1, 4)}`}>
                <Link
                  href={`/lessons/${lesson.id}`}
                  className="block rounded-xl border border-white/10 bg-[#12141A] p-5 transition-colors hover:border-orange-400/40 hover:bg-white/5"
                >
                  <p className="text-xs text-slate-500">
                    Written · {lesson.duration} · free
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">{lesson.title}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
