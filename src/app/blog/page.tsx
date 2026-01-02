'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { getAllBlogPosts } from '@/data/blog-posts';
import Link from 'next/link';

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <>
            <Header />
            <main style={{ paddingTop: 'var(--space-32)' }}>
                {/* Hero */}
                <section className="section">
                    <div className="container container-narrow">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/" className="link-arrow" style={{ marginBottom: 'var(--space-6)', display: 'inline-flex' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                                <span>Back home</span>
                            </Link>

                            <h1 style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                fontWeight: 800,
                                marginBottom: 'var(--space-6)',
                                letterSpacing: '-0.03em',
                            }}>
                                Articles
                            </h1>

                            <p style={{
                                fontSize: 'var(--text-xl)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                            }}>
                                Insights on investment banking, technology trends, and machine learning.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Posts List */}
                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container container-narrow">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                            {posts.map((post, idx) => (
                                <motion.div
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                >
                                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                        <article className="card card-interactive" style={{ padding: 'var(--space-8)' }}>
                                            {/* Meta */}
                                            <div style={{
                                                display: 'flex',
                                                gap: 'var(--space-4)',
                                                marginBottom: 'var(--space-4)',
                                                fontSize: 'var(--text-sm)',
                                                color: 'var(--color-text-muted)',
                                            }}>
                                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}</span>
                                                <span>·</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            {/* Title */}
                                            <h2 style={{
                                                fontSize: 'var(--text-2xl)',
                                                fontWeight: 700,
                                                marginBottom: 'var(--space-3)',
                                                color: 'var(--color-text-primary)',
                                                lineHeight: 1.3,
                                            }}>
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p style={{
                                                fontSize: 'var(--text-base)',
                                                color: 'var(--color-text-secondary)',
                                                lineHeight: 1.6,
                                                marginBottom: 'var(--space-4)',
                                            }}>
                                                {post.excerpt}
                                            </p>

                                            {/* Tags */}
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 'var(--space-2)',
                                                marginBottom: 'var(--space-4)',
                                            }}>
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="badge">{tag}</span>
                                                ))}
                                            </div>

                                            {/* Read more */}
                                            <div className="link-arrow">
                                                <span>Read article</span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
