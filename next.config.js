/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'edamam-product-images.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
