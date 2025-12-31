// Animation Utilities for Framer Motion
// Consistent, reusable animation variants

import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
    },
  },
};

// Fade in
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger children animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale on hover
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
};

// Glow effect
export const glowEffect = {
  boxShadow: [
    '0 0 20px rgba(74, 159, 255, 0.3)',
    '0 0 30px rgba(74, 159, 255, 0.5)',
    '0 0 20px rgba(74, 159, 255, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Viewport animation settings
export const viewportSettings = {
  once: true,
  amount: 0.3,
  margin: '-50px',
};
