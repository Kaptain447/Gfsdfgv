import { Resend } from "resend"
import type * as React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

interface WelcomeEmailProps {
  firstName: string
  email: string
}

const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ firstName, email }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Pinnacle Wealth!</title>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f2f5;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            color: #ffffff;
            padding: 40px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fillOpacity="0.05" fillRule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E');
            opacity: 0.2;
            pointer-events: none;
          }
          .logo {
            max-width: 150px;
            margin-bottom: 20px;
          }
          .content {
            padding: 30px;
            color: #333333;
            line-height: 1.6;
          }
          .button {
            display: inline-block;
            background-color: #007bff; /* Blue */
            color: #ffffff;
            padding: 12px 25px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #0056b3; /* Darker Blue */
          }
          .footer {
            background-color: #f8f9fa;
            color: #6c757d;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            border-top: 1px solid #e9ecef;
          }
          .social-icons img {
            width: 24px;
            height: 24px;
            margin: 0 8px;
          }
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .feature-item {
            text-align: center;
            padding: 15px;
            border-radius: 8px;
            background-color: #f8f9fa;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          }
          .feature-item img {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
          }
          .security-notice {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-top: 30px;
            border-radius: 4px;
            color: #664d03;
            font-size: 14px;
          }
          .security-notice strong {
            color: #664d03;
          }
          .welcome-badge {
            background: linear-gradient(45deg, #28a745, #218838);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
          }
          .welcome-badge span {
            font-size: 18px;
          }
          @media (max-width: 600px) {
            .content {
              padding: 20px;
            }
            .header {
              padding: 30px 15px;
            }
            .feature-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <img src="https://pinnaclewealth.com/logo.png" alt="Pinnacle Wealth Logo" className="logo" />
          <div className="welcome-badge">
            <span>🎉</span> Welcome to Pinnacle Wealth!
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 10px", lineHeight: "1.2" }}>
            Hello, {firstName}!
          </h1>
          <p style={{ fontSize: "16px", opacity: "0.9" }}>Your journey to financial success starts now.</p>
        </div>
        <div className="content">
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            We're thrilled to have you join the Pinnacle Wealth community. Get ready to explore a world of investment
            opportunities and powerful tools designed to help you achieve your financial goals.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <img src="https://pinnaclewealth.com/icons/analytics.png" alt="Analytics" />
              <p style={{ fontWeight: "600", margin: "0" }}>Advanced Analytics</p>
            </div>
            <div className="feature-item">
              <img src="https://pinnaclewealth.com/icons/security.png" alt="Security" />
              <p style={{ fontWeight: "600", margin: "0" }}>Top-tier Security</p>
            </div>
            <div className="feature-item">
              <img src="https://pinnaclewealth.com/icons/fees.png" alt="Zero Fees" />
              <p style={{ fontWeight: "600", margin: "0" }}>Transparent Fees</p>
            </div>
            <div className="feature-item">
              <img src="https://pinnaclewealth.com/icons/guidance.png" alt="Expert Guidance" />
              <p style={{ fontWeight: "600", margin: "0" }}>Expert Guidance</p>
            </div>
          </div>

          <p style={{ fontSize: "16px", marginBottom: "30px", textAlign: "center" }}>
            Click the button below to access your personalized dashboard and start managing your investments.
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="https://pinnaclewealth.com/dashboard" className="button">
              Go to Your Dashboard
            </a>
          </p>

          <div className="security-notice">
            <strong>Security Notice:</strong> This email was sent to {email}. If you did not register for Pinnacle
            Wealth, please ignore this email or contact our support team immediately.
          </div>

          <p
            style={{ fontSize: "14px", marginTop: "30px", marginBottom: "10px", textAlign: "center", color: "#6c757d" }}
          >
            If you have any questions, feel free to reply to this email or visit our Help Center.
          </p>
        </div>
        <div className="footer">
          <p style={{ margin: "0 0 10px" }}>Follow us on social media:</p>
          <div className="social-icons" style={{ marginBottom: "15px" }}>
            <a href="https://twitter.com/pinnaclewealth" target="_blank" rel="noopener noreferrer">
              <img src="https://pinnaclewealth.com/icons/twitter.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com/company/pinnaclewealth" target="_blank" rel="noopener noreferrer">
              <img src="https://pinnaclewealth.com/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com/pinnaclewealth" target="_blank" rel="noopener noreferrer">
              <img src="https://pinnaclewealth.com/icons/facebook.png" alt="Facebook" />
            </a>
          </div>
          <p style={{ margin: "0" }}>&copy; {new Date().getFullYear()} Pinnacle Wealth. All rights reserved.</p>
          <p style={{ margin: "5px 0 0" }}>123 Wealthy Way, Financial City, FC 98765</p>
          <p style={{ margin: "5px 0 0" }}>
            <a href="https://pinnaclewealth.com/privacy" style={{ color: "#007bff", textDecoration: "none" }}>
              Privacy Policy
            </a>{" "}
            |
            <a href="https://pinnaclewealth.com/terms" style={{ color: "#007bff", textDecoration: "none" }}>
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </body>
  </html>
)

export async function sendWelcomeEmail(toEmail: string, firstName: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "welcome@pinnaclewealth.com", // Custom domain
      to: [toEmail],
      subject: "Welcome to Pinnacle Wealth! Your Journey Begins Here",
      react: <WelcomeEmail firstName={firstName} email={toEmail} />,
    })

    if (error) {
      console.error("Error sending welcome email:", error)
      return { success: false, message: "Failed to send welcome email." }
    }

    console.log("Welcome email sent successfully:", data)
    return { success: true, message: "Welcome email sent successfully!" }
  } catch (err: any) {
    console.error("Unexpected error in sendWelcomeEmail:", err)
    return { success: false, message: "An unexpected error occurred while sending email." }
  }
}
