"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, Mail, Printer } from "lucide-react"

import { WithdrawalConfirmationEmail } from "./withdrawal-confirmation"
import { WithdrawalProcessingEmail } from "./withdrawal-processing"
import { WithdrawalCompletedEmail } from "./withdrawal-completed"
import { WithdrawalFailedEmail } from "./withdrawal-failed"
import { WithdrawalCancelledEmail } from "./withdrawal-cancelled"
import { WithdrawalUnderReviewEmail } from "./withdrawal-under-review"

export function EmailTemplateManager() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("confirmation")

  // Sample data for previews
  const sampleData = {
    confirmation: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      accountNumber: "1234567890",
      requestDate: "January 15, 2024",
      estimatedProcessingTime: "3-5 business days",
      fees: 250,
      netAmount: 24750,
    },
    processing: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      currentStage: "approval" as const,
      estimatedCompletion: "January 18, 2024",
      progressPercentage: 65,
    },
    completed: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      netAmount: 24750,
      fees: 250,
      accountNumber: "1234567890",
      completionDate: "January 18, 2024",
      transactionId: "TXN-789456123",
      processingTime: "3 business days",
    },
    failed: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      failureReason: "invalid_account" as const,
      failureDate: "January 16, 2024",
      nextSteps: [
        "Verify your bank account information in your profile",
        "Ensure account details match your registered name",
        "Contact your bank to confirm account is active",
        "Submit a new withdrawal request with correct details",
      ],
      supportTicketId: "SUP-2024-5678",
    },
    cancelled: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      cancellationReason: "security_review" as const,
      cancellationDate: "January 16, 2024",
      refundStatus: "immediate" as const,
      additionalInfo: "Additional security verification required due to unusual account activity patterns.",
    },
    underReview: {
      clientName: "John Smith",
      withdrawalId: "WD-2024-001234",
      amount: 25000,
      currency: "$",
      reviewType: "large_amount" as const,
      reviewStartDate: "January 15, 2024",
      estimatedReviewTime: "2-3 business days",
      requiredDocuments: [
        "Government-issued photo ID",
        "Bank statement (last 3 months)",
        "Proof of address (utility bill or bank statement)",
      ],
      reviewReason: "Large withdrawal amount requires enhanced verification for security purposes.",
    },
  }

  const templates = [
    {
      id: "confirmation",
      name: "Withdrawal Confirmation",
      description: "Sent immediately after withdrawal request submission",
      status: "Active",
      color: "blue",
      component: WithdrawalConfirmationEmail,
    },
    {
      id: "processing",
      name: "Withdrawal Processing",
      description: "Sent during various processing stages",
      status: "Active",
      color: "yellow",
      component: WithdrawalProcessingEmail,
    },
    {
      id: "underReview",
      name: "Under Review",
      description: "Sent when additional verification is required",
      status: "Active",
      color: "orange",
      component: WithdrawalUnderReviewEmail,
    },
    {
      id: "completed",
      name: "Withdrawal Completed",
      description: "Sent when withdrawal is successfully completed",
      status: "Active",
      color: "green",
      component: WithdrawalCompletedEmail,
    },
    {
      id: "failed",
      name: "Withdrawal Failed",
      description: "Sent when withdrawal fails due to errors",
      status: "Active",
      color: "red",
      component: WithdrawalFailedEmail,
    },
    {
      id: "cancelled",
      name: "Withdrawal Cancelled",
      description: "Sent when withdrawal is cancelled",
      status: "Active",
      color: "gray",
      component: WithdrawalCancelledEmail,
    },
  ]

  const handleDownloadHTML = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId)
    if (!template) return

    // Create a temporary div to render the component
    const tempDiv = document.createElement("div")
    document.body.appendChild(tempDiv)

    // Get the HTML content (this is a simplified version - in a real app you'd use a proper React renderer)
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.name} - Famous FX</title>
</head>
<body>
    <!-- Email template HTML would be rendered here -->
    <p>Email template: ${template.name}</p>
    <p>This would contain the full HTML email template for integration with your email service.</p>
