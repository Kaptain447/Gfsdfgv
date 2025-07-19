"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function BrandedLoading() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white z-50">
      <div className="animate-pulse">
        <Image
          src="/images/pinnacle-wealth-logo.png"
          alt="Pinnacle Wealth Logo"
          width={150}
          height={150}
          className="mb-4"
        />
      </div>
      <p className="text-xl font-semibold">Loading{dots}</p>
    </div>
  )
}

export default BrandedLoading // Also export as default for compatibility
