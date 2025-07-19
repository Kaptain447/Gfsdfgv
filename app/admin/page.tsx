"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Users,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Search,
  Plus,
  LogOut,
  Eye,
  CheckCircle,
  Clock,
  Trash2,
  Ban,
  UserCheck,
  Mail,
  Download,
} from "lucide-react"
import { EmailAnalyticsDashboard } from "@/components/email-analytics-dashboard"

interface User {
  id: string
  email: string
  name: string
  role: string
  status: string
  created_at: string
  totalInvested: number
}

interface Transaction {
  id: string
  user_email: string
  amount: number
  status: "pending" | "completed" | "failed"
  created_at: string
  type: string
}

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null)
  const [users, setUsers] = useState<User[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [filterEmail, setFilterEmail] = useState("")
  const [newTx, setNewTx] = useState({ user_email: "", amount: "", status: "completed" })
  const [submitting, setSubmitting] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [bulkAction, setBulkAction] = useState("")
  const [isPerformingBulkAction, setIsPerformingBulkAction] = useState(false)
  const router = useRouter()

  // Mock data
  const mockUsers: User[] = [
    {
      id: "1",
      email: "john.doe@example.com",
      name: "John Doe",
      role: "user",
      status: "active",
      created_at: "2024-01-15T10:30:00Z",
      totalInvested: 50000,
    },
    {
      id: "2",
      email: "jane.smith@example.com",
      name: "Jane Smith",
      role: "user",
      status: "active",
      created_at: "2024-01-20T14:15:00Z",
      totalInvested: 75000,
    },
    {
      id: "3",
      email: "mike.johnson@example.com",
      name: "Mike Johnson",
      role: "user",
      status: "inactive",
      created_at: "2024-01-10T09:00:00Z",
      totalInvested: 25000,
    },
    {
      id: "4",
      email: "sarah.wilson@example.com",
      name: "Sarah Wilson",
      role: "user",
      status: "active",
      created_at: "2024-01-25T16:30:00Z",
      totalInvested: 100000,
    },
    {
      id: "5",
      email: "admin@pinnaclewealth.com",
      name: "Admin User",
      role: "admin",
      status: "active",
      created_at: "2024-01-01T09:00:00Z",
      totalInvested: 0,
    },
  ]

  const mockTransactions: Transaction[] = [
    {
      id: "1",
      user_email: "john.doe@example.com",
      amount: 10000,
      status: "completed",
      created_at: "2024-01-15T10:30:00Z",
      type: "deposit",
    },
    {
      id: "2",
      user_email: "jane.smith@example.com",
      amount: 25000,
      status: "completed",
      created_at: "2024-01-20T14:15:00Z",
      type: "investment",
    },
    {
      id: "3",
      user_email: "john.doe@example.com",
      amount: 5000,
      status: "pending",
      created_at: "2024-01-25T16:45:00Z",
      type: "withdrawal",
    },
  ]

  useEffect(() => {
    // Check authentication
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

    setSession(currentUser)
    setUsers(mockUsers)
    setTransactions(mockTransactions)
    setLoading(false)
  }, [router])

  const totalInvested = transactions.reduce((sum, tx) => sum + (tx.amount || 0), 0)
  const pendingWithdrawals = transactions.filter((tx) => tx.status === "pending").length
  const totalBalance = users.reduce((sum, user) => sum + user.totalInvested, 0)

  const filteredTransactions = filterEmail
    ? transactions.filter((tx) => tx.user_email.includes(filterEmail))
    : transactions

  const filteredUsers = filterEmail
    ? users.filter(
        (user) =>
          user.email.toLowerCase().includes(filterEmail.toLowerCase()) ||
          user.name.toLowerCase().includes(filterEmail.toLowerCase()),
      )
    : users

  const handleApprove = async (id: string) => {
    setTransactions((prev) => prev.map((tx) => (tx.id === id ? { ...tx, status: "completed" as const } : tx)))
  }

  const handleAddTransaction = async () => {
    if (!newTx.user_email || !newTx.amount) return

    setSubmitting(true)
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      user_email: newTx.user_email,
      amount: Number.parseFloat(newTx.amount),
      status: newTx.status as "pending" | "completed" | "failed",
      created_at: new Date().toISOString(),
      type: "manual",
    }

    setTransactions((prev) => [newTransaction, ...prev])
    setNewTx({ user_email: "", amount: "", status: "completed" })
    setSubmitting(false)
  }

  const handleLogout = async () => {
    localStorage.removeItem("user")
    router.push("/auth/signin")
  }

  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id))
    }
  }

  const handleBulkAction = async () => {
    if (!bulkAction || selectedUsers.length === 0) return

    const confirmed = confirm(`Are you sure you want to ${bulkAction} ${selectedUsers.length} selected users?`)
    if (!confirmed) return

    setIsPerformingBulkAction(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    switch (bulkAction) {
      case "activate":
        setUsers((prev) => prev.map((user) => (selectedUsers.includes(user.id) ? { ...user, status: "active" } : user)))
        break
      case "deactivate":
        setUsers((prev) =>
          prev.map((user) => (selectedUsers.includes(user.id) ? { ...user, status: "inactive" } : user)),
        )
        break
      case "suspend":
        setUsers((prev) =>
          prev.map((user) => (selectedUsers.includes(user.id) ? { ...user, status: "suspended" } : user)),
        )
        break
      case "delete":
        setUsers((prev) => prev.filter((user) => !selectedUsers.includes(user.id)))
        break
      case "send_email":
        // Simulate sending email
        alert(`Verification emails sent to ${selectedUsers.length} users`)
        break
      case "export":
        handleBulkExport()
        break
    }

    setSelectedUsers([])
    setBulkAction("")
    setIsPerformingBulkAction(false)
  }

  const handleBulkExport = () => {
    const selectedUserData = users.filter((user) => selectedUsers.includes(user.id))
    const csvData = [
      ["Name", "Email", "Role", "Status", "Total Invested", "Join Date"],
      ...selectedUserData.map((user) => [
        user.name,
        user.email,
        user.role,
        user.status,
        user.totalInvested.toString(),
        new Date(user.created_at).toLocaleDateString(),
      ]),
    ]

    const csvContent = csvData.map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `selected_users_${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Pinnacle Wealth Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {session.name || session.email}</span>
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Invested</p>
                  <p className="text-2xl font-bold text-gray-900">${totalInvested.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-900">${totalBalance.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Withdrawals</p>
                  <p className="text-2xl font-bold text-gray-900">{pendingWithdrawals}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User List */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  User Management
                </CardTitle>
                <CardDescription>Manage platform users and their accounts</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  value={filterEmail}
                  onChange={(e) => setFilterEmail(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Bulk Actions */}
            {selectedUsers.length > 0 && (
              <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-blue-900">
                      {selectedUsers.length} user{selectedUsers.length > 1 ? "s" : ""} selected
                    </span>
                    <Select value={bulkAction} onValueChange={setBulkAction}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Choose bulk action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="activate">
                          <div className="flex items-center">
                            <UserCheck className="h-4 w-4 mr-2" />
                            Activate Users
                          </div>
                        </SelectItem>
                        <SelectItem value="deactivate">
                          <div className="flex items-center">
                            <Ban className="h-4 w-4 mr-2" />
                            Deactivate Users
                          </div>
                        </SelectItem>
                        <SelectItem value="suspend">
                          <div className="flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            Suspend Users
                          </div>
                        </SelectItem>
                        <SelectItem value="send_email">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Verification Email
                          </div>
                        </SelectItem>
                        <SelectItem value="export">
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            Export Selected
                          </div>
                        </SelectItem>
                        <SelectItem value="delete">
                          <div className="flex items-center">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Users
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={handleBulkAction}
                      disabled={!bulkAction || isPerformingBulkAction}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isPerformingBulkAction ? "Processing..." : "Apply Action"}
                    </Button>
                    <Button onClick={() => setSelectedUsers([])} variant="outline">
                      Clear Selection
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <Checkbox
                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Invested
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                        Loading users...
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className={`hover:bg-gray-50 ${selectedUsers.includes(user.id) ? "bg-blue-50" : ""}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => handleSelectUser(user.id)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.status === "active"
                                ? "bg-green-100 text-green-800"
                                : user.status === "inactive"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${user.totalInvested.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link
                            href={`/admin/users/${encodeURIComponent(user.email)}`}
                            className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Add Transaction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add New Transaction
            </CardTitle>
            <CardDescription>Create a new transaction for a user</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                type="email"
                placeholder="User Email"
                value={newTx.user_email}
                onChange={(e) => setNewTx({ ...newTx, user_email: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Amount"
                value={newTx.amount}
                onChange={(e) => setNewTx({ ...newTx, amount: e.target.value })}
              />
              <Select value={newTx.status} onValueChange={(value) => setNewTx({ ...newTx, status: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleAddTransaction} disabled={submitting}>
                {submitting ? "Adding..." : "Add Transaction"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Recent Transactions
                </CardTitle>
                <CardDescription>Monitor all platform transactions</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Filter by email..."
                  value={filterEmail}
                  onChange={(e) => setFilterEmail(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.user_email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${tx.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{tx.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            tx.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : tx.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {tx.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {tx.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(tx.created_at).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {tx.status === "pending" && (
                          <Button
                            onClick={() => handleApprove(tx.id)}
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Email Analytics Dashboard */}
        <div className="mt-8">
          <EmailAnalyticsDashboard />
        </div>
      </div>
    </div>
  )
}
