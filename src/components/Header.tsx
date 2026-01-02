'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/favorites', label: 'Favorites' },
    { href: '/blog', label: 'Articles' },
    { href: '/cli', label: 'CLI' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 'var(--z-sticky)',
                padding: 'var(--space-4) 0',
                background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
                transition: 'all var(--transition-base)',
            }}
        >
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <Link href="/" style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                }}>
                    pranav<span style={{ color: 'var(--color-accent)' }}>.</span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="btn btn-ghost"
                            style={{
                                fontSize: 'var(--text-sm)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        padding: 'var(--space-2)',
                    }}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {mobileMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(12px)',
                        borderBottom: '1px solid var(--color-border)',
                        padding: 'var(--space-4)',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                display: 'block',
                                padding: 'var(--space-3) var(--space-4)',
                                color: 'var(--color-text-secondary)',
                                fontSize: 'var(--text-base)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
