import PropTypes from 'prop-types';

export default function ProgressBar({ progress, color = 'primary', size = 'md' }) {
  const colorClasses = {
    primary: 'bg-SG-buttons-cta-primary',
    gray: 'bg-gray-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={`w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 ${sizeClasses[size]}`}>
      <div
        className={`rounded-full ${colorClasses[color]}`}
        style={{ width: `${progress}%`, height: '100%' }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['primary', 'gray', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}; 