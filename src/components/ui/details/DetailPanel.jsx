import PropTypes from 'prop-types';

export default function DetailPanel({ 
  title,
  subtitle,
  actions,
  children,
  className = '',
}) {
  return (
    <div className={`bg-SG-bg-base50 p-4 rounded-lg ${className}`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="font-medium text-SG-text-primary">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-SG-text-muted mt-1">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className="space-y-4">
        {children}
      </div>

      {actions && (
        <div className="mt-4 flex justify-end gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}

DetailPanel.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}; 