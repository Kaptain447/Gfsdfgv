import Link from "next/link"
import { Globe, Shield, TrendingUp, Clock, Award, CheckCircle, ArrowRight, DollarSign, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

export default function InvestmentPage() {
  const investmentPlans = [
    {
      name: "Starter Plan",
      subtitle: "Perfect for Beginners",
      minInvestment: "$500",
      maxInvestment: "$4,999",
      expectedReturn: "15-20%",
      timeframe: "6-12 months",
      riskLevel: "Low",
      features: [
        "Professional portfolio management",
        "Monthly performance reports",
        "Email support",
        "Basic market analysis",
        "Flexible withdrawal options",
        "Educational resources access",
      ],
      popular: false,
      color: "gray",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Growth Plan",
      subtitle: "Most Popular Choice",
      minInvestment: "$5,000",
      maxInvestment: "$24,999",
      expectedReturn: "20-25%",
      timeframe: "12-18 months",
      riskLevel: "Medium",
      features: [
        "Advanced portfolio management",
        "Weekly performance reports",
        "Priority phone & email support",
        "Advanced market analysis",
        "Dedicated account manager",
        "Risk management tools",
        "Quarterly strategy reviews",
        "VIP educational webinars",
      ],
      popular: true,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Premium Plan",
      subtitle: "Maximum Returns",
      minInvestment: "$25,000",
      maxInvestment: "$100,000+",
      expectedReturn: "25-35%",
      timeframe: "18-24 months",
      riskLevel: "Medium-High",
      features: [
        "Elite portfolio management",
        "Daily performance reports",
        "24/7 dedicated support hotline",
        "Premium market insights",
        "Senior account manager",
        "Custom trading strategies",
        "Monthly strategy consultations",
        "Exclusive market events",
        "Priority withdrawals",
        "Tax optimization guidance",
      ],
      popular: false,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: "Capital Protection",
      description: "Advanced risk management strategies to protect your initial investment.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time monitoring and detailed reporting of your investment performance.",
      color: "green",
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Professional fund managers with 15+ years of experience in forex markets.",
      color: "purple",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose investment periods that align with your financial goals and timeline.",
      color: "orange",
    },
  ]

  const performanceStats = [
    { label: "Average Annual Return", value: "23.5%", icon: TrendingUp },
    { label: "Client Success Rate", value: "98.2%", icon: Award },
    { label: "Years of Experience", value: "10+", icon: Clock },
    { label: "Assets Under Management", value: "$500M+", icon: DollarSign },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link href="/">
                <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-sm cursor-pointer">
                  PINNACLE WEALTH
                </div>
              </Link>

              {/* Language Selector - Hidden on mobile */}
              <div className="hidden md:block">
                <Select defaultValue="en">
                  <SelectTrigger className="w-40 h-8 text-xs">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Google Translate - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-1 text-xs text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Google Translate</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/service" className="text-gray-700 hover:text-blue-600">
                Our Service
              </Link>
              <Link href="/investment" className="text-blue-600 font-medium hover:text-blue-700">
                Investment Plans
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600">
                Testimonials
              </Link>
              <Link href="/spanish-pdf" className="text-gray-700 hover:text-blue-600">
                Spanish PDF
              </Link>
              <Link href="/english" className="text-gray-700 hover:text-blue-600">
                English
              </Link>
            </nav>

            {/* Auth Buttons & Mobile Nav */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-gray-700">
                  Sign In
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Investment Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully designed investment plans that deliver stable, reliable returns through
            professional forex trading and portfolio management strategies.
          </p>
        </section>

        {/* Performance Statistics */}
        <section className="py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Track Record</h2>
              <p className="text-lg text-gray-600">Proven results that speak for themselves</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Investment Plans */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Choose Your Investment Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the plan that best matches your investment goals and risk tolerance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.bgColor} ${plan.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? "transform scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-6 py-2 text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                  <p className="text-gray-600 font-medium">{plan.subtitle}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-blue-600">{plan.expectedReturn}</div>
                    <p className="text-gray-500">Expected Annual Return</p>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-500">Min Investment</div>
                      <div className="font-bold text-gray-800">{plan.minInvestment}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-500">Timeframe</div>
                      <div className="font-bold text-gray-800">{plan.timeframe}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Risk Level:</span>
                      <Badge
                        variant="outline"
                        className={`${plan.riskLevel === "Low" ? "border-green-500 text-green-700" : plan.riskLevel === "Medium" ? "border-yellow-500 text-yellow-700" : "border-red-500 text-red-700"}`}
                      >
                        {plan.riskLevel}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Investment Range:</span> {plan.minInvestment} - {plan.maxInvestment}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-bold text-gray-800 text-sm">Plan Features:</h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${plan.buttonColor} text-white font-medium py-3`}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What's Included</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every investment plan includes comprehensive services designed to maximize your returns and minimize risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
              }

              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6">
                    <div
                      className={`rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center ${colorClasses[service.color as keyof typeof colorClasses]}`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Investment Process */}
        <section className="py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Investment Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes it easy to start investing and growing your wealth.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Choose Plan</h3>
                <p className="text-gray-600 text-sm">
                  Select the investment plan that matches your goals and risk tolerance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Make Investment</h3>
                <p className="text-gray-600 text-sm">Fund your account securely using our trusted payment methods.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Management</h3>
                <p className="text-gray-600 text-sm">
                  Our professional team manages your investment using proven strategies.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Earn Returns</h3>
                <p className="text-gray-600 text-sm">
                  Watch your investment grow and withdraw profits according to your plan.
                </p>
              </div>
            </div>

            {/* Add this new section */}
            <div className="mt-12 text-center">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Withdrawal Information</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our withdrawal policies, processing times, and fee structures.
                </p>
                <Link href="/withdrawal-policy">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    View Withdrawal Terms & Conditions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">Investment Risk Disclaimer</h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  All investments carry risk and past performance does not guarantee future results. The value of
                  investments can go down as well as up. Please ensure you understand the risks involved and seek
                  independent financial advice if necessary. Pinnacle Wealth is regulated and follows strict risk
                  management protocols to protect client investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Investment Journey Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful investors who have achieved their financial goals with Pinnacle Wealth.
              Choose your plan and start building wealth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <DollarSign className="w-5 h-5 mr-2" />
                Start Investing Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
