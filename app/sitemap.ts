import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www-p-d.onrender.com',
      lastModified: new Date(),
    },
  ];
}
