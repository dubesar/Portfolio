const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s2.svgbox.net', 'img.icons8.com']
  },
}

module.exports = withPlugins([[withImages]], nextConfig)