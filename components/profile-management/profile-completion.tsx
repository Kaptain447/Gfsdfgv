"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export interface ProfileCompletionProps {
  completed: number // 0 – 100
}

export function ProfileCompletion({ completed }: ProfileCompletionProps) {
  return (
    <Card>
      <CardTitle className="px-6 pt-6 text-base font-medium">Profile completeness</CardTitle>
      <CardContent className="space-y-4 p-6">
        <Progress value={completed} />
        <p className="text-sm text-muted-foreground">{completed}% of your profile is complete</p>
      </CardContent>
    </Card>
  )
}

export default ProfileCompletion
