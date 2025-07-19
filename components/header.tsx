"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { useIsMobile } from "@/hooks/use-mobile"
import { siteConfig } from "@/config/site"

export function Header() {
  const isMobile = useIsMobile()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/pinnacle-wealth-logo.png"
              alt="Pinnacle Wealth Logo"
              width={120}
              height={40}
              className="h-8 w-auto hover:opacity-80 transition-opacity"
              priority
            />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          {!isMobile && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </nav>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
