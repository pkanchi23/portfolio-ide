'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import InteractiveTimeline, { TimelineEvent } from '@/components/InteractiveTimeline';

const timelineEvents: TimelineEvent[] = [
    {
        id: 'goldman',
        type: 'work',
        title: 'Goldman Sachs',
        subtitle: 'Investment Banking Analyst',
        location: 'San Francisco',
        period: '2025 - Present',
        description: 'TMT Coverage focusing on infrastructure software M&A and capital markets.',
        details: [
            'Executing M&A transactions in the infrastructure software sector',
            'Building financial models and conducting valuation analyses',
            'Preparing client presentations and marketing materials',
        ],
        images: [],
    },
    {
        id: 'guggenheim',
        type: 'work',
        title: 'Guggenheim Partners',
        subtitle: 'Investment Banking Analyst',
        location: 'Menlo Park',
        period: '2023 - 2025',
        description: 'Technology investment banking with focus on growth equity and M&A.',
        details: [
            'Led due diligence workstreams for multiple technology transactions',
            'Developed comprehensive industry research and market analysis',
            'Managed client relationships and deal execution',
        ],
        images: [],
    },
    {
        id: 'bpn',
        type: 'work',
        title: 'Bullet Point Network',
        subtitle: 'Venture Capital Analyst',
        location: 'New York City',
        period: '2022',
        description: 'Early-stage investment analysis and due diligence.',
        details: [
            'Evaluated startup investment opportunities across sectors',
            'Conducted market research and competitive analysis',
            'Supported partners with deal sourcing and screening',
        ],
        images: [],
    },
    {
        id: 'rilla',
        type: 'work',
        title: 'RillaVoice',
        subtitle: 'Machine Learning Intern',
        location: 'New York City',
        period: '2021',
        description: 'Built NLP models for sales conversation analytics.',
        details: [
            'Developed natural language processing pipelines',
            'Implemented speech-to-text analysis features',
            'Improved model accuracy through iterative training',
        ],
        images: [],
    },
    {
        id: 'nyu-stern',
        type: 'education',
        title: 'NYU Stern School of Business',
        subtitle: 'B.S. in Finance',
        location: 'New York City',
        period: '2019 - 2023',
        description: 'Graduated with honors, GPA 3.95.',
        details: [
            'Concentration in Quantitative Finance',
            'Dean\'s List all semesters',
            'Member of Finance Society and Investment Club',
        ],
        images: [],
    },
    {
        id: 'nyu-tandon',
        type: 'education',
        title: 'NYU Tandon School of Engineering',
        subtitle: 'Minor in Computer Science',
        location: 'New York City',
        period: '2019 - 2023',
        description: 'Coursework in algorithms, data structures, and machine learning.',
        details: [
            'Data Structures & Algorithms',
            'Machine Learning Fundamentals',
            'Database Systems',
        ],
        images: [],
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Fixed header with back link */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: 'var(--space-4) var(--space-6)',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)',
                }}
            >
                <Link
                    href="/"
                    className="link-arrow"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Back home</span>
                </Link>
            </motion.header>

            {/* Hero section */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 'var(--space-20) var(--space-6)',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ maxWidth: '600px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: 800,
                        marginBottom: 'var(--space-6)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                    }}>
                        My Journey
                    </h1>
                    <p style={{
                        fontSize: 'var(--text-xl)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                        marginBottom: 'var(--space-8)',
                    }}>
                        At the intersection of finance and technology.
                    </p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-muted)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                        }}
                    >
                        <span>Scroll to explore</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </motion.div>
                </motion.div>
            </section>

            {/* Interactive Timeline */}
            <InteractiveTimeline events={timelineEvents} />

            {/* Contact CTA */}
            <section style={{
                padding: 'var(--space-24) var(--space-6)',
                textAlign: 'center',
                background: 'var(--color-bg)',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)'
                    }}>
                        Let&apos;s Connect
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-6)'
                    }}>
                        Feel free to reach out for opportunities or just to say hi.
                    </p>
                    <a
                        href="mailto:pranavkanchi23@gmail.com"
                        className="btn btn-primary"
                        style={{ padding: 'var(--space-4) var(--space-8)' }}
                    >
                        pranavkanchi23@gmail.com
                    </a>
                </motion.div>
            </section>
        </>
    );
}
