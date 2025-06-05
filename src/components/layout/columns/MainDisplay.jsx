import PropTypes from 'prop-types';
import WorkerDetails from '../../workers/WorkerDetails';

export default function MainDisplay({ selectedWorker, onInfoClick }) {
  return (
    <main className="bg-white p-4 md:p-6 md:rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      {!selectedWorker ? (
        <div className="h-full flex items-center justify-center text-SG-text-muted">
          Select a worker to view details
        </div>
      ) : (
        <WorkerDetails worker={selectedWorker} onInfoClick={onInfoClick} />
      )}
    </main>
  );
}

MainDisplay.propTypes = {
  selectedWorker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  onInfoClick: PropTypes.func,
}; 