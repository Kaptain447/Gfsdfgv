import type React from "react"

interface WithdrawalConfirmationEmailProps {
  name: string
  amount: number
  accountNumber: string
  date: string
}

const WithdrawalConfirmationEmail: React.FC<WithdrawalConfirmationEmailProps> = ({
  name,
  amount,
  accountNumber,
  date,
}) => {
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

      <div style={{ padding: "30px 20px", backgroundColor: "white" }}>
        <h2 style={{ color: "#4b5563", marginTop: "0", fontSize: "24px", fontWeight: "bold" }}>
          Withdrawal Confirmation
        </h2>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>Dear {name},</p>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          This email confirms that your withdrawal request has been processed successfully. Here are the details of your
          withdrawal:
        </p>

        {/* Transaction Details Card */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "2px solid #f59e0b",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginTop: "0", marginBottom: "15px" }}>
            Transaction Details
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
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Amount:</span>
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
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Account Number:</span>
              <span style={{ fontWeight: "600", color: "#1f2937", fontFamily: "monospace" }}>{accountNumber}</span>
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
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Date:</span>
              <span style={{ fontWeight: "600", color: "#1f2937" }}>{date}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
              <span style={{ fontWeight: "600", color: "#6b7280" }}>Transaction Fee:</span>
              <span style={{ fontWeight: "bold", color: "#10b981", fontSize: "16px" }}>FREE</span>
            </div>
          </div>
        </div>

        {/* Zero Fee Highlight */}
        <div
          style={{
            backgroundColor: "#ecfdf5",
            border: "1px solid #10b981",
            borderRadius: "6px",
            padding: "15px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#065f46", fontSize: "16px", fontWeight: "600", marginBottom: "5px" }}>
            🎉 Zero Transaction Fees!
          </div>
          <div style={{ color: "#065f46", fontSize: "14px" }}>
            You received the full withdrawal amount with no deductions.
          </div>
        </div>

        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          If you have any questions or concerns, please do not hesitate to contact our support team.
        </p>
        <p style={{ fontSize: "16px", marginBottom: "30px" }}>Thank you for choosing Pinnacle Wealth.</p>

        {/* Action Buttons */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <a
            href="/withdrawal-history"
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
            View Transaction History
          </a>
          <a
            href="/dashboard"
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
            Go to Dashboard
          </a>
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

export default WithdrawalConfirmationEmail
