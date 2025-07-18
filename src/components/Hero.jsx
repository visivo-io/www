import GifToVideo from "./GifToVideo";
import { FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';
import InstallVisivoPrompt from './InstallVisivoPrompt';
import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, defaultViewport } from '../utils/animations';

const cardData = [
  {
    icon: <FiCode className="h-6 w-6" />, 
    title: "Open Source BI-As-Code",
    desc: "We're commited to OSS. BI-as-code made easy. Extend your lineage into BI."
  },
  {
    icon: <FiTrendingUp className="h-6 w-6" />, 
    title: "Leverage Insights Faster",
    desc: "10x your data team's productivity. Fast UI and zero noise for stakeholders."
  },
  {
    icon: <FiUsers className="h-6 w-6" />, 
    title: "Data Centric Collaboration",
    desc: "Unlock data centric collaboration across your organization."
  }
];

export default function Hero() {
  return (
    <section className="w-full overflow-x-hidden bg-white dark:bg-gray-900">
      <motion.div 
        className="mx-auto max-w-screen-xl px-4 py-4 pt-4 sm:py-4 sm:pt-16 lg:py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="text-center" variants={staggerContainer}>
          <motion.h1
            className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl pb-2 lg:text-6xl dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            BI for The Modern Data Stack
          </motion.h1>
          
          {/* Mobile version - shorter text */}
          <motion.p 
            className="block md:hidden text-gray-500 dark:text-gray-400"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock data centric collaboration across your organization with developer tools & visual building that stakeholders love.
          </motion.p>
          
          {/* Desktop version - longer, more detailed text */}
          <motion.p 
            className="hidden md:block text-gray-500 dark:text-gray-400"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create a semantic layer that is actually useful. Connect it to your tranformations in minutes. Enable data centric collaboration across your organization.
          </motion.p>
        </motion.div>
        <motion.div 
          className="my-12"
          variants={scaleIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InstallVisivoPrompt />
        </motion.div>

        {/* Carousel for mobile/tablet */}
        <div className="block md:hidden mt-1 h-48">
          <Carousel indicators={false} pauseOnHover>
            {cardData.map((card, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="block rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 w-full max-w-md mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500 dark:bg-primary-900 dark:text-primary-300 mt-1">
                      {card.icon}
                    </div>
                    <div>
                      <h5 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                        {card.title}
                      </h5>
                      <p className="text-base text-gray-700 dark:text-gray-400">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Grid for desktop */}
        <motion.div 
          className="mt-8 hidden md:grid grid-cols-1 gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card, idx) => (
            <motion.div 
              key={idx} 
              className="block rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 },
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500 dark:bg-primary-900 dark:text-primary-300 mt-1"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>
                <div>
                  <h5 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <p className="text-base text-gray-700 dark:text-gray-400">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div 
          className="mt-4 sm:mt-8 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GifToVideo />
        </motion.div>
        <motion.div 
          className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="https://app.visivo.io/register"
            className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Get Started
          </motion.a>

          <motion.a 
            href="https://calendly.com/visivo-io/30-minute" 
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Let's Talk
            <motion.svg 
              className="-mr-1 ml-2 size-5" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* <div className="-mt-48 bg-gray-100 pb-8 pt-48 sm:-mt-80 sm:pt-72 lg:pb-16 dark:bg-gray-800">
        <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-20">
          <div className="flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a href="#" className="mb-5 mr-5 hover:text-gray-900 lg:mb-0 dark:hover:text-gray-400">
              <img className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/amazon-grayscale.svg"
                alt="" />
            </a>

            <a href="#" className="mb-5 mr-5 hover:text-gray-900 lg:mb-0 dark:hover:text-gray-400">
              <img className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/google-grayscale.svg"
                alt="" />
            </a>

            <a href="#" className="mb-5 mr-5 hover:text-gray-900 lg:mb-0 dark:hover:text-gray-400">
              <img className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/microsoft-grayscale.svg"
                alt="" />
            </a>

            <a href="#" className="mb-5 mr-5 hover:text-gray-900 lg:mb-0 dark:hover:text-gray-400">
              <img className="h-6 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oracle-grayscale.svg"
                alt="" />
            </a>

            <a href="#" className="mb-5 hover:text-gray-900 lg:mb-0 dark:hover:text-gray-400">
              <img className="h-8 w-auto"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/sap-grayscale.svg" alt="" />
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
