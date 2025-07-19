"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Briefcase,
  Calendar,
  Globe,
  Shield,
  Award,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  investmentAmount: z.string().optional(),
  timeframe: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.string().min(1, "Please select your preferred contact method"),
  newsletter: z.boolean().default(false),
  terms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      investmentAmount: "",
      timeframe: "",
      message: "",
      preferredContact: "",
      newsletter: false,
      terms: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-white shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Interest!</h2>
              <p className="text-gray-600 mb-6">
                We've received your service request and will get back to you within 24 hours. Our team is excited to
                help you achieve your financial goals.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">What happens next?</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Our team will review your request within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>A dedicated advisor will contact you within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>We'll schedule a personalized consultation</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                  Submit Another Request
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/")}>
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Our Expert Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your investment journey? Get in touch with our financial experts for personalized service
              recommendations and consultation.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Support</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Support</h4>
                    <p className="text-gray-600">support@pinnaclewealth.com</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Address</h4>
                    <p className="text-gray-600">123 Financial District</p>
                    <p className="text-gray-600">New York, NY 10004</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 8:00 PM EST</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Why Choose Famous FX?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">SEC Regulated & Fully Licensed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">50,000+ Satisfied Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">Global Investment Opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Award-Winning Platform</span>
                </div>
              </CardContent>
            </Card>

            {/* Service Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  <Badge variant="outline" className="justify-start p-2">
                    Real Estate Investment
                  </Badge>
                  <Badge variant="outline" className="justify-start p-2">
                    Stock Market Strategies
                  </Badge>
                  <Badge variant="outline" className="justify-start p-2">
                    Property Management
                  </Badge>
                  <Badge variant="outline" className="justify-start p-2">
                    Portfolio Diversification
                  </Badge>
                  <Badge variant="outline" className="justify-start p-2">
                    Development Consulting
                  </Badge>
                  <Badge variant="outline" className="justify-start p-2">
                    Social Media Marketing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
                  <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                  Request Service Consultation
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our expert team will contact you within 24 hours to discuss your
                  investment needs.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="Enter your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company/Organization (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Service Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Service Requirements</h3>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the service you're interested in" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="real-estate-investment">Real Estate Investment Advisory</SelectItem>
                                <SelectItem value="stock-market-strategies">
                                  Stock Market Investment Strategies
                                </SelectItem>
                                <SelectItem value="property-management">Property Management</SelectItem>
                                <SelectItem value="development-consulting">
                                  Real Estate Development Consulting
                                </SelectItem>
                                <SelectItem value="portfolio-diversification">
                                  Portfolio Diversification & Risk Management
                                </SelectItem>
                                <SelectItem value="social-media-marketing">
                                  Social Media Marketing for Real Estate & Investment
                                </SelectItem>
                                <SelectItem value="multiple-services">Multiple Services</SelectItem>
                                <SelectItem value="general-consultation">General Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="investmentAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Investment Amount Range</FormLabel>
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select investment range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-10k">Under $10,000</SelectItem>
                                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                                  <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                                  <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeframe"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Investment Timeframe</FormLabel>
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeframe" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                                  <SelectItem value="short-term">Short-term (1-6 months)</SelectItem>
                                  <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                                  <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                                  <SelectItem value="exploring">Just exploring options</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Message and Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Additional Information</h3>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your investment goals, specific requirements, or any questions you have..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Method *</FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="How would you like us to contact you?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone Call</SelectItem>
                                <SelectItem value="text">Text Message</SelectItem>
                                <SelectItem value="video-call">Video Call</SelectItem>
                                <SelectItem value="in-person">In-Person Meeting</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Agreements */}
                    <div className="space-y-4">
                      <div className="border-t pt-4">
                        <FormField
                          control={form.control}
                          name="newsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  Subscribe to our newsletter for market insights and investment tips
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  I agree to the{" "}
                                  <a href="/terms" className="text-blue-600 hover:underline">
                                    Terms of Service
                                  </a>{" "}
                                  and{" "}
                                  <a href="/privacy" className="text-blue-600 hover:underline">
                                    Privacy Policy
                                  </a>{" "}
                                  *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Service Request
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our team of financial experts is standing by to help you achieve your investment goals. With over 10
                  years of experience and $2.5B+ in assets under management, we're here to guide you every step of the
                  way.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Consultation</h4>
                  <p className="text-sm text-gray-600">
                    Get a one-on-one consultation with our expert advisors tailored to your specific needs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Custom Strategy</h4>
                  <p className="text-sm text-gray-600">
                    Receive a personalized investment strategy designed to meet your financial objectives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ongoing Support</h4>
                  <p className="text-sm text-gray-600">
                    Enjoy continuous support and regular portfolio reviews to ensure optimal performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
