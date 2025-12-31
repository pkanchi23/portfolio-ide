'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';
import { useState } from 'react';

interface Deal {
    company: string;
    type: string;
    role: string;
    description: string;
    highlights?: string[];
}

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    deals?: Deal[];
}

const experiences: Experience[] = [
    {
        company: 'Goldman Sachs',
        role: 'Investment Banking Analyst, TMT',
        period: 'July 2025 – Present',
        location: 'San Francisco, CA',
        description: 'Infrastructure software coverage analyst, AI champion implementing AI workflows, only analyst with GS dev access for coding projects',
        deals: [
            {
                company: 'Databricks',
                type: 'Series L Financing',
                role: 'Only Junior on Team',
                description: 'Supported late-stage financing round for leading data and AI platform',
                highlights: ['Financial modeling', 'Management presentations', 'Due diligence coordination']
            },
            {
                company: 'SingleStore',
                type: 'Growth Buyout',
                role: 'Analyst',
                description: 'Vector Capital acquisition of real-time database company',
                highlights: ['Transaction structuring', 'Buyer negotiations', 'Valuation analysis']
            },
            {
                company: 'Sonar',
                type: 'Initial Term Loan',
                role: 'Analyst',
                description: 'Debt financing for code quality and security platform',
            },
            {
                company: 'Ping Identity',
                type: 'Term Loan B Refinancing',
                role: 'Analyst',
                description: 'Refinancing transaction for identity security software company',
            },
            {
                company: 'Teradata (NYSE: TDC)',
                type: 'Share Repurchase Authorization',
                role: 'Analyst',
                description: 'Advised on capital allocation strategy and share buyback program',
            }
        ]
    },
    {
        company: 'Guggenheim Partners',
        role: 'Investment Banking Analyst, Software & Enterprise Technology',
        period: 'Jun 2023 – Aug 2023, Aug 2024 – July 2025',
        location: 'Menlo Park, CA',
        description: 'Worked across public company strategic M&A, technology advisory, and startup debt/structured equity modeling',
        deals: [
            {
                company: 'Scale Computing + Acumera Merger',
                type: 'M&A Advisory',
                role: 'Exclusive Sell-Side Advisor',
                description: 'Merger of equals transaction between edge computing companies',
                highlights: [
                    'Led CIM creation and buyer outreach process',
                    'Conducted merger analysis and proceeds waterfall modeling',
                    'Structured convertible notes and growth debt alternatives',
                    'Managed due diligence and management presentations'
                ]
            }
        ]
    },
    {
        company: 'Bullet Point Network',
        role: 'Technology Venture Analyst',
        period: 'May 2022 – Sep 2022',
        location: 'New York, NY',
        description: 'Created 12+ deal investment memos for early-stage VC and growth equity investment',
    },
    {
        company: 'RillaVoice',
        role: 'Machine Learning Intern',
        period: 'Apr 2021 – Aug 2021',
        location: 'New York, NY',
        description: 'Developed unsupervised topic algorithm, achieving 72% accuracy improvement using BERT, GloVe, and NLP techniques',
    }
];

export default function Experience() {
    const [expandedDeal, setExpandedDeal] = useState<string | null>(null);

    const toggleDeal = (dealId: string) => {
        setExpandedDeal(expandedDeal === dealId ? null : dealId);
    };

    return (
        <section id="experience" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Professional Experience</p>
                        <h2 className="section-heading">Transaction History</h2>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
                        {experiences.map((exp, idx) => (
                            <motion.div key={idx} variants={fadeInUp}>
                                {/* Company Header */}
                                <div style={{
                                    background: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: 'var(--radius-lg)',
                                    padding: 'var(--space-xl)',
                                    marginBottom: exp.deals ? 'var(--space-lg)' : '0'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap',
                                        gap: 'var(--space-md)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <div>
                                            <h3 style={{
                                                fontSize: 'var(--font-size-2xl)',
                                                fontWeight: 700,
                                                marginBottom: '0.5rem',
                                                color: 'var(--color-text-primary)'
                                            }}>
                                                {exp.company}
                                            </h3>
                                            <p style={{
                                                fontSize: 'var(--font-size-lg)',
                                                color: 'var(--color-accent-primary)',
                                                fontWeight: 600,
                                                marginBottom: '0.25rem'
                                            }}>
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <p style={{
                                                fontFamily: 'var(--font-family-mono)',
                                                fontSize: 'var(--font-size-sm)',
                                                color: 'var(--color-text-muted)',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {exp.period}
                                            </p>
                                            <p style={{
                                                fontSize: 'var(--font-size-sm)',
                                                color: 'var(--color-text-muted)'
                                            }}>
                                                {exp.location}
                                            </p>
                                        </div>
                                    </div>
                                    <p style={{
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        margin: 0
                                    }}>
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Deals */}
                                {exp.deals && exp.deals.length > 0 && (
                                    <div style={{
                                        paddingLeft: 'var(--space-xl)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'var(--space-md)'
                                    }}>
                                        {exp.deals.map((deal, dealIdx) => {
                                            const dealId = `${idx}-${dealIdx}`;
                                            const isExpanded = expandedDeal === dealId;

                                            return (
                                                <div
                                                    key={dealIdx}
                                                    onClick={() => deal.highlights && toggleDeal(dealId)}
                                                    className="card"
                                                    style={{
                                                        cursor: deal.highlights ? 'pointer' : 'default',
                                                        background: 'var(--color-bg-tertiary)',
                                                        borderLeft: '3px solid var(--color-accent-gold)'
                                                    }}
                                                >
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        gap: 'var(--space-md)'
                                                    }}>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 'var(--space-sm)',
                                                                marginBottom: '0.5rem',
                                                                flexWrap: 'wrap'
                                                            }}>
                                                                <h4 style={{
                                                                    fontSize: 'var(--font-size-lg)',
                                                                    fontWeight: 600,
                                                                    color: 'var(--color-text-primary)',
                                                                    margin: 0
                                                                }}>
                                                                    {deal.company}
                                                                </h4>
                                                                <span className="badge">{deal.type}</span>
                                                                {deal.role && <span className="badge badge-gold">{deal.role}</span>}
                                                            </div>
                                                            <p style={{
                                                                fontSize: 'var(--font-size-sm)',
                                                                color: 'var(--color-text-secondary)',
                                                                margin: 0
                                                            }}>
                                                                {deal.description}
                                                            </p>
                                                        </div>
                                                        {deal.highlights && (
                                                            <div style={{
                                                                fontSize: 'var(--font-size-lg)',
                                                                color: 'var(--color-accent-primary)',
                                                                transition: 'transform var(--transition-fast)',
                                                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                                            }}>
                                                                ▼
                                                            </div>
                                                        )}
                                                    </div>

                                                    {isExpanded && deal.highlights && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            style={{
                                                                marginTop: 'var(--space-md)',
                                                                paddingTop: 'var(--space-md)',
                                                                borderTop: '1px solid var(--color-border)'
                                                            }}
                                                        >
                                                            <ul style={{
                                                                paddingLeft: 'var(--space-lg)',
                                                                margin: 0,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '0.5rem'
                                                            }}>
                                                                {deal.highlights.map((highlight, hIdx) => (
                                                                    <li key={hIdx} style={{
                                                                        color: 'var(--color-text-secondary)',
                                                                        fontSize: 'var(--font-size-sm)'
                                                                    }}>
                                                                        {highlight}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
