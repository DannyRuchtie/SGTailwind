import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '../navigation/Navbar.jsx';
import Tabs from '../navigation/Tabs.jsx';
import Sidebar from './Sidebar';
import MainDisplay from './MainDisplay';
import InfoPanel from './InfoPanel';
import SlideOverPanel from '../navigation/SlideOverPanel.jsx';
import NotificationPanel from '../navigation/NotificationPanel.jsx';

const TABS_CONFIG = [
  { id: 'focus-view', label: 'Focus View', path: '/focus' },
  { id: 'standard-view', label: 'Standard View', path: '/' },
  { id: 'expanded-view', label: 'Expanded View', path: '/expanded' },
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
  const activeTab = TABS_CONFIG.find(tab => tab.path === location.pathname)?.id || 'standard-view';

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
          <div className="col-span-12 h-full">
            <Sidebar 
              onWorkerSelect={handleWorkerSelect}
              selectedWorkerId={selectedWorker?.id}
            />
          </div>
        );
      case MOBILE_VIEWS.MAIN:
        return (
          <div className="col-span-12 h-full">
            {renderBackButton()}
            <MainDisplay 
              selectedWorker={selectedWorker} 
              onInfoClick={activeTab === 'expanded-view' ? () => setMobileView(MOBILE_VIEWS.INFO) : undefined}
            />
          </div>
        );
      case MOBILE_VIEWS.INFO:
        return (
          <div className="col-span-12 h-full">
            {renderBackButton()}
            <InfoPanel />
          </div>
        );
      default:
        return null;
    }
  };

  const renderDesktopContent = () => {
    if (activeTab === 'focus-view') {
      return (
        <div className="col-span-12 h-full">
          <MainDisplay selectedWorker={selectedWorker} />
        </div>
      );
    }

    if (activeTab === 'standard-view') {
      return (
        <>
          <div className="col-span-12 md:col-span-3 h-full">
            <Sidebar 
              onWorkerSelect={handleWorkerSelect}
              selectedWorkerId={selectedWorker?.id}
            />
          </div>
          <div className="col-span-12 md:col-span-9 h-full">
            <MainDisplay selectedWorker={selectedWorker} />
          </div>
        </>
      );
    }

    // Expanded view
    return (
      <>
        <div className="col-span-12 md:col-span-3 h-full">
          <Sidebar 
            onWorkerSelect={handleWorkerSelect}
            selectedWorkerId={selectedWorker?.id}
          />
        </div>
        <div className="col-span-12 md:col-span-6 h-full">
          <MainDisplay 
            selectedWorker={selectedWorker}
            onInfoClick={isMobile ? () => setMobileView(MOBILE_VIEWS.INFO) : undefined}
          />
        </div>
        <div className="col-span-12 md:col-span-3 h-full">
          <InfoPanel />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-SG-bg-base100 dark:bg-SG-bg-base900 transition-colors duration-200">
      <Navbar 
        setIsSlideOverOpen={setIsSlideOverOpen} 
        setIsNotificationPanelOpen={setIsNotificationPanelOpen}
      />
      <Tabs 
        tabs={TABS_CONFIG} 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
      />
      
      <SlideOverPanel open={isSlideOverOpen} setOpen={setIsSlideOverOpen} />
      <NotificationPanel isOpen={isNotificationPanelOpen} setIsOpen={setIsNotificationPanelOpen} />

      <div className="flex-grow container max-w-screen-2xl mx-auto md:p-4 lg:p-8 flex flex-col">
        <div className="grid grid-cols-12 md:gap-6 flex-grow">
          {isMobile ? renderMobileContent() : renderDesktopContent()}
        </div>
      </div>
    </div>
  );
} 