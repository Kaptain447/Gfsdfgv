"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Users,
  UserPlus,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Award,
  Gift,
  Eye,
  MessageCircle,
} from "lucide-react"

interface Client {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  status: "active" | "inactive" | "pending"
  relationshipType: "direct" | "referral" | "network"
  totalInvestment: number
  joinDate: string
  lastContact: string
  referralCode?: string
  referredBy?: string
  notes: string
}

interface Referral {
  id: string
  referredClientName: string
  referredClientEmail: string
  investmentAmount: number
  commissionEarned: number
  status: "pending" | "confirmed" | "paid"
  dateReferred: string
}

interface Commission {
  id: string
  type: "referral" | "bonus"
  amount: number
  description: string
  status: "paid" | "processing" | "pending"
  date: string
  clientName?: string
}

export default function ClientsPage() {
  const { toast } = useToast()
  const [clients, setClients] = useState<Client[]>([])
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [commissions, setCommissions] = useState<Commission[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [relationshipFilter, setRelationshipFilter] = useState<string>("all")
  const [isAddClientOpen, setIsAddClientOpen] = useState(false)
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    relationshipType: "direct",
    notes: "",
  })

  // Mock data
  useEffect(() => {
    const mockClients: Client[] = [
      {
        id: "1",
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@email.com",
        phone: "+1 (555) 123-4567",
        location: "New York, NY",
        status: "active",
        relationshipType: "direct",
        totalInvestment: 50000,
        joinDate: "2024-01-15",
        lastContact: "2024-01-10",
        notes: "High-value client interested in growth investments",
      },
      {
        id: "2",
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 234-5678",
        location: "Los Angeles, CA",
        status: "active",
        relationshipType: "referral",
        totalInvestment: 25000,
        joinDate: "2024-01-20",
        lastContact: "2024-01-08",
        referredBy: "John Smith",
        notes: "Referred by John Smith, conservative investor",
      },
      {
        id: "3",
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@email.com",
        phone: "+1 (555) 345-6789",
        location: "Chicago, IL",
        status: "pending",
        relationshipType: "network",
        totalInvestment: 0,
        joinDate: "2024-01-12",
        lastContact: "2024-01-12",
        notes: "Potential client from networking event",
      },
    ]

    const mockReferrals: Referral[] = [
      {
        id: "1",
        referredClientName: "Sarah Johnson",
        referredClientEmail: "sarah.johnson@email.com",
        investmentAmount: 25000,
        commissionEarned: 500,
        status: "paid",
        dateReferred: "2024-01-20",
      },
      {
        id: "2",
        referredClientName: "David Wilson",
        referredClientEmail: "david.wilson@email.com",
        investmentAmount: 15000,
        commissionEarned: 300,
        status: "confirmed",
        dateReferred: "2024-01-08",
      },
    ]

    const mockCommissions: Commission[] = [
      {
        id: "1",
        type: "referral",
        amount: 500,
        description: "Referral commission for Sarah Johnson",
        status: "paid",
        date: "2024-01-25",
        clientName: "Sarah Johnson",
      },
      {
        id: "2",
        type: "referral",
        amount: 300,
        description: "Referral commission for David Wilson",
        status: "processing",
        date: "2024-01-10",
        clientName: "David Wilson",
      },
      {
        id: "3",
        type: "bonus",
        amount: 1000,
        description: "5 referrals milestone bonus",
        status: "paid",
        date: "2024-01-01",
      },
    ]

    setClients(mockClients)
    setReferrals(mockReferrals)
    setCommissions(mockCommissions)
  }, [])

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || client.status === statusFilter
    const matchesRelationship = relationshipFilter === "all" || client.relationshipType === relationshipFilter
    return matchesSearch && matchesStatus && matchesRelationship
  })

  const handleAddClient = () => {
    if (!newClient.firstName || !newClient.lastName || !newClient.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const client: Client = {
      id: Date.now().toString(),
      ...newClient,
      status: "pending",
      totalInvestment: 0,
      joinDate: new Date().toISOString().split("T")[0],
      lastContact: new Date().toISOString().split("T")[0],
    }

    setClients([...clients, client])
    setNewClient({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      relationshipType: "direct",
      notes: "",
    })
    setIsAddClientOpen(false)
    toast({
      title: "Success",
      description: "Client added successfully",
    })
  }

  const totalClients = clients.length
  const totalReferrals = referrals.length
  const totalCommissionEarned = commissions.filter((c) => c.status === "paid").reduce((sum, c) => sum + c.amount, 0)
  const pendingCommission = commissions.filter((c) => c.status === "processing").reduce((sum, c) => sum + c.amount, 0)

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Client Management</h1>
        <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={newClient.firstName}
                    onChange={(e) => setNewClient({ ...newClient, firstName: e.target.value })}
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={newClient.lastName}
                    onChange={(e) => setNewClient({ ...newClient, lastName: e.target.value })}
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newClient.email}
                  onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                  placeholder="john.smith@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newClient.phone}
                  onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newClient.location}
                  onChange={(e) => setNewClient({ ...newClient, location: e.target.value })}
                  placeholder="New York, NY"
                />
              </div>
              <div>
                <Label htmlFor="relationshipType">Relationship Type</Label>
                <Select
                  value={newClient.relationshipType}
                  onValueChange={(value) => setNewClient({ ...newClient, relationshipType: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direct">Direct Client</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="network">Network Contact</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newClient.notes}
                  onChange={(e) => setNewClient({ ...newClient, notes: e.target.value })}
                  placeholder="Additional notes about the client..."
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddClientOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddClient}>Add Client</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalClients}</div>
            <p className="text-xs text-muted-foreground">Active relationships</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReferrals}</div>
            <p className="text-xs text-muted-foreground">Successful referrals</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCommissionEarned.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total earned to date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Commission</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingCommission.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Processing payments</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="clients" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="rewards">Rewards & Commission</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client List</CardTitle>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search clients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={relationshipFilter} onValueChange={setRelationshipFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="direct">Direct</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="network">Network</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div key={client.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold">
                            {client.firstName[0]}
                            {client.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {client.firstName} {client.lastName}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {client.email}
                            </span>
                            {client.phone && (
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {client.phone}
                              </span>
                            )}
                            {client.location && (
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {client.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold">${client.totalInvestment.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Total Investment</div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge
                            variant={
                              client.status === "active"
                                ? "default"
                                : client.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {client.status}
                          </Badge>
                          <Badge variant="outline">{client.relationshipType}</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    {client.notes && (
                      <div className="mt-3 text-sm text-muted-foreground border-t pt-3">
                        <strong>Notes:</strong> {client.notes}
                      </div>
                    )}
                    {client.referredBy && (
                      <div className="mt-2 text-sm text-muted-foreground">
                        <strong>Referred by:</strong> {client.referredBy}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Your Referral Code</h3>
                <div className="flex items-center space-x-2">
                  <code className="bg-blue-100 px-3 py-1 rounded text-blue-800 font-mono">REF-USER123</code>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Share this code with friends and earn 2% commission on their investments!
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold">Your Referrals</h3>
                {referrals.map((referral) => (
                  <div key={referral.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{referral.referredClientName}</h4>
                        <p className="text-sm text-muted-foreground">{referral.referredClientEmail}</p>
                        <p className="text-sm text-muted-foreground">
                          Referred on {new Date(referral.dateReferred).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${referral.investmentAmount.toLocaleString()}</div>
                        <div className="text-sm text-green-600">+${referral.commissionEarned} commission</div>
                        <Badge
                          variant={
                            referral.status === "paid"
                              ? "default"
                              : referral.status === "confirmed"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {referral.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold">5 Referrals Milestone</h4>
                      <p className="text-sm text-muted-foreground">Bonus: $1,000</p>
                    </div>
                  </div>
                  <Badge variant="default">Achieved</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold">10 Referrals Milestone</h4>
                      <p className="text-sm text-muted-foreground">Bonus: $2,500</p>
                    </div>
                  </div>
                  <Badge variant="outline">3 more needed</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold">25 Referrals Milestone</h4>
                      <p className="text-sm text-muted-foreground">Bonus: $10,000</p>
                    </div>
                  </div>
                  <Badge variant="outline">23 more needed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commission & Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900">Total Earned</h3>
                    <p className="text-2xl font-bold text-green-600">${totalCommissionEarned.toLocaleString()}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900">Processing</h3>
                    <p className="text-2xl font-bold text-yellow-600">${pendingCommission.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900">This Month</h3>
                    <p className="text-2xl font-bold text-blue-600">$800</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Payment History</h3>
                  {commissions.map((commission) => (
                    <div key={commission.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{commission.description}</h4>
                          {commission.clientName && (
                            <p className="text-sm text-muted-foreground">Client: {commission.clientName}</p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {new Date(commission.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">+${commission.amount}</div>
                          <Badge
                            variant={
                              commission.status === "paid"
                                ? "default"
                                : commission.status === "processing"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {commission.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
