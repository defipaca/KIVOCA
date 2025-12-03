/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'travel.rakuten.com',
      },
      {
        protocol: 'https',
        hostname: 'www.japantimes.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'cdnx.premiumread.com',
      },
      {
        protocol: 'https',
        hostname: 'images.travelandleisureasia.com',
      },
    ],
  },
}

module.exports = nextConfig

