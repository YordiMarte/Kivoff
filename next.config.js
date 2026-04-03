/**@type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  // Desactiva completamente el overlay de desarrollo
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Configuración de webpack más agresiva
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      // Polyfill más temprano en el proceso
      const originalBuild = config.plugins;
      config.plugins = [
        {
          apply: (compiler) => {
            compiler.hooks.beforeRun.tap('LocalStorageMock', () => {
              if (typeof global !== 'undefined') {
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