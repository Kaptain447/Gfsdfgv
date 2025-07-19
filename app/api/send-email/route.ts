import { NextResponse } from "next/server"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: Request) {
  try {
    const { email, firstName } = await req.json()

    if (!email || !firstName) {
      return NextResponse.json({ error: "Email and first name are required" }, { status: 400 })
    }

    const result = await sendWelcomeEmail(email, firstName)

    if (result.success) {
      return NextResponse.json({ message: result.message }, { status: 200 })
    } else {
      return NextResponse.json({ error: result.message }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in /api/send-email:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
