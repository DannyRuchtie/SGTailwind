import PropTypes from 'prop-types';
import Sidebar from '../layout/Sidebar';
import MainDisplay from '../layout/MainDisplay';
import InfoPanel from '../layout/InfoPanel';
import { useState } from 'react';

export default function UIDemo({ view = 'standard' }) {
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleWorkerSelect = (worker) => {
    setSelectedWorker(worker);
  };

  switch (view) {
    case 'focus':
      return (
        <div className="col-span-12">
          <MainDisplay selectedWorker={selectedWorker} />
        </div>
      );
    case 'standard':
      return (
        <>
          <div className="col-span-3">
            <Sidebar onWorkerSelect={handleWorkerSelect} />
          </div>
          <div className="col-span-9">
            <MainDisplay selectedWorker={selectedWorker} />
          </div>
        </>
      );
    case 'expanded':
      return (
        <>
          <div className="col-span-3">
            <Sidebar onWorkerSelect={handleWorkerSelect} />
          </div>
          <div className="col-span-6">
            <MainDisplay selectedWorker={selectedWorker} />
          </div>
          <div className="col-span-3">
            <InfoPanel selectedWorker={selectedWorker} />
          </div>
        </>
      );
    default:
      return null;
  }
}

UIDemo.propTypes = {
  view: PropTypes.oneOf(['focus', 'standard', 'expanded']).isRequired,
}; 