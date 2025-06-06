import PropTypes from 'prop-types';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton({ onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-4 text-SG-text-primary hover:text-SG-text-muted transition-colors ${className}`}
    >
      <ChevronLeftIcon className="h-5 w-5" />
      <span >Back</span>
    </button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}; 