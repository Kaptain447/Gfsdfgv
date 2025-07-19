import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Shield,
  Zap,
  Users,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Pinnacle Wealth</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/service" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/investment" className="text-gray-700 hover:text-blue-600 transition-colors">
                Investment
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  Withdrawals <ArrowRight className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      href="/withdrawal-request"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Request Withdrawal
                    </Link>
                    <Link
                      href="/withdrawal-history"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Withdrawal History
                    </Link>
                    <Link href="/withdrawal-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Withdrawal Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Professional Trading &<span className="text-blue-600"> Investment Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed to maximize your returns and minimize your risk. Our expert
              team provides personalized strategies for every investment goal.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Core Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Everything You Need to Succeed</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Forex Trading</CardTitle>
                <CardDescription>
                  Professional forex trading with major currency pairs, advanced analytics, and real-time market
                  insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Major & Minor Pairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/5 Trading
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Risk Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Stock Trading</CardTitle>
                <CardDescription>
                  Access global stock markets with our expert analysis and automated trading algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Global Markets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Blue Chip Stocks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dividend Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Portfolio Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Cryptocurrency</CardTitle>
                <CardDescription>
                  Trade major cryptocurrencies with institutional-grade security and professional strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bitcoin & Ethereum
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Altcoin Trading
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cold Storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    DeFi Opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Portfolio Management</CardTitle>
                <CardDescription>
                  Personalized portfolio management with diversification strategies and risk assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Asset Allocation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Risk Assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rebalancing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Reports
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Algorithmic Trading</CardTitle>
                <CardDescription>
                  Advanced AI-powered trading algorithms that execute trades 24/7 based on market conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI-Powered Bots
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Execution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Backtesting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom Strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Financial Advisory</CardTitle>
                <CardDescription>
                  One-on-one consultation with certified financial advisors to plan your investment strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal Consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Goal Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Retirement Planning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Service Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Trading</h3>
              <p className="text-gray-600">
                Our automated systems work around the clock to capture every market opportunity.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Secure Platform</h3>
              <p className="text-gray-600">
                Bank-level security with multi-factor authentication and encrypted transactions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with decades of combined trading and investment experience.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                Consistent returns with transparent reporting and real-time performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">How It Works</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Simple Steps to Get Started</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sign Up</h3>
              <p className="text-gray-600">Create your account in minutes with our simple registration process.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Choose Plan</h3>
              <p className="text-gray-600">Select an investment plan that matches your goals and risk tolerance.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fund Account</h3>
              <p className="text-gray-600">Deposit funds securely using multiple payment methods and currencies.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Start Earning</h3>
              <p className="text-gray-600">Watch your investments grow with our professional trading strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Experience Professional Trading?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of successful investors who trust Pinnacle Wealth with their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Trading Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Investment Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Pinnacle Wealth</span>
              </div>
              <p className="text-gray-400">
                Professional trading and investment services trusted by thousands of investors worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/service" className="hover:text-white transition-colors">
                    Trading Services
                  </Link>
                </li>
                <li>
                  <Link href="/investment" className="hover:text-white transition-colors">
                    Investment Plans
                  </Link>
                </li>
                <li>
                  <Link href="/withdrawal-request" className="hover:text-white transition-colors">
                    Withdrawals
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/withdrawal-policy" className="hover:text-white transition-colors">
                    Withdrawal Policy
                  </Link>
                </li>
                <li>
                  <Link href="/withdrawal-history" className="hover:text-white transition-colors">
                    Account History
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@pinnaclewealth.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Live Chat</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Pinnacle Wealth. All rights reserved. Trading involves risk and may not be suitable for all
              investors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
