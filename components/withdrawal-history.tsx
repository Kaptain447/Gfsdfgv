"use client"

import { useState, useMemo } from "react"
import {
  Search,
  Filter,
  Download,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  RefreshCw,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface WithdrawalTransaction {
  id: string
  requestDate: string
  amount: number
  fee: number
  netAmount: number
  method: string
  methodDetails: string
  status: "pending" | "processing" | "completed" | "failed" | "cancelled"
  processingTime: string
  completedDate?: string
  reference: string
  notes?: string
  estimatedCompletion?: string
}

export function WithdrawalHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [methodFilter, setMethodFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")
  const [selectedTransaction, setSelectedTransaction] = useState<WithdrawalTransaction | null>(null)

  // Mock withdrawal transaction data - updated for crypto only with zero fees
  const transactions: WithdrawalTransaction[] = [
    {
      id: "WR20250106001",
      requestDate: "2025-01-06T10:30:00Z",
      amount: 5000,
      fee: 0, // Zero fees
      netAmount: 5000,
      method: "bitcoin",
      methodDetails: "Bitcoin - 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      status: "processing",
      processingTime: "2-6 hours",
      reference: "TXN-2025-001234",
      notes: "Large withdrawal - additional verification required",
      estimatedCompletion: "2025-01-09T17:00:00Z",
    },
    {
      id: "WR20250104002",
      requestDate: "2025-01-04T14:15:00Z",
      amount: 1200,
      fee: 0, // Zero fees
      netAmount: 1200,
      method: "usdt",
      methodDetails: "USDT TRC20 - TQn9Y2khEsLMG73Gyzhh7aPJJ7zrKBxrNg",
      status: "completed",
      processingTime: "1-3 hours",
      completedDate: "2025-01-05T16:45:00Z",
      reference: "TXN-2025-001189",
    },
    {
      id: "WR20250102003",
      requestDate: "2025-01-02T09:20:00Z",
      amount: 800,
      fee: 0, // Zero fees
      netAmount: 800,
      method: "bitcoin",
      methodDetails: "Bitcoin - 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      status: "completed",
      processingTime: "2-6 hours",
      completedDate: "2025-01-03T11:30:00Z",
      reference: "TXN-2025-001156",
    },
    {
      id: "WR20241230004",
      requestDate: "2024-12-30T16:45:00Z",
      amount: 2500,
      fee: 0, // Zero fees
      netAmount: 2500,
      method: "usdt",
      methodDetails: "USDT TRC20 - TLsV52sRDL79HXGGm9yzwKiVAvnpZo8zac",
      status: "completed",
      processingTime: "1-3 hours",
      completedDate: "2024-12-30T22:15:00Z",
      reference: "TXN-2024-001098",
    },
    {
      id: "WR20241228005",
      requestDate: "2024-12-28T11:10:00Z",
      amount: 750,
      fee: 0, // Zero fees
      netAmount: 750,
      method: "bitcoin",
      methodDetails: "Bitcoin - bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      status: "failed",
      processingTime: "2-6 hours",
      reference: "TXN-2024-001067",
      notes: "Failed due to incorrect wallet address - please update payment information",
    },
    {
      id: "WR20241225006",
      requestDate: "2024-12-25T13:30:00Z",
      amount: 300,
      fee: 0, // Zero fees
      netAmount: 300,
      method: "usdt",
      methodDetails: "USDT TRC20 - TKzxdSv2FZKQrEqkKVgp5DcwEXBEKMg2Ax",
      status: "cancelled",
      processingTime: "1-3 hours",
      reference: "TXN-2024-001045",
      notes: "Cancelled by user request",
    },
    {
      id: "WR20241220007",
      requestDate: "2024-12-20T08:45:00Z",
      amount: 1500,
      fee: 0, // Zero fees
      netAmount: 1500,
      method: "bitcoin",
      methodDetails: "Bitcoin - 35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",
      status: "completed",
      processingTime: "2-6 hours",
      completedDate: "2024-12-21T14:20:00Z",
      reference: "TXN-2024-000987",
    },
    {
      id: "WR20241218008",
      requestDate: "2024-12-18T15:20:00Z",
      amount: 10000,
      fee: 0, // Zero fees
      netAmount: 10000,
      method: "usdt",
      methodDetails: "USDT TRC20 - TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      status: "completed",
      processingTime: "1-3 hours",
      completedDate: "2024-12-23T10:30:00Z",
      reference: "TXN-2024-000934",
    },
  ]

  // Filter and sort transactions
  const filteredTransactions = useMemo(() => {
    const filtered = transactions.filter((transaction) => {
      const matchesSearch =
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.methodDetails.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || transaction.status === statusFilter
      const matchesMethod = methodFilter === "all" || transaction.method === methodFilter

      const matchesDate = (() => {
        if (dateFilter === "all") return true
        const transactionDate = new Date(transaction.requestDate)
        const now = new Date()
        const daysDiff = Math.floor((now.getTime() - transactionDate.getTime()) / (1000 * 60 * 60 * 24))

        switch (dateFilter) {
          case "7days":
            return daysDiff <= 7
          case "30days":
            return daysDiff <= 30
          case "90days":
            return daysDiff <= 90
          default:
            return true
        }
      })()

      return matchesSearch && matchesStatus && matchesMethod && matchesDate
    })

    // Sort transactions
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime()
        case "date-asc":
          return new Date(a.requestDate).getTime() - new Date(b.requestDate).getTime()
        case "amount-desc":
          return b.amount - a.amount
        case "amount-asc":
          return a.amount - b.amount
        default:
          return 0
      }
    })

    return filtered
  }, [transactions, searchTerm, statusFilter, methodFilter, dateFilter, sortBy])

  // Calculate summary statistics
  const summaryStats = useMemo(() => {
    const completed = transactions.filter((t) => t.status === "completed")
    const totalWithdrawn = completed.reduce((sum, t) => sum + t.netAmount, 0)
    const totalFees = 0 // Always zero now
    const pending = transactions.filter((t) => t.status === "pending" || t.status === "processing").length

    return {
      totalWithdrawn,
      totalFees,
      totalTransactions: transactions.length,
      pendingTransactions: pending,
      completedTransactions: completed.length,
    }
  }, [transactions])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "processing":
        return <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "cancelled":
        return <XCircle className="w-4 h-4 text-gray-500" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-800",
      processing: "bg-blue-100 text-blue-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
      cancelled: "bg-gray-100 text-gray-800",
    }

    return (
      <Badge className={`${variants[status as keyof typeof variants]} border-0`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "bitcoin":
        return <DollarSign className="w-4 h-4 text-orange-600" />
      case "usdt":
        return <DollarSign className="w-4 h-4 text-green-600" />
      default:
        return <DollarSign className="w-4 h-4 text-gray-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const exportTransactions = () => {
    const csvContent = [
      ["Request ID", "Date", "Amount", "Fee", "Net Amount", "Method", "Status", "Reference"].join(","),
      ...filteredTransactions.map((t) =>
        [t.id, formatDate(t.requestDate), t.amount, t.fee, t.netAmount, t.method, t.status, t.reference].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `withdrawal-history-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      {/* Zero Fees Banner */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold mb-2">🎉 All Withdrawals Are Fee-Free!</h3>
          <p className="text-lg opacity-90">
            Enjoy zero transaction fees on all Bitcoin and USDT withdrawals. Keep 100% of your profits!
          </p>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Withdrawn</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(summaryStats.totalWithdrawn)}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Fees Saved</p>
                <p className="text-2xl font-bold text-green-600">$0.00 (FREE!)</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Transactions</p>
                <p className="text-2xl font-bold text-blue-600">{summaryStats.totalTransactions}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{summaryStats.pendingTransactions}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{summaryStats.completedTransactions}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-blue-600" />
              Filter & Search Transactions
            </span>
            <Button onClick={exportTransactions} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by ID, reference, or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={methodFilter} onValueChange={setMethodFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Methods" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cryptocurrencies</SelectItem>
                <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                <SelectItem value="usdt">Tether USDT</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Date (Newest)</SelectItem>
                <SelectItem value="date-asc">Date (Oldest)</SelectItem>
                <SelectItem value="amount-desc">Amount (High to Low)</SelectItem>
                <SelectItem value="amount-asc">Amount (Low to High)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transaction List */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Cryptocurrency Transaction History ({filteredTransactions.length} transactions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No transactions found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center space-x-3">
                        {getMethodIcon(transaction.method)}
                        <div>
                          <p className="font-semibold text-gray-800">{transaction.id}</p>
                          <p className="text-sm text-gray-500">
                            {transaction.method === "bitcoin" ? "Bitcoin" : "USDT TRC20"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-bold text-lg text-gray-800">{formatCurrency(transaction.amount)}</p>
                      <p className="text-sm text-green-600">Fee: FREE!</p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(transaction.status)}
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-600">{formatDate(transaction.requestDate)}</p>
                      {transaction.completedDate && (
                        <p className="text-xs text-green-600">Completed: {formatDate(transaction.completedDate)}</p>
                      )}
                    </div>

                    <div className="text-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedTransaction(transaction)}>
                            <Eye className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Transaction Details - {transaction.id}</DialogTitle>
                          </DialogHeader>
                          {selectedTransaction && (
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Transaction Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Request ID:</span>
                                        <span className="font-medium">{selectedTransaction.id}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Reference:</span>
                                        <span className="font-medium">{selectedTransaction.reference}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Status:</span>
                                        <div className="flex items-center space-x-2">
                                          {getStatusIcon(selectedTransaction.status)}
                                          {getStatusBadge(selectedTransaction.status)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Cryptocurrency Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Method:</span>
                                        <span className="font-medium capitalize">
                                          {selectedTransaction.method === "bitcoin" ? "Bitcoin (BTC)" : "USDT TRC20"}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Wallet:</span>
                                        <span className="font-medium text-xs break-all">
                                          {selectedTransaction.methodDetails.split(" - ")[1]}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Processing Time:</span>
                                        <span className="font-medium">{selectedTransaction.processingTime}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Amount Breakdown</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Withdrawal Amount:</span>
                                        <span className="font-medium">
                                          {formatCurrency(selectedTransaction.amount)}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Processing Fee:</span>
                                        <span className="font-medium text-green-600">
                                          FREE! (${selectedTransaction.fee.toFixed(2)})
                                        </span>
                                      </div>
                                      <Separator />
                                      <div className="flex justify-between">
                                        <span className="text-gray-600 font-semibold">Net Amount:</span>
                                        <span className="font-bold text-green-600">
                                          {formatCurrency(selectedTransaction.netAmount)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Timeline</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Requested:</span>
                                        <span className="font-medium">
                                          {formatDate(selectedTransaction.requestDate)}
                                        </span>
                                      </div>
                                      {selectedTransaction.estimatedCompletion && (
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Estimated Completion:</span>
                                          <span className="font-medium">
                                            {formatDate(selectedTransaction.estimatedCompletion)}
                                          </span>
                                        </div>
                                      )}
                                      {selectedTransaction.completedDate && (
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Completed:</span>
                                          <span className="font-medium text-green-600">
                                            {formatDate(selectedTransaction.completedDate)}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {selectedTransaction.notes && (
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Notes</h4>
                                  <Alert>
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertDescription>{selectedTransaction.notes}</AlertDescription>
                                  </Alert>
                                </div>
                              )}

                              <div className="flex justify-end space-x-3">
                                <Button variant="outline">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Receipt
                                </Button>
                                {selectedTransaction.status === "failed" && (
                                  <Button className="bg-blue-600 hover:bg-blue-700">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Retry Withdrawal
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need to Make Another Withdrawal?</h3>
          <p className="text-lg mb-6 opacity-90">
            Submit a new cryptocurrency withdrawal request with zero fees or contact our support team for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <DollarSign className="w-5 h-5 mr-2" />
              New Crypto Withdrawal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
