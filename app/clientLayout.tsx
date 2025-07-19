"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { usePathname } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Hide header and footer on auth, admin, and dashboard pages
  const hideNavigation =
    pathname?.startsWith("/auth") || pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard")

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            {!hideNavigation && <Header />}
            <main className="flex-1">{children}</main>
            {!hideNavigation && <Footer />}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
