"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User, LogOut, Settings, Home, Briefcase, Users, Award, MessageSquare, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MobileNavProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
  isAuthenticated?: boolean
}

export function MobileNav({ user, isAuthenticated = false }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  const navigationItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Services", href: "/service", icon: Briefcase },
    { title: "About Us", href: "/about", icon: Users },
    { title: "Team", href: "/team", icon: Users },
    { title: "Awards", href: "/awards", icon: Award },
    { title: "Testimonials", href: "/testimonials", icon: MessageSquare },
    { title: "Contact", href: "/contact", icon: Phone },
  ]

  const userMenuItems = [
    { title: "Dashboard", href: "/dashboard", icon: Home },
    { title: "Profile", href: "/profile", icon: User },
    { title: "Settings", href: "/profile/settings", icon: Settings },
  ]

  const handleLinkClick = () => {
    setOpen(false)
  }

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" })
      window.location.href = "/"
    } catch (error) {
      console.error("Sign out error:", error)
    }
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open mobile menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 pb-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/pinnacle-wealth-logo.png"
                alt="Pinnacle Wealth Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <SheetTitle className="text-left font-bold text-lg">{siteConfig.name}</SheetTitle>
            </div>
          </SheetHeader>

          <Separator />

          {/* User Section */}
          {isAuthenticated && user && (
            <>
              <div className="p-6 pb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            {/* User Menu Items (if authenticated) */}
            {isAuthenticated && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Account</h3>
                <nav className="space-y-1">
                  {userMenuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>
            )}

            {isAuthenticated && <Separator />}

            {/* Main Navigation */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Navigation</h3>
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t">
            {isAuthenticated ? (
              <Button onClick={handleSignOut} variant="outline" className="w-full justify-start bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/auth/signin" onClick={handleLinkClick}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/auth/signup" onClick={handleLinkClick}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
