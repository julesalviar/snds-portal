import nextra from 'nextra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full static export: all pages (including /docs .md content) are SSG at build time
  output: 'export',
  images: {
    unoptimized: true, // required for static export
  },
  // Use this package as the workspace root (avoids "Cannot find module './341.js'" when parent has another lockfile)
  outputFileTracingRoot: __dirname,
}

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

export default withNextra(nextConfig)
