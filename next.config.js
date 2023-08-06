/** @type {import('next').NextConfig} */

const githubPages = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '/'
let basePath = ''

if (githubPages) {
  assetPrefix = ''
  basePath = ''
}


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix,
  basePath,
};

module.exports = nextConfig;
