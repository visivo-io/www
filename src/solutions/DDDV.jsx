import React from 'react';
import InstallCommand from '../components/InstallCommand';
import { FiDatabase, FiLayers, FiZap, FiBarChart2, FiArrowRight, FiCheckCircle, FiCode, FiPackage } from 'react-icons/fi';
import { SiDbt, SiPython, SiDuckdb } from 'react-icons/si';
import { GiDuck } from 'react-icons/gi';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  AnimatedFeatureCard, 
  AnimatedBenefitItem, 
  AnimatedCodeExample,
  AnimatedSection,
  AnimatedStaggerContainer,
  AnimatedH1,
  AnimatedH2,
  AnimatedP,
  AnimatedDiv
} from '../components/animated/AnimatedComponents';
import ScrollProgressBar from '../components/animated/ScrollProgressBar';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInFromLeft, slideInFromRight, defaultViewport } from '../utils/animations';
import FeatureCard from '../components/cards/FeatureCard';

// Custom TechCard that extends AnimatedFeatureCard functionality
const TechCard = ({ icon, title, description, color }) => (
  <AnimatedFeatureCard icon={icon} title={title} description={description} color={color} />
);

export default function DDDV() {
  // SEO optimized for: Triple D Stack, DDD Stack, DDD analytics, dlt duckdb dbt
  
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

  const dbtCode = `-- dbt™ (second D in DDD Stack) models/sales_metrics.sql
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
    <section className="w-full overflow-x-hidden bg-white dark:bg-gray-900">
      <ScrollProgressBar />
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-6 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-300"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <FiZap className="mr-2 h-4 w-4" />
              DDDV Stack - The Modern Analytics Platform
            </motion.div>
            <motion.h1 
              className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Triple D Stack:{' '}
              <motion.span 
                className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                DLT + dbt™ + DuckDB
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The <strong>DDD Stack</strong> combines three powerful open-source tools: <strong>DLT, dbt™, and DuckDB</strong>. 
              Add <strong>Visivo</strong> for beautiful visualizations to complete your modern, open-source data stack.
            </motion.p>
            <motion.div 
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stack Overview */}
      <motion.div 
        className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
        >
          <motion.h2 
            className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            The Open-Source DDD Stack Explained
          </motion.h2>
          <motion.p 
            className="mb-6 text-lg text-gray-600 dark:text-gray-400"
            variants={fadeInUp}
          >
            The Triple D Stack combines best-in-class open-source tools for modern data pipelines. Each tool is free, powerful, and community-driven.
          </motion.p>
          <motion.div 
            className="mb-12 flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
              variants={scaleIn}
            >
              <FiCode className="mr-2 h-4 w-4" />
              100% Open Source
            </motion.span>
            <motion.span 
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              variants={scaleIn}
            >
              <FiPackage className="mr-2 h-4 w-4" />
              No Vendor Lock-in
            </motion.span>
            <motion.span 
              className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
              variants={scaleIn}
            >
              <FiZap className="mr-2 h-4 w-4" />
              Community Driven
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid gap-6 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TechCard
            icon={<SiPython className="h-6 w-6" />}
            title="DLT (Data Load Tool)"
            description="Python-first data pipeline framework that makes data loading simple, reliable, and scalable."
            color="from-blue-500 to-blue-600"
          />
          <TechCard
            icon={<SiDbt className="h-6 w-6" />}
            title="dbt™ (Data Build Tool)"
            description="Transform data in your warehouse with version-controlled SQL and built-in testing."
            color="from-orange-500 to-orange-600"
          />
          <TechCard
            icon={<SiDuckdb className="h-6 w-6" />}
            title="DuckDB"
            description="In-process SQL analytics database designed for fast analytical queries."
            color="from-yellow-500 to-yellow-600"
          />
          <TechCard
            icon={<FiBarChart2 className="h-6 w-6" />}
            title="Visivo"
            description="Open-source dashboard creation with code. Version control your visualizations and deploy anywhere."
            color="from-primary-500 to-primary-600"
          />
        </motion.div>
      </motion.div>

      {/* Workflow Visualization */}
      <motion.div 
        className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <motion.h2 
            className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            How the Triple D Stack Works Together
          </motion.h2>
          
          <motion.div 
            className="relative"
            variants={staggerContainer}
          >
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0">
              {/* Step 1 */}
              <motion.div 
                className="relative flex flex-col items-center text-center lg:flex-1"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Extract with DLT</h3>
                <p className="text-gray-600 dark:text-gray-400">DLT pulls data from 100+ sources into DuckDB with Python-based pipelines</p>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                className="hidden lg:block"
                variants={fadeIn}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="relative flex flex-col items-center text-center lg:flex-1"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transform with dbt™</h3>
                <p className="text-gray-600 dark:text-gray-400">dbt™ transforms and models your data with version-controlled SQL</p>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                className="hidden lg:block"
                variants={fadeIn}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="relative flex flex-col items-center text-center lg:flex-1"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-2xl font-bold text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Analyze with DuckDB</h3>
                <p className="text-gray-600 dark:text-gray-400">DuckDB provides lightning-fast analytical queries on your local machine or in the cloud</p>
              </motion.div>

              {/* Arrow */}
              <motion.div 
                className="hidden lg:block"
                variants={fadeIn}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="relative flex flex-col items-center text-center lg:flex-1"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Visualize with Visivo</h3>
                <p className="text-gray-600 dark:text-gray-400">Visivo creates beautiful, shareable dashboards from your DDD Stack</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* dbt Integration Section */}
      <motion.div 
        className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <motion.div 
            className="mx-auto max-w-4xl"
            variants={staggerContainer}
          >
            <motion.h2 
              className="mb-8 text-center text-4xl font-extrabold text-gray-900 dark:text-white"
              variants={fadeInUp}
            >
              Seamless dbt™ Integration
            </motion.h2>
            <motion.p 
              className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400"
              variants={fadeInUp}
            >
              The DDD Stack works perfectly with your existing dbt™ projects and workflows
            </motion.p>
            
            <motion.div 
              className="grid gap-8 lg:grid-cols-2"
              variants={staggerContainer}
            >
              <motion.div 
                className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900"
                variants={slideInFromLeft}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <SiDbt className="mb-2 inline h-6 w-6 text-orange-600" /> Native dbt™ Support
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Reference dbt™ models directly in Visivo dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Leverage existing dbt™ tests and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Use dbt™ macros and Jinja templating</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Maintain single source of truth for metrics</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900"
                variants={slideInFromRight}
                transition={{ duration: 0.6 }}
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiZap className="mb-2 inline h-6 w-6 text-yellow-600" /> Why dbt™ + DuckDB?
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Lightning-fast local development - no cloud warehouse needed</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Zero infrastructure costs during development</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Same SQL syntax across dev and production</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Git-friendly analytics workflow</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Code Examples */}
      <motion.div 
        className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white"
          variants={fadeInUp}
        >
          See the DDD Stack In Action
        </motion.h2>
        
        <motion.div 
          className="grid gap-8 xl:grid-cols-2"
          variants={staggerContainer}
        >
          <AnimatedCodeExample title="1. Extract with DLT" code={dltCode} />
          <AnimatedCodeExample title="2. Transform with dbt™" code={dbtCode} language="sql" />
          <AnimatedCodeExample title="3. Query with DuckDB" code={duckdbCode} language="sql" />
          <AnimatedCodeExample title="4. Visualize with Visivo" code={visivoCode} language="yaml" />
        </motion.div>
      </motion.div>

      {/* Benefits Section */}
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
              Why Teams Choose the DDD Stack
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiCode className="mb-2 inline h-6 w-6 text-primary-600" /> For Developers
                </h3>
                <div className="space-y-4">
                  <AnimatedBenefitItem text="Everything is code - version control your entire analytics stack" />
                  <AnimatedBenefitItem text="Python and SQL only - no proprietary languages to learn" />
                  <AnimatedBenefitItem text="Local development with production parity" />
                  <AnimatedBenefitItem text="Automated testing and CI/CD for your data pipelines" />
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <FiPackage className="mb-2 inline h-6 w-6 text-primary-600" /> For Organizations
                </h3>
                <div className="space-y-4">
                  <AnimatedBenefitItem text="100% open source - no vendor lock-in with the DDD Stack" />
                  <AnimatedBenefitItem text="Scales from laptop to cloud seamlessly" />
                  <AnimatedBenefitItem text="Reduce infrastructure costs by 90% compared to proprietary tools" />
                  <AnimatedBenefitItem text="Complete data lineage and governance built-in" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section for DDD Stack */}
      <motion.div 
        className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="mx-auto max-w-4xl mb-12"
          variants={staggerContainer}
        >
          <motion.h2 
            className="mb-6 text-3xl font-bold text-gray-900 dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            What is the Triple D Stack (DDD Stack)?
          </motion.h2>
          <motion.p 
            className="mb-4 text-lg text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The <strong>Triple D Stack</strong> (or <strong>DDD Stack</strong>) is a modern, fully open-source data architecture that combines three powerful tools:
          </motion.p>
          <motion.ul 
            className="mb-6 space-y-2 text-lg text-gray-700 dark:text-gray-300"
            variants={staggerContainer}
          >
            <motion.li 
              className="flex items-start"
              variants={slideInFromLeft}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="mr-2">•</span>
              <span><strong>DLT (Data Load Tool)</strong> - The first D in the DDD Stack for data extraction and loading</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              variants={slideInFromLeft}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="mr-2">•</span>
              <span><strong>dbt™ (Data Build Tool)</strong> - The second D for data transformation and modeling</span>
            </motion.li>
            <motion.li 
              className="flex items-start"
              variants={slideInFromLeft}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="mr-2">•</span>
              <span><strong>DuckDB</strong> - The third D for fast analytical queries and processing</span>
            </motion.li>
          </motion.ul>
          <motion.p 
            className="mb-6 text-lg text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            This powerful combination of <em>dlt duckdb dbt</em> enables modern data teams to build scalable, maintainable analytics pipelines without expensive proprietary tools. The open-source Triple D Stack represents the future of data engineering.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* FAQ Section for SEO */}
      <motion.div 
        className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <motion.h2 
            className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Frequently Asked Questions about the DDD Stack
          </motion.h2>
          <motion.div 
            className="mx-auto max-w-3xl space-y-8"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                What does DDD Stack stand for?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The DDD Stack (or Triple D Stack) stands for DLT + dbt™ + DuckDB. It's a modern data analytics stack that combines Data Load Tool (DLT), data build tool (dbt™), and DuckDB for comprehensive data pipeline management.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Why use dlt duckdb dbt together?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Using dlt duckdb dbt together creates a powerful, cost-effective analytics platform. DLT handles data ingestion, dbt™ manages transformations, and DuckDB provides lightning-fast analytical queries - all without expensive cloud infrastructure.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Is the DDD Stack really open source?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes! The entire Triple D Stack is 100% open source. DLT, dbt™, and DuckDB are all freely available with active communities. This means no licensing fees, no vendor lock-in, and complete control over your data infrastructure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Getting Started */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 p-12 text-center shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Ready to Build Your Triple D Stack?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Get started with the open-source DDD Stack and have your first dashboard running in under 10 minutes.
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