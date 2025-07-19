import { BrandedLoading } from "@/components/branded-loading"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 animate-pulse rounded w-32 h-8"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gray-200 animate-pulse rounded w-24 h-8"></div>
              <div className="bg-gray-200 animate-pulse rounded w-16 h-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <BrandedLoading message="Loading Admin Dashboard..." size="lg" showProgress={true} />
          <div className="mt-8 space-y-2 text-gray-600">
            <p className="text-sm">Verifying admin privileges</p>
            <p className="text-sm">Loading user statistics</p>
            <p className="text-sm">Fetching transaction data</p>
            <p className="text-sm">Preparing management tools</p>
          </div>
        </div>
      </div>
    </div>
  )
}
