import React from 'react';
import InstallCommand from '../components/InstallCommand';
import { FiGitBranch, FiRefreshCw, FiCode, FiCheckCircle, FiArrowRight, FiTerminal, FiLayers, FiZap } from 'react-icons/fi';
import { HiOutlineDocumentReport, HiOutlineChartBar, HiOutlineCog } from 'react-icons/hi';
import { BiGitMerge } from 'react-icons/bi';

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

const CodeExample = ({ title, code, language = "yaml" }) => (
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

export default function BusinessIntelligence() {
  const dashboardCode = `# project.visivo.yml
name: Sales Analytics

traces:
  - name: kpi-revenue
    model: ref(monthly_metrics)
    props:
      type: indicator
      mode: number+delta
      value: ?{sum(revenue)}
      title:
        text: Total Revenue
    filters:
      - ?{month = date_trunc('month', current_date)}

charts:
  - name: revenue-kpi
    traces:
      - ref(kpi-revenue)

dashboards:
  - name: Sales Overview
    rows:
      - height: small
        items:
          - chart: ref(revenue-kpi)`;

  const gitWorkflowCode = `# .github/workflows/visivo.yml
name: Test & Deploy Dashboards
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Visivo
        run: curl -fsSL https://visivo.sh | bash
      - name: Test dashboards
        run: visivo test
      - name: Deploy to staging
        run: visivo deploy -s staging
        env:
          VISIVO_TOKEN: \${{ secrets.VISIVO_TOKEN }}`;


  return (
    <section className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <FiCode className="mr-2 h-4 w-4" />
              Modern BI Development
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              BI-as-Code for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Data Teams
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Build, test, and deploy analytics dashboards using software engineering best practices. 
              Integrates seamlessly with your dbt™ workflows for a unified analytics stack.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/get-started"
                className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Get Started
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/visivo-io/visivo/tree/main/examples"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                View Examples
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Enterprise-Grade Analytics Development
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Bring software engineering rigor to your business intelligence workflows.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            icon={<FiGitBranch className="h-6 w-6" />}
            title="Version Control"
            description="Track every change to your dashboards. Review changes through pull requests. Roll back when needed."
            color="from-purple-500 to-purple-600"
          />
          <FeatureCard
            icon={<FiRefreshCw className="h-6 w-6" />}
            title="CI/CD Pipeline"
            description="Automated testing, validation, and deployment. Deploy to production with confidence."
            color="from-green-500 to-green-600"
          />
          <FeatureCard
            icon={<FiTerminal className="h-6 w-6" />}
            title="Infrastructure as Code"
            description="Define dashboards, data sources, and permissions in YAML. Reproducible environments."
            color="from-blue-500 to-blue-600"
          />
          <FeatureCard
            icon={<BiGitMerge className="h-6 w-6" />}
            title="Branching Workflows"
            description="Create feature branches for new dashboards. Test in isolation before merging."
            color="from-orange-500 to-orange-600"
          />
          <FeatureCard
            icon={<HiOutlineCog className="h-6 w-6" />}
            title="Automated Testing"
            description="Test your queries, calculations, and data quality automatically on every commit."
            color="from-red-500 to-red-600"
          />
          <FeatureCard
            icon={<FiLayers className="h-6 w-6" />}
            title="Modular Design"
            description="Reusable components, templates, and shared queries across all dashboards."
            color="from-indigo-500 to-indigo-600"
          />
        </div>
      </div>

      {/* Faster Feedback Cycles */}
      <div className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Faster Feedback Cycles, Better Analytics
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
              Stop waiting days for dashboard changes. With Visivo, iterate on analytics as fast as you iterate on code.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                <FiZap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Instant Local Preview</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See changes immediately with `visivo serve`. No waiting for deployments or data refreshes.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                <FiRefreshCw className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Hot Reload Everything</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Edit YAML, save, see results. Charts update live as you modify queries and configurations.
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                <FiCode className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Test Before Deploy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Validate data quality and dashboard accuracy locally before pushing to production.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Environments */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Seamlessly Manage Multiple Environments
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
            From local development to production, maintain consistency across all your environments.
          </p>
          
          <div className="mb-8 overflow-hidden rounded-xl shadow-xl">
            <img 
              src="/images/ci_cd.webp" 
              alt="Visivo CI/CD Pipeline showing local development, PR stages, and production deployment"
              className="w-full"
            />
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Works with Your Existing Workflow
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Branch-based development for isolated changes</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Automatic staging deployments for every PR</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Production deployments on merge to main</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Integrates with dbt™
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Reference dbt™ models directly in your dashboards</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Leverage existing transformations and tests</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Maintain single source of truth for metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          Everything as Code
        </h2>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <CodeExample title="Define Dashboards in YAML" code={dashboardCode} />
          <CodeExample title="Automated Deployment" code={gitWorkflowCode} />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
              Why BI-as-Code?
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <HiOutlineChartBar className="mb-2 inline h-6 w-6 text-blue-600" /> For Analytics Teams
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="No more broken dashboards after data model changes" />
                  <BenefitItem text="Collaborate effectively with pull requests and code reviews" />
                  <BenefitItem text="Test dashboards before they reach stakeholders" />
                  <BenefitItem text="Reuse components across multiple dashboards" />
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <HiOutlineDocumentReport className="mb-2 inline h-6 w-6 text-blue-600" /> For Business Users
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="Reliable dashboards that update automatically" />
                  <BenefitItem text="Consistent design and user experience" />
                  <BenefitItem text="Fast performance with optimized queries" />
                  <BenefitItem text="Clear documentation and data lineage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-12 text-center shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Ready to Transform Your BI Workflow?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Join teams building reliable, version-controlled analytics with BI-as-Code.
          </p>
          
          <div className="mb-8">
            <InstallCommand />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://docs.visivo.io/"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
            >
              <FiZap className="mr-2 h-5 w-5" />
              Quick Start Guide
            </a>
            <a
              href="https://calendly.com/visivo-io/30-minute"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}