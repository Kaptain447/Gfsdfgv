import { NextResponse } from "next/server"
import { getUserInvestmentById } from "@/lib/auth"
import { verifyToken } from "@/lib/auth"

export const runtime = "nodejs" // Required for jsonwebtoken

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1]
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || !decoded.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const investmentId = params.id
    if (!investmentId) {
      return NextResponse.json({ error: "Investment ID is required" }, { status: 400 })
    }

    const { investment, error } = await getUserInvestmentById(decoded.userId, investmentId)

    if (error) {
      console.error("Error fetching investment:", error)
      return NextResponse.json({ error: "Failed to fetch investment details" }, { status: 500 })
    }

    if (!investment) {
      return NextResponse.json({ error: "Investment not found or not accessible" }, { status: 404 })
    }

    return NextResponse.json(investment, { status: 200 })
  } catch (error) {
    console.error("API error fetching investment by ID:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
