"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("user")

      if (!userData) {
        router.push("/auth/signin")
        return
      }

      try {
        const user = JSON.parse(userData)

        // Check if user has admin privileges
        if (!user.email.includes("admin")) {
          router.push("/dashboard")
          return
        }

        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error parsing user data:", error)
        router.push("/auth/signin")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, pathname])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying admin access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
