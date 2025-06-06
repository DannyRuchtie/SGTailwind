import PropTypes from 'prop-types';

export default function LabelValue({ label, value, className = '' }) {
  return (
    <div className={`flex items-center py-3 px-3 border-b border-SG-stroke hover:bg-SG-bg-base50 ${className}`}>
      <dt className="text-sm text-SG-text-muted  w-1/3">{label}</dt>
      <dd className="text-sm text-SG-text-muted w-2/3">{value}</dd>
    </div>
  );
}

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 