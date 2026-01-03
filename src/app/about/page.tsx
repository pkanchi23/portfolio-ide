'use client';

import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TimelineEvent {
  type: 'work' | 'education';
  company?: string;
  school?: string;
  role?: string;
  degree?: string;
  location?: string;
  period: string;
  description?: string;
  image?: string;
  gpa?: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        type: 'work',
        company: 'Goldman Sachs',
        role: 'Investment Banking Analyst',
        location: 'San Francisco',
        period: '2025 - Present',
        description: 'TMT Coverage focusing on infrastructure software M&A and capital markets.',
        image: '/images/goldman.jpg',
    },
    {
        type: 'work',
        company: 'Guggenheim Partners',
        role: 'Investment Banking Analyst',
        location: 'Menlo Park',
        period: '2023 - 2025',
        description: 'Technology investment banking with focus on growth equity and M&A.',
        image: '/images/guggenheim.jpg',
    },
    {
        type: 'work',
        company: 'Bullet Point Network',
        role: 'Venture Capital Analyst',
        location: 'NYC',
        period: '2022',
        description: 'Early-stage investment analysis and due diligence.',
        image: '/images/bpn.jpg',
    },
    {
        type: 'work',
        company: 'RillaVoice',
        role: 'Machine Learning Intern',
        location: 'NYC',
        period: '2021',
        description: 'Built NLP models for sales conversation analytics.',
        image: '/images/rilla.jpg',
    },
    {
        type: 'education',
        school: 'NYU Stern School of Business',
        degree: 'B.S. in Finance',
        gpa: '3.95',
        period: '2019 - 2023',
        image: '/images/nyu.jpg',
    },
    {
        type: 'education',
        school: 'NYU Tandon School of Engineering',
        degree: 'Minor in Computer Science',
        period: '2019 - 2023',
        image: '/images/nyu.jpg',
    },
];

export default function AboutPage() {
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
                                About Me
                            </h1>

                            <p style={{
                                fontSize: 'var(--text-xl)',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: 'var(--space-8)',
                            }}>
                                I work at the intersection of finance and technology. Currently an Investment Banking Analyst
                                at Goldman Sachs covering TMT, with a background in computer science and machine learning.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="section" style={{ paddingTop: 0 }}>
                    <div className="container container-narrow">
                         <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--space-8)',
                                color: 'var(--color-text-primary)',
                            }}>
                                My Journey
                            </h2>
                            <Timeline events={timelineEvents} />
                        </motion.div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="section">
                    <div className="container container-narrow" style={{ textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                                Let&apos;s Connect
                            </h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
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
                    </div>
                </section>
            </main>
        </>
    );
}
