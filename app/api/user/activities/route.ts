import { NextResponse } from "next/server"
import { getUserActivities, verifyToken } from "@/lib/auth"

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

    const { activities, error } = await getUserActivities(decoded.userId)

    if (error) {
      console.error("Error fetching user activities:", error)
      return NextResponse.json({ error: "Failed to fetch activities" }, { status: 500 })
    }

    return NextResponse.json(activities || [], { status: 200 })
  } catch (error) {
    console.error("API error fetching user activities:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
