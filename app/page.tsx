import Link from "next/link"
import Image from "next/image"
import { Suspense, lazy } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon, CheckCircleIcon, StarIcon, UsersIcon } from "lucide-react"

// Lazy load non-critical components
const TestimonialsSection = lazy(() =>
  import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
)
const AwardsCertifications = lazy(() =>
  import("@/components/awards-certifications").then((mod) => ({ default: mod.AwardsCertifications })),
)
const ServiceContactForm = lazy(() => import("@/components/service-contact-form"))

// Loading fallback component
function SectionSkeleton() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactFormSkeleton() {
  return (
    <div className="max-w-screen-md mx-auto px-4 pb-24">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section - Critical, load immediately */}
      <section className="relative w-full h-[600px] bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-family.jpg"
          alt="Happy family investing"
          fill
          sizes="100vw"
          quality={90}
          className="absolute inset-0 z-0 opacity-30 object-cover"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Invest in Your Future with Pinnacle Wealth
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Unlock unparalleled financial growth with expert guidance, innovative tools, and a secure platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/investment">Start Investing</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section - Critical, load immediately */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
          <p className="mt-4 text-lg">Professional services at your fingertips.</p>
        </div>
      </section>

      {/* Contact form section - Lazy loaded */}
      <Suspense fallback={<ContactFormSkeleton />}>
        <section className="max-w-screen-md mx-auto px-4 pb-24">
          <ServiceContactForm />
        </section>
      </Suspense>

      {/* Features Section - Critical, load immediately */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Pinnacle Wealth?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle className="text-xl font-semibold mb-3">Expert Guidance</CardTitle>
              <CardContent className="text-gray-600">
                Benefit from personalized advice and strategies from our seasoned financial experts.
              </CardContent>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <StarIcon className="h-12 w-12 text-yellow-500 mb-4" />
              <CardTitle className="text-xl font-semibold mb-3">Innovative Platform</CardTitle>
              <CardContent className="text-gray-600">
                Access cutting-edge tools and technology for seamless and efficient investing.
              </CardContent>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <UsersIcon className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold mb-3">Client-Centric Approach</CardTitle>
              <CardContent className="text-gray-600">
                Your financial goals are our priority. We build lasting relationships based on trust.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      {/* Call to Action Section - Critical for conversion */}
      <section className="py-16 md:py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Wealth?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of satisfied investors who are achieving their financial dreams with Pinnacle Wealth.
          </p>
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/auth/signup">Open an Account Today</Link>
          </Button>
        </div>
      </section>

      {/* Awards and Certifications Section - Lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <AwardsCertifications />
      </Suspense>

      {/* Services Overview Section - Critical for SEO and navigation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="text-2xl font-semibold mb-3">Investment Planning</CardTitle>
              <CardContent className="text-gray-600 mb-4">
                Tailored strategies to meet your unique financial objectives, from retirement to wealth accumulation.
              </CardContent>
              <Button asChild variant="link" className="px-0 text-blue-600 hover:text-blue-800">
                <Link href="/service/investment-planning">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </Card>
            <Card className="p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="text-2xl font-semibold mb-3">Portfolio Management</CardTitle>
              <CardContent className="text-gray-600 mb-4">
                Active management of your investments to optimize returns and minimize risks.
              </CardContent>
              <Button asChild variant="link" className="px-0 text-blue-600 hover:text-blue-800">
                <Link href="/service/portfolio-management">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </Card>
            <Card className="p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardTitle className="text-2xl font-semibold mb-3">Financial Advisory</CardTitle>
              <CardContent className="text-gray-600 mb-4">
                Comprehensive advice on all aspects of your financial life, including taxes and estate planning.
              </CardContent>
              <Button asChild variant="link" className="px-0 text-blue-600 hover:text-blue-800">
                <Link href="/service/financial-advisory">
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
