"use client"

import { useEffect } from "react"

export default function ChatCustomization() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const customizeChatWidget = () => {
      if (!(window as any).smartsupp) return // Apply Famous FX branding when chat loads
      ;(window as any).smartsupp("on", "ready", () => {
        // Set custom theme colors
        ;(window as any).smartsupp("theme", {
          color: {
            primary: "#1e40af", // Famous FX Blue
            primaryText: "#ffffff",
            secondary: "#f59e0b", // Famous FX Gold
            background: "#ffffff",
            text: "#1f2937",
            border: "#e5e7eb",
          },
          widget: {
            bubble: {
              background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
              shadow: "0 4px 20px rgba(30, 64, 175, 0.3)",
            },
          },
        })

        // Set custom position
        ;(window as any).smartsupp("position", {
          side: "right",
          horizontal: "20px",
          vertical: "20px",
        })

        // Set custom welcome message with Pinnacle Wealth branding
        ;(window as any).smartsupp("chat:message", {
          text: "💰 **Welcome to Pinnacle Wealth!**\n\nI'm here to help you with:\n• Investment plans and returns\n• Withdrawal processes\n• Account support\n• Trading questions\n\nHow can I assist you today?",
          name: "Pinnacle Wealth Assistant",
          avatar: "https://ui-avatars.com/api/?name=Pinnacle+Wealth&background=1e40af&color=ffffff&size=40",
        })
      })

      // Customize chat window when opened
      ;(window as any).smartsupp("on", "chat:open", () => {
        // Add Famous FX branding to chat header
        setTimeout(() => {
          const header = document.querySelector(".smartsupp-header")
          if (header) {
            header.innerHTML = `
              <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 32px; height: 32px; background: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px;">
                  💰
                </div>
                <div>
                  <div style="font-weight: 600; font-size: 16px;">Pinnacle Wealth Support</div>
                  <div style="font-size: 12px; opacity: 0.9;">Investment Specialists Online</div>
                </div>
              </div>
            `
          }
        }, 500)
      })

      // Add custom CSS for additional styling
      const customStyles = document.createElement("style")
      customStyles.innerHTML = `
        /* Famous FX Chat Widget Enhancements */
        .smartsupp-widget {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
        }
        
        /* Pulse animation for chat bubble */
        @keyframes famousFxPulse {
          0% { box-shadow: 0 4px 20px rgba(30, 64, 175, 0.3); }
          50% { box-shadow: 0 4px 25px rgba(30, 64, 175, 0.5); }
          100% { box-shadow: 0 4px 20px rgba(30, 64, 175, 0.3); }
        }
        
        .smartsupp-bubble {
          animation: famousFxPulse 2s infinite !important;
        }
        
        /* Custom scrollbar for chat */
        .smartsupp-messages::-webkit-scrollbar {
          width: 6px;
        }
        
        .smartsupp-messages::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        
        .smartsupp-messages::-webkit-scrollbar-thumb {
          background: #1e40af;
          border-radius: 3px;
        }
        
        .smartsupp-messages::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
        
        /* Famous FX message styling */
        .smartsupp-message-text {
          line-height: 1.5 !important;
          font-size: 14px !important;
        }
        
        /* Quick reply buttons */
        .smartsupp-quick-reply {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%) !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 20px !important;
          padding: 8px 16px !important;
          margin: 4px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        
        .smartsupp-quick-reply:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3) !important;
        }
        
        /* File upload styling */
        .smartsupp-file-upload {
          border: 2px dashed #1e40af !important;
          border-radius: 8px !important;
          background: rgba(30, 64, 175, 0.05) !important;
          color: #1e40af !important;
        }
        
        /* Emoji picker styling */
        .smartsupp-emoji-picker {
          border-radius: 12px !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15) !important;
        }
      `
      document.head.appendChild(customStyles)

      // Update connection message
      ;(window as any).smartsupp("chat:message", {
        text: "🎧 **Connecting you to an agent...**\n\nPlease hold while I transfer you to one of our investment specialists. They'll be with you shortly!\n\nIn the meantime, feel free to browse our investment plans or check out client testimonials.",
        name: "Pinnacle Wealth Bot",
      })
    }

    // Initialize customization when Smartsupp loads
    const checkSmartsupp = setInterval(() => {
      if ((window as any).smartsupp) {
        customizeChatWidget()
        clearInterval(checkSmartsupp)
      }
    }, 1000)

    return () => clearInterval(checkSmartsupp)
  }, [])

  return null // This component only handles chat customization
}
