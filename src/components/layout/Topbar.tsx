const Topbar = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-8">
      <h1 className="text-lg font-semibold text-gray-700">
        EnviroChart Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Bahry Jarbou</span>
        <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>
      </div>
    </div>
  );
};

export default Topbar;
