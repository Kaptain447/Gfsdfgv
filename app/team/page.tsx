import Link from "next/link"
import { Globe, Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileNav } from "@/components/mobile-nav"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "Chief Executive Officer & Founder",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Michael founded Famous FX in 2014 with a vision to democratize access to professional-grade investment opportunities. With over 15 years of experience in financial services, he previously served as Vice President at Goldman Sachs, where he managed high-net-worth client portfolios exceeding $500 million. Michael holds an MBA from Wharton School and is a CFA charterholder. Under his leadership, Famous FX has grown to serve over 50,000 clients worldwide.",
      education: "MBA - Wharton School, CFA Charterholder",
      experience: "15+ years in Financial Services",
      specialties: ["Portfolio Management", "Risk Assessment", "Strategic Planning"],
    },
    {
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Sarah leads our technology initiatives and oversees the development of our proprietary trading platforms. She graduated summa cum laude from MIT with a degree in Computer Science and has 12 years of experience in fintech. Before joining Famous FX, she was the Lead Engineer at a major cryptocurrency exchange, where she built systems handling billions in daily transactions. Sarah is passionate about using AI and machine learning to optimize investment strategies.",
      education: "BS Computer Science - MIT (Summa Cum Laude)",
      experience: "12+ years in Financial Technology",
      specialties: ["AI/ML Trading Systems", "Cybersecurity", "Platform Development"],
    },
    {
      name: "David Thompson",
      position: "Head of Trading Operations",
      image: "/placeholder.svg?height=200&width=200",
      bio: "David brings over 20 years of trading expertise to Famous FX. He previously managed institutional trading desks at JP Morgan Chase, where he oversaw $2 billion in assets and consistently delivered above-market returns. David is known for his disciplined approach to risk management and his ability to identify profitable opportunities in volatile markets. He holds the FRM certification and is a frequent speaker at financial conferences.",
      education: "BS Finance - NYU Stern, FRM Certified",
      experience: "20+ years in Trading & Asset Management",
      specialties: ["Forex Trading", "Risk Management", "Market Analysis"],
    },
    {
      name: "Elena Vasquez",
      position: "Head of Client Relations",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Elena ensures our clients receive world-class service and support throughout their investment journey. With 10 years of experience in wealth management, she previously worked at Morgan Stanley, where she managed relationships with ultra-high-net-worth individuals. Elena is fluent in five languages and has helped expand Famous FX's presence in Latin American and European markets. She holds a Master's degree in International Business.",
      education: "MBA International Business - INSEAD",
      experience: "10+ years in Wealth Management",
      specialties: ["Client Relations", "International Markets", "Wealth Planning"],
    },
    {
      name: "Dr. James Wilson",
      position: "Chief Risk Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Wilson oversees all risk management activities at Famous FX, ensuring our clients' investments are protected through sophisticated risk assessment models. He holds a PhD in Financial Economics from Stanford and has published numerous papers on risk management in academic journals. Before joining Famous FX, he was a Senior Risk Analyst at the Federal Reserve, where he contributed to banking regulation policies.",
      education: "PhD Financial Economics - Stanford University",
      experience: "18+ years in Risk Management",
      specialties: ["Quantitative Risk Analysis", "Regulatory Compliance", "Economic Research"],
    },
    {
      name: "Amanda Foster",
      position: "Head of Marketing & Communications",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Amanda leads our marketing efforts and ensures clear communication of our value proposition to clients worldwide. She has 8 years of experience in financial services marketing, previously working at Fidelity Investments where she managed digital marketing campaigns that generated over $100 million in new assets. Amanda holds an MBA in Marketing and is certified in digital marketing analytics.",
      education: "MBA Marketing - Northwestern Kellogg",
      experience: "8+ years in Financial Services Marketing",
      specialties: ["Digital Marketing", "Brand Strategy", "Client Communication"],
    },
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
              <Link href="/team" className="text-blue-600 font-medium hover:text-blue-700">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Our Expert Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals who make Famous FX a trusted leader in financial services. Our team
            combines decades of expertise with innovative thinking to deliver exceptional results.
          </p>
        </section>

        {/* Team Members */}
        <section className="py-8">
          <div className="grid gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    {/* Photo */}
                    <div className="lg:col-span-1">
                      <div className="relative w-48 h-48 mx-auto lg:mx-0">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-2xl object-cover border-4 border-blue-100"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{member.name}</h2>
                        <p className="text-xl text-blue-600 font-medium mb-4">{member.position}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Education</h4>
                          <p className="text-gray-600 text-sm">{member.education}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Experience</h4>
                          <p className="text-gray-600 text-sm">{member.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-4 pt-4">
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="p-2 bg-transparent">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our experienced professionals are here to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
