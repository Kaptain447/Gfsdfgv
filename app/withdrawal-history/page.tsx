import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileNav } from "@/components/mobile-nav"
import { WithdrawalHistory } from "@/components/withdrawal-history"

export default function WithdrawalHistoryPage() {
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
              <Link href="/team" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600">
                Testimonials
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
        <section className="text-center py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Withdrawal History</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Track and manage all your withdrawal transactions with detailed status updates, processing times, and
            complete transaction history.
          </p>
        </section>

        {/* Withdrawal History Component */}
        <WithdrawalHistory />
      </main>
    </div>
  )
}
