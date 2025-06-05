import PropTypes from 'prop-types';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function SearchInput({ 
  placeholder = "Search...", 
  value,
  onChange,
  onFilterClick // Optional: if you want to handle filter clicks
}) {
  return (
    <div className="relative flex items-center rounded-md bg-SG-background-canvas-muted p-0 border border-SG-stroke focus-within:ring-1 focus-within:ring-SG-buttons-cta-primary focus-within:border-SG-buttons-cta-primary">
      <div className="pl-3 pr-2 py-2 pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-SG-text-secondary" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full border-0 bg-transparent py-2 text-SG-text-primary placeholder:text-SG-text-placeholder text-sm focus:ring-0"
      />
      {onFilterClick && (
        <button 
          type="button" 
          onClick={onFilterClick}
          className="p-2 text-SG-text-secondary hover:text-SG-text-primary focus:outline-none focus:ring-1 focus:ring-inset focus:ring-SG-buttons-cta-primary rounded-full mr-1"
          aria-label="Filters"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFilterClick: PropTypes.func,
}; 