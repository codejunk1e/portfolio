const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/portfolio": "", 
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  distDir: 'build',
};

module.exports = withMDX(nextConfig);
