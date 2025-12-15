import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://louis-simon.dev', 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}