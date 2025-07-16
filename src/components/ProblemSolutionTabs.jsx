import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiAlertTriangle, FiUsers, FiCheck } from 'react-icons/fi';

const ProblemSolutionTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Slow Development Cycles",
      icon: <FiClock className="h-5 w-5" />,
      problem: {
        title: "Waiting hours for dashboards to update in production",
        description: "Every change requires deployment, waiting for CI/CD, and hoping nothing breaks. Developers waste hours on feedback loops.",
        pain: "5+ hours wasted per week on deployment cycles"
      },
      solution: {
        title: "Local development with instant hot reload",
        description: "Work offline with visivo serve. See changes immediately. No cloud delays, no deployment queues.",
        features: [
          "Instant feedback with hot reload",
          "Work offline - no internet required",
          "Test with real data locally",
          "Zero deployment time during development"
        ],
        command: "visivo serve"
      }
    },
    {
      id: 1,
      title: "Broken Dashboards",
      icon: <FiAlertTriangle className="h-5 w-5" />,
      problem: {
        title: "Production breaks when upstream data changes",
        description: "A renamed column or schema change breaks dashboards. You find out when stakeholders complain.",
        pain: "30% of dashboards break monthly from data changes"
      },
      solution: {
        title: "Automatic lineage tracking + deploy-based architecture",
        description: "Visivo tracks dependencies automatically. Know what breaks before deployment. Roll back instantly with Git.",
        features: [
          "Automatic dependency tracking",
          "Pre-deployment validation",
          "Git-based rollbacks",
          "Never deploy broken dashboards"
        ],
        command: "visivo test && visivo deploy"
      }
    },
    {
      id: 2,
      title: "Team Silos",
      icon: <FiUsers className="h-5 w-5" />,
      problem: {
        title: "Analysts can't contribute, engineers become bottlenecks",
        description: "Analysts have ideas but can't implement. Engineers drowning in dashboard requests. No collaboration.",
        pain: "70% of BI requests stuck in engineering backlog"
      },
      solution: {
        title: "Git workflow + semantic layer + AI assistance",
        description: "Analysts contribute via pull requests. AI understands your data model. Everyone can build dashboards.",
        features: [
          "Semantic layer both can understand",
          "AI assists with YAML generation",
          "Git enables code review",
          "True collaborative BI"
        ],
        command: "git checkout -b analyst-dashboard"
      }
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your BI Problems, Solved
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how Visivo eliminates the pain points that slow down your data team
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${activeTab === tab.id 
                  ? 'bg-primary-500 text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              `}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Side */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 dark:bg-red-800/50 rounded-lg">
                    <FiAlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">The Problem</h3>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tabs[activeTab].problem.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {tabs[activeTab].problem.description}
                </p>
                <div className="p-4 bg-red-100 dark:bg-red-800/30 rounded-lg">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    Impact: {tabs[activeTab].problem.pain}
                  </p>
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-800/50 rounded-lg">
                    <FiCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">The Solution</h3>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tabs[activeTab].solution.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {tabs[activeTab].solution.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {tabs[activeTab].solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FiCheck className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                {tabs[activeTab].solution.command && (
                  <div className="p-3 bg-gray-800 dark:bg-gray-900 rounded-lg">
                    <code className="text-sm text-green-400 font-mono">
                      $ {tabs[activeTab].solution.command}
                    </code>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProblemSolutionTabs;