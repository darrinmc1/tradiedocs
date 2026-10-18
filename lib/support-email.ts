const PLACEHOLDER_HOST = /example\.(com|org|net)\b/i

/**
 * Public support address from NEXT_PUBLIC_SUPPORT_EMAIL.
 * Missing or placeholder values render as no address.
 */
export function getSupportEmail(): string | undefined {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (!email) return undefined
  if (PLACEHOLDER_HOST.test(email)) return undefined
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return undefined
  return email
}
