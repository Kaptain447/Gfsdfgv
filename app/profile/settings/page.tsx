"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save, User, MapPin, Globe, Bell, Shield, Eye, Trash2, Download, CheckCircle } from "lucide-react"

export default function ProfileSettingsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    dateOfBirth: "",
    bio: "",
    website: "",
    linkedin: "",
    twitter: "",
    language: "en",
    timezone: "UTC",
    currency: "USD",
    emailNotifications: true, // General email notifications toggle
    smsNotifications: false,
    marketingEmails: true,
    securityAlerts: true,
    investmentUpdates: true,
    weeklyReports: true,
    twoFactorEnabled: false,
    profileVisibility: "private",
  })

  // Define the types of email notifications based on existing templates
  const emailNotificationTypes = [
    { id: "confirmation", name: "Withdrawal Confirmation" },
    { id: "processing", name: "Withdrawal Processing" },
    { id: "underReview", name: "Withdrawal Under Review" },
    { id: "completed", name: "Withdrawal Completed" },
    { id: "failed", name: "Withdrawal Failed" },
    { id: "cancelled", name: "Withdrawal Cancelled" },
  ]

  // State to manage individual email preferences
  const [notificationPreferences, setNotificationPreferences] = useState<{ [key: string]: boolean }>(() => {
    const initialPreferences: { [key: string]: boolean } = {}
    emailNotificationTypes.forEach((type) => {
      initialPreferences[type.id] = true // Default all to enabled
    })
    return initialPreferences
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/signin")
      return
    }

    // Simulate loading existing user data and their notification preferences
    setFormData({
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      country: "United States",
      city: "New York",
      address: "123 Wall Street",
      postalCode: "10005",
      dateOfBirth: "1985-06-15",
      bio: "Experienced investor focused on long-term wealth building and portfolio diversification.",
      website: "https://johnsmith.com",
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "@johnsmith",
      language: "en",
      timezone: "America/New_York",
      currency: "USD",
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
      securityAlerts: true,
      investmentUpdates: true,
      weeklyReports: true,
      twoFactorEnabled: true,
      profileVisibility: "private",
    })
    // Simulate loading notification preferences
    setNotificationPreferences({
      confirmation: true,
      processing: true,
      underReview: false, // Example: user might have turned this off
      completed: true,
      failed: true,
      cancelled: true,
    })
    setLoading(false)
  }, [router])

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNotificationToggle = (id: string, checked: boolean) => {
    setNotificationPreferences((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage("")

    try {
      // Simulate API call to save all settings including new notification preferences
      console.log("Saving formData:", formData)
      console.log("Saving notificationPreferences:", notificationPreferences)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setMessage("Settings saved successfully!")
    } catch (error) {
      setMessage("Error saving settings. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleExportData = () => {
    // Simulate data export
    const data = JSON.stringify({ ...formData, notificationPreferences }, null, 2)
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "profile-data.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDeleteAccount = () => {
    const confirmed = confirm(
      "Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.",
    )
    if (confirmed) {
      // Simulate account deletion
      localStorage.clear()
      router.push("/")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading settings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link
                href="/profile"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Profile
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleExportData}>
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <Alert
            className={`mb-6 ${message.includes("Error") ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
          >
            <CheckCircle className={`h-4 w-4 ${message.includes("Error") ? "text-red-600" : "text-green-600"}`} />
            <AlertDescription className={message.includes("Error") ? "text-red-700" : "text-green-700"}>
              {message}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Address Information</span>
              </CardTitle>
              <CardDescription>Update your location and address details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Social Links</span>
              </CardTitle>
              <CardDescription>Add your social media profiles and website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    placeholder="@username"
                    value={formData.twitter}
                    onChange={(e) => handleInputChange("twitter", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>Customize your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={formData.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="CAD">CAD (C$)</SelectItem>
                      <SelectItem value="AUD">AUD (A$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="profileVisibility">Profile Visibility</Label>
                <Select
                  value={formData.profileVisibility}
                  onValueChange={(value) => handleInputChange("profileVisibility", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="contacts">Contacts Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Settings</span>
              </CardTitle>
              <CardDescription>Choose how you want to receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">General Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive general updates via email</p>
                  </div>
                  <Switch
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-gray-500">Receive urgent updates via SMS</p>
                  </div>
                  <Switch
                    checked={formData.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-gray-500">Receive promotional content and offers</p>
                  </div>
                  <Switch
                    checked={formData.marketingEmails}
                    onCheckedChange={(checked) => handleInputChange("marketingEmails", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Security Alerts</p>
                    <p className="text-sm text-gray-500">Receive security-related notifications</p>
                  </div>
                  <Switch
                    checked={formData.securityAlerts}
                    onCheckedChange={(checked) => handleInputChange("securityAlerts", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Investment Updates</p>
                    <p className="text-sm text-gray-500">Receive updates about your investments</p>
                  </div>
                  <Switch
                    checked={formData.investmentUpdates}
                    onCheckedChange={(checked) => handleInputChange("investmentUpdates", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-gray-500">Receive weekly portfolio summaries</p>
                  </div>
                  <Switch
                    checked={formData.weeklyReports}
                    onCheckedChange={(checked) => handleInputChange("weeklyReports", checked)}
                  />
                </div>

                <div className="pt-4 border-t border-gray-200 mt-4">
                  <h4 className="font-medium text-lg mb-4">Specific Email Notifications</h4>
                  {emailNotificationTypes.map((type) => (
                    <div key={type.id} className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">{type.name}</p>
                        <p className="text-sm text-gray-500">Receive emails for {type.name.toLowerCase()} events.</p>
                      </div>
                      <Switch
                        checked={notificationPreferences[type.id]}
                        onCheckedChange={(checked) => handleNotificationToggle(type.id, checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription>Manage your account security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={formData.twoFactorEnabled}
                  onCheckedChange={(checked) => handleInputChange("twoFactorEnabled", checked)}
                />
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  View Login Activity
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Download Account Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" onClick={handleDeleteAccount} className="w-full">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This action cannot be undone. All your data will be permanently deleted.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
