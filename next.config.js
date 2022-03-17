/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["files.bikeindex.org", "bikebook.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
