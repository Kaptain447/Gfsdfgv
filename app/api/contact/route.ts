import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, newsletter } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Import EmailJS dynamically to reduce bundle size
    const emailjs = await import("@emailjs/browser")

    // Initialize EmailJS with your public key
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID

    if (!publicKey || !serviceId || !templateId) {
      console.error("Missing EmailJS configuration")
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 })
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone || "Not provided",
      service: service || "General Inquiry",
      message: message,
      newsletter: newsletter ? "Yes" : "No",
      to_name: "Pinnacle Wealth Team",
    }

    // Send email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)

    if (response.status === 200) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
