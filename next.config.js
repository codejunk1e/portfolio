const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === "production"
const basePath = isProd ? "/portfolio" : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: basePath,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  distDir: 'build',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = withMDX(nextConfig);
