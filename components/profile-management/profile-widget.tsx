"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export interface ProfileWidgetProps {
  name: string
  email: string
  avatarUrl?: string
}

export function ProfileWidget({
  name,
  email,
  avatarUrl = "/images/placeholder.svg?height=96&width=96&query=user",
}: ProfileWidgetProps) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <Image
        src={avatarUrl || "/placeholder.svg"}
        alt={`${name}'s avatar`}
        width={72}
        height={72}
        className="h-18 w-18 rounded-full object-cover"
      />
      <CardContent className="space-y-1">
        <h3 className="text-lg font-semibold leading-none">{name}</h3>
        <p className="text-sm text-muted-foreground">{email}</p>
      </CardContent>
    </Card>
  )
}

export default ProfileWidget
