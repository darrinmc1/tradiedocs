// =============================================================================
// TRADIEDOCS — AEO (Answer Engine Optimization)
// Generates /llms.txt + /llm.txt so AI assistants can read what the site is,
// what it does, its key pages, pricing, and FAQs.
// =============================================================================

import { siteConfig } from "@/config/site.config"
import { PUBLISHED_LESSON_COUNT, PUBLISHED_MODULES } from "@/data/modules"
import { ALL_PRODUCTS } from "@/data/products"
import { ALL_UPDATES } from "@/data/updates"
import { formatPackPrice } from "@/lib/currency"
import { REFUND_POLICY } from "@/lib/refund-policy"
import { getSupportEmail } from "@/lib/support-email"
import { stripeCheckoutVisible } from "@/lib/stripe-flags"

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
      "TradieDocs publishes free written lessons on SWMS, quoting, invoicing, licensing, and compliance for Australian tradies, and lists one-off template packs. General information only; not legal advice.",
  },
  {
    question: "What is a SWMS?",
    answer:
      "A Safe Work Method Statement (SWMS) documents high-risk construction work, the hazards involved, and the control measures. In jurisdictions that use the model WHS Regulations, a SWMS is required for high-risk construction work before that work starts. Confirm the local definition with the state or territory regulator.",
  },
  {
    question: "Do I need a SWMS for every job?",
    answer:
      "Not every job. A SWMS is required for high-risk construction work as defined in the WHS (or OHS) rules that apply to the site. TradieDocs has a free written lesson on when a SWMS is typically required.",
  },
  {
    question: "How much do TradieDocs templates cost?",
    answer: `One-time purchases only — no subscription. Prices are in ${siteConfig.currency}. ${ALL_PRODUCTS.map((product) => `${product.name} is ${formatPackPrice(product.price)}`).join(". ")}.`,
  },
  {
    question: "What is the refund policy?",
    answer: REFUND_POLICY,
  },
  {
    question: "Is TradieDocs legal advice?",
    answer:
      "No. TradieDocs provides general information and starting-point templates. It is not legal, financial, tax, or WHS advice. Confirm current rules with Safe Work Australia, your state regulator, and the ATO.",
  },
  {
    question: "How many free lessons are on the site?",
    answer: `There are ${PUBLISHED_LESSON_COUNT} free written lessons on the site.`,
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
  const priceBlock = ALL_PRODUCTS.map(
    (p) => `- ${p.name}: ${formatPackPrice(p.price)} one-time — ${base}/products/${p.id}`,
  ).join("\n")
  const supportEmail = getSupportEmail()
  const contactLine = supportEmail ? `Contact: ${supportEmail}\n` : ""
  const packsOnSale =
    stripeCheckoutVisible() && ALL_PRODUCTS.some((product) => product.available)
  const checkoutLine = packsOnSale
    ? "Checkout is available for the one-time AUD packs marked available below."
    : "Checkout is not live. The pack prices below are not currently for sale."

  return `# ${siteConfig.name}

> Written SWMS and workplace-docs education for Australian tradies, plus one-off template packs. Not legal advice.

Site: ${base}
${contactLine}Published written lessons: ${PUBLISHED_LESSON_COUNT}
Job: Free written lessons on SWMS, quoting, invoicing, licensing, and compliance for Australian tradies, plus one-off SWMS, quote, and compliance template packs (no subscription).
Not: a legal firm; not legal, tax, or WHS advice; templates must be customised to the job and state requirements.

## Products

${productBlock}

## Lessons (published written guides)

${moduleBlock}

## Updates

${updateBlock}

## Pricing

One-time packs only. There is no subscription. Prices are in ${siteConfig.currency}.
${checkoutLine}

${priceBlock}

## FAQs

${faqBlock}
`
}
