'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';

interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    link?: string;
    highlight?: string;
}

const projects: Project[] = [
    {
        title: 'ML-Powered Sales Analytics Platform',
        category: 'Machine Learning',
        description: 'Developed an unsupervised topic modeling algorithm for sales conversation analysis using BERT embeddings, dialogue act tagging, and custom NLP techniques. Achieved 72% improvement in accuracy for multi-language, small-dataset scenarios.',
        tech: ['Python', 'BERT', 'NLP', 'GloVe', 'Gensim'],
        highlight: '72% Accuracy Improvement'
    },
    {
        title: 'AI Workflow Automation Tools (Goldman Sachs)',
        category: 'Enterprise AI',
        description: 'Implemented AI-driven workflows for investment banking processes. Only analyst with developer access at GS, building custom automation tools for deal execution and analysis.',
        tech: ['Python', 'Internal GS Stack', 'AI/ML'],
        highlight: 'Only Analyst with Dev Access'
    },
    {
        title: 'Financial Modeling & Valuation Suite',
        category: 'Corporate Finance',
        description: 'Built comprehensive Excel and Python-based modeling frameworks for M&A transactions, debt financing, and structured equity analysis. Used across multiple billion-dollar deals at Guggenheim and Goldman.',
        tech: ['Excel', 'VBA', 'Python', 'Pandas'],
        highlight: 'Used in $2B+ Transactions'
    },
    {
        title: 'Portfolio Management Dashboard',
        category: 'FinTech',
        description: 'Created real-time portfolio tracking and analysis dashboard for Investment Analysis Group, managing $92K in capital with automated data pipeline from market data APIs.',
        tech: ['Python', 'Flask', 'Streamlit', 'APIs'],
    },
    {
        title: 'Deal Sourcing & Diligence Platform',
        category: 'Venture Capital',
        description: 'Built data aggregation tool combining PitchBook, Crunchbase, and proprietary metrics for VC deal sourcing and analysis at Bullet Point Network and CerraCap Ventures.',
        tech: ['Python', 'Web Scraping', 'Data Analytics'],
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Technical Projects</p>
                        <h2 className="section-heading">Portfolio Holdings</h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 'var(--space-lg)'
                    }}>
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div
                                    className="card"
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Category badge */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: 'var(--space-md)',
                                        gap: 'var(--space-sm)'
                                    }}>
                                        <span className="badge">{project.category}</span>
                                        {project.highlight && (
                                            <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                                                {project.highlight}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: 'var(--font-size-xl)',
                                        fontWeight: 700,
                                        marginBottom: 'var(--space-sm)',
                                        color: 'var(--color-text-primary)'
                                    }}>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: 'var(--font-size-sm)',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: 'var(--space-md)',
                                        flex: 1
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.5rem',
                                        marginTop: 'auto'
                                    }}>
                                        {project.tech.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                style={{
                                                    fontFamily: 'var(--font-family-mono)',
                                                    fontSize: 'var(--font-size-xs)',
                                                    padding: '0.25rem 0.5rem',
                                                    background: 'var(--color-bg-tertiary)',
                                                    color: 'var(--color-text-muted)',
                                                    borderRadius: 'var(--radius-sm)',
                                                    border: '1px solid var(--color-border)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Gradient overlay on hover */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: 'var(--gradient-primary)',
                                        opacity: 0,
                                        transition: 'opacity var(--transition-base)'
                                    }}
                                        className="project-gradient"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            marginTop: 'var(--space-xl)',
                            textAlign: 'center',
                            padding: 'var(--space-lg)',
                            background: 'var(--color-bg-card)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                            margin: 0
                        }}>
                            Additional technical work includes contributions to open-source projects,
                            internal tools at financial institutions, and personal side projects.
                            Available upon request.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
        .card:hover .project-gradient {
          opacity: 1;
        }
      `}</style>
        </section>
    );
}
