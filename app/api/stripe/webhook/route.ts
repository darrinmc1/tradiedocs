import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { grantEntitlement } from "@/lib/entitlements"
import { sendAdminNotification } from "@/lib/email"
import { resolveCheckoutProduct } from "@/data/products"
import { stripePaymentsEnabled, stripeSiteKey } from "@/lib/stripe-flags"
import type Stripe from "stripe"

export async function POST(req: NextRequest) {
  if (!stripePaymentsEnabled()) {
    return NextResponse.json(
      { error: "Payments are not enabled" },
      { status: 503 }
    )
  }

  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const body = await req.text()
  const sig = req.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    console.error("[stripe webhook] signature verification failed", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.userId
    const sku = session.metadata?.sku
    const site = session.metadata?.site
    const expectedSite = stripeSiteKey()

    if (site && site !== expectedSite) {
      console.error(
        `[stripe webhook] site mismatch: got=${site} expected=${expectedSite}`
      )
      return NextResponse.json({ error: "Site mismatch" }, { status: 400 })
    }

    const product = sku ? resolveCheckoutProduct(sku) : undefined
    if (!userId || !product) {
      console.error("[stripe webhook] missing user or sku", { userId, sku })
      return NextResponse.json({ received: true, granted: false })
    }

    const granted = await grantEntitlement(userId, product.id)
    console.log(
      `[stripe webhook] entitlement ${granted ? "granted" : "FAILED"}: user=${userId} sku=${product.lookupKey} product=${product.id}`
    )

    await sendAdminNotification({
      kind: "purchase",
      payload: {
        userId,
        sku: product.lookupKey,
        productId: product.id,
        amount: session.amount_total,
        currency: session.currency,
        granted,
      },
    }).catch(() => {})

    if (!granted) {
      return NextResponse.json(
        { error: "Entitlement grant failed" },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}
