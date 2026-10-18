import { siteConfig } from "@/config/site.config"
import { getSupportEmail } from "@/lib/support-email"
import { stripeCheckoutVisible } from "@/lib/stripe-flags"

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
}

export default function TermsPage() {
  const supportEmail = getSupportEmail()
  const checkoutEnabled = stripeCheckoutVisible()

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
          {checkoutEnabled ? (
            <p>
              Paid template packs are one-time purchases. The amount and the
              merchant of record are shown before you pay. Refund terms will be
              published before any paid sale goes live.
            </p>
          ) : (
            <p>
              Paid template packs are not available for purchase yet. There is no
              live checkout. Join a product waitlist if you want to be notified
              when a pack can be bought. Refund terms will be published before any
              paid sale goes live.
            </p>
          )}
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
