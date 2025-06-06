import PropTypes from 'prop-types';
import Sidebar from '../layout/Sidebar';
import MainDisplay from '../layout/MainDisplay';
import InfoPanel from '../layout/InfoPanel';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// In a real app this would come from an API
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

export default function Workforce({ view = 'standard' }) {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const { workerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (workerId) {
      const worker = workers.find(w => w.id === parseInt(workerId));
      setSelectedWorker(worker || null);
    } else {
      setSelectedWorker(null);
    }
  }, [workerId]);

  const handleWorkerSelect = (worker) => {
    const path = view === 'standard' ? `/workforce/${worker.id}` : `/workforce/${view}/${worker.id}`;
    navigate(path);
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
            <Sidebar 
              workers={workers} 
              onWorkerSelect={handleWorkerSelect} 
              selectedWorkerId={selectedWorker?.id} 
            />
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
             <Sidebar 
              workers={workers} 
              onWorkerSelect={handleWorkerSelect} 
              selectedWorkerId={selectedWorker?.id} 
            />
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

Workforce.propTypes = {
  view: PropTypes.oneOf(['focus', 'standard', 'expanded']).isRequired,
}; 