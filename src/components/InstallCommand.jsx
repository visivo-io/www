import { useState } from 'react';

const InstallCommand = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pip install visivo');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <div className="relative flex">
          <code className="flex w-full items-center rounded-l-lg bg-gray-50 p-3 text-sm text-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <span className="text-gray-500 dark:text-gray-500">$</span>
            <span className="mx-auto">pip install visivo</span>
          </code>
          <button
            className="rounded-r-lg bg-gray-200 px-4 py-2 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
            onClick={handleCopy}
          >
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </button>
          {showCopied && (
            <div className="absolute -top-8 right-0 rounded bg-gray-800 px-2 py-1 text-sm text-white">
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallCommand;
