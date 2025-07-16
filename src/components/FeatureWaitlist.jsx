import EmailCaptureForm from './EmailCaptureForm';
import { motion } from 'framer-motion';

const FeatureWaitlist = ({ 
  featureName = "Visual Editor", 
  featureDescription = "Drag-and-drop dashboard building coming soon",
  endpoint = "/.netlify/functions/collect-feature-waitlist"
}) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 mb-4">
          Coming Soon
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {featureName}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {featureDescription}
        </p>
      </div>
      
      <EmailCaptureForm
        title="Get Early Access"
        description="Be the first to know when this feature launches"
        buttonText="Join Waitlist"
        endpoint={endpoint}
        successMessage="You're on the list! We'll notify you when it's ready."
        placeholder="your@email.com"
      />
    </motion.div>
  );
};

export default FeatureWaitlist;