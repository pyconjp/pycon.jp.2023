/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  } */
  output: 'export',
  images: {
    unoptimized: true,
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

module.exports = nextConfig;
