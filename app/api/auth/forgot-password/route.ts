import { NextResponse } from "next/server"
import { generatePasswordResetToken } from "@/lib/auth"

export const runtime = "nodejs" // Ensure this runs in Node.js environment for bcryptjs and jsonwebtoken

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Generate a password reset token.
    // For security, we don't reveal if the email exists or not.
    // The function will handle logging and token generation internally.
    const result = await generatePasswordResetToken(email)

    // Always return a success message to prevent user enumeration,
    // even if the email doesn't exist.
    return NextResponse.json(
      { message: "If an account with that email exists, we've sent a password reset link." },
      { status: 200 },
    )
  } catch (error) {
    console.error("Forgot password API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
