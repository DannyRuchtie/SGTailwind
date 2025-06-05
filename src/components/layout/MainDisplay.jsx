import PropTypes from 'prop-types';

export default function MainDisplay() {
  return (
    <main className="bg-white p-6 rounded-lg max-h-[calc(100vh-11rem)] min-h-[calc(100vh-11rem)]">
      <h2 className="text-xl font-semibold text-SG-text-primary mb-4">Main Content Area</h2>
      <p className="text-SG-text-muted">This is the main display area. Its content will be structured by specific components rather than internal column logic.</p>
      {/* Content for MainDisplay goes here */}
    </main>
  );
}

MainDisplay.propTypes = {
  // columnLayout prop type removed
}; 