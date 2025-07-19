import { createClient } from "@supabase/supabase-js"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import type { cookies } from "next/headers"

// Hardcoded values from previous user input for client-side
const supabaseUrl = "https://xxhjoxzuahkkcehutlaw.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aGpveHp1YWhra2NlaHV0bGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTM4NTUsImV4cCI6MjA2Nzg2OTg1NX0.byBzZPH7wO7-9zaj8XnM2FyLHFWVs4pjsgK26kL9KR0"

// Environment variable for service role key (server-side only, keep secure)
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side Supabase client (for browser interactions)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Legacy helper kept for backward-compatibility.
 * Returns the same singleton browser client created above.
 */
export function getSupabaseClient() {
  return supabase
}

// Server-side Supabase client (for server components, route handlers, server actions)
export function createServerSupabaseClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })
}

// Server-side Supabase client with service role key (for privileged operations)
export const createAdminSupabaseClient = () => {
  if (!supabaseServiceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set. This client requires it for admin operations.")
  }
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
