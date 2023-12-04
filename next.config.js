/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: "images.unsplash.com" },
        { hostname: "lh3.googleusercontent.com" },
        { hostname: "makkosgh.com"}
      ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  };