'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { getBlogPost } from '@/data/blog-posts';
import Link from 'next/link';

interface BlogPostContentProps {
    slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
    const post = getBlogPost(slug);

    if (!post) {
        return null;
    }

    return (
        <main style={{
            minHeight: '100vh',
            paddingTop: 'var(--space-3xl)',
            paddingBottom: 'var(--space-3xl)'
        }}>
            <article className="container container-narrow">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* Back link */}
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/blog"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: 'var(--space-lg)',
                                color: 'var(--color-accent-primary)',
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 600
                            }}
                        >
                            ← Back to All Articles
                        </Link>
                    </motion.div>

                    {/* Article Header */}
                    <motion.div
                        variants={fadeInUp}
                        style={{ marginBottom: 'var(--space-2xl)' }}
                    >
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            marginBottom: 'var(--space-md)',
                            flexWrap: 'wrap'
                        }}>
                            {post.tags.map((tag, idx) => (
                                <span key={idx} className="badge">{tag}</span>
                            ))}
                        </div>

                        <h1 style={{
                            fontSize: 'var(--font-size-4xl)',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: 'var(--space-md)',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-text-secondary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {post.title}
                        </h1>

                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-lg)',
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-family-mono)'
                        }}>
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}</span>
                            <span>·</span>
                            <span>{post.readTime} read</span>
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        variants={fadeInUp}
                        className="card card-elevated"
                        style={{ padding: 'var(--space-2xl)' }}
                    >
                        <div style={{
                            fontSize: 'var(--font-size-base)',
                            lineHeight: 1.8,
                            color: 'var(--color-text-secondary)'
                        }}
                            className="blog-content"
                            dangerouslySetInnerHTML={{
                                __html: post.content
                                    .split('\n')
                                    .map(line => {
                                        // Convert markdown-style headers to HTML
                                        if (line.startsWith('## ')) {
                                            return `<h2 style="font-size: var(--font-size-2xl); font-weight: 700; color: var(--color-text-primary); margin: var(--space-xl) 0 var(--space-md) 0;">${line.substring(3)}</h2>`;
                                        }
                                        if (line.startsWith('# ')) {
                                            return `<h1 style="font-size: var(--font-size-3xl); font-weight: 800; color: var(--color-text-primary); margin: var(--space-2xl) 0 var(--space-lg) 0;">${line.substring(2)}</h1>`;
                                        }
                                        // Convert markdown bold to HTML
                                        if (line.startsWith('**')) {
                                            return `<p style="font-weight: 700; color: var(--color-text-primary); margin-bottom: var(--space-sm);">${line.replace(/\*\*/g, '')}</p>`;
                                        }
                                        // Convert numbered lists
                                        if (line.match(/^\d+\./)) {
                                            return `<li style="margin-bottom: var(--space-xs);">${line.substring(line.indexOf('.') + 2)}</li>`;
                                        }
                                        // Convert bullet lists
                                        if (line.startsWith('- ')) {
                                            return `<li style="margin-bottom: var(--space-xs);">${line.substring(2)}</li>`;
                                        }
                                        // Regular paragraph
                                        if (line.trim()) {
                                            return `<p style="margin-bottom: var(--space-md);">${line}</p>`;
                                        }
                                        return '';
                                    })
                                    .join('')
                            }}
                        />
                    </motion.div>

                    {/* Back to blog link */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            marginTop: 'var(--space-2xl)',
                            textAlign: 'center'
                        }}
                    >
                        <Link href="/blog" className="btn btn-secondary">
                            ← View All Articles
                        </Link>
                    </motion.div>
                </motion.div>
            </article>
        </main>
    );
}
