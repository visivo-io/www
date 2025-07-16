import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiUsers } from 'react-icons/fi';

const MetricsBar = () => {
  return (
    <motion.div 
      className="w-full py-8 bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiDownload className="h-5 w-5 text-primary-500 dark:text-primary-400" />
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-white">Thousands</span> of installs
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiStar className="h-5 w-5 text-primary-500 dark:text-primary-400" />
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-white">28</span> GitHub stars
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiUsers className="h-5 w-5 text-primary-500 dark:text-primary-400" />
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-white">Growing</span> community
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MetricsBar;