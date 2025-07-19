import type React from "react"

interface WithdrawalCancelledEmailProps {
  name: string
  amount: number
}

const WithdrawalCancelledEmail: React.FC<WithdrawalCancelledEmailProps> = ({ name, amount }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#374151",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{ backgroundColor: "#1f2937", padding: "30px 20px", borderRadius: "8px 8px 0 0", textAlign: "center" }}
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

      <div style={{ padding: "30px 20px", backgroundColor: "white" }}>
        {/* Cancelled Badge */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#f3f4f6",
              color: "#374151",
              padding: "12px 20px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            🚫 Withdrawal Cancelled
          </div>
        </div>

        <h2 style={{ color: "#6b7280", marginTop: "0", fontSize: "24px", fontWeight: "bold" }}>Withdrawal Cancelled</h2>
        <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px" }}>Hello {name},</p>

        <p style={{ fontSize: "16px", marginBottom: "25px" }}>
          We are writing to inform you that your withdrawal request for <strong>${amount.toLocaleString()}</strong> has
          been cancelled.
        </p>

        {/* Cancellation Details Card */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "2px solid #6b7280",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "15px" }}>
            Cancellation Details
          </h3>
          <div style={{ display: "grid", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Cancelled Amount:</span>
              <span style={{ fontWeight: "bold", color: "#1f2937", fontSize: "18px" }}>${amount.toLocaleString()}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Funds Status:</span>
              <span style={{ fontWeight: "bold", color: "#10b981", fontSize: "16px" }}>Returned to Account</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Status:</span>
              <span style={{ fontWeight: "bold", color: "#6b7280", fontSize: "16px" }}>🚫 CANCELLED</span>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            border: "1px solid #f59e0b",
            borderRadius: "6px",
            padding: "15px",
            marginBottom: "25px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ color: "#d97706", fontSize: "16px" }}>⚠️</div>
            <div>
              <div style={{ color: "#92400e", fontSize: "14px", fontWeight: "600", marginBottom: "5px" }}>
                Important Notice
              </div>
              <div style={{ color: "#92400e", fontSize: "13px", lineHeight: "1.5" }}>
                If you did not initiate this cancellation, please contact our support team immediately. Your funds have
                been safely returned to your account balance.
              </div>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          If you did not initiate this cancellation, please contact our support team immediately.
        </p>

        <p style={{ fontSize: "16px", marginBottom: "30px" }}>Thank you for your understanding.</p>

        {/* Action Buttons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <a
            href="/dashboard"
            style={{
              backgroundColor: "#f59e0b",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              display: "inline-block",
              marginRight: "10px",
            }}
          >
            View Account Balance
          </a>
          <a
            href="/contact"
            style={{
              backgroundColor: "transparent",
              color: "#f59e0b",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              border: "2px solid #f59e0b",
              display: "inline-block",
            }}
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{ backgroundColor: "#1f2937", padding: "25px 20px", borderRadius: "0 0 8px 8px", textAlign: "center" }}
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

export default WithdrawalCancelledEmail
