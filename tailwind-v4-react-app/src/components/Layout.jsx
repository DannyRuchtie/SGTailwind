import Navbar from './Navbar';
import Tabs from './Tabs';
import Sidebar from './Sidebar';
import MainDisplay from './MainDisplay';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar />
      <Tabs />
      
      <div className="flex-grow container max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        <div className="grid grid-cols-12 gap-6 flex-grow">
          <div className="col-span-12 md:col-span-3 h-full">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-9 h-full">
            <MainDisplay />
          </div>
        </div>
      </div>
    </div>
  );
} 