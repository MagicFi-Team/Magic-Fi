import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    // fix Module not found: Can't resolve 'pino-pretty' warning https://github.com/pinojs/pino/issues/688
    config.externals = [...config.externals, "pino-pretty"];
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/perp/PERP_ETH_USDC",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
