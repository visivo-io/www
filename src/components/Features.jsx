import React from 'react';

const Section = ({ imageUrl, title, description, details, reversed }) => {
  const renderImage = () => {
    return (
      <div className="block p-10 lg:col-span-2">
        <img className="w-full object-contain dark:hidden max-h-[500px]" src={imageUrl}
          alt="Feature illustration" />
        <img className="hidden w-full object-cover dark:block"
          src={imageUrl} alt="Feature illustration" />
      </div>
    )
  }
  const renderContent = () => {
    return (
      <div className="flex space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="flex flex-col">
          <p className="mt-4 text-lg font-bold text-highlight-500 dark:text-highlight-400">
            {description}
          </p>
          <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            {details}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="mx-10 mt-8 grid items-center justify-center grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-3 lg:gap-16">
      <div className="lg:hidden">
        {renderContent()}
        {renderImage()}
      </div>
      <div className="hidden lg:block lg:contents">
        {reversed ? renderContent() : renderImage()}
        {reversed ? renderImage() : renderContent()}
      </div>
    </div>
  );
};


export default function UxFeatures() {
  return (
    <div>
      <div className="pt-5 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 text-center text-5xl font-bold dark:text-gray-300">Craft an unparalleled user experience</div>
          <Section
            imageUrl="/images/chart-types.webp"
            title="Layout & configurations options"
            description="Unblock Creativity"
            details="With over 20+ trace types and thousands of configuration options, you can build the perfect dashboard for your stakeholders." />
          <Section
            reversed={true}
            imageUrl="/gifs/webp/interactivity.webp"
            title="Interactivity without slow load times"
            description="Interactive"
            details="Unlike traditional BI tools, Visivo does not need to re-fetch data every time a user interacts with your dashboard." />
          <Section
            imageUrl="/images/laptop-iphone-asset.webp"
            title="Meet your stakeholders where they are"
            description="Mobile Optimized"
            details="Deliver your insights to your team on the go and in the office." />
        </div>
      </div>
      <div className="mt-5 bg-gray-100 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-5xl font-bold dark:text-gray-300">Data Visualization As Code</div>
          <Section
            reversed={true}
            imageUrl="/images/object-flow-chart.webp"
            title="DAG enables robust development"
            description="Dependency Management"
            details="Visivo projects are automatically built with a Directed Acyclic Graph (DAG) that manages relationships between your components. This ensures that your dashboards are always up-to-date, accurate and easy to debug. " />
          <Section
            imageUrl="/gifs/webp/auto-complete.webp"
            title="Build visualizations faster"
            description="DevTools"
            details="VScode linter and auto-complete features make writing YAML configurations a breeze." />
          <Section
            reversed={true}
            imageUrl="/images/jinja-for-loop.webp"
            title="Jinja2 templating for dynamic rendering"
            description="Dynamic Rendering"
            details="Jinja2 templating allows you to dynamically render your dashboards based on environment variables, conditional logic, and loops." />
        </div>
      </div>
      <div className="mt-5 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-5xl font-bold dark:text-gray-300">Simple to Deploy & Collaborate</div>
          <Section
            imageUrl="/images/pull-request.webp"
            title="Keep your HEAD clear & commit to git"
            description="Version Control"
            details="Collaborate with your team, track changes, and maintain your dashboards with the same tools you use for the rest of your code." />
          <Section
            reversed={true}
            imageUrl="/images/git-workflow.webp"
            title="Deployments that mirror your workflow"
            description="CI/CD"
            details="Super charge your development cycle with seamless local development and a CI/CD pipeline that deploys projects to all of your environments." />
          <Section
            imageUrl="/images/continuous-testing.webp"
            title="Goodbye broken dashboards"
            description="Testable"
            details="Test new charts, tables and dashboards before they go live in production.  Ensure your tests are passing before data refresh.  Receive alerts when your dashboards are broken and fix problems before your stakeholders are impacted." />
        </div>
      </div>
    </div>
  );
}
