/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  i18n: {
    locales: ["fr", "en", "pt"],
    defaultLocale: "fr",
    localeDetection: false
  }
}

module.exports = nextConfig
