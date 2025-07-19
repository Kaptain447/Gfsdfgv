"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CompanyTimeline } from "@/components/company-timeline"
import { ArrowRight, TrendingUp, Calendar, Award, Trophy, Star, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TimelinePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              <Link href="/timeline" className="text-blue-600 font-medium">
                Timeline
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/service"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/investment"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Investment
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/team"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/timeline"
                  className="block px-3 py-2 text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Timeline
                </Link>
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-gray-900 mb-2">Withdrawals</div>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/withdrawal-request"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Request Withdrawal
                    </Link>
                    <Link
                      href="/withdrawal-history"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Withdrawal History
                    </Link>
                    <Link
                      href="/withdrawal-policy"
                      className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Withdrawal Policy
                    </Link>
                  </div>
                </div>
                <div className="px-3 py-2">
                  <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with animations */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2 animate-fade-in-up">
              <Calendar className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 animate-fade-in-up animation-delay-200">
              A Decade of
              <span className="text-blue-600"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              From a small trading firm to a global investment platform serving 10,000+ investors worldwide. Discover
              the milestones that shaped Pinnacle Wealth's journey to success.
            </p>
          </div>

          {/* Stats Overview with staggered animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
            <div className="text-center space-y-2 animate-fade-in-up animation-delay-600">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 animate-count-up">10+</div>
              <div className="text-sm md:text-base text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up animation-delay-700">
              <div className="text-2xl md:text-4xl font-bold text-green-600 animate-count-up">$2.5B+</div>
              <div className="text-sm md:text-base text-gray-600">Assets Managed</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up animation-delay-800">
              <div className="text-2xl md:text-4xl font-bold text-purple-600 animate-count-up">10,000+</div>
              <div className="text-sm md:text-base text-gray-600">Global Investors</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up animation-delay-900">
              <div className="text-2xl md:text-4xl font-bold text-yellow-600 animate-count-up">50+</div>
              <div className="text-sm md:text-base text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800 animate-fade-in-up">
              <Award className="w-4 h-4 mr-2" />
              Company Milestones
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 animate-fade-in-up animation-delay-200">
              Our Growth Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Every milestone represents our commitment to excellence and our clients' success. Here's how we've grown
              from a startup to a global investment platform.
            </p>
          </div>

          <CompanyTimeline />
        </div>
      </section>

      {/* Awards Highlight with animations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-yellow-100 text-yellow-800 animate-fade-in-up">
              <Trophy className="w-4 h-4 mr-2" />
              Recognition & Awards
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 animate-fade-in-up animation-delay-200">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Our commitment to excellence has been recognized by industry leaders and clients alike.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animation-delay-800">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">FinTech Innovation Award</h3>
                <p className="text-gray-600">2019 - Recognized for breakthrough trading technology</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-700">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animation-delay-900">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Trading Platform</h3>
                <p className="text-gray-600">2021 - Excellence in user experience and performance</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animation-delay-1000">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Client Choice Excellence</h3>
                <p className="text-gray-600">2023 - 98% client satisfaction rating</p>
              </div>
            </div>

            <div className="mt-12 animate-fade-in-up animation-delay-1000">
              <Link href="/awards">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  View All Awards
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white animate-fade-in-up">
              Be Part of Our Next Chapter
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Join thousands of investors who trust Pinnacle Wealth with their financial future. Start your investment
              journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Start Investing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link>
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
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/timeline" className="hover:text-white transition-colors">
                    Our Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/awards" className="hover:text-white transition-colors">
                    Awards
                  </Link>
                </li>
              </ul>
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
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Testimonials
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

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }

        .animate-count-up {
          animation: count-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-900 {
          animation-delay: 900ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}
