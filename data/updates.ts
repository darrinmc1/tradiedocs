// =============================================================================
// TRADIEDOCS — WEEKLY UPDATES
// =============================================================================

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
  title: "TradieDocs Is Live",
  description: "SWMS templates, quote packs, and compliance guides built for Australian tradies.",
  content: `## TradieDocs Is Live

We've launched with everything a sole trader or small crew needs to get their paperwork sorted.

### What's Available Now

**SWMS Template Pack — 20 Trades (AU$79)**
Pre-filled Safe Work Method Statements for electrical, plumbing, carpentry, roofing, concreting, and 15 more trades. Editable Word format. Confirm current WHS rules with your state regulator before use.

**Quote + Invoice Pack (AU$49)**
Professional quote template, ATO-compliant tax invoice, variation template, payment reminder scripts, and T&C boilerplate.

**Full Compliance Bundle (AU$119)**
Everything in both packs, plus incident report templates, 10 toolbox talk scripts, a subcontractor agreement, and a site induction checklist.

### 15 Free Guides

We've also published 15 lessons covering SWMS basics, quoting, invoicing, licensing, insurance, tax, and more. All free, no sign-up required.

### What's Next

- More trade-specific SWMS (landscaping, fencing, painting)
- State-specific compliance checklists
- Video walkthroughs for filling in templates

### Launch notes

Early supporters will hear about launch pricing first.`,
  date: "2026-07-01",
  tags: ["launch", "announcement"],
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
