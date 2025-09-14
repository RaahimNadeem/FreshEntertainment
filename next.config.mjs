/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  // Reduce console output
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  // Optimize development server
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: false,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      }
      // Reduce webpack compilation logging
      config.stats = 'errors-warnings'
      config.infrastructureLogging = {
        level: 'error',
      }
    }
    return config
  },
  // Reduce file watching and optimize
  experimental: {
    optimizePackageImports: ['framer-motion'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Disable source maps in development for faster builds
  productionBrowserSourceMaps: false,
}

export default nextConfig
