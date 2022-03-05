const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['s2.svgbox.net', 'img.icons8.com', 'cdn.hashnode.com']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)