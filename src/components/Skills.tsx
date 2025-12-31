'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportSettings } from '@/utils/animations';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const technicalSkills = [
    { skill: 'Python', level: 90 },
    { skill: 'Excel/VBA', level: 95 },
    { skill: 'SQL', level: 85 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'Machine Learning', level: 85 },
    { skill: 'Financial Modeling', level: 95 },
];

const skillCategories = [
    {
        category: 'Investment Banking',
        skills: ['M&A Advisory', 'Debt Financing', 'Valuation', 'Financial Modeling', 'Due Diligence', 'CIM Creation']
    },
    {
        category: 'Technical Skills',
        skills: ['Python', 'TypeScript', 'Machine Learning', 'NLP', 'Data Analysis', 'Full-Stack Development']
    },
    {
        category: 'Tools & Platforms',
        skills: ['Capital IQ', 'PitchBook', 'Bloomberg', 'AWS', 'Git', 'Figma']
    },
    {
        category: 'Soft Skills',
        skills: ['Leadership', 'Client Management', 'Presentation', 'Team Collaboration', 'Problem Solving']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={viewportSettings}
                >
                    <motion.div variants={fadeInUp}>
                        <p className="section-title">Capabilities</p>
                        <h2 className="section-heading">Key Metrics</h2>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--space-xl)',
                        marginBottom: 'var(--space-2xl)'
                    }}>
                        {/* Technical Proficiency Chart */}
                        <motion.div
                            variants={fadeInUp}
                            className="card card-elevated"
                            
                        >
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--space-lg)',
                                color: 'var(--color-accent-gold)',
                                textAlign: 'center'
                            }}>
                                Technical Proficiency
                            </h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <RadarChart data={technicalSkills}>
                                    <PolarGrid stroke="var(--color-border-light)" />
                                    <PolarAngleAxis
                                        dataKey="skill"
                                        tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                                    />
                                    <PolarRadiusAxis
                                        angle={90}
                                        domain={[0, 100]}
                                        tick={{ fill: 'var(--color-text-muted)', fontSize: 10 }}
                                    />
                                    <Radar
                                        name="Skill Level"
                                        dataKey="level"
                                        stroke="var(--color-accent-primary)"
                                        fill="var(--color-accent-primary)"
                                        fillOpacity={0.3}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            variants={fadeInUp}
                            className="card card-elevated"
                        >
                            <h3 style={{
                                fontSize: 'var(--font-size-xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--space-lg)',
                                color: 'var(--color-accent-gold)'
                            }}>
                                Career Highlights
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-md)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--space-sm)',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                        Total Transactions
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-family-mono)',
                                        fontSize: 'var(--font-size-xl)',
                                        fontWeight: 700,
                                        color: 'var(--color-accent-primary)'
                                    }}>
                                        5+
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--space-sm)',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                        Deal Value
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-family-mono)',
                                        fontSize: 'var(--font-size-xl)',
                                        fontWeight: 700,
                                        color: 'var(--color-accent-primary)'
                                    }}>
                                        $2B+
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--space-sm)',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                        GPA (NYU)
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-family-mono)',
                                        fontSize: 'var(--font-size-xl)',
                                        fontWeight: 700,
                                        color: 'var(--color-accent-primary)'
                                    }}>
                                        3.95
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 'var(--space-sm)',
                                    background: 'var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                                        ML Accuracy Gain
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-family-mono)',
                                        fontSize: 'var(--font-size-xl)',
                                        fontWeight: 700,
                                        color: 'var(--color-accent-green)'
                                    }}>
                                        +72%
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skill Categories Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--space-lg)'
                    }}>
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="card"
                            >
                                <h4 style={{
                                    fontSize: 'var(--font-size-lg)',
                                    fontWeight: 600,
                                    marginBottom: 'var(--space-md)',
                                    color: 'var(--color-accent-primary)'
                                }}>
                                    {category.category}
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem'
                                }}>
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            style={{
                                                fontSize: 'var(--font-size-xs)',
                                                padding: '0.4rem 0.75rem',
                                                background: 'var(--color-bg-elevated)',
                                                color: 'var(--color-text-secondary)',
                                                borderRadius: 'var(--radius-sm)',
                                                border: '1px solid var(--color-border)'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
