'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        }}>
            {/* Subtle grid pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
                backgroundSize: '48px 48px',
                pointerEvents: 'none',
                opacity: 0.5,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                        maxWidth: '700px',
                    }}
                >
                    {/* Terminal-style prompt */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-subtle)',
                            marginBottom: 'var(--space-8)',
                        }}
                    >
                        pranav@portfolio:~$
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            marginBottom: 'var(--space-6)',
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        Pranav Kanchi
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: 'var(--space-10)',
                        }}
                    >
                        Investment Banking Analyst at Goldman Sachs. Working at the intersection of
                        finance, technology, and machine learning.
                    </motion.p>

                    {/* Links (text-based, not buttons) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-sm)',
                        }}
                    >
                        <Link href="/cli" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>Explore CLI portfolio</span>
                        </Link>
                        <Link href="/blog" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>Read articles</span>
                        </Link>
                        <Link href="/about" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>About me</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
