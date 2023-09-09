/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");
const nextConfig = {
  reactStrictMode: true,
  /* i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  } */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pretalx.com',
        port: '',
        pathname: '/media/avatars/**',
      },
    ],
  }
};

module.exports = withExportImages(nextConfig);
