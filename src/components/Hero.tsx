'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';

export default function Hero() {
    return (
        <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    style={{ maxWidth: '900px' }}
                >
                    {/* Confidential Information Memorandum Style Header */}
                    <motion.div variants={fadeInUp} style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '0.5rem'
                        }}>
                            <span className="badge badge-gold">CONFIDENTIAL</span>
                            <span style={{
                                fontFamily: 'var(--font-family-mono)',
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-muted)',
                                letterSpacing: '0.1em'
                            }}>
                                DATED: DECEMBER 2024
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--color-accent-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            Investment Profile
                        </h1>
                    </motion.div>

                    {/* Name & Title */}
                    <motion.div variants={fadeInUp} style={{ marginBottom: '3rem' }}>
                        <h1 style={{
                            fontSize: 'var(--font-size-5xl)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                            background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-text-secondary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Pranav Kanchi
                        </h1>
                        <p style={{
                            fontSize: 'var(--font-size-xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: '0.5rem'
                        }}>
                            Investment Banking Analyst @ Goldman Sachs
                        </p>
                        <p style={{
                            fontSize: 'var(--font-size-base)',
                            color: 'var(--color-text-muted)',
                            maxWidth: '600px',
                            lineHeight: 1.7
                        }}>
                            Infrastructure Software Coverage · AI Champion · Full-Stack Developer
                        </p>
                    </motion.div>

                    {/* Executive Summary - Key Stats */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: 'var(--space-lg)',
                            padding: 'var(--space-xl)',
                            background: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem'
                        }}
                    >
                        <div className="stat-card" style={{ padding: 0 }}>
                            <div className="stat-value">5+</div>
                            <div className="stat-label">Transactions</div>
                        </div>
                        <div className="stat-card" style={{ padding: 0 }}>
                            <div className="stat-value">$2B+</div>
                            <div className="stat-label">Deal Value</div>
                        </div>
                        <div className="stat-card" style={{ padding: 0 }}>
                            <div className="stat-value">3.95</div>
                            <div className="stat-label">GPA</div>
                        </div>
                        <div className="stat-card" style={{ padding: 0 }}>
                            <div className="stat-value">4</div>
                            <div className="stat-label">Years</div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            display: 'flex',
                            gap: 'var(--space-md)',
                            flexWrap: 'wrap'
                        }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            Get in Touch
                        </a>
                        <a href="#experience" className="btn btn-secondary">
                            View Transaction History
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            marginTop: '4rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--color-text-muted)',
                            fontSize: 'var(--font-size-sm)'
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            style={{
                                width: '20px',
                                height: '30px',
                                border: '2px solid var(--color-border-light)',
                                borderRadius: '12px',
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: '6px'
                            }}
                        >
                            <div style={{
                                width: '3px',
                                height: '6px',
                                background: 'var(--color-accent-primary)',
                                borderRadius: '2px'
                            }} />
                        </motion.div>
                        <span>Scroll to explore</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
