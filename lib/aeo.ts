// =============================================================================
// TRADIEDOCS — AEO (Answer Engine Optimization)
// Generates /llms.txt + /llm.txt so AI assistants can read what the site is,
// what it does, its key pages, pricing, and FAQs.
// Reference pattern: Intel Academy / CertSprint lib/aeo.ts (verified live).
// =============================================================================

import { siteConfig } from "@/config/site.config"
import { ALL_MODULES } from "@/data/modules"
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
      "TradieDocs provides SWMS templates, quote packs, and compliance documents for Australian tradies. Download, fill in, done — no subscriptions, no fluff.",
  },
  {
    question: "What is a SWMS?",
    answer:
      "A Safe Work Method Statement (SWMS) documents the high-risk construction work, the hazards involved, and the control measures to manage them. Many Australian states require a SWMS for high-risk construction work before work starts.",
  },
  {
    question: "Do I need a SWMS for every job?",
    answer:
      "Not every job — SWMS are required for high-risk construction work as defined by WHS regulations. TradieDocs has a free lesson explaining when you do and don't need one, plus templates covering 20 trades.",
  },
  {
    question: "How much do TradieDocs templates cost?",
    answer:
      "One-time purchases only — no subscription. The SWMS Template Pack covering 20 trades is $79, the Quote + Invoice Pack is $49, and the Full Compliance Bundle (both packs plus bonus templates) is $119.",
  },
  {
    question: "Is TradieDocs legal advice?",
    answer:
      "No. TradieDocs templates are a starting point — you must customise them to your specific site, task, and state's WHS requirements. It is not legal advice.",
  },
]

export function buildLlmTxt(): string {
  const base = siteUrl()
  const productBlock = ALL_PRODUCTS.map(
    (p) => `- ${p.name} — ${p.description} — ${base}/products/${p.id}`,
  ).join("\n")
  const moduleBlock = ALL_MODULES.filter((m) => m.status === "published")
    .map((m) => `- ${m.title} — ${m.description} — ${base}/lessons/${m.id}`)
    .join("\n")
  const updateBlock = ALL_UPDATES.map(
    (u) => `- ${u.title} — ${base}/updates/${u.id}`,
  ).join("\n")
  const faqBlock = tradieDocsFaqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n")

  return `# ${siteConfig.name}

> ${siteConfig.description}

Site: ${base}
Job: Downloadable SWMS templates, quote packs, and compliance documents for Australian tradies — fill in, done, no subscription.
Not: a legal firm; not legal advice; templates must be customised to the job and state requirements.

## Products

${productBlock}

## Lessons (study guides)

${moduleBlock}

## Updates

${updateBlock}

## Pricing

- Founder: USD ${siteConfig.pricing.founder.monthly}/month — ${base}/pricing
- Standard: USD ${siteConfig.pricing.standard.monthly}/month — ${base}/pricing
- Premium: USD ${siteConfig.pricing.premium.monthly}/month — ${base}/pricing
- One-time product purchases: ${base}/products

## FAQs

${faqBlock}
`
}
