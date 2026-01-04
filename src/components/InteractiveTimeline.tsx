'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './InteractiveTimeline.module.css';

export interface TimelineEvent {
    id: string;
    type: 'work' | 'education';
    title: string;
    subtitle: string;
    location: string;
    period: string;
    description: string;
    details?: string[];
    images?: string[];
}

interface InteractiveTimelineProps {
    events: TimelineEvent[];
}

const InteractiveTimeline = ({ events }: InteractiveTimelineProps) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Background color transition from present (lighter) to past (darker)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ['rgba(0, 0, 0, 0.95)', 'rgba(5, 5, 15, 0.98)', 'rgba(10, 10, 25, 1)']
    );

    // Track which item is currently in view
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        itemRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    },
                    { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
                );
                observer.observe(ref);
                observers.push(observer);
            }
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, [events]);

    const handleToggle = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const scrollToItem = (index: number) => {
        itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    return (
        <motion.div
            ref={containerRef}
            className={styles.timelineContainer}
            style={{ backgroundColor }}
        >
            {/* Vignette overlays for "digging" effect */}
            <div className={styles.vignetteTop} />
            <div className={styles.vignetteBottom} />

            {/* Progress indicator dots */}
            <nav className={styles.progressNav}>
                {events.map((event, index) => (
                    <button
                        key={event.id}
                        className={`${styles.progressDot} ${activeIndex === index ? styles.progressDotActive : ''}`}
                        onClick={() => scrollToItem(index)}
                        aria-label={`Jump to ${event.title}`}
                    >
                        <span className={styles.progressTooltip}>{event.title}</span>
                    </button>
                ))}
                <div
                    className={styles.progressLine}
                    style={{
                        background: `linear-gradient(to bottom, var(--color-accent) ${(activeIndex / (events.length - 1)) * 100}%, var(--color-border) ${(activeIndex / (events.length - 1)) * 100}%)`
                    }}
                />
            </nav>

            {/* Timeline content */}
            <div className={styles.timelineContent}>
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        className={styles.timelineItem}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        {/* Year/Period marker */}
                        <div className={styles.periodMarker}>
                            <span className={styles.periodText}>{event.period}</span>
                            <div className={styles.periodLine} />
                        </div>

                        {/* Main card */}
                        <motion.div
                            className={`${styles.card} ${expandedId === event.id ? styles.cardExpanded : ''}`}
                            onClick={() => handleToggle(event.id)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    {event.type === 'work' ? '💼' : '🎓'}
                                </div>
                                <div className={styles.cardTitleGroup}>
                                    <h3 className={styles.cardTitle}>{event.title}</h3>
                                    <p className={styles.cardSubtitle}>{event.subtitle}</p>
                                    <p className={styles.cardLocation}>{event.location}</p>
                                </div>
                                <motion.div
                                    className={styles.expandIcon}
                                    animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                                >
                                    ▼
                                </motion.div>
                            </div>

                            <p className={styles.cardDescription}>{event.description}</p>

                            <AnimatePresence>
                                {expandedId === event.id && (
                                    <motion.div
                                        className={styles.cardExpansion}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                    >
                                        {/* Details list */}
                                        {event.details && event.details.length > 0 && (
                                            <ul className={styles.detailsList}>
                                                {event.details.map((detail, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Image gallery */}
                                        {event.images && event.images.length > 0 && (
                                            <div className={styles.imageGallery}>
                                                {event.images.map((img, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={styles.imageWrapper}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.2 + i * 0.1 }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`${event.title} - Image ${i + 1}`}
                                                            fill
                                                            className={styles.image}
                                                            sizes="(max-width: 768px) 100vw, 300px"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Depth indicator line */}
                        {index < events.length - 1 && (
                            <motion.div
                                className={styles.depthConnector}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                        )}
                    </motion.div>
                ))}

                {/* Bottom "end of journey" marker */}
                <motion.div
                    className={styles.journeyEnd}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                >
                    <div className={styles.journeyEndIcon}>🌱</div>
                    <p>Where it all began</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default InteractiveTimeline;
