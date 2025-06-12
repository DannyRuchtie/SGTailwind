import PropTypes from 'prop-types';
import { Children } from 'react';

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-2.5 py-1.5 text-sm',
  lg: 'px-3 py-2 text-sm',
  xl: 'px-3.5 py-2.5 text-sm',
};

// Padding for icon-only buttons. Should match the vertical padding of the standard buttons.
const iconOnlySizeClasses = {
  xs: 'p-1', // Corresponds to py-1
  sm: 'p-1', // Corresponds to py-1
  md: 'p-1.5', // Corresponds to py-1.5
  lg: 'p-2', // Corresponds to py-2
  xl: 'p-2.5', // Corresponds to py-2.5
};

const iconSizeClasses = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-4.5',
  lg: 'size-5',
  xl: 'size-5',
};

const iconOnlyIconSizeClasses = {
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-4.5',
  xl: 'size-4.5',
};

const baseClasses = {
  primary: 'font-semibold -visible:outline-2 focus-visible:outline-offset-2',
  secondary: 'font-semibold ',
  tertiary: 'font-semibold',
  danger: 'font-semibold  focus-visible:outline-2 focus-visible:outline-offset-2',
  success: 'font-semibold  focus-visible:outline-2 focus-visible:outline-offset-2',
  warning: 'font-semibold  focus-visible:outline-2 focus-visible:outline-offset-2',
  ghost: 'font-semibold',
  link: 'font-semibold underline-offset-4 hover:underline',
};

const variantClasses = {
  primary: 'bg-SG-buttons-cta-primary text-white hover:bg-SG-buttons-cta-hover focus-visible:outline-SG-buttons-cta-primary',
  secondary: 'bg-SG-bg-content text-SG-text-primary ring-1 ring-SG-stroke ring-inset hover:bg-SG-bg-content-secondary',
  tertiary: 'text-SG-text-primary hover:bg-SG-bg-content-secondary',
  danger: 'bg-SG-state-error text-white hover:bg-SG-state-error-hover focus-visible:outline-SG-state-error',
  success: 'bg-SG-state-success text-white hover:bg-SG-state-success-hover focus-visible:outline-SG-state-success',
  warning: 'bg-SG-state-warning text-white hover:bg-SG-state-warning-hover focus-visible:outline-SG-state-warning',
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
  const isIconOnly = icon && Children.count(children) === 0;

  const roundedClass = size === 'xs' || size === 'sm' ? 'rounded-sm' : 'rounded-md';
  const withIconClass = icon ? `inline-flex items-center ${isIconOnly ? 'justify-center' : 'gap-x-1.5'}` : '';
  const currentIconSize = isIconOnly ? iconOnlyIconSizeClasses[size] : iconSizeClasses[size];
  const iconClass = icon ? `${currentIconSize} ${!isIconOnly && (iconPosition === 'left' ? '-ml-0.5' : '-mr-0.5')}` : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const sizeClass = variant === 'link' ? '' : (isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size]);

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
  children: PropTypes.node,
  className: PropTypes.string,
}; 