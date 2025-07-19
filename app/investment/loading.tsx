import { BrandedLoading } from "@/components/branded-loading"

export default function InvestmentLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 animate-pulse rounded w-20 h-8"></div>
              <div className="hidden md:block bg-gray-200 animate-pulse rounded w-32 h-6"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded w-16 h-4"></div>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                <div className="bg-gray-200 animate-pulse rounded w-16 h-8"></div>
                <div className="bg-gray-200 animate-pulse rounded w-16 h-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <BrandedLoading message="Loading Investment Plans..." size="lg" showProgress={true} />
          <div className="mt-8 space-y-2 text-gray-600">
            <p className="text-sm">Fetching latest market data</p>
            <p className="text-sm">Calculating optimal returns</p>
            <p className="text-sm">Preparing personalized recommendations</p>
          </div>
        </div>
      </div>
    </div>
  )
}
