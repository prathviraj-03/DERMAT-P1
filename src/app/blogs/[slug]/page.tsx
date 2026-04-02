import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import BlogPostPageClient from '@/components/blog-post-page';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return <BlogPostPageClient post={post} relatedPosts={relatedPosts} />;
}
