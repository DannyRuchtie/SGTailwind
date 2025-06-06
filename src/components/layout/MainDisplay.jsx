import PropTypes from 'prop-types';
import WorkerDetails from '../workers/WorkerDetails';

export default function MainDisplay({ selectedWorker, onInfoClick, isExpandedView, isMobile }) {
  return (
    <main className="bg-SG-bg-content dark:bg-SG-bg-base800 p-6 md:rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)] overflow-y-auto  transition-colors duration-200">
      {!selectedWorker ? (
        <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400 flex-col">
          <h3 className="text-lg font-semibold text-SG-text-primary dark:text-white mb-2">Select a Worker</h3>
          <p className="text-sm">Choose a worker from the sidebar to view their details</p>
        </div>
      ) : (
        <WorkerDetails 
          worker={selectedWorker} 
          onInfoClick={onInfoClick}
          isExpandedView={isExpandedView}
          isMobile={isMobile}
        />
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
  isExpandedView: PropTypes.bool,
  isMobile: PropTypes.bool,
}; 