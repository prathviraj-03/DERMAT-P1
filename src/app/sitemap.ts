import { MetadataRoute } from 'next';
import { services, blogPosts } from '@/lib/data';

export const dynamic = 'force-static';
export const revalidate = 0;

const baseUrl = 'https://unisexsalon.com'; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/blogs',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...serviceUrls, ...blogUrls];
}
