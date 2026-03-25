interface Props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Topbar = ({ darkMode, setDarkMode }: Props) => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-8 dark:bg-gray-800">
      <h1 className="text-lg font-semibold text-gray-500">
        EnviroChart Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <span className="text-sm text-gray-500">Bahry Jarbou</span>
        <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>
      </div>
    </div>
  );
};

export default Topbar;
