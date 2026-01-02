'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
    {
        title: 'Books',
        icon: '📚',
        items: [
            { name: 'The Intelligent Investor', author: 'Benjamin Graham' },
            { name: 'Zero to One', author: 'Peter Thiel' },
            { name: 'The Hard Thing About Hard Things', author: 'Ben Horowitz' },
            { name: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
        ],
    },
    {
        title: 'Tools',
        icon: '🛠️',
        items: [
            { name: 'VS Code', description: 'Primary editor' },
            { name: 'Figma', description: 'Design' },
            { name: 'Linear', description: 'Project management' },
            { name: 'Notion', description: 'Notes & docs' },
        ],
    },
    {
        title: 'Tech Stack',
        icon: '💻',
        items: [
            { name: 'TypeScript', description: 'Language of choice' },
            { name: 'Next.js', description: 'React framework' },
            { name: 'Python', description: 'ML & scripting' },
            { name: 'PostgreSQL', description: 'Database' },
        ],
    },
    {
        title: 'Podcasts',
        icon: '🎧',
        items: [
            { name: 'Acquired', description: 'Tech history' },
            { name: 'All-In', description: 'Tech & markets' },
            { name: 'Invest Like the Best', description: 'Investing' },
            { name: 'Lex Fridman', description: 'Tech & AI' },
        ],
    },
];

export default function FavoritesPage() {
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
                                Favorite Things
                            </h1>

                            <p style={{
                                fontSize: 'var(--text-xl)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                            }}>
                                A curated collection of books, tools, and resources that have shaped my thinking.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container container-narrow">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
                            {categories.map((category, catIdx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                                >
                                    <h2 style={{
                                        fontSize: 'var(--text-xl)',
                                        fontWeight: 600,
                                        marginBottom: 'var(--space-6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)',
                                    }}>
                                        <span>{category.icon}</span>
                                        {category.title}
                                    </h2>

                                    <div className="grid grid-2" style={{ gap: 'var(--space-4)' }}>
                                        {category.items.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                                className="card"
                                                style={{ padding: 'var(--space-4)' }}
                                            >
                                                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
                                                    {item.name}
                                                </h3>
                                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                                    {'author' in item ? item.author : item.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
