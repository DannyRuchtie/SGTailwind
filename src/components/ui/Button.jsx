import PropTypes from 'prop-types';

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-2.5 py-1.5 text-sm',
  lg: 'px-3 py-2 text-sm',
  xl: 'px-3.5 py-2.5 text-sm',
};

const iconSizeClasses = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-4.5',
  lg: 'size-5',
  xl: 'size-5',
};

const baseClasses = {
  primary: 'font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  secondary: 'font-semibold shadow-xs',
  tertiary: 'font-semibold',
  danger: 'font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  success: 'font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  warning: 'font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2',
  ghost: 'font-semibold',
  link: 'font-semibold underline-offset-4 hover:underline',
};

const variantClasses = {
  primary: 'bg-SG-buttons-cta-primary text-white hover:bg-SG-buttons-cta-hover focus-visible:outline-SG-buttons-cta-primary',
  secondary: 'bg-SG-bg-content text-SG-text-primary ring-1 ring-SG-stroke ring-inset hover:bg-SG-bg-content-secondary',
  tertiary: 'text-SG-text-primary hover:bg-SG-bg-content-secondary',
  danger: 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600',
  success: 'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-400 focus-visible:outline-yellow-500',
  ghost: 'text-SG-text-primary hover:bg-SG-bg-content-secondary',
  link: 'text-SG-buttons-cta-primary hover:text-SG-buttons-cta-hover p-0',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  children,
  className = '',
  ...props
}) {
  const roundedClass = size === 'xs' || size === 'sm' ? 'rounded-sm' : 'rounded-md';
  const withIconClass = icon ? 'inline-flex items-center gap-x-1.5' : '';
  const iconClass = icon ? `${iconSizeClasses[size]} ${iconPosition === 'left' ? '-ml-0.5' : '-mr-0.5'}` : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const sizeClass = variant === 'link' ? '' : sizeClasses[size];

  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        ${baseClasses[variant]}
        ${variantClasses[variant]}
        ${sizeClass}
        ${roundedClass}
        ${withIconClass}
        ${disabledClass}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={iconClass}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={iconClass}>
          {icon}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'ghost', 'link']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 