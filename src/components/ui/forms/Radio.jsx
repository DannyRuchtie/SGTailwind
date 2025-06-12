import PropTypes from 'prop-types';

export default function Radio({ label, name, value, checked, onChange, disabled = false }) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 border-gray-300 text-SG-buttons-cta-primary focus:ring-SG-buttons-cta-primary/50 disabled:opacity-50"
      />
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
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