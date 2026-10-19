import { NewsletterForm } from "@/components/newsletter-form"

export function ComingSoonCta({
  price,
  source,
  layout = "detail",
}: {
  price: number
  source: string
  layout?: "detail" | "card"
}) {
  const disabledBuy = (
    <button
      type="button"
      disabled
      title="Checkout coming soon"
      className={
        layout === "card"
          ? "w-full rounded-xl py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 cursor-not-allowed opacity-75"
          : "px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 cursor-not-allowed opacity-75 shadow-lg shadow-orange-500/25"
      }
    >
      Buy Now — ${price}
      <span className="ml-2 text-xs opacity-70">(Coming Soon)</span>
    </button>
  )

  if (layout === "card") {
    return (
      <div className="space-y-3">
        {disabledBuy}
        <NewsletterForm source={source} buttonLabel="Notify me" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-6">
        <div>
          <span className="text-4xl font-extrabold text-white">${price}</span>
          <span className="text-slate-400 ml-1">one-time</span>
        </div>
        {disabledBuy}
      </div>
      <div>
        <p className="text-sm text-slate-400 mb-3">
          Checkout is not live yet. Leave your email and we&apos;ll notify you
          when this pack is available to buy.
        </p>
        <NewsletterForm source={source} buttonLabel="Notify me" />
      </div>
    </div>
  )
}
