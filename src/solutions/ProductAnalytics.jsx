import { Button } from 'flowbite-react';

const BackgroundGraphic = () => (
  <svg
    className="absolute left-0 top-0 -z-10 opacity-10 dark:opacity-5"
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="100" r="80" />
    <rect x="160" y="200" width="80" height="80" />
    <path d="M200 300 L160 380 L240 380 Z" />
  </svg>
);

const CodeBlock = ({ children }) => (
  <div className="relative bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
    <button 
      onClick={() => navigator.clipboard.writeText(children)}
      className="absolute right-2 top-2 text-gray-400 hover:text-white"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </button>
    <pre className="text-gray-100 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function ProductAnalytics() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 pt-4 sm:py-16 sm:pt-16 lg:py-24 lg:pt-24">
        <BackgroundGraphic />
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Democratize your product data
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Give your customer teams real-time, granular reporting to drive product engagement.
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <CodeBlock>
            git clone https://github.com/visivo-io/visivo-example.git
            cd visivo-examples/visivo-product-app
            visivo serve
          </CodeBlock>
        </div>

        <div className="mt-4 text-center">
          <a 
            href="/examples" 
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
          >
            View example dashboard 
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 