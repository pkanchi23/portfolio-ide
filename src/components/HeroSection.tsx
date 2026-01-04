'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PixelText from './PixelText';

export default function HeroSection() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
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

            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                padding: '0 var(--space-6)',
                maxWidth: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-12)',
                alignItems: 'center',
            }} className="hero-grid">

                {/* Left Column: Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ maxWidth: '600px' }}
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
                    <div style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 'var(--space-6)',
                        letterSpacing: '-0.02em',
                        color: 'var(--color-text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.3em',
                    }}>
                        <span>Hi, I&apos;m</span>
                        <PixelText text="Pranav!" pixelSize={3} style={{ transform: 'translateY(11%)' }} />
                    </div>

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

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-4)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-sm)',
                            marginBottom: 'var(--space-8)',
                        }}
                    >
                        <Link href="/about" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>A little about me</span>
                        </Link>
                        <Link href="/blog" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>some of what ive written</span>
                        </Link>
                        <Link href="/favorites" className="link-arrow" style={{ justifyContent: 'flex-start' }}>
                            <span>→</span>
                            <span>a list of some of my favorite things</span>
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            gap: 'var(--space-6)',
                            fontSize: 'var(--text-lg)',
                        }}
                    >
                        <a href="https://linkedin.com/in/pranavkanchi" target="_blank" rel="noopener noreferrer" className="link-hover">
                            <span className="sr-only">LinkedIn</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/pkanchi23" target="_blank" rel="noopener noreferrer" className="link-hover">
                            <span className="sr-only">GitHub</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.17.66-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.1-1.47-1.1-1.47-.9-.62.06-.6.06-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.02 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-hover">
                            <span className="sr-only">Twitter</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        position: 'relative',
                        aspectRatio: '3/4',
                        maxWidth: '400px',
                        justifySelf: 'end',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'none', // Hidden on mobile via CSS later
                    }}
                    className="hero-image"
                >
                    {/* Placeholder content until real image is added */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-subtle)',
                        fontSize: 'var(--text-sm)',
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)',
                        backgroundSize: '40px 40px',
                    }}>
                        [Your Image Here]
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        .link-hover {
          color: var(--color-text-secondary);
          transition: color 0.2s;
        }
        .link-hover:hover {
          color: var(--color-text-primary);
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
          .hero-image {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
