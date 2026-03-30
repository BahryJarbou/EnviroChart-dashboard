interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Topbar = ({ darkMode, setDarkMode }: Props) => {
  const user = localStorage.getItem("user");
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-8 dark:bg-gray-800">
      <h1 className="text-lg font-semibold text-gray-500">
        EnviroChart Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded"
        >
          Logout
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-400 dark:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <span className="text-sm text-gray-500">{user}</span>
        <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>
      </div>
    </div>
  );
};

const handleLogout = () => {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "/login";
};

export default Topbar;
