/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['pinnaclewealthz.com', 'www.pinnaclewealthz.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pinnaclewealthz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pinnaclewealthz.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'http://pinnaclewealthz.com',
    NEXT_PUBLIC_API_URL: 'http://pinnaclewealthz.com/api',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://pinnaclewealthz.com/api/:path*',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
