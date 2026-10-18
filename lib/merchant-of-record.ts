// Merchant of record for TradieDocs checkout.
// TTPN Pty Ltd charges the card. The shortened statement prefix is set in the
// Stripe Dashboard; one-off Checkout sessions append STATEMENT_DESCRIPTOR_SUFFIX.

export const MERCHANT_OF_RECORD_DISCLOSURE =
  "Part of the Empire HQ network. Payments are charged by TTPN Pty Ltd (statement may show as TTPN or TTPN* plus the product name)."

/** Card statement suffix. Stripe concatenates this after the TTPN prefix. */
export const STATEMENT_DESCRIPTOR_SUFFIX = "TRADIEDOCS"
