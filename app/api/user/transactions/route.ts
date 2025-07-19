import { NextResponse } from "next/server"
import { getUserTransactions, verifyToken } from "@/lib/auth"

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

    const { transactions, error } = await getUserTransactions(decoded.userId)

    if (error) {
      console.error("Error fetching user transactions:", error)
      return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 })
    }

    return NextResponse.json(transactions || [], { status: 200 })
  } catch (error) {
    console.error("API error fetching user transactions:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
