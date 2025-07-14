import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const BenefitItem = ({ icon, text }) => (
  <div className="flex items-start space-x-3">
    {icon || <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />}
    <p className="text-gray-700 dark:text-gray-300">{text}</p>
  </div>
);

export default BenefitItem;