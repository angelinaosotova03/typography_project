import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation/leadSchema";

/**
 * Quote-request submission handler.
 *
 * Currently logs validated leads server-side — this is a placeholder for
 * the two integrations described in the plan (Phase 5/6):
 *  1. Email notification to the manager (Resend or SMTP) — needs an API key.
 *  2. Writing a `Lead` document into Sanity so it shows up alongside the
 *     product catalog the manager already edits — needs a Sanity project.
 * Both are deferred until those credentials/accounts exist; the validated
 * `lead` object below is exactly what each integration would consume.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // Honeypot tripped — silently pretend success so bots don't learn.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, phone, email, service, quantity, message, consent } =
    parsed.data;
  console.info("[lead] новая заявка (заглушка, без email/CMS):", {
    name,
    phone,
    email,
    service,
    quantity,
    message,
    consent,
  });

  return NextResponse.json({ ok: true });
}
