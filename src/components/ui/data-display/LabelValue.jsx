import PropTypes from 'prop-types';

export default function LabelValue({ label, value, className = '' }) {
  return (
    <div className={`flex items-center py-3 px-3 border-b border-gray-100 hover:bg-gray-50 ${className}`}>
      <dt className="text-sm text-gray-700 w-1/3">{label}</dt>
      <dd className="text-sm text-gray-600 w-2/3">{value}</dd>
    </div>
  );
}

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 