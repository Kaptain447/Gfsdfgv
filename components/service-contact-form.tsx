"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  newsletter: boolean
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ServiceContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false,
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const [pending, setPending] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setPending(true)
    setStatus({ type: "loading", message: "Sending your message..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        })
        toast({ title: "Sent!", description: "We will get back to you shortly." })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          newsletter: false,
        })
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      })
      toast({ title: "Error", description: "Unable to send your message.", variant: "destructive" })
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
        <CardDescription className="text-gray-600">
          Ready to start your investment journey? Contact our experts today for personalized guidance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={status.type === "loading" || pending}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={status.type === "loading" || pending}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                disabled={status.type === "loading" || pending}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Interest</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleInputChange("service", value)}
                disabled={status.type === "loading" || pending}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investment-planning">Investment Planning</SelectItem>
                  <SelectItem value="portfolio-management">Portfolio Management</SelectItem>
                  <SelectItem value="financial-advisory">Financial Advisory</SelectItem>
                  <SelectItem value="retirement-planning">Retirement Planning</SelectItem>
                  <SelectItem value="wealth-management">Wealth Management</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your investment goals and how we can help you..."
              rows={4}
              required
              disabled={status.type === "loading" || pending}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              disabled={status.type === "loading" || pending}
            />
            <Label htmlFor="newsletter" className="text-sm text-gray-600">
              Subscribe to our newsletter for investment tips and market insights
            </Label>
          </div>

          {status.type !== "idle" && (
            <Alert
              className={
                status.type === "success"
                  ? "border-green-200 bg-green-50"
                  : status.type === "error"
                    ? "border-red-200 bg-red-50"
                    : ""
              }
            >
              {status.type === "success" && <CheckCircle className="h-4 w-4 text-green-600" />}
              {status.type === "error" && <AlertCircle className="h-4 w-4 text-red-600" />}
              <AlertDescription
                className={status.type === "success" ? "text-green-800" : status.type === "error" ? "text-red-800" : ""}
              >
                {status.message}
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold transition-all duration-300"
            disabled={status.type === "loading" || pending}
          >
            {status.type === "loading" || pending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
