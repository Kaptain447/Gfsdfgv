import { NextResponse } from "next/server"
import { getUserById, getUserProfile, verifyToken } from "@/lib/auth"

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

    const user = await getUserById(decoded.userId)
    const profile = await getUserProfile(decoded.userId)

    if (!user || !profile) {
      return NextResponse.json({ error: "User or profile not found" }, { status: 404 })
    }

    // Return a combined user object without sensitive data like password hash
    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: profile.first_name,
      lastName: profile.last_name,
      profilePictureUrl: profile.profile_picture_url,
      phone: profile.phone,
      country: profile.country,
      city: profile.city,
      bio: profile.bio,
      dateOfBirth: profile.date_of_birth,
      address: profile.address,
      postalCode: profile.postal_code,
      stateProvince: profile.state_province,
      lastLoginAt: profile.last_login_at,
      registrationIp: profile.registration_ip,
      accountStatus: profile.account_status,
      kycStatus: profile.kyc_status,
      preferredCurrency: profile.preferred_currency,
      notificationPreferences: profile.notification_preferences,
      securitySettings: profile.security_settings,
      referralCode: profile.referral_code,
      totalInvested: profile.total_invested,
      totalProfit: profile.total_profit,
      totalWithdrawals: profile.total_withdrawals,
      activeInvestmentsCount: profile.active_investments_count,
      pendingWithdrawalsCount: profile.pending_withdrawals_count,
      lastActivityAt: profile.last_activity_at,
      profileCompletionPercentage: profile.profile_completion_percentage,
      createdAt: user.created_at,
    }

    return NextResponse.json(userResponse, { status: 200 })
  } catch (error) {
    console.error("API error fetching user data:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
