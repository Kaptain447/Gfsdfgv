"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { BrandedLoading } from "@/components/branded-loading"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      // Check if the response is JSON before parsing
      const contentType = response.headers.get("content-type")
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json()
        if (response.ok) {
          // Store user data in localStorage for client-side access
          localStorage.setItem("user", JSON.stringify(data.user))
          localStorage.setItem("token", data.token || "authenticated")

          // Redirect to dashboard
          router.push("/dashboard")
        } else {
          setError(data.error || "An unknown error occurred during signin.")
        }
      } else {
        // If not JSON, read as text and provide a generic error
        const text = await response.text()
        console.error("Non-JSON response:", text)
        setError("An unexpected server error occurred. Please try again.")
      }
    } catch (err: any) {
      console.error("Signin error:", err)
      setError(err.message || "Failed to connect to the server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <BrandedLoading />
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/pinnacle-wealth-logo.png"
            alt="Pinnacle Wealth Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Dashboard</h2>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email" className="block mb-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          <Label htmlFor="password" className="block mb-2">
            Password
          </Label>
          <div className="relative mb-4">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
        <div className="mt-2 text-center text-sm">
          <Link href="/auth/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  )
}
