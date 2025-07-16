import { lazy, Suspense } from 'react';
import Hero from "./components/Hero";
import TestimonialCarousel from "./components/TestimonialCarousel";
import InstallCommand from "./components/InstallCommand";
import ScrollProgressBar from "./components/animated/ScrollProgressBar";
import ProblemSolutionTabs from "./components/ProblemSolutionTabs";
import DifferentiationGrid from "./components/DifferentiationGrid";
import BuiltInPublic from "./components/BuiltInPublic";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from './utils/animations';

// Lazy load heavy components - needed for react-flow-renderer
const VisivoDataFlow = lazy(() => import("./Lineage"));
const Features = lazy(() => import("./components/Features"));

const Home = () => {
  return (
    <div>
      <ScrollProgressBar />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8 }}
      >
        <ProblemSolutionTabs />
      </motion.div>
      <DifferentiationGrid />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6 }}
      >
        <TestimonialCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8 }}
      >
        <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div></div>}>
          <VisivoDataFlow />
        </Suspense>
      </motion.div>
      <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div></div>}>
        <Features />
      </Suspense>
      <BuiltInPublic />
      <motion.section 
        className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
          <motion.div 
            className="mx-auto max-w-screen-sm space-y-6 text-center"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Start improving your workflow today
            </motion.h2>
            <motion.p 
              className="text-gray-500 md:text-lg dark:text-gray-400"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Install our CLI for local development, then activate your trial for deployments. No credit card required.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <InstallCommand />
            </motion.div>
            <motion.div 
              className="flex justify-center gap-4"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a 
                href="https://app.visivo.io/register"
                className="inline-flex rounded-lg bg-primary-500 px-5 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.a>
              <motion.a 
                href="https://docs.visivo.io"
                className="inline-flex rounded-lg bg-primary-500 px-5 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Install CLI
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;