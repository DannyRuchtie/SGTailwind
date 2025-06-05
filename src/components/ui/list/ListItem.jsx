import PropTypes from 'prop-types';

export default function ListItem({ 
  leading, // Leading element (icon, image, etc.)
  title,
  subtitle,
  trailing, // Trailing element (icon, button, etc.)
  isSelected,
  onClick,
  className = '',
}) {
  return (
    <div 
      onClick={onClick}
      className={`
        px-6 py-3 border-b border-gray-100 cursor-pointer 
        hover:bg-SG-bg-content-secondary transition-colors
        ${isSelected ? 'bg-SG-bg-content-secondary border-l-4 border-l-SG-brand-amethyst pl-5' : ''}
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        {leading && (
          <div className="flex-shrink-0">
            {leading}
          </div>
        )}
        <div className="flex-grow min-w-0">
          <div className="text-gray-900 text-sm truncate">{title}</div>
          {subtitle && (
            <p className="text-gray-500 text-xs mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
        {trailing && (
          <div className="flex-shrink-0">
            {trailing}
          </div>
        )}
      </div>
    </div>
  );
}

ListItem.propTypes = {
  leading: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  trailing: PropTypes.node,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
}; 