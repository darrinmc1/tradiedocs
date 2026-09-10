import { siteConfig } from "@/config/site.config"

const faqs = [
  {
    question: "Are the documents legally compliant for Australian tradies?",
    answer: "Yes. All documents are written specifically for Australian tradespeople and are regularly reviewed to reflect current Fair Work, WHS, and state-based compliance requirements. We update templates whenever regulations change."
  },
  {
    question: "How often are the templates updated?",
    answer: "We monitor Australian workplace law, tax, and licensing changes continuously. When regulations change, we update affected templates and notify members via email so you always have the latest version."
  },
  {
    question: "What support do I get if I have questions?",
    answer: "All members get access to our help documentation and can contact our support team by email. Pro members receive priority support with faster response times."
  },
  {
    question: "Can I get a refund if the documents don't suit my trade?",
    answer: "We offer a 7-day money-back guarantee. If the documents aren't right for your trade or situation, contact us within 7 days of purchase for a full refund — no questions asked."
  },
  {
    question: "Do the documents work for all trades?",
    answer: "TradieDocs covers a wide range of trades including electricians, plumbers, carpenters, painters, concreters, landscapers, and more. Documents are written in plain English and can be adapted to your specific trade."
  },
  {
    question: "Do I need an ABN to use TradieDocs?",
    answer: "Most of our documents are designed for tradies operating with an ABN as a sole trader, partnership, or company. Some documents are also useful for employees. You don't need an ABN to sign up and browse."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function MarketingHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Documents Built for Australian Tradies
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Stop wasting time on paperwork. Get legally sound quotes, contracts, invoices, and compliance docs — ready to use in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all"
          >
            Browse Documents
          </a>
          <a
            href="/pricing"
            className="inline-block border border-slate-600 hover:border-slate-400 text-slate-300 font-bold py-3 px-8 rounded-xl transition-all"
          >
            View Pricing
          </a>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
