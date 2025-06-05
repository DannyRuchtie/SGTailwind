import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="bg-white ">
      <div className="sm:hidden px-4 pt-3 pb-2">
        <div className="relative">
          <select
            id="tabs-select-mobile"
            name="tabs-select-mobile"
            aria-label="Select a tab"
            className="block w-full appearance-none rounded-md border-SG-stroke bg-white py-2.5 pl-3 pr-10 text-SG-text-primary text-sm focus:border-SG-buttons-cta-primary focus:outline-none focus:ring-1 focus:ring-SG-buttons-cta-primary"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDownIcon
              className="h-5 w-5 text-SG-text-secondary"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-SG-stroke">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 px-1 mr-6 text-sm font-medium whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? 'text-SG-buttons-cta-primary'
                      : 'text-SG-text-secondary hover:text-SG-text-primary'
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 border-b-2 border-SG-buttons-cta-primary"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}; 