"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight, Play, TrendingUp, DollarSign } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  investment: string
  returns: string
  timeframe: string
  verified: boolean
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Portfolio Manager",
    company: "Investment Solutions LLC",
    content:
      "Pinnacle Wealth has consistently delivered exceptional returns for our clients. Their professional approach and transparent reporting make them our go-to investment partner.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$50,000",
    returns: "+127%",
    timeframe: "8 months",
    verified: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Entrepreneur",
    company: "Tech Startup Founder",
    content:
      "I've been investing with Pinnacle Wealth for over 2 years. The monthly returns are consistent, and their customer service is outstanding. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$25,000",
    returns: "+89%",
    timeframe: "12 months",
    verified: true,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    company: "Wealth Management Pro",
    content:
      "The security and reliability of Famous FX gives me confidence in recommending them to my clients. Their track record speaks for itself.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$100,000",
    returns: "+156%",
    timeframe: "6 months",
    verified: true,
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Retired Executive",
    company: "Former Fortune 500 CEO",
    content:
      "Famous FX has helped me grow my retirement portfolio significantly. Their professional team and consistent performance make investing stress-free.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$75,000",
    returns: "+98%",
    timeframe: "10 months",
    verified: true,
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "Real Estate Investor",
    company: "Property Investment Group",
    content:
      "The returns I've achieved with Famous FX have allowed me to expand my real estate portfolio. Their expertise in market analysis is impressive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$40,000",
    returns: "+112%",
    timeframe: "7 months",
    verified: true,
  },
  {
    id: "6",
    name: "Robert Kim",
    role: "Small Business Owner",
    company: "Manufacturing Company",
    content:
      "Famous FX has been instrumental in helping me diversify my business income. Their monthly returns provide excellent cash flow for my operations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    investment: "$30,000",
    returns: "+76%",
    timeframe: "9 months",
    verified: true,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 mb-4">Client Success Stories</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Investors</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real clients who have achieved exceptional returns with Famous FX
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Testimonial */}
          <div className="relative">
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    {currentTestimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</h3>
                    <p className="text-gray-600">{currentTestimonial.role}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.company}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-700 text-lg leading-relaxed pl-6">{currentTestimonial.content}</p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{currentTestimonial.returns}</div>
                    <div className="text-xs text-gray-600">Total Returns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{currentTestimonial.investment}</div>
                    <div className="text-xs text-gray-600">Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{currentTestimonial.timeframe}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full w-10 h-10 p-0"
              >
                <Play className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Success Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Success Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Average Monthly Return</div>
                      <div className="text-sm text-gray-600">Across all investment plans</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">22.5%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Total Client Profits</div>
                      <div className="text-sm text-gray-600">Generated this year</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">$125M+</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Client Satisfaction</div>
                      <div className="text-sm text-gray-600">Based on reviews</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">98.7%</div>
                </div>
              </div>
            </div>

            {/* Video Testimonial Preview */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">Video Testimonials</h4>
                    <p className="text-blue-100 text-sm">Hear directly from our clients</p>
                  </div>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
                <div className="text-sm text-blue-100">
                  "Pinnacle Wealth transformed my financial future. In just 6 months, I achieved returns I never thought
                  possible."
                </div>
                <div className="text-xs text-blue-200 mt-2">- Jennifer Martinez, Real Estate Developer</div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Join Our Success Stories
              </Button>
              <p className="text-sm text-gray-600 mt-2">Start your investment journey today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
