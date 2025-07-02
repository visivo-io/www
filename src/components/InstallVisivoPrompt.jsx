import InstallCommand from './InstallCommand';

const InstallVisivoPrompt = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[220px] bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg relative overflow-hidden p-6 mt-6 w-full max-w-xl mx-auto">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10" style={{position: 'absolute', top: 0, left: 0}}>
          <defs>
            <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" className="dark:hidden" />
          <rect width="100%" height="100%" fill="url(#grid-dark)" className="hidden dark:block" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <span className="text-sm font-semibold tracking-widest text-highlight-500 dark:text-highlight-400 mb-4 uppercase">Install Visivo</span>
        <InstallCommand />
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
          Or see other{' '}
          <a
            href="https://github.com/visivo-io/visivo?tab=readme-ov-file#install"
            className="font-semibold text-highlight-500 dark:text-highlight-400 hover:underline inline-flex items-center transition-colors"
          >
            install options
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallVisivoPrompt; 