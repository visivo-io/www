import GifToVideo from "./GifToVideo";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 pt-20 sm:py-16 sm:pt-24 lg:py-24 lg:pt-32">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            The better way to build visualizations
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Level up your insights with the first open-source version-controlled BI framework built for the modern data stack.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="https://app.visivo.io/register"
            className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900">
            Get Started
          </a>

          <a href="https://calendly.com/visivo-io/30-minute" className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800">
            Let's Talk
            <svg className="-mr-1 ml-2 size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <GifToVideo />
        </div>
      </div>

      <div className="-mt-48 bg-gray-100 pb-8 pt-48 sm:-mt-80 sm:pt-72 lg:pb-16 dark:bg-gray-800">
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
      </div>
    </section>
  );
}
