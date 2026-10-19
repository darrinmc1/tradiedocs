/** Server gate. Unset, "false", or any other value keeps payments off. */
export function stripePaymentsEnabled(): boolean {
  return process.env.STRIPE_ENABLED === "true"
}

/**
 * Client Buy button. Baked in at build time.
 * Unset or any value other than "true" shows "Coming soon" and does not post.
 */
export function stripeCheckoutVisible(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_ENABLED === "true"
}

/** Checkout metadata.site and the lookup-key prefix for this site. */
export function stripeSiteKey(): string {
  const configured = process.env.STRIPE_SITE_KEY?.trim()
  return configured || "tradiedocs"
}
