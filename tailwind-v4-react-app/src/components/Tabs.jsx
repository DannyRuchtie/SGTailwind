import { useState } from 'react';

const tabsData = [
  { id: 'generated', label: 'Generated Invoices', count: 3 },
  { id: 'reports', label: 'Reports', count: 2 },
  // Add more tabs as needed
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="bg-white">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-gray-200">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-4 px-1 mr-6 text-sm font-medium whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? 'text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs 
                    ${
                      activeTab === tab.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {tab.count}
                </span>
              )}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
} 