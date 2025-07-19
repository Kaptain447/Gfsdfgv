"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { BrandedLoading } from "@/components/branded-loading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

interface Investment {
  id: string
  user_id: string
  plan_name: string
  amount: number
  start_date: string
  end_date: string
  status: "active" | "completed" | "pending" | "cancelled"
  expected_return: number
  current_value: number
  profit_loss: number
  last_updated: string
}

export default function InvestmentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const investmentId = params.id as string
  const [investment, setInvestment] = useState<Investment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInvestment = async () => {
      setLoading(true)
      try {
        const token = localStorage.getItem("token") // Assuming token is stored in localStorage
        if (!token) {
          router.push("/auth/signin")
          return
        }

        const response = await fetch(`/api/user/investments/${investmentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to fetch investment details")
        }

        const data: Investment = await response.json()
        setInvestment(data)
      } catch (err: any) {
        console.error("Error fetching investment:", err)
        setError(err.message || "An unexpected error occurred.")
      } finally {
        setLoading(false)
      }
    }

    if (investmentId) {
      fetchInvestment()
    }
  }, [investmentId, router])

  if (loading) {
    return <BrandedLoading />
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">{error}</p>
        <Button onClick={() => router.back()}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>
    )
  }

  if (!investment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Investment Not Found</h1>
        <p className="text-gray-700 mb-6">
          The investment you are looking for does not exist or you do not have access to it.
        </p>
        <Button onClick={() => router.push("/dashboard")}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Go to Dashboard
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Investment Details</h1>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">{investment.plan_name}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p>
              <strong>Initial Amount:</strong> ${investment.amount.toFixed(2)}
            </p>
            <p>
              <strong>Current Value:</strong> ${investment.current_value.toFixed(2)}
            </p>
            <p>
              <strong>Profit/Loss:</strong>{" "}
              <span className={investment.profit_loss >= 0 ? "text-green-600" : "text-red-600"}>
                ${investment.profit_loss.toFixed(2)}
              </span>
            </p>
            <p>
              <strong>Expected Return:</strong> {investment.expected_return}%
            </p>
          </div>
          <div>
            <p>
              <strong>Start Date:</strong> {new Date(investment.start_date).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong> {new Date(investment.end_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  investment.status === "active"
                    ? "text-green-500"
                    : investment.status === "completed"
                      ? "text-blue-500"
                      : investment.status === "pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                }`}
              >
                {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
              </span>
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date(investment.last_updated).toLocaleDateString()}{" "}
              {new Date(investment.last_updated).toLocaleTimeString()}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder for more details or charts */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Charts and detailed performance metrics will be displayed here.</p>
          {/* You can add a charting library here, e.g., Recharts, Chart.js */}
          <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
            [Investment Performance Chart Placeholder]
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
