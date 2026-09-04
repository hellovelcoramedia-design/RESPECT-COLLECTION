/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/RESPECT-COLLECTION',
  assetPrefix: '/RESPECT-COLLECTION/',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
