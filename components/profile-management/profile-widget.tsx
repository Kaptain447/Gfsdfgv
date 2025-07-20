"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSignIcon, TrendingUpIcon } from "lucide-react"

interface ProfileWidgetProps {
  firstName: string
  lastName: string
  profilePictureUrl: string
  totalInvested: number
  totalProfit: number
}

export function ProfileWidget({
  firstName,
  lastName,
  profilePictureUrl,
  totalInvested,
  totalProfit,
}: ProfileWidgetProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src={profilePictureUrl || "/placeholder.svg?height=64&width=64&query=user profile picture"}
            alt={`${firstName} ${lastName}`}
            width={64}
            height={64}
            className="rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h2 className="text-xl font-bold">
              {firstName} {lastName}
            </h2>
            <p className="text-sm text-gray-500">Member since {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <DollarSignIcon className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Total Invested</p>
              <p className="text-base font-semibold">${totalInvested.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUpIcon className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Profit</p>
              <p className="text-base font-semibold">${totalProfit.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileWidget
