const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r p-5">
      <h2 className="text-2xl font-bold text-green-600 mb-8">🌱 EnviroChart</h2>

      <nav className="flex flex-col gap-2">
        <button className="text-left px-3 py-2 rounded-lg bg-green-100 text-green-700 font-medium">
          Dashboard
        </button>
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
          Analytics
        </button>
        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100">
          Settings
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
