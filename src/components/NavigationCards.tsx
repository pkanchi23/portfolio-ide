'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavCard {
    href: string;
    title: string;
    description: string;
    emoji: string;
}

const cards: NavCard[] = [
    {
        href: '/cli',
        title: 'CLI Portfolio',
        description: 'Interactive terminal experience showcasing my work.',
        emoji: '💻',
    },
    {
        href: '/about',
        title: 'About',
        description: 'Background, experience, and what I\'m working on.',
        emoji: '👤',
    },
    {
        href: '/favorites',
        title: 'Favorites',
        description: 'Books, tools, and resources that have shaped my thinking.',
        emoji: '📚',
    },
    {
        href: '/blog',
        title: 'Articles',
        description: 'Writing on finance, technology, and ML.',
        emoji: '✍️',
    },
    {
        href: '/inventory',
        title: 'Inventory',
        description: 'A collection of my favorite wares.',
        emoji: '💎',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function NavigationCards() {
    return (
        <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-32)' }}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-2"
                    style={{ gap: 'var(--space-4)' }}
                >
                    {cards.map((card) => (
                        <motion.div key={card.href} variants={cardVariants}>
                            <Link href={card.href} style={{ textDecoration: 'none' }}>
                                <div
                                    className="card"
                                    style={{
                                        padding: 'var(--space-6)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--space-3)',
                                        cursor: 'pointer',
                                        transition: 'border-color var(--transition-base)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                    }}
                                >
                                    {/* Emoji */}
                                    <div style={{
                                        fontSize: 'var(--text-2xl)',
                                        lineHeight: 1,
                                    }}>
                                        {card.emoji}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: 'var(--text-lg)',
                                        fontWeight: 500,
                                        color: 'var(--color-text-primary)',
                                    }}>
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: 'var(--text-sm)',
                                        color: 'var(--color-text-muted)',
                                        lineHeight: 1.5,
                                    }}>
                                        {card.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
