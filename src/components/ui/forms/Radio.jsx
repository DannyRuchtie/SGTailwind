import PropTypes from 'prop-types';

export default function Radio({ label, name, value, checked, onChange, disabled = false }) {
  return (
    <label className="group flex items-center space-x-3 cursor-pointer">
      <div className="relative flex items-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer absolute h-4 w-4 opacity-0"
        />
        <div className="
          h-4 w-4 rounded-full border border-gray-300 bg-white
          peer-checked:bg-SG-buttons-cta-primary peer-checked:border-SG-buttons-cta-primary
          peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-SG-buttons-cta-primary
          transition-colors duration-200 ease-in-out
          dark:bg-gray-700 dark:border-gray-600
          dark:peer-checked:bg-SG-buttons-cta-primary dark:peer-checked:border-SG-buttons-cta-primary
          "
        ></div>
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-2 w-2 rounded-full bg-white
          scale-0 peer-checked:scale-100 transition-transform duration-200 ease-in-out
          "
        ></div>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-SG-text-primary transition-colors">{label}</span>
    </label>
  );
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}; 