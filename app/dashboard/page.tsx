"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileWidget } from "@/components/profile-management/profile-widget"
import { ProfileCompletion } from "@/components/profile-management/profile-completion"
import { ProfileAnalytics } from "@/components/profile-management/profile-analytics"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DollarSignIcon,
  TrendingUpIcon,
  WalletIcon,
  ClockIcon,
  ArrowRightIcon,
  AwardIcon,
  HandshakeIcon,
  SettingsIcon,
  BellIcon,
} from "lucide-react"
import Link from "next/link"

interface UserProfileData {
  firstName: string
  lastName: string
  profilePictureUrl: string
  totalInvested: number
  totalProfit: number
  activeInvestmentsCount: number
  pendingWithdrawalsCount: number
  profileCompletionPercentage: number
}

interface Investment {
  id: string
  plan_name: string
  amount: number
  status: string
  expected_return: number
  current_value: number
}

interface Transaction {
  id: string
  type: string
  amount: number
  status: string
  transaction_date: string
}

interface Activity {
  id: string
  type: string
  description: string
  timestamp: string
}

interface Achievement {
  id: string
  name: string
  description: string
  achieved_at: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null)
  const [investments, setInvestments] = useState<Investment[]>([])
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])

  const growth = [
    { month: "Jan", value: 1000 },
    { month: "Feb", value: 1400 },
    { month: "Mar", value: 1600 },
    { month: "Apr", value: 1900 },
    { month: "May", value: 2300 },
    { month: "Jun", value: 2800 },
  ]

  const transactions = [
    { name: "Deposits", value: 60 },
    { name: "Withdrawals", value: 25 },
    { name: "Fees", value: 10 },
    { name: "Dividends", value: 5 },
  ]

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true)
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/auth/signin")
          return
        }

        // Mock data for demonstration
        setUserProfile({
          firstName: "John",
          lastName: "Doe",
          profilePictureUrl: "/placeholder.svg?height=64&width=64",
          totalInvested: 15000,
          totalProfit: 2500,
          activeInvestmentsCount: 3,
          pendingWithdrawalsCount: 1,
          profileCompletionPercentage: 76,
        })

        setInvestments([
          {
            id: "1",
            plan_name: "Premium Plan",
            amount: 5000,
            status: "active",
            expected_return: 5500,
            current_value: 5200,
          },
          {
            id: "2",
            plan_name: "Professional Plan",
            amount: 10000,
            status: "active",
            expected_return: 11500,
            current_value: 10800,
          },
        ])

        setTransactionsData([
          {
            id: "1",
            type: "deposit",
            amount: 5000,
            status: "completed",
            transaction_date: "2024-01-15",
          },
          {
            id: "2",
            type: "withdrawal",
            amount: 1000,
            status: "pending",
            transaction_date: "2024-01-20",
          },
        ])

        setActivities([
          {
            id: "1",
            type: "Investment",
            description: "Started Premium Plan investment",
            timestamp: "2024-01-15T10:00:00Z",
          },
          {
            id: "2",
            type: "Withdrawal",
            description: "Requested withdrawal of $1,000",
            timestamp: "2024-01-20T14:30:00Z",
          },
        ])

        setAchievements([
          {
            id: "1",
            name: "First Investment",
            description: "Made your first investment",
            achieved_at: "2024-01-15",
          },
          {
            id: "2",
            name: "Profile Complete",
            description: "Completed your profile setup",
            achieved_at: "2024-01-10",
          },
        ])
      } catch (err: any) {
        console.error("Dashboard data fetch error:", err)
        setError(err.message || "Failed to load dashboard data.")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [router])

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-28 w-full rounded-lg" />
        <Skeleton className="h-28 w-full rounded-lg" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">{error}</p>
        <Button onClick={() => router.push("/auth/signin")}>Go to Sign In</Button>
      </div>
    )
  }

  if (!userProfile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">No Profile Data</h1>
        <p className="text-gray-700 mb-6">Could not load user profile. Please try again later.</p>
        <Button onClick={() => router.push("/auth/signin")}>Go to Sign In</Button>
      </div>
    )
  }

  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {userProfile.firstName}!</h1>
        <Button variant="outline" className="hidden md:flex bg-transparent">
          <BellIcon className="h-4 w-4 mr-2" /> Notifications
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <WalletIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(userProfile.totalInvested + userProfile.totalProfit).toFixed(2)}
            </div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${userProfile.totalProfit.toFixed(2)}</div>
            <p className="text-xs text-gray-500">Since joining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProfile.activeInvestmentsCount}</div>
            <p className="text-xs text-gray-500">Currently running</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Withdrawals</CardTitle>
            <ClockIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProfile.pendingWithdrawalsCount}</div>
            <p className="text-xs text-gray-500">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProfileAnalytics growth={growth} transactions={transactions} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="investments">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Your Investments</CardTitle>
                  <Link href="/investment" className="text-sm text-blue-600 hover:underline flex items-center">
                    View All <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </CardHeader>
                <CardContent>
                  {investments.length > 0 ? (
                    <div className="space-y-4">
                      {investments.slice(0, 3).map((inv) => (
                        <div key={inv.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <h3 className="font-semibold">{inv.plan_name}</h3>
                            <p className="text-sm text-gray-600">Invested: ${inv.amount.toFixed(2)}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${inv.status === "active" ? "text-green-600" : "text-gray-500"}`}>
                              {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                            </p>
                            <p className="text-sm text-gray-600">Current: ${inv.current_value.toFixed(2)}</p>
                          </div>
                          <Link href={`/investment/${inv.id}`} className="text-blue-600 hover:underline text-sm">
                            Details
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No active investments yet. Start your first investment!</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Activity</CardTitle>
                  <Link href="/activity" className="text-sm text-blue-600 hover:underline flex items-center">
                    View All <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </CardHeader>
                <CardContent>
                  {activities.length > 0 ? (
                    <div className="space-y-4">
                      {activities.slice(0, 5).map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <h3 className="font-semibold">{activity.type}</h3>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                          </div>
                          <p className="text-sm text-gray-500">{new Date(activity.timestamp).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No recent activity.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <ProfileWidget
            firstName={userProfile.firstName}
            lastName={userProfile.lastName}
            profilePictureUrl={userProfile.profilePictureUrl}
            totalInvested={userProfile.totalInvested}
            totalProfit={userProfile.totalProfit}
          />
          <ProfileCompletion percentage={userProfile.profileCompletionPercentage} />

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
                <DollarSignIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Deposit Funds</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
                <WalletIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Withdraw Funds</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
                <HandshakeIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">New Investment</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-4 bg-transparent">
                <SettingsIcon className="h-6 w-6 mb-1" />
                <span className="text-xs">Settings</span>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              {achievements.length > 0 ? (
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3">
                      <AwardIcon className="h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold">{achievement.name}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No achievements yet. Keep investing to unlock them!</p>
              )}
              <Button variant="link" className="mt-4 p-0 h-auto">
                <Link href="/achievements" className="flex items-center text-blue-600 hover:underline">
                  View All Achievements <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {transactionsData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactionsData.map((tx) => (
                    <tr key={tx.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.type}</td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${tx.type === "deposit" ? "text-green-600" : "text-red-600"}`}
                      >
                        ${tx.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            tx.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : tx.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(tx.transaction_date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600">No recent transactions.</p>
          )}
          <Button variant="link" className="mt-4 p-0 h-auto">
            <Link href="/transactions" className="flex items-center text-blue-600 hover:underline">
              View All Transactions <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
