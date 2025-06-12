import PropTypes from 'prop-types';

export default function Avatar({ src, alt, size = 'md' }) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20',
  };

  return (
    <img
      className={`inline-block rounded-full ring-2 ring-white dark:ring-gray-800 ${sizeClasses[size]}`}
      src={src || `https://ui-avatars.com/api/?name=${alt}&color=7F9CF5&background=EBF4FF`}
      alt={alt}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}; 