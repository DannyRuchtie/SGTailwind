import SearchInput from '../ui/SearchInput.jsx';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/24/outline';
import ListFooterCTA from '../ui/list/ListFooterCTA';
import { useState, useMemo } from 'react';

// Sample data - in a real app this would come from props or an API
const workers = [
  { id: 1, name: 'Anika Calzoni', company: 'Maple Gate', country: 'CA' },
  { id: 2, name: 'Lincoln Vetrovs', company: 'Indium Tech', country: 'NL' },
  { id: 3, name: 'Justin Ekstrom Bothman', company: 'Indium Tech', country: 'NL' },
  { id: 4, name: 'Ann Rhiel Madsen', company: 'Verdant Innovations', country: 'US' },
  { id: 5, name: 'Marcus Ekstrom Bothman', company: 'Nebula Nexus', country: 'GB' },
  { id: 6, name: 'Charlie Dias', company: 'Brimstone & Co.', country: 'ZA' },
  { id: 7, name: 'Craig Press', company: 'Brimstone & Co.', country: 'ZA' },
  { id: 8, name: 'Kadin Botosh', company: 'Indium Tech', country: 'NL' },
  { id: 9, name: 'Sofia Rodriguez', company: 'Maple Gate', country: 'MX' },
  { id: 10, name: 'Lars Eriksson', company: 'Nebula Nexus', country: 'SE' },
  { id: 11, name: 'Yuki Tanaka', company: 'Verdant Innovations', country: 'JP' },
  { id: 12, name: 'Isabella Santos', company: 'Brimstone & Co.', country: 'BR' },
  { id: 13, name: 'Alexander Schmidt', company: 'Indium Tech', country: 'DE' },
  { id: 14, name: 'Emma O\'Connor', company: 'Maple Gate', country: 'IE' },
  { id: 15, name: 'Lucas Kovač', company: 'Nebula Nexus', country: 'SK' },
  { id: 16, name: 'Nina Patel', company: 'Verdant Innovations', country: 'IN' }
];

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

export default function Sidebar({ onWorkerSelect, selectedWorkerId }) {
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
  }, [searchQuery]);

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
        icon={<PlusIcon />}
        label="Add Worker"
        onClick={handleAddWorker}
      />
    </aside>
  );
}

Sidebar.propTypes = {
  onWorkerSelect: PropTypes.func.isRequired,
  selectedWorkerId: PropTypes.number,
}; 