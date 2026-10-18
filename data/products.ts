// =============================================================================
// TRADIEDOCS — DIGITAL PRODUCTS
// One-off packs only. Amounts are unchanged. Currency is AUD (AU$79 / AU$49 / AU$119).
// available stays false until a real pack file exists for that downloadPath.
// =============================================================================

export interface Product {
  id: string
  name: string
  description: string
  content: string
  price: number
  /**
   * Stripe Price lookup_key. Checkout resolves this on the server.
   * Never send a Price ID from the browser.
   */
  lookupKey: string
  /**
   * False when the pack file is missing or only a placeholder.
   * Buy stays on "Coming soon" until this is true, even if Stripe is enabled.
   */
  available: boolean
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
    "Pre-filled Safe Work Method Statements for 20 trades — electrical, plumbing, carpentry, roofing, concreting, and 15 more. Editable Word format. Starting-point templates — confirm current WHS rules with your state regulator.",
  content: `## SWMS Template Pack — 20 Trades

Stop spending hours writing SWMS from scratch. This pack contains 20 pre-filled Safe Work Method Statements covering the most common high-risk construction activities.

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

Sole-trader tradies and small crews who need compliant SWMS but don't have a safety officer to write them.`,
  price: 79,
  lookupKey: "tradiedocs_swms_once_aud79",
  available: false,
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
    "Professional quote template, ATO-compliant tax invoice, variation template, payment reminder scripts, and T&C boilerplate.",
  content: `## Quote + Invoice Pack

Win more jobs with professional quotes and get paid faster with clear invoices.

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
  lookupKey: "tradiedocs_quote_invoice_once_aud49",
  available: false,
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
    "Everything in both packs, plus incident report templates, 10 toolbox talk templates, subcontractor agreement, and site induction checklist.",
  content: `## Full Compliance Bundle

The complete paperwork toolkit for tradies who want every document they'll ever need on a job site.

### What You Get

**Everything in the SWMS Template Pack (AU$79):**
- 20 pre-filled SWMS templates
- High-risk work checklist
- State-aware SWMS structure (confirm with your regulator)

**Everything in the Quote + Invoice Pack (AU$49):**
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

### Save AU$9 vs. Buying Separately

Bundle price: AU$119 (vs. AU$128 for both packs individually), plus four bonus templates you can't buy anywhere else.`,
  price: 119,
  lookupKey: "tradiedocs_compliance_bundle_once_aud119",
  available: false,
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

// Retired sandbox Price IDs. Checkout no longer sends these.
// Do not delete the Prices in Stripe; they are retired only in this app.
// swms-pack: price_1U4JsxPVyAgWnzPr9hwzd20r
// quote-invoice-pack: price_1U4JsyPVyAgWnzPrnk8G5Jbo
// compliance-bundle: price_1U4Jt0PVyAgWnzPrXAEWTDFH

/**
 * Map a client sku to a catalogue product.
 * Accepts the lookup key (preferred) or the product id.
 * Rejects raw Stripe Price IDs (`price_…`).
 */
export function resolveCheckoutProduct(sku: string): Product | undefined {
  const key = sku.trim()
  if (!key || key.startsWith("price_")) return undefined
  return ALL_PRODUCTS.find(
    (product) => product.lookupKey === key || product.id === key
  )
}
