import { REFUND_POLICY } from "@/lib/refund-policy"

export function RefundPolicy({ className }: { className?: string }) {
  return <p className={className}>{REFUND_POLICY}</p>
}
