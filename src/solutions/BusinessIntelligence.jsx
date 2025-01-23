export default function BusinessIntelligence() {
  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 pt-4 sm:py-16 sm:pt-16 lg:py-24 lg:pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Modern Business Intelligence
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            Transform your data into actionable insights with version-controlled dashboards and automated testing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Version Control</h3>
            <p className="text-gray-500 dark:text-gray-400">Track changes, collaborate with your team, and maintain dashboard version history using Git.</p>
          </div>
          
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Automated Testing</h3>
            <p className="text-gray-500 dark:text-gray-400">Ensure data quality and dashboard reliability with automated tests and continuous integration.</p>
          </div>
          
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 text-xl font-bold dark:text-white">Code-First Approach</h3>
            <p className="text-gray-500 dark:text-gray-400">Build and maintain dashboards using code, enabling better organization and reusability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
