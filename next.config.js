/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  // Only use static export for GitHub Pages
  ...(isGitHubPages && { 
    output: 'export',
    trailingSlash: true,
    basePath: '/ai-first'
  }),
  images: {
    unoptimized: isGitHubPages,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig