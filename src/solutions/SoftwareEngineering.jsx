import React from 'react';
import InstallCommand from '../components/InstallCommand';
import { FiActivity, FiAlertCircle, FiTrendingUp, FiUsers, FiArrowRight, FiCheckCircle, FiCode, FiZap } from 'react-icons/fi';
import { HiOutlineChartSquareBar, HiOutlineLightningBolt, HiOutlineSparkles } from 'react-icons/hi';
import { BiLineChart, BiCodeBlock } from 'react-icons/bi';
import { motion } from 'framer-motion';
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
import { fadeInUp, fadeIn, staggerContainer, defaultViewport } from '../utils/animations';

export default function SoftwareEngineering() {
  const trackingCode = `# models.visivo.yml
models:
  - name: feature_events
    args:
      - python
      - track_features.py
    table_name: feature_tracking

# track_features.py
import pandas as pd
import json
from datetime import datetime

# Collect feature usage from your application logs
events = []
with open('app_logs.json', 'r') as f:
    for line in f:
        log = json.loads(line)
        if log.get('feature_flag'):
            events.append({
                'timestamp': log['timestamp'],
                'feature': log['feature_flag'],
                'user_id': log['user_id'],
                'value': log.get('value', 0)
            })

df = pd.DataFrame(events)
df.to_csv('output.csv', index=False)`;

  const dashboardCode = `# project.visivo.yml
traces:
  - name: adoption-rate
    model: ref(feature_events)
    cohort_on: ?{feature}
    props:
      type: scatter
      mode: lines+markers
      name: Daily Active Users
    columns:
      x: date_trunc('day', timestamp)
      y: user_id
    aggregate:
      - column: y
        func: count_distinct
    order_by:
      - ?{x asc}
    filters:
      - ?{feature = 'new-checkout-flow'}

  - name: conversion-impact
    model: ref(checkout_metrics)
    props:
      type: indicator
      mode: number+gauge
      value: ?{avg(conversion_rate)}
      gauge:
        axis:
          range: [0, 100]

charts:
  - name: feature-adoption
    traces:
      - ref(adoption-rate)

dashboards:
  - name: Feature Analytics
    rows:
      - height: medium
        items:
          - chart: ref(feature-adoption)`;

  const alertCode = `# project.visivo.yml
alerts:
  - name: feature-error-spike
    sql: |
      SELECT COUNT(*) as error_count
      FROM error_logs
      WHERE feature_name = 'new-checkout-flow'
        AND timestamp > current_timestamp - interval '1 hour'
    condition: error_count > 100
    destinations:
      - name: engineering-slack
        type: slack
        webhook_url: \${SLACK_WEBHOOK_URL}
        channel: "#engineering"
    
  - name: performance-degradation  
    sql: |
      SELECT AVG(response_time) as avg_response
      FROM performance_metrics
      WHERE feature_name = 'new-checkout-flow'
        AND timestamp > current_timestamp - interval '5 minutes'
    condition: avg_response > 500
    destinations:
      - name: oncall-email
        type: email
        to: oncall@company.com`;

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
          className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          <AnimatedStaggerContainer className="mx-auto max-w-4xl text-center">
            <motion.div 
              className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <HiOutlineLightningBolt className="mr-2 h-4 w-4" />
              Ship Features with Confidence
            </motion.div>
            <AnimatedH1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl" delay={0.2}>
              Analytics Built Into Your{' '}
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Development Workflow
              </motion.span>
            </AnimatedH1>
            <AnimatedP className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl" delay={0.4}>
              Define analytics alongside your code. Version control your dashboards. Deploy insights with every release.
              Analytics that evolve with your application.
            </AnimatedP>
            <motion.div 
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="/get-started"
                className="inline-flex items-center rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Get Started
                <FiArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://docs.visivo.io/guides/feature-monitoring"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                View Documentation
              </a>
            </motion.div>
          </AnimatedStaggerContainer>
        </div>
      </motion.div>

      {/* Core Features */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Complete Feature Observability
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to understand how your features perform in production.
          </p>
        </div>

        <AnimatedStaggerContainer className="grid gap-6 lg:grid-cols-3">
          <AnimatedFeatureCard
            icon={<FiActivity className="h-6 w-6" />}
            title="Batch Analytics & Insights"
            description="Track feature adoption, usage patterns, and performance metrics with scheduled data updates."
            color="from-purple-500 to-purple-600"
          />
          <AnimatedFeatureCard
            icon={<HiOutlineChartSquareBar className="h-6 w-6" />}
            title="Business Impact"
            description="Connect feature changes to business metrics like conversion, retention, and revenue."
            color="from-pink-500 to-pink-600"
          />
          <AnimatedFeatureCard
            icon={<FiAlertCircle className="h-6 w-6" />}
            title="Smart Alerts"
            description="Get notified about performance regressions, error spikes, or unusual usage patterns."
            color="from-orange-500 to-orange-600"
          />
          <AnimatedFeatureCard
            icon={<BiLineChart className="h-6 w-6" />}
            title="A/B Testing Analytics"
            description="Built-in support for experiment analysis with statistical significance testing."
            color="from-green-500 to-green-600"
          />
          <AnimatedFeatureCard
            icon={<FiUsers className="h-6 w-6" />}
            title="User Segmentation"
            description="Understand how different user cohorts interact with your features."
            color="from-blue-500 to-blue-600"
          />
          <AnimatedFeatureCard
            icon={<FiTrendingUp className="h-6 w-6" />}
            title="Trend Analysis"
            description="Spot patterns and predict future behavior with historical trend analysis."
            color="from-indigo-500 to-indigo-600"
          />
        </AnimatedStaggerContainer>
      </div>

      {/* Workflow Visualization */}
      <div className="border-y border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Analytics as Part of Your Development Process
          </h2>
          
          <div className="relative">
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Code & Define</h3>
                <p className="text-gray-600 dark:text-gray-400">Write feature code and analytics config in the same PR</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-2xl font-bold text-pink-600 dark:bg-pink-900 dark:text-pink-300">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Test & Review</h3>
                <p className="text-gray-600 dark:text-gray-400">Test analytics locally, review dashboards in staging</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Deploy Together</h3>
                <p className="text-gray-600 dark:text-gray-400">Ship features and analytics dashboards simultaneously</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <FiArrowRight className="h-8 w-8 text-gray-400" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center lg:flex-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600 dark:bg-green-900 dark:text-green-300">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Monitor & Learn</h3>
                <p className="text-gray-600 dark:text-gray-400">Track adoption and impact, iterate based on data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          Simple Integration, Powerful Insights
        </h2>
        
        <AnimatedStaggerContainer className="space-y-8">
          <AnimatedCodeExample title="Track Feature Usage" code={trackingCode} />
          <AnimatedStaggerContainer className="grid gap-8 xl:grid-cols-2">
            <AnimatedCodeExample title="Auto-Generated Dashboards" code={dashboardCode} language="yaml" />
            <AnimatedCodeExample title="Smart Alerting" code={alertCode} language="yaml" />
          </AnimatedStaggerContainer>
        </AnimatedStaggerContainer>
      </div>

      {/* Use Cases */}
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
              Built for Modern Engineering Teams
            </h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <BiCodeBlock className="mb-2 inline h-6 w-6 text-purple-600" /> Feature Flags & Rollouts
                </h3>
                <AnimatedStaggerContainer className="space-y-4">
                  <AnimatedBenefitItem text="Monitor adoption rates during gradual rollouts" />
                  <AnimatedBenefitItem text="Compare performance between control and treatment groups" />
                  <AnimatedBenefitItem text="Automatically detect and alert on rollout issues" />
                  <AnimatedBenefitItem text="Make rollback decisions based on real data" />
                </AnimatedStaggerContainer>
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  <HiOutlineSparkles className="mb-2 inline h-6 w-6 text-purple-600" /> Product Development
                </h3>
                <AnimatedStaggerContainer className="space-y-4">
                  <AnimatedBenefitItem text="Validate product hypotheses with real usage data" />
                  <AnimatedBenefitItem text="Identify which features drive engagement" />
                  <AnimatedBenefitItem text="Prioritize development based on impact" />
                  <AnimatedBenefitItem text="Share insights across product and engineering" />
                </AnimatedStaggerContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-12 text-center shadow-xl dark:from-gray-800 dark:to-gray-700">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
            Start Shipping Features with Confidence
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Join engineering teams using Visivo to track and visualize feature performance.
          </p>
          
          <div className="mb-8">
            <InstallCommand />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://docs.visivo.io/"
              className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-purple-700"
            >
              <FiZap className="mr-2 h-5 w-5" />
              Quick Start for Engineers
            </a>
            <a
              href="https://github.com/visivo-io/visivo/tree/main/test-projects"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <FiCode className="mr-2 h-5 w-5" />
              Example Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}