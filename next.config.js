/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.placeholders.dev",
      "picsum.photos"
    ]
  }
}

module.exports = nextConfig
