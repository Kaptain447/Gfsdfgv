"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, CheckCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// ─────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────
const quickContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type QuickContactFormData = z.infer<typeof quickContactSchema>

// ─────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────
interface ServiceContactFormProps {
  serviceName: string
  serviceDescription?: string
  triggerText?: string
  triggerClassName?: string
}

// ─────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────
export function ServiceContactForm({
  serviceName,
  serviceDescription,
  triggerText = "Request Consultation",
  triggerClassName = "bg-blue-600 hover:bg-blue-700 text-white",
}: ServiceContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<QuickContactFormData>({
    resolver: zodResolver(quickContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: serviceName,
      message: "",
    },
  })

  // ───────────────────────────────────────────────────────────────────────
  // Submit handler
  // ───────────────────────────────────────────────────────────────────────
  const onSubmit = async (data: QuickContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const { error } = await res.json()
        throw new Error(error ?? "Failed to send your request.")
      }

      // Success
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setIsOpen(false)
        form.reset()
      }, 3000)
    } catch (error) {
      console.error(error)
      setSubmitError(error instanceof Error ? error.message : "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // ───────────────────────────────────────────────────────────────────────
  // UI
  // ───────────────────────────────────────────────────────────────────────
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{triggerText}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        {/* Header */}
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Request {serviceName} Consultation
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            {serviceDescription ??
              `Fill out the form below and our expert team will contact you within 24 hours to discuss your ${serviceName.toLowerCase()} needs.`}
          </DialogDescription>
        </DialogHeader>

        {/* Success State */}
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Request Submitted!</h3>
            <p className="text-gray-600 text-sm">
              Thank you for your interest. Our team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          // Form
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
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
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Service */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interest *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Real Estate Investment Advisory">Real Estate Investment Advisory</SelectItem>
                        <SelectItem value="Stock Market Investment Strategies">
                          Stock Market Investment Strategies
                        </SelectItem>
                        <SelectItem value="Property Management">Property Management</SelectItem>
                        <SelectItem value="Real Estate Development Consulting">
                          Real Estate Development Consulting
                        </SelectItem>
                        <SelectItem value="Portfolio Diversification & Risk Management">
                          Portfolio Diversification &amp; Risk Management
                        </SelectItem>
                        <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                        <SelectItem value="General Consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your investment goals and requirements..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Error */}
              {submitError && <div className="text-red-500 text-sm text-center">{submitError}</div>}

              {/* Submit */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}
