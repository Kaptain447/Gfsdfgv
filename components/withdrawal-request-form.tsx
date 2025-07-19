"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Shield,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Info,
  Eye,
  EyeOff,
  Calculator,
  Clock,
  Lock,
  History,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"

// Form validation schema - updated for crypto only
const withdrawalSchema = z.object({
  accountNumber: z.string().min(8, "Account number must be at least 8 characters"),
  withdrawalAmount: z.string().refine((val) => {
    const num = Number.parseFloat(val)
    return !isNaN(num) && num >= 25 && num <= 1000000
  }, "Amount must be between $25 and $1,000,000"),
  withdrawalMethod: z.string().min(1, "Please select a withdrawal method"),
  // Crypto fields only
  cryptoAddress: z.string().min(1, "Crypto wallet address is required"),
  cryptoType: z.string().min(1, "Please select cryptocurrency type"),
  // Security
  twoFactorCode: z.string().min(6, "2FA code must be 6 digits").max(6, "2FA code must be 6 digits"),
  securityPin: z.string().min(4, "Security PIN must be at least 4 digits"),
  reason: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  confirmWithdrawal: z.boolean().refine((val) => val === true, "You must confirm the withdrawal request"),
})

type WithdrawalFormData = z.infer<typeof withdrawalSchema>

