import Link from "next/link"
import { Globe, TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileNav } from "@/components/mobile-nav"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideoTestimonials } from "@/components/video-testimonials"

export default function TestimonialsPage() {
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
                  FF FAMOUS
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
              <Link href="/investment" className="text-gray-700 hover:text-blue-600">
                Investment Plans
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/testimonials" className="text-blue-600 font-medium hover:text-blue-700">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Client Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Famous FX has helped thousands of clients achieve their financial goals through stable,
            reliable, and profitable investment strategies.
          </p>
        </section>

        {/* Success Statistics */}
        <section className="py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Track Record Speaks for Itself</h2>
              <p className="text-lg text-gray-600">Real results from real clients across the globe</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$500M+</div>
                <div className="text-gray-600">Assets Managed</div>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                <div className="text-gray-600">Average Annual Return</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <VideoTestimonials showAll={true} />

        {/* Divider */}
        <div className="py-8">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Written Testimonials */}
        <TestimonialsSection
          showAll={true}
          title="Written Success Stories"
          subtitle="Read detailed written testimonials from clients who have transformed their financial futures with Famous FX."
        />

        {/* Featured Success Story */}
        <section className="py-12">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Success Story</h2>
                <p className="text-xl opacity-90">From Financial Struggle to Financial Freedom</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 text-center">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Michael Thompson"
                      className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold">Michael Thompson</h3>
                    <p className="opacity-90">Chicago, Illinois</p>
                  </div>

                  <div className="lg:col-span-2">
                    <blockquote className="text-lg leading-relaxed mb-6">
                      "Three years ago, I was struggling with debt and had no savings. A friend recommended Famous FX,
                      and despite my skepticism, I decided to invest my last $2,000. The team's patience in educating me
                      about forex trading and their consistent performance gave me hope. Today, my portfolio is worth
                      over $45,000, I've paid off all my debts, and I'm building a secure future for my family. Famous
                      FX didn't just change my financial situation – they changed my life."
                    </blockquote>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">$2,000</div>
                        <div className="text-sm opacity-90">Initial Investment</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$45,000</div>
                        <div className="text-sm opacity-90">Current Value</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">3 Years</div>
                        <div className="text-sm opacity-90">Investment Period</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have achieved financial success with Famous FX. Your journey to
              financial freedom starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Start Investing Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
