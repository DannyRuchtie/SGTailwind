export default function Navbar() {
  return (
    <nav className="w-full bg-white  border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className=" text-gray-800">Safeguard Global</span>
            <span className="ml-4 text-gray-500">Invoice Tools</span>
          </div>
          <div className="flex items-center">
            {/* Placeholder for icons */}

            <div className="w-8 h-8 bg-gray-300 rounded-full ml-3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
} 