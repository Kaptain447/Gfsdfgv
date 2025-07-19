"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { BrandedLoading } from "@/components/branded-loading"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("user")
      const token = localStorage.getItem("token")
      const authenticated = !!(userData && token)

      setIsAuthenticated(authenticated)

      if (requireAuth && !authenticated) {
        router.push("/auth/signin")
        return
      }

      if (!requireAuth && authenticated) {
        router.push("/dashboard")
        return
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [router, requireAuth])

  if (isLoading) {
    return <BrandedLoading />
  }

  return <>{children}</>
}
