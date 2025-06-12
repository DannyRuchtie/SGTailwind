import PropTypes from 'prop-types';
import WorkerList from '../workers/WorkerList';
import CompanyLogo from '../ui/CompanyLogo';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';


export default function Sidebar({ onWorkerSelect, selectedWorkerId, onBack, showBackButton }) {
  return (
    <aside className="bg-SG-bg-content md:rounded-lg flex flex-col h-full">
      <div className="flex-shrink-0 p-4 border-b border-SG-stroke flex items-center justify-between">
        {showBackButton && (
          <button
            onClick={onBack}
            className="md:hidden p-2 -ml-2 text-SG-text-primary hover:bg-SG-bg-hover rounded-md"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="sr-only">Back</span>
          </button>
        )}
        <CompanyLogo />
      </div>
      <div className="flex-1 min-h-0">
        <WorkerList 
          onWorkerSelect={onWorkerSelect}
          selectedWorkerId={selectedWorkerId}
        />
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  onWorkerSelect: PropTypes.func.isRequired,
  selectedWorkerId: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool.isRequired,
}; 