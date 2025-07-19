"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  User,
  Settings,
  Shield,
  FileText,
  Bell,
  TrendingUp,
  DollarSign,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  CheckCircle,
  AlertCircle,
  Edit,
  Download,
  Upload,
  Eye,
  Activity,
} from "lucide-react"

interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  joinDate: string
  lastLogin: string
  profileImage: string
  isVerified: boolean
  isPremium: boolean
  completionPercentage: number
  totalInvested: number
  currentBalance: number
  totalProfit: number
  profitPercentage: number
  activeInvestments: number
  bio: string
  website: string
  linkedin: string
  twitter: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")
  const [profile, setProfile] = useState<any | null>(null)
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/signin")
      return
    }

    // Mock profile data
    const mockProfile = {
      id: "1",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@pinnaclewealthz.com",
      phone: "+1 (555) 123-4567",
      country: "United States",
      city: "New York",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-25T10:30:00Z",
      profileImage: "/images/hero-family.jpg",
      isVerified: true,
      isPremium: true,
      completionPercentage: 85,
      totalInvested: 50000,
      currentBalance: 62500,
      totalProfit: 12500,
      profitPercentage: 25,
      activeInvestments: 3,
      bio: "Experienced investor focused on long-term wealth building and portfolio diversification.",
      website: "https://johnsmith.com",
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "@johnsmith",
    }

    const mockActivities = [
      {
        id: "1",
        type: "investment",
        description: "Invested in Professional Plan",
        timestamp: "2024-01-24T14:30:00Z",
        amount: 25000,
      },
      {
        id: "2",
        type: "profit",
        description: "Monthly profit received",
        timestamp: "2024-01-20T09:00:00Z",
        amount: 5000,
      },
      {
        id: "3",
        type: "withdrawal",
        description: "Withdrawal request submitted",
        timestamp: "2024-01-18T16:45:00Z",
        amount: 2500,
      },
      {
        id: "4",
        type: "profile",
        description: "Profile updated",
        timestamp: "2024-01-15T11:20:00Z",
      },
      {
        id: "5",
        type: "security",
        description: "Two-factor authentication enabled",
        timestamp: "2024-01-10T08:15:00Z",
      },
    ]

    setProfile(mockProfile)
    setActivities(mockActivities)
    setLoading(false)
  }, [router])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "investment":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "profit":
        return <DollarSign className="h-4 w-4 text-blue-600" />
      case "withdrawal":
        return <Download className="h-4 w-4 text-orange-600" />
      case "profile":
        return <User className="h-4 w-4 text-purple-600" />
      case "security":
        return <Shield className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-600 mb-4">Unable to load your profile information.</p>
          <Button asChild>
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mr-4"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/profile/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </Button>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
                {profile.isVerified && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {profile.firstName} {profile.lastName}
                  </h2>
                  {profile.isVerified && <Badge className="bg-green-100 text-green-800">Verified</Badge>}
                  {profile.isPremium && <Badge className="bg-purple-100 text-purple-800">Premium</Badge>}
                </div>
                <p className="text-gray-600 mb-2">{profile.email}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profile.city}, {profile.country}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined {new Date(profile.joinDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Profile Completion</div>
                <div className="flex items-center space-x-2">
                  <Progress value={profile.completionPercentage} className="w-24" />
                  <span className="text-sm font-medium">{profile.completionPercentage}%</span>
                </div>
              </div>
            </div>

            {profile.bio && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-700">{profile.bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* Profile Completion Alert */}
        {profile.completionPercentage < 100 && (
          <Alert className="mb-6 border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-700">
              Your profile is {profile.completionPercentage}% complete. Complete your profile to unlock all features and
              improve your investment experience.
              <Button variant="link" className="p-0 h-auto ml-2 text-yellow-700 underline">
                Complete Now
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Invested</p>
                      <p className="text-2xl font-bold text-gray-900">${profile.totalInvested.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Current Balance</p>
                      <p className="text-2xl font-bold text-gray-900">${profile.currentBalance.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Profit</p>
                      <p className="text-2xl font-bold text-green-600">+${profile.totalProfit.toLocaleString()}</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Active Investments</p>
                      <p className="text-2xl font-bold text-gray-900">{profile.activeInvestments}</p>
                    </div>
                    <Activity className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest account activities and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                        <p className="text-xs text-gray-500">{new Date(activity.timestamp).toLocaleString()}</p>
                      </div>
                      {activity.amount && (
                        <div className="text-sm font-medium text-gray-900">
                          {activity.type === "withdrawal" ? "-" : "+"}${activity.amount.toLocaleString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Activity</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personal Tab */}
          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Your basic personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">First Name</Label>
                    <p className="mt-1 text-sm text-gray-900">{profile.firstName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Last Name</Label>
                    <p className="mt-1 text-sm text-gray-900">{profile.lastName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Email</Label>
                    <div className="flex items-center mt-1">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-900">{profile.email}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Phone</Label>
                    <div className="flex items-center mt-1">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-900">{profile.phone}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Country</Label>
                    <p className="mt-1 text-sm text-gray-900">{profile.country}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">City</Label>
                    <p className="mt-1 text-sm text-gray-900">{profile.city}</p>
                  </div>
                </div>

                {profile.bio && (
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Bio</Label>
                    <p className="mt-1 text-sm text-gray-900">{profile.bio}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-700">Social Links</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {profile.website && (
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <a
                          href={profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Website
                        </a>
                      </div>
                    )}
                    {profile.linkedin && (
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                      </div>
                    )}
                    {profile.twitter && (
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{profile.twitter}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Investment Tab */}
          <TabsContent value="investment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Value</h3>
                  <p className="text-3xl font-bold text-gray-900">${profile.currentBalance.toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">+{profile.profitPercentage}% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Returns</h3>
                  <p className="text-3xl font-bold text-green-600">+${profile.totalProfit.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-1">Since inception</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Activity className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Plans</h3>
                  <p className="text-3xl font-bold text-gray-900">{profile.activeInvestments}</p>
                  <p className="text-sm text-gray-500 mt-1">Investment plans</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Investment Summary</CardTitle>
                <CardDescription>Overview of your investment portfolio and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Professional Plan</p>
                      <p className="text-sm text-gray-500">Started Jan 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">$25,000</p>
                      <p className="text-sm text-green-600">+15% ROI</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Premium Plan</p>
                      <p className="text-sm text-gray-500">Started Dec 20, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">$20,000</p>
                      <p className="text-sm text-green-600">+22% ROI</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Starter Plan</p>
                      <p className="text-sm text-gray-500">Started Nov 10, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">$5,000</p>
                      <p className="text-sm text-green-600">+18% ROI</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>Manage your account security and authentication methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Verification</p>
                    <p className="text-sm text-gray-500">Your email address has been verified</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Phone Verification</p>
                    <p className="text-sm text-gray-500">Your phone number has been verified</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Login Activity
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download Security Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Documents & Verification</span>
                </CardTitle>
                <CardDescription>Manage your identity documents and verification status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Identity Document</h4>
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Government-issued ID or passport</p>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Document
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Proof of Address</h4>
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Utility bill or bank statement</p>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Document
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Bank Statement</h4>
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Recent bank statement for verification</p>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">Tax Documents</h4>
                      <Badge variant="secondary">Optional</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Tax returns or income verification</p>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>
                </div>

                <Alert className="border-blue-200 bg-blue-50">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-700">
                    Your account is fully verified! You have access to all platform features and higher transaction
                    limits.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>Choose how you want to receive notifications and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Receive urgent updates via SMS</p>
                    </div>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Investment Updates</p>
                      <p className="text-sm text-gray-500">Get notified about your investments</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Marketing Emails</p>
                      <p className="text-sm text-gray-500">Receive promotional content</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Weekly Reports</p>
                      <p className="text-sm text-gray-500">Receive weekly portfolio summaries</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button asChild>
                    <Link href="/profile/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Manage All Preferences
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Label({ className, children, ...props }: { className?: string; children: React.ReactNode }) {
  return (
    <label className={`block text-sm font-medium text-gray-700 ${className || ""}`} {...props}>
      {children}
    </label>
  )
}
