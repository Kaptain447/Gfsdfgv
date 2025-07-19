"use client"

import { Clock, FileText, Shield, CheckCircle, Eye } from "lucide-react"

interface WithdrawalUnderReviewProps {
  clientName: string
  withdrawalId: string
  amount: number
  currency: string
  reviewType: "security" | "compliance" | "large_amount" | "routine"
  reviewStartDate: string
  estimatedReviewTime: string
  requiredDocuments?: string[]
  reviewReason: string
}

export function WithdrawalUnderReviewEmail({
  clientName,
  withdrawalId,
  amount,
  currency,
  reviewType,
  reviewStartDate,
  estimatedReviewTime,
  requiredDocuments = [],
  reviewReason,
}: WithdrawalUnderReviewProps) {
  const getReviewInfo = (type: string) => {
    switch (type) {
      case "security":
        return {
          title: "Security Review",
          description: "Additional security verification is required for your withdrawal.",
          icon: Shield,
          color: "#f59e0b",
          priority: "High Priority",
        }
      case "compliance":
        return {
          title: "Compliance Review",
          description: "Your withdrawal requires compliance verification as per regulatory requirements.",
          icon: FileText,
          color: "#3b82f6",
          priority: "Standard Process",
        }
      case "large_amount":
        return {
          title: "Large Amount Review",
          description: "Large withdrawals require additional verification for your protection.",
          icon: Eye,
          color: "#8b5cf6",
          priority: "Enhanced Review",
        }
      case "routine":
        return {
          title: "Routine Review",
          description: "Your withdrawal is undergoing our standard verification process.",
          icon: CheckCircle,
          color: "#10b981",
          priority: "Standard Process",
        }
      default:
        return {
          title: "Under Review",
          description: "Your withdrawal is currently being reviewed by our team.",
          icon: Clock,
          color: "#6b7280",
          priority: "Standard Process",
        }
    }
  }

  const reviewInfo = getReviewInfo(reviewType)
  const ReviewIcon = reviewInfo.icon

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8fafc" }}>
      {/* Header with Logo */}
      <div
        style={{ backgroundColor: "#1f2937", padding: "30px 20px", textAlign: "center", borderRadius: "8px 8px 0 0" }}
      >
        <img
          src="/images/pinnacle-wealth-logo.png"
          alt="Pinnacle Wealth Logo"
          style={{
            maxWidth: "200px",
            height: "auto",
            marginBottom: "10px",
            filter: "brightness(1.2)",
          }}
        />
        <div style={{ color: "#fde68a", fontSize: "14px", marginTop: "10px" }}>Professional Investment Management</div>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: "white", padding: "30px" }}>
        {/* Review Badge */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#fef3c7",
              color: "#92400e",
              padding: "12px 20px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            ⏳ Withdrawal Under Review
          </div>

          <div
            style={{
              display: "inline-block",
              backgroundColor: reviewInfo.color,
              color: "white",
              padding: "4px 12px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {reviewInfo.priority}
          </div>
        </div>

        {/* Greeting */}
        <h2 style={{ color: "#1f2937", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Hello {clientName},
        </h2>

        <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6", marginBottom: "25px" }}>
          Your withdrawal request is currently under review by our team. This is a standard procedure to ensure the
          security and compliance of all transactions. We appreciate your patience during this process.
        </p>

        {/* Review Details Card */}
        <div
          style={{
            border: "2px solid " + reviewInfo.color,
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
            backgroundColor: "#fffbeb",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
            <div
              style={{
                backgroundColor: reviewInfo.color,
                borderRadius: "50%",
                padding: "8px",
                minWidth: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white", fontSize: "20px" }}>🔍</span>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", margin: "0 0 8px 0" }}>
                {reviewInfo.title}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                {reviewInfo.description}
              </p>
              <p style={{ color: "#92400e", fontSize: "13px", margin: "0", fontStyle: "italic" }}>
                <strong>Reason:</strong> {reviewReason}
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              padding: "15px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ display: "grid", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>Withdrawal ID:</span>
                <span style={{ color: "#1f2937", fontSize: "14px", fontWeight: "600", fontFamily: "monospace" }}>
                  {withdrawalId}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>Amount Under Review:</span>
                <span style={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}>
                  {currency} {amount.toLocaleString()}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>Review Started:</span>
                <span style={{ color: "#1f2937", fontSize: "14px" }}>{reviewStartDate}</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>Estimated Completion:</span>
                <span style={{ color: reviewInfo.color, fontSize: "14px", fontWeight: "600" }}>
                  {estimatedReviewTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        {requiredDocuments.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>
              Required Documentation
            </h3>

            <div
              style={{
                backgroundColor: "#fef3c7",
                border: "1px solid #f59e0b",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <span style={{ color: "#d97706", fontSize: "20px" }}>⚠️</span>
                <div>
                  <div style={{ color: "#92400e", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
                    Action Required
                  </div>
                  <div style={{ color: "#92400e", fontSize: "13px", lineHeight: "1.5" }}>
                    Please provide the following documents to expedite your withdrawal review:
                  </div>
                </div>
              </div>

              <ul style={{ margin: "0", paddingLeft: "20px", color: "#92400e" }}>
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      marginBottom: index < requiredDocuments.length - 1 ? "8px" : "0",
                    }}
                  >
                    {doc}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "15px", textAlign: "center" }}>
                <a
                  href="/document-upload"
                  style={{
                    backgroundColor: "#d97706",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  📄 Upload Documents
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div style={{ display: "inline-flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="/withdrawal-history"
              style={{
                backgroundColor: "#f59e0b",
                color: "white",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Track Status
            </a>
            {requiredDocuments.length > 0 && (
              <a
                href="/document-upload"
                style={{
                  backgroundColor: "transparent",
                  color: "#f59e0b",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #f59e0b",
                  display: "inline-block",
                }}
              >
                Upload Documents
              </a>
            )}
            <a
              href="/contact"
              style={{
                backgroundColor: "transparent",
                color: "#6b7280",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid #6b7280",
                display: "inline-block",
              }}
            >
              Contact Support
            </a>
          </div>
        </div>

        {/* Important Information */}
        <div
          style={{
            backgroundColor: "#f0f9ff",
            border: "1px solid #0ea5e9",
            borderRadius: "6px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ color: "#0284c7", fontSize: "16px" }}>ℹ️</div>
            <div>
              <div style={{ color: "#0c4a6e", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
                During Review Period
              </div>
              <div style={{ color: "#0c4a6e", fontSize: "13px", lineHeight: "1.5" }}>
                Your funds remain secure in your account during the review process. You will receive email notifications
                at each stage, and you can track the status anytime in your dashboard.
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div
          style={{
            backgroundColor: "#ecfdf5",
            border: "1px solid #10b981",
            borderRadius: "6px",
            padding: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ color: "#059669", fontSize: "16px" }}>🛡️</span>
            <div>
              <div style={{ color: "#065f46", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
                Security & Compliance
              </div>
              <div style={{ color: "#065f46", fontSize: "13px", lineHeight: "1.5" }}>
                This review process helps protect your account and ensures compliance with financial regulations. We
                appreciate your understanding and cooperation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{ backgroundColor: "#1f2937", padding: "25px 20px", textAlign: "center", borderRadius: "0 0 8px 8px" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <img
            src="/images/pinnacle-wealth-logo.png"
            alt="Pinnacle Wealth"
            style={{
              maxWidth: "150px",
              height: "auto",
              filter: "brightness(1.2)",
            }}
          />
        </div>
        <div style={{ color: "#6b7280", fontSize: "14px", marginBottom: "10px" }}>
          Questions about the review process? Contact our support team
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "15px" }}>
          <a
            href="mailto:support@pinnaclewealth.com"
            style={{ color: "#f59e0b", textDecoration: "none", fontSize: "14px" }}
          >
            support@pinnaclewealth.com
          </a>
          <a href="tel:+1234567890" style={{ color: "#f59e0b", textDecoration: "none", fontSize: "14px" }}>
            +1 (234) 567-8900
          </a>
        </div>
        <div style={{ color: "#9ca3af", fontSize: "12px" }}>© 2024 Pinnacle Wealth. All rights reserved.</div>
      </div>
    </div>
  )
}
