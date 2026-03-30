const Sidebar = () => {
  return (
    <div className="w-64 h-min-screen bg-white dark:bg-gray-800 border-r p-5">
      <h2 className="text-2xl font-bold text-green-600 mb-8">🌱 EnviroChart</h2>

      <nav className="flex flex-col gap-2 bg-white dark:bg-gray-800 dark:text-gray-400">
        <button className="text-left px-3 py-2 rounded-lg bg-green-100 text-green-700 font-medium ">
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
