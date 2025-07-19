"use client"

import { useEffect } from "react"

interface AutoResponse {
  keywords: string[]
  response: string
  followUp?: string[]
}

const autoResponses: AutoResponse[] = [
  {
    keywords: ["minimum", "investment", "start", "how much"],
    response:
      "💰 **Minimum Investment Information:**\n\n• Basic Plan: $500 (15% monthly returns)\n• Premium Plan: $2,500 (20% monthly returns)\n• VIP Plan: $10,000 (25% monthly returns)\n\nAll plans include daily profit calculations and 24/7 support!",
    followUp: ["Would you like to see our investment calculator?", "Need help choosing the right plan?"],
  },
  {
    keywords: ["withdrawal", "withdraw", "cash out", "payout"],
    response:
      "💳 **Withdrawal Information:**\n\n• Processing Time: 24-48 hours\n• Minimum Amount: $100\n• Methods: Bank transfer, PayPal, Crypto\n• Fees: 1-2% processing fee\n\nYour funds are always available when you need them!",
    followUp: ["Want to see withdrawal history?", "Need help with withdrawal process?"],
  },
  {
    keywords: ["returns", "profit", "percentage", "earn"],
    response:
      "📈 **Expected Returns:**\n\n• Basic Plan: 15% monthly\n• Premium Plan: 20% monthly\n• VIP Plan: 25% monthly\n\nReturns are calculated daily and compounded monthly. Past performance: 98% success rate!",
    followUp: ["See our profit calculator?", "View client testimonials?"],
  },
  {
    keywords: ["safe", "secure", "regulated", "license"],
    response:
      "🔒 **Security & Regulation:**\n\n• Fully licensed and regulated\n• Bank-level encryption\n• Segregated client accounts\n• 24/7 security monitoring\n\nYour investments are protected by industry-leading security measures.",
    followUp: ["View our certifications?", "Learn about our insurance coverage?"],
  },
  {
    keywords: ["support", "help", "contact", "agent"],
    response:
      '🎧 **Customer Support:**\n\n• Live Chat: Available now\n• Email: support@pinnaclewealth.com\n• Phone: +1-800-PINNACLE\n• Hours: Monday-Friday, 9 AM-6 PM EST\n\nType "agent" to connect with our team immediately!',
    followUp: ["Connect with an agent now?", "Schedule a callback?"],
  },
  {
    keywords: ["account", "register", "sign up", "create"],
    response:
      '👤 **Account Creation:**\n\n1. Click "Get Started" button\n2. Fill in your personal details\n3. Verify your email address\n4. Make your first deposit\n5. Start earning immediately!\n\nThe entire process takes less than 5 minutes.',
    followUp: ["Start account creation now?", "Need help with verification?"],
  },
]

export default function ChatAutomation() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const initializeChatBot = () => {
      if (!(window as any).smartsupp) return // Set up message listener for automated responses
      ;(window as any)
        .smartsupp("on", "message", (data: any) => {
          if (data.type === "visitor") {
            const message = data.text.toLowerCase()

            // Find matching auto response
            const matchedResponse = autoResponses.find((response) =>
              response.keywords.some((keyword) => message.includes(keyword)),
            )

            if (matchedResponse) {
              // Send automated response after a short delay
              setTimeout(() => {
                ;(window as any).smartsupp("chat:message", {
                  text: matchedResponse.response,
                  name: "Pinnacle Wealth Bot",
                })

                // Send follow-up options if available
                if (matchedResponse.followUp) {
                  setTimeout(() => {
                    const followUpText =
                      "**Quick Options:**\n" +
                      matchedResponse.followUp.map((option, index) => `${index + 1}. ${option}`).join("\n")
                    ;(window as any).smartsupp("chat:message", {
                      text: followUpText,
                      name: "Pinnacle Wealth Bot",
                    })
                  }, 2000)
                }
              }, 1500)
            }
          }
        })(
          // Send welcome message when chat opens
          window as any,
        )
        .smartsupp("on", "chat:open", () => {
          setTimeout(() => {
            ;(window as any).smartsupp("chat:message", {
              text: '👋 **Welcome to Pinnacle Wealth!**\n\nI\'m your AI assistant. I can help you with:\n\n💰 Investment plans and returns\n💳 Withdrawal processes\n🔒 Security and regulations\n📞 Account support\n\nJust type your question or say "agent" to speak with our team!',
              name: "Pinnacle Wealth Bot",
            })
          }, 1000)
        })(
          // Handle specific command responses
          window as any,
        )
        .smartsupp("on", "message", (data: any) => {
          if (data.type === "visitor") {
            const message = data.text.toLowerCase().trim()

            if (message === "agent" || message === "human" || message === "representative") {
              setTimeout(() => {
                ;(window as any).smartsupp("chat:message", {
                  text: "🎧 **Connecting you to an agent...**\n\nPlease hold while I transfer you to one of our investment specialists. They'll be with you shortly!\n\nIn the meantime, feel free to browse our investment plans or check out client testimonials.",
                  name: "Pinnacle Wealth Bot",
                })
              }, 1000)
            }

            if (message.includes("calculator")) {
              setTimeout(() => {
                ;(window as any).smartsupp("chat:message", {
                  text: "🧮 **Investment Calculator**\n\nTo use our profit calculator:\n1. Visit our Investment page\n2. Enter your investment amount\n3. Select your preferred plan\n4. See projected returns\n\nWould you like me to open the calculator for you?",
                  name: "Pinnacle Wealth Bot",
                })
              }, 1000)
            }
          }
        })
    }

    // Initialize when Smartsupp loads
    const checkSmartsupp = setInterval(() => {
      if ((window as any).smartsupp) {
        initializeChatBot()
        clearInterval(checkSmartsupp)
      }
    }, 1000)

    return () => clearInterval(checkSmartsupp)
  }, [])

  return null // This component only handles chat automation
}
