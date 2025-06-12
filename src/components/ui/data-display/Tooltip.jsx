import PropTypes from 'prop-types';

export default function Tooltip({ content, children, position = 'top' }) {
  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  return (
    <div className="group relative inline-block">
      {children}
      <div
        className={`absolute z-10 w-max max-w-xs scale-0 transform rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100 ${positionClasses[position]}`}
      >
        <span className="inline-block">{content}</span>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
}; 