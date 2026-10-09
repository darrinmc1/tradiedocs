import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
}

export default function TermsPage() {
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
          <p>
            Template packs are not for sale on this site. Nothing here takes a
            payment. Join the list on the{" "}
            <a href="/pricing">coming soon page</a> if you want to hear when
            packs are available. These terms will be updated before any sale
            goes live.
          </p>
          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </article>
      </div>
    </div>
  )
}
