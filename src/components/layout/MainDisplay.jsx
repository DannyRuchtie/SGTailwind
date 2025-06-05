import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

function WorkerDetails({ worker }) {
  if (!worker) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <p>Select a worker from the sidebar to view their details</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-SG-text-primary">{worker.name}</h1>
          <p className="text-SG-text-muted">{worker.company}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-SG-text-primary mb-2">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <p className="text-SG-text-muted">ID: {worker.id}</p>
            <p className="text-SG-text-muted">Country: {worker.country}</p>
            {/* Add more contact details here when available */}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-SG-text-primary mb-2">Company Details</h3>
          <div className="space-y-2 text-sm">
            <p className="text-SG-text-muted">Company: {worker.company}</p>
            {/* Add more company details here when available */}
          </div>
        </div>
      </div>
    </div>
  );
}

WorkerDetails.propTypes = {
  worker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
};

export default function MainDisplay({ selectedWorker, onInfoClick }) {
  if (!selectedWorker) {
    return (
      <main className="bg-white p-4 md:p-6 md:rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
        <div className="h-full flex items-center justify-center text-SG-text-muted flex-col">
            
       <h3 className="text-lg font-semibold text-SG-text-primary mb-3">Detail View</h3>
        <p className="text-sm text-SG-text-muted">This is the main column.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white p-4 md:p-6 md:rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      <WorkerDetails worker={selectedWorker} onInfoClick={onInfoClick} />
    </main>
  );
}

MainDisplay.propTypes = {
  selectedWorker: WorkerDetails.propTypes.worker,
  onInfoClick: PropTypes.func,
}; 