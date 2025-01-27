import { Button } from 'flowbite-react';
import InstallCommand from '../components/InstallCommand';

const FeatureCard = ({ title, description, icon }) => (
  <div className="flex flex-col rounded-lg border border-gray-200 p-6 dark:border-gray-700">
    <div className="mb-2 flex items-center">
      {icon}
      <h3 className="ml-2 text-xl font-bold dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);



export default function BusinessIntelligence() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            BI-as-Code
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Transform your business intelligence workflow with version control, automated testing, and infrastructure as code principles.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <FeatureCard
            title="Version Control"
            description="Track changes, collaborate with your team, and maintain dashboard version history using Git."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>}
          />
          
          <FeatureCard
            title="CI/CD Pipeline"
            description="Implement automated testing and deployment workflows for your dashboards."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>}
          />
          
          <FeatureCard
            title="Infrastructure as Code"
            description="Define and version your dashboard configurations using YAML."
            icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>}
          />
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-center dark:text-white">
            Get Started in Minutes
          </h2>
          <InstallCommand />
        </div>

        <div className="mt-16 text-center">
          <Button 
            href="https://docs.visivo.io" 
            color="primary"
            size="xl"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}