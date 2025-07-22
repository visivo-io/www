import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ToolStackAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const tools = [
    {
      name: 'Claude Code',
      logo: '/images/claude-logo.webp',
      url: 'https://claude.ai/code',
      description: 'AI Development Assistant'
    },
    {
      name: 'DLT',
      logo: '/images/dlt-logo.svg',
      url: 'https://dlthub.com',
      description: 'Data Load Tool'
    },
    {
      name: 'DuckDB',
      logo: '/images/duckdb-logo.svg',
      url: 'https://duckdb.org',
      description: 'Analytics Database'
    },
    {
      name: 'Visivo',
      logo: '/images/logo.webp',
      url: 'https://visivo.io',
      description: 'Visualization Framework'
    },
    {
      name: 'UV',
      logo: '/images/uv-logo.svg',
      url: 'https://github.com/astral-sh/uv',
      description: 'Package Manager'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const plusVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const equalsVariants = {
    hidden: { 
      opacity: 0,
      width: 0
    },
    visible: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Tools Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          {tools.map((tool, index) => (
            <React.Fragment key={tool.name}>
              {/* Tool Logo */}
              <motion.a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                variants={logoVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{tool.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{tool.description}</p>
                  </div>
                </div>
              </motion.a>
              
              {/* Plus Sign (not after last item) */}
              {index < tools.length - 1 && (
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400"
                  variants={plusVariants}
                >
                  +
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Equals Sign */}
        <motion.div
          className="flex items-center space-x-4"
          variants={equalsVariants}
        >
          <div className="h-1 w-8 lg:w-12 bg-primary-600 dark:bg-primary-400" />
          <div className="h-1 w-8 lg:w-12 bg-primary-600 dark:bg-primary-400" />
        </motion.div>

        {/* Result Text */}
        <motion.div
          className="text-center"
          variants={textVariants}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI-Native BI Stack
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Combine these powerful tools to build complete analytics solutions through natural conversation
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ToolStackAnimation;