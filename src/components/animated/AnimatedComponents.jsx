import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../cards/FeatureCard';
import BenefitItem from '../cards/BenefitItem';
import CodeExample from '../cards/CodeExample';
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
  scaleIn, 
  slideInFromLeft, 
  slideInFromRight,
  defaultViewport,
  defaultTransition
} from '../../utils/animations';

// Animated wrapper for FeatureCard
export const AnimatedFeatureCard = ({ icon, title, description, color }) => (
  <motion.div
    className="h-full"
    variants={fadeInUp}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
  >
    <FeatureCard icon={icon} title={title} description={description} color={color} />
  </motion.div>
);

// Animated wrapper for BenefitItem
export const AnimatedBenefitItem = ({ icon, text }) => (
  <motion.div variants={fadeInUp}>
    <BenefitItem icon={icon} text={text} />
  </motion.div>
);

// Animated wrapper for CodeExample
export const AnimatedCodeExample = ({ title, code, language }) => (
  <motion.div
    variants={scaleIn}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
  >
    <CodeExample title={title} code={code} language={language} />
  </motion.div>
);

// Generic animated section wrapper
export const AnimatedSection = ({ 
  children, 
  className = "",
  initial = "hidden",
  whileInView = "visible",
  viewport = defaultViewport,
  variants = fadeIn,
  ...props 
}) => (
  <motion.div
    className={className}
    initial={initial}
    whileInView={whileInView}
    viewport={viewport}
    variants={variants}
    {...props}
  >
    {children}
  </motion.div>
);

// Animated container with stagger effect for children
export const AnimatedStaggerContainer = ({ 
  children, 
  className = "",
  initial = "hidden",
  whileInView = "visible",
  viewport = defaultViewport,
  ...props 
}) => (
  <motion.div
    className={className}
    initial={initial}
    whileInView={whileInView}
    viewport={viewport}
    variants={staggerContainer}
    {...props}
  >
    {children}
  </motion.div>
);

// Pre-configured animated elements
export const AnimatedH1 = ({ children, className, delay = 0, ...props }) => (
  <motion.h1
    className={className}
    variants={fadeInUp}
    transition={{ duration: 0.8, delay }}
    {...props}
  >
    {children}
  </motion.h1>
);

export const AnimatedH2 = ({ children, className, delay = 0, ...props }) => (
  <motion.h2
    className={className}
    variants={fadeInUp}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.h2>
);

export const AnimatedP = ({ children, className, delay = 0, ...props }) => (
  <motion.p
    className={className}
    variants={fadeInUp}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.p>
);

export const AnimatedDiv = ({ children, className, variants = fadeIn, ...props }) => (
  <motion.div
    className={className}
    variants={variants}
    {...props}
  >
    {children}
  </motion.div>
);