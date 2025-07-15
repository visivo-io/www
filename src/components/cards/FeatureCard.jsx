import React from 'react';

const FeatureCard = ({ icon, title, description, color }) => (
  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
    <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-10`}></div>
    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    <p className="flex-grow text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default FeatureCard;