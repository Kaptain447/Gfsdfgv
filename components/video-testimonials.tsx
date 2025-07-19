"use client"

import { useState } from "react"
import { Play, Pause, Volume2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface VideoTestimonial {
  id: string
  name: string
  location: string
  position: string
  company?: string
  thumbnail: string
  videoUrl: string
  duration: string
  investment: string
  returns: string
  timeframe: string
  transcript: string
  summary: string
}

interface VideoTestimonialsProps {
  showAll?: boolean
  title?: string
  subtitle?: string
}

export function VideoTestimonials({
  showAll = false,
  title = "Video Success Stories",
  subtitle = "Hear directly from our clients about their investment journey and success with Famous FX.",
}: VideoTestimonialsProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [showTranscript, setShowTranscript] = useState<string | null>(null)

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "testimonial-1",
      name: "Jennifer Martinez",
      location: "Miami, Florida",
      position: "Marketing Manager",
      company: "Tech Solutions Inc.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#", // Placeholder for actual video URL
      duration: "2:45",
      investment: "$5,000",
      returns: "23% annually",
      timeframe: "18 months",
      summary: "Jennifer shares how Famous FX helped her achieve financial independence and quit her second job.",
      transcript: `Hi, I'm Jennifer Martinez from Miami, Florida. I want to share my incredible experience with Famous FX.

About 18 months ago, I was working two jobs just to make ends meet. I had heard about forex trading but was always too scared to try it. A friend recommended Famous FX, and after doing my research, I decided to take the leap with $5,000 - money I had saved from working overtime.

What impressed me most was the transparency. From day one, the team explained exactly how their strategies work, the risks involved, and what I could realistically expect. They never made unrealistic promises.

The results have been amazing. I'm seeing consistent returns of about 23% annually, which has allowed me to quit my second job and focus on my career. More importantly, I finally have financial security and peace of mind.

The customer support is outstanding. Whenever I have questions, they respond quickly with detailed explanations. They've also provided excellent educational resources that helped me understand the market better.

If you're considering investing with Famous FX, I can't recommend them enough. They've truly changed my life, and I'm confident they can help you achieve your financial goals too.`,
    },
    {
      id: "testimonial-2",
      name: "Robert Chen",
      location: "San Francisco, California",
      position: "Software Engineer",
      company: "Google",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#",
      duration: "3:12",
      investment: "$25,000",
      returns: "180% total",
      timeframe: "2 years",
      summary:
        "Robert explains how Famous FX's algorithmic approach convinced him to invest and plan for early retirement.",
      transcript: `Hello, I'm Robert Chen, a software engineer at Google in San Francisco.

As someone who works in tech, I'm naturally skeptical about financial services, especially in the forex space. But Famous FX caught my attention because of their algorithmic approach and transparent methodology.

Two years ago, I invested $25,000 with them. What convinced me was their detailed explanation of their risk management strategies and the technology behind their trading systems. As an engineer, I could appreciate the sophistication of their approach.

The results have exceeded my expectations. My initial investment has grown by 180%, and I'm now seriously considering early retirement - something I never thought would be possible in my 30s.

What sets Famous FX apart is their consistency. While other platforms promise huge returns with high risk, Famous FX focuses on steady, sustainable growth. Their monthly reports are detailed and transparent, showing exactly how my money is being managed.

The team is incredibly professional. They understand that tech professionals like myself want data and detailed explanations, not just promises. They've provided comprehensive analytics and regular updates that give me complete confidence in their strategies.

I've already recommended Famous FX to several colleagues, and they've all had similar positive experiences. If you're looking for a reliable, technology-driven investment platform, Famous FX is definitely worth considering.`,
    },
    {
      id: "testimonial-3",
      name: "Maria Gonzalez",
      location: "Barcelona, Spain",
      position: "Small Business Owner",
      company: "Gonzalez Family Restaurant",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#",
      duration: "2:28",
      investment: "$8,500",
      returns: "31% annually",
      timeframe: "14 months",
      summary: "Maria discusses how Famous FX's Spanish support team helped her secure her family's financial future.",
      transcript: `Hola, soy Maria Gonzalez from Barcelona, Spain. I own a small family restaurant with my husband.

Running a small business, especially in the restaurant industry, means dealing with unpredictable income. We wanted to invest our savings to secure our children's future, but we were worried about language barriers and understanding complex financial products.

Famous FX changed everything for us. They have an excellent Spanish support team that explained everything in our native language. They were patient, professional, and never made us feel like our questions were too basic.

We started with €8,500 about 14 months ago. The returns have been fantastic - about 31% annually. This steady income has allowed us to start saving for our children's university education, something we weren't sure we could afford before.

What I love most about Famous FX is their family-oriented approach. They understand that we're not just investing money - we're investing in our family's future. The team regularly checks in with us, provides updates in Spanish, and has even helped us understand tax implications in Spain.

The platform is easy to use, and we receive detailed monthly reports that show exactly how our investment is performing. We feel completely secure and informed about our money.

To any Spanish-speaking families considering Famous FX, I can tell you that they truly care about their clients and will support you every step of the way. Our family's financial future is much brighter thanks to them.`,
    },
    {
      id: "testimonial-4",
      name: "David Thompson",
      location: "London, United Kingdom",
      position: "Financial Consultant",
      company: "Independent",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#",
      duration: "3:35",
      investment: "$15,000",
      returns: "25% annually",
      timeframe: "2.5 years",
      summary:
        "David, a financial professional himself, explains why he chose Famous FX after bad experiences with other platforms.",
      transcript: `I'm David Thompson, an independent financial consultant based in London.

You might think that as someone who works in finance, I wouldn't need external investment management. But the truth is, forex trading requires specialized expertise and constant market monitoring that I simply don't have time for while running my consultancy.

Before Famous FX, I had some terrible experiences with other platforms. I lost significant money with companies that made unrealistic promises and had poor risk management. I was honestly ready to give up on forex investing entirely.

A colleague recommended Famous FX, and I was initially skeptical. But after reviewing their methodology, risk management protocols, and track record, I decided to give them a chance with £15,000.

That was 2.5 years ago, and it's been the best financial decision I've made. They've consistently delivered around 25% annual returns with remarkably low volatility. As someone who understands financial markets, I can appreciate the skill required to achieve this consistency.

What impressed me most is their transparency. Their monthly reports are more detailed than what I provide to my own clients. They explain their strategies, market analysis, and risk assessments in a way that even a financial professional can appreciate.

The team is incredibly knowledgeable. I've had several in-depth conversations with their analysts, and their market insights are genuinely valuable. They've restored my faith in professional forex management.

If you're considering Famous FX, even if you have financial experience like I do, I can confidently say they're the real deal. Their professionalism and results speak for themselves.`,
    },
    {
      id: "testimonial-5",
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      position: "Teacher",
      company: "Toronto District School Board",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#",
      duration: "2:15",
      investment: "$3,000",
      returns: "300% total",
      timeframe: "3 years",
      summary:
        "Sarah shares her journey from complete beginner to successful investor with Famous FX's educational support.",
      transcript: `Hi everyone, I'm Sarah Johnson, a high school teacher from Toronto.

Three years ago, I knew absolutely nothing about investing. As a teacher, my salary is modest, and I was worried about my retirement savings. I had $3,000 in a savings account earning almost nothing in interest.

A friend mentioned Famous FX, but I was intimidated. I thought forex trading was only for wealthy people or financial experts. I couldn't have been more wrong.

The Famous FX team was incredibly patient with me. They provided educational materials, webinars, and one-on-one sessions to help me understand the basics. They never made me feel stupid for asking questions, no matter how basic they seemed.

I started with my $3,000, and the results have been incredible. My investment is now worth over $12,000 - that's a 300% return in three years! This money has given me confidence about my financial future for the first time in my life.

What I appreciate most is how they treat every client like family, regardless of how much you invest. They send regular updates, educational content, and are always available to answer questions.

The platform is user-friendly, and I love getting the monthly reports that show exactly how my money is growing. It's exciting to see my investment working for me.

To anyone who thinks they don't know enough about investing or don't have enough money to start - I'm proof that Famous FX can help anyone achieve their financial goals. They've changed my life, and I'm so grateful I took that first step.`,
    },
    {
      id: "testimonial-6",
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      position: "Business Owner",
      company: "Al-Rashid Trading LLC",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoUrl: "#",
      duration: "2:52",
      investment: "$50,000",
      returns: "28% annually",
      timeframe: "16 months",
      summary:
        "Ahmed explains how Famous FX's Sharia-compliant investment options aligned with his religious values while delivering excellent returns.",
      transcript: `Assalamu Alaikum, I am Ahmed Al-Rashid from Dubai, UAE. I own a trading company here in the Emirates.

As a practicing Muslim, finding investment opportunities that align with Islamic principles has always been challenging. Many forex platforms use interest-based transactions or invest in prohibited sectors, which conflicts with Sharia law.

When I discovered that Famous FX offers Sharia-compliant investment options, I was intrigued but cautious. I needed to ensure that their Islamic investment strategies were genuinely compliant and not just marketing.

After consulting with Islamic finance scholars and reviewing Famous FX's Sharia-compliant methodology, I was convinced. They work with certified Islamic finance experts to ensure all transactions follow Islamic principles.

I invested $50,000 about 16 months ago, and the results have been excellent. I'm seeing approximately 28% annual returns while maintaining complete compliance with Islamic law. This has allowed me to grow my wealth without compromising my religious values.

The team understands the importance of cultural and religious sensitivity. They provide detailed explanations of how their Sharia-compliant strategies work and regularly update me on the compliance status of my investments.

What impressed me most is their commitment to transparency and ethical practices, which aligns perfectly with Islamic business principles. They operate with integrity and honesty in all their dealings.

For my Muslim brothers and sisters looking for halal investment opportunities, I highly recommend Famous FX. They have proven that you can achieve excellent returns while staying true to Islamic principles.

May Allah bless their work and continue to provide halal prosperity for all their clients.`,
    },
  ]

  const displayedTestimonials = showAll ? videoTestimonials : videoTestimonials.slice(0, 3)

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId)
  }

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="relative">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200">
                <img
                  src={testimonial.thumbnail || "/placeholder.svg"}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Button
                    onClick={() => handlePlayVideo(testimonial.id)}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 rounded-full p-4 transition-all transform hover:scale-110"
                  >
                    {playingVideo === testimonial.id ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {testimonial.duration}
                </div>

                {/* Video Player Simulation */}
                {playingVideo === testimonial.id && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="animate-pulse mb-4">
                        <Volume2 className="w-12 h-12 mx-auto" />
                      </div>
                      <p className="text-sm">Video playing...</p>
                      <p className="text-xs opacity-75 mt-2">
                        (In a real implementation, this would be a video player)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <CardContent className="p-6">
              {/* Client Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{testimonial.position}</p>
                {testimonial.company && <p className="text-gray-500 text-sm">{testimonial.company}</p>}
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>

              {/* Summary */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{testimonial.summary}</p>

              {/* Performance Stats */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-gray-500">Investment</div>
                    <div className="font-bold text-gray-800 text-sm">{testimonial.investment}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Returns</div>
                    <div className="font-bold text-green-600 text-sm">{testimonial.returns}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Timeframe</div>
                    <div className="font-bold text-gray-800 text-sm">{testimonial.timeframe}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={() => handlePlayVideo(testimonial.id)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {playingVideo === testimonial.id ? "Pause" : "Play"}
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm py-2 px-3 bg-transparent"
                    >
                      <FileText className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5" />
                        <span>Video Transcript - {testimonial.name}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>
                            <strong>Speaker:</strong> {testimonial.name}
                          </span>
                          <span>
                            <strong>Location:</strong> {testimonial.location}
                          </span>
                          <span>
                            <strong>Duration:</strong> {testimonial.duration}
                          </span>
                        </div>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                          {testimonial.transcript}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
          >
            View All Video Testimonials
          </Button>
        </div>
      )}
    </section>
  )
}
