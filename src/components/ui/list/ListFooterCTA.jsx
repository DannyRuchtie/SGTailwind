import PropTypes from 'prop-types';

export default function ListFooterCTA({ 
  icon,
  label,
  onClick,
  className = '',
}) {
  return (
    <div className={`
      sticky bottom-0 p-3
      ${className}
    `}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-2 bg-SG-buttons-cta-primary text-white px-2 py-2 rounded-md hover:bg-SG-buttons-cta-hover transition-colors"
      >
        {icon && (
          <span className="w-5 h-5">
            {icon}
          </span>
        )}
        <span className="font-medium">{label}</span>
      </button>
    </div>
  );
}

ListFooterCTA.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}; 