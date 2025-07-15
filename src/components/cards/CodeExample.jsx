import React from 'react';

const CodeExample = ({ title, code, language = "python" }) => (
  <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg">
    <div className="p-4 sm:p-6">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h4 className="text-base sm:text-lg font-semibold text-white">{title}</h4>
        <span className="self-start sm:self-auto rounded-md bg-gray-800 px-2 py-1 text-xs sm:text-sm text-gray-400">{language}</span>
      </div>
    </div>
    <div className="overflow-x-auto">
      <pre className="px-4 pb-4 sm:px-6 sm:pb-6">
        <code className="block text-xs sm:text-sm text-gray-300 whitespace-pre">{code}</code>
      </pre>
    </div>
  </div>
);

export default CodeExample;