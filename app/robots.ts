import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://majila.blog/sitemap.xml`,
    host: `https://majila.blog`,
  };
}
