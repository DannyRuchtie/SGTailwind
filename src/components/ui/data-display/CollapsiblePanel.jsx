import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function CollapsiblePanel({ 
  title, 
  children,
  defaultExpanded = true,
  className = '' 
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`bg-SG-slate-1 ${className}  rounded-md rounded-b-md overflow-hidden `}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-SG-bg-base100/50 transition-colors overflow-hidden"
      >
        <span className="text-sm font-medium text-SG-text-primary overflow-hidden">{title}</span>
        {isExpanded ? (
          <ChevronUpIcon className="h-4 w-4 text-gray-500  overflow-hidden" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 text-gray-500 overflow-hidden" />
        )}
      </button>
      
      {isExpanded && (
        <div className="bg-SG-bg-content divide-y divide-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

CollapsiblePanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  className: PropTypes.string,
}; 