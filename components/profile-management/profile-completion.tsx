"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircleIcon, ArrowRightIcon } from "lucide-react"

interface ProfileCompletionProps {
  percentage: number
}

export function ProfileCompletion({ percentage }: ProfileCompletionProps) {
  const steps = [
    { name: "Complete your profile", completed: percentage >= 25 },
    { name: "Verify your identity", completed: percentage >= 50 },
    { name: "Make your first deposit", completed: percentage >= 75 },
    { name: "Start your first investment", completed: percentage >= 100 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {step.completed ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-gray-300 mr-2 flex items-center justify-center text-xs text-gray-500">
                  {index + 1}
                </div>
              )}
              <span className={`text-sm ${step.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
        {percentage < 100 && (
          <Button asChild className="mt-6 w-full">
            <Link href="/profile/settings">
              Continue Setup <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        {percentage === 100 && (
          <div className="mt-6 text-center text-green-600 font-semibold flex items-center justify-center">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            <span>Profile Complete!</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ProfileCompletion
