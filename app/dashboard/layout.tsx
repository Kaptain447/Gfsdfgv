import type React from "react"
import type { Metadata } from "next"
import DashboardClient from "./DashboardClient"

export const metadata: Metadata = {
  title: "Dashboard | Pinnacle Wealth",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardClient>{children}</DashboardClient>
}
