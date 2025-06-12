import PropTypes from 'prop-types';
import { InformationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const icons = {
  info: <InformationCircleIcon className="h-5 w-5" />,
  success: <CheckCircleIcon className="h-5 w-5" />,
  warning: <ExclamationTriangleIcon className="h-5 w-5" />,
  error: <XCircleIcon className="h-5 w-5" />,
};

const colorClasses = {
  info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  success: 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  error: 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

export default function AlertBanner({ title, message, type = 'info' }) {
  return (
    <div className={`rounded-md p-4 ${colorClasses[type]}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{title}</h3>
          {message && <div className="mt-2 text-sm"><p>{message}</p></div>}
        </div>
      </div>
    </div>
  );
}

AlertBanner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
}; 