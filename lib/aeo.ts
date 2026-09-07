// =============================================================================
// TRADIEDOCS — AEO (Answer Engine Optimization)
// Generates /llms.txt + /llm.txt so AI assistants can read what the site is,
// what it does, its key pages, pricing, and FAQs.
// =============================================================================

import { siteConfig } from "@/config/site.config"
import { PUBLISHED_LESSON_COUNT, PUBLISHED_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import { ALL_UPDATES } from "@/data/updates"

const siteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `https://${siteConfig.domain}`

export const tradieDocsFaqs = [
  {
    question: "What is TradieDocs?",
    answer:
      "TradieDocs publishes written lessons on SWMS, quoting, invoicing, licensing, and compliance for Australian tradies. Template packs are Coming Soon — checkout is not live and there is no file to download yet. General information only; not legal advice.",
  },
  {
    question: "What is a SWMS?",
    answer:
      "A Safe Work Method Statement (SWMS) documents high-risk construction work, the hazards involved, and the control measures. In jurisdictions that use the model WHS Regulations, a SWMS is required for high-risk construction work before that work starts. Confirm the local definition with the state or territory regulator.",
  },
  {
    question: "Do I need a SWMS for every job?",
    answer:
      "Not every job. A SWMS is required for high-risk construction work as defined in the WHS (or OHS) rules that apply to the site. TradieDocs has a free written lesson on when a SWMS is typically required. Template files are Coming Soon.",
  },
  {
    question: "How much do TradieDocs templates cost?",
    answer:
      "Nothing is for sale today. Planned one-time prices when checkout opens: SWMS Template Pack $79, Quote + Invoice Pack $49, Full Compliance Bundle $119. There is no subscription and no downloadable file yet. Join the waitlist on a product page.",
  },
  {
    question: "Is TradieDocs legal advice?",
    answer:
      "No. TradieDocs provides general information and, when files exist, starting-point templates. It is not legal, financial, tax, or WHS advice. Confirm current rules with Safe Work Australia, your state regulator, and the ATO.",
  },
  {
    question: "How many free lessons are on the site?",
    answer: `There are ${PUBLISHED_LESSON_COUNT} published written lessons. That count is the number of lessons with status published in the lesson data — not a marketing estimate.`,
  },
]

export function buildLlmTxt(): string {
  const base = siteUrl()
  const productBlock = ALL_PRODUCTS.map(
    (p) => `- ${p.name} — ${p.description} — ${base}/products/${p.id}`,
  ).join("\n")
  const moduleBlock = PUBLISHED_MODULES.map(
    (m) => `- ${m.title} — ${m.description} — ${base}/lessons/${m.id}`,
  ).join("\n")
  const updateBlock = ALL_UPDATES.map(
    (u) => `- ${u.title} — ${base}/updates/${u.id}`,
  ).join("\n")
  const faqBlock = tradieDocsFaqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n")

  return `# ${siteConfig.name}

> Written SWMS and workplace-docs education for Australian tradies. Template packs are Coming Soon. Not legal advice.

Site: ${base}
Published written lessons: ${PUBLISHED_LESSON_COUNT}
Job: Free written lessons on SWMS, quoting, invoicing, licensing, and compliance. Priced template packs are listed but not sold or downloadable yet.
Not: a law firm; not legal, tax, or WHS advice; not a live document shop until files exist.

## Products (Coming Soon — no download)

${productBlock}

## Lessons (published written guides)

${moduleBlock}

## Updates

${updateBlock}

## Pricing

- Template packs: planned one-time prices on ${base}/products — checkout not live
- Subscription tiers listed in site config are not a live offer
- Waitlist / Notify me is the only current product action

## FAQs

${faqBlock}
`
}
