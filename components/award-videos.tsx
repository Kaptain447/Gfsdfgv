"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Clock, Award, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VideoData {
  id: string
  title: string
  description: string
  duration: string
  category: string
  event: string
  location: string
  date: string
  speaker: string
  videoUrl: string
  posterUrl: string
}

const videoData: VideoData[] = [
  {
    id: "fintech-award-speech",
    title: "FinTech Excellence Award Acceptance Speech",
    description: "CEO Michael Johnson accepts the prestigious FinTech Excellence Award at the London Financial Summit.",
    duration: "3:45",
    category: "Award Speech",
    event: "London FinTech Awards 2023",
    location: "London, UK",
    date: "March 15, 2023",
    speaker: "Michael Johnson, CEO",
    videoUrl: "/videos/awards/fintech-award-speech.mp4",
    posterUrl: "/images/awards/fintech-award-ceremony.jpg",
  },
  {
    id: "ceo-interview-excellence",
    title: "CEO Interview: Building Trust in Financial Services",
    description: "Exclusive interview discussing Pinnacle Wealth's commitment to transparency and client success.",
    duration: "8:20",
    category: "Interview",
    event: "Financial Times Interview",
    location: "New York, USA",
    date: "June 8, 2023",
    speaker: "Michael Johnson, CEO",
    videoUrl: "/videos/awards/ceo-interview-excellence.mp4",
    posterUrl: "/images/awards/excellence-award-stage.jpg",
  },
  {
    id: "team-celebration-backstage",
    title: "Team Celebration: Client Choice Award",
    description:
      "Behind-the-scenes celebration as Pinnacle Wealth wins the Client Choice Award for outstanding service.",
    duration: "2:15",
    category: "Celebration",
    event: "Investment Excellence Awards",
    location: "Singapore",
    date: "September 22, 2023",
    speaker: "Pinnacle Wealth Team",
    videoUrl: "/videos/awards/team-celebration-backstage.mp4",
    posterUrl: "/images/awards/team-award-photo.jpg",
  },
  {
    id: "innovation-award-presentation",
    title: "Innovation in Trading Technology Presentation",
    description: "Technical presentation showcasing Pinnacle Wealth's breakthrough trading platform innovations.",
    duration: "12:30",
    category: "Presentation",
    event: "TechFinance Innovation Summit",
    location: "Dubai, UAE",
    date: "November 10, 2023",
    speaker: "Sarah Chen, CTO",
    videoUrl: "/videos/awards/innovation-award-presentation.mp4",
    posterUrl: "/images/awards/innovation-trophy.jpg",
  },
  {
    id: "client-choice-acceptance",
    title: "Client Choice Award Acceptance",
    description:
      "Heartfelt acceptance speech for the Client Choice Award, emphasizing our commitment to client success.",
    duration: "4:55",
    category: "Award Speech",
    event: "Global Investment Awards",
    location: "Frankfurt, Germany",
    date: "October 5, 2023",
    speaker: "Michael Johnson, CEO",
    videoUrl: "/videos/awards/client-choice-acceptance.mp4",
    posterUrl: "/images/awards/client-choice-ceremony.jpg",
  },
]

export function AwardVideos() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set())
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const handlePlayPause = async (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    try {
      // Pause all other videos first
      Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
        if (id !== videoId && videoEl && !videoEl.paused) {
          videoEl.pause()
        }
      })

      if (video.paused) {
        await video.play()
        setPlayingVideo(videoId)
      } else {
        video.pause()
        setPlayingVideo(null)
      }
    } catch (error) {
      // Ignore AbortError and other play interruptions
      console.log("Video play interrupted:", error)
    }
  }

  const handleMuteToggle = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    video.muted = !video.muted
    const newMutedVideos = new Set(mutedVideos)
    if (video.muted) {
      newMutedVideos.add(videoId)
    } else {
      newMutedVideos.delete(videoId)
    }
    setMutedVideos(newMutedVideos)
  }

  const handleFullscreen = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    if (video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Award Speech":
        return <Award className="h-4 w-4" />
      case "Interview":
        return <Users className="h-4 w-4" />
      case "Celebration":
        return <Trophy className="h-4 w-4" />
      case "Presentation":
        return <Play className="h-4 w-4" />
      default:
        return <Play className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Award Speech":
        return "bg-yellow-100 text-yellow-800"
      case "Interview":
        return "bg-blue-100 text-blue-800"
      case "Celebration":
        return "bg-green-100 text-green-800"
      case "Presentation":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Award Ceremony Videos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Watch exclusive footage from our award ceremonies, acceptance speeches, and behind-the-scenes celebrations as
          Pinnacle Wealth receives recognition for excellence in financial services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videoData.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                className="w-full aspect-video object-cover"
                poster={video.posterUrl}
                onEnded={() => setPlayingVideo(null)}
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <Button
                    size="lg"
                    className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16"
                    onClick={() => handlePlayPause(video.id)}
                  >
                    {playingVideo === video.id ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                  </Button>
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <Badge className={`${getCategoryColor(video.category)} flex items-center gap-1`}>
                  {getCategoryIcon(video.category)}
                  {video.category}
                </Badge>
                <Badge variant="secondary" className="bg-black/70 text-white flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </Badge>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black/70 hover:bg-black/80 text-white"
                  onClick={() => handleMuteToggle(video.id)}
                >
                  {mutedVideos.has(video.id) ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-black/70 hover:bg-black/80 text-white"
                  onClick={() => handleFullscreen(video.id)}
                >
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.description}</p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span className="font-medium">Event:</span>
                  <span>{video.event}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{video.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{video.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Speaker:</span>
                  <span>{video.speaker}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Award-Winning Platform?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Experience the same excellence that has earned us industry recognition. Start your investment journey with
          Pinnacle Wealth today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Investing Now
          </Button>
          <Button size="lg" variant="outline">
            Learn More About Our Awards
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AwardVideos
