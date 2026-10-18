/** Stripe ISO currency for TradieDocs one-off packs. */
export const STRIPE_CURRENCY = "aud"

/** Display code used in config, metadata, and llms.txt. */
export const CURRENCY_CODE = "AUD"

export const CURRENCY_PREFIX = "AU$"

export function formatPackPrice(amount: number): string {
  return `${CURRENCY_PREFIX}${amount}`
}
