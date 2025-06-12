import PropTypes from 'prop-types';
import { useState } from 'react';
import Tabs from '../../navigation/Tabs';

const LayoutBox = ({ children, className = '' }) => (
  <div className={`h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center ${className}`}>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{children}</span>
  </div>
);

LayoutBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const layoutOptions = [
  { id: 'standard', label: 'Standard (2-Column)' },
  { id: 'expanded', label: 'Expanded (3-Column)' },
  { id: 'focus', label: 'Focus (1-Column)' },
];

export default function MultiColumnLayoutShowcase() {
  const [activeLayout, setActiveLayout] = useState('standard');

  const renderLayout = () => {
    switch (activeLayout) {
      case 'focus':
        return (
          <div className="col-span-12">
            <LayoutBox>Full-Width Content</LayoutBox>
          </div>
        );
      case 'standard':
        return (
          <>
            <div className="col-span-12 md:col-span-3">
              <LayoutBox>Sidebar</LayoutBox>
            </div>
            <div className="col-span-12 md:col-span-9">
              <LayoutBox>Main Content</LayoutBox>
            </div>
          </>
        );
      case 'expanded':
        return (
          <>
            <div className="col-span-12 md:col-span-3">
              <LayoutBox>Sidebar</LayoutBox>
            </div>
            <div className="col-span-12 md:col-span-6">
              <LayoutBox>Main Content</LayoutBox>
            </div>
            <div className="col-span-12 md:col-span-3">
              <LayoutBox>Info Panel</LayoutBox>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <Tabs
          tabs={layoutOptions}
          activeTab={activeLayout}
          setActiveTab={setActiveLayout}
        />
      </div>
      <div className="grid grid-cols-12 gap-6">
        {renderLayout()}
      </div>
    </div>
  );
} 