import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ crumbs }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={crumb.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              )}
              <Link
                to={crumb.href}
                className={`ml-2 text-sm font-medium ${
                  crumb.current ? 'text-gray-500' : 'text-gray-400 hover:text-gray-700'
                }`}
                aria-current={crumb.current ? 'page' : undefined}
              >
                {crumb.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      current: PropTypes.bool,
    })
  ).isRequired,
}; 