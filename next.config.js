/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // scrollRestoration: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
