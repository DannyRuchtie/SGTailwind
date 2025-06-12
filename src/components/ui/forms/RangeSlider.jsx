import PropTypes from 'prop-types';

export default function RangeSlider({ label, name, value, onChange, min = 0, max = 100, step = 1, disabled = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="mt-2 flex items-center space-x-4">
        <input
          type="range"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-SG-buttons-cta-primary disabled:opacity-50 dark:bg-gray-700"
        />
        <span className="text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
      </div>
    </div>
  );
}

RangeSlider.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
}; 