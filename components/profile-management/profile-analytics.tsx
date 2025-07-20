"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import {
  Eye,
  Users,
  Activity,
  TrendingUp,
  Calendar,
  Award,
  Star,
  Target,
  MessageCircle,
  ThumbsUp,
  Clock,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileAnalyticsProps {
  growth: Array<{ month: string; value: number }>
  transactions: Array<{ name: string; value: number }>
  className?: string
}

interface AnalyticsData {
  profileViews: number
  profileViewsChange: number
  connections: number
  connectionsChange: number
  activityScore: number
  activityScoreChange: number
  engagementRate: number
  engagementRateChange: number
}

interface ChartData {
  name: string
  value: number
  color?: string
}

interface TimeSeriesData {
  date: string
  views: number
  connections: number
  activity: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  earnedDate: string
  rarity: "common" | "rare" | "epic" | "legendary"
}

const COLORS = ["#34d399", "#6366f1", "#fcd34d", "#f472b6"]

export function ProfileAnalytics({ growth, transactions, className = "" }: ProfileAnalyticsProps) {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock analytics data
    const mockAnalytics: AnalyticsData = {
      profileViews: 1247,
      profileViewsChange: 12.5,
      connections: 89,
      connectionsChange: 8.3,
      activityScore: 85,
      activityScoreChange: 5.2,
      engagementRate: 67,
      engagementRateChange: -2.1,
    }

    const mockChartData: ChartData[] = [
      { name: "Profile Views", value: 1247, color: "#3B82F6" },
      { name: "Connections", value: 89, color: "#10B981" },
      { name: "Messages", value: 156, color: "#F59E0B" },
      { name: "Shares", value: 43, color: "#EF4444" },
    ]

    const mockTimeSeriesData: TimeSeriesData[] = [
      { date: "Jan", views: 120, connections: 15, activity: 65 },
      { date: "Feb", views: 180, connections: 22, activity: 72 },
      { date: "Mar", views: 240, connections: 28, activity: 78 },
      { date: "Apr", views: 320, connections: 35, activity: 82 },
      { date: "May", views: 385, connections: 41, activity: 85 },
    ]

    const mockAchievements: Achievement[] = [
      {
        id: "verified-profile",
        title: "Verified Profile",
        description: "Successfully verified your identity",
        icon: <Award className="h-4 w-4" />,
        earnedDate: "2024-01-15",
        rarity: "common",
      },
      {
        id: "first-investment",
        title: "First Investment",
        description: "Made your first investment",
        icon: <Target className="h-4 w-4" />,
        earnedDate: "2024-01-20",
        rarity: "common",
      },
      {
        id: "premium-member",
        title: "Premium Member",
        description: "Upgraded to premium membership",
        icon: <Star className="h-4 w-4" />,
        earnedDate: "2024-01-25",
        rarity: "rare",
      },
      {
        id: "high-performer",
        title: "High Performer",
        description: "Achieved 25% portfolio growth",
        icon: <TrendingUp className="h-4 w-4" />,
        earnedDate: "2024-02-01",
        rarity: "epic",
      },
    ]

    setAnalytics(mockAnalytics)
    setChartData(mockChartData)
    setTimeSeriesData(mockTimeSeriesData)
    setAchievements(mockAchievements)
    setLoading(false)
  }, [])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800"
      case "rare":
        return "bg-blue-100 text-blue-800"
      case "epic":
        return "bg-purple-100 text-purple-800"
      case "legendary":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600"
    if (change < 0) return "text-red-600"
    return "text-gray-600"
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return "↗"
    if (change < 0) return "↘"
    return "→"
  }

  if (loading) {
    return (
      <Card className={className}>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!analytics) return null

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.profileViews.toLocaleString()}</p>
                <p className={`text-xs ${getChangeColor(analytics.profileViewsChange)}`}>
                  {getChangeIcon(analytics.profileViewsChange)} {Math.abs(analytics.profileViewsChange)}% vs last month
                </p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Connections</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.connections}</p>
                <p className={`text-xs ${getChangeColor(analytics.connectionsChange)}`}>
                  {getChangeIcon(analytics.connectionsChange)} {Math.abs(analytics.connectionsChange)}% vs last month
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Activity Score</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.activityScore}</p>
                <p className={`text-xs ${getChangeColor(analytics.activityScoreChange)}`}>
                  {getChangeIcon(analytics.activityScoreChange)} {Math.abs(analytics.activityScoreChange)}% vs last
                  month
                </p>
              </div>
              <Activity className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.engagementRate}%</p>
                <p className={`text-xs ${getChangeColor(analytics.engagementRateChange)}`}>
                  {getChangeIcon(analytics.engagementRateChange)} {Math.abs(analytics.engagementRateChange)}% vs last
                  month
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Investment Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Investment Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Transaction Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Transaction Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={transactions}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {transactions.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Activity Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Activity Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#3B82F6" />
              <Bar dataKey="connections" fill="#10B981" />
              <Bar dataKey="activity" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">{achievement.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                    <Badge className={`text-xs ${getRarityColor(achievement.rarity)}`}>{achievement.rarity}</Badge>
                  </div>
                  <p className="text-xs text-gray-500">{achievement.description}</p>
                  <div className="flex items-center mt-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {new Date(achievement.earnedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Engagement Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ThumbsUp className="h-5 w-5" />
            <span>Engagement Score</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
                <span className="text-sm text-gray-600">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Activity Level</span>
                <span className="text-sm text-gray-600">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Social Engagement</span>
                <span className="text-sm text-gray-600">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Investment Activity</span>
                <span className="text-sm text-gray-600">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-800">Overall Score: {analytics.activityScore}/100</span>
            </div>
            <p className="text-sm text-blue-700">
              Great job! Your profile engagement is above average. Keep up the excellent work to maintain your high
              activity score.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Performance Tabs */}
      <Card>
        <CardContent className="p-0">
          <Tabs defaultValue="daily">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="daily" className="mt-4 p-6">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#3B82F6" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="weekly" className="mt-4 p-6">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="connections" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="monthly" className="mt-4 p-6">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="activity" stroke="#F59E0B" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfileAnalytics
