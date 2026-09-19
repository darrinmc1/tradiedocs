import Link from "next/link"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Simple, transparent pricing for Australian tradies. Get compliant SWMS templates that meet WHS Act requirements.",
}

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "one-time",
    description: "Perfect for sole traders and small crews",
    features: [
      "5 SWMS templates",
      "PDF & Word formats",
      "WHS Act compliant",
      "Email support",
      "Free updates for 12 months",
    ],
    cta: "Get Started",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "one-time",
    description: "For growing trade businesses",
    features: [
      "20 SWMS templates",
      "PDF & Word formats",
      "WHS Act compliant",
      "Priority email support",
      "Free updates for 12 months",
      "Customisable company branding",
      "Risk assessment matrix included",
    ],
    cta: "Get Professional",
    href: "/register",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "one-time",
    description: "For established trade companies",
    features: [
      "Unlimited SWMS templates",
      "PDF & Word formats",
      "WHS Act compliant",
      "Phone & email support",
      "Free updates for 12 months",
      "Customisable company branding",
      "Risk assessment matrix included",
      "Site-specific induction templates",
      "Toolbox talk templates",
    ],
    cta: "Get Business",
    href: "/register",
    highlighted: false,
  },
]

const faqs = [
  {
    question: "Do your SWMS templates comply with Australian WHS laws?",
    answer:
      "Yes. All our SWMS templates are built to comply with the Work Health and Safety Act 2011 (Cth) and the harmonised WHS Regulations adopted across most Australian states and territories, including NSW, VIC, QLD, SA, WA, TAS, ACT, and NT. Each template references the relevant codes of practice and Australian Standards where applicable. We recommend you review each template with your specific site conditions in mind, as the person conducting a business or undertaking (PCBU) retains the duty of care under the WHS Act.",
  },
  {
    question: "Are these templates suitable for high-risk construction work?",
    answer:
      "Yes. Our templates are specifically designed for high-risk construction work as defined under the WHS Regulations (Schedule 3). This includes work involving falls from height, confined spaces, electrical work, demolition, excavation, and more. Each SWMS template for high-risk work includes the mandatory elements required by regulation: a description of the work, identification of hazards, control measures based on the hierarchy of controls, and how controls will be implemented and monitored.",
  },
  {
    question: "Who is liable if something goes wrong on site?",
    answer:
      "Under the WHS Act, the PCBU (your business) holds the primary duty of care to ensure the health and safety of workers and others affected by your work. Our templates provide a compliant framework, but liability rests with the PCBU who completes, signs off, and implements the SWMS on site. Using our templates demonstrates due diligence — a key defence under the WHS Act — but you must ensure the completed SWMS accurately reflects your specific work activities, site conditions, and control measures. We strongly recommend consulting a WHS professional or legal adviser for complex or high-risk projects.",
  },
  {
    question: "How often are the templates updated to reflect regulatory changes?",
    answer:
      "All plans include free template updates for 12 months from purchase. Our team monitors Safe Work Australia publications, state and territory WHS regulator updates, and changes to Australian Standards. When regulations or codes of practice change, we update affected templates and notify customers by email. After your 12-month update period, you can purchase an annual update subscription to continue receiving the latest versions.",
  },
  {
    question: "Do the templates work in states with their own WHS legislation (e.g., Victoria and Western Australia)?",
    answer:
      "Yes. While Victoria operates under the Occupational Health and Safety Act 2004 and Western Australia recently transitioned to the Work Health and Safety Act 2020, the core requirements for SWMS in high-risk construction work are substantially similar across all jurisdictions. Our templates are designed to meet the requirements of all Australian states and territories. We include notes within templates where state-specific variations apply, such as differences in licensing requirements for electrical or plumbing work.",
  },
  {
    question: "Can I customise the templates for my business?",
    answer:
      "Absolutely. All templates are provided in both PDF and editable Word (.docx) format so you can add your company logo, ABN, contact details, and site-specific information. Customisation is not only permitted — it is required. A SWMS must reflect the actual work being performed and the specific hazards present on your site. Generic, uncustomised SWMS documents are unlikely to satisfy a WHS inspector and do not adequately protect your workers.",
  },
  {
    question: "Will these templates satisfy a principal contractor or site manager?",
    answer:
      "Our templates are structured to meet the expectations of principal contractors on commercial and residential construction sites across Australia. They include all elements that site managers and WHS inspectors typically look for: scope of work, hazard identification, risk ratings, hierarchy of controls, PPE requirements, emergency procedures, and worker sign-off sections. However, individual principal contractors may have their own SWMS requirements or preferred formats — always check with the principal contractor before starting work.",
  },
  {
    question: "Do I need a separate SWMS for every job?",
    answer:
      "Under the WHS Regulations, a SWMS is required before high-risk construction work begins. You do not necessarily need a brand-new document for every job, but the SWMS must be reviewed and, if necessary, revised whenever there is a change to the work, a new hazard is identified, or a WHS representative requests a review. Our templates make it easy to update and re-use documents across similar jobs while keeping records of each version.",
  },
  {
    question: "What if Safe Work Australia or a state regulator changes the rules after I purchase?",
    answer:
      "Your 12-month free update period covers any regulatory changes during that time. We will notify you by email and provide updated template versions at no extra cost. If a significant regulatory change occurs that affects templates you have already completed and are using on active projects, we will provide guidance on what needs to be updated. After 12 months, an annual update subscription ensures you always have the most current versions.",
  },
  {
    question: "Are your templates suitable for subcontractors?",
    answer:
      "Yes. Subcontractors are PCBUs under the WHS Act and have the same duty to prepare and implement SWMS for high-risk construction work as head contractors. Our templates are used by sole trader tradies, small subcontracting businesses, and larger trade companies alike. If you are a subcontractor, you may also need to provide your SWMS to the principal contractor before work begins — our templates are formatted to make this straightforward.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Pricing Header */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              One-time payment. No subscriptions. Compliant SWMS templates ready to use on your next job.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-blue-600 text-white shadow-2xl scale-105"
                    : "bg-gray-50 text-gray-900 border border-gray-200"
                }`}
              >
                <div className="mb-6">
                  <h2
                    className={`text-xl font-bold mb-1 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-blue-200" : "text-blue-600"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-blue-50" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              WHS Act Compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Free Updates for 12 Months
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Australian Made
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Legal Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We know Australian tradies need more than just a template — you need confidence that your paperwork will hold up on site and under scrutiny. Here are the answers to the questions we hear most.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Important Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our templates are designed to assist with WHS compliance but do not constitute legal advice. Work health and safety obligations are complex and site-specific. Always consult a qualified WHS professional or legal adviser for advice tailored to your circumstances. The PCBU remains responsible for ensuring all SWMS documents are accurate, complete, and appropriate for the specific work being performed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Still have questions about compliance?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact our team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
