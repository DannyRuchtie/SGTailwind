import PropTypes from 'prop-types';

export default function Checkbox({ label, name, checked, onChange, disabled = false }) {
  return (
    <label className="group flex items-center space-x-3 cursor-pointer">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer absolute h-4 w-4 opacity-0"
        />
        <div className="
          h-4 w-4 rounded border border-gray-300 bg-white
          peer-checked:bg-SG-buttons-cta-primary peer-checked:border-SG-buttons-cta-primary
          peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-SG-buttons-cta-primary
          transition-colors duration-200 ease-in-out
          dark:bg-gray-700 dark:border-gray-600
          dark:peer-checked:bg-SG-buttons-cta-primary dark:peer-checked:border-SG-buttons-cta-primary
          "
        >
        </div>
        <svg
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            h-3 w-3 text-white
            scale-0 peer-checked:scale-100 transition-transform duration-200 ease-in-out
            pointer-events-none
          "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-SG-text-primary transition-colors">{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}; 