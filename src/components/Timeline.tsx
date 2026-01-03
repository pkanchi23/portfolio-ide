'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Timeline.module.css';

interface TimelineEvent {
  type: 'work' | 'education';
  company?: string;
  school?: string;
  role?: string;
  degree?: string;
  location?: string;
  period: string;
  description?: string;
  image?: string;
  gpa?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.timeline}>
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          className={styles.timelineItem}
          data-testid="timeline-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <div className={styles.timelineDot} />
          <div className={styles.timelineContent} onClick={() => handleToggle(idx)}>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {event.type === 'work' ? event.company : event.school}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent)' }}>
              {event.type === 'work' ? event.role : event.degree}
            </p>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
              {event.period} {event.location && `• ${event.location}`}
            </p>
            <AnimatePresence>
              {expandedId === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-3)' }}>
                    {event.description}
                  </p>
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={`${event.company || event.school} image`}
                      width={500}
                      height={300}
                      className={styles.timelineImage}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
