import React, { useState } from 'react';
import InstallCommand from '../components/InstallCommand';
import { FiCode, FiLock, FiZap, FiArrowRight, FiCheckCircle, FiGrid, FiShield, FiPackage, FiMail } from 'react-icons/fi';
import { HiOutlineCubeTransparent, HiOutlineTemplate, HiOutlineViewGrid } from 'react-icons/hi';
import { BiCustomize, BiPalette } from 'react-icons/bi';

const FeatureCard = ({ icon, title, description, color }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
    <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-10`}></div>
    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const BenefitItem = ({ text }) => (
  <div className="flex items-start space-x-3">
    <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
    <p className="text-gray-700 dark:text-gray-300">{text}</p>
  </div>
);

const CodeExample = ({ title, code, language = "javascript" }) => (
  <div className="rounded-xl bg-gray-900 p-6 shadow-lg">
    <div className="mb-4 flex items-center justify-between">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <span className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-400">{language}</span>
    </div>
    <pre className="overflow-x-auto">
      <code className="text-sm text-gray-300">{code}</code>
    </pre>
  </div>
);

export default function Embedding() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/collect-embedding-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const reactCode = `// Coming Soon!
import { VisivoEmbed } from '@visivo/react';

function App() {
  return (
    <VisivoEmbed
      dashboardId="sales-overview"
      token={userToken}
      theme={{
        primary: '#1e40af',
        background: '#f9fafb'
      }}
      filters={{
        region: 'north-america',
        timeRange: 'last-30-days'
      }}
      onReady={(api) => {
        console.log('Dashboard loaded');
      }}
    />
  );
}`;

  const securityCode = `# Coming Soon: Configure row-level security
security:
  - name: customer-data
    filter: |
      SELECT * FROM sales
      WHERE customer_id = :user_customer_id
    
  - name: department-access
    filter: |
      SELECT * FROM metrics
      WHERE department IN (:user_departments)
      
# Generate secure embed tokens
from visivo import generate_embed_token

token = generate_embed_token(
    dashboard_id="sales-overview",
    user_id="user_123",
    permissions={
        "customer_id": "cust_456",
        "departments": ["sales", "marketing"]
    },
    expires_in=3600  # 1 hour
)`;

  const customizationCode = `// Coming Soon: Customize every aspect of the embedded dashboard
<VisivoEmbed
  dashboardId="analytics"
  config={{
    // Hide specific UI elements
    hideHeader: true,
    hideSidebar: false,
    hideFilters: false,
    
    // Custom branding
    logo: "/your-logo.png",
    favicon: "/your-favicon.ico",
    
    // Theme customization
    theme: {
      colors: {
        primary: '#0066cc',
        secondary: '#6b7280',
        success: '#10b981',
        background: '#ffffff',
        text: '#111827'
      },
      fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif'
      },
      borderRadius: '8px'
    },
    
    // Custom CSS
    customCSS: \`
      .dashboard-header {
        background: linear-gradient(90deg, #0066cc, #004499);
      }
    \`
  }}
/>`;

  return (
    <section className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          {/* Beta Banner */}
          <div className="mx-auto mb-8 max-w-3xl">
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    <strong>Beta Feature:</strong> Embedding capabilities are coming soon. Join the waitlist to be the first to know when it's available!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
              <HiOutlineCubeTransparent className="mr-2 h-4 w-4" />
              Embeddable Analytics - Coming Soon
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              Analytics That Feel{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Native to Your App
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Embed beautiful, interactive dashboards directly into your application. 
              White-label analytics that match your brand perfectly.
            </p>
            <div className="mx-auto max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <div className="relative flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                    <FiArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Success! We'll notify you when embedding is available.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Built for SaaS Applications
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Give your customers powerful analytics without building it yourself.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            icon={<BiPalette className="h-6 w-6" />}
            title="White-Label Ready"
            description="Complete control over branding, colors, fonts, and styling to match your application."
            color="from-green-500 to-green-600"
          />
          <FeatureCard
            icon={<FiShield className="h-6 w-6" />}
            title="Enterprise Security"
            description="Row-level security, SSO integration, and encrypted embed tokens keep data safe."
            color="from-teal-500 to-teal-600"
          />
          <FeatureCard
            icon={<HiOutlineViewGrid className="h-6 w-6" />}
            title="Multi-Tenant Ready"
            description="Isolate data between customers with built-in multi-tenancy support."
            color="from-blue-500 to-blue-600"
          />
          <FeatureCard
            icon={<FiZap className="h-6 w-6" />}
            title="Lightning Fast"
            description="Optimized for embedded use with lazy loading and efficient data fetching."
            color="from-yellow-500 to-yellow-600"
          />
          <FeatureCard
            icon={<BiCustomize className="h-6 w-6" />}
            title="Fully Customizable"
            description="Hide elements, add custom CSS, inject JavaScript, and control every interaction."
            color="from-purple-500 to-purple-600"
          />
          <FeatureCard
            icon={<FiPackage className="h-6 w-6" />}
            title="SDK & APIs"
            description="React, Vue, Angular components plus REST APIs for any framework."
            color="from-orange-500 to-orange-600"
          />
        </div>
      </div>

      {/* Integration Flow */}
      <div className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Embed in Minutes
          </h2>
          
          <div className="relative">
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600 dark:bg-green-900 dark:text-green-300">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Install SDK</h3>
                <p className="text-gray-600 dark:text-gray-400">Add our lightweight SDK to your application</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-600 dark:bg-teal-900 dark:text-teal-300">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Generate Token</h3>
                <p className="text-gray-600 dark:text-gray-400">Create secure tokens with user permissions</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Embed Component</h3>
                <p className="text-gray-600 dark:text-gray-400">Drop in the component and customize</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Ship to Users</h3>
                <p className="text-gray-600 dark:text-gray-400">Your customers get powerful analytics instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          Developer-Friendly Integration
        </h2>
        
        <div className="space-y-8">
          <CodeExample title="Simple React Integration" code={reactCode} />
          <div className="grid gap-8 lg:grid-cols-2">
            <CodeExample title="Secure Multi-Tenancy" code={securityCode} language="python" />
            <CodeExample title="Complete Customization" code={customizationCode} />
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
              Perfect for Every Use Case
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <HiOutlineTemplate className="mb-2 inline h-6 w-6 text-green-600" /> SaaS Platforms
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="Give each customer their own analytics portal" />
                  <BenefitItem text="Charge premium for advanced analytics features" />
                  <BenefitItem text="Reduce churn with sticky data insights" />
                  <BenefitItem text="Scale to millions of users effortlessly" />
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiGrid className="mb-2 inline h-6 w-6 text-green-600" /> Internal Tools
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="Embed dashboards in admin panels" />
                  <BenefitItem text="Create customer success dashboards" />
                  <BenefitItem text="Build executive reporting tools" />
                  <BenefitItem text="Integrate with existing workflows" />
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                <FiLock className="mb-2 inline h-6 w-6 text-green-600" /> Enterprise-Grade Security
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                <BenefitItem text="Enterprise-grade infrastructure" />
                <BenefitItem text="GDPR and CCPA compliant" />
                <BenefitItem text="End-to-end encryption" />
                <BenefitItem text="SSO/SAML integration" />
                <BenefitItem text="Row-level security (RLS)" />
                <BenefitItem text="Audit logs and compliance reports" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-12 text-center shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Be First to Access Embedded Analytics
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Join the waitlist to get early access when our embedding features launch.
          </p>
          
          <div className="mb-8">
            <InstallCommand />
          </div>
          
          <div className="mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-base placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Get Early Access'}
                  <FiCode className="ml-2 h-5 w-5" />
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  Success! We'll notify you when embedding is available.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}