export function WithdrawalRequestForm() {
  const [showPin, setShowPin] = useState(false)
  const [calculatedFee, setCalculatedFee] = useState<number>(0)
  const [netAmount, setNetAmount] = useState<number>(0)
  const [processingTime, setProcessingTime] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [requestId, setRequestId] = useState<string>("")

  const form = useForm<WithdrawalFormData>({
    resolver: zodResolver(withdrawalSchema),
    defaultValues: {
      accountNumber: "",
      withdrawalAmount: "",
      withdrawalMethod: "",
      cryptoAddress: "",
      cryptoType: "",
      twoFactorCode: "",
      securityPin: "",
      reason: "",
      agreeToTerms: false,
      confirmWithdrawal: false,
    },
  })

  const watchedMethod = form.watch("withdrawalMethod")
  const watchedAmount = form.watch("withdrawalAmount")

  // Calculate fees and processing time - now zero fees for crypto
  const calculateFeeAndTime = (method: string, amount: string) => {
    const numAmount = Number.parseFloat(amount) || 0
    let fee = 0 // Zero fees for all crypto transactions
    let time = ""

    switch (method) {
      case "bitcoin":
        fee = 0
        time = "2-6 hours"
        break
      case "usdt":
        fee = 0
        time = "1-3 hours"
        break
      default:
        fee = 0
        time = ""
    }

    setCalculatedFee(fee)
    setNetAmount(numAmount - fee)
    setProcessingTime(time)
  }

  // Update calculations when method or amount changes
  useState(() => {
    if (watchedMethod && watchedAmount) {
      calculateFeeAndTime(watchedMethod, watchedAmount)
    }
  })

  const onSubmit = async (data: WithdrawalFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate mock request ID
    const mockRequestId = `WR${Date.now().toString().slice(-8)}`
    setRequestId(mockRequestId)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-8">
        <Card className="max-w-2xl mx-auto bg-white shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Withdrawal Request Submitted</h2>
            <p className="text-gray-600 mb-6">
              Your cryptocurrency withdrawal request has been successfully submitted and is now being processed by our
              team.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Request ID:</span>
                  <div className="font-bold text-gray-800">{requestId}</div>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                </div>
                <div>
                  <span className="text-gray-500">Amount:</span>
                  <div className="font-bold text-gray-800">${watchedAmount}</div>
                </div>
                <div>
                  <span className="text-gray-500">Expected Time:</span>
                  <div className="font-bold text-gray-800">{processingTime}</div>
                </div>
              </div>
            </div>

            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertDescription>
                You will receive email notifications about the status of your withdrawal request. You can also track the
                progress in your account dashboard.
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                Submit Another Request
              </Button>
              <Link href="/withdrawal-history">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent w-full sm:w-auto"
                >
                  <History className="w-4 h-4 mr-2" />
                  View Withdrawal History
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        {/* Account Information */}
        <Card className="bg-white shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-bold text-gray-800">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$45,250.00</div>
                <div className="text-gray-600">Available Balance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$8,750.00</div>
                <div className="text-gray-600">Profit Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">Growth Plan</div>
                <div className="text-gray-600">Account Type</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zero Fees Notice */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">🎉 Zero Transaction Fees!</h3>
            <p className="text-lg opacity-90">
              All cryptocurrency withdrawals are processed with ZERO fees. Keep 100% of your profits!
            </p>
          </CardContent>
        </Card>

        {/* Withdrawal Form */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
              Cryptocurrency Withdrawal Request
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Basic Information</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your account number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="withdrawalAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Withdrawal Amount (USD)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0.00"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e)
                                if (watchedMethod) {
                                  calculateFeeAndTime(watchedMethod, e.target.value)
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="withdrawalMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cryptocurrency Method</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value)
                            if (watchedAmount) {
                              calculateFeeAndTime(value, watchedAmount)
                            }
                          }}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select cryptocurrency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                            <SelectItem value="usdt">Tether USDT (TRC20)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Fee Calculator */}
                {watchedMethod && watchedAmount && (
                  <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                    <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                      <Calculator className="w-5 h-5 mr-2 text-green-600" />
                      Zero Fee Calculation
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Withdrawal Amount</div>
                        <div className="text-xl font-bold text-gray-800">
                          ${Number.parseFloat(watchedAmount).toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Processing Fee</div>
                        <div className="text-xl font-bold text-green-600">$0.00 (FREE!)</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Net Amount</div>
                        <div className="text-xl font-bold text-green-600">${netAmount.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Processing Time: {processingTime}
                    </div>
                  </div>
                )}

                {/* Cryptocurrency Details */}
                {watchedMethod && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Cryptocurrency Details</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="cryptoType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cryptocurrency Type</FormLabel>
                            <Select onValueChange={field.onChange} value={watchedMethod}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select cryptocurrency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                                <SelectItem value="usdt">Tether USDT (TRC20)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cryptoAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Wallet Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your wallet address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Crypto Network Information */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Important Network Information</h4>
                      {watchedMethod === "bitcoin" && (
                        <div className="text-sm text-blue-700">
                          <p>• Bitcoin withdrawals are processed on the Bitcoin mainnet</p>
                          <p>• Minimum withdrawal: $25 USD equivalent</p>
                          <p>• Processing time: 2-6 hours (depending on network congestion)</p>
                          <p>• Zero fees - you receive the full amount!</p>
                        </div>
                      )}
                      {watchedMethod === "usdt" && (
                        <div className="text-sm text-blue-700">
                          <p>• USDT withdrawals use TRC20 network (TRON)</p>
                          <p>• Minimum withdrawal: $25 USD equivalent</p>
                          <p>• Processing time: 1-3 hours</p>
                          <p>• Zero fees - you receive the full amount!</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Security Verification */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-blue-600" />
                    Security Verification
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="twoFactorCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Two-Factor Authentication Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter 6-digit code" maxLength={6} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="securityPin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Security PIN</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input type={showPin ? "text" : "password"} placeholder="Enter security PIN" {...field} />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPin(!showPin)}
                              >
                                {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Additional Information</h3>

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Withdrawal (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a reason for this withdrawal request..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms and Confirmation */}
                <div className="space-y-6">
                  <Separator />

                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <a href="/withdrawal-policy" className="text-blue-600 hover:underline">
                                cryptocurrency withdrawal terms and conditions
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmWithdrawal"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I confirm that all information provided is accurate and I authorize this cryptocurrency
                              withdrawal request
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Important:</strong> Cryptocurrency withdrawal requests cannot be cancelled once submitted.
                      Please ensure your wallet address is correct before proceeding. Transactions sent to incorrect
                      addresses cannot be recovered.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 px-12 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing Request...
                      </>
                    ) : (
                      <>
                        <DollarSign className="w-5 h-5 mr-2" />
                        Submit Cryptocurrency Withdrawal
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Cryptocurrency Withdrawals?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our support team is available 24/7 to assist you with your cryptocurrency withdrawal requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
