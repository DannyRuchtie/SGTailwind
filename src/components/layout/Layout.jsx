import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '../navigation/Navbar.jsx';
import Tabs from '../navigation/Tabs.jsx';
import Sidebar from './Sidebar';
import MainDisplay from './MainDisplay';
import InfoPanel from './InfoPanel';
import SlideOverPanel from '../navigation/SlideOverPanel.jsx';
import NotificationPanel from '../navigation/NotificationPanel.jsx';
import UIDemo from '../pages/UIDemo';
import PropTypes from 'prop-types';

const TABS_CONFIG = [
  { id: 'focus', label: 'Focus View', path: '/focus' },
  { id: 'standard', label: 'Standard View', path: '/' },
  { id: 'expanded', label: 'Expanded View', path: '/expanded' },
];

const MOBILE_VIEWS = {
  SIDEBAR: 'SIDEBAR',
  MAIN: 'MAIN',
  INFO: 'INFO'
};

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [mobileView, setMobileView] = useState(MOBILE_VIEWS.SIDEBAR);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Determine active tab based on current path
  const activeTab = location.pathname === '/' ? 'standard' : location.pathname.slice(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tabId) => {
    const tab = TABS_CONFIG.find(t => t.id === tabId);
    if (tab) {
      navigate(tab.path);
    }
  };

  const handleWorkerSelect = (worker) => {
    setSelectedWorker(worker);
    if (isMobile) {
      setMobileView(MOBILE_VIEWS.MAIN);
    }
  };

  const handleBackClick = () => {
    if (mobileView === MOBILE_VIEWS.INFO) {
      setMobileView(MOBILE_VIEWS.MAIN);
    } else if (mobileView === MOBILE_VIEWS.MAIN) {
      setMobileView(MOBILE_VIEWS.SIDEBAR);
    }
  };

  const renderBackButton = () => {
    if (!isMobile || mobileView === MOBILE_VIEWS.SIDEBAR) return null;

    return (
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 p-4 text-SG-text-primary hover:text-SG-text-muted transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5" />
        <span>Back</span>
      </button>
    );
  };

  const renderMobileContent = () => {
    switch (mobileView) {
      case MOBILE_VIEWS.SIDEBAR:
        return (
          <div className="col-span-12">
            <Sidebar onWorkerSelect={handleWorkerSelect} />
          </div>
        );
      case MOBILE_VIEWS.MAIN:
        return (
          <div className="col-span-12">
            {renderBackButton()}
            <MainDisplay selectedWorker={selectedWorker} onInfoClick={() => setMobileView(MOBILE_VIEWS.INFO)} />
          </div>
        );
      case MOBILE_VIEWS.INFO:
        return (
          <div className="col-span-12">
            {renderBackButton()}
            <InfoPanel selectedWorker={selectedWorker} />
          </div>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    if (location.pathname === '/dashboard') {
      return <Outlet />;
    }

    // Extract view from path
    const view = location.pathname === '/' ? 'standard' : location.pathname.slice(1);
    return <UIDemo view={view} />;
  };

  return (
    <div className="min-h-screen bg-SG-bg-base100 dark:bg-SG-bg-base900 transition-colors duration-200">
      <Navbar 
        setIsSlideOverOpen={setIsSlideOverOpen} 
        setIsNotificationPanelOpen={setIsNotificationPanelOpen}
      />
      {location.pathname !== '/dashboard' && (
        <Tabs 
          tabs={TABS_CONFIG} 
          activeTab={activeTab} 
          setActiveTab={handleTabChange} 
        />
      )}
      
      <SlideOverPanel open={isSlideOverOpen} setOpen={setIsSlideOverOpen} />
      <NotificationPanel isOpen={isNotificationPanelOpen} setIsOpen={setIsNotificationPanelOpen} />

      <div className="flex-grow container max-w-screen-2xl mx-auto md:p-4 lg:p-8 flex flex-col">
        <div className="grid grid-cols-12 md:gap-6 flex-grow">
          {isMobile ? renderMobileContent() : renderContent()}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  view: PropTypes.oneOf(['focus', 'standard', 'expanded']),
}; 