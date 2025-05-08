import React from 'react';
import { Link } from 'react-router-dom';
import vendorData from './vendor-data.json';

const ComparisonsList = () => {
  const comparisons = Object.keys(vendorData)
    .filter(vendor => vendor !== 'Visivo')
    .flatMap((vendor1, _, vendors) => 
      vendors
        .filter(vendor2 => vendor2 !== vendor1)
        .map(vendor2 => ({
          vendor1,
          vendor2,
          path: `/comparisons/${vendorData[vendor1].urlSlug}-${vendorData[vendor2].urlSlug}`,
          title: `${vendor1} vs ${vendor2}`
        }))
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Comparisons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisons.map(({ vendor1, vendor2, path, title }) => (
          <Link
            key={`${vendor1}-${vendor2}`}
            to={path}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComparisonsList; 