/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
    domains: [],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource'
    });
    return config;
  }
};

module.exports = nextConfig;