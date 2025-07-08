import React from 'react';
import InstallCommand from './InstallCommand';

const GetStarted = () => {
  return (
    <div>
      {/* Hero Section: Headline & Three-Step Callout */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-screen-md text-center mb-8">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Get started with Visivo in <span className="text-highlight-500">minutes</span>
            </h1>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Transform your data into interactive dashboards that your team will love.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900 dark:text-primary-300">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                Install Visivo
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Install Visivo and ingest data directly from multiple sources.
              </p>
              {/* Installation command snippet with copy functionality */}
              <InstallCommand />
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900 dark:text-primary-300">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                Model
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Profile, model, and visualize your data on your local machine.
              </p>
              <img 
                src="/images/model-screenshot.png" 
                alt="Data modeling screenshot" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900 dark:text-primary-300">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                Share
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Deploy to Visivo Cloud and start a free trial to share dashboards with your team.
              </p>
              <img 
                src="/images/share-screenshot.png" 
                alt="Dashboard sharing screenshot" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              {/* Call-to-action for free trial */}
              <a 
                href="https://app.visivo.io/register" 
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Help/Personalized Tour Section & Contact Form */}
      <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-md px-4 py-8 sm:py-16 lg:py-24">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white text-center">
            Want a personalized product tour or need help getting started? Let us know.
          </h2>
          <p className="mb-8 text-lg text-gray-500 dark:text-gray-400 text-center">
            You can also{" "}
            <a 
              href="https://calendly.com/visivo-io/30-minute" 
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              book a meeting
            </a>{" "}
            right now!
          </p>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="first_name" 
                  name="first_name" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="John" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="last_name" 
                  name="last_name" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Doe" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Acme Inc." 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="name@company.com" 
                  required 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Leave a message..." 
                  required
                ></textarea>
              </div>
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
