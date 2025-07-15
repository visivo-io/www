// Shared animation variants and configurations for Framer Motion

// Basic animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

// Common viewport configuration for scroll-triggered animations
export const defaultViewport = {
  once: true,
  amount: 0.3
};

// Default transition configurations
export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut"
};

export const fastTransition = {
  duration: 0.3,
  ease: "easeOut"
};

export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15
};