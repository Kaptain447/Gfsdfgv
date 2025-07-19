import { Award, Shield, CheckCircle, Star, TrendingUp, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AwardsCertifications() {
  const awards = [
    {
      icon: Award,
      title: "Best Trading Platform",
      subtitle: "FinTech Awards 2023",
      color: "yellow",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Shield,
      title: "SEC Registered",
      subtitle: "Investment Advisor",
      color: "blue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "ISO 27001",
      subtitle: "Security Certified",
      color: "green",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Star,
      title: "5-Star Rating",
      subtitle: "TrustPilot Reviews",
      color: "purple",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Top Performer",
      subtitle: "Investment Excellence 2023",
      color: "indigo",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: Users,
      title: "Client Choice Award",
      subtitle: "Financial Services 2023",
      color: "pink",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ]

  const regulations = [
    { name: "FINRA Member", color: "bg-green-500" },
    { name: "SIPC Protected", color: "bg-blue-500" },
    { name: "FCA Regulated", color: "bg-purple-500" },
    { name: "CFTC Registered", color: "bg-orange-500" },
    { name: "CySEC Licensed", color: "bg-red-500" },
    { name: "ASIC Compliant", color: "bg-teal-500" },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gold-100 text-gold-800">Industry Recognition</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted & <span className="text-blue-600">Recognized</span> Globally
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us prestigious awards and regulatory approvals from leading
            financial authorities worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <div key={index} className="text-center space-y-3 group hover:scale-105 transition-transform">
                <div
                  className={`w-16 h-16 ${award.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className={`h-8 w-8 ${award.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-gray-900">{award.title}</div>
                  <div className="text-xs text-gray-600">{award.subtitle}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Regulatory Compliance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
            <p className="text-gray-600">Licensed and regulated by major financial authorities</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 ${regulation.color} rounded-full`}></div>
                <span className="text-sm font-medium text-gray-700">{regulation.name}</span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">A+</div>
              <div className="text-sm text-gray-600">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">$250M</div>
              <div className="text-sm text-gray-600">Insurance Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Security Certifications */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Security Standards</h4>
                <p className="text-sm text-gray-600">Bank-level protection</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>256-bit SSL encryption</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Two-factor authentication</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cold storage for funds</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Regular security audits</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                <p className="text-sm text-gray-600">Award-winning platform</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Best Trading Platform 2023</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Excellence in Customer Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Innovation in FinTech</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Top Investment Advisor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
