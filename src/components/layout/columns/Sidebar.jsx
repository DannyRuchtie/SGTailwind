import PropTypes from 'prop-types';
import WorkerList from '../../workers/WorkerList';

export default function Sidebar({ onWorkerSelect, selectedWorkerId }) {
  return (
    <aside className="flex flex-col h-full bg-SG-bg-content md:rounded-lg">
      <WorkerList 
        onWorkerSelect={onWorkerSelect}
        selectedWorkerId={selectedWorkerId}
      />
    </aside>
  );
}

Sidebar.propTypes = {
  onWorkerSelect: PropTypes.func.isRequired,
  selectedWorkerId: PropTypes.number,
}; 