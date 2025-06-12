import PropTypes from 'prop-types';
import { InboxIcon } from '@heroicons/react/24/outline';

export default function ListEmptyState({ message, icon: Icon = InboxIcon }) {
  return (
    <div className="text-center py-12 px-6">
      <Icon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-SG-text-primary">No items</h3>
      <p className="mt-1 text-sm text-SG-text-muted">{message}</p>
    </div>
  );
}

ListEmptyState.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
}; 