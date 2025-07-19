import { NextResponse } from "next/server"

/**
 * POST /api/contact
 * Receives the contact form JSON payload and forwards it to EmailJS.
 * Environment variables (server-side only):
 *  - EMAILJS_SERVICE_ID
 *  - EMAILJS_TEMPLATE_ID
 *  - EMAILJS_PUBLIC_KEY
 */
export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json()

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars are not configured.")
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 })
    }

    // Build request for EmailJS REST API
    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        phone_number: phone,
        service_interest: service,
        message,
      },
    }

    const emailJsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailJsPayload),
    })

    if (!emailJsRes.ok) {
      const text = await emailJsRes.text()
      console.error("EmailJS error:", text)
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact route error:", error)
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 })
  }
}
