import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgressBar = ({ 
  color = "bg-primary-600",
  height = "h-1",
  position = "fixed top-0 left-0 right-0",
  zIndex = "z-50"
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className={`${position} ${height} ${color} origin-left ${zIndex}`}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;