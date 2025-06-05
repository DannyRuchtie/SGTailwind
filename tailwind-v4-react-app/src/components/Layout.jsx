import { useState } from 'react';
import Navbar from './Navbar';
import Tabs from './Tabs';
import Sidebar from './Sidebar';
import MainDisplay from './MainDisplay';
import InfoPanel from './InfoPanel';

const TABS_CONFIG = [
  { id: 'focus-view', label: 'Focus View' },
  { id: 'standard-view', label: 'Standard View' },
  { id: 'expanded-view', label: 'Expanded View' },
];

export default function Layout() {
  const [activeTab, setActiveTab] = useState(TABS_CONFIG[1].id);

  return (
    <div className="min-h-screen bg-SG-bg-base flex flex-col">
      <Navbar />
      <Tabs tabs={TABS_CONFIG} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-grow container max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        <div className="grid grid-cols-12 gap-6 flex-grow">
          {activeTab === 'focus-view' && (
            <div className="col-span-12 h-full">
              <MainDisplay />
            </div>
          )}

          {activeTab === 'standard-view' && (
            <>
              <div className="col-span-12 md:col-span-3 h-full">
                <Sidebar />
              </div>
              <div className="col-span-12 md:col-span-9 h-full">
                <MainDisplay />
              </div>
            </>
          )}

          {activeTab === 'expanded-view' && (
            <>
              <div className="col-span-12 md:col-span-3 h-full">
                <Sidebar />
              </div>
              <div className="col-span-12 md:col-span-6 h-full">
                <MainDisplay />
              </div>
              <div className="col-span-12 md:col-span-3 h-full">
                <InfoPanel />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 