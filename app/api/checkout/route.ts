import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { stripe } from "@/lib/stripe"
import { getProductById, resolveCheckoutProduct } from "@/data/products"
import { getUserEntitlements, getSignedDownloadUrl } from "@/lib/entitlements"
import { STRIPE_CURRENCY } from "@/lib/currency"
import { STATEMENT_DESCRIPTOR_SUFFIX } from "@/lib/merchant-of-record"
import { stripePaymentsEnabled, stripeSiteKey } from "@/lib/stripe-flags"

function paymentsDisabled() {
  return NextResponse.json(
    { error: "Payments are not enabled" },
    { status: 503 }
  )
}

function wantsJson(req: NextRequest): boolean {
  return (req.headers.get("content-type") ?? "").includes("application/json")
}

async function readSku(req: NextRequest): Promise<string | null> {
  if (wantsJson(req)) {
    const body = (await req.json().catch(() => null)) as { sku?: unknown } | null
    return typeof body?.sku === "string" ? body.sku : null
  }
  const form = await req.formData()
  const sku = form.get("sku")
  return typeof sku === "string" ? sku : null
}

export async function POST(req: NextRequest) {
  // Off unless STRIPE_ENABLED is exactly "true". Checked before auth so a
  // disabled deployment cannot create a Checkout Session.
  if (!stripePaymentsEnabled()) return paymentsDisabled()

  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 503 }
    )
  }

  const { userId } = await auth()
  if (!userId) {
    if (wantsJson(req)) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }
    const origin = req.headers.get("origin") ?? req.nextUrl.origin
    return NextResponse.redirect(new URL("/sign-in", origin), 303)
  }

  // Client may send { sku }. Price IDs are ignored even if also posted.
  const skuInput = await readSku(req)
  if (!skuInput) {
    return NextResponse.json({ error: "Missing sku" }, { status: 400 })
  }

  const product = resolveCheckoutProduct(skuInput)
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 400 })
  }

  if (!product.available) {
    return NextResponse.json(
      { error: "This pack is not available yet" },
      { status: 503 }
    )
  }

  const prices = await stripe.prices.list({
    lookup_keys: [product.lookupKey],
    active: true,
    limit: 1,
  })
  const price = prices.data.find((item) => item.lookup_key === product.lookupKey)
  if (!price) {
    return NextResponse.json({ error: "Price not available" }, { status: 503 })
  }
  if (price.currency !== STRIPE_CURRENCY) {
    return NextResponse.json(
      { error: "Price must be in AUD" },
      { status: 503 }
    )
  }

  const origin = req.headers.get("origin") ?? req.nextUrl.origin
  const metadata = {
    site: stripeSiteKey(),
    sku: product.lookupKey,
    userId,
    currency: STRIPE_CURRENCY,
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    currency: STRIPE_CURRENCY,
    line_items: [{ price: price.id, quantity: 1 }],
    success_url: `${origin}/account?purchased=${product.id}`,
    cancel_url: `${origin}/products/${product.id}`,
    client_reference_id: userId,
    metadata,
    payment_intent_data: {
      statement_descriptor_suffix: STATEMENT_DESCRIPTOR_SUFFIX,
      metadata,
    },
  })

  if (!session.url) {
    return NextResponse.json({ error: "Checkout unavailable" }, { status: 503 })
  }

  if (wantsJson(req)) {
    return NextResponse.json({ url: session.url })
  }

  return NextResponse.redirect(session.url, 303)
}

export async function GET(req: NextRequest) {
  if (!stripePaymentsEnabled()) return paymentsDisabled()

  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const downloadId = req.nextUrl.searchParams.get("download")
  if (!downloadId) {
    return NextResponse.json({ error: "Missing download param" }, { status: 400 })
  }

  const product = getProductById(downloadId)
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  const entitlements = await getUserEntitlements(userId)
  const hasAccess = entitlements.some((e) => e.product_id === downloadId)
  if (!hasAccess) {
    return NextResponse.json({ error: "Not purchased" }, { status: 403 })
  }

  const url = await getSignedDownloadUrl("downloads", product.downloadPath)
  if (!url) {
    return NextResponse.json(
      { error: "Download unavailable" },
      { status: 503 }
    )
  }

  return NextResponse.redirect(url, 303)
}
