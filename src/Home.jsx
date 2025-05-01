import Hero from "./components/Hero";
import Features from "./components/Features";
import TestimonialCarousel from "./components/TestimonialCarousel";
import InstallCommand from "./components/InstallCommand";
const Home = () => {
  return (
    <div>
      <Hero />
      <TestimonialCarousel />
      <Features />
      <section className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-screen-sm space-y-6 text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Start improving your workflow today
            </h2>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Install our CLI for local development, then activate your trial for deployments. No credit card required.
            </p>
            <InstallCommand />
            <div className="flex justify-center gap-4">
              <a href="https://app.visivo.io/register"
                className="inline-flex rounded-lg bg-primary-500 px-5 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign up
              </a>
              <a href="https://docs.visivo.io"
                className="inline-flex rounded-lg bg-primary-500 px-5 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Install CLI
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;