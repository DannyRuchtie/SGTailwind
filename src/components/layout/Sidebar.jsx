import SearchInput from '../ui/SearchInput.jsx';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/24/outline';
import ListFooterCTA from '../ui/list/ListFooterCTA';
import { useState, useMemo } from 'react';
import WorkerListItem from '../ui/list/WorkerListItem';
import ListEmptyState from '../ui/list/ListEmptyState';

export default function Sidebar({ workers, onWorkerSelect, selectedWorkerId }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddWorker = () => {
    // This would be implemented later
    console.log('Add worker clicked');
  };

  const filteredWorkers = useMemo(() => {
    if (!searchQuery.trim()) return workers;

    const query = searchQuery.toLowerCase();
    return workers.filter(worker => 
      worker.name.toLowerCase().includes(query) ||
      worker.company.toLowerCase().includes(query) ||
      worker.country.toLowerCase().includes(query)
    );
  }, [searchQuery, workers]);

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
        {filteredWorkers.length > 0 ? (
          <ul className="divide-y divide-SG-stroke">
            {filteredWorkers.map((worker) => (
              <WorkerListItem
                key={worker.id}
                {...worker}
                isSelected={worker.id === selectedWorkerId}
                onClick={() => onWorkerSelect(worker)}
              />
            ))}
          </ul>
        ) : (
          <ListEmptyState message={`No workers found matching "${searchQuery}"`} />
        )}
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