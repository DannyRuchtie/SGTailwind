import { useState } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../navigation/Navbar.jsx';
import Tabs from '../navigation/Tabs.jsx';
import SlideOverPanel from "../navigation/SlideOverPanel.jsx";
import NotificationPanel from "../navigation/NotificationPanel.jsx";

const TABS_CONFIG = [
  { id: 'focus', label: 'Focus View', path: '/workforce/focus' },
  { id: 'standard', label: 'Standard View', path: '/workforce' },
  { id: 'expanded', label: 'Expanded View', path: '/workforce/expanded' },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);

  const getActiveTab = () => {
    const path = location.pathname;
    // Find the most specific match first
    const sortedTabs = [...TABS_CONFIG].sort((a, b) => b.path.length - a.path.length);
    const tab = sortedTabs.find(t => path.startsWith(t.path));
    return tab ? tab.id : '';
  }

  const handleTabChange = (tabId) => {
    const tab = TABS_CONFIG.find(t => t.id === tabId);
    if (tab) {
      navigate(tab.path);
    }
  };

  const activeTab = getActiveTab();
  const isWorkforcePage = location.pathname.startsWith('/workforce');

  return (
    <div className="min-h-screen bg-SG-bg-base100 dark:bg-SG-bg-base900 transition-colors duration-200">
      <header className="sticky top-0 z-40">
        <Navbar 
          setIsSlideOverOpen={setIsSlideOverOpen} 
          setIsNotificationPanelOpen={setIsNotificationPanelOpen}
        />
        
        {isWorkforcePage && (
          <Tabs 
            tabs={TABS_CONFIG} 
            activeTab={activeTab} 
            setActiveTab={handleTabChange}
          />
        )}
      </header>
      
      <SlideOverPanel open={isSlideOverOpen} setOpen={setIsSlideOverOpen} />
      <NotificationPanel isOpen={isNotificationPanelOpen} setIsOpen={setIsNotificationPanelOpen} />

      <main className="flex-grow container max-w-screen-2xl mx-auto md:p-4 lg:p-8">
        <div className="grid grid-cols-12 md:gap-6 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
} 