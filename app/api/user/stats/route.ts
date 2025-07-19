import { NextResponse } from "next/server"
import { getUserStats, verifyToken } from "@/lib/auth"

export const runtime = "nodejs" // Required for jsonwebtoken

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1]
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || !decoded.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const { stats, error } = await getUserStats(decoded.userId)

    if (error) {
      console.error("Error fetching user stats:", error)
      return NextResponse.json({ error: "Failed to fetch user statistics" }, { status: 500 })
    }

    if (!stats) {
      return NextResponse.json({ error: "User stats not found" }, { status: 404 })
    }

    return NextResponse.json(stats, { status: 200 })
  } catch (error) {
    console.error("API error fetching user stats:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
