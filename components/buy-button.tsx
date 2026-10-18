import { NewsletterForm } from "@/components/newsletter-form"
import { MerchantOfRecordDisclosure } from "@/components/merchant-of-record-disclosure"
import { RefundPolicy } from "@/components/refund-policy"
import { formatPackPrice } from "@/lib/currency"
import { stripeCheckoutVisible } from "@/lib/stripe-flags"

export function BuyButton({
  sku,
  price,
  available,
  source,
  layout = "detail",
}: {
  /** Allowlisted catalogue sku. The server maps this to a Stripe lookup key. */
  sku: string
  price: number
  /** Real pack file exists. Missing files stay on Coming soon even if Stripe is on. */
  available: boolean
  source: string
  layout?: "detail" | "card"
}) {
  const enabled = stripeCheckoutVisible() && available
  const priceLabel = formatPackPrice(price)
  const buttonClass =
    layout === "card"
      ? "w-full rounded-xl py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600"
      : "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-lg shadow-orange-500/25"

  const control = enabled ? (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="sku" value={sku} />
      <button
        type="submit"
        className={`${buttonClass} hover:from-orange-400 hover:to-amber-500 transition-all`}
      >
        {`Buy now — ${priceLabel}`}
      </button>
    </form>
  ) : (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Checkout coming soon"
      className={`${buttonClass} cursor-not-allowed opacity-75`}
    >
      {`Coming soon: ${priceLabel}`}
    </button>
  )

  const disclosure = <MerchantOfRecordDisclosure />

  if (layout === "card") {
    return (
      <div className="space-y-3">
        {control}
        {disclosure}
        <RefundPolicy className="text-xs leading-relaxed text-slate-500" />
        {!enabled && <NewsletterForm source={source} buttonLabel="Notify me" />}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end gap-6">
        <div>
          <span className="text-4xl font-extrabold text-white">{priceLabel}</span>
          <span className="text-slate-400 ml-1">one-time</span>
        </div>
        <div className="flex max-w-xl flex-col gap-2">
          {control}
          {disclosure}
          <RefundPolicy className="text-xs leading-relaxed text-slate-500" />
        </div>
      </div>
      {!enabled && (
        <div>
          <p className="text-sm text-slate-400 mb-3">
            {available
              ? "Checkout is not live yet. Leave your email and we'll notify you when this pack is available to buy."
              : "The downloadable file for this pack is not ready yet. Leave your email and we'll notify you when it can be bought."}
          </p>
          <NewsletterForm source={source} buttonLabel="Notify me" />
        </div>
      )}
    </div>
  )
}
