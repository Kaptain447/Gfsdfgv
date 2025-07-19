import { createServerSupabaseClient, createAdminSupabaseClient } from "@/lib/supabase"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from "uuid"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key" // Ensure this is a strong, unique secret in production

// Define types for better clarity and type safety
export type UserProfile = {
  id: string
  username: string | null
  full_name: string | null
  email: string | null
  phone: string | null
  avatar_url: string | null
  role: string | null
  created_at: string
  // Add other profile fields as they exist in your 'profiles' table
}

export type UserStats = {
  user_id: string
  total_invested: number
  total_profit: number
  total_withdrawals: number
  active_investments_count: number
  pending_withdrawals_count: number
  // Add other stats fields
}

export type UserTransaction = {
  id: string
  user_id: string
  amount: number
  type: string // e.g., 'deposit', 'withdrawal', 'investment'
  status: string // e.g., 'completed', 'pending', 'failed'
  transaction_date: string
  // Add other transaction fields
}

export type UserActivity = {
  id: string
  user_id: string
  activity_type: string // e.g., 'login', 'investment_created', 'profile_update'
  description: string
  timestamp: string
  // Add other activity fields
}

export type UserAchievement = {
  id: string
  user_id: string
  name: string
  description: string
  achieved_at: string
  // Add other achievement fields
}

export type UserInvestment = {
  id: string
  user_id: string
  plan_name: string
  amount: number
  start_date: string
  end_date: string | null
  status: string // e.g., 'active', 'completed', 'cancelled'
  // Add other investment fields
}

export async function authenticateUser(email: string, password: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Authentication error:", error.message)
    throw new Error(error.message)
  }

  if (!data.user) {
    throw new Error("User not found after sign-in.")
  }

  // Fetch user profile from your 'profiles' table
  const { data: profileData, error: profileError } = await supabase
    .from("profiles") // Assuming your user profiles are in a table named 'profiles'
    .select("id, username, full_name, email, phone, avatar_url, role")
    .eq("id", data.user.id)
    .single()

  if (profileError) {
    console.error("Error fetching user profile:", profileError.message)
    throw new Error("Failed to fetch user profile.")
  }

  const token = jwt.sign(
    {
      userId: data.user.id,
      email: data.user.email,
      role: profileData.role,
      username: profileData.username,
      fullName: profileData.full_name,
    },
    JWT_SECRET,
    { expiresIn: "1h" },
  )

  return { user: profileData, token }
}

export async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string
      email: string
      role: string
      username: string
      fullName: string
      exp: number
    }
    const cookieStore = cookies()
    const supabase = createServerSupabaseClient(cookieStore)

    const { data: user, error } = await supabase.auth.getUser()

    if (error || !user.user || user.user.id !== decoded.userId) {
      throw new Error("Invalid or expired token.")
    }

    return decoded
  } catch (error) {
    console.error("Token verification failed:", error)
    return null
  }
}

export async function getUserProfile(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, full_name, email, phone, avatar_url, role, created_at")
    .eq("id", userId)
    .single()

  if (error) {
    console.error("Error fetching user profile:", error.message)
    return null
  }
  return data as UserProfile
}

export async function updateUserProfile(
  userId: string,
  updates: { username?: string; full_name?: string; phone?: string; avatar_url?: string },
) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single()

  if (error) {
    console.error("Error updating user profile:", error.message)
    throw new Error("Failed to update profile.")
  }
  return data as UserProfile
}

export async function generatePasswordResetToken(email: string) {
  const adminSupabase = createAdminSupabaseClient()
  const { data: user, error: userError } = await adminSupabase.from("profiles").select("id").eq("email", email).single()

  if (userError || !user) {
    throw new Error("User not found.")
  }

  const token = uuidv4()
  const expiresAt = new Date(Date.now() + 3600 * 1000) // 1 hour from now

  const { error: insertError } = await adminSupabase
    .from("password_reset_tokens")
    .insert({ user_id: user.id, token, expires_at: expiresAt.toISOString() })

  if (insertError) {
    console.error("Error inserting password reset token:", insertError.message)
    throw new Error("Failed to generate reset token.")
  }

  return token
}

export async function verifyPasswordResetToken(token: string) {
  const adminSupabase = createAdminSupabaseClient()
  const { data, error } = await adminSupabase
    .from("password_reset_tokens")
    .select("user_id, expires_at")
    .eq("token", token)
    .single()

  if (error || !data || new Date(data.expires_at) < new Date()) {
    throw new Error("Invalid or expired token.")
  }

  return data.user_id
}

export async function resetUserPassword(userId: string, newPassword: string) {
  const adminSupabase = createAdminSupabaseClient()
  const { error } = await adminSupabase.auth.admin.updateUserById(userId, {
    password: newPassword,
  })

  if (error) {
    console.error("Error resetting password:", error.message)
    throw new Error("Failed to reset password.")
  }

  // Invalidate the token after use
  await adminSupabase.from("password_reset_tokens").delete().eq("user_id", userId)
}

export async function getUserById(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, full_name, email, phone, avatar_url, role")
    .eq("id", userId)
    .single()

  if (error) {
    console.error("Error fetching user by ID:", error.message)
    return null
  }
  return data as UserProfile
}

export async function getUserStats(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase.from("user_stats").select("*").eq("user_id", userId).single()

  if (error) {
    console.error("Error fetching user stats:", error.message)
    return null
  }
  return data as UserStats
}

export async function getUserTransactions(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching user transactions:", error.message)
    return []
  }
  return data as UserTransaction[]
}

export async function getUserActivities(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase
    .from("user_activities")
    .select("*")
    .eq("user_id", userId)
    .order("timestamp", { ascending: false })

  if (error) {
    console.error("Error fetching user activities:", error.message)
    return []
  }
  return data as UserActivity[]
}

export async function getUserAchievements(userId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase.from("achievements").select("*").eq("user_id", userId)

  if (error) {
    console.error("Error fetching user achievements:", error.message)
    return []
  }
  return data as UserAchievement[]
}

export async function getUserInvestmentById(userId: string, investmentId: string) {
  const cookieStore = cookies()
  const supabase = createServerSupabaseClient(cookieStore)
  const { data, error } = await supabase
    .from("investments")
    .select("*")
    .eq("user_id", userId)
    .eq("id", investmentId)
    .single()

  if (error) {
    console.error("Error fetching user investment by ID:", error.message)
    return null
  }
  return data as UserInvestment
}
