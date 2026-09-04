// =============================================================================
// TRADIEDOCS — WEEKLY UPDATES
// =============================================================================

import { PUBLISHED_LESSON_COUNT } from "@/data/modules"

export interface WeeklyUpdate {
  id: string
  title: string
  description: string
  content: string
  date: string
  tags: string[]
  category: string
}

const launchUpdate: WeeklyUpdate = {
  id: "launch-tradiedocs",
  title: "TradieDocs Is Live — Written Lessons First",
  description:
    "Free written lessons on SWMS, quoting, and compliance are live. Template packs are priced and Coming Soon — no file download and no checkout yet.",
  content: `## TradieDocs is live — written lessons first

TradieDocs publishes practical, written guides for Australian sole traders and small crews. The aim is usable paperwork education. It is not legal, tax, or WHS advice.

### What is available now

**${PUBLISHED_LESSON_COUNT} free written lessons** covering:

- When a SWMS is required, how it differs from a JSA, and how to fill one in
- Quoting, pricing, invoicing, and variations
- Licensing orientation for electrical, plumbing, and building/carpentry
- ABN, GST, and BAS basics (confirm figures with the ATO)
- Public liability versus income protection
- Subcontractor versus employee factors
- Toolbox talks and WHS inspections

No account is required to read them. Open [Lessons](/lessons).

### What is Coming Soon

These packs are listed with planned one-time prices. **Checkout is not live. There is no downloadable zip or Word file yet.** Use Notify me on a pack page if you want an email when a pack is available.

- **SWMS Template Pack** — planned $79 — starting-point SWMS files for common trades (must still be made site-specific)
- **Quote + Invoice Pack** — planned $49 — quote, tax invoice, and variation starters
- **Full Compliance Bundle** — planned $119 — both packs plus extra forms when those files exist

Do not treat a product page as a completed purchase or a completed download.

### What we will not claim

- We will not count unpublished drafts as live lessons
- We will not describe a pack as downloadable until a file exists
- We will not present these pages as legal advice or as a substitute for your state regulator

### What is next (when files exist)

- Trade-specific SWMS starters
- Form packs for toolbox talks, inductions, and incident records
- Checkout for the priced packs above

Prices shown on product pages are planned one-time amounts for when checkout opens. They are not a live offer today.`,
  date: "2026-07-01",
  tags: ["launch", "announcement", "coming-soon"],
  category: "Announcement",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_UPDATES: WeeklyUpdate[] = [launchUpdate]

export const UPDATE_MAP = Object.fromEntries(
  ALL_UPDATES.map((u) => [u.id, u])
) as Record<string, WeeklyUpdate>

export function getUpdateById(id: string): WeeklyUpdate | undefined {
  return UPDATE_MAP[id]
}
