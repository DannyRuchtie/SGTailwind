import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Tooltip from './Tooltip';

export default function AvatarList({ avatars, max = 4 }) {
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - max;

  return (
    <div className="flex -space-x-2 overflow-hidden">
      {visibleAvatars.map((avatar, index) => (
        <Tooltip key={index} content={avatar.alt} position="top">
          <Avatar src={avatar.src} alt={avatar.alt} />
        </Tooltip>
      ))}
      {hiddenCount > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-800">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-300">+{hiddenCount}</span>
        </div>
      )}
    </div>
  );
}

AvatarList.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  max: PropTypes.number,
}; 