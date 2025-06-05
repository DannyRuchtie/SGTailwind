'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import MainDisplay from './MainDisplay';
import Sidebar from './Sidebar';
import InfoPanel from './InfoPanel';
import Tabs from './Tabs';
import SlideOverPanel from './SlideOverPanel';
import NotificationPanel from './NotificationPanel';

const TABS_CONFIG = [
  { id: 'expanded', name: 'Expanded View' },
  { id: 'standard', name: 'Standard View' },
  { id: 'focus', name: 'Focus View' },
];

export default function Layout() {
  const [activeTab, setActiveTab] = useState(TABS_CONFIG[1].id);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  // Simplified diagnostic log in Layout.jsx
  console.error("LAYOUT_DEBUG: typeof setIsSlideOverOpen:", typeof setIsSlideOverOpen);
  console.error("LAYOUT_DEBUG: typeof setIsNotificationPanelOpen:", typeof setIsNotificationPanelOpen);

  const renderMainContent = () => {
    switch (activeTab) {
      case 'focus':
        return (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <MainDisplay />
            </div>
          </div>
        );
      case 'standard':
        return (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <Sidebar />
            </div>
            <div className="col-span-9">
              <MainDisplay />
            </div>
          </div>
        );
      case 'expanded':
        return (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <Sidebar />
            </div>
            <div className="col-span-6">
              <MainDisplay />
            </div>
            <div className="col-span-3">
              <InfoPanel />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-SG-background-canvas flex flex-col">
      <Navbar 
        setIsSlideOverOpen={setIsSlideOverOpen} 
        setIsNotificationPanelOpen={setIsNotificationPanelOpen} // Pass directly
      />
      <SlideOverPanel isOpen={isSlideOverOpen} setIsOpen={setIsSlideOverOpen} />
      <NotificationPanel isOpen={isNotificationPanelOpen} setIsOpen={setIsNotificationPanelOpen} />
      <div className="p-4 sm:p-6 lg:p-8 flex-grow">
        <Tabs tabs={TABS_CONFIG} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
} 