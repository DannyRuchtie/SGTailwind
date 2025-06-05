import PropTypes from 'prop-types';

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="bg-white">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-4 px-1 mr-6 text-sm font-medium whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? 'text-SG-buttons-cta-primary'
                    : 'text-gray-500 hover:text-gray-700'
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