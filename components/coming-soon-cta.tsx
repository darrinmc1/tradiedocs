import { NewsletterForm } from "@/components/newsletter-form"

export function ComingSoonCta({
  source = "pricing-coming-soon",
  layout = "detail",
}: {
  source?: string
  layout?: "detail" | "card"
}) {
  return (
    <div className={layout === "card" ? "space-y-3" : "space-y-4"}>
      <div>
        <p className="font-semibold text-white">Coming soon - join the list</p>
        <p className="mt-1 text-sm text-slate-400">
          Template packs are not available yet.
        </p>
      </div>
      <NewsletterForm source={source} buttonLabel="Join the list" />
    </div>
  )
}
