"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Settings,
  Save,
  AlertTriangle,
  Download,
  Ban,
  Trash2,
  RefreshCw,
} from "lucide-react"

interface UserProfile {
  id: string
  email: string
  name: string
  phone: string
  country: string
  role: string
  status: string
  created_at: string
  totalInvested: number
  currentBalance: number
  totalProfit: number
  activeInvestments: number
  lastLogin: string
}

interface UserTransaction {
  id: string
  type: "deposit" | "withdrawal" | "profit" | "investment"
  amount: number
  status: "pending" | "completed" | "failed" | "cancelled"
  created_at: string
  description: string
}

export default function UserProfile() {
  const router = useRouter()
  const params = useParams()
  const email = decodeURIComponent(params.email as string)
  const [user, setUser] = useState<UserProfile | null>(null)
  const [transactions, setTransactions] = useState<UserTransaction[]>([])
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Mock user data based on email
  const mockUser: UserProfile = {
    id: "1",
    email: email,
    name: email
      .split("@")[0]
      .replace(".", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()),
    phone: "+1 (555) 123-4567",
    country: "United States",
    role: email.includes("admin") ? "admin" : "user",
    status: "active",
    created_at: "2024-01-15T10:30:00Z",
    totalInvested: 50000,
    currentBalance: 62500,
    totalProfit: 12500,
    activeInvestments: 3,
    lastLogin: "2024-01-25T10:30:00Z",
  }

  const mockTransactions: UserTransaction[] = [
    {
      id: "1",
      type: "deposit",
      amount: 10000,
      status: "completed",
      created_at: "2024-01-15T10:30:00Z",
      description: "Initial deposit",
    },
    {
      id: "2",
      type: "investment",
      amount: 25000,
      status: "completed",
      created_at: "2024-01-16T14:15:00Z",
      description: "Professional Plan Investment",
    },
    {
      id: "3",
      type: "profit",
      amount: 5000,
      status: "completed",
      created_at: "2024-01-20T09:00:00Z",
      description: "Monthly profit - Professional Plan",
    },
    {
      id: "4",
      type: "withdrawal",
      amount: 2500,
      status: "pending",
      created_at: "2024-01-24T16:45:00Z",
      description: "Withdrawal request",
    },
  ]

  useEffect(() => {
    if (email) {
      fetchUserAndTransactions()
    }
  }, [email])

  async function fetchUserAndTransactions() {
    setLoading(true)

    // Check admin authentication
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/signin")
      return
    }

    const currentUser = JSON.parse(userData)
    if (!currentUser.email.includes("admin")) {
      router.push("/dashboard")
      return
    }

    // Simulate API calls
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setUser(mockUser)
    setTransactions(mockTransactions)
    setLoading(false)
  }

  const handleBanUser = async () => {
    if (!user) return

    const confirmed = confirm("Are you sure you want to ban this user?")
    if (!confirmed) return

    setUser({ ...user, status: "banned" })
  }

  const handleDeleteUser = async () => {
    const confirmed = confirm("Are you sure you want to delete this user? This cannot be undone.")
    if (!confirmed) return

    // Simulate deletion and redirect
    router.push("/admin")
  }

  const handleResendVerification = async () => {
    alert("Verification email resent.")
  }

  const handleExportCSV = () => {
    setExporting(true)
    const rows = [
      ["Amount", "Status", "Date", "Type", "Description"],
      ...transactions.map((tx) => [
        tx.amount.toString(),
        tx.status,
        new Date(tx.created_at).toLocaleString(),
        tx.type,
        tx.description,
      ]),
    ]
    const csvContent = "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `transactions_${email}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setExporting(false)
  }

  const handleSave = async () => {
    if (!user) return

    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      case "banned":
        return <Badge className="bg-red-100 text-red-800">Banned</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTransactionBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">User Not Found</h2>
          <p className="text-gray-600 mb-4">The requested user profile could not be found.</p>
          <Button asChild>
            <Link href="/admin">Back to Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  const totalInvested = transactions.reduce((sum, tx) => sum + (tx.amount || 0), 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link
                href="/admin"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleExportCSV} disabled={exporting}>
                <Download className="h-4 w-4 mr-2" />
                {exporting ? "Exporting..." : "Export CSV"}
              </Button>
              <Button variant="outline" onClick={handleResendVerification}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Resend Verification
              </Button>
              <Button variant="outline" onClick={handleBanUser}>
                <Ban className="h-4 w-4 mr-2" />
                Ban User
              </Button>
              <Button variant="destructive" onClick={handleDeleteUser}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete User
              </Button>
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                    <Save className="h-4 w-4 ml-2" />
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  User Information
                </CardTitle>
                <CardDescription>Basic user details and account status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <div className="flex justify-center mt-2">{getStatusBadge(user.status)}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Name</Label>
                    {isEditing ? (
                      <Input
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Email</Label>
                    <div className="flex items-center mt-1">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-900">{user.email}</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Phone</Label>
                    {isEditing ? (
                      <Input
                        value={user.phone}
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                        className="mt-1"
                      />
                    ) : (
                      <div className="flex items-center mt-1">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        <p className="text-sm text-gray-900">{user.phone}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Country</Label>
                    {isEditing ? (
                      <Input
                        value={user.country}
                        onChange={(e) => setUser({ ...user, country: e.target.value })}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.country}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Role</Label>
                    {isEditing ? (
                      <Select value={user.role} onValueChange={(value) => setUser({ ...user, role: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="moderator">Moderator</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge className="mt-1" variant={user.role === "admin" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Status</Label>
                    {isEditing ? (
                      <Select value={user.status} onValueChange={(value) => setUser({ ...user, status: value })}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="suspended">Suspended</SelectItem>
                          <SelectItem value="banned">Banned</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <div className="mt-1">{getStatusBadge(user.status)}</div>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Join Date</Label>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-sm text-gray-900">{new Date(user.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Last Login</Label>
                    <p className="mt-1 text-sm text-gray-900">{new Date(user.lastLogin).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio & Transactions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="text-lg font-semibold">{user.role || "user"}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Status</p>
                    <div className="mt-1">{getStatusBadge(user.status)}</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Total Invested</p>
                    <p className="text-lg font-semibold">${totalInvested.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transaction History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Transactions
                </CardTitle>
                <CardDescription>User transaction history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${tx.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{tx.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{getTransactionBadge(tx.status)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(tx.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
