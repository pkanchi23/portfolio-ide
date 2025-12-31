'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { getAllBlogPosts } from '@/data/blog-posts';
import Link from 'next/link';

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <main style={{
            minHeight: '100vh',
            paddingTop: 'var(--space-3xl)'
        }}>
            {/* Header */}
            <section className="section">
                <div className="container container-narrow">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/"
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
                                ← Back to Portfolio
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <p className="section-title">Industry Analysis</p>
                            <h1 className="section-heading">Research Notes</h1>
                            <p style={{
                                fontSize: 'var(--font-size-lg)',
                                color: 'var(--color-text-secondary)',
                                marginBottom: 'var(--space-2xl)',
                                maxWidth: '700px'
                            }}>
                                Insights on investment banking, technology trends, corporate finance, and machine learning
                                from my work at Goldman Sachs, Guggenheim Partners, and beyond.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container container-narrow">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-xl)'
                        }}
                    >
                        {posts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                            >
                                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                    <div
                                        className="card card-elevated"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {/* Date and read time */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 'var(--space-md)',
                                            fontSize: 'var(--font-size-xs)',
                                            color: 'var(--color-text-muted)',
                                            fontFamily: 'var(--font-family-mono)'
                                        }}>
                                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                            <span>{post.readTime} read</span>
                                        </div>

                                        {/* Title */}
                                        <h2 style={{
                                            fontSize: 'var(--font-size-2xl)',
                                            fontWeight: 700,
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--color-text-primary)',
                                            lineHeight: 1.3
                                        }}>
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p style={{
                                            fontSize: 'var(--font-size-base)',
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: 1.7,
                                            marginBottom: 'var(--space-md)'
                                        }}>
                                            {post.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: 'var(--space-md)'
                                        }}>
                                            {post.tags.map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className="badge"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read more link */}
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--color-accent-primary)',
                                            fontSize: 'var(--font-size-sm)',
                                            fontWeight: 600
                                        }}>
                                            Read Full Article
                                            <span style={{ fontSize: '1rem' }}>→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
