import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://farocasino13.vercel.app/sitemap.xml',
    host: 'https://farocasino13.vercel.app/',
  }
}
