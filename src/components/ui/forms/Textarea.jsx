import PropTypes from 'prop-types';

export default function Textarea({ label, name, value, onChange, placeholder, rows = 4, disabled = false, error = '' }) {
  const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-SG-buttons-cta-primary focus:ring-SG-buttons-cta-primary';

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          name={name}
          id={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`block w-full rounded-md border-0 p-1.5 text-SG-text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:text-white dark:placeholder:text-gray-400 ${errorClasses}`}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600 dark:text-SG-state-error">{error}</p>}
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.string,
}; 