// eslint-disable-next-line @typescript-eslint/no-var-requires
const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
