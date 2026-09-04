// =============================================================================
// TRADIEDOCS — DIGITAL PRODUCTS
// =============================================================================

export interface Product {
  id: string
  name: string
  description: string
  content: string
  price: number
  stripePriceId: string
  features: string[]
  category: string
  downloadPath: string
  emoji: string
  tags: string[]
  dateAdded: string
}

const swmsPack: Product = {
  id: "swms-pack",
  name: "SWMS Template Pack — 20 Trades",
  description:
    "Coming Soon. Planned pack of starting-point Safe Work Method Statements for 20 trades. No file is available to download yet. Confirm current WHS rules with your state regulator before use.",
  content: `## SWMS Template Pack — 20 Trades

**Status: Coming Soon.** Checkout is not live and there is no zip or Word file on this site yet. The price below is the planned one-time amount for when the pack exists. Use Notify me if you want an email then.

When it is available, this pack is intended as **starting-point** Safe Work Method Statements for common high-risk construction activities — not a finished SWMS for your site.

### What You Get

- **20 pre-filled SWMS templates** covering electrical, plumbing, carpentry, roofing, concreting, demolition, excavation, scaffolding, working at heights, confined spaces, hot works, asbestos removal, crane operations, formwork, steel fixing, waterproofing, tiling, painting (heights), glazing, and landscaping (machinery)
- **Editable Word (.docx) format** — add your ABN, company name, and site-specific details
- **State-aware structure** — organised around typical WHS SWMS headings; confirm current rules in your state before use
- **High-risk work checklist** — a master checklist cross-referencing the high-risk construction work activities listed under the WHS Regulations

### How to Use Them

1. When the pack is available, open the template for your trade/activity
2. Fill in your business details, site address, and workers
3. Review and adjust hazards/controls for your specific job
4. Print, sign, and keep on-site

### Who It's For

Sole traders and small crews who will want starting-point SWMS files when this pack exists. A template is not a finished, site-specific SWMS.`,
  price: 79,
  stripePriceId: "price_1U4JsxPVyAgWnzPr9hwzd20r",
  features: [
    "20 pre-filled SWMS templates (electrical, plumbing, carpentry, roofing + 16 more)",
    "Editable Word format",
    "State-aware SWMS structure (confirm with your regulator)",
    "High-risk work checklist",
    "Free updates for 12 months",
  ],
  category: "Safety",
  downloadPath: "products/swms-pack.zip",
  emoji: "\u{1F9BA}",
  tags: ["swms", "safety", "compliance", "templates"],
  dateAdded: "2026-07-01",
}

const quoteInvoicePack: Product = {
  id: "quote-invoice-pack",
  name: "Quote + Invoice Pack",
  description:
    "Coming Soon. Planned quote, tax invoice, variation, and payment-reminder starters. No file is available to download yet.",
  content: `## Quote + Invoice Pack

**Status: Coming Soon.** Checkout is not live and there is no downloadable file yet. The price below is planned for when the pack exists. Use Notify me if you want an email then.

When it is available, the pack is intended to help you send a clearer quote and a clearer invoice — not to replace advice on a payment dispute.

### What You Get

- **Professional quote template** — clean layout with itemised pricing, scope of work, validity period, and acceptance signature block
- **Tax invoice template (ATO-compliant)** — ABN, GST line items, payment terms, bank details
- **Variation/change-order template** — document changes, costs, and get sign-off before you start extra work
- **Payment reminder email scripts** — 3 escalating templates (7 days, 14 days, 30 days overdue)
- **Terms & conditions boilerplate** — payment terms, warranty, dispute resolution, limitation of liability

### How to Use Them

1. When the pack is available, open the quote template and add your logo and ABN
2. Save as your master template
3. Duplicate for each new job and fill in job-specific details

### Who It's For

Tradies who are great at the work but hate the paperwork. If you've lost a job because your quote looked unprofessional or waited months to get paid because your invoice was unclear — these templates fix that.`,
  price: 49,
  stripePriceId: "price_1U4JsyPVyAgWnzPrnk8G5Jbo",
  features: [
    "Professional quote template",
    "Tax invoice template (ATO-compliant)",
    "Variation/change-order template",
    "Payment reminder email scripts",
    "Terms & conditions boilerplate",
  ],
  category: "Business",
  downloadPath: "products/quote-invoice-pack.zip",
  emoji: "\u{1F4B0}",
  tags: ["quote", "invoice", "business", "templates"],
  dateAdded: "2026-07-01",
}

const complianceBundle: Product = {
  id: "compliance-bundle",
  name: "Full Compliance Bundle",
  description:
    "Coming Soon. Planned bundle of both packs plus extra forms. No file is available to download yet. Not for sale today.",
  content: `## Full Compliance Bundle

**Status: Coming Soon.** Checkout is not live and there is no downloadable file yet. The price below is planned for when the files exist. Use Notify me if you want an email then.

When it is available, this bundle is intended to combine the SWMS starters and the quote/invoice starters with extra forms. It is not a complete WHS system and it is not legal advice.

### What You Get

**Everything in the SWMS Template Pack ($79):**
- 20 pre-filled SWMS templates
- High-risk work checklist
- State-aware SWMS structure (confirm with your regulator)

**Everything in the Quote + Invoice Pack ($49):**
- Professional quote template
- ATO-compliant tax invoice
- Variation template
- Payment reminder scripts
- Terms & conditions boilerplate

**Plus these Bundle exclusives:**

- **Incident report template** — structured form for recording workplace incidents and near-misses
- **Toolbox talk templates × 10** — pre-written 5-minute safety talks (manual handling, heights, electrical, heat stress, PPE, housekeeping, hazardous substances, mobile plant, trenching, fatigue)
- **Subcontractor agreement** — scope, payment terms, insurance requirements, safety obligations
- **Site induction checklist** — emergency procedures, hazard identification, PPE requirements

### Save $9 vs. Buying Separately

Bundle price: $119 (vs. $128 for both packs individually), plus four bonus templates you can't buy anywhere else.`,
  price: 119,
  stripePriceId: "price_1U4Jt0PVyAgWnzPrXAEWTDFH",
  features: [
    "Everything in both packs",
    "Incident report template",
    "Toolbox talk templates x10",
    "Subcontractor agreement",
    "Site induction checklist",
  ],
  category: "Bundle",
  downloadPath: "products/compliance-bundle.zip",
  emoji: "\u{1F4E6}",
  tags: ["bundle", "swms", "quote", "compliance"],
  dateAdded: "2026-07-01",
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_PRODUCTS: Product[] = [swmsPack, quoteInvoicePack, complianceBundle]

export const PRODUCT_MAP = Object.fromEntries(
  ALL_PRODUCTS.map((p) => [p.id, p])
) as Record<string, Product>

export function getProductById(id: string): Product | undefined {
  return PRODUCT_MAP[id]
}
