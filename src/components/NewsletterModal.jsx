import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import EmailCaptureForm from './EmailCaptureForm';

const NewsletterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FiX className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
              
              <EmailCaptureForm
                title="Join Our Newsletter"
                description="Get weekly insights on BI best practices, product updates, and industry trends"
                buttonText="Subscribe"
                endpoint="/.netlify/functions/collect-newsletter"
                successMessage="Welcome to the Visivo community!"
              />
              
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;