import PropTypes from 'prop-types';

export default function InfoPanel() {
  return (
    <aside className="bg-white p-4 h-full rounded-lg ">
      <h3 className="text-lg font-semibold text-SG-text-primary mb-3">Information Panel</h3>
      <p className="text-sm text-SG-text-muted">This is the third column, the information panel.</p>
      {/* Additional content for the info panel can go here */}
    </aside>
  );
}

InfoPanel.propTypes = {
  // Define any props if needed in the future
}; 