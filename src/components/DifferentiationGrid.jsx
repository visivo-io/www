import { motion } from 'framer-motion';
import { FiHome, FiGitBranch, FiCpu, FiGlobe } from 'react-icons/fi';
import { staggerContainer, fadeInUp } from '../utils/animations';

const DifferentiationGrid = () => {
  const features = [
    {
      icon: <FiHome className="h-8 w-8" />,
      title: "Local-First Development",
      description: "Work offline with instant feedback. No cloud delays, no waiting for deployments. Your laptop is your development environment.",
      benefits: ["Instant hot reload", "Work without internet", "Zero latency feedback"]
    },
    {
      icon: <FiGitBranch className="h-8 w-8" />,
      title: "Git-Native BI",
      description: "Version control for dashboards. Code review for metrics. Roll back bad changes. BI finally gets real software engineering practices.",
      benefits: ["Version control", "Code review process", "Easy rollbacks"]
    },
    {
      icon: <FiCpu className="h-8 w-8" />,
      title: "AI-Powered Assistance",
      description: "LLMs understand your semantic layer. Generate YAML from natural language. Both analysts and engineers can build with AI help.",
      benefits: ["Natural language queries", "Smart YAML generation", "Context-aware assistance"]
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: "Deploy Anywhere",
      description: "Self-host on your infrastructure or use our cloud. No vendor lock-in. Your data stays where you want it.",
      benefits: ["Self-host option", "Cloud available", "No vendor lock-in"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Visivo is Different
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're not just another BI tool. We're bringing modern software engineering to business intelligence.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                    <div className="text-primary-600 dark:text-primary-400">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Stop fighting your BI tool. Start building with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationGrid;