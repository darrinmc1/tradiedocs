export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🧾", "🔧", "🧾", "⚒️", "🧾"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-orange-200",
  dark: true,
  cardBorder: "border-slate-700",
  cardBg: "bg-slate-800/80",
  eyebrowColor: "text-orange-400",
  label: "Coffee break",
  punchColor: "text-slate-300",
  buttonBg: "bg-orange-600",
  footerNote: "Even sparkies need a laugh",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "A tradie's word is their bond.",
      punchline: "Their invoice, however, is a separate document.",
    },
    {
      setup: "I measure twice and cut once.",
      punchline: "Then I measure a third time because I don't trust the first two measurements.",
    },
    {
      setup: "My workshop has two types of tools: ones I use, and ones I bought because they were on sale.",
    },
    {
      setup: "The customer asked if the job will be done by Friday.",
      punchline: "I said 'Friday the 13th or a normal Friday?' He didn't laugh. I'm still billing him.",
    },
  ],
  quotes: [
    {
      setup: "A quote is a fixed price. An estimate is a considered guess.",
      punchline: "A 'while you're here' is a hole in your profit margin.",
    },
    {
      setup: "I itemise every quote.",
      punchline: "Partly for the customer's clarity, partly so I can stare at it and wonder where all the money goes.",
    },
    {
      setup: "My favourite quote line: 'miscellaneous — trust me.'",
      punchline: "Customers are not big fans. But they keep hiring me.",
    },
    {
      setup: "The 'while you're here' ambush costs more than any material on the quote.",
    },
  ],
  invoices: [
    {
      setup: "I offer net 7 terms.",
      punchline: "Net 30 is just a polite way of saying 'pay me when you remember.'",
    },
    {
      setup: "My invoice includes a line for 'patience.'",
      punchline: "It's charged at premium rates.",
    },
    {
      setup: "The customer said 'the cheque is in the mail.'",
      punchline: "I said 'great, the invoice is in the post too — round trip.'",
    },
    {
      setup: "Deposits aren't a sign of distrust.",
      punchline: "They're a sign I've done this before.",
    },
  ],
  compliance: [
    {
      setup: "A SWMS is a document that keeps you out of trouble.",
      punchline: "It's also a document that, when folded into a sandwich in the ute, is just a sandwich.",
    },
    {
      setup: "The inspector asked to see my compliance paperwork.",
      punchline: "I showed him a very confident thumbs up. He was not moved.",
    },
    {
      setup: "Safety gear is like a seatbelt: uncomfortable until the moment it saves you.",
    },
    {
      setup: "My risk assessment says the biggest risk is 'assuming the job will go smoothly.'",
      punchline: "That's why the quote is what it is.",
    },
  ],
}
