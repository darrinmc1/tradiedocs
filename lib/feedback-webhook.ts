import "server-only"

export const DEFAULT_FEEDBACK_WEBHOOK_URL =
  "https://n8n.peelboss.com/webhook/feedback-creator-run"

/**
 * Server-only kick for Empire — Feedback to GitHub Issue.
 * GET the creator-run webhook (same one the daily cron sweeper hits).
 * Awaited with a 4-second AbortController timeout so the kick is not dropped
 * when the serverless function returns. Must never throw — failures are logged only.
 */
export async function notifyFeedbackWebhook(): Promise<void> {
  try {
    const webhookUrl =
      process.env.FEEDBACK_WEBHOOK_URL?.trim() || DEFAULT_FEEDBACK_WEBHOOK_URL
    if (!webhookUrl) return

    // Server-only env. A missing secret must not fail the feedback save.
    const secret = process.env.KD7_WEBHOOK_SECRET?.trim()
    const headers: Record<string, string> = { Accept: "application/json" }
    if (secret) {
      headers["X-KD7-Secret"] = secret
    } else {
      console.warn(
        "KD7_WEBHOOK_SECRET is unset; calling feedback webhook without X-KD7-Secret",
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 4000)
    try {
      await fetch(webhookUrl, {
        method: "GET",
        headers,
        cache: "no-store",
        signal: controller.signal,
      })
    } finally {
      clearTimeout(timeout)
    }
  } catch (err) {
    console.error("feedback webhook notify failed (non-fatal):", err)
  }
}
