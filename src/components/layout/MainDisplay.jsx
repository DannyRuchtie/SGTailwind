import PropTypes from 'prop-types';
import WorkerDetails from '../workers/WorkerDetails';

export default function MainDisplay({ selectedWorker }) {
  return (
    <main className="bg-white p-6 md:rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)] overflow-y-auto">
      {!selectedWorker ? (
        <div className="h-full flex items-center justify-center text-gray-500 flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Worker</h3>
          <p className="text-sm">Choose a worker from the sidebar to view their details</p>
        </div>
      ) : (
        <WorkerDetails worker={selectedWorker} />
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
}; 