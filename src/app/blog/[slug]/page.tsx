import { getAllBlogPosts, getBlogPost } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/BlogPostContent';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostContent slug={slug} />;
}

// Generate static params for all blog posts
export function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
