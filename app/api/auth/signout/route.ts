import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true, message: "Logged out successfully" })
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expire the cookie immediately
      path: "/",
    })
    return response
  } catch (error: unknown) {
    console.error("Signout API fatal error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
