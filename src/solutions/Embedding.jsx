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
    <rect x="100" y="100" width="200" height="200" strokeWidth="20" stroke="currentColor" fill="none" />
    <rect x="150" y="150" width="100" height="100" strokeWidth="4" stroke="currentColor" fill="none" />
    <path d="M50 200 L350 200 M200 50 L200 350" strokeWidth="4" stroke="currentColor" strokeDasharray="10,10" />
  </svg>
);

const SectionTitle = ({ children, align = "left" }) => (
  <h2 className={`mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl ${align === "center" ? "text-center" : ""}`}>
    {children}
  </h2>
);

const SectionText = ({ children, large }) => (
  <p className={`mb-8 ${large ? "text-xl" : "text-lg"} text-gray-600 dark:text-gray-400 leading-relaxed`}>
    {children}
  </p>
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

const CodeSnippet = () => (
  <div className="mb-8 rounded-lg bg-gray-900 p-6 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="text-gray-400 text-sm">embed.jsx</span>
    </div>
    <pre className="text-sm text-gray-100">
      <code>{`import { VisivoEmbed } from '@visivo/embed';

const Dashboard = () => (
  <VisivoEmbed
    dashboardId="your-dashboard-id"
    token={process.env.VISIVO_TOKEN}
    theme="light"
  />
);`}</code>
    </pre>
  </div>
);

export default function Embedding() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 pt-4 sm:py-16 sm:pt-16 lg:py-24 lg:pt-24">
        <BackgroundGraphic />
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Embed Analytics Anywhere
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Seamlessly integrate Visivo's powerful analytics into your applications with our flexible embedding solutions.
          </p>
        </div>

        {/* Challenge Section */}
        <div className="mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-100 rounded-full dark:bg-primary-900 opacity-50"></div>
                <SectionTitle>The Challenge</SectionTitle>
                <SectionText large>
                  Modern applications demand accurate and tested analytics that seamlessly blend with their existing user interface.
                </SectionText>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Traditional solutions require context switching, disrupting user workflows</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Building analytics from scratch is time-consuming and resource-intensive</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Maintaining custom analytics becomes a burden on engineering teams</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-1">
              <div className="relative rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-lg">
                <img 
                  src="/images/embedding.png" 
                  alt="Analytics Challenge Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-100 rounded-full dark:bg-green-900 opacity-50"></div>
                <SectionTitle>Our Solution</SectionTitle>
                <SectionText large>
                  Visivo's embedding solution provides a flexible, secure, and easy-to-implement way to integrate analytics 
                  directly into your application.
                </SectionText>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Seamless integration with your existing UI</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Simple implementation with just a few lines of code</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-400">Zero maintenance overhead for your team</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <CodeSnippet />
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <FeatureCard
              title="Modular Integration"
              description="Embed individual charts, complete dashboards, or custom analytics components with just a few lines of code."
              icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>}
            />
            
            <FeatureCard
              title="Secure & Customizable"
              description="Control access with token-based authentication and customize the look and feel to match your brand."
              icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>}
            />
            
            <FeatureCard
              title="CI/CD Ready"
              description="Deploy embedded analytics with confidence using our automated testing and deployment workflows."
              icon={<svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-16">
          <SectionTitle>The Impact</SectionTitle>
          <SectionText large>
            Embbed with confidence knowing that your charts are accurate, tested, and up to date with the rest of your analytics and application.
          </SectionText>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 text-center dark:border-gray-700">
              <h3 className="mb-2 text-3xl font-bold text-primary-600">90%</h3>
              <p className="text-gray-500 dark:text-gray-400">Reduction in analytics integration time</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center dark:border-gray-700">
              <h3 className="mb-2 text-3xl font-bold text-primary-600">100%</h3>
              <p className="text-gray-500 dark:text-gray-400">Theme consistency with your app</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center dark:border-gray-700">
              <h3 className="mb-2 text-3xl font-bold text-primary-600">Zero</h3>
              <p className="text-gray-500 dark:text-gray-400">Context switching for your users</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <SectionTitle>Ready to Get Started?</SectionTitle>
          <div className="mt-8 max-w-2xl mx-auto">
            <InstallCommand />
          </div>
          <div className="mt-8">
            <a 
              href="/examples" 
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
            >
              View embedding examples
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 