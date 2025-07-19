import type { Metadata } from "next"
import ChatFAQBot from "@/components/chat-faq-bot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Zap, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Instant Answers | Pinnacle Wealth",
  description:
    "Get instant answers to common questions about investments, withdrawals, and account management at Pinnacle Wealth.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Instant FAQ Responses</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get immediate answers to your questions about investments, withdrawals, and account management. Our
            AI-powered chat provides instant responses 24/7.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Instant Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get immediate answers to common questions without waiting for support.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our automated responses are available round the clock, even when agents are offline.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Accurate Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All responses are regularly updated to ensure accuracy and relevance.</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Bot Component */}
          <ChatFAQBot />

          {/* Additional Help */}
          <Card className="mt-12 bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you can't find the answer you're looking for, our live chat is always available. Click the chat
                widget in the bottom-right corner or type "agent" in any conversation to speak with our investment
                specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-gray-500">
                  <strong>Email:</strong> support@pinnaclewealth.com
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Phone:</strong> +1-800-PINNACLE
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Hours:</strong> Mon-Fri, 9 AM-6 PM EST
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
