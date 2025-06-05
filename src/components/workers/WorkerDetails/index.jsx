import PropTypes from 'prop-types';
import { PencilIcon } from '@heroicons/react/24/outline';
import WorkerDetailsSection from './WorkerDetailsSection';

export default function WorkerDetails({ worker }) {
  if (!worker) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <p>Select a worker from the sidebar to view their details</p>
      </div>
    );
  }

  const sections = [
    {
      title: 'General Info',
      items: [
        { label: 'Worker full name', value: worker.name },
        { label: 'Nationality', value: 'Canadian' },
        { label: 'Citizenship', value: 'Canadian' },
        { label: 'Gender', value: 'Prefer not to say' },
      ]
    },
    {
      title: 'Contact',
      items: [
        { label: 'Email', value: 'anika.calzoni@maplegate.com' },
        { label: 'Phone', value: '+1 (555) 123-4567' },
        { label: 'Address', value: '123 Maple Street, Toronto, ON' },
      ]
    },
    {
      title: 'Location',
      items: [
        { label: 'Country', value: worker.country },
        { label: 'City', value: 'Toronto' },
        { label: 'Time Zone', value: 'EST (UTC-5)' },
      ]
    },
    {
      title: 'Beneficiaries',
      items: [
        { label: 'Primary', value: 'John Calzoni (Spouse)' },
        { label: 'Secondary', value: 'Sarah Calzoni (Child)' },
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-SG-text-primary">{worker.name}</h1>
        
          </div>
          <p className="text-sm text-gray-500 mt-1">{worker.company}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-2">
        {sections.map((section, index) => (
          <WorkerDetailsSection
            key={index}
            title={section.title}
            items={section.items}
            defaultExpanded={index === 0}
          />
        ))}
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