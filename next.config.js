/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");
const nextConfig = {
  reactStrictMode: true,
  /* i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  } */
  images: {
    domains: ["pretalx.com"],
  }
};

module.exports = withExportImages(nextConfig);
