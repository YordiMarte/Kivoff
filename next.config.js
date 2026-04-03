/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["framer-motion"],
  experimental: {
    optimizePackageImports: ["framer-motion"]
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
}

export default nextConfig
