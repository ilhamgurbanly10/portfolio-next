/** @type {import('next').NextConfig} */
const nextConfig = {};

// Import the next-intl plugin
const withNextIntl = require('next-intl/plugin')();

// Merge the configurations
module.exports = withNextIntl({
  ...nextConfig,
  // Other Next.js configuration ...
});