</body>
</html>`

    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${templateId}-email-template.html`
    a.click()
    URL.revokeObjectURL(url)
    document.body.removeChild(tempDiv)
  }

  const handlePrint = () => {
    window.print()
  }

  const renderTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId)
    if (!template) return null

    const Component = template.component
    const data = sampleData[templateId as keyof typeof sampleData]

    return <Component {...data} />
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Template Manager</h1>
          <p className="text-gray-600">Manage and preview withdrawal status email templates for Pinnacle Wealth</p>
        </div>

        <Tabs value={selectedTemplate} onValueChange={setSelectedTemplate} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Email Templates</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <Printer className="w-4 h-4" />
                  Print Preview
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownloadHTML(selectedTemplate)}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download HTML
                </Button>
              </div>
            </div>

            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-1 bg-gray-100">
              {templates.map((template) => (
                <TabsTrigger
                  key={template.id}
                  value={template.id}
                  className="flex flex-col items-center p-3 data-[state=active]:bg-white"
                >
                  <Mail className="w-4 h-4 mb-1" />
                  <span className="text-xs font-medium">{template.name}</span>
                  <Badge
                    variant="secondary"
                    className={`mt-1 text-xs ${
                      template.color === "blue"
                        ? "bg-blue-100 text-blue-800"
                        : template.color === "yellow"
                          ? "bg-yellow-100 text-yellow-800"
                          : template.color === "orange"
                            ? "bg-orange-100 text-orange-800"
                            : template.color === "green"
                              ? "bg-green-100 text-green-800"
                              : template.color === "red"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {template.status}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {templates.map((template) => (
            <TabsContent key={template.id} value={template.id} className="space-y-6">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Template Info */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        {template.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-900 mb-1">Description</h4>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-900 mb-2">Status</h4>
                        <Badge
                          variant="secondary"
                          className={`${
                            template.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : template.color === "yellow"
                                ? "bg-yellow-100 text-yellow-800"
                                : template.color === "orange"
                                  ? "bg-orange-100 text-orange-800"
                                  : template.color === "green"
                                    ? "bg-green-100 text-green-800"
                                    : template.color === "red"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {template.status}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadHTML(template.id)}
                          className="w-full flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download HTML
                        </Button>
                        <Button variant="outline" size="sm" className="w-full flex items-center gap-2 bg-transparent">
                          <Eye className="w-4 h-4" />
                          Preview
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-900 mb-2">Integration</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>• Compatible with all major email services</p>
                          <p>• Responsive design for mobile devices</p>
                          <p>• Inline CSS for maximum compatibility</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Template Preview */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Live Preview</CardTitle>
                      <p className="text-sm text-gray-600">
                        This preview shows how the email will appear to recipients
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="border rounded-lg overflow-hidden bg-gray-50">
                        <div className="max-h-[600px] overflow-y-auto">{renderTemplate(template.id)}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Implementation Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Email Service Integration</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>1. Download the HTML template files using the buttons above</p>
                <p>2. Import templates into your email service provider (SendGrid, Mailgun, etc.)</p>
                <p>3. Configure dynamic data placeholders with your user data</p>
                <p>4. Set up automated triggers based on withdrawal status changes</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Automation Triggers</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-800">Immediate Triggers:</p>
                  <ul className="text-gray-600 mt-1 space-y-1">
                    <li>• Confirmation → On withdrawal submission</li>
                    <li>• Processing → During verification stages</li>
                    <li>• Under Review → When flagged for review</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Final Status Triggers:</p>
                  <ul className="text-gray-600 mt-1 space-y-1">
                    <li>• Completed → On successful transfer</li>
                    <li>• Failed → On processing errors</li>
                    <li>• Cancelled → On cancellation events</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
