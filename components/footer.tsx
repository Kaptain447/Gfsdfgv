"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/pinnacle-wealth-logo.png"
                alt="Pinnacle Wealth"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Award-winning investment platform with 10+ years of experience, serving 50K+ clients worldwide with
              regulated and secure trading solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/investment" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Investment Plans
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/awards" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Awards & Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/withdrawal-request" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Withdrawal Request
                </Link>
              </li>
              <li>
                <Link href="/withdrawal-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Withdrawal Policy
                </Link>
              </li>
              <li>
                <Link href="/withdrawal-history" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Transaction History
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/video-gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Company Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Financial District
                    <br />
                    New York, NY 10004
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">support@pinnaclewealth.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-400 text-sm">Active Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-2xl font-bold text-white">$2.5B+</span>
              </div>
              <p className="text-gray-400 text-sm">Assets Managed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <p className="text-gray-400 text-sm">Industry Awards</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 Pinnacle Wealth. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
