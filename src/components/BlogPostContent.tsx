'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
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
        <>
            <Header />
            <main style={{ paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-24)' }}>
                <article className="container container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Back link */}
                        <Link href="/blog" className="link-arrow" style={{ marginBottom: 'var(--space-8)', display: 'inline-flex' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                            <span>Back to articles</span>
                        </Link>

                        {/* Tags */}
                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-2)',
                            marginBottom: 'var(--space-6)',
                            flexWrap: 'wrap',
                        }}>
                            {post.tags.map((tag) => (
                                <span key={tag} className="badge">{tag}</span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: 'var(--space-6)',
                            letterSpacing: '-0.03em',
                        }}>
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div style={{
                            display: 'flex',
                            gap: 'var(--space-4)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-muted)',
                            marginBottom: 'var(--space-12)',
                        }}>
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="card"
                        style={{ padding: 'var(--space-10)' }}
                    >
                        <div
                            style={{
                                fontSize: 'var(--text-base)',
                                lineHeight: 1.8,
                                color: 'var(--color-text-secondary)',
                            }}
                            dangerouslySetInnerHTML={{
                                __html: post.content
                                    .split('\n')
                                    .map(line => {
                                        if (line.startsWith('## ')) {
                                            return `<h2 style="font-size: var(--text-2xl); font-weight: 700; color: var(--color-text-primary); margin: var(--space-10) 0 var(--space-4) 0;">${line.substring(3)}</h2>`;
                                        }
                                        if (line.startsWith('# ')) {
                                            return `<h1 style="font-size: var(--text-3xl); font-weight: 800; color: var(--color-text-primary); margin: var(--space-12) 0 var(--space-6) 0;">${line.substring(2)}</h1>`;
                                        }
                                        if (line.startsWith('**') && line.endsWith('**')) {
                                            return `<p style="font-weight: 600; color: var(--color-text-primary); margin-bottom: var(--space-2);">${line.replace(/\*\*/g, '')}</p>`;
                                        }
                                        if (line.match(/^\d+\./)) {
                                            return `<li style="margin-bottom: var(--space-2); margin-left: var(--space-6);">${line.substring(line.indexOf('.') + 2)}</li>`;
                                        }
                                        if (line.startsWith('- ')) {
                                            return `<li style="margin-bottom: var(--space-2); margin-left: var(--space-6);">${line.substring(2)}</li>`;
                                        }
                                        if (line.trim()) {
                                            return `<p style="margin-bottom: var(--space-4);">${line}</p>`;
                                        }
                                        return '';
                                    })
                                    .join('')
                            }}
                        />
                    </motion.div>

                    {/* Back to blog */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        style={{
                            marginTop: 'var(--space-12)',
                            textAlign: 'center',
                        }}
                    >
                        <Link href="/blog" className="btn btn-secondary">
                            ← View All Articles
                        </Link>
                    </motion.div>
                </article>
            </main>
        </>
    );
}
