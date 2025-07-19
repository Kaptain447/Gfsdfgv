import type React from "react"

interface WithdrawalProcessingEmailProps {
  userName: string
  withdrawalAmount: number
  currency: string
}

const WithdrawalProcessingEmail: React.FC<WithdrawalProcessingEmailProps> = ({
  userName,
  withdrawalAmount,
  currency,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: "30px 20px",
          borderRadius: "8px 8px 0 0",
          textAlign: "center",
        }}
      >
        <img
          src="/images/pinnacle-wealth-logo.png"
          alt="Pinnacle Wealth Logo"
          style={{
            maxWidth: "180px",
            height: "auto",
            marginBottom: "10px",
            filter: "brightness(1.2)",
          }}
        />
        <div style={{ color: "#fde68a", fontSize: "14px", marginTop: "10px" }}>Professional Investment Management</div>
      </div>

      <div style={{ backgroundColor: "white", padding: "30px 20px", borderRadius: "0 0 8px 8px" }}>
        {/* Processing Status Badge */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
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
            ⏳ Processing Your Withdrawal
          </div>
        </div>

        <p style={{ fontSize: "16px", color: "#374151", marginBottom: "20px" }}>Dear {userName},</p>

        <p style={{ fontSize: "16px", color: "#374151", marginBottom: "25px" }}>
          We are processing your withdrawal request for{" "}
          <strong>
            {currency}
            {withdrawalAmount.toLocaleString()}
          </strong>
          . This process usually takes 1-3 business days for cryptocurrency transactions.
        </p>

        {/* Processing Timeline */}
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
            Processing Timeline
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#10b981",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "12px" }}>✓</span>
              </div>
              <span style={{ color: "#374151", fontSize: "14px" }}>Request Received & Verified</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#f59e0b",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontSize: "12px" }}>⏳</span>
              </div>
              <span style={{ color: "#374151", fontSize: "14px", fontWeight: "600" }}>Currently Processing</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: "#d1d5db",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#9ca3af", fontSize: "12px" }}>3</span>
              </div>
              <span style={{ color: "#9ca3af", fontSize: "14px" }}>Transfer to Your Wallet</span>
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
            💰 Zero Transaction Fees
          </div>
          <div style={{ color: "#065f46", fontSize: "14px" }}>
            You'll receive the full {currency}
            {withdrawalAmount.toLocaleString()} with no deductions.
          </div>
        </div>

        <p style={{ fontSize: "16px", color: "#374151", marginBottom: "20px" }}>
          You will receive a confirmation email once the withdrawal is complete.
        </p>

        <p style={{ fontSize: "16px", color: "#374151", marginBottom: "30px" }}>Thank you for using our services.</p>

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
            Track Status
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
        style={{
          backgroundColor: "#f8fafc",
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <img
            src="/images/pinnacle-wealth-logo.png"
            alt="Pinnacle Wealth"
            style={{
              maxWidth: "140px",
              height: "auto",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "10px" }}>
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

export default WithdrawalProcessingEmail
