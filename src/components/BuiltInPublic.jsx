import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitCommit, FiUsers } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';

const BuiltInPublic = () => {
  // In a real implementation, these would be fetched from GitHub API
  const stats = {
    stars: 28,
    commits: "500+",
    contributors: "5+",
    lastRelease: "v0.8.0"
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built in Public
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visivo is open source and developed transparently. Follow our progress and contribute on GitHub.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FiStar className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.stars}</div>
              <div className="text-gray-600 dark:text-gray-400">GitHub Stars</div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FiGitCommit className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.commits}</div>
              <div className="text-gray-600 dark:text-gray-400">Commits</div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FiUsers className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.contributors}</div>
              <div className="text-gray-600 dark:text-gray-400">Contributors</div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FiGithub className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.lastRelease}</div>
              <div className="text-gray-600 dark:text-gray-400">Latest Release</div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Contribute to Visivo's development, report issues, suggest features, or just star us to show your support!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="https://github.com/visivo-io/visivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="h-5 w-5" />
                View on GitHub
              </motion.a>
              <motion.a
                href="https://github.com/visivo-io/visivo/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Report an Issue
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Recent Updates
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <FiGitCommit className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">
                Added support for BigQuery data sources
              </span>
              <span className="text-gray-500 dark:text-gray-500 text-xs">2 days ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiGitCommit className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">
                Improved dashboard rendering performance by 40%
              </span>
              <span className="text-gray-500 dark:text-gray-500 text-xs">5 days ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiGitCommit className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">
                New AI-powered YAML generation feature
              </span>
              <span className="text-gray-500 dark:text-gray-500 text-xs">1 week ago</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltInPublic;