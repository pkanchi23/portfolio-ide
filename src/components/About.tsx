'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    {/* Section Header */}
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Investment Thesis</p>
                        <h2 className="section-heading">Executive Summary</h2>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--space-xl)',
                        marginBottom: 'var(--space-2xl)'
                    }}>
                        {/* Left: Professional Summary */}
                        <motion.div
                            variants={fadeInUp}
                            className="card card-elevated"
                        >
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--space-md)',
                                color: 'var(--color-accent-gold)'
                            }}>
                                Profile
                            </h3>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Investment banking analyst at <strong style={{ color: 'var(--color-text-primary)' }}>Goldman Sachs</strong> covering infrastructure software, with unique
                                dual expertise in finance and computer science.
                            </p>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Previously at <strong style={{ color: 'var(--color-text-primary)' }}>Guggenheim Partners</strong> working on high-profile M&A transactions
                                including Scale Computing's merger with Acumera and SingleStore's growth buyout.
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                Graduated from <strong style={{ color: 'var(--color-text-primary)' }}>NYU Stern</strong> (Finance, 3.95 GPA) and <strong style={{ color: 'var(--color-text-primary)' }}>NYU Tandon</strong> (Computer Science),
                                combining technical depth with financial acumen.
                            </p>
                        </motion.div>

                        {/* Right: Core Competencies */}
                        <motion.div
                            variants={fadeInUp}
                            className="card card-elevated"
                        >
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                marginBottom: 'var(--space-md)',
                                color: 'var(--color-accent-gold)'
                            }}>
                                Core Competencies
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                <div>
                                    <h4 style={{
                                        fontSize: 'var(--font-size-base)',
                                        fontWeight: 600,
                                        color: 'var(--color-text-primary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Investment Banking
                                    </h4>
                                    <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                        M&A advisory, debt financing, financial modeling, valuation
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{
                                        fontSize: 'var(--font-size-base)',
                                        fontWeight: 600,
                                        color: 'var(--color-text-primary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Technical Skills
                                    </h4>
                                    <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                        Python, TypeScript, Machine Learning, Full-Stack Development
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{
                                        fontSize: 'var(--font-size-base)',
                                        fontWeight: 600,
                                        color: 'var(--color-text-primary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Leadership
                                    </h4>
                                    <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                        President of Entrepreneurial Exchange, IB Mentor, Venture Fellow
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Highlights */}
                    <motion.div variants={fadeInUp}>
                        <h3 style={{
                            fontSize: 'var(--font-size-xl)',
                            marginBottom: 'var(--space-lg)',
                            textAlign: 'center'
                        }}>
                            Key Differentiators
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 'var(--space-md)'
                        }}>
                            <div className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    💼
                                </div>
                                <h4 style={{
                                    fontSize: 'var(--font-size-lg)',
                                    fontWeight: 600,
                                    marginBottom: 'var(--space-xs)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Deal Experience
                                </h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                    Only analyst on Databricks Series L, led multiple M&A and financing transactions
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    🤖
                                </div>
                                <h4 style={{
                                    fontSize: 'var(--font-size-lg)',
                                    fontWeight: 600,
                                    marginBottom: 'var(--space-xs)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    AI Champion
                                </h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                    Implementing AI workflows at GS, only analyst with developer access
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    🚀
                                </div>
                                <h4 style={{
                                    fontSize: 'var(--font-size-lg)',
                                    fontWeight: 600,
                                    marginBottom: 'var(--space-xs)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Startup Focus
                                </h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                                    Venture Fellow at CerraCap, ML Intern at RillaVoice, deep tech ecosystem knowledge
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
