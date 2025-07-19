import type React from "react"

interface WithdrawalFailedEmailProps {
  userName: string
  amount: number
  currency: string
  reason: string
}

const WithdrawalFailedEmail: React.FC<WithdrawalFailedEmailProps> = ({ userName, amount, currency, reason }) => {
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
        {/* Failed Badge */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              padding: "12px 20px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            ❌ Withdrawal Failed
          </div>
        </div>

        <h2 style={{ color: "#dc2626", marginTop: "0", fontSize: "24px", fontWeight: "bold" }}>Withdrawal Failed</h2>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>Dear {userName},</p>

        <p style={{ fontSize: "16px", marginBottom: "25px" }}>
          We regret to inform you that your withdrawal request of{" "}
          <strong>
            {currency} {amount.toLocaleString()}
          </strong>{" "}
          has failed to process.
        </p>

        {/* Failure Details Card */}
        <div
          style={{
            backgroundColor: "#fef2f2",
            border: "2px solid #ef4444",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "15px" }}>
            Failure Details
          </h3>
          <div style={{ display: "grid", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #fecaca",
              }}
            >
              <span style={{ fontWeight: "600", color: "#991b1b" }}>Requested Amount:</span>
              <span style={{ fontWeight: "bold", color: "#1f2937", fontSize: "18px" }}>
                {currency} {amount.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "8px 0",
                borderBottom: "1px solid #fecaca",
              }}
            >
              <span style={{ fontWeight: "600", color: "#991b1b" }}>Failure Reason:</span>
              <span style={{ fontWeight: "600", color: "#1f2937", textAlign: "right", maxWidth: "60%" }}>{reason}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
              <span style={{ fontWeight: "600", color: "#991b1b" }}>Status:</span>
              <span style={{ fontWeight: "bold", color: "#dc2626", fontSize: "16px" }}>❌ FAILED</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            border: "1px solid #f59e0b",
            borderRadius: "6px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "15px" }}>
            Next Steps
          </h3>
          <div style={{ color: "#92400e", fontSize: "14px", lineHeight: "1.6" }}>
            <p style={{ marginBottom: "10px" }}>To resolve this issue, please:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "15px" }}>
              <li style={{ marginBottom: "8px" }}>Verify your cryptocurrency wallet address is correct</li>
              <li style={{ marginBottom: "8px" }}>
                Ensure your wallet supports the selected network (BTC Mainnet or USDT TRC20)
              </li>
              <li style={{ marginBottom: "8px" }}>Check that your account has sufficient balance</li>
              <li style={{ marginBottom: "8px" }}>Contact our support team if the issue persists</li>
            </ul>
            <p style={{ fontWeight: "600" }}>
              Your funds remain secure in your account and can be withdrawn once the issue is resolved.
            </p>
          </div>
        </div>

        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Please review your account details and try again, or contact support for assistance.
        </p>

        <p style={{ fontSize: "16px", marginBottom: "30px" }}>
          Sincerely,
          <br />
          The Pinnacle Wealth Team
        </p>

        {/* Action Buttons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <a
            href="/withdrawal-request"
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
            Try Again
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

export default WithdrawalFailedEmail
