import { siteConfig } from "@/config/site.config"
import { RefundPolicy } from "@/components/refund-policy"
import { getSupportEmail } from "@/lib/support-email"
import { ALL_PRODUCTS } from "@/data/products"
import { stripeCheckoutVisible } from "@/lib/stripe-flags"

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
}

export default function TermsPage() {
  const supportEmail = getSupportEmail()
  const packsOnSale =
    stripeCheckoutVisible() && ALL_PRODUCTS.some((product) => product.available)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-extrabold mb-8">Terms of Service</h1>
        <article className="prose prose-invert prose-slate max-w-none">
          {/* TODO(SITE_NAME): Replace with your terms of service */}
          <p>
            By using {siteConfig.name}, you agree to these terms. Please read them
            carefully.
          </p>
          <h2>Use of Service</h2>
          <p>
            You may use our platform for personal, non-commercial learning purposes.
            Redistribution of our content is prohibited.
          </p>
          <h2>Payments and Refunds</h2>
          {packsOnSale ? (
            <p>
              Paid template packs are one-time purchases in Australian dollars.
              The amount and the merchant of record are shown before you pay.
            </p>
          ) : (
            <p>
              Paid template packs are not available for purchase yet. There is no
              live checkout. Join a product waitlist if you want to be notified
              when a pack can be bought.
            </p>
          )}
          <RefundPolicy />
          {supportEmail ? (
            <>
              <h2>Contact</h2>
              <p>
                Questions? Email us at{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
              </p>
            </>
          ) : null}
        </article>
      </div>
    </div>
  )
}
