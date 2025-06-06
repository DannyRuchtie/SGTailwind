import SearchInput from '../ui/SearchInput.jsx';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/24/outline';
import ListFooterCTA from '../ui/list/ListFooterCTA';
import { useState, useMemo } from 'react';

function WorkerListItem({ name, company, country, isSelected, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`px-6 py-3 border-b border-SG-stroke cursor-pointer hover:bg-SG-bg-content-secondary transition-colors ${
        isSelected ? 'bg-SG-bg-content-secondary border-l-4 border-l-SG-buttons-cta-primary pl-5' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <img 
          src={`https://flagcdn.com/24x18/${country.toLowerCase()}.png`}
          alt={`${country} flag`}
          className="w-6 h-4 object-cover rounded-xs"
        />
        <div>
          <span className="text-SG-text-primary text-sm">{name}</span>
          <p className="text-gray-500 text-xs mt-0.5">{company}</p>
        </div>
      </div>
    </div>
  );
}

WorkerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default function Sidebar({ workers, onWorkerSelect, selectedWorkerId }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddWorker = () => {
    // This would be implemented later
    console.log('Add worker clicked');
  };

  // Filter workers based on search query
  const filteredWorkers = useMemo(() => {
    if (!searchQuery.trim()) return workers;

    const query = searchQuery.toLowerCase();
    return workers.filter(worker => 
      worker.name.toLowerCase().includes(query) ||
      worker.company.toLowerCase().includes(query) ||
      worker.country.toLowerCase().includes(query)
    );
  }, [searchQuery, workers]);

  // Show no results message if no workers match the search
  const renderNoResults = () => {
    if (filteredWorkers.length === 0) {
      return (
        <div className="px-6 py-4 text-center">
          <p className="text-SG-text-muted text-sm">No workers found matching "{searchQuery}"</p>
        </div>
      );
    }
    return null;
  };

  return (
    <aside className="bg-SG-bg-content md:rounded-lg flex flex-col max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      <div className="px-6 py-4 border-b border-SG-stroke">
        <SearchInput 
          placeholder="Search worker..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex-1 overflow-y-auto min-h-0">
        {renderNoResults()}
        {filteredWorkers.map((worker) => (
          <WorkerListItem
            key={worker.id}
            {...worker}
            isSelected={worker.id === selectedWorkerId}
            onClick={() => onWorkerSelect(worker)}
          />
        ))}
      </div>

      <ListFooterCTA
        label="Add Worker"
        onClick={handleAddWorker}
      />
    </aside>
  );
}

Sidebar.propTypes = {
  workers: PropTypes.array.isRequired,
  onWorkerSelect: PropTypes.func.isRequired,
  selectedWorkerId: PropTypes.number,
}; 