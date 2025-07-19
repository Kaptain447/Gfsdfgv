"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Site-wide navigation links.
 */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close mobile drawer on route change
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Image src="/pinnacle-wealth-logo.png" alt="Pinnacle Wealth" width={32} height={32} priority />
          Pinnacle&nbsp;Wealth
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === href ? "text-blue-600" : "text-gray-700",
              )}
            >
              {label}
            </Link>
          ))}
          <Button asChild className="ml-4 hidden md:inline-flex">
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((p) => !p)}
          className="rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          <nav className="space-y-2 border-t bg-white px-4 py-4 shadow-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block rounded-md px-2 py-2 text-sm font-medium",
                  pathname === href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50",
                )}
              >
                {label}
              </Link>
            ))}

            <Button asChild className="w-full">
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  default export for `import Header from "@/components/header"`      */
/* ------------------------------------------------------------------ */
export default Header
