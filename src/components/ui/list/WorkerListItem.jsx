import PropTypes from 'prop-types';

export default function WorkerListItem({ name, company, country, isSelected, onClick }) {
  return (
    <li 
      onClick={onClick}
      className={`px-6 py-3 border-b border-SG-stroke cursor-pointer hover:bg-SG-bg-content-secondary transition-colors ${
        isSelected ? 'bg-SG-bg-content-secondary border-l-4 border-l-SG-buttons-cta-primary pl-5' : 'border-l-4 border-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <img 
          src={`https://flagcdn.com/24x18/${country.toLowerCase()}.png`}
          alt={`${country} flag`}
          className="w-6 h-4 object-cover rounded-xs"
        />
        <div>
          <span className="text-SG-text-primary text-sm font-medium">{name}</span>
          <p className="text-SG-text-muted text-xs mt-0.5">{company}</p>
        </div>
      </div>
    </li>
  );
}

WorkerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}; 