import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

export default function SearchInput({ 
  placeholder = 'Search...',
  value,
  onChange,
  className = ''
}) {
  return (
    <div className={`relative rounded-md  ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-SG-text-muted" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-SG-text-primary bg-SG-bg-content ring-1 ring-inset ring-SG-stroke placeholder:text-SG-text-muted focus:ring-2 focus:ring-inset focus:ring-SG-buttons-cta-primary sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
}; 