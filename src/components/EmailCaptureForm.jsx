import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiCheck, FiX } from 'react-icons/fi';

const EmailCaptureForm = ({ 
  title = "Stay Updated",
  description = "Get the latest updates on new features and improvements",
  buttonText = "Subscribe",
  endpoint = "/.netlify/functions/collect-newsletter",
  successMessage = "Thanks for subscribing!",
  placeholder = "Enter your email",
  additionalData = {}
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }

    setStatus('loading');
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, ...additionalData }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(successMessage);
        setEmail('');
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiMail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === 'loading' || status === 'success'}
            className={`
              block w-full pl-10 pr-3 py-3 border rounded-lg 
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed
              ${status === 'error' 
                ? 'border-red-500 dark:border-red-400' 
                : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800'
              }
            `}
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`
            w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium
            transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${status === 'success'
              ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500'
              : 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500'
            }
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
              />
            )}
            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <FiCheck className="h-5 w-5" />
              </motion.div>
            )}
            {(status === 'idle' || status === 'error') && (
              <motion.span
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {buttonText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`
                text-sm text-center
                ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}
              `}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default EmailCaptureForm;