'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const experiences = [
    {
        company: 'Goldman Sachs',
        role: 'Investment Banking Analyst',
        location: 'San Francisco',
        period: '2025 - Present',
        description: 'TMT Coverage focusing on infrastructure software M&A and capital markets.',
    },
    {
        company: 'Guggenheim Partners',
        role: 'Investment Banking Analyst',
        location: 'Menlo Park',
        period: '2023 - 2025',
        description: 'Technology investment banking with focus on growth equity and M&A.',
    },
    {
        company: 'Bullet Point Network',
        role: 'Venture Capital Analyst',
        location: 'NYC',
        period: '2022',
        description: 'Early-stage investment analysis and due diligence.',
    },
    {
        company: 'RillaVoice',
        role: 'Machine Learning Intern',
        location: 'NYC',
        period: '2021',
        description: 'Built NLP models for sales conversation analytics.',
    },
];

const education = [
    {
        school: 'NYU Stern School of Business',
        degree: 'B.S. in Finance',
        gpa: '3.95',
        period: '2019 - 2023',
    },
    {
        school: 'NYU Tandon School of Engineering',
        degree: 'Minor in Computer Science',
        period: '2019 - 2023',
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

                {/* Experience */}
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
                                Experience
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                                {experiences.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="card"
                                        style={{ padding: 'var(--space-6)' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                            <div>
                                                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                                                    {exp.company}
                                                </h3>
                                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent)' }}>
                                                    {exp.role}
                                                </p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{exp.period}</p>
                                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-subtle)' }}>{exp.location}</p>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Education */}
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
                                Education
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                {education.map((edu, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="card"
                                        style={{ padding: 'var(--space-5)' }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                            <div>
                                                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                                                    {edu.school}
                                                </h3>
                                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                                    {edu.degree} {edu.gpa && <span style={{ color: 'var(--color-accent)' }}>• GPA: {edu.gpa}</span>}
                                                </p>
                                            </div>
                                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{edu.period}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
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
