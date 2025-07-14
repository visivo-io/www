import React from 'react';
import InstallCommand from '../components/InstallCommand';
import { FiDatabase, FiLayers, FiZap, FiBarChart2, FiArrowRight, FiCheckCircle, FiCode, FiPackage } from 'react-icons/fi';
import { SiDbt, SiPython } from 'react-icons/si';
import { GiDuck } from 'react-icons/gi';

const TechCard = ({ icon, title, description, color }) => (
  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
    <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-10`}></div>
    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const BenefitItem = ({ icon, text }) => (
  <div className="flex items-start space-x-3">
    <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
    <p className="text-gray-700 dark:text-gray-300">{text}</p>
  </div>
);

const CodeExample = ({ title, code, language = "python" }) => (
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

export default function DDDV() {
  const dltCode = `import dlt
from dlt.sources.sql_database import sql_database

# Extract data from your database
pipeline = dlt.pipeline(
    pipeline_name="sales_pipeline",
    destination="duckdb"
)

# Load to DuckDB
source = sql_database(connection_string="postgresql://...")
info = pipeline.run(source, table_name="raw_sales")`;

  const dbtCode = `-- models/sales_metrics.sql
{{ config(materialized='table') }}

SELECT 
    date_trunc('month', order_date) as month,
    product_category,
    SUM(revenue) as total_revenue,
    COUNT(DISTINCT customer_id) as unique_customers
FROM {{ ref('raw_sales') }}
GROUP BY 1, 2`;

  const duckdbCode = `-- Query your transformed data efficiently
SELECT 
    month,
    product_category,
    total_revenue,
    LAG(total_revenue) OVER (
        PARTITION BY product_category 
        ORDER BY month
    ) as prev_month_revenue
FROM sales_metrics
WHERE month >= CURRENT_DATE - INTERVAL '6 months'`;

  const visivoCode = `# project.visivo.yml
name: Sales Analytics

traces:
  - name: revenue-trend
    model: ref(sales_metrics)
    columns:
      x: month
      y: total_revenue
    props:
      type: scatter
      mode: lines+markers
      name: Revenue Trend

  - name: category-sales
    model: ref(sales_metrics)
    columns:
      x: product_category  
      y: total_revenue
    props:
      type: bar
      name: Sales by Category

charts:
  - name: revenue-chart
    traces:
      - ref(revenue-trend)
  
  - name: category-chart
    traces:
      - ref(category-sales)

dashboards:
  - name: Sales Overview
    rows:
      - height: medium
        items:
          - chart: ref(revenue-chart)
          - chart: ref(category-chart)`;

  return (
    <section className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
              <FiZap className="mr-2 h-4 w-4" />
              The Modern Data Stack
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
              Build Better Data Products with{' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                DDDV Stack
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Combine the power of <strong>DLT</strong> for data ingestion, <strong>DBT</strong> for transformation, 
              <strong>DuckDB</strong> for lightning-fast analytics, and <strong>Visivo</strong> for beautiful visualizations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/get-started"
                className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Get Started
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://docs.visivo.io/topics/sources#duckdb"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stack Overview */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            A Complete Analytics Stack
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Each component is best-in-class, working together seamlessly to deliver powerful analytics.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <TechCard
            icon={<SiPython className="h-6 w-6" />}
            title="DLT (Data Load Tool)"
            description="Python-first data pipeline framework that makes data loading simple, reliable, and scalable."
            color="from-blue-500 to-blue-600"
          />
          <TechCard
            icon={<SiDbt className="h-6 w-6" />}
            title="DBT"
            description="Transform data in your warehouse with version-controlled SQL and built-in testing."
            color="from-orange-500 to-orange-600"
          />
          <TechCard
            icon={<GiDuck className="h-6 w-6" />}
            title="DuckDB"
            description="In-process SQL analytics database designed for fast analytical queries."
            color="from-yellow-500 to-yellow-600"
          />
          <TechCard
            icon={<FiBarChart2 className="h-6 w-6" />}
            title="Visivo"
            description="Create stunning dashboards with code, ensuring version control and reproducibility."
            color="from-primary-500 to-primary-600"
          />
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            How It Works Together
          </h2>
          
          <div className="relative">
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Extract</h3>
                <p className="text-gray-600 dark:text-gray-400">DLT pulls data from 100+ sources into DuckDB</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transform</h3>
                <p className="text-gray-600 dark:text-gray-400">DBT models your data with SQL transformations</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-2xl font-bold text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Analyze</h3>
                <p className="text-gray-600 dark:text-gray-400">DuckDB provides lightning-fast analytical queries</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Visualize</h3>
                <p className="text-gray-600 dark:text-gray-400">Visivo creates beautiful, shareable dashboards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          See It In Action
        </h2>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <CodeExample title="1. Extract with DLT" code={dltCode} />
          <CodeExample title="2. Transform with dbt™" code={dbtCode} language="sql" />
          <CodeExample title="3. Query with DuckDB" code={duckdbCode} language="sql" />
          <CodeExample title="4. Visualize with Visivo" code={visivoCode} language="yaml" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
              Why Teams Love DDDV
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiCode className="mb-2 inline h-6 w-6 text-primary-600" /> For Developers
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="Everything is code - version control your entire analytics stack" />
                  <BenefitItem text="Python and SQL only - no proprietary languages to learn" />
                  <BenefitItem text="Local development with production parity" />
                  <BenefitItem text="Automated testing and CI/CD for analytics" />
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiPackage className="mb-2 inline h-6 w-6 text-primary-600" /> For Organizations
                </h3>
                <div className="space-y-4">
                  <BenefitItem text="Open source - no vendor lock-in" />
                  <BenefitItem text="Scales from laptop to cloud seamlessly" />
                  <BenefitItem text="Reduce infrastructure costs by 90%" />
                  <BenefitItem text="Complete data lineage and governance" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 p-12 text-center shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Ready to Build Your DDDV Stack?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Get started with our quickstart guide and have your first dashboard running in under 10 minutes.
          </p>
          
          <div className="mb-8">
            <InstallCommand />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/visivo-io/visivo/tree/main/test-projects"
              className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-gray-800"
            >
              <FiDatabase className="mr-2 h-5 w-5" />
              Clone Starter Template
            </a>
            <a
              href="https://docs.visivo.io/"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Read the Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}