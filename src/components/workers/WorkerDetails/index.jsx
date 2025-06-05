import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import DetailPanel from '../../ui/details/DetailPanel';

export default function WorkerDetails({ worker, onInfoClick }) {
  if (!worker) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <p>Select a worker from the sidebar to view their details</p>
      </div>
    );
  }

  const mobileInfoButton = onInfoClick && (
    <button
      onClick={onInfoClick}
      className="flex items-center gap-2 text-SG-text-primary hover:text-SG-text-muted transition-colors md:hidden"
    >
      <span>More Info</span>
      <ChevronRightIcon className="h-5 w-5" />
    </button>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-SG-text-primary">{worker.name}</h1>
          <p className="text-SG-text-muted">{worker.company}</p>
        </div>
        {mobileInfoButton}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailPanel
          title="Contact Information"
          className="h-fit"
        >
          <div className="space-y-2 text-sm">
            <p className="text-SG-text-muted">ID: {worker.id}</p>
            <p className="text-SG-text-muted">Country: {worker.country}</p>
          </div>
        </DetailPanel>

        <DetailPanel
          title="Company Details"
          className="h-fit"
        >
          <div className="space-y-2 text-sm">
            <p className="text-SG-text-muted">Company: {worker.company}</p>
          </div>
        </DetailPanel>
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
  onInfoClick: PropTypes.func,
}; 