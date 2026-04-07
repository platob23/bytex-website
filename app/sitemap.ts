import type { MetadataRoute } from 'next'

const base = 'https://bytex.at'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/de`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/de/impressum`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/en/impressum`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/de/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/en/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ]
}
