import type { NextConfig } from 'next';

const umami_url = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_URL ?? '';

const nextConfig: NextConfig = {
  // output: 'export',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'date-fns'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      {
        source: '/umami.js',
        destination: `${umami_url}/script.js`,
      },
      {
        source: '/api/send',
        destination: `${umami_url}/api/send`,
      },
    ];
  },
};

export default nextConfig;
