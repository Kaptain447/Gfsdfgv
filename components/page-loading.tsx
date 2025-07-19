"use client"

import { BrandedLoading } from "./branded-loading"

interface PageLoadingProps {
  message?: string
  fullScreen?: boolean
}

export function PageLoading({ message, fullScreen = false }: PageLoadingProps) {
  const containerClass = fullScreen
    ? "fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center py-12"

  return (
    <div className={containerClass}>
      <BrandedLoading message={message} size="md" />
    </div>
  )
}

export default PageLoading
