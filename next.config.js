/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/Briar-groups-' : '',
  assetPrefix: isGithubActions ? '/Briar-groups-/' : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/Briar-groups-' : '',
  },
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.js',
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

module.exports = nextConfig;
