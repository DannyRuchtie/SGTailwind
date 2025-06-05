import PropTypes from 'prop-types';
import Button from '../Button';

export default function ListFooterCTA({ icon: Icon, label, onClick }) {
  return (
    <div className="p-4 border-t border-SG-stroke">
      <Button
        variant="primary"
        size="md"
        icon={Icon}
        onClick={onClick}
        className="w-full"
      >
        {label}
      </Button>
    </div>
  );
}

ListFooterCTA.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}; 