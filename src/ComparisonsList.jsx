import React from 'react';
import { Link } from 'react-router-dom';
import vendorData from './vendor-data.json';

const ComparisonsList = () => {
  const vendors = Object.keys(vendorData).filter(v => v !== 'Visivo');
  const comparisons = [
    // single competitor vs Visivo
    ...vendors.map(vendor => ({
      vendor1: vendor,
      vendor2: 'Visivo',
      path: `/comparisons/${vendorData[vendor].urlSlug}-visivo`,
      title: `${vendor} vs Visivo`
    })),
    // unique multi-competitor comparisons
    ...vendors.flatMap((v1, i) =>
      vendors.slice(i + 1).map(v2 => ({
        vendor1: v1,
        vendor2: v2,
        path: `/comparisons/${vendorData[v1].urlSlug}-${vendorData[v2].urlSlug}`,
        title: `${v1} vs ${v2} vs Visivo`
      }))
    )
  ];

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