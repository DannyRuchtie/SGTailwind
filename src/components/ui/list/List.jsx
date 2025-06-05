import PropTypes from 'prop-types';

export default function List({ 
  header,
  items,
  renderItem,
  className = '',
  listClassName = '',
}) {
  return (
    <div className={`bg-SG-bg-content md:rounded-lg flex flex-col ${className}`}>
      {header && (
        <div className="px-6 py-4 border-b border-SG-stroke">
          {header}
        </div>
      )}
      
      <div className={`overflow-y-auto ${listClassName}`}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

List.propTypes = {
  header: PropTypes.node,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  listClassName: PropTypes.string,
}; 