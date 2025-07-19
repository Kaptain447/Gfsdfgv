"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

interface UserProfile {
  profile_completion_percentage: number
  bio?: string
  phone?: string
  country?: string
  city?: string
  investment_goals?: any[]
  risk_tolerance?: any
  avatar_url?: string
}

interface ProfileCompletionProps {
  profile: UserProfile | null
}

export function ProfileCompletion({ profile }: ProfileCompletionProps) {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setPercentage(profile?.profile_completion_percentage || 0)
  }, [profile])

  const steps = [
    { name: "Complete Basic Information", completed: percentage >= 30 },
    { name: "Upload Profile Photo", completed: percentage >= 35 },
    { name: "Verify Email Address", completed: percentage >= 50 },
    { name: "Verify Phone Number", completed: percentage >= 65 },
    { name: "Add Address Information", completed: percentage >= 75 },
    { name: "Complete Identity Verification", completed: percentage >= 100 },
    { name: "Enable Two-Factor Authentication", completed: percentage >= 120 },
    { name: "Add Payment Method", completed: percentage >= 135 },
    { name: "Make Your First Investment", completed: percentage >= 165 },
    { name: "Complete Bio and Social Links", completed: percentage >= 170 },
  ]

  const nextStep = steps.find((step) => !step.completed)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Profile Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Your profile is {percentage}% complete</p>
          <span className="text-sm font-medium text-blue-600">{percentage}%</span>
        </div>
        <Progress value={percentage} className="w-full h-2 mb-4" />
        {nextStep ? (
          <div className="text-sm text-gray-700 mb-4">
            Next step: <span className="font-semibold">{nextStep.name}</span>
          </div>
        ) : (
          <div className="text-sm text-green-600 mb-4 font-semibold">Your profile is fully complete!</div>
        )}
        <Button className="w-full" asChild>
          <Link href="/profile/settings">Complete Profile</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
