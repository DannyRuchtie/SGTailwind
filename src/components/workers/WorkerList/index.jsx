import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/24/outline';
import SearchInput from '../../ui/search/SearchInput';
import List from '../../ui/list/List';
import ListItem from '../../ui/list/ListItem';
import ListFooterCTA from '../../ui/list/ListFooterCTA';

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

export default function WorkerList({ onWorkerSelect, selectedWorkerId }) {
  const renderWorkerItem = (worker) => (
    <ListItem
      key={worker.id}
      leading={
        <img 
          src={`https://flagcdn.com/24x18/${worker.country.toLowerCase()}.png`}
          alt={`${worker.country} flag`}
          className="w-6 h-4 object-cover rounded-xs"
        />
      }
      title={worker.name}
      subtitle={worker.company}
      isSelected={worker.id === selectedWorkerId}
      onClick={() => onWorkerSelect(worker)}
    />
  );

  const handleAddWorker = () => {
    // This would be implemented later
    console.log('Add worker clicked');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 border-b border-SG-stroke">
        <SearchInput 
          placeholder="Search worker..." 
        />
      </div>
      
      <div className="overflow-y-auto" style={{ height: 'calc(100vh - 13rem)' }}>
        {workers.map((worker) => renderWorkerItem(worker))}
      </div>

      <div className="border-t border-SG-stroke bg-SG-bg-content">
        <ListFooterCTA
          icon={<PlusIcon />}
          label="Add Worker"
          onClick={handleAddWorker}
          className="border-t-0"
        />
      </div>
    </div>
  );
}

WorkerList.propTypes = {
  onWorkerSelect: PropTypes.func.isRequired,
  selectedWorkerId: PropTypes.number,
}; 