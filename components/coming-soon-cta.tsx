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
    return <div className="space-y-3">{waitlist}</div>
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <span className="text-4xl font-extrabold text-white">${price}</span>
        <span className="text-slate-400 ml-1">planned, one-time</span>
      </div>
      {waitlist}
    </div>
  )
}
