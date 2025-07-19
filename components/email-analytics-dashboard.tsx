"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Eye, MousePointerClick, Send, TrendingUp, Calendar } from "lucide-react"

interface EmailMetric {
  date: string
  opens: number
  clicks: number
  sent: number
}

interface CampaignData {
  id: string
  name: string
  sent: number
  opens: number
  clicks: number
  openRate: number
  clickRate: number
  status: "sent" | "draft" | "scheduled"
}

interface TemplateData {
  id: string
  name: string
  usageCount: number
  avgOpenRate: number
  avgClickRate: number
}

export function EmailAnalyticsDashboard() {
  const [loading, setLoading] = useState(true)
  const [emailMetrics, setEmailMetrics] = useState<EmailMetric[]>([])
  const [campaigns, setCampaigns] = useState<CampaignData[]>([])
  const [templates, setTemplates] = useState<TemplateData[]>([])

  useEffect(() => {
    // Mock data for demonstration
    const mockEmailMetrics: EmailMetric[] = [
      { date: "Jan", sent: 1000, opens: 250, clicks: 50 },
      { date: "Feb", sent: 1200, opens: 300, clicks: 65 },
      { date: "Mar", sent: 1100, opens: 280, clicks: 60 },
      { date: "Apr", sent: 1300, opens: 350, clicks: 75 },
      { date: "May", sent: 1500, opens: 400, clicks: 85 },
      { date: "Jun", sent: 1400, opens: 380, clicks: 80 },
    ]

    const mockCampaigns: CampaignData[] = [
      {
        id: "c1",
        name: "Q1 Newsletter",
        sent: 5000,
        opens: 1200,
        clicks: 250,
        openRate: 24,
        clickRate: 5,
        status: "sent",
      },
      {
        id: "c2",
        name: "New Product Launch",
        sent: 3000,
        opens: 900,
        clicks: 180,
        openRate: 30,
        clickRate: 6,
        status: "sent",
      },
      {
        id: "c3",
        name: "Holiday Promotion",
        sent: 7000,
        opens: 1800,
        clicks: 400,
        openRate: 25.7,
        clickRate: 5.7,
        status: "sent",
      },
      {
        id: "c4",
        name: "Upcoming Webinar",
        sent: 0,
        opens: 0,
        clicks: 0,
        openRate: 0,
        clickRate: 0,
        status: "draft",
      },
    ]

    const mockTemplates: TemplateData[] = [
      { id: "t1", name: "Welcome Email", usageCount: 1500, avgOpenRate: 45, avgClickRate: 12 },
      { id: "t2", name: "Withdrawal Confirmation", usageCount: 800, avgOpenRate: 60, avgClickRate: 15 },
      { id: "t3", name: "Monthly Statement", usageCount: 1200, avgOpenRate: 35, avgClickRate: 8 },
    ]

    setEmailMetrics(mockEmailMetrics)
    setCampaigns(mockCampaigns)
    setTemplates(mockTemplates)
    setLoading(false)
  }, [])

  const totalEmailsSent = emailMetrics.reduce((sum, metric) => sum + metric.sent, 0)
  const totalOpens = emailMetrics.reduce((sum, metric) => sum + metric.opens, 0)
  const totalClicks = emailMetrics.reduce((sum, metric) => sum + metric.clicks, 0)

  const overallOpenRate = totalEmailsSent > 0 ? (totalOpens / totalEmailsSent) * 100 : 0
  const overallClickRate = totalEmailsSent > 0 ? (totalClicks / totalEmailsSent) * 100 : 0

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Emails Sent</p>
              <p className="text-2xl font-bold text-gray-900">{totalEmailsSent.toLocaleString()}</p>
            </div>
            <Send className="h-8 w-8 text-blue-600" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overall Open Rate</p>
              <p className="text-2xl font-bold text-gray-900">{overallOpenRate.toFixed(2)}%</p>
              <Progress value={overallOpenRate} className="h-2 mt-2" />
            </div>
            <Eye className="h-8 w-8 text-green-600" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overall Click Rate</p>
              <p className="text-2xl font-bold text-gray-900">{overallClickRate.toFixed(2)}%</p>
              <Progress value={overallClickRate} className="h-2 mt-2" />
            </div>
            <MousePointerClick className="h-8 w-8 text-purple-600" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Email Performance Trends</span>
              </CardTitle>
              <CardDescription>Open and click rates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={emailMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="opens" stroke="#3B82F6" name="Opens" />
                  <Line type="monotone" dataKey="clicks" stroke="#10B981" name="Clicks" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Emails Sent Over Time</span>
              </CardTitle>
              <CardDescription>Total emails dispatched per period</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={emailMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sent" fill="#F59E0B" name="Emails Sent" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Campaigns</CardTitle>
              <CardDescription>Performance of individual email campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Campaign Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Opens
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clicks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Open Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Click Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {campaign.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.sent.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.opens.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.clicks.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.openRate.toFixed(2)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.clickRate.toFixed(2)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            className={`${
                              campaign.status === "sent"
                                ? "bg-green-100 text-green-800"
                                : campaign.status === "draft"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {campaign.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates Performance</CardTitle>
              <CardDescription>Average performance of reusable email templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Template Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usage Count
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg. Open Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg. Click Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {templates.map((template) => (
                      <tr key={template.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {template.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {template.usageCount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {template.avgOpenRate.toFixed(2)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {template.avgClickRate.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
