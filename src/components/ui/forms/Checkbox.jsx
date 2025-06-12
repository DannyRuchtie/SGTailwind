import PropTypes from 'prop-types';

export default function Checkbox({ label, name, checked, onChange, disabled = false }) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-SG-buttons-cta-primary focus:ring-SG-buttons-cta-primary/50 disabled:opacity-50"
      />
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
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