"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  Award,
  Globe,
  Shield,
  Zap,
  Building,
  Target,
  Star,
  Trophy,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useEffect, useRef, useState, useCallback } from "react"

const timelineData = [
  {
    year: "2014",
    title: "Company Founded",
    description:
      "Pinnacle Wealth was established by a team of Wall Street veterans with a vision to democratize professional trading.",
    icon: Building,
    category: "Foundation",
    color: "bg-blue-500",
  },
  {
    year: "2015",
    title: "First 100 Clients",
    description: "Reached our first milestone of 100 active investors, establishing trust in our trading strategies.",
    icon: Users,
    category: "Growth",
    color: "bg-green-500",
  },
  {
    year: "2016",
    title: "Regulatory Compliance",
    description: "Obtained full regulatory compliance and licensing, ensuring maximum security for client investments.",
    icon: Shield,
    category: "Compliance",
    color: "bg-purple-500",
  },
  {
    year: "2017",
    title: "$10M Assets Under Management",
    description:
      "Crossed the $10 million threshold in total assets under management, proving our investment strategies.",
    icon: DollarSign,
    category: "Milestone",
    color: "bg-yellow-500",
  },
  {
    year: "2018",
    title: "International Expansion",
    description: "Expanded operations globally, serving clients across 15 countries with localized support.",
    icon: Globe,
    category: "Expansion",
    color: "bg-indigo-500",
  },
  {
    year: "2019",
    title: "Technology Innovation Award",
    description:
      "Received the FinTech Innovation Award for our proprietary trading algorithms and platform technology.",
    icon: Zap,
    category: "Recognition",
    color: "bg-orange-500",
  },
  {
    year: "2020",
    title: "1,000+ Active Investors",
    description: "Reached 1,000 active investors milestone despite global market challenges, demonstrating resilience.",
    icon: Target,
    category: "Growth",
    color: "bg-green-500",
  },
  {
    year: "2021",
    title: "Best Trading Platform Award",
    description:
      "Won the 'Best Trading Platform' award from Financial Excellence Awards for user experience and performance.",
    icon: Trophy,
    category: "Recognition",
    color: "bg-gold-500",
  },
  {
    year: "2022",
    title: "$100M Assets Milestone",
    description:
      "Achieved $100 million in assets under management, establishing ourselves as a major player in the industry.",
    icon: TrendingUp,
    category: "Milestone",
    color: "bg-blue-600",
  },
  {
    year: "2023",
    title: "Client Choice Excellence Award",
    description:
      "Received the Client Choice Excellence Award with 98% client satisfaction rating and industry-leading returns.",
    icon: Star,
    category: "Recognition",
    color: "bg-purple-600",
  },
  {
    year: "2024",
    title: "10,000+ Global Investors",
    description:
      "Reached 10,000+ active investors worldwide with $2.5B+ in total assets under management across 50+ countries.",
    icon: Award,
    category: "Achievement",
    color: "bg-emerald-600",
  },
]

const categoryColors = {
  Foundation: "bg-blue-100 text-blue-800",
  Growth: "bg-green-100 text-green-800",
  Compliance: "bg-purple-100 text-purple-800",
  Milestone: "bg-yellow-100 text-yellow-800",
  Expansion: "bg-indigo-100 text-indigo-800",
  Recognition: "bg-orange-100 text-orange-800",
  Achievement: "bg-emerald-100 text-emerald-800",
}

interface TimelineItemProps {
  item: (typeof timelineData)[0]
  index: number
  isActive?: boolean
  isMobile?: boolean
}

function TimelineItem({ item, index, isActive = false, isMobile = false }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)
  const IconComponent = item.icon

  useEffect(() => {
    if (isMobile && isActive) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [index, isMobile, isActive])

  if (isMobile) {
    return (
      <div className="flex-shrink-0 w-full px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Timeline dot with pulse animation */}
          <div
            className={`flex items-center justify-center w-20 h-20 rounded-full ${item.color} shadow-lg transition-all duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          >
            <IconComponent className="w-10 h-10 text-white" />
            {/* Pulse ring animation */}
            <div
              className={`absolute inset-0 rounded-full ${item.color} opacity-30 transition-all duration-1000 ${
                isVisible ? "animate-ping" : ""
              }`}
              style={{ animationDuration: "2s" }}
            ></div>
          </div>

          {/* Content card */}
          <Card
            className={`w-full shadow-lg transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader className="text-center">
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Badge
                    variant="outline"
                    className={`text-xl font-bold px-4 py-2 transition-all duration-300 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                  >
                    {item.year}
                  </Badge>
                  <Badge
                    className={`${categoryColors[item.category as keyof typeof categoryColors]} transition-all duration-300 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                  >
                    {item.category}
                  </Badge>
                </div>
                <CardTitle
                  className={`text-2xl transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  {item.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription
                className={`text-lg leading-relaxed transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start space-x-6 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${index % 2 === 0 ? "translate-x-8" : "-translate-x-8"} translate-y-4`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot with pulse animation */}
      <div
        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${item.color} shadow-lg transition-all duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      >
        <IconComponent className="w-8 h-8 text-white" />
        {/* Pulse ring animation */}
        <div
          className={`absolute inset-0 rounded-full ${item.color} opacity-30 transition-all duration-1000 ${
            isVisible ? "animate-ping" : ""
          }`}
          style={{ animationDelay: `${index * 150 + 500}ms`, animationDuration: "2s" }}
        ></div>
      </div>

      {/* Content card with hover animations */}
      <div className="flex-1 min-w-0">
        <Card
          className={`shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 150 + 100}ms` }}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Badge
                    variant="outline"
                    className={`text-lg font-bold px-3 py-1 transition-all duration-300 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {item.year}
                  </Badge>
                  <Badge
                    className={`${categoryColors[item.category as keyof typeof categoryColors]} transition-all duration-300 ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 400}ms` }}
                  >
                    {item.category}
                  </Badge>
                </div>
                <CardTitle
                  className={`text-xl transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  {item.title}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription
              className={`text-base leading-relaxed transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function CompanyTimeline() {
  const [timelineVisible, setTimelineVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const mobileTimelineRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNext = useCallback(() => {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex])

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (isMobile) {
    return (
      <div className="max-w-4xl mx-auto" ref={timelineRef}>
        <div className="relative">
          {/* Mobile Timeline Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium text-gray-600">
                {currentIndex + 1} of {timelineData.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                disabled={currentIndex === timelineData.length - 1}
                className="rounded-full w-10 h-10 p-0 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">Swipe left or right to navigate</p>
          </div>

          {/* Mobile Timeline Container */}
          <div
            ref={mobileTimelineRef}
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  item={item}
                  index={index}
                  isActive={index === currentIndex}
                  isMobile={true}
                />
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Swipe Hint Animation */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm animate-pulse">
              <ChevronLeft className="w-4 h-4" />
              <span>Swipe to navigate</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto" ref={timelineRef}>
      <div className="relative">
        {/* Animated timeline line */}
        <div
          className={`absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transition-all duration-2000 ease-out ${
            timelineVisible ? "bottom-0 opacity-100" : "bottom-full opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        ></div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
