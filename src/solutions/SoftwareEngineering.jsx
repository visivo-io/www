import { Button } from 'flowbite-react';
import InstallCommand from '../components/InstallCommand';

const BackgroundGraphic = () => (
  <svg
    className="absolute left-0 top-0 -z-10 opacity-10 dark:opacity-5"
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 200 L350 200" strokeWidth="20" stroke="currentColor" />
    <circle cx="150" cy="200" r="20" />
    <circle cx="250" cy="200" r="20" />
    <path d="M150 150 L150 250 M250 150 L250 250" strokeWidth="4" stroke="currentColor" />
  </svg>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="flex flex-col rounded-lg border border-gray-200 p-6 dark:border-gray-700">
    <div className="mb-2 flex items-center">
      {icon}
      <h3 className="ml-2 text-xl font-bold dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);


export default function SoftwareEngineering() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 pt-4 sm:py-16 sm:pt-16 lg:py-24 lg:pt-24">
        <BackgroundGraphic />
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Ship Features with Confidence
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Monitor your features from day one by integrating analytics directly into your development workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <FeatureCard
            title="Feature Monitoring"
            description="Track feature adoption and performance metrics from the moment code is deployed."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>}
          />
          
          <FeatureCard
            title="Git-Based Analytics"
            description="Define metrics alongside your feature code, ensuring analytics evolve with your codebase."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
          />
          
          <FeatureCard
            title="CI/CD Integration"
            description="Automatically validate and deploy analytics changes with your existing CI/CD pipeline."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>}
          />
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <InstallCommand />
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