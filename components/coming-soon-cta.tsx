import { NewsletterForm } from "@/components/newsletter-form"
import { isPurchasesUiOpen } from "@/lib/purchases"

export function ComingSoonCta({
  price,
  source,
  productId,
  layout = "detail",
}: {
  price: number
  source: string
  productId: string
  layout?: "detail" | "card"
}) {
  const purchasesOpen = isPurchasesUiOpen()

  const buyClass =
    layout === "card"
      ? "w-full rounded-xl py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 transition-all"
      : "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-amber-500 transition-all"

  // Parked Buy Now — rendered only when NEXT_PUBLIC_PURCHASES_OPEN=true.
  // Server still 503s POST /api/checkout unless PURCHASES_OPEN + STRIPE_SECRET_KEY.
  const buyForm = (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="productId" value={productId} />
      <button type="submit" className={buyClass}>
        Buy Now — ${price}
      </button>
    </form>
  )

  const waitlist = (
    <>
      <p
        className={
          layout === "card"
            ? "text-xs text-slate-400"
            : "text-sm text-slate-400 mb-3"
        }
      >
        Checkout is not live. There is no payment method yet. Leave your email
        and we&apos;ll notify you when this pack is available.
      </p>
      <NewsletterForm source={source} buttonLabel="Notify me" />
    </>
  )

  if (layout === "card") {
    return (
      <div className="space-y-3">{purchasesOpen ? buyForm : waitlist}</div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-6">
        <div>
          <span className="text-4xl font-extrabold text-white">${price}</span>
          <span className="text-slate-400 ml-1">
            {purchasesOpen ? "one-time" : "planned, one-time"}
          </span>
        </div>
        {purchasesOpen ? buyForm : null}
      </div>
      {!purchasesOpen && <div>{waitlist}</div>}
    </div>
  )
}
