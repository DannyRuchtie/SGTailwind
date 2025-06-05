import SearchInput from '../ui/SearchInput.jsx';

export default function Sidebar() {
  return (
    <aside className="bg-white p-6 h-full rounded-lg">
      <div className="mb-4">
        <SearchInput 
          placeholder="Search worker..." 
        />
      </div>
      {/* Rest of the sidebar content can go here */}
    </aside>
  );
} 