import type { Metadata } from "next/types"
import ContactPageClient from "./ContactPageClient"

// Update metadata
export const metadata: Metadata = {
  title: "Contact Our Expert Team | Pinnacle Wealth",
  description:
    "Get in touch with Pinnacle Wealth's financial experts for personalized investment consultation and service recommendations.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
