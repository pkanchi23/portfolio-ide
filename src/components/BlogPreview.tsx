'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';
import { getAllBlogPosts } from '@/data/blog-posts';
import Link from 'next/link';

export default function BlogPreview() {
    const posts = getAllBlogPosts().slice(0, 3);

    return (
        <section id="blog" className="section">
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Latest Insights</p>
                        <h2 className="section-heading">Industry Research Notes</h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: 'var(--space-lg)',
                        marginBottom: 'var(--space-xl)'
                    }}>
                        {posts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                                    <div
                                        className="card"
                                        style={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer'
                                        }}
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
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                            <span>{post.readTime} read</span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{
                                            fontSize: 'var(--font-size-xl)',
                                            fontWeight: 700,
                                            marginBottom: 'var(--space-sm)',
                                            color: 'var(--color-text-primary)',
                                            lineHeight: 1.3
                                        }}>
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p style={{
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: 1.7,
                                            marginBottom: 'var(--space-md)',
                                            flex: 1
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
                                                    style={{ fontSize: '0.7rem' }}
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
                                            Read Article
                                            <span style={{ fontSize: '1rem' }}>→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <motion.div
                        variants={fadeInUp}
                        style={{ textAlign: 'center' }}
                    >
                        <Link href="/blog" className="btn btn-secondary">
                            View All Research Notes
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
