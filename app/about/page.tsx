import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Users, Target, Globe, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/service" className="text-gray-700 hover:text-blue-600 transition-colors">
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
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-blue-100 text-blue-800">About Pinnacle Wealth</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Building Wealth Through
              <span className="text-blue-600"> Expert Trading</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, Pinnacle Wealth has been at the forefront of financial innovation, helping investors
              achieve their dreams through professional trading and investment services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2014 by a team of Wall Street veterans, Pinnacle Wealth was born from a simple belief:
                everyone deserves access to professional-grade investment opportunities. What started as a small trading
                firm has grown into a global platform serving over 10,000 investors worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to transparency, security, and exceptional returns has made us a trusted name in the
                financial industry. We combine cutting-edge technology with human expertise to deliver consistent
                results for our clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-family.jpg"
                alt="Our team at work"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To democratize wealth creation by providing accessible, secure, and profitable investment
                  opportunities to individuals worldwide, regardless of their financial background.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To become the world's most trusted investment platform, empowering millions of people to achieve
                  financial freedom through innovative trading solutions and expert guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Security First</CardTitle>
                <CardDescription>
                  Your investments are protected with bank-level security and insurance coverage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Transparency</CardTitle>
                <CardDescription>
                  Complete visibility into your investments with real-time tracking and detailed reports.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Client Success</CardTitle>
                <CardDescription>
                  Your success is our success. We're committed to helping you achieve your financial goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Constantly evolving our platform with the latest technology and trading strategies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800">Our Achievements</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Trusted by Thousands Worldwide</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-blue-600">$2.5B+</div>
              <div className="text-gray-600">Total Assets Managed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-green-600">10,000+</div>
              <div className="text-gray-600">Active Investors</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-yellow-600">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Join Our Success Story?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Become part of the Pinnacle Wealth family and start building your wealth with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Investing Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Meet Our Team
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
