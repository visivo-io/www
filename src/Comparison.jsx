import React from 'react';
import vendorData from './vendor-data.json';
import InstallCommand from './components/InstallCommand';

// RatingBar: visually represent ease of development (1–5)
const RatingBar = ({ rating }) => (
  <div className="flex items-center mb-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={`flex-1 h-2 mx-1 rounded ${
          i <= rating ? 'bg-blue-600' : 'bg-gray-300'
        }`}>
      </span>
    ))}
  </div>
);

// BadgeList: display array items as badges
const BadgeList = ({ items }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {items.map((item) => (
      <span key={item} className="px-2 py-1 bg-gray-200 rounded text-sm">
        {item}
      </span>
    ))}
  </div>
);

/**
 * ComparisonPage
 * @param {{ competitorKeys: string[]}} props
 */
const ComparisonPage = ({ competitorKeys }) => {
  // Always include Visivo as last, after the provided keys
  const toolNames = [...competitorKeys, 'Visivo'];
  const competitors = toolNames.map((name) => ({ name, ...vendorData[name] }));

  // Generate the title based on the tools
  const title = `Exploring ${competitorKeys.join(', ')} & Visivo`;
  const SubTitle = `${toolNames.join(' Vs. ')}`;

  // Quick features to show in a summary table
  const quickRows = [
    ['Deployment Model', 'deploymentModel'],
    ['Pricing', 'pricing'],
    ['Cost', 'cost'],
    ['Git Integration', 'gitIntegration'],
    ['CI/CD & Testing', 'ciCd'],
    ['Real-time', 'realTime'],
    ['AI', 'aiFeatures'],
    ['Visual to Code', 'visualToCode'],
    ['DAG-Based', 'dagBased'],
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Page Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">{SubTitle}</h2>
      {/* 2. Introductory Paragraph */}
      <p className="text-lg text-gray-700 mb-8">
        In this article, we'll compare the key features, capabilities, and differentiators between {toolNames.join(', ')}. This comprehensive comparison will help you make an informed decision about which platform best suits your data visualization and analytics needs.
      </p>

      {/* 3. Quick Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Comparison</h2>
        <p className="text-gray-600 mb-4">
          A high-level overview of key features and capabilities across these BI tools. This comparison helps you quickly identify which platform best matches your needs.
        </p>
        <table className="w-full table-auto border border-gray-200 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Feature</th>
              {competitors.map((c) => (
                <th key={c.name} className="border px-4 py-2">
                  <a 
                    href={`https://${c.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {c.name}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {quickRows.map(([label, key]) => (
              <tr key={key} className="hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{label}</td>
                {competitors.map((c) => {
                  const value = c[key];
                  return (
                    <td key={c.name + key} className="border px-4 py-2 text-center">
                      {typeof value === 'boolean' ? (value ? '✔️' : '❌') : Array.isArray(value) ? value.join(', ') : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* 4. Detailed Comparison Sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Deployment & Pricing</h2>
        <p className="text-gray-600 mb-4">
          Understanding the deployment options and pricing structure is crucial for making an informed decision. Here's how each platform handles deployment and what you can expect in terms of costs.
        </p>
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Tool</th>
              <th className="border px-4 py-2">Deployment Model</th>
              <th className="border px-4 py-2">Pricing</th>
              <th className="border px-4 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr key={c.name} className="hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{c.name}</td>
                <td className="border px-4 py-2">{c.deploymentModel.join(', ')}</td>
                <td className="border px-4 py-2">{c.pricing}</td>
                <td className="border px-4 py-2">{c.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Target Users & Use-Cases</h2>
        <p className="text-gray-600 mb-4">
          Each BI tool is designed with specific user personas in mind. Understanding the target audience helps ensure you choose a platform that aligns with your team's skills and needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitors.map((c) => (
            <div key={c.name} className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{c.name}</h3>
              <BadgeList items={c.targetUsers} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ease of Development & Deployment</h2>
        <p className="text-gray-600 mb-4">
          The development experience can significantly impact your team's productivity. This section compares how easy it is to build, deploy, and maintain dashboards in each platform.
        </p>
        {competitors.map((c) => (
          <div key={c.name} className="mb-6">
            <h3 className="font-medium mb-1">{c.name}</h3>
            <RatingBar rating={c.easeOfDev} />
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Integrations & Ecosystem</h2>
        <p className="text-gray-600 mb-4">
          A robust ecosystem of integrations is essential for modern BI tools. Here's how each platform connects with other tools in your data stack.
        </p>
        {competitors.map((c) => (
          <div key={c.name} className="mb-6">
            <h3 className="font-medium mb-1">{c.name}</h3>
            <BadgeList items={c.integrations} />
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI & Advanced Features</h2>
        <p className="text-gray-600 mb-4">
          Artificial intelligence is transforming how we interact with data. Compare the AI capabilities and advanced features offered by each platform.
        </p>
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Tool</th>
              <th className="border px-4 py-2">AI Features</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr key={c.name} className="hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{c.name}</td>
                <td className="border px-4 py-2 text-center">{c.aiFeatures ? '✔️' : '❌'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* New Section: Visualization Capabilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visualization Capabilities</h2>
        <p className="text-gray-600 mb-4">
          The ability to create compelling and insightful visualizations is a key differentiator between BI tools. Here's how each platform handles data visualization.
        </p>
        {competitors.map((c) => (
          <div key={c.name} className="mb-6">
            <h3 className="font-medium mb-1">{c.name}</h3>
            <p className="text-gray-700">{c.visualization}</p>
          </div>
        ))}
      </section>

      {/* Update the existing Unique Differentiators section to be more detailed */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Detailed Differentiators</h2>
        <p className="text-gray-600 mb-4">
          Each platform has its own strengths and weaknesses. Here's a detailed breakdown of what sets each tool apart, including both advantages and limitations.
        </p>
        {competitors.map((c) => (
          <div key={c.name} className="mb-6 p-4 border rounded">
            <h3 className="font-medium mb-2 text-lg">{c.name}</h3>
            <div className="text-gray-700">
              {c.uniqueDiffs.split('−').map((part, index) => (
                <div key={index} className="mb-2">
                  {index === 0 ? (
                    <div className="text-green-600">+ {part.trim()}</div>
                  ) : (
                    <div className="text-red-600">− {part.trim()}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Security & Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Security & Architecture</h2>
        <p className="text-gray-600 mb-4">
          Security and architecture are critical considerations for enterprise deployments. Here's how each platform handles data security and system architecture.
        </p>
        {competitors.map((c) => (
          <div key={c.name} className="mb-6">
            <h3 className="font-medium mb-1">{c.name}</h3>
            <p className="text-gray-700">{c.security}</p>
          </div>
        ))}
      </section>

      {/* Unique Strengths of Visivo */}
      <section className="mb-12 p-6 bg-yellow-50 rounded">
        <h2 className="text-2xl font-semibold mb-4">Why Visivo Stands Out</h2>
        <p className="text-gray-600 mb-4">
          While each platform has its strengths, Visivo offers unique advantages that make it an excellent choice for modern data teams.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>DAG-Based Architecture: Enables complex data transformations and dependencies</li>
          <li>Visual to Human-readable Code: Seamlessly switch between visual and code-based development</li>
          <li>Ease of Development: Multiple approaches to build for both technical and non-technical users</li>
          <li>AI-Powered Development: Leverage AI to accelerate dashboard creation</li>
          <li>Git Integration: Full version control and collaboration capabilities</li>
        </ul>
      </section>

      {/* Final CTA */}
      
      <section className="text-center mb-12">
        <p className="text-gray-600 mb-6">
          Ready to experience the power of modern BI? Try Visivo today and see how it compares to other tools in your stack.
        </p>
        <InstallCommand />
        <a
          href={"https://app.visivo.io/register"}
          className="inline-block m-5 px-8 py-3 text-white rounded font-semibold mr-4"
          style={{ backgroundColor: "#713B57" }}
        >
          Sign Up for Free
        </a>
        <a
          href={"/"}
          className="inline-block m-5 px-8 py-3 border text-[#713B57] rounded font-semibold"
          style={{ borderColor: "#713B57" }}
        >
          Request a Demo
        </a>
      </section>
      
    </div>
    
  );
};

export default ComparisonPage;
