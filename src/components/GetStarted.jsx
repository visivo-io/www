import React, { useState } from 'react';
import InstallCommand from './InstallCommand';

const GetStarted = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/.netlify/functions/send-to-slack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess('Message sent! We will be in touch soon.');
        setForm({ first_name: '', last_name: '', company: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Hero Section: Headline & Three-Step Callout */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-screen-md text-center mb-8">
            <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Get started with Visivo in <span className="text-highlight-500">minutes</span>
            </h1>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Transform your data into powerful dashboards that your team will <span className="text-sky-500">love</span>.
            </p>
          </div>
          {/* Centered Steps Section */}
          <div className="flex flex-col items-center w-full">
            {/* Step 1: Full width on all screens, centered */}
            <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg mb-8">
              <div className="flex items-center space-x-4">
                <div className="text-6xl font-extrabold text-primary-400">1</div>
                <div>
                  <div className="uppercase text-sm font-semibold text-primary-400">Install</div>
                  <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white ">
                    Install Visivo and pull data from various sources seamlessly.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <InstallCommand />
              </div>
            </div>
            {/* Steps 2 & 3: Side by side on large screens, stacked on mobile, centered */}
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl justify-center">
              {/* Step 2 */}
              <div className="flex-1 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg flex flex-col items-center">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-extrabold text-primary-400">2</div>
                  <div>
                    <div className="uppercase text-sm font-semibold text-primary-400">Model</div>
                    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                      Profile, transform, and visualize your data on your local machine.
                    </p>
                  </div>
                </div>
                <img
                  src="/images/model-screenshot.png"
                  alt="Data modeling screenshot"
                  className="mt-6 rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </div>
              {/* Step 3 */}
              <div className="flex-1 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg flex flex-col items-center">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-extrabold text-primary-400">3</div>
                  <div>
                    <div className="uppercase text-sm font-semibold text-primary-400">Share</div>
                    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                      Deploy to Visivo Cloud and start a free trial to share insights with your team.
                    </p>
                  </div>
                </div>
                <img
                  src="/images/share-screenshot.png"
                  alt="Dashboard sharing screenshot"
                  className="mt-6 rounded-lg border border-gray-200 dark:border-gray-700"
                />
                <a
                  href="https://app.visivo.io/register"
                  className="mt-8 inline-block rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white hover:bg-primary-600"
                >
                  Start Free Trial
                </a>
              </div>
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
          <form onSubmit={handleSubmit}>
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
                  value={form.first_name}
                  onChange={handleChange}
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
                  value={form.last_name}
                  onChange={handleChange}
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
                  value={form.company}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            {success && <div className="mb-4 text-green-600 dark:text-green-400 font-medium text-center">{success}</div>}
            {error && <div className="mb-4 text-red-600 dark:text-red-400 font-medium text-center">{error}</div>}
            <button 
              type="submit" 
              className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
