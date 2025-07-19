import { AwardsCertifications } from "@/components/awards-certifications"
import { AwardVideos } from "@/components/award-videos"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Shield, CheckCircle, Calendar, Globe, Camera, Users, Trophy, Play } from "lucide-react"
import Image from "next/image"

export default function AwardsPage() {
  const majorAwards = [
    {
      year: "2023",
      title: "Best Trading Platform",
      organization: "Global FinTech Awards",
      description: "Recognized for outstanding user experience and innovative trading tools",
      category: "Technology Excellence",
      image: "/images/awards/fintech-award-ceremony.jpg",
      venue: "London Financial District",
    },
    {
      year: "2023",
      title: "Top Investment Advisor",
      organization: "Financial Services Excellence Awards",
      description: "Awarded for consistent performance and client satisfaction",
      category: "Investment Management",
      image: "/images/awards/excellence-award-stage.jpg",
      venue: "New York Convention Center",
    },
    {
      year: "2022",
      title: "Innovation in Financial Technology",
      organization: "International Finance Awards",
      description: "Honored for breakthrough developments in automated trading systems",
      category: "Innovation",
      image: "/images/awards/innovation-trophy.jpg",
      venue: "Singapore FinTech Festival",
    },
    {
      year: "2022",
      title: "Client Choice Award",
      organization: "Investment Industry Association",
      description: "Voted by clients as the preferred investment platform",
      category: "Customer Service",
      image: "/images/awards/client-choice-ceremony.jpg",
      venue: "Dubai Financial Summit",
    },
    {
      year: "2021",
      title: "Excellence in Risk Management",
      organization: "Risk Management Institute",
      description: "Recognized for superior risk assessment and mitigation strategies",
      category: "Risk Management",
      image: "/images/awards/risk-management-award.jpg",
      venue: "Frankfurt Banking Conference",
    },
  ]

  const certifications = [
    {
      name: "SEC Registration",
      authority: "Securities and Exchange Commission",
      number: "SEC-IA-12345",
      validUntil: "2025",
      description: "Registered Investment Advisor with full regulatory compliance",
    },
    {
      name: "FINRA Membership",
      authority: "Financial Industry Regulatory Authority",
      number: "FINRA-BD-67890",
      validUntil: "Ongoing",
      description: "Member of FINRA with broker-dealer authorization",
    },
    {
      name: "ISO 27001 Certification",
      authority: "International Organization for Standardization",
      number: "ISO-27001-2023",
      validUntil: "2026",
      description: "Information security management system certification",
    },
    {
      name: "SIPC Protection",
      authority: "Securities Investor Protection Corporation",
      number: "SIPC-PROT-2023",
      validUntil: "Ongoing",
      description: "Client assets protected up to $500,000 per account",
    },
  ]

  const galleryImages = [
    {
      src: "/images/awards/team-award-photo.jpg",
      title: "Team Receiving Excellence Award",
      description: "Our leadership team accepting the Financial Services Excellence Award in New York",
      event: "Financial Services Excellence Awards 2023",
    },
    {
      src: "/images/awards/fintech-award-ceremony.jpg",
      title: "FinTech Awards Ceremony",
      description: "Celebrating our Best Trading Platform award at the Global FinTech Awards",
      event: "Global FinTech Awards 2023",
    },
    {
      src: "/images/awards/innovation-trophy.jpg",
      title: "Innovation Trophy Presentation",
      description: "Receiving recognition for breakthrough developments in automated trading",
      event: "International Finance Awards 2022",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white mb-4">Industry Recognition</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Awards & Certifications</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition from leading industry organizations and regulatory
            bodies worldwide.
          </p>
        </div>
      </section>

      {/* Award Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Play className="h-6 w-6 text-red-600" />
              <Badge className="bg-red-100 text-red-800">Video Gallery</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Award Ceremony Videos</h2>
            <p className="text-lg text-gray-600">
              Watch our team accept prestigious awards and share insights about our journey to excellence
            </p>
          </div>

          <AwardVideos showAll={false} />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Camera className="h-6 w-6 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800">Photo Gallery</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Award Ceremony Moments</h2>
            <p className="text-lg text-gray-600">Capturing our proudest moments of industry recognition</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.event}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Award Highlight */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Trophy className="h-6 w-6 text-gold-600" />
                    <Badge className="bg-gold-100 text-gold-800">Featured Achievement</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Trading Platform 2023</h3>
                  <p className="text-gray-600 mb-6">
                    We're honored to have received the prestigious Best Trading Platform award at the Global FinTech
                    Awards 2023. This recognition validates our commitment to providing cutting-edge technology and
                    exceptional user experience to our clients worldwide.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>March 2023</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>London, UK</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/awards/fintech-award-ceremony.jpg"
                    alt="FinTech Award Ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Timeline with Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Award Timeline</h2>
            <p className="text-lg text-gray-600">A visual history of excellence and recognition</p>
          </div>

          <div className="space-y-12">
            {majorAwards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt={`${award.title} ceremony`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">{award.year}</Badge>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-blue-500 text-blue-700">
                          {award.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                      <p className="text-gray-600 mb-4">{award.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="w-4 h-4 mr-1" />
                        <span>{award.venue}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="h-6 w-6 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-800">Team Moments</Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Behind the Awards</h2>
            <p className="text-lg text-gray-600">Meet the team that makes excellence possible</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/awards/team-award-photo.jpg" alt="Team celebration" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">Team Celebration</h3>
                  <p className="text-sm text-gray-200">Our leadership team celebrating another milestone</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Every award we receive is a testament to our team's dedication, innovation, and commitment to
                  providing exceptional service to our clients. These moments capture the joy and pride we feel when our
                  hard work is recognized by the industry.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Award Impact</h4>
                      <p className="text-sm text-gray-600">Recognition drives excellence</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Each award motivates us to continue innovating and improving our services, ensuring we maintain the
                    highest standards in the financial industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Team Recognition</h4>
                      <p className="text-sm text-gray-600">Celebrating our people</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Behind every award is a team of dedicated professionals who work tirelessly to deliver exceptional
                    results for our clients and stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Recognition</h4>
                      <p className="text-sm text-gray-600">International presence</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our awards span multiple continents, reflecting our global reach and commitment to excellence in
                    every market we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regulatory Certifications</h2>
            <p className="text-lg text-gray-600">Licensed and regulated by major financial authorities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <p className="text-sm text-gray-600">{cert.authority}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">{cert.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Certificate #: {cert.number}</span>
                      <span className="text-green-600 font-medium">Valid until: {cert.validUntil}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trust & Security</h2>
            <p className="text-lg text-gray-600">
              Your investments are protected by industry-leading security measures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$250M Insurance</h3>
                <p className="text-gray-600">Comprehensive coverage protecting client assets</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">Reliable platform with guaranteed availability</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Compliance</h3>
                <p className="text-gray-600">Regulated in multiple jurisdictions worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Component */}
      <AwardsCertifications />
    </div>
  )
}
