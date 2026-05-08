import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // BACKEND_URL dibaca saat runtime, bukan saat build
        destination: `${process.env.BACKEND_URL ?? 'http://localhost:3001'}/:path*`,
      },
    ]
  },
}

export default nextConfig