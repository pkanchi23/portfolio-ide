'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';

export default function Contact() {
    return (
        <section id="contact" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container container-narrow">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                    style={{ textAlign: 'center' }}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Get in Touch</p>
                        <h2 className="section-heading">Contact Information</h2>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="card card-elevated"
                        style={{
                            padding: 'var(--space-2xl)',
                            marginBottom: 'var(--space-xl)'
                        }}
                    >
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-xl)',
                            lineHeight: 1.7
                        }}>
                            Interested in discussing investment banking, technology, or potential opportunities?
                            Feel free to reach out.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: 'var(--space-lg)',
                            marginBottom: 'var(--space-xl)'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Email
                                </div>
                                <a
                                    href="mailto:pranavkanchi23@gmail.com"
                                    style={{
                                        fontSize: 'var(--font-size-base)',
                                        color: 'var(--color-accent-primary)',
                                        fontWeight: 600
                                    }}
                                >
                                    pranavkanchi23@gmail.com
                                </a>
                            </div>

                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Location
                                </div>
                                <p style={{
                                    fontSize: 'var(--font-size-base)',
                                    color: 'var(--color-text-secondary)',
                                    margin: 0,
                                    fontWeight: 600
                                }}>
                                    San Francisco, CA
                                </p>
                            </div>

                            <div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Phone
                                </div>
                                <a
                                    href="tel:+19493818482"
                                    style={{
                                        fontSize: 'var(--font-size-base)',
                                        color: 'var(--color-accent-primary)',
                                        fontWeight: 600
                                    }}
                                >
                                    (949) 381-8482
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 'var(--space-md)',
                            flexWrap: 'wrap'
                        }}>
                            <a
                                href="https://www.linkedin.com/in/pranavkanchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/pranavkanchi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        variants={fadeInUp}
                        style={{
                            paddingTop: 'var(--space-xl)',
                            borderTop: '1px solid var(--color-border)',
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-muted)'
                        }}
                    >
                        <p style={{ marginBottom: '0.5rem' }}>
                            © {new Date().getFullYear()} Pranav Kanchi. All rights reserved.
                        </p>
                        <p style={{
                            fontFamily: 'var(--font-family-mono)',
                            fontSize: 'var(--font-size-xs)',
                            margin: 0
                        }}>
                            Built with Next.js · Designed with Investment Banking Aesthetics
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
