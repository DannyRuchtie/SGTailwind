import PropTypes from 'prop-types';
import Accordion from '../../ui/data-display/Accordion';
import LabelValue from '../../ui/data-display/LabelValue';

export default function WorkerDetailsSection({ 
  title,
  items,
  defaultExpanded = true,
  className = ''
}) {
  return (
    <Accordion 
      title={title}
      defaultExpanded={defaultExpanded}
      className={className}
    >
      <div>
        {items.map(({ label, value }, index) => (
          <LabelValue
            key={index}
            label={label}
            value={value}
            className={index === items.length - 1 ? 'border-b-0' : ''}
          />
        ))}
      </div>
    </Accordion>
  );
}

WorkerDetailsSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultExpanded: PropTypes.bool,
  className: PropTypes.string,
}; 