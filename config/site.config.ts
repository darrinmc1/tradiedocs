// =============================================================================
// SITE CONFIGURATION — TRADIEDOCS
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions (shared across all empire sites)
// -----------------------------------------------------------------------------

type FiveTuple<T> = [T, T, T, T, T]

export interface NavLink {
  label: string
  href: string
}

export interface DashboardNavLink extends NavLink {
  icon: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  description: string
  color: string
}

export interface ThemeConfig {
  id: string
  emoji: string
  primaryColor: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  heroGradient: string
  darkMode: boolean
  bgClass: string
  textClass: string
  cardBg: string
  cardBorder: string
}

export interface BadgeConfig {
  tierNames: FiveTuple<string>
  tierEmojis: FiveTuple<string>
  tierColors: FiveTuple<string>
  xpPerTier: FiveTuple<number>
  lessonsPerTier: FiveTuple<number>
}

export interface NavConfig {
  marketing: NavLink[]
  dashboard: DashboardNavLink[]
}

export interface CopyConfig {
  heroTitle: string
  heroSubtitle: string
  ctaButton: string
  ctaSecondary: string
  loginTitle: string
  signupTitle: string
  foundingMemberHeading: string
  emailCaptureHeading: string
  emailCaptureSubheading: string
  feedbackPlaceholder: string
}

export interface PricingConfig {
  founder: { monthly: number; yearly: number }
  standard: { monthly: number; yearly: number }
  premium: { monthly: number; yearly: number }
}

export interface ContactConfig {
  email: string
  github: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  domain: string
  theme: ThemeConfig
  badges: BadgeConfig
  categories: Category[]
  nav: NavConfig
  copy: CopyConfig
  pricing: PricingConfig
  contact: ContactConfig
}

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getBadgeTier(config: SiteConfig, xp: number): number {
  const tiers = config.badges.xpPerTier
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i]) return i
  }
  return 0
}

export function getTierProgress(config: SiteConfig, xp: number): number {
  const tier = getBadgeTier(config, xp)
  const currentThreshold = config.badges.xpPerTier[tier]
  const nextThreshold = config.badges.xpPerTier[tier + 1]
  if (nextThreshold === undefined) return 100
  const progressInTier = xp - currentThreshold
  const tierRange = nextThreshold - currentThreshold
  return Math.min(Math.round((progressInTier / tierRange) * 100), 100)
}

export function getBadgeDisplay(config: SiteConfig, xp: number) {
  const tier = getBadgeTier(config, xp)
  return {
    tier,
    name: config.badges.tierNames[tier],
    emoji: config.badges.tierEmojis[tier],
    color: config.badges.tierColors[tier],
    progress: getTierProgress(config, xp),
    isMaxTier: tier === config.badges.tierNames.length - 1,
  }
}

// =============================================================================
// TRADIEDOCS CONFIGURATION
// =============================================================================

export const siteConfig: SiteConfig = {
  name: "TradieDocs",
  tagline: "Compliance paperwork sorted. Get back on the tools.",
  description:
    "SWMS templates, quote packs, and compliance documents for Australian tradies. Download, fill in, done — no subscriptions, no fluff.",
  domain: "tradiedocs.com.au",

  theme: {
    id: "tradiedocs",
    emoji: "\u{1F6E0}\u{FE0F}",
    primaryColor: "orange",
    accentColor: "slate",
    gradientFrom: "from-orange-600",
    gradientTo: "to-amber-700",
    heroGradient:
      "bg-gradient-to-br from-slate-950 via-orange-950/40 to-slate-900",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border border-white/10",
  },

  badges: {
    tierNames: ["Apprentice", "Tradesman", "Foreman", "Contractor", "Master Builder"],
    tierEmojis: ["\u{1F527}", "\u{1F528}", "\u{1F3D7}\u{FE0F}", "\u{1F4CB}", "\u{1F451}"],
    tierColors: ["slate", "orange", "amber", "yellow", "emerald"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  categories: [
    {
      id: "safety",
      name: "Safety & SWMS",
      emoji: "\u{1F9BA}",
      description: "SWMS templates, risk assessments, and WorkSafe compliance.",
      color: "orange",
    },
    {
      id: "business",
      name: "Quotes & Invoicing",
      emoji: "\u{1F4B0}",
      description: "Win more jobs and get paid on time with professional docs.",
      color: "amber",
    },
    {
      id: "compliance",
      name: "Licensing & Compliance",
      emoji: "\u{1F4DC}",
      description: "State licensing, insurance, tax, and subcontractor rules.",
      color: "yellow",
    },
  ],

  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "Products", href: "/products" },
      { label: "Updates", href: "/updates" },
      { label: "About", href: "/about" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Lessons", href: "/dashboard/lessons", icon: "BookOpen" },
      { label: "Progress", href: "/dashboard/progress", icon: "TrendingUp" },
      { label: "Badges", href: "/dashboard/badges", icon: "Award" },
      { label: "Settings", href: "/dashboard/settings", icon: "Settings" },
    ],
  },

  copy: {
    heroTitle: "Compliance Paperwork Sorted. Get Back on the Tools.",
    heroSubtitle:
      "SWMS, quotes, invoices, and compliance docs built for Australian tradies. Download the templates, fill them in, and stop worrying about paperwork.",
    ctaButton: "Browse Templates",
    ctaSecondary: "Read the Guides",
    loginTitle: "Welcome back",
    signupTitle: "Create your account",
    foundingMemberHeading: "Founding Member — Lock In Launch Pricing",
    emailCaptureHeading: "Compliance Tips for Tradies",
    emailCaptureSubheading:
      "WorkSafe updates, template drops, and business tips for sole traders and small crews.",
    feedbackPlaceholder: "What template do you need next?",
  },

  pricing: {
    founder: { monthly: 5, yearly: 48 },
    standard: { monthly: 9, yearly: 90 },
    premium: { monthly: 19, yearly: 180 },
  },

  contact: {
    email: "hello@tradiedocs.com.au",
    github: "https://github.com/darrinmc1",
  },
} as const satisfies SiteConfig
