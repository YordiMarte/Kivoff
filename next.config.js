/**@type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      const originalBuild = config.plugins;
      config.plugins = [
        {
          apply: (compiler) => {
            compiler.hooks.beforeRun.tap("LocalStorageMock", () => {
              if (typeof global !== "undefined") {
                global.localStorage = {
                  getItem: () => null,
                  setItem: () => {},
                  removeItem: () => {},
                  clear: () => {},
                  key: () => null,
                  length: 0,
                };
                global.window = global.window || {};
              }
            });
          },
        },
        ...originalBuild,
      ];
    }
    return config;
  },
}
module.exports = nextConfig
