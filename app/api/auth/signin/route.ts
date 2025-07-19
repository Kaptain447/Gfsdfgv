import { type NextRequest, NextResponse } from "next/server"
import { authenticateUser } from "@/lib/auth"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Authenticate user
    const result = await authenticateUser(email, password)

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 401 })
    }

    // Generate a simple token for demo purposes
    const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: result.user,
      token: token,
    })

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    })

    return response
  } catch (error: unknown) {
    console.error("Signin API fatal error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
