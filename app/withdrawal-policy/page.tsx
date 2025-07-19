import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Clock, DollarSign, AlertTriangle, CheckCircle, Info, Lock, FileText, Zap } from "lucide-react"
import Link from "next/link"

export default function WithdrawalPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cryptocurrency Withdrawal Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to our zero-fee cryptocurrency withdrawal process and policies
          </p>
        </div>

        {/* Zero Fees Highlight */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-12 h-12 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Zero Transaction Fees!</h2>
                <p className="text-lg opacity-90">All cryptocurrency withdrawals are completely free</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supported Cryptocurrencies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
              Supported Cryptocurrencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Bitcoin (BTC)</h3>
                    <Badge className="bg-orange-100 text-orange-800">Mainnet</Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Network: Bitcoin Mainnet</li>
                  <li>• Processing Time: 2-6 hours</li>
                  <li>• Minimum Withdrawal: $25 USD</li>
                  <li>
                    • Transaction Fee: <strong className="text-green-600">FREE</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Tether USDT</h3>
                    <Badge className="bg-green-100 text-green-800">TRC20</Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Network: TRON (TRC20)</li>
                  <li>• Processing Time: 1-3 hours</li>
                  <li>• Minimum Withdrawal: $25 USD</li>
                  <li>
                    • Transaction Fee: <strong className="text-green-600">FREE</strong>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Withdrawal Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <FileText className="w-6 h-6 mr-2 text-blue-600" />
              Withdrawal Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Submit Withdrawal Request</h4>
                  <p className="text-gray-600">
                    Complete the withdrawal form with your cryptocurrency wallet address and desired amount.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Security Verification</h4>
                  <p className="text-gray-600">
                    Provide your 2FA code and security PIN for account verification and fraud prevention.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Processing & Review</h4>
                  <p className="text-gray-600">
                    Our team reviews your request for security compliance. Large withdrawals may require additional
                    verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Transaction Broadcast</h4>
                  <p className="text-gray-600">
                    Once approved, your cryptocurrency is sent to your wallet address with zero fees.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processing Times */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Clock className="w-6 h-6 mr-2 text-blue-600" />
              Processing Times
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Standard Withdrawals</h4>
                <p className="text-2xl font-bold text-green-600 mb-2">1-6 hours</p>
                <p className="text-sm text-gray-600">Most withdrawals under $10,000</p>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Enhanced Review</h4>
                <p className="text-2xl font-bold text-yellow-600 mb-2">24-48 hours</p>
                <p className="text-sm text-gray-600">Large withdrawals over $10,000</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <AlertTriangle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Special Cases</h4>
                <p className="text-2xl font-bold text-blue-600 mb-2">2-5 days</p>
                <p className="text-sm text-gray-600">Complex compliance reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Requirements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Lock className="w-6 h-6 mr-2 text-blue-600" />
              Security Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Two-Factor Authentication (2FA)</strong> is required for all withdrawal requests. Ensure your
                  2FA device is accessible before initiating a withdrawal.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Required Information</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Valid cryptocurrency wallet address</li>
                    <li>• 6-digit 2FA authentication code</li>
                    <li>• Account security PIN</li>
                    <li>• Withdrawal reason (optional)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Security Measures</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Address verification and validation</li>
                    <li>• Anti-fraud monitoring systems</li>
                    <li>• Multi-signature wallet security</li>
                    <li>• 24/7 transaction monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Policies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
              Important Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Irreversible Transactions:</strong> Cryptocurrency transactions cannot be reversed. Ensure
                  your wallet address is correct before submitting your withdrawal request.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Withdrawal Limits</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Minimum withdrawal: $25 USD equivalent</li>
                    <li>• Maximum daily withdrawal: $50,000 USD</li>
                    <li>• Maximum monthly withdrawal: $500,000 USD</li>
                    <li>• Higher limits available upon request</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Cancellation Policy</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Requests can be cancelled before processing</li>
                    <li>• No cancellation after blockchain broadcast</li>
                    <li>• Contact support immediately if needed</li>
                    <li>• Refunds not possible for sent transactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Info className="w-6 h-6 mr-2 text-blue-600" />
              Network Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <DollarSign className="w-5 h-5 text-orange-600 mr-2" />
                  Bitcoin Network Details
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p>
                      <strong>Network:</strong> Bitcoin Mainnet
                    </p>
                    <p>
                      <strong>Confirmations Required:</strong> 3 blocks
                    </p>
                    <p>
                      <strong>Average Block Time:</strong> 10 minutes
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Address Format:</strong> Legacy, SegWit, Bech32
                    </p>
                    <p>
                      <strong>Transaction Fee:</strong> FREE (Pinnacle Wealth covers)
                    </p>
                    <p>
                      <strong>Network Fee:</strong> Variable (market dependent)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  USDT TRC20 Network Details
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p>
                      <strong>Network:</strong> TRON (TRC20)
                    </p>
                    <p>
                      <strong>Confirmations Required:</strong> 19 blocks
                    </p>
                    <p>
                      <strong>Average Block Time:</strong> 3 seconds
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Address Format:</strong> T-address (34 characters)
                    </p>
                    <p>
                      <strong>Transaction Fee:</strong> FREE (Pinnacle Wealth covers)
                    </p>
                    <p>
                      <strong>Network Fee:</strong> ~0 TRX (very low cost)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              Support & Assistance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Need help with your cryptocurrency withdrawal? Our support team is available 24/7 to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Live Chat
                </Button>
                <Button size="lg" variant="outline">
                  Email Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Withdrawal?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your zero-fee cryptocurrency withdrawal process now and receive your funds quickly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/withdrawal-request">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Start Withdrawal
                </Button>
              </Link>
              <Link href="/withdrawal-history">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View History
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
