import PropTypes from 'prop-types';
import { Bars3Icon } from '@heroicons/react/24/outline';
import CompanyLogo from '../../ui/branding/CompanyLogo';

export default function BrandSection({ onMenuClick }) {
  return (
    <div className="flex">
      <div className="flex items-center mr-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="p-2 rounded-md text-SG-text-muted hover:text-SG-text-primary hover:bg-SG-bg-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-SG-buttons-cta-primary"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6 text-SG-text-primary" aria-hidden="true" />
        </button>
      </div>
      <div className="flex shrink-0 items-center">
        <CompanyLogo className="h-8 w-auto" />
        <span className="ml-3 text-SG-text-primary">Safeguard Global</span>
        <span className="text-SG-stroke ml-4">|</span>
        <span className="ml-4 text-SG-text-primary">Workforce</span>
      </div>
    </div>
  );
}

BrandSection.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
}; 