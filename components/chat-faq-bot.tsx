"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, DollarSign, CreditCard, Clock, Users, Phone } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: "investment" | "withdrawal" | "account" | "general"
  keywords: string[]
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment amount is $500 for our Basic plan. We also offer Premium ($2,500) and VIP ($10,000) plans with higher returns.",
    category: "investment",
    keywords: ["minimum", "investment", "amount", "basic", "plan"],
  },
  {
    id: "2",
    question: "How long do withdrawals take?",
    answer:
      "Withdrawals are processed within 24-48 hours. Bank transfers may take an additional 1-3 business days depending on your bank.",
    category: "withdrawal",
    keywords: ["withdrawal", "time", "processing", "how long", "duration"],
  },
  {
    id: "3",
    question: "What are the expected returns?",
    answer:
      "Our investment plans offer 15-25% monthly returns: Basic (15%), Premium (20%), VIP (25%). Returns are calculated daily and compounded monthly.",
    category: "investment",
    keywords: ["returns", "profit", "percentage", "monthly", "daily"],
  },
  {
    id: "4",
    question: "What withdrawal methods do you support?",
    answer:
      "We support bank transfers, PayPal, Skrill, Bitcoin, Ethereum, and other major cryptocurrencies. Choose your preferred method in your dashboard.",
    category: "withdrawal",
    keywords: ["withdrawal", "methods", "payment", "bank", "crypto", "bitcoin", "paypal"],
  },
  {
    id: "5",
    question: "Is there a withdrawal fee?",
    answer:
      "We charge a small processing fee: 2% for bank transfers, 1% for crypto withdrawals, and 1.5% for e-wallets. No hidden charges.",
    category: "withdrawal",
    keywords: ["fee", "charges", "cost", "withdrawal fee", "processing fee"],
  },
  {
    id: "6",
    question: "How do I create an account?",
    answer:
      'Click "Get Started" on our homepage, fill in your details, verify your email, and make your first deposit to activate your account.',
    category: "account",
    keywords: ["account", "register", "sign up", "create", "new account"],
  },
  {
    id: "7",
    question: "Is Pinnacle Wealth regulated and safe?",
    answer:
      "Yes, we are fully regulated and licensed. Your funds are secured with bank-level encryption and stored in segregated accounts.",
    category: "general",
    keywords: ["safe", "regulated", "license", "security", "trust", "legitimate"],
  },
  {
    id: "8",
    question: "Can I withdraw my initial investment?",
    answer:
      "Yes, you can withdraw your initial investment anytime after 30 days. Early withdrawal may incur a 5% penalty fee.",
    category: "withdrawal",
    keywords: ["initial", "principal", "capital", "withdraw investment", "early withdrawal"],
  },
  {
    id: "9",
    question: "What trading hours do you operate?",
    answer:
      "Our platform operates 24/7 as we trade in global Forex markets. However, customer support is available Monday-Friday, 9 AM-6 PM EST.",
    category: "general",
    keywords: ["hours", "trading hours", "24/7", "support hours", "availability"],
  },
  {
    id: "10",
    question: "How can I track my investments?",
    answer:
      "Log into your dashboard to view real-time performance, daily profits, withdrawal history, and detailed investment analytics.",
    category: "account",
    keywords: ["track", "dashboard", "performance", "analytics", "monitor"],
  },
]

export default function ChatFAQBot() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFAQs, setFilteredFAQs] = useState(faqData)

  useEffect(() => {
    let filtered = faqData

    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    setFilteredFAQs(filtered)
  }, [selectedCategory, searchQuery])

  const categories = [
    { id: "all", label: "All Questions", icon: MessageCircle },
    { id: "investment", label: "Investments", icon: DollarSign },
    { id: "withdrawal", label: "Withdrawals", icon: CreditCard },
    { id: "account", label: "Account", icon: Users },
    { id: "general", label: "General", icon: Phone },
  ]

  const handleQuestionClick = (faq: FAQItem) => {
    // Send the FAQ answer to Smartsupp chat if available
    if (typeof window !== "undefined" && (window as any).smartsupp) {
      ;(window as any).smartsupp("chat:open")
      setTimeout(() => {
        ;(window as any).smartsupp("chat:message", {
          text: `**${faq.question}**\n\n${faq.answer}\n\n---\n\nNeed more help? Type 'agent' to speak with our team!`,
          name: "Pinnacle Wealth Bot",
        })
      }, 500)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            Instant FAQ Responses
          </CardTitle>
          <p className="text-gray-600">
            Get instant answers to common questions. Click any question to send it to our chat.
          </p>
        </CardHeader>
        <CardContent>
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card
                key={faq.id}
                className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-500"
                onClick={() => handleQuestionClick(faq)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <Badge variant="secondary" className="ml-2 capitalize">
                      {faq.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">Click to send to chat</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-8">
              <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No questions found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              onClick={() =>
                handleQuestionClick({
                  id: "quick-1",
                  question: "How do I start investing?",
                  answer:
                    "To start investing: 1) Create your account, 2) Choose an investment plan, 3) Make your deposit, 4) Watch your profits grow! Our team can guide you through each step.",
                  category: "investment",
                  keywords: [],
                })
              }
            >
              <DollarSign className="h-4 w-4" />
              Start Investing
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              onClick={() =>
                handleQuestionClick({
                  id: "quick-2",
                  question: "How do I make a withdrawal?",
                  answer:
                    "To withdraw funds: 1) Log into your dashboard, 2) Go to Withdrawals section, 3) Enter amount and select method, 4) Confirm request. Processing takes 24-48 hours.",
                  category: "withdrawal",
                  keywords: [],
                })
              }
            >
              <CreditCard className="h-4 w-4" />
              Make Withdrawal
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).smartsupp) {
                  ;(window as any).smartsupp("chat:open")
                  setTimeout(() => {
                    ;(window as any).smartsupp("chat:message", {
                      text: "I need to speak with a human agent for personalized assistance.",
                      name: "Visitor",
                    })
                  }, 500)
                }
              }}
            >
              <Users className="h-4 w-4" />
              Speak to Agent
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
