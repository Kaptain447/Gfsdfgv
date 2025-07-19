import { AwardVideos } from "@/components/award-videos"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Video, Award, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function VideoGalleryPage() {
  const videoCategories = [
    {
      name: "Award Speeches",
      count: 8,
      description: "Watch our leadership team accept prestigious industry awards",
      icon: Award,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "CEO Interviews",
      count: 5,
      description: "Exclusive interviews with our CEO about company vision and strategy",
      icon: Users,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Team Celebrations",
      count: 12,
      description: "Behind-the-scenes moments of our team celebrating achievements",
      icon: Users,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Event Highlights",
      count: 15,
      description: "Key moments from major financial industry events and conferences",
      icon: Calendar,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Video className="h-8 w-8 text-white" />
            <Badge className="bg-white/20 text-white">Video Gallery</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Award Ceremony Videos</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Watch our journey to excellence through award acceptance speeches, CEO interviews, and behind-the-scenes
            moments that showcase our commitment to delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Categories</h2>
            <p className="text-lg text-gray-600">Explore different types of content from our video library</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <Badge className={category.color}>{category.count} videos</Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Play className="h-6 w-6 text-red-600" />
              <Badge className="bg-red-100 text-red-800">Featured Content</Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Award Ceremony Highlights</h2>
            <p className="text-lg text-gray-600">
              Watch our most significant moments of industry recognition and achievement
            </p>
          </div>

          <AwardVideos showAll={true} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Be Part of Our Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the thousands of investors who have chosen Pinnacle Wealth as their trusted investment partner. Start
            your journey to financial success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/investment">Start Investing Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
