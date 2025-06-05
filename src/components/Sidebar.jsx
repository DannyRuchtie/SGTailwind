import SearchInput from './SearchInput';

export default function Sidebar() {
  return (
    <aside className="bg-white p-4 h-full rounded-lg shadow-sm">
      <div className="mb-4">
        <SearchInput 
          placeholder="Search worker..." 
        />
      </div>
      {/* Rest of the sidebar content can go here */}
    </aside>
  );
} 